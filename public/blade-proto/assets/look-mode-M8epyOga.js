import{Qi as e,_r as t,no as n,xr as r}from"./three.core-Dp-eO7LC.js";function i(){let e=new URLSearchParams(location.search),t=e.get(`look`),n=t===`retro`||t!==`modern`&&!e.has(`edit`),r=Number(e.get(`lines`)),i=Number.isFinite(r)&&r>=100?Math.round(r):0,c=(t,n)=>{let r=e.get(t);return r!==null&&r!==``&&Number.isFinite(Number(r))?Math.max(0,Number(r)):n},l=n&&e.get(`filters`)!==`0`,u=e.get(`shadowEdge`),d=u===`pcf`||u===`hard`?u:s;return Object.freeze({look:n?`retro`:`modern`,retro:n,lines:i,filters:l,snap:c(`snap`,a),swim:Math.min(1,c(`swim`,o)),shadowEdge:d})}var a=1.1,o=.2,s=`pcf`,c=i(),l=[{name:`Default`,lines:0,snap:1.1,swim:.2,levels:256,objects:[80,400,550],people:[105,500,800]},{name:`Pixel`,lines:200,snap:1.1,swim:.2,levels:180,objects:[135,205,230],people:[80,290,300]}],u={preset:0,...l[0]},d=[];function f(e){d.push(e)}function p(e){let t=new URLSearchParams(location.search);e=(e%l.length+l.length)%l.length,Object.assign(u,l[e],{preset:e}),t.has(`lines`)&&(u.lines=c.lines),t.has(`snap`)&&(u.snap=c.snap),t.has(`swim`)&&(u.swim=c.swim),R.vfSwim.value=u.swim,R.vfLevels.value=Math.max(2,u.levels)-1;for(let e of d)e()}var m=540;function h(e,t){if(!c.retro)return e;let n=(t*.618%1+1)%1;return(Math.floor(e*10+n)-n)/10}var g={w:1,h:1};function _(e,t,n){return c.retro?(g.h=Math.max(.4,.55+.9*(e-.64)/.36+.15*Math.sin(t*17.3+n*3.7)),g.w=.8+.3*(.5+.5*Math.sin(t*13.1+n)),g):(g.w=1,g.h=.85+.3*e,g)}function v(e){return u.lines?Math.max(1,Math.round(e/u.lines)):Math.max(1,Math.ceil(e/m))}var y={world:24,prop:32},b=256,x=4;function S(t,n,r,i){if(!c.retro||t.userData.keepSharp||t.userData.retro)return t;let a=J(t),[o,s]=typeof r==`number`?[r,r*(a?a.height/a.width:1)]:r;if(t.userData.retroWant=`${n}/m`,a){let r=n*o,c=n*s,l=M(r),u=M(c);for(;l<x||u<x;)l*=2,u*=2;l=Math.min(l,b,a.width),u=Math.min(u,b,a.height);let d=t.colorSpace===e;if(i){let e=J(i);e&&e.width===a.width&&e.height===a.height&&N(a.data,e.data,d)}let f=Y(a.data,a.width,a.height,l,u,d);if(t.isDataTexture)t.image={data:f,width:l,height:u};else{let e=document.createElement(`canvas`);e.width=l,e.height=u,e.getContext(`2d`).putImageData(new ImageData(f,l,u),0,0),t.image=e}t.userData.retroFit=[r/l,c/u]}return j(t),t.userData.retro=!0,t.needsUpdate=!0,t}function C(t){if(!c.retro||t.userData.retroFace)return t;let n=J(t);if(!n)return t;let{data:r,width:i,height:a}=n,o=new Float32Array(256),s=t.colorSpace===e;for(let e=0;e<256;e++)o[e]=s?X(e/255):e/255;let l=i>>1,u=a>>1,d=a,f=new Float64Array(4);for(let e=u;e<d;e+=4)for(let t=0;t<l;t+=4){let n=Math.min(e+4,d),a=Math.min(t+4,l);f.fill(0);for(let s=e;s<n;s++)for(let e=t;e<a;e++){let t=(s*i+e)*4;f[0]+=o[r[t]],f[1]+=o[r[t+1]],f[2]+=o[r[t+2]],f[3]+=r[t+3]}let c=(n-e)*(a-t),u=Math.round((s?Z(f[0]/c):f[0]/c)*255),p=Math.round((s?Z(f[1]/c):f[1]/c)*255),m=Math.round((s?Z(f[2]/c):f[2]/c)*255),h=Math.round(f[3]/c);for(let o=e;o<n;o++)for(let e=t;e<a;e++){let t=(o*i+e)*4;r[t]=u,r[t+1]=p,r[t+2]=m,r[t+3]=h}}if(t.isDataTexture)t.image={data:r,width:i,height:a};else{let e=document.createElement(`canvas`);e.width=i,e.height=a,e.getContext(`2d`).putImageData(new ImageData(r,i,a),0,0),t.image=e}return t.userData.retroFace=!0,t.needsUpdate=!0,t}function w(e){let t=e.userData.retroFit;if(!c.retro||!t)return;let n=e.repeat,r=n.x*t[0];n.set(Number.isInteger(n.x)&&n.x>=2?Math.max(1,Math.round(r)):r,n.y*t[1])}var T=new Set,E=1;function D(e){return c.retro&&(e.userData.offsetFactor=e.polygonOffsetFactor,e.polygonOffsetFactor=e.userData.offsetFactor/E,T.add(e),e.addEventListener(`dispose`,()=>T.delete(e))),e}function O(e){E=e;for(let t of T)t.polygonOffsetFactor=t.userData.offsetFactor/e}function k(e){if(!c.retro)return 0;let t=new Set;for(let n of e)n.traverse(e=>{let n=e.material;if(n)for(let e of Array.isArray(n)?n:[n])!t.has(e)&&e.isMeshStandardMaterial&&(t.add(e),A(e))});return t.size}function A(e){if(e.userData.flat)return;e.userData.flat=!0;let t=e;(e.roughnessMap||t.isMeshPhysicalMaterial&&(t.clearcoat>0||t.sheen>0||t.iridescence>0))&&(e.needsUpdate=!0),e.roughness=1,e.roughnessMap=null,e.envMapIntensity=0,t.isMeshPhysicalMaterial&&(t.clearcoat=0,t.sheen=0,t.iridescence=0)}function j(e){e.magFilter=t,e.minFilter=r,e.generateMipmaps=!0,e.anisotropy=1}function M(e){return 2**Math.max(0,Math.round(Math.log2(Math.max(1,e))))}function N(e,t,n){let r=-.45,i=.45,a=.77,o=Math.hypot(r,i,a),s=r/o,c=i/o,l=a/o;for(let r=0;r<e.length;r+=4){let i=t[r]/127.5-1,a=t[r+1]/127.5-1,o=t[r+2]/127.5-1,u=Math.min(1.35,Math.max(.55,1+P*(i*s+a*c+o*l-l)));for(let t=0;t<3;t++){let i=e[r+t]/255;e[r+t]=Math.round((n?Z(Math.min(1,X(i)*u)):Math.min(1,i*u))*255)}}}var P=1.6;function F(e){return c.retro?1:e}function I(e){return e.userData.keepSharp=!0,e}function L(e){if(!c.retro)return e;let t=e.lastIndexOf(`}`);return e.slice(0,t)+`
#include <tonemapping_fragment>
#include <colorspace_fragment>
`+e.slice(t)}var R={vfGrid:{value:new n},vfOn:{value:0},vfDither:{value:1},vfSwim:{value:c.swim},vfLevels:{value:255}};{let e=(new URLSearchParams(location.search).get(`preset`)??``).toLowerCase();p(Math.max(0,l.findIndex(t=>t.name.toLowerCase()===e)))}var z=`/* vf-snap */`,B=`
uniform vec2 vfGrid;
uniform float vfOn;
#if defined( VF_SWIM ) && defined( USE_MAP )
varying vec3 vfAffine;
#endif
`,V=`
	if ( vfOn > 0.5 && vfGrid.x > 0.0 && gl_Position.w > 1e-3 ) {
		vec2 vfPx = ( gl_Position.xy / gl_Position.w * 0.5 + 0.5 ) * vfGrid;
		gl_Position.xy = ( floor( vfPx + 0.5 ) / vfGrid * 2.0 - 1.0 ) * gl_Position.w;
	}
#if defined( VF_SWIM ) && defined( USE_MAP )
	vfAffine = vec3( vMapUv * gl_Position.w, gl_Position.w );
#endif
`,H=`
uniform float vfOn;
uniform float vfDither;
uniform float vfSwim;
uniform float vfLevels;
float vfBayer( vec2 p ) {
	const float m[ 16 ] = float[ 16 ]( 0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0 );
	ivec2 i = ivec2( mod( p, 4.0 ) );
	return ( m[ i.x + i.y * 4 ] + 0.5 ) / 16.0 - 0.5;
}
`,U=`
#if defined( VF_SWIM ) && defined( USE_MAP )
varying vec3 vfAffine;
vec2 vfMapUv;
#define vMapUv vfMapUv
#endif
`,W=`
#if defined( VF_SWIM ) && defined( USE_MAP )
#undef vMapUv
	vfMapUv = mix( vMapUv, vfAffine.xy / vfAffine.z, vfSwim * vfOn );
#define vMapUv vfMapUv
#endif
`,G=`
	if ( vfOn * vfDither > 0.5 ) gl_FragColor.rgb = clamp( floor( gl_FragColor.rgb * vfLevels + vfBayer( gl_FragCoord.xy ) + 0.5 ) / vfLevels, 0.0, 1.0 );
`;function K(e,t){if(!c.filters)return;let n=e;if(n?.isMeshDepthMaterial||n?.isMeshDistanceMaterial)return;let r=t.vertexShader,i=t.fragmentShader,a=r.includes(`#include <project_vertex>`),o=r.includes(z),s=i.includes(`#include <colorspace_fragment>`);if(!a&&!o&&!s)return;let l=a&&s&&r.includes(`#include <uv_vertex>`)&&i.includes(`#include <uv_pars_fragment>`)&&i.includes(`#include <map_fragment>`)&&i.includes(`void main() {`),u=l?`#define VF_SWIM
`:``;if(Object.assign(t.uniforms,R),(a||o)&&(r=u+B+r,r=a?r.replace(`#include <project_vertex>`,`#include <project_vertex>
`+V):r.replace(z,V)),s){i=u+H+i,l&&(i=i.replace(`#include <uv_pars_fragment>`,`#include <uv_pars_fragment>
`+U).replace(`void main() {`,`void main() {
`+W));let e=i.lastIndexOf(`}`);i=i.slice(0,e)+G+i.slice(e)}t.vertexShader=r,t.fragmentShader=i}function q(e){if(!c.filters)return e;let t=e.lastIndexOf(`}`);return e.slice(0,t)+`/* vf-snap */
`+e.slice(t)}function J(e){let t=e.image;if(!t||!t.width||!t.height)return null;if(t.data)return t.data instanceof Uint8Array||t.data instanceof Uint8ClampedArray?{data:new Uint8ClampedArray(t.data.buffer,t.data.byteOffset,t.width*t.height*4),width:t.width,height:t.height}:null;let n=document.createElement(`canvas`);n.width=t.width,n.height=t.height;let r=n.getContext(`2d`,{willReadFrequently:!0});return r.drawImage(t,0,0),{data:r.getImageData(0,0,t.width,t.height).data,width:t.width,height:t.height}}function Y(e,t,n,r,i,a){let o=new Float32Array(256);for(let e=0;e<256;e++)o[e]=a?X(e/255):e/255;let s=new Uint8ClampedArray(r*i*4),c=new Float64Array(4);for(let l=0;l<i;l++){let u=Math.floor(l*n/i),d=Math.max(u+1,Math.floor((l+1)*n/i));for(let n=0;n<r;n++){let i=Math.floor(n*t/r),f=Math.max(i+1,Math.floor((n+1)*t/r));c.fill(0);for(let n=u;n<d;n++)for(let r=i;r<f;r++){let i=(n*t+r)*4;c[0]+=o[e[i]],c[1]+=o[e[i+1]],c[2]+=o[e[i+2]],c[3]+=e[i+3]}let p=(d-u)*(f-i),m=(l*r+n)*4;for(let e=0;e<3;e++)s[m+e]=Math.round((a?Z(c[e]/p):c[e]/p)*255);s[m+3]=Math.round(c[3]/p)}}return s}function X(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Z(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}export{O as _,_ as a,R as b,I as c,C as d,D as f,p as g,S as h,u as i,f as l,v as m,c as n,h as o,w as p,l as r,k as s,y as t,K as u,L as v,F as x,q as y};