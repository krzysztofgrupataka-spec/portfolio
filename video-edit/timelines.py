exec(open('video-edit/contact_sheet.py',encoding='utf-8-sig').read().split('sheet=')[0])
for idx in [0,1,2,3]:
 sheet=Image.new('RGB',(1280,6*200),'#222222'); d=ImageDraw.Draw(sheet)
 for k in range(24):
  t=k*.6
  p=Path('video-edit')/'sample.png'
  r=subprocess.run([ff,'-y','-loglevel','error','-ss',str(t),'-i',str(files[idx]),'-frames:v','1','-vf','scale=320:180',str(p)],capture_output=True)
  if p.exists():sheet.paste(Image.open(p),((k%4)*320,(k//4)*200+20))
  d.text(((k%4)*320+4,(k//4)*200+2),f'{t:.1f}s',fill='white')
 sheet.save(f'video-edit/timeline-{idx}.jpg')
