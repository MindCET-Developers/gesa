import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
import { assembleRegionalWinners, winnerIds, WINNER_FIELDS, SEMIFINAL_NAME, STARTUP_NAME, STARTUP_LOGO } from '../lib/content/regional-winners-data.ts';

const ids = ['rec00000000000001', 'rec00000000000002', 'rec00000000000003', 'rec00000000000004'];
const semi = (fields) => ({ id: 'region', fields: { [SEMIFINAL_NAME]: 'Actual semifinal name', ...fields } });
const startup = (id, name, logo) => ({ id, fields: { [STARTUP_NAME]: name, [STARTUP_LOGO]: logo } });

test('all three fields, ties and repeated links produce equal, alphabetically sorted winners', () => {
  const region = semi({ [WINNER_FIELDS[0]]: [ids[0], ids[1]], [WINNER_FIELDS[1]]: [ids[2], ids[0]], [WINNER_FIELDS[2]]: [ids[3]] });
  assert.equal(winnerIds(region).length, 4);
  const output = assembleRegionalWinners([region], ids.map((id, i) => startup(id, ['Zeta', 'Alpha', 'Gamma', 'Beta'][i])));
  assert.equal(output[0].name, 'Actual semifinal name');
  assert.deepEqual(output[0].winners.map((w) => w.name), ['Alpha', 'Beta', 'Gamma', 'Zeta']);
  assert.ok(output[0].winners.every((w) => !('place' in w) && !('rank' in w)));
});

test('empty regions, unresolved links and unnamed startups never become placeholder cards', () => {
  assert.deepEqual(assembleRegionalWinners([semi({}), semi({ [WINNER_FIELDS[2]]: ids })], [startup(ids[0], ' ')]), []);
  assert.deepEqual(winnerIds(semi({ [WINNER_FIELDS[0]]: [null, 'bad-id', 4] })), []);
});

test('missing or unsafe logos fall back, valid Airtable thumbnails are preferred', () => {
  const output = assembleRegionalWinners([semi({ [WINNER_FIELDS[1]]: ids })], [
    startup(ids[0], 'A'), startup(ids[1], 'B', [{ url: 'javascript:alert(1)' }]),
    startup(ids[2], 'C', [{ url: 'https://v5.airtableusercontent.com/full', thumbnails: { large: { url: 'https://v5.airtableusercontent.com/thumb' } } }]),
  ]);
  assert.deepEqual(output[0].winners.map((w) => w.logo), [undefined, undefined, 'https://v5.airtableusercontent.com/thumb']);
});

test('a startup can be recognized in separate semifinals without duplicates within either', () => {
  const region = semi({ [WINNER_FIELDS[0]]: [ids[0]], [WINNER_FIELDS[2]]: [ids[0]] });
  const output = assembleRegionalWinners([region, { ...region, id: 'another' }], [startup(ids[0], 'A')]);
  assert.deepEqual(output.map((r) => r.winners.length), [1, 1]);
});

test('API failure and missing credentials return no cards; public fetches remain cached and read-only', async () => {
  const encodeModule = (source) => `data:text/javascript;base64,${Buffer.from(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText).toString('base64')}`;
  const helper = encodeModule((await readFile(new URL('../lib/content/airtable-read.ts', import.meta.url), 'utf8')).replace('import "server-only";', ''));
  const data = encodeModule(await readFile(new URL('../lib/content/regional-winners-data.ts', import.meta.url), 'utf8'));
  const source = (await readFile(new URL('../lib/content/regional-winners.ts', import.meta.url), 'utf8'))
    .replace('import "server-only";', '').replace('"./airtable-read"', JSON.stringify(helper)).replace('"./regional-winners-data"', JSON.stringify(data));
  const { getRegionalWinners } = await import(encodeModule(source));
  const originalFetch = globalThis.fetch;
  const originalKey = process.env.AIRTABLE_API_KEY;
  let requests = 0;
  let request;
  globalThis.fetch = async (url, options) => {
    requests++;
    request = { url, options };
    return new Response('', { status: 503 });
  };
  try {
    delete process.env.AIRTABLE_API_KEY;
    assert.deepEqual(await getRegionalWinners(), []);
    assert.equal(requests, 0);
    process.env.AIRTABLE_API_KEY = 'test-only';
    assert.deepEqual(await getRegionalWinners(), []);
    assert.equal(requests, 1);
    assert.equal(request.options.method, undefined); // fetch defaults to GET
    assert.equal(request.options.next.revalidate, 300);
    assert.equal(request.url.searchParams.get('view'), 'viwAO4gA7Bf1RjJCT');
  } finally {
    globalThis.fetch = originalFetch;
    if (originalKey === undefined) delete process.env.AIRTABLE_API_KEY;
    else process.env.AIRTABLE_API_KEY = originalKey;
  }
});

test('websites are normalized to safe http(s) links, country labels are cleaned', async () => {
  const { websiteUrl, countryLabel } = await import('../lib/content/regional-winners-data.ts');
  assert.equal(websiteUrl('www.themarkingapp.co.za'), 'https://www.themarkingapp.co.za/');
  assert.equal(websiteUrl('https://x.io/en'), 'https://x.io/en');
  assert.equal(websiteUrl('javascript:alert(1)'), undefined);
  assert.equal(websiteUrl('n/a'), undefined);
  assert.equal(countryLabel('USA - Tennessee '), 'USA');
  assert.equal(countryLabel('United Kingdom (UK)'), 'United Kingdom');
});
