const cakes = [
  {name:'Chocolate Celebration Cake',img:'ayo-03.jpg',cat:'classic',desc:'Chocolate cake finished by hand with dried florals.'},
  {name:'Signature Berry Cake',img:'ayo-05.jpg',cat:'berry',desc:'Fresh berries, soft cream, and a celebratory finish.'},
  {name:'Assorted Cake Bars',img:'ayo-08.jpg',cat:'classic',desc:'A colourful selection of layered cake bars.'},
  {name:'Strawberry Crumb Cake',img:'ayo-11.jpg',cat:'berry',desc:'Fresh strawberries around a golden crumb centre.'},
  {name:'Caramel Cream Cake',img:'ayo-12.jpg',cat:'classic',desc:'A close-up of softly piped caramel cream.'},
  {name:'Golden Crumb Cakes',img:'ayo-14.jpg',cat:'classic',desc:'Individual crumb-topped treats, ready to share.'},
  {name:'Raspberry Pastry',img:'ayo-16.jpg',cat:'berry',desc:'A close-up of bright raspberry filling.'},
  {name:'Fig & Blueberry Tart',img:'ayo-18.jpg',cat:'berry',desc:'Fresh figs and blueberries on a delicate pastry base.'},
  {name:'Berry Dessert Cups',img:'ayo-19.jpg',cat:'romantic',desc:'Individual portions topped with fruit and cream.'},
  {name:'Vanilla Berry Cake',img:'ayo-20.jpg',cat:'berry',desc:'A light vanilla cake topped with fresh berries.'},
  {name:'Berry Cream Cake',img:'ayo-21.jpg',cat:'berry',desc:'Soft cream layers with berries and figs.'},
  {name:'Fig & Blueberry Pastry',img:'ayo-22.jpg',cat:'berry',desc:'Fruit-topped pastry slices with fig and blueberry.'},
  {name:'Chocolate Berry Cake',img:'ayo-23.jpg',cat:'romantic',desc:'Chocolate cake with berries and a burgundy ribbon.'},
  {name:'Seasonal Pumpkin Pie',img:'ayo-24.jpg',cat:'classic',desc:'A playful seasonal pie with a crisp golden crust.'},
  {name:'Fig & Berry Tart',img:'ayo-25.jpg',cat:'berry',desc:'A sharing tart topped with figs and fresh berries.'},
  {name:'San Sebastián Cheesecake',img:'photo-2638.jpg',cat:'classic',desc:'A rich Basque-style cheesecake with a deeply caramelized top.'},
  {name:'Cherry Cheesecake',img:'photo-2639.jpg',cat:'berry',desc:'Creamy cheesecake topped with glossy cherries.'},
  {name:'New York Cheesecake',img:'photo-2640.jpg',cat:'classic',desc:'Classic baked cheesecake on a golden crumb base.'},
  {name:'Nutella Cake',img:'photo-2641.jpg',cat:'classic',desc:'Chocolate layers with a smooth hazelnut cocoa filling.'},
  {name:'Pistachio Raspberry Cake',img:'photo-2643.jpg',cat:'berry',desc:'Pistachio sponge layered with cream and raspberry.'},
  {name:'Black Forest',img:'photo-2647.jpg',cat:'classic',desc:'Chocolate, cream, and cherry in a timeless combination.'},
  {name:'Honey Cake',img:'photo-2648.jpg',cat:'classic',desc:'Tender honey layers with a delicate cream filling.'},
  {name:'Napoleon',img:'photo-2649.jpg',cat:'classic',desc:'Crisp pastry layers with smooth vanilla cream.'},
  {name:'Pistachio Raspberry Cookie',img:'photo-2646.jpg',cat:'berry',desc:'Pistachio cookie with raspberry and pistachio cream.'},
  {name:'Peanut Caramel Cookie',img:'photo-2650.jpg',cat:'classic',desc:'A generous cookie topped with peanut and caramel.'},
  {name:'Choco Hazelnut Cookie',img:'photo-2651.jpg',cat:'classic',desc:'Chocolate cookie with hazelnut and chocolate.'}
];
let chosen=0, bag=[];
try { bag=JSON.parse(localStorage.getItem('emeraldBag')||'[]'); if(!Array.isArray(bag)) bag=[]; } catch { bag=[]; }
const $=s=>document.querySelector(s);
function render(filter='all') {
  $('#products').innerHTML=cakes.map((c,i)=>filter==='all'||c.cat===filter?`<button class="product" data-cake="${i}"><div class="photo"><img src="assets/${c.img}" alt="${c.name}" loading="lazy"><span class="plus" aria-hidden="true">+</span></div><h3>${c.name}</h3><p>${c.desc}</p></button>`:'').join('');
  document.querySelectorAll('[data-cake]').forEach(b=>b.onclick=()=>{chosen=+b.dataset.cake;$('#detailTitle').textContent=cakes[chosen].name;$('#detailImg').src='assets/'+cakes[chosen].img;$('#detailImg').alt=cakes[chosen].name;$('#productDialog').showModal();});
}
render();
const customCakes=[
 ['Fruit & Fig Wedding Cake','photo-2623.jpg'],['Pearl Tier Wedding Cake','photo-2624.jpg'],['Burgundy Bow Cake','photo-2625.jpg'],['Raspberry Crown Cake','photo-2626.jpg'],['Berry Celebration Cake','photo-2627.jpg'],['Just Married Tiramisu','photo-2628.jpg'],['Orchid Floral Wedding Cake','photo-2629.jpg'],['White Rose Sheet Cake','photo-2630.jpg'],['Berry Cream Celebration Cake','photo-2632.jpg'],['Ruffled Cream Cake','photo-2633.jpg'],['Burgundy Heart Cake','photo-2634.jpg'],['Strawberry Blueberry Cake','photo-2635.jpg'],['Red Heart Celebration Cake','photo-2636.jpg'],['Blackberry Blueberry Cake','photo-2637.jpg']
];
const flavorCards=[['San Sebastián Cheesecake','photo-2638.jpg'],['Cherry Cheesecake','photo-2639.jpg'],['New York Cheesecake','photo-2640.jpg'],['Nutella Cake','photo-2641.jpg'],['Pistachio Raspberry','photo-2652.jpg'],['Pistachio Raspberry Cookie','photo-2646.jpg'],['Black Forest','photo-2647.jpg'],['Honey Cake','photo-2648.jpg'],['Napoleon','photo-2649.jpg'],['Peanut Caramel','photo-2650.jpg'],['Choco Hazelnut','photo-2651.jpg']];
function renderCarousel(id,items){const root=document.getElementById(id);root.innerHTML=items.map(([name,img])=>`<article class="editorial-card"><img src="assets/${img}" alt="${name}" loading="lazy"><h3>${name}</h3></article>`).join('');}
renderCarousel('customCakeTrack',customCakes);renderCarousel('flavorTrack',flavorCards);
const galleryDescriptions=[
  'AYO Pâtisserie cake collection announcement with a decorated celebration cake.',
  'AYO Pâtisserie brand announcement in a soft cream and blush design.',
  'Chocolate celebration cake decorated with dried flowers.',
  'Fresh berries arranged on a cake, shown in an AYO Pâtisserie promo graphic.',
  'Signature cream cake topped with strawberries, raspberries, and blueberries.',
  'AYO Pâtisserie round logo.',
  'AYO Pâtisserie logo on a cream background.',
  'Assorted colourful layered cake bars.',
  'Tall celebration cake with delicate piped decorations, shown in a promo graphic.',
  'AYO Pâtisserie seasonal announcement with a burgundy ribbon.',
  'Strawberry crumb cake with fresh fruit.',
  'Close-up of softly piped caramel cream on a cake.',
  'AYO Pâtisserie illustrated menu card.',
  'Individual golden crumb cakes in paper cases.',
  'AYO Pâtisserie reviews illustration.',
  'Close-up of ripe raspberry pastry filling.',
  'AYO Pâtisserie cake illustration with a ribbon.',
  'Fig and blueberry tart on a pastry base.',
  'Individual dessert cups topped with berries and cream.',
  'Vanilla celebration cake with fresh berries.',
  'Berry and fig cream cake.',
  'Fruit-topped pastry slices with figs and blueberries.',
  'Chocolate berry cake decorated with a burgundy ribbon.',
  'Seasonal pumpkin pie with a playful carved face.',
  'Fig and berry tart slices ready to share.'
];
const photoWall=$('#photoWall');
for(let i=1;i<=25;i++){const img=document.createElement('img');img.src='assets/ayo-'+String(i).padStart(2,'0')+'.jpg';img.alt=galleryDescriptions[i-1];img.loading='lazy';photoWall.append(img);}
function update(){ $('#count').textContent=bag.length;localStorage.setItem('emeraldBag',JSON.stringify(bag)); }
update();
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter);$('#products').scrollLeft=0;});
$('#viewAll').onclick=()=>document.querySelector('[data-filter="all"]').click();
document.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>{const target=$('#'+b.dataset.scroll);target.scrollBy({left:Number(b.dataset.direction)*target.clientWidth*.82,behavior:'smooth'});});
document.querySelectorAll('dialog .close').forEach(b=>b.onclick=()=>b.closest('dialog').close());
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d&&e.offsetX<0)d.close();}));
$('#add').onclick=()=>{bag.push({name:cakes[chosen].name,filling:$('#filling').value,size:$('#size').value,message:$('#message').value});update();$('#productDialog').close();$('#toast').textContent='Added to your celebration bag';$('#toast').style.display='block';setTimeout(()=>$('#toast').style.display='none',2500);};
function showBag(){const root=$('#cartItems');root.replaceChildren();if(!bag.length)root.textContent='Your bag is empty. Find a cake you love in the collection.';bag.forEach((x,i)=>{const row=document.createElement('div');row.className='basket-line';const text=document.createElement('span');text.textContent=x.name+' · '+x.size+' · '+x.filling+(x.message?' · “'+x.message+'”':'');const remove=document.createElement('button');remove.textContent='Remove';remove.onclick=()=>{bag.splice(i,1);update();showBag();};row.append(text,remove);root.append(row);});$('#checkout').disabled=!bag.length;}
$('#cart').onclick=()=>{showBag();$('#cartDialog').showModal();};
$('#checkout').onclick=()=>{$('#cartDialog').close();$('textarea').value=bag.map(x=>x.name+', '+x.size+', '+x.filling+(x.message?', message: '+x.message:'')).join('\n');location.hash='contact';};
$('#guide').onclick=()=>$('#guideDialog').showModal();$('#guideShop').onclick=()=>$('#guideDialog').close();
$('#enquiry').onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);const message=['Hello AYO Pâtisserie, I would like to enquire about a cake.','Name: '+f.get('name'),'Email: '+f.get('email'),'Celebration date: '+f.get('date'),'Occasion: '+f.get('occasion'),'Cake details: '+f.get('details')].join('\n');window.location.href='https://wa.me/19423816621?text='+encodeURIComponent(message);};
const menuToggle=$('#menuToggle'),mainNav=$('#mainNav');
menuToggle.onclick=()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');menuToggle.textContent=open?'×':'☰';mainNav.classList.toggle('open',open);};
mainNav.querySelectorAll('a').forEach(a=>a.onclick=()=>{menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation');menuToggle.textContent='☰';mainNav.classList.remove('open');});
const slides=[['Made with care.<br><em>Made for you.</em>','Signature cakes and berry creations, thoughtfully made for beautiful moments in Toronto.','ayo-05.jpg'],['Berry beautiful.<br><em>Joyfully abundant.</em>','Fresh berries, soft cream, and the warmth of a celebration made to share.','ayo-21.jpg'],['Chocolate & florals.<br><em>A little moment.</em>','A rich chocolate cake, finished by hand with thoughtful details.','ayo-03.jpg']];
let slide=0;function move(n){slide=(slide+n+slides.length)%slides.length;$('#heroTitle').innerHTML=slides[slide][0];$('#heroDesc').textContent=slides[slide][1];$('#heroImg').src='assets/'+slides[slide][2];$('#heroImg').alt=slides[slide][0].replace(/<[^>]*>/g,' ');$('#slideNo').textContent='0'+(slide+1)+' / 03';}
$('#next').onclick=()=>move(1);$('#prev').onclick=()=>move(-1);
