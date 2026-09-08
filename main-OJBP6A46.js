import{c as nf,d as rf,f as Cc,g as sf,h as of,i as af}from"./chunk-SQFYRXBB.js";import{$ as a_,A as Kg,B as df,C as hf,D as go,E as tn,F as As,G as Jg,H as Qg,I as Xr,J as _o,K as wn,L as e_,M as gi,N as _i,O as Dn,P as On,Q as mr,R as Ac,S as jn,T as Ln,U as t_,V as gr,W as n_,X as i_,Y as r_,Z as s_,_ as o_,a as Ng,aa as Pc,b as Fg,ba as l_,c as kg,ca as c_,d as Bg,da as d_,ea as h_,f as Ug,fa as u_,g as Vg,ga as uf,h as zg,ha as ff,i as Hg,ia as f_,j as Gg,ja as p_,k as Wg,ka as Rc,l as Xg,la as m_,m as lf,ma as g_,n as Vn,na as __,o as Ca,oa as v_,p as Ea,q as Aa,qa as Ic,r as Es,s as cf,t as qg,u as Yg,v as jg,w as Ec,x as Zg,y as mo,z as $g}from"./chunk-KNN5FJI4.js";import{$ as rn,$a as xc,$b as Ag,A as dg,Ab as Je,Bb as Hr,Cb as fo,Eb as ni,Fb as Sc,Gb as Qe,Hb as wc,Ib as Ve,J as Sa,Jb as Gr,K as pc,Kb as qi,L as Ii,Lb as Tc,Ma as _g,Mb as ii,N as hg,Na as qn,Nb as Tt,Ob as Ct,Pa as tf,Q as Sn,Qa as vg,Qb as wg,R as Qt,Ra as H,Rb as Tg,Sb as Cg,T as dn,Ub as At,V as re,Va as xg,Vb as Wr,W as ug,Wa as pr,Wb as $,Xa as wa,Xb as Oe,Y as mc,Ya as Di,Yb as Pt,Za as Xi,Zb as po,_b as Eg,a as ce,aa as sn,ab as Ts,ac as Ta,b as Ze,ba as gc,bb as yg,bc as Pg,c as Xt,ca as fg,cc as Rg,d as zr,da as Rn,dc as Ig,ea as yn,eb as Mt,f as lg,fb as en,g as Jt,gb as Yn,gc as Dg,ha as Ss,i as cg,ia as hn,ib as yc,ic as In,k as Ma,kb as bg,la as pg,ma as Nt,mb as Mg,na as mg,nc as Og,pa as ws,pb as bc,pc as Cs,qa as _c,qb as It,ra as ef,rb as Vt,rc as Oi,sb as zt,ta as un,tb as Sg,u as fc,ua as gg,ub as Mc,uc as Lg,v as uo,vb as fn,w as Qu,wb as pn,xb as ut,yb as F,za as vc,zb as U}from"./chunk-DQZIBOBO.js";var Tb="@",Cb=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=re(Rn);loadingSchedulerFn=re(Eb,{optional:!0});_engine;constructor(t,n,r,s,o){this.doc=t,this.delegate=n,this.zone=r,this.animationType=s,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-262U4GXL.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(r=>{throw new hg(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc);let o=new s(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(t,n){let r=this.delegate.createRenderer(t,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new pf(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let a=o.createRenderer(t,n);s.use(a),this.scheduler??=this.injector.get(mg,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(n){xc()};static \u0275prov=Sn({token:i,factory:i.\u0275fac})}return i})(),pf=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,r){this.delegate.insertBefore(e,t,n,r)}removeChild(e,t,n,r){this.delegate.removeChild(e,t,n,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n,r){return this.shouldReplay(t)&&this.replay.push(s=>s.listen(e,t,n,r)),this.delegate.listen(e,t,n,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(Tb)}},Eb=new dn("");function x_(i="animations"){return xg("NgAsyncAnimations"),ug([{provide:Di,useFactory:()=>new Cb(re(yn),re(kg),re(hn),i)},{provide:vc,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}function mf(i,e){i.indexOf(e)===-1&&i.push(e)}function Ps(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}var zn=(i,e,t)=>t>e?e:t<i?i:t;var Li=()=>{},Zn=()=>{};var Hn={};var Pa=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);var gf=i=>typeof i=="object"&&i!==null;var Ra=i=>/^0[^.\s]+$/u.test(i);function Ia(i){let e;return()=>(e===void 0&&(e=i()),e)}var ri=i=>i;var Rs=(...i)=>i.reduce((e,t)=>n=>t(e(n)));var Is=(i,e,t)=>{let n=e-i;return n?(t-i)/n:1};var Ds=class{constructor(){this.subscriptions=[]}add(e){return mf(this.subscriptions,e),()=>Ps(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let s=0;s<r;s++){let o=this.subscriptions[s];o&&o(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}};var on=i=>i*1e3,Nn=i=>i/1e3;var Da=(i,e)=>e?i*(1e3/e):0;var y_=(i,e,t)=>{let n=e-i;return((t-i)%n+n)%n+i};var b_=(i,e,t)=>(((1-3*t+3*e)*i+(3*t-6*e))*i+3*e)*i,Ab=1e-7,Pb=12;function Rb(i,e,t,n,r){let s,o,a=0;do o=e+(t-e)/2,s=b_(o,n,r)-i,s>0?t=o:e=o;while(Math.abs(s)>Ab&&++a<Pb);return o}function qr(i,e,t,n){if(i===e&&t===n)return ri;let r=s=>Rb(s,0,1,i,t);return s=>s===0||s===1?s:b_(r(s),e,n)}var Dc=i=>e=>e<=.5?i(2*e)/2:(2-i(2*(1-e)))/2;var Os=i=>e=>1-i(1-e);var Oc=qr(.33,1.53,.69,.99),vo=Os(Oc),Oa=Dc(vo);var La=i=>i>=1?1:(i*=2)<1?.5*vo(i):.5*(2-Math.pow(2,-10*(i-1)));var Na=i=>1-Math.sin(Math.acos(i)),_f=Os(Na),Fa=Dc(Na);var vf=qr(.42,0,1,1),xf=qr(0,0,.58,1),ka=qr(.42,0,.58,1);var Ba=i=>Array.isArray(i)&&typeof i[0]!="number";function Ua(i,e){return Ba(i)?i[y_(0,i.length,e)]:i}var Va=i=>Array.isArray(i)&&typeof i[0]=="number";var M_={linear:ri,easeIn:vf,easeInOut:ka,easeOut:xf,circIn:Na,circInOut:Fa,circOut:_f,backIn:vo,backInOut:Oa,backOut:Oc,anticipate:La},Ib=i=>typeof i=="string",Lc=i=>{if(Va(i)){Zn(i.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");let[e,t,n,r]=i;return qr(e,t,n,r)}else if(Ib(i))return Zn(M_[i]!==void 0,`Invalid easing type '${i}'`,"invalid-easing-type"),M_[i];return i};var za=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function S_(i){let e=new Set,t=new Set,n=!1,r=!1,s=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),i()),c(o)}let l={schedule:(c,d=!1,u=!1)=>{let f=u&&n?e:t;return d&&s.add(c),f.add(c),c},cancel:c=>{t.delete(c),s.delete(c)},process:c=>{if(o=c,n){r=!0;return}n=!0;let d=e;e=t,t=d,e.forEach(a),e.clear(),n=!1,r&&(r=!1,l.process(c))}};return l}var Db=40;function Nc(i,e){let t=!1,n=!0,r={delta:0,timestamp:0,isProcessing:!1},s=()=>t=!0,o=za.reduce((E,b)=>(E[b]=S_(s),E),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:d,update:u,preRender:h,render:f,postRender:g}=o,x=()=>{let E=Hn.useManualTiming,b=E?r.timestamp:performance.now();t=!1,E||(r.delta=n?1e3/60:Math.max(Math.min(b-r.timestamp,Db),1)),r.timestamp=b,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),d.process(r),u.process(r),h.process(r),f.process(r),g.process(r),r.isProcessing=!1,t&&e&&(n=!1,i(x))},m=()=>{t=!0,n=!0,r.isProcessing||i(x)};return{schedule:za.reduce((E,b)=>{let w=o[b];return E[b]=(M,A=!1,v=!1)=>(t||m(),w.schedule(M,A,v)),E},{}),cancel:E=>{for(let b=0;b<za.length;b++)o[za[b]].cancel(E)},state:r,steps:o}}var{schedule:Fn,cancel:Ha,state:xo,steps:pI}=Nc(typeof requestAnimationFrame<"u"?requestAnimationFrame:ri,!0);var Fc;function Ob(){Fc=void 0}var mn={now:()=>(Fc===void 0&&mn.set(xo.isProcessing||Hn.useManualTiming?xo.timestamp:performance.now()),Fc),set:i=>{Fc=i,queueMicrotask(Ob)}};var w_=i=>e=>typeof e=="string"&&e.startsWith(i),kc=w_("--"),Lb=w_("var(--"),yo=i=>Lb(i)?Nb.test(i.split("/*")[0].trim()):!1,Nb=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function yf(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}var Yi={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},_r=Ze(ce({},Yi),{transform:i=>zn(0,1,i)}),Ga=Ze(ce({},Yi),{default:1});var Yr=i=>Math.round(i*1e5)/1e5;var bo=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function T_(i){return i==null}var C_=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;var Mo=(i,e)=>t=>!!(typeof t=="string"&&C_.test(t)&&t.startsWith(i)||e&&!T_(t)&&Object.prototype.hasOwnProperty.call(t,e)),Bc=(i,e,t)=>n=>{if(typeof n!="string")return n;let[r,s,o,a]=n.match(bo);return{[i]:parseFloat(r),[e]:parseFloat(s),[t]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}};var Fb=i=>zn(0,255,i),bf=Ze(ce({},Yi),{transform:i=>Math.round(Fb(i))}),ji={test:Mo("rgb","red"),parse:Bc("red","green","blue"),transform:({red:i,green:e,blue:t,alpha:n=1})=>"rgba("+bf.transform(i)+", "+bf.transform(e)+", "+bf.transform(t)+", "+Yr(_r.transform(n))+")"};function kb(i){let e="",t="",n="",r="";return i.length>5?(e=i.substring(1,3),t=i.substring(3,5),n=i.substring(5,7),r=i.substring(7,9)):(e=i.substring(1,2),t=i.substring(2,3),n=i.substring(3,4),r=i.substring(4,5),e+=e,t+=t,n+=n,r+=r),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}var Wa={test:Mo("#"),parse:kb,transform:ji.transform};var Xa=i=>({test:e=>typeof e=="string"&&e.endsWith(i)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${i}`}),Ni=Xa("deg"),jr=Xa("%"),Ce=Xa("px"),E_=Xa("vh"),A_=Xa("vw"),Mf=Ze(ce({},jr),{parse:i=>jr.parse(i)/100,transform:i=>jr.transform(i*100)});var Zr={test:Mo("hsl","hue"),parse:Bc("hue","saturation","lightness"),transform:({hue:i,saturation:e,lightness:t,alpha:n=1})=>"hsla("+Math.round(i)+", "+jr.transform(Yr(e))+", "+jr.transform(Yr(t))+", "+Yr(_r.transform(n))+")"};var Ht={test:i=>ji.test(i)||Wa.test(i)||Zr.test(i),parse:i=>ji.test(i)?ji.parse(i):Zr.test(i)?Zr.parse(i):Wa.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?ji.transform(i):Zr.transform(i),getAnimatableNone:i=>{let e=Ht.parse(i);return e.alpha=0,Ht.transform(e)}};var P_=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Bb(i){return isNaN(i)&&typeof i=="string"&&(i.match(bo)?.length||0)+(i.match(P_)?.length||0)>0}var I_="number",D_="color",Ub="var",Vb="var(",R_="${}",zb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $r(i){let e=i.toString(),t=[],n={color:[],number:[],var:[]},r=[],s=0,a=e.replace(zb,l=>(Ht.test(l)?(n.color.push(s),r.push(D_),t.push(Ht.parse(l))):l.startsWith(Vb)?(n.var.push(s),r.push(Ub),t.push(l)):(n.number.push(s),r.push(I_),t.push(parseFloat(l))),++s,R_)).split(R_);return{values:t,split:a,indexes:n,types:r}}function Hb(i){return $r(i).values}function O_({split:i,types:e}){let t=i.length;return n=>{let r="";for(let s=0;s<t;s++)if(r+=i[s],n[s]!==void 0){let o=e[s];o===I_?r+=Yr(n[s]):o===D_?r+=Ht.transform(n[s]):r+=n[s]}return r}}function Gb(i){return O_($r(i))}var Wb=i=>typeof i=="number"?0:Ht.test(i)?Ht.getAnimatableNone(i):i,Xb=(i,e)=>typeof i=="number"?e?.trim().endsWith("/")?i:0:Wb(i);function qb(i){let e=$r(i);return O_(e)(e.values.map((n,r)=>Xb(n,e.split[r])))}var gn={test:Bb,parse:Hb,createTransformer:Gb,getAnimatableNone:qb};function Sf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i}function L_({hue:i,saturation:e,lightness:t,alpha:n}){i/=360,e/=100,t/=100;let r=0,s=0,o=0;if(!e)r=s=o=t;else{let a=t<.5?t*(1+e):t+e-t*e,l=2*t-a;r=Sf(l,a,i+1/3),s=Sf(l,a,i),o=Sf(l,a,i-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:n}}function So(i,e){return t=>t>0?e:i}var si=(i,e,t)=>i+(e-i)*t;var wf=(i,e,t)=>{let n=i*i,r=t*(e*e-n)+n;return r<0?0:Math.sqrt(r)},Yb=[Wa,ji,Zr],jb=i=>Yb.find(e=>e.test(i));function N_(i){let e=jb(i);if(Li(!!e,`'${i}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!e)return!1;let t=e.parse(i);return e===Zr&&(t=L_(t)),t}var Tf=(i,e)=>{let t=N_(i),n=N_(e);if(!t||!n)return So(i,e);let r=ce({},t);return s=>(r.red=wf(t.red,n.red,s),r.green=wf(t.green,n.green,s),r.blue=wf(t.blue,n.blue,s),r.alpha=si(t.alpha,n.alpha,s),ji.transform(r))};var Uc=new Set(["none","hidden"]);function F_(i,e){return Uc.has(i)?t=>t<=0?i:e:t=>t>=1?e:i}function Zb(i,e){return t=>si(i,e,t)}function Vc(i){return typeof i=="number"?Zb:typeof i=="string"?yo(i)?So:Ht.test(i)?Tf:Jb:Array.isArray(i)?k_:typeof i=="object"?Ht.test(i)?Tf:$b:So}function k_(i,e){let t=[...i],n=t.length,r=i.map((s,o)=>Vc(s)(s,e[o]));return s=>{for(let o=0;o<n;o++)t[o]=r[o](s);return t}}function $b(i,e){let t=ce(ce({},i),e),n={};for(let r in t)i[r]!==void 0&&e[r]!==void 0&&(n[r]=Vc(i[r])(i[r],e[r]));return r=>{for(let s in n)t[s]=n[s](r);return t}}function Kb(i,e){let t=[],n={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){let s=e.types[r],o=i.indexes[s][n[s]],a=i.values[o]??0;t[r]=a,n[s]++}return t}var Jb=(i,e)=>{let t=gn.createTransformer(e),n=$r(i),r=$r(e);return n.indexes.var.length===r.indexes.var.length&&n.indexes.color.length===r.indexes.color.length&&n.indexes.number.length>=r.indexes.number.length?Uc.has(i)&&!r.values.length||Uc.has(e)&&!n.values.length?F_(i,e):Rs(k_(Kb(n,r),r.values),t):(Li(!0,`Complex values '${i}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),So(i,e))};function zc(i,e,t){return typeof i=="number"&&typeof e=="number"&&typeof t=="number"?si(i,e,t):Vc(i)(i,e)}var B_=i=>{let e=({timestamp:t})=>i(t);return{start:(t=!0)=>Fn.update(e,t),stop:()=>Ha(e),now:()=>xo.isProcessing?xo.timestamp:mn.now()}};var Hc=(i,e,t=10)=>{let n="",r=Math.max(Math.round(e/t),2);for(let s=0;s<r;s++)n+=Math.round(i(s/(r-1))*1e4)/1e4+", ";return`linear(${n.substring(0,n.length-2)})`};function wo(i){let e=0,t=50,n=i.next(e);for(;!n.done&&e<2e4;)e+=t,n=i.next(e);return e>=2e4?1/0:e}function qa(i,e=100,t){let n=t(Ze(ce({},i),{keyframes:[0,e]})),r=Math.min(wo(n),2e4);return{type:"keyframes",ease:s=>n.next(r*s).value/e,duration:Nn(r)}}var qt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Af(i,e){return i*Math.sqrt(1-e*e)}var Qb=12;function eM(i,e,t){let n=t;for(let r=1;r<Qb;r++)n=n-i(n)/e(n);return n}var Ef=.001;function tM({duration:i=qt.duration,bounce:e=qt.bounce,velocity:t=qt.velocity,mass:n=qt.mass}){let r,s;Li(i<=on(qt.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let o=1-e;o=zn(qt.minDamping,qt.maxDamping,o),i=zn(qt.minDuration,qt.maxDuration,Nn(i)),o<1?(r=c=>{let d=c*o,u=d*i,h=d-t,f=Af(c,o),g=Math.exp(-u);return Ef-h/f*g},s=c=>{let u=c*o*i,h=u*t+t,f=Math.pow(o,2)*Math.pow(c,2)*i,g=Math.exp(-u),x=Af(Math.pow(c,2),o);return(-r(c)+Ef>0?-1:1)*((h-f)*g)/x}):(r=c=>{let d=Math.exp(-c*i),u=(c-t)*i+1;return-Ef+d*u},s=c=>{let d=Math.exp(-c*i),u=(t-c)*(i*i);return d*u});let a=5/i,l=eM(r,s,a);if(i=on(i),isNaN(l))return{stiffness:qt.stiffness,damping:qt.damping,duration:i};{let c=Math.pow(l,2)*n;return{stiffness:c,damping:o*2*Math.sqrt(n*c),duration:i}}}var nM=["duration","bounce"],iM=["stiffness","damping","mass"];function U_(i,e){return e.some(t=>i[t]!==void 0)}function rM(i){let e=ce({velocity:qt.velocity,stiffness:qt.stiffness,damping:qt.damping,mass:qt.mass,isResolvedFromDuration:!1},i);if(!U_(i,iM)&&U_(i,nM))if(e.velocity=0,i.visualDuration){let t=i.visualDuration,n=2*Math.PI/(t*1.2),r=n*n,s=2*zn(.05,1,1-(i.bounce||0))*Math.sqrt(r);e=Ze(ce({},e),{mass:qt.mass,stiffness:r,damping:s})}else{let t=tM(Ze(ce({},i),{velocity:0}));e=Ze(ce(ce({},e),t),{mass:qt.mass}),e.isResolvedFromDuration=!0}return e}function vr(i=qt.visualDuration,e=qt.bounce){let t=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:e}:i,{restSpeed:n,restDelta:r}=t,s=t.keyframes[0],o=t.keyframes[t.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:d,duration:u,velocity:h,isResolvedFromDuration:f}=rM(Ze(ce({},t),{velocity:-Nn(t.velocity||0)})),g=h||0,x=c/(2*Math.sqrt(l*d)),m=o-s,p=Nn(Math.sqrt(l/d)),C=Math.abs(m)<5;n||(n=C?qt.restSpeed.granular:qt.restSpeed.default),r||(r=C?qt.restDelta.granular:qt.restDelta.default);let E,b,w,M,A,v;if(x<1)w=Af(p,x),M=(g+x*p*m)/w,E=R=>{let P=Math.exp(-x*p*R);return o-P*(M*Math.sin(w*R)+m*Math.cos(w*R))},A=x*p*M+m*w,v=x*p*m-M*w,b=R=>Math.exp(-x*p*R)*(A*Math.sin(w*R)+v*Math.cos(w*R));else if(x===1){E=P=>o-Math.exp(-p*P)*(m+(g+p*m)*P);let R=g+p*m;b=P=>Math.exp(-p*P)*(p*R*P-g)}else{let R=p*Math.sqrt(x*x-1);E=Q=>{let D=Math.exp(-x*p*Q),q=Math.min(R*Q,300);return o-D*((g+x*p*m)*Math.sinh(q)+R*m*Math.cosh(q))/R};let P=(g+x*p*m)/R,N=x*p*P-m*R,j=x*p*m-P*R;b=Q=>{let D=Math.exp(-x*p*Q),q=Math.min(R*Q,300);return D*(N*Math.sinh(q)+j*Math.cosh(q))}}let T={calculatedDuration:f&&u||null,velocity:R=>on(b(R)),next:R=>{if(!f&&x<1){let N=Math.exp(-x*p*R),j=Math.sin(w*R),Q=Math.cos(w*R),D=o-N*(M*j+m*Q),q=on(N*(A*j+v*Q));return a.done=Math.abs(q)<=n&&Math.abs(o-D)<=r,a.value=a.done?o:D,a}let P=E(R);if(f)a.done=R>=u;else{let N=on(b(R));a.done=Math.abs(N)<=n&&Math.abs(o-P)<=r}return a.value=a.done?o:P,a},toString:()=>{let R=Math.min(wo(T),2e4),P=Hc(N=>T.next(R*N).value,R,30);return R+"ms "+P},toTransition:()=>{}};return T}vr.applyToOptions=i=>{let e=qa(i,100,vr);return i.ease=e.ease,i.duration=on(e.duration),i.type="keyframes",i};var sM=5;function Gc(i,e,t){let n=Math.max(e-sM,0);return Da(t-i(n),e-n)}function Ya({keyframes:i,velocity:e=0,power:t=.8,timeConstant:n=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:d}){let u=i[0],h={done:!1,value:u},f=v=>a!==void 0&&v<a||l!==void 0&&v>l,g=v=>a===void 0?l:l===void 0||Math.abs(a-v)<Math.abs(l-v)?a:l,x=t*e,m=u+x,p=o===void 0?m:o(m);p!==m&&(x=p-u);let C=v=>-x*Math.exp(-v/n),E=v=>p+C(v),b=v=>{let T=C(v),R=E(v);h.done=Math.abs(T)<=c,h.value=h.done?p:R},w,M,A=v=>{f(h.value)&&(w=v,M=vr({keyframes:[h.value,g(h.value)],velocity:Gc(E,v,h.value),damping:r,stiffness:s,restDelta:c,restSpeed:d}))};return A(0),{calculatedDuration:null,next:v=>{let T=!1;return!M&&w===void 0&&(T=!0,b(v),A(v)),w!==void 0&&v>=w?M.next(v-w):(!T&&b(v),h)}}}function oM(i,e,t){let n=[],r=t||Hn.mix||zc,s=i.length-1;for(let o=0;o<s;o++){let a=r(i[o],i[o+1]);if(e){let l=Array.isArray(e)?e[o]||ri:e;a=Rs(l,a)}n.push(a)}return n}function V_(i,e,{clamp:t=!0,ease:n,mixer:r}={}){let s=i.length;if(Zn(s===e.length,"Both input and output ranges must be the same length","range-length"),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];let o=i[0]===i[1];i[0]>i[s-1]&&(i=[...i].reverse(),e=[...e].reverse());let a=oM(e,n,r),l=a.length,c=d=>{if(o&&d<i[0])return e[0];let u=0;if(l>1)for(;u<i.length-2&&!(d<i[u+1]);u++);let h=Is(i[u],i[u+1],d);return a[u](h)};return t?d=>c(zn(i[0],i[s-1],d)):c}function ja(i,e){let t=i[i.length-1];for(let n=1;n<=e;n++){let r=Is(0,e,n);i.push(si(t,1,r))}}function Za(i){let e=[0];return ja(e,i.length-1),e}function z_(i,e){return i.map(t=>t*e)}function aM(i,e){return i.map(()=>e||ka).splice(0,i.length-1)}function Ls({duration:i=300,keyframes:e,times:t,ease:n="easeInOut"}){let r=Ba(n)?n.map(Lc):Lc(n),s={done:!1,value:e[0]},o=z_(t&&t.length===e.length?t:Za(e),i),a=V_(o,e,{ease:Array.isArray(r)?r:aM(e,r)});return{calculatedDuration:i,next:l=>(s.value=a(l),s.done=l>=i,s)}}var lM=i=>i!==null;function Kr(i,{repeat:e,repeatType:t="loop"},n,r=1){let s=i.filter(lM),a=r<0||e&&t!=="loop"&&e%2===1?0:s.length-1;return!a||n===void 0?s[a]:n}var cM={decay:Ya,inertia:Ya,tween:Ls,keyframes:Ls,spring:vr};function Wc(i){typeof i.type=="string"&&(i.type=cM[i.type])}var Jr=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}};var dM=i=>i/100,xr=class extends Jr{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:t}=this.options;t&&t.updatedAt!==mn.now()&&this.tick(mn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Wc(e);let{type:t=Ls,repeat:n=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e,{keyframes:a}=e,l=t||Ls;l!==Ls&&typeof a[0]!="number"&&(this.mixKeyframes=Rs(dM,zc(a[0],a[1])),a=[0,100]);let c=l(Ze(ce({},e),{keyframes:a}));s==="mirror"&&(this.mirroredGenerator=l(Ze(ce({},e),{keyframes:[...a].reverse(),velocity:-o}))),c.calculatedDuration===null&&(c.calculatedDuration=wo(c));let{calculatedDuration:d}=c;this.calculatedDuration=d,this.resolvedDuration=d+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:d,repeat:u,repeatType:h,repeatDelay:f,type:g,onUpdate:x,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let p=this.currentTime-c*(this.playbackSpeed>=0?1:-1),C=this.playbackSpeed>=0?p<0:p>r;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let E=this.currentTime,b=n;if(u){let v=Math.min(this.currentTime,r)/a,T=Math.floor(v),R=v%1;!R&&v>=1&&(R=1),R===1&&T--,T=Math.min(T,u+1),T%2&&(h==="reverse"?(R=1-R,f&&(R-=f/a)):h==="mirror"&&(b=o)),E=zn(0,1,R)*a}let w;C?(this.delayState.value=d[0],w=this.delayState):w=b.next(E),s&&!C&&(w.value=s(w.value));let{done:M}=w;!C&&l!==null&&(M=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return A&&g!==Ya&&(w.value=Kr(d,this.options,m,this.speed)),x&&x(w.value),A&&this.finish(),w}then(e,t){return this.finished.then(e,t)}get duration(){return Nn(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Nn(e)}get time(){return Nn(this.currentTime)}set time(e){e=on(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Gc(n=>this.generator.next(n).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(mn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Nn(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=B_,startTime:t}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),this.options.onPlay?.();let n=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=n):this.holdTime!==null?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(mn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}};function H_(i){for(let e=1;e<i.length;e++)i[e]??(i[e]=i[e-1])}var Ns=i=>i*180/Math.PI,Pf=i=>{let e=Ns(Math.atan2(i[1],i[0]));return Rf(e)},hM={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:Pf,rotateZ:Pf,skewX:i=>Ns(Math.atan(i[1])),skewY:i=>Ns(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},Rf=i=>(i=i%360,i<0&&(i+=360),i),G_=Pf,W_=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),X_=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),uM={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:W_,scaleY:X_,scale:i=>(W_(i)+X_(i))/2,rotateX:i=>Rf(Ns(Math.atan2(i[6],i[5]))),rotateY:i=>Rf(Ns(Math.atan2(-i[2],i[0]))),rotateZ:G_,rotate:G_,skewX:i=>Ns(Math.atan(i[4])),skewY:i=>Ns(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function Xc(i){return i.includes("scale")?1:0}function qc(i,e){if(!i||i==="none")return Xc(e);let t=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),n,r;if(t)n=uM,r=t;else{let a=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=hM,r=a}if(!r)return Xc(e);let s=n[e],o=r[1].split(",").map(fM);return typeof s=="function"?s(o):o[s]}var q_=(i,e)=>{let{transform:t="none"}=getComputedStyle(i);return qc(t,e)};function fM(i){return parseFloat(i.trim())}var Zi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],vi=new Set([...Zi,"pathRotation"]);var If=i=>i===Yi||i===Ce,pM=new Set(["x","y","z"]),mM=Zi.filter(i=>!pM.has(i));function Y_(i){let e=[];return mM.forEach(t=>{let n=i.getValue(t);n!==void 0&&(e.push([t,n.get()]),n.set(t.startsWith("scale")?1:0))}),e}var yr={width:({x:i},{paddingLeft:e="0",paddingRight:t="0",boxSizing:n})=>{let r=i.max-i.min;return n==="border-box"?r:r-parseFloat(e)-parseFloat(t)},height:({y:i},{paddingTop:e="0",paddingBottom:t="0",boxSizing:n})=>{let r=i.max-i.min;return n==="border-box"?r:r-parseFloat(e)-parseFloat(t)},top:(i,{top:e})=>parseFloat(e),left:(i,{left:e})=>parseFloat(e),bottom:({y:i},{top:e})=>parseFloat(e)+(i.max-i.min),right:({x:i},{left:e})=>parseFloat(e)+(i.max-i.min),x:(i,{transform:e})=>qc(e,"x"),y:(i,{transform:e})=>qc(e,"y")};yr.translateX=yr.x;yr.translateY=yr.y;var Fs=new Set,Df=!1,Of=!1,Lf=!1;function j_(){if(Of){let i=Array.from(Fs).filter(n=>n.needsMeasurement),e=new Set(i.map(n=>n.element)),t=new Map;e.forEach(n=>{let r=Y_(n);r.length&&(t.set(n,r),n.render())}),i.forEach(n=>n.measureInitialState()),e.forEach(n=>{n.render();let r=t.get(n);r&&r.forEach(([s,o])=>{n.getValue(s)?.set(o)})}),i.forEach(n=>n.measureEndState()),i.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}Of=!1,Df=!1,Fs.forEach(i=>i.complete(Lf)),Fs.clear()}function Z_(){Fs.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Of=!0)})}function $_(){Lf=!0,Z_(),j_(),Lf=!1}var Qr=class{constructor(e,t,n,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Fs.add(this),Df||(Df=!0,Fn.read(Z_),Fn.resolveKeyframes(j_))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let s=r?.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(n&&t){let a=n.readValue(t,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}H_(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Fs.delete(this)}cancel(){this.state==="scheduled"&&(Fs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}};var K_=i=>i.startsWith("--");function Yc(i,e,t){K_(e)?i.style.setProperty(e,t):i.style[e]=t}var J_={};function jc(i,e){let t=Ia(i);return()=>J_[e]??t()}var Q_=jc(()=>window.ScrollTimeline!==void 0,"scrollTimeline");var Zc=jc(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");var ks=([i,e,t,n])=>`cubic-bezier(${i}, ${e}, ${t}, ${n})`;var Nf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ks([0,.65,.55,1]),circOut:ks([.55,0,1,.45]),backIn:ks([.31,.01,.66,-.59]),backOut:ks([.33,1.53,.69,.99])};function Ff(i,e){if(i)return typeof i=="function"?Zc()?Hc(i,e):"ease-out":Va(i)?ks(i):Array.isArray(i)?i.map(t=>Ff(t,e)||Nf.easeOut):Nf[i]}function e0(i,e,t,{delay:n=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){let d={[e]:t};l&&(d.offset=l);let u=Ff(a,r);Array.isArray(u)&&(d.easing=u);let h={delay:n,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),i.animate(d,h)}function Bs(i){return typeof i=="function"&&"applyToOptions"in i}function t0(t){var n=t,{type:i}=n,e=Xt(n,["type"]);return Bs(i)&&Zc()?i.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}var To=class extends Jr{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Zn(typeof e.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");let c=t0(e);this.animation=e0(t,n,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){let d=Kr(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(d),Yc(t,n,d),this.animation.cancel()}l?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Nn(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Nn(e)}get time(){return Nn(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=on(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&Q_()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),ri):r(this)}};var n0={anticipate:La,backInOut:Oa,circInOut:Fa};function gM(i){return i in n0}function i0(i){typeof i.ease=="string"&&gM(i.ease)&&(i.ease=n0[i.ease])}var kf=10,$c=class extends To{constructor(e){i0(e),Wc(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let h=this.options,{motionValue:t,onUpdate:n,onComplete:r,element:s}=h,o=Xt(h,["motionValue","onUpdate","onComplete","element"]);if(!t)return;if(e!==void 0){t.set(e);return}let a=new xr(Ze(ce({},o),{autoplay:!1})),l=Math.max(kf,mn.now()-this.startTime),c=zn(0,kf,l-kf),d=a.sample(l).value,{name:u}=this.options;s&&u&&Yc(s,u,d),t.setWithVelocity(a.sample(Math.max(0,l-c)).value,d,c),a.stop()}};var Bf=(i,e)=>e==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(gn.test(i)||i==="0")&&!i.startsWith("url("));function _M(i){let e=i[0];if(i.length===1)return!0;for(let t=0;t<i.length;t++)if(i[t]!==e)return!0}function r0(i,e,t,n){let r=i[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;let s=i[i.length-1],o=Bf(r,e),a=Bf(s,e);return Li(o===a,`You are trying to animate ${e} from "${r}" to "${s}". "${o?s:r}" is not an animatable value.`,"value-not-animatable"),!o||!a?!1:_M(i)||(t==="spring"||Bs(t))&&n}function $a(i){i.duration=0,i.type="keyframes"}var Kc=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);var vM=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function s0(i){for(let e=0;e<i.length;e++)if(typeof i[e]=="string"&&vM.test(i[e]))return!0;return!1}var xM=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),yM=Ia(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function o0(i){let{motionValue:e,name:t,repeatDelay:n,repeatType:r,damping:s,type:o,keyframes:a}=i,l=e?.owner?.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;let{onUpdate:c,transformTemplate:d}=e.owner.getProps();return yM()&&t&&(Kc.has(t)||xM.has(t)&&s0(a))&&(t!=="transform"||!d)&&!c&&!n&&r!=="mirror"&&s!==0&&o!=="inertia"}var bM=40,Jc=class extends Jr{constructor(h){var f=h,{autoplay:e=!0,delay:t=0,type:n="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:d}=f,u=Xt(f,["autoplay","delay","type","repeat","repeatDelay","repeatType","keyframes","name","motionValue","element"]);super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=mn.now();let g=ce({autoplay:e,delay:t,type:n,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:d},u),x=d?.KeyframeResolver||Qr;this.keyframeResolver=new x(a,(m,p,C)=>this.onKeyframesResolved(m,p,g,!C),l,c,d),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:d}=n;this.resolvedAt=mn.now();let u=!0;r0(e,s,o,a)||(u=!1,(Hn.instantAnimations||!l)&&d?.(Kr(e,n,t)),e[0]=e[e.length-1],$a(n),n.repeat=0);let h=r?this.resolvedAt?this.resolvedAt-this.createdAt>bM?this.resolvedAt:this.createdAt:this.createdAt:void 0,f=Ze(ce({startTime:h,finalKeyframe:t},n),{keyframes:e}),g=u&&!c&&o0(f),x=f.motionValue?.owner?.current,m;if(g)try{m=new $c(Ze(ce({},f),{element:x}))}catch{m=new xr(f)}else m=new xr(f);m.finished.then(()=>{this.notifyFinished()}).catch(ri),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),$_()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};var Qc=class{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){let t=this.animations.map(n=>n.attachTimeline(e));return()=>{t.forEach((n,r)=>{n&&n(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return a0(this.animations,"duration")}get iterationDuration(){return a0(this.animations,"iterationDuration")}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}};function a0(i,e){let t=0;for(let n=0;n<i.length;n++){let r=i[n][e];r!==null&&r>t&&(t=r)}return t}var Ka=class extends Qc{then(e,t){return this.finished.finally(e).then(()=>{})}};var l0=30,MM=i=>!isNaN(parseFloat(i)),Uf={current:void 0},ed=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=n=>{let r=mn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=mn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=MM(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ds);let n=this.events[e].add(t);return e==="change"?()=>{n(),Fn.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Uf.current&&Uf.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=mn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>l0)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,l0);return Da(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function xi(i,e){return new ed(i,e)}function td(i,e){if(i?.inherit&&e){let t=i,{inherit:n}=t,r=Xt(t,["inherit"]);return ce(ce({},e),r)}return i}function nd(i,e){let t=i?.[e]??i?.default??i;return t!==i?td(t,i):t}var SM={type:"spring",stiffness:500,damping:25,restSpeed:10},wM=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),TM={type:"keyframes",duration:.8},CM={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},c0=(i,{keyframes:e})=>e.length>2?TM:vi.has(i)?i.startsWith("scale")?wM(e[1]):SM:CM;var EM=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function d0(i){for(let e in i)if(!EM.has(e))return!0;return!1}var id=(i,e,t,n={},r,s)=>o=>{let a=nd(n,i)||{},l=a.delay||n.delay||0,{elapsed:c=0}=n;c=c-on(l);let d=Ze(ce({keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity()},a),{delay:-c,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:i,motionValue:e,element:s?void 0:r});d0(a)||Object.assign(d,c0(i,d)),d.duration&&(d.duration=on(d.duration)),d.repeatDelay&&(d.repeatDelay=on(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let u=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&($a(d),d.delay===0&&(u=!0)),(Hn.instantAnimations||Hn.skipAnimations||r?.shouldSkipAnimations||a.skipAnimations)&&(u=!0,$a(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,u&&!s&&e.get()!==void 0){let h=Kr(d.keyframes,a);if(h!==void 0){Fn.update(()=>{d.onUpdate(h),d.onComplete()});return}}return a.isSync?new xr(d):new Jc(d)};var AM=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function PM(i){let e=AM.exec(i);if(!e)return[,];let[,t,n,r]=e;return[`--${t??n}`,r]}var RM=4;function Vf(i,e,t=1){Zn(t<=RM,`Max CSS variable fallback depth detected in property "${i}". This may indicate a circular fallback dependency.`,"max-css-var-depth");let[n,r]=PM(i);if(!n)return;let s=window.getComputedStyle(e).getPropertyValue(n);if(s){let o=s.trim();return Pa(o)?parseFloat(o):o}return yo(r)?Vf(r,e,t+1):r}function h0(i){let e=[{},{}];return i?.values.forEach((t,n)=>{e[0][n]=t.get(),e[1][n]=t.getVelocity()}),e}function rd(i,e,t,n){if(typeof e=="function"){let[r,s]=h0(n);e=e(t!==void 0?t:i.custom,r,s)}if(typeof e=="string"&&(e=i.variants&&i.variants[e]),typeof e=="function"){let[r,s]=h0(n);e=e(t!==void 0?t:i.custom,r,s)}return e}function u0(i,e,t){let n=i.getProps();return rd(n,e,t!==void 0?t:n.custom,i)}var sd=new Set(["width","height","top","left","right","bottom",...Zi]);var f0=i=>Array.isArray(i);function IM(i,e,t){i.hasValue(e)?i.getValue(e).set(t):i.addValue(e,xi(t))}function DM(i){return f0(i)?i[i.length-1]||0:i}function p0(i,e){let o=u0(i,e)||{},{transitionEnd:n={},transition:r={}}=o,s=Xt(o,["transitionEnd","transition"]);s=ce(ce({},s),n);for(let a in s){let l=DM(s[a]);IM(i,a,l)}}var kt=i=>!!(i&&i.getVelocity);function m0(i){return!!(kt(i)&&i.add)}function g0(i,e){let t=i.getValue("willChange");if(m0(t))return t.add(e);if(!t&&Hn.WillChange){let n=new Hn.WillChange("auto");i.addValue("willChange",n),n.add(e)}}function Co(i){return i.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var OM="framerAppearId",_0="data-"+Co(OM);function v0(i){return i.props[_0]}var LM=typeof window<"u";function NM({protectedKeys:i,needsAnimating:e},t){let n=i.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,n}function zf(i,e,{delay:t=0,transitionOverride:n,type:r}={}){let g=e,{transition:s,transitionEnd:o}=g,a=Xt(g,["transition","transitionEnd"]),l=i.getDefaultTransition();s=s?td(s,l):l;let c=s?.reduceMotion,d=s?.skipAnimations;n&&(s=n);let u=[],h=r&&i.animationState&&i.animationState.getState()[r],f=s?.path;f&&f.animateVisualElement(i,a,s,t,u);for(let x in a){let m=i.getValue(x,i.latestValues[x]??null),p=a[x];if(p===void 0||h&&NM(h,x))continue;let C=ce({delay:t},nd(s||{},x));d&&(C.skipAnimations=!0);let E=m.get();if(E!==void 0&&!m.isAnimating()&&!Array.isArray(p)&&p===E&&!C.velocity){Fn.update(()=>m.set(p));continue}let b=!1;if(LM&&window.MotionHandoffAnimation){let A=v0(i);if(A){let v=window.MotionHandoffAnimation(A,x,Fn);v!==null&&(C.startTime=v,b=!0)}}g0(i,x);let w=c??i.shouldReduceMotion;m.start(id(x,m,p,w&&sd.has(x)?{type:!1}:C,i,b));let M=m.animation;M&&u.push(M)}if(o){let x=()=>Fn.update(()=>{o&&p0(i,o)});u.length?Promise.all(u).then(x):x()}return u}var x0={test:i=>i==="auto",parse:i=>i};var od=i=>e=>e.test(i);var Hf=[Yi,Ce,jr,Ni,A_,E_,x0],Gf=i=>Hf.find(od(i));function y0(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||Ra(i):!0}var FM=new Set(["brightness","contrast","saturate","opacity"]);function kM(i){let[e,t]=i.slice(0,-1).split("(");if(e==="drop-shadow")return i;let[n]=t.match(bo)||[];if(!n)return i;let r=t.replace(n,""),s=FM.has(e)?1:0;return n!==t&&(s*=100),e+"("+s+r+")"}var BM=/\b([a-z-]*)\(.*?\)/gu,Ja=Ze(ce({},gn),{getAnimatableNone:i=>{let e=i.match(BM);return e?e.map(kM).join(" "):i}});var Qa=Ze(ce({},gn),{getAnimatableNone:i=>{let e=gn.parse(i);return gn.createTransformer(i)(e.map(n=>typeof n=="number"?0:typeof n=="object"?Ze(ce({},n),{alpha:1}):n))}});var Wf=Ze(ce({},Yi),{transform:Math.round});var b0={rotate:Ni,pathRotation:Ni,rotateX:Ni,rotateY:Ni,rotateZ:Ni,scale:Ga,scaleX:Ga,scaleY:Ga,scaleZ:Ga,skew:Ni,skewX:Ni,skewY:Ni,distance:Ce,translateX:Ce,translateY:Ce,translateZ:Ce,x:Ce,y:Ce,z:Ce,perspective:Ce,transformPerspective:Ce,opacity:_r,originX:Mf,originY:Mf,originZ:Ce};var Us=Ze(ce({borderWidth:Ce,borderTopWidth:Ce,borderRightWidth:Ce,borderBottomWidth:Ce,borderLeftWidth:Ce,borderRadius:Ce,borderTopLeftRadius:Ce,borderTopRightRadius:Ce,borderBottomRightRadius:Ce,borderBottomLeftRadius:Ce,width:Ce,maxWidth:Ce,height:Ce,maxHeight:Ce,top:Ce,right:Ce,bottom:Ce,left:Ce,inset:Ce,insetBlock:Ce,insetBlockStart:Ce,insetBlockEnd:Ce,insetInline:Ce,insetInlineStart:Ce,insetInlineEnd:Ce,padding:Ce,paddingTop:Ce,paddingRight:Ce,paddingBottom:Ce,paddingLeft:Ce,paddingBlock:Ce,paddingBlockStart:Ce,paddingBlockEnd:Ce,paddingInline:Ce,paddingInlineStart:Ce,paddingInlineEnd:Ce,margin:Ce,marginTop:Ce,marginRight:Ce,marginBottom:Ce,marginLeft:Ce,marginBlock:Ce,marginBlockStart:Ce,marginBlockEnd:Ce,marginInline:Ce,marginInlineStart:Ce,marginInlineEnd:Ce,fontSize:Ce,backgroundPositionX:Ce,backgroundPositionY:Ce},b0),{zIndex:Wf,fillOpacity:_r,strokeOpacity:_r,numOctaves:Wf});var UM=Ze(ce({},Us),{color:Ht,backgroundColor:Ht,outlineColor:Ht,fill:Ht,stroke:Ht,borderColor:Ht,borderTopColor:Ht,borderRightColor:Ht,borderBottomColor:Ht,borderLeftColor:Ht,filter:Ja,WebkitFilter:Ja,mask:Qa,WebkitMask:Qa}),ad=i=>UM[i];var VM=new Set([Ja,Qa]);function ld(i,e){let t=ad(i);return VM.has(t)||(t=gn),t.getAnimatableNone?t.getAnimatableNone(e):void 0}var zM=new Set(["auto","none","0"]);function M0(i,e,t){let n=0,r;for(;n<i.length&&!r;){let s=i[n];typeof s=="string"&&!zM.has(s)&&$r(s).values.length&&(r=i[n]),n++}if(r&&t)for(let s of e)i[s]=ld(t,r)}var cd=class extends Qr{constructor(e,t,n,r,s){super(e,t,n,r,s,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let u=e[d];if(typeof u=="string"&&(u=u.trim(),yo(u))){let h=Vf(u,t.current);h!==void 0&&(e[d]=h),d===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!sd.has(n)||e.length!==2)return;let[r,s]=e,o=Gf(r),a=Gf(s),l=yf(r),c=yf(s);if(l!==c&&yr[n]){this.needsMeasurement=!0;return}if(o!==a)if(If(o)&&If(a))for(let d=0;d<e.length;d++){let u=e[d];typeof u=="string"&&(e[d]=parseFloat(u))}else yr[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)(e[r]===null||y0(e[r]))&&n.push(r);n.length&&M0(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=yr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let s=n.length-1,o=n[s];n[s]=yr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([a,l])=>{e.getValue(a).set(l)}),this.resolveNoneKeyframes()}};var S0=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Xf(i,e,t){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let n=document;e&&(n=e.current);let r=t?.[i]??n.querySelectorAll(i);return r?Array.from(r):[]}return Array.from(i).filter(n=>n!=null)}var el=(i,e)=>e&&typeof i=="number"?e.transform(i):i;var{schedule:w0,cancel:uN}=Nc(queueMicrotask,!1);function tl(i){return gf(i)&&"ownerSVGElement"in i}function qf(i){return tl(i)&&i.tagName==="svg"}var HM=[...Hf,Ht,gn],T0=i=>HM.find(od(i));var C0=()=>({min:0,max:0}),Eo=()=>({x:C0(),y:C0()});var br=new WeakMap;function E0(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function A0(i){return typeof i=="string"||Array.isArray(i)}var GM=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],P0=["initial",...GM];function Yf(i){return E0(i.animate)||P0.some(e=>A0(i[e]))}function R0(i){return!!(Yf(i)||i.variants)}function I0(i,e,t){for(let n in e){let r=e[n],s=t[n];if(kt(r))i.addValue(n,r);else if(kt(s))i.addValue(n,xi(r,{owner:i}));else if(s!==r)if(i.hasValue(n)){let o=i.getValue(n);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{let o=i.getStaticValue(n);i.addValue(n,xi(o!==void 0?o:r,{owner:i}))}}for(let n in t)e[n]===void 0&&i.removeValue(n);return e}var nl={current:null},dd={current:!1};var WM=typeof window<"u";function D0(){if(dd.current=!0,!!WM)if(window.matchMedia){let i=window.matchMedia("(prefers-reduced-motion)"),e=()=>nl.current=i.matches;i.addEventListener("change",e),e()}else nl.current=!1}var O0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],L0={};var Ao=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Qr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let g=mn.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,Fn.render(this.render,!1,!0))};let{latestValues:c,renderState:d}=a;this.latestValues=c,this.baseTarget=ce({},c),this.initialValues=t.initial?ce({},c):{},this.renderState=d,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Yf(t),this.isVariantNode=R0(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let f=this.scrapeMotionValuesFromProps(t,{},this),{willChange:u}=f,h=Xt(f,["willChange"]);for(let g in h){let x=h[g];c[g]!==void 0&&kt(x)&&x.set(c[g])}}mount(e){if(this.hasBeenMounted)for(let t in this.initialValues)this.values.get(t)?.jump(this.initialValues[t]),this.latestValues[t]=this.initialValues[t];this.current=e,br.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,n)=>this.bindToMotionValue(n,t)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(dd.current||D0(),this.shouldReduceMotion=nl.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Ha(this.notifyUpdate),Ha(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Kc.has(e)&&this.current instanceof HTMLElement){let{factory:o,keyframes:a,times:l,ease:c,duration:d}=t.accelerate,u=new To({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:on(d)}),h=o(u);this.valueSubscriptions.set(e,()=>{h(),u.cancel()});return}let n=vi.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Fn.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),s&&s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in L0){let t=L0[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Eo()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<O0.length;n++){let r=O0[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);let s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=I0(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=xi(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n=="string"&&(Pa(n)||Ra(n))?n=parseFloat(n):!T0(n)&&gn.test(t)&&(n=ld(e,t)),this.setBaseTarget(e,kt(n)?n.get():n)),kt(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t=="string"||typeof t=="object"){let s=rd(this.props,t,this.presenceContext?.custom);s&&(n=s[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!kt(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Ds),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){w0.render(this.render)}};var Po=class extends Ao{constructor(){super(...arguments),this.KeyframeResolver=cd}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;kt(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}};function N0({top:i,left:e,right:t,bottom:n}){return{x:{min:e,max:t},y:{min:i,max:n}}}function F0(i,e){if(!e)return i;let t=e({x:i.left,y:i.top}),n=e({x:i.right,y:i.bottom});return{top:t.y,left:t.x,bottom:n.y,right:n.x}}function k0(i,e){return N0(F0(i.getBoundingClientRect(),e))}var XM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},qM=Zi.length;function B0(i,e,t){let n="",r=!0;for(let o=0;o<qM;o++){let a=Zi[o],l=i[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{let d=parseFloat(l);c=a.startsWith("scale")?d===1:d===0}if(!c||t){let d=el(l,Us[a]);if(!c){r=!1;let u=XM[a]||a;n+=`${u}(${d}) `}t&&(e[a]=d)}}let s=i.pathRotation;return s&&(r=!1,n+=`rotate(${el(s,Us.pathRotation)}) `),n=n.trim(),t?n=t(e,r?"":n):r&&(n="none"),n}function hd(i,e,t){let{style:n,vars:r,transformOrigin:s}=i,o=!1,a=!1;for(let l in e){let c=e[l];if(vi.has(l)){o=!0;continue}else if(kc(l)){r[l]=c;continue}else{let d=el(c,Us[l]);l.startsWith("origin")?(a=!0,s[l]=d):n[l]=d}}if(e.transform||(o||t?n.transform=B0(e,i.transform,t):n.transform&&(n.transform="none")),a){let{originX:l="50%",originY:c="50%",originZ:d=0}=s;n.transformOrigin=`${l} ${c} ${d}`}}function ud(i,{style:e,vars:t},n,r){let s=i.style,o;for(o in e)s[o]=e[o];r?.applyProjectionStyles(s,n);for(o in t)s.setProperty(o,t[o])}function U0(i,e){return e.max===e.min?0:i/(e.max-e.min)*100}var Ro={correct:(i,e)=>{if(!e.target)return i;if(typeof i=="string")if(Ce.test(i))i=parseFloat(i);else return i;let t=U0(i,e.target.x),n=U0(i,e.target.y);return`${t}% ${n}%`}};var V0={correct:(i,{treeScale:e,projectionDelta:t})=>{let n=i,r=gn.parse(i);if(r.length>5)return n;let s=gn.createTransformer(i),o=typeof r[0]!="number"?1:0,a=t.x.scale*e.x,l=t.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;let c=si(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};var z0={borderRadius:Ze(ce({},Ro),{applyTo:[...S0]}),borderTopLeftRadius:Ro,borderTopRightRadius:Ro,borderBottomLeftRadius:Ro,borderBottomRightRadius:Ro,boxShadow:V0};function H0(i,{layout:e,layoutId:t}){return vi.has(i)||i.startsWith("origin")||(e||t!==void 0)&&(!!z0[i]||i==="opacity")}function fd(i,e,t){let n=i.style,r=e?.style,s={};if(!n)return s;for(let o in n)(kt(n[o])||r&&kt(r[o])||H0(o,i)||t?.getValue(o)?.liveStyle!==void 0)&&(s[o]=n[o]);return s}function YM(i){return window.getComputedStyle(i)}var il=class extends Po{constructor(){super(...arguments),this.type="html",this.renderInstance=ud}mount(e){Zn(!!e.style,"motion.create() components must forward their ref to a HTML or SVG element","custom-component-ref"),super.mount(e)}readValueFromInstance(e,t){if(vi.has(t))return this.projection?.isProjecting?Xc(t):q_(e,t);{let n=YM(e),r=(kc(t)?n.getPropertyValue(t):n[t])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return k0(e,t)}build(e,t,n){hd(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return fd(e,t,n)}};function jM(i,e){return i in e}var rl=class extends Ao{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,t){if(jM(t,e)){let n=e[t];if(typeof n=="string"||typeof n=="number")return n}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return Eo()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}};var ZM={offset:"stroke-dashoffset",array:"stroke-dasharray"},$M={offset:"strokeDashoffset",array:"strokeDasharray"};function G0(i,e,t=1,n=0,r=!0){i.pathLength=1;let s=r?ZM:$M;i[s.offset]=`${-n}`,i[s.array]=`${e} ${t}`}var jf=["transform","opacity","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function W0(i,u,l,c,d){var h=u,{attrX:e,attrY:t,attrScale:n,pathLength:r,pathSpacing:s=1,pathOffset:o=0}=h,a=Xt(h,["attrX","attrY","attrScale","pathLength","pathSpacing","pathOffset"]);if(hd(i,a,c),l){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};let{attrs:f,style:g}=i;for(let x of jf)f[x]!==void 0&&(g[x]=f[x],delete f[x]);(g.transform||f.transformOrigin)&&(g.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),g.transform&&(g.transformBox=d?.transformBox??"fill-box",delete f.transformBox),e!==void 0&&(f.x=e),t!==void 0&&(f.y=t),n!==void 0&&(f.scale=n),r!==void 0&&G0(f,r,s,o,!1)}var pd=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);var X0=i=>typeof i=="string"&&i.toLowerCase()==="svg";function q0(i,e,t,n){ud(i,e,void 0,n);for(let r in e.attrs)i.setAttribute(pd.has(r)?r:Co(r),e.attrs[r])}function Y0(i,e,t){let n=fd(i,e,t);for(let r in i)if(kt(i[r])||kt(e[r])){let s=Zi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=i[r]}return n}var sl=class extends Po{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Eo}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(vi.has(t)){let n=ad(t);return n&&n.default||0}if(jf.includes(t)){let r=getComputedStyle(e)[t];if(typeof r=="string"&&r)return r.trim()}return t=pd.has(t)?t:Co(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Y0(e,t,n)}build(e,t,n){W0(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){q0(e,t,n,r)}mount(e){this.isSVGTag=X0(e.tagName),super.mount(e)}};function Zf(i,e,t){let n=kt(i)?i:xi(i);return n.start(id("",n,e,t)),n.animation}function ol(i){return typeof i=="object"&&!Array.isArray(i)}function md(i,e,t,n){return i==null?[]:typeof i=="string"&&ol(e)?Xf(i,t,n):i instanceof NodeList?Array.from(i):Array.isArray(i)?i.filter(r=>r!=null):[i]}function j0(i,e,t){return i*(e+1)+t*e}function $f(i,e,t,n){return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,i+parseFloat(e)):e==="<"?t:e.startsWith("<")?Math.max(0,t+parseFloat(e.slice(1))):n.get(e)??i}function KM(i,e,t){for(let n=0;n<i.length;n++){let r=i[n];r.at>e&&r.at<t&&(Ps(i,r),n--)}}function Z0(i,e,t,n,r,s){KM(i,r,s);for(let o=0;o<e.length;o++)i.push({value:e[o],at:si(r,s,n[o]),easing:Ua(t,o)})}function $0(i,e,t=0){let n=e+1+e*t;for(let r=0;r<i.length;r++)i[r]=i[r]/n}function K0(i,e){return i.at===e.at?i.value===null?1:e.value===null?-1:0:i.at-e.at}var JM="easeInOut",Kf=20;function ev(i,s={},n,r){var o=s,{defaultTransition:e={}}=o,t=Xt(o,["defaultTransition"]);let a=e.duration||.3,l=new Map,c=new Map,d={},u=new Map,h=0,f=0,g=0;for(let x=0;x<i.length;x++){let m=i[x];if(typeof m=="string"){u.set(m,f);continue}else if(!Array.isArray(m)){u.set(m.name,$f(f,m.at,h,u));continue}let[p,C,E={}]=m;E.at!==void 0&&(f=$f(f,E.at,h,u));let b=0,w=(M,A,v,T=0,R=0)=>{let P=QM(M),le=A,{delay:N=0,times:j=Za(P),type:Q=e.type||"keyframes",repeat:D,repeatType:q,repeatDelay:z=0}=le,ee=Xt(le,["delay","times","type","repeat","repeatType","repeatDelay"]),{ease:V=e.ease||"easeOut",duration:ie}=A,de=typeof N=="function"?N(T,R):N,pe=P.length,nt=Bs(Q)?Q:r?.[Q||"keyframes"];if(pe<=2&&nt){let se=100;if(pe===2&&nS(P)){let be=P[1]-P[0];se=Math.abs(be)}let he=ce(ce({},e),ee);ie!==void 0&&(he.duration=on(ie));let Ie=qa(he,se,nt);V=Ie.ease,ie=Ie.duration}ie??(ie=a);let xt=f+de;j.length===1&&j[0]===0&&(j[1]=1);let Xe=j.length-P.length;if(Xe>0&&ja(j,Xe),P.length===1&&P.unshift(null),D&&Li(D<Kf,`Sequence segments can't repeat ${D} times \u2014 ignoring repeat option. Use a value below ${Kf} or apply repeat at the sequence level instead.`),D&&D<Kf){let se=ie>0?z/ie:0;ie=j0(ie,D,z);let he=[...P],Ie=[...j];V=Array.isArray(V)?[...V]:[V];let be=[...V],De=q==="reverse"||q==="mirror",Te=he,je=be;De&&(Te=[...he].reverse(),q==="reverse"&&(je=[...be].reverse().map(Fe=>typeof Fe=="function"?Os(Fe):Fe)));for(let Fe=0;Fe<D;Fe++){let Pe=De&&Fe%2===0,$e=Pe?Te:he,at=Pe?je:be,rt=(Fe+1)*(1+se);se>0&&(P.push(P[P.length-1]),j.push(rt),V.push("linear")),P.push(...$e);for(let gt=0;gt<$e.length;gt++)j.push(Ie[gt]+rt),V.push(gt===0?"linear":Ua(at,gt-1))}$0(j,D,se)}let Y=xt+ie;Z0(v,P,V,j,xt,Y),b=Math.max(de+ie,b),g=Math.max(Y,g)};if(kt(p)){let M=J0(p,c);w(C,E,Q0("default",M))}else{let M=md(p,C,n,d),A=M.length;for(let v=0;v<A;v++){C=C,E=E;let T=M[v],R=J0(T,c);for(let P in C)w(C[P],eS(E,P),Q0(P,R),v,A)}}h=f,f+=b}return c.forEach((x,m)=>{for(let C in x){let E=x[C];E.sort(K0);let b=[],w=[],M=[];for(let R=0;R<E.length;R++){let{at:P,value:N,easing:j}=E[R];b.push(N),w.push(Is(0,g,P)),M.push(j||"easeOut")}w[0]!==0&&(w.unshift(0),b.unshift(b[0]),M.unshift(JM)),w[w.length-1]!==1&&(w.push(1),b.push(null)),l.has(m)||l.set(m,{keyframes:{},transition:{}});let A=l.get(m);A.keyframes[C]=b;let p=e,{type:v}=p,T=Xt(p,["type"]);A.transition[C]=ce(Ze(ce({},T),{duration:g,ease:M,times:w}),t)}}),l}function J0(i,e){return!e.has(i)&&e.set(i,{}),e.get(i)}function Q0(i,e){return e[i]||(e[i]=[]),e[i]}function QM(i){return Array.isArray(i)?i:[i]}function eS(i,e){return i&&i[e]?ce(ce({},i),i[e]):ce({},i)}var tS=i=>typeof i=="number",nS=i=>i.every(tS);function tv(i){let e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},t=tl(i)&&!qf(i)?new sl(e):new il(e);t.mount(i),br.set(i,t)}function nv(i){let e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},t=new rl(e);t.mount(i),br.set(i,t)}function iS(i,e){return kt(i)||typeof i=="number"||typeof i=="string"&&!ol(e)}function gd(i,e,t,n){let r=[];if(iS(i,e))r.push(Zf(i,ol(e)&&e.default||e,t&&(t.default||t)));else{if(i==null)return r;let s=md(i,e,n),o=s.length;Zn(!!o,"No valid elements provided.","no-valid-elements");for(let a=0;a<o;a++){let l=s[a],c=l instanceof Element?tv:nv;br.has(l)||c(l);let d=br.get(l),u=ce({},t);"delay"in u&&typeof u.delay=="function"&&(u.delay=u.delay(a,o)),r.push(...zf(d,Ze(ce({},e),{transition:u}),{}))}}return r}function iv(i,e,t){let n=[],r=i.map(o=>{if(Array.isArray(o)&&typeof o[0]=="function"){let a=o[0],l=xi(0);return l.on("change",a),o.length===1?[l,[0,1]]:o.length===2?[l,[0,1],o[1]]:[l,o[1],o[2]]}return o});return ev(r,e,t,{spring:vr}).forEach(({keyframes:o,transition:a},l)=>{n.push(...gd(l,o,a))}),n}function rS(i){return Array.isArray(i)&&i.some(Array.isArray)}function rv(i={}){let{scope:e,reduceMotion:t,skipAnimations:n}=i;function r(s,o,a){let l=[],c,d={};if(t!==void 0&&(d.reduceMotion=t),n!==void 0&&(d.skipAnimations=n),rS(s)){let h=o||{},{onComplete:g}=h,x=Xt(h,["onComplete"]);typeof g=="function"&&(c=g),l=iv(s,ce(ce({},d),x),e)}else{let f=a||{},{onComplete:g}=f,x=Xt(f,["onComplete"]);typeof g=="function"&&(c=g),l=gd(s,o,ce(ce({},d),x),e)}let u=new Ka(l);return c&&u.finished.then(c),e&&(e.animations.push(u),u.finished.then(()=>{Ps(e.animations,u)})),u}return r}var yi=rv();function Jf(){return Jf=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},Jf.apply(null,arguments)}var sS={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,shouldBackspace:!0,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,e){},onStringTyped:function(i,e){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,e){},onTypingResumed:function(i,e){},onReset:function(i){},onStop:function(i,e){},onStart:function(i,e){},onDestroy:function(i){}},oS=new((function(){function i(){}var e=i.prototype;return e.load=function(t,n,r){if(t.el=typeof r=="string"?document.querySelector(r):r,t.options=Jf({},sS,n),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.shouldBackspace=t.options.shouldBackspace,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(c){return c.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(t.stringsElement.children),o=s.length;if(o)for(var a=0;a<o;a+=1)t.strings.push(s[a].innerHTML.trim())}for(var l in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[l]=l;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var n="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+n+"]")){var r=document.createElement("style");r.setAttribute(n,"true"),r.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(r)}},e.appendFadeOutAnimationCss=function(t){var n="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+n+"]")){var r=document.createElement("style");r.setAttribute(n,"true"),r.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(r)}},i})()),sv=new((function(){function i(){}var e=i.prototype;return e.typeHtmlChars=function(t,n,r){if(r.contentType!=="html")return n;var s=t.substring(n).charAt(0);if(s==="<"||s==="&"){var o;for(o=s==="<"?">":";";t.substring(n+1).charAt(0)!==o&&!(1+ ++n>t.length););n++}return n},e.backSpaceHtmlChars=function(t,n,r){if(r.contentType!=="html")return n;var s=t.substring(n).charAt(0);if(s===">"||s===";"){var o;for(o=s===">"?"<":"&";t.substring(n-1).charAt(0)!==o&&!(--n<0););n--}return n},i})()),ov=(function(){function i(t,n){oS.load(this,n,t),this.begin()}var e=i.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.append=function(t){var n=this,r=this.strings[this.strings.length-1];this.strings.push(t),this.sequence=this.strings.map(function(s,o){return o}),this.typingComplete&&(this.timeout=this.shouldBackspace?setTimeout(function(){n.backspace(r,r.length-1)},this.backDelay):setTimeout(function(){n.arrayPos++,n.typewrite(n.strings[n.sequence[n.arrayPos]],0)},this.backDelay))},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,n){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){n=sv.typeHtmlChars(t,n,r);var a=0,l=t.substring(n);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var c=1;c+=(l=/\d+/.exec(l)[0]).length,a=parseInt(l),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),t=t.substring(0,n)+t.substring(n+c),r.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;t.substring(n+o).charAt(0)!=="`"&&(o++,!(n+o>t.length)););var d=t.substring(0,n),u=t.substring(d.length+1,n+o),h=t.substring(n+o+1);t=d+u+h,o--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),n>=t.length?r.doneTyping(t,n):r.keepTyping(t,n,o),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},a)},s):this.setPauseStatus(t,n,!0)},e.keepTyping=function(t,n,r){if(n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),this.shouldBackspace){var s=t.substring(0,n+=r);this.replaceText(s)}else{var o=t.substring(n,n+r);n+=r,this.replaceText(o)}this.typewrite(t,n)},e.doneTyping=function(t,n){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.isFinalString()&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=this.shouldBackspace?setTimeout(function(){r.backspace(t,n)},this.backDelay):setTimeout(function(){r.arrayPos++,r.typewrite(r.strings[r.sequence[r.arrayPos]],0)},this.backDelay))},e.backspace=function(t,n){var r=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=sv.backSpaceHtmlChars(t,n,r);var o=t.substring(0,n);if(r.replaceText(o),r.smartBackspace){var a=r.strings[r.sequence[r.arrayPos+1]];r.stopNum=a&&o===a.substring(0,n)?n:0}n>r.stopNum?(n--,r.backspace(t,n)):n<=r.stopNum&&(r.isFinalString()?r.lastStringBackspaced():(r.arrayPos++,r.typewrite(r.strings[r.sequence[r.arrayPos]],n)))},s)}else this.setPauseStatus(t,n,!1)},e.isFinalString=function(){return this.arrayPos===this.strings.length-1},e.lastStringBackspaced=function(){this.arrayPos=0,this.options.onLastStringBackspaced(),this.loop&&(this.shuffleStringsIfNeeded(),this.begin())},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,n,r){this.pause.typewrite=r,this.pause.curString=t,this.pause.curStrPos=n},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.shouldBackspace?this.el.innerHTML=t:this.el.innerHTML+=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(n){t.stop()}),this.el.addEventListener("blur",function(n){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i})();var aS=["typedRole"],lS=["hexagon"],cS=["hexWrap"],dS=["contentPanel"],hS=["badgeBtn"],uS=["taglineEl"],fS=["bgVideo"];function pS(i,e){i&1&&(F(0,"video",7,5),Je(2,"source",25),U())}function mS(i,e){i&1&&Je(0,"img",8)}function gS(i,e){if(i&1){let t=ni();F(0,"button",35),Qe("click",function(r){return rn(t),Ve().openProfileViewer(),sn(r.stopPropagation())}),F(1,"mat-icon"),$(2,"fullscreen"),U()()}if(i&2){let t=Ve();It("aria-label",t.i18n.currentLang()==="en"?"Open profile photo":"Ouvrir la photo de profil")}}function _S(i,e){if(i&1&&(F(0,"div",36)(1,"mat-icon"),$(2,"person"),U()()),i&2){let t=Ve();At("is-hidden",t.isVideoMode())}}function vS(i,e){if(i&1){let t=ni();F(0,"div",37),Qe("click",function(){rn(t);let r=Ve();return sn(r.closeProfileViewer())}),F(1,"button",38),Qe("click",function(r){return rn(t),Ve().closeProfileViewer(),sn(r.stopPropagation())}),F(2,"mat-icon"),$(3,"close"),U()(),F(4,"figure",39),Qe("click",function(r){return r.stopPropagation()}),Je(5,"img",40),U()()}if(i&2){let t=Ve();It("aria-label",t.i18n.currentLang()==="en"?"Profile photo":"Photo de profil"),H(),It("aria-label",t.i18n.currentLang()==="en"?"Close profile photo":"Fermer la photo de profil")}}var _d=class i{typedEl;hexEl;hexWrapEl;panelEl;badgeEl;taglineEl;bgVideoEl;i18n=re(Ln);imgError=Nt(!1);panelState=Nt("open");isVideoMode=Nt(!1);profileViewerOpen=Nt(!1);heroBackground="image";typed;detachTilt;collapseTimer;busy=!1;activeAnim;taglineTween;photoWrapWidth;photoPortraitMaxWidth;constructor(){ws(()=>{let e=this.i18n.currentLang();this.typedEl&&this.typed&&this.initTyped(e),this.taglineEl&&this.animateTagline()})}ngAfterViewInit(){if(this.bgVideoEl){let e=this.bgVideoEl.nativeElement;e.muted=!0,e.volume=0,e.play().catch(()=>{})}this.initTyped(this.i18n.currentLang()),this.hexEl&&(this.detachTilt=this.enableTilt(this.hexEl.nativeElement)),this.animateTagline(),clearTimeout(this.collapseTimer)}initTyped(e){if(this.typed?.destroy(),!this.typedEl)return;let t=e==="en"?["Full-Stack","Angular","Spring Boot","Data Enthusiast"]:["Full-Stack","Angular","Spring Boot","passionn\xE9 de data"];this.typed=new ov(this.typedEl.nativeElement,{strings:t,typeSpeed:55,backSpeed:30,backDelay:1600,loop:!0})}ngOnDestroy(){this.typed?.destroy(),this.detachTilt?.(),clearTimeout(this.collapseTimer),this.activeAnim?.cancel(),this.taglineTween?.kill()}openProfileViewer(){this.isVideoMode()||this.imgError()||this.profileViewerOpen.set(!0)}closeProfileViewer(){this.profileViewerOpen.set(!1)}closeProfileViewerWithKeyboard(){this.profileViewerOpen()&&this.closeProfileViewer()}async collapseToBadge(){if(this.busy||this.panelState()==="badge")return;this.busy=!0;let e=this.panelEl?.nativeElement,t=this.badgeEl?.nativeElement;if(!e||!t){this.busy=!1;return}let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),s=r.left+r.width/2-(n.left+n.width/2),o=r.top+r.height/2-(n.top+n.height/2);this.activeAnim?.cancel(),this.activeAnim=e.animate([{transform:"translate(0,0) scale(1)",opacity:"1",borderRadius:"1.5rem"},{transform:`translate(${s}px,${o}px) scale(0)`,opacity:"0",borderRadius:"50%"}],{duration:600,easing:"cubic-bezier(0.4,0,0.8,0.2)",fill:"forwards"}),await this.activeAnim.finished,e.style.visibility="hidden",e.style.pointerEvents="none",this.activeAnim.cancel(),this.panelState.set("badge"),t.style.visibility="visible",this.activeAnim=t.animate([{transform:"scale(0)",opacity:"0"},{transform:"scale(1.18)",opacity:"1",offset:.55},{transform:"scale(0.93)",opacity:"1",offset:.78},{transform:"scale(1)",opacity:"1"}],{duration:580,easing:"ease-out",fill:"forwards"}),await this.activeAnim.finished,this.activeAnim.cancel(),t.style.opacity="1",t.style.transform="scale(1)",t.setAttribute("data-active",""),this.busy=!1}async expandToPanel(){if(this.busy||this.panelState()==="open")return;this.busy=!0;let e=this.panelEl?.nativeElement,t=this.badgeEl?.nativeElement;if(!e||!t){this.busy=!1;return}t.removeAttribute("data-active"),this.activeAnim?.cancel(),this.activeAnim=t.animate([{transform:"scale(1)",opacity:"1"},{transform:"scale(0)",opacity:"0"}],{duration:260,easing:"ease-in",fill:"forwards"}),await this.activeAnim.finished,t.style.visibility="hidden",this.activeAnim.cancel();let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),s=r.left+r.width/2-(n.left+n.width/2),o=r.top+r.height/2-(n.top+n.height/2);e.style.visibility="visible",e.style.pointerEvents="",this.panelState.set("open"),this.activeAnim=e.animate([{transform:`translate(${s}px,${o}px) scale(0)`,opacity:"0",borderRadius:"50%"},{transform:`translate(${s*.03}px,${o*.03}px) scale(1.04)`,opacity:"1",borderRadius:"1.5rem",offset:.72},{transform:"translate(0,0) scale(1)",opacity:"1",borderRadius:"1.5rem"}],{duration:680,easing:"cubic-bezier(0.34,1.56,0.64,1)",fill:"forwards"}),await this.activeAnim.finished,this.activeAnim.cancel(),e.style.transform="",e.style.opacity="",e.style.borderRadius="",this.busy=!1}enableTilt(e){let t=r=>{let s=e.getBoundingClientRect();yi(e,{transformPerspective:700,rotateY:((r.clientX-s.left)/s.width-.5)*16,rotateX:((r.clientY-s.top)/s.height-.5)*-16},{duration:.4,ease:"easeOut"})},n=()=>yi(e,{transformPerspective:700,rotateY:0,rotateX:0},{duration:.6,ease:"easeOut"});return e.addEventListener("mousemove",t),e.addEventListener("mouseleave",n),()=>{e.removeEventListener("mousemove",t),e.removeEventListener("mouseleave",n)}}animateTagline(){let e=this.taglineEl?.nativeElement;if(!e)return;this.taglineTween?.kill();let n=this.i18n.t("hero.tagline").trim().split(/\s+/);e.innerHTML=n.map(r=>`<span class="hero__tagline-word">${r}</span>`).join(" "),this.taglineTween=mr.fromTo(e.querySelectorAll(".hero__tagline-word"),{opacity:0,y:18,filter:"blur(4px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.65,ease:"power3.out",stagger:.045,delay:.8})}toggleVideoMode(){let e=!this.isVideoMode();this.isVideoMode.set(e);let t=this.hexWrapEl?.nativeElement,n=this.hexEl?.nativeElement;if(!t||!n)return;let r=t.closest(".hero__portrait");e?(this.photoWrapWidth??=`${t.getBoundingClientRect().width}px`,r&&(this.photoPortraitMaxWidth??=getComputedStyle(r).maxWidth,yi(r,{maxWidth:"500px"},{duration:.85,ease:"easeInOut"})),yi(t,{width:"min(500px, 90vw)",aspectRatio:16/9},{duration:.85,ease:"easeInOut"}),yi(n,{borderRadius:"12px"},{duration:.85,ease:"easeInOut"})):(r&&this.photoPortraitMaxWidth&&yi(r,{maxWidth:this.photoPortraitMaxWidth},{duration:.85,ease:"easeInOut"}).then(()=>{r.style.maxWidth=""}),yi(t,{width:this.photoWrapWidth??"min(430px, 86vw)",aspectRatio:1},{duration:.85,ease:"easeInOut"}).then(()=>{t.style.width="",t.style.aspectRatio=""}),yi(n,{borderRadius:"28px"},{duration:.85,ease:"easeInOut"}).then(()=>{n.style.borderRadius=""}))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-hero"]],viewQuery:function(t,n){if(t&1&&ii(aS,5)(lS,5)(cS,5)(dS,5)(hS,5)(uS,5)(fS,5),t&2){let r;Tt(r=Ct())&&(n.typedEl=r.first),Tt(r=Ct())&&(n.hexEl=r.first),Tt(r=Ct())&&(n.hexWrapEl=r.first),Tt(r=Ct())&&(n.panelEl=r.first),Tt(r=Ct())&&(n.badgeEl=r.first),Tt(r=Ct())&&(n.taglineEl=r.first),Tt(r=Ct())&&(n.bgVideoEl=r.first)}},hostBindings:function(t,n){t&1&&Qe("keydown.escape",function(){return n.closeProfileViewerWithKeyboard()},vg)},decls:53,vars:21,consts:[["contentPanel",""],["typedRole",""],["taglineEl",""],["hexWrap",""],["hexagon",""],["bgVideo",""],["id","accueil",1,"hero"],["autoplay","","muted","","loop","","playsinline","","preload","auto","aria-hidden","true",1,"hero__bg-video"],["src","images/image.png","alt","","aria-hidden","true",1,"hero__bg-video"],[1,"hero__content"],[1,"hero__eyebrow"],[1,"hero__typed"],[1,"hero__title"],[1,"hero__title-accent"],[1,"hero__tagline"],[1,"hero__actions"],["mat-flat-button","","color","primary","href","#projets"],["mat-stroked-button","","href","documents/CV-EKLU Charly Yayra.pdf","target","_blank","rel","noopener noreferrer"],["appReveal","right",1,"hero__portrait"],[1,"hero__hex-wrap"],[1,"hero__hexagon"],["mat-icon-button","",1,"hero__profile-open"],["src","images/ME_portfolio.png","alt","Photo de Charly Eklu",1,"hero__presentation-media","hero__presentation-img",3,"error"],[1,"hero__hexagon-fallback",3,"is-hidden"],["controls","","preload","none",1,"hero__presentation-media","hero__presentation-video",3,"autoplay"],["src","videos/BG_vid.mp4","type","video/mp4"],[1,"hero__play-button",3,"click"],[1,"hero__play-icon"],[1,"hero__play-label"],["aria-hidden","true",1,"hero__tag","hero__tag--1"],["aria-hidden","true",1,"hero__tag","hero__tag--2"],["aria-hidden","true",1,"hero__tag","hero__tag--3"],["aria-hidden","true",1,"hero__tag","hero__tag--4"],["href","#a-propos",1,"hero__scroll-cue"],["role","dialog","aria-modal","true",1,"profile-viewer"],["mat-icon-button","",1,"hero__profile-open",3,"click"],[1,"hero__hexagon-fallback"],["role","dialog","aria-modal","true",1,"profile-viewer",3,"click"],["mat-icon-button","",1,"profile-viewer__close",3,"click"],[1,"profile-viewer__figure",3,"click"],["src","images/ME_portfolio.png","alt","Photo de Charly Eklu",1,"profile-viewer__image"]],template:function(t,n){t&1&&(F(0,"section",6),Vt(1,pS,3,0,"video",7)(2,mS,1,0,"img",8),F(3,"div",9,0)(5,"p",10),$(6),Je(7,"span",11,1),U(),F(9,"h1",12),$(10),F(11,"span",13),$(12),U()(),F(13,"p",14,2),$(15),U(),F(16,"div",15)(17,"a",16)(18,"mat-icon"),$(19,"code"),U(),$(20),U(),F(21,"a",17)(22,"mat-icon"),$(23,"download"),U(),$(24),U()()(),F(25,"div",18)(26,"div",19,3)(28,"div",20,4),Vt(30,gS,3,1,"button",21),F(31,"img",22),Qe("error",function(){return n.imgError.set(!0)}),U(),Vt(32,_S,3,2,"div",23),F(33,"video",24),Je(34,"source",25),U()(),F(35,"button",26),Qe("click",function(){return n.toggleVideoMode()}),F(36,"span",27)(37,"mat-icon"),$(38),U()(),F(39,"span",28),$(40),U()(),F(41,"span",29),$(42,"<div>"),U(),F(43,"span",30),$(44,"</>"),U(),F(45,"span",31),$(46,"{ }"),U(),F(47,"span",32),$(48,"<h1/>"),U()()(),F(49,"a",33)(50,"mat-icon"),$(51,"keyboard_arrow_down"),U()(),Vt(52,vS,6,2,"div",34),U()),t&2&&(H(),zt(n.heroBackground==="video"?1:2),H(5),Pt(" ",n.i18n.t("hero.eyebrow")," "),H(4),Pt(" ",n.i18n.t("hero.title_hi")," "),H(2),Oe(n.i18n.t("hero.name_hi")),H(3),Pt(" ",n.i18n.t("hero.tagline")," "),H(5),Pt(" ",n.i18n.currentLang()==="en"?"View my work":"Voir mes projets"," "),H(4),Pt(" ",n.i18n.t("hero.btn_resume")," "),H(2),At("is-video-mode",n.isVideoMode()),H(4),zt(!n.isVideoMode()&&!n.imgError()?30:-1),H(),At("is-hidden",n.isVideoMode()),H(),zt(n.imgError()?32:-1),H(),At("is-active",n.isVideoMode()),ut("autoplay",n.isVideoMode()),H(2),It("aria-label",n.isVideoMode()?n.i18n.t("hero.btn_return_photo"):n.i18n.t("hero.btn_video")),H(3),Oe(n.isVideoMode()?"photo_camera":"play_arrow"),H(2),Pt(" ",n.isVideoMode()?n.i18n.t("hero.btn_return_photo"):n.i18n.t("hero.btn_video")," "),H(9),It("aria-label",n.i18n.t("hero.aria_scroll_next")),H(3),zt(n.profileViewerOpen()?52:-1))},dependencies:[_i,gi,Xr,On,Dn,jn],styles:['@charset "UTF-8";.hero[_ngcontent-%COMP%]{position:relative;min-height:100vh;min-height:100svh;display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,.86fr);align-items:center;gap:clamp(3rem,7vw,6.5rem);padding:8rem 8vw 6rem;box-sizing:border-box;background:#f8fbff;overflow:hidden}.hero[_ngcontent-%COMP%]:before, .hero[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;right:0;pointer-events:none}.hero__bg-video[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;opacity:1;pointer-events:none}.hero__content[_ngcontent-%COMP%]{position:relative;z-index:2;max-width:36rem;width:100%;padding:0;color:#07111f;box-sizing:border-box}.hero__close-btn[_ngcontent-%COMP%]{position:absolute!important;top:.5rem;right:.5rem;opacity:.45;color:var(--text-secondary)!important;transition:opacity .2s,transform .2s,color .2s}.hero__close-btn[_ngcontent-%COMP%]:hover{opacity:1;color:var(--primary-400)!important;transform:rotate(90deg)}.hero__eyebrow[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;min-height:0;margin:0 0 1rem;padding:.45rem .7rem;color:#0054dd;font-weight:800;letter-spacing:.04em;font-size:.72rem;text-transform:uppercase;background:#fff;border:1px solid rgba(0,84,221,.12);border-radius:8px;box-shadow:0 12px 24px #0f172a0d}.hero__typed[_ngcontent-%COMP%]{font-family:Roboto Mono,ui-monospace,monospace;font-weight:700;color:#0054dd}.hero__title[_ngcontent-%COMP%]{margin:0 0 1rem;font-size:clamp(3rem,6vw,5.7rem);line-height:.96;font-weight:800;color:#46546b;letter-spacing:0}.hero__title-accent[_ngcontent-%COMP%]{color:#0054dd;font-weight:800;text-shadow:none}.hero__actions[_ngcontent-%COMP%]{display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1.9rem}.hero__actions[_ngcontent-%COMP%]   a[mat-flat-button][_ngcontent-%COMP%]{height:46px;padding:0 1.1rem!important;border-radius:10px!important;background:#0054dd!important;color:#fff!important;font-weight:800!important;box-shadow:0 14px 28px #0054dd38!important}.hero__actions[_ngcontent-%COMP%]   a[mat-flat-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.35rem}.hero__actions[_ngcontent-%COMP%]   a[mat-stroked-button][_ngcontent-%COMP%]{height:46px;padding:0 1.1rem!important;border-radius:10px!important;background:#fff!important;color:#0f172a!important;border-color:#0f172a1f!important;font-weight:800!important;box-shadow:0 12px 24px #0f172a0f!important}.hero__actions[_ngcontent-%COMP%]   a[mat-stroked-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.35rem;color:#0054dd}.hero__portrait[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:1.75rem;max-width:34rem;justify-self:center;text-align:center}.hero__hex-wrap[_ngcontent-%COMP%]{position:relative;width:min(430px,86vw);aspect-ratio:1/1}.hero__hexagon[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;border-radius:28px;background:#fff;border:2px solid rgba(0,84,221,.28);overflow:hidden;box-shadow:0 28px 70px #0f172a24;clip-path:polygon(13% 0,87% 0,100% 13%,100% 87%,87% 100%,13% 100%,0 87%,0 13%);will-change:transform}.hero__hexagon[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:8px;z-index:1;border:1px solid rgba(0,84,221,.2);border-radius:22px;clip-path:inherit;pointer-events:none}.hero__profile-open[_ngcontent-%COMP%]{position:absolute!important;top:.75rem;right:15%;z-index:6;color:#fff!important;background:#000106b8!important;border:1px solid rgba(255,255,255,.18)!important;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;transform:translateY(-4px);transition:opacity .2s ease,transform .2s ease,background .2s ease}.hero__profile-open[_ngcontent-%COMP%]:hover{background:#03aff947!important}.hero__hexagon[_ngcontent-%COMP%]:hover   .hero__profile-open[_ngcontent-%COMP%], .hero__profile-open[_ngcontent-%COMP%]:focus-visible{opacity:1;transform:translateY(0)}.hero__presentation-media[_ngcontent-%COMP%]{position:absolute;inset:10px;width:calc(100% - 20px);height:calc(100% - 20px);object-fit:cover;border-radius:22px;clip-path:polygon(12% 0,88% 0,100% 12%,100% 88%,88% 100%,12% 100%,0 88%,0 12%);transition:opacity .6s ease-in-out}.hero__presentation-img[_ngcontent-%COMP%]{opacity:1;z-index:2}.hero__presentation-img.is-hidden[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.hero__presentation-video[_ngcontent-%COMP%]{opacity:0;pointer-events:none;z-index:1;background:#000}.hero__presentation-video.is-active[_ngcontent-%COMP%]{opacity:1;pointer-events:auto;z-index:3}.hero__play-button[_ngcontent-%COMP%]{position:absolute;right:-1.15rem;bottom:1.5rem;z-index:8;display:inline-flex;align-items:center;gap:.7rem;min-height:58px;max-width:min(260px,75vw);padding:.4rem 1rem .4rem .45rem;border:0;border-radius:16px;cursor:pointer;color:#07111f;background:#fff;box-shadow:0 22px 45px #0f172a2e;transition:transform .2s ease,box-shadow .2s ease}.hero__play-button[_ngcontent-%COMP%]:hover, .hero__play-button[_ngcontent-%COMP%]:focus-visible{transform:translateY(-2px);box-shadow:0 26px 55px #0054dd38}.hero__play-icon[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:46px;height:46px;border-radius:13px;color:#fff;background:#0054dd;box-shadow:0 10px 24px #0054dd47}.hero__play-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:28px;height:28px;font-size:28px;line-height:28px}.hero__play-label[_ngcontent-%COMP%]{max-width:10rem;font-size:.82rem;font-weight:800;line-height:1.15;text-align:left}.hero__hexagon-fallback[_ngcontent-%COMP%]{position:absolute;inset:5px;display:flex;align-items:center;justify-content:center;transition:opacity .6s ease-in-out;z-index:2}.hero__hexagon-fallback.is-hidden[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.hero__hexagon-fallback[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:5.5rem;width:5.5rem;height:5.5rem;color:var(--primary-200)}.hero__badge[_ngcontent-%COMP%]{position:absolute;bottom:8%;right:0;z-index:10;width:52px;height:52px;border-radius:50%;border:1.5px solid rgba(3,175,249,.55);cursor:pointer;background:linear-gradient(135deg,var(--primary-700) 0%,var(--primary-400) 100%);color:#000106;box-shadow:var(--glow-primary),0 4px 20px #00000080;display:flex;align-items:center;justify-content:center;visibility:hidden;opacity:0;transform:scale(0)}.hero__badge[data-active][_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_badge-pulse 2.8s .6s ease-in-out infinite}.hero__badge-text[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:900;line-height:1;-webkit-user-select:none;user-select:none;position:relative;top:-1px}@keyframes _ngcontent-%COMP%_badge-pulse{0%,50%,to{box-shadow:var(--glow-primary),0 4px 20px #00000080}18%{box-shadow:0 0 0 7px #03aff94d,0 0 0 16px #03aff926,0 0 0 28px #03aff912,0 0 0 42px #03aff908,var(--glow-strong)}36%{box-shadow:0 0 0 3px #03aff91a,var(--glow-primary)}}.hero__tag[_ngcontent-%COMP%]{position:absolute;padding:.3rem .6rem;border-radius:var(--radius-sm);background:#fff;color:#0054dd;border:1px solid rgba(0,84,221,.12);font-family:Roboto Mono,ui-monospace,monospace;font-size:.75rem;font-weight:800;box-shadow:0 16px 36px #0f172a14;animation:_ngcontent-%COMP%_hero-float 4.5s ease-in-out infinite;pointer-events:none}.hero__tag--1[_ngcontent-%COMP%]{top:-4%;left:-10%;animation-delay:0s}.hero__tag--2[_ngcontent-%COMP%]{bottom:8%;left:-14%;animation-delay:.7s}.hero__tag--3[_ngcontent-%COMP%]{top:6%;right:-12%;animation-delay:1.4s}.hero__tag--4[_ngcontent-%COMP%]{bottom:-4%;right:2%;animation-delay:2.1s}@keyframes _ngcontent-%COMP%_hero-float{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}.hero__tagline-card[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;padding:1rem 1.25rem;border-radius:var(--radius-md);background:#000a29a6;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid var(--border-default);border-left:3px solid var(--primary-400);box-shadow:0 4px 16px #0000004d}.hero__tagline[_ngcontent-%COMP%]{margin:0;line-height:1.65;color:#536581;line-height:1.7;font-weight:400;max-width:30rem;text-shadow:0 0 8px rgba(255,255,255,.13);font-size:1rem;font-weight:600}.hero__tagline-word[_ngcontent-%COMP%]{display:inline-block;opacity:0;will-change:transform,opacity}.hero__scroll-cue[_ngcontent-%COMP%]{position:absolute;bottom:2.5rem;left:50%;transform:translate(-50%);z-index:3;display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:999px;color:#0054dd;background:#fff;box-shadow:0 14px 30px #0f172a1f;animation:_ngcontent-%COMP%_hero-bounce 1.8s ease-in-out infinite;grid-column:1/-1;opacity:1}.profile-viewer[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:5rem 5vw 3rem;background:#000106eb;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}.profile-viewer__figure[_ngcontent-%COMP%]{width:min(760px,100%);max-height:86vh;margin:0;display:flex;align-items:center;justify-content:center}.profile-viewer__image[_ngcontent-%COMP%]{max-width:100%;max-height:82vh;width:auto;height:auto;object-fit:contain;border-radius:var(--radius-md);border:1px solid rgba(255,255,255,.16);background:#000;box-shadow:0 24px 80px #0000008c}.profile-viewer__close[_ngcontent-%COMP%]{position:fixed!important;top:1.25rem;right:1.25rem;color:#fff!important;background:#ffffff1a!important;border:1px solid rgba(255,255,255,.16)!important;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.profile-viewer__close[_ngcontent-%COMP%]:hover{background:#03aff942!important}@keyframes _ngcontent-%COMP%_hero-bounce{0%,to{transform:translate(-50%)}50%{transform:translate(-50%,8px)}}@media(max-width:1100px){.hero[_ngcontent-%COMP%]{gap:clamp(1.5rem,4vw,3rem);padding:7rem 5vw 5rem}.hero__content[_ngcontent-%COMP%]{max-width:28rem;padding:1.75rem}.hero__hex-wrap[_ngcontent-%COMP%]{width:min(240px,48vw)}.hero__title[_ngcontent-%COMP%]{font-size:clamp(2rem,3.5vw,3rem)}}@media(max-width:900px){.hero[_ngcontent-%COMP%]{grid-template-columns:1fr;justify-items:center;min-height:100vh;min-height:100svh;padding:6.5rem 6vw 4rem;gap:2rem;text-align:center}.hero[_ngcontent-%COMP%]:before{background:linear-gradient(180deg,#f8fbffeb,#f8fbffc7 55%,#f8fbff99)}.hero__content[_ngcontent-%COMP%]{max-width:min(100%,38rem);width:100%;order:2;padding:1.75rem 1.5rem}.hero__portrait[_ngcontent-%COMP%]{order:1}.hero__hex-wrap[_ngcontent-%COMP%]{width:min(220px,55vw)}.hero__actions[_ngcontent-%COMP%]{justify-content:center}.hero__badge[_ngcontent-%COMP%]{bottom:-5%;right:50%;transform:translate(50%)}.hero__tag[_ngcontent-%COMP%], .hero__scroll-cue[_ngcontent-%COMP%]{display:none}.hero__play-button[_ngcontent-%COMP%]{right:-.5rem;bottom:-.5rem;min-height:0;max-width:none;padding:.3rem;border-radius:50%;box-shadow:0 12px 26px #0f172a33}.hero__play-label[_ngcontent-%COMP%]{display:none}.hero__play-icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%}.hero__play-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:24px;height:24px;font-size:24px;line-height:24px}}@media(max-width:600px){.hero[_ngcontent-%COMP%]{padding:5.5rem 5vw 4rem;gap:1.75rem}.hero__content[_ngcontent-%COMP%]{padding:1.25rem;border-radius:var(--radius-lg)}.hero__eyebrow[_ngcontent-%COMP%]{font-size:.8rem}.hero__title[_ngcontent-%COMP%]{font-size:clamp(1.75rem,8vw,2.4rem);margin-bottom:1rem}.hero__tagline[_ngcontent-%COMP%]{font-size:.88rem}.hero__actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:.85rem;margin-top:1.25rem;width:100%}.hero__actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.hero__hex-wrap[_ngcontent-%COMP%]{width:min(190px,58vw)}.hero__badge[_ngcontent-%COMP%]{width:44px;height:44px}.hero__badge-text[_ngcontent-%COMP%]{font-size:1.3rem}.hero__profile-open[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);--mdc-icon-button-state-layer-size: 34px;width:34px!important;height:34px!important;padding:0!important}.hero__profile-open[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px;line-height:18px}.hero__play-button[_ngcontent-%COMP%]{right:-.35rem;bottom:-.35rem;padding:.25rem}.hero__play-icon[_ngcontent-%COMP%]{width:38px;height:38px}.hero__play-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:21px;height:21px;font-size:21px;line-height:21px}.profile-viewer[_ngcontent-%COMP%]{padding:4.5rem 1rem 2rem}.profile-viewer__image[_ngcontent-%COMP%]{max-height:78vh}}@media(max-width:380px){.hero[_ngcontent-%COMP%]{padding:5rem 4vw 3.5rem;gap:1.5rem}.hero__content[_ngcontent-%COMP%]{padding:1rem;border-radius:var(--radius-md)}.hero__hex-wrap[_ngcontent-%COMP%]{width:min(160px,62vw)}.hero__title[_ngcontent-%COMP%]{font-size:clamp(1.6rem,9vw,2rem)}.hero__actions[_ngcontent-%COMP%]{flex-direction:column;align-items:center;gap:.5rem}}']})};var xS=["*"];var yS=new dn("MAT_CARD_CONFIG"),av=(()=>{class i{appearance;constructor(){let t=re(yS,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&At("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:xS,decls:1,vars:0,template:function(n,r){n&1&&(Gr(),qi(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return i})();var lv=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=en({type:i});static \u0275inj=Qt({imports:[wn]})}return i})();var MS=()=>[1,2,3,4,5],SS=(i,e)=>e.label,wS=(i,e)=>e.name;function TS(i,e){if(i&1&&(F(0,"mat-card",22)(1,"mat-icon",27),$(2),U(),F(3,"span",28),$(4),U(),F(5,"span",29),$(6),U()()),i&2){let t=e.$implicit,n=Ve();H(2),Oe(t.icon),H(2),Oe(t.value),H(2),Oe(t.label[n.i18n.currentLang()])}}function CS(i,e){i&1&&(F(0,"mat-icon",36),$(1,"star"),U())}function ES(i,e){if(i&1&&(F(0,"div",26)(1,"div",30)(2,"div",31),$(3),U(),F(4,"div",32)(5,"span",33),$(6),U(),F(7,"span",34),$(8),U()(),F(9,"div",35),fn(10,CS,2,0,"mat-icon",36,Mc),U()(),F(12,"p",37),$(13),U()()),i&2){let t=e.$implicit,n=Ve();H(3),Oe(t.avatar),H(3),Oe(t.name),H(2),Oe(t.role[n.i18n.currentLang()]),H(2),pn(Pg(4,MS)),H(3),Pt('"',t.text[n.i18n.currentLang()],'"')}}var vd=class i{currentMode=Nt("fullstack");i18n=re(Ln);fullstackHighlights=[{icon:"work_history",value:"3+",label:{en:"Years of experience",fr:"Ann\xE9es d'exp\xE9rience"}},{icon:"rocket_launch",value:"10+",label:{en:"Projects delivered",fr:"Projets livr\xE9s"}},{icon:"groups",value:"4",label:{en:"Happy clients",fr:"Clients satisfaits"}},{icon:"school",value:"5+",label:{en:"Technologies mastered",fr:"Technologies ma\xEEtris\xE9es"}}];dataHighlights=[{icon:"memory",value:"5+",label:{en:"Deployed models",fr:"Mod\xE8les d\xE9ploy\xE9s"}},{icon:"dataset",value:"50M+",label:{en:"Data processed",fr:"Donn\xE9es trait\xE9es"}},{icon:"insights",value:"4+",label:{en:"ETL Pipelines",fr:"Pipelines ETL"}},{icon:"psychology",value:"2+",label:{en:"GenAI Projects",fr:"Projets GenAI"}}];autresHighlights=[{icon:"emoji_events",value:"1er",label:{en:"CEPA 2023 Prize",fr:"Prix CEPA 2023"}},{icon:"public",value:"Suisse",label:{en:"First GLOBAL 2022",fr:"First GLOBAL 2022"}},{icon:"language",value:"C1",label:{en:"French",fr:"Fran\xE7ais"}},{icon:"forum",value:"B2",label:{en:"English",fr:"Anglais"}}];highlights=In(()=>{switch(this.currentMode()){case"fullstack":return this.fullstackHighlights;case"data":return this.dataHighlights;case"autres":return this.autresHighlights}});fullstackTestimonials=[{name:"Ben EKLU",role:{en:"JURINABE CoFounder",fr:"CoFondateur JURINABE"},text:{en:"Charly transformed our vision into a robust and intuitive application. Outstanding work!",fr:"Charly a transform\xE9 notre vision en une application robuste et intuitive. Un travail exceptionnel !"},avatar:"B"},{name:"Fr\xE9d\xE9ric ALLAH-ASSOGBA.",role:{en:"CTO",fr:"CTO"},text:{en:"Clean code, solid architecture, and delivered on time. A real added value for our team.",fr:"Code propre, architecture solide et livraison dans les temps. Une vraie valeur ajout\xE9e pour notre \xE9quipe."},avatar:"F"}];dataTestimonials=[{name:"Abel CHEROUAT.",role:{en:"Advanced Programming Professor",fr:"Professeur en Programmation Avanc\xE9e"},text:{en:"His deep understanding of data structures and algorithms was evident in his project. A rigorous and competent student.",fr:"Sa ma\xEEtrise approfondie des structures de donn\xE9es et des algorithmes \xE9tait \xE9vidente dans son projet. Un \xE9tudiant rigoureux et comp\xE9tent."},avatar:"A"}];autresTestimonials=[{name:"Antoine DEKPOH",role:{en:"First place in the 2023 English competition",fr:"Premier au Concours d'anglais 2023"},text:{en:"His presentation was eloquent and his team spirit excellent, leading to victory in 2023.",fr:"Sa pr\xE9sentation \xE9tait \xE9loquente et son esprit d'\xE9quipe excellent, menant \xE0 la victoire en 2023."},avatar:"A"},{name:"Olorode ATANLEY",role:{en:"First GLOBAL Mentor",fr:"Mentor First GLOBAL"},text:{en:"Remarkable technical curiosity and resilience during this international robotics competition.",fr:"Curiosit\xE9 technique et r\xE9silience remarquables lors de cette comp\xE9tition de robotique internationale."},avatar:"O"}];testimonials=In(()=>{switch(this.currentMode()){case"fullstack":return this.fullstackTestimonials;case"data":return this.dataTestimonials;case"autres":return this.autresTestimonials}});devCode=In(()=>this.currentMode()==="fullstack"?{role:{en:"'Full-Stack Developer'",fr:"'D\xE9veloppeur Full-Stack'"},stack:"['Angular', 'Django', 'Laravel', 'Spring Boot', 'PostgreSQL']",passion:"'UI/UX Design'"}:this.currentMode()==="data"?{role:{en:"'AI Data Engineer'",fr:"'Ing\xE9nieur IA & Data'"},stack:"['Python', 'Apache Spark', 'Talend', 'Scikit-learn']",passion:"'AI, Data, Data Science'"}:{role:{en:"'Competitor & Bilingual'",fr:"'Comp\xE9titeur & Bilingue'"},stack:"['Robotics', 'Leadership', 'Languages']",passion:"'challenges'"});aboutTexts=In(()=>this.currentMode()==="fullstack"?{p1:{en:"Passionate developer, I build modern web applications using clean and maintainable architectures. I enjoy transforming complex business needs into simple, accessible, and user-friendly interfaces.",fr:"D\xE9veloppeur passionn\xE9, je con\xE7ois des applications web modernes en m'appuyant sur des architectures propres et maintenables. J'aime transformer des besoins m\xE9tier complexes en interfaces simples, accessibles et agr\xE9ables \xE0 utiliser."},p2:{en:"Curious and meticulous, I am equally invested in code quality as I am in the final user experience \u2014 from prototyping to production.",fr:"Curieux et rigoureux, je m'investis autant sur la qualit\xE9 du code que sur l'exp\xE9rience finale livr\xE9e \xE0 l'utilisateur \u2014 du prototypage \xE0 la mise en production."},next:{en:"AI Data Engineer Profile",fr:"Profil Ing\xE9nieur IA & Data"}}:this.currentMode()==="data"?{p1:{en:"Passionate AI Data Engineer, I design robust and scalable data architectures. My goal is to extract value from raw data by automating processing pipelines and deploying high-performance machine learning models.",fr:"AI Data Engineer passionn\xE9, je con\xE7ois des architectures de donn\xE9es robustes et \xE9volutives. Mon objectif est d'extraire la valeur des donn\xE9es brutes en automatisant leur traitement et en d\xE9ployant des mod\xE8les de machine learning performants."},p2:{en:"I ensure every integration pipeline is optimized, secure, and production-ready, while maintaining absolute code quality standards.",fr:"Je m'assure que chaque pipeline d'int\xE9gration est optimis\xE9, s\xE9curis\xE9 et pr\xEAt pour la production, tout en maintenant une exigence de qualit\xE9 de code absolue."},next:{en:"Beyond the code",fr:"Au-del\xE0 du code"}}:{p1:{en:"Beyond the code, I am a true competitor at heart. I had the opportunity to represent my country at the international robotics competition First GLOBAL 2022 in Switzerland, an unforgettable experience in high-pressure teamwork.",fr:"Au-del\xE0 du code, je suis un comp\xE9titeur dans l'\xE2me. J'ai eu l'opportunit\xE9 de repr\xE9senter mon pays lors de la comp\xE9tition internationale de robotique First GLOBAL 2022 en Suisse, une exp\xE9rience inoubliable de travail d'\xE9quipe sous pression."},p2:{en:"I am also the winner of the CEPA 2023 English competition as a team. My communication skills (C1 French, B2 English) allow me to easily thrive in international environments.",fr:"Je suis \xE9galement vainqueur du concours d'anglais CEPA 2023 en \xE9quipe. Une aisance en communication (C1 Fran\xE7ais, B2 Anglais) qui me permet d'\xE9voluer ais\xE9ment dans des contextes internationaux."},next:{en:"Full-Stack Profile",fr:"Profil Full-Stack"}});toggleMode(){let e=["fullstack","data","autres"],n=(e.indexOf(this.currentMode())+1)%e.length;this.currentMode.set(e[n])}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-about"]],decls:64,vars:13,consts:[["id","a-propos",1,"section","about"],["appReveal","left",1,"about__intro"],[1,"section-eyebrow"],[1,"about__title-group"],[1,"section-title"],["alt","Who Am I","loading","lazy",1,"about__title-image",3,"src"],[1,"about__text",3,"innerHTML"],[1,"about__text"],["role","button","tabindex","0",1,"about__next-btn",3,"click"],["aria-hidden","true",1,"code-card"],[1,"code-card__bar"],[1,"code-card__dot","code-card__dot--red"],[1,"code-card__dot","code-card__dot--yellow"],[1,"code-card__dot","code-card__dot--green"],[1,"code-card__filename"],[1,"code-card__body"],[1,"tok-keyword"],[1,"tok-var"],[1,"tok-prop"],[1,"tok-string"],["appReveal","right",1,"about__right-column"],[1,"about__highlights"],["appearance","outlined",1,"highlight-card"],[1,"about__testimonials"],[1,"about__testimonials-title"],[1,"about__testimonials-list"],[1,"testimonial-card"],[1,"highlight-card__icon"],[1,"highlight-card__value"],[1,"highlight-card__label"],[1,"testimonial-card__header"],[1,"testimonial-card__avatar"],[1,"testimonial-card__meta"],[1,"testimonial-card__name"],[1,"testimonial-card__role"],[1,"testimonial-card__stars"],[1,"star-icon"],[1,"testimonial-card__text"]],template:function(t,n){t&1&&(F(0,"section",0)(1,"div",1)(2,"p",2),$(3),U(),F(4,"div",3)(5,"h2",4),$(6),U(),Je(7,"img",5),U(),Je(8,"p",6),F(9,"p",7),$(10),F(11,"span",8),Qe("click",function(){return n.toggleMode()}),$(12),F(13,"mat-icon"),$(14,"keyboard_double_arrow_right"),U()()(),F(15,"div",9)(16,"div",10),Je(17,"span",11)(18,"span",12)(19,"span",13),F(20,"span",14),$(21),U()(),F(22,"pre",15)(23,"code")(24,"span",16),$(25,"const"),U(),$(26," "),F(27,"span",17),$(28,"developer"),U(),$(29,` = {
  `),F(30,"span",18),$(31,"name"),U(),$(32,": "),F(33,"span",19),$(34,"'Charly EKLU'"),U(),$(35,`,
  `),F(36,"span",18),$(37,"role"),U(),$(38,": "),F(39,"span",19),$(40),U(),$(41,`,
  `),F(42,"span",18),$(43,"stack"),U(),$(44,": "),F(45,"span",19),$(46),U(),$(47,`,
  `),F(48,"span",18),$(49,"passion"),U(),$(50,": "),F(51,"span",19),$(52),U(),$(53,`,
};`),U()()()(),F(54,"div",20)(55,"div",21),fn(56,TS,7,3,"mat-card",22,SS),U(),F(58,"div",23)(59,"h3",24),$(60),U(),F(61,"div",25),fn(62,ES,14,5,"div",26,wS),U()()()()),t&2&&(H(3),Oe(n.i18n.t("about.title")),H(3),Oe(n.i18n.t("about.title")),H(),ut("src",n.currentMode()==="fullstack"?"images/WhoAmI.png":n.currentMode()==="data"?"images/WhoAmI_2.png":"images/WhoAmI_3.png",qn),H(),ut("innerHTML",n.aboutTexts().p1[n.i18n.currentLang()],_g),H(2),Pt(" ",n.aboutTexts().p2[n.i18n.currentLang()]," "),H(2),Pt(" ",n.aboutTexts().next[n.i18n.currentLang()]," "),H(9),Oe(n.currentMode()==="fullstack"?"developer.ts":n.currentMode()==="data"?"data_engineer.py":"awards.yml"),H(19),Oe(n.devCode().role[n.i18n.currentLang()]),H(6),Oe(n.devCode().stack),H(6),Oe(n.devCode().passion),H(3),ut("@flipList",n.currentMode()),H(),pn(n.highlights()),H(4),Oe(n.i18n.currentLang()==="en"?"What they say":"Ce qu'ils en disent"),H(),ut("@flipList",n.currentMode()),H(),pn(n.testimonials()))},dependencies:[On,Dn,lv,av,jn],styles:['@charset "UTF-8";.about[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.1fr .9fr;gap:3rem;align-items:start}.about[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{min-width:0}.about__text[_ngcontent-%COMP%]{color:var(--text-secondary);line-height:1.75;font-size:1rem}.about__right-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.about__highlights[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;align-content:start}.about__title-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem}.about__title-group[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{margin-bottom:0}.about__next-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.15rem;margin-left:.35rem;color:var(--primary-400);font-weight:600;cursor:pointer;transition:color .2s,text-shadow .2s;white-space:nowrap}.about__next-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem;margin-top:1px}.about__next-btn[_ngcontent-%COMP%]:hover{color:var(--primary-300);text-shadow:0 0 8px rgba(3,175,249,.35)}.about__title-image[_ngcontent-%COMP%]{height:144px;width:auto;object-fit:contain;display:block;filter:drop-shadow(0 0 10px rgba(3,175,249,.3))}.code-card[_ngcontent-%COMP%]{margin-top:2rem;border-radius:var(--radius-md);overflow:hidden;background:var(--bg-800);border:1px solid var(--border-default);box-shadow:var(--shadow-card)}.code-card__bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;padding:.65rem 1rem;background:var(--bg-700);border-bottom:1px solid rgba(3,175,249,.1)}.code-card__dot[_ngcontent-%COMP%]{width:.65rem;height:.65rem;border-radius:50%}.code-card__dot--red[_ngcontent-%COMP%]{background:#ff5f56}.code-card__dot--yellow[_ngcontent-%COMP%]{background:#ffbd2e}.code-card__dot--green[_ngcontent-%COMP%]{background:#27c93f}.code-card__filename[_ngcontent-%COMP%]{margin-left:.6rem;font-size:.75rem;color:var(--text-muted);font-family:Roboto Mono,ui-monospace,monospace}.code-card__body[_ngcontent-%COMP%]{margin:0;padding:1.25rem 1.5rem;overflow-x:auto;font-family:Roboto Mono,ui-monospace,monospace;font-size:.85rem;line-height:1.75;color:var(--text-primary);background:var(--bg-800)}.code-card__body[_ngcontent-%COMP%]   .tok-keyword[_ngcontent-%COMP%]{color:#ff7ab2}.code-card__body[_ngcontent-%COMP%]   .tok-var[_ngcontent-%COMP%]{color:var(--primary-300)}.code-card__body[_ngcontent-%COMP%]   .tok-prop[_ngcontent-%COMP%]{color:var(--primary-200)}.code-card__body[_ngcontent-%COMP%]   .tok-string[_ngcontent-%COMP%]{color:#ffcb6b}.highlight-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:.35rem;padding:1.25rem;background:var(--bg-800);border:1px solid var(--border-default);border-radius:var(--radius-md);transition:border-color .3s,box-shadow .3s}.highlight-card[_ngcontent-%COMP%]:hover{border-color:var(--border-active);box-shadow:0 0 20px #03aff91f}.highlight-card__icon[_ngcontent-%COMP%]{color:var(--primary-400);filter:drop-shadow(0 0 6px rgba(3,175,249,.4))}.highlight-card__value[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;color:var(--text-primary)}.highlight-card__label[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-secondary)}.about__testimonials[_ngcontent-%COMP%]{margin-top:1rem}.about__testimonials-title[_ngcontent-%COMP%]{font-size:.85rem;text-transform:uppercase;letter-spacing:.05em;color:var(--text-muted);margin-bottom:1rem;font-weight:600}.about__testimonials-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.testimonial-card[_ngcontent-%COMP%]{background:var(--bg-800);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:1.25rem;display:flex;flex-direction:column;gap:.85rem;transition:border-color .3s,box-shadow .3s}.testimonial-card[_ngcontent-%COMP%]:hover{border-color:#03aff94d;box-shadow:0 0 15px #03aff914}.testimonial-card__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.testimonial-card__avatar[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,var(--primary-700),var(--primary-400));color:#000106;font-weight:700;display:flex;align-items:center;justify-content:center;font-size:1.1rem;box-shadow:var(--glow-primary);flex-shrink:0}.testimonial-card__meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1}.testimonial-card__name[_ngcontent-%COMP%]{font-weight:600;color:var(--text-primary);font-size:.95rem}.testimonial-card__role[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-muted)}.testimonial-card__stars[_ngcontent-%COMP%]{display:flex;gap:2px;color:#ffbd2e}.testimonial-card__stars[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem;filter:drop-shadow(0 0 4px rgba(255,189,46,.4))}.testimonial-card__text[_ngcontent-%COMP%]{margin:0;font-size:.88rem;color:var(--text-secondary);line-height:1.6;font-style:italic}@media(max-width:900px){.about[_ngcontent-%COMP%]{grid-template-columns:1fr;text-align:center}.about__title-group[_ngcontent-%COMP%]{justify-content:center;flex-direction:column}.about__right-column[_ngcontent-%COMP%], .highlight-card[_ngcontent-%COMP%]{align-items:center}.code-card[_ngcontent-%COMP%]{text-align:left;width:100%}.about__testimonials-title[_ngcontent-%COMP%]{text-align:center}}@media(max-width:600px){.about__highlights[_ngcontent-%COMP%]{grid-template-columns:1fr}.about__title-group[_ngcontent-%COMP%]{text-align:center}}'],data:{animation:[nf("flipList",[sf("* => *",[of(":enter",[Cc({transform:"perspective(600px) rotateY(-90deg)",opacity:0}),af(100,[rf("400ms cubic-bezier(0.4, 0.0, 0.2, 1)",Cc({transform:"perspective(600px) rotateY(0)",opacity:1}))])],{optional:!0})])])]}})};var AS=20,Hs=(()=>{class i{_ngZone=re(hn);_platform=re(Vn);_renderer=re(Di).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new Jt;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let n=this.scrollContainers.get(t);n&&(n.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=AS){return this._platform.isBrowser?new lg(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=t>0?this._scrolled.pipe(Qu(t)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ma()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(t,n){let r=this.getAncestorScrollContainers(t);return this.scrolled(n).pipe(uo(s=>!s||r.indexOf(s)>-1))}getAncestorScrollContainers(t){let n=[];return this.scrollContainers.forEach((r,s)=>{this._scrollableContainsElement(s,t)&&n.push(s)}),n}_scrollableContainsElement(t,n){let r=Ea(n),s=t.getElementRef().nativeElement;do if(r==s)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Sn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var PS=20,Gs=(()=>{class i{_platform=re(Vn);_listeners;_viewportSize=null;_change=new Jt;_document=re(yn);constructor(){let t=re(hn),n=re(Di).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=s=>this._change.next(s);this._listeners=[n.listen("window","resize",r),n.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+r,right:t.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,n=this._getWindow(),r=t.documentElement,s=r.getBoundingClientRect(),o=-s.top||t.body?.scrollTop||n.scrollY||r.scrollTop||0,a=-s.left||t.body?.scrollLeft||n.scrollX||r.scrollLeft||0;return{top:o,left:a}}change(t=PS){return t>0?this._change.pipe(Qu(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Sn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var zs=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=en({type:i});static \u0275inj=Qt({})}return i})(),Qf=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=en({type:i});static \u0275inj=Qt({imports:[wn,zs,wn,zs]})}return i})();var ll=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},cl=class extends ll{component;viewContainerRef;injector;projectableNodes;bindings;constructor(e,t,n,r,s){super(),this.component=e,this.viewContainerRef=t,this.injector=n,this.projectableNodes=r,this.bindings=s||null}},Io=class extends ll{templateRef;viewContainerRef;context;injector;constructor(e,t,n,r){super(),this.templateRef=e,this.viewContainerRef=t,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}},ep=class extends ll{element;constructor(e){super(),this.element=e instanceof un?e.nativeElement:e}},tp=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof cl)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof Io)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof ep)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},dl=class extends tp{outletElement;_appRef;_defaultInjector;constructor(e,t,n){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=n}attachComponentPortal(e){let t;if(e.viewContainerRef){let n=e.injector||e.viewContainerRef.injector,r=n.get(yg,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:n,ngModuleRef:r,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let n=this._appRef,r=e.injector||this._defaultInjector||Rn.NULL,s=r.get(mc,n.injector);t=Lg(e.component,{elementInjector:r,environmentInjector:s,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0}),n.attachView(t.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,n=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=t.indexOf(n);r!==-1&&t.remove(r)}),this._attachedPortal=e,n}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(n,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var cv=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=en({type:i});static \u0275inj=Qt({})}return i})();var dv=Kg();function _v(i){return new xd(i.get(Gs),i.get(yn))}var xd=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||"",this._previousHTMLStyles.top=e.style.top||"",e.style.left=tn(-this._previousScrollPosition.left),e.style.top=tn(-this._previousScrollPosition.top),e.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,n=e.style,r=t.style,s=n.scrollBehavior||"",o=r.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,e.classList.remove("cdk-global-scrollblock"),dv&&(n.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),dv&&(n.scrollBehavior=s,r.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,n=this._viewportRuler.getViewportSize();return t.scrollHeight>n.height||t.scrollWidth>n.width}};function vv(i,e){return new yd(i.get(Hs),i.get(hn),i.get(Gs),e)}var yd=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,n,r){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=n,this._config=r}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(uo(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var hl=class{enable(){}disable(){}attach(){}};function np(i,e){return e.some(t=>{let n=i.bottom<t.top,r=i.top>t.bottom,s=i.right<t.left,o=i.left>t.right;return n||r||s||o})}function hv(i,e){return e.some(t=>{let n=i.top<t.top,r=i.bottom>t.bottom,s=i.left<t.left,o=i.right>t.right;return n||r||s||o})}function Oo(i,e){return new bd(i.get(Hs),i.get(Gs),i.get(hn),e)}var bd=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,n,r){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=n,this._config=r}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:r}=this._viewportRuler.getViewportSize();np(t,[{width:n,height:r,bottom:r,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},xv=(()=>{class i{_injector=re(Rn);constructor(){}noop=()=>new hl;close=t=>vv(this._injector,t);block=()=>_v(this._injector);reposition=t=>Oo(this._injector,t);static \u0275fac=function(n){return new(n||i)};static \u0275prov=Sn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Do=class{positionStrategy;scrollStrategy=new hl;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let n of t)e[n]!==void 0&&(this[n]=e[n])}}};var Md=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var yv=(()=>{class i{_attachedOverlays=[];_document=re(yn);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let n=this._attachedOverlays.indexOf(t);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,n,r){return r.observers.length<1?!1:t.eventPredicate?t.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Sn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),bv=(()=>{class i extends yv{_ngZone=re(hn);_renderer=re(Di).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let n=this._attachedOverlays;for(let r=n.length-1;r>-1;r--){let s=n[r];if(this.canReceiveEvent(s,t,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(r){return(t||(t=ef(i)))(r||i)}})();static \u0275prov=Sn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Mv=(()=>{class i extends yv{_platform=re(Vn);_ngZone=re(hn);_renderer=re(Di).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let n=this._document.body,r={capture:!0},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(n,"pointerdown",this._pointerDownListener,r),s.listen(n,"click",this._clickListener,r),s.listen(n,"auxclick",this._clickListener,r),s.listen(n,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=lf(t)};_clickListener=t=>{let n=lf(t),r=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let o=s.length-1;o>-1;o--){let a=s[o],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,l))){if(uv(a.overlayElement,n)||uv(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static \u0275fac=(()=>{let t;return function(r){return(t||(t=ef(i)))(r||i)}})();static \u0275prov=Sn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function uv(i,e){let t=typeof ShadowRoot<"u"&&ShadowRoot,n=e;for(;n;){if(n===i)return!0;n=t&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var Sv=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),wv=(()=>{class i{_platform=re(Vn);_containerElement;_document=re(yn);_styleLoader=re(Es);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||df()){let r=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let s=0;s<r.length;s++)r[s].remove()}let n=this._document.createElement("div");n.classList.add(t),df()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(Sv)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Sn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ip=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,n,r){this._renderer=t,this._ngZone=n,this.element=e.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents="none",e.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function rp(i){return i&&i.nodeType===1}var Sd=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Jt;_attachments=new Jt;_detachments=new Jt;_positionStrategy;_scrollStrategy;_locationChanges=zr.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Jt;_outsidePointerEvents=new Jt;_afterNextRenderRef;constructor(e,t,n,r,s,o,a,l,c,d=!1,u,h){this._portalOutlet=e,this._host=t,this._pane=n,this._config=r,this._ngZone=s,this._keyboardDispatcher=o,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=u,this._renderer=h,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=pr(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=ce(ce({},this._config),e),this._updateElementSize()}setDirection(e){this._config=Ze(ce({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e=="string"?e:e.value:"ltr"}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=tn(this._config.width),e.height=tn(this._config.height),e.minWidth=tn(this._config.minWidth),e.minHeight=tn(this._config.minHeight),e.maxWidth=tn(this._config.maxWidth),e.maxHeight=tn(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?"":"none"}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;rp(e)?e.after(this._host):e?.type==="parent"?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let e="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ip(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,n){let r=cf(t||[]).filter(s=>!!s);r.length&&(n?e.classList.add(...r):e.classList.remove(...r))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=pr(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}},fv="cdk-overlay-connected-position-bounding-box",RS=/([A-Za-z%]+)$/;function Lo(i,e){return new wd(e,i.get(Gs),i.get(yn),i.get(Vn),i.get(wv))}var wd=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Jt;_resizeSubscription=zr.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,n,r,s){this._viewportRuler=t,this._document=n,this._platform=r,this._overlayContainer=s,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(fv),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,n=this._viewportRect,r=this._containerRect,s=[],o;for(let a of this._preferredPositions){let l=this._getOriginPoint(e,r,a),c=this._getOverlayPoint(l,t,a),d=this._getOverlayFit(c,t,n,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,n)){s.push({position:a,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!o||o.overlayFit.visibleArea<d.visibleArea)&&(o={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:t})}if(s.length){let a=null,l=-1;for(let c of s){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ws(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(fv),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof un?this._origin.nativeElement:rp(this._origin)?this._origin:null}_getOriginPoint(e,t,n){let r;if(n.originX=="center")r=e.left+e.width/2;else{let o=this._isRtl()?e.right:e.left,a=this._isRtl()?e.left:e.right;r=n.originX=="start"?o:a}t.left<0&&(r-=t.left);let s;return n.originY=="center"?s=e.top+e.height/2:s=n.originY=="top"?e.top:e.bottom,t.top<0&&(s-=t.top),{x:r,y:s}}_getOverlayPoint(e,t,n){let r;n.overlayX=="center"?r=-t.width/2:n.overlayX==="start"?r=this._isRtl()?-t.width:0:r=this._isRtl()?0:-t.width;let s;return n.overlayY=="center"?s=-t.height/2:s=n.overlayY=="top"?0:-t.height,{x:e.x+r,y:e.y+s}}_getOverlayFit(e,t,n,r){let s=mv(t),{x:o,y:a}=e,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(o+=l),c&&(a+=c);let d=0-o,u=o+s.width-n.width,h=0-a,f=a+s.height-n.height,g=this._subtractOverflows(s.width,d,u),x=this._subtractOverflows(s.height,h,f),m=g*x;return{visibleArea:m,isCompletelyWithinViewport:s.width*s.height===m,fitsInViewportVertically:x===s.height,fitsInViewportHorizontally:g==s.width}}_canFitWithFlexibleDimensions(e,t,n){if(this._hasFlexibleDimensions){let r=n.bottom-t.y,s=n.right-t.x,o=pv(this._overlayRef.getConfig().minHeight),a=pv(this._overlayRef.getConfig().minWidth),l=e.fitsInViewportVertically||o!=null&&o<=r,c=e.fitsInViewportHorizontally||a!=null&&a<=s;return l&&c}return!1}_pushOverlayOnScreen(e,t,n){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let r=mv(t),s=this._viewportRect,o=Math.max(e.x+r.width-s.width,0),a=Math.max(e.y+r.height-s.height,0),l=Math.max(s.top-n.top-e.y,0),c=Math.max(s.left-n.left-e.x,0),d=0,u=0;return r.width<=s.width?d=c||-o:d=e.x<this._getViewportMarginStart()?s.left-n.left-e.x:0,r.height<=s.height?u=l||-a:u=e.y<this._getViewportMarginTop()?s.top-n.top-e.y:0,this._previousPushAmount={x:d,y:u},{x:e.x+d,y:e.y+u}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!IS(this._lastScrollVisibility,n)){let r=new Md(e,n);this._positionChanges.next(r)}this._lastScrollVisibility=n}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,r=e.overlayY;e.overlayX==="center"?n="center":this._isRtl()?n=e.overlayX==="start"?"right":"left":n=e.overlayX==="start"?"left":"right";for(let s=0;s<t.length;s++)t[s].style.transformOrigin=`${n} ${r}`}_calculateBoundingBoxRect(e,t){let n=this._viewportRect,r=this._isRtl(),s,o,a;if(t.overlayY==="top")o=e.y,s=n.height-o+this._getViewportMarginBottom();else if(t.overlayY==="bottom")a=n.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),s=n.height-a+this._getViewportMarginTop();else{let f=Math.min(n.bottom-e.y+n.top,e.y),g=this._lastBoundingBoxSize.height;s=f*2,o=e.y-f,s>g&&!this._isInitialRender&&!this._growAfterOpen&&(o=e.y-g/2)}let l=t.overlayX==="start"&&!r||t.overlayX==="end"&&r,c=t.overlayX==="end"&&!r||t.overlayX==="start"&&r,d,u,h;if(c)h=n.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=e.x-this._getViewportMarginStart();else if(l)u=e.x,d=n.right-e.x-this._getViewportMarginEnd();else{let f=Math.min(n.right-e.x+n.left,e.x),g=this._lastBoundingBoxSize.width;d=f*2,u=e.x-f,d>g&&!this._isInitialRender&&!this._growAfterOpen&&(u=e.x-g/2)}return{top:o,left:u,bottom:a,right:h,width:d,height:s}}_setBoundingBoxStyles(e,t){let n=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let s=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;r.width=tn(n.width),r.height=tn(n.height),r.top=tn(n.top)||"auto",r.bottom=tn(n.bottom)||"auto",r.left=tn(n.left)||"auto",r.right=tn(n.right)||"auto",t.overlayX==="center"?r.alignItems="center":r.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?r.justifyContent="center":r.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",s&&(r.maxHeight=tn(s)),o&&(r.maxWidth=tn(o))}this._lastBoundingBoxSize=n,Ws(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Ws(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ws(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(e,t){let n={},r=this._hasExactPosition(),s=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Ws(n,this._getExactOverlayY(t,e,d)),Ws(n,this._getExactOverlayX(t,e,d))}else n.position="static";let a="",l=this._getOffset(t,"x"),c=this._getOffset(t,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),n.transform=a.trim(),o.maxHeight&&(r?n.maxHeight=tn(o.maxHeight):s&&(n.maxHeight="")),o.maxWidth&&(r?n.maxWidth=tn(o.maxWidth):s&&(n.maxWidth="")),Ws(this._pane.style,n)}_getExactOverlayY(e,t,n){let r={top:"",bottom:""},s=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,n)),e.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;r.bottom=`${o-(s.y+this._overlayRect.height)}px`}else r.top=tn(s.y);return r}_getExactOverlayX(e,t,n){let r={left:"",right:""},s=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,n));let o;if(this._isRtl()?o=e.overlayX==="end"?"left":"right":o=e.overlayX==="end"?"right":"left",o==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(s.x+this._overlayRect.width)}px`}else r.left=tn(s.x);return r}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),n=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:hv(e,n),isOriginOutsideView:np(e,n),isOverlayClipped:hv(t,n),isOverlayOutsideView:np(t,n)}}_subtractOverflows(e,...t){return t.reduce((n,r)=>n-Math.max(r,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+e-this._getViewportMarginEnd(),bottom:n.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t==="x"?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&cf(e).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof un)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,n=e.height||0;return{top:e.y,bottom:e.y+n,left:e.x,right:e.x+t,height:n,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();e&&(t.style.display="block");let n=t.getBoundingClientRect();return e&&(t.style.display=""),n}};function Ws(i,e){for(let t in e)e.hasOwnProperty(t)&&(i[t]=e[t]);return i}function pv(i){if(typeof i!="number"&&i!=null){let[e,t]=i.split(RS);return!t||t==="px"?parseFloat(e):null}return i||null}function mv(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function IS(i,e){return i===e?!0:i.isOriginClipped===e.isOriginClipped&&i.isOriginOutsideView===e.isOriginOutsideView&&i.isOverlayClipped===e.isOverlayClipped&&i.isOverlayOutsideView===e.isOverlayOutsideView}var gv="cdk-global-overlay-wrapper";function Tv(i){return new Td}var Td=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(gv),this._isDisposed=!1}top(e=""){return this._bottomOffset="",this._topOffset=e,this._alignItems="flex-start",this}left(e=""){return this._xOffset=e,this._xPosition="left",this}bottom(e=""){return this._topOffset="",this._bottomOffset=e,this._alignItems="flex-end",this}right(e=""){return this._xOffset=e,this._xPosition="right",this}start(e=""){return this._xOffset=e,this._xPosition="start",this}end(e=""){return this._xOffset=e,this._xPosition="end",this}width(e=""){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=""){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=""){return this.left(e),this._xPosition="center",this}centerVertically(e=""){return this.top(e),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:r,height:s,maxWidth:o,maxHeight:a}=n,l=(r==="100%"||r==="100vw")&&(!o||o==="100%"||o==="100vw"),c=(s==="100%"||s==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,u=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",f="",g="",x="";l?x="flex-start":d==="center"?(x="center",h?g=u:f=u):h?d==="left"||d==="end"?(x="flex-end",f=u):(d==="right"||d==="start")&&(x="flex-start",g=u):d==="left"||d==="start"?(x="flex-start",f=u):(d==="right"||d==="end")&&(x="flex-end",g=u),e.position=this._cssPosition,e.marginLeft=l?"0":f,e.marginTop=c?"0":this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=l?"0":g,t.justifyContent=x,t.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,n=t.style;t.classList.remove(gv),n.justifyContent=n.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position="",this._overlayRef=null,this._isDisposed=!0}},Cv=(()=>{class i{_injector=re(Rn);constructor(){}global(){return Tv()}flexibleConnectedTo(t){return Lo(this._injector,t)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Sn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ev=new dn("OVERLAY_DEFAULT_CONFIG");function No(i,e){i.get(Es).load(Sv);let t=i.get(wv),n=i.get(yn),r=i.get(mo),s=i.get(bc),o=i.get(_o),a=i.get(Xi,null,{optional:!0})||i.get(Di).createRenderer(null,null),l=new Do(e),c=i.get(Ev,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||o.value,"showPopover"in n.body?l.usePopover=e?.usePopover??c:l.usePopover=!1;let d=n.createElement("div"),u=n.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),u.appendChild(d),l.usePopover&&(u.setAttribute("popover","manual"),u.classList.add("cdk-overlay-popover"));let h=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return rp(h)?h.after(u):h?.type==="parent"?h.element.appendChild(u):t.getContainerElement().appendChild(u),new Sd(new dl(d,s,i),u,d,l,i.get(hn),i.get(bv),n,i.get(Ng),i.get(Mv),e?.disableAnimations??i.get(vc,null,{optional:!0})==="NoopAnimations",i.get(mc),a)}var Av=(()=>{class i{scrollStrategies=re(xv);_positionBuilder=re(Cv);_injector=re(Rn);constructor(){}create(t){return No(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Sn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ul=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=en({type:i});static \u0275inj=Qt({providers:[Av],imports:[wn,cv,Qf,Qf]})}return i})();var DS=["tooltip"],OS=20;var LS=new dn("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=re(Rn);return()=>Oo(i,{scrollThrottle:OS})}}),NS=new dn("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Pv="tooltip-panel",FS={passive:!0},kS=8,BS=8,US=24,VS=200,op=(()=>{class i{_elementRef=re(un);_ngZone=re(hn);_platform=re(Vn);_ariaDescriber=re($g);_focusMonitor=re(Aa);_dir=re(_o);_injector=re(Rn);_viewContainerRef=re(Ts);_mediaMatcher=re(qg);_document=re(yn);_renderer=re(Xi);_animationsDisabled=go();_defaultOptions=re(NS,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Rv;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=As(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let n=As(t);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Ca(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Ca(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let n=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new Jt;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=kS}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Ii(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(n);this._detach(),this._portal=this._portal||new cl(this._tooltipComponent,this._viewContainerRef);let s=this._tooltipInstance=r.attach(this._portal).instance;s._triggerElement=this._elementRef.nativeElement,s._mouseLeaveHideDelay=this._hideDelay,s.afterHidden().pipe(Ii(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),s.show(t)}hide(t=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(t):(n._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&o._origin instanceof un)return this._overlayRef;this._detach()}let n=this._injector.get(Hs).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${Pv}`,s=Lo(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation("global");return s.positionChanges.pipe(Ii(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=No(this._injector,{direction:this._dir,positionStrategy:s,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(LS)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Ii(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Ii(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Ii(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Ii(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let n=t.getConfig().positionStrategy,r=this._getOrigin(),s=this._getOverlayPosition();n.withPositions([this._addOffset(ce(ce({},r.main),s.main)),this._addOffset(ce(ce({},r.fallback),s.fallback))])}_addOffset(t){let n=BS,r=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-n:t.originY==="bottom"?t.offsetY=n:t.originX==="start"?t.offsetX=r?-n:n:t.originX==="end"&&(t.offsetX=r?n:-n),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"||n=="below"?r={originX:"center",originY:n=="above"?"top":"bottom"}:n=="before"||n=="left"&&t||n=="right"&&!t?r={originX:"start",originY:"center"}:(n=="after"||n=="right"&&t||n=="left"&&!t)&&(r={originX:"end",originY:"center"});let{x:s,y:o}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:s,originY:o}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"?r={overlayX:"center",overlayY:"bottom"}:n=="below"?r={overlayX:"center",overlayY:"top"}:n=="before"||n=="left"&&t||n=="right"&&!t?r={overlayX:"end",overlayY:"center"}:(n=="after"||n=="right"&&t||n=="left"&&!t)&&(r={overlayX:"start",overlayY:"center"});let{x:s,y:o}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:s,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),pr(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,n){return this.position==="above"||this.position==="below"?n==="top"?n="bottom":n==="bottom"&&(n="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:n}}_updateCurrentPositionClass(t){let{overlayY:n,originX:r,originY:s}=t,o;if(n==="center"?this._dir&&this._dir.value==="rtl"?o=r==="end"?"left":"right":o=r==="start"?"left":"right":o=n==="bottom"&&s==="top"?"above":"below",o!==this._currentPosition){let a=this._overlayRef;if(a){let l=`${this._cssClassPrefix}-${Pv}-`;a.removePanelClass(l+this._currentPosition),a.addPanelClass(l+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let n=t.targetTouches?.[0],r=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let s=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??s)})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let n;t.x!==void 0&&t.y!==void 0&&(n=t),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let n=t.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(t.clientX,t.clientY),r=this._elementRef.nativeElement;n!==r&&!r.contains(n)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",t),this._addListener("touchcancel",t)}}}_addListener(t,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,n,FS))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let n=this._elementRef.nativeElement,r=n.style;(t==="on"||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(t==="on"||!n.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||pr({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!Ec(t):!0;static \u0275fac=function(n){return new(n||i)};static \u0275dir=Yn({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(n,r){n&2&&At("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),Rv=(()=>{class i{_changeDetectorRef=re(Cs);_elementRef=re(un);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=go();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new Jt;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>US&&t.width>=VS}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let n=this._tooltip.nativeElement,r=this._showAnimation,s=this._hideAnimation;if(n.classList.remove(t?s:r),n.classList.add(t?r:s),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(n);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(n.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(n,r){if(n&1&&ii(DS,7),n&2){let s;Tt(s=Ct())&&(r._tooltip=s.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(n,r){n&1&&Qe("mouseleave",function(o){return r._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(n,r){n&1&&(Hr(0,"div",1,0),wc("animationend",function(o){return r._handleAnimationEnd(o)}),Hr(2,"div",2),$(3),fo()()),n&2&&(Wr(r.tooltipClass),At("mdc-tooltip--multiline",r._isMultiline),H(3),Oe(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return i})();var Iv=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=en({type:i});static \u0275inj=Qt({imports:[jg,ul,wn,zs]})}return i})();var HS=(i,e)=>e.category,GS=(i,e)=>e.name;function WS(i,e){if(i&1&&(F(0,"li",16)(1,"div",17),Je(2,"i",18),F(3,"span",19),$(4),U(),F(5,"span",20),$(6),U()()()),i&2){let t=e.$implicit,n=Ve(2);ut("matTooltip",t.projects[n.i18n.currentLang()]),H(2),Wr(Ag("",t.icon," colored skill-item__icon")),H(2),Oe(t.name),H(2),Oe(t.level[n.i18n.currentLang()])}}function XS(i,e){if(i&1&&(F(0,"div",13)(1,"div",14)(2,"mat-icon"),$(3),U(),F(4,"h3"),$(5),U()(),F(6,"ul",15),fn(7,WS,7,6,"li",16,GS),U()()),i&2){let t=e.$implicit,n=e.$index,r=Ve();ut("revealDelay",n*120),H(3),Oe(t.icon),H(2),Oe(r.i18n.t(t.category)),H(2),pn(t.items)}}var Cd=class i{revealed=Nt(!1);isOpen=Nt(!1);i18n=re(Ln);toggleOpen(){this.isOpen.update(e=>!e)}groups=[{category:"skills.category.frontend",icon:"web",items:[{name:"Angular",icon:"devicon-angular-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Used at ORABANK-TOGO for banking reconciliation and change request workflow web applications.",fr:"Utilis\xE9 \xE0 ORABANK-TOGO pour les applications web de rapprochements bancaires et de workflow de fiches de changement."}},{name:"TypeScript",icon:"devicon-typescript-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Typed Angular front-end logic for ORABANK projects and this portfolio.",fr:"Logique front-end Angular typ\xE9e pour les projets ORABANK et ce portfolio."}},{name:"JavaScript",icon:"devicon-javascript-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Interactive interfaces, animations and technical problem solving across portfolio and internship work.",fr:"Interfaces interactives, animations et r\xE9solution de probl\xE8mes techniques sur le portfolio et les stages."}},{name:"React",icon:"devicon-react-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Front-end practice alongside Angular, with reusable components and responsive UI work.",fr:"Pratique front-end compl\xE9mentaire \xE0 Angular, avec composants r\xE9utilisables et interfaces responsives."}}]},{category:"skills.category.backend",icon:"dns",items:[{name:"Node.js",icon:"devicon-nodejs-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"API and tooling practice for web application back ends.",fr:"Pratique des API et outils c\xF4t\xE9 back-end pour applications web."}},{name:"Spring Boot",icon:"devicon-spring-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Back-end technology used for ORABANK banking reconciliation and approval workflow applications.",fr:"Technologie back-end utilis\xE9e pour les applications ORABANK de rapprochements bancaires et de workflow d'approbation."}},{name:"Java",icon:"devicon-java-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Core language behind Spring Boot work and academic software engineering projects.",fr:"Langage principal derri\xE8re Spring Boot et les projets acad\xE9miques de g\xE9nie logiciel."}}]},{category:"skills.category.database",icon:"storage",items:[{name:"PostgreSQL",icon:"devicon-postgresql-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Relational database design for structured business workflows and web application back ends.",fr:"Conception de bases relationnelles pour workflows m\xE9tier structur\xE9s et back-ends web."}},{name:"MySQL",icon:"devicon-mysql-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Academic and web development database practice during the computer engineering curriculum.",fr:"Pratique base de donn\xE9es en projets acad\xE9miques et web durant le parcours informatique."}},{name:"MongoDB",icon:"devicon-mongodb-plain",level:{en:"Basics / Learning",fr:"Notions / En apprentissage"},projects:{en:"NoSQL exploration connected to the AI and Big Data master's path.",fr:"Exploration NoSQL li\xE9e au parcours Master en IA et Big Data."}}]},{category:"skills.category.tools",icon:"construction",items:[{name:"Git",icon:"devicon-git-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Versioning for portfolio work, academic projects and internship application development.",fr:"Versioning pour le portfolio, les projets acad\xE9miques et les d\xE9veloppements r\xE9alis\xE9s en stage."}},{name:"Docker",icon:"devicon-docker-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Environment setup practice for APIs, databases and full-stack applications.",fr:"Mise en place d'environnements pour API, bases de donn\xE9es et applications full-stack."}},{name:"Figma",icon:"devicon-figma-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"UI preparation and layout thinking for portfolio and web application screens.",fr:"Pr\xE9paration UI et r\xE9flexion sur les \xE9crans du portfolio et des applications web."}}]}];ngAfterViewInit(){setTimeout(()=>this.revealed.set(!0),150)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-skills"]],decls:19,vars:6,consts:[["id","competences",1,"section"],["appReveal","left"],[1,"section-eyebrow"],[1,"section-header-row"],[1,"section-title"],["mat-icon-button","",3,"click"],[1,"collapsible-content"],[1,"collapsible-content__inner"],[1,"skills"],[1,"skills__left-column"],["src","images/CHARLY_TECH.png","alt","Tech Stack","loading","lazy",1,"skills__large-image"],[1,"skills__right-column"],[1,"skills__groups"],["appReveal","bottom",1,"skills__group",3,"revealDelay"],[1,"skills__group-header"],[1,"skills__list"],["matTooltipPosition","above","matTooltipClass","skill-tooltip","matTooltipTouchGestures","off",1,"skill-item",3,"matTooltip"],[1,"skill-item__label"],["aria-hidden","true"],[1,"skill-item__name"],[1,"skill-item__level"]],template:function(t,n){t&1&&(F(0,"section",0)(1,"div",1)(2,"p",2),$(3),U(),F(4,"div",3)(5,"h2",4),$(6),U(),F(7,"button",5),Qe("click",function(){return n.toggleOpen()}),F(8,"mat-icon"),$(9),U()()()(),F(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9),Je(14,"img",10),U(),F(15,"div",11)(16,"div",12),fn(17,XS,9,3,"div",13,HS),U()()()()()()),t&2&&(H(3),Oe(n.i18n.t("skills.title")),H(3),Oe(n.i18n.t("skills.title")),H(),It("aria-label",n.i18n.t("skills.aria_toggle")),H(2),Oe(n.isOpen()?"remove":"add"),H(),At("is-open",n.isOpen()),H(7),pn(n.groups))},dependencies:[On,Dn,Iv,op,jn],styles:['@charset "UTF-8";.skills[_ngcontent-%COMP%]{display:grid;grid-template-columns:.8fr 1.2fr;gap:3rem;align-items:start}.skills__left-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.skills__large-image[_ngcontent-%COMP%]{width:100%;max-width:350px;height:auto;object-fit:contain;margin-top:1.5rem;align-self:flex-start;filter:drop-shadow(0 0 15px rgba(3,175,249,.15))}.skills__right-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.skills__groups[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}.skills__group[_ngcontent-%COMP%]{background:var(--bg-800);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:1.5rem;transition:border-color .3s,box-shadow .3s}.skills__group[_ngcontent-%COMP%]:hover{border-color:#03aff94d;box-shadow:0 0 20px #03aff914}.skills__group-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;margin-bottom:1.25rem;color:var(--primary-400)}.skills__group-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:600;color:var(--text-primary);letter-spacing:-.01em}.skills__group-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{filter:drop-shadow(0 0 6px rgba(3,175,249,.35))}.skills__list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1.1rem}.skill-item[_ngcontent-%COMP%]{padding:.6rem .8rem;border-radius:var(--radius-sm);background:#03aff908;border:1px solid transparent;transition:background .2s,border-color .2s;cursor:help}.skill-item[_ngcontent-%COMP%]:hover{background:#03aff914;border-color:#03aff933}.skill-item__label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.65rem;font-size:.88rem;color:var(--text-secondary);font-weight:500}.skill-item__icon[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--primary-400);opacity:.9}.skill-item__name[_ngcontent-%COMP%]{color:var(--text-primary);font-weight:600}.skill-item__level[_ngcontent-%COMP%]{margin-left:auto;font-size:.72rem;color:var(--text-muted)}@media(max-width:992px){.skills[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:2rem;text-align:center}.skills__left-column[_ngcontent-%COMP%]{align-items:center}.skills__large-image[_ngcontent-%COMP%]{max-width:300px;margin:1.5rem auto 0;align-self:center}.skills__groups[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}}@media(max-width:600px){.skills__groups[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem}.skills__group[_ngcontent-%COMP%]{padding:1.1rem}.skills__group-header[_ngcontent-%COMP%]{justify-content:center;margin-bottom:.85rem}.skills__list[_ngcontent-%COMP%]{gap:.6rem}.skill-item[_ngcontent-%COMP%]{padding:.45rem .65rem}.skill-item__label[_ngcontent-%COMP%]{font-size:.8rem;gap:.5rem}.skill-item__icon[_ngcontent-%COMP%]{font-size:1.05rem}.skill-item__level[_ngcontent-%COMP%]{font-size:.65rem}}']})};var bi=typeof window<"u",Ed=bi?window:null,es=bi?document:null,Dt={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},lt={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Tn={NONE:0,AUTO:1,FORCE:2},an={replace:0,none:1,blend:2},ap=Symbol(),$i=Symbol(),Ad=Symbol(),ts=Symbol(),Dv=Symbol(),_t=1e-11,fl=1e12,Ki=1e3,pl=240,Mi="",Ov="var(",ml=[],Pd=(()=>{let i=new Map;return i.set("x","translateX"),i.set("y","translateY"),i.set("z","translateZ"),i})(),Fo=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],Lv=Fo.reduce((i,e)=>Ze(ce({},i),{[e]:e+"("}),{}),Gn=()=>{},Nv=i=>i,Fv=/\)\s*[-.\d]/,kv=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,Bv=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,Uv=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Vv=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,zv=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,lp=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,Rd=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,Hv=/([a-z])([A-Z])/g,Gv=/(\*=|\+=|-=)/,Wv=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;var ko={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:pl,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:Ki,delay:0,loopDelay:0,ease:"out(2)",composition:an.replace,modifier:Nv,onBegin:Gn,onBeforeUpdate:Gn,onUpdate:Gn,onLoop:Gn,onPause:Gn,onComplete:Gn,onRender:Gn},gl={current:null,root:es},Gt={defaults:ko,precision:4,timeScale:1,tickThreshold:200,editor:null},cp={version:"4.5.0",engine:null};bi&&(Ed.AnimeJS||(Ed.AnimeJS=[]),Ed.AnimeJS.push(cp));var dp=i=>i.replace(Hv,"$1-$2").toLowerCase(),oi=(i,e)=>i.indexOf(e)===0,Sr=Date.now,Si=Array.isArray,Id=i=>i&&i.constructor===Object,wi=i=>typeof i=="number"&&!isNaN(i),Ti=i=>typeof i=="string",Ci=i=>typeof i=="function",it=i=>typeof i>"u",Ji=i=>it(i)||i===null,Dd=i=>bi&&i instanceof SVGElement,hp=i=>kv.test(i),up=i=>oi(i,"rgb"),fp=i=>oi(i,"hsl"),qv=i=>hp(i)||(up(i)||fp(i))&&(i[i.length-1]===")"||!Fv.test(i)),_l=i=>!Gt.defaults.hasOwnProperty(i),qS=["opacity","rotate","overflow","color"],Yv=(i,e)=>{if(qS.includes(e))return!1;if(i.getAttribute(e)||e in i){if(e==="scale"){let t=i.parentNode;return t&&t.tagName==="filter"}return!0}},Od=i=>Ti(i)?parseFloat(i):i,Xs=Math.pow,vl=Math.sqrt,jv=Math.sin,Zv=Math.cos,xl=Math.abs;var qs=Math.floor,$v=Math.asin;var yl=Math.PI,Xv=Math.round,$n=(i,e,t)=>i<e?e:i>t?t:i,wt=(i,e)=>{if(e<0)return i;if(!e)return Xv(i);let t=10**e;return Xv(i*t)/t};var Bo=(i,e,t)=>t===1?e:t===0?i:i+(e-i)*t,bl=i=>i===1/0?fl:i===-1/0?-fl:i,Ys=i=>i<=_t?_t:bl(wt(i,11)),ln=i=>Si(i)?[...i]:i,Kv=(i,e)=>{let t=ce({},i);for(let n in e){let r=i[n];t[n]=it(r)?e[n]:r}return t},Bt=(i,e,t,n="_prev",r="_next")=>{let s=i._head,o=r;for(t&&(s=i._tail,o=n);s;){let a=s[o];e(s),s=a}},js=(i,e,t="_prev",n="_next")=>{let r=e[t],s=e[n];r?r[n]=s:i._head=s,s?s[t]=r:i._tail=r,e[t]=null,e[n]=null},wr=(i,e,t,n="_prev",r="_next")=>{let s=i._tail;for(;s&&t&&t(s,e);)s=s[n];let o=s?s[r]:i._head;s?s[r]=e:i._head=e,o?o[n]=e:i._tail=e,e[n]=s,e[r]=o};var Jv=(i,e,t)=>{let n=i.style.transform;if(n){let r=i[ts],s=0,o=n.length,a;for(;s<o;){for(;s<o&&n.charCodeAt(s)===32;)s++;if(s>=o)break;let c=s;for(;s<o&&n.charCodeAt(s)!==40;)s++;if(s>=o)break;let d=n.substring(c,s),u=1,h=s+1,f=-1,g=-1;for(s++;s<o&&u>0;){let m=n.charCodeAt(s);m===40?u++:m===41?u--:m===44&&u===1&&(f===-1?f=s:g===-1&&(g=s)),s++}let x=s-1;d==="translate"||d==="translate3d"?(f===-1?r.translateX=n.substring(h,x).trim():(r.translateX=n.substring(h,f).trim(),g===-1?r.translateY=n.substring(f+1,x).trim():(r.translateY=n.substring(f+1,g).trim(),r.translateZ=n.substring(g+1,x).trim())),a=n.substring(h,x)):d==="scale"||d==="scale3d"?f===-1?r.scale=n.substring(h,x).trim():(r.scaleX=n.substring(h,f).trim(),g===-1?r.scaleY=n.substring(f+1,x).trim():(r.scaleY=n.substring(f+1,g).trim(),r.scaleZ=n.substring(g+1,x).trim())):r[d]=n.substring(h,x)}if(e==="translate3d"&&a)return t&&(t[e]=a),a;let l=r[e];if(!it(l))return t&&(t[e]=l),l}return e==="translate3d"?"0px, 0px, 0px":e==="rotate3d"?"0, 0, 0, 0deg":oi(e,"scale")?"1":oi(e,"rotate")||oi(e,"skew")?"0deg":"0px"},Ld=i=>{let e=Mi;for(let t=0,n=Fo.length;t<n;t++){let r=Fo[t],s=i[r];if(s!==void 0){if(r==="translateX"){let o=i.translateY;if(o!==void 0){let a=i.translateZ;a!==void 0?(e+=`translate3d(${s},${o},${a}) `,t+=2):(e+=`translate(${s},${o}) `,t+=1);continue}}if(r==="scaleX"&&i.scale===void 0){let o=i.scaleY;if(o!==void 0){let a=i.scaleZ;a!==void 0?(e+=`scale3d(${s},${o},${a}) `,t+=2):(e+=`scale(${s},${o}) `,t+=1);continue}}e+=`${Lv[r]}${s}) `}r==="rotateZ"&&i.rotate3d!==void 0&&(e+=`rotate3d(${i.rotate3d}) `)}return i.matrix!==void 0&&(e+=`matrix(${i.matrix}) `),i.matrix3d!==void 0&&(e+=`matrix3d(${i.matrix3d}) `),e};var pp=[];function Nd(i,e){if(!i)return null;let t=pp.length;e:for(let n=0;n<t;n++){let r=pp[n];if(r.detect&&!r.detect(i))continue;let s=r.targetAdapters;for(let o=0,a=s.length;o<a;o++){let l=s[o];if(l.detect(i)){let c=l.props[e];if(c&&(!c.gate||c.gate(i)))return c;break e}}}for(let n=0;n<t;n++){let r=pp[n];if(r.detect&&!r.detect(i))continue;let s=r.propertyResolvers;for(let o=0,a=s.length;o<a;o++){let l=s[o](i,e);if(l)return l}}return null}var YS=i=>{let e=Bv.exec(i)||Uv.exec(i),t=it(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],t]},jS=i=>{let e=i.length,t=e===4||e===5;return[+("0x"+i[1]+i[t?1:2]),+("0x"+i[t?2:3]+i[t?2:4]),+("0x"+i[t?3:5]+i[t?3:6]),e===5||e===9?+(+("0x"+i[t?4:7]+i[t?4:8])/255).toFixed(3):1]},mp=(i,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i),ZS=i=>{let e=Vv.exec(i)||zv.exec(i),t=+e[1]/360,n=+e[2]/100,r=+e[3]/100,s=it(e[4])?1:+e[4],o,a,l;if(n===0)o=a=l=r;else{let c=r<.5?r*(1+n):r+n-r*n,d=2*r-c;o=wt(mp(d,c,t+1/3)*255,0),a=wt(mp(d,c,t)*255,0),l=wt(mp(d,c,t-1/3)*255,0)}return[o,a,l,s]},Qv=i=>up(i)?YS(i):hp(i)?jS(i):fp(i)?ZS(i):[0,0,0,1];var _n=(i,e)=>it(i)?e:i,ex=(i,e)=>{let t=i.match(Wv),n=e[$i]?e:document.documentElement,r=getComputedStyle(n)?.getPropertyValue(t[1]);return(!r||r.trim()===Mi)&&t[2]&&(r=t[2].trim()),r||0},Qi=(i,e,t,n,r,s)=>{if(Ci(i)){if(!r){let a=i(e,t,n,s);return isNaN(+a)?a||0:+a}let o=()=>{let a=i(e,t,n,s);return isNaN(+a)?a||0:+a};return r.func=o,o()}if(Ti(i)&&oi(i,Ov)){if(!r)return ex(i,e);let o=()=>ex(i,e);return r.func=o,o()}return i},gp=(i,e)=>i[$i]?i[Ad]&&Yv(i,e)?Dt.ATTRIBUTE:Fo.includes(e)||Pd.get(e)?Dt.TRANSFORM:oi(e,"--")?Dt.CSS_VAR:e in i.style?Dt.CSS:e in i?Dt.OBJECT:Dt.ATTRIBUTE:Dt.OBJECT,tx=(i,e,t)=>{let n=i.style[e];n&&t&&(t[e]=n);let r=n||getComputedStyle(i[Dv]||i).getPropertyValue(e);return r==="auto"?"0":r},ns=(i,e,t,n)=>{let r=it(t)?gp(i,e):t,s=Nd(i,e);if(s){let o=s.get(i);return o&&n&&(n[e]=o),o??0}if(r===Dt.OBJECT){let o=i[e];return o&&n&&(n[e]=o),o||0}if(r===Dt.ATTRIBUTE){let o=i.getAttribute(e);return o&&n&&(n[e]=o),o}return r===Dt.TRANSFORM?Jv(i,e,n):r===Dt.CSS_VAR?tx(i,e,n).trimStart():tx(i,e,n)},Uo=(i,e,t)=>t==="-"?i-e:t==="+"?i+e:i*e,Fd=()=>({t:lt.NUMBER,n:0,u:null,o:null,d:null,s:null}),Kn=(i,e)=>{if(e.t=lt.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!i)return e;let t=+i;if(!isNaN(t))return e.n=t,e;let n=i;n[1]==="="&&(e.o=n[0],n=n.slice(2));let r=n.includes(" ")?!1:Rd.exec(n);if(r)return e.t=lt.UNIT,e.n=+r[1],e.u=r[2],e;if(e.o)return e.n=+n,e;if(qv(n))return e.t=lt.COLOR,e.d=Qv(n),e;{let s=n.match(lp);return e.t=lt.COMPLEX,e.d=s?s.map(Number):[],e.s=n.split(lp)||[],e}},_p=(i,e)=>(e.t=i._valueType,e.n=i._toNumber,e.u=i._unit,e.o=null,e.d=ln(i._toNumbers),e.s=ln(i._strings),e),ai=Fd(),kd=(i,e,t)=>{let n=i._modifier,r=i._fromNumbers,s=i._toNumbers,o=i._strings,a=o[0];for(let l=0,c=s.length;l<c;l++){let d=n(wt(Bo(r[l],s[l],e),t)),u=o[l+1];a+=`${u?d+u:d}`,i._numbers[l]=d}return a};var Ml=(i,e,t,n,r)=>{let s=i.parent,o=i.duration,a=i.completed,l=i.iterationDuration,c=i.iterationCount,d=i._currentIteration,u=i._loopDelay,h=i._reversed,f=i._alternate,g=i._hasChildren,x=i._delay,m=i._currentTime,p=x+l,C=e-x,E=$n(m,-x,o),b=$n(C,-x,o),w=C-m,M=b>0,A=b>=o,v=o<=_t,T=r===Tn.FORCE,R=0,P=C,N=0;if(c>1){let z=l+(A?0:u),ee=~~(b/z);i._currentIteration=$n(ee,0,c),A&&i._currentIteration--,R=i._currentIteration%2,P=b-ee*z||0}let j=h^(f&&R),Q=i._ease,D=A?j?0:o:j?l-P:P;Q&&(D=l*Q(D/l)||0);let q=(s?s.backwards:C<m)?!j:!!j;if(i._currentTime=C,i._iterationTime=D,i.backwards=q,M&&!i.began?(i.began=!0,!t&&!(s&&(q||!s.began))&&i.onBegin(i)):C<=0&&(i.began=!1),!t&&!g&&M&&i._currentIteration!==d&&i.onLoop(i),T||r===Tn.AUTO&&(e>=(s&&x>0?0:x)&&e<=p||e<=x&&E>x||e>=p&&E!==o)||D>=p&&E!==o||D<=x&&E>0&&!A||e<=E&&E===o&&a||A&&!a&&v){if(M&&(i.computeDeltaTime(E),t||i.onBeforeUpdate(i)),!g){let z=T||(q?w*-1:w)>=Gt.tickThreshold,ee=wt(i._offset+(s?s._offset:0)+x+D,12),V=i._head,ie,de,pe,nt,xt=0;for(;V;){let Xe=V._composition,Y=V._currentTime,le=V._changeDuration,se=V._absoluteStartTime+V._changeDuration,he=V._nextRep,Ie=V._prevRep,be=Xe!==an.none,De=Ie?Ie._absoluteStartTime+Ie._changeDuration:0,Te=Ie&&Ie.parent!==V.parent,je=!he||he._isOverridden?se:he.parent===V.parent?se+he._delay:he._absoluteStartTime<he._absoluteUpdateStartTime?he._absoluteStartTime:he._absoluteUpdateStartTime;if((z||(Y!==le||ee<=je||Ie&&!Te&&(!he||he.parent!==V.parent))&&(Y!==0||ee>=V._absoluteStartTime||Te&&!V._hasFromValue&&!Ie._isOverridden&&ee>=De||he&&!he._isOverridden&&he.parent===V.parent&&he._currentTime!==0&&D<he._startTime))&&(!Ie||Te||D>=V._startTime)&&(!be||!V._isOverridden&&(!V._isOverlapped||ee<=se)&&(!he||he._isOverridden||ee<=je)&&(!Ie||Ie._isOverridden||(Te?ee>=V._absoluteStartTime||!V._hasFromValue&&ee>=De:ee>=De+V._delay)))){let Fe=V._currentTime=$n(D-V._startTime,0,le),Pe=V._ease(Fe/V._updateDuration),$e=V._modifier,at=V._valueType,rt=V._tweenType,gt=rt===Dt.OBJECT,tt=at===lt.NUMBER,dt=tt&&gt||Pe===0||Pe===1?-1:Gt.precision,I,ht;if(tt)I=ht=$e(wt(Bo(V._fromNumber,V._toNumber,Pe),dt));else if(at===lt.UNIT)ht=$e(wt(Bo(V._fromNumber,V._toNumber,Pe),dt)),I=`${ht}${V._unit}`;else if(at===lt.COLOR){let Le=V._numbers,S=V._fromNumbers,_=V._toNumbers,L=1-Pe,B=S[0],K=S[1],ae=S[2],ue=_[0],J=_[1],te=_[2];Le[0]=$e(Math.sqrt(B*B*L+ue*ue*Pe)),Le[1]=$e(Math.sqrt(K*K*L+J*J*Pe)),Le[2]=$e(Math.sqrt(ae*ae*L+te*te*Pe)),Le[3]=$e(Bo(S[3],_[3],Pe)),(!V._setter||n)&&(I=`rgba(${wt(Le[0],0)},${wt(Le[1],0)},${wt(Le[2],0)},${Le[3]})`)}else at===lt.COMPLEX&&(I=kd(V,Pe,dt));if(be&&(V._number=ht),!n&&Xe!==an.blend){let Le=V.property;ie=V.target,V._setter?V._setter(ie,ht,V):gt?ie[Le]=I:rt===Dt.ATTRIBUTE?ie.setAttribute(Le,I):(de=ie.style,rt===Dt.TRANSFORM?(ie!==pe&&(pe=ie,nt=ie[ts]),nt[Le]=I,xt=1):rt===Dt.CSS?de[Le]=I:rt===Dt.CSS_VAR&&de.setProperty(Le,I)),M&&(N=1)}else V._value=I}else Y&&Ie&&!Te&&D<V._startTime&&(V._currentTime=0);xt&&V._renderTransforms&&(de.transform=Ld(nt),xt=0),V=V._next}!t&&N&&i.onRender(i)}!t&&M&&i.onUpdate(i)}return s&&v?!t&&(s.began&&!q&&C>0&&!a||q&&C<=_t&&a)&&(i.onComplete(i),i.completed=!q):M&&A?c===1/0?i._startTime+=i.duration:i._currentIteration>=c-1&&(i.paused=!0,!a&&!g&&(i.completed=!0,!t&&!(s&&(q||!s.began))&&(i.onComplete(i),i._resolve(i)))):i.completed=!1,N},is=(i,e,t,n,r)=>{let s=i._currentIteration;if(Ml(i,e,t,n,r),i._hasChildren){let o=i,a=o.backwards,l=n?e:o._iterationTime,c=Sr(),d=0,u=!0;if(!n&&o._currentIteration!==s){let h=o.iterationDuration;Bt(o,f=>{if(!a)!f.completed&&!f.backwards&&f._currentTime<f.iterationDuration&&Ml(f,h,t,1,Tn.FORCE),f.began=!1,f.completed=!1;else{let g=f.duration,x=f._offset+f._delay,m=x+g;!t&&g<=_t&&(!x||m===h)&&f.onComplete(f)}}),t||o.onLoop(o)}Bt(o,h=>{let f=wt((l-h._offset)*h._speed,12);if(a&&f>h._delay+h.duration)return;let g=h._fps<o._fps?h.requestTick(c):r;d+=Ml(h,f,t,n,g),!h.completed&&u&&(u=!1)},a),!t&&d&&o.onRender(o),(u||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,t||(o.onComplete(o),o._resolve(o))))}};var nx={},ix=(i,e,t)=>{if(t===Dt.TRANSFORM){let n=Pd.get(i);return n||i}else if(t===Dt.CSS||t===Dt.ATTRIBUTE&&Dd(e)&&i in e.style){let n=nx[i];if(n)return n;{let r=i&&dp(i);return nx[i]=r,r}}else return i},vp=(i,e=!1)=>{if(i._hasChildren)Bt(i,t=>vp(t,e),!0);else{let t=i;t.pause(),Bt(t,n=>{let r=n.property,s=n.target,o=n._tweenType,a=n._inlineValue,l=Ji(a)||a===Mi;if(n._setter){if(!e&&!l){if(Kn(a,ai),ai.d){let c=ai.d,d=n._numbers;for(let u=0,h=c.length;u<h;u++)d[u]=c[u]}else n._number=ai.n;n._setter(n.target,n._number,n)}}else if(o===Dt.OBJECT)!e&&!l&&(s[r]=a);else if(s[$i])if(o===Dt.ATTRIBUTE)e||(l?s.removeAttribute(r):s.setAttribute(r,a));else{let c=s.style;if(o===Dt.TRANSFORM){let d=s[ts];l?delete d[r]:d[r]=a,n._renderTransforms&&(Object.keys(d).length?c.transform=Ld(d):c.removeProperty("transform"))}else l?c.removeProperty(dp(r)):c[r]=a}s[$i]&&t._tail===n&&t.targets.forEach(c=>{c.getAttribute&&c.getAttribute("style")===Mi&&c.removeAttribute("style")})})}return i};var Vo=class{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._frameDuration=Ki/pl,this._fps=pl,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){let t=+e,n=t<_t?_t:t,r=Ki/n;n>ko.frameRate&&(ko.frameRate=n),this._fps=n,this._frameDuration=r}get speed(){return this._speed}set speed(e){let t=+e;this._speed=t<_t?_t:t}requestTick(e){let t=this._frameDuration,n=e-this._lastTickTime,r=t*.25,s=r<4?r:4;return n+s<t?Tn.NONE:(this._lastTickTime=n>=t?e-n%t:e,Tn.AUTO)}computeDeltaTime(e){let t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}};var Tr={animation:null,update:Gn},rx=i=>{let e=Tr.animation;return e||(e={duration:_t,computeDeltaTime:Gn,_offset:0,_delay:0,_head:null,_tail:null},Tr.animation=e,Tr.update=()=>{i.forEach(t=>{for(let n in t){let r=t[n],s=r._head;if(s){let o=s._valueType,a=o===lt.COMPLEX||o===lt.COLOR?ln(s._fromNumbers):null,l=s._fromNumber,c=r._tail;for(;c&&c!==s;){if(a)for(let d=0,u=c._numbers.length;d<u;d++)a[d]+=c._numbers[d];else l+=c._number;c=c._prevAdd}s._toNumber=l,s._toNumbers=a}}}),Ml(e,1,1,0,Tn.FORCE)}),e};var sx=bi?requestAnimationFrame:setImmediate,$S=bi?cancelAnimationFrame:clearImmediate,xp=class extends Vo{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=ko,this.paused=!0,this.reqId=0}update(){let e=this._currentTime=Sr();if(this.requestTick(e)){this.computeDeltaTime(e);let t=this._speed,n=this._fps,r=this._head;for(;r;){let s=r._next;r.paused?(js(this,r),this._hasChildren=!!this._tail,r._running=!1,r.completed&&!r._cancelled&&r.cancel()):is(r,(e-r._startTime)*r._speed*t,0,0,r._fps<n?r.requestTick(e):Tn.AUTO),r=s}Tr.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(Sr()),this.reqId=sx(ox)),this}pause(){if(this.reqId)return this.paused=!0,KS()}resume(){if(this.paused)return this.paused=!1,Bt(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(Gt.timeScale===1?1:Ki)}set speed(e){let t=e*Gt.timeScale;this._speed!==t&&(this._speed=t,Bt(this,n=>n.speed=n._speed))}get timeUnit(){return Gt.timeScale===1?"ms":"s"}set timeUnit(e){let n=e==="s",r=n?.001:1;if(Gt.timeScale!==r){Gt.timeScale=r,Gt.tickThreshold=200*r;let s=n?.001:Ki;this.defaults.duration*=s,this._speed*=s}}get precision(){return Gt.precision}set precision(e){Gt.precision=e}},Cn=(()=>{let i=new xp(Sr());return bi&&(cp.engine=i,es.addEventListener("visibilitychange",()=>{i.pauseOnDocumentHidden&&(es.hidden?i.pause():i.resume())})),i})(),ox=()=>{Cn._head?(Cn.reqId=sx(ox),Cn.update()):Cn.reqId=0},KS=()=>($S(Cn.reqId),Cn.reqId=0,Cn);var Bd={_rep:new WeakMap,_add:new Map},wl=(i,e,t="_rep")=>{let n=Bd[t],r=n.get(i);return r||(r={},n.set(i,r)),r[e]?r[e]:r[e]={_head:null,_tail:null}},JS=(i,e)=>i._isOverridden||i._absoluteStartTime>e._absoluteStartTime,Sl=i=>{i._isOverlapped=1,i._isOverridden=1,i._changeDuration=_t,i._currentTime=_t},Ud=(i,e)=>{let t=i._composition;if(t===an.replace){let n=i._absoluteStartTime;wr(e,i,JS,"_prevRep","_nextRep");let r=i._prevRep;if(r){let s=r.parent,o=r._absoluteEndTime;if(i.parent.id!==s.id&&s.iterationCount>1&&o+(s.duration-s.iterationDuration)>n){Sl(r);let c=r._prevRep;for(;c&&c.parent.id===s.id;)Sl(c),c=c._prevRep}let a=i._absoluteUpdateStartTime;if(o>a){let c=r._startTime,d=o-(c+r._updateDuration),u=wt(a-d-c,12);r._changeDuration=u,r._currentTime=u,r._isOverlapped=1,u<_t&&Sl(r)}let l=i.parent.parent;if(!l||l!==s.parent){let c=!0;if(Bt(s,d=>{d._isOverlapped||(c=!1)}),c){let d=s.parent;if(d){let u=!0;Bt(d,h=>{h!==s&&Bt(h,f=>{f._isOverlapped||(u=!1)})}),u&&d.cancel()}else s.cancel()}}}}else if(t===an.blend){let n=wl(i.target,i.property,"_add"),r=rx(Bd._add),s=n._head;s||(s=ce({},i),s._composition=an.replace,s._updateDuration=_t,s._startTime=0,s._numbers=ln(i._fromNumbers),s._number=0,s._next=null,s._prev=null,wr(n,s),wr(r,s));let o=i._toNumber;if(i._fromNumber=s._fromNumber-o,i._toNumber=0,i._numbers=ln(i._fromNumbers),i._number=0,s._fromNumber=o,i._toNumbers.length){let a=ln(i._toNumbers);a.forEach((l,c)=>{i._fromNumbers[c]=s._fromNumbers[c]-l,i._toNumbers[c]=0}),s._fromNumbers=a}wr(n,i,null,"_prevAdd","_nextAdd")}return i},ax=i=>{let e=i._composition;if(e!==an.none){let t=i.target,n=i.property,o=Bd._rep.get(t)[n];if(js(o,i,"_prevRep","_nextRep"),e===an.blend){let a=Bd._add,l=a.get(t);if(!l)return;let c=l[n],d=Tr.animation;js(c,i,"_prevAdd","_nextAdd");let u=c._head;if(u&&u===c._tail){js(c,u,"_prevAdd","_nextAdd"),js(d,u);let h=!0;for(let f in l)if(l[f]._head){h=!1;break}h&&a.delete(t)}}}return i};var lx=i=>(i.paused=!0,i.began=!1,i.completed=!1,i),yp=i=>(i._cancelled&&(i._hasChildren?Bt(i,yp):Bt(i,e=>{e._composition!==an.none&&Ud(e,wl(e.target,e.property))}),i._cancelled=0),i),cx=0,QS=(i,e)=>i._priority>e._priority,Vd=class extends Vo{constructor(e={},t=null,n=0){super(0),++cx;let{id:r,delay:s,duration:o,reversed:a,alternate:l,loop:c,loopDelay:d,autoplay:u,frameRate:h,playbackRate:f,priority:g,onComplete:x,onLoop:m,onPause:p,onBegin:C,onBeforeUpdate:E,onUpdate:b}=e;gl.current&&gl.current.register(this);let w=t?0:Cn._lastTickTime,M=t?t.defaults:Gt.defaults,A=Ci(s)||it(s)?M.delay:+s,v=Ci(o)||it(o)?1/0:+o,T=_n(c,M.loop),R=_n(d,M.loopDelay),P=T===!0||T===1/0||T<0?1/0:T+1,N=0;t?N=n:(Cn.reqId||Cn.requestTick(Sr()),N=(Cn._lastTickTime-Cn._startTime)*Gt.timeScale),this.id=it(r)?cx:r,this.parent=t,this.duration=bl((v+R)*P-R)||_t,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=C||M.onBegin,this.onBeforeUpdate=E||M.onBeforeUpdate,this.onUpdate=b||M.onUpdate,this.onLoop=m||M.onLoop,this.onPause=p||M.onPause,this.onComplete=x||M.onComplete,this.iterationDuration=v,this.iterationCount=P,this._autoplay=t?!1:_n(u,M.autoplay),this._offset=N,this._delay=A,this._loopDelay=R,this._iterationTime=0,this._currentIteration=0,this._resolve=Gn,this._running=!1,this._reversed=+_n(a,M.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=_n(l,M.alternate),this._prev=null,this._next=null,this._lastTickTime=w,this._startTime=w,this._lastTime=w,this._fps=_n(h,M.frameRate),this._speed=_n(f,M.playbackRate),this._priority=+_n(g,1)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return $n(wt(this._currentTime,Gt.precision),-this._delay,this.duration)}set currentTime(e){let t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return $n(wt(this._iterationTime,Gt.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return $n(wt(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return $n(wt(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){let t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*$n(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return yp(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,is(this,0,1,~~e,Tn.FORCE),lx(this),this._hasChildren&&Bt(this,lx),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&is(this,this.duration,1,~~e,Tn.FORCE),this.reset(e);let t=this._autoplay;return t===!0?this.resume():t&&!it(t.linked)&&t.link(this),this}resetTime(){let e=1/(this._speed*Cn._speed);return this._startTime=Sr()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=_t&&!this._hasChildren?is(this,_t,0,0,Tn.FORCE):(this._running||(wr(Cn,this,QS),Cn._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,Cn.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,n=0){yp(this),this.completed=!1;let r=this.paused;return this.paused=!0,is(this,e+this._delay,~~t,~~n,Tn.AUTO),r?this:this.resume()}alternate(){let e=this._reversed,t=this.iterationCount,n=this.iterationDuration,r=t===1/0?qs(fl/n):t;return this._reversed=+(this._alternate&&!(r%2)?e:!e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(n*r-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?Bt(this,e=>e.cancel(),!0):Bt(this,ax),this._cancelled=1,this.pause()}stretch(e){let t=this.duration,n=Ys(e);if(t===n)return this;let r=e/t,s=e<=_t;return this.duration=s?_t:n,this.iterationDuration=s?_t:Ys(this.iterationDuration*r),this._offset*=r,this._delay*=r,this._loopDelay*=r,this}revert(){is(this,0,1,0,Tn.AUTO);let e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=Gn){let t=this.then,n=()=>{this.then=null,e(this),this.then=t,this._resolve=Gn};return new Promise(r=>(this._resolve=()=>r(n()),this.completed&&this._resolve(),this))}};function dx(i){let e=Ti(i)?gl.root.querySelectorAll(i):i;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function ew(i){if(Ji(i))return[];if(!bi)return Si(i)&&i.flat(1/0)||[i];if(Si(i)){let t=i.flat(1/0),n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];if(!Ji(o)){let a=dx(o);if(a)for(let l=0,c=a.length;l<c;l++){let d=a[l];if(!Ji(d)){let u=!1;for(let h=0,f=n.length;h<f;h++)if(n[h]===d){u=!0;break}u||n.push(d)}}else{let l=!1;for(let c=0,d=n.length;c<d;c++)if(n[c]===o){l=!0;break}l||n.push(o)}}}return n}let e=dx(i);return e?Array.from(e):[i]}function zd(i){let e=ew(i),t=e.length;for(let n=0;n<t;n++){let r=e[n];if(!r[ap]){r[ap]=!0;let s=Dd(r);(r.nodeType||s)&&(r[$i]=!0,r[Ad]=s,r[ts]={})}}return e}var bp={deg:1,rad:180/yl,turn:360},hx={},Mp=(i,e,t,n=!1)=>{let r=e.u,s=e.n;if(e.t===lt.UNIT&&r===t)return e;let o=s+r+t,a=hx[o];if(!it(a)&&!n)e.n=a;else{let l;if(r in bp)l=s*bp[r]/bp[t];else{let d=i.cloneNode(),u=i.parentNode,h=u&&u!==es?u:es.body;h.appendChild(d);let f=d.style;f.width=100+r;let g=d.offsetWidth||100;f.width=100+t;let x=d.offsetWidth||100,m=g/x;h.removeChild(d),l=m*s}e.n=l,hx[o]=l}return e.t,lt.UNIT,e.u=t,e};var Cr=i=>i;var Tl=(i=1.68)=>e=>Xs(e,+i),wp={in:i=>e=>i(e),out:i=>e=>1-i(1-e),inOut:i=>e=>e<.5?i(e*2)/2:1-i(e*-2+2)/2,outIn:i=>e=>e<.5?(1-i(1-e*2))/2:(i(e*2-1)+1)/2},tw=yl/2,ux=yl*2,fx={[Mi]:Tl,Quad:Tl(2),Cubic:Tl(3),Quart:Tl(4),Quint:Tl(5),Sine:i=>1-Zv(i*tw),Circ:i=>1-vl(1-i*i),Expo:i=>i?Xs(2,10*i-10):0,Bounce:i=>{let e,t=4;for(;i<((e=Xs(2,--t))-1)/11;);return 1/Xs(4,3-t)-7.5625*Xs((e*3-2)/22-i,2)},Back:(i=1.7)=>e=>(+i+1)*e*e*e-+i*e*e,Elastic:(i=1,e=.3)=>{let t=$n(+i,1,10),n=$n(+e,_t,2),r=n/ux*$v(1/t),s=ux/n;return o=>o===0||o===1?o:-t*Xs(2,-10*(1-o))*jv((1-o-r)*s)}},Sp=(()=>{let i={linear:Cr,none:Cr};for(let e in wp)for(let t in fx){let n=fx[t],r=wp[e];i[e+t]=t===Mi||t==="Back"||t==="Elastic"?(s,o)=>r(n(s,o)):r(n)}return i})(),Hd={linear:Cr,none:Cr},nw=i=>{if(Hd[i])return Hd[i];if(i.indexOf("(")<=-1){let t=wp[i]||i.includes("Back")||i.includes("Elastic")?Sp[i]():Sp[i];return t?Hd[i]=t:Cr}else{let e=i.slice(0,-1).split("("),t=Sp[e[0]];return t?Hd[i]=t(...e[1].split(",")):Cr}},px=["steps(","irregular(","linear(","cubicBezier("],Cl=i=>{if(Ti(i)){for(let t=0,n=px.length;t<n;t++)if(oi(i,px[t]))return console.warn(`String syntax for \`ease: "${i}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${i}\``),Cr}return Ci(i)?i:Ti(i)?nw(i):Cr};var Ke=Fd(),ct=Fd(),zo={},Gd={func:null},Wd={func:null},Xd=[null],Ho=[null,null],qd={to:null},iw=0,mx=0,rs,er,rw=(i,e)=>{let t={};if(Si(i)){let n=[].concat(...i.map(r=>Object.keys(r))).filter(_l);for(let r=0,s=n.length;r<s;r++){let o=n[r],a=i.map(l=>{let c={};for(let d in l){let u=l[d];_l(d)?d===o&&(c.to=u):c[d]=u}return c});t[o]=a}}else{let n=_n(e.duration,Gt.defaults.duration);Object.keys(i).map(s=>({o:parseFloat(s)/100,p:i[s]})).sort((s,o)=>s.o-o.o).forEach(s=>{let o=s.o,a=s.p;for(let l in a)if(_l(l)){let c=t[l];c||(c=t[l]=[]);let d=o*n,u=c.length,h=c[u-1],f={to:a[l]},g=0;for(let x=0;x<u;x++)g+=c[x].duration;u===1&&(f.from=h.to),a.ease&&(f.ease=a.ease),f.duration=d-(u?g:0),c.push(f)}return s});for(let s in t){let o=t[s],a;for(let l=0,c=o.length;l<c;l++){let d=o[l],u=d.ease;d.ease=a||void 0,a=u}o[0].duration||o.shift()}}return t},Yd=class extends Vd{constructor(e,t,n,r,s=!1,o=0,a){super(t,n,r),this._head,this._tail,++mx;let l=zd(e),c=l.length,d=t.keyframes,u=d?Kv(rw(d,t),t):t,{id:h,delay:f,duration:g,ease:x,playbackEase:m,modifier:p,composition:C,onRender:E}=u,b=n?n.defaults:Gt.defaults,w=_n(x,b.ease),M=_n(m,b.playbackEase),A=M?Cl(M):null,v=!it(w.ease),T=v?w.ease:_n(x,A?"linear":b.ease),R=v?w.settlingDuration:_n(g,b.duration),P=_n(f,b.delay),N=p||b.modifier,j=it(C)&&c>=Ki?an.none:it(C)?b.composition:C,Q=this._offset+(n?n._offset:0);v&&(w.parent=this);let D=NaN,q=NaN,z=0,ee=0;for(let V=0;V<c;V++){let ie=l[V],de=o||V,pe=a||l,nt=NaN,xt=NaN;for(let Xe in u)if(_l(Xe)){let Y=gp(ie,Xe),le=Nd(ie,Xe),se=ix(Xe,ie,Y),he=u[Xe],Ie=Si(he);if(s&&!Ie&&(Ho[0]=he,Ho[1]=he,he=Ho),Ie){let Pe=he.length,$e=!Id(he[0]);Pe===2&&$e?(qd.to=he,Xd[0]=qd,rs=Xd):Pe>2&&$e?(rs=[],he.forEach((at,rt)=>{rt?rt===1?(Ho[1]=at,rs.push(Ho)):rs.push(at):Ho[0]=at})):rs=he}else Xd[0]=he,rs=Xd;let be=null,De=null,Te=NaN,je=0,Fe=0;for(let Pe=rs.length;Fe<Pe;Fe++){let $e=rs[Fe];Id($e)?er=$e:(qd.to=$e,er=qd),Gd.func=null,Wd.func=null;let at=Qi(_n(er.composition,j),ie,de,pe,null,null),rt=wi(at)?at:an[at];!be&&rt!==an.none&&(be=wl(ie,se));let gt=be?be._tail:null,tt=n&&gt&&gt.parent.parent===n?gt:De,dt=Qi(er.to,ie,de,pe,Gd,tt),I;Id(dt)&&!it(dt.to)?(er=dt,I=dt.to):I=dt;let ht=Qi(er.from,ie,de,pe,Wd,tt),Le=er.ease||T,S=Qi(Le,ie,de,pe,null,tt),_=Ci(S)||Ti(S)?S:Le,L=!it(_)&&!it(_.ease),B=L?_.ease:_,K=L?_.settlingDuration:Qi(_n(er.duration,Pe>1?Qi(R,ie,de,pe,null,tt)/Pe:R),ie,de,pe,null,tt),ae=Qi(_n(er.delay,Fe?0:P),ie,de,pe,null,tt),ue=er.modifier||N,J=!it(ht),te=!it(I),fe=Si(I),ke=fe||J&&te,ve=De?je:0,_e=De?je+ae:ae,Be=wt(Q+_e,12),We=wt(Q+ve,12);!ee&&(J||fe)&&(ee=1);let Ge=De;if(rt!==an.none){let ze=be._head;for(;ze&&ze._absoluteStartTime<=Be;)if(ze._isOverridden||(Ge=ze),ze=ze._nextRep,ze&&ze._absoluteStartTime>=Be)for(;ze;)Sl(ze),ze=ze._nextRep}if(ke){Kn(fe?Qi(I[0],ie,de,pe,Wd,tt):ht,Ke),Kn(fe?Qi(I[1],ie,de,pe,Gd,tt):I,ct);let ze=ns(ie,se,Y,zo);Ke.t===lt.NUMBER&&(Ge?Ge._valueType===lt.UNIT&&(Ke.t=lt.UNIT,Ke.u=Ge._unit):(Kn(ze,ai),ai.t===lt.UNIT&&(Ke.t=lt.UNIT,Ke.u=ai.u)))}else te?Kn(I,ct):De?_p(De,ct):Kn(n&&Ge&&Ge.parent.parent===n?Ge._value:ns(ie,se,Y,zo),ct),J?Kn(ht,Ke):De?_p(De,Ke):Kn(n&&Ge&&Ge.parent.parent===n?Ge._value:ns(ie,se,Y,zo),Ke);if(Ke.o&&(Ke.n=Uo(Ge?Ge._toNumber:Kn(ns(ie,se,Y,zo),ai).n,Ke.n,Ke.o)),ct.o&&(ct.n=Uo(Ke.n,ct.n,ct.o)),Ke.t!==ct.t){if(Ke.t===lt.COMPLEX||ct.t===lt.COMPLEX){let ze=Ke.t===lt.COMPLEX?Ke:ct,st=Ke.t===lt.COMPLEX?ct:Ke;st.t=lt.COMPLEX,st.s=ln(ze.s),st.d=ze.d.map(()=>st.n)}else if(Ke.t===lt.UNIT||ct.t===lt.UNIT){let ze=Ke.t===lt.UNIT?Ke:ct,st=Ke.t===lt.UNIT?ct:Ke;st.t=lt.UNIT,st.u=ze.u}else if(Ke.t===lt.COLOR||ct.t===lt.COLOR){let ze=Ke.t===lt.COLOR?Ke:ct,st=Ke.t===lt.COLOR?ct:Ke;st.t=lt.COLOR,st.d=ze.d.map(()=>0)}}if(Ke.u!==ct.u){let ze=ct.u?Ke:ct;ze=Mp(ie,ze,ct.u?ct.u:Ke.u,!1)}if(ct.d&&Ke.d&&ct.d.length!==Ke.d.length){let ze=Ke.d.length>ct.d.length?Ke:ct,st=ze===Ke?ct:Ke;st.d=ze.d.map((Ri,ei)=>it(st.d[ei])?0:st.d[ei]),st.s=ln(ze.s)}let O=wt(+K||_t,12),me=zo[se];Ji(me)||(zo[se]=null);let ne=le?le.set:null;je=wt(_e+O,12);let ge=Ke.d,xe=ct.d,oe=ct.s,we={parent:this,id:iw++,property:se,target:ie,_value:null,_toFunc:Gd.func,_fromFunc:Wd.func,_ease:Cl(B),_fromNumbers:ge?ln(ge):ml,_toNumbers:xe?ln(xe):ml,_strings:oe?ln(oe):ml,_fromNumber:Ke.n,_toNumber:ct.n,_numbers:ge?ln(ge):ml,_number:Ke.n,_unit:ct.u,_modifier:ue,_currentTime:0,_startTime:_e,_delay:+ae,_updateDuration:O,_changeDuration:O,_absoluteStartTime:Be,_absoluteUpdateStartTime:We,_absoluteEndTime:wt(Q+je,12),_hasFromValue:J||fe?1:0,_tweenType:Y,_setter:ne,_valueType:ct.t,_composition:rt,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:me,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};rt!==an.none&&Ud(we,be);let Re=we._valueType;if(Re===lt.COMPLEX)we._value=kd(we,1,-1);else if(Re===lt.UNIT)we._value=`${ue(we._toNumber)}${we._unit}`;else if(Re===lt.COLOR){let ze=ct.d;we._value=`rgba(${wt(ze[0],0)},${wt(ze[1],0)},${wt(ze[2],0)},${ze[3]})`}else we._value=ue(we._toNumber);isNaN(Te)&&(Te=we._startTime),De=we,z++,wr(this,we)}(isNaN(q)||Te<q)&&(q=Te),(isNaN(D)||je>D)&&(D=je),Y===Dt.TRANSFORM&&(nt=z-Fe,xt=z)}if(!isNaN(nt)){let Xe=0;Bt(this,Y=>{Xe>=nt&&Xe<xt&&(Y._renderTransforms=1,Y._composition===an.blend&&Bt(Tr.animation,le=>{le.id===Y.id&&(le._renderTransforms=1)})),Xe++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),q?(Bt(this,V=>{V._startTime-V._delay||(V._delay-=q),V._startTime-=q}),D-=q):q=0,D||(D=_t,this.iterationCount=0),this.targets=l,this.id=it(h)?mx:h,this.duration=D===_t?_t:bl((D+this._loopDelay)*this.iterationCount-this._loopDelay)||_t,this.onRender=E||b.onRender,this._ease=A,this._delay=q,this.iterationDuration=D,!this._autoplay&&ee&&this.onRender(this)}stretch(e){let t=this.duration;if(t===Ys(e))return this;let n=e/t;return Bt(this,r=>{r._updateDuration=Ys(r._updateDuration*n),r._changeDuration=Ys(r._changeDuration*n),r._currentTime*=n,r._delay*=n,r._startTime*=n,r._absoluteStartTime*=n,r._absoluteUpdateStartTime*=n,r._absoluteEndTime*=n}),super.stretch(e)}refresh(){return Bt(this,e=>{let t=e._toFunc,n=e._fromFunc;(t||n)&&(n?(Kn(n(),Ke),Ke.u!==e._unit&&e.target[$i]&&Mp(e.target,Ke,e._unit,!0),e._fromNumbers=ln(Ke.d),e._fromNumber=Ke.n):t&&(Kn(ns(e.target,e.property,e._tweenType),ai),e._fromNumbers=ln(ai.d),e._fromNumber=ai.n),t&&(Kn(t(),ct),e._toNumbers=ln(ct.d),e._strings=ln(ct.s),e._toNumber=ct.o?Uo(e._fromNumber,ct.n,ct.o):ct.n))}),this.duration===_t&&this.restart(),this}revert(){return super.revert(),vp(this)}then(e){return super.then(e)}},Tp=(i,e)=>Gt.editor?Gt.editor.addAnimation(i,e):new Yd(i,e,null,0,!1).init();var sw=(i,e)=>{if(oi(e,"<")){let t=e[1]==="<",n=i._tail,r=n?n._offset+n._delay:0;return t?r:r+n.duration}},gx=(i,e)=>{let t=i.iterationDuration;if(t===_t&&(t=0),it(e))return t;if(wi(+e))return+e;let n=e,r=i?i.labels:null,s=!Ji(r),o=sw(i,n),a=!it(o),l=Gv.exec(n);if(l){let c=l[0],d=n.split(c),u=s&&d[0]?r[d[0]]:t,h=a?o:s?u:t,f=+d[1];return Uo(h,f,c[0])}else return a?o:s?it(r[n])?t:r[n]:t};var Cp=(i=0,e=1,t=0)=>{let n=10**t;return Math.floor((Math.random()*(e-i+1/n)+i)*n)/n},ow=0,_x=(i,e=0,t=1,n=0)=>{let r=i===void 0?ow++:i;return(s=e,o=t,a=n)=>{r+=1831565813,r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61);let l=10**a;return Math.floor((((r^r>>>14)>>>0)/4294967296*(o-s+1/l)+s)*l)/l}};var vx=(i,e=Cp)=>{let t=i.length,n,r;for(;t;)r=e(0,--t),n=i[t],i[t]=i[r],i[r]=n;return i};var Ep=(i,e={})=>{let t=[],n=0,r,s=null,o=e.from,a=e.reversed,l=e.ease,c=!it(l),u=c&&!it(l.ease)?l.ease:c?Cl(l):null,h=e.grid,f=h===!0,g=e.axis,x=e.total,m=it(o)||o===0||o==="first",p=o==="center",C=o==="last",E=o==="random",b=Si(o),w=Si(i),M=e.use,A=w?Od(i[0]):Od(i),v=w?Od(i[1]):0,T=Rd.exec((w?i[1]:i)+Mi),R=e.start||0+(w?A:0),P=e.seed,j=!it(P)&&P!==!1?_x(P===!0?0:P):Cp,Q=e.jitter,D=!it(Q),q=Si(Q),z=q?Q[0]:Q||0,ee=q?Q[1]:Q||0,V=m?0:wi(o)?o:0;return(ie,de,pe,nt,xt)=>{let[Xe]=zd(ie),Y=it(x)?pe.length:x,le=it(M)?!1:Ci(M)?M(Xe,de,Y):ns(Xe,M),se=wi(le)||Ti(le)&&wi(+le)?+le:de,he=se>=0&&se<Y?se:de;if(p&&(V=(Y-1)/2),C&&(V=Y-1),!t.length){if(f){let De=!0,Te=!1,je=1/0,Fe=1/0,Pe=1/0,$e=-1/0,at=-1/0,rt=-1/0,gt=[],tt=[],dt=[];for(let I=0;I<Y;I++){let ht=pe[I],Le=0,S=0,_=0,L=!1;if(ht&&Ci(ht.getBoundingClientRect)){let B=ht.getBoundingClientRect();Le=B.left+B.width/2,S=B.top+B.height/2,L=!0}else{let B=ht;B&&wi(B.x)&&wi(B.y)&&(Le=B.x,S=B.y,wi(B.z)&&(_=B.z,Te=!0),L=!0)}if(!L){De=!1;break}gt.push(Le),tt.push(S),dt.push(_),Le<je&&(je=Le),S<Fe&&(Fe=S),_<Pe&&(Pe=_),Le>$e&&($e=Le),S>at&&(at=S),_>rt&&(rt=_)}if(De){let I=gt[0],ht=tt[0],Le=dt[0];b?(I=je+o[0]*($e-je),ht=Fe+o[1]*(at-Fe),Le=Te?Pe+(o.length>=3?o[2]:.5)*(rt-Pe):0):p?(I=(je+$e)/2,ht=(Fe+at)/2,Le=(Pe+rt)/2):C?(I=gt[Y-1],ht=tt[Y-1],Le=dt[Y-1]):wi(o)&&(I=gt[o],ht=tt[o],Le=dt[o]);for(let _=0;_<Y;_++){let L=I-gt[_],B=ht-tt[_],K=Le-dt[_],ae=vl(L*L+B*B+(Te?K*K:0));g==="x"&&(ae=-L),g==="y"&&(ae=-B),g==="z"&&(ae=-K),t.push(ae)}let S=1/0;for(let _=0;_<Y;_++){let L=xl(t[_]);L>0&&L<S&&(S=L)}if(S>0&&S<1/0)for(let _=0;_<Y;_++)t[_]=t[_]/S}else for(let I=0;I<Y;I++)t.push(xl(V-I))}else for(let De=0;De<Y;De++)if(!h)t.push(xl(V-De));else{let Te=h.length,je=h[0]*h[1],Fe,Pe,$e;b?(Fe=o[0]*(h[0]-1),Pe=o[1]*(h[1]-1),$e=Te===3?(o.length>=3?o[2]:.5)*(h[2]-1):0):p?(Fe=(h[0]-1)/2,Pe=(h[1]-1)/2,$e=Te===3?(h[2]-1)/2:0):(Fe=V%h[0],Pe=qs(V/h[0])%h[1],$e=Te===3?qs(V/je):0);let at=De%h[0],rt=qs(De/h[0])%h[1],gt=Te===3?qs(De/je):0,tt=Fe-at,dt=Pe-rt,I=$e-gt,ht=vl(tt*tt+dt*dt+(Te===3?I*I:0));g==="x"&&(ht=-tt),g==="y"&&(ht=-dt),g==="z"&&(ht=-I),t.push(ht)}n=t[0];for(let De=1;De<Y;De++)t[De]>n&&(n=t[De]);if(u||a)for(let De=0;De<Y;De++){let Te=t[De];u&&(Te=u(Te/n)*n),a&&(Te=g?-Te:xl(n-Te)),t[De]=Te}if(D){s=new Array(Y);for(let De=0;De<Y;De++)s[De]=j(-1,1,4)}E&&(t=vx(t,j))}let Ie=w?(v-A)/n:A;it(r)&&(r=xt?gx(xt,it(e.start)?xt.iterationDuration:R):R);let be=r+(Ie*wt(t[he],2)||0);if(D){let De=n?t[he]/n:0,Te=z+(ee-z)*De;be=be+s[he]*Te}return e.modifier&&(be=e.modifier(be)),T&&(be=`${be}${T[2]}`),be}};var Gx=0,hm=1,Wx=2;var $l=1,Xx=2,fa=3,Or=0,An=1,lr=2,cr=0,to=1,um=2,fm=3,pm=4,qx=5;var us=100,Yx=101,jx=102,Zx=103,$x=104,Kx=200,Jx=201,Qx=202,ey=203,_h=204,vh=205,ty=206,ny=207,iy=208,ry=209,sy=210,oy=211,ay=212,ly=213,cy=214,xh=0,yh=1,bh=2,no=3,Mh=4,Sh=5,wh=6,Th=7,mm=0,dy=1,hy=2,zi=0,gm=1,_m=2,vm=3,xm=4,ym=5,bm=6,Mm=7;var Jp=300,_s=301,oo=302,jh=303,Zh=304,Kl=306,Ch=1e3,ir=1001,Eh=1002,nn=1003,uy=1004;var Jl=1005;var En=1006,$h=1007;var vs=1008;var Qn=1009,Sm=1010,wm=1011,pa=1012,Kh=1013,Hi=1014,Gi=1015,dr=1016,Jh=1017,Qh=1018,ma=1020,Tm=35902,Cm=35899,Em=1021,Am=1022,Pi=1023,sr=1026,xs=1027,Pm=1028,eu=1029,ys=1030,tu=1031;var nu=1033,Ql=33776,ec=33777,tc=33778,nc=33779,iu=35840,ru=35841,su=35842,ou=35843,au=36196,lu=37492,cu=37496,du=37488,hu=37489,ic=37490,uu=37491,fu=37808,pu=37809,mu=37810,gu=37811,_u=37812,vu=37813,xu=37814,yu=37815,bu=37816,Mu=37817,Su=37818,wu=37819,Tu=37820,Cu=37821,Eu=36492,Au=36494,Pu=36495,Ru=36283,Iu=36284,rc=36285,Du=36286;var Dl=2300,Ah=2301,gh=2302,Qp=2303,em=2400,tm=2401,nm=2402;var fy=3200;var Ou=0,py=1,kr="",di="srgb",Ol="srgb-linear",Ll="linear",Et="srgb";var Qs=7680;var im=519,my=512,gy=513,_y=514,Lu=515,vy=516,xy=517,Nu=518,yy=519,rm=35044;var Rm="300 es",Ui=2e3,na=2001;function aw(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lw(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function by(){let i=Nl("canvas");return i.style.display="block",i}var xx={},ia=null;function Im(...i){let e="THREE."+i.shift();ia?ia("log",e,...i):console.log(e,...i)}function My(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=My(i);let e="THREE."+i.shift();if(ia)ia("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=My(i);let e="THREE."+i.shift();if(ia)ia("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function eo(...i){let e=i.join(" ");e in xx||(xx[e]=!0,Ye(...i))}function Sy(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var wy={[xh]:yh,[bh]:wh,[Mh]:Th,[no]:Sh,[yh]:xh,[wh]:bh,[Th]:Mh,[Sh]:no},or=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ap=Math.PI/180,Ph=180/Math.PI;function sc(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function cw(i,e){return(i%e+e)%e}function Pp(i,e,t){return(1-t)*i+t*e}function El(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var vt=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ar=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],u=n[r+3],h=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(u!==x||l!==h||c!==f||d!==g){let m=l*h+c*f+d*g+u*x;m<0&&(h=-h,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let C=Math.acos(m),E=Math.sin(C);p=Math.sin(p*C)/E,a=Math.sin(a*C)/E,l=l*p+h*a,c=c*p+f*a,d=d*p+g*a,u=u*p+x*a}else{l=l*p+h*a,c=c*p+f*a,d=d*p+g*a,u=u*p+x*a;let C=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=C,c*=C,d*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],u=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-a*f,e[t+2]=c*g+d*f+a*h-l*u,e[t+3]=d*g-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),u=a(s/2),h=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),d=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-s*u,this.z=r+l*u+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rp.copy(this).projectOnVector(e),this.sub(Rp)}reflect(e){return this.sub(Rp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rp=new W,yx=new ar,et=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],x=r[0],m=r[3],p=r[6],C=r[1],E=r[4],b=r[7],w=r[2],M=r[5],A=r[8];return s[0]=o*x+a*C+l*w,s[3]=o*m+a*E+l*M,s[6]=o*p+a*b+l*A,s[1]=c*x+d*C+u*w,s[4]=c*m+d*E+u*M,s[7]=c*p+d*b+u*A,s[2]=h*x+f*C+g*w,s[5]=h*m+f*E+g*M,s[8]=h*p+f*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*s,f=c*s-o*l,g=t*u+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(r*c-d*n)*x,e[2]=(a*n-r*o)*x,e[3]=h*x,e[4]=(d*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return eo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ip.makeScale(e,t)),this}rotate(e){return eo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ip.makeRotation(-e)),this}translate(e,t){return eo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ip.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ip=new et,bx=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mx=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dw(){let i={enabled:!0,workingColorSpace:Ol,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Et&&(r.r=Dr(r.r),r.g=Dr(r.g),r.b=Dr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(r.r=ta(r.r),r.g=ta(r.g),r.b=ta(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===kr?Ll:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ol]:{primaries:e,whitePoint:n,transfer:Ll,toXYZ:bx,fromXYZ:Mx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:bx,fromXYZ:Mx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),i}var yt=dw();function Dr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Go,Rh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Go===void 0&&(Go=Nl("canvas")),Go.width=e.width,Go.height=e.height;let r=Go.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Go}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Dr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dr(t[n]/255)*255):t[n]=Dr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hw=0,ra=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=sc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Dp(r[o].image)):s.push(Dp(r[o]))}else s=Dp(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Dp(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var uw=0,Op=new W,hr=(()=>{class i extends or{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=ir,s=ir,o=En,a=vs,l=Pi,c=Qn,d=i.DEFAULT_ANISOTROPY,u=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=sc(),this.name="",this.source=new ra(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Op).x}get height(){return this.source.getSize(Op).y}get depth(){return this.source.getSize(Op).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){Ye(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ye(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ch:t.x=t.x-Math.floor(t.x);break;case ir:t.x=t.x<0?0:1;break;case Eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ch:t.y=t.y-Math.floor(t.y);break;case ir:t.y=t.y<0?0:1;break;case Eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=Jp,i.DEFAULT_ANISOTROPY=1,i})(),Wt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,b=(f+1)/2,w=(p+1)/2,M=(d+h)/4,A=(u+x)/4,v=(g+m)/4;return E>b&&E>w?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=M/n,s=A/n):b>w?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=M/r,s=v/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=A/s,r=v/s),this.set(n,r,s,t),this}let C=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(h-d)*(h-d));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(u-x)/C,this.z=(h-d)/C,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ih=class extends or{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new hr(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ra(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Ih{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fl=class extends hr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dh=class extends hr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ut=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,r,s,o,a,l,c,d,u,h,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,d,u,h,f,g,x,m)}set(e,t,n,r,s,o,a,l,c,d,u,h,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Wo.setFromMatrixColumn(e,0).length(),s=1/Wo.setFromMatrixColumn(e,1).length(),o=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let h=o*d,f=o*u,g=a*d,x=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*d,f=l*u,g=c*d,x=c*u;t[0]=h+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*d,f=l*u,g=c*d,x=c*u;t[0]=h-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*d,f=o*u,g=a*d,x=a*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+x,t[1]=l*u,t[5]=x*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*d,t[4]=x-h*u,t[8]=g*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-x*u}else if(e.order==="XZY"){let h=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+x,t[5]=o*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*d,t[10]=x*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fw,e,pw)}lookAt(e,t,n){let r=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),ss.crossVectors(n,li),ss.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ss.crossVectors(n,li)),ss.normalize(),jd.crossVectors(li,ss),r[0]=ss.x,r[4]=jd.x,r[8]=li.x,r[1]=ss.y,r[5]=jd.y,r[9]=li.y,r[2]=ss.z,r[6]=jd.z,r[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],C=n[3],E=n[7],b=n[11],w=n[15],M=r[0],A=r[4],v=r[8],T=r[12],R=r[1],P=r[5],N=r[9],j=r[13],Q=r[2],D=r[6],q=r[10],z=r[14],ee=r[3],V=r[7],ie=r[11],de=r[15];return s[0]=o*M+a*R+l*Q+c*ee,s[4]=o*A+a*P+l*D+c*V,s[8]=o*v+a*N+l*q+c*ie,s[12]=o*T+a*j+l*z+c*de,s[1]=d*M+u*R+h*Q+f*ee,s[5]=d*A+u*P+h*D+f*V,s[9]=d*v+u*N+h*q+f*ie,s[13]=d*T+u*j+h*z+f*de,s[2]=g*M+x*R+m*Q+p*ee,s[6]=g*A+x*P+m*D+p*V,s[10]=g*v+x*N+m*q+p*ie,s[14]=g*T+x*j+m*z+p*de,s[3]=C*M+E*R+b*Q+w*ee,s[7]=C*A+E*P+b*D+w*V,s[11]=C*v+E*N+b*q+w*ie,s[15]=C*T+E*j+b*z+w*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],C=l*f-c*h,E=a*f-c*u,b=a*h-l*u,w=o*f-c*d,M=o*h-l*d,A=o*u-a*d;return t*(x*C-m*E+p*b)-n*(g*C-m*w+p*M)+r*(g*E-x*w+p*A)-s*(g*b-x*M+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],d=e[10];return t*(o*d-a*c)-n*(s*d-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],C=t*a-n*o,E=t*l-r*o,b=t*c-s*o,w=n*l-r*a,M=n*c-s*a,A=r*c-s*l,v=d*x-u*g,T=d*m-h*g,R=d*p-f*g,P=u*m-h*x,N=u*p-f*x,j=h*p-f*m,Q=C*j-E*N+b*P+w*R-M*T+A*v;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/Q;return e[0]=(a*j-l*N+c*P)*D,e[1]=(r*N-n*j-s*P)*D,e[2]=(x*A-m*M+p*w)*D,e[3]=(h*M-u*A-f*w)*D,e[4]=(l*R-o*j-c*T)*D,e[5]=(t*j-r*R+s*T)*D,e[6]=(m*b-g*A-p*E)*D,e[7]=(d*A-h*b+f*E)*D,e[8]=(o*N-a*R+c*v)*D,e[9]=(n*R-t*N-s*v)*D,e[10]=(g*M-x*b+p*C)*D,e[11]=(u*b-d*M-f*C)*D,e[12]=(a*T-o*P-l*v)*D,e[13]=(t*P-n*T+r*v)*D,e[14]=(x*E-g*w-m*C)*D,e[15]=(d*w-u*E+h*C)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,u=a+a,h=s*c,f=s*d,g=s*u,x=o*d,m=o*u,p=a*u,C=l*c,E=l*d,b=l*u,w=n.x,M=n.y,A=n.z;return r[0]=(1-(x+p))*w,r[1]=(f+b)*w,r[2]=(g-E)*w,r[3]=0,r[4]=(f-b)*M,r[5]=(1-(h+p))*M,r[6]=(m+C)*M,r[7]=0,r[8]=(g+E)*A,r[9]=(m-C)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Wo.set(r[0],r[1],r[2]).length(),a=Wo.set(r[4],r[5],r[6]).length(),l=Wo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Fi.copy(this);let c=1/o,d=1/a,u=1/l;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=d,Fi.elements[5]*=d,Fi.elements[6]*=d,Fi.elements[8]*=u,Fi.elements[9]*=u,Fi.elements[10]*=u,t.setFromRotationMatrix(Fi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=Ui,l=!1){let c=this.elements,d=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===Ui)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===na)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ui,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r),g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===Ui)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===na)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wo=new W,Fi=new Ut,fw=new W(0,0,0),pw=new W(1,1,1),ss=new W,jd=new W,li=new W,Sx=new Ut,wx=new ar,kl=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],d=s[5],u=s[9],h=s[2],f=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Sx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sx,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return wx.setFromEuler(this),this.setFromQuaternion(wx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),sa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mw=0,Tx=new W,Xo=new ar,Er=new Ut,Zd=new W,Al=new W,gw=new W,_w=new ar,Cx=new W(1,0,0),Ex=new W(0,1,0),Ax=new W(0,0,1),Px={type:"added"},vw={type:"removed"},qo={type:"childadded",child:null},Lp={type:"childremoved",child:null},Vi=(()=>{class i extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mw++}),this.uuid=sc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,n=new kl,r=new ar,s=new W(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new et}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Xo.setFromAxisAngle(t,n),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(t,n){return Xo.setFromAxisAngle(t,n),this.quaternion.premultiply(Xo),this}rotateX(t){return this.rotateOnAxis(Cx,t)}rotateY(t){return this.rotateOnAxis(Ex,t)}rotateZ(t){return this.rotateOnAxis(Ax,t)}translateOnAxis(t,n){return Tx.copy(t).applyQuaternion(this.quaternion),this.position.add(Tx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Cx,t)}translateY(t){return this.translateOnAxis(Ex,t)}translateZ(t){return this.translateOnAxis(Ax,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Zd.copy(t):Zd.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(Al,Zd,this.up):Er.lookAt(Zd,Al,this.up),this.quaternion.setFromRotationMatrix(Er),s&&(Er.extractRotation(s.matrixWorld),Xo.setFromRotationMatrix(Er),this.quaternion.premultiply(Xo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(qe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Px),qo.child=t,this.dispatchEvent(qo),qo.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(vw),Lp.child=t,this.dispatchEvent(Lp),Lp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Er.multiply(t.parent.matrixWorld)),t.applyMatrix4(Er),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Px),qo.child=t,this.dispatchEvent(qo),qo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,t,gw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,_w,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,r=t.y,s=t.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*r-o[8]*s,o[13]+=r-o[1]*n-o[5]*r-o[9]*s,o[14]+=s-o[2]*n-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n,r=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){let o=this.children;for(let a=0,l=o.length;a<l;a++)o[a].updateWorldMatrix(!1,!0,r)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>Ze(ce({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>ce({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let d=0,u=c.length;d<u;d++){let h=c[d];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),d=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),g=a(t.animations),x=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),d.length>0&&(r.textures=d),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),g.length>0&&(r.animations=g),x.length>0&&(r.nodes=x)}return r.object=s,r;function a(l){let c=[];for(let d in l){let u=l[d];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new W(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),rr=class extends Vi{constructor(){super(),this.isGroup=!0,this.type="Group"}},xw={type:"move"},oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ty={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},$d={h:0,s:0,l:0};function Np(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var mt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=cw(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Np(o,s,e+1/3),this.g=Np(o,s,e),this.b=Np(o,s,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=di){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){let n=Ty[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return yt.workingToColorSpace(Bn.copy(this),e),Math.round(bt(Bn.r*255,0,255))*65536+Math.round(bt(Bn.g*255,0,255))*256+Math.round(bt(Bn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,r=Bn.g,s=Bn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=di){yt.workingToColorSpace(Bn.copy(this),e);let t=Bn.r,n=Bn.g,r=Bn.b;return e!==di?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL($d);let n=Pp(os.h,$d.h,t),r=Pp(os.s,$d.s,t),s=Pp(os.l,$d.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new mt;mt.NAMES=Ty;var io=class extends Vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kl,this.environmentIntensity=1,this.environmentRotation=new kl,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ki=new W,Ar=new W,Fp=new W,Pr=new W,Yo=new W,jo=new W,Rx=new W,kp=new W,Bp=new W,Up=new W,Vp=new Wt,zp=new Wt,Hp=new Wt,hs=class i{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ki.subVectors(e,t),r.cross(ki);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ki.subVectors(r,t),Ar.subVectors(n,t),Fp.subVectors(e,t);let o=ki.dot(ki),a=ki.dot(Ar),l=ki.dot(Fp),c=Ar.dot(Ar),d=Ar.dot(Fp),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,f=(c*l-a*d)*h,g=(o*d-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pr)===null?!1:Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pr.x),l.addScaledVector(o,Pr.y),l.addScaledVector(a,Pr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Vp.setScalar(0),zp.setScalar(0),Hp.setScalar(0),Vp.fromBufferAttribute(e,t),zp.fromBufferAttribute(e,n),Hp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Vp,s.x),o.addScaledVector(zp,s.y),o.addScaledVector(Hp,s.z),o}static isFrontFacing(e,t,n,r){return ki.subVectors(n,t),Ar.subVectors(e,t),ki.cross(Ar).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),ki.cross(Ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Yo.subVectors(r,n),jo.subVectors(s,n),kp.subVectors(e,n);let l=Yo.dot(kp),c=jo.dot(kp);if(l<=0&&c<=0)return t.copy(n);Bp.subVectors(e,r);let d=Yo.dot(Bp),u=jo.dot(Bp);if(d>=0&&u<=d)return t.copy(r);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Yo,o);Up.subVectors(e,s);let f=Yo.dot(Up),g=jo.dot(Up);if(g>=0&&f<=g)return t.copy(s);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(jo,a);let m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return Rx.subVectors(s,r),a=(u-d)/(u-d+(f-g)),t.copy(r).addScaledVector(Rx,a);let p=1/(m+x+h);return o=x*p,a=h*p,t.copy(n).addScaledVector(Yo,o).addScaledVector(jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fs=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bi):Bi.fromBufferAttribute(s,o),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kd.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kd.copy(n.boundingBox)),Kd.applyMatrix4(e.matrixWorld),this.union(Kd)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pl),Jd.subVectors(this.max,Pl),Zo.subVectors(e.a,Pl),$o.subVectors(e.b,Pl),Ko.subVectors(e.c,Pl),as.subVectors($o,Zo),ls.subVectors(Ko,$o),Zs.subVectors(Zo,Ko);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Zs.z,Zs.y,as.z,0,-as.x,ls.z,0,-ls.x,Zs.z,0,-Zs.x,-as.y,as.x,0,-ls.y,ls.x,0,-Zs.y,Zs.x,0];return!Gp(t,Zo,$o,Ko,Jd)||(t=[1,0,0,0,1,0,0,0,1],!Gp(t,Zo,$o,Ko,Jd))?!1:(Qd.crossVectors(as,ls),t=[Qd.x,Qd.y,Qd.z],Gp(t,Zo,$o,Ko,Jd))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Rr=[new W,new W,new W,new W,new W,new W,new W,new W],Bi=new W,Kd=new fs,Zo=new W,$o=new W,Ko=new W,as=new W,ls=new W,Zs=new W,Pl=new W,Jd=new W,Qd=new W,$s=new W;function Gp(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){$s.fromArray(i,s);let a=r.x*Math.abs($s.x)+r.y*Math.abs($s.y)+r.z*Math.abs($s.z),l=e.dot($s),c=t.dot($s),d=n.dot($s);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var cn=new W,eh=new vt,yw=0,Wn=class extends or{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rm,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)eh.fromBufferAttribute(this,t),eh.applyMatrix3(e),this.setXY(t,eh.x,eh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=El(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=El(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=El(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=El(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=El(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),n=Jn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),n=Jn(n,this.array),r=Jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),n=Jn(n,this.array),r=Jn(r,this.array),s=Jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Bl=class extends Wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ul=class extends Wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ai=class extends Wn{constructor(e,t,n){super(new Float32Array(e),t,n)}},bw=new fs,Rl=new W,Wp=new W,ro=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bw.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rl.subVectors(e,this.center);let t=Rl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Rl,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rl.copy(e.center).add(Wp)),this.expandByPoint(Rl.copy(e.center).sub(Wp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mw=0,Ei=new Ut,Xp=new Vi,Jo=new W,ci=new fs,Il=new fs,bn=new W,ui=class i extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=sc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aw(e)?Ul:Bl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,n){return Ei.makeTranslation(e,t,n),this.applyMatrix4(Ei),this}scale(e,t,n){return Ei.makeScale(e,t,n),this.applyMatrix4(Ei),this}lookAt(e){return Xp.lookAt(e),Xp.updateMatrix(),this.applyMatrix4(Xp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ai(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Il.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(ci.min,Il.min),ci.expandByPoint(bn),bn.addVectors(ci.max,Il.max),ci.expandByPoint(bn)):(ci.expandByPoint(Il.min),ci.expandByPoint(Il.max))}ci.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)bn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)bn.fromBufferAttribute(a,c),l&&(Jo.fromBufferAttribute(e,c),bn.add(Jo)),r=Math.max(r,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new W,l[v]=new W;let c=new W,d=new W,u=new W,h=new vt,f=new vt,g=new vt,x=new W,m=new W;function p(v,T,R){c.fromBufferAttribute(n,v),d.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),h.fromBufferAttribute(s,v),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,R),d.sub(c),u.sub(c),f.sub(h),g.sub(h);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(P),a[v].add(x),a[T].add(x),a[R].add(x),l[v].add(m),l[T].add(m),l[R].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let v=0,T=C.length;v<T;++v){let R=C[v],P=R.start,N=R.count;for(let j=P,Q=P+N;j<Q;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}let E=new W,b=new W,w=new W,M=new W;function A(v){w.fromBufferAttribute(r,v),M.copy(w);let T=a[v];E.copy(T),E.sub(w.multiplyScalar(w.dot(T))).normalize(),b.crossVectors(M,T);let P=b.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,P)}for(let v=0,T=C.length;v<T;++v){let R=C[v],P=R.start,N=R.count;for(let j=P,Q=P+N;j<Q;j+=3)A(e.getX(j+0)),A(e.getX(j+1)),A(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,d=new W,u=new W;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new Wn(h,d,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(t))}let s=e.morphAttributes;for(let c in s){let d=[],u=s[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Sw=0,Lr=class extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=sc(),this.name="",this.type="Material",this.blending=to,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(n.blending=this.blending),this.side!==Or&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_h&&(n.blendSrc=this.blendSrc),this.blendDst!==vh&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==im&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ir=new W,qp=new W,th=new W,cs=new W,Yp=new W,nh=new W,jp=new W,aa=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.origin).addScaledVector(this.direction,t),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qp.copy(e).add(t).multiplyScalar(.5),th.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(qp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(th),a=cs.dot(this.direction),l=-cs.dot(th),c=cs.lengthSq(),d=Math.abs(1-o*o),u,h,f,g;if(d>0)if(u=o*l-a,h=o*a-l,g=s*d,u>=0)if(h>=-g)if(h<=g){let x=1/d;u*=x,h*=x,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qp).addScaledVector(th,h),f}intersectSphere(e,t){Ir.subVectors(e.center,this.origin);let n=Ir.dot(this.direction),r=Ir.dot(Ir)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,n,r,s){Yp.subVectors(t,e),nh.subVectors(n,e),jp.crossVectors(Yp,nh);let o=this.direction.dot(jp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,e);let l=a*this.direction.dot(nh.crossVectors(cs,nh));if(l<0)return null;let c=a*this.direction.dot(Yp.cross(cs));if(c<0||l+c>o)return null;let d=-a*cs.dot(jp);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},so=class extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kl,this.combine=mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ix=new Ut,Ks=new aa,ih=new ro,Dx=new W,rh=new W,sh=new W,oh=new W,Zp=new W,ah=new W,Ox=new W,lh=new W,Xn=class extends Vi{constructor(e=new ui,t=new so){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ah.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let d=a[l],u=s[l];d!==0&&(Zp.fromBufferAttribute(u,e),o?ah.addScaledVector(Zp,d):ah.addScaledVector(Zp.sub(t),d))}t.add(ah)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ih.copy(n.boundingSphere),ih.applyMatrix4(s),Ks.copy(e.ray).recast(e.near),!(ih.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(ih,Dx)===null||Ks.origin.distanceToSquared(Dx)>(e.far-e.near)**2))&&(Ix.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(Ix),!(n.boundingBox!==null&&Ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],C=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=C,w=E;b<w;b+=3){let M=a.getX(b),A=a.getX(b+1),v=a.getX(b+2);r=ch(this,p,e,n,c,d,u,M,A,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let C=a.getX(m),E=a.getX(m+1),b=a.getX(m+2);r=ch(this,o,e,n,c,d,u,C,E,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],C=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=C,w=E;b<w;b+=3){let M=b,A=b+1,v=b+2;r=ch(this,p,e,n,c,d,u,M,A,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let C=m,E=m+1,b=m+2;r=ch(this,o,e,n,c,d,u,C,E,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function ww(i,e,t,n,r,s,o,a){let l;if(e.side===An?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;lh.copy(a),lh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(lh);return c<t.near||c>t.far?null:{distance:c,point:lh.clone(),object:i}}function ch(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,rh),i.getVertexPosition(l,sh),i.getVertexPosition(c,oh);let d=ww(i,e,t,n,rh,sh,oh,Ox);if(d){let u=new W;hs.getBarycoord(Ox,rh,sh,oh,u),r&&(d.uv=hs.getInterpolatedAttribute(r,a,l,c,u,new vt)),s&&(d.uv1=hs.getInterpolatedAttribute(s,a,l,c,u,new vt)),o&&(d.normal=hs.getInterpolatedAttribute(o,a,l,c,u,new W),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new W,materialIndex:0};hs.getNormal(rh,sh,oh,h.normal),d.face=h,d.barycoord=u}return d}var Oh=class extends hr{constructor(e=null,t=1,n=1,r,s,o,a,l,c=nn,d=nn,u,h){super(null,o,a,l,c,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $p=new W,Tw=new W,Cw=new et,nr=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=$p.subVectors(n,t).cross(Tw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta($p),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cw.getNormalMatrix(e),r=this.coplanarPoint($p).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Js=new ro,Ew=new vt(.5,.5),dh=new W,la=class{constructor(e=new nr,t=new nr,n=new nr,r=new nr,s=new nr,o=new nr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ui,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],u=s[5],h=s[6],f=s[7],g=s[8],x=s[9],m=s[10],p=s[11],C=s[12],E=s[13],b=s[14],w=s[15];if(r[0].setComponents(c-o,f-d,p-g,w-C).normalize(),r[1].setComponents(c+o,f+d,p+g,w+C).normalize(),r[2].setComponents(c+a,f+u,p+x,w+E).normalize(),r[3].setComponents(c-a,f-u,p-x,w-E).normalize(),n)r[4].setComponents(l,h,m,b).normalize(),r[5].setComponents(c-l,f-h,p-m,w-b).normalize();else if(r[4].setComponents(c-l,f-h,p-m,w-b).normalize(),t===Ui)r[5].setComponents(c+l,f+h,p+m,w+b).normalize();else if(t===na)r[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);let t=Ew.distanceTo(e.center);return Js.radius=.7071067811865476+t,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(dh.x=r.normal.x>0?e.max.x:e.min.x,dh.y=r.normal.y>0?e.max.y:e.min.y,dh.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ca=class extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lx=new Ut,sm=new aa,hh=new ro,uh=new W,Vl=class extends Vi{constructor(e=new ui,t=new ca){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hh.copy(n.boundingSphere),hh.applyMatrix4(r),hh.radius+=s,e.ray.intersectsSphere(hh)===!1)return;Lx.copy(r).invert(),sm.copy(e.ray).applyMatrix4(Lx);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,x=f;g<x;g++){let m=c.getX(g);uh.fromBufferAttribute(u,m),Nx(uh,m,l,r,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=h,x=f;g<x;g++)uh.fromBufferAttribute(u,g),Nx(uh,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Nx(i,e,t,n,r,s,o){let a=sm.distanceSqToPoint(i);if(a<t){let l=new W;sm.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var zl=class extends hr{constructor(e=[],t=_s,n,r,s,o,a,l,c,d){super(e,t,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},da=class extends hr{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Nr=class extends hr{constructor(e,t,n=Hi,r,s,o,a=nn,l=nn,c,d=sr,u=1){if(d!==sr&&d!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Lh=class extends Nr{constructor(e,t=Hi,n=_s,r,s,o=nn,a=nn,l,c=sr){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hl=class extends hr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fr=class i extends ui{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],d=[],u=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ai(c,3)),this.setAttribute("normal",new Ai(d,3)),this.setAttribute("uv",new Ai(u,2));function g(x,m,p,C,E,b,w,M,A,v,T){let R=b/A,P=w/v,N=b/2,j=w/2,Q=M/2,D=A+1,q=v+1,z=0,ee=0,V=new W;for(let ie=0;ie<q;ie++){let de=ie*P-j;for(let pe=0;pe<D;pe++){let nt=pe*R-N;V[x]=nt*C,V[m]=de*E,V[p]=Q,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[p]=M>0?1:-1,d.push(V.x,V.y,V.z),u.push(pe/A),u.push(1-ie/v),z+=1}}for(let ie=0;ie<v;ie++)for(let de=0;de<A;de++){let pe=h+de+D*ie,nt=h+de+D*(ie+1),xt=h+(de+1)+D*(ie+1),Xe=h+(de+1)+D*ie;l.push(pe,nt,Xe),l.push(nt,xt,Xe),ee+=6}a.addGroup(f,ee,T),f+=ee,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Gl=class i extends ui{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,u=e/a,h=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<d;p++){let C=p*h-o;for(let E=0;E<c;E++){let b=E*u-s;g.push(b,-C,0),x.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){let E=C+c*p,b=C+c*(p+1),w=C+1+c*(p+1),M=C+1+c*p;f.push(E,b,M),f.push(b,w,M)}this.setIndex(f),this.setAttribute("position",new Ai(g,3)),this.setAttribute("normal",new Ai(x,3)),this.setAttribute("uv",new Ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function ao(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Fx(r))r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Fx(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Un(i){let e={};for(let t=0;t<i.length;t++){let n=ao(i[t]);for(let r in n)e[r]=n[r]}return e}function Fx(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Aw(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dm(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var Cy={clone:ao,merge:Un},Pw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pw,this.fragmentShader=Rw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=Aw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new mt().setHex(r.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Wt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new et().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ut().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Nh=class extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Wl=class extends Lr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new mt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Fh=class extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kh=class extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fh(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var ps=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bh=class extends ps{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:em,endingEnd:em}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case tm:s=e,a=2*t-n;break;case nm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tm:o=e,l=2*n-t;break;case nm:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,C=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,E=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let w=0;w!==a;++w)s[w]=p*o[d+w]+C*o[c+w]+E*o[l+w]+b*o[u+w];return s}},Uh=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(r-t),u=1-d;for(let h=0;h!==a;++h)s[h]=o[c+h]*u+o[l+h]*d;return s}},Vh=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},zh=class extends ps{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.inTangents,u=this.outTangents;if(!d||!u){let g=(n-t)/(r-t),x=1-g;for(let m=0;m!==a;++m)s[m]=o[c+m]*x+o[l+m]*g;return s}let h=a*2,f=e-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=f*h+g*2,C=u[p],E=u[p+1],b=e*h+g*2,w=d[b],M=d[b+1],A=(n-t)/(r-t),v,T,R,P,N;for(let j=0;j<8;j++){v=A*A,T=v*A,R=1-A,P=R*R,N=P*R;let D=N*t+3*P*A*C+3*R*v*w+T*r-n;if(Math.abs(D)<1e-10)break;let q=3*P*(C-t)+6*R*A*(w-C)+3*v*(r-w);if(Math.abs(q)<1e-10)break;A=A-D/q,A=Math.max(0,Math.min(1,A))}s[g]=N*x+3*P*A*E+3*R*v*M+T*m}return s}},pi=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fh(t,this.TimeBufferType),this.values=fh(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fh(e.times,Array),values:fh(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Dl:t=this.InterpolantFactoryMethodDiscrete;break;case Ah:t=this.InterpolantFactoryMethodLinear;break;case gh:t=this.InterpolantFactoryMethodSmooth;break;case Qp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dl;case this.InterpolantFactoryMethodLinear:return Ah;case this.InterpolantFactoryMethodSmooth:return gh;case this.InterpolantFactoryMethodBezier:return Qp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&lw(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===gh,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*n,h=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[h+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Ah;var ms=class extends pi{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Dl;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Hh=class extends pi{constructor(e,t,n,r){super(e,t,n,r)}};Hh.prototype.ValueTypeName="color";var Gh=class extends pi{constructor(e,t,n,r){super(e,t,n,r)}};Gh.prototype.ValueTypeName="number";var Wh=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let d=c+a;c!==d;c+=4)ar.slerpFlat(s,0,o,c-a,o,c,l);return s}},Xl=class extends pi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Wh(this.times,this.values,this.getValueSize(),e)}};Xl.prototype.ValueTypeName="quaternion";Xl.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends pi{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Dl;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xh=class extends pi{constructor(e,t,n,r){super(e,t,n,r)}};Xh.prototype.ValueTypeName="vector";var ql=class extends Vi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Kp=new Ut,kx=new W,Bx=new W,om=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;kx.setFromMatrixPosition(e.matrixWorld),t.position.copy(kx),Bx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bx),t.updateMatrixWorld(),Kp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kp,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===na||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ph=new W,mh=new ar,tr=new W,Yl=class extends Vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ph,mh,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ph,mh,tr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ph,mh,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ph,mh,tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ds=new W,Ux=new vt,Vx=new vt,Mn=class extends Yl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ap*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(Ap*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,Ux,Vx),t.subVectors(Vx,Ux)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ap*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ha=class extends Yl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},am=class extends om{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ua=class extends ql{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vi.DEFAULT_UP),this.updateMatrix(),this.target=new Vi,this.shadow=new am}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},jl=class extends ql{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Qo=-90,ea=1,qh=class extends Vi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mn(Qo,ea,e,t);r.layers=this.layers,this.add(r);let s=new Mn(Qo,ea,e,t);s.layers=this.layers,this.add(s);let o=new Mn(Qo,ea,e,t);o.layers=this.layers,this.add(o);let a=new Mn(Qo,ea,e,t);a.layers=this.layers,this.add(a);let l=new Mn(Qo,ea,e,t);l.layers=this.layers,this.add(l);let c=new Mn(Qo,ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yh=class extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Om="\\[\\]\\.:\\/",Iw=new RegExp("["+Om+"]","g"),Lm="[^"+Om+"]",Dw="[^"+Om.replace("\\.","")+"]",Ow=/((?:WC+[\/:])*)/.source.replace("WC",Lm),Lw=/(WCOD+)?/.source.replace("WCOD",Dw),Nw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lm),Fw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lm),kw=new RegExp("^"+Ow+Lw+Nw+Fw+"$"),Bw=["material","materials","bones","map"],lm=class{constructor(e,t,n){let r=n||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zt=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Iw,"")}static parseTrackName(t){let n=kw.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);Bw.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let d=n.objectIndex;switch(r){case"materials":if(!t.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===d){d=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(d!==void 0){if(t[d]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let a=t[s];if(a===void 0){let d=n.nodeName;qe("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=lm,i})();Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var A5=new Float32Array(1);var zx=new Ut,Zl=class{constructor(e,t,n=0,r=1/0){this.ray=new aa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zx),this}intersectObject(e,t=!0,n=[]){return cm(e,this,n,t),n.sort(Hx),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)cm(e[r],this,n,t);return n.sort(Hx),n}};function Hx(i,e){return i.distance-e.distance}function cm(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)cm(s[o],e,t,!0)}}var dm=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};function Nm(i,e,t,n){let r=Uw(n);switch(t){case Em:return i*e;case Pm:return i*e/r.components*r.byteLength;case eu:return i*e/r.components*r.byteLength;case ys:return i*e*2/r.components*r.byteLength;case tu:return i*e*2/r.components*r.byteLength;case Am:return i*e*3/r.components*r.byteLength;case Pi:return i*e*4/r.components*r.byteLength;case nu:return i*e*4/r.components*r.byteLength;case Ql:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ru:case ou:return Math.max(i,16)*Math.max(e,8)/4;case iu:case su:return Math.max(i,8)*Math.max(e,8)/2;case au:case lu:case du:case hu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cu:case ic:case uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _u:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Su:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Eu:case Au:case Pu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ru:case Iu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case rc:case Du:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Uw(i){switch(i){case Qn:case Sm:return{byteLength:1,components:1};case pa:case wm:case dr:return{byteLength:2,components:1};case Jh:case Qh:return{byteLength:2,components:4};case Hi:case Kh:case Gi:return{byteLength:4,components:1};case Tm:case Cm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Zy(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function zw(i){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){let g=u[h],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,u[h]=x)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Hw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gw=`#ifdef USE_ALPHAHASH
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
#endif`,Ww=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jw=`#ifdef USE_AOMAP
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
#endif`,Zw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$w=`#ifdef USE_BATCHING
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
#endif`,Kw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t1=`#ifdef USE_IRIDESCENCE
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
#endif`,n1=`#ifdef USE_BUMPMAP
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
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,h1=`#define PI 3.141592653589793
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
} // validated`,u1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f1=`vec3 transformedNormal = objectNormal;
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
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v1="gl_FragColor = linearToOutputTexel( gl_FragColor );",x1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y1=`#ifdef USE_ENVMAP
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
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P1=`#ifdef USE_GRADIENTMAP
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
}`,R1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,L1=`#ifdef USE_ENVMAP
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
	#endif
#endif`,N1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U1=`PhysicalMaterial material;
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
#endif`,V1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,z1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif`,H1=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,X1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J1=`#if defined( USE_POINTS_UV )
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
#endif`,Q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rT=`#ifdef USE_MORPHTARGETS
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
#endif`,sT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hT=`#ifdef USE_NORMALMAP
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
#endif`,uT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_T=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ST=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,TT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,CT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,ET=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,AT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PT=`#ifdef USE_SKINNING
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
#endif`,RT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IT=`#ifdef USE_SKINNING
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
#endif`,DT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FT=`#ifdef USE_TRANSMISSION
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
#endif`,kT=`#ifdef USE_TRANSMISSION
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
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,HT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GT=`uniform sampler2D t2D;
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
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`#include <common>
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
}`,ZT=`#if DEPTH_PACKING == 3200
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
}`,$T=`#define DISTANCE
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
}`,KT=`#define DISTANCE
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
}`,JT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eC=`uniform float scale;
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
}`,tC=`uniform vec3 diffuse;
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
}`,nC=`#include <common>
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
}`,iC=`uniform vec3 diffuse;
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
}`,rC=`#define LAMBERT
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
}`,sC=`#define LAMBERT
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
}`,oC=`#define MATCAP
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
}`,aC=`#define MATCAP
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
}`,lC=`#define NORMAL
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
}`,cC=`#define NORMAL
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
}`,dC=`#define PHONG
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
}`,hC=`#define PHONG
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
}`,uC=`#define STANDARD
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
}`,fC=`#define STANDARD
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
}`,pC=`#define TOON
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
}`,mC=`#define TOON
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
}`,gC=`uniform float size;
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
}`,_C=`uniform vec3 diffuse;
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
}`,vC=`#include <common>
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
}`,xC=`uniform vec3 color;
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
}`,yC=`uniform float rotation;
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
}`,bC=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Hw,alphahash_pars_fragment:Gw,alphamap_fragment:Ww,alphamap_pars_fragment:Xw,alphatest_fragment:qw,alphatest_pars_fragment:Yw,aomap_fragment:jw,aomap_pars_fragment:Zw,batching_pars_vertex:$w,batching_vertex:Kw,begin_vertex:Jw,beginnormal_vertex:Qw,bsdfs:e1,iridescence_fragment:t1,bumpmap_pars_fragment:n1,clipping_planes_fragment:i1,clipping_planes_pars_fragment:r1,clipping_planes_pars_vertex:s1,clipping_planes_vertex:o1,color_fragment:a1,color_pars_fragment:l1,color_pars_vertex:c1,color_vertex:d1,common:h1,cube_uv_reflection_fragment:u1,defaultnormal_vertex:f1,displacementmap_pars_vertex:p1,displacementmap_vertex:m1,emissivemap_fragment:g1,emissivemap_pars_fragment:_1,colorspace_fragment:v1,colorspace_pars_fragment:x1,envmap_fragment:y1,envmap_common_pars_fragment:b1,envmap_pars_fragment:M1,envmap_pars_vertex:S1,envmap_physical_pars_fragment:L1,envmap_vertex:w1,fog_vertex:T1,fog_pars_vertex:C1,fog_fragment:E1,fog_pars_fragment:A1,gradientmap_pars_fragment:P1,lightmap_pars_fragment:R1,lights_lambert_fragment:I1,lights_lambert_pars_fragment:D1,lights_pars_begin:O1,lights_toon_fragment:N1,lights_toon_pars_fragment:F1,lights_phong_fragment:k1,lights_phong_pars_fragment:B1,lights_physical_fragment:U1,lights_physical_pars_fragment:V1,lights_fragment_begin:z1,lights_fragment_maps:H1,lights_fragment_end:G1,lightprobes_pars_fragment:W1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:Y1,logdepthbuf_vertex:j1,map_fragment:Z1,map_pars_fragment:$1,map_particle_fragment:K1,map_particle_pars_fragment:J1,metalnessmap_fragment:Q1,metalnessmap_pars_fragment:eT,morphinstance_vertex:tT,morphcolor_vertex:nT,morphnormal_vertex:iT,morphtarget_pars_vertex:rT,morphtarget_vertex:sT,normal_fragment_begin:oT,normal_fragment_maps:aT,normal_pars_fragment:lT,normal_pars_vertex:cT,normal_vertex:dT,normalmap_pars_fragment:hT,clearcoat_normal_fragment_begin:uT,clearcoat_normal_fragment_maps:fT,clearcoat_pars_fragment:pT,iridescence_pars_fragment:mT,opaque_fragment:gT,packing:_T,premultiplied_alpha_fragment:vT,project_vertex:xT,dithering_fragment:yT,dithering_pars_fragment:bT,roughnessmap_fragment:MT,roughnessmap_pars_fragment:ST,shadowmap_pars_fragment:wT,shadowmap_pars_vertex:TT,shadowmap_vertex:CT,shadowmask_pars_fragment:ET,skinbase_vertex:AT,skinning_pars_vertex:PT,skinning_vertex:RT,skinnormal_vertex:IT,specularmap_fragment:DT,specularmap_pars_fragment:OT,tonemapping_fragment:LT,tonemapping_pars_fragment:NT,transmission_fragment:FT,transmission_pars_fragment:kT,uv_pars_fragment:BT,uv_pars_vertex:UT,uv_vertex:VT,worldpos_vertex:zT,background_vert:HT,background_frag:GT,backgroundCube_vert:WT,backgroundCube_frag:XT,cube_vert:qT,cube_frag:YT,depth_vert:jT,depth_frag:ZT,distance_vert:$T,distance_frag:KT,equirect_vert:JT,equirect_frag:QT,linedashed_vert:eC,linedashed_frag:tC,meshbasic_vert:nC,meshbasic_frag:iC,meshlambert_vert:rC,meshlambert_frag:sC,meshmatcap_vert:oC,meshmatcap_frag:aC,meshnormal_vert:lC,meshnormal_frag:cC,meshphong_vert:dC,meshphong_frag:hC,meshphysical_vert:uC,meshphysical_frag:fC,meshtoon_vert:pC,meshtoon_frag:mC,points_vert:gC,points_frag:_C,shadow_vert:vC,shadow_frag:xC,sprite_vert:yC,sprite_frag:bC},ye={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},fr={basic:{uniforms:Un([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Un([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Un([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Un([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Un([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new mt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Un([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Un([ye.points,ye.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Un([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Un([ye.common,ye.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Un([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Un([ye.sprite,ye.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Un([ye.common,ye.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Un([ye.lights,ye.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};fr.physical={uniforms:Un([fr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Fu={r:0,b:0,g:0},MC=new Ut,$y=new et;$y.set(-1,0,0,0,1,0,0,0,1);function SC(i,e,t,n,r,s){let o=new mt(0),a=r===!0?0:1,l,c,d=null,u=0,h=null;function f(C){let E=C.isScene===!0?C.background:null;if(E&&E.isTexture){let b=C.backgroundBlurriness>0;E=e.get(E,b)}return E}function g(C){let E=!1,b=f(C);b===null?m(o,a):b&&b.isColor&&(m(b,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(C,E){let b=f(E);b&&(b.isCubeTexture||b.mapping===Kl)?(c===void 0&&(c=new Xn(new Fr(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:ao(fr.backgroundCube.uniforms),vertexShader:fr.backgroundCube.vertexShader,fragmentShader:fr.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(MC.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($y),c.material.toneMapped=yt.getTransfer(b.colorSpace)!==Et,(d!==b||u!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,h=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Xn(new Gl(2,2),new fi({name:"BackgroundMaterial",uniforms:ao(fr.background.uniforms),vertexShader:fr.background.vertexShader,fragmentShader:fr.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=yt.getTransfer(b.colorSpace)!==Et,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,u=b.version,h=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function m(C,E){C.getRGB(Fu,Dm(i)),t.buffers.color.setClear(Fu.r,Fu.g,Fu.b,E,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,E=1){o.set(C),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(C){a=C,m(o,a)},render:g,addToRenderList:x,dispose:p}}function wC(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(P,N,j,Q,D){let q=!1,z=u(P,Q,j,N);s!==z&&(s=z,c(s.object)),q=f(P,Q,j,D),q&&g(P,Q,j,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,b(P,N,j,Q),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function u(P,N,j,Q){let D=Q.wireframe===!0,q=n[N.id];q===void 0&&(q={},n[N.id]=q);let z=P.isInstancedMesh===!0?P.id:0,ee=q[z];ee===void 0&&(ee={},q[z]=ee);let V=ee[j.id];V===void 0&&(V={},ee[j.id]=V);let ie=V[D];return ie===void 0&&(ie=h(l()),V[D]=ie),ie}function h(P){let N=[],j=[],Q=[];for(let D=0;D<t;D++)N[D]=0,j[D]=0,Q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:j,attributeDivisors:Q,object:P,attributes:{},index:null}}function f(P,N,j,Q){let D=s.attributes,q=N.attributes,z=0,ee=j.getAttributes();for(let V in ee)if(ee[V].location>=0){let de=D[V],pe=q[V];if(pe===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),de===void 0||de.attribute!==pe||pe&&de.data!==pe.data)return!0;z++}return s.attributesNum!==z||s.index!==Q}function g(P,N,j,Q){let D={},q=N.attributes,z=0,ee=j.getAttributes();for(let V in ee)if(ee[V].location>=0){let de=q[V];de===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(de=P.instanceColor));let pe={};pe.attribute=de,de&&de.data&&(pe.data=de.data),D[V]=pe,z++}s.attributes=D,s.attributesNum=z,s.index=Q}function x(){let P=s.newAttributes;for(let N=0,j=P.length;N<j;N++)P[N]=0}function m(P){p(P,0)}function p(P,N){let j=s.newAttributes,Q=s.enabledAttributes,D=s.attributeDivisors;j[P]=1,Q[P]===0&&(i.enableVertexAttribArray(P),Q[P]=1),D[P]!==N&&(i.vertexAttribDivisor(P,N),D[P]=N)}function C(){let P=s.newAttributes,N=s.enabledAttributes;for(let j=0,Q=N.length;j<Q;j++)N[j]!==P[j]&&(i.disableVertexAttribArray(j),N[j]=0)}function E(P,N,j,Q,D,q,z){z===!0?i.vertexAttribIPointer(P,N,j,D,q):i.vertexAttribPointer(P,N,j,Q,D,q)}function b(P,N,j,Q){x();let D=Q.attributes,q=j.getAttributes(),z=N.defaultAttributeValues;for(let ee in q){let V=q[ee];if(V.location>=0){let ie=D[ee];if(ie===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),ie!==void 0){let de=ie.normalized,pe=ie.itemSize,nt=e.get(ie);if(nt===void 0)continue;let xt=nt.buffer,Xe=nt.type,Y=nt.bytesPerElement,le=Xe===i.INT||Xe===i.UNSIGNED_INT||ie.gpuType===Kh;if(ie.isInterleavedBufferAttribute){let se=ie.data,he=se.stride,Ie=ie.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)p(V.location+be,se.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<V.locationSize;be++)m(V.location+be);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let be=0;be<V.locationSize;be++)E(V.location+be,pe/V.locationSize,Xe,de,he*Y,(Ie+pe/V.locationSize*be)*Y,le)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)p(V.location+se,ie.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<V.locationSize;se++)m(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let se=0;se<V.locationSize;se++)E(V.location+se,pe/V.locationSize,Xe,de,pe*Y,pe/V.locationSize*se*Y,le)}}else if(z!==void 0){let de=z[ee];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(V.location,de);break;case 3:i.vertexAttrib3fv(V.location,de);break;case 4:i.vertexAttrib4fv(V.location,de);break;default:i.vertexAttrib1fv(V.location,de)}}}}C()}function w(){T();for(let P in n){let N=n[P];for(let j in N){let Q=N[j];for(let D in Q){let q=Q[D];for(let z in q)d(q[z].object),delete q[z];delete Q[D]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let j in N){let Q=N[j];for(let D in Q){let q=Q[D];for(let z in q)d(q[z].object),delete q[z];delete Q[D]}}delete n[P.id]}function A(P){for(let N in n){let j=n[N];for(let Q in j){let D=j[Q];if(D[P.id]===void 0)continue;let q=D[P.id];for(let z in q)d(q[z].object),delete q[z];delete D[P.id]}}}function v(P){for(let N in n){let j=n[N],Q=P.isInstancedMesh===!0?P.id:0,D=j[Q];if(D!==void 0){for(let q in D){let z=D[q];for(let ee in z)d(z[ee].object),delete z[ee];delete D[q]}delete j[Q],Object.keys(j).length===0&&delete n[N]}}}function T(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:C}}function TC(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function CC(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Pi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Qn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gi&&!v)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ye("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:E,maxFragmentUniforms:b,maxSamples:w,samples:M}}function EC(i){let e=this,t=null,n=0,r=!1,s=!1,o=new nr,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||n!==0||r;return r=h,n=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{let C=s?0:n,E=C*4,b=p.clippingState||null;l.value=b,b=d(g,h,E,f);for(let w=0;w!==E;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,C=h.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=f;E!==x;++E,b+=4)o.copy(u[E]).applyMatrix4(C,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var bs=4,Ey=[.125,.215,.35,.446,.526,.582],lo=20,AC=256,oc=new ha,Ay=new mt,Fm=null,km=0,Bm=0,Um=!1,PC=new W,Bu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=PC}=s;Fm=this._renderer.getRenderTarget(),km=this._renderer.getActiveCubeFace(),Bm=this._renderer.getActiveMipmapLevel(),Um=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ry(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fm,km,Bm),this._renderer.xr.enabled=Um,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fm=this._renderer.getRenderTarget(),km=this._renderer.getActiveCubeFace(),Bm=this._renderer.getActiveMipmapLevel(),Um=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:dr,format:Pi,colorSpace:Ol,depthBuffer:!1},r=Py(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Py(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RC(s)),this._blurMaterial=DC(s,e,t),this._ggxMaterial=IC(s,e,t)}return r}_compileMaterial(e){let t=new Xn(new ui,e);this._renderer.compile(t,oc)}_sceneToCubeUV(e,t,n,r,s){let l=new Mn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ay),u.toneMapping=zi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xn(new Fr,new so({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,C=e.background;C?C.isColor&&(m.color.copy(C),e.background=null,p=!0):(m.color.copy(Ay),p=!0);for(let E=0;E<6;E++){let b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[E],s.y,s.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[E]));let w=this._cubeSize;ga(r,b*w,E>2?w:0,w,w),u.setRenderTarget(r),p&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=C}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===_s||e.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ry());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=0+c*1.25,f=u*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-bs?n-g+bs:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ga(s,m,p,3*x,2*x),r.setRenderTarget(s),r.render(a,oc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,ga(e,m,p,3*x,2*x),r.setRenderTarget(e),r.render(a,oc)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");let d=3,u=this._lodMeshes[r];u.material=c;let h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*lo-1),x=s/g,m=isFinite(s)?1+Math.floor(d*x):lo;m>lo&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lo}`);let p=[],C=0;for(let A=0;A<lo;++A){let v=A/x,T=Math.exp(-v*v/2);p.push(T),A===0?C+=T:A<m&&(C+=2*T)}for(let A=0;A<p.length;A++)p[A]=p[A]/C;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-n;let b=this._sizeLods[r],w=3*b*(r>E-bs?r-E+bs:0),M=4*(this._cubeSize-b);ga(t,w,M,3*b,2*b),l.setRenderTarget(t),l.render(u,oc)}};function RC(i){let e=[],t=[],n=[],r=i,s=i-bs+1+Ey.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-bs?l=Ey[o-i+bs-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,x=3,m=2,p=1,C=new Float32Array(x*g*f),E=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let M=0;M<f;M++){let A=M%3*2/3-1,v=M>2?0:-1,T=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];C.set(T,x*g*M),E.set(h,m*g*M);let R=[M,M,M,M,M,M];b.set(R,p*g*M)}let w=new ui;w.setAttribute("position",new Wn(C,x)),w.setAttribute("uv",new Wn(E,m)),w.setAttribute("faceIndex",new Wn(b,p)),n.push(new Xn(w,null)),r>bs&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Py(i,e,t){let n=new hi(i,e,t);return n.texture.mapping=Kl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function IC(i,e,t){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function DC(i,e,t){let n=new Float32Array(lo),r=new W(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:lo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Ry(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Iy(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Vu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Uu=class extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fr(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:cr});s.uniforms.tEquirect.value=t;let o=new Xn(r,s),a=t.minFilter;return t.minFilter===vs&&(t.minFilter=En),new qh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function OC(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===jh||f===Zh)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new Uu(g.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,g=f===jh||f===Zh,x=f===_s||f===oo;if(g||x){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Bu(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let C=h.image;return g&&C&&C.height>0||x&&C&&l(C)?(n===null&&(n=new Bu(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function a(h,f){return f===jh?h.mapping=_s:f===Zh&&(h.mapping=oo),h}function l(h){let f=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function LC(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&eo("WebGLRenderer: "+n+" extension not supported."),r}}}function NC(i,e,t,n){let r={},s=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(u){let h=[],f=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(f!==null){let C=f.array;x=f.version;for(let E=0,b=C.length;E<b;E+=3){let w=C[E+0],M=C[E+1],A=C[E+2];h.push(w,M,M,A,A,w)}}else{let C=g.array;x=g.version;for(let E=0,b=C.length/3-1;E<b;E+=3){let w=E+0,M=E+1,A=E+2;h.push(w,M,M,A,A,w)}}let m=new(g.count>=65535?Ul:Bl)(h,1);m.version=x;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function d(u){let h=s.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function FC(i,e,t){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,h){i.drawElements(n,h,s,u*o),t.update(h,n,1)}function c(u,h,f){f!==0&&(i.drawElementsInstanced(n,h,s,u*o,f),t.update(h,n,f))}function d(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,u,0,f);let x=0;for(let m=0;m<f;m++)x+=h[m];t.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function kC(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function BC(i,e,t){let n=new WeakMap,r=new Wt;function s(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==u){let R=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",R)};var f=R;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;g===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let w=a.attributes.position.count*b,M=1;w>e.maxTextureSize&&(M=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let A=new Float32Array(w*M*4*u),v=new Fl(A,w,M,u);v.type=Gi,v.needsUpdate=!0;let T=b*4;for(let P=0;P<u;P++){let N=p[P],j=C[P],Q=E[P],D=w*M*4*P;for(let q=0;q<N.count;q++){let z=q*T;g===!0&&(r.fromBufferAttribute(N,q),A[D+z+0]=r.x,A[D+z+1]=r.y,A[D+z+2]=r.z,A[D+z+3]=0),x===!0&&(r.fromBufferAttribute(j,q),A[D+z+4]=r.x,A[D+z+5]=r.y,A[D+z+6]=r.z,A[D+z+7]=0),m===!0&&(r.fromBufferAttribute(Q,q),A[D+z+8]=r.x,A[D+z+9]=r.y,A[D+z+10]=r.z,A[D+z+11]=Q.itemSize===4?r.w:1)}}h={count:u,texture:v,size:new vt(w,M)},n.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function UC(i,e,t,n,r){let s=new WeakMap;function o(c){let d=r.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return h}function a(){s=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var VC={[gm]:"LINEAR_TONE_MAPPING",[_m]:"REINHARD_TONE_MAPPING",[vm]:"CINEON_TONE_MAPPING",[xm]:"ACES_FILMIC_TONE_MAPPING",[bm]:"AGX_TONE_MAPPING",[Mm]:"NEUTRAL_TONE_MAPPING",[ym]:"CUSTOM_TONE_MAPPING"};function zC(i,e,t,n,r,s){let o=new hi(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Nr(e,t):void 0}),a=new hi(e,t,{type:dr,depthBuffer:!1,stencilBuffer:!1}),l=new ui;l.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ai([0,2,0,0,2,0],2));let c=new Nh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Xn(l,c),u=new ha(-1,1,1,-1,0,1),h=null,f=null,g=!1,x,m=null,p=[],C=!1;this.setSize=function(E,b){o.setSize(E,b),a.setSize(E,b);for(let w=0;w<p.length;w++){let M=p[w];M.setSize&&M.setSize(E,b)}},this.setEffects=function(E){p=E,C=p.length>0&&p[0].isRenderPass===!0;let b=o.width,w=o.height;for(let M=0;M<p.length;M++){let A=p[M];A.setSize&&A.setSize(b,w)}},this.begin=function(E,b){if(g||E.toneMapping===zi&&p.length===0)return!1;if(m=b,b!==null){let w=b.width,M=b.height;(o.width!==w||o.height!==M)&&this.setSize(w,M)}return C===!1&&E.setRenderTarget(o),x=E.toneMapping,E.toneMapping=zi,!0},this.hasRenderPass=function(){return C},this.end=function(E,b){E.toneMapping=x,g=!0;let w=o,M=a;for(let A=0;A<p.length;A++){let v=p[A];if(v.enabled!==!1&&(v.render(E,M,w,b),v.needsSwap!==!1)){let T=w;w=M,M=T}}if(h!==E.outputColorSpace||f!==E.toneMapping){h=E.outputColorSpace,f=E.toneMapping,c.defines={},yt.getTransfer(h)===Et&&(c.defines.SRGB_TRANSFER="");let A=VC[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,E.setRenderTarget(m),E.render(d,u),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var Ky=new hr,Hm=new Nr(1,1),Jy=new Fl,Qy=new Dh,eb=new zl,Dy=[],Oy=[],Ly=new Float32Array(16),Ny=new Float32Array(9),Fy=new Float32Array(4);function xa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Dy[r];if(s===void 0&&(s=new Float32Array(r),Dy[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zu(i,e){let t=Oy[e];t===void 0&&(t=new Int32Array(e),Oy[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function HC(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function GC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),xn(t,e)}}function WC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),xn(t,e)}}function XC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),xn(t,e)}}function qC(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Fy.set(n),i.uniformMatrix2fv(this.addr,!1,Fy),xn(t,n)}}function YC(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Ny.set(n),i.uniformMatrix3fv(this.addr,!1,Ny),xn(t,n)}}function jC(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Ly.set(n),i.uniformMatrix4fv(this.addr,!1,Ly),xn(t,n)}}function ZC(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $C(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),xn(t,e)}}function KC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),xn(t,e)}}function JC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),xn(t,e)}}function QC(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),xn(t,e)}}function tE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),xn(t,e)}}function nE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),xn(t,e)}}function iE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Hm.compareFunction=t.isReversedDepthBuffer()?Nu:Lu,s=Hm):s=Ky,t.setTexture2D(e||s,r)}function rE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Qy,r)}function sE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||eb,r)}function oE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Jy,r)}function aE(i){switch(i){case 5126:return HC;case 35664:return GC;case 35665:return WC;case 35666:return XC;case 35674:return qC;case 35675:return YC;case 35676:return jC;case 5124:case 35670:return ZC;case 35667:case 35671:return $C;case 35668:case 35672:return KC;case 35669:case 35673:return JC;case 5125:return QC;case 36294:return eE;case 36295:return tE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return rE;case 35680:case 36300:case 36308:case 36293:return sE;case 36289:case 36303:case 36311:case 36292:return oE}}function lE(i,e){i.uniform1fv(this.addr,e)}function cE(i,e){let t=xa(e,this.size,2);i.uniform2fv(this.addr,t)}function dE(i,e){let t=xa(e,this.size,3);i.uniform3fv(this.addr,t)}function hE(i,e){let t=xa(e,this.size,4);i.uniform4fv(this.addr,t)}function uE(i,e){let t=xa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fE(i,e){let t=xa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pE(i,e){let t=xa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mE(i,e){i.uniform1iv(this.addr,e)}function gE(i,e){i.uniform2iv(this.addr,e)}function _E(i,e){i.uniform3iv(this.addr,e)}function vE(i,e){i.uniform4iv(this.addr,e)}function xE(i,e){i.uniform1uiv(this.addr,e)}function yE(i,e){i.uniform2uiv(this.addr,e)}function bE(i,e){i.uniform3uiv(this.addr,e)}function ME(i,e){i.uniform4uiv(this.addr,e)}function SE(i,e,t){let n=this.cache,r=e.length,s=zu(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Hm:o=Ky;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function wE(i,e,t){let n=this.cache,r=e.length,s=zu(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qy,s[o])}function TE(i,e,t){let n=this.cache,r=e.length,s=zu(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||eb,s[o])}function CE(i,e,t){let n=this.cache,r=e.length,s=zu(t,r);vn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jy,s[o])}function EE(i){switch(i){case 5126:return lE;case 35664:return cE;case 35665:return dE;case 35666:return hE;case 35674:return uE;case 35675:return fE;case 35676:return pE;case 5124:case 35670:return mE;case 35667:case 35671:return gE;case 35668:case 35672:return _E;case 35669:case 35673:return vE;case 5125:return xE;case 36294:return yE;case 36295:return bE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return SE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return CE}}var Gm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=aE(t.type)}},Wm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=EE(t.type)}},Xm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Vm=/(\w+)(\])?(\[|\.)?/g;function ky(i,e){i.seq.push(e),i.map[e.id]=e}function AE(i,e,t){let n=i.name,r=n.length;for(Vm.lastIndex=0;;){let s=Vm.exec(n),o=Vm.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ky(t,c===void 0?new Gm(a,i,e):new Wm(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Xm(a),ky(t,u)),t=u}}}var _a=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);AE(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function By(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var PE=37297,RE=0;function IE(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Uy=new et;function DE(i){yt._getMatrix(Uy,yt.workingColorSpace,i);let e=`mat3( ${Uy.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case Ll:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vy(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+IE(i.getShaderSource(e),a)}else return s}function OE(i,e){let t=DE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var LE={[gm]:"Linear",[_m]:"Reinhard",[vm]:"Cineon",[xm]:"ACESFilmic",[bm]:"AgX",[Mm]:"Neutral",[ym]:"Custom"};function NE(i,e){let t=LE[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ku=new W;function FE(){yt.getLuminanceCoefficients(ku);let i=ku.x.toFixed(4),e=ku.y.toFixed(4),t=ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lc).join(`
`)}function BE(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function UE(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function lc(i){return i!==""}function zy(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hy(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var VE=/^[ \t]*#include +<([\w\d./]+)>/gm;function qm(i){return i.replace(VE,HE)}var zE=new Map;function HE(i,e){let t=ft[e];if(t===void 0){let n=zE.get(e);if(n!==void 0)t=ft[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return qm(t)}var GE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gy(i){return i.replace(GE,WE)}function WE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wy(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var XE={[$l]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};function qE(i){return XE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var YE={[_s]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[Kl]:"ENVMAP_TYPE_CUBE_UV"};function jE(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":YE[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ZE={[oo]:"ENVMAP_MODE_REFRACTION"};function $E(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ZE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var KE={[mm]:"ENVMAP_BLENDING_MULTIPLY",[dy]:"ENVMAP_BLENDING_MIX",[hy]:"ENVMAP_BLENDING_ADD"};function JE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":KE[i.combine]||"ENVMAP_BLENDING_NONE"}function QE(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function eA(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=qE(t),c=jE(t),d=$E(t),u=JE(t),h=QE(t),f=kE(t),g=BE(s),x=r.createProgram(),m,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lc).join(`
`),p.length>0&&(p+=`
`)):(m=[Wy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lc).join(`
`),p=[Wy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?ft.tonemapping_pars_fragment:"",t.toneMapping!==zi?NE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,OE("linearToOutputTexel",t.outputColorSpace),FE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lc).join(`
`)),o=qm(o),o=zy(o,t),o=Hy(o,t),a=qm(a),a=zy(a,t),a=Hy(a,t),o=Gy(o),a=Gy(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=C+m+o,b=C+p+a,w=By(r,r.VERTEX_SHADER,E),M=By(r,r.FRAGMENT_SHADER,b);r.attachShader(x,w),r.attachShader(x,M),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(x)||"",j=r.getShaderInfoLog(w)||"",Q=r.getShaderInfoLog(M)||"",D=N.trim(),q=j.trim(),z=Q.trim(),ee=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,w,M);else{let ie=Vy(r,w,"vertex"),de=Vy(r,M,"fragment");qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+ie+`
`+de)}else D!==""?Ye("WebGLProgram: Program Info Log:",D):(q===""||z==="")&&(V=!1);V&&(P.diagnostics={runnable:ee,programLog:D,vertexShader:{log:q,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(w),r.deleteShader(M),v=new _a(r,x),T=UE(r,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(x,PE)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=M,this}var tA=0,Ym=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jm(e),t.set(e,n)),n}},jm=class{constructor(e){this.id=tA++,this.code=e,this.usedTimes=0}};function nA(i){return i===ys||i===ic||i===rc}function iA(i,e,t,n,r,s){let o=new sa,a=new Ym,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,R,P,N,j){let Q=P.fog,D=N.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ee=e.get(v.envMap||q,z),V=ee&&ee.mapping===Kl?ee.image.height:null,ie=f[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ye("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let de=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,pe=de!==void 0?de.length:0,nt=0;D.morphAttributes.position!==void 0&&(nt=1),D.morphAttributes.normal!==void 0&&(nt=2),D.morphAttributes.color!==void 0&&(nt=3);let xt,Xe,Y,le;if(ie){let Re=fr[ie];xt=Re.vertexShader,Xe=Re.fragmentShader}else{xt=v.vertexShader,Xe=v.fragmentShader;let Re=a.getVertexShaderStage(v),ze=a.getFragmentShaderStage(v);a.update(v,Re,ze),Y=Re.id,le=ze.id}let se=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,De=!!v.map,Te=!!v.matcap,je=!!ee,Fe=!!v.aoMap,Pe=!!v.lightMap,$e=!!v.bumpMap&&v.wireframe===!1,at=!!v.normalMap,rt=!!v.displacementMap,gt=!!v.emissiveMap,tt=!!v.metalnessMap,dt=!!v.roughnessMap,I=v.anisotropy>0,ht=v.clearcoat>0,Le=v.dispersion>0,S=v.iridescence>0,_=v.sheen>0,L=v.transmission>0,B=I&&!!v.anisotropyMap,K=ht&&!!v.clearcoatMap,ae=ht&&!!v.clearcoatNormalMap,ue=ht&&!!v.clearcoatRoughnessMap,J=S&&!!v.iridescenceMap,te=S&&!!v.iridescenceThicknessMap,fe=_&&!!v.sheenColorMap,ke=_&&!!v.sheenRoughnessMap,ve=!!v.specularMap,_e=!!v.specularColorMap,Be=!!v.specularIntensityMap,We=L&&!!v.transmissionMap,Ge=L&&!!v.thicknessMap,O=!!v.gradientMap,me=!!v.alphaMap,ne=v.alphaTest>0,ge=!!v.alphaHash,xe=!!v.extensions,oe=zi;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(oe=i.toneMapping);let we={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:xt,fragmentShader:Xe,defines:v.defines,customVertexShaderID:Y,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:De,matcap:Te,envMap:je,envMapMode:je&&ee.mapping,envMapCubeUVHeight:V,aoMap:Fe,lightMap:Pe,bumpMap:$e,normalMap:at,displacementMap:rt,emissiveMap:gt,normalMapObjectSpace:at&&v.normalMapType===py,normalMapTangentSpace:at&&v.normalMapType===Ou,packedNormalMap:at&&v.normalMapType===Ou&&nA(v.normalMap.format),metalnessMap:tt,roughnessMap:dt,anisotropy:I,anisotropyMap:B,clearcoat:ht,clearcoatMap:K,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,dispersion:Le,iridescence:S,iridescenceMap:J,iridescenceThicknessMap:te,sheen:_,sheenColorMap:fe,sheenRoughnessMap:ke,specularMap:ve,specularColorMap:_e,specularIntensityMap:Be,transmission:L,transmissionMap:We,thicknessMap:Ge,gradientMap:O,opaque:v.transparent===!1&&v.blending===to&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:ne,alphaHash:ge,combine:v.combine,mapUv:De&&g(v.map.channel),aoMapUv:Fe&&g(v.aoMap.channel),lightMapUv:Pe&&g(v.lightMap.channel),bumpMapUv:$e&&g(v.bumpMap.channel),normalMapUv:at&&g(v.normalMap.channel),displacementMapUv:rt&&g(v.displacementMap.channel),emissiveMapUv:gt&&g(v.emissiveMap.channel),metalnessMapUv:tt&&g(v.metalnessMap.channel),roughnessMapUv:dt&&g(v.roughnessMap.channel),anisotropyMapUv:B&&g(v.anisotropyMap.channel),clearcoatMapUv:K&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ke&&g(v.sheenRoughnessMap.channel),specularMapUv:ve&&g(v.specularMap.channel),specularColorMapUv:_e&&g(v.specularColorMap.channel),specularIntensityMapUv:Be&&g(v.specularIntensityMap.channel),transmissionMapUv:We&&g(v.transmissionMap.channel),thicknessMapUv:Ge&&g(v.thicknessMap.channel),alphaMapUv:me&&g(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(at||I),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(De||me),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&at===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&yt.getTransfer(v.map.colorSpace)===Et,decodeVideoTextureEmissive:gt&&v.emissiveMap.isVideoTexture===!0&&yt.getTransfer(v.emissiveMap.colorSpace)===Et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===lr,flipSided:v.side===An,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(T,v),C(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function C(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){let T=f[v.type],R;if(T){let P=fr[T];R=Cy.clone(P.uniforms)}else R=v.uniforms;return R}function b(v,T){let R=d.get(T);return R!==void 0?++R.usedTimes:(R=new eA(i,T,v,r),c.push(R),d.set(T,R)),R}function w(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:b,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:A}}function rA(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function sA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qy(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,x,m,p){let C=i[e];return C===void 0?(C={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[e]=C):(C.id=h.id,C.object=h,C.geometry=f,C.material=g,C.materialVariant=o(h),C.groupOrder=x,C.renderOrder=h.renderOrder,C.z=m,C.group=p),e++,C}function l(h,f,g,x,m,p){let C=a(h,f,g,x,m,p);g.transmission>0?n.push(C):g.transparent===!0?r.push(C):t.push(C)}function c(h,f,g,x,m,p){let C=a(h,f,g,x,m,p);g.transmission>0?n.unshift(C):g.transparent===!0?r.unshift(C):t.unshift(C)}function d(h,f,g){t.length>1&&t.sort(h||sA),n.length>1&&n.sort(f||Xy),r.length>1&&r.sort(f||Xy),g&&(t.reverse(),n.reverse(),r.reverse())}function u(){for(let h=e,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:d}}function oA(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new qy,i.set(n,[o])):r>=s.length?(o=new qy,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function aA(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new mt};break;case"SpotLight":t={position:new W,direction:new W,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function lA(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var cA=0;function dA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hA(i){let e=new aA,t=lA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let r=new W,s=new Ut,o=new Ut;function a(c){let d=0,u=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,C=0,E=0,b=0,w=0,M=0,A=0;c.sort(dA);for(let T=0,R=c.length;T<R;T++){let P=c[T],N=P.color,j=P.intensity,Q=P.distance,D=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ys?D=P.shadow.map.texture:D=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=N.r*j,u+=N.g*j,h+=N.b*j;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],j);A++}else if(P.isDirectionalLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,ee=t.get(P);ee.shadowIntensity=z.intensity,ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=P.shadow.matrix,C++}n.directional[f]=q,f++}else if(P.isSpotLight){let q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(N).multiplyScalar(j),q.distance=Q,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[x]=q;let z=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,z.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[x]=z.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=z.intensity,ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,n.spotShadow[x]=ee,n.spotShadowMap[x]=D,b++}x++}else if(P.isRectAreaLight){let q=e.get(P);q.color.copy(N).multiplyScalar(j),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let z=P.shadow,ee=t.get(P);ee.shadowIntensity=z.intensity,ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,ee.shadowCameraNear=z.camera.near,ee.shadowCameraFar=z.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=q,g++}else if(P.isHemisphereLight){let q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(j),q.groundColor.copy(P.groundColor).multiplyScalar(j),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let v=n.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==C||v.numPointShadows!==E||v.numSpotShadows!==b||v.numSpotMaps!==w||v.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,v.directionalLength=f,v.pointLength=g,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=C,v.numPointShadows=E,v.numSpotShadows=b,v.numSpotMaps=w,v.numLightProbes=A,n.version=cA++)}function l(c,d){let u=0,h=0,f=0,g=0,x=0,m=d.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){let E=c[p];if(E.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),u++}else if(E.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let b=n.point[h];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Yy(i){let e=new hA(i),t=[],n=[],r=[];function s(h){u.camera=h,t.length=0,n.length=0,r.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function uA(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Yy(i),e.set(r,[a])):s>=o.length?(a=new Yy(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var fA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pA=`uniform sampler2D shadow_pass;
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
}`,mA=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],gA=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],jy=new Ut,ac=new W,zm=new W;function _A(i,e,t){let n=new la,r=new vt,s=new vt,o=new Wt,a=new Fh,l=new kh,c={},d=t.maxTextureSize,u={[Or]:An,[An]:Or,[lr]:lr},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:fA,fragmentShader:pA}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new ui;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let p=this.type;this.render=function(M,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Xx&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$l);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(cr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let j=p!==this.type;j&&A.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(D=>D.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,D=M.length;Q<D;Q++){let q=M[Q],z=q.shadow;if(z===void 0){Ye("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let ee=z.getFrameExtents();r.multiply(ee),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ee.x),r.x=s.x*ee.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ee.y),r.y=s.y*ee.y,z.mapSize.y=s.y));let V=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||j===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===fa){if(q.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new hi(r.x,r.y,{format:ys,type:dr,minFilter:En,magFilter:En,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new Nr(r.x,r.y,Gi),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=sr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=nn,z.map.depthTexture.magFilter=nn}else q.isPointLight?(z.map=new Uu(r.x),z.map.depthTexture=new Lh(r.x,Hi)):(z.map=new hi(r.x,r.y),z.map.depthTexture=new Nr(r.x,r.y,Hi)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=sr,this.type===$l?(z.map.depthTexture.compareFunction=V?Nu:Lu,z.map.depthTexture.minFilter=En,z.map.depthTexture.magFilter=En):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=nn,z.map.depthTexture.magFilter=nn);z.camera.updateProjectionMatrix()}let ie=z.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<ie;de++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,de),i.clear();else{de===0&&(i.setRenderTarget(z.map),i.clear());let pe=z.getViewport(de);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),N.viewport(o)}if(q.isPointLight){let pe=z.camera,nt=z.matrix,xt=q.distance||pe.far;xt!==pe.far&&(pe.far=xt,pe.updateProjectionMatrix()),ac.setFromMatrixPosition(q.matrixWorld),pe.position.copy(ac),zm.copy(pe.position),zm.add(mA[de]),pe.up.copy(gA[de]),pe.lookAt(zm),pe.updateMatrixWorld(),nt.makeTranslation(-ac.x,-ac.y,-ac.z),jy.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(jy,pe.coordinateSystem,pe.reversedDepth)}else z.updateMatrices(q);n=z.getFrustum(),b(A,v,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===fa&&C(z,v),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,P)};function C(M,A){let v=e.update(x);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new hi(r.x,r.y,{format:ys,type:dr})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,v,h,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,v,f,x,null)}function E(M,A,v,T){let R=null,P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,j=A.uuid,Q=c[N];Q===void 0&&(Q={},c[N]=Q);let D=Q[j];D===void 0&&(D=R.clone(),Q[j]=D,A.addEventListener("dispose",w)),R=D}if(R.visible=A.visible,R.wireframe=A.wireframe,T===fa?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=v}return R}function b(M,A,v,T,R){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===fa)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let j=e.update(M),Q=M.material;if(Array.isArray(Q)){let D=j.groups;for(let q=0,z=D.length;q<z;q++){let ee=D[q],V=Q[ee.materialIndex];if(V&&V.visible){let ie=E(M,V,T,R);M.onBeforeShadow(i,M,A,v,j,ie,ee),i.renderBufferDirect(v,null,j,ie,M,ee),M.onAfterShadow(i,M,A,v,j,ie,ee)}}}else if(Q.visible){let D=E(M,Q,T,R);M.onBeforeShadow(i,M,A,v,j,D,null),i.renderBufferDirect(v,null,j,D,M,null),M.onAfterShadow(i,M,A,v,j,D,null)}}let N=M.children;for(let j=0,Q=N.length;j<Q;j++)b(N[j],A,v,T,R)}function w(M){M.target.removeEventListener("dispose",w);for(let v in c){let T=c[v],R=M.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function vA(i,e){function t(){let O=!1,me=new Wt,ne=null,ge=new Wt(0,0,0,0);return{setMask:function(xe){ne!==xe&&!O&&(i.colorMask(xe,xe,xe,xe),ne=xe)},setLocked:function(xe){O=xe},setClear:function(xe,oe,we,Re,ze){ze===!0&&(xe*=Re,oe*=Re,we*=Re),me.set(xe,oe,we,Re),ge.equals(me)===!1&&(i.clearColor(xe,oe,we,Re),ge.copy(me))},reset:function(){O=!1,ne=null,ge.set(-1,0,0,0)}}}function n(){let O=!1,me=!1,ne=null,ge=null,xe=null;return{setReversed:function(oe){if(me!==oe){let we=e.get("EXT_clip_control");oe?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),me=oe;let Re=xe;xe=null,this.setClear(Re)}},getReversed:function(){return me},setTest:function(oe){oe?se(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(oe){ne!==oe&&!O&&(i.depthMask(oe),ne=oe)},setFunc:function(oe){if(me&&(oe=wy[oe]),ge!==oe){switch(oe){case xh:i.depthFunc(i.NEVER);break;case yh:i.depthFunc(i.ALWAYS);break;case bh:i.depthFunc(i.LESS);break;case no:i.depthFunc(i.LEQUAL);break;case Mh:i.depthFunc(i.EQUAL);break;case Sh:i.depthFunc(i.GEQUAL);break;case wh:i.depthFunc(i.GREATER);break;case Th:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=oe}},setLocked:function(oe){O=oe},setClear:function(oe){xe!==oe&&(xe=oe,me&&(oe=1-oe),i.clearDepth(oe))},reset:function(){O=!1,ne=null,ge=null,xe=null,me=!1}}}function r(){let O=!1,me=null,ne=null,ge=null,xe=null,oe=null,we=null,Re=null,ze=null;return{setTest:function(st){O||(st?se(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(st){me!==st&&!O&&(i.stencilMask(st),me=st)},setFunc:function(st,Ri,ei){(ne!==st||ge!==Ri||xe!==ei)&&(i.stencilFunc(st,Ri,ei),ne=st,ge=Ri,xe=ei)},setOp:function(st,Ri,ei){(oe!==st||we!==Ri||Re!==ei)&&(i.stencilOp(st,Ri,ei),oe=st,we=Ri,Re=ei)},setLocked:function(st){O=st},setClear:function(st){ze!==st&&(i.clearStencil(st),ze=st)},reset:function(){O=!1,me=null,ne=null,ge=null,xe=null,oe=null,we=null,Re=null,ze=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,d={},u={},h={},f=new WeakMap,g=[],x=null,m=!1,p=null,C=null,E=null,b=null,w=null,M=null,A=null,v=new mt(0,0,0),T=0,R=!1,P=null,N=null,j=null,Q=null,D=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ee=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=ee>=2);let ie=null,de={},pe=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),xt=new Wt().fromArray(pe),Xe=new Wt().fromArray(nt);function Y(O,me,ne,ge){let xe=new Uint8Array(4),oe=i.createTexture();i.bindTexture(O,oe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<ne;we++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(me+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return oe}let le={};le[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(no),$e(!1),at(hm),se(i.CULL_FACE),Fe(cr);function se(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function he(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function Ie(O,me){return h[O]!==me?(i.bindFramebuffer(O,me),h[O]=me,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function be(O,me){let ne=g,ge=!1;if(O){ne=f.get(me),ne===void 0&&(ne=[],f.set(me,ne));let xe=O.textures;if(ne.length!==xe.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,we=xe.length;oe<we;oe++)ne[oe]=i.COLOR_ATTACHMENT0+oe;ne.length=xe.length,ge=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ge=!0);ge&&i.drawBuffers(ne)}function De(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let Te={[us]:i.FUNC_ADD,[Yx]:i.FUNC_SUBTRACT,[jx]:i.FUNC_REVERSE_SUBTRACT};Te[Zx]=i.MIN,Te[$x]=i.MAX;let je={[Kx]:i.ZERO,[Jx]:i.ONE,[Qx]:i.SRC_COLOR,[_h]:i.SRC_ALPHA,[sy]:i.SRC_ALPHA_SATURATE,[iy]:i.DST_COLOR,[ty]:i.DST_ALPHA,[ey]:i.ONE_MINUS_SRC_COLOR,[vh]:i.ONE_MINUS_SRC_ALPHA,[ry]:i.ONE_MINUS_DST_COLOR,[ny]:i.ONE_MINUS_DST_ALPHA,[oy]:i.CONSTANT_COLOR,[ay]:i.ONE_MINUS_CONSTANT_COLOR,[ly]:i.CONSTANT_ALPHA,[cy]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(O,me,ne,ge,xe,oe,we,Re,ze,st){if(O===cr){m===!0&&(he(i.BLEND),m=!1);return}if(m===!1&&(se(i.BLEND),m=!0),O!==qx){if(O!==p||st!==R){if((C!==us||w!==us)&&(i.blendEquation(i.FUNC_ADD),C=us,w=us),st)switch(O){case to:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case um:i.blendFunc(i.ONE,i.ONE);break;case fm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",O);break}else switch(O){case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case um:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fm:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pm:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",O);break}E=null,b=null,M=null,A=null,v.set(0,0,0),T=0,p=O,R=st}return}xe=xe||me,oe=oe||ne,we=we||ge,(me!==C||xe!==w)&&(i.blendEquationSeparate(Te[me],Te[xe]),C=me,w=xe),(ne!==E||ge!==b||oe!==M||we!==A)&&(i.blendFuncSeparate(je[ne],je[ge],je[oe],je[we]),E=ne,b=ge,M=oe,A=we),(Re.equals(v)===!1||ze!==T)&&(i.blendColor(Re.r,Re.g,Re.b,ze),v.copy(Re),T=ze),p=O,R=!1}function Pe(O,me){O.side===lr?he(i.CULL_FACE):se(i.CULL_FACE);let ne=O.side===An;me&&(ne=!ne),$e(ne),O.blending===to&&O.transparent===!1?Fe(cr):Fe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let ge=O.stencilWrite;a.setTest(ge),ge&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),gt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function at(O){O!==Gx?(se(i.CULL_FACE),O!==N&&(O===hm?i.cullFace(i.BACK):O===Wx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),N=O}function rt(O){O!==j&&(z&&i.lineWidth(O),j=O)}function gt(O,me,ne){O?(se(i.POLYGON_OFFSET_FILL),(Q!==me||D!==ne)&&(Q=me,D=ne,o.getReversed()&&(me=-me),i.polygonOffset(me,ne))):he(i.POLYGON_OFFSET_FILL)}function tt(O){O?se(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function dt(O){O===void 0&&(O=i.TEXTURE0+q-1),ie!==O&&(i.activeTexture(O),ie=O)}function I(O,me,ne){ne===void 0&&(ie===null?ne=i.TEXTURE0+q-1:ne=ie);let ge=de[ne];ge===void 0&&(ge={type:void 0,texture:void 0},de[ne]=ge),(ge.type!==O||ge.texture!==me)&&(ie!==ne&&(i.activeTexture(ne),ie=ne),i.bindTexture(O,me||le[O]),ge.type=O,ge.texture=me)}function ht(){let O=de[ie];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Le(){try{i.compressedTexImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function _(){try{i.texSubImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function L(){try{i.texSubImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function ae(){try{i.texStorage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function ue(){try{i.texStorage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function J(){try{i.texImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function te(){try{i.texImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function fe(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function ke(O,me){u[O]!==me&&(i.pixelStorei(O,me),u[O]=me)}function ve(O){xt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),xt.copy(O))}function _e(O){Xe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Xe.copy(O))}function Be(O,me){let ne=c.get(me);ne===void 0&&(ne=new WeakMap,c.set(me,ne));let ge=ne.get(O);ge===void 0&&(ge=i.getUniformBlockIndex(me,O.name),ne.set(O,ge))}function We(O,me){let ge=c.get(me).get(O);l.get(me)!==ge&&(i.uniformBlockBinding(me,ge,O.__bindingPointIndex),l.set(me,ge))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},ie=null,de={},h={},f=new WeakMap,g=[],x=null,m=!1,p=null,C=null,E=null,b=null,w=null,M=null,A=null,v=new mt(0,0,0),T=0,R=!1,P=null,N=null,j=null,Q=null,D=null,xt.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:he,bindFramebuffer:Ie,drawBuffers:be,useProgram:De,setBlending:Fe,setMaterial:Pe,setFlipSided:$e,setCullFace:at,setLineWidth:rt,setPolygonOffset:gt,setScissorTest:tt,activeTexture:dt,bindTexture:I,unbindTexture:ht,compressedTexImage2D:Le,compressedTexImage3D:S,texImage2D:J,texImage3D:te,pixelStorei:ke,getParameter:fe,updateUBOMapping:Be,uniformBlockBinding:We,texStorage2D:ae,texStorage3D:ue,texSubImage2D:_,texSubImage3D:L,compressedTexSubImage2D:B,compressedTexSubImage3D:K,scissor:ve,viewport:_e,reset:Ge}}function xA(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,d=new WeakMap,u=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,_){return g?new OffscreenCanvas(S,_):Nl("canvas")}function m(S,_,L){let B=1,K=Le(S);if((K.width>L||K.height>L)&&(B=L/Math.max(K.width,K.height)),B<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let ae=Math.floor(B*K.width),ue=Math.floor(B*K.height);h===void 0&&(h=x(ae,ue));let J=_?x(ae,ue):h;return J.width=ae,J.height=ue,J.getContext("2d").drawImage(S,0,0,ae,ue),Ye("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ae+"x"+ue+")."),J}else return"data"in S&&Ye("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function p(S){return S.generateMipmaps}function C(S){i.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(S,_,L,B,K,ae=!1){if(S!==null){if(i[S]!==void 0)return i[S];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ue;B&&(ue=e.get("EXT_texture_norm16"),ue||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===i.RED&&(L===i.FLOAT&&(J=i.R32F),L===i.HALF_FLOAT&&(J=i.R16F),L===i.UNSIGNED_BYTE&&(J=i.R8),L===i.UNSIGNED_SHORT&&ue&&(J=ue.R16_EXT),L===i.SHORT&&ue&&(J=ue.R16_SNORM_EXT)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(J=i.R8UI),L===i.UNSIGNED_SHORT&&(J=i.R16UI),L===i.UNSIGNED_INT&&(J=i.R32UI),L===i.BYTE&&(J=i.R8I),L===i.SHORT&&(J=i.R16I),L===i.INT&&(J=i.R32I)),_===i.RG&&(L===i.FLOAT&&(J=i.RG32F),L===i.HALF_FLOAT&&(J=i.RG16F),L===i.UNSIGNED_BYTE&&(J=i.RG8),L===i.UNSIGNED_SHORT&&ue&&(J=ue.RG16_EXT),L===i.SHORT&&ue&&(J=ue.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(J=i.RG8UI),L===i.UNSIGNED_SHORT&&(J=i.RG16UI),L===i.UNSIGNED_INT&&(J=i.RG32UI),L===i.BYTE&&(J=i.RG8I),L===i.SHORT&&(J=i.RG16I),L===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(J=i.RGB8UI),L===i.UNSIGNED_SHORT&&(J=i.RGB16UI),L===i.UNSIGNED_INT&&(J=i.RGB32UI),L===i.BYTE&&(J=i.RGB8I),L===i.SHORT&&(J=i.RGB16I),L===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),L===i.UNSIGNED_INT&&(J=i.RGBA32UI),L===i.BYTE&&(J=i.RGBA8I),L===i.SHORT&&(J=i.RGBA16I),L===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(L===i.UNSIGNED_SHORT&&ue&&(J=ue.RGB16_EXT),L===i.SHORT&&ue&&(J=ue.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){let te=ae?Ll:yt.getTransfer(K);L===i.FLOAT&&(J=i.RGBA32F),L===i.HALF_FLOAT&&(J=i.RGBA16F),L===i.UNSIGNED_BYTE&&(J=te===Et?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&ue&&(J=ue.RGBA16_EXT),L===i.SHORT&&ue&&(J=ue.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(S,_){let L;return S?_===null||_===Hi||_===ma?L=i.DEPTH24_STENCIL8:_===Gi?L=i.DEPTH32F_STENCIL8:_===pa&&(L=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Hi||_===ma?L=i.DEPTH_COMPONENT24:_===Gi?L=i.DEPTH_COMPONENT32F:_===pa&&(L=i.DEPTH_COMPONENT16),L}function M(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==nn&&S.minFilter!==En?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function A(S){let _=S.target;_.removeEventListener("dispose",A),T(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&u.delete(_)}function v(S){let _=S.target;_.removeEventListener("dispose",v),P(_)}function T(S){let _=n.get(S);if(_.__webglInit===void 0)return;let L=S.source,B=f.get(L);if(B){let K=B[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(S),Object.keys(B).length===0&&f.delete(L)}n.remove(S)}function R(S){let _=n.get(S);i.deleteTexture(_.__webglTexture);let L=S.source,B=f.get(L);delete B[_.__cacheKey],o.memory.textures--}function P(S){let _=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(_.__webglFramebuffer[B]))for(let K=0;K<_.__webglFramebuffer[B].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[B][K]);else i.deleteFramebuffer(_.__webglFramebuffer[B]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[B])}else{if(Array.isArray(_.__webglFramebuffer))for(let B=0;B<_.__webglFramebuffer.length;B++)i.deleteFramebuffer(_.__webglFramebuffer[B]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let B=0;B<_.__webglColorRenderbuffer.length;B++)_.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[B]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let L=S.textures;for(let B=0,K=L.length;B<K;B++){let ae=n.get(L[B]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(L[B])}n.remove(S)}let N=0;function j(){N=0}function Q(){return N}function D(S){N=S}function q(){let S=N;return S>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),N+=1,S}function z(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function ee(S,_){let L=n.get(S);if(S.isVideoTexture&&I(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&L.__version!==S.version){let B=S.image;if(B===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{he(L,S,_);return}}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function V(S,_){let L=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){he(L,S,_);return}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function ie(S,_){let L=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){he(L,S,_);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function de(S,_){let L=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&L.__version!==S.version){Ie(L,S,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}let pe={[Ch]:i.REPEAT,[ir]:i.CLAMP_TO_EDGE,[Eh]:i.MIRRORED_REPEAT},nt={[nn]:i.NEAREST,[uy]:i.NEAREST_MIPMAP_NEAREST,[Jl]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[$h]:i.LINEAR_MIPMAP_NEAREST,[vs]:i.LINEAR_MIPMAP_LINEAR},xt={[my]:i.NEVER,[yy]:i.ALWAYS,[gy]:i.LESS,[Lu]:i.LEQUAL,[_y]:i.EQUAL,[Nu]:i.GEQUAL,[vy]:i.GREATER,[xy]:i.NOTEQUAL};function Xe(S,_){if(_.type===Gi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===En||_.magFilter===$h||_.magFilter===Jl||_.magFilter===vs||_.minFilter===En||_.minFilter===$h||_.minFilter===Jl||_.minFilter===vs)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,pe[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,pe[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,pe[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,nt[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,nt[_.minFilter]),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,xt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===nn||_.minFilter!==Jl&&_.minFilter!==vs||_.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Y(S,_){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",A));let B=_.source,K=f.get(B);K===void 0&&(K={},f.set(B,K));let ae=z(_);if(ae!==S.__cacheKey){K[ae]===void 0&&(K[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),K[ae].usedTimes++;let ue=K[S.__cacheKey];ue!==void 0&&(K[S.__cacheKey].usedTimes--,ue.usedTimes===0&&R(_)),S.__cacheKey=ae,S.__webglTexture=K[ae].texture}return L}function le(S,_,L){return Math.floor(Math.floor(S/L)/_)}function se(S,_,L,B){let ae=S.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,L,B,_.data);else{ae.sort((ke,ve)=>ke.start-ve.start);let ue=0;for(let ke=1;ke<ae.length;ke++){let ve=ae[ue],_e=ae[ke],Be=ve.start+ve.count,We=le(_e.start,_.width,4),Ge=le(ve.start,_.width,4);_e.start<=Be+1&&We===Ge&&le(_e.start+_e.count-1,_.width,4)===We?ve.count=Math.max(ve.count,_e.start+_e.count-ve.start):(++ue,ae[ue]=_e)}ae.length=ue+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ke=0,ve=ae.length;ke<ve;ke++){let _e=ae[ke],Be=Math.floor(_e.start/4),We=Math.ceil(_e.count/4),Ge=Be%_.width,O=Math.floor(Be/_.width),me=We,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Ge,O,me,ne,L,B,_.data)}S.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function he(S,_,L){let B=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(B=i.TEXTURE_3D);let K=Y(S,_),ae=_.source;t.bindTexture(B,S.__webglTexture,i.TEXTURE0+L);let ue=n.get(ae);if(ae.version!==ue.__version||K===!0){if(t.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ne=yt.getPrimaries(yt.workingColorSpace),ge=_.colorSpace===kr?null:yt.getPrimaries(_.colorSpace),xe=_.colorSpace===kr||ne===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let te=m(_.image,!1,r.maxTextureSize);te=ht(_,te);let fe=s.convert(_.format,_.colorSpace),ke=s.convert(_.type),ve=b(_.internalFormat,fe,ke,_.normalized,_.colorSpace,_.isVideoTexture);Xe(B,_);let _e,Be=_.mipmaps,We=_.isVideoTexture!==!0,Ge=ue.__version===void 0||K===!0,O=ae.dataReady,me=M(_,te);if(_.isDepthTexture)ve=w(_.format===xs,_.type),Ge&&(We?t.texStorage2D(i.TEXTURE_2D,1,ve,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ve,te.width,te.height,0,fe,ke,null));else if(_.isDataTexture)if(Be.length>0){We&&Ge&&t.texStorage2D(i.TEXTURE_2D,me,ve,Be[0].width,Be[0].height);for(let ne=0,ge=Be.length;ne<ge;ne++)_e=Be[ne],We?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,fe,ke,_e.data):t.texImage2D(i.TEXTURE_2D,ne,ve,_e.width,_e.height,0,fe,ke,_e.data);_.generateMipmaps=!1}else We?(Ge&&t.texStorage2D(i.TEXTURE_2D,me,ve,te.width,te.height),O&&se(_,te,fe,ke)):t.texImage2D(i.TEXTURE_2D,0,ve,te.width,te.height,0,fe,ke,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){We&&Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ve,Be[0].width,Be[0].height,te.depth);for(let ne=0,ge=Be.length;ne<ge;ne++)if(_e=Be[ne],_.format!==Pi)if(fe!==null)if(We){if(O)if(_.layerUpdates.size>0){let xe=Nm(_e.width,_e.height,_.format,_.type);for(let oe of _.layerUpdates){let we=_e.data.subarray(oe*xe/_e.data.BYTES_PER_ELEMENT,(oe+1)*xe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,oe,_e.width,_e.height,1,fe,we)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,te.depth,fe,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,ve,_e.width,_e.height,te.depth,0,_e.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,te.depth,fe,ke,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,ve,_e.width,_e.height,te.depth,0,fe,ke,_e.data)}else{We&&Ge&&t.texStorage2D(i.TEXTURE_2D,me,ve,Be[0].width,Be[0].height);for(let ne=0,ge=Be.length;ne<ge;ne++)_e=Be[ne],_.format!==Pi?fe!==null?We?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,fe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,ve,_e.width,_e.height,0,_e.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,fe,ke,_e.data):t.texImage2D(i.TEXTURE_2D,ne,ve,_e.width,_e.height,0,fe,ke,_e.data)}else if(_.isDataArrayTexture)if(We){if(Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ve,te.width,te.height,te.depth),O)if(_.layerUpdates.size>0){let ne=Nm(te.width,te.height,_.format,_.type);for(let ge of _.layerUpdates){let xe=te.data.subarray(ge*ne/te.data.BYTES_PER_ELEMENT,(ge+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,te.width,te.height,1,fe,ke,xe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,ke,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,te.width,te.height,te.depth,0,fe,ke,te.data);else if(_.isData3DTexture)We?(Ge&&t.texStorage3D(i.TEXTURE_3D,me,ve,te.width,te.height,te.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,ke,te.data)):t.texImage3D(i.TEXTURE_3D,0,ve,te.width,te.height,te.depth,0,fe,ke,te.data);else if(_.isFramebufferTexture){if(Ge)if(We)t.texStorage2D(i.TEXTURE_2D,me,ve,te.width,te.height);else{let ne=te.width,ge=te.height;for(let xe=0;xe<me;xe++)t.texImage2D(i.TEXTURE_2D,xe,ve,ne,ge,0,fe,ke,null),ne>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),te.parentNode!==ne){ne.appendChild(te),u.add(_),ne.onpaint=ge=>{let xe=ge.changedElements;for(let oe of u)xe.includes(oe.image)&&(oe.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let xe=i.RGBA,oe=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,oe,we,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Be.length>0){if(We&&Ge){let ne=Le(Be[0]);t.texStorage2D(i.TEXTURE_2D,me,ve,ne.width,ne.height)}for(let ne=0,ge=Be.length;ne<ge;ne++)_e=Be[ne],We?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe,ke,_e):t.texImage2D(i.TEXTURE_2D,ne,ve,fe,ke,_e);_.generateMipmaps=!1}else if(We){if(Ge){let ne=Le(te);t.texStorage2D(i.TEXTURE_2D,me,ve,ne.width,ne.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,ke,te)}else t.texImage2D(i.TEXTURE_2D,0,ve,fe,ke,te);p(_)&&C(B),ue.__version=ae.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Ie(S,_,L){if(_.image.length!==6)return;let B=Y(S,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+L);let ae=n.get(K);if(K.version!==ae.__version||B===!0){t.activeTexture(i.TEXTURE0+L);let ue=yt.getPrimaries(yt.workingColorSpace),J=_.colorSpace===kr?null:yt.getPrimaries(_.colorSpace),te=_.colorSpace===kr||ue===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let fe=_.isCompressedTexture||_.image[0].isCompressedTexture,ke=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let oe=0;oe<6;oe++)!fe&&!ke?ve[oe]=m(_.image[oe],!0,r.maxCubemapSize):ve[oe]=ke?_.image[oe].image:_.image[oe],ve[oe]=ht(_,ve[oe]);let _e=ve[0],Be=s.convert(_.format,_.colorSpace),We=s.convert(_.type),Ge=b(_.internalFormat,Be,We,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,me=ae.__version===void 0||B===!0,ne=K.dataReady,ge=M(_,_e);Xe(i.TEXTURE_CUBE_MAP,_);let xe;if(fe){O&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ge,_e.width,_e.height);for(let oe=0;oe<6;oe++){xe=ve[oe].mipmaps;for(let we=0;we<xe.length;we++){let Re=xe[we];_.format!==Pi?Be!==null?O?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,0,0,Re.width,Re.height,Be,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,Ge,Re.width,Re.height,0,Re.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,0,0,Re.width,Re.height,Be,We,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,Ge,Re.width,Re.height,0,Be,We,Re.data)}}}else{if(xe=_.mipmaps,O&&me){xe.length>0&&ge++;let oe=Le(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ge,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ke){O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ve[oe].width,ve[oe].height,Be,We,ve[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ge,ve[oe].width,ve[oe].height,0,Be,We,ve[oe].data);for(let we=0;we<xe.length;we++){let ze=xe[we].image[oe].image;O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,0,0,ze.width,ze.height,Be,We,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,Ge,ze.width,ze.height,0,Be,We,ze.data)}}else{O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Be,We,ve[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ge,Be,We,ve[oe]);for(let we=0;we<xe.length;we++){let Re=xe[we];O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,0,0,Be,We,Re.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,Ge,Be,We,Re.image[oe])}}}p(_)&&C(i.TEXTURE_CUBE_MAP),ae.__version=K.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function be(S,_,L,B,K,ae){let ue=s.convert(L.format,L.colorSpace),J=s.convert(L.type),te=b(L.internalFormat,ue,J,L.normalized,L.colorSpace),fe=n.get(_),ke=n.get(L);if(ke.__renderTarget=_,!fe.__hasExternalTextures){let ve=Math.max(1,_.width>>ae),_e=Math.max(1,_.height>>ae);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ae,te,ve,_e,_.depth,0,ue,J,null):t.texImage2D(K,ae,te,ve,_e,0,ue,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),dt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,K,ke.__webglTexture,0,tt(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,K,ke.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(S,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer){let B=_.depthTexture,K=B&&B.isDepthTexture?B.type:null,ae=w(_.stencilBuffer,K),ue=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(_),ae,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(_),ae,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ae,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,S)}else{let B=_.textures;for(let K=0;K<B.length;K++){let ae=B[K],ue=s.convert(ae.format,ae.colorSpace),J=s.convert(ae.type),te=b(ae.internalFormat,ue,J,ae.normalized,ae.colorSpace);dt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(_),te,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(_),te,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,te,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(S,_,L){let B=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),B){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,_.depthTexture);let fe=s.convert(_.depthTexture.format),ke=s.convert(_.depthTexture.type),ve;_.depthTexture.format===sr?ve=i.DEPTH_COMPONENT24:_.depthTexture.format===xs&&(ve=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ve,_.width,_.height,0,fe,ke,null)}}else ee(_.depthTexture,0);let ae=K.__webglTexture,ue=tt(_),J=B?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,te=_.depthTexture.format===xs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===sr)dt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,ae,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,ae,0);else if(_.depthTexture.format===xs)dt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,ae,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(S){let _=n.get(S),L=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){let B=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),B){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,B.removeEventListener("dispose",K)};B.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=B}if(S.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let B=0;B<6;B++)Te(_.__webglFramebuffer[B],S,B);else{let B=S.texture.mipmaps;B&&B.length>0?Te(_.__webglFramebuffer[0],S,0):Te(_.__webglFramebuffer,S,0)}else if(L){_.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[B]),_.__webglDepthbuffer[B]===void 0)_.__webglDepthbuffer[B]=i.createRenderbuffer(),De(_.__webglDepthbuffer[B],S,!1);else{let K=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ae)}}else{let B=S.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),De(_.__webglDepthbuffer,S,!1);else{let K=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(S,_,L){let B=n.get(S);_!==void 0&&be(B.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&je(S)}function Pe(S){let _=S.texture,L=n.get(S),B=n.get(_);S.addEventListener("dispose",v);let K=S.textures,ae=S.isWebGLCubeRenderTarget===!0,ue=K.length>1;if(ue||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=_.version,o.memory.textures++),ae){L.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[J]=[];for(let te=0;te<_.mipmaps.length;te++)L.__webglFramebuffer[J][te]=i.createFramebuffer()}else L.__webglFramebuffer[J]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)L.__webglFramebuffer[J]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ue)for(let J=0,te=K.length;J<te;J++){let fe=n.get(K[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&dt(S)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){let te=K[J];L.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[J]);let fe=s.convert(te.format,te.colorSpace),ke=s.convert(te.type),ve=b(te.internalFormat,fe,ke,te.normalized,te.colorSpace,S.isXRRenderTarget===!0),_e=tt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ve,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,L.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),De(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)be(L.__webglFramebuffer[J][te],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else be(L.__webglFramebuffer[J],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&C(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let J=0,te=K.length;J<te;J++){let fe=K[J],ke=n.get(fe),ve=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ve=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ke.__webglTexture),Xe(ve,fe),be(L.__webglFramebuffer,S,fe,i.COLOR_ATTACHMENT0+J,ve,0),p(fe)&&C(ve)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(J=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,B.__webglTexture),Xe(J,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)be(L.__webglFramebuffer[te],S,_,i.COLOR_ATTACHMENT0,J,te);else be(L.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,J,0);p(_)&&C(J),t.unbindTexture()}S.depthBuffer&&je(S)}function $e(S){let _=S.textures;for(let L=0,B=_.length;L<B;L++){let K=_[L];if(p(K)){let ae=E(S),ue=n.get(K).__webglTexture;t.bindTexture(ae,ue),C(ae),t.unbindTexture()}}}let at=[],rt=[];function gt(S){if(S.samples>0){if(dt(S)===!1){let _=S.textures,L=S.width,B=S.height,K=i.COLOR_BUFFER_BIT,ae=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(S),J=_.length>1;if(J)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let te=S.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);let ke=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,L,B,0,0,L,B,K,i.NEAREST),l===!0&&(at.length=0,rt.length=0,at.push(i.COLOR_ATTACHMENT0+fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(at.push(ae),rt.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);let ke=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let _=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function tt(S){return Math.min(r.maxSamples,S.samples)}function dt(S){let _=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(S){let _=o.render.frame;d.get(S)!==_&&(d.set(S,_),S.update())}function ht(S,_){let L=S.colorSpace,B=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Ol&&L!==kr&&(yt.getTransfer(L)===Et?(B!==Pi||K!==Qn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",L)),_}function Le(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.getTextureUnits=Q,this.setTextureUnits=D,this.setTexture2D=ee,this.setTexture2DArray=V,this.setTexture3D=ie,this.setTextureCube=de,this.rebindTextures=Fe,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=be,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yA(i,e){function t(n,r=kr){let s,o=yt.getTransfer(r);if(n===Qn)return i.UNSIGNED_BYTE;if(n===Jh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cm)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sm)return i.BYTE;if(n===wm)return i.SHORT;if(n===pa)return i.UNSIGNED_SHORT;if(n===Kh)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Gi)return i.FLOAT;if(n===dr)return i.HALF_FLOAT;if(n===Em)return i.ALPHA;if(n===Am)return i.RGB;if(n===Pi)return i.RGBA;if(n===sr)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Pm)return i.RED;if(n===eu)return i.RED_INTEGER;if(n===ys)return i.RG;if(n===tu)return i.RG_INTEGER;if(n===nu)return i.RGBA_INTEGER;if(n===Ql||n===ec||n===tc||n===nc)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ql)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ql)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===iu||n===ru||n===su||n===ou)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ou)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===au||n===lu||n===cu||n===du||n===hu||n===ic||n===uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===au||n===lu)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===du)return s.COMPRESSED_R11_EAC;if(n===hu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ic)return s.COMPRESSED_RG11_EAC;if(n===uu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fu||n===pu||n===mu||n===gu||n===_u||n===vu||n===xu||n===yu||n===bu||n===Mu||n===Su||n===wu||n===Tu||n===Cu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_u)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Su)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eu||n===Au||n===Pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Eu)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Au)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ru||n===Iu||n===rc||n===Du)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ru)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Iu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Du)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ma?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var bA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MA=`
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

}`,Zm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Hl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fi({vertexShader:bA,fragmentShader:MA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new Gl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$m=class extends or{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Zm,p={},C=t.getContextAttributes(),E=null,b=null,w=[],M=[],A=new vt,v=null,T=new Mn;T.viewport=new Wt;let R=new Mn;R.viewport=new Wt;let P=[T,R],N=new Yh,j=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let le=w[Y];return le===void 0&&(le=new oa,w[Y]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Y){let le=w[Y];return le===void 0&&(le=new oa,w[Y]=le),le.getGripSpace()},this.getHand=function(Y){let le=w[Y];return le===void 0&&(le=new oa,w[Y]=le),le.getHandSpace()};function D(Y){let le=M.indexOf(Y.inputSource);if(le===-1)return;let se=w[le];se!==void 0&&(se.update(Y.inputSource,Y.frame,c||o),se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",z);for(let Y=0;Y<w.length;Y++){let le=M[Y];le!==null&&(M[Y]=null,w[Y].disconnect(le))}j=null,Q=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(E),f=null,h=null,u=null,r=null,b=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",q),r.addEventListener("inputsourceschange",z),C.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,he=null,Ie=null;C.depth&&(Ie=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=C.stencil?xs:sr,he=C.stencil?ma:Hi);let be={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new hi(h.textureWidth,h.textureHeight,{format:Pi,type:Qn,depthTexture:new Nr(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let se={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new hi(f.framebufferWidth,f.framebufferHeight,{format:Pi,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(Y){for(let le=0;le<Y.removed.length;le++){let se=Y.removed[le],he=M.indexOf(se);he>=0&&(M[he]=null,w[he].disconnect(se))}for(let le=0;le<Y.added.length;le++){let se=Y.added[le],he=M.indexOf(se);if(he===-1){for(let be=0;be<w.length;be++)if(be>=M.length){M.push(se),he=be;break}else if(M[be]===null){M[be]=se,he=be;break}if(he===-1)break}let Ie=w[he];Ie&&Ie.connect(se)}}let ee=new W,V=new W;function ie(Y,le,se){ee.setFromMatrixPosition(le.matrixWorld),V.setFromMatrixPosition(se.matrixWorld);let he=ee.distanceTo(V),Ie=le.projectionMatrix.elements,be=se.projectionMatrix.elements,De=Ie[14]/(Ie[10]-1),Te=Ie[14]/(Ie[10]+1),je=(Ie[9]+1)/Ie[5],Fe=(Ie[9]-1)/Ie[5],Pe=(Ie[8]-1)/Ie[0],$e=(be[8]+1)/be[0],at=De*Pe,rt=De*$e,gt=he/(-Pe+$e),tt=gt*-Pe;if(le.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(tt),Y.translateZ(gt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ie[10]===-1)Y.projectionMatrix.copy(le.projectionMatrix),Y.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let dt=De+gt,I=Te+gt,ht=at-tt,Le=rt+(he-tt),S=je*Te/I*dt,_=Fe*Te/I*dt;Y.projectionMatrix.makePerspective(ht,Le,S,_,dt,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function de(Y,le){le===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(le.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let le=Y.near,se=Y.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(se=m.depthFar)),N.near=R.near=T.near=le,N.far=R.far=T.far=se,(j!==N.near||Q!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),j=N.near,Q=N.far),N.layers.mask=Y.layers.mask|6,T.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;let he=Y.parent,Ie=N.cameras;de(N,he);for(let be=0;be<Ie.length;be++)de(Ie[be],he);Ie.length===2?ie(N,T,R):N.projectionMatrix.copy(T.projectionMatrix),pe(Y,N,he)};function pe(Y,le,se){se===null?Y.matrix.copy(le.matrixWorld):(Y.matrix.copy(se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(le.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(le.projectionMatrix),Y.projectionMatrixInverse.copy(le.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ph*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return p[Y]};let nt=null;function xt(Y,le){if(d=le.getViewerPose(c||o),g=le,d!==null){let se=d.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let he=!1;se.length!==N.cameras.length&&(N.cameras.length=0,he=!0);for(let Te=0;Te<se.length;Te++){let je=se[Te],Fe=null;if(f!==null)Fe=f.getViewport(je);else{let $e=u.getViewSubImage(h,je);Fe=$e.viewport,Te===0&&(e.setRenderTargetTextures(b,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(b))}let Pe=P[Te];Pe===void 0&&(Pe=new Mn,Pe.layers.enable(Te),Pe.viewport=new Wt,P[Te]=Pe),Pe.matrix.fromArray(je.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(je.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Te===0&&(N.matrix.copy(Pe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),he===!0&&N.cameras.push(Pe)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Te=u.getDepthInformation(se[0]);Te&&Te.isValid&&Te.texture&&m.init(Te,r.renderState)}if(Ie&&Ie.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Te=0;Te<se.length;Te++){let je=se[Te].camera;if(je){let Fe=p[je];Fe||(Fe=new Hl,p[je]=Fe);let Pe=u.getCameraImage(je);Fe.sourceTexture=Pe}}}}for(let se=0;se<w.length;se++){let he=M[se],Ie=w[se];he!==null&&Ie!==void 0&&Ie.update(he,le,c||o)}nt&&nt(Y,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}let Xe=new Zy;Xe.setAnimationLoop(xt),this.setAnimationLoop=function(Y){nt=Y},this.dispose=function(){}}},SA=new Ut,tb=new et;tb.set(-1,0,0,0,1,0,0,0,1);function wA(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dm(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,C,E,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,C,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let C=e.get(p),E=C.envMap,b=C.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tb),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,C,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function TA(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let M=w.program;n.uniformBlockBinding(b,M)}function c(b,w){let M=r[b.id];M===void 0&&(m(b),M=d(b),r[b.id]=M,b.addEventListener("dispose",C));let A=w.program;n.updateUBOMapping(b,A);let v=e.render.frame;s[b.id]!==v&&(h(b),s[b.id]=v)}function d(b){let w=u();b.__bindingPointIndex=w;let M=i.createBuffer(),A=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let w=r[b.id],M=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,T=M.length;v<T;v++){let R=M[v];if(Array.isArray(R))for(let P=0,N=R.length;P<N;P++)f(R[P],v,P,A);else f(R,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,w,M,A){if(x(b,w,M,A)===!0){let v=b.__offset,T=b.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){let N=T[P],j=p(N);g(N,b.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function g(b,w,M){typeof b=="number"||typeof b=="boolean"?w[0]=b:b.isMatrix3?(w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0):ArrayBuffer.isView(b)?w.set(new b.constructor(b.buffer,b.byteOffset,w.length)):b.toArray(w,M)}function x(b,w,M,A){let v=b.value,T=w+"_"+M;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{let R=A[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(b){let w=b.uniforms,M=0,A=16;for(let T=0,R=w.length;T<R;T++){let P=Array.isArray(w[T])?w[T]:[w[T]];for(let N=0,j=P.length;N<j;N++){let Q=P[N],D=Array.isArray(Q.value)?Q.value:[Q.value];for(let q=0,z=D.length;q<z;q++){let ee=D[q],V=p(ee),ie=M%A,de=ie%V.boundary,pe=ie+de;M+=de,pe!==0&&A-pe<V.storage&&(M+=A-pe),Q.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=M,M+=V.storage}}}let v=M%A;return v>0&&(M+=A-v),b.__size=M,b.__cache={},this}function p(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",b),w}function C(b){let w=b.target;w.removeEventListener("dispose",C);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function E(){for(let b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:E}}var CA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ur=null;function EA(){return ur===null&&(ur=new Oh(CA,16,16,ys,dr),ur.name="DFG_LUT",ur.minFilter=En,ur.magFilter=En,ur.wrapS=ir,ur.wrapT=ir,ur.generateMipmaps=!1,ur.needsUpdate=!0),ur}var va=class{constructor(e={}){let{canvas:t=by(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Qn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,m=new Set([nu,tu,eu]),p=new Set([Qn,Hi,pa,ma,Jh,Qh]),C=new Uint32Array(4),E=new Int32Array(4),b=new W,w=null,M=null,A=[],v=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,N=null,j=null,Q=null,D=null;this._outputColorSpace=di;let q=0,z=0,ee=null,V=-1,ie=null,de=new Wt,pe=new Wt,nt=null,xt=new mt(0),Xe=0,Y=t.width,le=t.height,se=1,he=null,Ie=null,be=new Wt(0,0,Y,le),De=new Wt(0,0,Y,le),Te=!1,je=new la,Fe=!1,Pe=!1,$e=new Ut,at=new W,rt=new Wt,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function dt(){return ee===null?se:1}let I=n;function ht(y,k){return t.getContext(y,k)}try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Ri,!1),I===null){let k="webgl2";if(I=ht(k,y),I===null)throw ht(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw qe("WebGLRenderer: "+y.message),y}let Le,S,_,L,B,K,ae,ue,J,te,fe,ke,ve,_e,Be,We,Ge,O,me,ne,ge,xe,oe;function we(){Le=new LC(I),Le.init(),ge=new yA(I,Le),S=new CC(I,Le,e,ge),_=new vA(I,Le),S.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),j=I.createFramebuffer(),Q=I.createFramebuffer(),D=I.createFramebuffer(),L=new kC(I),B=new rA,K=new xA(I,Le,_,B,S,ge,L),ae=new OC(R),ue=new zw(I),xe=new wC(I,ue),J=new NC(I,ue,L,xe),te=new UC(I,J,ue,xe,L),O=new BC(I,S,K),Be=new EC(B),fe=new iA(R,ae,Le,S,xe,Be),ke=new wA(R,B),ve=new oA,_e=new uA(Le),Ge=new SC(R,ae,_,te,g,l),We=new _A(R,te,S),oe=new TA(I,L,S,_),me=new TC(I,Le,L),ne=new FC(I,Le,L),L.programs=fe.programs,R.capabilities=S,R.extensions=Le,R.properties=B,R.renderLists=ve,R.shadowMap=We,R.state=_,R.info=L}we(),x!==Qn&&(T=new zC(x,t.width,t.height,a,r,s));let Re=new $m(R,I);this.xr=Re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let y=Le.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Le.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(y){y!==void 0&&(se=y,this.setSize(Y,le,!1))},this.getSize=function(y){return y.set(Y,le)},this.setSize=function(y,k,Z=!0){if(Re.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,le=k,t.width=Math.floor(y*se),t.height=Math.floor(k*se),Z===!0&&(t.style.width=y+"px",t.style.height=k+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(Y*se,le*se).floor()},this.setDrawingBufferSize=function(y,k,Z){Y=y,le=k,se=Z,t.width=Math.floor(y*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,y,k)},this.setEffects=function(y){if(x===Qn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let k=0;k<y.length;k++)if(y[k].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(de)},this.getViewport=function(y){return y.copy(be)},this.setViewport=function(y,k,Z,G){y.isVector4?be.set(y.x,y.y,y.z,y.w):be.set(y,k,Z,G),_.viewport(de.copy(be).multiplyScalar(se).round())},this.getScissor=function(y){return y.copy(De)},this.setScissor=function(y,k,Z,G){y.isVector4?De.set(y.x,y.y,y.z,y.w):De.set(y,k,Z,G),_.scissor(pe.copy(De).multiplyScalar(se).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(y){_.setScissorTest(Te=y)},this.setOpaqueSort=function(y){he=y},this.setTransparentSort=function(y){Ie=y},this.getClearColor=function(y){return y.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(y=!0,k=!0,Z=!0){let G=0;if(y){let X=!1;if(ee!==null){let Se=ee.texture.format;X=m.has(Se)}if(X){let Se=ee.texture.type,Ae=p.has(Se),Me=Ge.getClearColor(),Ne=Ge.getClearAlpha(),Ue=Me.r,ot=Me.g,pt=Me.b;Ae?(C[0]=Ue,C[1]=ot,C[2]=pt,C[3]=Ne,I.clearBufferuiv(I.COLOR,0,C)):(E[0]=Ue,E[1]=ot,E[2]=pt,E[3]=Ne,I.clearBufferiv(I.COLOR,0,E))}else G|=I.COLOR_BUFFER_BIT}k&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),N=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ri,!1),Ge.dispose(),ve.dispose(),_e.dispose(),B.dispose(),ae.dispose(),te.dispose(),xe.dispose(),oe.dispose(),fe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",eg),Re.removeEventListener("sessionend",tg),Ms.stop()};function ze(y){y.preventDefault(),Im("WebGLRenderer: Context Lost."),P=!0}function st(){Im("WebGLRenderer: Context Restored."),P=!1;let y=L.autoReset,k=We.enabled,Z=We.autoUpdate,G=We.needsUpdate,X=We.type;we(),L.autoReset=y,We.enabled=k,We.autoUpdate=Z,We.needsUpdate=G,We.type=X}function Ri(y){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ei(y){let k=y.target;k.removeEventListener("dispose",ei),vb(k)}function vb(y){xb(y),B.remove(y)}function xb(y){let k=B.get(y).programs;k!==void 0&&(k.forEach(function(Z){fe.releaseProgram(Z)}),y.isShaderMaterial&&fe.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,Z,G,X,Se){k===null&&(k=gt);let Ae=X.isMesh&&X.matrixWorld.determinantAffine()<0,Me=Mb(y,k,Z,G,X);_.setMaterial(G,Ae);let Ne=Z.index,Ue=1;if(G.wireframe===!0){if(Ne=J.getWireframeAttribute(Z),Ne===void 0)return;Ue=2}let ot=Z.drawRange,pt=Z.attributes.position,He=ot.start*Ue,Rt=(ot.start+ot.count)*Ue;Se!==null&&(He=Math.max(He,Se.start*Ue),Rt=Math.min(Rt,(Se.start+Se.count)*Ue)),Ne!==null?(He=Math.max(He,0),Rt=Math.min(Rt,Ne.count)):pt!=null&&(He=Math.max(He,0),Rt=Math.min(Rt,pt.count));let $t=Rt-He;if($t<0||$t===1/0)return;xe.setup(X,G,Me,Z,Ne);let Yt,Ot=me;if(Ne!==null&&(Yt=ue.get(Ne),Ot=ne,Ot.setIndex(Yt)),X.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*dt()),Ot.setMode(I.LINES)):Ot.setMode(I.TRIANGLES);else if(X.isLine){let Pn=G.linewidth;Pn===void 0&&(Pn=1),_.setLineWidth(Pn*dt()),X.isLineSegments?Ot.setMode(I.LINES):X.isLineLoop?Ot.setMode(I.LINE_LOOP):Ot.setMode(I.LINE_STRIP)}else X.isPoints?Ot.setMode(I.POINTS):X.isSprite&&Ot.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))Ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Pn=X._multiDrawStarts,Ee=X._multiDrawCounts,ti=X._multiDrawCount,St=Ne?ue.get(Ne).bytesPerElement:1,mi=B.get(G).currentProgram.getUniforms();for(let Wi=0;Wi<ti;Wi++)mi.setValue(I,"_gl_DrawID",Wi),Ot.render(Pn[Wi]/St,Ee[Wi])}else if(X.isInstancedMesh)Ot.renderInstances(He,$t,X.count);else if(Z.isInstancedBufferGeometry){let Pn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ee=Math.min(Z.instanceCount,Pn);Ot.renderInstances(He,$t,Ee)}else Ot.render(He,$t)};function Qm(y,k,Z){y.transparent===!0&&y.side===lr&&y.forceSinglePass===!1?(y.side=An,y.needsUpdate=!0,uc(y,k,Z),y.side=Or,y.needsUpdate=!0,uc(y,k,Z),y.side=lr):uc(y,k,Z)}this.compile=function(y,k,Z=null){Z===null&&(Z=y),M=_e.get(Z),M.init(k),v.push(M),Z.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),y!==Z&&y.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),M.setupLights();let G=new Set;return y.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Se=X.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){let Me=Se[Ae];Qm(Me,Z,X),G.add(Me)}else Qm(Se,Z,X),G.add(Se)}),M=v.pop(),G},this.compileAsync=function(y,k,Z=null){let G=this.compile(y,k,Z);return new Promise(X=>{function Se(){if(G.forEach(function(Ae){B.get(Ae).currentProgram.isReady()&&G.delete(Ae)}),G.size===0){X(y);return}setTimeout(Se,10)}Le.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ku=null;function yb(y){Ku&&Ku(y)}function eg(){Ms.stop()}function tg(){Ms.start()}let Ms=new Zy;Ms.setAnimationLoop(yb),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(y){Ku=y,Re.setAnimationLoop(y),y===null?Ms.stop():Ms.start()},Re.addEventListener("sessionstart",eg),Re.addEventListener("sessionend",tg),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(y,k);let Z=Re.enabled===!0&&Re.isPresenting===!0,G=T!==null&&(ee===null||Z)&&T.begin(R,ee);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(k),k=Re.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,k,ee),M=_e.get(y,v.length),M.init(k),M.state.textureUnits=K.getTextureUnits(),v.push(M),$e.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),je.setFromProjectionMatrix($e,Ui,k.reversedDepth),Pe=this.localClippingEnabled,Fe=Be.init(this.clippingPlanes,Pe),w=ve.get(y,A.length),w.init(),A.push(w),Re.enabled===!0&&Re.isPresenting===!0){let Ae=R.xr.getDepthSensingMesh();Ae!==null&&Ju(Ae,k,-1/0,R.sortObjects)}Ju(y,k,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(he,Ie,k.reversedDepth),tt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,tt&&Ge.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Fe===!0&&Be.beginShadows();let X=M.state.shadowsArray;if(We.render(X,y,k),Fe===!0&&Be.endShadows(),(G&&T.hasRenderPass())===!1){let Ae=w.opaque,Me=w.transmissive;if(M.setupLights(),k.isArrayCamera){let Ne=k.cameras;if(Me.length>0)for(let Ue=0,ot=Ne.length;Ue<ot;Ue++){let pt=Ne[Ue];ig(Ae,Me,y,pt)}tt&&Ge.render(y);for(let Ue=0,ot=Ne.length;Ue<ot;Ue++){let pt=Ne[Ue];ng(w,y,pt,pt.viewport)}}else Me.length>0&&ig(Ae,Me,y,k),tt&&Ge.render(y),ng(w,y,k)}ee!==null&&z===0&&(K.updateMultisampleRenderTarget(ee),K.updateRenderTargetMipmap(ee)),G&&T.end(R),y.isScene===!0&&y.onAfterRender(R,y,k),xe.resetDefaultState(),V=-1,ie=null,v.pop(),v.length>0?(M=v[v.length-1],K.setTextureUnits(M.state.textureUnits),Fe===!0&&Be.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,N!==null&&N.renderEnd()};function Ju(y,k,Z,G){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)Z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLightProbeGrid)M.pushLightProbeGrid(y);else if(y.isLight)M.pushLight(y),y.castShadow&&M.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||je.intersectsSprite(y)){G&&rt.setFromMatrixPosition(y.matrixWorld).applyMatrix4($e);let Ae=te.update(y),Me=y.material;Me.visible&&w.push(y,Ae,Me,Z,rt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||je.intersectsObject(y))){let Ae=te.update(y),Me=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),rt.copy(y.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),rt.copy(Ae.boundingSphere.center)),rt.applyMatrix4(y.matrixWorld).applyMatrix4($e)),Array.isArray(Me)){let Ne=Ae.groups;for(let Ue=0,ot=Ne.length;Ue<ot;Ue++){let pt=Ne[Ue],He=Me[pt.materialIndex];He&&He.visible&&w.push(y,Ae,He,Z,rt.z,pt)}}else Me.visible&&w.push(y,Ae,Me,Z,rt.z,null)}}let Se=y.children;for(let Ae=0,Me=Se.length;Ae<Me;Ae++)Ju(Se[Ae],k,Z,G)}function ng(y,k,Z,G){let{opaque:X,transmissive:Se,transparent:Ae}=y;M.setupLightsView(Z),Fe===!0&&Be.setGlobalState(R.clippingPlanes,Z),G&&_.viewport(de.copy(G)),X.length>0&&hc(X,k,Z),Se.length>0&&hc(Se,k,Z),Ae.length>0&&hc(Ae,k,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ig(y,k,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){let He=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new hi(1,1,{generateMipmaps:!0,type:He?dr:Qn,minFilter:vs,samples:Math.max(4,S.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let Se=M.state.transmissionRenderTarget[G.id],Ae=G.viewport||de;Se.setSize(Ae.z*R.transmissionResolutionScale,Ae.w*R.transmissionResolutionScale);let Me=R.getRenderTarget(),Ne=R.getActiveCubeFace(),Ue=R.getActiveMipmapLevel();R.setRenderTarget(Se),R.getClearColor(xt),Xe=R.getClearAlpha(),Xe<1&&R.setClearColor(16777215,.5),R.clear(),tt&&Ge.render(Z);let ot=R.toneMapping;R.toneMapping=zi;let pt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),Fe===!0&&Be.setGlobalState(R.clippingPlanes,G),hc(y,Z,G),K.updateMultisampleRenderTarget(Se),K.updateRenderTargetMipmap(Se),Le.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Rt=0,$t=k.length;Rt<$t;Rt++){let Yt=k[Rt],{object:Ot,geometry:Pn,material:Ee,group:ti}=Yt;if(Ee.side===lr&&Ot.layers.test(G.layers)){let St=Ee.side;Ee.side=An,Ee.needsUpdate=!0,rg(Ot,Z,G,Pn,Ee,ti),Ee.side=St,Ee.needsUpdate=!0,He=!0}}He===!0&&(K.updateMultisampleRenderTarget(Se),K.updateRenderTargetMipmap(Se))}R.setRenderTarget(Me,Ne,Ue),R.setClearColor(xt,Xe),pt!==void 0&&(G.viewport=pt),R.toneMapping=ot}function hc(y,k,Z){let G=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Se=y.length;X<Se;X++){let Ae=y[X],{object:Me,geometry:Ne,group:Ue}=Ae,ot=Ae.material;ot.allowOverride===!0&&G!==null&&(ot=G),Me.layers.test(Z.layers)&&rg(Me,k,Z,Ne,ot,Ue)}}function rg(y,k,Z,G,X,Se){y.onBeforeRender(R,k,Z,G,X,Se),y.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),X.onBeforeRender(R,k,Z,G,y,Se),X.transparent===!0&&X.side===lr&&X.forceSinglePass===!1?(X.side=An,X.needsUpdate=!0,R.renderBufferDirect(Z,k,G,X,y,Se),X.side=Or,X.needsUpdate=!0,R.renderBufferDirect(Z,k,G,X,y,Se),X.side=lr):R.renderBufferDirect(Z,k,G,X,y,Se),y.onAfterRender(R,k,Z,G,X,Se)}function uc(y,k,Z){k.isScene!==!0&&(k=gt);let G=B.get(y),X=M.state.lights,Se=M.state.shadowsArray,Ae=X.state.version,Me=fe.getParameters(y,X.state,Se,k,Z,M.state.lightProbeGridArray),Ne=fe.getProgramCacheKey(Me),Ue=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?k.environment:null,G.fog=k.fog;let ot=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=ae.get(y.envMap||G.environment,ot),G.envMapRotation=G.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",ei),Ue=new Map,G.programs=Ue);let pt=Ue.get(Ne);if(pt!==void 0){if(G.currentProgram===pt&&G.lightsStateVersion===Ae)return og(y,Me),pt}else Me.uniforms=fe.getUniforms(y),N!==null&&y.isNodeMaterial&&N.build(y,Z,Me),y.onBeforeCompile(Me,R),pt=fe.acquireProgram(Me,Ne),Ue.set(Ne,pt),G.uniforms=Me.uniforms;let He=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(He.clippingPlanes=Be.uniform),og(y,Me),G.needsLights=wb(y),G.lightsStateVersion=Ae,G.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=pt,G.uniformsList=null,pt}function sg(y){if(y.uniformsList===null){let k=y.currentProgram.getUniforms();y.uniformsList=_a.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function og(y,k){let Z=B.get(y);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function bb(y,k){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(k.matrixWorld);for(let Z=0,G=y.length;Z<G;Z++){let X=y[Z];if(X.texture!==null&&X.boundingBox.containsPoint(b))return X}return null}function Mb(y,k,Z,G,X){k.isScene!==!0&&(k=gt),K.resetTextureUnits();let Se=k.fog,Ae=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?k.environment:null,Me=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:yt.workingColorSpace,Ne=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ue=ae.get(G.envMap||Ae,Ne),ot=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pt=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),He=!!Z.morphAttributes.position,Rt=!!Z.morphAttributes.normal,$t=!!Z.morphAttributes.color,Yt=zi;G.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Yt=R.toneMapping);let Ot=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pn=Ot!==void 0?Ot.length:0,Ee=B.get(G),ti=M.state.lights;if(Fe===!0&&(Pe===!0||y!==ie)){let Ft=y===ie&&G.id===V;Be.setState(G,y,Ft)}let St=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ti.state.version||Ee.outputColorSpace!==Me||X.isBatchedMesh&&Ee.batching===!1||!X.isBatchedMesh&&Ee.batching===!0||X.isBatchedMesh&&Ee.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ee.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ee.instancing===!1||!X.isInstancedMesh&&Ee.instancing===!0||X.isSkinnedMesh&&Ee.skinning===!1||!X.isSkinnedMesh&&Ee.skinning===!0||X.isInstancedMesh&&Ee.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ee.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ee.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ee.instancingMorph===!1&&X.morphTexture!==null||Ee.envMap!==Ue||G.fog===!0&&Ee.fog!==Se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Be.numPlanes||Ee.numIntersection!==Be.numIntersection)||Ee.vertexAlphas!==ot||Ee.vertexTangents!==pt||Ee.morphTargets!==He||Ee.morphNormals!==Rt||Ee.morphColors!==$t||Ee.toneMapping!==Yt||Ee.morphTargetsCount!==Pn||!!Ee.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Ee.__version=G.version);let mi=Ee.currentProgram;St===!0&&(mi=uc(G,k,X),N&&G.isNodeMaterial&&N.onUpdateProgram(G,mi,Ee));let Wi=!1,Br=!1,co=!1,Lt=mi.getUniforms(),Kt=Ee.uniforms;if(_.useProgram(mi.program)&&(Wi=!0,Br=!0,co=!0),G.id!==V&&(V=G.id,Br=!0),Ee.needsLights){let Ft=bb(M.state.lightProbeGridArray,X);Ee.lightProbeGrid!==Ft&&(Ee.lightProbeGrid=Ft,Br=!0)}if(Wi||ie!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Lt.setValue(I,"projectionMatrix",y.projectionMatrix),Lt.setValue(I,"viewMatrix",y.matrixWorldInverse);let Vr=Lt.map.cameraPosition;Vr!==void 0&&Vr.setValue(I,at.setFromMatrixPosition(y.matrixWorld)),S.logarithmicDepthBuffer&&Lt.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Lt.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),ie!==y&&(ie=y,Br=!0,co=!0)}if(Ee.needsLights&&(ti.state.directionalShadowMap.length>0&&Lt.setValue(I,"directionalShadowMap",ti.state.directionalShadowMap,K),ti.state.spotShadowMap.length>0&&Lt.setValue(I,"spotShadowMap",ti.state.spotShadowMap,K),ti.state.pointShadowMap.length>0&&Lt.setValue(I,"pointShadowMap",ti.state.pointShadowMap,K)),X.isSkinnedMesh){Lt.setOptional(I,X,"bindMatrix"),Lt.setOptional(I,X,"bindMatrixInverse");let Ft=X.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Lt.setValue(I,"boneTexture",Ft.boneTexture,K))}X.isBatchedMesh&&(Lt.setOptional(I,X,"batchingTexture"),Lt.setValue(I,"batchingTexture",X._matricesTexture,K),Lt.setOptional(I,X,"batchingIdTexture"),Lt.setValue(I,"batchingIdTexture",X._indirectTexture,K),Lt.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&Lt.setValue(I,"batchingColorTexture",X._colorsTexture,K));let Ur=Z.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0)&&O.update(X,Z,mi),(Br||Ee.receiveShadow!==X.receiveShadow)&&(Ee.receiveShadow=X.receiveShadow,Lt.setValue(I,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&k.environment!==null&&(Kt.envMapIntensity.value=k.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=EA()),Br){if(Lt.setValue(I,"toneMappingExposure",R.toneMappingExposure),Ee.needsLights&&Sb(Kt,co),Se&&G.fog===!0&&ke.refreshFogUniforms(Kt,Se),ke.refreshMaterialUniforms(Kt,G,se,le,M.state.transmissionRenderTarget[y.id]),Ee.needsLights&&Ee.lightProbeGrid){let Ft=Ee.lightProbeGrid;Kt.probesSH.value=Ft.texture,Kt.probesMin.value.copy(Ft.boundingBox.min),Kt.probesMax.value.copy(Ft.boundingBox.max),Kt.probesResolution.value.copy(Ft.resolution)}_a.upload(I,sg(Ee),Kt,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_a.upload(I,sg(Ee),Kt,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Lt.setValue(I,"center",X.center),Lt.setValue(I,"modelViewMatrix",X.modelViewMatrix),Lt.setValue(I,"normalMatrix",X.normalMatrix),Lt.setValue(I,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){let Ft=G.uniformsGroups;for(let Vr=0,ho=Ft.length;Vr<ho;Vr++){let ag=Ft[Vr];oe.update(ag,mi),oe.bind(ag,mi)}}return mi}function Sb(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function wb(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(y,k,Z){let G=B.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),B.get(y.texture).__webglTexture=k,B.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,k){let Z=B.get(y);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,Z=0){ee=y,q=k,z=Z;let G=null,X=!1,Se=!1;if(y){let Me=B.get(y);if(Me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,Me.__webglFramebuffer),de.copy(y.viewport),pe.copy(y.scissor),nt=y.scissorTest,_.viewport(de),_.scissor(pe),_.setScissorTest(nt),V=-1;return}else if(Me.__webglFramebuffer===void 0)K.setupRenderTarget(y);else if(Me.__hasExternalTextures)K.rebindTextures(y,B.get(y.texture).__webglTexture,B.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ot=y.depthTexture;if(Me.__boundDepthTexture!==ot){if(ot!==null&&B.has(ot)&&(y.width!==ot.image.width||y.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(y)}}let Ne=y.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);let Ue=B.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?G=Ue[k][Z]:G=Ue[k],X=!0):y.samples>0&&K.useMultisampledRTT(y)===!1?G=B.get(y).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[Z]:G=Ue,de.copy(y.viewport),pe.copy(y.scissor),nt=y.scissorTest}else de.copy(be).multiplyScalar(se).floor(),pe.copy(De).multiplyScalar(se).floor(),nt=Te;if(Z!==0&&(G=j),_.bindFramebuffer(I.FRAMEBUFFER,G)&&_.drawBuffers(y,G),_.viewport(de),_.scissor(pe),_.setScissorTest(nt),X){let Me=B.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Me.__webglTexture,Z)}else if(Se){let Me=k;for(let Ne=0;Ne<y.textures.length;Ne++){let Ue=B.get(y.textures[Ne]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ne,Ue.__webglTexture,Z,Me)}}else if(y!==null&&Z!==0){let Me=B.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Me.__webglTexture,Z)}V=-1},this.readRenderTargetPixels=function(y,k,Z,G,X,Se,Ae,Me=0){if(!(y&&y.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=B.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){_.bindFramebuffer(I.FRAMEBUFFER,Ne);try{let Ue=y.textures[Me],ot=Ue.format,pt=Ue.type;if(y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me),!S.textureFormatReadable(ot)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!S.textureTypeReadable(pt)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-G&&Z>=0&&Z<=y.height-X&&I.readPixels(k,Z,G,X,ge.convert(ot),ge.convert(pt),Se)}finally{let Ue=ee!==null?B.get(ee).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(y,k,Z,G,X,Se,Ae,Me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=B.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne)if(k>=0&&k<=y.width-G&&Z>=0&&Z<=y.height-X){_.bindFramebuffer(I.FRAMEBUFFER,Ne);let Ue=y.textures[Me],ot=Ue.format,pt=Ue.type;if(y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me),!S.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!S.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,He),I.bufferData(I.PIXEL_PACK_BUFFER,Se.byteLength,I.STREAM_READ),I.readPixels(k,Z,G,X,ge.convert(ot),ge.convert(pt),0);let Rt=ee!==null?B.get(ee).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Rt);let $t=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Sy(I,$t,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,He),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Se),I.deleteBuffer(He),I.deleteSync($t),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,k=null,Z=0){let G=Math.pow(2,-Z),X=Math.floor(y.image.width*G),Se=Math.floor(y.image.height*G),Ae=k!==null?k.x:0,Me=k!==null?k.y:0;K.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,Ae,Me,X,Se),_.unbindTexture()},this.copyTextureToTexture=function(y,k,Z=null,G=null,X=0,Se=0){let Ae,Me,Ne,Ue,ot,pt,He,Rt,$t,Yt=y.isCompressedTexture?y.mipmaps[Se]:y.image;if(Z!==null)Ae=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,Ue=Z.min.x,ot=Z.min.y,pt=Z.isBox3?Z.min.z:0;else{let Kt=Math.pow(2,-X);Ae=Math.floor(Yt.width*Kt),Me=Math.floor(Yt.height*Kt),y.isDataArrayTexture?Ne=Yt.depth:y.isData3DTexture?Ne=Math.floor(Yt.depth*Kt):Ne=1,Ue=0,ot=0,pt=0}G!==null?(He=G.x,Rt=G.y,$t=G.z):(He=0,Rt=0,$t=0);let Ot=ge.convert(k.format),Pn=ge.convert(k.type),Ee;k.isData3DTexture?(K.setTexture3D(k,0),Ee=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(K.setTexture2DArray(k,0),Ee=I.TEXTURE_2D_ARRAY):(K.setTexture2D(k,0),Ee=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);let ti=_.getParameter(I.UNPACK_ROW_LENGTH),St=_.getParameter(I.UNPACK_IMAGE_HEIGHT),mi=_.getParameter(I.UNPACK_SKIP_PIXELS),Wi=_.getParameter(I.UNPACK_SKIP_ROWS),Br=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,Yt.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Yt.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),_.pixelStorei(I.UNPACK_SKIP_ROWS,ot),_.pixelStorei(I.UNPACK_SKIP_IMAGES,pt);let co=y.isDataArrayTexture||y.isData3DTexture,Lt=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){let Kt=B.get(y),Ur=B.get(k),Ft=B.get(Kt.__renderTarget),Vr=B.get(Ur.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,Ft.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let ho=0;ho<Ne;ho++)co&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.get(y).__webglTexture,X,pt+ho),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.get(k).__webglTexture,Se,$t+ho)),I.blitFramebuffer(Ue,ot,Ae,Me,He,Rt,Ae,Me,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||y.isRenderTargetTexture||B.has(y)){let Kt=B.get(y),Ur=B.get(k);_.bindFramebuffer(I.READ_FRAMEBUFFER,Q),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,D);for(let Ft=0;Ft<Ne;Ft++)co?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Kt.__webglTexture,X,pt+Ft):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Kt.__webglTexture,X),Lt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ur.__webglTexture,Se,$t+Ft):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ur.__webglTexture,Se),X!==0?I.blitFramebuffer(Ue,ot,Ae,Me,He,Rt,Ae,Me,I.COLOR_BUFFER_BIT,I.NEAREST):Lt?I.copyTexSubImage3D(Ee,Se,He,Rt,$t+Ft,Ue,ot,Ae,Me):I.copyTexSubImage2D(Ee,Se,He,Rt,Ue,ot,Ae,Me);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Lt?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Ee,Se,He,Rt,$t,Ae,Me,Ne,Ot,Pn,Yt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,Se,He,Rt,$t,Ae,Me,Ne,Ot,Yt.data):I.texSubImage3D(Ee,Se,He,Rt,$t,Ae,Me,Ne,Ot,Pn,Yt):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Se,He,Rt,Ae,Me,Ot,Pn,Yt.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Se,He,Rt,Yt.width,Yt.height,Ot,Yt.data):I.texSubImage2D(I.TEXTURE_2D,Se,He,Rt,Ae,Me,Ot,Pn,Yt);_.pixelStorei(I.UNPACK_ROW_LENGTH,ti),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St),_.pixelStorei(I.UNPACK_SKIP_PIXELS,mi),_.pixelStorei(I.UNPACK_SKIP_ROWS,Wi),_.pixelStorei(I.UNPACK_SKIP_IMAGES,Br),Se===0&&k.generateMipmaps&&I.generateMipmap(Ee),_.unbindTexture()},this.initRenderTarget=function(y){B.get(y).__webglFramebuffer===void 0&&K.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?K.setTextureCube(y,0):y.isData3DTexture?K.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?K.setTexture2DArray(y,0):K.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){q=0,z=0,ee=null,_.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var AA=["sectionEl"],PA=["bgCanvas"],RA=["axisLine"],IA=["track"],DA=["viewport"],OA=["node"],LA=(i,e)=>e.title.en;function NA(i,e){if(i&1&&(F(0,"span",33),$(1),U()),i&2){let t=Ve(2);H(),Oe(t.tab()==="pro"?t.i18n.t("parcours.badge_current"):t.i18n.t("parcours.badge_progress"))}}function FA(i,e){if(i&1&&(F(0,"a",36),Je(1,"img",41),F(2,"span",42)(3,"mat-icon"),$(4,"open_in_new"),U()()()),i&2){let t=Ve().$implicit,n=Ve();ut("href",t.credentialUrl,qn),It("aria-label",n.i18n.t("parcours.cert_preview")+" "+t.title[n.i18n.currentLang()]),H(),ut("src",t.previewUrl,qn)("alt",t.title[n.i18n.currentLang()])}}function kA(i,e){if(i&1&&(F(0,"a",37)(1,"mat-icon"),$(2,"picture_as_pdf"),U(),F(3,"span"),$(4,"PDF"),U()()),i&2){let t=Ve().$implicit,n=Ve();ut("href",t.credentialUrl,qn),It("aria-label",n.i18n.t("parcours.cert_preview")+" "+t.title[n.i18n.currentLang()])}}function BA(i,e){if(i&1&&(F(0,"a",39)(1,"mat-icon"),$(2,"open_in_new"),U(),$(3),U()),i&2){let t=Ve().$implicit,n=Ve();ut("href",t.credentialUrl,qn),H(3),Pt(" ",n.i18n.t("parcours.cert_preview")," ")}}function UA(i,e){if(i&1&&(F(0,"span",43),$(1),U()),i&2){let t=e.$implicit;H(),Oe(t)}}function VA(i,e){if(i&1&&(F(0,"div",40),fn(1,UA,2,1,"span",43,Mc),U()),i&2){let t=Ve().$implicit;H(),pn(t.tags)}}function zA(i,e){if(i&1){let t=ni();F(0,"div",27,5)(2,"div",28),Qe("click",function(){let r=rn(t).$index,s=Ve();return sn(s.scrollToNode(r))}),Je(3,"div",29),U(),F(4,"div",30)(5,"div",31)(6,"span",32),$(7),U(),Vt(8,NA,2,1,"span",33),U(),F(9,"h3",34),$(10),U(),F(11,"p",35)(12,"mat-icon"),$(13),U(),$(14),U(),Vt(15,FA,5,4,"a",36)(16,kA,5,2,"a",37),F(17,"p",38),$(18),U(),Vt(19,BA,4,2,"a",39),Vt(20,VA,3,0,"div",40),U()()}if(i&2){let t=e.$implicit,n=e.$index,r=Ve();At("timeline-node--active",r.activeIdx()===n)("timeline-node--academic",r.tab()==="academic")("timeline-node--certifications",r.tab()==="certifications"),H(7),Oe(t.year[r.i18n.currentLang()]),H(),zt(t.current?8:-1),H(2),Oe(t.title[r.i18n.currentLang()]),H(3),Oe(r.tab()==="pro"?"business":r.tab()==="academic"?"location_city":"verified"),H(),Pt(" ",t.place[r.i18n.currentLang()]," "),H(),zt(t.previewType==="image"&&t.previewUrl?15:t.previewType==="pdf"?16:-1),H(3),Oe(t.description[r.i18n.currentLang()]),H(),zt(t.credentialUrl?19:-1),H(),zt(t.tags?20:-1)}}mr.registerPlugin(Ac);var HA=[{year:{en:"May 2025 \u2013 August 2025",fr:"Mai 2025 \u2013 Ao\xFBt 2025"},title:{en:"Software Developer Intern",fr:"D\xE9veloppeur logiciel"},place:{en:"ORABANK-TOGO \u2014 Lom\xE9",fr:"ORABANK-TOGO \u2014 Lom\xE9"},description:{en:"Software development internship at ORABANK-TOGO. Built a web application that automates change request file creation with a configurable approval workflow.",fr:"Stage en programmation logiciel \xE0 ORABANK-TOGO. D\xE9veloppement d'une application web d'automatisation de la cr\xE9ation de fiche de changement avec un workflow d'approbation param\xE9trable."},tags:["Angular","Spring Boot","Workflow"],current:!0},{year:{en:"July 2024 \u2013 August 2024",fr:"Juillet 2024 \u2013 Ao\xFBt 2024"},title:{en:"Software Developer Intern",fr:"D\xE9veloppeur logiciel"},place:{en:"ORABANK-TOGO \u2014 Lom\xE9",fr:"ORABANK-TOGO \u2014 Lom\xE9"},description:{en:"Software development internship at ORABANK-TOGO. Developed a banking reconciliation web application with Angular and Spring Boot.",fr:"Stage en programmation logiciel \xE0 ORABANK-TOGO. D\xE9veloppement d'une application web de rapprochements bancaires avec les technologies Angular et Spring Boot."},tags:["Angular","Spring Boot","Banking"]},{year:{en:"July 2023 \u2013 August 2023",fr:"Juillet 2023 \u2013 Ao\xFBt 2023"},title:{en:"IT Technician Intern",fr:"Technicien Informatique"},place:{en:"Clinique BIASA \u2014 Lom\xE9",fr:"Clinique BIASA \u2014 Lom\xE9"},description:{en:"Software development internship at Clinique BIASA. Provided user support and resolved technical issues.",fr:"Stage en programmation logiciel \xE0 la Clinique BIASA. Support utilisateur et r\xE9solution de probl\xE8mes techniques."},tags:["Support","IT","Troubleshooting"]}],GA=[{year:{en:"2025 \u2013 2027 (In progress)",fr:"2025 \u2013 2027 (En cours)"},title:{en:"Master's in AI and Big Data",fr:"Master en IA et Big Data"},place:{en:"EPL \u2014 Lom\xE9",fr:"EPL \u2014 Lom\xE9"},description:{en:"Master's program focused on artificial intelligence and Big Data.",fr:"Master en IA et Big Data."},tags:["IA","Big Data"],current:!0},{year:{en:"2024 \u2013 2025",fr:"2024 \u2013 2025"},title:{en:"Bachelor's Degree in Computer Engineering",fr:"Licence"},place:{en:"IAI-TOGO \u2014 Lom\xE9",fr:"IAI-TOGO \u2014 Lom\xE9"},description:{en:"Diploma in computer engineering, BAC+3 level.",fr:"Dipl\xF4me d'Ing\xE9nieur des Travaux Informatiques BAC+3."},tags:["Informatique","BAC+3"]},{year:{en:"2022 \u2013 2023",fr:"2022 \u2013 2023"},title:{en:"BAC 2 \u2014 Series C",fr:"BAC 2 \u2014 S\xE9rie C"},place:{en:"Lyc\xE9e moderne d'Adidogom\xE9 1",fr:"Lyc\xE9e moderne d'Adidogom\xE9 1"},description:{en:"Scientific track, Series C.",fr:"S\xE9rie C."},tags:["Sciences","Math\xE9matiques"]}],WA=[{year:{en:"Certificate",fr:"Certificat"},title:{en:"CCNAv7: Switching, Routing, and Wireless Essentials",fr:"CCNAv7 : Switching, Routing, and Wireless Essentials"},place:{en:"Cisco Networking Academy",fr:"Cisco Networking Academy"},description:{en:"Networking certification focused on switching, routing and wireless essentials.",fr:"Certification r\xE9seau ax\xE9e sur les notions essentielles de commutation, routage et r\xE9seaux sans fil."},tags:["Cisco","CCNA","Networking"],credentialUrl:"documents/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.png",previewUrl:"documents/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.png",previewType:"image"},{year:{en:"Certificate",fr:"Certificat"},title:{en:"CCNAv7: Introduction to Networks",fr:"CCNAv7 : Introduction to Networks"},place:{en:"Cisco Networking Academy",fr:"Cisco Networking Academy"},description:{en:"Networking certification covering network fundamentals and introductory CCNA concepts.",fr:"Certification r\xE9seau couvrant les fondamentaux des r\xE9seaux et les premi\xE8res notions CCNA."},tags:["Cisco","CCNA","Networks"],credentialUrl:"documents/CCNA-_Introduction_to_Networks_certificate.png",previewUrl:"documents/CCNA-_Introduction_to_Networks_certificate.png",previewType:"image"},{year:{en:"Certificate",fr:"Certificat"},title:{en:"Certificate of Completion for Free AI Video Generation Course",fr:"Certificate of Completion for Free AI Video Generation Course"},place:{en:"AI Video Generation Course",fr:"AI Video Generation Course"},description:{en:"Course completion certificate focused on AI-assisted video generation.",fr:"Certificat de fin de formation autour de la g\xE9n\xE9ration vid\xE9o assist\xE9e par IA."},tags:["AI","Video","Generation"],credentialUrl:"documents/Free%20AI%20Video%20Generation%20Course_Certificate.png",previewUrl:"documents/Free%20AI%20Video%20Generation%20Course_Certificate.png",previewType:"image"},{year:{en:"Certificate",fr:"Certificat"},title:{en:"Certificate of Completion for Angular Basics",fr:"Certificate of Completion for Angular Basics"},place:{en:"Angular Training",fr:"Formation Angular"},description:{en:"Angular basics certificate covering the fundamentals of modern Angular development.",fr:"Certificat Angular basics couvrant les bases du d\xE9veloppement Angular moderne."},tags:["Angular","Frontend","TypeScript"],credentialUrl:"documents/ANGULAR_CERTIFICATION.png",previewUrl:"documents/ANGULAR_CERTIFICATION.png",previewType:"image"}];var Hu=class i{get nodeWidth(){return typeof window>"u"?340:window.innerWidth<600?280:340}sectionEl;bgCanvas;axisLine;track;viewport;nodeRefs;tab=Nt("pro");isOpen=Nt(!1);scrollLeft=Nt(0);i18n=re(Ln);toggleOpen(){this.isOpen.update(e=>!e),setTimeout(()=>Ac.refresh(),300)}items=In(()=>this.tab()==="pro"?HA:this.tab()==="academic"?GA:WA);atStart=In(()=>this.scrollLeft()<=0);atEnd=In(()=>{let e=(this.items().length-1)*this.nodeWidth;return this.scrollLeft()>=e-10});activeIdx=In(()=>Math.round(this.scrollLeft()/this.nodeWidth));threeRenderer;threeAnimId;threeGeo;threeMat;st;wheelCleanup;constructor(){ws(()=>{this.tab(),this.viewport?.nativeElement&&(this.viewport.nativeElement.scrollLeft=0),this.scrollLeft.set(0),setTimeout(()=>{this.resetAxis(),this.runAnime()},80)})}ngAfterViewInit(){setTimeout(()=>{this.initThree(),this.initGsap(),this.runAnime(),this.initWheel()},150)}initThree(){let e=this.bgCanvas.nativeElement,t=e.parentElement.clientWidth,n=e.parentElement.clientHeight;e.width=t,e.height=n;let r=new va({canvas:e,alpha:!0,antialias:!1});r.setSize(t,n),this.threeRenderer=r;let s=new io,o=new Mn(60,t/n,1,1e3);o.position.z=300;let a=120,l=new Float32Array(a*3),c=new Float32Array(a*2);for(let g=0;g<a;g++)l[g*3]=(Math.random()-.5)*t*2,l[g*3+1]=(Math.random()-.5)*n*2,l[g*3+2]=(Math.random()-.5)*200,c[g*2]=(Math.random()-.5)*.3,c[g*2+1]=(Math.random()-.5)*.3;let d=new ui;d.setAttribute("position",new Wn(l,3));let u=new ca({color:241657,size:2,transparent:!0,opacity:.35});this.threeGeo=d,this.threeMat=u;let h=new Vl(d,u);s.add(h);let f=()=>{this.threeAnimId=requestAnimationFrame(f);let g=d.attributes.position.array;for(let x=0;x<a;x++)g[x*3]+=c[x*2],g[x*3+1]+=c[x*2+1],Math.abs(g[x*3])>t&&(g[x*3]*=-.9),Math.abs(g[x*3+1])>n&&(g[x*3+1]*=-.9);d.attributes.position.needsUpdate=!0,r.render(s,o)};f()}initGsap(){this.st=Ac.create({trigger:this.sectionEl.nativeElement,start:"top 75%",once:!0,onEnter:()=>this.resetAxis()})}resetAxis(){let e=this.axisLine?.nativeElement;e&&mr.fromTo(e,{scaleX:0,transformOrigin:"left center"},{scaleX:1,duration:1.2,ease:"power3.inOut"})}runAnime(){let e=this.nodeRefs?.toArray().map(t=>t.nativeElement);e?.length&&(e.forEach(t=>{t.style.opacity="0",t.style.transform="translateY(20px)"}),Tp(e,{opacity:[0,1],translateY:[20,0],delay:Ep(120,{start:400}),duration:700,ease:"outExpo"}))}initWheel(){let e=this.viewport.nativeElement,t=n=>{Math.abs(n.deltaX)>Math.abs(n.deltaY)||(n.preventDefault(),this.pan(n.deltaY>0?1:-1))};e.addEventListener("wheel",t,{passive:!1}),this.wheelCleanup=()=>e.removeEventListener("wheel",t)}navigate(e){this.pan(e)}pan(e){if(!this.viewport?.nativeElement)return;this.viewport.nativeElement.scrollBy({left:e*this.nodeWidth,behavior:"smooth"})}switchTab(e){this.tab.set(e)}scrollToNode(e){if(!this.viewport?.nativeElement)return;let t=e*this.nodeWidth;this.viewport.nativeElement.scrollTo({left:t,behavior:"smooth"})}onViewportScroll(e){let t=e.target;this.scrollLeft.set(t.scrollLeft)}ngOnDestroy(){this.st?.kill(),this.wheelCleanup?.(),cancelAnimationFrame(this.threeAnimId),this.threeGeo?.dispose(),this.threeMat?.dispose(),this.threeRenderer&&(this.threeRenderer.dispose(),this.threeRenderer.forceContextLoss())}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-parcours"]],viewQuery:function(t,n){if(t&1&&ii(AA,5)(PA,5)(RA,5)(IA,5)(DA,5)(OA,5),t&2){let r;Tt(r=Ct())&&(n.sectionEl=r.first),Tt(r=Ct())&&(n.bgCanvas=r.first),Tt(r=Ct())&&(n.axisLine=r.first),Tt(r=Ct())&&(n.track=r.first),Tt(r=Ct())&&(n.viewport=r.first),Tt(r=Ct())&&(n.nodeRefs=r)}},decls:44,vars:25,consts:[["sectionEl",""],["bgCanvas",""],["viewport",""],["track",""],["axisLine",""],["node",""],["id","parcours",1,"section","parcours"],[1,"parcours__bg"],[1,"parcours__content"],["appReveal","bottom",1,"section-eyebrow"],["appReveal","bottom",1,"section-header-row",3,"revealDelay"],[1,"section-title"],["mat-icon-button","",3,"click"],[1,"collapsible-content"],[1,"collapsible-content__inner"],[1,"parcours__tabs"],["mat-button","",1,"parcours__tab",3,"click"],["mat-button","",1,"parcours__tab","parcours__tab--academic",3,"click"],["mat-button","",1,"parcours__tab","parcours__tab--certifications",3,"click"],["appReveal","bottom",1,"timeline-container",3,"revealDelay"],["mat-icon-button","",1,"nav-btn","nav-btn--prev",3,"click","disabled"],[1,"timeline-viewport",3,"scroll"],[1,"timeline-track"],[1,"timeline-axis"],[1,"timeline-axis-line"],[1,"timeline-node",3,"timeline-node--active","timeline-node--academic","timeline-node--certifications"],["mat-icon-button","",1,"nav-btn","nav-btn--next",3,"click","disabled"],[1,"timeline-node"],[1,"timeline-dot-wrapper",3,"click"],[1,"timeline-dot"],[1,"timeline-card"],[1,"timeline-card-header"],[1,"timeline-year"],[1,"timeline-badge"],[1,"timeline-title"],[1,"timeline-place"],["target","_blank","rel","noopener noreferrer",1,"certificate-preview","certificate-preview--png",3,"href"],["target","_blank","rel","noopener noreferrer",1,"certificate-preview","certificate-preview--pdf",3,"href"],[1,"timeline-desc"],["mat-stroked-button","","target","_blank","rel","noopener noreferrer",1,"certificate-link",3,"href"],[1,"timeline-tags"],["loading","lazy",3,"src","alt"],[1,"certificate-preview__open"],[1,"timeline-tag"]],template:function(t,n){t&1&&(F(0,"section",6,0),Je(2,"canvas",7,1),F(4,"div",8)(5,"p",9),$(6),U(),F(7,"div",10)(8,"h2",11),$(9),U(),F(10,"button",12),Qe("click",function(){return n.toggleOpen()}),F(11,"mat-icon"),$(12),U()()(),F(13,"div",13)(14,"div",14)(15,"div",15)(16,"button",16),Qe("click",function(){return n.switchTab("pro")}),F(17,"mat-icon"),$(18,"work_outline"),U(),$(19),U(),F(20,"button",17),Qe("click",function(){return n.switchTab("academic")}),F(21,"mat-icon"),$(22,"school"),U(),$(23),U(),F(24,"button",18),Qe("click",function(){return n.switchTab("certifications")}),F(25,"mat-icon"),$(26,"workspace_premium"),U(),$(27),U()(),F(28,"div",19)(29,"button",20),Qe("click",function(){return n.navigate(-1)}),F(30,"mat-icon"),$(31,"chevron_left"),U()(),F(32,"div",21,2),Qe("scroll",function(s){return n.onViewportScroll(s)}),F(34,"div",22,3)(36,"div",23),Je(37,"div",24,4),U(),fn(39,zA,21,15,"div",25,LA),U()(),F(41,"button",26),Qe("click",function(){return n.navigate(1)}),F(42,"mat-icon"),$(43,"chevron_right"),U()()()()()()()),t&2&&(H(6),Oe(n.i18n.t("parcours.title")),H(),ut("revealDelay",80),H(2),Oe(n.i18n.t("parcours.title")),H(),It("aria-label",n.i18n.t("parcours.aria_toggle")),H(2),Oe(n.isOpen()?"remove":"add"),H(),At("is-open",n.isOpen()),H(3),At("parcours__tab--active",n.tab()==="pro"),H(3),Pt(" ",n.i18n.t("parcours.tab.pro")," "),H(),At("parcours__tab--active",n.tab()==="academic"),H(3),Pt(" ",n.i18n.t("parcours.tab.academic")," "),H(),At("parcours__tab--active",n.tab()==="certifications"),H(3),Pt(" ",n.i18n.t("parcours.tab.certifications")," "),H(),ut("revealDelay",200),H(),ut("disabled",n.atStart()),It("aria-label",n.i18n.t("parcours.aria_prev")),H(8),At("timeline-axis-line--academic",n.tab()==="academic")("timeline-axis-line--certifications",n.tab()==="certifications"),H(2),pn(n.items()),H(2),ut("disabled",n.atEnd()),It("aria-label",n.i18n.t("parcours.aria_next")))},dependencies:[_i,gi,Xr,On,Dn,jn],styles:['@charset "UTF-8";.parcours[_ngcontent-%COMP%]{position:relative;overflow:hidden}.parcours__bg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none}.parcours__content[_ngcontent-%COMP%]{position:relative;z-index:1}.parcours__tabs[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;gap:1rem;margin:3rem 0}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab[_ngcontent-%COMP%]{color:var(--text-muted);border:1px solid var(--border-default);border-radius:999px;padding:.5rem 1.5rem;font-size:.95rem;font-weight:500;transition:all .3s ease;background:var(--bg-900)}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.5rem}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab[_ngcontent-%COMP%]:hover{border-color:var(--primary-400);color:var(--primary-300)}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab--active[_ngcontent-%COMP%]{color:#000106!important;background:var(--primary-400);border-color:var(--primary-400);box-shadow:0 0 12px #03aff966}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab--active.parcours__tab--academic[_ngcontent-%COMP%]{background:#fbbf24;border-color:#fbbf24;box-shadow:0 0 12px #fbbf2466}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab--active.parcours__tab--certifications[_ngcontent-%COMP%]{background:#22c55e;border-color:#22c55e;box-shadow:0 0 12px #22c55e59}.timeline-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;width:100%;max-width:1200px;margin:0 auto}.nav-btn[_ngcontent-%COMP%]{flex-shrink:0;color:var(--text-primary)!important;background:var(--bg-800)!important;border:1px solid var(--border-default)!important;transition:all .2s}.nav-btn[_ngcontent-%COMP%]:not([disabled]):hover{border-color:var(--primary-400)!important;color:var(--primary-400)!important;box-shadow:0 0 12px #03aff94d!important}.timeline-viewport[_ngcontent-%COMP%]{flex:1;position:relative;overflow-x:auto;padding:3rem 0 1rem;mask-image:linear-gradient(to right,transparent,black 5%,black 95%,transparent);-webkit-mask-image:linear-gradient(to right,transparent,black 5%,black 95%,transparent);scroll-behavior:smooth;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}.timeline-viewport[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.timeline-axis[_ngcontent-%COMP%]{position:absolute;top:.9rem;left:0;width:100%;height:2px;z-index:1}.timeline-axis-line[_ngcontent-%COMP%]{width:100%;height:100%;background:linear-gradient(90deg,transparent,var(--primary-400),transparent);opacity:.6;transform-origin:left center}.timeline-axis-line--academic[_ngcontent-%COMP%]{background:linear-gradient(90deg,transparent,#fbbf24,transparent)}.timeline-axis-line--certifications[_ngcontent-%COMP%]{background:linear-gradient(90deg,transparent,#22c55e,transparent)}.timeline-track[_ngcontent-%COMP%]{display:flex;position:relative;z-index:2;width:max-content;will-change:transform}.timeline-node[_ngcontent-%COMP%]{width:340px;box-sizing:border-box;flex-shrink:0;padding:0 1rem;display:flex;flex-direction:column;position:relative;opacity:0;transform:translateY(20px);scroll-snap-align:center}.timeline-dot-wrapper[_ngcontent-%COMP%]{height:2rem;display:flex;align-items:center;justify-content:center;margin-bottom:2rem;cursor:pointer;position:relative;z-index:3}.timeline-dot[_ngcontent-%COMP%]{width:14px;height:14px;border-radius:50%;background:var(--bg-900);border:2px solid var(--border-default);transition:all .3s cubic-bezier(.4,0,.2,1)}.timeline-node[_ngcontent-%COMP%]:hover   .timeline-dot[_ngcontent-%COMP%]{border-color:var(--primary-400);transform:scale(1.3)}.timeline-node--academic[_ngcontent-%COMP%]:hover   .timeline-dot[_ngcontent-%COMP%]{border-color:#fbbf24}.timeline-node--certifications[_ngcontent-%COMP%]:hover   .timeline-dot[_ngcontent-%COMP%]{border-color:#22c55e}.timeline-node--active[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%]{border-color:var(--primary-400);background:var(--primary-400);transform:scale(1.5);box-shadow:0 0 10px #03aff999}.timeline-node--active.timeline-node--academic[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%]{border-color:#fbbf24;background:#fbbf24;box-shadow:0 0 10px #fbbf2499}.timeline-node--active.timeline-node--certifications[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%]{border-color:#22c55e;background:#22c55e;box-shadow:0 0 10px #22c55e8c}.timeline-card[_ngcontent-%COMP%]{background:var(--bg-800);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:1.5rem;box-shadow:var(--shadow-card);transition:border-color .3s;height:100%}.timeline-node[_ngcontent-%COMP%]:hover   .timeline-card[_ngcontent-%COMP%]{border-color:#03aff94d}.timeline-node--academic[_ngcontent-%COMP%]:hover   .timeline-card[_ngcontent-%COMP%]{border-color:#fbbf244d}.timeline-node--certifications[_ngcontent-%COMP%]:hover   .timeline-card[_ngcontent-%COMP%]{border-color:#22c55e4d}.timeline-node--active[_ngcontent-%COMP%]   .timeline-card[_ngcontent-%COMP%]{border-color:var(--primary-400)}.timeline-node--active.timeline-node--academic[_ngcontent-%COMP%]   .timeline-card[_ngcontent-%COMP%]{border-color:#fbbf24}.timeline-node--active.timeline-node--certifications[_ngcontent-%COMP%]   .timeline-card[_ngcontent-%COMP%]{border-color:#22c55e}.timeline-card-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem}.timeline-year[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace;font-size:.85rem;font-weight:600;color:var(--text-secondary)}.timeline-node--active[_ngcontent-%COMP%]   .timeline-year[_ngcontent-%COMP%]{color:var(--primary-300)}.timeline-node--active.timeline-node--academic[_ngcontent-%COMP%]   .timeline-year[_ngcontent-%COMP%]{color:#fbbf24}.timeline-node--active.timeline-node--certifications[_ngcontent-%COMP%]   .timeline-year[_ngcontent-%COMP%]{color:#22c55e}.timeline-badge[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;text-transform:uppercase;padding:.2rem .6rem;border-radius:999px;background:#03aff926;color:var(--primary-300);border:1px solid rgba(3,175,249,.3)}.timeline-node--academic[_ngcontent-%COMP%]   .timeline-badge[_ngcontent-%COMP%]{background:#fbbf241f;color:#fbbf24;border-color:#fbbf244d}.timeline-node--certifications[_ngcontent-%COMP%]   .timeline-badge[_ngcontent-%COMP%]{background:#22c55e1f;color:#22c55e;border-color:#22c55e4d}.timeline-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:700;color:var(--text-primary);margin:0 0 .5rem;line-height:1.4}.timeline-place[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;font-size:.85rem;color:var(--text-muted);margin:0 0 1rem}.timeline-place[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem}.timeline-desc[_ngcontent-%COMP%]{font-size:.9rem;color:var(--text-secondary);line-height:1.6;margin:0 0 1.25rem}.certificate-preview[_ngcontent-%COMP%]{display:block;position:relative;width:100%;aspect-ratio:16/10;margin:.9rem 0 1rem;overflow:hidden;border:1px solid rgba(34,197,94,.22);border-radius:var(--radius-sm);background:#22c55e14;transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease}.certificate-preview[_ngcontent-%COMP%]:hover, .certificate-preview[_ngcontent-%COMP%]:focus-visible{border-color:#22c55e8c;box-shadow:0 0 18px #22c55e2e;transform:translateY(-2px)}.certificate-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:contain;object-position:center}.certificate-preview__open[_ngcontent-%COMP%]{position:absolute;right:.55rem;bottom:.55rem;display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;color:#000106;background:#22c55e;border-radius:50%;box-shadow:0 0 14px #22c55e73}.certificate-preview__open[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:1rem;height:1rem;font-size:1rem}.certificate-preview--pdf[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.6rem;color:#22c55e;text-decoration:none;font-weight:700}.certificate-preview--pdf[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:2rem;height:2rem;font-size:2rem}.certificate-link[_ngcontent-%COMP%]{width:100%;margin:0 0 1rem;color:#22c55e!important;border-color:#22c55e59!important;border-radius:var(--radius-sm)!important}.certificate-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.4rem;font-size:1rem;width:1rem;height:1rem}.certificate-link[_ngcontent-%COMP%]:hover{background:#22c55e1a!important;border-color:#22c55eb3!important}.timeline-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.timeline-tag[_ngcontent-%COMP%]{font-size:.75rem;font-weight:500;padding:.2rem .6rem;border-radius:999px;background:var(--bg-700);color:var(--text-secondary);border:1px solid var(--border-default)}.timeline-node--active[_ngcontent-%COMP%]   .timeline-tag[_ngcontent-%COMP%]{background:#03aff91a;color:var(--primary-300);border-color:#03aff933}.timeline-node--active.timeline-node--academic[_ngcontent-%COMP%]   .timeline-tag[_ngcontent-%COMP%]{background:#fbbf241a;color:#fbbf24;border-color:#fbbf2433}.timeline-node--active.timeline-node--certifications[_ngcontent-%COMP%]   .timeline-tag[_ngcontent-%COMP%]{background:#22c55e1a;color:#22c55e;border-color:#22c55e33}@media(max-width:768px){.timeline-container[_ngcontent-%COMP%]{padding:0 .5rem;gap:.25rem}.nav-btn[_ngcontent-%COMP%]{transform:scale(.85)}}@media(max-width:600px){.timeline-node[_ngcontent-%COMP%]{width:280px}.timeline-container[_ngcontent-%COMP%]{padding:0;gap:0}.nav-btn[_ngcontent-%COMP%]{display:none}}']})};var XA=["pyramidCanvas"];function qA(i,e){if(i&1&&(F(0,"mat-chip",18),$(1),U()),i&2){let t=e.$implicit;H(),Oe(t)}}function YA(i,e){if(i&1&&(F(0,"a",20)(1,"mat-icon"),$(2,"open_in_new"),U(),$(3),U()),i&2){let t=Ve(),n=Ve();ut("href",t.demoUrl,qn),H(3),Pt(" ",n.i18n.t("projects.btn_demo")," ")}}function jA(i,e){if(i&1&&(F(0,"a",20)(1,"mat-icon"),$(2,"code"),U(),$(3),U()),i&2){let t=Ve(),n=Ve();ut("href",t.codeUrl,qn),H(3),Pt(" ",n.i18n.t("projects.btn_code")," ")}}function ZA(i,e){if(i&1){let t=ni();F(0,"div",6)(1,"div",10)(2,"h3",11),$(3),U(),F(4,"div",12)(5,"button",13),Qe("click",function(){rn(t);let r=Ve();return sn(r.prevProject())}),F(6,"mat-icon"),$(7,"chevron_left"),U()(),F(8,"span",14),$(9),U(),F(10,"button",13),Qe("click",function(){rn(t);let r=Ve();return sn(r.nextProject())}),F(11,"mat-icon"),$(12,"chevron_right"),U()()()(),F(13,"p",15),$(14),U(),F(15,"div",16)(16,"p"),$(17),U()(),F(18,"div",17)(19,"mat-chip-set"),fn(20,qA,2,1,"mat-chip",18,Sg),U()(),F(22,"div",19),Vt(23,YA,4,2,"a",20),Vt(24,jA,4,2,"a",20),F(25,"a",21),Qe("click",function(r){let s=rn(t),o=Ve();return r.preventDefault(),sn(o.transitionService.navigate("/projets/"+s.slug))}),$(26),F(27,"mat-icon",22),$(28,"arrow_forward"),U()()()()}if(i&2){let t=e,n=Ve();H(3),Oe(t.title[n.i18n.currentLang()]),H(2),It("aria-label",n.i18n.t("projects.aria_prev")),H(4),po("",n.activeProjectIndex()+1," / ",n.projects.length),H(),It("aria-label",n.i18n.t("projects.aria_next")),H(4),po("",t.role[n.i18n.currentLang()]," \u2022 ",t.duration[n.i18n.currentLang()]),H(3),Pt("",t.summary[n.i18n.currentLang()],"..."),H(2),It("aria-label",n.i18n.t("common.tech_used")),H(),pn(t.tags),H(3),zt(t.demoUrl?23:-1),H(),zt(t.codeUrl?24:-1),H(2),Pt(" ",n.i18n.t("projects.btn_learn_more")," ")}}function $A(i,e){if(i&1){let t=ni();F(0,"div",9)(1,"button",23),Qe("click",function(){rn(t);let r=Ve();return sn(r.prevPage())}),F(2,"mat-icon"),$(3,"chevron_left"),U()(),F(4,"span",24),$(5),U(),F(6,"button",13),Qe("click",function(){rn(t);let r=Ve();return sn(r.nextPage())}),F(7,"mat-icon"),$(8,"chevron_right"),U()()()}if(i&2){let t=Ve();H(),ut("disabled",t.currentPage()===0),H(4),po("",t.currentPage()+1," / ",t.totalPages())}}var Gu=class i{canvasRef;projects=v_;activeProject=Nt(this.projects[0]);currentPage=Nt(0);projectsPerPage=6;transitionService=re(Ic);i18n=re(Ln);totalPages=In(()=>Math.ceil(this.projects.length/this.projectsPerPage));currentPyramidProjects=In(()=>{let e=this.currentPage()*this.projectsPerPage;return this.projects.slice(e,e+this.projectsPerPage)});activeProjectIndex=In(()=>this.projects.findIndex(e=>e.slug===this.activeProject().slug));scene;camera;renderer;pyramidGroup=new rr;cubeMeshes=[];animId;raycaster=new Zl;mouse=new vt;frame=0;sceneObserver;onResizeBound=this.onResize.bind(this);onClickBound=this.onClick.bind(this);onMouseMoveBound=this.onMouseMove.bind(this);toonGradient;pyramidRowsPerPage=3;defaultColorPalettes=[[{top:5227511,front:166097,right:87963},{top:8508666,front:240116,right:161725},{top:11789820,front:2733814,right:166097},{top:9489145,front:2001125,right:870305},{top:8445674,front:44225,right:24676},{top:11725810,front:2541274,right:33679}],[{top:12891645,front:8141549,right:4988309},{top:10980346,front:7153881,right:3868516},{top:14538494,front:9133302,right:5972406},{top:15772668,front:12592851,right:8788367},{top:16109822,front:14239471,right:10624175},{top:15324671,front:9647082,right:7020968}],[{top:8843180,front:1483594,right:1332013},{top:11006928,front:366185,right:413243},{top:10090212,front:889992,right:1265226},{top:12318672,front:2278750,right:1467700},{top:13433841,front:1357990,right:1138265},{top:14285213,front:6660877,right:3560212}]];activeColorPalettes=[{top:16769154,front:16763432,right:16361509},{top:16622767,front:16007006,right:12456508},{top:11006928,front:1096065,right:292951}];ngAfterViewInit(){this.pyramidGroup=new rr;let e=this.canvasRef.nativeElement;if(typeof IntersectionObserver>"u"){this.initScene();return}this.sceneObserver=new IntersectionObserver(t=>{t[0]?.isIntersecting&&(this.sceneObserver?.disconnect(),this.sceneObserver=void 0,this.initScene())},{rootMargin:"200px"}),this.sceneObserver.observe(e)}makeToonGradient(){let e=document.createElement("canvas");e.width=4,e.height=1;let t=e.getContext("2d");["#404040","#808080","#c0c0c0","#ffffff"].forEach((s,o)=>{t.fillStyle=s,t.fillRect(o,0,1,1)});let r=new da(e);return r.minFilter=nn,r.magFilter=nn,r.generateMipmaps=!1,r}initScene(){let e=this.canvasRef.nativeElement,t=e.clientWidth||460,n=e.clientHeight||380,r=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=768;this.scene=new io,this.scene.add(this.pyramidGroup),this.toonGradient=this.makeToonGradient(),this.camera=new Mn(40,t/n,.1,100),this.camera.position.set(5,6,8),this.camera.lookAt(0,1.2,0),this.renderer=new va({canvas:e,antialias:!r,alpha:!0,powerPreference:"low-power"}),this.renderer.setSize(t,n),this.renderer.setPixelRatio(r?1:Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!r,this.scene.add(new jl(16777215,.9));let s=new ua(16777215,1.4);s.position.set(4,8,6),s.castShadow=!r,this.scene.add(s);let o=new ua(11197951,.4);o.position.set(-5,2,-3),this.scene.add(o),this.buildPyramid(),e.addEventListener("click",this.onClickBound),e.addEventListener("mousemove",this.onMouseMoveBound),window.addEventListener("resize",this.onResizeBound),this.loop()}makeNumberTexture(e){let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");return n?(n.clearRect(0,0,128,128),n.fillStyle="rgba(255,255,255,0.92)",n.font="bold 72px Inter, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(e).padStart(2,"0"),64,68),new da(t)):null}makeMaterials(e,t){let n=(r,s)=>new Wl(ce({color:r,gradientMap:this.toonGradient},s?{map:s}:{}));return[n(e.right),n(e.right),n(e.top),n(2080),t?n(e.front,t):n(e.front),n(e.right)]}getDefaultColors(e,t){let n=this.defaultColorPalettes[e%this.defaultColorPalettes.length];return n[t%n.length]}getActiveColors(e){return this.activeColorPalettes[e%this.activeColorPalettes.length]}framePyramid(e,t){if(!this.camera)return;let n=Math.max(e,1)*t;this.camera.position.set(5,n+4,8),this.camera.lookAt(0,n/2,0),this.camera.updateProjectionMatrix()}buildPyramid(){for(;this.pyramidGroup.children.length;)this.pyramidGroup.remove(this.pyramidGroup.children[0]);this.cubeMeshes=[];let e=1.35,t=this.currentPyramidProjects(),n=this.currentPage(),r=n*this.projectsPerPage,s=0,o=0;for(let a=0;a<this.pyramidRowsPerPage&&s<t.length;a++){let l=this.pyramidRowsPerPage-a,c=Math.min(l,t.length-s),d=-((c-1)*e)/2;o=a+1;for(let u=0;u<c;u++){let h=s,f=r+h,g=t[h],x=this.makeNumberTexture(f+1),m=this.getDefaultColors(n,h),p=new Fr(e,e,e),C=this.makeMaterials(m,x),E=new Xn(p,C),b=d+u*e,w=a*e+e/2;E.position.set(b,w,0),E.userData={project:g,page:n,localIndex:h,globalIndex:f},E.castShadow=!0,E.receiveShadow=!0;let M=new so({color:1710638,side:An}),A=new Xn(new Fr(e*1.1,e*1.1,e*1.1),M);E.add(A),this.pyramidGroup.add(E),this.cubeMeshes.push(E),s++}}this.framePyramid(o,e)}loop(){this.animId=requestAnimationFrame(()=>this.loop()),this.frame++;let e=this.activeProject().slug,t=new mt;this.cubeMeshes.forEach(n=>{let r=n.userData.page,s=n.userData.localIndex,o=n.userData.project?.slug===e,a=o?this.getActiveColors(r):this.getDefaultColors(r,s),l=n.material,c=[a.right,a.right,a.top,2080,a.front,a.right];l.forEach((u,h)=>u.color.lerp(t.setHex(c[h]),.1));let d=o?1.05:1;n.scale.setScalar(n.scale.x+(d-n.scale.x)*.12)}),this.renderer.render(this.scene,this.camera)}ndc(e){let t=this.canvasRef.nativeElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1}onClick(e){this.ndc(e),this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.raycaster.intersectObjects(this.cubeMeshes,!0);if(t.length){let n=t[0].object;for(;n.parent&&!n.userData.project;)n=n.parent;let r=n.userData.project;r&&this.activeProject.set(r)}}onMouseMove(e){this.ndc(e),this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.raycaster.intersectObjects(this.cubeMeshes,!0);this.canvasRef.nativeElement.style.cursor=t.length?"pointer":"default"}onResize(){let e=this.canvasRef.nativeElement;this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight)}selectProject(e){this.activeProject.set(e)}nextProject(){this.gotoProjectIndex((this.activeProjectIndex()+1)%this.projects.length)}prevProject(){this.gotoProjectIndex((this.activeProjectIndex()-1+this.projects.length)%this.projects.length)}gotoProjectIndex(e){let t=Math.floor(e/this.projectsPerPage);t!==this.currentPage()&&(this.currentPage.set(t),this.buildPyramid()),this.activeProject.set(this.projects[e])}nextPage(){this.currentPage.set((this.currentPage()+1)%this.totalPages()),this.buildPyramid(),this.activeProject.set(this.currentPyramidProjects()[0])}prevPage(){this.currentPage.set((this.currentPage()-1+this.totalPages())%this.totalPages()),this.buildPyramid(),this.activeProject.set(this.currentPyramidProjects()[0])}ngOnDestroy(){this.sceneObserver?.disconnect(),cancelAnimationFrame(this.animId),this.cubeMeshes.forEach(t=>{t.geometry.dispose(),t.material.forEach(n=>n.dispose())}),this.toonGradient?.dispose(),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss());let e=this.canvasRef?.nativeElement;e&&(e.removeEventListener("click",this.onClickBound),e.removeEventListener("mousemove",this.onMouseMoveBound)),window.removeEventListener("resize",this.onResizeBound)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-projects"]],viewQuery:function(t,n){if(t&1&&ii(XA,5),t&2){let r;Tt(r=Ct())&&(n.canvasRef=r.first)}},decls:12,vars:4,consts:[["pyramidCanvas",""],["id","projets",1,"section","projects"],["appReveal","bottom",1,"section-eyebrow"],["appReveal","bottom",1,"section-title",3,"revealDelay"],[1,"projects__layout"],["appReveal","left",1,"projects__details"],[1,"project-details"],["appReveal","right",1,"projects__pyramid-container"],[1,"pyramid-canvas"],[1,"pyramid-pagination"],[1,"project-details__header"],[1,"project-details__title"],[1,"project-details__nav"],["mat-icon-button","",3,"click"],[1,"project-details__nav-count"],[1,"project-details__meta"],[1,"project-details__desc"],[1,"project-details__tags"],["disabled",""],[1,"project-details__actions"],["mat-button","",3,"href"],["mat-button","","color","primary",3,"click"],["iconPositionEnd",""],["mat-icon-button","",3,"click","disabled"],[1,"pyramid-pagination__text"]],template:function(t,n){if(t&1&&(F(0,"section",1)(1,"p",2),$(2,"Portfolio"),U(),F(3,"h2",3),$(4),U(),F(5,"div",4)(6,"div",5),Vt(7,ZA,29,12,"div",6),U(),F(8,"div",7),Je(9,"canvas",8,0),Vt(11,$A,9,3,"div",9),U()()()),t&2){let r;H(3),ut("revealDelay",80),H(),Oe(n.i18n.t("projects.title")),H(3),zt((r=n.activeProject())?7:-1,r),H(4),zt(n.totalPages()>1?11:-1)}},dependencies:[_i,gi,Xr,On,Dn,__,m_,g_,jn],styles:['@charset "UTF-8";.projects[_ngcontent-%COMP%]{background-color:var(--bg-900)}.projects__layout[_ngcontent-%COMP%]{margin-top:2.5rem;display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center}.projects__details[_ngcontent-%COMP%]{display:flex;flex-direction:column}.projects__pyramid-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.pyramid-canvas[_ngcontent-%COMP%]{width:100%;height:400px;border-radius:var(--radius-md);display:block}.project-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-right:1rem}.project-details__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.75rem 1.5rem;margin-bottom:.5rem}.project-details__title[_ngcontent-%COMP%]{color:var(--text-primary);font-size:2rem;font-weight:700;margin:0;letter-spacing:-.02em}.project-details__nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;flex-shrink:0}.project-details__nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--primary-400)!important}.project-details__nav-count[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-secondary);font-family:Roboto Mono,ui-monospace,monospace;min-width:3.5rem;text-align:center}.project-details__meta[_ngcontent-%COMP%]{color:var(--primary-400);font-size:.95rem;font-weight:500;margin-bottom:1.5rem;font-family:Roboto Mono,ui-monospace,monospace}.project-details__desc[_ngcontent-%COMP%]{margin-bottom:1.5rem}.project-details__desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-secondary);line-height:1.75;font-size:1rem}.project-details__tags[_ngcontent-%COMP%]{margin-bottom:2rem}mat-chip[_ngcontent-%COMP%]{background:#03aff914!important;color:var(--primary-300)!important;border:1px solid rgba(3,175,249,.2)!important;font-size:.75rem!important;font-weight:500!important;font-family:Roboto Mono,ui-monospace,monospace!important}.project-details__actions[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}.project-details__actions[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]{color:var(--text-muted)!important;font-size:.9rem!important;font-weight:500!important;transition:color .2s!important}.project-details__actions[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem}.project-details__actions[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:hover{color:var(--primary-400)!important}.project-details__actions[_ngcontent-%COMP%]   a[color=primary][_ngcontent-%COMP%]{color:var(--primary-400)!important;font-weight:600!important}.project-details__actions[_ngcontent-%COMP%]   a[color=primary][_ngcontent-%COMP%]:hover{color:var(--primary-200)!important;text-shadow:0 0 8px rgba(3,175,249,.35)}.pyramid-pagination[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin-top:.5rem}.pyramid-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--primary-400)!important}.pyramid-pagination__text[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-secondary);font-family:Roboto Mono,ui-monospace,monospace}@media(max-width:992px){.projects__layout[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:2rem;text-align:center}.project-details__header[_ngcontent-%COMP%], .project-details__actions[_ngcontent-%COMP%], .pyramid-pagination[_ngcontent-%COMP%]{justify-content:center}.projects__pyramid-container[_ngcontent-%COMP%]{order:-1}.pyramid-canvas[_ngcontent-%COMP%]{height:320px}}@media(max-width:600px){.project-details__actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;width:100%}.project-details__actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%;text-align:center;justify-content:center}}']})};var cc=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=en({type:i});static \u0275inj=Qt({imports:[Yg,Rc,wn]})}return i})();var JA=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),QA={passive:!0},ib=(()=>{class i{_platform=re(Vn);_ngZone=re(hn);_renderer=re(Di).createRenderer(null,null);_styleLoader=re(Es);_monitoredElements=new Map;constructor(){}monitor(t){if(!this._platform.isBrowser)return cg;this._styleLoader.load(JA);let n=Ea(t),r=this._monitoredElements.get(n);if(r)return r.subject;let s=new Jt,o="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(o)?(n.classList.add(o),this._ngZone.run(()=>s.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(o)&&(n.classList.remove(o),this._ngZone.run(()=>s.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",a,QA)));return this._monitoredElements.set(n,{subject:s,unlisten:l}),s}stopMonitoring(t){let n=Ea(t),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((t,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Sn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var rb=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=en({type:i});static \u0275inj=Qt({})}return i})();var sb=new dn("MAT_INPUT_VALUE_ACCESSOR");var eP=["button","checkbox","file","hidden","image","radio","range","reset","submit"],tP=new dn("MAT_INPUT_CONFIG"),ob=(()=>{class i{_elementRef=re(un);_platform=re(Vn);ngControl=re(n_,{optional:!0,self:!0});_autofillMonitor=re(ib);_ngZone=re(hn);_formField=re(p_,{optional:!0});_renderer=re(Xi);_uid=re(mo).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=re(tP,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new Jt;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=As(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(gr.required)??!1}set required(t){this._required=As(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&hf().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=As(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>hf().has(t));constructor(){let t=re(s_,{optional:!0}),n=re(Pc,{optional:!0}),r=re(h_),s=re(sb,{optional:!0,self:!0}),o=this._elementRef.nativeElement,a=o.nodeName.toLowerCase();s?Mg(s.value)?this._signalBasedValueAccessor=s:this._inputValueAccessor=s:this._inputValueAccessor=o,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(o,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new u_(r,this.ngControl,n,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=o.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ws(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=t,t?n.setAttribute("placeholder",t):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){eP.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,n=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let n=this._elementRef.nativeElement;t.length?n.setAttribute("aria-describedby",t.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let n=t.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||i)};static \u0275dir=Yn({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&Qe("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(Sc("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),It("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),At("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Oi]},exportAs:["matInput"],features:[Ta([{provide:f_,useExisting:i}]),_c]})}return i})(),ab=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=en({type:i});static \u0275inj=Qt({imports:[cc,cc,rb,wn]})}return i})();var iP=["submitButton"],rP=(i,e)=>e.labelKey;function sP(i,e){if(i&1&&(F(0,"a",21),$(1),U()),i&2){let t=Ve().$implicit;ut("href",t.href,qn),H(),Oe(t.value)}}function oP(i,e){if(i&1&&(F(0,"span"),$(1),U()),i&2){let t=Ve().$implicit;H(),Oe(t.value)}}function aP(i,e){if(i&1&&(F(0,"li")(1,"mat-icon"),$(2),U(),F(3,"div")(4,"span",20),$(5),U(),Vt(6,sP,2,2,"a",21)(7,oP,2,1,"span"),U()()),i&2){let t=e.$implicit,n=Ve();H(2),Oe(t.icon),H(3),Oe(n.i18n.t(t.labelKey)),H(),zt(t.href?6:7)}}function lP(i,e){if(i&1&&(F(0,"mat-error"),$(1),U()),i&2){let t=Ve();H(),Oe(t.i18n.t("contact.error.name"))}}function cP(i,e){if(i&1&&(F(0,"mat-error"),$(1),U()),i&2){let t=Ve();H(),Oe(t.i18n.t("contact.error.email"))}}function dP(i,e){if(i&1&&(F(0,"mat-error"),$(1),U()),i&2){let t=Ve();H(),Oe(t.i18n.t("contact.error.message"))}}function hP(i,e){if(i&1&&$(0),i&2){let t=Ve();Pt(" ",t.i18n.t("contact.btn_sending")," ")}}function uP(i,e){if(i&1&&(F(0,"span",18),$(1),F(2,"mat-icon"),$(3,"send"),U()()),i&2){let t=Ve();H(),Pt(" ",t.i18n.t("contact.btn_send")," ")}}function fP(i,e){if(i&1&&(F(0,"p",19)(1,"mat-icon"),$(2,"check_circle"),U(),$(3),U()),i&2){let t=Ve();H(3),Pt(" ",t.i18n.t("contact.success")," ")}}var lb="charlyeklu27@gmail.com",Wu=class i{fb=new c_;submitButton=Og("submitButton");i18n=re(Ln);sending=Nt(!1);submitted=Nt(!1);contactInfo=[{icon:"mail",labelKey:"contact.info.email",value:lb,href:`mailto:${lb}`},{icon:"link",labelKey:"contact.info.github",value:"github.com/CharlyEKLU",href:"https://github.com/CharlyEKLU"},{icon:"phone",labelKey:"contact.info.phone",value:"(+228) 90 51 56 63",href:"tel:+22890515663"}];location=In(()=>({city:"Lom\xE9, Togo",timezone:"GMT (UTC+0)",availability:this.i18n.t("contact.info.availability")}));form=this.fb.nonNullable.group({name:["",[gr.required,gr.minLength(2)]],email:["",[gr.required,gr.email]],message:["",[gr.required,gr.minLength(10)]]});async onSubmit(){if(this.form.invalid){this.form.markAllAsTouched();return}let e=this.submitButton()?.nativeElement;e&&yi(e,{scaleX:[1,.94,1],scaleY:[1,.94,1]},{duration:.35,ease:"easeOut"}),this.sending.set(!0);let{name:t,email:n,message:r}=this.form.getRawValue();try{let s=await fetch("https://formspree.io/f/xdapdzon",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t,email:n,message:r})});s.ok?(this.sending.set(!1),this.submitted.set(!0),this.form.reset(),setTimeout(()=>this.submitted.set(!1),6e3)):(this.sending.set(!1),console.error("Formspree error",await s.text()))}catch(s){this.sending.set(!1),console.error("Formspree connection error",s)}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-contact"]],viewQuery:function(t,n){t&1&&wg(n.submitButton,iP,5),t&2&&Tg()},decls:40,vars:19,consts:[["submitButton",""],["id","contact",1,"section","contact"],["appReveal","bottom",1,"section-eyebrow"],["appReveal","bottom",1,"section-title",3,"revealDelay"],[1,"contact__layout"],["appReveal","left",1,"contact__info"],[1,"contact__lead"],[1,"contact__list-wrapper"],[1,"contact__list"],[1,"contact__charly"],["src","images/CHARLY_HIRE.png","alt","Hire Charly","loading","lazy"],[1,"contact__map-legend"],["appReveal","right",1,"contact__form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","name","required","",3,"placeholder"],["matInput","","type","email","formControlName","email","required","",3,"placeholder"],["matInput","","rows","5","formControlName","message","required","",3,"placeholder"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[1,"button-content"],[1,"contact__success"],[1,"contact__list-label"],[3,"href"]],template:function(t,n){t&1&&(F(0,"section",1)(1,"p",2),$(2,"Contact"),U(),F(3,"h2",3),$(4),U(),F(5,"div",4)(6,"div",5)(7,"p",6),$(8),U(),F(9,"div",7)(10,"ul",8),fn(11,aP,8,3,"li",null,rP),U(),F(13,"div",9),Je(14,"img",10),U()(),F(15,"p",11)(16,"mat-icon"),$(17,"location_on"),U(),$(18),U()(),F(19,"form",12),Qe("ngSubmit",function(){return n.onSubmit()}),F(20,"mat-form-field",13)(21,"mat-label"),$(22),U(),Je(23,"input",14),Vt(24,lP,2,1,"mat-error"),U(),F(25,"mat-form-field",13)(26,"mat-label"),$(27),U(),Je(28,"input",15),Vt(29,cP,2,1,"mat-error"),U(),F(30,"mat-form-field",13)(31,"mat-label"),$(32),U(),Je(33,"textarea",16),Vt(34,dP,2,1,"mat-error"),U(),F(35,"button",17,0),Vt(37,hP,1,1)(38,uP,4,1,"span",18),U(),Vt(39,fP,4,1,"p",19),U()()()),t&2&&(H(3),ut("revealDelay",80),H(),Oe(n.i18n.t("contact.title")),H(4),Pt(" ",n.i18n.t("contact.subtitle")," "),H(3),pn(n.contactInfo),H(7),Eg(" ",n.location().city,"\xA0\xB7\xA0",n.location().timezone,"\xA0\xB7\xA0",n.location().availability," "),H(),ut("formGroup",n.form),H(3),Oe(n.i18n.t("contact.form.name")),H(),ut("placeholder",n.i18n.t("contact.form.name_placeholder")),H(),zt(n.form.controls.name.invalid&&n.form.controls.name.touched?24:-1),H(3),Oe(n.i18n.t("contact.form.email")),H(),ut("placeholder",n.i18n.t("contact.form.email_placeholder")),H(),zt(n.form.controls.email.invalid&&n.form.controls.email.touched?29:-1),H(3),Oe(n.i18n.t("contact.form.message")),H(),ut("placeholder",n.i18n.t("contact.form.message_placeholder")),H(),zt(n.form.controls.message.invalid&&n.form.controls.message.touched?34:-1),H(),ut("disabled",n.sending()),H(2),zt(n.sending()?37:38),H(2),zt(n.submitted()?39:-1))},dependencies:[d_,o_,t_,i_,r_,l_,Pc,a_,cc,Rc,uf,ff,ab,ob,_i,gi,On,Dn,jn],styles:['@charset "UTF-8";.contact__layout[_ngcontent-%COMP%]{margin-top:2rem;display:grid;grid-template-columns:.9fr 1.1fr;gap:3rem;align-items:start}.contact__lead[_ngcontent-%COMP%]{color:var(--text-secondary);line-height:1.75;margin-bottom:2rem}.contact__list-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;margin-bottom:2rem}.contact__charly[_ngcontent-%COMP%]{flex-shrink:0;width:130px}.contact__charly[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 4px 12px rgba(3,175,249,.2))}.contact__list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1.25rem}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-400);filter:drop-shadow(0 0 6px rgba(3,175,249,.35))}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--text-primary)}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;transition:color .2s}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-300);text-decoration:none}.contact__list-label[_ngcontent-%COMP%]{font-size:.72rem;text-transform:uppercase;letter-spacing:.07em;color:var(--text-muted);font-weight:500}.contact__map-legend[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;margin:1.5rem 0 0;font-size:.78rem;color:var(--text-muted)}.contact__map-legend[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem;color:var(--primary-400)}.contact__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.contact__form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.contact__form[_ngcontent-%COMP%]   .mdc-text-field[_ngcontent-%COMP%]{background:var(--bg-800)!important;border-radius:var(--radius-sm)!important}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-start;margin-top:1rem;padding:1.5rem 2.5rem!important;font-size:1rem!important;display:inline-flex!important;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--primary-700),var(--primary-400))!important;color:#000106!important;font-weight:600!important;box-shadow:var(--glow-primary)!important;border-radius:var(--radius-sm)!important;transition:box-shadow .2s,filter .2s,transform .2s!important}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{box-shadow:var(--glow-strong)!important;filter:brightness(1.1);transform:translateY(-2px)}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:0!important}.contact__success[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin-top:1rem;color:var(--success);font-size:.9rem;font-weight:500}@media(max-width:900px){.contact__layout[_ngcontent-%COMP%]{grid-template-columns:1fr;text-align:center}.contact__list-wrapper[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex-direction:column;text-align:center;justify-content:center}.contact__map-legend[_ngcontent-%COMP%]{justify-content:center}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:center}}']})};var Xu=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-home"]],decls:11,vars:0,consts:[[1,"page-section"],[1,"page-section","page-section--tinted"]],template:function(t,n){t&1&&(Je(0,"app-hero"),F(1,"div",0),Je(2,"app-about"),U(),F(3,"div",1),Je(4,"app-skills"),U(),F(5,"div",0),Je(6,"app-parcours"),U(),F(7,"div",1),Je(8,"app-projects"),U(),F(9,"div",1),Je(10,"app-contact"),U())},dependencies:[_d,vd,Cd,Hu,Gu,Wu],styles:["[_nghost-%COMP%]{display:block}.page-section--tinted[_ngcontent-%COMP%]{background:var(--mat-sys-surface-container-lowest)}"]})};var cb=[{path:"",component:Xu},{path:"projets/:slug",loadComponent:()=>import("./chunk-O6J6CP7Z.js").then(i=>i.ProjectDetail)},{path:"**",redirectTo:""}];var db={providers:[pg(),Dg(),x_(),Hg(cb,Gg({scrollPositionRestoration:"enabled",anchorScrolling:"enabled"}))]};var pP=["*",[["mat-toolbar-row"]]],mP=["*","mat-toolbar-row"],gP=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=Yn({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),hb=(()=>{class i{_elementRef=re(un);_platform=re(Vn);_document=re(yn);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["mat-toolbar"]],contentQueries:function(n,r,s){if(n&1&&Tc(s,gP,5),n&2){let o;Tt(o=Ct())&&(r._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,r){n&2&&(Wr(r.color?"mat-"+r.color:""),At("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:mP,decls:2,vars:0,template:function(n,r){n&1&&(Gr(pP),qi(0),qi(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var ub=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=en({type:i});static \u0275inj=Qt({imports:[wn]})}return i})();var MP=["mat-menu-item",""],SP=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],wP=["mat-icon, [matMenuItemIcon]","*"];function TP(i,e){i&1&&(gc(),F(0,"svg",2),Je(1,"polygon",3),U())}var CP=["*"];function EP(i,e){if(i&1){let t=ni();Hr(0,"div",0),wc("click",function(){rn(t);let r=Ve();return sn(r.closed.emit("click"))})("animationstart",function(r){rn(t);let s=Ve();return sn(s._onAnimationStart(r.animationName))})("animationend",function(r){rn(t);let s=Ve();return sn(s._onAnimationDone(r.animationName))})("animationcancel",function(r){rn(t);let s=Ve();return sn(s._onAnimationDone(r.animationName))}),Hr(1,"div",1),qi(2),fo()()}if(i&2){let t=Ve();Wr(t._classList),At("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Sc("id",t.panelId),It("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var Jm=new dn("MAT_MENU_PANEL"),dc=(()=>{class i{_elementRef=re(un);_document=re(yn);_focusMonitor=re(Aa);_parentMenu=re(Jm,{optional:!0});_changeDetectorRef=re(Cs);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new Jt;_focused=new Jt;_highlighted=!1;_triggersSubmenu=!1;constructor(){re(Es).load(Qg),this._parentMenu?.addItem?.(this)}focus(t,n){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,n):this._getHostElement().focus(n),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),n=t.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<n.length;r++)n[r].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(n,r){n&1&&Qe("click",function(o){return r._checkDisabled(o)})("mouseenter",function(){return r._handleMouseEnter()}),n&2&&(It("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),At("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",Oi],disableRipple:[2,"disableRipple","disableRipple",Oi]},exportAs:["matMenuItem"],attrs:MP,ngContentSelectors:wP,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(n,r){n&1&&(Gr(SP),qi(0),F(1,"span",0),qi(2,1),U(),Je(3,"div",1),Vt(4,TP,2,0,":svg:svg",2)),n&2&&(H(3),ut("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),H(),zt(r._triggersSubmenu?4:-1))},dependencies:[Jg],encapsulation:2,changeDetection:0})}return i})();var AP=new dn("MatMenuContent");var PP=new dn("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Km="_mat-menu-enter",qu="_mat-menu-exit",ba=(()=>{class i{_elementRef=re(un);_changeDetectorRef=re(Cs);_injector=re(Rn);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=go();_allItems;_directDescendantItems=new gg;_classList={};_panelAnimationState="void";_animationDone=new Jt;_isAnimating=Nt(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let n=this._previousPanelClass,r=ce({},this._classList);n&&n.length&&n.split(" ").forEach(s=>{r[s]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(s=>{r[s]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new Ss;close=this.closed;panelId=re(mo).getId("mat-menu-panel-");constructor(){let t=re(PP);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Zg(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Sa(this._directDescendantItems),pc(t=>fc(...t.map(n=>n._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let n=this._keyManager;if(this._panelAnimationState==="enter"&&n.activeItem?._hasFocus()){let r=t.toArray(),s=Math.max(0,Math.min(r.length-1,n.activeItemIndex||0));r[s]&&!r[s].disabled?n.setActiveItem(s):n.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Sa(this._directDescendantItems),pc(n=>fc(...n.map(r=>r._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let n=t.keyCode,r=this._keyManager;switch(n){case 27:Ec(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(n===38||n===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=pr(()=>{let n=this._resolvePanel();if(!n||!n.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(t).setFirstItemActive(),!r.activeItem&&n&&n.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,n=this.yPosition){this._classList=Ze(ce({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":n==="above","mat-menu-below":n==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let n=t===qu;(n||t===Km)&&(n&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(n?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Km||t===qu)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let n=this._resolvePanel();n&&(n.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(qu),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Km:qu)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Sa(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(n=>n._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["mat-menu"]],contentQueries:function(n,r,s){if(n&1&&Tc(s,AP,5)(s,dc,5)(s,dc,4),n&2){let o;Tt(o=Ct())&&(r.lazyContent=o.first),Tt(o=Ct())&&(r._allItems=o),Tt(o=Ct())&&(r.items=o)}},viewQuery:function(n,r){if(n&1&&ii(wa,5),n&2){let s;Tt(s=Ct())&&(r.templateRef=s.first)}},hostVars:3,hostBindings:function(n,r){n&2&&It("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Oi],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:Oi(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ta([{provide:Jm,useExisting:i}])],ngContentSelectors:CP,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(n,r){n&1&&(Gr(),bg(0,EP,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),RP=new dn("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=re(Rn);return()=>Oo(i)}});var ya=new WeakMap,IP=(()=>{class i{_canHaveBackdrop;_element=re(un);_viewContainerRef=re(Ts);_menuItemInstance=re(dc,{optional:!0,self:!0});_dir=re(_o,{optional:!0});_focusMonitor=re(Aa);_ngZone=re(hn);_injector=re(Rn);_scrollStrategy=re(RP);_changeDetectorRef=re(Cs);_animationsDisabled=go();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=zr.EMPTY;_menuCloseSubscription=zr.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(n=>{this._destroyMenu(n),(n==="click"||n==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let n=re(Jm,{optional:!0});this._parentMaterialMenu=n instanceof ba?n:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ya.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let n=this._menu;if(this._menuOpen||!n)return;this._pendingRemoval?.unsubscribe();let r=ya.get(n);ya.set(n,this),r&&r!==this&&r._closeMenu();let s=this._createOverlay(n),o=s.getConfig(),a=o.positionStrategy;this._setPosition(n,a),this._canHaveBackdrop?o.hasBackdrop=n.hasBackdrop==null?!this._triggersSubmenu():n.hasBackdrop:o.hasBackdrop=n.hasBackdrop??!1,s.hasAttached()||(s.attach(this._getPortal(n)),n.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),n.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,n.direction=this.dir,t&&n.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),n instanceof ba&&(n._setIsOpen(!0),n._directDescendantItems.changes.pipe(Ii(n.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(t,n){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,n):this._element.nativeElement.focus(n)}_destroyMenu(t){let n=this._overlayRef,r=this._menu;!n||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof ba&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(dg(1)).subscribe(()=>{n.detach(),ya.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(n.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&ya.delete(r),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let n=this._getOverlayConfig(t);this._subscribeToPositions(t,n.positionStrategy),this._overlayRef=No(this._injector,n),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof ba&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(t){return new Do({positionStrategy:Lo(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,n){t.setPositionClasses&&n.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let s=r.connectionPair.overlayX==="start"?"after":"before",o=r.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(s,o)})})}_setPosition(t,n){let[r,s]=t.xPosition==="before"?["end","start"]:["start","end"],[o,a]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[o,a],[d,u]=[r,s],h=0;if(this._triggersSubmenu()){if(u=r=t.xPosition==="before"?"start":"end",s=d=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let f=this._parentMaterialMenu.items.first;this._parentInnerPadding=f?f._getHostElement().offsetTop:0}h=o==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(l=o==="top"?"bottom":"top",c=a==="top"?"bottom":"top");n.withPositions([{originX:r,originY:l,overlayX:d,overlayY:o,offsetY:h},{originX:s,originY:l,overlayX:u,overlayY:o,offsetY:h},{originX:r,originY:c,overlayX:d,overlayY:a,offsetY:-h},{originX:s,originY:c,overlayX:u,overlayY:a,offsetY:-h}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),n=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ma(),s=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(uo(o=>this._menuOpen&&o!==this._menuItemInstance)):Ma();return fc(t,r,s,n)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Io(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return ya.get(t)===this}_triggerIsAriaDisabled(){return Oi(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(n){xc()};static \u0275dir=Yn({type:i})}return i})(),mb=(()=>{class i extends IP{_cleanupTouchstart;_hoverSubscription=zr.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new Ss;onMenuOpen=this.menuOpened;menuClosed=new Ss;onMenuClose=this.menuClosed;constructor(){super(!0);let t=re(Xi);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",n=>{Xg(n)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){Wg(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let n=t.keyCode;(n===13||n===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(n===39&&this.dir==="ltr"||n===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(n){return new(n||i)};static \u0275dir=Yn({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(n,r){n&1&&Qe("click",function(o){return r._handleClick(o)})("mousedown",function(o){return r._handleMousedown(o)})("keydown",function(o){return r._handleKeydown(o)}),n&2&&It("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[yc]})}return i})();var gb=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=en({type:i});static \u0275inj=Qt({imports:[e_,ul,wn,zs]})}return i})();var _b=(i,e)=>e.fragment;function OP(i,e){if(i&1){let t=ni();F(0,"a",15),Qe("click",function(r){let s=rn(t).$implicit,o=Ve();return sn(o.handleNavClick(r,s.fragment))}),$(1),U()}if(i&2){let t=e.$implicit,n=Ve();ut("fragment",t.fragment),H(),Oe(n.i18n.t(t.key))}}function LP(i,e){if(i&1){let t=ni();F(0,"a",16),Qe("click",function(r){let s=rn(t).$implicit,o=Ve();return sn(o.handleNavClick(r,s.fragment))}),$(1),U()}if(i&2){let t=e.$implicit,n=Ve();ut("fragment",t.fragment),H(),Oe(n.i18n.t(t.key))}}var Yu=class i{i18n=re(Ln);router=re(Vg);transitionService=re(Ic);scrolled=Nt(!1);heroHeight;links=[{key:"nav.home",fragment:"accueil"},{key:"nav.about",fragment:"a-propos"},{key:"nav.skills",fragment:"competences"},{key:"nav.parcours",fragment:"parcours"},{key:"nav.projects",fragment:"projets"}];ngAfterViewInit(){}onScroll(){this.scrolled.set(window.scrollY>this.solidThreshold())}onResize(){this.heroHeight=void 0,this.onScroll()}solidThreshold(){if(this.heroHeight===void 0){let e=document.querySelector(".hero");this.heroHeight=e?e.offsetHeight:0}return this.heroHeight>0?this.heroHeight-80:24}handleNavClick(e,t){this.router.url==="/"||this.router.url.startsWith("/#")||(e.preventDefault(),this.transitionService.navigate("/",t))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-header"]],hostBindings:function(t,n){t&1&&Qe("scroll",function(){return n.onScroll()},tf)("resize",function(){return n.onResize()},tf)},decls:30,vars:11,consts:[["mobileMenu","matMenu"],[1,"header"],[1,"header__logo"],[1,"header__spacer"],[1,"header__nav"],["mat-button","","routerLink","/",3,"fragment"],["mat-flat-button","","color","primary","routerLink","/","fragment","contact",3,"click"],[1,"header__lang-toggle"],["mat-button","",1,"lang-btn",3,"click"],["aria-hidden","true",1,"lang-btn__icon"],[1,"lang-btn__code"],["mat-icon-button","",1,"header__menu-trigger",3,"matMenuTriggerFor"],["mat-menu-item","","routerLink","/",3,"fragment"],["mat-menu-item","","routerLink","/","fragment","contact",3,"click"],["mat-menu-item","",3,"click"],["mat-button","","routerLink","/",3,"click","fragment"],["mat-menu-item","","routerLink","/",3,"click","fragment"]],template:function(t,n){if(t&1&&(F(0,"mat-toolbar",1)(1,"div",2),$(2,"C.E"),U(),Je(3,"span",3),F(4,"nav",4),fn(5,OP,2,2,"a",5,_b),F(7,"a",6),Qe("click",function(s){return n.handleNavClick(s,"contact")}),$(8),U(),F(9,"div",7)(10,"button",8),Qe("click",function(){return n.i18n.toggleLanguage()}),F(11,"mat-icon",9),$(12,"language"),U(),F(13,"span",10),$(14),Rg(15,"uppercase"),U()()()(),F(16,"button",11)(17,"mat-icon"),$(18,"menu"),U()(),F(19,"mat-menu",null,0),fn(21,LP,2,2,"a",12,_b),F(23,"a",13),Qe("click",function(s){return n.handleNavClick(s,"contact")}),$(24),U(),F(25,"button",14),Qe("click",function(){return n.i18n.toggleLanguage()}),F(26,"mat-icon"),$(27,"language"),U(),F(28,"span"),$(29),U()()()()),t&2){let r=Cg(20);At("header--scrolled",n.scrolled()),H(5),pn(n.links),H(3),Oe(n.i18n.t("nav.contact")),H(2),It("aria-label",n.i18n.t("nav.switch_lang")),H(4),Oe(Ig(15,9,n.i18n.currentLang())),H(2),ut("matMenuTriggerFor",r),It("aria-label",n.i18n.t("nav.menu_open")),H(5),pn(n.links),H(3),Oe(n.i18n.t("nav.contact")),H(5),Oe(n.i18n.t("nav.switch_lang"))}},dependencies:[zg,ub,hb,_i,gi,Xr,On,Dn,gb,ba,dc,mb,Fg],styles:['.header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:100;width:100%;min-height:68px;padding:0 clamp(1rem,4vw,3rem);border-radius:0;background:transparent;color:#0b1220;border:0;box-shadow:none;transition:background-color .25s ease,box-shadow .25s ease,backdrop-filter .25s ease}.header--scrolled[_ngcontent-%COMP%]{background:#000106e0;color:#f4f7ff;box-shadow:0 1px #ffffff0f;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}.header--scrolled[_ngcontent-%COMP%]   .header__logo[_ngcontent-%COMP%]{color:#4da3ff}.header--scrolled[_ngcontent-%COMP%]   .header__logo[_ngcontent-%COMP%]:hover{color:#8cc4ff}.header--scrolled[_ngcontent-%COMP%]   .header__nav[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]{color:#e6ecf7}.header--scrolled[_ngcontent-%COMP%]   .header__nav[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:hover{color:#7fbaff;background:#ffffff14}.header--scrolled[_ngcontent-%COMP%]   .header__nav[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:after{background:#7fbaff}.header--scrolled[_ngcontent-%COMP%]   .lang-btn[_ngcontent-%COMP%]{color:#e6ecf7!important;background:#ffffff0f!important;border-color:#ffffff24!important;box-shadow:none}.header--scrolled[_ngcontent-%COMP%]   .lang-btn[_ngcontent-%COMP%]:hover, .header--scrolled[_ngcontent-%COMP%]   .lang-btn[_ngcontent-%COMP%]:focus-visible{color:#7fbaff!important;background:#ffffff1f!important;border-color:#7fbaff59!important}.header--scrolled[_ngcontent-%COMP%]   .lang-btn__icon[_ngcontent-%COMP%]{color:#7fbaff}.header--scrolled[_ngcontent-%COMP%]   .header__menu-trigger[_ngcontent-%COMP%]{color:#e6ecf7;background:#ffffff0f!important;border-color:#ffffff24!important;box-shadow:none}.header__logo[_ngcontent-%COMP%]{font-family:var(--font-heading);font-weight:800;font-size:1.55rem;letter-spacing:-.02em;color:#0054dd;text-shadow:none;flex:0 0 auto;cursor:pointer;transition:color .2s ease}.header__logo[_ngcontent-%COMP%]:hover{color:#003ea8}.header__spacer[_ngcontent-%COMP%]{flex:1 1 auto}.header__nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.1rem}.header__nav[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]{min-width:0;padding:0 .65rem;color:#172033;font-weight:700;font-size:.72rem;letter-spacing:0;transition:color .2s,background-color .2s;position:relative}.header__nav[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:7px;left:50%;transform:translate(-50%) scaleX(0);width:38%;height:2px;background:#0054dd;border-radius:2px;transition:transform .25s cubic-bezier(.4,0,.2,1)}.header__nav[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:hover{color:#0054dd;background:#0054dd0f}.header__nav[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:hover:after{transform:translate(-50%) scaleX(1)}.header__nav[_ngcontent-%COMP%]   a[mat-flat-button][_ngcontent-%COMP%]{height:38px;background:#0054dd!important;color:#fff!important;font-weight:700!important;font-size:.76rem!important;border-radius:10px!important;box-shadow:0 10px 22px #0054dd38!important;transition:box-shadow .2s,transform .2s,background-color .2s!important;margin-left:.5rem}.header__nav[_ngcontent-%COMP%]   a[mat-flat-button][_ngcontent-%COMP%]:hover{background:#0043b3!important;box-shadow:0 14px 28px #0054dd47!important;transform:translateY(-1px)}.header__lang-toggle[_ngcontent-%COMP%]{margin-left:.4rem}.lang-btn[_ngcontent-%COMP%]{min-width:0!important;height:36px!important;padding:0 .65rem!important;color:#172033!important;border:1px solid rgba(15,23,42,.08)!important;border-radius:999px!important;background:#fff!important;box-shadow:0 6px 16px #0f172a0f;transition:border-color .2s ease,background-color .2s ease,box-shadow .2s ease,color .2s ease}.lang-btn[_ngcontent-%COMP%]:hover, .lang-btn[_ngcontent-%COMP%]:focus-visible{color:#0054dd!important;background:#0054dd0f!important;border-color:#0054dd2e!important;box-shadow:0 8px 20px #0054dd1f}.lang-btn__icon[_ngcontent-%COMP%]{width:18px;height:18px;margin-right:.35rem;font-size:18px;color:#0054dd}.lang-btn__code[_ngcontent-%COMP%]{font-size:.78rem;font-weight:700;line-height:1;letter-spacing:.08em}.header__menu-trigger[_ngcontent-%COMP%]{display:none!important;color:#172033;background:#fff!important;border:1px solid rgba(15,23,42,.08)!important;box-shadow:0 6px 16px #0f172a0f}@media(max-width:768px){.header[_ngcontent-%COMP%]{min-height:60px;padding:0 1rem}.header__nav[_ngcontent-%COMP%]{display:none}.header__menu-trigger[_ngcontent-%COMP%]{display:inline-flex!important;margin-left:auto}}']})};var NP=(i,e)=>e.label;function FP(i,e){if(i&1&&(F(0,"a",9)(1,"mat-icon"),$(2),U(),F(3,"span"),$(4),U()()),i&2){let t=e.$implicit;ut("href",t.href,qn),H(2),Oe(t.icon),H(2),Oe(t.label)}}var ju=class i{i18n=re(Ln);year=new Date().getFullYear();socials=[{icon:"code",label:"GitHub",href:"https://github.com/CharlyEKLU"},{icon:"work",label:"LinkedIn",href:"#"},{icon:"mail",label:"Email",href:"mailto:charlyeklu27@gmail.com"},{icon:"play_circle_filled",label:"YouTube",href:"#"},{icon:"facebook",label:"Facebook",href:"#"},{icon:"music_note",label:"TikTok",href:"#"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-footer"]],decls:14,vars:3,consts:[[1,"footer"],[1,"footer__left"],["src","images/CHARLY_BYE.png","alt","Charly Bye","loading","lazy",1,"footer__character"],[1,"footer__center"],[1,"footer__branding"],["src","images/LOGO C.E.png","alt","Logo C.E.","loading","lazy",1,"footer__logo"],[1,"footer__copy"],[1,"footer__right"],[1,"footer__socials"],["mat-button","","target","_blank","rel","noopener noreferrer",1,"footer__social-link",3,"href"]],template:function(t,n){t&1&&(F(0,"footer",0)(1,"div",1),Je(2,"img",2),U(),F(3,"div",3)(4,"div",4)(5,"span"),$(6),U(),Je(7,"img",5),U(),F(8,"p",6),$(9),U()(),F(10,"div",7)(11,"div",8),fn(12,FP,5,3,"a",9,NP),U()()()),t&2&&(H(6),Pt("",n.i18n.t("footer.designed_by")," Charly EKLU"),H(3),po("\xA9 ",n.year," Charly EKLU. ",n.i18n.t("footer.rights")),H(3),pn(n.socials))},dependencies:[On,Dn,_i,gi,jn],styles:['@charset "UTF-8";.footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;padding:1.5rem 8vw;background:var(--bg-950);border-top:1px solid rgba(3,175,249,.08);color:var(--text-muted)}.footer__left[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:flex-start}.footer__character[_ngcontent-%COMP%]{height:160px;width:auto;object-fit:contain;filter:drop-shadow(0 4px 8px rgba(0,0,0,.5));margin-top:-70px;margin-bottom:-1.5rem;position:relative;z-index:10}.footer__center[_ngcontent-%COMP%]{flex:2;display:flex;flex-direction:column;align-items:center;gap:.5rem}.footer__branding[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;font-size:.9rem;font-weight:500;color:var(--text-primary)}.footer__logo[_ngcontent-%COMP%]{height:64px;width:auto;object-fit:contain}.footer__copy[_ngcontent-%COMP%]{margin:0;font-size:.8rem;letter-spacing:.02em}.footer__right[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:flex-end}.footer__socials[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,auto);gap:.25rem .75rem}.footer__socials[_ngcontent-%COMP%]   .footer__social-link[_ngcontent-%COMP%]{color:var(--text-muted)!important;font-weight:400!important;padding:4px 12px!important;transition:color .2s,filter .2s!important;display:flex;align-items:center;justify-content:flex-start}.footer__socials[_ngcontent-%COMP%]   .footer__social-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:6px}.footer__socials[_ngcontent-%COMP%]   .footer__social-link[_ngcontent-%COMP%]:hover{color:var(--primary-400)!important;filter:drop-shadow(0 0 6px rgba(3,175,249,.45))}@media(max-width:900px){.footer[_ngcontent-%COMP%]{flex-direction:column;text-align:center;gap:3rem}.footer__character[_ngcontent-%COMP%]{margin-top:-40px;height:140px}.footer__left[_ngcontent-%COMP%], .footer__right[_ngcontent-%COMP%]{flex:auto;justify-content:center}.footer__socials[_ngcontent-%COMP%]{justify-content:center}}@media(max-width:600px){.footer__socials[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem}.footer__social-link[_ngcontent-%COMP%]{justify-content:center!important}}']})};var Zu=class i{done=Nt(!1);static \u0275fac=function(t){return new(t||i)};static \u0275prov=Sn({token:i,factory:i.\u0275fac,providedIn:"root"})};var kP=["preloader"],BP=["circuitPath"],$u=class i{preloader;circuitPath;preloaderService=re(Zu);constructor(){typeof window<"u"&&(document.body.style.overflow="hidden")}ngAfterViewInit(){if(!this.circuitPath||!this.preloader)return;let e=this.circuitPath.nativeElement,t=this.preloader.nativeElement,n=e.getTotalLength();mr.set(e,{strokeDasharray:n,strokeDashoffset:n});let r=mr.timeline();r.to(e,{strokeDashoffset:0,duration:1.5,ease:"power2.inOut"}).to(e,{strokeDashoffset:-n,duration:1,ease:"power2.inOut",opacity:0},"+=0.2");let s=new Promise(c=>{if(document.readyState==="complete"){c();return}window.addEventListener("load",()=>c(),{once:!0})}),o=new Promise(c=>r.eventCallback("onComplete",()=>c())),a=!1,l=()=>{a||(a=!0,mr.to(t,{opacity:0,duration:.6,ease:"power2.inOut",onComplete:()=>{t.style.display="none",document.body.style.overflow="",this.preloaderService.done.set(!0)}}))};Promise.all([o,s]).then(l),setTimeout(l,8e3)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-root"]],viewQuery:function(t,n){if(t&1&&ii(kP,5)(BP,5),t&2){let r;Tt(r=Ct())&&(n.preloader=r.first),Tt(r=Ct())&&(n.circuitPath=r.first)}},decls:10,vars:0,consts:[["preloader",""],["circuitPath",""],[1,"preloader"],["viewBox","0 0 300 150"],["d","M 0,75 L 50,75 L 75,25 L 125,125 L 175,25 L 200,75 L 250,75 L 300,75",1,"circuit-path"],[1,"page-transition-overlay"]],template:function(t,n){t&1&&(F(0,"div",2,0),gc(),F(2,"svg",3),Je(3,"path",4,1),U()(),fg(),Je(5,"app-header"),F(6,"main"),Je(7,"router-outlet"),U(),Je(8,"app-footer")(9,"div",5))},dependencies:[Ug,Yu,ju],styles:["[_nghost-%COMP%]{display:block}.preloader[_ngcontent-%COMP%]{position:fixed;inset:0;background:var(--bg-950);z-index:9999;display:flex;align-items:center;justify-content:center;overflow:hidden}.preloader[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:300px;height:150px;overflow:visible}.preloader[_ngcontent-%COMP%]   .circuit-path[_ngcontent-%COMP%]{fill:none;stroke:var(--primary-400);stroke-width:3;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 10px var(--primary-400));opacity:.8}.page-transition-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:var(--bg-950);z-index:10000;transform:translateY(100%);pointer-events:none;overflow:hidden;border-top:2px solid var(--primary-400);box-shadow:0 -10px 30px #03aff933}.page-transition-overlay[_ngcontent-%COMP%]   .transition-scan[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,transparent 0%,var(--primary-400) 40%,#fff 50%,var(--primary-400) 60%,transparent 100%);box-shadow:0 0 20px var(--primary-400),0 0 40px #03aff966;transform-origin:left center;transform:scaleX(0);opacity:0}"]})};Bg($u,db).catch(i=>console.error(i));
