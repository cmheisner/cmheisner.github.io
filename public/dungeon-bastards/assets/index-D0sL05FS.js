var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=1/30,d=.3,f=3.3,p={rat:{name:`The Rat`,role:`Scrapper`,color:`#9aa0a8`,hp:80,speed:4.7,dmg:12,range:1.1,atkCd:.28,ability:`Skitter`,abilityCd:2.5,abilityDesc:`Dash. Skitter through a crewmate to pick their pocket.`,blurb:`Twitchy ex-guild courier covered in stolen gear. Hoards magical debts.`},kangaroo:{name:`The Kangaroo`,role:`Muscle`,color:`#c98d4c`,hp:130,speed:3.9,dmg:20,range:1.35,atkCd:.5,ability:`Roo Stomp`,abilityCd:5,abilityDesc:`Slam the ground. Everyone nearby gets launched. Everyone.`,blurb:`Spring-loaded brawler. Escaped a biomech vault by kicking its heart out.`},goblin:{name:`The Goblin`,role:`Anarchist`,color:`#6fb54f`,hp:90,speed:4.2,dmg:10,range:1,atkCd:.35,ability:`Bomb`,abilityCd:3.5,abilityDesc:`Lob a bomb. It does not care whose side you are on.`,blurb:`Bomb-happy ex-cultist turned black-market tinkerer. Thrives in chaos.`}},m={rat:{name:`a rat`,hp:18,speed:3.5,dmg:5,xp:10,r:.25,loot:[1,4]},skull:{name:`a skull`,hp:28,speed:2.5,dmg:9,xp:18,r:.3,loot:[3,8]},goblin:{name:`a goblin`,hp:55,speed:2.8,dmg:14,xp:30,r:.35,loot:[6,15]},warlock:{name:`a Shroom Warlock`,hp:40,speed:2.4,dmg:6,xp:35,r:.3,loot:[8,18]},imp:{name:`an imp intern`,hp:40,speed:4.2,dmg:8,xp:0,r:.25,loot:[0,0]},ham:{name:`Swamp Ham`,hp:300,speed:2.3,dmg:20,xp:200,r:.6,loot:[0,0]},demon:{name:`Belchazzar`,hp:900,speed:2,dmg:22,xp:600,r:.8,loot:[0,0]},mephit:{name:`a mephit`,hp:18,speed:3.6,dmg:6,xp:8,r:.3,loot:[0,2]}},h={rat:{possess:0,rot:15,ability:`Skitter`,abilityCd:2,atkCd:.4,desc:`Fast. Swallows any loot it touches.`},skull:{possess:.5,rot:20,ability:`Lunge`,abilityCd:2.5,atkCd:.7,desc:`Lunge forward and bite whatever you hit.`},goblin:{possess:1.5,rot:35,ability:`Club Slam`,abilityCd:4,atkCd:.9,desc:`Tough. Slam the floor and knock everyone back.`},warlock:{possess:1,rot:25,ability:`Wild Magic`,abilityCd:2.5,atkCd:.8,desc:`Cast a random spell. Nobody is safe.`},imp:null,ham:null,demon:null,mephit:null},g=e=>m[e].speed*1.25;function _(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function v(e,t){let n=(t,n)=>t<0||n<0||t>=e.w||n>=e.h||e.tiles[n*e.w+t]===1,r=(t,r)=>!n(t,r)&&e.tiles[r*e.w+t]===0,i=[{n:t.w,tile:e=>[t.x+e,t.z],out:[0,-1],at:e=>({x:t.x+e+.5,z:t.z+.15})},{n:t.h,tile:e=>[t.x,t.z+e],out:[-1,0],at:e=>({x:t.x+.15,z:t.z+e+.5})},{n:t.h,tile:e=>[t.x+t.w-1,t.z+e],out:[1,0],at:e=>({x:t.x+t.w-.15,z:t.z+e+.5})},{n:t.w,tile:e=>[t.x+e,t.z+t.h-1],out:[0,1],at:e=>({x:t.x+e+.5,z:t.z+t.h-.15})}];for(let e of i){let t=[...Array(e.n).keys()].sort((t,n)=>Math.abs(t-(e.n-1)/2)-Math.abs(n-(e.n-1)/2)||t-n);for(let i of t)if(i!==0&&i!==e.n-1&&[i-1,i,i+1].every(t=>{let[i,a]=e.tile(t);return r(i,a)&&n(i+e.out[0],a+e.out[1])}))return{...e.at(i),nx:-e.out[0],nz:-e.out[1]}}return{x:t.x+.5+Math.floor(t.w/2),z:t.z+.15,nx:0,nz:1}}function y(e){let t=_(e),n=(e,n)=>e+Math.floor(t()*(n-e+1)),r=new Uint8Array(3600).fill(1),i=[];for(let e=0;e<200&&i.length<11;e++){let e=n(6,11),t=n(6,10),r=n(2,60-e-3),a=n(2,60-t-3);i.some(n=>r<n.x+n.w+2&&r+e+2>n.x&&a<n.z+n.h+2&&a+t+2>n.z)||i.push({x:r,z:a,w:e,h:t,cx:r+e/2,cz:a+t/2})}let a=(e,t)=>{e>0&&t>0&&e<59&&t<59&&(r[t*60+e]=0)};for(let e of i)for(let t=e.z;t<e.z+e.h;t++)for(let n=e.x;n<e.x+e.w;n++)a(n,t);let o=[i[0]],s=i.slice(1);for(;s.length;){let e=o[o.length-1];s.sort((t,n)=>Math.hypot(t.cx-e.cx,t.cz-e.cz)-Math.hypot(n.cx-e.cx,n.cz-e.cz)),o.push(s.shift())}let c=(e,n)=>{let r=Math.floor(e.cx),i=Math.floor(e.cz),o=Math.floor(n.cx),s=Math.floor(n.cz),c=t()<.5,l=()=>{for(;r!==o;)a(r,i),a(r,i+1),r+=Math.sign(o-r)},u=()=>{for(;i!==s;)a(r,i),a(r+1,i),i+=Math.sign(s-i)};c?(l(),u()):(u(),l()),a(r,i)};for(let e=1;e<o.length;e++)c(o[e-1],o[e]);o.length>4&&c(o[0],o[Math.floor(o.length/2)]);let l=o[0],u=o[o.length-1];return{w:60,h:60,tiles:r,rooms:o,start:l,exitRoom:u,exit:{x:Math.floor(u.cx)+.5,z:Math.floor(u.cz)+.5}}}function b(e,t,n){if(t<0||n<0||t>=e.w||n>=e.h)return!0;let r=e.tiles[n*e.w+t];return r!==0&&r!==3}function x(e,t,n){let r=Math.floor(t),i=Math.floor(n);return r>=0&&i>=0&&r<e.w&&i<e.h&&e.tiles[i*e.w+r]===3}function S(e,t,n,r,i=!1){let a=Math.floor(t-r),o=Math.floor(t+r),s=Math.floor(n-r),c=Math.floor(n+r);for(let t=s;t<=c;t++)for(let n=a;n<=o;n++)if(b(e,n,t)||i&&e.tiles[t*e.w+n]===3)return!0;return!1}function C(e,t,n,r,i,a,o=!1){let s=Math.max(1,Math.ceil(Math.max(Math.abs(r),Math.abs(i))/.25)),c=r/s,l=i/s;for(let r=0;r<s;r++)S(e,t+c,n,a,o)||(t+=c),S(e,t,n+l,a,o)||(n+=l);return[t,n]}var w=e=>e*e;function T(e,t,n){let r=t.x-n.x,i=t.z-n.z,a=Math.hypot(r,i),o=t.r+n.r;if(a>=o)return;let[s,c]=a>1e-4?[r/a,i/a]:[1,0],l=o-a,u=n.w/(t.w+n.w),d=1-u;[t.x,t.z]=C(e,t.x,t.z,s*l*u,c*l*u,t.r),[n.x,n.z]=C(e,n.x,n.z,-s*l*d,-c*l*d,n.r)}function E(e,t,n,r){let i={x:t.x,z:t.z,r:n,w:w(n)};for(let t of r)T(e,i,{...t});t.x=i.x,t.z=i.z}function D(e,t,n){return[Math.min(e.w-.5,Math.max(.5,t)),Math.min(e.h-.5,Math.max(.5,n))]}function O(e,t,n,r,i,a=d){let o=n.mx,s=n.mz,c=Math.hypot(o,s);c>1&&(o/=c,s/=c);let l=o*r*u,f=s*r*u;i?[t.x,t.z]=D(e,t.x+l,t.z+f):[t.x,t.z]=C(e,t.x,t.z,l,f,a)}function ee(e,t){let n=e-t;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n}function te(e,t,n,r){return e.find(e=>e.k===r&&Math.hypot(e.x-t,e.z-n)<e.r)}var ne={Destruction:`#ff6a2a`,Illusion:`#c070ff`,Restoration:`#5aff7a`,Mysticism:`#5ad0ff`,Conjuration:`#ff3a6a`,Alteration:`#ffe05a`},re={hex:`Hexes`,util:`Utility`},k={fireball:{name:`Fireball`,school:`Destruction`,cost:25,fail:.3,desc:`Explodes on whatever it hits. Whoever it hits.`,kind:`hex`},zap:{name:`Arc Zap`,school:`Destruction`,cost:22,fail:.3,desc:`Lightning that jumps to the next idiot. Including your crew.`,kind:`hex`},leech:{name:`Leech`,school:`Destruction`,cost:18,fail:.2,desc:`Suck the life out of something next to you. Tastes like pennies.`,kind:`hex`},paralyze:{name:`Paralysis`,school:`Illusion`,cost:28,fail:.3,desc:`Bolt that freezes its target stiff.`,kind:`hex`},frenzy:{name:`Frenzy`,school:`Illusion`,cost:22,fail:.25,desc:`Monsters it hits attack anything. Each other, mostly.`,kind:`hex`},chameleon:{name:`Chameleon`,school:`Illusion`,cost:25,fail:.2,desc:`Go see-through. Monsters forget you exist. Breaks when you act.`,kind:`util`},lick:{name:`Lick Wounds`,school:`Restoration`,cost:22,fail:.15,desc:`Heal 35. Do not ask how.`,kind:`util`},bookmark:{name:`Bookmark`,school:`Mysticism`,cost:15,fail:.2,desc:`Marks the spot, then becomes Recall: cast again to yank yourself back.`,kind:`util`},tk:{name:`Telekinesis`,school:`Mysticism`,cost:15,fail:.2,desc:`Yank loot to you from afar. Also from pockets.`,kind:`util`},souljar:{name:`Soul Jar`,school:`Mysticism`,cost:20,fail:.25,desc:`Jar a soul. If it dies soon, the soul drops as loot.`,kind:`hex`},grease:{name:`Slick`,school:`Alteration`,cost:15,fail:.15,desc:`Lob a puddle of lamp oil. Slows anything wading through it. Burns for a while once somebody lights it.`,kind:`hex`},soak:{name:`Swamp Bucket`,school:`Alteration`,cost:12,fail:.15,desc:`Lob a bucket of swamp water. Puts out fires. Conducts lightning beautifully.`,kind:`hex`},imp:{name:`Summon Imp Intern`,school:`Conjuration`,cost:35,fail:.35,desc:`An unpaid imp fights for you. When it runs out of monsters, it picks your crew.`,kind:`hex`},flight:{name:`Dumbass Flight`,school:`Alteration`,cost:0,fail:0,desc:`Leap ten tiles over anything. The landing is your problem.`,kind:`util`,scrollOnly:!0},yeet:{name:`Holy Yeet`,school:`Mysticism`,cost:0,fail:0,desc:`The gods throw you into a random room.`,kind:`util`,scrollOnly:!0}},ie={heal:{name:`Potion of Not Dying`,color:`#e03030`,desc:`+40 HP`},mana:{name:`Potion of Brain Juice`,color:`#3a7aff`,desc:`+50 mana`},sugar:{name:`Gutter Sugar`,color:`#d86ab0`,desc:`Untouchable, then faster, stronger, beefier, never fizzle. Then the crash.`},hooch:{name:`Swamp Hooch`,color:`#c8a040`,desc:`+20 HP and you hit harder for a bit.`},rotgut:{name:`Rotgut`,color:`#7a9a30`,desc:`Poison. Looks lovely gift-wrapped.`}},ae=Object.keys(ie),oe={rat:{mp:60},kangaroo:{mp:40},goblin:{mp:80}},se=.7,ce=65536,le=1048576,ue=2.5,de=.55;function fe(e,t){return t&18?0:(t&4?e*=1.4:t&8&&(e*=.6),t&256&&(e*=.85),t&512&&(e*=.8),t&65536&&(e*=de),t&1024?e*=.4:t&2048&&(e*=.85),e)}function pe(e,t,n,r=0){if(n&4)return 0;let i=k[e].fail;return i?Math.max(.02,Math.max(.05,i-.04*(t-1))-r):0}function me(e){let[t,n,r]=e.split(`:`);return{t,id:n,n:r?+r:1}}function he(e){if(e.t===`potion`)return ie[e.id].name;let t=k[e.id].name;return e.t===`scroll`?`Scroll of ${t}`:e.t===`tome`?`Tome of ${t}`:t}function ge(e){return e.t===`potion`?ie[e.id].color:ne[k[e.id].school]}var _e=e=>e.t===`potion`?`pot`:k[e.id].kind;function ve(e,t,n=[]){let r=me(t);r.t===`tome`&&e.some(e=>e.t===`spell`&&e.id===r.id)&&(r.t=`scroll`);let i=r.t===`tome`?`spell`:r.t,a=e.find(e=>e.t===i&&e.id===r.id);if(a)return{it:r,fits:a.n<3,swap:-1};let o=i===`spell`?3:2,s=e=>!!e&&e.t===i&&(i!==`spell`||_e(e)===_e(r));return e.filter(s).length<o?{it:r,fits:!0,swap:-1}:{it:r,fits:!1,swap:n.find(t=>s(e[t]))??e.findIndex(s)}}function ye(e,t){let{it:n,fits:r,swap:i}=ve(e,t);if(r||i<0)return[];let a=n.t===`tome`?`spell`:n.t;return e.flatMap((e,t)=>e.t===a&&(a!==`spell`||_e(e)===_e(n))?[t]:[])}Object.keys(k).filter(e=>!k[e].scrollOnly);var be={rat:{name:`Kleptomania`,potion:null,fix:`steal from your crew or grab something weird`,jones:`Your paws are itching. Steal something. Anything.`},kangaroo:{name:`Swamp Hooch`,potion:`hooch`,fix:`drink Swamp Hooch`,jones:`You need a drink. The shakes are getting bad.`},goblin:{name:`Gutter Sugar`,potion:`sugar`,fix:`snort Gutter Sugar`,jones:`Teeth itching. Eyes twitching. SUGAR.`}},xe={rat:{name:`Five-Finger Discount`,desc:`Lift a potion or scroll straight out of a crewmate's bag.`},kangaroo:{name:`Sucker Punch`,desc:`Stun a crewmate and punt them across the room.`},goblin:{name:`Hot Potato`,desc:`Stick a lit bomb to a crewmate.`}},Se={"Fuck Face":`Rats and skulls want nothing to do with you.`,"Body-Snatchin'":`Stolen bodies come back at full health.`,Saintly:`You pick up downed crewmates twice as fast.`,"Snitchin'":`Snitch boxes pay you double.`,"Two-Faced":`Every fake gift a crewmate opens pays you 20 gold.`,"Meat-Suited":`You climb into monsters three times faster.`,"Sugar-Brained":`Gutter Sugar lasts twice as long.`,"Sticky-Fingered":`You steal half again as much.`,"Backstabbin'":`Double damage hitting anything from behind.`,Butcher:`You hit monsters 20% harder.`,Fizzling:`Fizzled spells refund half their mana.`,"Twice-Dead":`You stay down for 60 seconds instead of 36.`,Stabby:`You swing 20% faster.`},Ce=.9;function we(e){return e.k===`gold`?`${e.v} gold`:e.k===`curse`?`cursed loot (${e.v} gold)`:`${he(e.it)}${e.it.n>1?` ×${e.it.n}`:``}`}var Te={vault:`Locked tight. A goblin's bomb would do it.`,boulder:`Way too heavy to move. Kangaroo work.`,vent:`Only a rat fits in there.`,door:`Sealed. Stand on both pressure plates in the last room at the same time.`,chasm:`Long way down. Read a Scroll of Dumbass Flight near the edge and you might clear it; back up more than a few steps and you won't. Or yank the goods over with Telekinesis.`};function Ee(e,t){for(let n of t.tiles)e.tiles[n]=0}function De(e){let t=y(e),n=_(e^189102637),r=(e,t)=>e+Math.floor(n()*(t-e+1)),i=(e,n)=>n*t.w+e,a=[],o=(e,t,n,r=[],i=0)=>{let o={id:a.length+1,k:e,x:t,z:n,tiles:r,link:i};return a.push(o),o};t.props=a,t.pockets=[],t.plateRoom=null;let s=t.rooms.length,c=t.rooms.slice(1,-1);if(s<3||!c.length)return t;let l=t.exitRoom,u=[];for(let e=l.x-1;e<=l.x+l.w;e++)for(let t of[l.z-1,l.z+l.h])u.push(i(e,t));for(let e=l.z;e<l.z+l.h;e++)for(let t of[l.x-1,l.x+l.w])u.push(i(t,e));let d=u.filter(e=>t.tiles[e]===0);for(let e of d)t.tiles[e]=2;if(d.length&&A(t,t.rooms.slice(0,-1))){let e=t.rooms[s-2],n=o(`door`,d.reduce((e,n)=>e+n%t.w,0)/d.length+.5,d.reduce((e,n)=>e+Math.floor(n/t.w),0)/d.length+.5,d);o(`plate`,e.x+1.5,e.z+1.5,[],n.id),o(`plate`,e.x+e.w-1.5,e.z+e.h-1.5,[],n.id),t.plateRoom=e}else for(let e of d)t.tiles[e]=0;let f=[`vault`,`boulder`,`vent`];f.push(f[r(0,2)],f[r(0,2)]);for(let e of f)for(let n=0;n<60;n++){let n=c[r(0,c.length-1)],[a,s]=[[0,-1],[0,1],[-1,0],[1,0]][r(0,3)],l,u;if(a===0){if(n.w<5)continue;l=r(n.x+2,n.x+n.w-3),u=s<0?n.z:n.z+n.h-1}else{if(n.h<5)continue;u=r(n.z+2,n.z+n.h-3),l=a<0?n.x:n.x+n.w-1}let d=l+a*3,f=u+s*3,p=!0;for(let e=f-2;e<=f+2&&p;e++)for(let n=d-2;n<=d+2;n++)if(n<1||e<1||n>t.w-2||e>t.h-2||t.tiles[i(n,e)]!==1){p=!1;break}if(!p)continue;for(let e=f-1;e<=f+1;e++)for(let n=d-1;n<=d+1;n++)t.tiles[i(n,e)]=0;let m=l+a,h=u+s;if(t.tiles[i(m,h)]=2,e===`vent`){let e=o(`secret`,m+.5,h+.5,[i(m,h)]),t=+(a===0),n=a===0?0:1,r=o(`vent`,l+t*2+.5,u+n*2+.5),c=o(`vent`,d+a+.5,f+s+.5);r.link=c.id,c.link=r.id,o(`lever`,d+t+.5,f+n+.5,[],e.id)}else o(e,m+.5,h+.5,[i(m,h)]);t.pockets.push({kind:e,x:d+.5,z:f+.5});break}for(let e=0,n=0;e<2&&n<80;n++){let n=c[r(0,c.length-1)];if(n===t.plateRoom)continue;let[s,l]=[[0,-1],[0,1],[-1,0],[1,0]][r(0,3)],u,d;if(s===0){if(n.w<7||n.h<6)continue;u=r(n.x+2,n.x+n.w-3),d=l<0?n.z:n.z+n.h-1}else{if(n.h<7||n.w<6)continue;d=r(n.z+2,n.z+n.h-3),u=s<0?n.x:n.x+n.w-1}let f=+(s===0),p=s===0?0:1,m=(e,t)=>[u+s*e+f*t,d+l*e+p*t],h=!0;for(let e=1;e<=13&&h;e++)for(let n=-3;n<=3;n++){let[r,a]=m(e,n);if(r<1||a<1||r>t.w-2||a>t.h-2||t.tiles[i(r,a)]!==1){h=!1;break}}if(!h||a.some(e=>Math.hypot(e.x-u-.5,e.z-d-.5)<2.5)||t.pockets.some(e=>e.kind===`chasm`&&Math.hypot(e.x-u,e.z-d)<20))continue;for(let e=1;e<=8;e++)for(let n=-1;n<=1;n++){let[r,a]=m(e,n);t.tiles[i(r,a)]=e<=4?3:0}let[g,_]=m(0,2);o(`chasm`,g+.5-s*.2,_+.5-l*.2);let[v,y]=m(6.5,0);t.pockets.push({kind:`chasm`,x:v+.5,z:y+.5,lip:[u+.5,d+.5]}),e++}let p=e=>[e.x+1.5+n()*(e.w-3),e.z+1.5+n()*(e.h-3)],m=()=>{let e=[...c];for(let t=e.length-1;t>0;t--){let n=r(0,t);[e[t],e[n]]=[e[n],e[t]]}return e},h=m(),g=m();for(let e=0;e<Math.min(2,h.length);e++)o(`bell`,...p(h[e]));for(let e=0;e<Math.min(s>7?2:1,g.length);e++)o(`snitch`,...p(g[e]));let v=m(),b=(e,n)=>t.tiles[i(e,n)]===1,x=(e,t)=>{for(let n=0;n<20;n++){let[n,i]=[[0,-1],[0,1],[-1,0],[1,0]][r(0,3)],s=n===0?r(t.x+1,t.x+t.w-2):n<0?t.x:t.x+t.w-1,c=i===0?r(t.z+1,t.z+t.h-2):i<0?t.z:t.z+t.h-1,l=i===0?0:1,u=+(i===0);if(!b(s+n,c+i)||!b(s+n+l,c+i+u)||!b(s+n-l,c+i-u))continue;let d=s+.5+n*.25,f=c+.5+i*.25;if(!a.some(e=>Math.hypot(e.x-d,e.z-f)<1.5))return o(e,d,f)}return null};for(let e=0;e<Math.min(4,v.length);e++)x(`locker`,v[e]);for(let e of c){for(let t=0,r=e.w*e.h>48&&n()<.5?2:1;t<r;t++)x(`chest`,e);if(n()<.4&&x(`shelf`,e),n()<.5&&x(`desk`,e),n()<.4&&e!==t.plateRoom&&e.w>=5&&e.h>=5)for(let t=0;t<10;t++){let[t,n]=p(e);if(!a.some(e=>Math.hypot(e.x-t,e.z-n)<2)){o(`apothecary`,t,n);break}}}return t}function A(e,t){let n=new Uint8Array(e.w*e.h),r=Math.floor(e.start.cz)*e.w+Math.floor(e.start.cx),i=[r];n[r]=1;for(let t=0;t<i.length;t++){let r=i[t];for(let t of[1,-1,e.w,-e.w]){let a=r+t;a>=0&&a<n.length&&!n[a]&&e.tiles[a]===0&&(n[a]=1,i.push(a))}}return t.every(t=>n[Math.floor(t.cz)*e.w+Math.floor(t.cx)])}var Oe={brawn:{name:`Brawn`,color:`#ff6a4a`,blurb:`Hit harder, bleed slower.`},guile:{name:`Guile`,color:`#ffd23a`,blurb:`Steal more, pay less, screw your crew faster.`},sorcery:{name:`Sorcery`,color:`#5ab0ff`,blurb:`More mana, fewer fizzles, bigger bangs.`},grit:{name:`Grit`,color:`#6aff9a`,blurb:`Get your health and mana back without a potion.`},moves:{name:`Moves`,color:`#d08aff`,blurb:`Not part of the tree. No prerequisites, learn them whenever.`}},ke=[`brawn`,`guile`,`sorcery`,`grit`],Ae=.75,j=.1,je=.75,M=.3,Me=1.5,Ne=[{id:`unkill`,hp:1.2,mp:1},{id:`bounce`,hp:.8,mp:.65},{id:`wind`,hp:.5,mp:.4},{id:`breath`,hp:.3,mp:.225}],Pe=e=>Ne.find(t=>t.id===e),Fe=e=>`Get back ${Pe(e).hp} HP and ${Pe(e).mp} mana a second. Stops for 5s whenever you get hurt. After 20s of healing you're winded for a minute.`,Ie={thick:{name:`Thick Skin`,branch:`brawn`,tier:1,cost:1,desc:`+25 max HP.`},knuckles:{name:`Heavy Knuckles`,branch:`brawn`,tier:2,cost:1,desc:`Your melee hits 20% harder.`},vampire:{name:`Bloodthirsty`,branch:`brawn`,tier:3,cost:2,desc:`Every monster you kill heals you 6 HP.`},tank:{name:`Pain Sponge`,branch:`brawn`,tier:4,cost:2,desc:`You take 20% less damage.`},pockets:{name:`Light Fingers`,branch:`guile`,tier:1,cost:1,desc:`Pickpocketing takes half again as much.`},haggle:{name:`Haggler`,branch:`guile`,tier:2,cost:1,desc:`Pit Stop merchants charge you 25% less.`},shifty:{name:`Shifty`,branch:`guile`,tier:3,cost:2,desc:`Your ability and dirty trick recharge 30% faster.`},born:{name:`Born Bastard`,branch:`guile`,tier:4,cost:2,desc:`Your Bastard meter fills twice as fast.`},brain:{name:`Big Brain`,branch:`sorcery`,tier:1,cost:1,desc:`+25 max mana.`},steady:{name:`Steady Hands`,branch:`sorcery`,tier:2,cost:1,desc:`Spells fizzle ${Math.round(j*100)}% less often.`},cheap:{name:`Cheap Tricks`,branch:`sorcery`,tier:3,cost:2,desc:`Spells cost 25% less mana.`},over:{name:`Overcharged`,branch:`sorcery`,tier:4,cost:2,desc:`Your spells hit 25% harder.`},breath:{name:`Catch Your Breath`,branch:`grit`,tier:1,cost:1,desc:Fe(`breath`)},wind:{name:`Second Wind`,branch:`grit`,tier:2,cost:2,desc:`${Fe(`wind`)} Replaces Catch Your Breath.`},bounce:{name:`Bounce Back`,branch:`grit`,tier:3,cost:3,desc:`${Fe(`bounce`)} Replaces Second Wind.`},unkill:{name:`Unkillable`,branch:`grit`,tier:4,cost:4,desc:`${Fe(`unkill`)} Replaces Bounce Back.`},roll:{name:`Tuck and Roll`,branch:`moves`,tier:1,cost:2,desc:`Dodge roll. Nothing can hurt you mid-roll. Recharges in ${Me}s. Not while hauling something.`}},Le=Object.keys(Ie),Re=e=>1<<Le.indexOf(e),ze=(e,t)=>!!(e&Re(t)),Be=e=>Le.filter(t=>Ie[t].branch===e).sort((e,t)=>Ie[e].tier-Ie[t].tier);function Ve(e,t,n){if(ze(e,t))return`owned`;let r=Ie[t],i=Be(r.branch).find(e=>Ie[e].tier===r.tier-1);return i&&!ze(e,i)?`locked`:n>=r.cost?`ok`:`poor`}var He=[`potions`,`books`,`trainer`,`fence`,`tailor`],Ue={potions:{name:`Mama Rotgut's Apothecary`,sign:`POTIONS`,keeper:`goblin`,color:`#e03030`,blurb:`Potions, by the bottle. No refunds, no questions, no labels you can trust.`,greet:[`Drink up, sweetie. Most of it's not poison.`,`Rotgut is half price for gifting. Wink.`,`You look like you're about to die. Buy something.`]},books:{name:`The Wet Library`,sign:`BOOKS`,keeper:`warlock`,color:`#5ad0ff`,blurb:`Tomes teach a spell for good. Scrolls are one shot and never fizzle. Stock changes every visit, and there's one of each tome. First come, first served.`,greet:[`Shhh. This is a library. Mostly mold.`,`Read it before your crewmate does.`,`Some of these pages are still damp. Spells work fine.`]},trainer:{name:`Coach Knuckles`,sign:`TRAINER`,keeper:`kangaroo`,color:`#ffb04a`,blurb:`Buys you skill points for your skill tree (pause menu, Skills tab). Every point costs more than the last. Or pay to forget everything and spend your points again.`,greet:[`Drop and give me twenty. Gold.`,`Pain is weakness leaving your wallet.`,`You call that a skill tree? That's a skill shrub.`]},fence:{name:`Fingers the Fence`,sign:`FENCE`,keeper:`rat`,color:`#b0b8c0`,blurb:`Buys your potions and scrolls, and teaches you to forget a spell for the price of its tome. Pays a fraction of what it's worth. It's a fence.`,greet:[`Didn't steal it? Doesn't matter.`,`I'll give you a fair price. For me.`,`No receipts. No names. No refunds.`]},tailor:{name:`Bones the Skin Tailor`,sign:`SKINS`,keeper:`skull`,color:`#d8c8ff`,blurb:`Swap your whole body for a different bastard. Free, because nobody else wants the old one. Your level, skills, gold and bag come with you.`,greet:[`New skin, same bastard.`,`Don't worry about the stitches. They're load-bearing.`,`I keep the old ones. Hobby.`]}},We={heal:25,mana:20,hooch:15,sugar:60,rotgut:10};function Ge(e){if(e.t===`potion`)return We[e.id];let t=k[e.id].cost;return e.t===`scroll`?e.id===`flight`?25:e.id===`yeet`?20:15+t:50+t*2}var Ke=.4,qe=.15,Je=e=>Math.floor(Ge(e)*e.n*qe),Ye=(e,t)=>Math.ceil(e*(ze(t,`haggle`)?Ae:1)),Xe=e=>120+80*e,Ze=30,Qe=18,$e={x:2,z:3,w:26,h:12},et=[4,9,14,19,24];function tt(){let e=new Uint8Array(540).fill(1),t=(e,t)=>t*Ze+e;for(let n=$e.z;n<$e.z+$e.h;n++)for(let r=$e.x;r<$e.x+$e.w;r++)e[t(r,n)]=0;let n=(e,t)=>({x:e,z:$e.z,w:t,h:$e.h,cx:e+t/2,cz:$e.z+$e.h/2}),r=n($e.x,$e.w),i=He.map((n,r)=>{let i=et[r],a=$e.z,o=$e.z+1,s=[t(i-1,a),t(i+2,a),t(i,o),t(i+1,o)];for(let t of s)e[t]=2;return{id:r+1,k:`shop`,x:i+1,z:o+.5,tiles:s,link:r}});return{w:Ze,h:Qe,tiles:e,rooms:[n($e.x,13),n($e.x+13,13)],start:{x:3,z:8,w:3,h:4,cx:4.5,cz:10},exit:{x:25.5,z:10.5},exitRoom:r,props:i,pockets:[],plateRoom:null}}var nt=1.7;function rt(e,t,n){let r=null,i=nt;for(let a of e.props){if(a.k!==`shop`)continue;let e=Math.hypot(a.x-t,a.z-n);e<i&&(i=e,r=a)}return r?{prop:r,shop:He[r.link]}:null}var it=32,at=40,ot={x:4,z:4,w:24,h:20,cx:16,cz:14},st={x:15,z:24,w:3,h:6},ct={x:13,z:30,w:7,h:6,cx:16.5,cz:33},lt=[[8,9],[22,9],[8,18],[22,18]];ot.z+ot.h-3;function ut(){let e=new Uint8Array(1280).fill(1),t=t=>{for(let n=t.z;n<t.z+t.h;n++)for(let r=t.x;r<t.x+t.w;r++)e[n*it+r]=0};t(ot),t(st),t(ct);for(let[t,n]of lt)for(let r=n;r<n+2;r++)for(let n=t;n<t+2;n++)e[r*it+n]=1;let n=(e,t)=>({x:e,z:ot.z,w:t,h:ot.h,cx:e+t/2,cz:ot.cz});return{w:it,h:at,tiles:e,rooms:[ct,n(ot.x,12),n(ot.x+12,12)],start:ct,exit:{x:16.5,z:ot.z+1.5},exitRoom:ot,props:[],pockets:[],plateRoom:null}}var dt=1e3,ft=1001,pt=1002,mt=1003,ht=1004,gt=1005,_t=1006,vt=1007,yt=1008,bt=1009,xt=1010,St=1011,Ct=1012,wt=1013,Tt=1014,Et=1015,Dt=1016,Ot=1017,kt=1018,At=1020,jt=35902,Mt=35899,Nt=1021,Pt=1022,Ft=1023,It=1026,Lt=1027,Rt=1028,zt=1029,Bt=1030,Vt=1031,Ht=1033,Ut=33776,Wt=33777,Gt=33778,Kt=33779,qt=35840,Jt=35841,Yt=35842,Xt=35843,Zt=36196,Qt=37492,$t=37496,en=37488,tn=37489,nn=37490,rn=37491,an=37808,on=37809,sn=37810,cn=37811,ln=37812,un=37813,dn=37814,fn=37815,pn=37816,mn=37817,hn=37818,gn=37819,_n=37820,vn=37821,yn=36492,bn=36494,xn=36495,Sn=36283,Cn=36284,wn=36285,Tn=36286,En=2300,Dn=2301,On=2302,kn=2303,An=2400,jn=2401,Mn=2402,Nn=3200,Pn=`srgb`,Fn=`srgb-linear`,In=`linear`,Ln=`srgb`,Rn=7680,zn=35044,Bn=2e3;function Vn(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Hn(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Un(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Wn(){let e=Un(`canvas`);return e.style.display=`block`,e}var Gn={};function Kn(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function qn(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function N(...e){e=qn(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function P(...e){e=qn(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Jn(...e){let t=e.join(` `);t in Gn||(Gn[t]=!0,N(...e))}function Yn(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Xn={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Qn=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),$n=Math.PI/180,er=180/Math.PI;function tr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qn[e&255]+Qn[e>>8&255]+Qn[e>>16&255]+Qn[e>>24&255]+`-`+Qn[t&255]+Qn[t>>8&255]+`-`+Qn[t>>16&15|64]+Qn[t>>24&255]+`-`+Qn[n&63|128]+Qn[n>>8&255]+`-`+Qn[n>>16&255]+Qn[n>>24&255]+Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]).toLowerCase()}function nr(e,t,n){return Math.max(t,Math.min(n,e))}function rr(e,t){return(e%t+t)%t}function ir(e,t,n){return(1-n)*e+n*t}function ar(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function or(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var F=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nr(this.x,e.x,t.x),this.y=nr(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nr(this.x,e,t),this.y=nr(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},sr=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:N(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nr(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nr(this.x,e.x,t.x),this.y=nr(this.y,e.y,t.y),this.z=nr(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nr(this.x,e,t),this.y=nr(this.y,e,t),this.z=nr(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cr.copy(this).projectOnVector(e),this.sub(cr)}reflect(e){return this.sub(cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cr=new I,lr=new sr,ur=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Jn(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(dr.makeScale(e,t)),this}rotate(e){return Jn(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(dr.makeRotation(-e)),this}translate(e,t){return Jn(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(dr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dr=new ur,fr=new ur().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pr=new ur().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mr(){let e={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=gr(e.r),e.g=gr(e.g),e.b=gr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=_r(e.r),e.g=_r(e.g),e.b=_r(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?In:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Jn(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Jn(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Fn]:{primaries:t,whitePoint:r,transfer:In,toXYZ:fr,fromXYZ:pr,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:r,transfer:Ln,toXYZ:fr,fromXYZ:pr,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),e}var hr=mr();function gr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function _r(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var vr,yr=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vr===void 0&&(vr=Un(`canvas`)),vr.width=e.width,vr.height=e.height;let t=vr.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=vr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Un(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=gr(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(gr(t[e]/255)*255):t[e]=gr(t[e]);return{data:t,width:e.width,height:e.height}}return N(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},br=0,xr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Sr(r[t].image)):e.push(Sr(r[t]))}else e=Sr(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Sr(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?yr.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(N(`Texture: Unable to serialize Texture.`),{})}var Cr=0,wr=new I,Tr=class e extends Zn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ft,i=ft,a=_t,o=yt,s=Ft,c=bt,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cr++}),this.uuid=tr(),this.name=``,this.source=new xr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new F(0,0),this.repeat=new F(1,1),this.center=new F(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ur,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wr).x}get height(){return this.source.getSize(wr).y}get depth(){return this.source.getSize(wr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){N(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?N(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dt:e.x-=Math.floor(e.x);break;case ft:e.x=e.x<0?0:1;break;case pt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case dt:e.y-=Math.floor(e.y);break;case ft:e.y=e.y<0?0:1;break;case pt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tr.DEFAULT_IMAGE=null,Tr.DEFAULT_MAPPING=300,Tr.DEFAULT_ANISOTROPY=1;var Er=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nr(this.x,e.x,t.x),this.y=nr(this.y,e.y,t.y),this.z=nr(this.z,e.z,t.z),this.w=nr(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nr(this.x,e,t),this.y=nr(this.y,e,t),this.z=nr(this.z,e,t),this.w=nr(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dr=class extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Er(0,0,e,t),this.scissorTest=!1,this.viewport=new Er(0,0,e,t),this.textures=[];let r=new Tr({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new xr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Or=class extends Dr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},kr=class extends Tr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mt,this.minFilter=mt,this.wrapR=ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ar=class extends Tr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mt,this.minFilter=mt,this.wrapR=ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},jr=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),i=1/Mr.setFromMatrixColumn(e,1).length(),a=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pr,e,Fr)}lookAt(e,t,n){let r=this.elements;return Rr.subVectors(e,t),Rr.lengthSq()===0&&(Rr.z=1),Rr.normalize(),Ir.crossVectors(n,Rr),Ir.lengthSq()===0&&(Math.abs(n.z)===1?Rr.x+=1e-4:Rr.z+=1e-4,Rr.normalize(),Ir.crossVectors(n,Rr)),Ir.normalize(),Lr.crossVectors(Rr,Ir),r[0]=Ir.x,r[4]=Lr.x,r[8]=Rr.x,r[1]=Ir.y,r[5]=Lr.y,r[9]=Rr.y,r[2]=Ir.z,r[6]=Lr.z,r[10]=Rr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],te=r[6],ne=r[10],re=r[14],k=r[3],ie=r[7],ae=r[11],oe=r[15];return i[0]=a*x+o*T+s*ee+c*k,i[4]=a*S+o*E+s*te+c*ie,i[8]=a*C+o*D+s*ne+c*ae,i[12]=a*w+o*O+s*re+c*oe,i[1]=l*x+u*T+d*ee+f*k,i[5]=l*S+u*E+d*te+f*ie,i[9]=l*C+u*D+d*ne+f*ae,i[13]=l*w+u*O+d*re+f*oe,i[2]=p*x+m*T+h*ee+g*k,i[6]=p*S+m*E+h*te+g*ie,i[10]=p*C+m*D+h*ne+g*ae,i[14]=p*w+m*O+h*re+g*oe,i[3]=_*x+v*T+y*ee+b*k,i[7]=_*S+v*E+y*te+b*ie,i[11]=_*C+v*D+y*ne+b*ae,i[15]=_*w+v*O+y*re+b*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let te=1/ee;return e[0]=(o*O-s*D+c*E)*te,e[1]=(r*D-n*O-i*E)*te,e[2]=(m*S-h*x+g*b)*te,e[3]=(d*x-u*S-f*b)*te,e[4]=(s*T-a*O-c*w)*te,e[5]=(t*O-r*T+i*w)*te,e[6]=(h*y-p*S-g*v)*te,e[7]=(l*S-d*y+f*v)*te,e[8]=(a*D-o*T+c*C)*te,e[9]=(n*T-t*D-i*C)*te,e[10]=(p*x-m*y+g*_)*te,e[11]=(u*y-l*x-f*_)*te,e[12]=(o*w-a*E-s*C)*te,e[13]=(t*E-n*w+r*C)*te,e[14]=(m*v-p*b-h*_)*te,e[15]=(l*b-u*v+d*_)*te,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Mr.set(r[0],r[1],r[2]).length(),o=Mr.set(r[4],r[5],r[6]).length(),s=Mr.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Nr.copy(this);let c=1/a,l=1/o,u=1/s;return Nr.elements[0]*=c,Nr.elements[1]*=c,Nr.elements[2]*=c,Nr.elements[4]*=l,Nr.elements[5]*=l,Nr.elements[6]*=l,Nr.elements[8]*=u,Nr.elements[9]*=u,Nr.elements[10]*=u,t.setFromRotationMatrix(Nr),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Bn,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Bn,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mr=new I,Nr=new jr,Pr=new I(0,0,0),Fr=new I(1,1,1),Ir=new I,Lr=new I,Rr=new I,zr=new jr,Br=new sr,Vr=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(nr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-nr(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(nr(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-nr(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(nr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-nr(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:N(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Br.setFromEuler(this),this.setFromQuaternion(Br,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vr.DEFAULT_ORDER=`XYZ`;var Hr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ur=0,Wr=new I,Gr=new sr,Kr=new jr,qr=new I,Jr=new I,Yr=new I,Xr=new sr,Zr=new I(1,0,0),Qr=new I(0,1,0),$r=new I(0,0,1),ei={type:`added`},ti={type:`removed`},ni={type:`childadded`,child:null},ri={type:`childremoved`,child:null},ii=class e extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ur++}),this.uuid=tr(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new I,n=new Vr,r=new sr,i=new I(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jr},normalMatrix:{value:new ur}}),this.matrix=new jr,this.matrixWorld=new jr,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Zr,e)}rotateY(e){return this.rotateOnAxis(Qr,e)}rotateZ(e){return this.rotateOnAxis($r,e)}translateOnAxis(e,t){return Wr.copy(e).applyQuaternion(this.quaternion),this.position.add(Wr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zr,e)}translateY(e){return this.translateOnAxis(Qr,e)}translateZ(e){return this.translateOnAxis($r,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qr.copy(e):qr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kr.lookAt(Jr,qr,this.up):Kr.lookAt(qr,Jr,this.up),this.quaternion.setFromRotationMatrix(Kr),r&&(Kr.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(Kr),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(P(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ei),ni.child=e,this.dispatchEvent(ni),ni.child=null):P(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ti),ri.child=e,this.dispatchEvent(ri),ri.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ei),ni.child=e,this.dispatchEvent(ni),ni.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,Yr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Xr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ii.DEFAULT_UP=new I(0,1,0),ii.DEFAULT_MATRIX_AUTO_UPDATE=!0,ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=class extends ii{constructor(){super(),this.isGroup=!0,this.type=`Group`}},oi={type:`move`},si=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(oi)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ci={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},ui={h:0,s:0,l:0};function di(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var fi=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,hr.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=hr.workingColorSpace){return this.r=e,this.g=t,this.b=n,hr.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=hr.workingColorSpace){if(e=rr(e,1),t=nr(t,0,1),n=nr(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=di(i,r,e+1/3),this.g=di(i,r,e),this.b=di(i,r,e-1/3)}return hr.colorSpaceToWorking(this,r),this}setStyle(e,t=Pn){function n(t){t!==void 0&&parseFloat(t)<1&&N(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:N(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);N(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){let n=ci[e.toLowerCase()];return n===void 0?N(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return hr.workingToColorSpace(pi.copy(this),e),Math.round(nr(pi.r*255,0,255))*65536+Math.round(nr(pi.g*255,0,255))*256+Math.round(nr(pi.b*255,0,255))}getHexString(e=Pn){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=hr.workingColorSpace){hr.workingToColorSpace(pi.copy(this),t);let n=pi.r,r=pi.g,i=pi.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=hr.workingColorSpace){return hr.workingToColorSpace(pi.copy(this),t),e.r=pi.r,e.g=pi.g,e.b=pi.b,e}getStyle(e=Pn){hr.workingToColorSpace(pi.copy(this),e);let t=pi.r,n=pi.g,r=pi.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(ui);let n=ir(li.h,ui.h,t),r=ir(li.s,ui.s,t),i=ir(li.l,ui.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pi=new fi;fi.NAMES=ci;var mi=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new fi(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hi=class extends ii{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},gi=new I,_i=new I,vi=new I,yi=new I,bi=new I,xi=new I,Si=new I,Ci=new I,wi=new I,Ti=new I,Ei=new Er,Di=new Er,Oi=new Er,ki=class e{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),gi.subVectors(e,t),r.cross(gi);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){gi.subVectors(r,t),_i.subVectors(n,t),vi.subVectors(e,t);let a=gi.dot(gi),o=gi.dot(_i),s=gi.dot(vi),c=_i.dot(_i),l=_i.dot(vi),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yi)!==null&&yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,yi)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,yi.x),s.addScaledVector(a,yi.y),s.addScaledVector(o,yi.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Ei.setScalar(0),Di.setScalar(0),Oi.setScalar(0),Ei.fromBufferAttribute(e,t),Di.fromBufferAttribute(e,n),Oi.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ei,i.x),a.addScaledVector(Di,i.y),a.addScaledVector(Oi,i.z),a}static isFrontFacing(e,t,n,r){return gi.subVectors(n,t),_i.subVectors(e,t),gi.cross(_i).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),gi.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;bi.subVectors(r,n),xi.subVectors(i,n),Ci.subVectors(e,n);let s=bi.dot(Ci),c=xi.dot(Ci);if(s<=0&&c<=0)return t.copy(n);wi.subVectors(e,r);let l=bi.dot(wi),u=xi.dot(wi);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(bi,a);Ti.subVectors(e,i);let f=bi.dot(Ti),p=xi.dot(Ti);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(xi,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Si.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Si,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(bi,a).addScaledVector(xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ai=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Mi):Mi.fromBufferAttribute(r,t),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ni.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ni.copy(e.boundingBox)),Ni.applyMatrix4(e.matrixWorld),this.union(Ni)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),Vi.subVectors(this.max,Bi),Pi.subVectors(e.a,Bi),Fi.subVectors(e.b,Bi),Ii.subVectors(e.c,Bi),Li.subVectors(Fi,Pi),Ri.subVectors(Ii,Fi),zi.subVectors(Pi,Ii);let t=[0,-Li.z,Li.y,0,-Ri.z,Ri.y,0,-zi.z,zi.y,Li.z,0,-Li.x,Ri.z,0,-Ri.x,zi.z,0,-zi.x,-Li.y,Li.x,0,-Ri.y,Ri.x,0,-zi.y,zi.x,0];return!Wi(t,Pi,Fi,Ii,Vi)||(t=[1,0,0,0,1,0,0,0,1],!Wi(t,Pi,Fi,Ii,Vi))?!1:(Hi.crossVectors(Li,Ri),t=[Hi.x,Hi.y,Hi.z],Wi(t,Pi,Fi,Ii,Vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ji=[new I,new I,new I,new I,new I,new I,new I,new I],Mi=new I,Ni=new Ai,Pi=new I,Fi=new I,Ii=new I,Li=new I,Ri=new I,zi=new I,Bi=new I,Vi=new I,Hi=new I,Ui=new I;function Wi(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Ui.fromArray(e,a);let o=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),s=t.dot(Ui),c=n.dot(Ui),l=r.dot(Ui);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Gi=new I,Ki=new F,qi=0,Ji=class extends Zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qi++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=zn,this.updateRanges=[],this.gpuType=Et,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ki.fromBufferAttribute(this,t),Ki.applyMatrix3(e),this.setXY(t,Ki.x,Ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXYZ(t,Gi.x,Gi.y,Gi.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix4(e),this.setXYZ(t,Gi.x,Gi.y,Gi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyNormalMatrix(e),this.setXYZ(t,Gi.x,Gi.y,Gi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.transformDirection(e),this.setXYZ(t,Gi.x,Gi.y,Gi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ar(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=or(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=or(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=or(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=or(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=or(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=or(t,this.array),n=or(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=or(t,this.array),n=or(n,this.array),r=or(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=or(t,this.array),n=or(n,this.array),r=or(r,this.array),i=or(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Yi=class extends Ji{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Xi=class extends Ji{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Zi=class extends Ji{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qi=new Ai,$i=new I,ea=new I,ta=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Qi.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);let t=$i.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector($i,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(ea)),this.expandByPoint($i.copy(e.center).sub(ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},na=0,ra=new jr,ia=new ii,aa=new I,oa=new Ai,sa=new Ai,ca=new I,la=class e extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:na++}),this.uuid=tr(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Vn(e)?Xi:Yi)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new ur().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ra.makeRotationFromQuaternion(e),this.applyMatrix4(ra),this}rotateX(e){return ra.makeRotationX(e),this.applyMatrix4(ra),this}rotateY(e){return ra.makeRotationY(e),this.applyMatrix4(ra),this}rotateZ(e){return ra.makeRotationZ(e),this.applyMatrix4(ra),this}translate(e,t,n){return ra.makeTranslation(e,t,n),this.applyMatrix4(ra),this}scale(e,t,n){return ra.makeScale(e,t,n),this.applyMatrix4(ra),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Zi(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&N(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)P(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];oa.setFromBufferAttribute(n),this.morphTargetsRelative?(ca.addVectors(this.boundingBox.min,oa.min),this.boundingBox.expandByPoint(ca),ca.addVectors(this.boundingBox.max,oa.max),this.boundingBox.expandByPoint(ca)):(this.boundingBox.expandByPoint(oa.min),this.boundingBox.expandByPoint(oa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&P(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)P(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new I,1/0);else if(e){let n=this.boundingSphere.center;if(oa.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];sa.setFromBufferAttribute(n),this.morphTargetsRelative?(ca.addVectors(oa.min,sa.min),oa.expandByPoint(ca),ca.addVectors(oa.max,sa.max),oa.expandByPoint(ca)):(oa.expandByPoint(sa.min),oa.expandByPoint(sa.max))}oa.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ca.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ca));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ca.fromBufferAttribute(a,t),o&&(aa.fromBufferAttribute(e,t),ca.add(aa)),r=Math.max(r,n.distanceToSquared(ca))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&P(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){P(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Ji(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new I,s[e]=new I;let c=new I,l=new I,u=new I,d=new F,f=new F,p=new F,m=new I,h=new I;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new I,y=new I,b=new I,x=new I;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Ji(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new I,i=new I,a=new I,o=new I,s=new I,c=new I,l=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ca.fromBufferAttribute(e,t),ca.normalize(),e.setXYZ(t,ca.x,ca.y,ca.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Ji(a,r,i)}if(this.index===null)return N(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ua=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=zn,this.updateRanges=[],this.version=0,this.uuid=tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},da=new I,fa=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix4(e),this.setXYZ(t,da.x,da.y,da.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyNormalMatrix(e),this.setXYZ(t,da.x,da.y,da.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.transformDirection(e),this.setXYZ(t,da.x,da.y,da.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ar(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=or(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=or(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=or(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=or(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=or(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ar(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ar(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ar(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ar(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=or(t,this.array),n=or(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=or(t,this.array),n=or(n,this.array),r=or(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=or(t,this.array),n=or(n,this.array),r=or(r,this.array),i=or(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Kn(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Ji(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Kn(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pa=new I,ma=new I,ha=new ur,ga=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=pa.subVectors(n,t).cross(ma.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(pa),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ha.getNormalMatrix(e),r=this.coplanarPoint(pa).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},_a=0,va=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_a++}),this.uuid=tr(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fi(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rn,this.stencilZFail=Rn,this.stencilZPass=Rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){N(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?N(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new fi().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ga().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new F().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new F().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ya=class extends va{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new fi(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ba,xa=new I,Sa=new I,Ca=new I,wa=new F,Ta=new F,Ea=new jr,Da=new I,Oa=new I,ka=new I,Aa=new F,ja=new F,Ma=new F,Na=class extends ii{constructor(e=new ya){if(super(),this.isSprite=!0,this.type=`Sprite`,ba===void 0){ba=new la;let e=new ua(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ba.setIndex([0,1,2,0,2,3]),ba.setAttribute(`position`,new fa(e,3,0,!1)),ba.setAttribute(`uv`,new fa(e,2,3,!1))}this.geometry=ba,this.material=e,this.center=new F(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&P(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Sa.setFromMatrixScale(this.matrixWorld),Ea.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ca.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sa.multiplyScalar(-Ca.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Pa(Da.set(-.5,-.5,0),Ca,a,Sa,r,i),Pa(Oa.set(.5,-.5,0),Ca,a,Sa,r,i),Pa(ka.set(.5,.5,0),Ca,a,Sa,r,i),Aa.set(0,0),ja.set(1,0),Ma.set(1,1);let o=e.ray.intersectTriangle(Da,Oa,ka,!1,xa);if(o===null&&(Pa(Oa.set(-.5,.5,0),Ca,a,Sa,r,i),ja.set(0,1),o=e.ray.intersectTriangle(Da,ka,Oa,!1,xa),o===null))return;let s=e.ray.origin.distanceTo(xa);s<e.near||s>e.far||t.push({distance:s,point:xa.clone(),uv:ki.getInterpolation(xa,Da,Oa,ka,Aa,ja,Ma,new F),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Pa(e,t,n,r,i,a){wa.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Ta.copy(wa):(Ta.x=a*wa.x-i*wa.y,Ta.y=i*wa.x+a*wa.y),e.copy(t),e.x+=Ta.x,e.y+=Ta.y,e.applyMatrix4(Ea)}var Fa=new I,Ia=new I,La=new I,Ra=new I,za=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fa)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fa.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fa.copy(this.origin).addScaledVector(this.direction,t),Fa.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ia.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Ra.copy(this.origin).sub(Ia);let i=e.distanceTo(t)*.5,a=-this.direction.dot(La),o=Ra.dot(this.direction),s=-Ra.dot(La),c=Ra.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ia).addScaledVector(La,d),f}intersectSphere(e,t){if(e.radius<0)return null;Fa.subVectors(e.center,this.origin);let n=Fa.dot(this.direction),r=Fa.dot(Fa)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fa)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,te,ne,re,k;if(y>=b&&y>=x?(w=s,D=u,te=p,k=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,ne=_,re=v):(S=l,C=c,T=f,E=d,O=h,ee=m,ne=v,re=_)):b>=x?(w=c,D=d,te=m,k=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,ne=v,re=g):(S=s,C=l,T=u,E=f,O=p,ee=h,ne=g,re=v)):(w=l,D=f,te=h,k=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,ne=g,re=_):(S=c,C=s,T=d,E=u,O=m,ee=p,ne=_,re=g)),w===0)return null;let ie=S/w,ae=C/w,oe=1/w,se=T-ie*D,ce=E-ae*D,le=O-ie*te,ue=ee-ae*te,de=ne-ie*k,fe=re-ae*k,pe=de*ue-fe*le,me=se*fe-ce*de,he=le*ce-ue*se;if(r){if(pe<0||me<0||he<0)return null}else if((pe<0||me<0||he<0)&&(pe>0||me>0||he>0))return null;let ge=pe+me+he;if(ge===0)return null;let _e=oe*(pe*D+me*te+he*k);return(ge>0?_e<0:_e>0)?null:this.at(_e/ge,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ba=class extends va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new fi(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Va=new jr,Ha=new za,Ua=new ta,Wa=new I,Ga=new I,Ka=new I,qa=new I,Ja=new I,Ya=new I,Xa=new I,Za=new I,L=class extends ii{constructor(e=new la,t=new Ba){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ya.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ja.fromBufferAttribute(s,e),a?Ya.addScaledVector(Ja,r):Ya.addScaledVector(Ja.sub(t),r))}t.add(Ya)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ha.copy(e.ray).recast(e.near),!(Ua.containsPoint(Ha.origin)===!1&&(Ha.intersectSphere(Ua,Wa)===null||Ha.origin.distanceToSquared(Wa)>(e.far-e.near)**2))&&(Va.copy(i).invert(),Ha.copy(e.ray).applyMatrix4(Va),(n.boundingBox===null||Ha.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ha)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=$a(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=$a(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=$a(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=$a(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Qa(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Za.copy(s),Za.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Za);return l<n.near||l>n.far?null:{distance:l,point:Za.clone(),object:e}}function $a(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ga),e.getVertexPosition(c,Ka),e.getVertexPosition(l,qa);let u=Qa(e,t,n,r,Ga,Ka,qa,Xa);if(u){let e=new I;ki.getBarycoord(Xa,Ga,Ka,qa,e),i&&(u.uv=ki.getInterpolatedAttribute(i,s,c,l,e,new F)),a&&(u.uv1=ki.getInterpolatedAttribute(a,s,c,l,e,new F)),o&&(u.normal=ki.getInterpolatedAttribute(o,s,c,l,e,new I),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new I,materialIndex:0};ki.getNormal(Ga,Ka,qa,t.normal),u.face=t,u.barycoord=e}return u}var eo=class extends Tr{constructor(e=null,t=1,n=1,r,i,a,o,s,c=mt,l=mt,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},to=class extends Ji{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},no=new jr,ro=new jr,io=[],ao=new Ai,oo=new jr,so=new L,co=new ta,lo=class extends L{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new to(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,oo)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,no),ao.copy(e.boundingBox).applyMatrix4(no),this.boundingBox.union(ao)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ta),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,no),co.copy(e.boundingSphere).applyMatrix4(no),this.boundingSphere.union(co)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),co.copy(this.boundingSphere),co.applyMatrix4(n),e.ray.intersectsSphere(co)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,no),ro.multiplyMatrices(n,no),so.matrixWorld=ro,so.raycast(e,io);for(let e=0,n=io.length;e<n;e++){let n=io[e];n.instanceId=i,n.object=this,t.push(n)}io.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new to(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(r*this.count),r,this.count,Rt,Et));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},uo=new ta,fo=new F(.5,.5),po=new I,mo=class{constructor(e=new ga,t=new ga,n=new ga,r=new ga,i=new ga,a=new ga){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),uo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),uo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(uo)}intersectsSprite(e){return uo.center.set(0,0,0),uo.radius=.7071067811865476+fo.distanceTo(e.center),uo.applyMatrix4(e.matrixWorld),this.intersectsSphere(uo)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(po.x=r.normal.x>0?e.max.x:e.min.x,po.y=r.normal.y>0?e.max.y:e.min.y,po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ho=class extends va{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new fi(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},go=new I,_o=new I,vo=new jr,yo=new za,bo=new ta,xo=new I,So=new I,Co=class extends ii{constructor(e=new la,t=new ho){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)go.fromBufferAttribute(t,e-1),_o.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=go.distanceTo(_o);e.setAttribute(`lineDistance`,new Zi(n,1))}else N(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(r),bo.radius+=i,e.ray.intersectsSphere(bo)===!1)return;vo.copy(r).invert(),yo.copy(e.ray).applyMatrix4(vo);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=wo(this,e,yo,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=wo(this,e,yo,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=wo(this,e,yo,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=wo(this,e,yo,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wo(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(go.fromBufferAttribute(s,i),_o.fromBufferAttribute(s,a),n.distanceSqToSegment(go,_o,xo,So)>r)return;xo.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(xo);if(!(c<t.near||c>t.far))return{distance:c,point:So.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var To=class extends Tr{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Eo=class extends Tr{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Do=class extends Tr{constructor(e,t,n=Tt,r,i,a,o=mt,s=mt,c,l=It,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oo=class extends Do{constructor(e,t=Tt,n=301,r,i,a=mt,o=mt,s,c=It){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ko=class extends Tr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ao=class e extends la{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Zi(c,3)),this.setAttribute(`normal`,new Zi(l,3)),this.setAttribute(`uv`,new Zi(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new I;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},jo=class e extends la{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new I,l=new F;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Zi(a,3)),this.setAttribute(`normal`,new Zi(o,3)),this.setAttribute(`uv`,new Zi(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Mo=class e extends la{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Zi(u,3)),this.setAttribute(`normal`,new Zi(d,3)),this.setAttribute(`uv`,new Zi(f,2));function _(){let a=new I,_=new I,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new F,m=new I,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},No=class e extends Mo{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Po=class e extends la{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Zi(i,3)),this.setAttribute(`normal`,new Zi(i.slice(),3)),this.setAttribute(`uv`,new Zi(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new I,r=new I,i=new I;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new I;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new I;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new I,t=new I,n=new I,r=new I,o=new F,s=new F,c=new F;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Fo=class e extends Po{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Io=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){N(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new F:new I);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,r=[],i=[],a=[],o=new I,s=new jr;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new I)}i[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(nr(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(nr(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Lo=class extends Io{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new F){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ro=class extends Lo{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function zo(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Bo=new I,Vo=new I,Ho=new zo,Uo=new zo,Wo=new zo,Go=class extends Io{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new I){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Vo.subVectors(r[0],r[1]).add(r[0]),c=Vo);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Bo.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Bo),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ho.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Uo.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Wo.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ho.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Uo.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Wo.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ho.calc(s),Uo.calc(s),Wo.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new I().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ko(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function qo(e,t){let n=1-e;return n*n*t}function Jo(e,t){return 2*(1-e)*e*t}function Yo(e,t){return e*e*t}function Xo(e,t,n,r){return qo(e,t)+Jo(e,n)+Yo(e,r)}function Zo(e,t){let n=1-e;return n*n*n*t}function Qo(e,t){let n=1-e;return 3*n*n*e*t}function $o(e,t){return 3*(1-e)*e*e*t}function es(e,t){return e*e*e*t}function ts(e,t,n,r,i){return Zo(e,t)+Qo(e,n)+$o(e,r)+es(e,i)}var ns=class extends Io{constructor(e=new F,t=new F,n=new F,r=new F){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new F){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ts(e,r.x,i.x,a.x,o.x),ts(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rs=class extends Io{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ts(e,r.x,i.x,a.x,o.x),ts(e,r.y,i.y,a.y,o.y),ts(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},is=class extends Io{constructor(e=new F,t=new F){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},as=class extends Io{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},os=class extends Io{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Xo(e,r.x,i.x,a.x),Xo(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ss=class extends Io{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Xo(e,r.x,i.x,a.x),Xo(e,r.y,i.y,a.y),Xo(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cs=class extends Io{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new F){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ko(o,s.x,c.x,l.x,u.x),Ko(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new F().fromArray(n))}return this}},ls=Object.freeze({__proto__:null,ArcCurve:Ro,CatmullRomCurve3:Go,CubicBezierCurve:ns,CubicBezierCurve3:rs,EllipseCurve:Lo,LineCurve:is,LineCurve3:as,QuadraticBezierCurve:os,QuadraticBezierCurve3:ss,SplineCurve:cs}),us=class extends Io{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ls[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ls[n.type]().fromJSON(n))}return this}},ds=class extends us{constructor(e){super(),this.type=`Path`,this.currentPoint=new F,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new is(this.currentPoint.clone(),new F(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new os(this.currentPoint.clone(),new F(e,t),new F(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ns(this.currentPoint.clone(),new F(e,t),new F(n,r),new F(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new cs([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Lo(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fs=class extends ds{constructor(e){super(e),this.uuid=tr(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ds().fromJSON(n))}return this}};function ps(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ms(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=xs(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return gs(a,o,n,s,c,l,0),o}function ms(e,t,n,r,i){let a;if(i===Gs(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Hs(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Hs(i/r|0,e[i],e[i+1],a);return a&&Ps(a,a.next)&&(Us(a),a=a.next),a}function hs(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ps(n,n.next)||Ns(n.prev,n,n.next)===0)){if(Us(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function gs(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Es(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?vs(e,r,i,a):_s(e))t.push(c.i,e.i,l.i),Us(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=ys(hs(e),t),gs(e,t,n,r,i,a,2)):o===2&&bs(e,t,n,r,i,a):gs(hs(e),t,n,r,i,a,1);break}}}function _s(e){let t=e.prev,n=e,r=e.next;if(Ns(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&js(i,s,a,c,o,l,m.x,m.y)&&Ns(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function vs(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ns(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Os(p,m,t,n,r),v=Os(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&js(s,u,c,d,l,f,y.x,y.y)&&Ns(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&js(s,u,c,d,l,f,b.x,b.y)&&Ns(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&js(s,u,c,d,l,f,y.x,y.y)&&Ns(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&js(s,u,c,d,l,f,b.x,b.y)&&Ns(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ys(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ps(r,i)&&Fs(r,n,n.next,i)&&zs(r,i)&&zs(i,r)&&(t.push(r.i,n.i,i.i),Us(n),Us(n.next),n=e=i),n=n.next}while(n!==e);return hs(n)}function bs(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ms(o,e)){let s=Vs(o,e);o=hs(o,o.next),s=hs(s,s.next),gs(o,t,n,r,i,a,0),gs(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function xs(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ms(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ks(o))}i.sort(Ss);for(let e=0;e<i.length;e++)n=Cs(i[e],n);return n}function Ss(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Cs(e,t){let n=ws(e,t);if(!n)return t;let r=Vs(n,e);return hs(r,r.next),hs(n,n.next)}function ws(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ps(e,n))return n;do{if(Ps(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&As(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);zs(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Ts(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Ts(e,t){return Ns(e.prev,e,t.prev)<0&&Ns(t.next,e,e.next)<0}function Es(e,t,n,r){let i=e;do i.z===0&&(i.z=Os(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ds(i)}function Ds(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Os(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ks(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function As(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function js(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&As(e,t,n,r,i,a,o,s)}function Ms(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Rs(e,t)&&(zs(e,t)&&zs(t,e)&&Bs(e,t)&&(Ns(e.prev,e,t.prev)||Ns(e,t.prev,t))||Ps(e,t)&&Ns(e.prev,e,e.next)>0&&Ns(t.prev,t,t.next)>0)}function Ns(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ps(e,t){return e.x===t.x&&e.y===t.y}function Fs(e,t,n,r){let i=Ls(Ns(e,t,n)),a=Ls(Ns(e,t,r)),o=Ls(Ns(n,r,e)),s=Ls(Ns(n,r,t));return!!(i!==a&&o!==s||i===0&&Is(e,n,t)||a===0&&Is(e,r,t)||o===0&&Is(n,e,r)||s===0&&Is(n,t,r))}function Is(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ls(e){return e>0?1:e<0?-1:0}function Rs(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Fs(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function zs(e,t){return Ns(e.prev,e,e.next)<0?Ns(e,t,e.next)>=0&&Ns(e,e.prev,t)>=0:Ns(e,t,e.prev)<0||Ns(e,e.next,t)<0}function Bs(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Vs(e,t){let n=Ws(e.i,e.x,e.y),r=Ws(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Hs(e,t,n,r){let i=Ws(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Us(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ws(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gs(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ks=class{static triangulate(e,t,n=2){return ps(e,t,n)}},qs=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Js(e),Ys(n,e);let a=e.length;t.forEach(Js);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ys(n,t[e]);let o=Ks.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Js(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ys(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Xs=class e extends Po{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Zs=class e extends Po{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Qs=class e extends la{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Zi(p,3)),this.setAttribute(`normal`,new Zi(m,3)),this.setAttribute(`uv`,new Zi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},$s=class e extends la{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new I,p=new F;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Zi(s,3)),this.setAttribute(`normal`,new Zi(c,3)),this.setAttribute(`uv`,new Zi(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ec=class e extends la{constructor(e=new fs([new F(0,.5),new F(-.5,-.5),new F(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Zi(r,3)),this.setAttribute(`normal`,new Zi(i,3)),this.setAttribute(`uv`,new Zi(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;qs.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];qs.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=qs.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return tc(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function tc(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var nc=class e extends la{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new I,d=new I,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Zi(p,3)),this.setAttribute(`normal`,new Zi(m,3)),this.setAttribute(`uv`,new Zi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function rc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ac(i))i.isRenderTargetTexture?(N(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ac(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ic(e){let t={};for(let n=0;n<e.length;n++){let r=rc(e[n]);for(let e in r)t[e]=r[e]}return t}function ac(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function oc(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function sc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:hr.workingColorSpace}var cc={clone:rc,merge:ic},lc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dc=class extends va{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lc,this.fragmentShader=uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rc(e.uniforms),this.uniformsGroups=oc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new fi().setHex(r.value);break;case`v2`:this.uniforms[n].value=new F().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new I().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Er().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new ur().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new jr().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fc=class extends dc{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},pc=class extends va{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new fi(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fi(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mc=class extends va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Nn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hc=class extends va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},gc=class extends ho{constructor(e){super(),this.isLineDashedMaterial=!0,this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function _c(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function vc(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var yc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},bc=class extends yc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:An,endingEnd:An}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case jn:i=e,o=2*t-n;break;case Mn:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case jn:a=e,s=2*n-t;break;case Mn:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},xc=class extends yc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Sc=class extends yc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Cc=class extends yc{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ec(n,t,g,y,r);i[p]=wc(x,o,_,b,m)}return i}};function wc(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Tc(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ec(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=wc(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Tc(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Dc=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=_c(t,this.TimeBufferType),this.values=_c(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_c(e.times,Array),values:_c(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),vc(e.settings)&&(n.settings={inTangents:_c(e.settings.inTangents,Array),outTangents:_c(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Cc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case En:t=this.InterpolantFactoryMethodDiscrete;break;case Dn:t=this.InterpolantFactoryMethodLinear;break;case On:t=this.InterpolantFactoryMethodSmooth;break;case kn:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return N(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return En;case this.InterpolantFactoryMethodLinear:return Dn;case this.InterpolantFactoryMethodSmooth:return On;case this.InterpolantFactoryMethodBezier:return kn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;vc(this.settings)&&(Oc(this.settings.inTangents,e),Oc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(P(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(P(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){P(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){P(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Hn(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){P(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===On,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,vc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Oc(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Dc.prototype.ValueTypeName=``,Dc.prototype.TimeBufferType=Float32Array,Dc.prototype.ValueBufferType=Float32Array,Dc.prototype.DefaultInterpolation=Dn;var kc=class extends Dc{constructor(e,t,n){super(e,t,n)}};kc.prototype.ValueTypeName=`bool`,kc.prototype.ValueBufferType=Array,kc.prototype.DefaultInterpolation=En,kc.prototype.InterpolantFactoryMethodLinear=void 0,kc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends Dc{constructor(e,t,n,r){super(e,t,n,r)}};Ac.prototype.ValueTypeName=`color`;var jc=class extends Dc{constructor(e,t,n,r){super(e,t,n,r)}};jc.prototype.ValueTypeName=`number`;var Mc=class extends yc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)sr.slerpFlat(i,0,a,c-o,a,c,s);return i}},Nc=class extends Dc{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};Nc.prototype.ValueTypeName=`quaternion`,Nc.prototype.InterpolantFactoryMethodSmooth=void 0;var Pc=class extends Dc{constructor(e,t,n){super(e,t,n)}};Pc.prototype.ValueTypeName=`string`,Pc.prototype.ValueBufferType=Array,Pc.prototype.DefaultInterpolation=En,Pc.prototype.InterpolantFactoryMethodLinear=void 0,Pc.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends Dc{constructor(e,t,n,r){super(e,t,n,r)}};Fc.prototype.ValueTypeName=`vector`;var Ic=class extends ii{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new fi(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Lc=class extends Ic{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ii.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fi(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Rc=new jr,zc=new I,Bc=new I,Vc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new F(512,512),this.mapType=bt,this.map=null,this.mapPass=null,this.matrix=new jr,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new F(1,1),this._viewportCount=1,this._viewports=[new Er(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(zc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Rc,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hc=new I,Uc=new sr,Wc=new I,Gc=class extends ii{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new jr,this.projectionMatrix=new jr,this.projectionMatrixInverse=new jr,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hc,Uc,Wc),Wc.x===1&&Wc.y===1&&Wc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Uc,Wc.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Hc,Uc,Wc),Wc.x===1&&Wc.y===1&&Wc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Uc,Wc.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Kc=new I,qc=new F,Jc=new F,Yc=class extends Gc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($n*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan($n*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kc.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kc.x,Kc.y).multiplyScalar(-e/Kc.z),Kc.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kc.x,Kc.y).multiplyScalar(-e/Kc.z)}getViewSize(e,t){return this.getViewBounds(e,qc,Jc),t.subVectors(Jc,qc)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($n*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xc=class extends Vc{constructor(){super(new Yc(90,1,.5,500)),this.isPointLightShadow=!0}},Zc=class extends Ic{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Xc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Qc=class extends Gc{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$c=class extends Ic{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},el=-90,tl=1,nl=class extends ii{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yc(el,tl,e,t);r.layers=this.layers,this.add(r);let i=new Yc(el,tl,e,t);i.layers=this.layers,this.add(i);let a=new Yc(el,tl,e,t);a.layers=this.layers,this.add(a);let o=new Yc(el,tl,e,t);o.layers=this.layers,this.add(o);let s=new Yc(el,tl,e,t);s.layers=this.layers,this.add(s);let c=new Yc(el,tl,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},rl=class extends Yc{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},il=`\\[\\]\\.:\\/`,al=RegExp(`[\\[\\]\\.:\\/]`,`g`),ol=`[^\\[\\]\\.:\\/]`,sl=`[^`+il.replace(`\\.`,``)+`]`,cl=`((?:WC+[\\/:])*)`.replace(`WC`,ol),ll=`(WCOD+)?`.replace(`WCOD`,sl),ul=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ol),dl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ol),fl=RegExp(`^`+cl+ll+ul+dl+`$`),pl=[`material`,`materials`,`bones`,`map`],ml=class{constructor(e,t,n){let r=n||hl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},hl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(al,``)}static parseTrackName(e){let t=fl.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);pl.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){N(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){P(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){P(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){P(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){P(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){P(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){P(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){P(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;P(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){P(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){P(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};hl.Composite=ml,hl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},hl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},hl.prototype.GetterByBindingType=[hl.prototype._getValue_direct,hl.prototype._getValue_array,hl.prototype._getValue_arrayElement,hl.prototype._getValue_toArray],hl.prototype.SetterByBindingTypeAndVersioning=[[hl.prototype._setValue_direct,hl.prototype._setValue_direct_setNeedsUpdate,hl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[hl.prototype._setValue_array,hl.prototype._setValue_array_setNeedsUpdate,hl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[hl.prototype._setValue_arrayElement,hl.prototype._setValue_arrayElement_setNeedsUpdate,hl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[hl.prototype._setValue_fromArray,hl.prototype._setValue_fromArray_setNeedsUpdate,hl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gl=new jr,_l=class{constructor(e,t,n=0,r=1/0){this.ray=new za(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):P(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return gl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gl),this}intersectObject(e,t=!0,n=[]){return yl(e,this,n,t),n.sort(vl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)yl(e[r],this,n,t);return n.sort(vl),n}};function vl(e,t){return e.distance-t.distance}function yl(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)yl(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function bl(e,t,n,r){let i=xl(r);switch(n){case Nt:return e*t;case Rt:return e*t/i.components*i.byteLength;case zt:return e*t/i.components*i.byteLength;case Bt:return e*t*2/i.components*i.byteLength;case Vt:return e*t*2/i.components*i.byteLength;case Pt:return e*t*3/i.components*i.byteLength;case Ft:return e*t*4/i.components*i.byteLength;case Ht:return e*t*4/i.components*i.byteLength;case Ut:case Wt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Gt:case Kt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jt:case Xt:return Math.max(e,16)*Math.max(t,8)/4;case qt:case Yt:return Math.max(e,8)*Math.max(t,8)/2;case Zt:case Qt:case en:case tn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $t:case nn:case rn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case an:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case on:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case sn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case cn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ln:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case un:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case dn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case fn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case pn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case mn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case hn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case gn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case _n:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case vn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case yn:case bn:case xn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Sn:case Cn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case wn:case Tn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function xl(e){switch(e){case bt:case xt:return{byteLength:1,components:1};case Ct:case St:case Dt:return{byteLength:2,components:1};case Ot:case kt:return{byteLength:2,components:4};case Tt:case wt:case Et:return{byteLength:4,components:1};case jt:case Mt:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?N(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Sl(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Cl(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var wl={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},R={common:{diffuse:{value:new fi(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ur},alphaMap:{value:null},alphaMapTransform:{value:new ur},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ur}},envmap:{envMap:{value:null},envMapRotation:{value:new ur},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ur}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ur}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ur},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ur},normalScale:{value:new F(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ur},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ur}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ur}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ur}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fi(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new fi(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ur},alphaTest:{value:0},uvTransform:{value:new ur}},sprite:{diffuse:{value:new fi(16777215)},opacity:{value:1},center:{value:new F(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ur},alphaMap:{value:null},alphaMapTransform:{value:new ur},alphaTest:{value:0}}},Tl={basic:{uniforms:ic([R.common,R.specularmap,R.envmap,R.aomap,R.lightmap,R.fog]),vertexShader:wl.meshbasic_vert,fragmentShader:wl.meshbasic_frag},lambert:{uniforms:ic([R.common,R.specularmap,R.envmap,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.fog,R.lights,{emissive:{value:new fi(0)},envMapIntensity:{value:1}}]),vertexShader:wl.meshlambert_vert,fragmentShader:wl.meshlambert_frag},phong:{uniforms:ic([R.common,R.specularmap,R.envmap,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.fog,R.lights,{emissive:{value:new fi(0)},specular:{value:new fi(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wl.meshphong_vert,fragmentShader:wl.meshphong_frag},standard:{uniforms:ic([R.common,R.envmap,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.roughnessmap,R.metalnessmap,R.fog,R.lights,{emissive:{value:new fi(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wl.meshphysical_vert,fragmentShader:wl.meshphysical_frag},toon:{uniforms:ic([R.common,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.gradientmap,R.fog,R.lights,{emissive:{value:new fi(0)}}]),vertexShader:wl.meshtoon_vert,fragmentShader:wl.meshtoon_frag},matcap:{uniforms:ic([R.common,R.bumpmap,R.normalmap,R.displacementmap,R.fog,{matcap:{value:null}}]),vertexShader:wl.meshmatcap_vert,fragmentShader:wl.meshmatcap_frag},points:{uniforms:ic([R.points,R.fog]),vertexShader:wl.points_vert,fragmentShader:wl.points_frag},dashed:{uniforms:ic([R.common,R.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wl.linedashed_vert,fragmentShader:wl.linedashed_frag},depth:{uniforms:ic([R.common,R.displacementmap]),vertexShader:wl.depth_vert,fragmentShader:wl.depth_frag},normal:{uniforms:ic([R.common,R.bumpmap,R.normalmap,R.displacementmap,{opacity:{value:1}}]),vertexShader:wl.meshnormal_vert,fragmentShader:wl.meshnormal_frag},sprite:{uniforms:ic([R.sprite,R.fog]),vertexShader:wl.sprite_vert,fragmentShader:wl.sprite_frag},background:{uniforms:{uvTransform:{value:new ur},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wl.background_vert,fragmentShader:wl.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ur}},vertexShader:wl.backgroundCube_vert,fragmentShader:wl.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wl.cube_vert,fragmentShader:wl.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wl.equirect_vert,fragmentShader:wl.equirect_frag},distance:{uniforms:ic([R.common,R.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wl.distance_vert,fragmentShader:wl.distance_frag},shadow:{uniforms:ic([R.lights,R.fog,{color:{value:new fi(0)},opacity:{value:1}}]),vertexShader:wl.shadow_vert,fragmentShader:wl.shadow_frag}};Tl.physical={uniforms:ic([Tl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ur},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ur},clearcoatNormalScale:{value:new F(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ur},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ur},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ur},sheen:{value:0},sheenColor:{value:new fi(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ur},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ur},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ur},transmissionSamplerSize:{value:new F},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ur},attenuationDistance:{value:0},attenuationColor:{value:new fi(0)},specularColor:{value:new fi(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ur},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ur},anisotropyVector:{value:new F},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ur}}]),vertexShader:wl.meshphysical_vert,fragmentShader:wl.meshphysical_frag};var El={r:0,b:0,g:0},Dl=new jr,Ol=new ur;Ol.set(-1,0,0,0,1,0,0,0,1);function kl(e,t,n,r,i,a){let o=new fi(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new L(new Ao(1,1,1),new dc({name:`BackgroundCubeMaterial`,uniforms:rc(Tl.backgroundCube.uniforms),vertexShader:Tl.backgroundCube.vertexShader,fragmentShader:Tl.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Dl.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ol),l.material.toneMapped=hr.getTransfer(i.colorSpace)!==Ln,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new L(new Qs(2,2),new dc({name:`BackgroundMaterial`,uniforms:rc(Tl.background.uniforms),vertexShader:Tl.background.vertexShader,fragmentShader:Tl.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=hr.getTransfer(i.colorSpace)!==Ln,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(El,sc(e)),n.buffers.color.setClear(El.r,El.g,El.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Al(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function jl(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ml(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(N(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&N(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Nl(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ga,s=new ur,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Pl=4,Fl=6,Il=20,Ll=256,Rl=new Qc,zl=new fi,Bl=null,Vl=0,Hl=0,Ul=!1,Wl=new I,Gl=new I,Kl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Wl}=i;Bl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl,Vl,Hl),this._renderer.xr.enabled=Ul,e.scissorTest=!1,Yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_t,minFilter:_t,generateMipmaps:!1,type:Dt,format:Ft,colorSpace:Fn,depthBuffer:!1},r=Jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ql(r)),this._blurMaterial=Zl(r,e,t),this._ggxMaterial=Xl(r,e,t)}return r}_compileMaterial(e){let t=new L(new la,e);this._renderer.compile(t,Rl)}_sceneToCubeUV(e,t,n,r,i){let a=new Yc(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(zl),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new L(new Ao,new Ba({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(zl),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Yl(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Yl(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Rl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Pl?n-d+Pl:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Yl(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Rl),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Yl(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Rl)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Yl(t,3*l*(r>this._lodMax-Pl?r-this._lodMax+Pl:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Rl)}};function ql(e){let t=[],n=[],r=e,i=e-Pl+1+Fl;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Gl.set(1,r,n):e===1?Gl.set(-n,1,-r):e===2?Gl.set(-n,r,1):e===3?Gl.set(-1,r,-n):e===4?Gl.set(-n,-1,r):Gl.set(n,r,-1),Gl.toArray(l,(e*6+t)*3)}}let u=new la;u.setAttribute(`position`,new Ji(c,3)),u.setAttribute(`outputDirection`,new Ji(l,3)),n.push(new L(u,null)),r>Pl&&r--}return{lodMeshes:n,sizeLods:t}}function Jl(e,t,n){let r=new Or(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Yl(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Xl(e,t,n){return new dc({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ll,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zl(e,t,n){return new dc({name:`SphericalGaussianBlur`,defines:{SAMPLES:Il,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ql(){return new dc({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $l(){return new dc({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var tu=class extends Or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new To(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ao(5,5,5),i=new dc({name:`CubemapFromEquirect`,uniforms:rc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new L(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=_t),new nl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function nu(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new tu(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Kl(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Kl(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ru(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Jn(`WebGLRenderer: `+e+` extension not supported.`),t}}}function iu(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Xi:Yi)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function au(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ou(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:P(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function su(e,t,n){let r=new WeakMap,i=new Er;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new kr(h,p,m,u);g.type=Et,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new F(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function cu(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var lu={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function uu(e,t,n,r,i,a){let o=new Or(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new la;l.setAttribute(`position`,new Zi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Zi([0,2,0,0,2,0],2));let u=new fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new L(l,u),f=new Qc(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Or(t,n,{type:Dt,depthBuffer:!1,stencilBuffer:!1}),c=new Or(t,n,{type:Dt,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},hr.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=lu[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var du=new Tr,fu=new Do(1,1),pu=new kr,mu=new Ar,hu=new To,gu=[],_u=[],vu=new Float32Array(16),yu=new Float32Array(9),bu=new Float32Array(4);function xu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=gu[i];if(a===void 0&&(a=new Float32Array(i),gu[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Su(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Cu(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function wu(e,t){let n=_u[t];n===void 0&&(n=new Int32Array(t),_u[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Tu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Eu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Su(n,t))return;e.uniform2fv(this.addr,t),Cu(n,t)}}function Du(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Su(n,t))return;e.uniform3fv(this.addr,t),Cu(n,t)}}function Ou(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Su(n,t))return;e.uniform4fv(this.addr,t),Cu(n,t)}}function ku(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Su(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Cu(n,t)}else{if(Su(n,r))return;bu.set(r),e.uniformMatrix2fv(this.addr,!1,bu),Cu(n,r)}}function Au(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Su(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Cu(n,t)}else{if(Su(n,r))return;yu.set(r),e.uniformMatrix3fv(this.addr,!1,yu),Cu(n,r)}}function ju(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Su(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Cu(n,t)}else{if(Su(n,r))return;vu.set(r),e.uniformMatrix4fv(this.addr,!1,vu),Cu(n,r)}}function Mu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Nu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Su(n,t))return;e.uniform2iv(this.addr,t),Cu(n,t)}}function Pu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Su(n,t))return;e.uniform3iv(this.addr,t),Cu(n,t)}}function Fu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Su(n,t))return;e.uniform4iv(this.addr,t),Cu(n,t)}}function Iu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Lu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Su(n,t))return;e.uniform2uiv(this.addr,t),Cu(n,t)}}function Ru(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Su(n,t))return;e.uniform3uiv(this.addr,t),Cu(n,t)}}function zu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Su(n,t))return;e.uniform4uiv(this.addr,t),Cu(n,t)}}function Bu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(fu.compareFunction=n.isReversedDepthBuffer()?518:515,a=fu):a=du,n.setTexture2D(t||a,i)}function Vu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||mu,i)}function Hu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||hu,i)}function Uu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||pu,i)}function Wu(e){switch(e){case 5126:return Tu;case 35664:return Eu;case 35665:return Du;case 35666:return Ou;case 35674:return ku;case 35675:return Au;case 35676:return ju;case 5124:case 35670:return Mu;case 35667:case 35671:return Nu;case 35668:case 35672:return Pu;case 35669:case 35673:return Fu;case 5125:return Iu;case 36294:return Lu;case 36295:return Ru;case 36296:return zu;case 35678:case 36198:case 36298:case 36306:case 35682:return Bu;case 35679:case 36299:case 36307:return Vu;case 35680:case 36300:case 36308:case 36293:return Hu;case 36289:case 36303:case 36311:case 36292:return Uu}}function Gu(e,t){e.uniform1fv(this.addr,t)}function Ku(e,t){let n=xu(t,this.size,2);e.uniform2fv(this.addr,n)}function qu(e,t){let n=xu(t,this.size,3);e.uniform3fv(this.addr,n)}function Ju(e,t){let n=xu(t,this.size,4);e.uniform4fv(this.addr,n)}function Yu(e,t){let n=xu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Xu(e,t){let n=xu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Zu(e,t){let n=xu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Qu(e,t){e.uniform1iv(this.addr,t)}function $u(e,t){e.uniform2iv(this.addr,t)}function ed(e,t){e.uniform3iv(this.addr,t)}function td(e,t){e.uniform4iv(this.addr,t)}function nd(e,t){e.uniform1uiv(this.addr,t)}function rd(e,t){e.uniform2uiv(this.addr,t)}function id(e,t){e.uniform3uiv(this.addr,t)}function ad(e,t){e.uniform4uiv(this.addr,t)}function od(e,t,n){let r=this.cache,i=t.length,a=wu(n,i);Su(r,a)||(e.uniform1iv(this.addr,a),Cu(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?fu:du;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function sd(e,t,n){let r=this.cache,i=t.length,a=wu(n,i);Su(r,a)||(e.uniform1iv(this.addr,a),Cu(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||mu,a[e])}function cd(e,t,n){let r=this.cache,i=t.length,a=wu(n,i);Su(r,a)||(e.uniform1iv(this.addr,a),Cu(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||hu,a[e])}function ld(e,t,n){let r=this.cache,i=t.length,a=wu(n,i);Su(r,a)||(e.uniform1iv(this.addr,a),Cu(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||pu,a[e])}function ud(e){switch(e){case 5126:return Gu;case 35664:return Ku;case 35665:return qu;case 35666:return Ju;case 35674:return Yu;case 35675:return Xu;case 35676:return Zu;case 5124:case 35670:return Qu;case 35667:case 35671:return $u;case 35668:case 35672:return ed;case 35669:case 35673:return td;case 5125:return nd;case 36294:return rd;case 36295:return id;case 36296:return ad;case 35678:case 36198:case 36298:case 36306:case 35682:return od;case 35679:case 36299:case 36307:return sd;case 35680:case 36300:case 36308:case 36293:return cd;case 36289:case 36303:case 36311:case 36292:return ld}}var dd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wu(t.type)}},fd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ud(t.type)}},pd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},md=/(\w+)(\])?(\[|\.)?/g;function hd(e,t){e.seq.push(t),e.map[t.id]=t}function gd(e,t,n){let r=e.name,i=r.length;for(md.lastIndex=0;;){let a=md.exec(r),o=md.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){hd(n,l===void 0?new dd(s,e,t):new fd(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new pd(s),hd(n,e)),n=e}}}var _d=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);gd(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function vd(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var yd=37297,bd=0;function xd(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Sd=new ur;function Cd(e){hr._getMatrix(Sd,hr.workingColorSpace,e);let t=`mat3( ${Sd.elements.map(e=>e.toFixed(4))} )`;switch(hr.getTransfer(e)){case In:return[t,`LinearTransferOETF`];case Ln:return[t,`sRGBTransferOETF`];default:return N(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function wd(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+xd(e.getShaderSource(t),r)}return i}function Td(e,t){let n=Cd(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ed={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Dd(e,t){let n=Ed[t];return n===void 0?(N(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Od=new I;function kd(){return hr.getLuminanceCoefficients(Od),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Od.x.toFixed(4)}, ${Od.y.toFixed(4)}, ${Od.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ad(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Nd).join(`
`)}function jd(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Md(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Nd(e){return e!==``}function Pd(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Id=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(e){return e.replace(Id,zd)}var Rd=new Map;function zd(e,t){let n=wl[t];if(n===void 0){let e=Rd.get(t);if(e!==void 0)n=wl[e],N(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Ld(n)}var Bd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(e){return e.replace(Bd,Hd)}function Hd(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ud(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Wd={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Gd(e){return Wd[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Kd={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function qd(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Kd[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Jd={302:`ENVMAP_MODE_REFRACTION`};function Yd(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Jd[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Xd={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Zd(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Xd[e.combine]||`ENVMAP_BLENDING_NONE`}function Qd(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function $d(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Gd(n),l=qd(n),u=Yd(n),d=Zd(n),f=Qd(n),p=Ad(n),m=jd(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Nd).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Nd).join(`
`),_.length>0&&(_+=`
`)):(g=[Ud(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Nd).join(`
`),_=[Ud(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:wl.tonemapping_pars_fragment,n.toneMapping===0?``:Dd(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,wl.colorspace_pars_fragment,Td(`linearToOutputTexel`,n.outputColorSpace),kd(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Nd).join(`
`)),o=Ld(o),o=Pd(o,n),o=Fd(o,n),s=Ld(s),s=Pd(s,n),s=Fd(s,n),o=Vd(o),s=Vd(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=vd(i,i.VERTEX_SHADER,y),S=vd(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=wd(i,x,`vertex`),n=wd(i,S,`fragment`);P(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):N(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new _d(i,h),T=Md(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,yd)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bd++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ef=0,tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nf(e),t.set(e,n)),n}},nf=class{constructor(e){this.id=ef++,this.code=e,this.usedTimes=0}};function rf(e){return e===1030||e===37490||e===36285}function af(e,t,n,r,i,a){let o=new Hr,s=new tf,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&N(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,te;if(C){let e=Tl[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,te=t.id}let ne=e.getRenderTarget(),re=e.state.buffers.depth.getReversed(),k=h.isInstancedMesh===!0,ie=h.isBatchedMesh===!0,ae=!!i.map,oe=!!i.matcap,se=!!x,ce=!!i.aoMap,le=!!i.lightMap,ue=!!i.bumpMap&&i.wireframe===!1,de=!!i.normalMap,fe=!!i.displacementMap,pe=!!i.emissiveMap,me=!!i.metalnessMap,he=!!i.roughnessMap,ge=i.anisotropy>0,_e=i.clearcoat>0,ve=i.dispersion>0,ye=i.retroreflectivity>0,be=i.iridescence>0,xe=i.sheen>0,Se=i.transmission>0,Ce=ge&&!!i.anisotropyMap,we=_e&&!!i.clearcoatMap,Te=_e&&!!i.clearcoatNormalMap,Ee=_e&&!!i.clearcoatRoughnessMap,De=be&&!!i.iridescenceMap,A=be&&!!i.iridescenceThicknessMap,Oe=xe&&!!i.sheenColorMap,ke=xe&&!!i.sheenRoughnessMap,Ae=!!i.specularMap,j=!!i.specularColorMap,je=!!i.specularIntensityMap,M=Se&&!!i.transmissionMap,Me=Se&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Re=e.toneMapping);let ze={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ie,batchingColor:ie&&h._colorsTexture!==null,instancing:k,instancingColor:k&&h.instanceColor!==null,instancingMorph:k&&h.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:hr.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ae,matcap:oe,envMap:se,envMapMode:se&&x.mapping,envMapCubeUVHeight:S,aoMap:ce,lightMap:le,bumpMap:ue,normalMap:de,displacementMap:fe,emissiveMap:pe,normalMapObjectSpace:de&&i.normalMapType===1,normalMapTangentSpace:de&&i.normalMapType===0,packedNormalMap:de&&i.normalMapType===0&&rf(i.normalMap.format),metalnessMap:me,roughnessMap:he,anisotropy:ge,anisotropyMap:Ce,clearcoat:_e,clearcoatMap:we,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ee,dispersion:ve,retroreflection:ye,iridescence:be,iridescenceMap:De,iridescenceThicknessMap:A,sheen:xe,sheenColorMap:Oe,sheenRoughnessMap:ke,specularMap:Ae,specularColorMap:j,specularIntensityMap:je,transmission:Se,transmissionMap:M,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:Ie,combine:i.combine,mapUv:ae&&m(i.map.channel),aoMapUv:ce&&m(i.aoMap.channel),lightMapUv:le&&m(i.lightMap.channel),bumpMapUv:ue&&m(i.bumpMap.channel),normalMapUv:de&&m(i.normalMap.channel),displacementMapUv:fe&&m(i.displacementMap.channel),emissiveMapUv:pe&&m(i.emissiveMap.channel),metalnessMapUv:me&&m(i.metalnessMap.channel),roughnessMapUv:he&&m(i.roughnessMap.channel),anisotropyMapUv:Ce&&m(i.anisotropyMap.channel),clearcoatMapUv:we&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Te&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:A&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ke&&m(i.sheenRoughnessMap.channel),specularMapUv:Ae&&m(i.specularMap.channel),specularColorMapUv:j&&m(i.specularColorMap.channel),specularIntensityMapUv:je&&m(i.specularIntensityMap.channel),transmissionMapUv:M&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(de||ge),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ae||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&de===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:ae&&i.map.isVideoTexture===!0&&hr.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:pe&&i.emissiveMap.isVideoTexture===!0&&hr.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||ie)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Tl[t];n=cc.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new $d(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function of(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function sf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function cf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function lf(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||sf),r.length>1&&r.sort(t||cf),i.length>1&&i.sort(t||cf)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function uf(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new lf,e.set(t,[i])):n>=r.length?(i=new lf,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function df(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new I,color:new fi};break;case`SpotLight`:n={position:new I,direction:new I,color:new fi,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new I,color:new fi,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new I,skyColor:new fi,groundColor:new fi};break;case`RectAreaLight`:n={color:new fi,position:new I,halfWidth:new I,halfHeight:new I}}return e[t.id]=n,n}}}function ff(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var pf=0;function mf(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function hf(e){let t=new df,n=ff(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new I);let i=new I,a=new jr,o=new jr;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(mf);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=R.LTC_FLOAT_1,r.rectAreaLTC2=R.LTC_FLOAT_2):(r.rectAreaLTC1=R.LTC_HALF_1,r.rectAreaLTC2=R.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=pf++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function gf(e){let t=new hf(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function _f(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new gf(e),t.set(n,[a])):r>=i.length?(a=new gf(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var vf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bf=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],xf=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Sf=new jr,Cf=new I,wf=new I;function Tf(e,t,n){let r=new mo,i=new F,a=new F,o=new Er,s=new mc,c=new hc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new dc({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new F},radius:{value:4}},vertexShader:vf,fragmentShader:yf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new la;m.setAttribute(`position`,new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new L(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(N(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){N(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){N(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Or(i.x,i.y,{format:Bt,type:Dt,minFilter:_t,magFilter:_t,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Do(i.x,i.y,Et),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=It,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=mt,d.map.depthTexture.magFilter=mt}else l.isPointLight?(d.map=new tu(i.x),d.map.depthTexture=new Oo(i.x,Tt)):(d.map=new Or(i.x,i.y),d.map.depthTexture=new Do(i.x,i.y,Tt)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=It,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=_t,d.map.depthTexture.magFilter=_t):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=mt,d.map.depthTexture.magFilter=mt);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Cf.setFromMatrixPosition(l.matrixWorld),e.position.copy(Cf),wf.copy(e.position),wf.add(bf[t]),e.up.copy(xf[t]),e.lookAt(wf),e.updateMatrixWorld(),n.makeTranslation(-Cf.x,-Cf.y,-Cf.z),Sf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Sf,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Or(i.x,i.y,{format:Bt,type:Dt}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ef(e,t){function n(){let t=!1,n=new Er,r=null,i=new Er(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?me(e.DEPTH_TEST):he(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Xn[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?me(e.STENCIL_TEST):he(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new fi(0,0,0),T=0,E=!1,D=null,O=null,ee=null,te=null,ne=null,re=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ie=0,ae=e.getParameter(e.VERSION);ae.indexOf(`WebGL`)===-1?ae.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),k=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),k=ie>=1);let oe=null,se={},ce=e.getParameter(e.SCISSOR_BOX),le=e.getParameter(e.VIEWPORT),ue=new Er().fromArray(ce),de=new Er().fromArray(le);function fe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let pe={};pe[e.TEXTURE_2D]=fe(e.TEXTURE_2D,e.TEXTURE_2D,1),pe[e.TEXTURE_CUBE_MAP]=fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[e.TEXTURE_2D_ARRAY]=fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pe[e.TEXTURE_3D]=fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),me(e.DEPTH_TEST),o.setFunc(3),Ce(!1),we(1),me(e.CULL_FACE),xe(0);function me(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function he(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ge(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function _e(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ve(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ye={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ye[103]=e.MIN,ye[104]=e.MAX;let be={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function xe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(he(e.BLEND),g=!1);else if(g===!1&&(me(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:P(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:P(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:P(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:P(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ye[n],ye[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(be[r],be[i],be[o],be[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function Se(t,n){t.side===2?he(e.CULL_FACE):me(e.CULL_FACE);let r=t.side===1;n&&(r=!r),Ce(r),t.blending===1&&t.transparent===!1?xe(0):xe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ee(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?me(e.SAMPLE_ALPHA_TO_COVERAGE):he(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function we(t){t===0?he(e.CULL_FACE):(me(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Te(t){t!==ee&&(k&&e.lineWidth(t),ee=t)}function Ee(t,n,r){t?(me(e.POLYGON_OFFSET_FILL),(te!==n||ne!==r)&&(te=n,ne=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):he(e.POLYGON_OFFSET_FILL)}function De(t){t?me(e.SCISSOR_TEST):he(e.SCISSOR_TEST)}function A(t){t===void 0&&(t=e.TEXTURE0+re-1),oe!==t&&(e.activeTexture(t),oe=t)}function Oe(t,n,r){r===void 0&&(r=oe===null?e.TEXTURE0+re-1:oe);let i=se[r];i===void 0&&(i={type:void 0,texture:void 0},se[r]=i),(i.type!==t||i.texture!==n)&&(oe!==r&&(e.activeTexture(r),oe=r),e.bindTexture(t,n||pe[t]),i.type=t,i.texture=n)}function ke(){let t=se[oe];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ae(){try{e.compressedTexImage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function j(){try{e.compressedTexImage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function M(){try{e.texSubImage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Ie(){try{e.texImage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Le(){try{e.texImage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Re(t){return d[t]===void 0?e.getParameter(t):d[t]}function ze(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Be(t){ue.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ue.copy(t))}function Ve(t){de.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),de.copy(t))}function He(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ue(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function We(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},oe=null,se={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new fi(0,0,0),T=0,E=!1,D=null,O=null,ee=null,te=null,ne=null,ue.set(0,0,e.canvas.width,e.canvas.height),de.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:me,disable:he,bindFramebuffer:ge,drawBuffers:_e,useProgram:ve,setBlending:xe,setMaterial:Se,setFlipSided:Ce,setCullFace:we,setLineWidth:Te,setPolygonOffset:Ee,setScissorTest:De,activeTexture:A,bindTexture:Oe,unbindTexture:ke,compressedTexImage2D:Ae,compressedTexImage3D:j,texImage2D:Ie,texImage3D:Le,pixelStorei:ze,getParameter:Re,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:je,texSubImage3D:M,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:Be,viewport:Ve,reset:We}}function Df(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new F,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Un(`canvas`)}function g(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),N(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&N(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];N(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||N(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?In:hr.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,N(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function ee(){O=0}function te(){return O}function ne(e){O=e}function re(){let e=O;return e>=i.maxTextures&&N(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function k(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ie(t,i){let a=r.get(t);if(t.isVideoTexture&&Oe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)N(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)N(`WebGLRenderer: Texture marked for update but image is incomplete`);else{he(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?he(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function oe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?he(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?ge(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ce={[dt]:e.REPEAT,[ft]:e.CLAMP_TO_EDGE,[pt]:e.MIRRORED_REPEAT},le={[mt]:e.NEAREST,[ht]:e.NEAREST_MIPMAP_NEAREST,[gt]:e.NEAREST_MIPMAP_LINEAR,[_t]:e.LINEAR,[vt]:e.LINEAR_MIPMAP_NEAREST,[yt]:e.LINEAR_MIPMAP_LINEAR},ue={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function de(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&N(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ce[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ce[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ce[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,le[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,le[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ue[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function fe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=k(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function pe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function me(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=pe(n.start,r.width,4),c=pe(t.start,r.width,4);n.start<=i+1&&a===c&&pe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function he(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=fe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=hr.getPrimaries(hr.workingColorSpace),r=o.colorSpace===``?null:hr.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=ke(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);de(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Lt,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&me(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=bl(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else N(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?N(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=bl(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Ae(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Ae(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,o,s){if(o.image.length!==6)return;let c=fe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=hr.getPrimaries(hr.workingColorSpace),r=o.colorSpace===``?null:hr.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ke(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);de(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?N(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Ae(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),A(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,De(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;A(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);A(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),de(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ie(i.depthTexture,0);let u=l.__webglTexture,d=De(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)A(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)A(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ye(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ye(i.__webglFramebuffer[0],t,0):ye(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ve(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,i){let a=r.get(t);n!==void 0&&_e(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&be(t)}function Se(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&A(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=De(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),de(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)_e(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else _e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),de(c,a),_e(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),de(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)_e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else _e(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&be(t)}function Ce(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let we=[],Te=[];function Ee(t){if(t.samples>0){if(A(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(we.length=0,Te.length=0,we.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(we.push(l),Te.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Te)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function De(e){return Math.min(i.maxSamples,e.samples)}function A(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Oe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(hr.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&N(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):P(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=re,this.resetTextureUnits=ee,this.getTextureUnits=te,this.setTextureUnits=ne,this.setTexture2D=ie,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=se,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=A,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Of(e,t){function n(n,r=``){let i,a=hr.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var kf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Af=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new dc({vertexShader:kf,fragmentShader:Af,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new L(new Qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mf=class extends Zn{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new jf,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new F,C=null,w=null,T=new Yc;T.viewport=new Er;let E=new Yc;E.viewport=new Er;let D=[T,E],O=new rl,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new si,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new si,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new si,b[e]=t),t.getHandSpace()};function ne(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,k);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,te=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&N(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&N(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,k),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Lt:It,a=_.stencil?At:Tt);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Or(d.textureWidth,d.textureHeight,{format:Ft,type:bt,depthTexture:new Do(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Or(f.framebufferWidth,f.framebufferHeight,{format:Ft,type:bt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function k(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ie=new I,ae=new I;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(ee!==O.near||te!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ee=O.near,te=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;se(O,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,O,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=er*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let le=null;function ue(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Yc,o.layers.enable(n),o.viewport=new Er,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ko,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let de=new Sl;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},Nf=new jr,Pf=new ur;Pf.set(-1,0,0,0,1,0,0,0,1);function Ff(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,sc(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Nf.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Pf),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function If(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return P(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?N(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):N(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Lf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rf=null;function zf(){return Rf===null&&(Rf=new eo(Lf,16,16,Bt,Dt),Rf.name=`DFG_LUT`,Rf.minFilter=_t,Rf.magFilter=_t,Rf.wrapS=ft,Rf.wrapT=ft,Rf.generateMipmaps=!1,Rf.needsUpdate=!0),Rf}var Bf=class{constructor(e={}){let{canvas:t=Wn(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Ht,Vt,zt]),g=new Set([bt,Tt,Ct,At,Ot,kt]),_=new Uint32Array(4),v=new Int32Array(4),y=new I,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,ee=null,te=null;this._outputColorSpace=Pn;let ne=0,re=0,k=null,ie=-1,ae=null,oe=new Er,se=new Er,ce=null,le=new fi(0),ue=0,de=t.width,fe=t.height,pe=1,me=null,he=null,ge=new Er(0,0,de,fe),_e=new Er(0,0,de,fe),ve=!1,ye=new mo,be=!1,xe=!1,Se=new jr,Ce=new I,we=new Er,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function De(){return k===null?pe:1}let A=n;function Oe(e,n){return t.getContext(e,n)}let ke,Ae,j,je,M,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Qe,!1),t.addEventListener(`webglcontextrestored`,$e,!1),t.addEventListener(`webglcontextcreationerror`,et,!1),A===null){let t=`webgl2`;if(A=Oe(t,e),A===null)throw Oe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Xe()}catch(e){throw t.removeEventListener(`webglcontextlost`,Qe,!1),t.removeEventListener(`webglcontextrestored`,$e,!1),t.removeEventListener(`webglcontextcreationerror`,et,!1),P(`WebGLRenderer: `+e.message),e}function Xe(){ke=new ru(A),ke.init(),qe=new Of(A,ke),Ae=new Ml(A,ke,e,qe),j=new Ef(A,ke),Ae.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),O=A.createFramebuffer(),ee=A.createFramebuffer(),te=A.createFramebuffer(),je=new ou(A),M=new of,Me=new Df(A,ke,j,M,Ae,qe,je),Ne=new nu(T),Pe=new Cl(A),Je=new Al(A,Pe),Fe=new iu(A,Pe,je,Je),Ie=new cu(A,Fe,Pe,Je,je),We=new su(A,Ae,Me),Ve=new Nl(M),Le=new af(T,Ne,ke,Ae,Je,Ve),Re=new Ff(T,M),ze=new uf,Be=new _f(ke),Ue=new kl(T,Ne,j,Ie,p,s),He=new Tf(T,Ie,Ae),Ye=new If(A,je,Ae,j),Ge=new jl(A,ke,je),Ke=new au(A,ke,je),je.programs=Le.programs,T.capabilities=Ae,T.extensions=ke,T.properties=M,T.renderLists=ze,T.shadowMap=He,T.state=j,T.info=je}m!==1009&&(w=new uu(m,t.width,t.height,o,r,i));let Ze=new Mf(T,A);this.xr=Ze,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(e){e!==void 0&&(pe=e,this.setSize(de,fe,!1))},this.getSize=function(e){return e.set(de,fe)},this.setSize=function(e,n,r=!0){Ze.isPresenting?N(`WebGLRenderer: Can't change size while VR device is presenting.`):(de=e,fe=n,t.width=Math.floor(e*pe),t.height=Math.floor(n*pe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(de*pe,fe*pe).floor()},this.setDrawingBufferSize=function(e,n,r){de=e,fe=n,pe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)P(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){N(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(oe)},this.getViewport=function(e){return e.copy(ge)},this.setViewport=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),j.viewport(oe.copy(ge).multiplyScalar(pe).round())},this.getScissor=function(e){return e.copy(_e)},this.setScissor=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),j.scissor(se.copy(_e).multiplyScalar(pe).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(e){j.setScissorTest(ve=e)},this.setOpaqueSort=function(e){me=e},this.setTransparentSort=function(e){he=e},this.getClearColor=function(e){return e.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(k!==null){let t=k.texture.format;e=h.has(t)}if(e){let e=k.texture.type,t=g.has(e),n=Ue.getClearColor(),r=Ue.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,A.clearBufferuiv(A.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,A.clearBufferiv(A.COLOR,0,v))}else r|=A.COLOR_BUFFER_BIT}t&&(r|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&A.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Qe,!1),t.removeEventListener(`webglcontextrestored`,$e,!1),t.removeEventListener(`webglcontextcreationerror`,et,!1),Ue.dispose(),ze.dispose(),Be.dispose(),M.dispose(),Ne.dispose(),Ie.dispose(),Je.dispose(),Ye.dispose(),Le.dispose(),Ze.dispose(),Ze.removeEventListener(`sessionstart`,st),Ze.removeEventListener(`sessionend`,ct),lt.stop()};function Qe(e){e.preventDefault(),Kn(`WebGLRenderer: Context Lost.`),E=!0}function $e(){Kn(`WebGLRenderer: Context Restored.`),E=!1;let e=je.autoReset,t=He.enabled,n=He.autoUpdate,r=He.needsUpdate,i=He.type;Xe(),je.autoReset=e,He.enabled=t,He.autoUpdate=n,He.needsUpdate=r,He.type=i}function et(e){P(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function tt(e){let t=e.target;t.removeEventListener(`dispose`,tt),nt(t)}function nt(e){rt(e),M.remove(e)}function rt(e){let t=M.get(e).programs;t!==void 0&&(t.forEach(function(e){Le.releaseProgram(e)}),e.isShaderMaterial&&Le.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Te);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=xt(e,t,n,r,i);j.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Fe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Je.setup(i,r,s,n,c);let h,g=Ge;if(c!==null&&(h=Pe.get(c),g=Ke,g.setIndex(h)),i.isMesh)r.wireframe===!0?(j.setLineWidth(r.wireframeLinewidth*De()),g.setMode(A.LINES)):g.setMode(A.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),j.setLineWidth(e*De()),i.isLineSegments?g.setMode(A.LINES):i.isLineLoop?g.setMode(A.LINE_LOOP):g.setMode(A.LINE_STRIP)}else i.isPoints?g.setMode(A.POINTS):i.isSprite&&g.setMode(A.TRIANGLES);if(i.isBatchedMesh){if(ke.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Pe.get(c).bytesPerElement:1,o=M.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(A,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function it(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),be===!0&&Ve.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ht(e,t,r),e.side=0,e.needsUpdate=!0,ht(e,t,r),e.side=2):ht(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Be.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),xe=this.localClippingEnabled,be=Ve.init(this.clippingPlanes,xe),be===!0&&Ve.setGlobalState(this.clippingPlanes,t),D!==null&&He.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];it(o,n,t,e),r.add(o)}else it(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=M.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ke.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let at=null;function ot(e){at&&at(e)}function st(){lt.stop()}function ct(){lt.start()}let lt=new Sl;lt.setAnimationLoop(ot),typeof self<`u`&&lt.setContext(self),this.setAnimationLoop=function(e){at=e,Ze.setAnimationLoop(e),e===null?lt.stop():lt.start()},Ze.addEventListener(`sessionstart`,st),Ze.addEventListener(`sessionend`,ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){P(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ze.enabled===!0&&Ze.isPresenting===!0,r=w!==null&&(k===null||n)&&w.begin(T,k);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(t),t=Ze.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,k),x=Be.get(e,C.length),x.init(t),x.state.textureUnits=Me.getTextureUnits(),C.push(x),Se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ye.setFromProjectionMatrix(Se,Bn,t.reversedDepth),xe=this.localClippingEnabled,be=Ve.init(this.clippingPlanes,xe),b=ze.get(e,S.length),b.init(),S.push(b),Ze.enabled===!0&&Ze.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&ut(e,t,-1/0,T.sortObjects)}ut(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(me,he),Ee=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Ee&&Ue.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),be===!0&&Ve.beginShadows();let i=x.state.shadowsArray;if(He.render(i,e,t),be===!0&&Ve.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ft(n,r,e,a)}Ee&&Ue.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];dt(b,e,n,n.viewport)}}else r.length>0&&ft(n,r,e,t),Ee&&Ue.render(e),dt(b,e,t)}k!==null&&re===0&&(Me.updateMultisampleRenderTarget(k),Me.updateRenderTargetMipmap(k)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Je.resetDefaultState(),ie=-1,ae=null,C.pop(),C.length>0?(x=C[C.length-1],Me.setTextureUnits(x.state.textureUnits),be===!0&&Ve.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function ut(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ye)){r&&we.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Se);let i=Ie.update(e),a=e.material;a.visible&&b.push(e,i,a,n,we.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ye))){let i=Ie.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),we.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),we.copy(e.boundingSphere.center)),we.applyMatrix4(e.matrixWorld).applyMatrix4(Se)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,we.z,s,t)}}else a.visible&&b.push(e,i,a,n,we.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ut(i[e],t,n,r)}function dt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),be===!0&&Ve.setGlobalState(T.clippingPlanes,n),r&&j.viewport(oe.copy(r)),i.length>0&&pt(i,t,n),a.length>0&&pt(a,t,n),o.length>0&&pt(o,t,n),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ft(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=ke.has(`EXT_color_buffer_half_float`)||ke.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Or(1,1,{generateMipmaps:!0,type:e?Dt:bt,minFilter:yt,samples:Math.max(4,Ae.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:hr.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||oe;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(le),ue=T.getClearAlpha(),ue<1&&T.setClearColor(16777215,.5),T.clear(),Ee&&Ue.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),be===!0&&Ve.setGlobalState(T.clippingPlanes,r),pt(e,n,r),Me.updateMultisampleRenderTarget(a),Me.updateRenderTargetMipmap(a),ke.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,mt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Me.updateMultisampleRenderTarget(a),Me.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(le,ue),d!==void 0&&(r.viewport=d),T.toneMapping=u}function pt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&mt(o,t,n,s,l,c)}}function mt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ht(e,t,n){t.isScene!==!0&&(t=Te);let r=M.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Le.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Le.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ne.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,tt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return _t(e,s),d}else s.uniforms=Le.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Le.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ve.uniform),_t(e,s),r.needsLights=wt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function gt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=_d.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function _t(e,t){let n=M.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function vt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function xt(e,t,n,r,i){t.isScene!==!0&&(t=Te),Me.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:hr.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ne.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=M.get(r),y=x.state.lights;if(be===!0&&(xe===!0||e!==ae)){let t=e===ae&&r.id===ie;Ve.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ve.numPlanes||v.numIntersection!==Ve.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=ht(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),ee=v.uniforms;if(j.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ie&&(ie=r.id,w=!0),v.needsLights){let e=vt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ae!==e){j.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(A,`projectionMatrix`,e.projectionMatrix),O.setValue(A,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(A,Ce.setFromMatrixPosition(e.matrixWorld)),Ae.logarithmicDepthBuffer&&O.setValue(A,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(A,`isOrthographic`,e.isOrthographicCamera===!0),ae!==e&&(ae=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(A,`sunShadowMap`,y.state.sunShadowMap,Me),y.state.directionalShadowMap.length>0&&O.setValue(A,`directionalShadowMap`,y.state.directionalShadowMap,Me),y.state.spotShadowMap.length>0&&O.setValue(A,`spotShadowMap`,y.state.spotShadowMap,Me),y.state.pointShadowMap.length>0&&O.setValue(A,`pointShadowMap`,y.state.pointShadowMap,Me)),i.isSkinnedMesh){O.setOptional(A,i,`bindMatrix`),O.setOptional(A,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(A,`boneTexture`,e.boneTexture,Me))}i.isBatchedMesh&&(O.setOptional(A,i,`batchingTexture`),O.setValue(A,`batchingTexture`,i._matricesTexture,Me),O.setOptional(A,i,`batchingIdTexture`),O.setValue(A,`batchingIdTexture`,i._indirectTexture,Me),O.setOptional(A,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(A,`batchingColorTexture`,i._colorsTexture,Me));let te=n.morphAttributes;if((te.position!==void 0||te.normal!==void 0||te.color!==void 0)&&We.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(A,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),ee.dfgLUT!==void 0&&(ee.dfgLUT.value=zf()),w){if(O.setValue(A,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&St(ee,E),a&&r.fog===!0&&Re.refreshFogUniforms(ee,a),Re.refreshMaterialUniforms(ee,r,pe,fe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;ee.probesSH.value=e.texture,ee.probesMin.value.copy(e.boundingBox.min),ee.probesMax.value.copy(e.boundingBox.max),ee.probesResolution.value.copy(e.resolution)}_d.upload(A,gt(v),ee,Me)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(_d.upload(A,gt(v),ee,Me),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(A,`center`,i.center),O.setValue(A,`modelViewMatrix`,i.modelViewMatrix),O.setValue(A,`normalMatrix`,i.normalMatrix),O.setValue(A,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ye.update(n,S),Ye.bind(n,S)}}return S}function St(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function wt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(e,t,n){let r=M.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),M.get(e.texture).__webglTexture=t,M.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=M.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){k=e,ne=t,re=n;let r=null,i=!1,a=!1;if(e){let o=M.get(e);if(o.__useDefaultFramebuffer!==void 0){j.bindFramebuffer(A.FRAMEBUFFER,o.__webglFramebuffer),oe.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest,j.viewport(oe),j.scissor(se),j.setScissorTest(ce),ie=-1;return}if(o.__webglFramebuffer===void 0)Me.setupRenderTarget(e);else if(o.__hasExternalTextures)Me.rebindTextures(e,M.get(e.texture).__webglTexture,M.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&M.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Me.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=M.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Me.useMultisampledRTT(e)===!1?M.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,oe.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest}else oe.copy(ge).multiplyScalar(pe).floor(),se.copy(_e).multiplyScalar(pe).floor(),ce=ve;if(n!==0&&(r=O),j.bindFramebuffer(A.FRAMEBUFFER,r)&&j.drawBuffers(e,r),j.viewport(oe),j.scissor(se),j.setScissorTest(ce),i){let r=M.get(e.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=M.get(e.textures[t]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=M.get(e.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,t.__webglTexture,n)}ie=-1};function Et(e){let t=M.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ae.textureFormatReadable(e.format),t.__typeReadable=Ae.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){P(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=M.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){j.bindFramebuffer(A.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+s);let u=Et(o);if(u.__formatReadable===!1){P(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){P(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&A.readPixels(t,n,r,i,qe.convert(c),qe.convert(l),a)}finally{let e=k===null?null:M.get(k).__webglFramebuffer;j.bindFramebuffer(A.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=M.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){j.bindFramebuffer(A.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+s);let d=Et(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,f),A.bufferData(A.PIXEL_PACK_BUFFER,a.byteLength,A.STREAM_READ),A.readPixels(t,n,r,i,qe.convert(l),qe.convert(u),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let p=k===null?null:M.get(k).__webglFramebuffer;j.bindFramebuffer(A.FRAMEBUFFER,p);let m=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Yn(A,m,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,f),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,a),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(f),A.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Me.setTexture2D(e,0),A.copyTexSubImage2D(A.TEXTURE_2D,n,0,0,o,s,i,a),j.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=qe.convert(t.format),_=qe.convert(t.type),v;t.isData3DTexture?(Me.setTexture3D(t,0),v=A.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Me.setTexture2DArray(t,0),v=A.TEXTURE_2D_ARRAY):(Me.setTexture2D(t,0),v=A.TEXTURE_2D),j.activeTexture(A.TEXTURE0),j.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,t.flipY),j.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),j.pixelStorei(A.UNPACK_ALIGNMENT,t.unpackAlignment);let y=j.getParameter(A.UNPACK_ROW_LENGTH),b=j.getParameter(A.UNPACK_IMAGE_HEIGHT),x=j.getParameter(A.UNPACK_SKIP_PIXELS),S=j.getParameter(A.UNPACK_SKIP_ROWS),C=j.getParameter(A.UNPACK_SKIP_IMAGES);j.pixelStorei(A.UNPACK_ROW_LENGTH,h.width),j.pixelStorei(A.UNPACK_IMAGE_HEIGHT,h.height),j.pixelStorei(A.UNPACK_SKIP_PIXELS,l),j.pixelStorei(A.UNPACK_SKIP_ROWS,u),j.pixelStorei(A.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=M.get(e),r=M.get(t),h=M.get(n.__renderTarget),g=M.get(r.__renderTarget);j.bindFramebuffer(A.READ_FRAMEBUFFER,h.__webglFramebuffer),j.bindFramebuffer(A.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,M.get(e).__webglTexture,i,d+n),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,M.get(t).__webglTexture,a,m+n)),A.blitFramebuffer(l,u,o,s,f,p,o,s,A.DEPTH_BUFFER_BIT,A.NEAREST);j.bindFramebuffer(A.READ_FRAMEBUFFER,null),j.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||M.has(e)){let n=M.get(e),r=M.get(t);j.bindFramebuffer(A.READ_FRAMEBUFFER,ee),j.bindFramebuffer(A.DRAW_FRAMEBUFFER,te);for(let e=0;e<c;e++)w?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,n.__webglTexture,i),T?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,r.__webglTexture,a),i===0?T?A.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):A.copyTexSubImage2D(v,a,f,p,l,u,o,s):A.blitFramebuffer(l,u,o,s,f,p,o,s,A.COLOR_BUFFER_BIT,A.NEAREST);j.bindFramebuffer(A.READ_FRAMEBUFFER,null),j.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?A.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?A.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):A.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):A.texSubImage2D(A.TEXTURE_2D,a,f,p,o,s,g,_,h);j.pixelStorei(A.UNPACK_ROW_LENGTH,y),j.pixelStorei(A.UNPACK_IMAGE_HEIGHT,b),j.pixelStorei(A.UNPACK_SKIP_PIXELS,x),j.pixelStorei(A.UNPACK_SKIP_ROWS,S),j.pixelStorei(A.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&A.generateMipmap(v),j.unbindTexture()},this.initRenderTarget=function(e){M.get(e).__webglFramebuffer===void 0&&Me.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Me.setTextureCube(e,0):e.isData3DTexture?Me.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Me.setTexture2DArray(e,0):Me.setTexture2D(e,0),j.unbindTexture()},this.resetState=function(){ne=0,re=0,k=null,j.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=hr._getDrawingBufferColorSpace(e),t.unpackColorSpace=hr._getUnpackColorSpace()}},Vf={value:new F(160,120)};function Hf(e){return e.onBeforeCompile=e=>{e.uniforms.uSnap=Vf,e.vertexShader=`uniform vec2 uSnap;
`+e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
      vec4 snapped = gl_Position;
      snapped.xyz /= snapped.w;
      snapped.xy = floor(snapped.xy * uSnap + 0.5) / uSnap;
      snapped.xyz *= snapped.w;
      gl_Position = snapped;`)},e}var Uf=new Map;function z(e,t={}){if(t.map)return Hf(new pc({color:e,flatShading:!0,...t}));let n=`${e}|${JSON.stringify(t)}`,r=Uf.get(n);return r||(r=Hf(new pc({color:e,flatShading:!0,...t})),Uf.set(n,r)),r}function B(e,t,n,r,i,a,o){let s=new L(t,z(n,o));return s.position.set(r,i,a),e.add(s),s}var Wf=(e,t=6,n=4)=>new nc(e,t,n),Gf=(e,t,n)=>new Ao(e,t,n),Kf=(e,t,n=5)=>new No(e,t,n);function qf(){let e=new ai,t=new ai;return e.add(t),{root:e,body:t}}function Jf(e,t,n,r){let i=new ai;return i.position.set(t,n,r),e.add(i),i}function Yf(e,t,n,r){let i=t.map(e=>e.position.clone());e.crawl=(e,t)=>{for(let e of n)e.visible=!0;r(e,t)},e.stand=()=>{t.forEach((e,t)=>{e.position.copy(i[t]),e.rotation.set(0,0,0)});for(let e of n)e.visible=!1;e.body.rotation.set(0,0,0),e.body.position.set(0,0,0)},e.stand()}function Xf(e,t,n,r,i,a){e.body.rotation.set(r,0,a-Math.PI/2),e.body.position.set(i-t/2,n,0)}function Zf(e,t){return e<t?Math.sin(e/t*Math.PI/2):(1-(e-t)/(1-t))**2}var Qf=e=>e*e*(3-2*e);function $f(e,t,n,r,i,a=.05){for(let o of[-1,1])B(e,Gf(a,a,a),i,t,n,r*o,{emissive:i,emissiveIntensity:.8}).userData.eye=!0}function ep(e,t=1,n=!0){let r=qf(),i=r.body;B(i,Wf(.28),e,0,.3,0).scale.set(1.4,.9,1);let a=B(i,Kf(.17,.38),e,.45,.33,0);a.rotation.z=-Math.PI/2,B(i,Wf(.04,4,3),`#e88a9a`,.64,.33,0);for(let e of[-1,1])B(i,Wf(.09,5,3),`#d98b96`,.28,.55,.13*e).scale.set(.5,1,1);$f(i,.48,.42,.08,`#ff2a2a`);let o=Jf(i,-.3,.07,0);B(o,new Mo(.025,.04,.7,4),`#d98b96`,-.32,.13,0).rotation.z=Math.PI/2.6;let s=(t,n)=>{let r=Jf(i,t,.15,.16*n);return B(r,Gf(.08,.15,.06),e,0,-.075,0),r},c=[s(.18,-1),s(.18,1)],l=[s(-.15,-1),s(-.15,1)];if(n&&(B(i,Gf(.26,.24,.3),`#5a3d22`,-.18,.55,0),B(i,Gf(.12,.08,.32),`#c9a43a`,-.2,.7,0)),Yf(r,[o,...c,...l],[],(e,t)=>{i.rotation.set(Math.sin(e)*.14*t,0,-.1),i.position.set(Math.sin(e*2)*.03*t,-.06,0),c.forEach((n,r)=>{n.rotation.z=.7+Math.sin(e+r*Math.PI)*.65*t}),l.forEach((t,n)=>{t.rotation.set(n?.35:-.35,0,-1.25+Math.sin(e*2+n)*.08)}),o.rotation.set(0,Math.sin(e*.7)*.5,.45)}),r.attack=e=>{let t=Zf(e,.25);i.position.x=.3*t,i.position.y+=Math.sin(Math.min(1,e/.4)*Math.PI)*.08,i.rotation.z=-.25*t;for(let e of c)e.rotation.z=.9*t;for(let e of l)e.rotation.z=-.6*t;o.rotation.y=.6*t},n){let e=Jf(c[1],0,-.14,.03);e.rotation.z=Math.PI/2,B(e,Gf(.04,.05,.04),`#3a2a1a`,0,-.01,0),B(e,Gf(.03,.2,.015),`#c8ccd4`,0,-.13,0),r.attack=t=>{let n=Zf(t,.35);i.position.x=.2*n,i.position.y+=Math.sin(Math.min(1,t/.5)*Math.PI)*.06,i.rotation.set(0,.3*n,.25*n),c[1].rotation.z=1.4*n,e.rotation.z=Math.PI/2-1.4*n,c[0].rotation.z=-.3*n;for(let e of l)e.rotation.z=-.4*n;o.rotation.y=-.5*n}}return r.root.scale.setScalar(t),r}function tp(){let e=qf(),t=e.body,n=`#c98d4c`;B(t,Wf(.3),n,0,.62,0).scale.set(1,1.5,.9),B(t,Wf(.2),`#e0b07a`,.12,.55,0).scale.set(.6,1.2,.8),B(t,Wf(.19),n,.12,1.15,0);let r=B(t,Kf(.12,.3),n,.36,1.12,0);r.rotation.z=-Math.PI/2;for(let e of[-1,1])B(t,Gf(.07,.32,.06),n,.02,1.42,.09*e).rotation.x=.2*e;$f(t,.27,1.2,.08,`#ffffff`,.045);let i=[-1,1].map(e=>{let n=Jf(t,0,.15,.13*e);return B(n,Gf(.55,.08,.13),`#8a5a2c`,.12,-.11,0),n}),a=[-1,1].map(e=>Jf(t,.15,.9,.22*e)),o=a.map(e=>B(e,Wf(.12,5,4),`#b3121b`,.21,-.12,0)),s=a.map(e=>B(e,Gf(.08,.3,.08),n,0,-.15,0)),c=Jf(t,-.05,.5,0);B(c,Kf(.12,.8),n,-.37,-.15,0).rotation.z=Math.PI/1.6,B(t,Gf(.06,.06,.62),`#222`,0,.85,0).rotation.y=0,Yf(e,[...i,...a,...o,c],s,(t,n)=>{Xf(e,1.5,.3,Math.sin(t*2)*.05*n,Math.max(0,Math.sin(t))*.12*n,.1+Math.sin(t)*.1*n);for(let e of a)e.rotation.z=2.3+Math.sin(t)*.7*n;for(let e of o)e.position.set(0,-.36,0);for(let e of i)e.rotation.z=-1.2+Math.sin(t+Math.PI)*.45*n;c.rotation.set(Math.sin(t*.5)*.3,0,1.2+Math.sin(t)*.25*n)});let l=1,u=1;return e.attack=e=>{e<u&&(l=1-l),u=e;let n=Zf(e,.3);t.position.x=.12*n,t.position.y+=Math.sin(Math.min(1,e/.6)*Math.PI)*.05,t.rotation.set(0,.35*n*(l?1:-1),-.15*n),a.forEach((e,t)=>{let r=o[t],i=s[t];if(t===l?r.position.set(.21+.5*n,-.12+.1*n,0):r.position.set(.21+.05*n,-.12+.14*n,0),t===l&&n>.05){let e=r.position.x,t=r.position.y;i.visible=!0,i.position.set(e/2,t/2,0),i.rotation.z=Math.atan2(-e,t),i.scale.y=Math.hypot(e,t)/.3}else i.visible=!1,i.position.set(0,-.15,0),i.rotation.z=0,i.scale.y=1})},e}function np(e,t,n=1,r=`bomb`,i=!1){let a=qf(),o=a.body;B(o,Wf(.24),t,0,.42,0).scale.set(1,1.2,1.1),B(o,Wf(.25,6,5),e,.05,.86,0);for(let t of[-1,1]){let n=B(o,Kf(.08,.45,4),e,0,.92,.32*t);n.rotation.x=Math.PI/2*t}let s=B(o,Kf(.06,.25,4),e,.33,.84,0);s.rotation.z=-Math.PI/2,$f(o,.24,.94,.1,`#ffd21f`,.06),B(o,Gf(.14,.04,.2),`#2a1a10`,.26,.74,0);let c=[-1,1].map(e=>{let n=Jf(o,0,.2,.12*e);return B(n,Gf(.1,.2,.1),t,0,-.1,0),n}),l=[-1,1].map(t=>{let n=Jf(o,.02,.6,.27*t);return B(n,Gf(.07,.3,.07),e,0,-.15,0),B(n,Wf(.06,4,3),e,0,-.32,0),n});if(Yf(a,[...c,...l],l,(e,t)=>{Xf(a,1.1,.28,Math.sin(e)*.18*t,Math.sin(e*2)*.05*t,.12+Math.sin(e*2)*.08*t),l.forEach((n,r)=>{n.rotation.z=2.4+Math.sin(e+r*Math.PI)*.6*t}),c.forEach((n,r)=>{n.rotation.z=-.45-Math.sin(e+Math.PI/2+r*Math.PI)*.4*t})}),r===`bomb`){let t=Jf(o,.22,.45,.28);B(t,Wf(.12,6,5),`#151515`,0,0,0),B(t,Gf(.03,.1,.03),`#ffb020`,0,.15,0,{emissive:`#ff8a00`}),B(o,Gf(.2,.22,.26),`#6a4a2a`,-.22,.5,0);let n=new I(.02,.6,.27),r=new I(0,1,0),i=B(o,Gf(.07,1,.07).translate(0,.5,0),e,n.x,n.y,n.z);i.visible=!1;let s=Math.atan2(.28,.22),c=Math.hypot(.22,.28),l=1.7,u=-1.3;a.attack=e=>{let a,d,f,p=0;if(e<.25){let t=Qf(e/.25);a=s+(l-s)*t,d=.45+.25*t,f=-.4*t,p=.1*t}else if(e<.5){let t=(e-.25)/.25;a=l+-3*t*t,d=.7-.15*t,f=-.4+.9*t,p=.1+Math.sin(Math.min(1,t*1.4)*Math.PI/2)*.45}else{let t=Qf((e-.5)/.5);a=u+(s-u)*t,d=.55-.1*t,f=.5*(1-t),p=.55*(1-t)}let m=c+p;t.position.set(m*Math.cos(a),d,m*Math.sin(a)),o.rotation.y=f,o.position.y+=e<.5?Math.sin(e*2*Math.PI)*.06:0;let h=t.position.clone().sub(n),g=h.length();i.visible=e<1&&g>.12,i.quaternion.setFromUnitVectors(r,h.normalize()),i.scale.y=g}}else if(r===`staff`){let e=Jf(o,.2,.55,.3);B(e,new Mo(.03,.04,1.2,4),`#4a3020`,0,.1,0),B(e,new Zs(.09,0),`#ff8a3a`,0,.75,0,{emissive:`#ff5a10`,emissiveIntensity:2}),a.attack=t=>{let n=Zf(t,.3);e.rotation.z=-.8*n,e.position.y=.55+.12*n,o.rotation.z=-.1*n}}else{let e=l[1];e.visible=!0;let t=Jf(e,0,-.3,0);t.rotation.z=1.2,B(t,new Mo(.03,.04,.45,4),`#5a3a1e`,0,-.2,0),B(t,Wf(.11,6,4),`#3a3a40`,0,-.45,0);for(let[e,n,r]of[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1],[0,-1,0]])B(t,Kf(.035,.12,4),`#8a8a90`,e*.12,-.45+n*.12,r*.12).quaternion.setFromUnitVectors(new I(0,1,0),new I(e,n,r));let n=1.1,r=-.2;e.rotation.z=n,a.attack=t=>{let i,a;if(t<.15){let e=Qf(t/.15);i=n+1.6*e,a=.12*e}else if(t<.3){let e=(t-.15)/.15;i=2.7+-2.9000000000000004*e*e,a=.12-.42*e}else if(t<.45)i=r,a=-.3;else{let e=Qf((t-.45)/.55);i=r+1.3*e,a=-.3*(1-e)}e.rotation.z=i,o.rotation.z=a,o.position.x=Math.max(0,-a)*.4}}if(i){B(o,new Mo(.08,.1,.35,5),`#d8cfb6`,.02,1.2,0),B(o,Wf(.42,7,4),`#8a3ab0`,.02,1.38,0).scale.set(1,.45,1);for(let[e,t]of[[.2,.1],[-.15,.2],[0,-.25]])B(o,Wf(.06,4,3),`#f0e0ff`,e,1.52,t)}return a.root.scale.setScalar(n),a}function rp(){let e=qf(),t=e.body;B(t,Wf(.2,6,4),`#d0402a`,0,.35,0).scale.set(1,1.2,1),B(t,Wf(.17,6,4),`#d0402a`,.05,.65,0);for(let e of[-1,1])B(t,Kf(.04,.2,4),`#2a1a10`,.02,.85,.1*e).rotation.x=-.4*e;$f(t,.18,.7,.07,`#ffe03a`,.05),B(t,Gf(.05,.18,.06),`#2a4aa0`,.19,.38,0);let n=B(t,new Mo(.02,.03,.4,4),`#d0402a`,-.25,.25,0);n.rotation.z=Math.PI/2.8;for(let e of[-1,1])B(t,Gf(.08,.15,.07),`#a0301e`,0,.08,.1*e);return e.attack=e=>{let n=Zf(e,.3);t.position.x=.22*n,t.position.y+=Math.sin(Math.min(1,e/.5)*Math.PI)*.12,t.rotation.z=-.3*n},e}function ip(){let e=qf(),t=e.body;B(t,Wf(.26,7,5),`#e9e2cf`,0,.85,0);let n=Jf(t,-.04,.66,0);B(n,Gf(.22,.1,.26),`#d8cfb6`,.14,-.04,0);for(let e of[-1,1])B(t,Gf(.1,.09,.09),`#0a0a0a`,.22,.88,.09*e);return B(t,Gf(.05,.05,.06),`#0a0a0a`,.25,.75,0),$f(t,.25,.88,.09,`#7dff5a`,.04),e.attack=e=>{let r=Zf(e,.3);t.position.x=.35*r,t.rotation.z=-.35*r,n.rotation.z=-.7*Math.sin(Math.min(1,e/.3)*Math.PI)},e}function ap(){let e=qf(),t=e.body,n=`#d98b96`;B(t,Wf(.55,7,5),n,0,.7,0).scale.set(1.4,1,1),B(t,Wf(.35,6,5),n,.7,.85,0),B(t,new Mo(.16,.18,.12,6),`#e8a0aa`,1.02,.8,0).rotation.z=Math.PI/2;for(let e of[-1,1])B(t,Gf(.04,.06,.04),`#3a1a1a`,1.09,.82,.06*e);$f(t,.92,1,.15,`#ffe03a`,.07);for(let e of[-1,1])B(t,Kf(.12,.25,4),n,.65,1.2,.2*e).rotation.x=-.5*e;for(let e of[-1,1])for(let r of[-.4,.4])B(t,Gf(.18,.35,.18),n,r,.18,.3*e);return B(t,Wf(.3,6,3),`#5a4a2a`,-.2,1,.15).scale.set(1.5,.4,1.2),B(t,Gf(.12,.3,.12),`#3a6a2a`,-.3,1.2,-.1),e.attack=e=>{let n=(e-.25)/.75,r=e<.25?.45*Qf(e/.25):n<.12?.45-.57*(n/.12)**2:-.12*(1-Qf((n-.12)/.88));t.rotation.z=r,t.position.x=e<.25?0:.25*Zf(n,.12),t.position.y+=.15*Math.max(0,r)/.45},e}function op(e){let t=new fs,n=[[0,0],[.25,.55],[.7,.85],[1,.6],[.85,.35],[.8,.05],[.6,.2],[.45,-.15],[.25,.05]];t.moveTo(n[0][0]*e,n[0][1]*e);for(let[r,i]of n.slice(1))t.lineTo(r*e,i*e);return new ec(t)}function sp(e,t,n,r,i,a,o={}){return[1,-1].map(s=>{let c=Jf(e,t,n,r*s),l=new L(op(i),z(a,{side:2,...o}));return l.rotation.y=-s*Math.PI/2,c.add(l),c.rotation.y=s*.5,c})}function cp(e){let t=qf(),n=t.body,r=e===2,i=r?`#1e1212`:`#9a1a14`,a=r?`#0e0808`:`#5a0c0a`,o=r?`#2a2018`:`#d8cfb6`,s={emissive:`#ff5a10`,emissiveIntensity:2};for(let e of[-1,1])B(n,Gf(.3,.45,.3),i,-.15,.55,.3*e),B(n,Gf(.22,.4,.22),a,-.05,.2,.3*e).rotation.z=-.3,B(n,Gf(.28,.1,.26),`#0a0a0a`,.02,.05,.3*e);let c=Jf(n,0,.95,0);B(c,Wf(.55,7,5),i,.05,.3,0).scale.set(1,1.15,1.15),B(c,Wf(.42,6,4),r?`#3a1a10`:`#c0503a`,.25,.1,0).scale.set(.8,1,1.2),B(c,Wf(.4,6,4),i,-.1,.65,0).scale.set(1.2,.8,1.5);let l=Jf(c,.45,.75,0);B(l,Gf(.42,.34,.4),i,.1,0,0);let u=Jf(l,0,-.12,0);B(u,Gf(.4,.12,.36),a,.18,-.06,0);for(let e of[-.12,0,.12])B(u,Kf(.035,.12,4),`#f4efe0`,.34,.05,e);for(let e of[-.13,.13])B(l,Kf(.03,.14,4),`#f4efe0`,.3,-.2,e).rotation.x=Math.PI;$f(l,.32,.06,.11,r?`#fff2a0`:`#ffd23a`,.08);for(let e of[-1,1])B(l,Kf(.1,.4,5),o,-.05,.25,.18*e).rotation.set(-.6*e,0,-.5),B(l,Kf(.06,r?.55:.3,5),o,-.22,r?.55:.4,.3*e).rotation.set(-.3*e,0,r?-.2:-1.4);let d=e=>{let t=Jf(c,.05,.55,.62*e);B(t,Wf(.2,6,4),i,0,0,0),B(t,Gf(.24,.6,.24),i,.05,-.32,0);let n=Jf(t,.05,-.62,0);B(n,Gf(.2,.55,.2),a,.05,-.27,0),B(n,Wf(.16,6,4),a,.08,-.6,0);for(let e of[-.08,0,.08])B(n,Kf(.035,.2,4),o,.22,-.66,e).rotation.z=-Math.PI/2-.4;return{sh:t,el:n}},f=d(1),p=d(-1),m=[],h=[];if(r){for(let[e,t,n,r,i]of[[.3,.3,.3,.05,.4],[.32,0,-.2,.05,.3],[.2,.5,-.35,.05,.25],[-.2,.4,.45,.25,.05]])B(c,Gf(r,i,.05),`#ff7a20`,e,t,n,s).rotation.x=.4;for(let e of[-1,1])B(n,Gf(.05,.3,.05),`#ff7a20`,-.02,.55,.42*e,s);h=sp(c,-.25,.65,.3,1.6,`#2a0e0e`,{emissive:`#3a0800`,emissiveIntensity:1});let e=Jf(n,-.45,.7,0);B(e,new Mo(.05,.12,.9,5),i,-.35,-.2,0).rotation.z=Math.PI/2.6,B(e,Kf(.1,.22,3),`#ff7a20`,-.78,-.42,0,s).rotation.z=Math.PI/1.6;for(let[e,t,n]of[[0,0,.45],[-.12,.14,.3],[-.12,-.14,.3],[.1,.12,.25],[.1,-.12,.25]]){let r=B(l,Kf(.07,n,4),`#ffb030`,e,.3+n/2,t,{emissive:`#ff6a00`,emissiveIntensity:2.5});r.userData.keep=!0,m.push(r)}}else for(let[e,t,n]of[[.35,.3,.3],[.3,.05,-.3]])B(c,Gf(.04,.3,.04),`#ff9a3a`,e,t,n,{emissive:`#ff4a00`,emissiveIntensity:1});let g=(e,t,n=0,r=0)=>{f.sh.rotation.z=e,p.sh.rotation.z=t,f.el.rotation.z=n,p.el.rotation.z=r};return c.rotation.z=-.25,g(.25,.25),t.attack=e=>{let t=e<.35?Qf(e/.35):0,r=e<.35?0:Zf((e-.35)/.65,.15);g(.25+2.4*t+1.2*r,.25+2.4*t+1.2*r,-.6*t,-.6*t),c.rotation.z=-.25+.3*t-.45*r,u.rotation.z=-.5*(t+r),n.position.x=.25*r},t.climb=(e,t)=>{let n=Math.sin(e*Math.PI),r=-n;g(1.4+.9*Math.max(0,n),1.4+.9*Math.max(0,r),-.4*Math.max(0,r),-.4*Math.max(0,n)),c.rotation.z=-.9*(1-t)-.25*t,c.rotation.x=.15*n,u.rotation.z=-.3-.2*Math.abs(n)},t.summon=(e,t)=>{let n=Math.sin(e*31)*.04*t;g(.25+2.2*t+n,.25+2.2*t-n,-.5*t,-.5*t),f.sh.rotation.x=-.7*t,p.sh.rotation.x=.7*t,c.rotation.set(.03*Math.sin(e*23)*t,0,-.25+.5*t),l.rotation.z=.4*t,u.rotation.z=-(.35+.2*Math.abs(Math.sin(e*9)))*t},t.stand=()=>{g(.25,.25),f.sh.rotation.x=p.sh.rotation.x=0,c.rotation.set(0,0,-.25),l.rotation.z=0,u.rotation.z=0,n.position.x=0},t.idle=e=>{for(let[t,n]of m.entries())n.scale.y=1+Math.sin(e*14+t*2)*.25;h.forEach((t,n)=>{t.rotation.x=(n?-1:1)*(.25+Math.sin(e*3)*.3)})},r&&t.root.scale.setScalar(1.35),t}function lp(){let e=qf(),t=e.body,n={emissive:`#ff4a00`,emissiveIntensity:1.2};B(t,Wf(.16,6,4),`#ff7a2a`,0,.55,0,n).scale.set(1,1.2,1),B(t,Wf(.13,6,4),`#ff9a3a`,.08,.8,0,n);for(let e of[-1,1])B(t,Kf(.035,.16,4),`#3a1008`,.04,.95,.08*e).rotation.x=-.5*e;$f(t,.19,.83,.05,`#fff2a0`,.04);let r=B(t,Kf(.09,.3,4),`#ffd23a`,-.18,.45,0,{emissive:`#ff8a00`,emissiveIntensity:2});r.rotation.z=Math.PI/1.5;let i=sp(t,-.05,.62,.1,.35,`#5a1a0a`,{emissive:`#3a0800`,emissiveIntensity:1});return e.idle=e=>{i.forEach((t,n)=>{t.rotation.x=(n?-1:1)*Math.sin(e*22)*.7}),r.scale.y=1+Math.sin(e*17)*.3},e.attack=e=>{let n=Zf(e,.3);t.position.x=.3*n,t.rotation.z=-.4*n},e}function up(e){return e===`rat`?ep(`#9aa0a8`):e===`kangaroo`?tp():np(`#6fb54f`,`#4a3424`)}function dp(e,t=1){return e===`demon`?cp(t):e===`mephit`?lp():e===`rat`?ep(`#4a3a30`,.7,!1):e===`skull`?ip():e===`warlock`?np(`#7a8a5a`,`#3a2a5a`,1.05,`staff`,!0):e===`imp`?rp():e===`ham`?ap():np(`#3f6b2a`,`#2a2018`,1.1,`club`)}function fp(e){let t=qf(),n=t.body,r={transparent:!0,opacity:.55,emissive:e,emissiveIntensity:.5,depthWrite:!1};B(n,Kf(.3,.9,6),`#dfe8ff`,0,.75,0,r).rotation.x=Math.PI,B(n,Wf(.3,6,5),`#dfe8ff`,0,1.1,0,r);for(let e of[-1,1])B(n,Gf(.06,.12,.06),`#000000`,.26,1.15,.1*e);return B(n,Gf(.05,.12,.14),`#000000`,.27,.98,0),t}function pp(e,t=!1){return t?new L(new Xs(.2,0),z(`#3aff4a`,{emissive:`#0a8a1a`,emissiveIntensity:1.5})):e?new L(new Xs(.18,0),z(`#b04dff`,{emissive:`#6a1aa8`,emissiveIntensity:1})):new L(new Zs(.14,0),z(`#ffd23a`,{emissive:`#a07000`,emissiveIntensity:1}))}function mp(e){let t=me(e),n=ge(t),r=new ai,i={emissive:n,emissiveIntensity:.6};return t.t===`tome`?(B(r,Gf(.3,.09,.24),n,0,0,0,i),B(r,Gf(.26,.07,.25),`#e8dcc0`,.02,0,0)):t.t===`scroll`?(B(r,new Mo(.06,.06,.32,5),`#e0cf9a`,0,0,0).rotation.x=Math.PI/2,B(r,new Mo(.065,.065,.06,5),n,0,0,0,i).rotation.x=Math.PI/2):(B(r,Wf(.12,6,4),n,0,0,0,i),B(r,new Mo(.035,.04,.12,4),`#bfd0d8`,0,.14,0),B(r,Gf(.06,.04,.06),`#6a4a2a`,0,.21,0)),r}function hp(){let e=new ai;return B(e,Gf(.3,.26,.3),`#c02a4a`,0,0,0,{emissive:`#4a0010`}),B(e,Gf(.32,.27,.06),`#ffd23a`,0,0,0),B(e,Gf(.06,.27,.32),`#ffd23a`,0,0,0),B(e,Wf(.07,4,3),`#ffd23a`,0,.17,0),e}function gp(){let e=new ai;return B(e,Wf(.16,6,5),`#111`,0,.16,0),B(e,Gf(.06,.12,.06),`#ffb020`,0,.36,0,{emissive:`#ff6a00`,emissiveIntensity:2}),e}function _p(e,t){let n=document.createElement(`canvas`);n.width=n.height=e;let r=n.getContext(`2d`),i=1337;t(r,()=>(i=i*16807%2147483647,i/2147483647));let a=new Eo(n);return a.magFilter=mt,a.minFilter=mt,a.colorSpace=Pn,a.wrapS=a.wrapT=dt,a}function vp(e,t,n,r,i){for(let a=0;a<r;a++)e.fillStyle=i[Math.floor(t()*i.length)],e.fillRect(Math.floor(t()*n),Math.floor(t()*n),1+Math.floor(t()*2),1+Math.floor(t()*2))}var yp=()=>_p(32,(e,t)=>{e.fillStyle=`#2a1a12`,e.fillRect(0,0,32,32);for(let n=0;n<4;n++){let r=n%2?8:0;for(let i=-1;i<3;i++){let a=95+Math.floor(t()*35);e.fillStyle=`rgb(${a},${a-30},${a-50})`,e.fillRect(i*16+r+1,n*8+1,14,6)}}vp(e,t,32,90,[`#1a140f`,`#3d4a22`,`#4f5e2a`,`#5b4636`])}),bp=()=>_p(32,(e,t)=>{e.fillStyle=`#121214`,e.fillRect(0,0,32,32);for(let n=0;n<2;n++)for(let r=0;r<2;r++){let i=64+Math.floor(t()*22);e.fillStyle=`rgb(${i-6},${i-4},${i+2})`,e.fillRect(r*16+1,n*16+1,14,14)}vp(e,t,32,120,[`#120e0b`,`#2e3a1a`,`#3a2a20`,`#4a2018`])});function xp(e,t,n=.5){let r=document.createElement(`canvas`);r.width=128,r.height=32;let i=r.getContext(`2d`);i.font=`bold 22px monospace`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillStyle=`#000`,i.fillText(e,66,18),i.fillStyle=t,i.fillText(e,64,16);let a=new Eo(r);a.magFilter=a.minFilter=mt,a.colorSpace=Pn;let o=new Na(new ya({map:a,transparent:!0,depthTest:!1}));return o.scale.set(n*4,n,1),o}var Sp=1.5,Cp=240,wp=.3,Tp=.55,Ep=Hf(new Ba({color:`#ff1a1a`})),Dp=.22,Op=Hf(new Ba({color:`#6ab8ff`})),kp=Hf(new Ba({color:`#ff5a1a`})),Ap=Hf(new Ba({color:`#b04dff`})),jp=new Map,Mp=e=>jp.get(e)??jp.set(e,Hf(new Ba({color:e}))).get(e),Np=`#ffd23a`,Pp={rat:.35,skull:.45,goblin:.6,warlock:.5,imp:.3,ham:.65,demon:.7,mephit:.35},Fp={skull:.9,goblin:.8,warlock:1,rat:.4,imp:.5,ham:1,demon:1.6,mephit:.7},Ip={skull:1.4,goblin:1.5,warlock:1.9,rat:.9,imp:1,ham:1.9,demon:2.6,mephit:1.2},Lp=7,Rp=4,zp=.8,Bp=3,Vp=`#ff4a1a`,Hp=e=>e*e*(3-2*e),Up=Hf(new Ba({color:`#fff0c0`})),Wp={rat:.22,kangaroo:.4,goblin:.28},Gp=Hf(new Ba({color:`#b0d8ff`,transparent:!0,opacity:.15,depthWrite:!1})),Kp=new Ao(.07,.07,.07),qp=new Ao(.08,.08,.08),Jp=new Map,Yp=e=>{let t=Jp.get(e);return t||(t=new Ba({color:e}),Jp.set(e,t),Xp.add(t)),t},Xp=new WeakSet([Kp,qp]),Zp=4,Qp=e=>e===`firebolt`?`#ff8a3a`:e===`boulder`?`#7a6a5a`:e===`soak`?`#4aa8ff`:ne[k[e].school],$p=.4,em=class{canvas;plates;renderer;scene=new hi;camera=new Yc(48,1,.1,100);level=new ai;lantern=new Zc(`#ffb36b`,14,10,1.4);players=new Map;enemies=new Map;dinner=new Map;loot=new Map;lootTags=new Map;tagSize=new WeakMap;downArrows=new Map;swapRing=null;spills=new Map;bombs=new Map;bolts=new Map;portals=new Map;cine=null;fx=[];boomLights=[];torches=[];exitMarker=null;bookmark=null;shake=0;camTarget=new I;time=0;ground=new ga(new I(0,1,0),0);raycaster=new _l;constructor(e,t){this.canvas=e,this.plates=t,this.renderer=new Bf({canvas:e,antialias:!1}),this.renderer.setPixelRatio(1),this.scene.background=new fi(`#07050a`),this.scene.fog=new mi(`#07050a`,8,17),this.scene.add(new $c(`#4a4060`,2.2)),this.scene.add(new Lc(`#7a6a8a`,`#1a1008`,1.2)),this.scene.add(this.lantern),this.scene.add(this.level);for(let e=0;e<Zp;e++){let e=new Zc(`#ff8a20`,0,1,1.5);this.scene.add(e),this.boomLights.push({light:e,t:0,life:0,peak:0})}window.addEventListener(`resize`,()=>this.resize()),this.resize()}resize(){let e=window.innerWidth/window.innerHeight,t=Math.round(Cp*e);this.renderer.setSize(t,Cp,!1),this.camera.aspect=e,this.camera.updateProjectionMatrix(),Vf.value.set(t/2,Cp/2)}map=null;buildPits(e,t){let n=new ai,r=new lo(new Qs(1,1).rotateX(-Math.PI/2),new Ba({color:`#000000`}),t.length),i=new jr,a=new fi;t.forEach(([e,t],n)=>r.setMatrixAt(n,i.makeTranslation(e+.5,-6,t+.5)));let o=[];for(let[n,r]of t)for(let[t,i]of[[1,0],[-1,0],[0,1],[0,-1]])x(e,n+t+.5,r+i+.5)||o.push(new jr().makeRotationY(Math.atan2(-t,-i)).setPosition(n+.5+t*.5,-3,r+.5+i*.5));let s=new lo(new Qs(1,6),z(`#ffffff`,{map:yp()}),o.length);return o.forEach((e,t)=>{s.setMatrixAt(t,e),s.setColorAt(t,a.setRGB(.45,.4,.38))}),n.add(r,s),n}buildMap(e){this.clear(),this.map=e;let t=new Ao(1,Sp,1),n=new Qs(1,1).rotateX(-Math.PI/2),r=z(`#ffffff`,{map:yp()}),i=z(`#15100d`),a=[r,r,i,i,r,r],o=z(`#ffffff`,{map:bp()}),s=[],c=[],l=[];for(let t=0;t<e.h;t++)for(let n=0;n<e.w;n++){if(e.tiles[t*e.w+n]===3){l.push([n,t]);continue}if(e.tiles[t*e.w+n]!==1){c.push([n,t]);continue}let r=!1;for(let i=-1;i<=1&&!r;i++)for(let a=-1;a<=1;a++)if(!b(e,n+a,t+i)||e.tiles[(t+i)*e.w+n+a]===2){r=!0;break}r&&s.push([n,t])}let u=new jr,d=new fi,f=new lo(t,a,s.length);s.forEach(([e,t],n)=>{f.setMatrixAt(n,u.makeTranslation(e+.5,Sp/2,t+.5));let r=.75+(e*7+t*13)%10/40;f.setColorAt(n,d.setRGB(r,r*.95,r*.9))});let p=new lo(n,o,c.length);c.forEach(([e,t],n)=>{p.setMatrixAt(n,u.makeTranslation(e+.5,0,t+.5));let r=.7+(e*31+t*17)%13/40;p.setColorAt(n,d.setRGB(r,r,r*.95))}),this.level.add(f,p),l.length&&this.level.add(this.buildPits(e,l));for(let t of e.rooms){let{x:n,z:r,nx:i,nz:a}=v(e,t),o=new Zc(`#ff7a2a`,6,8,1.5);o.position.set(n+i*.3,1.1,r+a*.3);let s=new L(new Zs(.1,0),z(`#ffcc55`,{emissive:`#ff8a20`,emissiveIntensity:2}));s.position.set(n,1.05,r);let c=new L(new Ao(.06,.3,.06),z(`#3a2414`));c.position.set(n,.85,r),this.level.add(o,s,c),this.torches.push({light:o,flame:s,base:Math.random()*10})}let m=new ai,h=new L(new jo(.7,8).rotateX(-Math.PI/2),z(`#000000`));h.position.y=.01;let g=new L(new $s(.7,.9,8).rotateX(-Math.PI/2),z(`#ff2a2a`,{emissive:`#ff0000`,emissiveIntensity:1.5}));g.position.y=.02;let _=xp(`EXIT`,`#ff3a3a`,.5);_.position.y=1.6;let y=new Zc(`#ff2020`,8,6,1.5);y.position.y=1,m.add(h,g,_,y),m.position.set(e.exit.x,0,e.exit.z),this.level.add(m),this.exitMarker=m,this.camTarget.set(e.start.cx,0,e.start.cz)}clear(){this.level.clear(),this.torches=[];for(let e of[...this.players.keys()])this.removePlayer(e);for(let[e,t]of this.enemies)this.scene.remove(t.model.root,t.bar,t.barBg),this.dropHole(t),this.dropSigil(t),this.setLure(t,null),this.enemies.delete(e);for(let[e,t]of this.portals)this.scene.remove(t.g),rm(t.g),this.portals.delete(e);this.cine=null;for(let[e,t]of this.dinner)this.scene.remove(t),rm(t),this.dinner.delete(e);for(let[e,t]of this.loot)this.scene.remove(t),this.loot.delete(e);for(let[e,t]of this.lootTags)t.remove(),this.lootTags.delete(e);for(let[e,t]of this.bombs)this.scene.remove(t),this.bombs.delete(e);for(let[e,t]of this.bolts)this.scene.remove(t),this.bolts.delete(e),rm(t);for(let e of this.fx)this.scene.remove(e.obj);this.fx=[],this.bookmark&&(this.bookmark.visible=!1)}removePlayer(e){let t=this.players.get(e);t&&(this.scene.remove(t.model.root),t.ghost&&this.scene.remove(t.ghost.root),t.plate.remove(),this.players.delete(e))}syncPlayers(e,t){let n=new Set;for(let r of e){n.add(r.id);let e=this.players.get(r.id);if(e&&e.char!==r.char&&(this.removePlayer(r.id),e=void 0),!e){let t=document.createElement(`div`);t.className=`plate`,this.plates.appendChild(t),e={model:up(r.char),ghost:null,char:r.char,state:r.state,plate:t,lastX:r.x,lastZ:r.z,walk:0,lastHp:r.hp,flash:0,skin:null,flyT:0,curse:null,grace:null,graceT:-1,crawl:0,crawlA:r.a,effort:0,atkT:-1,rollT:0},this.scene.add(e.model.root),this.players.set(r.id,e)}r.state===`ghost`&&!e.ghost&&(e.ghost=fp(p[r.char].color),this.scene.add(e.ghost.root)),e.model.root.visible=r.state===`alive`||r.state===`downed`,e.ghost&&(e.ghost.root.visible=r.state===`ghost`);let i=e.state===`downed`;e.state=r.state;let a=r.state===`ghost`?e.ghost:e.model,o=r.x-e.lastX,s=r.z-e.lastZ,c=Math.hypot(o,s)/Math.max(t,.001);e.walk+=t*Math.min(c,8)*3,e.lastX=r.x,e.lastZ=r.z,e.flyT=r.f&16?e.flyT+t:0;let l=e.flyT>0?Math.sin(Math.min(1,e.flyT/se)*Math.PI)*2.2:0;if(a.root.position.set(r.x,r.state===`ghost`?.15+Math.sin(this.time*3+r.id)*.12:l,r.z),e.atkT>=0&&r.state!==`alive`&&(e.model.attack?.(1),e.atkT=-1),r.state===`downed`){i||(e.crawlA=r.a,e.effort=0);let n=c>.2;n&&(e.crawlA+=ee(Math.atan2(s,o),e.crawlA)*Math.min(1,t*6)),e.effort+=((n?1:.25)-e.effort)*Math.min(1,t*5),e.crawl+=t*(n?8:2),a.root.rotation.y=-e.crawlA,e.model.crawl?.(e.crawl,e.effort)}else{if(i&&e.model.stand?.(),a.root.rotation.y=-r.a,a.body.position.y=c>.3?Math.abs(Math.sin(e.walk))*(r.char===`kangaroo`?.25:.08):0,r.state===`alive`&&r.f&524288){e.rollT+=t;let n=Math.min(1,e.rollT/M);c>.3&&(a.root.rotation.y=-Math.atan2(s,o));let r=-n*Math.PI*2;a.body.rotation.z=r,a.body.position.set($p*Math.sin(r),$p*(1-Math.cos(r))+Math.sin(n*Math.PI)*.2,0)}else e.rollT&&(e.rollT=0,a.body.rotation.z=0,a.body.position.x=0);if(e.atkT>=0){e.atkT+=t;let n=Math.min(1,e.atkT/Wp[e.char]);e.model.attack?.(n),n>=1&&(e.atkT=-1)}}let u=r.state===`alive`&&!!(r.f&512);if(u&&!e.curse&&(e.curse=new L(new $s(.35,.5,12).rotateX(-Math.PI/2),new Ba({color:`#3aff4a`,transparent:!0,opacity:.8})),e.curse.position.y=.04,e.curse.userData.keep=!0,e.model.root.add(e.curse)),e.curse){e.curse.visible=u;let n=1+Math.sin(this.time*5)*.15;e.curse.scale.set(n,1,n),u&&Math.random()<t*4&&this.fxBurst(r.x,r.z,`#3aff4a`,1,1.2,1)}let d=r.state===`alive`&&!!(r.f&2097152);if(d&&!e.grace){e.grace=new ai;let t=new L(new nc(.75,20,14),new Ba({color:`#fff4c0`,transparent:!0,opacity:.22,depthWrite:!1,blending:2}));t.position.y=.6;let n=new L(new nc(.78,20,14),new Ba({color:`#ffd23a`,transparent:!0,opacity:.5,depthWrite:!1,wireframe:!0}));n.position.y=.6;let r=new L(new $s(.85,1,32).rotateX(-Math.PI/2),new Ba({color:`#ffd23a`,transparent:!0,opacity:.8,depthWrite:!1}));r.position.y=.05,e.grace.add(t,n,r);for(let t of e.grace.children)t.userData.keep=!0;e.model.root.add(e.grace)}if(d&&e.graceT<0&&(e.graceT=0,this.fxRing(r.x,r.z,1.4,`#ffd23a`,!1),this.fxBurst(r.x,r.z,`#fff4c0`,10,.8,3)),!d&&e.graceT>=0&&(r.state===`alive`&&(this.fxBurst(r.x,r.z,`#fff4c0`,8,.8,4),this.fxRing(r.x,r.z,.9,`#fff4c0`,!1)),e.graceT=-1,e.model.body.visible=!0),e.grace&&(e.grace.visible=d,d)){e.graceT+=t;let n=Math.max(0,1-e.graceT/ue),[r,i,a]=e.grace.children,o=n<.3,s=o&&Math.floor(this.time*16)%2?.25:1,c=1+Math.sin(this.time*9)*.04;r.scale.set(c,2-c,c),i.rotation.y+=t*1.5,r.material.opacity=(.12+Math.sin(this.time*6)*.05)*s+.06,i.material.opacity=.45*s,a.scale.set(.35+.65*n,1,.35+.65*n),a.material.opacity=.4+.5*n,e.model.body.visible=Math.floor(this.time*(o?20:10))%2==0}r.hp<e.lastHp&&r.state===`alive`&&(e.flash=wp,r.me&&(this.shake=Math.max(this.shake,.18))),e.lastHp=r.hp,e.flash=Math.max(0,e.flash-t);let f=e.flash>0&&Math.floor((wp-e.flash)/(wp/4))%2==0?Ep:r.f&2?Op:r.f&1?Gp:null;f!==e.skin&&(am(e.model.root,f),e.skin=f);let m=r.state!==`escaped`&&(r.me||!(r.f&1));if(e.plate.style.display=m?``:`none`,m){let t=this.toScreen(r.x,r.state===`alive`?1.7:r.state===`downed`?.8:r.state===`possess`?2.1:1.9,r.z);e.plate.style.transform=`translate(${t.x}px, ${t.y}px) translate(-50%, -100%)`;let n=(r.title?`${r.title} `:``)+r.name,i=Math.max(0,Math.round(r.hp/r.mhp*100)),a=`<span style="color:${p[r.char].color}">${r.state===`ghost`?`👻 `:r.state===`possess`?`👹 `:r.state===`downed`?`🩸 DOWN · `:``}${r.f&4096?`💰 `:``}${V(n)}</span>`+(r.state===`alive`?`<i class="${r.me?`me`:``}" style="width:${i}%"></i>`:``);e.plate.innerHTML!==a&&(e.plate.innerHTML=a)}}for(let e of[...this.players.keys()])n.has(e)||this.removePlayer(e)}syncEnemies(e,t){let n=new Set,r=new Map;for(let i of e){n.add(i.id);let e=this.enemies.get(i.id);if(!e){let t=i.k===`demon`&&i.ph===2&&!i.bt?2:1,n=dp(i.k,t),r=new Na(new ya({color:`#000`,depthTest:!1})),a=new Na(new ya({color:`#d01818`,depthTest:!1}));if(r.scale.set(.6,.07,1),a.scale.set(.58,.05,1),r.renderOrder=10,a.renderOrder=11,this.scene.add(n.root,r,a),e={model:n,bar:a,barBg:r,lastX:i.x,lastZ:i.z,walk:0,kind:i.k,skin:null,rider:0,aura:null,lure:null,atkT:-1,atkA:0,lastHp:i.hp,hit:0,stage:t,rise:-1,shift:-1,leap:-1,hole:null,shield:null,sigil:null,beat:0},this.enemies.set(i.id,e),i.k===`demon`&&i.bt&&i.ph!==2&&this.startRise(e,i,Lp-i.bt),i.o){let e=this.players.get(i.o),t=new L(new $s(.32,.42,10).rotateX(-Math.PI/2),new Ba({color:e?p[e.char].color:`#ffd23a`,transparent:!0,opacity:.8}));t.position.y=.03,t.userData.keep=!0,n.root.add(t)}}if((i.r??0)!==e.rider&&this.setRider(e,i.r??0),e.aura){let t=1+Math.sin(this.time*6)*.15;e.aura.scale.set(t,1,t)}let a=i.l?this.players.get(i.l):void 0,o=a?this.players.get(i.b??0):void 0,s=a?o?p[o.char].color:Np:null;if(this.setLure(e,s),e.lure&&a){let t=1+Math.sin(this.time*8+i.id)*.2;e.lure.ring.scale.set(t,1,t);let n=e.lure.tether.geometry.attributes.position;n.setXYZ(0,i.x,.12,i.z),n.setXYZ(1,a.lastX,.12,a.lastZ),n.needsUpdate=!0,e.lure.tether.computeLineDistances(),e.lure.tether.material.opacity=.55+Math.sin(this.time*10)*.25,r.has(i.l)||r.set(i.l,s)}let c=Math.floor(this.time*8+i.id)%2==0,l=Math.floor(this.time*4+i.id)%2==0;i.hp<e.lastHp&&(e.hit=Dp,this.fxBurst(i.x,i.z,i.k===`mephit`?`#ff8a20`:`#c01010`,5,Fp[i.k]*(e.stage===2?1.35:1),2.5)),e.lastHp=i.hp,e.hit=Math.max(0,e.hit-t);let u=e.hit/Dp;e.model.body.scale.set(1+u*.25,1-u*.2,1+u*.25),i.k===`demon`&&i.ph===2&&i.bt&&e.shift<0&&e.stage===1&&(e.shift=Rp-i.bt),i.k===`demon`&&i.ph===2&&!i.bt&&e.stage===1&&this.swapDemon(e,i);let d=e.shift>=0&&Math.sin(e.shift*(8+e.shift*12))>.6-e.shift/Rp?Up:i.f&2?Op:i.f&32&&c?kp:i.f&64&&c?Ap:s&&l?Mp(s):null;d!==e.skin&&(am(e.model.root,d),e.skin=d);let f=Math.hypot(i.x-e.lastX,i.z-e.lastZ)/Math.max(t,.001);e.walk+=t*Math.min(f,8)*4,e.lastX=i.x,e.lastZ=i.z;let m=e.model.root,h=i.k===`skull`?Math.sin(this.time*4+i.id)*.15:i.k===`mephit`?.35+Math.sin(this.time*6+i.id)*.1:0;if(m.position.set(i.x,h,i.z),e.model.body.position.y=i.k!==`skull`&&i.k!==`mephit`&&f>.3?Math.abs(Math.sin(e.walk))*.07:0,e.model.idle?.(this.time),e.atkT>=0){e.atkT+=t;let n=Math.min(1,e.atkT/Pp[e.kind]);e.model.attack?.(n),n>=1&&(e.atkT=-1)}m.rotation.y=-(e.atkT>=0?e.atkA:i.a),i.k===`demon`&&this.demonFrame(e,i,t);let g=Math.max(0,i.hp/i.mhp),_=g<1&&i.k!==`demon`;if(e.bar.visible=e.barBg.visible=_,_){let t=Ip[i.k];e.barBg.position.set(i.x,t,i.z),e.bar.scale.x=.58*g,e.bar.position.set(i.x-.58*(1-g)/2,t,i.z)}}for(let[e,t]of this.enemies)n.has(e)||(this.scene.remove(t.model.root,t.bar,t.barBg),this.dropHole(t),this.dropSigil(t),this.setLure(t,null),this.enemies.delete(e),this.fxDeath(t.lastX,t.lastZ,t.kind));this.syncDinner(r)}startRise(e,t,n){e.rise=n,e.beat=0;let r=new ai,i=(e,t,n,i=1)=>{let a=new L(e.rotateX(-Math.PI/2),new Ba({color:t,transparent:i<1,opacity:i,depthWrite:!1}));return a.position.y=n,r.add(a),a};i(new jo(2.2,14),`#2a0402`,.011,.7),i(new jo(1.4,12),`#000000`,.013),i(new $s(1.35,1.65,12),Vp,.014);for(let e=0;e<7;e++){let t=e/7*Math.PI*2+Math.random()*.4,n=.8+Math.random()*.9,r=i(new Qs(n,.08),`#ff8a20`,.015);r.rotation.y=-t,r.position.set(Math.cos(t)*(1.5+n/2),.015,Math.sin(t)*(1.5+n/2))}r.position.set(t.x,0,t.z),r.scale.setScalar(.01),this.scene.add(r),e.hole=r,this.cine={x:t.x,z:t.z,t:Lp-n}}dropHole(e){e.hole&&=(this.scene.remove(e.hole),rm(e.hole),null)}dropSigil(e){e.sigil&&=(this.scene.remove(e.sigil),rm(e.sigil),null)}swapDemon(e,t){this.scene.remove(e.model.root),e.model=dp(`demon`,2),this.scene.add(e.model.root),e.stage=2,e.shift=-1,e.skin=null,e.shield=null,e.atkT=-1,e.model.root.position.set(t.x,0,t.z),e.model.root.rotation.y=-t.a,this.fxBoom(t.x,t.z,3,Vp),this.fxRing(t.x,t.z,6,Vp),this.fxRing(t.x,t.z,3.5,`#ffd23a`),this.fxBurst(t.x,t.z,`#ff8a20`,30,1.5,7),this.fxBurst(t.x,t.z,`#1a0a0a`,20,1.2,6),this.shake=Math.max(this.shake,.9)}demonPounce(e){let t=this.enemies.get(e);t&&(t.leap=0)}demonFrame(e,t,n){let r=e.model.root,i=e.model;if(e.rise>=0&&this.riseFrame(e,t,n),e.shift>=0){e.shift+=n;let a=e.shift,o=Math.min(1,a/Rp);if(r.position.y=1.1*Hp(Math.min(1,a/.8))+Math.sin(this.time*31)*.04*o,r.rotation.y=-t.a+a*a*.9,i.body.position.x=(Math.random()-.5)*.12*o,i.body.position.z=(Math.random()-.5)*.12*o,a<n*1.5){let e=new Ba({color:Vp,transparent:!0,opacity:.6,side:2,depthWrite:!1}),n=new L(new Mo(1.1,1.4,6,10,1,!0),e);n.position.set(t.x,3,t.z),this.addFx(n,Rp,t=>{n.scale.set(1-t*.6,1,1-t*.6),n.rotation.y+=.1,e.opacity=.6*(1-t)*(.7+Math.random()*.3)}),this.fxRing(t.x,t.z,4,`#ffd23a`)}if(Math.floor(a/.07)!==e.beat){e.beat=Math.floor(a/.07);let n=Math.random()*Math.PI*2,r=2.5+Math.random(),i=new L(Kp,Yp(Math.random()<.5?`#ff8a20`:`#ffd23a`)),o=t.x+Math.cos(n)*r,s=t.z+Math.sin(n)*r,c=Math.random()*2;if(this.addFx(i,.5,e=>{i.position.set(o+(t.x-o)*e,c+(1.6-c)*e,s+(t.z-s)*e),i.scale.setScalar(2*(1-e)+.5)}),e.beat%4==0){let e=Math.random()*Math.PI*2;this.fxZap([t.x+Math.cos(e)*2.2,t.z+Math.sin(e)*2.2,t.x,t.z],Math.random()<.5?`#ffd23a`:`#ff5aff`)}}this.shake=Math.max(this.shake,.08+.25*o)}let a=!!(t.f&1048576)&&e.rise<0;a&&!e.shield&&(e.shield=new L(new Xs(1.5,1),new Ba({color:`#ffd23a`,transparent:!0,opacity:.25,depthWrite:!1,wireframe:!0})),e.shield.position.y=1.2,e.shield.userData.keep=!0,r.add(e.shield)),e.shield&&(e.shield.visible=a,e.shield.rotation.y+=n*2,e.shield.material.opacity=.2+Math.sin(this.time*12)*.1);let o=t.sm??0;if(o>0&&e.rise<0&&e.shift<0){let r=Hp(Math.min(1,(Bp-o)/.4,o/.4));i.summon?.(this.time,r),e.sigil||(e.sigil=tm(),this.scene.add(e.sigil),this.fxRing(t.x,t.z,3,`#ff5aff`));let a=e.sigil;a.position.set(t.x,0,t.z),a.rotation.y+=n*1.2,a.scale.setScalar(.3+.7*r+Math.sin(this.time*10)*.03),a.traverse(e=>{(e instanceof L||e instanceof Co)&&(e.material.opacity=(.55+Math.sin(this.time*14)*.25)*r)});let s=Math.floor(this.time/.12);if(s!==e.beat){e.beat=s,this.fxMotes(t.x+(Math.random()-.5)*1.6,t.z+(Math.random()-.5)*1.6,Math.random()<.5?Vp:`#ff5aff`,1,2.5,1);let n=[...this.portals.values()],r=n[s%Math.max(1,n.length)];r&&s%2==0&&this.fxZap([t.x,t.z,r.g.position.x,r.g.position.z],Math.random()<.5?Vp:`#ff5aff`)}}else e.sigil&&(this.dropSigil(e),e.rise<0&&i.stand?.());if(e.leap>=0){e.leap+=n;let t=Math.min(1,e.leap/zp);r.position.y+=Math.sin(t*Math.PI)*2.6,i.body.rotation.z=.5*Math.sin(t*Math.PI),t>=1&&(e.leap=-1,i.body.rotation.z=0)}}riseFrame(e,t,n){e.rise+=n;let r=e.rise,i=e.model.root,a=e.model,o=Math.max(0,Math.min(1,(r-1)/3.6)),s=Math.min(2,Math.floor(o*3)),c=o*3-s,l=o>=1?1:(s+Hp(Math.min(1,c/.55)))/3;i.position.y=-2.6*(1-l),r<4.6&&a.climb?.(o*6,l),r>=1&&r<4.6&&s+1>e.beat&&(e.beat=s+1,this.fxBurst(t.x,t.z,`#3a2418`,14,.2,5),this.fxBurst(t.x,t.z,`#ff6a1a`,6,.2,4),this.fxRing(t.x,t.z,2.2,`#ff6a1a`,!1),this.shake=Math.max(this.shake,.35)),r>=4.6&&e.beat<4&&(e.beat=4,a.stand?.()),r>=5&&e.beat<5&&(e.beat=5,this.fxRing(t.x,t.z,7,Vp),this.fxRing(t.x,t.z,4,`#ffd23a`,!1),this.fxBurst(t.x,t.z,`#ff8a20`,20,1.8,6),this.shake=Math.max(this.shake,.8));let u=r>=5&&r<6?Math.sin((r-5)/1*Math.PI):0;a.body.scale.multiplyScalar(1+u*.12),r<5.6&&Math.random()<n*14&&this.fxMotes(t.x+(Math.random()-.5)*2,t.z+(Math.random()-.5)*2,Math.random()<.5?`#ff6a1a`:`#ffd23a`,1,1.8,0);let d=e.hole;if(d){let e=r<1?Hp(r):r<5.6?1+Math.sin(r*6)*.03:Math.max(0,1-(r-5.6)/1.4);d.scale.setScalar(Math.max(.01,e))}r>=Lp&&(e.rise=-1,this.dropHole(e),a.stand?.(),i.position.y=0)}syncPortals(e=[],t){let n=new Set;for(let r of e){n.add(r.id);let e=this.portals.get(r.id);e||(e=nm(),e.g.position.set(r.x,0,r.z),this.scene.add(e.g),this.portals.set(r.id,e)),e.k=r.s===2?Math.max(0,e.k-t/.8):Math.min(1,e.k+t/1.2);let i=Hp(e.k),a=1+Math.sin(this.time*9+r.id)*.06;e.rift.scale.set(Math.max(.01,i*.8*a),Math.max(.01,i*1.2),1),e.swirl.rotation.z+=t*(4+6*i),e.g.children[0].scale.setScalar(Math.max(.01,i)),r.s===1&&Math.random()<t*25&&this.fxBurst(r.x,r.z,Math.random()<.5?Vp:`#b02aff`,1,1,2)}for(let[e,t]of this.portals)n.has(e)||(this.scene.remove(t.g),rm(t.g),this.portals.delete(e))}fxMark(e,t,n,r){let i=new Ba({color:`#ff2a1a`,transparent:!0,opacity:.9,side:2,depthWrite:!1}),a=new Ba({color:Vp,transparent:!0,opacity:.35,depthWrite:!1}),o=new L(new $s(n*.9,n,20).rotateX(-Math.PI/2),i),s=new L(new jo(n,20).rotateX(-Math.PI/2),a);o.position.y=.05,s.position.y=.045;let c=new ai;c.add(o,s),c.position.set(e,0,t),this.addFx(c,r,e=>{s.scale.setScalar(Math.max(.01,e)),i.opacity=.6+.4*Math.sin(e*e*40)})}setMood(e){let t=e?`#140304`:`#07050a`;this.scene.background.set(t),this.scene.fog.color.set(t);for(let t of this.torches)t.light.color.set(e?`#ff2a10`:`#ff7a2a`)}setLure(e,t){if(e.lure?.color===t||(e.lure&&=(e.model.root.remove(e.lure.ring),rm(e.lure.ring),this.scene.remove(e.lure.tether),rm(e.lure.tether),null),!t))return;let n=m[e.kind].r/e.model.root.scale.x,r=new L(new $s(n+.08,n+.2,10).rotateX(-Math.PI/2),new Ba({color:t,transparent:!0,opacity:.85,depthWrite:!1}));r.position.y=.05,r.userData.keep=!0,e.model.root.add(r);let i=new Co(new la().setAttribute(`position`,new Zi(new Float32Array(6),3)),new gc({color:t,dashSize:.3,gapSize:.2,transparent:!0,depthWrite:!1}));i.frustumCulled=!1,this.scene.add(i),e.lure={color:t,ring:r,tether:i}}syncDinner(e){for(let[t,n]of this.dinner)e.get(t)!==n.material.userData.color&&(this.scene.remove(n),rm(n),this.dinner.delete(t));let t=this.time*1.5%1;for(let[n,r]of e){let e=this.players.get(n);if(!e)continue;let i=this.dinner.get(n);if(!i){let e=new Ba({color:r,transparent:!0,side:2,depthWrite:!1});e.userData.color=r,i=new L(new $s(.5,.62,12).rotateX(-Math.PI/2),e),this.scene.add(i),this.dinner.set(n,i)}i.position.set(e.lastX,.06,e.lastZ),i.scale.setScalar(1.8-t),i.material.opacity=.3+t*.6}}syncBookmark(e){if(!e){this.bookmark&&(this.bookmark.visible=!1);return}if(!this.bookmark){let e=ne.Mysticism,t=new Ba({color:e,transparent:!0,opacity:.7,side:2,depthWrite:!1}),n=new ai;n.add(new L(new $s(.5,.58,16).rotateX(-Math.PI/2),t));let r=new ai;for(let e=0;e<4;e++){let n=new L(new $s(.3,.42,3,1,e*Math.PI/2,.7).rotateX(-Math.PI/2),t);r.add(n)}r.add(new L(new jo(.08,4).rotateX(-Math.PI/2),t)),n.add(r),n.userData.spin=r,n.userData.mat=t,this.scene.add(n),this.bookmark=n}let t=this.bookmark;t.visible=!0,t.position.set(e[0],.05,e[1]),t.userData.spin.rotation.y=this.time*.8,t.userData.mat.opacity=.5+Math.sin(this.time*3)*.2}setRider(e,t){e.rider=t,e.aura&&=(e.model.root.remove(e.aura),rm(e.aura),null);let n=this.players.get(t),r=n?p[n.char].color:`#b8e0ff`,i=z(r,{emissive:r,emissiveIntensity:3});if(e.model.root.traverse(e=>{let n=e;n.userData.eye&&(t?(n.userData.eyeMat??=n.userData.mat??n.material,n.material=i,n.userData.keep=!0):n.userData.eyeMat&&(n.material=n.userData.eyeMat,delete n.userData.mat,n.userData.keep=!1))}),!t)return;let a=m[e.kind].r/e.model.root.scale.x;e.aura=new L(new $s(a+.1,a+.22,10).rotateX(-Math.PI/2),new Ba({color:r,transparent:!0,opacity:.7,depthWrite:!1})),e.aura.position.y=.04,e.aura.userData.keep=!0,e.model.root.add(e.aura)}syncLoot(e,t){let n=new Set,r=[];this.swapRing||(this.swapRing=new L(new $s(.28,.4,16).rotateX(-Math.PI/2),new Ba({color:`#ffd23a`,transparent:!0,opacity:.85,depthWrite:!1})),this.swapRing.position.y=.03,this.scene.add(this.swapRing));let i=t?e.find(e=>e.id===t.id):void 0;if(this.swapRing.visible=!!i,i){let e=1+Math.sin(this.time*6)*.15;this.swapRing.position.set(i.x,.03,i.z),this.swapRing.scale.set(e,1,e),this.swapRing.material.color.set(t.swap<0?`#ff4a3a`:`#ffd23a`)}for(let a of e){n.add(a.id);let e=this.loot.get(a.id);e||(e=a.g?hp():a.i?mp(a.i):pp(!!a.w,!!a.c),this.scene.add(e),this.loot.set(a.id,e)),e.position.set(a.x,.3+Math.sin(this.time*3+a.id)*.08,a.z);let o=this.spills.get(a.id);if(o){let t=Math.min(1,(this.time-o.t)/Tp);e.position.set(o.x+(a.x-o.x)*t,.3+Math.sin(t*Math.PI)*1.1+(1-t)*.6,o.z+(a.z-o.z)*t),t>=1&&this.spills.delete(a.id)}e.rotation.y=this.time*2+a.id;let s=this.lootTags.get(a.id);s||(s=document.createElement(`div`),s.className=`plate tag`,this.plates.prepend(s),this.lootTags.set(a.id,s));let[c,l]=im(a),u=a.id===i?.id?t.swap<0?`${c} (full stack)`:`⇄ ${c}`:c;s.textContent!==u&&(s.textContent=u,s.style.color=l);let d=a.id===i?.id;s.classList.contains(`swap`)!==d&&s.classList.toggle(`swap`,d);let f=u+(d?`|s`:``),p=this.tagSize.get(s);(!p||p.key!==f)&&(p={w:s.offsetWidth,h:s.offsetHeight,key:f},this.tagSize.set(s,p));let m=this.toScreen(a.x,.75,a.z);r.push({tag:s,x:m.x,y:m.y,w:p.w,h:p.h})}r.sort((e,t)=>t.y-e.y);for(let e=0;e<r.length;e++){let t=r[e];for(let n=!0;n;){n=!1;for(let i=0;i<e;i++){let e=r[i];Math.abs(t.x-e.x)<(t.w+e.w)/2&&t.y>e.y-e.h&&t.y-t.h<e.y&&(t.y=e.y-e.h-1,n=!0)}}t.tag.style.transform=`translate(${t.x}px, ${t.y}px) translate(-50%, -100%)`}for(let[e,t]of this.loot)n.has(e)||(this.scene.remove(t),this.loot.delete(e),this.spills.delete(e));for(let[e,t]of this.lootTags)n.has(e)||(t.remove(),this.lootTags.delete(e))}syncBombs(e){let t=new Set;for(let n of e){t.add(n.id);let e=this.bombs.get(n.id);e||(e=gp(),this.scene.add(e),this.bombs.set(n.id,e));let r=n.a?Math.sin(n.t/.55*Math.PI)*.8:0;e.position.set(n.x,r,n.z),e.scale.setScalar(1+(n.t>.7?Math.sin(n.t*40)*.15:0))}for(let[e,n]of this.bombs)t.has(e)||(this.scene.remove(n),this.bombs.delete(e))}syncBolts(e){let t=new Set;for(let n of e){t.add(n.id);let e=this.bolts.get(n.id);if(!e){let t=Qp(n.s);e=new ai,n.s===`boulder`?e.add(new L(new Fo(.42,0),z(`#6a5a4a`))):(e.add(new L(new Zs(.13,0),new Ba({color:`#ffffff`}))),e.add(new L(new Zs(.26,0),new Ba({color:t,transparent:!0,opacity:.55,depthWrite:!1})))),this.scene.add(e),this.bolts.set(n.id,e)}n.s===`boulder`?(e.position.set(n.x,.42,n.z),e.rotation.set(this.time*9,0,this.time*9)):(e.position.set(n.x,.6,n.z),e.rotation.set(this.time*7,this.time*11,0),e.children[1].scale.setScalar(1+Math.sin(this.time*30+n.id)*.2),Math.random()<.5&&this.fxBurst(n.x,n.z,Qp(n.s),1,.6,1))}for(let[e,n]of this.bolts)t.has(e)||(this.scene.remove(n),this.bolts.delete(e),rm(n))}playerSwing(e){let t=this.players.get(e);t&&t.state===`alive`&&(t.atkT=0)}enemyAttack(e,t){let n=this.enemies.get(e);if(!n)return null;n.atkT=0,n.atkA=t;let r=n.model.root.scale.x,i=Math.cos(t),a=Math.sin(t),o=(e,t=0)=>[n.lastX+(i*e-a*t)*r,n.lastZ+(a*e+i*t)*r];switch(n.kind){case`rat`:this.fxChomp(...o(.6),.3*r,t,.7);break;case`skull`:this.fxChomp(...o(.55),.7,t,.9),this.fxBurst(...o(.3),`#7dff5a`,3,.85,1.5);break;case`imp`:this.fxClaw(...o(.5),.45,t,`#ffe03a`);break;case`warlock`:this.fxBurst(...o(.7,.3),`#ff8a3a`,7,1.25,2.5);break;case`ham`:this.later(.17,()=>this.fxChomp(...o(1.15),.8,t,1.7));break;case`mephit`:this.fxClaw(...o(.45),.7,t,`#ffb030`);break;case`demon`:{let[e,n]=o(1.3);this.later(.3,()=>{this.fxRing(e,n,1.6,Vp),this.fxBurst(e,n,`#3a2418`,10,.15,4),this.fxClaw(e,n,.9,t,`#ffb030`)});break}case`goblin`:{let[e,n]=o(.02,.27),[i,a]=o(.75,.27);this.later(.07,()=>this.fxArc(e,n,.6*r,t,.8*r,`#e8e0d0`)),this.later(.17,()=>{this.fxRing(i,a,.7,`#8a7a5a`,!1),this.fxBurst(i,a,`#6a5a48`,6,.1,2.5),this.fxBurst(i,a,`#ffe0a0`,3,.15,3)});break}}return n.kind}later(e,t){this.addFx(new ii,e,e=>{e>=1&&t()})}fxChomp(e,t,n,r,i){let a=new Ba({color:`#f4efe0`,transparent:!0,depthWrite:!1}),o=new ai,s=new ai,c=new ai;for(let e of[-.1,0,.1]){let t=new L(new No(.045,.13,4),a);t.position.set(0,-.065,e),t.rotation.x=Math.PI;let n=new L(new No(.045,.13,4),a);n.position.set(0,.065,e+.05),s.add(t),c.add(n)}o.add(s,c),o.position.set(e,n,t),o.rotation.y=-r,o.scale.setScalar(i),this.addFx(o,.3,e=>{let t=e<.4?.22*(1-(e/.4)**2):0;s.position.y=t,c.position.y=-t,o.scale.setScalar(i*(e<.4?1:1+(e-.4)*.4)),a.opacity=e<.4?1:1-(e-.4)/.6})}fxClaw(e,t,n,r,i){let a=new Ba({color:i,transparent:!0,depthWrite:!1}),o=new ai;for(let e of[-.1,0,.1]){let t=new L(new Ao(.02,.4,.03),a);t.position.z=e,t.rotation.x=.6,o.add(t)}o.position.set(e,n,t),o.rotation.y=-r,this.addFx(o,.25,e=>{for(let t of o.children)t.scale.y=Math.min(1,e/.3);a.opacity=e<.3?1:1-(e-.3)/.7})}fxArc(e,t,n,r,i,a){let o=new $s(i*.6,i*1.1,10,1,-.6,3),s=new Ba({color:a,transparent:!0,opacity:.7,side:2,depthWrite:!1}),c=new L(o,s);c.position.set(e,n,t),c.rotation.y=-r,this.addFx(c,.22,e=>{s.opacity=.7*(1-e)})}addFx(e,t,n){this.scene.add(e),this.fx.push({obj:e,t:0,life:t,update:n})}fxSwing(e,t,n,r,i){let a=new $s(.25,i,8,1,-1.05,2.1).rotateX(-Math.PI/2),o=new Ba({color:r,transparent:!0,opacity:.6,side:2,depthWrite:!1}),s=new L(a,o);s.position.set(e,.45,t),s.rotation.y=-n,this.addFx(s,.14,e=>{o.opacity=.6*(1-e)})}fxReach(e,t,n,r,i,a){let o=(r,i,a)=>{let o=new Ba({color:i,transparent:!0,opacity:a,side:2,depthWrite:!1}),s=new L(new $s(r,1,16,1,-1.05,2.1).rotateX(-Math.PI/2),o);return s.position.set(e,.45,t),s.rotation.y=-n,{m:s,mat:o}};if(r===`goblin`){let n=o(.72,i,.55),r=o(.94,`#ffb020`,.95),s=new ai;s.add(n.m,r.m),s.scale.setScalar(a),s.position.set(e,0,t),n.m.position.set(0,.5,0),r.m.position.set(0,.5,0);let c=.25*Wp.goblin,l=.5*Wp.goblin,u=.42;for(let e of[n,r])e.m.geometry.setDrawRange(0,0);this.addFx(s,u,e=>{let t=e*u,i=Math.max(0,Math.min(1,(t-c)/(l-c))),a=Math.ceil(i*i*16)*6;for(let e of[n,r])e.m.geometry.setDrawRange(0,a);let o=t<l?1:1-(t-l)/(u-l);n.mat.opacity=.55*o,r.mat.opacity=.95*o})}else if(r===`kangaroo`){let{m:e,mat:t}=o(.84,i,.7),n=.3*Wp.kangaroo,r=.32;this.addFx(e,r,i=>{let o=i*r,s=Math.min(1,o/n);e.scale.setScalar(a*(.3+.7*(1-(1-s)**3))),t.opacity=o<n?.7:.7*(1-(o-n)/(r-n))})}else{let{m:r,mat:s}=o(.9,i,.8),c=new Ba({color:`#e8ecf4`,transparent:!0,opacity:.9,depthWrite:!1}),l=new L(new Ao(1,.02,.05).translate(.5,0,0),c),u=new ai;u.add(r,l),r.position.set(0,.45,0),r.rotation.y=0,l.position.set(.2,.45,0),u.position.set(e,0,t),u.rotation.y=-n;let d=.35*Wp.rat,f=.2;this.addFx(u,f,e=>{let t=e*f,n=Math.min(1,t/d);l.scale.x=(a-.2)*n,r.scale.setScalar(a*(.7+.3*n));let i=t<d?1:1-(t-d)/(f-d);s.opacity=.8*i,c.opacity=.9*i})}}fxBurst(e,t,n,r=6,i=.5,a=3){for(let o=0;o<r;o++){let r=new L(Kp,Yp(n));r.position.set(e,i,t);let o=new I((Math.random()-.5)*a,Math.random()*a,(Math.random()-.5)*a);this.addFx(r,.45,(e,t)=>{o.y-=12*t,r.position.addScaledVector(o,t),r.position.y<.03&&(r.position.y=.03,o.set(0,0,0))})}}fxSpill(e,t,n){e.forEach((e,r)=>this.spills.set(e,{x:t,z:n,t:this.time-r*.04})),this.fxBurst(t,n,`#ffd23a`,10,.8,4)}fxHit(e,t,n){this.fxBurst(e,t,n?`#ff2a2a`:`#9a1010`,5)}fxDeath(e,t,n){if(this.fxBurst(e,t,n===`skull`?`#e9e2cf`:`#7a1010`,10,.5,4),this.map&&x(this.map,e,t))return;let r=new L(new jo(.25+m[n].r,6).rotateX(-Math.PI/2),new Ba({color:`#3a0606`,transparent:!0,opacity:.8,depthWrite:!1}));r.position.set(e,.015,t),this.addFx(r,12,e=>{r.material.opacity=.8*(1-e*e)})}fxBoom(e,t,n,r=`#ff8a20`){let i=new Ba({color:r,transparent:!0,opacity:.9,depthWrite:!1}),a=new L(new Xs(1,1),i);a.position.set(e,.4,t);let o=this.boomLights.reduce((e,t)=>t.light.intensity<e.light.intensity?t:e);o.light.color.set(r),o.light.distance=n*4,o.light.position.set(e,1,t),Object.assign(o,{t:0,life:.4,peak:25}),o.light.intensity=25,this.addFx(a,.4,e=>{a.scale.setScalar(.2+e*n),i.opacity=.9*(1-e)}),this.fxBurst(e,t,`#222`,12,.4,6),this.shake=Math.max(this.shake,.35)}fxRing(e,t,n,r,i=!0){let a=new Ba({color:r,transparent:!0,opacity:.8,side:2,depthWrite:!1}),o=new L(new $s(.85,1,16).rotateX(-Math.PI/2),a);o.position.set(e,.1,t),this.addFx(o,.35,e=>{o.scale.setScalar(.2+e*n),a.opacity=.8*(1-e)}),i&&(this.shake=Math.max(this.shake,.25))}fxCast(e,t,n){this.fxRing(e,t,1.3,n,!1)}fxZap(e,t){let n=[];for(let r=0;r+3<e.length;r+=2){let[i,a,o,s]=e.slice(r,r+4),c=Math.max(2,Math.ceil(Math.hypot(o-i,s-a)/.4));for(let e=0;e<=c;e++){let t=e/c,r=e===0||e===c?0:.35;n.push(i+(o-i)*t+(Math.random()-.5)*r,.6+(Math.random()-.5)*r,a+(s-a)*t+(Math.random()-.5)*r)}this.fxBurst(o,s,t,4,.6,3)}let r=new ho({color:t,transparent:!0}),i=new Co(new la().setAttribute(`position`,new Zi(n,3)),r);this.addFx(i,.25,e=>{r.opacity=Math.random()<.3?.2:1-e})}fxTeleport(e,t,n){let r=new Ba({color:n,transparent:!0,opacity:.7,side:2,depthWrite:!1}),i=new L(new Mo(.45,.45,3,8,1,!0),r);i.position.set(e,1.5,t),this.addFx(i,.5,e=>{i.scale.set(1-e,1+e,1-e),r.opacity=.7*(1-e)}),this.fxBurst(e,t,n,8,.8,3)}fxMotes(e,t,n,r,i,a){for(let o=0;o<r;o++){let r=new Ba({color:n,transparent:!0,opacity:.9,depthWrite:!1}),o=new L(qp,r);o.position.set(e+(Math.random()-.5)*.6,.3+Math.random()*.5,t+(Math.random()-.5)*.6),this.addFx(o,.7+Math.random()*.3,(e,t)=>{o.position.y+=i*t,o.scale.setScalar(1+e*a),r.opacity=.9*(1-e)})}}fxHeal(e,t){this.fxMotes(e,t,`#5aff7a`,8,1.6,0)}fxFizzle(e,t){this.fxMotes(e,t,`#8a8a8a`,7,.6,3)}fxFloat(e,t,n,r){let i=xp(n,r,.35);i.position.set(e,1.4,t),this.addFx(i,1,e=>{i.position.y=1.4+e*.8,i.material.opacity=1-e})}syncDownArrows(e){let t=new Set,n=window.innerWidth,r=window.innerHeight,i=n/2,a=r/2;for(let n of e){t.add(n.id);let e=this.downArrows.get(n.id);e||(e=document.createElement(`div`),e.className=`downarrow`,e.innerHTML=`<i></i><span></span>`,this.plates.appendChild(e),this.downArrows.set(n.id,e));let r=this.toScreen(n.x,.8,n.z),o=r.x-i,s=r.y-a,c=Math.min((i-44)/Math.max(Math.abs(o),.001),(a-44)/Math.max(Math.abs(s),.001));e.style.transform=`translate(${i+o*c}px, ${a+s*c}px) translate(-50%, -50%)`,e.style.setProperty(`--c`,n.color),e.firstChild.style.transform=`rotate(${Math.atan2(s,o)}rad)`;let l=`${Math.ceil(n.dn)}s`,u=e.lastChild;u.textContent!==l&&(u.textContent=l),e.classList.toggle(`urgent`,n.dn<10)}for(let[e,n]of this.downArrows)t.has(e)||(n.remove(),this.downArrows.delete(e))}toScreen(e,t,n){let r=new I(e,t,n).project(this.camera);return{x:(r.x*.5+.5)*window.innerWidth,y:(-r.y*.5+.5)*window.innerHeight}}screenToGround(e,t){let n=new F(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);this.raycaster.setFromCamera(n,this.camera);let r=new I;return this.raycaster.ray.intersectPlane(this.ground,r)}updateCamera(e,t){this.time+=e,this.cine&&(this.cine.t-=e)<=0&&(this.cine=null);let n=t&&this.cine?{x:(t.x+this.cine.x)/2,z:(t.z+this.cine.z)/2}:t;n&&this.camTarget.lerp(new I(n.x,0,n.z),1-(this.cine?.05:5e-4)**e);let r=this.camTarget;this.shake*=.02**e;let i=(Math.random()-.5)*this.shake,a=(Math.random()-.5)*this.shake;this.camera.position.set(r.x+i,7.2,r.z+4.6+a),this.camera.lookAt(r.x+i,0,r.z+a),this.camera.updateMatrixWorld(),t&&this.lantern.position.set(t.x,1.6,t.z)}darkTorches(e=[]){this.torches.forEach((t,n)=>{let r=e.includes(n);r!==!!t.out&&(t.out=r,t.light.visible=t.flame.visible=!r)})}render(e){for(let e of this.torches){let t=Math.sin(this.time*9+e.base)*.5+Math.sin(this.time*23+e.base*2)*.3;e.light.intensity=6+t*1.5,e.flame.scale.setScalar(1+t*.2)}this.lantern.intensity=14+Math.sin(this.time*7)*.6,this.exitMarker&&this.exitMarker.children[1].scale.setScalar(1+Math.sin(this.time*4)*.08);for(let t of this.boomLights)t.light.intensity<=0||(t.t+=e,t.light.intensity=Math.max(0,t.peak*(1-t.t/t.life)));for(let t=this.fx.length-1;t>=0;t--){let n=this.fx[t];n.t+=e;let r=Math.min(1,n.t/n.life);n.update(r,e),r>=1&&(this.scene.remove(n.obj),this.fx.splice(t,1),rm(n.obj))}this.renderer.render(this.scene,this.camera)}};function tm(){let e=new ai,t=()=>new Ba({color:Vp,transparent:!0,opacity:.7,depthWrite:!1,side:2}),n=(n,r)=>{let i=new L(new $s(n,r,32).rotateX(-Math.PI/2),t());i.position.y=.02,e.add(i)};n(1.75,1.9),n(1.35,1.42);let r=[];for(let e=0;e<=5;e++){let t=e*2*(Math.PI*2)/5-Math.PI/2;r.push(Math.cos(t)*1.35,.025,Math.sin(t)*1.35)}e.add(new Co(new la().setAttribute(`position`,new Zi(r,3)),new ho({color:`#ff5aff`,transparent:!0})));for(let n=0;n<10;n++){let r=n/10*Math.PI*2,i=new L(new Qs(.12,.3).rotateX(-Math.PI/2),t());i.position.set(Math.cos(r)*1.6,.02,Math.sin(r)*1.6),i.rotation.y=-r,e.add(i)}return e}function nm(){let e=new ai,t=(e,t=1)=>new Ba({color:e,transparent:!0,opacity:t,side:2,depthWrite:!1}),n=new ai,r=new L(new jo(.85,10).rotateX(-Math.PI/2),t(`#1a0208`,.8)),i=new L(new $s(.7,.85,12).rotateX(-Math.PI/2),t(`#ff2a4a`,.9));r.position.y=.02,i.position.y=.025,n.add(r,i);let a=new ai;a.position.y=1.05;let o=new L(new jo(.62,12),t(Vp)),s=new L(new jo(.5,12),t(`#0a0006`));s.position.z=.01;let c=new ai;c.position.z=.02;for(let e=0;e<3;e++){let n=new L(new $s(.15+e*.11,.2+e*.11,10,1,e*2,2.4),t(e%2?`#ff2a4a`:`#b02aff`,.85));c.add(n)}return a.add(o,s,c),e.add(n,a),{g:e,rift:a,swirl:c,k:0}}function rm(e){e.traverse(e=>{let t=e;t.geometry&&!Xp.has(t.geometry)&&t.geometry.dispose();let n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let e of n)Xp.has(e)||(e.map?.dispose(),e.dispose())})}function im(e){if(e.g)return[`Mystery Gift`,`#ff6a8a`];if(e.i){let t=me(e.i);return[he(t),ge(t)]}return e.w?[e.w,e.c?`#5aff6a`:`#d08aff`]:[`${e.v} Gold`,`#ffd23a`]}function V(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function am(e,t){e.traverse(e=>{let n=e;n.isMesh&&!n.userData.keep&&(t?(n.userData.mat??=n.material,n.material=t):n.userData.mat&&(n.material=n.userData.mat))})}var om={fireball:[[`Big area damage`,`Lights oil into a grease fire, even flying over it`],[`Hits your crew too`,`Fizzled Destruction can blow up in your hands`]],zap:[[`Chains to up to three targets`,`Electrifies any pool it touches: everyone in it is stunned`],[`Jumps to crewmates happily`,`Standing in the water you zap? You get it too`]],leech:[[`Heals you for what it deals`,`Cheap`],[`Point blank only`]],paralyze:[[`Freezes a monster for 2.5s, a crewmate for 1.5s`],[`Single target`,`Expensive`]],frenzy:[[`Monsters in the splash fight each other for 7s`],[`Frenzied monsters still bite you if you are closest`]],chameleon:[[`Monsters forget you exist for 7s`,`No name tag over your head`],[`Breaks the moment you attack, cast or drink`]],lick:[[`Heals 35, no target needed`],[`Uses the mana you wanted for killing things`]],bookmark:[[`Set a mark, then Recall to yank yourself back: perfect escape hatch`,`Recall brings the safe or idol you are carrying along with you`],[`The mark is used up when you recall`]],tk:[[`Pulls every loot in a cone to you from 7 tiles`,`Picks a crewmate's pocket from range`,`Drags chasm loot across the drop`],[`Can't pull through walls or vault bars`]],souljar:[[`Anything that dies while jarred drops its soul as weird loot`],[`Does no damage by itself`]],grease:[[`Slows anything wading through it`,`Combo: anyone else lighting it gives both of you XP`],[`Your own grease fire burns you too`]],soak:[[`Puts out fires and soaks everyone in the splash`,`Sets up a SHOCK combo with Arc Zap`],[`Soaked bastards take extra lightning damage, including you`]],imp:[[`An unpaid intern fights for you for 18s`],[`When it runs out of monsters it turns on your crew`,`One intern per bastard`]],flight:[[`Leap ten tiles over anything, including chasms`],[`The landing hurts you for 40% of your max HP`,`Come up short over a chasm and you are dead`]],yeet:[[`Instant escape to a random room`],[`Random room. Could be worse than where you were`]]},sm={heal:[[`+40 HP right now`,`Downed with one in your bag? Swig it to scramble up on 15 HP, owing nobody. Crawling over one on the floor works too`],[`Crewmates can steal it`]],mana:[[`+50 mana`],[`Wasted on a bastard with no spells worth casting`]],sugar:[[`Nothing can hurt you for the first 3s`,`Faster, stronger, +50 max HP, full mana and no fizzles for 10s`,`The goblin's fix`],[`Then you crash: the extra HP goes, plus slow feet, slow swings and no magic for 8s`,`Gift it to anyone but the goblin and it counts as a dirty trick`]],hooch:[[`+20 HP and hit 25% harder for 15s`,`The kangaroo's fix`],[`That is it`]],rotgut:[[`Poison: 30 damage and a stun`,`Gift-wrapped, nobody can tell`],[`Drink it yourself and you deserve it`]]},cm={rat:[[`Fastest bastard`,`Skitter through a crewmate to pick their pocket`,`Only one who fits through vents`,`Starts with Telekinesis`],[`Lowest HP`,`Needs to steal to stay calm`]],kangaroo:[[`Most HP, hits hardest`,`Stomp launches everything and kicks boulders loose`],[`Slowest`,`Stomp launches your crew too`,`Least mana`]],goblin:[[`Bombs from range`,`Only one whose bombs crack vaults`,`Most mana, starts with Fireball`],[`Bombs hurt you and your crew`,`Gutter Sugar habit`]]},lm={rat:`Shows up in swarms, sits still, then bolts. Weak alone.`,skull:`Floats over chasms and bobs about. Bites hard for its size.`,goblin:`Patrols, hits like a truck with a spiked club. Shows up in the hordes once the dungeon wakes.`,warlock:`Keeps its distance and throws fire, blinks away when you get close. Often drops a tome.`,imp:`Summoned by Summon Imp Intern. Works for whoever summoned it, until it gets bored.`,ham:`The boss. Sits on the pressure plates, stomps, squeals rats out of the walls. 150 gold to whoever lands the last hit.`,demon:`Belchazzar, Landlord of the Pit. Waits under the arena every 4th floor, and the lift won't come until he's dead. Stops to tear portals open full of mephits (he can't fight back while he chants, and takes half again as much damage) and throws fans of hellfire. Half dead, he transforms (nothing hurts him while he does), then rains brimstone and pounces on whoever hangs back. 300 gold to whoever lands the last hit.`,mephit:`Belchazzar's tenants. Little fire imps that pour out of his portals, fast and flimsy. They pop in a puff of fire when they die, so don't finish one off in your face.`},um={"Fuck Face":`Kill 2 crewmates`,"Body-Snatchin'":`Steal a body as a ghost`,Saintly:`Revive 2 crewmates without hurting anyone`,"Snitchin'":`Use a rat line`,"Two-Faced":`Pass 2 fake gifts`,"Meat-Suited":`Ride 3 monsters`,"Sugar-Brained":`Snort Gutter Sugar twice`,"Sticky-Fingered":`Steal 3 times`,"Backstabbin'":`Hit crewmates 3 times`,Butcher:`Kill 20 monsters`,Fizzling:`Fizzle 5 spells`,"Twice-Dead":`Die twice`,Stabby:`Kill 8 monsters`},dm=(e,t)=>t?.length?`<ul class="${e}">${t.map(e=>`<li>${V(e)}</li>`).join(``)}</ul>`:``;function fm(e){return`<article class="entry" style="--c:${e.color??`var(--ink)`}"><h4>${V(e.title)}${e.tag?` <small>${V(e.tag)}</small>`:``}</h4>
    <p>${e.body}</p>${dm(`pros`,e.pros)}${dm(`cons`,e.cons)}</article>`}function pm(){let e=Object.keys(k).map(e=>{let t=k[e],[n,r]=om[e]??[[],[]],i=t.scrollOnly?`Scroll only, never fizzles.`:`${t.cost} mana · ${Math.round(t.fail*100)}% fizzle at level 1 (4% less each level) · tome ${Ge({t:`tome`,id:e,n:1})}g`;return{title:t.name,color:ne[t.school],tag:`${t.school} · ${re[t.kind]}`,body:`${V(t.desc)}<br><span class="dim">${i}</span>`,pros:n,cons:r}}),t=Object.keys(ie).map(e=>{let t=ie[e],[n,r]=sm[e];return{title:t.name,color:t.color,tag:`${Ge({t:`potion`,id:e,n:1})}g at the Pit Stop`,body:V(t.desc),pros:n,cons:r}}),n=Object.keys(p).map(e=>{let t=p[e],[n,r]=cm[e];return{title:t.name,color:t.color,tag:t.role,body:`${V(t.blurb)}<br>HP ${t.hp} · speed ${t.speed} · damage ${t.dmg} · mana ${oe[e].mp}<br>
        <b>${t.ability}:</b> ${V(t.abilityDesc)}<br><b>Dirty trick, ${xe[e].name}:</b> ${V(xe[e].desc)}<br>
        <b>Vice, ${be[e].name}:</b> ${V(be[e].fix)} or start jonesing.`,pros:n,cons:r}}),r=Object.keys(m).map(e=>{let t=m[e],n=h[e];return{title:t.name.replace(/^an? /,``).replace(/^./,e=>e.toUpperCase()),tag:`${t.hp} HP · ${t.dmg} damage · ${t.xp} XP`,body:`${lm[e]}<br><span class="dim">${n?`Meat suit: ${n.ability}. ${n.desc} Rots in ${n.rot}s.`:`Can't be worn.`}</span>`}}),i=[{title:`The lift`,color:`#ff3a3a`,body:`The way out, behind the vault door. It has one seat fewer than your crew. Stand on it and it leaves in a few seconds with whoever fits. Once it's full, a guarded back door opens somewhere far away 20 seconds later.`,pros:[`+25% per extra crewmate riding with you`],cons:[`Only loot you carry out counts`]},{title:`Vault door and pressure plates`,body:V(Te.door)+` A ghost riding a monster counts. After a few minutes the dungeon wakes up and the door rusts open anyway.`},{title:`Vaults`,body:V(Te.vault)+` Telekinesis can drag the loot up to the bars, not through them.`},{title:`Boulders`,body:V(Te.boulder)+` A stomp kicks them loose and they roll, flattening whatever is in the way.`},{title:`Vents`,body:V(Te.vent)+` Some side rooms have no door at all. What comes out is up to the rat.`},{title:`Chasms`,body:V(Te.chasm),cons:[`Fall in and you are a ghost on the spot`,`Knock a crewmate in and it's murder`]},{title:`Dinner bell`,color:`#ffd23a`,body:`Hit it or use it: every monster nearby goes for whoever is standing closest to it. That is not you.`,pros:[`Sends the horde at a crewmate`],cons:[`Fills your Bastard meter and loses you the honor bonus`,`Pays nothing`]},{title:`Rat line`,color:`#9ad0ff`,body:`Use it to sell out your crew: 15 gold per crewmate spills out of the box at your feet, every monster nearby is sent after them, and the monsters ignore you for 10 seconds.`,pros:[`Gold and a free pass`],cons:[`Everybody knows`,`Crewmates can grab the coins before you do (and that counts as robbing you)`]},{title:`Lockers`,body:`Stash up to 2 things (gold, cursed loot, potions, scrolls). If anybody gets out, it comes down to the next floor with you, even if you died. Stashed gold is yours to spend at the Pit Stop. One per room. Anybody can break in: 10g to the locksmith, loud, spiky. Rig yours for 50g.`},{title:`Heavy loot`,body:`Safes and cursed idols. Alone you crawl, with two you jog. Get it onto the lift and the carriers split the money. Drop your end mid-chase and your partner is stuck.`},{title:`Oil, fire and water`,body:`Oil slows you and burns once lit, spreading to oil next to it. Water puts fires out and keeps you from catching, but soaked things take extra lightning damage, and zapped water stuns everyone in it.`},{title:`Cursed loot`,color:`#5aff5a`,body:`Worth double, slows you down until you bank it or somebody steals it. Pickpockets take cursed stuff first: let a crewmate carry it, rob them at the door.`},{title:`Gifts`,color:`#ff6a8a`,body:`Use with a potion picked to gift-wrap it on the floor. Nobody knows what is inside until they drink it. A real present means they owe you 15; Rotgut, or Gutter Sugar for anyone but the goblin, makes you a bastard.`},{title:`Downed, debts and revives`,body:`Go down and you have 36 seconds for somebody to hold Use on you. They get 25g of debt from you. Pay a debt in full next to your lender and you are both healed and hit harder for 20s. Kill somebody who owes you and you collect double.`},{title:`Ghosts and meat suits`,color:`#b8e0ff`,body:`Dead? You are a ghost. Hold your ability on a monster to climb inside; kill a living bastard while wearing it and you steal their body.`},{title:`Contracts and bounties`,color:`#ffd23a`,body:`Everyone gets a secret job worth 60g if you escape. The richest bastard by far gets a price on their head, paid by the house.`}],a=Object.entries(Se).map(([e,t])=>({title:e,color:`#ffb07a`,tag:um[e]??``,body:V(t)})),o=[...ke,`moves`].flatMap(e=>Be(e).map(t=>{let n=Ie[t];return{title:n.name,color:Oe[e].color,tag:`${Oe[e].name}${e===`moves`?``:` ${n.tier}`} · ${n.cost} point${n.cost>1?`s`:``}`,body:V(n.desc)}})),s=He.map(e=>({title:Ue[e].name,color:Ue[e].color,body:V(Ue[e].blurb)}));return s.push({title:`Prices`,color:`var(--gold)`,body:`Skill points start at ${Xe(0)}g and go up ${Xe(1)-Xe(0)}g each. A respec is 200g. The fence pays ${Math.round(Ke*100)}% of an item's price.`}),[{id:`spells`,name:`Spells`,intro:`Hexes get thrown at things; utility moves, hides, heals or fetches. Each has its own book (3 of each), its own cast button and its own pick. Tomes teach a spell for good; scrolls are one shot, never fizzle, and sit on top of the spell they teach if you know it, getting read first.`,entries:e},{id:`potions`,name:`Potions`,intro:`Two kinds at a time, three of each. Drink with R / d-pad down, pick with G / d-pad up.`,entries:t},{id:`bastards`,name:`Bastards`,entries:n},{id:`monsters`,name:`Monsters`,entries:r},{id:`dungeon`,name:`The Dungeon`,entries:i},{id:`titles`,name:`Titles`,intro:`Your name evolves with what you do, and every title comes with a perk. Only the first one that fits counts.`,entries:a},{id:`skills`,name:`Skills`,intro:`One point per level-up. Your level, points and skills stay with you floor to floor until the crew starts over.`,entries:o},{id:`pitstop`,name:`The Pit Stop`,intro:`Between floors, if anybody got out. Spend the gold you have banked over the run, but it is also your score: every coin you spend comes off it, every coin the fence pays goes back on. You start the next floor with whatever you had at the end of the last one, plus whatever you buy. Change class at the Skin Tailor. Everybody aboard and the lift goes; once half the crew is on, it goes in 20 seconds regardless and drags the rest along.`,entries:s}]}function mm(e){let t=e===`pad`,n=(e,n)=>`<b>${t?n:e}</b>`;return`<div class="howto">
    <h3>The job</h3>
    <p>Break in, grab weird shit, get to the <b style="color:#ff3a3a">lift</b>. Only loot you carry out counts, and the results rank whoever banked the most. The lift has one seat fewer than your crew. If anybody gets out, everybody goes to the <b>Pit Stop</b> to spend their gold, then down a floor where the monsters are meaner and the loot is fatter. Everybody dies and it's back to the top.</p>
    ${e===`touch`?`
    <h3>Controls (touch)</h3>
    <ul class="keys">
      <li><b>Left thumb</b> anywhere on the left half: move · <b>right thumb</b> anywhere on the right half: aim and attack (tap to swing)</li>
      <li><b>Spells</b> (top right): swipe the strip, the card in the gold box is picked. <b>CAST</b> casts it where you face, or drag off CAST to aim and let go to fire. Tapping the picked card casts it too.</li>
      <li><b>Potions</b> (above the left stick): swipe the strip to pick one, then <b>DRINK</b>, or tap the picked card again</li>
      <li>The ability button (named after your ability), <b>DIRTY</b> trick and <b>ROLL</b> count down their cooldowns on the button</li>
      <li><b>USE</b>: revive (hold), carry, levers, vents, bells, rat lines, lockers, merchants, pay debts, gift-wrap · <b>FULL BASTARD</b> pulses when your meter is full</li>
      <li><b>❚❚</b> pauses · the log box in the top right has the chat tab</li>
    </ul>`:`
    <h3>Controls ${t?`(controller)`:`(keyboard and mouse)`}</h3>
    <ul class="keys">
      <li>${n(`WASD`,`Left stick`)} move · ${n(`Mouse`,`Right stick`)} aim · ${n(`Left click`,`RT`)} attack · ${n(`Right click / Space`,`LT / A`)} ability</li>
      <li>${n(`Q`,`RB`)} cast the picked hex · ${n(`Tab / 1–3`,`d-pad ▶`)} pick a hex</li>
      <li>${n(`E`,`LB`)} cast the picked utility spell · ${n(`Z / 4–6`,`d-pad ◀`)} pick a utility spell</li>
      <li>${n(`R`,`d-pad ▼`)} drink the picked potion · ${n(`G`,`d-pad ▲`)} pick a potion</li>
      <li>${n(`F`,`X`)} use: revive (hold), carry, levers, vents, bells, rat lines, lockers, merchants, pay debts, gift-wrap · ${t?`<b>B</b> drops what you're hauling · `:``}${n(`C`,`L3 / R3`)} dirty trick · ${n(`X / L`,`Y`)} go full bastard · ${n(`Shift`,`B`)} dodge roll (learn Tuck and Roll first)</li>
      <li>${n(`Esc / P`,`Start`)} pause · ${n(`Enter / T`,`Back`)} chat · ${t?`<b>LB / RB</b> switch tabs here · <b>right stick</b> scrolls`:`<b>Q / E</b> switch tabs here`}</li>
    </ul>
    <p class="dim">The bag in the bottom-left is laid out like the controller: utility (LB) on the left, potions (d-pad) in the middle, hexes (RB) on the right.</p>`}
    <h3>Why you'd be a bastard</h3>
    <ul class="pros">
      <li>Only the top earner wins, so a crewmate's haul is loot you didn't get</li>
      <li>Robbing, body snatching, baiting and dirty tricks fill your Bastard meter; full, it steals from everyone nearby</li>
      <li>Ghosts steal living bodies, bounties pay for the rich one, contracts pay for betrayal, rat lines pay for snitching</li>
    </ul>
    <h3>Why you'd team up</h3>
    <ul class="pros">
      <li>The vault door needs two pressure plates held at once, and safes need two to carry</li>
      <li>Ride the lift together for +25% each, and escape without hurting anyone for +25% more</li>
      <li>Each bastard opens different side rooms: goblin bombs vaults, kangaroo kicks boulders, rat crawls vents</li>
      <li>Combos (grease fire, shock pools) pay both of you XP, and revives make them owe you</li>
    </ul>
    <h3>Tips</h3>
    <ul>
      <li>Level up for skill points; spend them in the Skills tab. They stick around floor to floor.</li>
      <li>Scrolls never fizzle. Potions of Not Dying get you off the floor when you're downed.</li>
      <li>Let a crewmate carry the cursed loot and rob them at the lift.</li>
      <li>Nobody's watching the rat line? The coins still land on the floor. Somebody might be faster than you.</li>
    </ul>
  </div>`}var H=(e,t,n)=>new Ao(e,t,n);function U(e,t,n,r,i,a){let o=new L(t,n);return o.position.set(r,i,a),e.add(o),o}var hm=z(`#4a4038`),gm=z(`#ffd23a`,{emissive:`#ffb000`,emissiveIntensity:1.5}),_m=z(`#2a3a4a`),vm=1.5,ym=1.2,bm=3;function xm(e,t,n,r){let i=xp(t,n,.3);i.position.y=r,e.add(i)}function Sm(e){let t=document.createElement(`canvas`);t.width=128,t.height=64;let n=t.getContext(`2d`);n.fillStyle=`#a8804a`,n.fillRect(0,0,128,64),n.fillStyle=`#8a6434`;for(let e of[20,43])n.fillRect(0,e,128,2);n.font=`bold 24px monospace`,n.textAlign=`center`,n.textBaseline=`middle`,n.lineWidth=3,n.strokeStyle=`#f0d8a0`,n.fillStyle=`#7a1408`,e.forEach((t,r)=>{let i=64/(e.length+1)*(r+1)+1;n.strokeText(t,64,i),n.fillText(t,64,i)});let r=new Eo(t);return r.magFilter=r.minFilter=mt,r.colorSpace=Pn,r}function Cm(e,t){let n=new ai,r=e.tiles.map(n=>[n%t.w+.5-e.x,Math.floor(n/t.w)+.5-e.z]);switch(e.k){case`door`:{let e=z(`#3e3a44`),t=z(`#8a6a3a`);for(let[i,a]of r){U(n,H(.98,1.4,.98),e,i,.7,a);for(let e of[-.3,0,.3])U(n,H(.06,1.3,1),t,i+e,.7,a)}break}case`secret`:{let t=.75+(Math.floor(e.x)*7+Math.floor(e.z)*13)%10/40,i=z(`#ffffff`,{map:yp()});i.color.setRGB(t,t*.95,t*.9);let a=z(`#15100d`);for(let[e,t]of r)U(n,H(1,vm,1),[i,i,a,a,i,i],e,vm/2,t);break}case`vault`:{let r=e.tiles[0],i=t.tiles[r-1]!==0&&t.tiles[r+1]!==0,a=new ai;a.rotation.y=i?0:Math.PI/2;let o=z(`#2e2c34`),s=z(`#6a3a22`);for(let e of[-.47,.47])U(a,H(.08,1.5,.16),o,e,.75,0);U(a,H(1,.1,.16),o,0,1.45,0),U(a,H(1,.08,.14),o,0,.05,0);let c=new ai,l=new Mo(.035,.035,1.35,6);for(let e=0;e<6;e++)U(c,l,o,-.33+e*.132,.72,0);for(let e of[.4,1.05])U(c,H(.88,.06,.06),s,0,e,0);U(c,H(.16,.18,.1),z(`#d8b040`,{emissive:`#6a4a00`}),.1,.92,.09),a.add(c);let u=new ai,d=new Mo(.035,.035,.28,6);for(let e=0;e<6;e++){let t=-.33+e*.132,n=e%2?1:-1;U(u,d,o,t,.22,.05*n).rotation.x=.6*n,U(u,d,o,t,1.26,-.05*n).rotation.x=.5*n}u.visible=!1,a.add(u),n.add(a),n.userData.bars=c,n.userData.stubs=u,xm(n,`VAULT`,`#d8d8e8`,1.8);break}case`boulder`:U(n,new Fo(.55,0),z(`#6a5a4a`),0,.55,0).rotation.set(.4,.7,.2);break;case`plate`:{let e=U(n,H(.9,.06,.9),hm,0,.03,0);n.userData.glow=e;break}case`vent`:{let e=z(`#2a2a2e`);U(n,H(.7,.03,.7),z(`#0a0a0a`),0,.015,0);for(let t of[-.24,-.08,.08,.24])U(n,H(.7,.05,.05),e,0,.03,t);break}case`lever`:{U(n,H(.3,.2,.3),z(`#4a3a2a`),0,.1,0);let e=new ai;U(e,H(.06,.6,.06),z(`#8a8a8a`),0,.3,0),U(e,H(.12,.12,.12),z(`#c02020`),0,.6,0),e.position.y=.2,e.rotation.z=.6,n.add(e),n.userData.handle=e;break}case`bell`:{let e=z(`#4a3020`);for(let t of[-.3,.3])U(n,H(.08,1.4,.08),e,t,.7,0);U(n,H(.7,.08,.08),e,0,1.4,0),U(n,new Mo(.12,.25,.35,7),z(`#d8a030`,{emissive:`#5a3a00`}),0,1.15,0),xm(n,`DINNER BELL`,`#ffd23a`,1.9);break}case`locker`:{let t=new ai,r=z(`#4a5a5e`);U(t,H(.7,1.5,.45),r,0,.75,0);for(let e of[1.25,1.15,1.05])U(t,H(.4,.04,.02),z(`#1a2022`),0,e,.235);U(t,H(.02,1.4,.02),z(`#2a3436`),0,.75,.235),U(t,H(.16,.18,.08),z(`#c8a030`,{emissive:`#4a3000`}),.12,.7,.27),n.add(t),n.userData.body=t;let i=e.x-Math.floor(e.x)-.5,a=e.z-Math.floor(e.z)-.5;t.rotation.y=Math.abs(i)>Math.abs(a)?i<0?Math.PI/2:-Math.PI/2:a>0?Math.PI:0;break}case`chasm`:{let e=z(`#5a3a20`);U(n,H(.08,1.1,.08),e,0,.55,0);let t=new ai;U(t,H(1.1,.55,.05),e,0,0,0);let r=Sm([`MIND THE`,`GAP`]),i=new L(new Qs(1.04,.5),z(`#ffffff`,{map:r,emissive:`#ffffff`,emissiveMap:r,emissiveIntensity:.5}));i.position.z=.03,t.add(i),t.position.set(0,1.05,.04),t.rotation.set(-.5,0,.08),n.add(t);break}case`shop`:{let t=Ue[He[e.link]],r=z(`#4a3020`),i=z(t.color);U(n,H(1.9,.85,.8),r,0,.425,0),U(n,H(1.96,.08,.86),i,0,.87,0);for(let e of[-1.5,1.5])U(n,H(.85,1.7,.85),r,e,.85,-1);for(let e=0;e<6;e++)U(n,H(.62,.08,1.5),e%2?i:z(`#e8dcc0`),-1.55+e*.62,1.9,-.6).rotation.x=.25;let a=t.keeper===`warlock`||t.keeper===`skull`?dp(t.keeper):up(t.keeper);if(a.root.position.set(0,0,-1),t.keeper===`rat`){U(n,new Mo(.3,.3,.07,10),r,0,.6849999999999999,-1);for(let[e,t]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])U(n,H(.06,.6499999999999999,.06),r,e,.6499999999999999/2,-1+t);U(n,H(.46,.04,.04),r,0,.25,-1),a.root.position.y=.72}if(a.root.rotation.y=-Math.PI/2,n.add(a.root),n.userData.keeper=a,{potions:[`potion:heal`,`potion:sugar`,`potion:rotgut`],books:[`tome:fireball`,`scroll:yeet`,`tome:tk`],trainer:[],fence:[],tailor:[]}[He[e.link]].forEach((e,t)=>{let r=mp(e);r.position.set(-.55+t*.55,1.02,.05),n.add(r)}),He[e.link]===`trainer`)for(let e of[-.4,.4]){U(n,H(.4,.05,.05),z(`#8a8a8a`),e,.97,0);for(let t of[-.2,.2])U(n,H(.08,.16,.16),z(`#2a2a2a`),e+t,.97,0)}if(He[e.link]===`fence`)for(let e=0;e<3;e++){let t=pp(e===1);t.position.set(-.5+e*.5,1.05,0),n.add(t)}let o=new Zc(t.color,4,4,1.5);o.position.set(0,1.6,.4),n.add(o),xm(n,t.sign,t.color,2.45);break}case`shelf`:case`desk`:case`chest`:{let t=new ai,r=new ai,i=z(`#5a3a20`),a=z(`#3a2414`);if(e.k===`shelf`){U(t,H(1.1,1.7,.4),a,0,.85,-.05);for(let e of[.45,.95,1.45])U(t,H(1.05,.05,.38),i,0,e,0);let e=[`#7a1a1a`,`#1a3a6a`,`#2a5a2a`,`#6a4a8a`,`#8a6a1a`];for(let[t,n]of[[.6,6],[1.1,4],[1.6,5]])for(let i=0;i<n;i++)U(r,H(.11,.26+i%3*.03,.28),z(e[(i*3+t*10)%e.length]),-.42+i*.15,t-.02,.02).rotation.z=i===n-1?.3:0}else if(e.k===`desk`){U(t,H(1.1,.08,.6),i,0,.75,0);for(let[e,n]of[[-.48,-.24],[.48,-.24],[-.48,.24],[.48,.24]])U(t,H(.07,.75,.07),a,e,.375,n);U(t,H(.35,.3,.5),a,.32,.55,0),U(t,new Mo(.05,.06,.1,6),z(`#1a1a2a`),.4,.84,-.15);for(let[e,t]of[[-.25,.3],[.05,-.2]])U(r,new Mo(.05,.05,.35,6),z(`#e8d8a8`),e,.84,.05).rotation.set(0,t,Math.PI/2)}else{U(t,H(.85,.45,.55),i,0,.225,0);for(let e of[-.36,0,.36])U(t,H(.05,.47,.57),z(`#8a7a5a`),e,.225,0);let e=new ai;U(e,H(.85,.14,.55),i,0,.07,.275),U(e,H(.12,.12,.05),z(`#d8b040`,{emissive:`#4a3000`}),0,0,.56),e.position.set(0,.45,-.275),t.add(e),n.userData.lid=e}t.add(r),n.add(t),n.userData.goods=r;let o=e.x-Math.floor(e.x)-.5,s=e.z-Math.floor(e.z)-.5;t.rotation.y=Math.abs(o)>Math.abs(s)?o<0?Math.PI/2:-Math.PI/2:s>0?Math.PI:0;break}case`apothecary`:{let e=z(`#5a5a62`),t=z(`#4a3020`),r=new ai;U(n,new Mo(.85,.95,.2,8),e,0,.1,0),U(n,H(1,.7,.5),t,0,.55,0);for(let e of[-.48,.48])U(n,H(.06,1.3,.06),t,e,.85,-.2);U(n,H(1.1,.06,.6),z(`#3a6a3a`),0,1.5,-.05);for(let e of[-.3,-.1,.15,.35])U(n,H(.05,.2,.05),z(`#4a7a2a`),e,1.37,.18);[`potion:heal`,`potion:mana`,`potion:sugar`].forEach((e,t)=>{let n=mp(e);n.position.set(-.3+t*.3,.92,0),r.add(n)}),n.add(r),n.userData.goods=r;let i=new Zc(`#7aff9a`,2,3,1.5);i.position.set(0,1.3,.3),n.add(i),xm(n,`APOTHECARY`,`#7aff9a`,2);break}case`snitch`:{let e=new ai;U(e,H(.5,1.1,.35),z(`#2a4a7a`),0,.55,0),n.userData.screen=U(e,H(.3,.2,.05),z(`#9ad0ff`,{emissive:`#2a6aa0`}),0,.8,.19),n.userData.handset=U(e,H(.1,.3,.1),z(`#111`),.2,.5,.2),n.add(e),n.userData.body=e,n.userData.ding=[`DING!`,`LING!`].map((e,t)=>{let r=xp(e,`#ffd23a`,.3);return r.position.set(t?.45:-.45,1.35,0),r.visible=!1,n.add(r),r}),xm(n,`RAT LINE`,`#9ad0ff`,1.6);break}}return n.position.set(e.x,0,e.z),n}function wm(e,t){let n=new ai;if(e===`safe`){U(n,H(.7,.7,.7),z(`#5a5a66`),0,.35,0);let e=U(n,new Mo(.14,.14,.05,8),z(`#d8b040`),0,.4,.37);e.rotation.x=Math.PI/2,xm(n,`SAFE ${t}g`,`#ffd23a`,1.2)}else{let e=z(`#3aa04a`,{emissive:`#1a6a2a`,emissiveIntensity:1.2});U(n,H(.5,.2,.5),e,0,.1,0),U(n,new No(.25,.8,5),e,0,.6,0),U(n,new nc(.18,6,4),e,0,1.05,0);let r=new Zc(`#5aff5a`,4,4,1.5);r.position.y=1,n.add(r),xm(n,`IDOL ${t}g`,`#7aff7a`,1.6)}return n}var Tm=class{group=new ai;props=new Map;heavy=new Map;puddles=new Map;opened=new Set;ringAt=new Map;lineIdle=new Set;map=null;seats=null;seatsText=``;oil=new Ba({color:`#2a1a08`,transparent:!0,opacity:.75,depthWrite:!1});fire=new Ba({color:`#ff5a10`,transparent:!0,opacity:.8,depthWrite:!1});water=new Ba({color:`#2a6aa0`,transparent:!0,opacity:.55,depthWrite:!1});live=new Ba({color:`#a0f0ff`,transparent:!0,opacity:.85,depthWrite:!1});constructor(e){e.add(this.group)}build(e){this.clear(),this.map=e;for(let t of e.props){let n=Cm(t,e);this.group.add(n),this.props.set(t.id,n)}}clear(){this.group.clear(),this.props.clear(),this.heavy.clear(),this.puddles.clear(),this.opened.clear(),this.ringAt.clear(),this.lineIdle.clear(),this.seats=null,this.seatsText=``}sync(e,t,n,r){let i=this.map;if(!i)return;let a=new Set(e);for(let e of i.props){let t=this.props.get(e.id),n=a.has(e.id);if(e.tiles.length){if(n&&!this.opened.has(e.id)&&(this.opened.add(e.id),Ee(i,e),e.k===`vault`?(t.userData.bars.visible=!1,t.userData.stubs.visible=!0,t.children.filter(e=>e instanceof Na).forEach(e=>t.remove(e))):e.k===`secret`?t.userData.openAt=r:t.visible=!1),t.userData.openAt!==void 0&&t.visible){let e=(r-t.userData.openAt)/ym;t.position.y=Math.min(1,e)*1.6,e>=1&&(t.visible=!1)}}else e.k===`plate`?t.userData.glow.material=n?gm:hm:e.k===`lever`?t.userData.handle.rotation.z=n?-.6:.6:e.k===`snitch`?this.ring(e.id,t,n,r):t.userData.goods?(t.userData.goods.visible=!n,t.userData.lid&&(t.userData.lid.rotation.x=n?-1.9:0)):e.k===`shop`&&(t.userData.keeper.body.position.y=Math.abs(Math.sin(r*2+e.id))*.05)}let o=new Set;for(let e of t){o.add(e.id);let t=this.heavy.get(e.id);t||(t=wm(e.k,e.v),this.group.add(t),this.heavy.set(e.id,t)),t.position.set(e.x,e.n?.15+Math.abs(Math.sin(r*6+e.id))*.1:0,e.z),t.rotation.z=e.n?Math.sin(r*5+e.id)*.15:0}for(let[e,t]of this.heavy)o.has(e)||(this.group.remove(t),this.heavy.delete(e));o.clear(),this.fire.opacity=.65+Math.sin(r*23)*.12+Math.sin(r*37)*.08,this.live.opacity=Math.random()<.3?.4:.9;for(let e of n){o.add(e.id);let t=this.puddles.get(e.id);t||(t=new L(new jo(e.r,12).rotateX(-Math.PI/2),this.oil),this.group.add(t),this.puddles.set(e.id,t)),t.material=e.k===`fire`?this.fire:e.k===`oil`?this.oil:e.e?this.live:this.water,t.position.set(e.x,e.k===`fire`?.03:e.k===`water`?.025:.02,e.z)}for(let[e,t]of this.puddles)o.has(e)||(this.group.remove(t),t.geometry.dispose(),this.puddles.delete(e))}ring(e,t,n,r){let i=t.userData,a=i.body,o=i.handset,s=i.ding;if(!n){this.lineIdle.add(e);return}this.ringAt.has(e)||(this.ringAt.set(e,this.lineIdle.has(e)?r:-1/0),i.screen.material=_m);let c=r-this.ringAt.get(e),l=c<bm&&c%1<.7,u=Math.floor(c*8)%2;a.rotation.z=l?Math.sin(c*70)*.07:0,o.position.y=l?.5+u*.08:.5,s.forEach((e,t)=>{e.visible=l&&u===t,e.position.y=1.3+c%1*.15})}lockers(e,t,n){for(let r of e){let e=this.props.get(r.id);if(!e)continue;let i=r.o?t.find(e=>e.id===r.o):void 0,a=i?`${i.n.slice(0,8).toUpperCase()} ${r.n}/2`:`LOCKER`;if(e.userData.text!==a){e.userData.text=a,e.userData.label&&e.remove(e.userData.label);let t=xp(a,i?p[i.c].color:`#c0d0d0`,.3);t.position.y=1.9,e.add(t),e.userData.label=t}let o=e.userData.body;o.rotation.z=r.pr===void 0?0:Math.sin(n*40)*.06}}exit(e,t,n=0,r=`BACK DOOR`){if(!t)return;t.position.set(e.x,0,e.z),t.visible=!e.sealed;let i=e.t>=0?`GOING ${Math.ceil(e.t)}`:e.on===void 0?e.seats>=99?r:`${e.seats} SEAT${e.seats===1?``:`S`}`:`DOWN ${e.on}/${n}`;i!==this.seatsText&&(this.seatsText=i,this.seats&&t.remove(this.seats),this.seats=xp(i,`#ffb0a0`,.35),this.seats.position.y=2.1,t.add(this.seats))}},Em=150,Dm=e=>document.getElementById(e),Om={get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,t)=>{try{localStorage.setItem(e,t)}catch{}}},km,Am,jm,Mm,Nm,Pm=`log`,Fm=0,Im=()=>!km.hidden&&Pm===`chat`&&!km.classList.contains(`min`),Lm=()=>document.activeElement===Mm;function Rm(e){Pm=e,km.querySelectorAll(`.tabs [data-tab]`).forEach(t=>t.classList.toggle(`on`,t.dataset.tab===e)),Am.hidden=e!==`log`,jm.hidden=Dm(`chat-form`).hidden=e!==`chat`,e===`chat`&&(Fm=0,Nm.textContent=``);let t=e===`log`?Am:jm;t.scrollTop=t.scrollHeight}function zm(e){km.classList.toggle(`min`,e),Dm(`log-min`).textContent=e?`+`:`–`,Om.set(`db.logmin`,e?`1`:`0`),e||Rm(Pm)}function Bm(e,t){let n=e.scrollHeight-e.scrollTop-e.clientHeight<24;for(e.appendChild(t);e.children.length>Em;)e.firstChild.remove();n&&(e.scrollTop=e.scrollHeight)}function Vm(e,t){km=Dm(`log`),Am=Dm(`log-lines`),jm=Dm(`chat-lines`),Nm=Dm(`chat-unread`),Mm=Dm(`chat-input`),Mm.maxLength=140,km.querySelectorAll(`.tabs [data-tab]`).forEach(e=>e.onclick=()=>{Rm(e.dataset.tab),km.classList.contains(`min`)&&zm(!1),e.blur()}),Dm(`log-min`).onclick=e=>{zm(!km.classList.contains(`min`)),e.currentTarget.blur()},Dm(`chat-form`).onsubmit=t=>{t.preventDefault();let n=Mm.value.trim();n&&e(n),Mm.value=``,Mm.blur()},Mm.onkeydown=e=>{e.key===`Escape`&&(e.stopPropagation(),Mm.value=``,Mm.blur())};for(let e of[`mousedown`,`wheel`,`contextmenu`])km.addEventListener(e,e=>e.stopPropagation());new ResizeObserver(()=>document.documentElement.style.setProperty(`--log-h`,`${km.offsetHeight}px`)).observe(km);let n=Om.get(`db.logmin`);zm(n===null?t:n===`1`),Rm(`log`)}function Hm(e){km.hidden=!e,!e&&Lm()&&Mm.blur()}function Um(){Am.replaceChildren(),jm.replaceChildren(),Fm=0,Nm.textContent=``}var Wm=(e,t,n=``)=>{let r=document.createElement(`div`);return r.textContent=e,t&&(r.style.color=t),n&&(r.className=n),r};function Gm(e,t){Bm(Am,Wm(e,t))}function Km(e){Bm(Am,Wm(e,void 0,`sys`)),Bm(jm,Wm(e,void 0,`sys`))}function qm(e,t,n,r){let i=document.createElement(`div`),a=document.createElement(`b`);a.textContent=`${e}: `,a.style.color=t,i.append(a,n),r&&(i.className=`mine`),Bm(jm,i),!r&&!Im()&&(Fm++,Nm.textContent=`(${Fm})`)}function Jm(){km.hidden||(km.classList.contains(`min`)&&zm(!1),Rm(`chat`),Mm.focus({preventScroll:!0}))}var W=null,Ym,Xm=null;function Zm(){W?W.resume():(W=new AudioContext,Ym=W.createGain(),Ym.gain.value=.35,Ym.connect(W.destination),ph&&bg())}function Qm(e,t,n,r,i){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(r,t+n),e.gain.exponentialRampToValueAtTime(1e-4,t+n+i)}function G(e,t,n,r,i=.5,a=0){if(!W)return;let o=W.currentTime+a,s=W.createOscillator(),c=W.createGain();s.type=e,s.frequency.setValueAtTime(t,o),s.frequency.exponentialRampToValueAtTime(Math.max(n,1),o+r),Qm(c,o,.005,i,r),s.connect(c).connect(Ym),s.start(o),s.stop(o+r+.05)}function $m(e,t,n,r=`lowpass`){if(!W)return;let i=W.currentTime;if(!Xm){Xm=W.createBuffer(1,W.sampleRate,W.sampleRate);let e=Xm.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}let a=W.createBufferSource(),o=W.createBiquadFilter(),s=W.createGain();a.buffer=Xm,o.type=r,o.frequency.value=n,Qm(s,i,.003,t,e),a.connect(o).connect(s).connect(Ym),a.start(i,Math.random()*Math.max(0,1-e)),a.stop(i+e)}var K={swing:(e=1)=>$m(.08,.25*e,2500,`bandpass`),bite:(e=1)=>{$m(.04,.22*e,2200,`bandpass`),G(`square`,520,160,.05,.1*e)},bash:(e=1)=>{$m(.16,.22*e,700,`bandpass`),G(`sine`,130,45,.14,.35*e,.1)},hit:(e=1)=>{G(`square`,220,60,.08,.25*e),$m(.05,.2*e,1200)},pickup:()=>{G(`square`,880,1320,.06,.15),G(`square`,1320,1760,.06,.12,.05)},boom:(e=1)=>{$m(.6,.9*e,400),G(`sawtooth`,120,30,.5,.4*e)},stomp:(e=1)=>{G(`sine`,140,40,.3,.8*e),$m(.2,.4*e,300)},levelUp:()=>{[523,659,784,1047,1319].forEach((e,t)=>G(`square`,e,e,.12,.2,t*.07)),rh(`better`,.42)},ult:()=>{G(`sawtooth`,80,400,.6,.4),$m(.8,.6,800),rh(`bastard`,.15)},coins:(e=1,t=6)=>{for(let n=0;n<t;n++)G(`square`,1900+Math.random()*900,1500,.05,.08*e,.04+n*.06+Math.random()*.03)},snitch:(e=1)=>{for(let t=0;t<3;t++)for(let n=0;n<8;n++){let r=n%2?1319:1568,i=t*1+n*.07;G(`triangle`,r,r*.99,.09,.16*e,i),G(`square`,r*2,r*2,.04,.03*e,i)}},buy:()=>{$m(.05,.15,3e3,`bandpass`),G(`square`,1319,1319,.06,.1,.03),G(`square`,1760,1760,.18,.1,.09)},deny:()=>{G(`square`,180,160,.12,.15),G(`square`,150,140,.18,.15,.13)},skill:()=>{G(`square`,330,1320,.35,.14),[784,988,1175,1568].forEach((e,t)=>G(`triangle`,e,e,.18,.15,.25+t*.07))},roll:(e=1)=>{$m(.18,.2*e,900),G(`triangle`,420,160,.2,.1*e)},blip:()=>G(`square`,660,880,.04,.08),pause:e=>(e?[880,660,440]:[440,660,880]).forEach((e,t)=>G(`triangle`,e,e,.07,.15,t*.05)),heartbeat:()=>{G(`sine`,70,45,.12,.6),G(`sine`,65,40,.14,.45,.16)},snatch:()=>{G(`triangle`,200,900,.4,.3),G(`triangle`,300,1200,.4,.2,.1)},escape:()=>[392,523,659,784].forEach((e,t)=>G(`triangle`,e,e,.2,.25,t*.12)),cast:(e,t=1)=>{let n={Destruction:300,Illusion:520,Restoration:660,Mysticism:440,Conjuration:180,Alteration:380}[e]??400;G(`triangle`,n,n*2.2,.25,.22*t),$m(.2,.15*t,3e3,`bandpass`)},curse:()=>{G(`sawtooth`,330,110,.6,.22),G(`sawtooth`,311,104,.6,.18,.04),$m(.4,.2,600)},fizzle:(e=1)=>{$m(.35,.3*e,900),G(`sawtooth`,300,70,.3,.15*e)},hiss:(e=1)=>$m(.6,.3*e,3500,`highpass`),zap:(e=1)=>{$m(.18,.4*e,5e3,`highpass`),G(`square`,1200,200,.15,.15*e)},teleport:(e=1)=>{G(`sine`,200,1600,.3,.25*e),G(`sine`,1600,400,.3,.15*e,.15)},heal:(e=1)=>[660,880,1100].forEach((t,n)=>G(`sine`,t,t,.15,.15*e,n*.06)),drink:()=>{for(let e=0;e<3;e++)G(`sine`,220,120,.09,.3,e*.11)},learn:()=>[523,784,1047,1568].forEach((e,t)=>G(`triangle`,e,e,.25,.18,t*.09)),sugar:()=>{G(`sawtooth`,100,900,1.2,.2),G(`sawtooth`,103,880,1.2,.2)},leap:()=>G(`square`,200,1400,.5,.2),fall:(e=1)=>{G(`sine`,1400,120,1.4,.22*e),G(`triangle`,700,60,1.4,.12*e,.05)},bell:(e=1)=>[880,1320,1760].forEach((t,n)=>G(`triangle`,t,t*.98,1.4,.28*e,n*.015)),chat:()=>{G(`square`,990,990,.04,.07),G(`square`,1320,1320,.05,.07,.05)},roar:(e=1)=>{W&&(yg(),Eh(W.currentTime,.6*e,Ym))},transform:()=>{W&&(yg(),Eh(W.currentTime,.5,Ym),G(`sawtooth`,55,880,3.9,.12),G(`sawtooth`,58,932,3.9,.1),setTimeout(()=>{K.boom(1.4),K.roar(1.2)},3900))},summon:(e=1)=>{if(!W)return;yg();let t=W.currentTime,n=W.createGain();n.gain.value=e,n.connect(Ym);let r=Th(`bandpass`,750,2.5,n);for(let e of[43,46,49,55])q(`sawtooth`,e,t,2.9,.07,.03,r),q(`sawtooth`,e+.12,t+.05,2.85,.05,.03,r);q(`sawtooth`,31,t,2.9,.12,0,Th(`lowpass`,260,1,n)),Eh(t+.1,.3,n),setTimeout(()=>n.disconnect(),3500)},portal:(e=1)=>{G(`sine`,80,420,.7,.3*e),G(`sawtooth`,640,110,.6,.06*e,.1),$m(.5,.2*e,1100,`bandpass`)},immune:(e=1)=>{G(`triangle`,1760,1700,.18,.1*e),G(`triangle`,2350,2300,.25,.06*e,.02)},cash:()=>{G(`square`,1568,1568,.05,.12),G(`square`,2093,2093,.14,.12,.06)},babyCry:()=>{if(W)for(let e=0;e<3;e++){let t=W.currentTime+e*.75,n=W.createOscillator(),r=W.createOscillator(),i=W.createGain(),a=W.createBiquadFilter(),o=W.createGain();n.type=`sawtooth`,n.frequency.setValueAtTime(420,t),n.frequency.linearRampToValueAtTime(560,t+.15),n.frequency.linearRampToValueAtTime(380,t+.65),r.frequency.value=7,i.gain.value=18,r.connect(i).connect(n.frequency),a.type=`bandpass`,a.frequency.value=1100,a.Q.value=3,o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.5,t+.06),o.gain.setValueAtTime(.5,t+.5),o.gain.exponentialRampToValueAtTime(1e-4,t+.7),n.connect(a).connect(o).connect(Ym),n.start(t),r.start(t),n.stop(t+.75),r.stop(t+.75)}}},eh={Y:[[270,2300,3e3],.07,.55],UW:[[310,870,2250],.17,1],G:[null,.06,0,[1900,.5]],AA:[[730,1090,2440],.15,1],T:[null,.06,0,[4800,.55]],B:[null,.05,.12,[700,.25]],EH:[[560,1800,2500],.12,1],DX:[[420,1650,2600],.035,.45],ER:[[490,1350,1690],.26,1],F:[null,.09,0,[5200,.45]],UH:[[450,1030,2240],.1,1],L:[[360,1050,2600],.08,.8],AE:[[680,1700,2420],.15,1],S:[null,.12,0,[6200,.5]],D:[null,.05,.15,[2600,.35]],_:[null,.06,0]},th={better:{hz:150,ph:[[`Y`,1],[`UW`,1.05],[`G`,1.15],[`AA`,1.25],[`T`,1.2],[`_`,1.2],[`B`,1.35],[`EH`,1.45],[`DX`,1.4],[`ER`,1.5]]},bastard:{hz:120,ph:[[`F`,1],[`UH`,1],[`L`,.95],[`_`,1],[`B`,1.2],[`AE`,1.3],[`S`,1.2],[`T`,1.1],[`ER`,1.15],[`D`,.9]]}},nh=null;function rh(e,t=0,n=.9){if(!W)return;let r=th[e],i=W.currentTime+t;if(!nh){nh=W.createWaveShaper();let e=new Float32Array(1024);for(let t=0;t<e.length;t++)e[t]=Math.round((t/512-1)*8)/8;nh.curve=e,nh.connect(Ym)}let a=r.ph.reduce((e,[t])=>e+eh[t][1],0),o=W.createGain();o.gain.value=n,o.connect(nh);let s=W.createOscillator();s.type=`sawtooth`;let c=W.createGain();c.gain.setValueAtTime(0,i),s.connect(c);let l=[0,1,2].map(e=>{let t=W.createBiquadFilter(),n=W.createGain();return t.type=`bandpass`,t.Q.value=[7,11,13][e],n.gain.value=[1.6,1.1,.6][e],t.frequency.setValueAtTime(eh.UW[0][e],i),c.connect(t).connect(n).connect(o),t}),u=W.createBufferSource(),d=W.createBuffer(1,Math.ceil(W.sampleRate*(a+.1)),W.sampleRate),f=d.getChannelData(0);for(let e=0;e<f.length;e++)f[e]=Math.random()*2-1;u.buffer=d;let p=W.createBiquadFilter(),m=W.createGain();p.type=`bandpass`,p.Q.value=1.5,m.gain.setValueAtTime(0,i),p.frequency.setValueAtTime(3e3,i),u.connect(p).connect(m).connect(o);let h=i,g=eh.UW[0];for(let[e,t]of r.ph){let[n,i,a,o]=eh[e];n&&(g=n),l.forEach((e,t)=>e.frequency.linearRampToValueAtTime(g[t],h+Math.min(.04,i*.5))),s.frequency.linearRampToValueAtTime(r.hz*t,h+i*.6),c.gain.linearRampToValueAtTime(a*.5,h+.015),c.gain.setValueAtTime(a*.5,h+i-.012),o&&(p.frequency.setValueAtTime(o[0],h),m.gain.setValueAtTime(0,h+i*.4),m.gain.linearRampToValueAtTime(o[1],h+i*.5),m.gain.linearRampToValueAtTime(0,h+i)),h+=i}c.gain.linearRampToValueAtTime(0,h+.04),s.frequency.setValueAtTime(r.hz,i),s.start(i),u.start(i),s.stop(h+.1),u.stop(h+.1),setTimeout(()=>o.disconnect(),(t+a+.5)*1e3)}var ih=null,ah=null,oh=null,sh=1,ch=0,lh=0,uh=0,dh=1,fh=1,ph=null,mh=null,hh=(()=>{try{return localStorage.getItem(`db.music`)===`off`}catch{return!1}})(),gh=null,_h=null,vh=e=>440*2**((e-69)/12);function q(e,t,n,r,i,a=0,o=ih){if(!W||!o)return;let s=W.createOscillator(),c=W.createGain();if(e instanceof PeriodicWave?s.setPeriodicWave(e):s.type=e,s.frequency.value=vh(t),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(i,n+.01),c.gain.setValueAtTime(i,n+Math.max(.02,r-.06)),c.gain.linearRampToValueAtTime(0,n+r),a&&r>.4){let e=W.createOscillator(),i=W.createGain();e.frequency.value=5.5,i.gain.value=vh(t)*a,e.connect(i).connect(s.frequency),e.start(n+.25),e.stop(n+r)}s.connect(c).connect(o),s.start(n),s.stop(n+r+.02)}function yh(e,t,n,r,i,a=i,o=.002,s=ih){if(!W||!s||!_h)return;let c=W.createBufferSource(),l=W.createBiquadFilter(),u=W.createGain();c.buffer=_h,l.type=r,l.frequency.setValueAtTime(i,e),l.frequency.linearRampToValueAtTime(a,e+t),u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(n,e+o),u.gain.exponentialRampToValueAtTime(1e-4,e+t),c.connect(l).connect(u).connect(s),c.start(e,Math.random()*.5),c.stop(e+t)}function bh(e,t=.7,n=ih){xh(e,140,t,n,40,.2)}function xh(e,t,n,r=ih,i=t*.5,a=.3){if(!W||!r)return;let o=W.createOscillator(),s=W.createGain();o.frequency.setValueAtTime(t,e),o.frequency.exponentialRampToValueAtTime(i,e+a*.75),s.gain.setValueAtTime(n,e),s.gain.exponentialRampToValueAtTime(1e-4,e+a),o.connect(s).connect(r),o.start(e),o.stop(e+a+.02)}function Sh(e,t,n,r,i,a=ih){if(!W||!a)return;let o=W.createOscillator(),s=W.createGain();o.type=e,o.frequency.value=vh(t),s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(i,n+.005),s.gain.exponentialRampToValueAtTime(1e-4,n+r),o.connect(s).connect(a),o.start(n),o.stop(n+r+.02)}function Ch(e,t,n,r,i=ih){Sh(`sine`,e-12,t,n,r*.6,i),Sh(`sine`,e,t,n*.8,r,i),Sh(`sine`,e+3.1,t,n*.5,r*.4,i),Sh(`sine`,e+7,t,n*.4,r*.3,i),Sh(`sine`,e+12,t,n*.3,r*.35,i)}function wh(e,t,n,r,i,a,o,s=.02){if(!W)return;let c=W.createOscillator(),l=W.createGain();c.type=e,c.frequency.setValueAtTime(t,r),c.frequency.exponentialRampToValueAtTime(n,r+i),l.gain.setValueAtTime(1e-4,r),l.gain.exponentialRampToValueAtTime(a,r+s),l.gain.exponentialRampToValueAtTime(1e-4,r+i),c.connect(l).connect(o),c.start(r),c.stop(r+i+.02)}function Th(e,t,n,r){let i=W.createBiquadFilter();return i.type=e,i.frequency.value=t,i.Q.value=n,i.connect(r),i}function Eh(e,t,n){let r=W,i=r.createBiquadFilter(),a=r.createGain();i.type=`bandpass`,i.Q.value=1.5,i.frequency.setValueAtTime(450,e),i.frequency.linearRampToValueAtTime(950,e+.3),i.frequency.exponentialRampToValueAtTime(240,e+1.8),a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(t,e+.12),a.gain.setValueAtTime(t,e+.9),a.gain.exponentialRampToValueAtTime(1e-4,e+1.8),i.connect(a).connect(n);let o=r.createOscillator(),s=r.createGain();o.frequency.value=28,s.gain.value=22,o.connect(s);for(let t of[92,97,61]){let n=r.createOscillator();n.type=`sawtooth`,n.frequency.setValueAtTime(t,e),n.frequency.exponentialRampToValueAtTime(t*.6,e+1.8),s.connect(n.frequency),n.connect(i),n.start(e),n.stop(e+1.85)}o.start(e),o.stop(e+1.85),yh(e,1.6,t*.5,`bandpass`,700,300,.1,n)}var Dh=[[38,[62,65,69]],[38,[62,65,69]],[34,[58,62,65]],[36,[60,64,67]],[38,[62,65,69]],[38,[62,65,69]],[43,[62,67,70]],[33,[61,64,69]]],Oh=[[0,0,50,2],[0,2,53,1],[0,3,55,1],[0,4,57,3],[1,0,55,1],[1,1,53,1],[1,2,50,4],[1,6,-1,2],[2,0,50,2],[2,2,53,1],[2,3,58,1],[2,4,57,2],[2,6,55,2],[3,0,55,3],[3,3,52,1],[3,4,48,2],[3,6,-1,2],[4,0,57,2],[4,2,57,1],[4,3,60,1],[4,4,62,3],[5,0,60,1],[5,1,57,1],[5,2,55,2],[5,4,53,2],[5,6,-1,2],[6,0,55,2],[6,2,58,1],[6,3,57,1],[6,4,55,2],[6,6,53,1],[6,7,52,1],[7,0,52,2],[7,2,49,2],[7,4,45,2],[7,6,-1,2]];function kh(e,t,n){let r=e%(Dh.length*8),i=Math.floor(r/8),a=r%8,o=Math.floor(e/(Dh.length*8)),[s,c]=Dh[i];if((a===0||a===4)&&q(`triangle`,s,t,n*1.8,.55),(a===3||a===7)&&q(`triangle`,s+12,t,n*.9,.4),a===6&&q(`triangle`,s+7,t,n*.9,.4),a%2==1)for(let e of c)q(gh,e,t,n*.5,.045);(o>0||i>=4)&&((a===0||a===5)&&bh(t),(a===2||a===6)&&yh(t,.16,.22,`bandpass`,1800),yh(t,.035,a%2?.05:.08,`highpass`,7e3)),o%2==1&&q(`triangle`,c[[0,1,2,1][a%4]]+12,t,n*.8,.07);for(let[e,r,o,s]of Oh)e===i&&r===a&&(o<0?yh(t+.05,s*n*.9,.12,`bandpass`,700,2200,s*n*.6):q(gh,o,t,s*n*.95,.16,.012))}var Ah=[[40,52],[36,48],[38,50],[35,47],[40,52],[36,48],[33,45],[35,47]],jh=[[64,67,71],[60,64,67],[62,66,69],[59,63,66],[64,67,71],[60,64,67],[57,60,64],[59,63,66]],Mh=[[0,0,76,3],[0,3,71,3],[0,6,76,2],[0,8,78,2],[0,10,79,4],[0,14,78,2],[1,0,76,6],[1,6,74,2],[1,8,72,2],[1,10,74,2],[1,12,76,4],[2,0,78,3],[2,3,74,3],[2,6,69,2],[2,8,74,2],[2,10,78,2],[2,12,81,4],[3,0,78,6],[3,6,75,2],[3,8,71,4],[3,12,66,2],[3,14,75,2],[4,0,76,2],[4,2,76,1],[4,3,79,1],[4,4,83,4],[4,8,81,2],[4,10,79,2],[4,12,78,2],[4,14,79,2],[5,0,76,4],[5,4,79,2],[5,6,84,6],[5,12,83,2],[5,14,81,2],[6,0,81,3],[6,3,76,3],[6,6,72,2],[6,8,69,2],[6,10,72,2],[6,12,76,4],[7,0,71,1],[7,1,75,1],[7,2,78,1],[7,3,83,1],[7,4,71,1],[7,5,75,1],[7,6,78,1],[7,7,83,1],[7,8,81,2],[7,10,79,2],[7,12,78,2],[7,14,75,2]],Nh=new Set([0,2,3,4,6,7,8,10,11,12,14,15]);function Ph(e,t,n){let r=e%(Ah.length*16),i=Math.floor(r/16),a=r%16,o=Math.floor(e/(Ah.length*16)),[s,c]=Ah[i];if(q(`triangle`,a%2?s+12:s,t,n*.9,.45),a===0)for(let e of[c,c+7,c+12])q(`sawtooth`,e,t,n*3.5,.13,0,ah);else if(Nh.has(a))for(let e of[c,c+7])q(`sawtooth`,e,t,n*.55,.08,0,ah);for(let[e,r,o,s]of Mh)e===i&&r===a&&(q(`sawtooth`,o,t,s*n*.95,.11,.02,ah),q(gh,o-12,t,s*n*.9,.07,.01));o%2==1&&q(gh,jh[i][a%3]+12,t,n*.7,.035),(a%8==0||a===10)&&bh(t,.8),i===7&&a>=12?yh(t,.1,.18+(a-12)*.04,`bandpass`,2e3):(a===4||a===12)&&yh(t,.14,.3,`bandpass`,1900),a%2==0&&yh(t,.03,a%4?.04:.07,`highpass`,8e3),r===0&&yh(t,1.2,.12,`highpass`,5e3)}var Fh=[[57,60,62,65],[53,57,60,62],[55,58,62,65],[52,55,58,60],[57,60,62,65],[57,60,63,65],[58,62,65,67],[52,55,58,60]],Ih=[[41,45,48,39],[38,41,45,42],[43,46,50,49],[48,46,43,40],[41,45,48,45],[41,45,48,47],[46,50,53,47],[48,43,46,40]],Lh=[[0,0,72,2],[0,3,69,1],[0,4,72,1],[0,5,74,3],[1,0,72,3],[1,4,69,2],[1,6,65,2],[2,1,67,1],[2,2,70,2],[2,4,74,2],[2,6,72,2],[3,0,70,2],[3,2,67,2],[3,4,64,4],[4,0,77,2],[4,3,76,1],[4,4,74,2],[4,6,72,2],[5,0,75,4],[5,5,72,1],[5,6,69,2],[6,0,70,2],[6,2,74,2],[6,4,77,3],[6,7,74,1],[7,0,72,2],[7,2,70,1],[7,3,67,1],[7,4,64,4]];function Rh(e,t,n){let r=e%64,i=Math.floor(r/8),a=r%8,o=Math.floor(e/64),s=t+(a%2?n*.33:0);if(a%2==0&&q(`triangle`,Ih[i][a/2],s,n*1.7,.5),a===2||a===6||a===7&&i%2==1)for(let e of Fh[i])q(gh,e,s,n*.6,.035);if((a===2||a===6)&&yh(s,.22,.09,`bandpass`,2600,1800,.04),yh(s,.05,a%2?.03:.05,`highpass`,9e3),a===0&&i%2==0&&bh(s,.35),o%3!=2)for(let[e,t,r,o]of Lh)e===i&&t===a&&q(gh,r,s,o*n*.9,.09,.015)}var zh=[[45,[57,60,64]],[43,[55,59,64]],[41,[57,60,65]],[40,[56,59,64]],[45,[57,60,64]],[38,[57,62,65]],[40,[56,59,62]],[45,[57,61,64]]],Bh=[[0,0,76,6],[1,0,74,3],[1,4,71,4],[2,0,72,6],[3,0,71,8],[4,0,76,3],[4,4,79,4],[5,0,77,6],[6,0,74,3],[6,4,71,4],[7,0,69,8]];function Vh(e,t,n){let r=e%64,i=Math.floor(r/8),a=r%8,[o,s]=zh[i];if(a===0){q(`triangle`,o,t,n*7.5,.3);for(let e of s)q(`triangle`,e-12,t,n*7.8,.05)}q(`triangle`,s[[0,1,2,1,0,2,1,2][a]]+24,t,n*.9,.05),(a===0||a===1)&&bh(t,a?.25:.35);for(let[e,r,o,s]of Bh)e===i&&r===a&&q(`sine`,o,t,s*n,.08,.03);a===4&&i%4==3&&yh(t,n*4,.05,`bandpass`,400,2400,n*2)}var Hh=[[38,50],[34,46],[36,48],[33,45],[38,50],[34,46],[31,43],[33,45]],Uh=[[74,77,81,77],[74,77,82,77],[72,76,79,76],[73,76,81,76],[74,77,81,86],[82,81,77,74],[79,77,74,70],[73,76,79,81]];function Wh(e,t,n){let r=e%128,i=Math.floor(r/16),a=r%16,o=Math.floor(e/128),[s,c]=Hh[i];if(q(`triangle`,a%2?s+12:s,t,n*.9,.45),a%4==0)for(let e of[c,c+7,c+12])q(`sawtooth`,e,t,n*1.8,.11,0,ah);else for(let e of[c,c+7])q(`sawtooth`,e,t,n*.5,.07,0,ah);q(`sawtooth`,Uh[i][Math.floor(a/4)],t,n*.85,.08,0,ah),o%2==1&&a%8==0&&q(gh,86+(a?-1:0),t,n*7,.03,.03),(a%2==0||i%2==1&&a>11)&&bh(t,.7),(a===4||a===12)&&yh(t,.14,.32,`bandpass`,1900),yh(t,.03,a%4?.04:.08,`highpass`,8e3),r===0&&yh(t,1.4,.14,`highpass`,5e3)}var Gh=[[36,[60,63,67]],[35,[59,62,67]],[34,[58,63,67]],[33,[57,60,65]],[32,[56,60,65]],[31,[55,59,62]],[32,[56,60,63]],[31,[55,59,65]]],Kh=[[0,0,67,2],[0,2,63,4],[1,0,67,2],[1,2,62,4],[2,0,70,2],[2,2,67,4],[2,7,69,1],[3,0,69,2],[3,2,65,2],[3,4,60,4],[4,0,72,2],[4,2,68,4],[5,0,71,2],[5,2,67,4],[5,7,72,1],[6,0,75,2],[6,2,74,2],[6,4,72,2],[6,6,68,2],[7,0,71,6]];function qh(e,t,n){let r=e%64,i=Math.floor(r/8),a=r%8,o=Math.floor(e/64),[s,c]=Gh[i];if(a===0){q(`triangle`,s,t,n*7.8,.45);for(let e of c)q(`triangle`,e-12,t,n*7.8,.04)}a===4&&q(`triangle`,s+12,t,n*1.5,.25),(a===0||a===4)&&(bh(t,.45),bh(t+n*.4,.28)),a%2==0&&yh(t,.025,.07,`bandpass`,a%4?2600:3800),(a===2||a===6)&&yh(t,n*1.6,.1,`bandpass`,a===2?350:280,a===2?900:700,n*.8);for(let[e,r,o,s]of Kh)e===i&&r===a&&q(gh,o,t,s*n*.95,.11,.02);if(o%2==1)for(let[e,r,o,s]of Kh)e===i&&r===a-2&&q(`sine`,o+12,t,s*n*.8,.035,.03)}var Jh=[36,36,37,36,36,42,37,35],Yh=[[48,51,54],[48,51,55],[49,52,55],[48,51,54],[48,51,56],[54,57,60],[49,52,56],[47,50,53]],Xh=[[79,78,75,72,79,78,75,-1],[80,79,75,72,80,79,74,-1],[79,78,75,72,71,72,75,78],[79,-1,78,-1,73,-1,-1,-1],[84,83,79,75,84,83,78,-1],[85,84,79,75,72,73,72,-1],[78,79,78,75,72,71,72,66],[67,-1,66,-1,60,-1,-1,-1]];function Zh(e,t,n){let r=e%128,i=Math.floor(r/16),a=r%16,o=Math.floor(e/128),s=Jh[i];if(a===0){q(`sawtooth`,s,t,n*16,.16,0,oh),q(`sawtooth`,s+.15,t,n*16,.16,0,oh),q(`sawtooth`,s-12,t,n*16,.12,0,oh);for(let e of Yh[i])q(`square`,e,t,n*16,.025,0,oh)}if((a===0||a===8)&&(bh(t,.45),bh(t+n*1.2,.28)),a===0&&i%2==0&&Ch(s+24,t,n*30,.1),a===8&&i%2==1&&yh(t,n*8,.06,`bandpass`,300,1600,n*7.5),sh!==0){if(a%2==0&&!(o%2==1&&i>=4&&sh<2)){let e=Xh[i][a/2];e>0&&(Sh(`triangle`,e+.2,t,n*6,.07),Sh(`sine`,e+12.3,t,n*3,.02))}sh<2||(a%2==0&&bh(t,.5),a%4==2&&xh(t,a%8==2?110:90,.4),(a===4||a===12)&&yh(t,.2,.25,`bandpass`,1400),q(`sawtooth`,Yh[i][a%3]+12,t,n*.8,.05,0,ah),r===0&&yh(t,1.4,.12,`highpass`,5e3))}}var Qh=[40,0,40,40,0,40,43,0,40,40,0,46,45,0,43,0],$h=[40,0,40,40,0,40,43,0,40,40,0,46,47,48,47,46],eg=[36,0,36,36,0,36,39,0,38,0,38,38,0,38,41,42],tg=[Qh,$h,Qh,eg,Qh,$h,eg,[40,40,40,40,52,0,51,0,50,0,49,0,48,47,46,45]],ng=[40,40,40,36,40,40,36,40],rg=[[0,0,64,4],[0,4,67,2],[0,6,65,2],[0,8,64,6],[0,14,62,2],[1,0,64,3],[1,3,70,3],[1,6,69,2],[1,8,67,8],[2,0,71,4],[2,4,72,2],[2,6,71,2],[2,8,70,4],[2,12,67,4],[3,0,65,4],[3,4,64,4],[3,8,63,8],[4,0,76,2],[4,2,75,2],[4,4,76,4],[4,8,79,2],[4,10,77,2],[4,12,76,4],[5,0,74,4],[5,4,76,2],[5,6,70,6],[5,12,71,4],[6,0,72,4],[6,4,74,4],[6,8,75,4],[6,12,77,4],[7,0,76,2],[7,2,75,2],[7,4,74,2],[7,6,73,2],[7,8,72,8]];function ig(e,t,n){let r=e%128,i=Math.floor(r/16),a=r%16,o=Math.floor(e/128),s=tg[i][a],c=ng[i],l=sh===2;if(s){if(s===c)for(let e of[s,s+7])q(`sawtooth`,e,t,n*.55,.1,0,ah);else for(let e of[s,s+7,s+12])q(`sawtooth`,e,t,n*1.7,.12,0,ah);q(`triangle`,s-12,t,n*.9,.42)}if((l||s===c||a===0)&&bh(t,l?.55:.75),(a===4||a===12)&&yh(t,.15,.32,`bandpass`,1800),i===7&&a>=12&&yh(t,.08,.2+(a-12)*.05,`bandpass`,2100),a%2==0&&yh(t,.03,a%4?.04:.07,`highpass`,8e3),(r===0||i===4&&a===0)&&yh(t,1.3,.13,`highpass`,5e3),o%2==1||l)for(let[e,r,o,s]of rg)e===i&&r===a&&(q(`sawtooth`,o,t,s*n*.95,.1,.025,ah),q(`sawtooth`,o+12,t,s*n*.9,.03,.02,ah))}var ag=[[46,[62,65,70]],[51,[63,67,70]],[53,[60,65,69]],[46,[62,65,70]],[43,[62,67,70]],[51,[63,67,70]],[53,[60,63,69]],[46,[62,65,70]]],og=[[0,0,77,2],[0,2,74,1],[0,3,77,1],[0,4,82,4],[1,0,79,2],[1,2,82,2],[1,4,79,2],[1,6,75,2],[2,0,77,3],[2,3,75,1],[2,4,74,2],[2,6,72,2],[3,0,70,6],[3,6,72,1],[3,7,74,1],[4,0,74,2],[4,2,70,2],[4,4,74,2],[4,6,79,2],[5,0,79,3],[5,3,77,1],[5,4,75,2],[5,6,79,2],[6,0,77,2],[6,2,81,2],[6,4,84,2],[6,6,81,2],[7,0,82,6]];function sg(e,t,n){let r=e%64,i=Math.floor(r/8),a=r%8,o=Math.floor(e/64),[s,c]=ag[i];if(a%2==0)q(`triangle`,a%4?s+7:s,t,n*.9,.45);else for(let e of c)q(gh,e,t,n*.5,.03);a===0&&bh(t,.5),a===4&&yh(t,.12,.2,`bandpass`,2e3),yh(t,.03,.03,`highpass`,9e3);for(let[e,r,s,c]of og)e===i&&r===a&&(q(gh,s,t,c*n*.9,.09,.01),o%2==1&&q(`triangle`,s+12,t,c*n*.9,.05))}var cg={rise:7,fanfare:5.8},lg=0,ug=0;function dg(e,t){let n=W;wh(`sine`,70,22,e,1.8,.9,t),yh(e,2.4,.35,`lowpass`,400,60,.01,t);let r=n.createBiquadFilter(),i=n.createGain();r.type=`lowpass`,r.Q.value=3,r.frequency.setValueAtTime(180,e),r.frequency.exponentialRampToValueAtTime(1600,e+4.6),i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(1,e+4.4),i.gain.linearRampToValueAtTime(0,e+4.95),r.connect(i).connect(t);for(let t of[36,37,42,48])q(`sawtooth`,t,e+.3,4.65,.12,0,r),q(`sawtooth`,t+.1,e+.3,4.65,.1,0,r);let a=Th(`bandpass`,1200,2,t);wh(`sawtooth`,220,1900,e+.6,4.2,.12,a,3.6),wh(`sawtooth`,233,2010,e+.6,4.2,.1,a,3.6);for(let n of[1,2.2,3.4])Ch(48,e+n,3,.18,t);for(let n=.5,r=.9;n<4.6;n+=r,r*=.82)bh(e+n,.5,t),bh(e+n+.14,.3,t);let o=Th(`bandpass`,900,1.5,t);for(let t of[60,63,66,69])q(`sawtooth`,t,e+4.6,.4,.06,.02,o);wh(`sine`,120,30,e+5,.9,1,t),yh(e+5,1.9,.5,`lowpass`,2e3,100,.005,t);let s=Th(`lowpass`,1400,1,t);for(let t of[24,36,42,48,49])Sh(`sawtooth`,t,e+5,1.95,.09,s);Ch(36,e+5,1.95,.2,t),Eh(e+5,.5,t)}var fg=[[0,70,.13],[.14,74,.13],[.28,77,.13],[.42,82,.8],[1.26,81,.2],[1.47,79,.2],[1.68,81,.2],[1.89,82,.4],[2.31,77,.8],[3.15,75,.13],[3.29,77,.13],[3.43,79,.13],[3.57,82,2.1]],pg=[[.42,[58,62,65,70],.8],[1.26,[57,60,65],.6],[1.89,[58,62,65],.4],[2.31,[55,58,63],.42],[2.73,[57,60,63,65],.42],[3.57,[58,62,65,70,74],2.1]];function mg(e,t){let n=Th(`lowpass`,2600,.8,t);for(let[r,i,a]of fg)q(`sawtooth`,i,e+r,a,.09,a>1?.012:0,n),q(gh,i,e+r,a,.07,0,t),q(`triangle`,i-12,e+r,a,.12,0,t);for(let[r,i,a]of pg){for(let t of i)q(`sawtooth`,t-12,e+r,a,.04,0,n);q(`triangle`,i[0]-24,e+r,a,.35,0,t),xh(e+r,110,.6,t)}for(let n=2.9;n<3.55;n+=.06)xh(e+n,95,.15+(n-2.9)*.6,t);yh(e+3.57,2,.15,`highpass`,5e3,5e3,.002,t);for(let n=3.7,r=0;n<5.4;n+=.07,r++)q(gh,r%2?86:89,e+n,.06,.02,0,t)}function hg(e){if(!W||hh)return;yg();let t=cg[e];xg(),lg=W.currentTime+t;let n=W.createGain();n.gain.value=.55,n.connect(Ym),(e===`rise`?dg:mg)(W.currentTime+.05,n),setTimeout(()=>n.disconnect(),(t+2)*1e3),clearTimeout(ug),ug=window.setTimeout(()=>{lg=0,bg()},t*1e3)}function gg(e){sh=e}var _g={menu:{bpm:76,perBeat:2,vol:.5,play:kh},boss:{bpm:168,perBeat:4,vol:.32,play:Ph},hub:{bpm:112,perBeat:2,vol:.45,play:Rh},haunt:{bpm:66,perBeat:2,vol:.55,play:Vh},awake:{bpm:184,perBeat:4,vol:.32,play:Wh},downed:{bpm:92,perBeat:2,vol:.5,play:qh},horror:{bpm:80,perBeat:4,vol:.6,play:Zh},metal:{bpm:152,perBeat:4,vol:.34,play:ig},victory:{bpm:120,perBeat:2,vol:.45,play:sg}};function vg(){if(!W||!mh)return;dh+=(fh-dh)*.08,Math.abs(fh-dh)<.005&&(dh=fh);let e=_g[mh],t=60/e.bpm/e.perBeat/dh;for(lh<W.currentTime&&(lh=W.currentTime+.05);lh<W.currentTime+.25;)e.play(uh++,lh,t),lh+=t}function yg(){if(!W||gh)return;let e=new Float32Array(32),t=new Float32Array(32);for(let t=1;t<32;t++)e[t]=2/(t*Math.PI)*Math.sin(t*Math.PI*.25);gh=W.createPeriodicWave(e,t),_h=W.createBuffer(1,W.sampleRate,W.sampleRate);let n=_h.getChannelData(0);for(let e=0;e<n.length;e++)n[e]=Math.random()*2-1}function bg(){if(!W||hh||!ph||mh===ph||W.currentTime<lg)return;xg(),yg(),ih=W.createGain(),ih.gain.setValueAtTime(1e-4,W.currentTime),ih.gain.exponentialRampToValueAtTime(_g[ph].vol,W.currentTime+(ph===`boss`||ph===`awake`||ph===`downed`||ph===`metal`||ph===`victory`?.3:1.5)),ih.connect(Ym);let e=W.createWaveShaper(),t=W.createBiquadFilter(),n=new Float32Array(1024);for(let e=0;e<n.length;e++){let t=e/512-1;n[e]=Math.tanh(t*6)}e.curve=n,e.oversample=`2x`,t.type=`lowpass`,t.frequency.value=3200,t.Q.value=1.2,ah=W.createGain(),ah.gain.value=1;let r=W.createGain();r.gain.value=.22,ah.connect(e).connect(t).connect(r).connect(ih),oh=W.createBiquadFilter(),oh.type=`lowpass`,oh.frequency.value=600,oh.Q.value=6,oh.connect(ih),mh=ph,uh=0,lh=W.currentTime+.1,vg(),ch=window.setInterval(vg,50)}function xg(){if(ch&&(clearInterval(ch),ch=0,mh=null,W&&ih)){let e=ih;e.gain.cancelScheduledValues(W.currentTime),e.gain.setValueAtTime(e.gain.value,W.currentTime),e.gain.linearRampToValueAtTime(0,W.currentTime+.6),setTimeout(()=>e.disconnect(),1e3)}}function Sg(e){ph=e,e?bg():xg()}function Cg(e){fh=e}var wg=()=>hh;function Tg(){hh=!hh;try{localStorage.setItem(`db.music`,hh?`off`:`on`)}catch{}return hh?xg():ph&&(Zm(),bg()),hh}var Eg=[],Dg=[],Og=null,kg=0,Ag=null,jg=null,Mg={code:`ABCDEFGHJKLMNPQRSTUVWXYZ`,name:`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 `,"chat-input":`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.,'-:() `},Ng=e=>!!Dg[e]&&!Eg[e],Pg=e=>e.getClientRects().length>0&&!e.disabled,Fg=e=>{let t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}};function Ig(e){return e.filter(Pg).flatMap(e=>[...e.querySelectorAll(`button, input`)].filter(Pg).concat(e.matches(`button`)?[e]:[]))}function Lg(e){e.focus({preventScroll:!0}),e.scrollIntoView({block:`nearest`,inline:`nearest`})}function Rg(e,t,n,r){let i=Fg(t),a=null,o=1/0;for(let s of e){if(s===t)continue;let e=Fg(s),c=e.x-i.x,l=e.y-i.y,u=c*n+l*r;if(u<=4)continue;let d=u+Math.abs(c*r-l*n)*2;d<o&&(o=d,a=s)}a&&Lg(a)}function zg(e,t,n){let r=Mg[e.id]??Mg.name,i=e.value;if(n){if(!i)i=r[0];else{let e=r.indexOf(i[i.length-1]);i=i.slice(0,-1)+r[((e<0?0:e+(n>0?1:-1))%r.length+r.length)%r.length]}}else t>0&&i.length<(e.maxLength>0?e.maxLength:99)?i+=r[0]:t<0&&(i=i.slice(0,-1));e.value=i,e.dispatchEvent(new Event(`input`,{bubbles:!0}))}function Bg(){Ag?.classList.remove(`pad-edit`),Ag=null}function Vg(e){jg=e,e.classList.add(`pad-edit`),Og=null,e.value||zg(e,0,1)}var Hg=()=>{jg?.classList.remove(`pad-edit`),jg=null};function Ug(e){let t=e.axes[0]??0,n=e.axes[1]??0,r=+!!Dg[15]-!!Dg[14],i=+!!Dg[13]-!!Dg[12];return!r&&!i&&Math.hypot(t,n)>.5&&(Math.abs(t)>Math.abs(n)?r=Math.sign(t):i=Math.sign(n)),[r,i]}function Wg(e,t){let n=performance.now();return!e&&!t?(Og=null,!1):!Og||Og[0]!==e||Og[1]!==t?(Og=[e,t],kg=n+350,!0):n>=kg&&(kg=n+120,!0)}var Gg=()=>jg!==null;function Kg(e){Eg.length=0,Eg.push(...Dg);let t=[...navigator.getGamepads?.()??[]].find(e=>e?.connected);if(Dg.length=0,t&&t.buttons.forEach((e,t)=>{Dg[t]=e.pressed}),jg&&(!t||document.activeElement!==jg)&&Hg(),jg&&t){let[e,n]=Ug(t);Wg(e,n)&&zg(jg,e,n);let r=jg;Ng(0)?(Hg(),r.form?.requestSubmit()):Ng(1)&&(Hg(),r.value=``,r.blur());return}if(!e||!t){Og=null,e||Bg();return}let[n,r]=Ug(t),i=Dg.some((e,t)=>e&&!Eg[t]);(i||n||r)&&document.body.classList.add(`pad-nav`);let a=Ig(e);if(!a.length)return;let o=document.activeElement;!o||!a.includes(o)?(Bg(),(i||n||r)&&Lg(a.find(e=>e.classList.contains(`big`))??a[0]),Og=null):(Wg(n,r)&&(Ag?zg(Ag,n,r):Rg(a,o,n,r),o=document.activeElement),Ng(0)&&(Ag?Bg():o instanceof HTMLInputElement?(Ag=o,o.classList.add(`pad-edit`),o.value||zg(o,0,1)):o.click()),Ng(1)&&Bg(),Ng(9)&&(Bg(),a.find(e=>e.classList.contains(`big`))?.click()))}addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&(e.movementX||e.movementY)&&document.body.classList.remove(`pad-nav`)});var qg=56,Jg=16,Yg=92,J={mx:0,mz:0,aimX:0,aimZ:0,aiming:!1,atk:!1,abl:!1,ult:!1,use:!1,dirty:!1,roll:!1,pick:-1,castTap:!1,castAim:null,ppick:-1,drinkTap:!1,pot:-1,lastAt:-1e9,held:0},Xg=()=>matchMedia(`(pointer: coarse)`).matches||J.lastAt>0,Zg=()=>J.held>0||performance.now()-J.lastAt<1e3,Qg={spells:{n:0,sel:0,dragging:!1,track:null},pots:{n:0,sel:0,dragging:!1,track:null}},$g=(e,t,n)=>{let r=Qg[e].track;r&&(r.style.transition=n?``:`none`,r.style.transform=`translateX(${t}px)`)},e_=(e,t)=>Math.max(0,Math.min(Qg[e].n-1,t)),t_=(e,t)=>{Qg[e].sel=t,e===`spells`?J.pick=t:J.ppick=t;try{navigator.vibrate?.(8)}catch{}};function n_(e,t,n){let r=Qg[e];r.n=t,r.sel=n,r.dragging||$g(e,-n*Yg,!0);let i=r.track?.parentElement;i?.classList.toggle(`first`,n<=0),i?.classList.toggle(`last`,n>=t-1)}function r_(e){let t=new Map,n={move:e.querySelector(`.stick.move`),aim:e.querySelector(`.stick.aim`)};Qg.spells.track=e.querySelector(`#touch-spells .track`),Qg.pots.track=e.querySelector(`#touch-potstrip .track`);let r=(e,t,r=0,i=0,a=0)=>{let o=n[e],s=o.firstElementChild;o.classList.toggle(`active`,t!==null),o.style.left=t===null?``:`${t}px`,o.style.top=t===null?``:`${r}px`,s.style.transform=`translate(${i}px, ${a}px)`},i=()=>{let n=new Set([...t.values()].flatMap(e=>e.kind===`btn`?[e.el.dataset.btn]:e.kind===`cast`?[`cast`]:[]));J.abl=n.has(`abl`),J.ult=n.has(`ult`),J.use=n.has(`use`),J.dirty=n.has(`dirty`),J.roll=n.has(`roll`);for(let t of e.querySelectorAll(`[data-btn]`))t.classList.toggle(`held`,n.has(t.dataset.btn))};e.addEventListener(`pointerdown`,n=>{J.lastAt=performance.now(),n.pointerType===`touch`&&J.held++,n.preventDefault();try{e.setPointerCapture(n.pointerId)}catch{}let a=n.target,o=a.closest(`[data-strip]`);if(o){let e=o.dataset.strip,r=Qg[e];if(!r.n||[...t.values()].some(t=>t.kind===`strip`&&t.id===e))return;let i=a.closest(`[data-i]`);r.dragging=!0,t.set(n.pointerId,{kind:`strip`,id:e,ox:n.clientX,base:-r.sel*Yg,tapped:i?+i.dataset.i:-1,moved:!1,lx:n.clientX,lt:n.timeStamp,vx:0});return}let s=a.closest(`[data-btn]`);if(s?.dataset.btn===`pot`&&(J.pot=+s.dataset.p),s?.dataset.btn===`drink`&&(J.drinkTap=!0),s?.dataset.btn===`cast`){if([...t.values()].some(e=>e.kind===`cast`))return;t.set(n.pointerId,{kind:`cast`,ox:n.clientX,oy:n.clientY,aimed:!1}),i();return}if(s){t.set(n.pointerId,{kind:`btn`,el:s}),i();return}let c=n.clientX<innerWidth/2?`move`:`aim`;[...t.values()].some(e=>e.kind===c)||(t.set(n.pointerId,{kind:c,ox:n.clientX,oy:n.clientY}),r(c,n.clientX,n.clientY),c===`aim`&&(J.atk=!0))}),e.addEventListener(`pointermove`,e=>{let n=t.get(e.pointerId);if(!n||n.kind===`btn`)return;if(J.lastAt=performance.now(),n.kind===`cast`){let a=e.clientX-n.ox,o=e.clientY-n.oy,s=Math.hypot(a,o);if(!n.aimed&&s<Jg)return;n.aimed||(n.aimed=!0,i()),s>qg&&(a*=qg/s,o*=qg/s),[...t.values()].some(e=>e.kind===`aim`)||r(`aim`,n.ox,n.oy,a,o),J.aiming=!0,J.aimX=a/qg,J.aimZ=o/qg;return}if(n.kind===`strip`){let t=Qg[n.id],r=e.clientX-n.ox;if(Math.abs(r)>8&&(n.moved=!0),!n.moved)return;let i=e.timeStamp-n.lt;i>0&&(n.vx=.7*n.vx+.3*((e.clientX-n.lx)/i)),n.lx=e.clientX,n.lt=e.timeStamp;let a=Math.max(-(t.n-1)*Yg-30,Math.min(30,n.base+r));$g(n.id,a,!1);let o=e_(n.id,Math.round(-a/Yg));o!==t.sel&&t_(n.id,o);return}let a=e.clientX-n.ox,o=e.clientY-n.oy,s=Math.hypot(a,o);s>qg&&(a*=qg/s,o*=qg/s),r(n.kind,n.ox,n.oy,a,o);let c=a/qg,l=o/qg,u=Math.min(1,s/qg);if(n.kind===`move`){let e=u>.15;J.mx=e?c:0,J.mz=e?l:0}else u>.25&&(J.aiming=!0,J.aimX=c,J.aimZ=l)});let a=e=>{e.pointerType===`touch`&&(J.lastAt=performance.now(),J.held=Math.max(0,J.held-1));let n=t.get(e.pointerId);if(n){if(t.delete(e.pointerId),n.kind===`btn`)i();else if(n.kind===`cast`)J.castTap=!0,J.castAim=n.aimed?Math.atan2(J.aimZ,J.aimX):null,n.aimed&&![...t.values()].some(e=>e.kind===`aim`)&&(r(`aim`,null),J.aiming=!1),i();else if(n.kind===`strip`){let t=Qg[n.id];t.dragging=!1;let r;if(!n.moved)n.tapped<0?r=t.sel:n.tapped===t.sel?(r=t.sel,n.id===`spells`?(J.castTap=!0,J.castAim=null):J.drinkTap=!0):r=e_(n.id,n.tapped);else{let t=e.timeStamp-n.lt<80?n.vx*150:0;r=e_(n.id,Math.round(-(n.base+(n.lx-n.ox)+t)/Yg))}r===t.sel?n.id===`spells`?J.pick=r:J.ppick=r:t_(n.id,r),$g(n.id,-r*Yg,!0)}else r(n.kind,null),n.kind===`move`?J.mx=J.mz=0:(J.aiming=!1,J.atk=!1)}};e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,a),e.addEventListener(`contextmenu`,e=>e.preventDefault())}function i_(){J.mx=J.mz=0,J.aiming=J.atk=J.abl=J.ult=J.use=J.dirty=J.roll=!1,J.pick=J.ppick=J.pot=-1,J.castTap=J.drinkTap=!1,J.castAim=null}function a_(){Xg()&&!document.fullscreenElement&&document.documentElement.requestFullscreen?.({navigationUI:`hide`}).then(()=>screen.orientation.lock?.(`landscape`)).catch(()=>{})}var o_=class{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){let e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){let e=[];for(let t of this._parts)e.push(t);return s_(e).buffer}};function s_(e){let t=0;for(let n of e)t+=n.byteLength;let n=new Uint8Array(t),r=0;for(let t of e){let e=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);n.set(e,r),r+=t.byteLength}return n}function c_(e){return new u_(e).unpack()}function l_(e){let t=new d_,n=t.pack(e);return n instanceof Promise?n.then(()=>t.getBuffer()):t.getBuffer()}var u_=class{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){let e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){let e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){let e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){let e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){let e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){let e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){let e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){let e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){let e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);let t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){let t=this.read(e),n=0,r=``,i,a;for(;n<e;)i=t[n],i<160?(a=i,n++):(i^192)<32?(a=(i&31)<<6|t[n+1]&63,n+=2):(i^224)<16?(a=(i&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(i&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),r+=String.fromCodePoint(a);return this.index+=e,r}unpack_array(e){let t=Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){let t={};for(let n=0;n<e;n++){let e=this.unpack();t[e]=this.unpack()}return t}unpack_float(){let e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(n-23)}unpack_double(){let e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,r=(e>>20&2047)-1023,i=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(n===0?1:-1)*i}read(e){let t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw Error(`BinaryPackFailure: read index out of range`)}},d_=class{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e==`string`)this.pack_string(e);else if(typeof e==`number`)Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e==`boolean`)e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e==`object`){if(e===null)this._bufferBuilder.append(192);else{let t=e.constructor;if(e instanceof Array){let t=this.pack_array(e);if(t instanceof Promise)return t.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if(`BYTES_PER_ELEMENT`in e){let t=e;this.pack_bin(new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else if(e instanceof Blob)return e.arrayBuffer().then(e=>{this.pack_bin(new Uint8Array(e)),this._bufferBuilder.flush()});else if(t==Object||t.toString().startsWith(`class`)){let t=this.pack_object(e);if(t instanceof Promise)return t.then(()=>this._bufferBuilder.flush())}else throw Error(`Type "${t.toString()}" not yet supported`)}}else throw Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){let t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw Error(`Invalid length`);this._bufferBuilder.append_buffer(e)}pack_string(e){let t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw Error(`Invalid length`);this._bufferBuilder.append_buffer(t)}pack_array(e){let t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw Error(`Invalid length`);let n=r=>{if(r<t){let t=this.pack(e[r]);return t instanceof Promise?t.then(()=>n(r+1)):n(r+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-0x8000000000000000&&e<=0x8000000000000000)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=0x10000000000000000)this._bufferBuilder.append(207),this.pack_uint64(e);else throw Error(`Invalid integer`)}pack_double(e){let t=0;e<0&&(t=1,e=-e);let n=Math.floor(Math.log(e)/Math.LN2),r=e/2**n-1,i=Math.floor(r*2**52),a=2**32,o=t<<31|n+1023<<20|i/a&1048575,s=i%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(s)}pack_object(e){let t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw Error(`Invalid length`);let r=n=>{if(n<t.length){let i=t[n];if(e.hasOwnProperty(i)){this.pack(i);let t=this.pack(e[i]);if(t instanceof Promise)return t.then(()=>r(n+1))}return r(n+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){let t=e|0;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){let t=e/2**32,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){let t=Math.floor(e/2**32),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new o_,this._textEncoder=new TextEncoder}},f_=!0,p_=!0;function m_(e,t,n){let r=e.match(t);return r&&r.length>=n&&parseFloat(r[n],10)}function h_(e,t,n){if(!e.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,`addEventListener`).writable){v_(`Unable to polyfill events`);return}let r=e.RTCPeerConnection.prototype,i=r.addEventListener;r.addEventListener=function(e,r){if(e!==t)return i.apply(this,arguments);let a=e=>{let t=n(e);t&&(r.handleEvent?r.handleEvent(t):r(t))};return this._eventMap=this._eventMap||{},this._eventMap[t]||(this._eventMap[t]=new Map),this._eventMap[t].set(r,a),i.apply(this,[e,a])};let a=r.removeEventListener;r.removeEventListener=function(e,n){if(e!==t||!this._eventMap||!this._eventMap[t]||!this._eventMap[t].has(n))return a.apply(this,arguments);let r=this._eventMap[t].get(n);return this._eventMap[t].delete(n),this._eventMap[t].size===0&&delete this._eventMap[t],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[e,r])},Object.defineProperty(r,`on`+t,{get(){return this[`_on`+t]},set(e){this[`_on`+t]&&(this.removeEventListener(t,this[`_on`+t]),delete this[`_on`+t]),e&&this.addEventListener(t,this[`_on`+t]=e)},enumerable:!0,configurable:!0})}function g_(e){return typeof e==`boolean`?(f_=e,e?`adapter.js logging disabled`:`adapter.js logging enabled`):Error(`Argument type: `+typeof e+`. Please use a boolean.`)}function __(e){return typeof e==`boolean`?(p_=!e,`adapter.js deprecation warnings `+(e?`disabled`:`enabled`)):Error(`Argument type: `+typeof e+`. Please use a boolean.`)}function v_(){if(typeof window==`object`){if(f_)return;typeof console<`u`&&typeof console.log==`function`&&console.log.apply(console,arguments)}}function y_(e,t){p_&&console.warn(e+` is deprecated, please use `+t+` instead.`)}function b_(e){let t={browser:null,version:null};if(e===void 0||!e.navigator||!e.navigator.userAgent)return t.browser=`Not a browser.`,t;let{navigator:n}=e;if(n.userAgentData&&n.userAgentData.brands){let e=n.userAgentData.brands.find(e=>e.brand===`Chromium`);if(e){let t=parseInt(e.version,10);if(t>=90)return{browser:`chrome`,version:t}}}if(n.mozGetUserMedia)t.browser=`firefox`,t.version=parseInt(m_(n.userAgent,/Firefox\/(\d+)\./,1));else if(n.webkitGetUserMedia||e.isSecureContext===!1&&e.webkitRTCPeerConnection)t.browser=`chrome`,t.version=parseInt(m_(n.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(e.RTCPeerConnection&&n.userAgent.match(/AppleWebKit\/(\d+)\./))t.browser=`safari`,t.version=parseInt(m_(n.userAgent,/AppleWebKit\/(\d+)\./,1)),t.supportsUnifiedPlan=e.RTCRtpTransceiver&&`currentDirection`in e.RTCRtpTransceiver.prototype,t._safariVersion=m_(n.userAgent,/Version\/(\d+(\.?\d+))/,1);else return t.browser=`Not a supported browser.`,t;return t}function x_(e){return Object.prototype.toString.call(e)===`[object Object]`}function S_(e){return x_(e)?Object.keys(e).reduce(function(t,n){let r=x_(e[n]),i=r?S_(e[n]):e[n],a=r&&!Object.keys(i).length;return i===void 0||a?t:Object.assign(t,{[n]:i})},{}):e}function C_(e,t,n){t&&!n.has(t.id)&&(n.set(t.id,t),Object.keys(t).forEach(r=>{r.endsWith(`Id`)?C_(e,e.get(t[r]),n):r.endsWith(`Ids`)&&t[r].forEach(t=>{C_(e,e.get(t),n)})}))}function w_(e,t,n){let r=n?`outbound-rtp`:`inbound-rtp`,i=new Map;if(t===null)return i;let a=[];return e.forEach(e=>{e.type===`track`&&e.trackIdentifier===t.id&&a.push(e)}),a.forEach(t=>{e.forEach(n=>{n.type===r&&n.trackId===t.id&&C_(e,n,i)})}),i}var T_=v_;function E_(e,t){if(t.version>=64)return;let n=e&&e.navigator;if(!n.mediaDevices)return;let r=function(e){if(typeof e!=`object`||e.mandatory||e.optional)return e;let t={};return Object.keys(e).forEach(n=>{if(n===`require`||n===`advanced`||n===`mediaSource`)return;let r=typeof e[n]==`object`?e[n]:{ideal:e[n]};r.exact!==void 0&&typeof r.exact==`number`&&(r.min=r.max=r.exact);let i=function(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):t===`deviceId`?`sourceId`:t};if(r.ideal!==void 0){t.optional=t.optional||[];let e={};typeof r.ideal==`number`?(e[i(`min`,n)]=r.ideal,t.optional.push(e),e={},e[i(`max`,n)]=r.ideal,t.optional.push(e)):(e[i(``,n)]=r.ideal,t.optional.push(e))}r.exact!==void 0&&typeof r.exact!=`number`?(t.mandatory=t.mandatory||{},t.mandatory[i(``,n)]=r.exact):[`min`,`max`].forEach(e=>{r[e]!==void 0&&(t.mandatory=t.mandatory||{},t.mandatory[i(e,n)]=r[e])})}),e.advanced&&(t.optional=(t.optional||[]).concat(e.advanced)),t},i=function(e,i){if(t.version>=61)return i(e);if(e=JSON.parse(JSON.stringify(e)),e&&typeof e.audio==`object`){let t=function(e,t,n){t in e&&!(n in e)&&(e[n]=e[t],delete e[t])};e=JSON.parse(JSON.stringify(e)),t(e.audio,`autoGainControl`,`googAutoGainControl`),t(e.audio,`noiseSuppression`,`googNoiseSuppression`),e.audio=r(e.audio)}if(e&&typeof e.video==`object`){let a=e.video.facingMode;a&&=typeof a==`object`?a:{ideal:a};let o=t.version<66;if(a&&(a.exact===`user`||a.exact===`environment`||a.ideal===`user`||a.ideal===`environment`)&&!(n.mediaDevices.getSupportedConstraints&&n.mediaDevices.getSupportedConstraints().facingMode&&!o)){delete e.video.facingMode;let t;if(a.exact===`environment`||a.ideal===`environment`?t=[`back`,`rear`]:(a.exact===`user`||a.ideal===`user`)&&(t=[`front`]),t)return n.mediaDevices.enumerateDevices().then(n=>{n=n.filter(e=>e.kind===`videoinput`);let o=n.find(e=>t.some(t=>e.label.toLowerCase().includes(t)));return!o&&n.length&&t.includes(`back`)&&(o=n[n.length-1]),o&&(e.video.deviceId=a.exact?{exact:o.deviceId}:{ideal:o.deviceId}),e.video=r(e.video),T_(`chrome: `+JSON.stringify(e)),i(e)})}e.video=r(e.video)}return T_(`chrome: `+JSON.stringify(e)),i(e)},a=function(e){return t.version>=64?e:{name:{PermissionDeniedError:`NotAllowedError`,PermissionDismissedError:`NotAllowedError`,InvalidStateError:`NotAllowedError`,DevicesNotFoundError:`NotFoundError`,ConstraintNotSatisfiedError:`OverconstrainedError`,TrackStartError:`NotReadableError`,MediaDeviceFailedDueToShutdown:`NotAllowedError`,MediaDeviceKillSwitchOn:`NotAllowedError`,TabCaptureError:`AbortError`,ScreenCaptureError:`AbortError`,DeviceCaptureError:`AbortError`}[e.name]||e.name,message:e.message,constraint:e.constraint||e.constraintName,toString(){return this.name+(this.message&&`: `)+this.message}}};if(n.getUserMedia=function(e,t,r){i(e,e=>{n.webkitGetUserMedia(e,t,e=>{r&&r(a(e))})})}.bind(n),n.mediaDevices.getUserMedia){let e=n.mediaDevices.getUserMedia.bind(n.mediaDevices);n.mediaDevices.getUserMedia=function(t){return i(t,t=>e(t).then(e=>{if(t.audio&&!e.getAudioTracks().length||t.video&&!e.getVideoTracks().length)throw e.getTracks().forEach(e=>{e.stop()}),new DOMException(``,`NotFoundError`);return e},e=>Promise.reject(a(e))))}}}var D_=s({fixNegotiationNeeded:()=>F_,shimAddTrackRemoveTrack:()=>N_,shimAddTrackRemoveTrackWithNative:()=>M_,shimGetSendersWithDtmf:()=>A_,shimGetUserMedia:()=>E_,shimMediaStream:()=>O_,shimOnTrack:()=>k_,shimPeerConnection:()=>P_,shimSenderReceiverGetStats:()=>j_});function O_(e){e.MediaStream=e.MediaStream||e.webkitMediaStream}function k_(e,t){if(!(t.version>102)){if(typeof e==`object`&&e.RTCPeerConnection&&!(`ontrack`in e.RTCPeerConnection.prototype)){Object.defineProperty(e.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(e){this._ontrack&&this.removeEventListener(`track`,this._ontrack),this.addEventListener(`track`,this._ontrack=e)},enumerable:!0,configurable:!0});let t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=t=>{t.stream.addEventListener(`addtrack`,n=>{let r;r=e.RTCPeerConnection.prototype.getReceivers?this.getReceivers().find(e=>e.track&&e.track.id===n.track.id):{track:n.track};let i=new Event(`track`);i.track=n.track,i.receiver=r,i.transceiver={receiver:r},i.streams=[t.stream],this.dispatchEvent(i)}),t.stream.getTracks().forEach(n=>{let r;r=e.RTCPeerConnection.prototype.getReceivers?this.getReceivers().find(e=>e.track&&e.track.id===n.id):{track:n};let i=new Event(`track`);i.track=n,i.receiver=r,i.transceiver={receiver:r},i.streams=[t.stream],this.dispatchEvent(i)})},this.addEventListener(`addstream`,this._ontrackpoly)),t.apply(this,arguments)}}else h_(e,`track`,e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}}function A_(e){if(typeof e==`object`&&e.RTCPeerConnection&&!(`getSenders`in e.RTCPeerConnection.prototype)&&`createDTMFSender`in e.RTCPeerConnection.prototype){let t=function(e,t){return{track:t,get dtmf(){return this._dtmf===void 0&&(this._dtmf=t.kind===`audio`?e.createDTMFSender(t):null),this._dtmf},_pc:e}};if(!e.RTCPeerConnection.prototype.getSenders){e.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};let n=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,r){let i=n.apply(this,arguments);return i||(i=t(this,e),this._senders.push(i)),i};let r=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){r.apply(this,arguments);let t=this._senders.indexOf(e);t!==-1&&this._senders.splice(t,1)}}let n=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){this._senders=this._senders||[],n.apply(this,[e]),e.getTracks().forEach(e=>{this._senders.push(t(this,e))})};let r=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){this._senders=this._senders||[],r.apply(this,[e]),e.getTracks().forEach(e=>{let t=this._senders.find(t=>t.track===e);t&&this._senders.splice(this._senders.indexOf(t),1)})}}else if(typeof e==`object`&&e.RTCPeerConnection&&`getSenders`in e.RTCPeerConnection.prototype&&`createDTMFSender`in e.RTCPeerConnection.prototype&&e.RTCRtpSender&&!(`dtmf`in e.RTCRtpSender.prototype)){let t=e.RTCPeerConnection.prototype.getSenders;e.RTCPeerConnection.prototype.getSenders=function(){let e=t.apply(this,[]);return e.forEach(e=>e._pc=this),e},Object.defineProperty(e.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this._dtmf=this.track.kind===`audio`?this._pc.createDTMFSender(this.track):null),this._dtmf}})}}function j_(e,t){if(t.version>=67||!(typeof e==`object`&&e.RTCPeerConnection&&e.RTCRtpSender&&e.RTCRtpReceiver))return;if(!(`getStats`in e.RTCRtpSender.prototype)){let t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function(){let e=t.apply(this,[]);return e.forEach(e=>e._pc=this),e});let n=e.RTCPeerConnection.prototype.addTrack;n&&(e.RTCPeerConnection.prototype.addTrack=function(){let e=n.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){let e=this;return this._pc.getStats().then(t=>w_(t,e.track,!0))}}if(!(`getStats`in e.RTCRtpReceiver.prototype)){let t=e.RTCPeerConnection.prototype.getReceivers;t&&(e.RTCPeerConnection.prototype.getReceivers=function(){let e=t.apply(this,[]);return e.forEach(e=>e._pc=this),e}),h_(e,`track`,e=>(e.receiver._pc=e.srcElement,e)),e.RTCRtpReceiver.prototype.getStats=function(){let e=this;return this._pc.getStats().then(t=>w_(t,e.track,!1))}}if(!(`getStats`in e.RTCRtpSender.prototype&&`getStats`in e.RTCRtpReceiver.prototype))return;let n=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof e.MediaStreamTrack){let e=arguments[0],t,n,r;return this.getSenders().forEach(n=>{n.track===e&&(t?r=!0:t=n)}),this.getReceivers().forEach(t=>(t.track===e&&(n?r=!0:n=t),t.track===e)),r||t&&n?Promise.reject(new DOMException(`There are more than one sender or receiver for the track.`,`InvalidAccessError`)):t?t.getStats():n?n.getStats():Promise.reject(new DOMException(`There is no sender or receiver for the track.`,`InvalidAccessError`))}return n.apply(this,arguments)}}function M_(e){e.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(e=>this._shimmedLocalStreams[e][0])};let t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function(e,n){if(!n)return t.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};let r=t.apply(this,arguments);return this._shimmedLocalStreams[n.id]?this._shimmedLocalStreams[n.id].indexOf(r)===-1&&this._shimmedLocalStreams[n.id].push(r):this._shimmedLocalStreams[n.id]=[n,r],r};let n=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(e){this._shimmedLocalStreams=this._shimmedLocalStreams||{},e.getTracks().forEach(e=>{if(this.getSenders().find(t=>t.track===e))throw new DOMException(`Track already exists.`,`InvalidAccessError`)});let t=this.getSenders();n.apply(this,arguments);let r=this.getSenders().filter(e=>t.indexOf(e)===-1);this._shimmedLocalStreams[e.id]=[e].concat(r)};let r=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[e.id],r.apply(this,arguments)};let i=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},e&&Object.keys(this._shimmedLocalStreams).forEach(t=>{let n=this._shimmedLocalStreams[t].indexOf(e);n!==-1&&this._shimmedLocalStreams[t].splice(n,1),this._shimmedLocalStreams[t].length===1&&delete this._shimmedLocalStreams[t]}),i.apply(this,arguments)}}function N_(e,t){if(!e.RTCPeerConnection)return;if(e.RTCPeerConnection.prototype.addTrack&&t.version>=65)return M_(e);let n=e.RTCPeerConnection.prototype.getLocalStreams;e.RTCPeerConnection.prototype.getLocalStreams=function(){let e=n.apply(this);return this._reverseStreams=this._reverseStreams||{},e.map(e=>this._reverseStreams[e.id])};let r=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function(t){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},t.getTracks().forEach(e=>{if(this.getSenders().find(t=>t.track===e))throw new DOMException(`Track already exists.`,`InvalidAccessError`)}),!this._reverseStreams[t.id]){let n=new e.MediaStream(t.getTracks());this._streams[t.id]=n,this._reverseStreams[n.id]=t,t=n}r.apply(this,[t])};let i=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function(e){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[e.id]||e]),delete this._reverseStreams[this._streams[e.id]?this._streams[e.id].id:e.id],delete this._streams[e.id]},e.RTCPeerConnection.prototype.addTrack=function(t,n){if(this.signalingState===`closed`)throw new DOMException(`The RTCPeerConnection's signalingState is 'closed'.`,`InvalidStateError`);let r=[].slice.call(arguments,1);if(r.length!==1||!r[0].getTracks().find(e=>e===t))throw new DOMException(`The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.`,`NotSupportedError`);if(this.getSenders().find(e=>e.track===t))throw new DOMException(`Track already exists.`,`InvalidAccessError`);this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};let i=this._streams[n.id];if(i)i.addTrack(t),Promise.resolve().then(()=>{this.dispatchEvent(new Event(`negotiationneeded`))});else{let r=new e.MediaStream([t]);this._streams[n.id]=r,this._reverseStreams[r.id]=n,this.addStream(r)}return this.getSenders().find(e=>e.track===t)};function a(e,t){let n=t.sdp;return Object.keys(e._reverseStreams||[]).forEach(t=>{let r=e._reverseStreams[t],i=e._streams[r.id];n=n.replace(new RegExp(i.id,`g`),r.id)}),new RTCSessionDescription({type:t.type,sdp:n})}function o(e,t){let n=t.sdp;return Object.keys(e._reverseStreams||[]).forEach(t=>{let r=e._reverseStreams[t],i=e._streams[r.id];n=n.replace(new RegExp(r.id,`g`),i.id)}),new RTCSessionDescription({type:t.type,sdp:n})}[`createOffer`,`createAnswer`].forEach(function(t){let n=e.RTCPeerConnection.prototype[t],r={[t](){let e=arguments;return arguments.length&&typeof arguments[0]==`function`?n.apply(this,[t=>{let n=a(this,t);e[0].apply(null,[n])},t=>{e[1]&&e[1].apply(null,t)},arguments[2]]):n.apply(this,arguments).then(e=>a(this,e))}};e.RTCPeerConnection.prototype[t]=r[t]});let s=e.RTCPeerConnection.prototype.setLocalDescription;e.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type||(arguments[0]=o(this,arguments[0])),s.apply(this,arguments)};let c=Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype,`localDescription`);Object.defineProperty(e.RTCPeerConnection.prototype,"localDescription",{get(){let e=c.get.apply(this);return e.type===``?e:a(this,e)}}),e.RTCPeerConnection.prototype.removeTrack=function(e){if(this.signalingState===`closed`)throw new DOMException(`The RTCPeerConnection's signalingState is 'closed'.`,`InvalidStateError`);if(!e._pc)throw new DOMException(`Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.`,`TypeError`);if(e._pc!==this)throw new DOMException(`Sender was not created by this connection.`,`InvalidAccessError`);this._streams=this._streams||{};let t;Object.keys(this._streams).forEach(n=>{this._streams[n].getTracks().find(t=>e.track===t)&&(t=this._streams[n])}),t&&(t.getTracks().length===1?this.removeStream(this._reverseStreams[t.id]):t.removeTrack(e.track),this.dispatchEvent(new Event(`negotiationneeded`)))}}function P_(e,t){!e.RTCPeerConnection&&e.webkitRTCPeerConnection&&(e.RTCPeerConnection=e.webkitRTCPeerConnection),e.RTCPeerConnection&&t.version<53&&[`setLocalDescription`,`setRemoteDescription`,`addIceCandidate`].forEach(function(t){let n=e.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t===`addIceCandidate`?e.RTCIceCandidate:e.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};e.RTCPeerConnection.prototype[t]=r[t]})}function F_(e,t){t.version>102||h_(e,`negotiationneeded`,e=>{let n=e.target;if(!((t.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics===`plan-b`)&&n.signalingState!==`stable`))return e})}function I_(e,t){let n=e&&e.navigator;if(!n.mediaDevices)return;let r=e&&e.MediaStreamTrack;if(n.getUserMedia=function(e,t,r){y_(`navigator.getUserMedia`,`navigator.mediaDevices.getUserMedia`),n.mediaDevices.getUserMedia(e).then(t,r)},!(t.version>55&&`autoGainControl`in n.mediaDevices.getSupportedConstraints())){let e=function(e,t,n){t in e&&!(n in e)&&(e[n]=e[t],delete e[t])},t=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(n){return typeof n==`object`&&typeof n.audio==`object`&&(n=JSON.parse(JSON.stringify(n)),e(n.audio,`autoGainControl`,`mozAutoGainControl`),e(n.audio,`noiseSuppression`,`mozNoiseSuppression`)),t(n)},r&&r.prototype.getSettings){let t=r.prototype.getSettings;r.prototype.getSettings=function(){let n=t.apply(this,arguments);return e(n,`mozAutoGainControl`,`autoGainControl`),e(n,`mozNoiseSuppression`,`noiseSuppression`),n}}if(r&&r.prototype.applyConstraints){let t=r.prototype.applyConstraints;r.prototype.applyConstraints=function(n){return this.kind===`audio`&&typeof n==`object`&&(n=JSON.parse(JSON.stringify(n)),e(n,`autoGainControl`,`mozAutoGainControl`),e(n,`noiseSuppression`,`mozNoiseSuppression`)),t.apply(this,[n])}}}}function L_(e,t){e.navigator.mediaDevices&&(e.navigator.mediaDevices&&`getDisplayMedia`in e.navigator.mediaDevices||(e.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){let e=new DOMException(`getDisplayMedia without video constraints is undefined`);return e.name=`NotFoundError`,e.code=8,Promise.reject(e)}return n.video===!0?n.video={mediaSource:t}:n.video.mediaSource=t,e.navigator.mediaDevices.getUserMedia(n)}))}var R_=s({shimAddTransceiver:()=>K_,shimCreateAnswer:()=>Y_,shimCreateOffer:()=>J_,shimGetDisplayMedia:()=>L_,shimGetParameters:()=>q_,shimGetStats:()=>V_,shimGetUserMedia:()=>I_,shimOnTrack:()=>z_,shimPeerConnection:()=>B_,shimRTCDataChannel:()=>G_,shimReceiverGetStats:()=>U_,shimRemoveStream:()=>W_,shimSenderGetStats:()=>H_});function z_(e){typeof e==`object`&&e.RTCTrackEvent&&`receiver`in e.RTCTrackEvent.prototype&&!(`transceiver`in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function B_(e,t){typeof e==`object`&&(e.RTCPeerConnection||e.mozRTCPeerConnection)&&(!e.RTCPeerConnection&&e.mozRTCPeerConnection&&(e.RTCPeerConnection=e.mozRTCPeerConnection),t.version<53&&[`setLocalDescription`,`setRemoteDescription`,`addIceCandidate`].forEach(function(t){let n=e.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t===`addIceCandidate`?e.RTCIceCandidate:e.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};e.RTCPeerConnection.prototype[t]=r[t]}))}function V_(e,t){if(typeof e!=`object`||!(e.RTCPeerConnection||e.mozRTCPeerConnection)||t.version>=151)return;let n={inboundrtp:`inbound-rtp`,outboundrtp:`outbound-rtp`,candidatepair:`candidate-pair`,localcandidate:`local-candidate`,remotecandidate:`remote-candidate`},r=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function(){let[e,i,a]=arguments;return this.signalingState===`closed`?Promise.resolve(new Map):r.apply(this,[e||null]).then(e=>{if(t.version<53&&!i)try{e.forEach(e=>{e.type=n[e.type]||e.type})}catch(t){if(t.name!==`TypeError`)throw t;e.forEach((t,r)=>{e.set(r,Object.assign({},t,{type:n[t.type]||t.type}))})}return e}).then(i,a)}}function H_(e){if(!(typeof e==`object`&&e.RTCPeerConnection&&e.RTCRtpSender)||e.RTCRtpSender&&`getStats`in e.RTCRtpSender.prototype)return;let t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function(){let e=t.apply(this,[]);return e.forEach(e=>e._pc=this),e});let n=e.RTCPeerConnection.prototype.addTrack;n&&(e.RTCPeerConnection.prototype.addTrack=function(){let e=n.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function U_(e){if(!(typeof e==`object`&&e.RTCPeerConnection&&e.RTCRtpSender)||e.RTCRtpSender&&`getStats`in e.RTCRtpReceiver.prototype)return;let t=e.RTCPeerConnection.prototype.getReceivers;t&&(e.RTCPeerConnection.prototype.getReceivers=function(){let e=t.apply(this,[]);return e.forEach(e=>e._pc=this),e}),h_(e,`track`,e=>(e.receiver._pc=e.srcElement,e)),e.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function W_(e){!e.RTCPeerConnection||`removeStream`in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){y_(`removeStream`,`removeTrack`),this.getSenders().forEach(t=>{t.track&&e.getTracks().includes(t.track)&&this.removeTrack(t)})})}function G_(e){e.DataChannel&&!e.RTCDataChannel&&(e.RTCDataChannel=e.DataChannel)}function K_(e,t){if(!(typeof e==`object`&&e.RTCPeerConnection)||t.version>=110)return;let n=e.RTCPeerConnection.prototype.addTransceiver;n&&(e.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let e=arguments[1]&&arguments[1].sendEncodings;e===void 0&&(e=[]),e=[...e];let t=e.length>0;t&&e.forEach(e=>{if(`rid`in e&&!/^[a-z0-9]{0,16}$/i.test(e.rid))throw TypeError(`Invalid RID value provided.`);if(`scaleResolutionDownBy`in e&&!(parseFloat(e.scaleResolutionDownBy)>=1))throw RangeError(`scale_resolution_down_by must be >= 1.0`);if(`maxFramerate`in e&&!(parseFloat(e.maxFramerate)>=0))throw RangeError(`max_framerate must be >= 0.0`)});let r=n.apply(this,arguments);if(t){let{sender:t}=r,n=t.getParameters();(!(`encodings`in n)||n.encodings.length===1&&Object.keys(n.encodings[0]).length===0)&&(n.encodings=e,t.sendEncodings=e,this.setParametersPromises.push(t.setParameters(n).then(()=>{delete t.sendEncodings}).catch(()=>{delete t.sendEncodings})))}return r})}function q_(e,t){if(!(typeof e==`object`&&e.RTCRtpSender)||t.version>=110)return;let n=e.RTCRtpSender.prototype.getParameters;n&&(e.RTCRtpSender.prototype.getParameters=function(){let e=n.apply(this,arguments);return`encodings`in e||(e.encodings=[].concat(this.sendEncodings||[{}])),e})}function J_(e,t){if(!(typeof e==`object`&&e.RTCPeerConnection)||t.version>=110)return;let n=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>n.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):n.apply(this,arguments)}}function Y_(e,t){if(!(typeof e==`object`&&e.RTCPeerConnection)||t.version>=110)return;let n=e.RTCPeerConnection.prototype.createAnswer;e.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>n.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):n.apply(this,arguments)}}var X_=s({shimAudioContext:()=>av,shimCallbacksAPI:()=>$_,shimConstraints:()=>tv,shimCreateOfferLegacy:()=>iv,shimGetUserMedia:()=>ev,shimLocalStreamsAPI:()=>Z_,shimRTCIceServerUrls:()=>nv,shimRemoteStreamsAPI:()=>Q_,shimTrackEventTransceiver:()=>rv});function Z_(e){if(typeof e==`object`&&e.RTCPeerConnection){if(`getLocalStreams`in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||=[],this._localStreams}),!(`addStream`in e.RTCPeerConnection.prototype)){let t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addStream=function(e){this._localStreams||=[],this._localStreams.includes(e)||this._localStreams.push(e),e.getAudioTracks().forEach(n=>t.call(this,n,e)),e.getVideoTracks().forEach(n=>t.call(this,n,e))},e.RTCPeerConnection.prototype.addTrack=function(e,...n){return n&&n.forEach(e=>{this._localStreams?this._localStreams.includes(e)||this._localStreams.push(e):this._localStreams=[e]}),t.apply(this,arguments)}}`removeStream`in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){this._localStreams||=[];let t=this._localStreams.indexOf(e);if(t===-1)return;this._localStreams.splice(t,1);let n=e.getTracks();this.getSenders().forEach(e=>{n.includes(e.track)&&this.removeTrack(e)})})}}function Q_(e){if(typeof e==`object`&&e.RTCPeerConnection&&(`getRemoteStreams`in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!(`onaddstream`in e.RTCPeerConnection.prototype))){Object.defineProperty(e.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(e){this._onaddstream&&(this.removeEventListener(`addstream`,this._onaddstream),this.removeEventListener(`track`,this._onaddstreampoly)),this.addEventListener(`addstream`,this._onaddstream=e),this.addEventListener(`track`,this._onaddstreampoly=e=>{e.streams.forEach(e=>{if(this._remoteStreams||=[],this._remoteStreams.includes(e))return;this._remoteStreams.push(e);let t=new Event(`addstream`);t.stream=e,this.dispatchEvent(t)})})}});let t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){let e=this;return this._onaddstreampoly||this.addEventListener(`track`,this._onaddstreampoly=function(t){t.streams.forEach(t=>{if(e._remoteStreams||=[],e._remoteStreams.indexOf(t)>=0)return;e._remoteStreams.push(t);let n=new Event(`addstream`);n.stream=t,e.dispatchEvent(n)})}),t.apply(e,arguments)}}}function $_(e){if(typeof e!=`object`||!e.RTCPeerConnection)return;let t=e.RTCPeerConnection.prototype,n=t.createOffer,r=t.createAnswer,i=t.setLocalDescription,a=t.setRemoteDescription,o=t.addIceCandidate;t.createOffer=function(e,t){let r=arguments.length>=2?arguments[2]:arguments[0],i=n.apply(this,[r]);return t?(i.then(e,t),Promise.resolve()):i},t.createAnswer=function(e,t){let n=arguments.length>=2?arguments[2]:arguments[0],i=r.apply(this,[n]);return t?(i.then(e,t),Promise.resolve()):i};let s=function(e,t,n){let r=i.apply(this,[e]);return n?(r.then(t,n),Promise.resolve()):r};t.setLocalDescription=s,s=function(e,t,n){let r=a.apply(this,[e]);return n?(r.then(t,n),Promise.resolve()):r},t.setRemoteDescription=s,s=function(e,t,n){let r=o.apply(this,[e]);return n?(r.then(t,n),Promise.resolve()):r},t.addIceCandidate=s}function ev(e){let t=e&&e.navigator;if(t.mediaDevices&&t.mediaDevices.getUserMedia){let e=t.mediaDevices,n=e.getUserMedia.bind(e);t.mediaDevices.getUserMedia=e=>n(tv(e))}!t.getUserMedia&&t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=function(e,n,r){t.mediaDevices.getUserMedia(e).then(n,r)}.bind(t))}function tv(e){return e&&e.video!==void 0?Object.assign({},e,{video:S_(e.video)}):e}function nv(e){if(!e.RTCPeerConnection)return;let t=e.RTCPeerConnection;e.RTCPeerConnection=function(e,n){if(e&&e.iceServers){let t=[];for(let n=0;n<e.iceServers.length;n++){let r=e.iceServers[n];r.urls===void 0&&r.url?(y_(`RTCIceServer.url`,`RTCIceServer.urls`),r=JSON.parse(JSON.stringify(r)),r.urls=r.url,delete r.url,t.push(r)):t.push(e.iceServers[n])}e.iceServers=t}return new t(e,n)},e.RTCPeerConnection.prototype=t.prototype,`generateCertificate`in t&&Object.defineProperty(e.RTCPeerConnection,"generateCertificate",{get(){return t.generateCertificate}})}function rv(e){typeof e==`object`&&e.RTCTrackEvent&&`receiver`in e.RTCTrackEvent.prototype&&!(`transceiver`in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function iv(e){let t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(e){if(e){e.offerToReceiveAudio!==void 0&&(e.offerToReceiveAudio=!!e.offerToReceiveAudio);let t=this.getTransceivers().find(e=>e.receiver.track.kind===`audio`);e.offerToReceiveAudio===!1&&t?t.direction===`sendrecv`?t.setDirection?t.setDirection(`sendonly`):t.direction=`sendonly`:t.direction===`recvonly`&&(t.setDirection?t.setDirection(`inactive`):t.direction=`inactive`):e.offerToReceiveAudio===!0&&!t&&this.addTransceiver(`audio`,{direction:`recvonly`}),e.offerToReceiveVideo!==void 0&&(e.offerToReceiveVideo=!!e.offerToReceiveVideo);let n=this.getTransceivers().find(e=>e.receiver.track.kind===`video`);e.offerToReceiveVideo===!1&&n?n.direction===`sendrecv`?n.setDirection?n.setDirection(`sendonly`):n.direction=`sendonly`:n.direction===`recvonly`&&(n.setDirection?n.setDirection(`inactive`):n.direction=`inactive`):e.offerToReceiveVideo===!0&&!n&&this.addTransceiver(`video`,{direction:`recvonly`})}return t.apply(this,arguments)}}function av(e){typeof e!=`object`||e.AudioContext||(e.AudioContext=e.webkitAudioContext)}var ov=o(((e,t)=>{var n={};n.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},n.localCName=n.generateIdentifier(),n.splitLines=function(e){return e.trim().split(`
`).map(e=>e.trim())},n.splitSections=function(e){return e.split(`
m=`).map((e,t)=>(t>0?`m=`+e:e).trim()+`\r
`)},n.getDescription=function(e){let t=n.splitSections(e);return t&&t[0]},n.getMediaSections=function(e){let t=n.splitSections(e);return t.shift(),t},n.matchPrefix=function(e,t){return n.splitLines(e).filter(e=>e.indexOf(t)===0)},n.parseCandidate=function(e){let t;t=e.indexOf(`a=candidate:`)===0?e.substring(12).split(` `):e.substring(10).split(` `);let n={foundation:t[0],component:{1:`rtp`,2:`rtcp`}[t[1]]||t[1],protocol:t[2].toLowerCase(),priority:parseInt(t[3],10),ip:t[4],address:t[4],port:parseInt(t[5],10),type:t[7]};for(let e=8;e<t.length;e+=2)switch(t[e]){case`raddr`:n.relatedAddress=t[e+1];break;case`rport`:n.relatedPort=parseInt(t[e+1],10);break;case`tcptype`:n.tcpType=t[e+1];break;case`ufrag`:n.ufrag=t[e+1],n.usernameFragment=t[e+1];break;default:n[t[e]]===void 0&&(n[t[e]]=t[e+1])}return n},n.writeCandidate=function(e){let t=[];t.push(e.foundation);let n=e.component;n===`rtp`?t.push(1):n===`rtcp`?t.push(2):t.push(n),t.push(e.protocol.toUpperCase()),t.push(e.priority),t.push(e.address||e.ip),t.push(e.port);let r=e.type;return t.push(`typ`),t.push(r),r!==`host`&&e.relatedAddress&&e.relatedPort!==void 0&&(t.push(`raddr`),t.push(e.relatedAddress),t.push(`rport`),t.push(e.relatedPort)),e.tcpType&&e.protocol.toLowerCase()===`tcp`&&(t.push(`tcptype`),t.push(e.tcpType)),(e.usernameFragment||e.ufrag)&&(t.push(`ufrag`),t.push(e.usernameFragment||e.ufrag)),`candidate:`+t.join(` `)},n.parseIceOptions=function(e){return e.substring(14).split(` `)},n.parseRtpMap=function(e){let t=e.substring(9).split(` `),n={payloadType:parseInt(t.shift(),10)};return t=t[0].split(`/`),n.name=t[0],n.clockRate=parseInt(t[1],10),n.channels=t.length===3?parseInt(t[2],10):1,n.numChannels=n.channels,n},n.writeRtpMap=function(e){let t=e.payloadType;e.preferredPayloadType!==void 0&&(t=e.preferredPayloadType);let n=e.channels||e.numChannels||1;return`a=rtpmap:`+t+` `+e.name+`/`+e.clockRate+(n===1?``:`/`+n)+`\r
`},n.parseExtmap=function(e){let t=e.substring(9).split(` `);return{id:parseInt(t[0],10),direction:t[0].indexOf(`/`)>0?t[0].split(`/`)[1]:`sendrecv`,uri:t[1],attributes:t.slice(2).join(` `)}},n.writeExtmap=function(e){return`a=extmap:`+(e.id||e.preferredId)+(e.direction&&e.direction!==`sendrecv`?`/`+e.direction:``)+` `+e.uri+(e.attributes?` `+e.attributes:``)+`\r
`},n.parseFmtp=function(e){let t={},n,r=e.substring(e.indexOf(` `)+1).split(`;`);for(let e=0;e<r.length;e++)n=r[e].trim().split(`=`),t[n[0].trim()]=n[1];return t},n.writeFmtp=function(e){let t=``,n=e.payloadType;if(e.preferredPayloadType!==void 0&&(n=e.preferredPayloadType),e.parameters&&Object.keys(e.parameters).length){let r=[];Object.keys(e.parameters).forEach(t=>{e.parameters[t]===void 0?r.push(t):r.push(t+`=`+e.parameters[t])}),t+=`a=fmtp:`+n+` `+r.join(`;`)+`\r
`}return t},n.parseRtcpFb=function(e){let t=e.substring(e.indexOf(` `)+1).split(` `);return{type:t.shift(),parameter:t.join(` `)}},n.writeRtcpFb=function(e){let t=``,n=e.payloadType;return e.preferredPayloadType!==void 0&&(n=e.preferredPayloadType),e.rtcpFeedback&&e.rtcpFeedback.length&&e.rtcpFeedback.forEach(e=>{t+=`a=rtcp-fb:`+n+` `+e.type+(e.parameter&&e.parameter.length?` `+e.parameter:``)+`\r
`}),t},n.parseSsrcMedia=function(e){let t=e.indexOf(` `),n={ssrc:parseInt(e.substring(7,t),10)},r=e.indexOf(`:`,t);return r>-1?(n.attribute=e.substring(t+1,r),n.value=e.substring(r+1)):n.attribute=e.substring(t+1),n},n.parseSsrcGroup=function(e){let t=e.substring(13).split(` `);return{semantics:t.shift(),ssrcs:t.map(e=>parseInt(e,10))}},n.getMid=function(e){let t=n.matchPrefix(e,`a=mid:`)[0];if(t)return t.substring(6)},n.parseFingerprint=function(e){let t=e.substring(14).split(` `);return{algorithm:t[0].toLowerCase(),value:t[1].toUpperCase()}},n.getDtlsParameters=function(e,t){return{role:`auto`,fingerprints:n.matchPrefix(e+t,`a=fingerprint:`).map(n.parseFingerprint)}},n.writeDtlsParameters=function(e,t){let n=`a=setup:`+t+`\r
`;return e.fingerprints.forEach(e=>{n+=`a=fingerprint:`+e.algorithm+` `+e.value+`\r
`}),n},n.parseCryptoLine=function(e){let t=e.substring(9).split(` `);return{tag:parseInt(t[0],10),cryptoSuite:t[1],keyParams:t[2],sessionParams:t.slice(3)}},n.writeCryptoLine=function(e){return`a=crypto:`+e.tag+` `+e.cryptoSuite+` `+(typeof e.keyParams==`object`?n.writeCryptoKeyParams(e.keyParams):e.keyParams)+(e.sessionParams?` `+e.sessionParams.join(` `):``)+`\r
`},n.parseCryptoKeyParams=function(e){if(e.indexOf(`inline:`)!==0)return null;let t=e.substring(7).split(`|`);return{keyMethod:`inline`,keySalt:t[0],lifeTime:t[1],mkiValue:t[2]?t[2].split(`:`)[0]:void 0,mkiLength:t[2]?t[2].split(`:`)[1]:void 0}},n.writeCryptoKeyParams=function(e){return e.keyMethod+`:`+e.keySalt+(e.lifeTime?`|`+e.lifeTime:``)+(e.mkiValue&&e.mkiLength?`|`+e.mkiValue+`:`+e.mkiLength:``)},n.getCryptoParameters=function(e,t){return n.matchPrefix(e+t,`a=crypto:`).map(n.parseCryptoLine)},n.getIceParameters=function(e,t){let r=n.matchPrefix(e+t,`a=ice-ufrag:`)[0],i=n.matchPrefix(e+t,`a=ice-pwd:`)[0];return r&&i?{usernameFragment:r.substring(12),password:i.substring(10)}:null},n.writeIceParameters=function(e){let t=`a=ice-ufrag:`+e.usernameFragment+`\r
a=ice-pwd:`+e.password+`\r
`;return e.iceLite&&(t+=`a=ice-lite\r
`),t},n.parseRtpParameters=function(e){let t={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=n.splitLines(e)[0].split(` `);t.profile=r[2];for(let i=3;i<r.length;i++){let a=r[i],o=n.matchPrefix(e,`a=rtpmap:`+a+` `)[0];if(o){let r=n.parseRtpMap(o),i=n.matchPrefix(e,`a=fmtp:`+a+` `);switch(r.parameters=i.length?n.parseFmtp(i[0]):{},r.rtcpFeedback=n.matchPrefix(e,`a=rtcp-fb:`+a+` `).map(n.parseRtcpFb),t.codecs.push(r),r.name.toUpperCase()){case`RED`:case`ULPFEC`:t.fecMechanisms.push(r.name.toUpperCase())}}}n.matchPrefix(e,`a=extmap:`).forEach(e=>{t.headerExtensions.push(n.parseExtmap(e))});let i=n.matchPrefix(e,`a=rtcp-fb:* `).map(n.parseRtcpFb);return t.codecs.forEach(e=>{i.forEach(t=>{e.rtcpFeedback.find(e=>e.type===t.type&&e.parameter===t.parameter)||e.rtcpFeedback.push(t)})}),t},n.writeRtpDescription=function(e,t){let r=``;r+=`m=`+e+` `,r+=t.codecs.length>0?`9`:`0`,r+=` `+(t.profile||`UDP/TLS/RTP/SAVPF`)+` `,r+=t.codecs.map(e=>e.preferredPayloadType===void 0?e.payloadType:e.preferredPayloadType).join(` `)+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,t.codecs.forEach(e=>{r+=n.writeRtpMap(e),r+=n.writeFmtp(e),r+=n.writeRtcpFb(e)});let i=0;return t.codecs.forEach(e=>{e.maxptime>i&&(i=e.maxptime)}),i>0&&(r+=`a=maxptime:`+i+`\r
`),t.headerExtensions&&t.headerExtensions.forEach(e=>{r+=n.writeExtmap(e)}),r},n.parseRtpEncodingParameters=function(e){let t=[],r=n.parseRtpParameters(e),i=r.fecMechanisms.indexOf(`RED`)!==-1,a=r.fecMechanisms.indexOf(`ULPFEC`)!==-1,o=n.matchPrefix(e,`a=ssrc:`).map(e=>n.parseSsrcMedia(e)).filter(e=>e.attribute===`cname`),s=o.length>0&&o[0].ssrc,c,l=n.matchPrefix(e,`a=ssrc-group:FID`).map(e=>e.substring(17).split(` `).map(e=>parseInt(e,10)));l.length>0&&l[0].length>1&&l[0][0]===s&&(c=l[0][1]),r.codecs.forEach(e=>{if(e.name.toUpperCase()===`RTX`&&e.parameters.apt){let n={ssrc:s,codecPayloadType:parseInt(e.parameters.apt,10)};s&&c&&(n.rtx={ssrc:c}),t.push(n),i&&(n=JSON.parse(JSON.stringify(n)),n.fec={ssrc:s,mechanism:a?`red+ulpfec`:`red`},t.push(n))}}),t.length===0&&s&&t.push({ssrc:s});let u=n.matchPrefix(e,`b=`);return u.length&&(u=u[0].indexOf(`b=TIAS:`)===0?parseInt(u[0].substring(7),10):u[0].indexOf(`b=AS:`)===0?parseInt(u[0].substring(5),10)*1e3*.95-16e3:void 0,t.forEach(e=>{e.maxBitrate=u})),t},n.parseRtcpParameters=function(e){let t={},r=n.matchPrefix(e,`a=ssrc:`).map(e=>n.parseSsrcMedia(e)).filter(e=>e.attribute===`cname`)[0];r&&(t.cname=r.value,t.ssrc=r.ssrc);let i=n.matchPrefix(e,`a=rtcp-rsize`);return t.reducedSize=i.length>0,t.compound=i.length===0,t.mux=n.matchPrefix(e,`a=rtcp-mux`).length>0,t},n.writeRtcpParameters=function(e){let t=``;return e.reducedSize&&(t+=`a=rtcp-rsize\r
`),e.mux&&(t+=`a=rtcp-mux\r
`),e.ssrc!==void 0&&e.cname&&(t+=`a=ssrc:`+e.ssrc+` cname:`+e.cname+`\r
`),t},n.parseMsid=function(e){let t,r=n.matchPrefix(e,`a=msid:`);if(r.length===1)return t=r[0].substring(7).split(` `),{stream:t[0],track:t[1]};let i=n.matchPrefix(e,`a=ssrc:`).map(e=>n.parseSsrcMedia(e)).filter(e=>e.attribute===`msid`);if(i.length>0)return t=i[0].value.split(` `),{stream:t[0],track:t[1]}},n.parseSctpDescription=function(e){let t=n.parseMLine(e),r=n.matchPrefix(e,`a=max-message-size:`),i;r.length>0&&(i=parseInt(r[0].substring(19),10)),isNaN(i)&&(i=65536);let a=n.matchPrefix(e,`a=sctp-port:`);if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:t.fmt,maxMessageSize:i};let o=n.matchPrefix(e,`a=sctpmap:`);if(o.length>0){let e=o[0].substring(10).split(` `);return{port:parseInt(e[0],10),protocol:e[1],maxMessageSize:i}}},n.writeSctpDescription=function(e,t){let n=[];return n=e.protocol===`DTLS/SCTP`?[`m=`+e.kind+` 9 `+e.protocol+` `+t.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,`a=sctpmap:`+t.port+` `+t.protocol+` 65535\r
`]:[`m=`+e.kind+` 9 `+e.protocol+` `+t.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,`a=sctp-port:`+t.port+`\r
`],t.maxMessageSize!==void 0&&n.push(`a=max-message-size:`+t.maxMessageSize+`\r
`),n.join(``)},n.generateSessionId=function(){return Math.random().toString().substr(2,22)},n.writeSessionBoilerplate=function(e,t,r){let i,a=t===void 0?2:t;return i=e||n.generateSessionId(),`v=0\r
o=`+(r||`thisisadapterortc`)+` `+i+` `+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},n.getDirection=function(e,t){let r=n.splitLines(e);for(let e=0;e<r.length;e++)switch(r[e]){case`a=sendrecv`:case`a=sendonly`:case`a=recvonly`:case`a=inactive`:return r[e].substring(2)}return t?n.getDirection(t):`sendrecv`},n.getKind=function(e){return n.splitLines(e)[0].split(` `)[0].substring(2)},n.isRejected=function(e){return e.split(` `,2)[1]===`0`},n.parseMLine=function(e){let t=n.splitLines(e)[0].substring(2).split(` `);return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(` `)}},n.parseOLine=function(e){let t=n.matchPrefix(e,`o=`)[0].substring(2).split(` `);return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}},n.isValidSDP=function(e){if(typeof e!=`string`||e.length===0)return!1;let t=n.splitLines(e);for(let e=0;e<t.length;e++)if(t[e].length<2||t[e].charAt(1)!==`=`)return!1;return!0},typeof t==`object`&&(t.exports=n)})),sv=s({removeExtmapAllowMixed:()=>mv,shimAddIceCandidateNullOrEmpty:()=>hv,shimConnectionState:()=>pv,shimMaxMessageSize:()=>dv,shimParameterlessSetLocalDescription:()=>gv,shimRTCIceCandidate:()=>lv,shimRTCIceCandidateRelayProtocol:()=>uv,shimSendThrowTypeError:()=>fv}),cv=l(ov());function lv(e){if(!e.RTCIceCandidate||e.RTCIceCandidate&&`foundation`in e.RTCIceCandidate.prototype)return;let t=e.RTCIceCandidate;e.RTCIceCandidate=function(e){if(typeof e==`object`&&e.candidate&&e.candidate.indexOf(`a=`)===0&&(e=JSON.parse(JSON.stringify(e)),e.candidate=e.candidate.substring(2)),e.candidate&&e.candidate.length){let n=new t(e),r=cv.default.parseCandidate(e.candidate);for(let e in r)e in n||Object.defineProperty(n,e,{value:r[e]});return n.toJSON=function(){return{candidate:n.candidate,sdpMid:n.sdpMid,sdpMLineIndex:n.sdpMLineIndex,usernameFragment:n.usernameFragment}},n}return new t(e)},e.RTCIceCandidate.prototype=t.prototype,h_(e,`icecandidate`,t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new e.RTCIceCandidate(t.candidate),writable:`false`}),t))}function uv(e){!e.RTCIceCandidate||e.RTCIceCandidate&&`relayProtocol`in e.RTCIceCandidate.prototype||h_(e,`icecandidate`,e=>{if(e.candidate){let t=cv.default.parseCandidate(e.candidate.candidate);t.type===`relay`&&(e.candidate.relayProtocol={0:`tls`,1:`tcp`,2:`udp`}[t.priority>>24])}return e})}function dv(e,t){if(!e.RTCPeerConnection||t.browser===`chrome`&&t.version>102||t.browser===`firefox`&&t.version>=113)return;`sctp`in e.RTCPeerConnection.prototype||Object.defineProperty(e.RTCPeerConnection.prototype,"sctp",{get(){return this._sctp===void 0?null:this._sctp}});let n=function(e){if(!e||!e.sdp)return!1;let t=cv.default.splitSections(e.sdp);return t.shift(),t.some(e=>{let t=cv.default.parseMLine(e);return t&&t.kind===`application`&&t.protocol.indexOf(`SCTP`)!==-1})},r=function(e){let t=e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(t===null||t.length<2)return-1;let n=parseInt(t[1],10);return n===n?n:-1},i=function(e){let n=65536;return t.browser===`firefox`&&(n=t.version<57?e===-1?16384:2147483637:t.version<60?t.version===57?65535:65536:2147483637),n},a=function(e,n){let r=65536;t.browser===`firefox`&&t.version===57&&(r=65535);let i=cv.default.matchPrefix(e.sdp,`a=max-message-size:`);return i.length>0?r=parseInt(i[0].substring(19),10):t.browser===`firefox`&&n!==-1&&(r=2147483637),r},o=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,t.browser===`chrome`&&t.version>=76){let{sdpSemantics:e}=this.getConfiguration();e===`plan-b`&&Object.defineProperty(this,"sctp",{get(){return this._sctp===void 0?null:this._sctp},enumerable:!0,configurable:!0})}if(n(arguments[0])){let e=r(arguments[0]),t=i(e),n=a(arguments[0],e),o;o=t===0&&n===0?1/0:t===0||n===0?Math.max(t,n):Math.min(t,n);let s={};Object.defineProperty(s,"maxMessageSize",{get(){return o}}),this._sctp=s}return o.apply(this,arguments)}}function fv(e,t){if(!(e.RTCPeerConnection&&`createDataChannel`in e.RTCPeerConnection.prototype)||t.browser===`chrome`&&t.version>=149||t.browser===`firefox`&&t.version>60)return;function n(e,t){let n=e.send;e.send=function(){let r=arguments[0],i=r.length||r.size||r.byteLength;if(e.readyState===`open`&&t.sctp&&i>t.sctp.maxMessageSize)throw TypeError(`Message too large (can send a maximum of `+t.sctp.maxMessageSize+` bytes)`);return n.apply(e,arguments)}}let r=e.RTCPeerConnection.prototype.createDataChannel;e.RTCPeerConnection.prototype.createDataChannel=function(){let e=r.apply(this,arguments);return n(e,this),e},h_(e,`datachannel`,e=>(n(e.channel,e.target),e))}function pv(e){if(!e.RTCPeerConnection||`connectionState`in e.RTCPeerConnection.prototype)return;let t=e.RTCPeerConnection.prototype;Object.defineProperty(t,"connectionState",{get(){return{completed:`connected`,checking:`connecting`}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(t,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(e){this._onconnectionstatechange&&(this.removeEventListener(`connectionstatechange`,this._onconnectionstatechange),delete this._onconnectionstatechange),e&&this.addEventListener(`connectionstatechange`,this._onconnectionstatechange=e)},enumerable:!0,configurable:!0}),[`setLocalDescription`,`setRemoteDescription`].forEach(e=>{let n=t[e];t[e]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=e=>{let t=e.target;if(t._lastConnectionState!==t.connectionState){t._lastConnectionState=t.connectionState;let n=new Event(`connectionstatechange`,e);t.dispatchEvent(n)}return e},this.addEventListener(`iceconnectionstatechange`,this._connectionstatechangepoly)),n.apply(this,arguments)}})}function mv(e,t){if(!e.RTCPeerConnection||t.browser===`chrome`&&t.version>=71||t.browser===`safari`&&t._safariVersion>=13.1)return;let n=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(t){if(t&&t.sdp&&t.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){let n=t.sdp.split(`
`).filter(e=>e.trim()!==`a=extmap-allow-mixed`).join(`
`);e.RTCSessionDescription&&t instanceof e.RTCSessionDescription?arguments[0]=new e.RTCSessionDescription({type:t.type,sdp:n}):t.sdp=n}return n.apply(this,arguments)}}function hv(e,t){if(!(e.RTCPeerConnection&&e.RTCPeerConnection.prototype))return;let n=e.RTCPeerConnection.prototype.addIceCandidate;n&&n.length!==0&&(e.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(t.browser===`chrome`&&t.version<78||t.browser===`firefox`&&t.version<68||t.browser===`safari`)&&arguments[0]&&arguments[0].candidate===``?Promise.resolve():n.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function gv(e,t){if(!(e.RTCPeerConnection&&e.RTCPeerConnection.prototype))return;let n=e.RTCPeerConnection.prototype.setLocalDescription;n&&n.length!==0&&(e.RTCPeerConnection.prototype.setLocalDescription=function(){let e=arguments[0]||{};if(typeof e!=`object`||e.type&&e.sdp)return n.apply(this,arguments);if(e={type:e.type,sdp:e.sdp},!e.type)switch(this.signalingState){case`stable`:case`have-local-offer`:case`have-remote-pranswer`:e.type=`offer`;break;default:e.type=`answer`}return e.sdp||e.type!==`offer`&&e.type!==`answer`?n.apply(this,[e]):(e.type===`offer`?this.createOffer:this.createAnswer).apply(this).then(e=>n.apply(this,[e]))})}function _v({window:e}={},t={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){let n=v_,r=b_(e),i={browserDetails:r,commonShim:sv,extractVersion:m_,disableLog:g_,disableWarnings:__,sdp:cv};switch(r.browser){case`chrome`:if(!D_||!P_||!t.shimChrome)return n(`Chrome shim is not included in this adapter release.`),i;if(r.version===null)return n(`Chrome shim can not determine version, not shimming.`),i;n(`adapter.js shimming chrome.`),i.browserShim=D_,hv(e,r),gv(e,r),E_(e,r),O_(e,r),P_(e,r),k_(e,r),N_(e,r),A_(e,r),j_(e,r),F_(e,r),lv(e,r),uv(e,r),pv(e,r),dv(e,r),fv(e,r),mv(e,r);break;case`firefox`:if(!R_||!B_||!t.shimFirefox)return n(`Firefox shim is not included in this adapter release.`),i;n(`adapter.js shimming firefox.`),i.browserShim=R_,hv(e,r),gv(e,r),I_(e,r),B_(e,r),V_(e,r),z_(e,r),W_(e,r),H_(e,r),U_(e,r),G_(e,r),K_(e,r),q_(e,r),J_(e,r),Y_(e,r),lv(e,r),pv(e,r),dv(e,r),fv(e,r);break;case`safari`:if(!X_||!t.shimSafari)return n(`Safari shim is not included in this adapter release.`),i;n(`adapter.js shimming safari.`),i.browserShim=X_,hv(e,r),gv(e,r),nv(e,r),iv(e,r),$_(e,r),Z_(e,r),Q_(e,r),rv(e,r),ev(e,r),av(e,r),lv(e,r),uv(e,r),dv(e,r),fv(e,r),mv(e,r);break;default:n(`Unsupported browser!`)}return i}var vv=_v({window:typeof window>`u`?void 0:window});function yv(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var bv=class{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{let t=[],n=e.byteLength,r=Math.ceil(n/this.chunkedMTU),i=0,a=0;for(;a<n;){let o=Math.min(n,a+this.chunkedMTU),s=e.slice(a,o),c={__peerData:this._dataCount,n:i,data:s,total:r};t.push(c),a=o,i++}return this._dataCount++,t}}};function xv(e){let t=0;for(let n of e)t+=n.byteLength;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.byteLength;return n}var Sv=vv.default||vv,Cv=new class{isWebRTCSupported(){return typeof RTCPeerConnection<`u`}isBrowserSupported(){let e=this.getBrowser(),t=this.getVersion();return this.supportedBrowsers.includes(e)?e===`chrome`?t>=this.minChromeVersion:e===`firefox`?t>=this.minFirefoxVersion:e===`safari`&&!this.isIOS&&t>=this.minSafariVersion:!1}getBrowser(){return Sv.browserDetails.browser}getVersion(){return Sv.browserDetails.version||0}isUnifiedPlanSupported(){let e=this.getBrowser(),t=Sv.browserDetails.version||0;if(e===`chrome`&&t<this.minChromeVersion)return!1;if(e===`firefox`&&t>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!(`currentDirection`in RTCRtpTransceiver.prototype))return!1;let n,r=!1;try{n=new RTCPeerConnection,n.addTransceiver(`audio`),r=!0}catch{}finally{n&&n.close()}return r}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<`u`&&[`iPad`,`iPhone`,`iPod`].includes(navigator.platform),this.supportedBrowsers=[`firefox`,`chrome`,`safari`],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},wv=e=>!e||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e),Tv=()=>Math.random().toString(36).slice(2),Ev={iceServers:[{urls:`stun:stun.l.google.com:19302`},{urls:[`turn:eu-0.turn.peerjs.com:3478`,`turn:us-0.turn.peerjs.com:3478`],username:`peerjs`,credential:`peerjsp`}],sdpSemantics:`unified-plan`},Dv=new class extends bv{noop(){}blobToArrayBuffer(e,t){let n=new FileReader;return n.onload=function(e){e.target&&t(e.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol===`https:`}constructor(...e){super(...e),this.CLOUD_HOST=`0.peerjs.com`,this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Ev,this.browser=Cv.getBrowser(),this.browserVersion=Cv.getVersion(),this.pack=l_,this.unpack=c_,this.supports=function(){let e={browser:Cv.isBrowserSupported(),webRTC:Cv.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!e.webRTC)return e;let t;try{t=new RTCPeerConnection(Ev),e.audioVideo=!0;let n;try{n=t.createDataChannel(`_PEERJSTEST`,{ordered:!0}),e.data=!0,e.reliable=!!n.ordered;try{n.binaryType=`blob`,e.binaryBlob=!Cv.isIOS}catch{}}catch{}finally{n&&n.close()}}catch{}finally{t&&t.close()}return e}(),this.validateId=wv,this.randomToken=Tv}},Ov=`PeerJS: `,Y=new class{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){let n=[Ov,...t];for(let e in n)n[e]instanceof Error&&(n[e]=`(`+n[e].name+`) `+n[e].message);e>=3?console.log(...n):e>=2?console.warn(`WARNING`,...n):e>=1&&console.error(`ERROR`,...n)}constructor(){this._logLevel=0}},kv={},Av=Object.prototype.hasOwnProperty,jv=`~`;function Mv(){}Object.create&&(Mv.prototype=Object.create(null),new Mv().__proto__||(jv=!1));function Nv(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function Pv(e,t,n,r,i){if(typeof n!=`function`)throw TypeError(`The listener must be a function`);var a=new Nv(n,r||e,i),o=jv?jv+t:t;return e._events[o]?e._events[o].fn?e._events[o]=[e._events[o],a]:e._events[o].push(a):(e._events[o]=a,e._eventsCount++),e}function Fv(e,t){--e._eventsCount===0?e._events=new Mv:delete e._events[t]}function Iv(){this._events=new Mv,this._eventsCount=0}Iv.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Av.call(t,n)&&e.push(jv?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e},Iv.prototype.listeners=function(e){var t=jv?jv+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,i=n.length,a=Array(i);r<i;r++)a[r]=n[r].fn;return a},Iv.prototype.listenerCount=function(e){var t=jv?jv+e:e,n=this._events[t];return n?n.fn?1:n.length:0},Iv.prototype.emit=function(e,t,n,r,i,a){var o=jv?jv+e:e;if(!this._events[o])return!1;var s=this._events[o],c=arguments.length,l,u;if(s.fn){switch(s.once&&this.removeListener(e,s.fn,void 0,!0),c){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,t),!0;case 3:return s.fn.call(s.context,t,n),!0;case 4:return s.fn.call(s.context,t,n,r),!0;case 5:return s.fn.call(s.context,t,n,r,i),!0;case 6:return s.fn.call(s.context,t,n,r,i,a),!0}for(u=1,l=Array(c-1);u<c;u++)l[u-1]=arguments[u];s.fn.apply(s.context,l)}else{var d=s.length,f;for(u=0;u<d;u++)switch(s[u].once&&this.removeListener(e,s[u].fn,void 0,!0),c){case 1:s[u].fn.call(s[u].context);break;case 2:s[u].fn.call(s[u].context,t);break;case 3:s[u].fn.call(s[u].context,t,n);break;case 4:s[u].fn.call(s[u].context,t,n,r);break;default:if(!l)for(f=1,l=Array(c-1);f<c;f++)l[f-1]=arguments[f];s[u].fn.apply(s[u].context,l)}}return!0},Iv.prototype.on=function(e,t,n){return Pv(this,e,t,n,!1)},Iv.prototype.once=function(e,t,n){return Pv(this,e,t,n,!0)},Iv.prototype.removeListener=function(e,t,n,r){var i=jv?jv+e:e;if(!this._events[i])return this;if(!t)return Fv(this,i),this;var a=this._events[i];if(a.fn)a.fn===t&&(!r||a.once)&&(!n||a.context===n)&&Fv(this,i);else{for(var o=0,s=[],c=a.length;o<c;o++)(a[o].fn!==t||r&&!a[o].once||n&&a[o].context!==n)&&s.push(a[o]);s.length?this._events[i]=s.length===1?s[0]:s:Fv(this,i)}return this},Iv.prototype.removeAllListeners=function(e){var t;return e?(t=jv?jv+e:e,this._events[t]&&Fv(this,t)):(this._events=new Mv,this._eventsCount=0),this},Iv.prototype.off=Iv.prototype.removeListener,Iv.prototype.addListener=Iv.prototype.on,Iv.prefixed=jv,Iv.EventEmitter=Iv,kv=Iv;var Lv={};yv(Lv,`ConnectionType`,()=>Rv),yv(Lv,`PeerErrorType`,()=>zv),yv(Lv,`BaseConnectionErrorType`,()=>Bv),yv(Lv,`DataConnectionErrorType`,()=>Vv),yv(Lv,`SerializationType`,()=>Hv),yv(Lv,`SocketEventType`,()=>Uv),yv(Lv,`ServerMessageType`,()=>Wv);var Rv=function(e){return e.Data=`data`,e.Media=`media`,e}({}),zv=function(e){return e.BrowserIncompatible=`browser-incompatible`,e.Disconnected=`disconnected`,e.InvalidID=`invalid-id`,e.InvalidKey=`invalid-key`,e.Network=`network`,e.PeerUnavailable=`peer-unavailable`,e.SslUnavailable=`ssl-unavailable`,e.ServerError=`server-error`,e.SocketError=`socket-error`,e.SocketClosed=`socket-closed`,e.UnavailableID=`unavailable-id`,e.WebRTC=`webrtc`,e}({}),Bv=function(e){return e.NegotiationFailed=`negotiation-failed`,e.ConnectionClosed=`connection-closed`,e}({}),Vv=function(e){return e.NotOpenYet=`not-open-yet`,e.MessageToBig=`message-too-big`,e}({}),Hv=function(e){return e.Binary=`binary`,e.BinaryUTF8=`binary-utf8`,e.JSON=`json`,e.None=`raw`,e}({}),Uv=function(e){return e.Message=`message`,e.Disconnected=`disconnected`,e.Error=`error`,e.Close=`close`,e}({}),Wv=function(e){return e.Heartbeat=`HEARTBEAT`,e.Candidate=`CANDIDATE`,e.Offer=`OFFER`,e.Answer=`ANSWER`,e.Open=`OPEN`,e.Error=`ERROR`,e.IdTaken=`ID-TAKEN`,e.InvalidKey=`INVALID-KEY`,e.Leave=`LEAVE`,e.Expire=`EXPIRE`,e}({}),Gv=`1.5.5`,Kv=class extends kv.EventEmitter{constructor(e,t,n,r,i,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];let o=e?`wss://`:`ws://`;this._baseUrl=o+t+`:`+n+r+`peerjs?key=`+i}start(e,t){this._id=e;let n=`${this._baseUrl}&id=${e}&token=${t}`;!this._socket&&this._disconnected&&(this._socket=new WebSocket(n+`&version=1.5.5`),this._disconnected=!1,this._socket.onmessage=e=>{let t;try{t=JSON.parse(e.data),Y.log(`Server message received:`,t)}catch{Y.log(`Invalid server message`,e.data);return}this.emit(Uv.Message,t)},this._socket.onclose=e=>{this._disconnected||(Y.log(`Socket closed.`,e),this._cleanup(),this._disconnected=!0,this.emit(Uv.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Y.log(`Socket open`),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Y.log(`Cannot send heartbeat, because socket closed`);return}let e=JSON.stringify({type:Wv.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){let e=[...this._messagesQueue];this._messagesQueue=[];for(let t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Uv.Error,`Invalid message`);return}if(!this._wsOpen())return;let t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||=(this._cleanup(),!0)}_cleanup(){this._socket&&=(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),void 0),clearTimeout(this._wsPingTimer)}},qv=class{constructor(e){this.connection=e}startConnection(e){let t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Rv.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){let n=this.connection,r={ordered:!!e.reliable},i=t.createDataChannel(n.label,r);n._initializeDataChannel(i),this._makeOffer()}else this.handleSDP(`OFFER`,e.sdp)}_startPeerConnection(){Y.log(`Creating RTCPeerConnection.`);let e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){let t=this.connection.peer,n=this.connection.connectionId,r=this.connection.type,i=this.connection.provider;Y.log(`Listening for ICE candidates.`),e.onicecandidate=e=>{e.candidate&&e.candidate.candidate&&(Y.log(`Received ICE candidates for ${t}:`,e.candidate),i.socket.send({type:Wv.Candidate,payload:{candidate:e.candidate,type:r,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case`failed`:Y.log(`iceConnectionState is failed, closing connections to `+t),this.connection.emitError(Bv.NegotiationFailed,`Negotiation of connection to `+t+` failed.`),this.connection.close();break;case`closed`:Y.log(`iceConnectionState is closed, closing connections to `+t),this.connection.emitError(Bv.ConnectionClosed,`Connection to `+t+` closed.`),this.connection.close();break;case`disconnected`:Y.log(`iceConnectionState changed to disconnected on the connection with `+t);break;case`completed`:e.onicecandidate=()=>{}}this.connection.emit(`iceStateChanged`,e.iceConnectionState)},Y.log(`Listening for data channel`),e.ondatachannel=e=>{Y.log(`Received data channel`);let r=e.channel;i.getConnection(t,n)._initializeDataChannel(r)},Y.log(`Listening for remote stream`),e.ontrack=e=>{Y.log(`Received remote stream`);let r=e.streams[0],a=i.getConnection(t,n);if(a.type===Rv.Media){let e=a;this._addStreamToMediaConnection(r,e)}}}cleanup(){Y.log(`Cleaning up PeerConnection to `+this.connection.peer);let e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};let t=e.signalingState!==`closed`,n=!1,r=this.connection.dataChannel;r&&(n=!!r.readyState&&r.readyState!==`closed`),(t||n)&&e.close()}async _makeOffer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createOffer(this.connection.options.constraints);Y.log(`Created offer.`),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform==`function`&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Y.log(`Set localDescription:`,n,`for:${this.connection.peer}`);let r={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Rv.Data){let e=this.connection;r={...r,label:e.label,reliable:e.reliable,serialization:e.serialization}}t.socket.send({type:Wv.Offer,payload:r,dst:this.connection.peer})}catch(e){e!=`OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer`&&(t.emitError(zv.WebRTC,e),Y.log(`Failed to setLocalDescription, `,e))}}catch(e){t.emitError(zv.WebRTC,e),Y.log(`Failed to createOffer, `,e)}}async _makeAnswer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createAnswer();Y.log(`Created answer.`),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform==`function`&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Y.log(`Set localDescription:`,n,`for:${this.connection.peer}`),t.socket.send({type:Wv.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(e){t.emitError(zv.WebRTC,e),Y.log(`Failed to setLocalDescription, `,e)}}catch(e){t.emitError(zv.WebRTC,e),Y.log(`Failed to create answer, `,e)}}async handleSDP(e,t){t=new RTCSessionDescription(t);let n=this.connection.peerConnection,r=this.connection.provider;Y.log(`Setting remote description`,t);let i=this;try{await n.setRemoteDescription(t),Y.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e===`OFFER`&&await i._makeAnswer()}catch(e){r.emitError(zv.WebRTC,e),Y.log(`Failed to setRemoteDescription, `,e)}}async handleCandidate(e){Y.log(`handleCandidate:`,e);try{await this.connection.peerConnection.addIceCandidate(e),Y.log(`Added ICE candidate for:${this.connection.peer}`)}catch(e){this.connection.provider.emitError(zv.WebRTC,e),Y.log(`Failed to handleCandidate, `,e)}}_addTracksToConnection(e,t){if(Y.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Y.error(`Your browser does't support RTCPeerConnection#addTrack. Ignored.`);e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){Y.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}},Jv=class extends kv.EventEmitter{emitError(e,t){Y.error(`Error:`,t),this.emit(`error`,new Yv(`${e}`,t))}},Yv=class extends Error{constructor(e,t){typeof t==`string`?super(t):(super(),Object.assign(this,t)),this.type=e}},Xv=class extends Jv{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}},Zv=class e extends Xv{static#e=this.ID_PREFIX=`mc_`;get type(){return Rv.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(t,n,r){super(t,n,r),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||e.ID_PREFIX+Dv.randomToken(),this._negotiator=new qv(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Y.log(`DC#${this.connectionId} dc connection success`),this.emit(`willCloseOnRemote`)},this.dataChannel.onclose=()=>{Y.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Y.log(`Receiving stream`,e),this._remoteStream=e,super.emit(`stream`,e)}handleMessage(e){let t=e.type,n=e.payload;switch(e.type){case Wv.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Wv.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:Y.warn(`Unrecognized message type:${t} from peer:${this.peer}`)}}answer(e,t={}){if(this._localStream){Y.warn(`Local stream already exists on this MediaConnection. Are you answering a call twice?`);return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});let n=this.provider._getMessages(this.connectionId);for(let e of n)this.handleMessage(e);this._open=!0}close(){this._negotiator&&=(this._negotiator.cleanup(),null),this._localStream=null,this._remoteStream=null,this.provider&&=(this.provider._removeConnection(this),null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit(`close`))}},Qv=class{constructor(e){this._options=e}_buildRequest(e){let t=this._options.secure?`https`:`http`,{host:n,port:r,path:i,key:a}=this._options,o=new URL(`${t}://${n}:${r}${i}${a}/${e}`);return o.searchParams.set(`ts`,`${Date.now()}${Math.random()}`),o.searchParams.set(`version`,Gv),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{let e=await this._buildRequest(`id`);if(e.status!==200)throw Error(`Error. Status:${e.status}`);return e.text()}catch(e){Y.error(`Error retrieving ID`,e);let t=``;throw this._options.path===`/`&&this._options.host!==Dv.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),Error(`Could not get an ID from the server.`+t)}}async listAllPeers(){try{let e=await this._buildRequest(`peers`);if(e.status!==200){if(e.status===401){let e=``;throw e=this._options.host===Dv.CLOUD_HOST?`It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.`:"You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",Error(`It doesn't look like you have permission to list peers IDs. `+e)}throw Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Y.error(`Error retrieving list peers`,e),Error(`Could not get list peers from the server.`+e)}}},$v=class e extends Xv{static#e=this.ID_PREFIX=`dc_`;static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return Rv.Data}constructor(t,n,r){super(t,n,r),this.connectionId=this.options.connectionId||e.ID_PREFIX+Tv(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new qv(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Y.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit(`open`)},this.dataChannel.onmessage=e=>{Y.log(`DC#${this.connectionId} dc onmessage:`,e.data)},this.dataChannel.onclose=()=>{Y.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){e?.flush?this.send({__peerData:{type:`close`}}):(this._negotiator&&=(this._negotiator.cleanup(),null),this.provider&&=(this.provider._removeConnection(this),null),this.dataChannel&&=(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,null),this.open&&(this._open=!1,super.emit(`close`)))}send(e,t=!1){if(!this.open)this.emitError(Vv.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");else return this._send(e,t)}async handleMessage(e){let t=e.payload;switch(e.type){case Wv.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Wv.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Y.warn(`Unrecognized message type:`,e.type,`from peer:`,this.peer)}}},ey=class extends $v{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType=`arraybuffer`,this.dataChannel.addEventListener(`message`,e=>this._handleDataMessage(e))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>$v.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(e){return Y.error(`DC#:${this.connectionId} Error when sending:`,e),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;let e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){e?.flush?this.send({__peerData:{type:`close`}}):(this._buffer=[],this._bufferSize=0,super.close())}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}},ty=class extends ey{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new bv,this.serialization=Hv.Binary,this._chunkedData={}}_handleDataMessage({data:e}){let t=c_(e),n=t.__peerData;if(n){if(n.type===`close`){this.close();return}this._handleChunk(t)}else this.emit(`data`,t)}_handleChunk(e){let t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];let e=xv(n.data);this._handleDataMessage({data:e})}}_send(e,t){let n=l_(e);if(n instanceof Promise)return this._send_blob(n);!t&&n.byteLength>this.chunker.chunkedMTU?this._sendChunks(n):this._bufferedSend(n)}async _send_blob(e){let t=await e;t.byteLength>this.chunker.chunkedMTU?this._sendChunks(t):this._bufferedSend(t)}_sendChunks(e){let t=this.chunker.chunk(e);Y.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(let e of t)this.send(e,!0)}},ny=class extends ey{_handleDataMessage({data:e}){super.emit(`data`,e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Hv.None}},ry=class extends ey{_handleDataMessage({data:e}){let t=this.parse(this.decoder.decode(e)),n=t.__peerData;n&&n.type===`close`?this.close():this.emit(`data`,t)}_send(e,t){let n=this.encoder.encode(this.stringify(e));n.byteLength>=Dv.chunkedMTU?this.emitError(Vv.MessageToBig,`Message too big for JSON channel`):this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Hv.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}},iy=class e extends Jv{static#e=this.DEFAULT_KEY=`peerjs`;get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){let e=Object.create(null);for(let[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(t,n){super(),this._serializers={raw:ny,json:ry,binary:ty,"binary-utf8":ty,default:ty},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let r;t&&t.constructor==Object?n=t:t&&(r=t.toString()),n={debug:0,host:Dv.CLOUD_HOST,port:Dv.CLOUD_PORT,path:`/`,key:e.DEFAULT_KEY,token:Dv.randomToken(),config:Dv.defaultConfig,referrerPolicy:`strict-origin-when-cross-origin`,serializers:{},...n},this._options=n,this._serializers={...this._serializers,...this.options.serializers},this._options.host===`/`&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!==`/`&&(this._options.path=`/`+this._options.path),this._options.path[this._options.path.length-1]!==`/`&&(this._options.path+=`/`)),this._options.secure===void 0&&this._options.host!==Dv.CLOUD_HOST?this._options.secure=Dv.isSecure():this._options.host==Dv.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Y.setLogFunction(this._options.logFunction),Y.logLevel=this._options.debug||0,this._api=new Qv(n),this._socket=this._createServerConnection(),!Dv.supports.audioVideo&&!Dv.supports.data?this._delayedAbort(zv.BrowserIncompatible,`The current browser does not support WebRTC`):r&&!Dv.validateId(r)?this._delayedAbort(zv.InvalidID,`ID "${r}" is invalid`):r?this._initialize(r):this._api.retrieveId().then(e=>this._initialize(e)).catch(e=>this._abort(zv.ServerError,e))}_createServerConnection(){let e=new Kv(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Uv.Message,e=>{this._handleMessage(e)}),e.on(Uv.Error,e=>{this._abort(zv.SocketError,e)}),e.on(Uv.Disconnected,()=>{this.disconnected||(this.emitError(zv.Network,`Lost connection to server.`),this.disconnect())}),e.on(Uv.Close,()=>{this.disconnected||this._abort(zv.SocketClosed,`Underlying socket is already closed.`)}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){let t=e.type,n=e.payload,r=e.src;switch(t){case Wv.Open:this._lastServerId=this.id,this._open=!0,this.emit(`open`,this.id);break;case Wv.Error:this._abort(zv.ServerError,n.msg);break;case Wv.IdTaken:this._abort(zv.UnavailableID,`ID "${this.id}" is taken`);break;case Wv.InvalidKey:this._abort(zv.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Wv.Leave:Y.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case Wv.Expire:this.emitError(zv.PeerUnavailable,`Could not connect to peer ${r}`);break;case Wv.Offer:{let e=n.connectionId,t=this.getConnection(r,e);if(t&&(t.close(),Y.warn(`Offer received for existing Connection ID:${e}`)),n.type===Rv.Media){let i=new Zv(r,this,{connectionId:e,_payload:n,metadata:n.metadata});t=i,this._addConnection(r,t),this.emit(`call`,i)}else if(n.type===Rv.Data){let i=new this._serializers[n.serialization](r,this,{connectionId:e,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});t=i,this._addConnection(r,t),this.emit(`connection`,i)}else{Y.warn(`Received malformed connection type:${n.type}`);return}let i=this._getMessages(e);for(let e of i)t.handleMessage(e);break}default:{if(!n){Y.warn(`You received a malformed message from ${r} of type ${t}`);return}let i=n.connectionId,a=this.getConnection(r,i);a&&a.peerConnection?a.handleMessage(e):i?this._storeMessage(i,e):Y.warn(`You received an unrecognized message:`,e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){let t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:`default`,...t},this.disconnected){Y.warn(`You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available.`),this.emitError(zv.Disconnected,`Cannot connect to new Peer after disconnecting from server.`);return}let n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){Y.warn(`You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect.`),this.emitError(zv.Disconnected,`Cannot connect to new Peer after disconnecting from server.`);return}if(!t){Y.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}let r=new Zv(e,this,{...n,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){Y.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){let t=this._connections.get(e.peer);if(t){let n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){let n=this._connections.get(e);if(!n)return null;for(let e of n)if(e.connectionId===t)return e;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Y.error(`Aborting!`),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Y.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit(`close`))}_cleanup(){for(let e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){let t=this._connections.get(e);if(t)for(let e of t)e.close()}disconnect(){if(this.disconnected)return;let e=this.id;Y.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit(`disconnected`,e)}reconnect(){if(this.disconnected&&!this.destroyed)Y.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else if(this.destroyed)throw Error(`This peer cannot reconnect to the server. It has already been destroyed.`);else if(!this.disconnected&&!this.open)Y.error(`In a hurry? We're still trying to make the initial connection!`);else throw Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}listAllPeers(e=e=>{}){this._api.listAllPeers().then(t=>e(t)).catch(e=>this._abort(zv.ServerError,e))}},ay=`ABCDEFGHJKLMNPQRSTUVWXYZ`,oy=()=>Array.from({length:4},()=>ay[Math.floor(Math.random()*24)]).join(``);function sy(e,t){return e?my(e.toUpperCase().trim(),t):py(t)}var cy=e=>`dungeon-bastards-${e}`,ly=8e3,uy=15e3,dy=6e3;function fy(e,t){let n=e.peerConnection,r;n.addEventListener(`iceconnectionstatechange`,()=>{let e=n.iceConnectionState;e===`failed`||e===`closed`?t():e===`disconnected`?r??=setTimeout(t,dy):(clearTimeout(r),r=void 0)})}function py(e){let t=new Worker(new URL(new URL(`host.worker-BZz0a3KH.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),n=e=>t.postMessage(e),r=new Map,i=1,a=null,o=!1,s=!1;t.onmessage=t=>{let{id:n,data:i}=t.data;if(n===0)e.message(i);else{let e=r.get(n);e?.open&&e.send(i)}},t.onerror=t=>e.notice(`The dungeon crashed: ${t.message}`);let c=t=>{o||s||(o=!0,n({t:`open`,id:0,code:t}),e.open())},l=()=>{o||s||(a?.destroy(),a=null,e.notice(`Couldn't reach the matchmaker, so nobody can join you. Solo it is.`),c(oy()))},u=e=>{let t=oy(),d=new iy(cy(t));a=d,d.on(`open`,()=>{a===d&&c(t)}),d.on(`connection`,e=>{let t=i++;r.set(t,e);let a=()=>{r.delete(t)&&(n({t:`close`,id:t}),e.close())};e.on(`open`,()=>{n({t:`open`,id:t}),fy(e,a)}),e.on(`data`,e=>n({t:`msg`,id:t,data:String(e)})),e.on(`close`,a)}),d.on(`disconnected`,()=>{a===d&&o&&!s&&setTimeout(()=>{a===d&&d.disconnected&&!d.destroyed&&d.reconnect()},3e3)}),d.on(`error`,t=>{a!==d||o||(t.type===`unavailable-id`&&e>0?(d.destroy(),u(e-1)):l())})};u(5),setTimeout(l,ly);let d=()=>a?.destroy();return addEventListener(`pagehide`,d),{send:e=>{o&&n({t:`msg`,id:0,data:e})},close:()=>{s=!0,removeEventListener(`pagehide`,d),d(),t.terminate()}}}function my(e,t){let n=new iy,r=null,i=!1,a=!1,o=e=>{a||i||(a=!0,n.destroy(),t.error(e))};n.on(`open`,()=>{r=n.connect(cy(e),{serialization:`raw`,reliable:!0});let s=()=>{a||(i?(a=!0,n.destroy(),t.close()):o(`Couldn't get through to crew ${e}.`))};r.on(`open`,()=>{a||(i=!0,fy(r,s),t.open())}),r.on(`data`,e=>{a||t.message(String(e))}),r.on(`close`,s)}),n.on(`error`,t=>{t.type===`peer-unavailable`?o(`No crew called ${e}. Check the code, bastard.`):i||o(`Couldn't reach the matchmaker. Check your connection.`)}),setTimeout(()=>o(`Couldn't get through to crew ${e}. Some networks block direct connections: try another network, or start your own crew.`),uy);let s=()=>n.destroy();return addEventListener(`pagehide`,s),{send:e=>{i&&!a&&r?.open&&r.send(e)},close:()=>{a=!0,removeEventListener(`pagehide`,s),s()}}}var X=e=>document.getElementById(e),hy={get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,t)=>{try{localStorage.setItem(e,t)}catch{}}};function gy(e){if(!X(`error`).textContent){X(`error`).textContent=e;for(let e of[`create`,`join`])X(e).disabled=!0}}var _y=e=>gy(`The game crashed while loading: ${e.message}`);addEventListener(`error`,_y);var Z;try{Z=new em(X(`game`),X(`plates`))}catch(e){throw gy(`This browser could not start WebGL, so the dungeon can't be drawn. Turn on "Use graphics acceleration" in chrome://settings/system, then check chrome://gpu.`),e}var vy=new Tm(Z.scene);Vm(e=>hb({type:`chat`,text:e}),Xg());var yy=null,by=0,xy=0,Sy=``,Cy=hy.get(`db.char`)in p?hy.get(`db.char`):`rat`,wy=[],Ty=`title`,Ey=null,Dy=``,Oy=1,ky=!1,Ay=null,jy=!1,My=!1,Ny=!1,Py=!1,Fy=new Set,Iy=new URLSearchParams(location.search).has(`boss`),Ly=null,Ry=null,zy=[],Q=null,$=null,By=null,Vy={x:0,z:0},Hy={x:0,z:0},Uy=!1,Wy=[],Gy=0;function Ky(e){for(let t of[`title`,`lobby`,`end`])X(t).hidden=t!==e;X(`hud`).hidden=e!==null,X(`touch`).hidden=e!==null||!Xg(),document.body.classList.toggle(`touch`,Xg()),e!==null&&(i_(),document.body.classList.remove(`high`,`crash`)),X(`music`).hidden=e===null,Hm(e!==`title`),X(`pause-btn`).hidden=e!==null,e!==null&&(X(`pause`).hidden=!0),Sg(e===null?zx():`menu`),e!==null&&Cg(1)}var qy=()=>{Ty!==`playing`&&Zm()};addEventListener(`pointerdown`,qy,{once:!0}),addEventListener(`keydown`,qy,{once:!0});var Jy=()=>{X(`music`).textContent=wg()?`♪ off`:`♪ on`,X(`pause-music`).textContent=wg()?`Music: off`:`Music: on`};X(`music`).onclick=()=>{Tg(),Jy()},X(`pause-music`).onclick=()=>{Tg(),Jy()},Jy();function Yy(e){e.innerHTML=Object.keys(p).map(e=>{let t=p[e],n={rat:`🐀`,kangaroo:`🦘`,goblin:`👺`}[e];return`<button class="char ${e===Cy?`sel`:``}" data-id="${e}">
      <h3 style="color:${t.color}">${n} ${t.name}</h3>
      <div class="role">${t.role}</div>
      <p>${t.blurb}</p>
      <p class="ab">${t.ability}: ${t.abilityDesc}</p>
      <p class="sp">Mana ${oe[e].mp} · no spells: find them</p>
      <div class="stats">HP ${t.hp} · Speed ${t.speed} · Damage ${t.dmg}</div>
    </button>`}).join(``),e.querySelectorAll(`.char`).forEach(t=>t.onclick=()=>{Cy=t.dataset.id,hy.set(`db.char`,Cy),yy&&Ty!==`playing`&&hb({type:`pick`,char:Cy});let n=document.activeElement===t;for(let e of[`lobby-chars`,`end-chars`])Yy(X(e));n&&e.querySelector(`.char[data-id="${Cy}"]`)?.focus({preventScroll:!0})})}for(let e of[`lobby-chars`,`end-chars`])Yy(X(e));var Xy=X(`name`),Zy=X(`code`);Xy.value=hy.get(`db.name`)??``;var Qy=new URLSearchParams(location.search).get(`room`);Qy&&(Zy.value=Qy.toUpperCase()),X(`create`).onclick=()=>gb(),X(`join`).onclick=()=>{Zy.value.trim()?gb(Zy.value.trim()):Zy.focus()},Zy.onkeydown=e=>{e.key===`Enter`&&X(`join`).click()},X(`start`).onclick=()=>hb({type:`start`,...Iy?{boss:!0}:{}}),X(`again`).onclick=()=>hb({type:`start`,deeper:ky,...Iy?{boss:!0}:{}}),X(`restart`).onclick=()=>hb({type:`start`,...Iy?{boss:!0}:{}}),X(`leave`).onclick=()=>{location.href=location.pathname},X(`pause-leave`).onclick=()=>{location.href=location.pathname};var $y=()=>Ty===`playing`&&!!Q?.paused,eb=e=>{Ty===`playing`&&hb({type:`pause`,on:e})};X(`pause-btn`).onclick=()=>eb(!0),X(`resume`).onclick=()=>eb(!1);for(let e of[`pause`,`pause-btn`])X(e).addEventListener(`mousedown`,e=>e.stopPropagation());function tb(){let e=$y(),t=X(`pause`);t.hidden===!e?pb():(t.hidden=!e,X(`pause-btn`).hidden=e,K.pause(e),e?(X(`pause-by`).textContent=`${Q.paused} hit pause.`,jb.clear(),Mb.left=Mb.right=Mb.middle=!1,dx(),hb({type:`sheet`}),pb()):t.contains(document.activeElement)&&document.activeElement.blur())}var nb=[`bastard`,`skills`,`codex`,`howto`],rb=`bastard`,ib=pm(),ab=ib[0].id;function ob(e){e!==rb&&(rb=e,K.blip(),e===`bastard`&&hb({type:`sheet`}),pb(),X(`pause-body`).scrollTop=0)}var sb=e=>ob(nb[Zb(nb.indexOf(rb)+e,nb.length)]);X(`pause-tabs`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-tab]`);t&&ob(t.dataset.tab)}),X(`pause-body`).addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t||!$)return;if(t.dataset.cat){ab=t.dataset.cat,K.blip(),pb();return}let n=t.dataset.skill;n&&(Ve($.sk??0,n,$.sp??0)===`ok`?hb({type:`skill`,id:n}):K.deny())});var cb=[[`kills`,`Monsters killed`],[`backstabs`,`Hits on your crew`],[`steals`,`Thefts`],[`teamKills`,`Crewmates killed`],[`deaths`,`Deaths`],[`snatches`,`Bodies snatched`],[`rides`,`Meat suits worn`],[`revives`,`Crewmates revived`],[`snitches`,`Times snitched`],[`baits`,`Crewmates baited`],[`dirty`,`Dirty tricks`],[`fakes`,`Fake gifts`],[`fizzles`,`Spells fizzled`],[`sugar`,`Gutter Sugar snorted`]];function lb(e){let t=p[e.c],n=e.bag.map(me),r=e=>e.t===`potion`?ie[e.id].desc:k[e.id].desc,i=e=>e.t===`potion`?`potion`:`${e.t===`spell`?`spell`:e.t} · ${k[e.id].kind===`hex`?`hex`:`utility`}${e.t===`spell`?` · ${k[e.id].cost}mp`:``}`,a=n.length?n.map(e=>`<div style="--c:${ge(e)}"><b>${V(he(e))}${e.n>1?` ×${e.n}`:``}</b> <small>${i(e)}</small><br><small>${V(r(e))}</small></div>`).join(``):`<p class="dim">Empty. Even your pockets have given up.</p>`,o=Ry,s=o?`<table class="stats"><tr><th></th><th>This floor</th><th>The run</th></tr>${cb.map(([e,t])=>`<tr><td>${t}</td><td>${o.stats[e]}</td><td>${o.run[e]}</td></tr>`).join(``)}</table>`:`<p class="dim">Counting the bodies…</p>`,c=Le.filter(t=>ze(e.sk??0,t)).map(e=>`<span style="color:${Oe[Ie[e].branch].color}">${Ie[e].name}</span>`).join(`, `);return`<div class="cols">
    <div>
      <h3 style="color:${t.color}">${V((e.t?e.t+` `:``)+e.n)}</h3>
      <p>${t.name}, level ${e.lv} (${e.xp}/${e.xpn} XP)${My?` · at the Pit Stop`:` · floor ${Oy}`}</p>
      <p>HP ${e.hp}/${e.mhp} · mana ${e.mp}/${e.mmp}${o?` · damage ×${o.dmg.toFixed(2)}`:``}</p>
      <p>Loot on you <b class="gold">${e.loot}g</b> · banked over the run <b class="gold">${e.pu??0}g</b> <span class="dim">(your score, and what you spend at the Pit Stop)</span></p>
      ${e.t&&Se[e.t]?`<p><b style="color:#ffb07a">${V(e.t)}:</b> ${Se[e.t]}</p>`:`<p class="dim">No title yet. Do something memorable.</p>`}
      <p><b>${t.ability}:</b> ${V(t.abilityDesc)}</p>
      <p><b>${xe[e.c].name}:</b> ${V(xe[e.c].desc)}</p>
      <p><b>Vice:</b> ${be[e.c].name}, ${V(be[e.c].fix)}.</p>
      ${Dy&&!My?`<p><b class="gold">Contract:</b> ${V(Dy)}</p>`:``}
      <p><b>Skills:</b> ${c||`<span class="dim">none yet</span>`}${e.sp?` · <b style="color:#5ab0ff">${e.sp} point${e.sp>1?`s`:``} to spend</b>`:``}</p>
      <h3>Stats</h3>${s}
    </div>
    <div><h3>Your bag</h3><div class="inv">${a}</div></div>
  </div>`}function ub(e){let t=e.sk??0,n=e.sp??0;return`<div class="points">Skill points: <b>${n}</b> <span class="dim">· one per level-up · Coach Knuckles at the Pit Stop sells more</span></div>
    <div class="tree">${ke.map(e=>{let r=Be(e).map(e=>{let r=Ie[e];return`<button class="node ${Ve(t,e,n)}" data-skill="${e}" data-k="sk-${e}"><i class="tier">Tier ${r.tier}</i><b>${r.name}</b><small>${r.cost} point${r.cost>1?`s`:``}</small><span>${V(r.desc)}</span></button>`}).join(``);return`<div class="branch" style="--g:${Oe[e].color}"><h4>${Oe[e].name}</h4><div class="blurb">${Oe[e].blurb}</div>${r}</div>`}).join(``)}</div>
    <h4 class="moves-h" style="--g:${Oe.moves.color}">${Oe.moves.name} <span class="dim">· ${Oe.moves.blurb}</span></h4>
    <div class="moves" style="--g:${Oe.moves.color}">${Be(`moves`).map(e=>{let r=Ie[e];return`<button class="node ${Ve(t,e,n)}" data-skill="${e}" data-k="sk-${e}"><b>${r.name}</b><small>${r.cost} point${r.cost>1?`s`:``}</small><span>${V(r.desc)}</span></button>`}).join(``)}</div>
    <p class="dim">Levels, skills and points stay with you from floor to floor until the crew wipes and starts over.</p>`}var db=new Map;function fb(){let e=ib.map(e=>`<button data-cat="${e.id}" data-k="cat-${e.id}" class="${e.id===ab?`on`:``}">${e.name}</button>`).join(``),t=ib.find(e=>e.id===ab),n=db.get(t.id);return n||db.set(t.id,n=`${t.intro?`<p>${V(t.intro)}</p>`:``}${t.entries.map(fm).join(``)}`),`<div class="codex"><div class="cats">${e}</div><div class="entries">${n}</div></div>`}function pb(){if(X(`pause`).hidden||!$)return;for(let e of X(`pause-tabs`).querySelectorAll(`button`))e.classList.toggle(`on`,e.dataset.tab===rb);X(`pause-sp`).textContent=$.sp?`(${$.sp})`:``,X(`pause-foot`).textContent=`${My?`The Pit Stop`:`The whole dungeon`} is frozen for everyone. Anyone can resume. ${Nb?`LB / RB switch tabs, right stick scrolls.`:Xg()?``:`Q / E switch tabs.`}`;let e=rb===`bastard`?lb($):rb===`skills`?ub($):rb===`codex`?fb():mm(Xg()?`touch`:Nb?`pad`:`kb`);fx(X(`pause-body`),e)}X(`copy`).onclick=()=>{let e=`${location.origin}${location.pathname}?room=${Sy}`;navigator.clipboard?.writeText(e).then(()=>{X(`copy`).textContent=`Copied!`,setTimeout(()=>X(`copy`).textContent=`Copy invite link`,1500)},()=>prompt(`Invite link:`,e))};function mb(){X(`lobby-code`).textContent=Sy,X(`lobby-players`).innerHTML=wy.map(e=>`<li style="color:${p[e.char].color}">${e.id===xy?`👑 `:``}${e.name===`Bastard`?``:`${V(e.name)} — `}${p[e.char].name}${e.id===by?` (you)`:``}</li>`).join(``);let e=by===xy,t=wy.find(e=>e.id===xy)?.name??`the host`;X(`start`).hidden=!e,X(`again`).hidden=!e,X(`again`).textContent=ky?`To the Pit Stop, then floor ${Oy+1}`:`Run it back`,X(`restart`).hidden=!e||!ky,X(`end-chars`).hidden=ky,X(`lobby-wait`).textContent=e?wy.length<2?`Send the invite link to your crew. Or go in alone.`:``:`Waiting for ${t} to break in…`,X(`end-wait`).textContent=(e?``:`Waiting for ${t} to ${ky?`take you deeper`:`run it back`}… `)+(ky?`First the Pit Stop: spend your banked gold (it comes off your score). Everybody starts the next floor with whatever they are holding, plus whatever they buy and whatever is in their lockers. Levels and skills come with you. Want to be a different bastard? See the Skin Tailor.`:Oy>1?`Nobody got out. The lockers, levels, skills and gold are gone. Back to the top.`:``)}function hb(e){yy?.send(JSON.stringify(e))}function gb(e){Zm(),a_();let t=Xy.value.trim()||`Bastard`;hy.set(`db.name`,t),X(`error`).textContent=``,Um(),yy?.close(),yy=sy(e,{open:()=>hb({type:`join`,room:e,name:t,char:Cy}),message:e=>_b(JSON.parse(e)),close:()=>{Ty!==`title`&&(X(`error`).textContent=`Lost connection to the dungeon.`,Ty=`title`,Ky(`title`),Z.clear())},error:e=>{X(`error`).textContent=e},notice:Km})}function _b(e){switch(e.type){case`welcome`:by=e.id,Sy=e.room,history.replaceState(null,``,`?room=${e.room}`);break;case`lobby`:if(wy.length){for(let t of e.players)wy.some(e=>e.id===t.id)||Km(`${t.name} joined the crew`);for(let t of wy)e.players.some(e=>e.id===t.id)||Km(`${t.name} bailed`)}xy=e.host,wy=e.players,Sy=e.room,Oy=e.floor,ky=e.deeper;{let t=e.players.find(e=>e.id===by)?.char;if(t&&t!==Cy){Cy=t,hy.set(`db.char`,Cy);for(let e of[`lobby-chars`,`end-chars`])Yy(X(e))}}mb(),Ty===`title`&&e.phase!==`playing`&&(Ty=`lobby`,Ky(`lobby`));break;case`start`:My=!!e.hub,Ny=!!e.arena,Py=!1,Fy.clear(),Ey=My?tt():Ny?ut():De(e.seed),Z.buildMap(Ey),Z.setMood(Ny),vy.build(Ey),My||(Dy=``),Oy=e.floor,cx(),dx(),Ry=null,Ty=`playing`,zy.length=0,Q=null,$=null,By=null,Uy=!1,Wy=[],Fb=0,X(`overlay`).hidden=!0,Dx=null,jx=!1,Ky(null);break;case`snap`:if(Ty!==`playing`)return;zy.push({at:performance.now(),s:e}),zy.length>40&&zy.shift(),Q=e,Ab(e);for(let t of e.events)Nx(t,e);Bx(),Mx(),tb();break;case`locker`:(e.open||Ay?.id===e.id)&&sx(e.id,e.slots,e.trap);break;case`shop`:(e.open||Ly?.id===e.shop)&&ux(e.shop,e.lines,e.bought);break;case`sheet`:Ry=e,pb();break;case`contract`:Dy=e.text,Sx(`Secret contract: ${e.text}`,`#ffd23a`);break;case`end`:Ty=`ended`,X(`gameover`).hidden=!0,kx()?Dx=()=>Ux(e.results,e.headline):Ux(e.results,e.headline);break;case`chat`:{let t=p[e.char].color,n=e.id===by;qm(e.name,t,e.text,n),Gm(`${e.name}: ${e.text}`,t),!n&&Ty===`playing`&&!Im()&&Sx(`${e.name}: ${e.text}`,t,!1),n||K.chat();break}case`error`:X(`error`).textContent=e.message,Ty=`title`,yy?.close(),yy=null}}function vb(e){return e.s===`ghost`?f:e.s===`downed`?Ce:fe(e.s===`possess`&&e.hk?g(e.hk):p[e.c].speed,e.f)}var yb=e=>e.s===`possess`&&e.hk?m[e.hk].r:d;function bb(e){if(!Q||e.s!==`alive`&&e.s!==`possess`||e.f&16)return[];let t=[];for(let e of Q.players)e.id!==by&&e.s===`alive`&&!(e.f&16)&&t.push({x:e.x,z:e.z,r:d,w:w(d)});for(let e of Q.enemies)if(e.hp>0&&e.r!==by){let n=m[e.k].r;t.push({x:e.x,z:e.z,r:n,w:w(n)})}return t}function xb(e,t){let n=!!Q&&!!te(Q.puddles,Vy.x,Vy.z,`oil`);O(Ey,Vy,e,vb({...$,f:n?$.f|ce:$.f&~ce}),$.s===`ghost`,yb($)),t.length&&E(Ey,Vy,yb($),t)}var Sb=()=>Xg()?`the ability button`:Nb?`LT`:`right-click`,Cb=()=>Xg()?`USE`:Nb?`X`:`F`,wb=()=>!Xg()&&Nb?`B`:Cb(),Tb=()=>Xg()?`DIRTY`:Nb?`L3`:`C`,Eb=()=>Xg()?`ROLL`:Nb?`B`:`Shift`,Db=()=>Xg()?`tap DRINK`:Nb?`d-pad ▼`:`R`,Ob=()=>Xg()?`swipe the potions`:Nb?`d-pad ▲`:`G`,kb=()=>Xg()?`BASTARD`:Nb?`Y`:`X`;function Ab(e){if($=e.players.find(e=>e.id===by)??null,$&&Ey){if(!Uy||$.s!==By)Vy.x=Hy.x=$.x,Vy.z=Hy.z=$.z,Wy=[],Uy=!0;else{Wy=Wy.filter(e=>e.seq>$.ack),Vy.x=$.x,Vy.z=$.z;let e=bb($);for(let t of Wy)xb(t,e)}By=$.s}}var jb=new Set,Mb={x:innerWidth/2,y:innerHeight/2,left:!1,right:!1,middle:!1,back:!1},Nb=!1,Pb=0,Fb=0,Ib=0,Lb=0,Rb={hex:-1e9,util:-1e9},zb=null,Bb={hex:!1,util:!1},Vb=250,Hb=0,Ub=!1,Wb=`hex`,Gb={id:-1,at:-1e9},Kb=[],qb=[];function Jb(e){[...navigator.getGamepads?.()??[]].find(e=>e?.connected)?.buttons.forEach((t,n)=>{qb[n]=t.pressed&&(e||!!qb[n])})}var Yb=e=>($?.bag??[]).flatMap((t,n)=>{let r=me(t);return _e(r)===e&&!(r.t===`scroll`&&$.bag.includes(`spell:${r.id}`))?[n]:[]}),Xb=e=>{let t=$?.bag[e]?me($.bag[e]):null;return t?.t===`spell`?$.bag.findIndex(e=>{let n=me(e);return n.t===`scroll`&&n.id===t.id}):-1},Zb=(e,t)=>(e%t+t)%t;function Qb(e,t=`hex`){let n=Yb(t).length;n&&(t===`hex`?Fb=Zb(e,n):Ib=Zb(e,n),Wb=t,Bx())}function $b(e){let t=Yb(`pot`).length;t&&(Lb=Zb(e,t),Bx())}function ex(e){e>=0&&(Gb={id:e,at:performance.now()})}var tx=3;function nx(){let e=Yb(`hex`),t=Yb(`util`);return Fb=Math.min(Fb,Math.max(0,e.length-1)),Ib=Math.min(Ib,Math.max(0,t.length-1)),{sel:e[Fb]??-1,usel:t[Ib]??-1,psel:rx()}}var rx=()=>{let e=$?.bag[Yb(`pot`)[Lb]];return e?ae.indexOf(me(e).id):-1};addEventListener(`keydown`,e=>{if(e.target.tagName===`INPUT`)return;if(jb.add(e.code),(e.code===`Space`||e.code===`Tab`)&&e.preventDefault(),!e.repeat&&Ty!==`title`&&(e.code===`KeyT`||e.code===`Enter`&&e.target.tagName!==`BUTTON`)){e.preventDefault(),Jm(),Lm()&&(jb.clear(),Mb.left=Mb.right=Mb.middle=!1);return}if(Ty!==`playing`||e.repeat)return;if(Ay&&(e.code===`Escape`||e.code===`KeyF`)){cx();return}if(Ly&&(e.code===`Escape`||e.code===`KeyF`)){dx();return}if(e.code===`Escape`||e.code===`KeyP`){eb(!$y());return}if(e.code===`KeyM`&&(Tg(),Jy()),$y()){(e.code===`KeyQ`||e.code===`BracketLeft`)&&sb(-1),(e.code===`KeyE`||e.code===`BracketRight`)&&sb(1);return}e.code===`Tab`&&Qb(Fb+(e.shiftKey?-1:1)),e.code===`KeyZ`&&Qb(Ib+(e.shiftKey?-1:1),`util`),e.code===`KeyG`&&$b(Lb+(e.shiftKey?-1:1)),e.code===`KeyR`&&ex(rx());let t=/^Digit([1-9])$/.exec(e.code);t&&+t[1]<=tx?Qb(t[1]-1):t&&Qb(t[1]-1-tx,`util`)}),addEventListener(`keyup`,e=>jb.delete(e.code)),addEventListener(`blur`,()=>{jb.clear(),Mb.left=Mb.right=Mb.middle=Mb.back=!1}),addEventListener(`wheel`,e=>{Ty===`playing`&&Math.abs(e.deltaY)>1&&Qb(Fb+Math.sign(e.deltaY))},{passive:!0}),r_(X(`touch`)),addEventListener(`pointermove`,e=>{e.pointerType!==`mouse`||Zg()||(Mb.x=e.clientX,Mb.y=e.clientY,Nb=!1)}),addEventListener(`mousedown`,e=>{Ty!==`playing`||Zg()||(Zm(),e.button===0&&(Mb.left=!0),e.button===1&&(Mb.middle=!0,e.preventDefault()),e.button===2&&(Mb.right=!0),(e.button===3||e.button===4)&&(Mb.back=!0,e.preventDefault()))}),addEventListener(`mouseup`,e=>{e.button===0&&(Mb.left=!1),e.button===1&&(Mb.middle=!1),e.button===2&&(Mb.right=!1),(e.button===3||e.button===4)&&(Mb.back=!1,e.preventDefault())}),addEventListener(`contextmenu`,e=>{Ty===`playing`&&e.preventDefault()});function ix(){let e=(...e)=>e.some(e=>jb.has(e)),t=+!!e(`KeyD`,`ArrowRight`)-!!e(`KeyA`,`ArrowLeft`),n=+!!e(`KeyS`,`ArrowDown`)-!!e(`KeyW`,`ArrowUp`),r=Mb.left||e(`KeyJ`),i=$?.rc!==void 0,a=Mb.right||e(`Space`,`KeyK`)||!i&&e(`ShiftLeft`),o=i&&e(`ShiftLeft`,`ShiftRight`),s=e(`KeyX`,`KeyL`),c=Mb.middle||e(`KeyQ`),l=Mb.back||e(`KeyE`),u=e(`KeyF`),d=e(`KeyC`),f=Pb,p=!1,m=!1,h=[...navigator.getGamepads?.()??[]].find(e=>e?.connected);if(h&&!Gg()){let e=h.axes[0]??0,i=h.axes[1]??0,g=h.axes[2]??0,_=h.axes[3]??0,v=Math.hypot(e,i),y=.15,b=v<y?0:Math.min(1,(v-y)/.85)**1.6;e=v?e/v*b:0,i=v?i/v*b:0;let x=e=>!!h.buttons[e]?.pressed&&!qb[e];(e||i)&&(t+=e,n+=i,Nb=!0),Math.hypot(g,_)>.35&&(f=Math.atan2(_,g),p=!0,Nb=!0);let S=x(7),C=x(6)||x(0),w=x(3),T=x(5),E=x(4);(x(1)||x(2)||x(10)||x(11))&&(Nb=!0);let D=!!($&&$.f&3072);u||=x(2)||x(1)&&D,d||=x(10)||x(11),o||=x(1)&&!D,(S||C||w||T||E)&&(Nb=!0),m=T,T&&(Hb||=performance.now(),performance.now()-Hb>=Vb&&(Ub=!0)),r||=S,a||=C||Ub,s||=w,c||=T,l||=E,x(15)&&!Kb[15]&&Qb(Fb+1),x(14)&&!Kb[14]&&Qb(Ib+1,`util`),Kb[14]=x(14),Kb[15]=x(15),x(12)&&!Kb[12]&&$b(Lb+1),x(13)&&!Kb[13]&&ex(rx()),Kb[12]=x(12),Kb[13]=x(13)}if(Zg()){if(t+=J.mx,n+=J.mz,J.aiming&&(f=Math.atan2(J.aimZ,J.aimX),p=!0),r||=J.atk,a||=J.abl,s||=J.ult,u||=J.use,d||=J.dirty,o||=J.roll,J.pick>=0){let e=Yb(`hex`).length;J.pick<e?Qb(J.pick):Qb(J.pick-e,`util`),J.pick=-1}J.castTap&&=(Rb[Wb]=performance.now(),zb=J.castAim,!1),J.ppick>=0&&($b(J.ppick),J.ppick=-1),J.drinkTap&&=(ex(rx()),!1),J.pot>=0&&(ex(J.pot),J.pot=-1),Nb=!0}for(let[e,t]of[[`hex`,c],[`util`,l]])Bb[e]&&!t&&!(e===`hex`&&Ub)&&(Rb[e]=performance.now(),zb=null),Bb[e]=t;m||(Hb=0,Ub=!1);let g=performance.now()-Rb.hex<150,_=performance.now()-Rb.util<150;if((g||_)&&zb!==null&&(f=zb,p=!0),Nb)!p&&(t||n)&&(f=Math.atan2(n,t));else{let e=Z.screenToGround(Mb.x,Mb.y);e&&(f=Math.atan2(e.z-Hy.z,e.x-Hy.x))}Pb=f,jy&&(u?u=!1:jy=!1);let v=performance.now()-Gb.at<150?Gb.id:-1;return{seq:++Gy,mx:t,mz:n,aim:f,atk:r,abl:a,ult:s,cast:g,ucast:_,...nx(),pot:v,use:u,dirty:d,roll:o}}var ax=1.8,ox=e=>Ey?.props.find(t=>t.id===e);function sx(e,t,n){Ay={id:e,slots:t,trap:n},jb.clear(),Mb.left=Mb.right=Mb.middle=!1,lx(),X(`locker`).hidden=!1}function cx(){Ay&&(Ay=null,X(`locker`).hidden=!0,X(`locker`).contains(document.activeElement)&&document.activeElement.blur(),jy=!0)}function lx(){if(!Ay||!$)return;let e=(e,t,n=-1,r=!1,i=`${e}${n}`)=>`<button data-act="${e}" data-i="${n}" data-k="${V(i)}"${r?` disabled`:``}>${V(t)}</button>`,t=Ay.slots.length>=2,n=(e,n)=>!t||Ay.slots.some(t=>t.k===e&&(t.k!==`item`||t.it.id===n)),r=$.f&512?1:0,i=$.bag.map(me),a=$.loot,o=Array.from({length:2},(t,n)=>{let r=Ay.slots[n];return r?`<div class="lslot ${r.k}">${V(we(r))} ${e(`take`,`Take`,n)}</div>`:`<div class="lslot empty">empty</div>`}).join(``),s=[e(`gold`,`Stash your gold`,-1,!a||!n(`gold`)),r?e(`curse`,`Stash the cursed loot`,-1,!n(`curse`)):``,...i.flatMap((t,r)=>t.t===`potion`||t.t===`scroll`?[e(`item`,`Stash ${he(t)}`,r,!n(`item`,t.id),`item-${t.id}`)]:[]),e(`trap`,Ay.trap?`Rigged ✓`:`Rig it (50g)`,-1,Ay.trap)].filter(Boolean).join(``);fx(X(`locker-body`),`<div class="lslots">${o}</div><div class="lputs">${s}</div>`)}X(`locker`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-act]`);t&&Ay&&hb({type:`locker`,id:Ay.id,act:t.dataset.act,i:Number(t.dataset.i)})}),X(`locker-close`).onclick=()=>cx(),X(`locker`).addEventListener(`mousedown`,e=>e.stopPropagation());function ux(e,t,n){let r=Ly?.id!==e,i=Ue[e].greet;Ly={id:e,lines:t,bought:n,greet:r?i[Math.floor(Math.random()*i.length)]:Ly.greet},jb.clear(),Mb.left=Mb.right=Mb.middle=!1,mx(),r&&K.blip(),X(`shop`).hidden=!1}function dx(){Ly&&(Ly=null,X(`shop`).hidden=!0,X(`shop`).contains(document.activeElement)&&document.activeElement.blur(),jy=!0)}function fx(e,t){let n=e.contains(document.activeElement)?document.activeElement:null,r=n?.dataset.k,i=n?[...e.querySelectorAll(`button`)].indexOf(n):-1;if(Ix(e,t),!n||e.contains(document.activeElement))return;let a=r?e.querySelector(`[data-k="${r}"]:not(:disabled)`):null,o=[...e.querySelectorAll(`button:not(:disabled)`)];(a??o.find(t=>[...e.querySelectorAll(`button`)].indexOf(t)>=i)??o[o.length-1])?.focus({preventScroll:!0})}var px=e=>Le.reduce((t,n)=>t+(ze(e,n)?Ie[n].cost:0),0);function mx(){if(!Ly||!$)return;let e=Ue[Ly.id],t=$.pu??0,n=$.sk??0;X(`shop`).style.setProperty(`--sc`,e.color),X(`shop-name`).textContent=e.name,X(`shop-greet`).textContent=`"${Ly.greet}"`,X(`shop-purse`).innerHTML=`Your gold: <b>${t}g</b> <span class="dim">(spending it comes off your score)</span>${ze(n,`haggle`)?` · Haggler: 25% off`:``}`;let r=(e,t,n,r,i,a,o=!1,s=!1,c=-1)=>`<button data-act="${e}" data-i="${t}" data-j="${c}" data-k="${e}-${t}-${c}" class="${e===`swap`?`swap `:``}${s?`poor`:``}" style="--c:${a}"${o?` disabled`:``}><span>${V(n)}<small>${r}</small></span><em>${i}</em></button>`,i=$.bag.map(me),a;if(Ly.id===`potions`||Ly.id===`books`)a=Ly.lines.map((e,a)=>{let o=me(e.code),s=Ye(e.price,n),c=o.t===`tome`&&i.some(e=>e.t===`spell`&&e.id===o.id),l=o.t===`potion`?ie[o.id].desc:k[o.id].desc,u=e.left<0?``:e.left===0?` · SOLD OUT`:` · ${e.left} left`,d=e.left===0||c,f=d?[]:ye(i,e.code),p=f.length?` · bag full: trade one in below`:``;return r(`buy`,a,he(o),`${V(l)}${u}${c?` · you know this one`:``}${p}`,`${s}g`,ge(o),d,s>t)+f.map(e=>{let n=i[e],o=Math.max(0,s-Je(n));return r(`swap`,a,`↳ Trade in ${he(n)}${n.n>1?` ×${n.n}`:``}`,n.t===`spell`?`You forget it · −${Je(n)}g`:`The merchant keeps it · −${Je(n)}g`,`${o}g`,ge(n),!1,o>t,e)}).join(``)});else if(Ly.id===`fence`)a=Ly.lines.map((e,t)=>{let n=i[t];return n?r(`sell`,t,`${he(n)}${n.n>1?` ×${n.n}`:``}`,n.t===`spell`?`Forget it for good`:`Sell one`,`+${e.price}g`,ge(n)):``}),a.some(Boolean)||(a=[`<p class="empty">Your bag is empty. Fingers looks disappointed.</p>`]);else if(Ly.id===`tailor`)a=Ly.lines.map((e,t)=>{let n=p[e.code];return r(`class`,t,`${n.name} · ${n.role}`,`HP ${n.hp} · Speed ${n.speed} · Damage ${n.dmg} · ${V(n.ability)}: ${V(n.abilityDesc)}${e.left?``:` · wearing it`}`,e.left?`free`:`✓`,n.color,!e.left)});else{let[e,i]=Ly.lines,o=px(n);a=[r(`point`,0,`Buy a skill point`,`You have ${$.sp??0}. Bought ${Ly.bought} so far, and each one costs more.`,`${Ye(e.price,n)}g`,Oe.sorcery.color,!1,Ye(e.price,n)>t),r(`respec`,1,`Forget every skill`,o?`Get your ${o} point${o===1?``:`s`} back to spend again.`:`You haven't learned anything to forget.`,`${Ye(i.price,n)}g`,Oe.brawn.color,!i.left,Ye(i.price,n)>t)]}fx(X(`shop-body`),`<p class="blurb">${V(e.blurb)}</p>${a.join(``)}`)}X(`shop`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-act]`);t&&Ly&&(t.classList.contains(`poor`)&&K.deny(),hb({type:`shop`,shop:Ly.id,act:t.dataset.act,i:Number(t.dataset.i),j:Number(t.dataset.j)}))}),X(`shop-close`).onclick=()=>dx(),X(`shop`).addEventListener(`mousedown`,e=>e.stopPropagation());function hx(){if(!Q||!$||$.s!==`alive`||$.cy)return null;let e=$.bag.map(me),t=[Yb(`hex`)[Fb],Yb(`util`)[Ib],Yb(`pot`)[Lb]];for(let n of Q.loot){if(!n.i||n.g||Math.hypot(n.x-Hy.x,n.z-Hy.z)>.7)continue;let{it:r,fits:i,swap:a}=ve(e,n.i,t);if(!i)return{id:n.id,it:r,swap:a}}return null}function gx(){let e=hx();if(!e)return``;if(e.swap<0)return`<div class="ability">You can't carry more than 3 of the ${V(he(e.it))}</div>`;let t=me($.bag[e.swap]);return`<div class="ability">${Cb()}: ${t.t===`spell`?`forget`:`drop`} ${V(he(t))} for the ${V(he(e.it))}</div>`}function _x(e){let t=ox(e);return t&&Ey?.rooms.find(e=>t.x>=e.x&&t.x<e.x+e.w&&t.z>=e.z&&t.z<e.z+e.h)}function vx(){if(!Q||!$||$.s!==`alive`||Ay)return``;if($.pk!==void 0)return`<div class="ability">Breaking in… ${Math.round($.pk*100)}%. Keep holding ${Cb()}.</div>`;let e=null,t=1.3;for(let n of Q.lockers){let r=ox(n.id),i=r?Math.hypot(r.x-Hy.x,r.z-Hy.z):99;i<t&&(t=i,e=n)}if(!e)return``;if(!e.o){let t=_x(e.id);return t&&Q.lockers.some(e=>e.o===by&&_x(e.id)===t)?`<div class="ability">You already have a locker in this room. Find another one.</div>`:`<div class="ability">Locker: ${Cb()} to stash stuff for the next floor down</div>`}return e.o===by?`<div class="ability">Your locker (${e.n}/2): ${Cb()} to open</div>`:`<div class="ability">${V(Q.players.find(t=>t.id===e.o)?.n??`Somebody`)}'s locker: hold ${Cb()} to break in (10g to the locksmith, loud, spiky)</div>`}var yx=(e,t)=>e.players.find(e=>e.id===t)?.n??`Someone`,bx=e=>{if(e===by)return Hy;let t=Q?.players.find(t=>t.id===e);return t?{x:t.x,z:t.z}:null},xx=(e,t)=>Math.max(.15,1-Math.hypot(e-Hy.x,t-Hy.z)/14);function Sx(e,t=`var(--ink)`,n=!0){n&&Gm(e,t);let r=document.createElement(`div`);r.textContent=e,r.style.color=t;let i=X(`feed`);for(i.appendChild(r);i.children.length>6;)i.firstChild.remove();setTimeout(()=>r.remove(),5e3)}var Cx={better:`#5ab0ff`,bastard:`#ff2a1a`,snatch:`#b8e0ff`,sugar:`#d86ab0`,cursed:`#3aff4a`};function wx(e,t=``){Gm(e,Cx[t.split(` `)[0]]);let n=document.createElement(`div`);n.textContent=e,n.className=t,X(`bigtext`).replaceChildren(n),setTimeout(()=>n.remove(),1800)}function Tx(){let e=X(`flash`);e.classList.add(`on`),requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.remove(`on`)))}var Ex=0,Dx=null;function Ox(e,t,n,r=``,i=3500){Gm(t?`${e}: ${t}`:e,r===`escaped`?`#ffd23a`:`#ff5a4a`);let a=X(`overlay`);a.className=r+(i?``:` wait`),a.querySelector(`h1`).textContent=e,a.querySelector(`.quote`).textContent=t,a.querySelector(`.sub`).textContent=n,a.hidden=!1,clearTimeout(Ex),i&&(Ex=window.setTimeout(()=>{a.hidden=!0},i))}var kx=()=>!X(`overlay`).hidden&&X(`overlay`).classList.contains(`wait`);function Ax(){let e=X(`overlay`);if(e.hidden=!0,e.classList.remove(`wait`),Mx(),Dx){let e=Dx;Dx=null,e()}}X(`overlay`).addEventListener(`pointerdown`,e=>{kx()&&(e.stopPropagation(),e.preventDefault(),Ax())}),X(`overlay`).addEventListener(`mousedown`,e=>e.stopPropagation());var jx=!1;for(let e of[`mousedown`,`pointerdown`])X(`gameover`).addEventListener(e,e=>e.stopPropagation());X(`go-restart`).onclick=()=>hb({type:`startover`,...Iy?{boss:!0}:{}}),X(`go-results`).onclick=()=>hb({type:`callit`}),X(`go-haunt`).onclick=()=>{jx=!0,Mx()};function Mx(){let e=X(`gameover`),t=Q?.haunt,n=$?.s===`ghost`||$?.s===`possess`;if(e.hidden=Ty!==`playing`||!t||!n||jx||t.done.includes(by)||kx()||Q.players.some(e=>e.s===`escaped`),e.hidden)return;let r=by===xy;X(`go-restart`).hidden=!r,X(`go-wait`).textContent=`${r?``:`${yx(Q,xy)} can start the crew over. `}Results in ${Math.ceil(t.t)}s.`}function Nx(e,t){switch(e.k){case`swing`:{let n=bx(e.id),r=t.players.find(t=>t.id===e.id);if(!n||!r)break;e.ghost?Z.fxSwing(n.x,n.z,e.a,`#b8e0ff`,e.r??1.1):(Z.playerSwing(e.id),Z.fxReach(n.x,n.z,e.a,r.c,p[r.c].color,e.r??p[r.c].range)),K.swing(xx(n.x,n.z));break}case`atk`:{let t=Z.enemyAttack(e.id,e.a),n=Z.enemies.get(e.id);if(!t||!n)break;let r=xx(n.lastX,n.lastZ);t===`warlock`?K.cast(`Destruction`,r*.6):(t===`goblin`||t===`ham`||t===`demon`?K.bash:K.bite)(r);break}case`hit`:Z.fxHit(e.x,e.z,!!e.ff),K.hit(xx(e.x,e.z));break;case`boom`:Z.fxBoom(e.x,e.z,e.r),K.boom(xx(e.x,e.z));break;case`stomp`:Z.fxRing(e.x,e.z,2.6,`#e0b07a`),K.stomp(xx(e.x,e.z));break;case`lvl`:e.id===by?(wx(`YOU GOT BETTER!!!`,`better`),K.levelUp()):Sx(`${yx(t,e.id)} GOT BETTER!!!`,`#5ab0ff`);break;case`die`:Sx(`${yx(t,e.id)} was killed by ${e.by}`,`#ff5a4a`),e.id===by&&(Ox(`YOU DIED`,e.q,`You're a ghost now. Hold ${Sb()} on a monster to wear it. Kill a living bastard and you steal their body.`,``,0),K.babyCry());break;case`snatch`:Sx(`The ghost of ${yx(t,e.id)} stole ${yx(t,e.victim)}'s body!`,`#b8e0ff`),e.id===by&&(wx(`BODY SNATCHED!`,`snatch`),K.snatch());break;case`possess`:{let n=t.players.find(t=>t.id===e.id);Z.fxTeleport(e.x,e.z,n?p[n.c].color:`#b8e0ff`),K.snatch(),e.id===by?wx(`YOU'RE ${m[e.ek].name.toUpperCase()} NOW`,`snatch`):Sx(`The ghost of ${yx(t,e.id)} crawled inside ${m[e.ek].name}`,`#b8e0ff`);break}case`eject`:Z.fxBurst(e.x,e.z,`#b8e0ff`,10,.8,4),e.id===by&&Sx(`You got kicked out of your meat suit.`,`#b8e0ff`);break;case`esc`:e.id===by&&(Ox(`YOU ESCAPED`,`with ${t.players.find(e=>e.id===by)?.bank??0} gold`,`Now watch these idiots die.`,`escaped`,4e3),K.escape());break;case`ult`:{let n=bx(e.id);wx(`${yx(t,e.id).toUpperCase()} WENT FULL BASTARD`,`bastard`),Tx(),K.ult(),n&&Z.fxRing(n.x,n.z,7,`#ff2a1a`);break}case`pickup`:if(e.id===by){if(K.pickup(),e.i){let t=me(e.i);Z.fxFloat(Hy.x,Hy.z,t.t===`potion`?`potion`:t.t,ge(t)),e.gut?Sx(`You swallowed a ${he(t)}`,ge(t)):t.t!==`tome`&&Sx(`You found a ${he(t)}`,ge(t))}else Z.fxFloat(Hy.x,Hy.z,e.w?e.w:`+${e.v}`,e.w?`#d08aff`:`#ffd23a`),e.gut?Sx(`You swallowed ${e.w?`a ${e.w}`:`${e.v} gold`}. It's in the rat now.`,`#d08aff`):e.w&&Sx(`You grabbed a ${e.w} (+${e.v})`,`#d08aff`)}break;case`msg`:Sx(e.text);break;case`note`:e.id===by&&Gm(e.text,`#b8a0ff`);break;case`cast`:{let t=bx(e.id),n=k[e.s];if(!t||!n)break;e.ok?(Z.fxCast(t.x,t.z,ne[n.school]),e.s===`tk`&&Z.fxSwing(t.x,t.z,e.id===by?Pb:Q?.players.find(t=>t.id===e.id)?.a??0,ne.Mysticism,7),K.cast(n.school,xx(t.x,t.z))):(Z.fxFizzle(t.x,t.z),K.fizzle(xx(t.x,t.z)),e.id===by&&Sx(`Your spell fizzled. Embarrassing.`,`var(--dim)`));break}case`zap`:Z.fxZap(e.pts,e.c),K.zap(xx(e.pts[0],e.pts[1]));break;case`tp`:Z.fxTeleport(e.x0,e.z0,e.c),Z.fxTeleport(e.x1,e.z1,e.c),K.teleport(xx(e.x1,e.z1));break;case`spark`:Z.fxBurst(e.x,e.z,e.c,10,.6,4),K.hit(xx(e.x,e.z)*.6);break;case`heal`:Z.fxHeal(e.x,e.z),K.heal(xx(e.x,e.z));break;case`drink`:if(e.id!==by)break;K.drink(),e.p===`sugar`?(wx(`GUTTER SUGAR!`,`sugar`),K.sugar()):Sx(`You drank a ${ie[e.p].name}`,`#b8a0ff`);break;case`learn`:e.id===by&&(Sx(`You learned ${k[e.s].name}!`,ne[k[e.s].school]),K.learn());break;case`leap`:e.id===by&&wx(`WHEEEE`,`better`),K.leap();break;case`land`:Z.fxRing(e.x,e.z,2,`#ffe05a`),K.stomp(xx(e.x,e.z));break;case`fall`:Z.fxBurst(e.x,e.z,`#6a5a4a`,8,.1,2),K.fall(xx(e.x,e.z)),e.id===by&&wx(`AAAAAAAAAAA`,`snatch`);break;case`down`:Sx(`${yx(t,e.id)} went down (${e.by})`,`#ff8a4a`),e.id===by&&(Ox(`YOU'RE DOWN`,`Not dead yet.`,``,``,1500),K.hit());break;case`revive`:{let n=bx(e.id);n&&Z.fxHeal(n.x,n.z),K.heal(),e.id===by&&wx(e.by===e.id?`BACK ON YOUR FEET`:`${yx(t,e.by).toUpperCase()} PICKED YOU UP`,`better`);break}case`bell`:Z.fxRing(e.x,e.z,6,`#ffd23a`,!1),K.bell(xx(e.x,e.z));break;case`fire`:Z.fxBoom(e.x,e.z,e.r,`#ff4a10`),Z.fxMotes(e.x,e.z,`#ff8a20`,14,2.4,1),K.boom(xx(e.x,e.z));break;case`steam`:Z.fxMotes(e.x,e.z,`#e8f0f4`,10,1.4,4),K.hiss(xx(e.x,e.z));break;case`shock`:for(let t=0;t<3;t++)Z.fxZap(Kx(e.x,e.z,e.r),`#a0f0ff`);K.zap(xx(e.x,e.z));break;case`combo`:Sx(`${yx(t,e.a)} + ${yx(t,e.b)}: ${e.n} COMBO`,e.n===`SHOCK`?`#a0f0ff`:`#ff8a20`),(e.a===by||e.b===by)&&wx(`COMBO!`,`better`);break;case`fix`:e.id===by&&(wx(`AHHH. THE GOOD STUFF.`,`sugar`),K.drink());break;case`jones`:e.id===by&&K.fizzle(.6);break;case`gate`:Z.fxBurst(e.x,e.z,`#a0a0a0`,14,.8,4),K.stomp(xx(e.x,e.z));break;case`wake`:wx(`THE DUNGEON IS AWAKE`,`bastard`),Tx(),K.ult();break;case`dirty`:{let n=bx(e.v);n&&Z.fxBurst(n.x,n.z,`#ff2a1a`,8,.8,3),e.v===by&&wx(`${yx(t,e.id).toUpperCase()} PULLED A DIRTY ONE`,`bastard`);break}case`cash`:e.id===by&&K.cash();break;case`spill`:Z.fxSpill(e.ids,e.x,e.z),K.snitch(xx(e.x,e.z)),K.coins(xx(e.x,e.z),e.ids.length+4);break;case`skill`:e.id===by&&K.skill();break;case`roll`:{let t=bx(e.id);t&&(Z.fxBurst(t.x,t.z,`#8a7a6a`,6,.5,2),K.roll(xx(t.x,t.z)));break}case`buy`:e.id===by&&K.buy();break;case`bossRise`:hg(`rise`),gg(1),Tx(),setTimeout(()=>{wx(`BELCHAZZAR`,`demon`),Tx()},4900);break;case`bossShift`:K.transform(),gg(2),Tx(),wx(`HE'S NOT DONE`,`demon`);break;case`bossDown`:Py=!0,hg(`fanfare`),Tx(),wx(`VICTORY!`,`better`),Z.fxBoom(e.x,e.z,4,`#ff4a1a`),Z.fxBurst(e.x,e.z,`#ffd23a`,30,1.5,7);break;case`summon`:K.summon(xx(e.x,e.z)),Z.fxFloat(e.x,e.z+.2,`WIDE OPEN!`,`#ff5aff`);break;case`mark`:Z.fxMark(e.x,e.z,e.r,e.t);break;case`pounce`:Z.demonPounce(e.id),K.leap();break;case`immune`:if(performance.now()-Px<300)break;Px=performance.now(),Z.fxFloat(e.x,e.z+.2,`IMMUNE`,`#ffd23a`),K.immune(xx(e.x,e.z))}}var Px=0,Fx=new WeakMap;function Ix(e,t){Fx.get(e)!==t&&(Fx.set(e,t),e.innerHTML=t)}var Lx=!1,Rx=0;function zx(){return My?`hub`:$?.s===`ghost`||$?.s===`possess`?`haunt`:$?.s===`downed`?`downed`:Ny?Py?`victory`:Q?.enemies.some(e=>e.k===`demon`)?`metal`:`horror`:Q&&Q.wake<0?`awake`:`boss`}function Bx(){if(!Q||!$)return;let e=$.s===`alive`&&!!($.f&512);e&&!Lx&&(wx(`CURSED!`,`cursed`),Gm(`Cursed loot: you're slowed until you bank it or someone steals it`,`#5aff5a`),Z.fxBurst(Hy.x,Hy.z,`#3aff4a`,16,.8,4),K.curse()),Lx=e,document.body.classList.toggle(`cursed`,e);let t=p[$.c],n=(e,t)=>`${Math.max(0,Math.min(100,e/t*100))}%`,r=$.b>=100,i=$.s===`possess`&&$.hk?h[$.hk]:null,a=Q?.haunt,o=(!a||$.s!==`ghost`&&$.s!==`possess`?``:a.done.includes($.id)?`<div class="ability">☠ RUN'S OVER · waiting on the other ghosts · results in ${Math.ceil(a.t)}s</div>`:`<div class="ability">☠ RUN'S OVER · haunt the place · results in ${Math.ceil(a.t)}s${$.s===`ghost`?` · ${kb()}: see results now`:``}</div>`)+($.s===`ghost`?$.pp===void 0?`<div class="ability">👻 GHOST: hold ${Sb()} on a monster to wear it. Kill a living bastard to steal their body.</div>`:`<div class="ability">👻 POSSESSING… ${Math.round($.pp*100)}%</div>`:i&&$.hk?`<div class="ability">👹 WEARING ${V(m[$.hk].name.toUpperCase())} · rots in ${Math.ceil($.hp/$.mhp*i.rot)}s · ${kb()}: bail out</div>
      <div class="ability ${$.acd>0?`cd`:``}">${i.ability}: ${$.acd>0?$.acd.toFixed(1)+`s`:`READY`} · ${i.desc}</div>`:$.s===`escaped`?`<div class="ability">ESCAPED with ${$.bank} gold</div>`:``),s=$.s===`alive`,c=s?[$.f&1&&`<span style="color:#b0d8ff">CHAMELEON</span>`,$.f&2&&`<span style="color:#6ab8ff">PARALYZED</span>`,$.f&1048576&&`<span class="high">UNTOUCHABLE</span>`,$.f&4&&`<span class="high">HIGH AS HELL</span>`,$.f&8&&`<span style="color:var(--dim)">CRASHING</span>`,$.f&256&&`<span class="jones">JONESING (${be[$.c].fix})</span>`,$.f&512&&`<span class="cursed">☠ CURSED: SLOWED</span>`,$.f&131072&&`<span style="color:#ff8a20">ON FIRE: FIND WATER</span>`,$.f&65536&&`<span style="color:#b08a4a">GREASED: SLOWED</span>`,$.f&262144&&`<span style="color:#6ab8ff">SOAKED</span>`,$.f&32768&&`<span style="color:#c8a040">DRUNK</span>`,$.f&16384&&`<span style="color:#5aff7a">SQUARE</span>`,$.f&8192&&`<span style="color:#9ad0ff">FREE PASS</span>`,$.f&4096&&`<span style="color:var(--gold)">BOUNTY ON YOU: ${$.bt}g</span>`].filter(Boolean).join(` `):``,l=$.t&&Se[$.t]?`<div class="perk">${V($.t)}: ${Se[$.t]}</div>`:``,u=s&&!My?`<div class="bar crave ${$.cr>=100?`full`:``}"><div style="width:${$.cr}%"></div><span>${$.cr>=100?`NEED `:``}${be[$.c].name.toUpperCase()}</span></div>`:``,d=e=>Q.players.find(t=>t.id===e)?.n??`someone`,f=Q.players.flatMap(e=>(e.ow??[]).filter(([e])=>e===by).map(([,t])=>`${V(e.n)} owes you ${t}g`)),g=($.ow??[]).map(([e,t])=>`You owe ${V(d(e))} ${t}g (${Cb()} next to them to pay)`),_=$.cy?Q.heavy.find(e=>e.id===$.cy):void 0,v=My&&s&&Ey?rt(Ey,Hy.x,Hy.z):null,y=Q.players.length,b=Q.exit.on??0,x=My?v?`<div class="ability">${V(Ue[v.shop].name)}: ${Cb()} to shop</div>`:`<div class="ability">Lift to floor ${Oy+1}: ${b}/${y} aboard</div>`:``,S=$.bag.map(me).find(e=>e.id===`heal`)?.n??0,C=ae[rx()]===`heal`,w=[o,x,s&&!My&&S&&$.hp/$.mhp<.35&&`<div class="ability down">Low HP: ${C?`${Db()} to drink Not Dying`:`${Ob()} to pick Not Dying, then ${Db()}`}</div>`,$.rv!==void 0&&`<div class="ability">Picking them up… ${Math.round($.rv*100)}%</div>`,vx(),gx(),_&&`<div class="ability">Hauling the ${_.k===`safe`?`safe`:`cursed idol`} (${_.v}g)${_.n<2?` alone. Get help.`:` with help.`} ${wb()}: drop</div>`].filter(Boolean).join(``),T=Xg()?`❚❚`:Nb?`Start`:`Esc`,E=[`<div class="meta"><span>${My?`Gold <b>${$.pu??0}g</b>`:`Loot <b>${$.loot}</b>`}</span><span>${!My&&$.pu?`banked ${$.pu}g · `:``}${t.name}</span></div>`,$.sp?`<div class="sp">${$.sp} skill point${$.sp>1?`s`:``} to spend: ${T} → Skills</div>`:``,u,l,c?`<div class="chips">${c}</div>`:``,Dy&&!My?`<div class="contract">Contract: ${V(Dy)}</div>`:``,...g.map(e=>`<div class="debt">${e}</div>`),...f.map(e=>`<div class="debt owed">${e}</div>`)].filter(Boolean).join(``);document.body.classList.toggle(`high`,s&&!!($.f&4)),document.body.classList.toggle(`crash`,s&&!!($.f&8));let D=s&&!My?`<div class="abil"><span class="ability ${$.acd>0?`cd`:``}">${t.ability}: ${$.acd>0?$.acd.toFixed(1)+`s`:`READY`}</span>
    <span class="ability ${$.dc>0?`cd`:``}">${xe[$.c].name} (${Tb()}): ${$.dc>0?$.dc.toFixed(1)+`s`:`READY`}</span>${$.rc===void 0?``:`<span class="ability ${$.rc>0?`cd`:``}">Roll (${Eb()}): ${$.rc>0?$.rc.toFixed(1)+`s`:`READY`}</span>`}</div>`:``,O=My?``:`<div class="bar bastard ${r?`full`:``}"><div style="width:${$.b}%"></div><span>${r&&s?Xg()?`TAP BASTARD!`:`${kb()}: GO FULL BASTARD`:`BASTARD`}</span></div>`,ee=Xg();Ix(X(`hud-me`),`
    <div class="name" style="color:${t.color}"><span>${V(($.t?$.t+` `:``)+$.n)}</span><span class="lv">LV ${$.lv}</span></div>
    ${$.s===`downed`?`<div class="bar hp down"><div style="width:${n($.dn??0,$.t===`Twice-Dead`?60:36)}"></div><span>🩸 BLEEDING OUT ${Math.ceil($.dn??0)}s</span></div>`:`<div class="bar hp"><div style="width:${$.s===`alive`||i?n($.hp,$.mhp):`0%`}"></div><span>${i?`BODY`:`HP`} ${$.s===`alive`||i?$.hp:0}/${$.mhp}</span></div>`}
    <div class="duo"><div class="bar mp"><div style="width:${s?n($.mp,$.mmp):`0%`}"></div><span>MANA ${s?$.mp:0}/${$.mmp}</span></div>${O}</div>
    <div class="bar xp" title="XP"><div style="width:${n($.xp,$.xpn)}"></div></div>
    ${D}${ee?E:``}`),Ix(X(`hud-info`),ee?``:E),Ix(X(`hud-hints`),w),s&&!My&&$.hp/$.mhp<.25&&performance.now()-Rx>850&&(Rx=performance.now(),K.heartbeat());let te=Q.enemies.find(e=>e.k===`demon`);Ny&&gg(te?te.ph===2?2:1:0),Sg(zx()),Cg($.s===`downed`?1.5-.5*($.dn??0)/($.t===`Twice-Dead`?60:36):!s||My?1:$.f&4?1.35:$.f&8?.65:te?.ph===2?1.15:1);for(let e of Q.portals??[])Fy.has(e.id)||(Fy.add(e.id),K.portal(xx(e.x,e.z)));let re=Yb(`hex`).map(e=>me($.bag[e])),oe=Yb(`util`).map(e=>me($.bag[e])),se=Yb(`pot`).map(e=>me($.bag[e]));Fb=Math.min(Fb,Math.max(0,re.length-1)),Ib=Math.min(Ib,Math.max(0,oe.length-1)),Lb=Math.min(Lb,Math.max(0,se.length-1));let ce=e=>{let t=e.t===`spell`?$.bag.map(me).find(t=>t.t===`scroll`&&t.id===e.id):null;return e.t===`scroll`?e.n:t?.n??0},ue=ze($.sk??0,`steady`)?j:0,de=ze($.sk??0,`cheap`)?je:1,fe=e=>+(k[e.id].cost*de).toFixed(1),_e=e=>ce(e)?`scroll ×${ce(e)}${e.t===`spell`?` · then ${fe(e)}mp`:``}`:`${fe(e)}mp · ${Math.round(pe(e.id,$.lv,$.f,ue)*100)}% fizzle`,ve=e=>e.t===`spell`&&!ce(e)&&$.mp<k[e.id].cost*de?`broke`:``,ye=e=>e.id===`bookmark`&&$.mk?`Recall`:k[e.id].name,Ce=e=>ie[e.id].name.replace(`Potion of `,``),we=(e,t,n)=>e===t?0:e===Zb(t+1,n)?1:e===Zb(t-1,n)?-1:2,Te=(e,t)=>{let n=t===`hex`?Fb:Ib,r=t===`hex`?re.length:oe.length;if(!Nb)return`${e+1+(t===`util`?tx:0)}`;let i=we(e,n,r);return i===0?t===`hex`?`RB`:`LB`:i===1?t===`hex`?`▶`:`◀`:``},Ee=e=>e===Lb?Nb?`▼`:`R`:Nb&&we(e,Lb,se.length)===1?`▲`:``,De=e=>e?`<b>${e}</b> `:``,A=hx(),Oe=A?.swap??-1,ke=A&&Oe>=0?`<em class="incoming" style="--n:${ge(A.it)}">⇄ ${Cb()}: ${V(he(A.it))}</em>`:``,Ae=e=>Oe>=0&&(e===Oe||Xb(e)===Oe)?` out`:``,M=(e,t)=>e.map((e,n)=>`<div class="slot ${n===(t===`hex`?Fb:Ib)?`sel`:``} ${ve(e)}${Ae(Yb(t)[n])}" style="--c:${ge(e)}">
      ${Ae(Yb(t)[n])?ke:``}<span>${De(Te(n,t))}${V(ye(e))}</span><small>${_e(e)}</small></div>`),Me=se.map((e,t)=>`<div class="slot ${t===Lb?`sel`:``}${Ae(Yb(`pot`)[t])}" style="--c:${ge(e)}">
      ${Yb(`pot`)[t]===Oe?ke:``}<span>${De(Ee(t))}${V(Ce(e))}</span><small>potion ×${e.n}</small></div>`);X(`hud-bag`).hidden=!s||!$.bag.length;let Ne={util:{slots:M(oe,`util`),color:ne.Mysticism,head:Nb?`UTILITY <b>LB</b> cast · <b>◀</b>`:`UTILITY <b>E</b> · <b>Z</b> · <b>4–6</b>`},pot:{slots:Me,color:ie.heal.color,head:Nb?`POTIONS <b>▼</b> drink · <b>▲</b>`:`POTIONS <b>R</b> · <b>G</b>`},hex:{slots:M(re,`hex`),color:ne.Destruction,head:Nb?`HEXES <b>RB</b> cast · <b>▶</b>`:`HEXES <b>Q</b> · <b>Tab</b> · <b>1–3</b>`}};Ix(X(`hud-bag`),[`util`,`pot`,`hex`].map(e=>{let t=Ne[e];return`<div class="grp ${e}${t.slots.length?``:` empty`}" style="--g:${t.color}"><h4>${t.head}</h4>${t.slots.join(``)}</div>`}).join(``));let Pe=[...re,...oe];(Wb===`hex`?re:oe).length||(Wb=re.length?`hex`:`util`);let Fe=Wb===`hex`?Fb:re.length+Ib;X(`touch-spells`).hidden=!s||!Pe.length,Ix(X(`touch-spells`).querySelector(`.track`),Pe.map((e,t)=>`<div class="card ${t===Fe?`sel`:``} ${t===re.length&&t?`util`:``} ${ve(e)}${Ae([...Yb(`hex`),...Yb(`util`)][t])}" data-i="${t}" style="--c:${ge(e)}">
      <span>${V(ye(e))}</span><small>${ce(e)?`scroll ×${ce(e)}`:`${fe(e)}mp`}</small></div>`).join(``)),n_(`spells`,Pe.length,Fe),X(`touch-cast`).classList.toggle(`off`,!s||!Pe.length),X(`touch-potstrip`).hidden=X(`touch-drink`).hidden=!s||!se.length,Ix(X(`touch-potstrip`).querySelector(`.track`),se.map((e,t)=>`<div class="card ${t===Lb?`sel`:``}${Ae(Yb(`pot`)[t])}" data-i="${t}" style="--c:${ge(e)}">
      <span>${V(Ce(e))}</span><small>×${e.n}</small></div>`).join(``)),n_(`pots`,se.length,Lb),Hx(S),X(`touch-pots`).classList.toggle(`downed`,$.s===`downed`),Ix(X(`touch-pots`),$.s===`downed`&&S?`<button data-btn="pot" data-p="${ae.indexOf(`heal`)}" style="--c:${ie.heal.color}">DRINK<br />NOT DYING${S>1?`<b>×${S}</b>`:``}</button>`:``),X(`touch-ult`).classList.toggle(`ready`,r&&$.s===`alive`),X(`hud-crew`).innerHTML=Q.players.filter(e=>e.id!==by).map(e=>{let t=e.s===`ghost`?`👻`:e.s===`possess`?`👹`:e.s===`escaped`?`🚪`:e.s===`downed`?`🩸 DOWN`:`${e.hp}hp`;return`<div style="color:${p[e.c].color}">${e.bt?`💰 `:``}${V(e.n)} · ${t} · ${e.s===`escaped`?e.bank:e.loot}g</div>`}).join(``);let Ie=Q.players.filter(e=>e.s===`alive`).length,Le=Q.exit,Re=Q.wake,Be=Ny?Le.sealed?`the lift won't come until he's dead`:`the lift is down`:Le.sealed?`lift gone, digging a back door`:Le.seats>=99?`back door open`:`${Le.seats} seat${Le.seats===1?``:`s`} on the lift`,Ve=Ny?`the demon's arena`:Re>0?`wakes in ${Math.floor(Re/60)}:${String(Math.floor(Re%60)).padStart(2,`0`)}`:`THE DUNGEON IS AWAKE`;X(`hud-top`).textContent=My?`THE PIT STOP · Room ${Sy} · floor ${Oy+1} next · ${b}/${y} on the lift`:`Floor ${Oy} · Room ${Sy} · ${Ie} alive · ${Be} · ${Ve}`;let He=te??Q.enemies.find(e=>e.k===`ham`&&e.hp<e.mhp);if(X(`hud-boss`).hidden=!He,document.body.classList.toggle(`bossing`,!!He),He){let e=!!(He.f&le),t=!!He.sm,n=He.k===`demon`?`Belchazzar, Landlord of the Pit${He.ph===2?` · UNBOUND`:``}`:`Swamp Ham`;Ix(X(`hud-boss`),`<b>${n}</b><div class="bar${e?` immune`:``}${t?` open`:``}${He.ph===2?` unbound`:``}"><div style="width:${Math.max(0,100*He.hp/He.mhp).toFixed(1)}%"></div><span>${e?`IMMUNE`:t?`WIDE OPEN · ${He.hp}/${He.mhp}`:`${He.hp}/${He.mhp}`}</span></div>`)}if(X(`touch-use`).classList.toggle(`off`,!s),Ay){let e=ox(Ay.id);!s||!e||Math.hypot(e.x-Hy.x,e.z-Hy.z)>ax?cx():lx()}Ly&&(!My||!s||v?.shop!==Ly.id?dx():mx()),X(`touch-dirty`).classList.toggle(`off`,!s||$.dc>0),X(`touch-roll`).hidden=$.rc===void 0,X(`touch-roll`).classList.toggle(`off`,!s||($.rc??0)>0),X(`touch-abl`).textContent!==t.ability&&(X(`touch-abl`).textContent=t.ability),X(`touch-abl`).classList.toggle(`off`,!s||$.acd>0),Vx(X(`touch-abl`),s?$.acd:0),Vx(X(`touch-dirty`),s?$.dc:0),Vx(X(`touch-roll`),s?$.rc??0:0)}function Vx(e,t){let n=t>0?String(Math.ceil(t)):void 0;e.dataset.cd!==n&&(n?e.dataset.cd=n:delete e.dataset.cd)}function Hx(e){let t=X(`downed`);if(t.hidden=$?.s!==`downed`,t.hidden)return;let n=Math.ceil($.dn??0),r=Xg()?``:`<kbd>${Nb?`▼`:`R`}</kbd>`;Ix(t,`<div class="clock">🩸 ${n}s</div>${e?`<div class="act">${Xg()?`Tap <b>DRINK</b> above the left stick`:r} to drink your <b>Potion of Not Dying</b>${e>1?` (×${e})`:``}</div>
       <div class="alt">or crawl to a crewmate</div>`:`<div class="act">Crawl to a crewmate. They hold <b>${Cb()}</b> on you.</div>
       <div class="alt">or crawl onto a red <b>Potion of Not Dying</b></div>`}
    <div class="alt dim">${kb()}: give up</div>`)}function Ux(e,t){X(`end-headline`).textContent=Oy>1?`${t} · FLOOR ${Oy}`:t;let n=Oy>1;X(`end-table`).innerHTML=`<tr><th>Bastard</th><th>Gold out</th>${n?`<th>Run score</th>`:``}<th>Kills</th><th>Backstabs</th><th>Thefts</th><th>Crew killed</th><th>The fine print</th></tr>`+e.map((e,t)=>`<tr class="${t===0&&e.escaped?`win`:``}">
      <td style="${t===0&&e.escaped?``:`color:${p[e.char].color}`}">${V((e.title?e.title+` `:``)+e.name)}</td>
      <td class="${e.escaped?``:`dead`}">${e.escaped?e.banked:`died broke`}</td>${n?`<td>${e.total}</td>`:``}
      <td>${e.kills}</td><td>${e.backstabs}</td><td>${e.steals}</td><td>${e.teamKills}</td>
      <td class="notes">${e.notes.map(V).join(`<br>`)}</td></tr>`).join(``),X(`overlay`).hidden=!0,mb(),Ky(`end`)}function Wx(e,t,n){return e+ee(t,e)*n}function Gx(){let e=performance.now()-110,t=zy[zy.length-1],n=t;for(let r=zy.length-1;r>0;r--)if(zy[r-1].at<=e){t=zy[r-1],n=zy[r];break}let r=n===t?1:Math.min(1,Math.max(0,(e-t.at)/(n.at-t.at))),i=(e,t)=>{let n=new Map(e.map(e=>[e.id,e]));return t.map(e=>{let t=n.get(e.id);return t?{...e,x:t.x+(e.x-t.x)*r,z:t.z+(e.z-t.z)*r,a:Wx(t.a,e.a,r)}:e})},a=i(t.s.players,n.s.players).map(e=>{let t=e.id===by,n=Q.players.find(t=>t.id===e.id)??e;return{id:e.id,name:n.n,title:n.t,char:n.c,state:n.s,hp:n.hp,mhp:n.mhp,me:t,x:t?Hy.x:e.x,z:t?Hy.z:e.z,a:t?Pb:e.a,f:n.f}}),o=e=>e.map(e=>({...e,a:0}));return{players:a,enemies:i(t.s.enemies,n.s.enemies).map(e=>e.r===by&&$?.s===`possess`?{...e,x:Hy.x,z:Hy.z,a:Pb}:e),bolts:i(o(t.s.bolts),o(n.s.bolts))}}function Kx(e,t,n){let r=()=>{let r=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*n*.9;return[e+Math.cos(r)*i,t+Math.sin(r)*i]};return[...r(),...r()]}var qx=0;function Jx(e,t){if(qx+=e,!(qx<.12||!Q)){qx=0;for(let e of Q.puddles)if(e.k===`fire`){let t=Math.random()*Math.PI*2,n=Math.random()*e.r*.7;Z.fxMotes(e.x+Math.cos(t)*n,e.z+Math.sin(t)*n,Math.random()<.5?`#ff7a1a`:`#ffd23a`,2,1.8,.5)}else e.e&&Z.fxZap(Kx(e.x,e.z,e.r),`#a0f0ff`);for(let e of t)e.f&131072?Z.fxMotes(e.x,e.z,Math.random()<.5?`#ff7a1a`:`#ffd23a`,2,2,.3):e.f&262144&&Math.random()<.4&&Z.fxBurst(e.x,e.z,`#5aa8e8`,1,.7,1)}}var Yx=performance.now(),Xx=0;function Zx(e){requestAnimationFrame(Zx);let t=Math.min(.1,(e-Yx)/1e3);Yx=e;let n=[`title`,`lobby`,`end`,`pause`,`locker`,`shop`,`gameover`].map(e=>X(e)).find(e=>!e.hidden);if(Ay&&(Ng(1)||Ng(2))&&cx(),Ly&&(Ng(1)||Ng(2))&&dx(),$y()){Ng(4)&&sb(-1),Ng(5)&&sb(1);let e=[...navigator.getGamepads?.()??[]].find(e=>e?.connected)?.axes[3]??0;Math.abs(e)>.2&&(X(`pause-body`).scrollTop+=e*900*t)}let r=Gg();if(Kg(kx()||!n?null:[n,X(`music`)]),kx()&&(Ng(0)||Ng(9))?Ax():Ty===`playing`&&!$y()&&X(`gameover`).hidden&&Ng(9)?eb(!0):$y()&&Ng(1)?eb(!1):Ty===`playing`&&!n&&!r&&!Lm()&&Ng(8)&&(Jm(),Lm()&&Vg(X(`chat-input`))),Jb(!!n||kx()||Ty!==`playing`||$y()||r||Gg()),Ty===`playing`&&Q&&Ey){for(Xx+=t,$y()&&(Xx=0);Xx>=u;){Xx-=u;let e=Ay||Ly?{seq:++Gy,mx:0,mz:0,aim:Pb,atk:!1,abl:!1,ult:!1,cast:!1,ucast:!1,...nx(),pot:-1,use:!1,dirty:!1,roll:!1}:ix();hb({type:`input`,...e}),$&&$.s!==`escaped`&&Uy&&(Wy.push(e),Wy.length>90&&Wy.shift(),xb(e,bb($)))}if(Math.hypot(Vy.x-Hy.x,Vy.z-Hy.z)>3)Hy.x=Vy.x,Hy.z=Vy.z;else{let e=Math.min(1,t*25);Hy.x+=(Vy.x-Hy.x)*e,Hy.z+=(Vy.z-Hy.z)*e}let{players:n,enemies:r,bolts:i}=Gx(),a=Hy;if($?.s===`escaped`){let e=n.find(e=>e.state===`alive`);a=e?{x:e.x,z:e.z}:Ey.exit}Z.updateCamera(t,a),Z.syncPlayers(n,t),Z.syncEnemies(r,t),Z.syncLoot(Q.loot,hx()),Z.syncDownArrows(Q.players.filter(e=>e.id!==by&&e.s===`downed`).map(e=>{let t=n.find(t=>t.id===e.id);return{id:e.id,x:t?.x??e.x,z:t?.z??e.z,dn:e.dn??0,color:p[e.c].color}})),vy.sync(Q.props,Q.heavy,Q.puddles,e/1e3),Z.darkTorches(Q.dark),Jx(t,[...n.filter(e=>e.state===`alive`),...r]),vy.lockers(Q.lockers,Q.players,e/1e3),vy.exit(Q.exit,Z.exitMarker,My?Q.players.length:0,Ny?`LIFT`:`BACK DOOR`),Z.syncPortals(Q.portals,t),Z.syncBombs(Q.bombs),Z.syncBolts(i),Z.syncBookmark($?.s===`alive`?$.mk??null:null)}else Z.updateCamera(t,null),Z.syncDownArrows([]);Z.render(t)}requestAnimationFrame(Zx),Z.buildMap(y(666)),Ky(`title`),removeEventListener(`error`,_y);