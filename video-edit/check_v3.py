exec(open('video-edit/contact_sheet.py',encoding='utf-8-sig').read().split('sheet=')[0])
plan=json.loads(Path('video-edit/edit-plan-v2.json').read_text()) if False else None
sheet=Image.new('RGB',(1280,690),'#222222');d=ImageDraw.Draw(sheet)
for k,t in enumerate([.4,3.1,3.3,5.9,6.15,8.8,9.1,11.8,12.1,14.6,15,17.2]):
 p=Path('video-edit/check.png')
 subprocess.run([ff,'-y','-loglevel','error','-ss',str(t),'-i','video-edit/FABB-portfolio-desktop-v3.mp4','-frames:v','1','-vf','scale=320:-1',str(p)],capture_output=True)
 sheet.paste(Image.open(p),((k%4)*320,(k//4)*230+20));d.text(((k%4)*320+3,(k//4)*230+2),str(t),fill='white')
sheet.save('video-edit/check-v3.jpg')
r=subprocess.run([ff,'-hide_banner','-i','video-edit/FABB-portfolio-desktop-v3.mp4','-f','null','-'],capture_output=True,text=True)
print(r.stderr[-600:]);print('Decode exit:',r.returncode)

