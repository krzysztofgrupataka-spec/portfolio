from pathlib import Path
import subprocess,sys
sys.path.insert(0,str(Path('.video-tools').resolve()))
import imageio_ffmpeg
from PIL import Image,ImageDraw
ff=imageio_ffmpeg.get_ffmpeg_exe()
files=list(Path(r'D:\dev\fabb\portfolio\filmy\desktop').glob('*.webm'))
sheet=Image.new('RGB',(1280,5*205),'#222222'); draw=ImageDraw.Draw(sheet)
for i,f in enumerate(files):
 for j,t in enumerate([1,4,8,12]):
  p=Path('video-edit')/f'frame-{i}-{j}.png'
  subprocess.run([ff,'-y','-loglevel','error','-ss',str(t),'-i',str(f),'-frames:v','1','-vf','scale=320:180',str(p)],capture_output=True)
  if p.exists(): sheet.paste(Image.open(p),(j*320,i*205+25))
 draw.text((5,i*205+5),f'{i+1}: {f.name}',fill='white')
sheet.save('video-edit/contact-sheet.jpg')
