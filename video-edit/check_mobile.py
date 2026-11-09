exec(open('video-edit/inspect_mobile.py',encoding='utf-8-sig').read().split('for i,f')[0])
sheet=Image.new('RGB',(1000,850),'#222');d=ImageDraw.Draw(sheet)
for k,t in enumerate([.4,2.8,3.1,5.6,5.9,8.3,8.6,11.1,11.4,13.4]):
 p=Path('video-edit/mcheck.png')
 subprocess.run([ff,'-y','-loglevel','error','-ss',str(t),'-i','video-edit/FABB-portfolio-mobile-v1.mp4','-frames:v','1','-vf','scale=200:-1',str(p)],capture_output=True)
 sheet.paste(Image.open(p),((k%5)*200,(k//5)*425+20));d.text(((k%5)*200+3,(k//5)*425+2),str(t),fill='white')
sheet.save('video-edit/check-mobile.jpg')
r=subprocess.run([ff,'-hide_banner','-i','video-edit/FABB-portfolio-mobile-v1.mp4','-f','null','-'],capture_output=True,text=True)
print(r.stderr[-650:]);print('Decode exit:',r.returncode)
