// Read-only live audit. Never prints credentials or private registration fields.
import nextEnv from '@next/env';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
import { assembleRegionalWinners, winnerIds, WINNER_FIELDS, SEMIFINAL_NAME, STARTUP_NAME, STARTUP_LOGO, STARTUP_COUNTRY } from '../lib/content/regional-winners-data.ts';

nextEnv.loadEnvConfig(process.cwd());
// Run the actual Next fetch helper outside Next; only remove its build-time server guard.
const source = (await readFile(new URL('../lib/content/airtable-read.ts', import.meta.url), 'utf8')).replace('import "server-only";', '');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { fetchAllRecords } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const key = process.env.AIRTABLE_API_KEY;
if (!key) throw new Error('AIRTABLE_API_KEY is missing');
const semis = await fetchAllRecords('tblAJHZRBQyfPOySc', key, [SEMIFINAL_NAME, ...WINNER_FIELDS], { view: 'viwAO4gA7Bf1RjJCT' });
const ids = [...new Set(semis.flatMap(winnerIds))].sort();
const startups = [];
for (let i = 0; i < ids.length; i += 100) {
  startups.push(...await fetchAllRecords('tblvXv2QLUDoMBs2Y', key, [STARTUP_NAME, STARTUP_LOGO, STARTUP_COUNTRY], {
    filterByFormula: `OR(${ids.slice(i, i + 100).map((id) => `RECORD_ID()='${id}'`).join(',')})`,
  }));
}
const regions = assembleRegionalWinners(semis, startups);
console.log(JSON.stringify({
  semifinalsInView: semis.length, regionsWithWinners: regions.length, uniqueStartups: ids.length,
  linkedCountsBySourceField: WINNER_FIELDS.map((field) => semis.reduce((n, s) => n + (s.fields[field]?.length ?? 0), 0)),
  multipleWinnerFields: semis.flatMap((s) => WINNER_FIELDS.filter((f) => s.fields[f]?.length > 1).map((f) => ({ region: s.fields[SEMIFINAL_NAME], count: s.fields[f].length }))),
  unresolvedOrUnnamed: ids.filter((id) => !startups.some((s) => s.id === id && s.fields[STARTUP_NAME]?.trim())),
  regions: regions.map((r) => ({ name: r.name, winners: r.winners.map((w) => ({ name: w.name, hasLogo: Boolean(w.logo), country: w.country ?? null })) })),
}, null, 2));
