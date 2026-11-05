const cakes = [
  {name:'Berry Charlotte',img:'ayo-05.jpg',cat:'signature',type:'cake',top:1,desc:'Ladyfinger charlotte crowned with fresh berries and tied with a satin ribbon.'},
  {name:'Red Velvet Berry Cake',img:'ayo-23.jpg',cat:'signature',type:'cake',top:4,desc:'Red velvet layers and cream, topped with fresh berries and a velvet bow.'},
  {name:'Vanilla Strawberry Cake',img:'ayo-20.jpg',cat:'signature',type:'cake',top:0,desc:'Vanilla cake with soft cream and fresh strawberries.'},
  {name:'Chocolate Celebration Cake',img:'ayo-03.jpg',cat:'signature',type:'cake',top:0,desc:'Chocolate cake finished by hand with dried florals.'},
  {name:'Pavlova with Raspberries & Figs',img:'ayo-21.jpg',cat:'signature',type:'cake',top:0,desc:'Layers of crisp meringue and cream, topped with raspberries and figs.'},
  {name:'Strawberry Napoleon',img:'ayo-11.jpg',cat:'signature',type:'cake',top:0,desc:'Napoleon with a golden crumb finish and a ring of fresh strawberries.'},
  {name:'Honey Cake',img:'photo-2648.jpg',cat:'classic',type:'cake',top:6,desc:'Honey sponge layers soaked in light sour cream, with caramel and natural honey notes.'},
  {name:'Napoleon',img:'photo-2649.jpg',cat:'classic',type:'cake',top:8,desc:'Hand-made puff pastry layered with vanilla custard cream.'},
  {name:'Pistachio Raspberry Cake',img:'photo-2643.jpg',cat:'classic',type:'cake',top:2,desc:'Pistachio sponge, raspberry jelly, pistachio cheesecake and pistachio cream.'},
  {name:'Black Forest',img:'photo-2647.jpg',cat:'classic',type:'cake',top:0,desc:'Chocolate sponge, cherry confit, milk chocolate cheesecake and chocolate cream.'},
  {name:'Nutella Cake',img:'photo-2641.jpg',cat:'classic',type:'cake',top:0,desc:'Chocolate sponge, a crunchy chocolate layer and chocolate cream made with Nutella.'},
  {name:'San Sebastián Cheesecake',img:'photo-2638.jpg',cat:'cheesecake',type:'cheesecake',top:3,desc:'A rich Basque-style cheesecake with a deeply caramelized top.'},
  {name:'New York Cheesecake',img:'photo-2640.jpg',cat:'cheesecake',type:'cheesecake',top:0,desc:'Classic baked cheesecake on a golden crumb base.'},
  {name:'Cherry Cheesecake',img:'photo-2639.jpg',cat:'cheesecake',type:'cheesecake',top:0,desc:'Creamy cheesecake topped with glossy cherries.'},
  {name:'Fruit Illusion Desserts',img:'ayo-16.jpg',cat:'desserts',type:'dessert',top:5,desc:'Fruit-shaped mousse desserts with a creamy berry centre.'},
  {name:'Meringue Roll',img:'ayo-18.jpg',cat:'desserts',type:'dessert',top:7,desc:'Crisp meringue roll with cream, fresh figs and blueberries.'},
  {name:'Cream Dessert Cups',img:'ayo-19.jpg',cat:'desserts',type:'dessert',top:0,desc:'Individual cake cups with cream, blueberries and caramel.'},
  {name:'Mini Honey Cakes',img:'ayo-14.jpg',cat:'desserts',type:'dessert',top:0,desc:'Individual honey cakes with a golden crumb coating.'},
  {name:'Glazed Cake Bars',img:'ayo-08.jpg',cat:'desserts',type:'dessert',top:0,desc:'Sponge cake bars dipped in a colourful glaze.'},
  {name:'Halloween Berry Pie',img:'ayo-24.jpg',cat:'desserts',type:'dessert',top:0,desc:'A seasonal berry pie with a playful carved crust.'},
  {name:'Pistachio Raspberry Cookie',img:'photo-2646.jpg',cat:'cookies',type:'cookie',top:0,desc:'60 g · pistachio cookie with white chocolate, pistachio ganache and berry gel.'},
  {name:'Choco Hazelnut Cookie',img:'photo-2651.jpg',cat:'cookies',type:'cookie',top:0,desc:'55 g · dark chocolate cookie with ganache, Nutella and roasted hazelnuts.'},
  {name:'Peanut Caramel Cookie',img:'photo-2650.jpg',cat:'cookies',type:'cookie',top:0,desc:'55 g · peanut and milk chocolate cookie with salted caramel and peanut paste.'}
];
let chosen=0, bag=[];
try { bag=JSON.parse(localStorage.getItem('emeraldBag')||'[]'); if(!Array.isArray(bag)) bag=[]; } catch { bag=[]; }
const $=s=>document.querySelector(s);
const leadNotes={top:'Order at least 2 days ahead · Delivery across Toronto',signature:'Whole cakes · order at least 2 days ahead',classic:'Whole cakes · order at least 2 days ahead',cheesecake:'Whole cheesecakes · order at least 2 days ahead',desserts:'Sold by the piece · order at least 2 days ahead',cookies:'Sold by the piece · order at least 2 days ahead',all:'Order at least 2 days ahead · Delivery across Toronto'};
function render(filter='top') {
  const list=cakes.map((c,i)=>[c,i]).filter(([c])=>filter==='all'||(filter==='top'?c.top:c.cat===filter));if(filter==='top')list.sort((a,b)=>a[0].top-b[0].top);
  $('#products').innerHTML=list.map(([c,i])=>`<button class="product" data-cake="${i}"><div class="photo"><img src="assets/${c.img}" alt="${c.name}" loading="lazy"><span class="plus" aria-hidden="true">+</span></div><h3>${c.name}</h3><p>${c.desc}</p></button>`).join('');
  const note=$('#leadNote');if(note)note.textContent=leadNotes[filter]||'';
  document.querySelectorAll('[data-cake]').forEach(b=>b.onclick=()=>openCake(+b.dataset.cake));
}
const FILLING_ALLERGENS={'Pistachio Raspberry':'Milk, Eggs, Gluten, Pistachio','Vanilla Berries':'Milk, Eggs, Gluten','Black Forest':'Milk, Eggs, Gluten, Gelatine (fish)','Peanut Caramel':'Milk, Eggs, Gluten, Peanuts, Gelatine (fish)','Nutella':'Milk, Eggs, Gluten, Hazelnuts, Soy','Honey Cake':'Milk, Eggs, Gluten','Banana Caramel':'Milk, Eggs, Gluten, Gelatine (fish)','Napoleon':'Milk, Eggs, Gluten'};
const ITEM_ALLERGENS={'Pistachio Raspberry Cookie':'Milk, Eggs, Gluten, Pistachio','Peanut Caramel Cookie':'Milk, Eggs, Gluten, Peanuts, Gelatine (fish)','Choco Hazelnut Cookie':'Milk, Eggs, Gluten, Hazelnuts, Soy'};
const KITCHEN_NOTE='Made in a kitchen that handles milk, eggs, gluten, nuts, peanuts and soy.';
function showAllergens(){const c=cakes[chosen];let a=c.type==='cake'?FILLING_ALLERGENS[$('#filling').value]:ITEM_ALLERGENS[c.name];$('#allergenText').innerHTML=(a?'<b>Allergens:</b> '+a+'. ':'<b>Allergens:</b> please ask us about this dessert. ')+KITCHEN_NOTE;}
const LEAD_DAYS=2;
function isoDate(d){return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10);}
function minOrderDate(){const d=new Date();d.setDate(d.getDate()+LEAD_DAYS);return isoDate(d);}
function prettyDate(v){if(!v)return '';const [y,m,d]=v.split('-').map(Number);return new Date(y,m-1,d).toLocaleDateString('en-CA',{weekday:'short',month:'short',day:'numeric'});}
function openCake(i){
  chosen=i;const c=cakes[i],whole=c.type==='cake'||c.type==='cheesecake';
  $('#detailTitle').textContent=c.name;$('#detailDesc').textContent=c.desc;$('#detailImg').src='assets/'+c.img;$('#detailImg').alt=c.name;
  $('#fillingRow').hidden=c.type!=='cake';$('#sizeRow').hidden=!whole;$('#messageRow').hidden=!whole;$('#qtyRow').hidden=whole;
  $('#qty').value='4';$('#message').value='';$('#allergy').value='';
  const d=$('#orderDate');d.min=minOrderDate();if(!d.value||d.value<d.min)d.value='';$('#dateNote').textContent='';
  showAllergens();$('#productDialog').showModal();
}
function currentItem(){const c=cakes[chosen],whole=c.type==='cake'||c.type==='cheesecake';return {name:c.name,size:whole?$('#size').value:$('#qty').value+' pcs',filling:c.type==='cake'?$('#filling').value:'',message:whole?$('#message').value.trim():'',allergy:$('#allergy').value.trim(),date:$('#orderDate').value};}
function itemText(x){return [x.name,x.size,x.filling&&('filling: '+x.filling),x.message&&('message: “'+x.message+'”'),x.allergy&&('allergies: '+x.allergy),x.date&&('delivery: '+prettyDate(x.date))].filter(Boolean).join(' · ');}
function needDate(){const d=$('#orderDate');if(!d.value||d.value<d.min){$('#dateNote').textContent='Please choose a date at least '+LEAD_DAYS+' days from today.';d.focus();return false;}return true;}
render();
const customCakes=[
 ['Fruit & Fig Wedding Cake','photo-2623.jpg'],['Pearl Tier Wedding Cake','photo-2624.jpg'],['Red Bow Wedding Cake','photo-2625.jpg'],['Raspberry Top Cake','photo-2626.jpg'],['Berry Celebration Cake','photo-2627.jpg'],['Just Married Tiramisu','photo-2628.jpg'],['Orchid Floral Wedding Cake','photo-2629.jpg'],['White Floral Sheet Cake','photo-2630.jpg'],['Raspberry Crown Cake','photo-2632.jpg'],['Ruffled Cream Cake','photo-2633.jpg'],['Burgundy Heart Cake','photo-2634.jpg'],['Strawberry Blueberry Cake','photo-2635.jpg'],['Red Petal Heart Cake','photo-2636.jpg'],['Blackberry Blueberry Cake','photo-2637.jpg']
];
const flavorCards=[['Pistachio Raspberry','photo-2643.jpg'],['Black Forest','photo-2647.jpg'],['Nutella','photo-2641.jpg'],['Honey Cake','photo-2648.jpg'],['Napoleon','photo-2649.jpg'],['Vanilla Berries','ayo-20.jpg'],['Pistachio Raspberry Cookie','photo-2646.jpg'],['Peanut Caramel Cookie','photo-2650.jpg'],['Choco Hazelnut Cookie','photo-2651.jpg']];
function renderCarousel(id,items){const root=document.getElementById(id);root.innerHTML=items.map(([name,img,poster])=>`<article class="editorial-card">${img.endsWith('.mp4')?`<video src="assets/${img}" poster="assets/${poster}" autoplay muted loop playsinline preload="metadata" aria-label="${name}"></video>`:`<img src="assets/${img}" alt="${name}" loading="lazy">`}<h3>${name}</h3></article>`).join('');}
renderCarousel('customCakeTrack',customCakes);renderCarousel('flavorTrack',flavorCards);
const gallery=[['ayo-05.jpg','Berry charlotte with fresh berries and a satin ribbon.'],['ayo-21.jpg','Pavlova with raspberries and figs.'],['ayo-23.jpg','Red velvet berry cake with a burgundy bow.'],['ayo-16.jpg','Fruit illusion desserts with a creamy berry centre.'],['ayo-18.jpg','Meringue roll with figs and blueberries.'],['ayo-03.jpg','Chocolate celebration cake with dried florals.'],['ayo-20.jpg','Vanilla strawberry cake.'],['ayo-19.jpg','Cream dessert cups with blueberries and caramel.'],['ayo-14.jpg','Mini honey cakes in paper cases.'],['ayo-11.jpg','Strawberry Napoleon with a golden crumb finish.'],['ayo-08.jpg','Glazed sponge cake bars.'],['ayo-25.jpg','Meringue rolls with figs and blueberries.'],['ayo-12.jpg','Close-up of piped caramel cream.'],['ayo-24.jpg','Halloween berry pie with a carved crust.']];
const photoWall=$('#photoWall');
gallery.forEach(([f,alt])=>{const img=document.createElement('img');img.src='assets/'+f;img.alt=alt;img.loading='lazy';photoWall.append(img);});
function update(){ $('#count').textContent=bag.length;localStorage.setItem('emeraldBag',JSON.stringify(bag)); }
update();
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter);$('#products').scrollLeft=0;});
$('#viewAll').onclick=()=>document.querySelector('[data-filter="all"]').click();
document.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>{const target=$('#'+b.dataset.scroll);target.scrollBy({left:Number(b.dataset.direction)*target.clientWidth*.82,behavior:'smooth'});});
document.querySelectorAll('dialog .close').forEach(b=>b.onclick=()=>b.closest('dialog').close());
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d&&e.offsetX<0)d.close();}));
$('#filling').onchange=showAllergens;
$('#add').onclick=()=>{if(!needDate())return;bag.push(currentItem());update();$('#productDialog').close();$('#toast').textContent='Added to your bag';$('#toast').style.display='block';setTimeout(()=>$('#toast').style.display='none',2500);};
$('#orderNow').onclick=()=>{if(!needDate())return;window.open('https://wa.me/19423816621?text='+encodeURIComponent('Hello AYO Pâtisserie, I would like to order:\n'+itemText(currentItem())),'_blank','noopener');};
function showBag(){const root=$('#cartItems');root.replaceChildren();if(!bag.length)root.textContent='Your bag is empty. Find a cake you love in the collection.';bag.forEach((x,i)=>{const row=document.createElement('div');row.className='basket-line';const text=document.createElement('span');text.textContent=itemText(x);const remove=document.createElement('button');remove.textContent='Remove';remove.onclick=()=>{bag.splice(i,1);update();showBag();};row.append(text,remove);root.append(row);});$('#checkout').disabled=!bag.length;}
$('#cart').onclick=()=>{showBag();$('#cartDialog').showModal();};
$('#checkout').onclick=()=>{$('#cartDialog').close();$('textarea').value=bag.map(itemText).join('\n');const dates=bag.map(x=>x.date).filter(Boolean).sort();if(dates[0])$('#enquiry [name=date]').value=dates[0];location.hash='contact';};

