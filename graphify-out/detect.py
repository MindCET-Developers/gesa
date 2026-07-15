import json
from graphify.detect import detect
from pathlib import Path

result = detect(Path('.'))
Path('graphify-out/.graphify_detect.json').write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')

# Summary
code_count = len(result['files'].get('code', []))
doc_count = len(result['files'].get('document', []))
paper_count = len(result['files'].get('paper', []))
image_count = len(result['files'].get('image', []))
video_count = len(result['files'].get('video', []))

categories = []
if code_count > 0: categories.append(f'code: {code_count} files')
if doc_count > 0: categories.append(f'docs: {doc_count} files')
if paper_count > 0: categories.append(f'papers: {paper_count} files')
if image_count > 0: categories.append(f'images: {image_count} files')
if video_count > 0: categories.append(f'video: {video_count} files')

print(f'Corpus: {result["total_files"]} files · ~{result["total_words"]:,} words')
if categories:
    print('  ' + ', '.join(categories))
