from pathlib import Path
import sys,subprocess
from PIL import Image,ImageDraw
sys.path.insert(0,str(Path('.video-tools').resolve()))
import imageio_ffmpeg
ff=imageio_ffmpeg.get_ffmpeg_exe()
for name in ['dlaPartnerow','materialyDopobrania']:
 f=Path(r'D:\dev\fabb\portfolio\filmy\desktop')/(name+'.webm')
 r=subprocess.run([ff,'-hide_banner','-i',str(f)],capture_output=True,text=True)
 print(name, r.stderr[:1400])
 sheet=Image.new('RGB',(1280,1000),'#222');d=ImageDraw.Draw(sheet)
 for k in range(20):
  t=k*.8;p=Path('video-edit/new-sample.png')
  if p.exists():p.unlink()
  subprocess.run([ff,'-y','-loglevel','error','-ss',str(t),'-i',str(f),'-frames:v','1','-vf','scale=320:180',str(p)],capture_output=True)
  if p.exists():sheet.paste(Image.open(p),((k%4)*320,(k//4)*200+20))
  d.text(((k%4)*320+3,(k//4)*200+2),str(round(t,1)),fill='white')
 sheet.save(f'video-edit/{name}-timeline.jpg')