$('#enquiry [name=date]').min=minOrderDate();
$('#enquiry').onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);const message=['Hello AYO Pâtisserie, I would like to order.','Name: '+f.get('name'),'Phone: '+f.get('phone'),'Delivery date: '+prettyDate(f.get('date')),'Delivery address: '+f.get('address'),'Occasion: '+f.get('occasion'),'Allergies: '+(f.get('allergy')||'none'),'Order: '+f.get('details')].join('\n');window.location.href='https://wa.me/19423816621?text='+encodeURIComponent(message);};

const menuToggle=$('#menuToggle'),mainNav=$('#mainNav');
menuToggle.onclick=()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');menuToggle.textContent=open?'×':'☰';mainNav.classList.toggle('open',open);};
mainNav.querySelectorAll('a').forEach(a=>a.onclick=()=>{menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation');menuToggle.textContent='☰';mainNav.classList.remove('open');});
const slides=[['Wedding cakes.<br><em>Made for your day.</em>','Tiered wedding cakes, designed around your celebration in Toronto.','wedding-cake-cutting.jpg','wedding-cake-cutting.mp4'],['Made with care.<br><em>Made for you.</em>','Signature cakes and berry creations, thoughtfully made for beautiful moments in Toronto.','ayo-05.jpg'],['Berry beautiful.<br><em>Joyfully abundant.</em>','Fresh berries, soft cream, and the warmth of a celebration made to share.','ayo-21.jpg'],['Chocolate & florals.<br><em>A little moment.</em>','A rich chocolate cake, finished by hand with thoughtful details.','ayo-03.jpg']];
let slide=0;const heroVideo=$('#heroVideo');function move(n){slide=(slide+n+slides.length)%slides.length;const [title,desc,img,video]=slides[slide];$('#heroTitle').innerHTML=title;$('#heroDesc').textContent=desc;$('#heroImg').src='assets/'+img;$('#heroImg').alt=title.replace(/<[^>]*>/g,' ');if(video){heroVideo.poster='assets/'+img;if(!heroVideo.src.endsWith(video))heroVideo.src='assets/'+video;heroVideo.hidden=false;heroVideo.play().catch(()=>{heroVideo.controls=true;});}else{heroVideo.pause();heroVideo.hidden=true;}$('#slideNo').textContent='0'+(slide+1)+' / 0'+slides.length;}
move(0);$('#next').onclick=()=>move(1);$('#prev').onclick=()=>move(-1);
