from pathlib import Path
p=Path('video-edit/montage-v2.py').read_text(encoding='utf-8-sig')
p=p.replace("files=list(Path(r'D:\dev\fabb\portfolio\filmy\desktop').glob('*.webm'))", "root=Path(r'D:\dev\fabb\portfolio\filmy\desktop')\nfiles=[root/n for n in ['video-57719257-6097781e7193b1b242e31070608423ff.webm','video-57721218-d1dd8b24f51f3ce139dee29f02bc34dd.webm','video-57721264-b06b9ec1b64b1a18ec8035ffe6be200d.webm','video-57720927-5621ddeefa30a74911b2096b80644f29.webm','materialyDopobrania.webm','dlaPartnerow.webm']]")
p=p.replace('clips=[(0,2.1,10.7,1.25),(2,4.2,10.8,1.3),(3,2.7,8.8,1.2),(1,3.25,12.3,1.45)]','clips=[(0,2.3,6.4,1.2),(1,5.2,8.8,1.2),(2,3.0,6.3,1.1),(3,4.9,8.6,1.2),(4,4.1,7.4,1.1),(5,7.4,11.3,1.2)]')
p=p.replace('range(1,4)','range(1,len(clips))').replace('total-.28','total-.22').replace('duration=0.28','duration=0.22').replace('durations[n]-.28','durations[n]-.22').replace("'transition_duration':.28","'transition_duration':.22").replace('desktop-v2.mp4','desktop-v3.mp4').replace('plan-v2.json','plan-v3.json')
Path('video-edit/montage-v3.py').write_text(p,encoding='utf8')
