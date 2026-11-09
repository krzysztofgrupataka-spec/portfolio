from pathlib import Path
import sys,subprocess
from PIL import Image,ImageDraw
sys.path.insert(0,str(Path('.video-tools').resolve()))
import imageio_ffmpeg
ff=imageio_ffmpeg.get_ffmpeg_exe()
files=sorted(Path('D:/dev/fabb/portfolio/filmy/mobile').glob('*.webm'))
for i,f in enumerate(files):
 r=subprocess.run([ff,'-hide_banner','-i',str(f)],capture_output=True,text=True);print(i,f.name,r.stderr[:1100])
 sheet=Image.new('RGB',(1280,1000),'#222');d=ImageDraw.Draw(sheet)
 for k in range(16):
  t=k*1.3;p=Path('video-edit/mobile-sample.png')
  if p.exists():p.unlink()
  subprocess.run([ff,'-y','-loglevel','error','-ss',str(t),'-i',str(f),'-frames:v','1','-vf','scale=320:225:force_original_aspect_ratio=decrease',str(p)],capture_output=True)
  if p.exists():sheet.paste(Image.open(p),((k%4)*320,(k//4)*250+20))
  d.text(((k%4)*320+3,(k//4)*250+2),str(round(t,1)),fill='white')
 sheet.save(f'video-edit/mobile-{i}.jpg')
 subprocess.run([ff,'-y','-loglevel','error','-ss','3','-i',str(f),'-frames:v','1',f'video-edit/mobile-full-{i}.png'],capture_output=True)
