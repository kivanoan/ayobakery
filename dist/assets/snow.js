(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const c=document.createElement('canvas');c.className='snow';c.setAttribute('aria-hidden','true');document.body.appendChild(c);
const x=c.getContext('2d');let W,H,D=Math.min(devicePixelRatio||1,2),flakes=[];
function size(){W=innerWidth;H=innerHeight;c.width=W*D;c.height=H*D;x.setTransform(D,0,0,D,0,0);}
function make(top){return{x:Math.random()*W,y:top?-10:Math.random()*H,r:Math.random()*2.6+0.8,s:Math.random()*0.6+0.35,w:Math.random()*Math.PI*2,o:Math.random()*0.5+0.45};}
size();addEventListener('resize',size);
const N=Math.round(Math.min(110,W*H/9000));for(let i=0;i<N;i++)flakes.push(make(false));
let run=true;document.addEventListener('visibilitychange',()=>{run=!document.hidden;if(run)requestAnimationFrame(tick);});
function tick(){if(!run)return;x.clearRect(0,0,W,H);
for(const f of flakes){f.y+=f.s;f.w+=0.01;f.x+=Math.sin(f.w)*0.35;if(f.y>H+5){Object.assign(f,make(true));}
x.beginPath();x.arc(f.x,f.y,f.r,0,6.283);x.fillStyle=`rgba(255,255,255,${f.o})`;x.shadowColor='rgba(150,120,110,.35)';x.shadowBlur=2;x.fill();}
requestAnimationFrame(tick);}
requestAnimationFrame(tick);})();
