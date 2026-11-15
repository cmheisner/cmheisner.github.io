import{Qi as e,_r as t,no as n,xr as r}from"./three.core-Dp-eO7LC.js";function i(){let e=new URLSearchParams(location.search),t=e.get(`look`)===`retro`,n=Number(e.get(`lines`)),r=Number.isFinite(n)&&n>=100?Math.round(n):0,i=(t,n)=>{let r=e.get(t);return r!==null&&r!==``&&Number.isFinite(Number(r))?Math.max(0,Number(r)):n},s=t&&e.get(`filters`)!==`0`;return Object.freeze({look:t?`retro`:`modern`,retro:t,lines:r,filters:s,snap:i(`snap`,a),swim:Math.min(1,i(`swim`,o))})}var a=1,o=.3,s=i(),c=540;function l(e){return s.lines?Math.max(1,Math.round(e/s.lines)):Math.max(1,Math.ceil(e/c))}var u={world:24,prop:32},d=256,f=4;function p(t,n,r,i){if(!s.retro||t.userData.keepSharp||t.userData.retro)return t;let a=L(t),[o,c]=typeof r==`number`?[r,r*(a?a.height/a.width:1)]:r;if(t.userData.retroWant=`${n}/m`,a){let r=n*o,s=n*c,l=x(r),u=x(s);for(;l<f||u<f;)l*=2,u*=2;l=Math.min(l,d,a.width),u=Math.min(u,d,a.height);let p=t.colorSpace===e;if(i){let e=L(i);e&&e.width===a.width&&e.height===a.height&&S(a.data,e.data,p)}let m=R(a.data,a.width,a.height,l,u,p);if(t.isDataTexture)t.image={data:m,width:l,height:u};else{let e=document.createElement(`canvas`);e.width=l,e.height=u,e.getContext(`2d`).putImageData(new ImageData(m,l,u),0,0),t.image=e}t.userData.retroFit=[r/l,s/u]}return b(t),t.userData.retro=!0,t.needsUpdate=!0,t}function m(t){if(!s.retro||t.userData.retroFace)return t;let n=L(t);if(!n)return t;let{data:r,width:i,height:a}=n,o=new Float32Array(256),c=t.colorSpace===e;for(let e=0;e<256;e++)o[e]=c?z(e/255):e/255;let l=i>>1,u=a>>1,d=a,f=new Float64Array(4);for(let e=u;e<d;e+=4)for(let t=0;t<l;t+=4){let n=Math.min(e+4,d),a=Math.min(t+4,l);f.fill(0);for(let s=e;s<n;s++)for(let e=t;e<a;e++){let t=(s*i+e)*4;f[0]+=o[r[t]],f[1]+=o[r[t+1]],f[2]+=o[r[t+2]],f[3]+=r[t+3]}let s=(n-e)*(a-t),u=Math.round((c?B(f[0]/s):f[0]/s)*255),p=Math.round((c?B(f[1]/s):f[1]/s)*255),m=Math.round((c?B(f[2]/s):f[2]/s)*255),h=Math.round(f[3]/s);for(let o=e;o<n;o++)for(let e=t;e<a;e++){let t=(o*i+e)*4;r[t]=u,r[t+1]=p,r[t+2]=m,r[t+3]=h}}if(t.isDataTexture)t.image={data:r,width:i,height:a};else{let e=document.createElement(`canvas`);e.width=i,e.height=a,e.getContext(`2d`).putImageData(new ImageData(r,i,a),0,0),t.image=e}return t.userData.retroFace=!0,t.needsUpdate=!0,t}function h(e){let t=e.userData.retroFit;if(!s.retro||!t)return;let n=e.repeat,r=n.x*t[0];n.set(Number.isInteger(n.x)&&n.x>=2?Math.max(1,Math.round(r)):r,n.y*t[1])}var g=new Set,_=1;function v(e){return s.retro&&(e.userData.offsetFactor=e.polygonOffsetFactor,e.polygonOffsetFactor=e.userData.offsetFactor/_,g.add(e),e.addEventListener(`dispose`,()=>g.delete(e))),e}function y(e){_=e;for(let t of g)t.polygonOffsetFactor=t.userData.offsetFactor/e}function b(e){e.magFilter=t,e.minFilter=r,e.generateMipmaps=!0,e.anisotropy=1}function x(e){return 2**Math.max(0,Math.round(Math.log2(Math.max(1,e))))}function S(e,t,n){let r=-.45,i=.45,a=.77,o=Math.hypot(r,i,a),s=r/o,c=i/o,l=a/o;for(let r=0;r<e.length;r+=4){let i=t[r]/127.5-1,a=t[r+1]/127.5-1,o=t[r+2]/127.5-1,u=Math.min(1.35,Math.max(.55,1+C*(i*s+a*c+o*l-l)));for(let t=0;t<3;t++){let i=e[r+t]/255;e[r+t]=Math.round((n?B(Math.min(1,z(i)*u)):Math.min(1,i*u))*255)}}}var C=1.6;function w(e){return s.retro?1:e}function T(e){return e.userData.keepSharp=!0,e}function E(e){if(!s.retro)return e;let t=e.lastIndexOf(`}`);return e.slice(0,t)+`
#include <tonemapping_fragment>
#include <colorspace_fragment>
`+e.slice(t)}var D={vfGrid:{value:new n},vfOn:{value:0},vfDither:{value:1},vfSwim:{value:s.swim}},O=`/* vf-snap */`,k=`
uniform vec2 vfGrid;
uniform float vfOn;
#if defined( VF_SWIM ) && defined( USE_MAP )
varying vec3 vfAffine;
#endif
`,A=`
	if ( vfOn > 0.5 && vfGrid.x > 0.0 && gl_Position.w > 1e-3 ) {
		vec2 vfPx = ( gl_Position.xy / gl_Position.w * 0.5 + 0.5 ) * vfGrid;
		gl_Position.xy = ( floor( vfPx + 0.5 ) / vfGrid * 2.0 - 1.0 ) * gl_Position.w;
	}
#if defined( VF_SWIM ) && defined( USE_MAP )
	vfAffine = vec3( vMapUv * gl_Position.w, gl_Position.w );
#endif
`,j=`
uniform float vfOn;
uniform float vfDither;
uniform float vfSwim;
float vfBayer( vec2 p ) {
	const float m[ 16 ] = float[ 16 ]( 0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0 );
	ivec2 i = ivec2( mod( p, 4.0 ) );
	return ( m[ i.x + i.y * 4 ] + 0.5 ) / 16.0 - 0.5;
}
`,M=`
#if defined( VF_SWIM ) && defined( USE_MAP )
varying vec3 vfAffine;
vec2 vfMapUv;
#define vMapUv vfMapUv
#endif
`,N=`
#if defined( VF_SWIM ) && defined( USE_MAP )
#undef vMapUv
	vfMapUv = mix( vMapUv, vfAffine.xy / vfAffine.z, vfSwim * vfOn );
#define vMapUv vfMapUv
#endif
`,P=`
	if ( vfOn * vfDither > 0.5 ) gl_FragColor.rgb = clamp( floor( gl_FragColor.rgb * 31.0 + vfBayer( gl_FragCoord.xy ) + 0.5 ) / 31.0, 0.0, 1.0 );
`;function F(e,t){if(!s.filters)return;let n=e;if(n?.isMeshDepthMaterial||n?.isMeshDistanceMaterial)return;let r=t.vertexShader,i=t.fragmentShader,a=r.includes(`#include <project_vertex>`),o=r.includes(O),c=i.includes(`#include <colorspace_fragment>`);if(!a&&!o&&!c)return;let l=a&&c&&r.includes(`#include <uv_vertex>`)&&i.includes(`#include <uv_pars_fragment>`)&&i.includes(`#include <map_fragment>`)&&i.includes(`void main() {`),u=l?`#define VF_SWIM
`:``;if(Object.assign(t.uniforms,D),(a||o)&&(r=u+k+r,r=a?r.replace(`#include <project_vertex>`,`#include <project_vertex>
`+A):r.replace(O,A)),c){i=u+j+i,l&&(i=i.replace(`#include <uv_pars_fragment>`,`#include <uv_pars_fragment>
`+M).replace(`void main() {`,`void main() {
`+N));let e=i.lastIndexOf(`}`);i=i.slice(0,e)+P+i.slice(e)}t.vertexShader=r,t.fragmentShader=i}function I(e){if(!s.filters)return e;let t=e.lastIndexOf(`}`);return e.slice(0,t)+`/* vf-snap */
`+e.slice(t)}function L(e){let t=e.image;if(!t||!t.width||!t.height)return null;if(t.data)return t.data instanceof Uint8Array||t.data instanceof Uint8ClampedArray?{data:new Uint8ClampedArray(t.data.buffer,t.data.byteOffset,t.width*t.height*4),width:t.width,height:t.height}:null;let n=document.createElement(`canvas`);n.width=t.width,n.height=t.height;let r=n.getContext(`2d`,{willReadFrequently:!0});return r.drawImage(t,0,0),{data:r.getImageData(0,0,t.width,t.height).data,width:t.width,height:t.height}}function R(e,t,n,r,i,a){let o=new Float32Array(256);for(let e=0;e<256;e++)o[e]=a?z(e/255):e/255;let s=new Uint8ClampedArray(r*i*4),c=new Float64Array(4);for(let l=0;l<i;l++){let u=Math.floor(l*n/i),d=Math.max(u+1,Math.floor((l+1)*n/i));for(let n=0;n<r;n++){let i=Math.floor(n*t/r),f=Math.max(i+1,Math.floor((n+1)*t/r));c.fill(0);for(let n=u;n<d;n++)for(let r=i;r<f;r++){let i=(n*t+r)*4;c[0]+=o[e[i]],c[1]+=o[e[i+1]],c[2]+=o[e[i+2]],c[3]+=e[i+3]}let p=(d-u)*(f-i),m=(l*r+n)*4;for(let e=0;e<3;e++)s[m+e]=Math.round((a?B(c[e]/p):c[e]/p)*255);s[m+3]=Math.round(c[3]/p)}}return s}function z(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function B(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}export{m as a,l as c,E as d,I as f,F as i,p as l,w as m,s as n,v as o,D as p,T as r,h as s,u as t,y as u};