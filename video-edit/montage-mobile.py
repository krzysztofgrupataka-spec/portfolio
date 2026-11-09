from pathlib import Path
import sys,subprocess,json
sys.path.insert(0,str(Path('.video-tools').resolve()))
import imageio_ffmpeg
ff=imageio_ffmpeg.get_ffmpeg_exe()
files=sorted(Path('D:/dev/fabb/portfolio/filmy/mobile').glob('*.webm'))
clips=[(0,.4,3.9,1.15),(1,5.1,8.1,1.05),(1,10.4,13.8,1.15),(2,3.4,6.8,1.15),(0,11.7,15.0,1.15)]
args=[ff,'-y','-hide_banner','-loglevel','warning']
for idx,start,end,speed in clips: args+=['-i',str(files[idx])]
filters=[]
durations=[]
for n,(idx,start,end,speed) in enumerate(clips):
 durations.append((end-start)/speed)
 filters.append(f'[{n}:v]trim=start={start}:end={end},setpts=(PTS-STARTPTS)/{speed},crop=332:640:474:0,scale=664:1280:flags=lanczos,setsar=1,fps=30,format=yuv420p,settb=AVTB[v{n}]')
total=durations[0]; prev='v0'
for n in range(1,len(clips)):
 offset=total-.22
 filters.append(f'[{prev}][v{n}]xfade=transition=slideup:duration=0.22:offset={offset:.6f}[x{n}]')
 total+=durations[n]-.22; prev=f'x{n}'
filters.append(f'[{prev}]fade=t=in:st=0:d=0.25,fade=t=out:st={total-.4:.6f}:d=0.4[out]')
args+=['-filter_complex',';'.join(filters),'-map','[out]','-an','-c:v','libx264','-pix_fmt','yuv420p','-preset','medium','-crf','20','-movflags','+faststart','video-edit/FABB-portfolio-mobile-v1.mp4']
Path('video-edit/edit-plan-mobile-v1.json').write_text(json.dumps({'clips':[{'file':str(files[i]),'start':s,'end':e,'speed':v} for i,s,e,v in clips],'duration':total,'crop':'332:640:474:0','transition':'slideup','transition_duration':.22},indent=2),encoding='utf8')
subprocess.run(args,check=True)
