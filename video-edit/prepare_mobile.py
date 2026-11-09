from pathlib import Path
p=Path('video-edit/montage-v3.py').read_text(encoding='utf8').splitlines()
result=[]
for line in p:
 if line.startswith('files='):line="files=sorted(Path('D:/dev/fabb/portfolio/filmy/mobile').glob('*.webm'))"
 if line.startswith('clips='):line='clips=[(0,.4,3.9,1.15),(1,5.1,8.1,1.05),(1,10.4,13.8,1.15),(2,3.4,6.8,1.15),(0,11.7,15.0,1.15)]'
 line=line.replace('crop=1280:616:0:44','crop=332:640:474:0,scale=664:1280:flags=lanczos,setsar=1').replace("'1280:616:0:44'","'332:640:474:0'").replace('FABB-portfolio-desktop-v3.mp4','FABB-portfolio-mobile-v1.mp4').replace('edit-plan-v3.json','edit-plan-mobile-v1.json')
 result.append(line)
Path('video-edit/montage-mobile.py').write_text('\n'.join(result),encoding='utf8')
