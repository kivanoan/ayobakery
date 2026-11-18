(()=>{const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
// holiday banner link -> open Holiday collection tab
document.querySelectorAll('[data-open-holiday]').forEach(a=>a.addEventListener('click',()=>{setTimeout(()=>{const t=document.querySelector('[data-filter="holiday"]');if(t)t.click();},60);}));
if(reduce)return;
const c=document.createElement('canvas');c.className='snow';c.setAttribute('aria-hidden','true');document.body.appendChild(c);
const x=c.getContext('2d');let W,H,D=Math.min(devicePixelRatio||1,2),flakes=[];
function size(){W=innerWidth;H=innerHeight;c.width=W*D;c.height=H*D;x.setTransform(D,0,0,D,0,0);}
function make(top){const big=Math.random()<0.45;return{x:Math.random()*W,y:top?-20:Math.random()*H,r:big?Math.random()*6+5:Math.random()*1.8+0.8,crystal:big,s:big?Math.random()*0.45+0.3:Math.random()*0.6+0.4,w:Math.random()*6.283,a:Math.random()*6.283,spin:(Math.random()-.5)*0.012,o:Math.random()*0.35+0.6};}
function crystal(f){x.save();x.translate(f.x,f.y);x.rotate(f.a);x.strokeStyle=`rgba(255,255,255,${f.o})`;x.lineWidth=Math.max(1,f.r/6);x.lineCap='round';x.shadowColor='rgba(110,26,47,.35)';x.shadowBlur=3;
 for(let i=0;i<6;i++){x.rotate(Math.PI/3);x.beginPath();x.moveTo(0,0);x.lineTo(0,-f.r);
  const b1=f.r*0.45,b2=f.r*0.72,l1=f.r*0.32,l2=f.r*0.22;
  x.moveTo(0,-b1);x.lineTo(-l1,-b1-l1);x.moveTo(0,-b1);x.lineTo(l1,-b1-l1);
  x.moveTo(0,-b2);x.lineTo(-l2,-b2-l2);x.moveTo(0,-b2);x.lineTo(l2,-b2-l2);x.stroke();}
 x.restore();}
size();addEventListener('resize',size);
const N=Math.round(Math.min(70,W*H/12000));for(let i=0;i<N;i++)flakes.push(make(false));
let run=true;document.addEventListener('visibilitychange',()=>{run=!document.hidden;if(run)requestAnimationFrame(tick);});
function tick(){if(!run)return;x.clearRect(0,0,W,H);
 for(const f of flakes){f.y+=f.s;f.w+=0.01;f.x+=Math.sin(f.w)*0.4;f.a+=f.spin;if(f.y>H+20)Object.assign(f,make(true));
  if(f.crystal)crystal(f);else{x.beginPath();x.arc(f.x,f.y,f.r,0,6.283);x.fillStyle=`rgba(255,255,255,${f.o})`;x.shadowColor='rgba(110,26,47,.3)';x.shadowBlur=2;x.fill();}}
 requestAnimationFrame(tick);}
requestAnimationFrame(tick);})();
