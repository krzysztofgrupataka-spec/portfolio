from pathlib import Path
import sys,subprocess,json
sys.path.insert(0,str(Path('.video-tools').resolve()))
import imageio_ffmpeg
ff=imageio_ffmpeg.get_ffmpeg_exe()
files=[Path('D:/dev/fabb/portfolio/filmy/desktop')/n for n in ['video-57719257-6097781e7193b1b242e31070608423ff.webm', 'video-57721218-d1dd8b24f51f3ce139dee29f02bc34dd.webm', 'video-57721264-b06b9ec1b64b1a18ec8035ffe6be200d.webm', 'video-57720927-5621ddeefa30a74911b2096b80644f29.webm', 'materialyDopobrania.webm', 'dlaPartnerow.webm']]
clips=[(0,2.3,6.4,1.2),(1,5.2,8.8,1.2),(2,3.0,6.3,1.1),(3,4.9,8.6,1.2),(4,4.1,7.4,1.1),(5,7.4,11.3,1.2)]
args=[ff,'-y','-hide_banner','-loglevel','warning']
for idx,start,end,speed in clips: args+=['-i',str(files[idx])]
filters=[]
durations=[]
for n,(idx,start,end,speed) in enumerate(clips):
 durations.append((end-start)/speed)
 filters.append(f'[{n}:v]trim=start={start}:end={end},setpts=(PTS-STARTPTS)/{speed},crop=1280:616:0:44,fps=30,format=yuv420p,settb=AVTB[v{n}]')
total=durations[0]; prev='v0'
for n in range(1,len(clips)):
 offset=total-.22
 filters.append(f'[{prev}][v{n}]xfade=transition=slideup:duration=0.22:offset={offset:.6f}[x{n}]')
 total+=durations[n]-.22; prev=f'x{n}'
filters.append(f'[{prev}]fade=t=in:st=0:d=0.25,fade=t=out:st={total-.4:.6f}:d=0.4[out]')
args+=['-filter_complex',';'.join(filters),'-map','[out]','-an','-c:v','libx264','-pix_fmt','yuv420p','-preset','medium','-crf','20','-movflags','+faststart','video-edit/FABB-portfolio-desktop-v3.mp4']
Path('video-edit/edit-plan-v3.json').write_text(json.dumps({'clips':[{'file':str(files[i]),'start':s,'end':e,'speed':v} for i,s,e,v in clips],'duration':total,'crop':'1280:616:0:44','transition':'slideup','transition_duration':.22},indent=2),encoding='utf8')
subprocess.run(args,check=True)

