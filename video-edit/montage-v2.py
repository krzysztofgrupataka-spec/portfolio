from pathlib import Path
import sys,subprocess,json
sys.path.insert(0,str(Path('.video-tools').resolve()))
import imageio_ffmpeg
ff=imageio_ffmpeg.get_ffmpeg_exe()
files=list(Path(r'D:\dev\fabb\portfolio\filmy\desktop').glob('*.webm'))
clips=[(0,2.1,10.7,1.25),(2,4.2,10.8,1.3),(3,2.7,8.8,1.2),(1,3.25,12.3,1.45)]
args=[ff,'-y','-hide_banner','-loglevel','warning']
for idx,start,end,speed in clips: args+=['-i',str(files[idx])]
filters=[]
durations=[]
for n,(idx,start,end,speed) in enumerate(clips):
 durations.append((end-start)/speed)
 filters.append(f'[{n}:v]trim=start={start}:end={end},setpts=(PTS-STARTPTS)/{speed},crop=1280:616:0:44,fps=30,format=yuv420p,settb=AVTB[v{n}]')
total=durations[0]; prev='v0'
for n in range(1,4):
 offset=total-.28
 filters.append(f'[{prev}][v{n}]xfade=transition=slideup:duration=0.28:offset={offset:.6f}[x{n}]')
 total+=durations[n]-.28; prev=f'x{n}'
filters.append(f'[{prev}]fade=t=in:st=0:d=0.25,fade=t=out:st={total-.4:.6f}:d=0.4[out]')
args+=['-filter_complex',';'.join(filters),'-map','[out]','-an','-c:v','libx264','-pix_fmt','yuv420p','-preset','medium','-crf','20','-movflags','+faststart','video-edit/FABB-portfolio-desktop-v2.mp4']
Path('video-edit/edit-plan-v2.json').write_text(json.dumps({'clips':[{'file':str(files[i]),'start':s,'end':e,'speed':v} for i,s,e,v in clips],'duration':total,'crop':'1280:616:0:44','transition':'slideup','transition_duration':.28},indent=2),encoding='utf8')
subprocess.run(args,check=True)


