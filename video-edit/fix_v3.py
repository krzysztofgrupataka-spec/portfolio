from pathlib import Path
p=Path('video-edit/montage-v3.py')
s=p.read_text(encoding='utf-8-sig').splitlines()
names=['video-57719257-6097781e7193b1b242e31070608423ff.webm','video-57721218-d1dd8b24f51f3ce139dee29f02bc34dd.webm','video-57721264-b06b9ec1b64b1a18ec8035ffe6be200d.webm','video-57720927-5621ddeefa30a74911b2096b80644f29.webm','materialyDopobrania.webm','dlaPartnerow.webm']
s=["files=[Path('D:/dev/fabb/portfolio/filmy/desktop')/n for n in "+repr(names)+"]" if line.startswith('files=') else line for line in s]
p.write_text('\n'.join(s),encoding='utf8')
