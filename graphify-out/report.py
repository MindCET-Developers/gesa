import json
from pathlib import Path
from graphify.build import build_from_json
from graphify.cluster import score_all
from graphify.analyze import god_nodes, surprising_connections, suggest_questions
from graphify.report import generate

# Load existing graph data
extraction = json.loads(Path('graphify-out/.graphify_extract.json').read_text(encoding="utf-8")) if Path('graphify-out/.graphify_extract.json').exists() else {'nodes':[],'edges':[],'hyperedges':[],'input_tokens':0,'output_tokens':0}
detection = json.loads(Path('graphify-out/.graphify_detect.json').read_text(encoding="utf-8"))
analysis = json.loads(Path('graphify-out/.graphify_analysis.json').read_text(encoding="utf-8"))

# Load graph
G = build_from_json(extraction, root='.', directed=False)
communities = {int(k): v for k, v in analysis['communities'].items()}
cohesion = {int(k): v for k, v in analysis['cohesion'].items()}

# Auto-label communities based on node importance
labels = {}
for cid, nodes in communities.items():
    node_labels = []
    for nid in list(nodes)[:5]:
        for n in G.nodes(data=True):
            if n[0] == nid:
                label = n[1].get('label', str(nid))[:20]
                node_labels.append(label)
                break
    labels[cid] = ' / '.join(node_labels[:2]) if node_labels else f'Community {cid}'

# Generate report
questions = suggest_questions(G, communities, labels)
tokens = {'input': extraction.get('input_tokens', 0), 'output': extraction.get('output_tokens', 0)}
gods = god_nodes(G)
surprises = surprising_connections(G, communities)

report = generate(G, communities, cohesion, labels, gods, surprises, detection, tokens, '.', suggested_questions=questions)
Path('graphify-out/GRAPH_REPORT.md').write_text(report, encoding="utf-8")
Path('graphify-out/.graphify_labels.json').write_text(json.dumps({str(k): v for k, v in labels.items()}, ensure_ascii=False), encoding="utf-8")

print(f'✓ Report generated: {len(gods)} god nodes, {len(surprises)} surprising connections')
print(f'✓ {len(communities)} communities labeled')
