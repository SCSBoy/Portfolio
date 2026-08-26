import{c as tf,d as nf,f as Ec,g as rf,h as sf,i as of}from"./chunk-SQFYRXBB.js";import{$ as a_,A as Kg,B as cf,C as hf,D as go,E as Qt,F as As,G as Jg,H as Qg,I as Wr,J as _o,K as Mn,L as e_,M as pi,N as mi,O as Dn,P as On,Q as Xr,R as Ac,S as Yn,T as Ln,U as t_,V as mr,W as n_,X as i_,Y as r_,Z as s_,_ as o_,a as Ng,aa as Pc,b as Fg,ba as l_,c as kg,ca as c_,d as Ug,da as h_,ea as d_,f as Bg,fa as u_,g as Vg,ga as df,h as zg,ha as uf,i as Hg,ia as f_,j as Gg,ja as p_,k as Wg,ka as Rc,l as Xg,la as m_,m as af,ma as g_,n as Vn,na as __,o as Ea,oa as v_,p as Ca,q as Aa,qa as Ic,r as Cs,s as lf,t as qg,u as Yg,v as jg,w as Cc,x as Zg,y as mo,z as $g}from"./chunk-BJYIDJ7V.js";import{$ as An,$a as yc,$b as Ag,A as cg,Ab as tt,Bb as zr,Cb as fo,Eb as Wi,Fb as Sc,Gb as at,Hb as wc,Ib as Ke,J as Sa,Jb as Hr,K as pc,Kb as Xi,L as Pi,Lb as Tc,Ma as gg,Mb as ti,N as hg,Na as fr,Nb as Tt,Oa as _g,Ob as Et,Q as bn,Qa as vg,Qb as wg,R as Kt,Ra as Y,Rb as Tg,Sb as Eg,T as on,Ub as Pt,V as re,Va as yg,Vb as Gr,W as dg,Wa as pr,Wb as J,Xa as wa,Xb as Le,Y as mc,Ya as Ri,Yb as Rt,Za as Gi,Zb as po,_b as Cg,a as ce,aa as Pn,ab as Ts,ac as Ta,b as je,ba as gc,bb as xg,bc as Pg,c as Ht,ca as ug,cc as Rg,d as Vr,da as Rn,dc as Ig,ea as vn,eb as Mt,f as ag,fb as Jt,g as $t,gb as qn,gc as Dg,ha as Ss,i as lg,ia as an,ib as xc,ic as In,k as Ma,kb as bg,la as fg,ma as Nt,mb as Mg,na as pg,nc as Og,pa as ws,pb as bc,pc as Es,qa as _c,qb as Gt,ra as ef,rb as cn,rc as Ii,sb as hn,ta as ln,tb as Sg,u as fc,ua as mg,ub as Mc,uc as Lg,v as uo,vb as dn,w as Qu,wb as un,xb as gt,yb as B,za as vc,zb as z}from"./chunk-SI2Z3AAC.js";var Tb="@",Eb=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=re(Rn);loadingSchedulerFn=re(Cb,{optional:!0});_engine;constructor(t,n,r,s,o){this.doc=t,this.delegate=n,this.zone=r,this.animationType=s,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-CFYSXUSB.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(r=>{throw new hg(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc);let o=new s(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(t,n){let r=this.delegate.createRenderer(t,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new ff(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let a=o.createRenderer(t,n);s.use(a),this.scheduler??=this.injector.get(pg,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(n){yc()};static \u0275prov=bn({token:i,factory:i.\u0275fac})}return i})(),ff=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,r){this.delegate.insertBefore(e,t,n,r)}removeChild(e,t,n,r){this.delegate.removeChild(e,t,n,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n,r){return this.shouldReplay(t)&&this.replay.push(s=>s.listen(e,t,n,r)),this.delegate.listen(e,t,n,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(Tb)}},Cb=new on("");function y_(i="animations"){return yg("NgAsyncAnimations"),dg([{provide:Ri,useFactory:()=>new Eb(re(vn),re(kg),re(an),i)},{provide:vc,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}function pf(i,e){i.indexOf(e)===-1&&i.push(e)}function Ps(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}var zn=(i,e,t)=>t>e?e:t<i?i:t;var Di=()=>{},jn=()=>{};var Hn={};var Pa=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);var mf=i=>typeof i=="object"&&i!==null;var Ra=i=>/^0[^.\s]+$/u.test(i);function Ia(i){let e;return()=>(e===void 0&&(e=i()),e)}var ni=i=>i;var Rs=(...i)=>i.reduce((e,t)=>n=>t(e(n)));var Is=(i,e,t)=>{let n=e-i;return n?(t-i)/n:1};var Ds=class{constructor(){this.subscriptions=[]}add(e){return pf(this.subscriptions,e),()=>Ps(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let s=0;s<r;s++){let o=this.subscriptions[s];o&&o(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}};var tn=i=>i*1e3,Nn=i=>i/1e3;var Da=(i,e)=>e?i*(1e3/e):0;var x_=(i,e,t)=>{let n=e-i;return((t-i)%n+n)%n+i};var b_=(i,e,t)=>(((1-3*t+3*e)*i+(3*t-6*e))*i+3*e)*i,Ab=1e-7,Pb=12;function Rb(i,e,t,n,r){let s,o,a=0;do o=e+(t-e)/2,s=b_(o,n,r)-i,s>0?t=o:e=o;while(Math.abs(s)>Ab&&++a<Pb);return o}function qr(i,e,t,n){if(i===e&&t===n)return ni;let r=s=>Rb(s,0,1,i,t);return s=>s===0||s===1?s:b_(r(s),e,n)}var Dc=i=>e=>e<=.5?i(2*e)/2:(2-i(2*(1-e)))/2;var Os=i=>e=>1-i(1-e);var Oc=qr(.33,1.53,.69,.99),vo=Os(Oc),Oa=Dc(vo);var La=i=>i>=1?1:(i*=2)<1?.5*vo(i):.5*(2-Math.pow(2,-10*(i-1)));var Na=i=>1-Math.sin(Math.acos(i)),gf=Os(Na),Fa=Dc(Na);var _f=qr(.42,0,1,1),vf=qr(0,0,.58,1),ka=qr(.42,0,.58,1);var Ua=i=>Array.isArray(i)&&typeof i[0]!="number";function Ba(i,e){return Ua(i)?i[x_(0,i.length,e)]:i}var Va=i=>Array.isArray(i)&&typeof i[0]=="number";var M_={linear:ni,easeIn:_f,easeInOut:ka,easeOut:vf,circIn:Na,circInOut:Fa,circOut:gf,backIn:vo,backInOut:Oa,backOut:Oc,anticipate:La},Ib=i=>typeof i=="string",Lc=i=>{if(Va(i)){jn(i.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");let[e,t,n,r]=i;return qr(e,t,n,r)}else if(Ib(i))return jn(M_[i]!==void 0,`Invalid easing type '${i}'`,"invalid-easing-type"),M_[i];return i};var za=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function S_(i){let e=new Set,t=new Set,n=!1,r=!1,s=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),i()),c(o)}let l={schedule:(c,h=!1,u=!1)=>{let f=u&&n?e:t;return h&&s.add(c),f.add(c),c},cancel:c=>{t.delete(c),s.delete(c)},process:c=>{if(o=c,n){r=!0;return}n=!0;let h=e;e=t,t=h,e.forEach(a),e.clear(),n=!1,r&&(r=!1,l.process(c))}};return l}var Db=40;function Nc(i,e){let t=!1,n=!0,r={delta:0,timestamp:0,isProcessing:!1},s=()=>t=!0,o=za.reduce((A,b)=>(A[b]=S_(s),A),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:h,update:u,preRender:d,render:f,postRender:g}=o,y=()=>{let A=Hn.useManualTiming,b=A?r.timestamp:performance.now();t=!1,A||(r.delta=n?1e3/60:Math.max(Math.min(b-r.timestamp,Db),1)),r.timestamp=b,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),h.process(r),u.process(r),d.process(r),f.process(r),g.process(r),r.isProcessing=!1,t&&e&&(n=!1,i(y))},m=()=>{t=!0,n=!0,r.isProcessing||i(y)};return{schedule:za.reduce((A,b)=>{let w=o[b];return A[b]=(M,C=!1,v=!1)=>(t||m(),w.schedule(M,C,v)),A},{}),cancel:A=>{for(let b=0;b<za.length;b++)o[za[b]].cancel(A)},state:r,steps:o}}var{schedule:Fn,cancel:Ha,state:yo,steps:oI}=Nc(typeof requestAnimationFrame<"u"?requestAnimationFrame:ni,!0);var Fc;function Ob(){Fc=void 0}var fn={now:()=>(Fc===void 0&&fn.set(yo.isProcessing||Hn.useManualTiming?yo.timestamp:performance.now()),Fc),set:i=>{Fc=i,queueMicrotask(Ob)}};var w_=i=>e=>typeof e=="string"&&e.startsWith(i),kc=w_("--"),Lb=w_("var(--"),xo=i=>Lb(i)?Nb.test(i.split("/*")[0].trim()):!1,Nb=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function yf(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}var qi={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},gr=je(ce({},qi),{transform:i=>zn(0,1,i)}),Ga=je(ce({},qi),{default:1});var Yr=i=>Math.round(i*1e5)/1e5;var bo=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function T_(i){return i==null}var E_=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;var Mo=(i,e)=>t=>!!(typeof t=="string"&&E_.test(t)&&t.startsWith(i)||e&&!T_(t)&&Object.prototype.hasOwnProperty.call(t,e)),Uc=(i,e,t)=>n=>{if(typeof n!="string")return n;let[r,s,o,a]=n.match(bo);return{[i]:parseFloat(r),[e]:parseFloat(s),[t]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}};var Fb=i=>zn(0,255,i),xf=je(ce({},qi),{transform:i=>Math.round(Fb(i))}),Yi={test:Mo("rgb","red"),parse:Uc("red","green","blue"),transform:({red:i,green:e,blue:t,alpha:n=1})=>"rgba("+xf.transform(i)+", "+xf.transform(e)+", "+xf.transform(t)+", "+Yr(gr.transform(n))+")"};function kb(i){let e="",t="",n="",r="";return i.length>5?(e=i.substring(1,3),t=i.substring(3,5),n=i.substring(5,7),r=i.substring(7,9)):(e=i.substring(1,2),t=i.substring(2,3),n=i.substring(3,4),r=i.substring(4,5),e+=e,t+=t,n+=n,r+=r),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}var Wa={test:Mo("#"),parse:kb,transform:Yi.transform};var Xa=i=>({test:e=>typeof e=="string"&&e.endsWith(i)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${i}`}),Oi=Xa("deg"),jr=Xa("%"),Ee=Xa("px"),C_=Xa("vh"),A_=Xa("vw"),bf=je(ce({},jr),{parse:i=>jr.parse(i)/100,transform:i=>jr.transform(i*100)});var Zr={test:Mo("hsl","hue"),parse:Uc("hue","saturation","lightness"),transform:({hue:i,saturation:e,lightness:t,alpha:n=1})=>"hsla("+Math.round(i)+", "+jr.transform(Yr(e))+", "+jr.transform(Yr(t))+", "+Yr(gr.transform(n))+")"};var Bt={test:i=>Yi.test(i)||Wa.test(i)||Zr.test(i),parse:i=>Yi.test(i)?Yi.parse(i):Zr.test(i)?Zr.parse(i):Wa.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?Yi.transform(i):Zr.transform(i),getAnimatableNone:i=>{let e=Bt.parse(i);return e.alpha=0,Bt.transform(e)}};var P_=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ub(i){return isNaN(i)&&typeof i=="string"&&(i.match(bo)?.length||0)+(i.match(P_)?.length||0)>0}var I_="number",D_="color",Bb="var",Vb="var(",R_="${}",zb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $r(i){let e=i.toString(),t=[],n={color:[],number:[],var:[]},r=[],s=0,a=e.replace(zb,l=>(Bt.test(l)?(n.color.push(s),r.push(D_),t.push(Bt.parse(l))):l.startsWith(Vb)?(n.var.push(s),r.push(Bb),t.push(l)):(n.number.push(s),r.push(I_),t.push(parseFloat(l))),++s,R_)).split(R_);return{values:t,split:a,indexes:n,types:r}}function Hb(i){return $r(i).values}function O_({split:i,types:e}){let t=i.length;return n=>{let r="";for(let s=0;s<t;s++)if(r+=i[s],n[s]!==void 0){let o=e[s];o===I_?r+=Yr(n[s]):o===D_?r+=Bt.transform(n[s]):r+=n[s]}return r}}function Gb(i){return O_($r(i))}var Wb=i=>typeof i=="number"?0:Bt.test(i)?Bt.getAnimatableNone(i):i,Xb=(i,e)=>typeof i=="number"?e?.trim().endsWith("/")?i:0:Wb(i);function qb(i){let e=$r(i);return O_(e)(e.values.map((n,r)=>Xb(n,e.split[r])))}var pn={test:Ub,parse:Hb,createTransformer:Gb,getAnimatableNone:qb};function Mf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i}function L_({hue:i,saturation:e,lightness:t,alpha:n}){i/=360,e/=100,t/=100;let r=0,s=0,o=0;if(!e)r=s=o=t;else{let a=t<.5?t*(1+e):t+e-t*e,l=2*t-a;r=Mf(l,a,i+1/3),s=Mf(l,a,i),o=Mf(l,a,i-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:n}}function So(i,e){return t=>t>0?e:i}var ii=(i,e,t)=>i+(e-i)*t;var Sf=(i,e,t)=>{let n=i*i,r=t*(e*e-n)+n;return r<0?0:Math.sqrt(r)},Yb=[Wa,Yi,Zr],jb=i=>Yb.find(e=>e.test(i));function N_(i){let e=jb(i);if(Di(!!e,`'${i}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!e)return!1;let t=e.parse(i);return e===Zr&&(t=L_(t)),t}var wf=(i,e)=>{let t=N_(i),n=N_(e);if(!t||!n)return So(i,e);let r=ce({},t);return s=>(r.red=Sf(t.red,n.red,s),r.green=Sf(t.green,n.green,s),r.blue=Sf(t.blue,n.blue,s),r.alpha=ii(t.alpha,n.alpha,s),Yi.transform(r))};var Bc=new Set(["none","hidden"]);function F_(i,e){return Bc.has(i)?t=>t<=0?i:e:t=>t>=1?e:i}function Zb(i,e){return t=>ii(i,e,t)}function Vc(i){return typeof i=="number"?Zb:typeof i=="string"?xo(i)?So:Bt.test(i)?wf:Jb:Array.isArray(i)?k_:typeof i=="object"?Bt.test(i)?wf:$b:So}function k_(i,e){let t=[...i],n=t.length,r=i.map((s,o)=>Vc(s)(s,e[o]));return s=>{for(let o=0;o<n;o++)t[o]=r[o](s);return t}}function $b(i,e){let t=ce(ce({},i),e),n={};for(let r in t)i[r]!==void 0&&e[r]!==void 0&&(n[r]=Vc(i[r])(i[r],e[r]));return r=>{for(let s in n)t[s]=n[s](r);return t}}function Kb(i,e){let t=[],n={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){let s=e.types[r],o=i.indexes[s][n[s]],a=i.values[o]??0;t[r]=a,n[s]++}return t}var Jb=(i,e)=>{let t=pn.createTransformer(e),n=$r(i),r=$r(e);return n.indexes.var.length===r.indexes.var.length&&n.indexes.color.length===r.indexes.color.length&&n.indexes.number.length>=r.indexes.number.length?Bc.has(i)&&!r.values.length||Bc.has(e)&&!n.values.length?F_(i,e):Rs(k_(Kb(n,r),r.values),t):(Di(!0,`Complex values '${i}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),So(i,e))};function zc(i,e,t){return typeof i=="number"&&typeof e=="number"&&typeof t=="number"?ii(i,e,t):Vc(i)(i,e)}var U_=i=>{let e=({timestamp:t})=>i(t);return{start:(t=!0)=>Fn.update(e,t),stop:()=>Ha(e),now:()=>yo.isProcessing?yo.timestamp:fn.now()}};var Hc=(i,e,t=10)=>{let n="",r=Math.max(Math.round(e/t),2);for(let s=0;s<r;s++)n+=Math.round(i(s/(r-1))*1e4)/1e4+", ";return`linear(${n.substring(0,n.length-2)})`};function wo(i){let e=0,t=50,n=i.next(e);for(;!n.done&&e<2e4;)e+=t,n=i.next(e);return e>=2e4?1/0:e}function qa(i,e=100,t){let n=t(je(ce({},i),{keyframes:[0,e]})),r=Math.min(wo(n),2e4);return{type:"keyframes",ease:s=>n.next(r*s).value/e,duration:Nn(r)}}var Wt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Cf(i,e){return i*Math.sqrt(1-e*e)}var Qb=12;function eM(i,e,t){let n=t;for(let r=1;r<Qb;r++)n=n-i(n)/e(n);return n}var Ef=.001;function tM({duration:i=Wt.duration,bounce:e=Wt.bounce,velocity:t=Wt.velocity,mass:n=Wt.mass}){let r,s;Di(i<=tn(Wt.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let o=1-e;o=zn(Wt.minDamping,Wt.maxDamping,o),i=zn(Wt.minDuration,Wt.maxDuration,Nn(i)),o<1?(r=c=>{let h=c*o,u=h*i,d=h-t,f=Cf(c,o),g=Math.exp(-u);return Ef-d/f*g},s=c=>{let u=c*o*i,d=u*t+t,f=Math.pow(o,2)*Math.pow(c,2)*i,g=Math.exp(-u),y=Cf(Math.pow(c,2),o);return(-r(c)+Ef>0?-1:1)*((d-f)*g)/y}):(r=c=>{let h=Math.exp(-c*i),u=(c-t)*i+1;return-Ef+h*u},s=c=>{let h=Math.exp(-c*i),u=(t-c)*(i*i);return h*u});let a=5/i,l=eM(r,s,a);if(i=tn(i),isNaN(l))return{stiffness:Wt.stiffness,damping:Wt.damping,duration:i};{let c=Math.pow(l,2)*n;return{stiffness:c,damping:o*2*Math.sqrt(n*c),duration:i}}}var nM=["duration","bounce"],iM=["stiffness","damping","mass"];function B_(i,e){return e.some(t=>i[t]!==void 0)}function rM(i){let e=ce({velocity:Wt.velocity,stiffness:Wt.stiffness,damping:Wt.damping,mass:Wt.mass,isResolvedFromDuration:!1},i);if(!B_(i,iM)&&B_(i,nM))if(e.velocity=0,i.visualDuration){let t=i.visualDuration,n=2*Math.PI/(t*1.2),r=n*n,s=2*zn(.05,1,1-(i.bounce||0))*Math.sqrt(r);e=je(ce({},e),{mass:Wt.mass,stiffness:r,damping:s})}else{let t=tM(je(ce({},i),{velocity:0}));e=je(ce(ce({},e),t),{mass:Wt.mass}),e.isResolvedFromDuration=!0}return e}function _r(i=Wt.visualDuration,e=Wt.bounce){let t=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:e}:i,{restSpeed:n,restDelta:r}=t,s=t.keyframes[0],o=t.keyframes[t.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:h,duration:u,velocity:d,isResolvedFromDuration:f}=rM(je(ce({},t),{velocity:-Nn(t.velocity||0)})),g=d||0,y=c/(2*Math.sqrt(l*h)),m=o-s,p=Nn(Math.sqrt(l/h)),E=Math.abs(m)<5;n||(n=E?Wt.restSpeed.granular:Wt.restSpeed.default),r||(r=E?Wt.restDelta.granular:Wt.restDelta.default);let A,b,w,M,C,v;if(y<1)w=Cf(p,y),M=(g+y*p*m)/w,A=R=>{let P=Math.exp(-y*p*R);return o-P*(M*Math.sin(w*R)+m*Math.cos(w*R))},C=y*p*M+m*w,v=y*p*m-M*w,b=R=>Math.exp(-y*p*R)*(C*Math.sin(w*R)+v*Math.cos(w*R));else if(y===1){A=P=>o-Math.exp(-p*P)*(m+(g+p*m)*P);let R=g+p*m;b=P=>Math.exp(-p*P)*(p*R*P-g)}else{let R=p*Math.sqrt(y*y-1);A=Q=>{let D=Math.exp(-y*p*Q),X=Math.min(R*Q,300);return o-D*((g+y*p*m)*Math.sinh(X)+R*m*Math.cosh(X))/R};let P=(g+y*p*m)/R,N=y*p*P-m*R,j=y*p*m-P*R;b=Q=>{let D=Math.exp(-y*p*Q),X=Math.min(R*Q,300);return D*(N*Math.sinh(X)+j*Math.cosh(X))}}let T={calculatedDuration:f&&u||null,velocity:R=>tn(b(R)),next:R=>{if(!f&&y<1){let N=Math.exp(-y*p*R),j=Math.sin(w*R),Q=Math.cos(w*R),D=o-N*(M*j+m*Q),X=tn(N*(C*j+v*Q));return a.done=Math.abs(X)<=n&&Math.abs(o-D)<=r,a.value=a.done?o:D,a}let P=A(R);if(f)a.done=R>=u;else{let N=tn(b(R));a.done=Math.abs(N)<=n&&Math.abs(o-P)<=r}return a.value=a.done?o:P,a},toString:()=>{let R=Math.min(wo(T),2e4),P=Hc(N=>T.next(R*N).value,R,30);return R+"ms "+P},toTransition:()=>{}};return T}_r.applyToOptions=i=>{let e=qa(i,100,_r);return i.ease=e.ease,i.duration=tn(e.duration),i.type="keyframes",i};var sM=5;function Gc(i,e,t){let n=Math.max(e-sM,0);return Da(t-i(n),e-n)}function Ya({keyframes:i,velocity:e=0,power:t=.8,timeConstant:n=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:h}){let u=i[0],d={done:!1,value:u},f=v=>a!==void 0&&v<a||l!==void 0&&v>l,g=v=>a===void 0?l:l===void 0||Math.abs(a-v)<Math.abs(l-v)?a:l,y=t*e,m=u+y,p=o===void 0?m:o(m);p!==m&&(y=p-u);let E=v=>-y*Math.exp(-v/n),A=v=>p+E(v),b=v=>{let T=E(v),R=A(v);d.done=Math.abs(T)<=c,d.value=d.done?p:R},w,M,C=v=>{f(d.value)&&(w=v,M=_r({keyframes:[d.value,g(d.value)],velocity:Gc(A,v,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:h}))};return C(0),{calculatedDuration:null,next:v=>{let T=!1;return!M&&w===void 0&&(T=!0,b(v),C(v)),w!==void 0&&v>=w?M.next(v-w):(!T&&b(v),d)}}}function oM(i,e,t){let n=[],r=t||Hn.mix||zc,s=i.length-1;for(let o=0;o<s;o++){let a=r(i[o],i[o+1]);if(e){let l=Array.isArray(e)?e[o]||ni:e;a=Rs(l,a)}n.push(a)}return n}function V_(i,e,{clamp:t=!0,ease:n,mixer:r}={}){let s=i.length;if(jn(s===e.length,"Both input and output ranges must be the same length","range-length"),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];let o=i[0]===i[1];i[0]>i[s-1]&&(i=[...i].reverse(),e=[...e].reverse());let a=oM(e,n,r),l=a.length,c=h=>{if(o&&h<i[0])return e[0];let u=0;if(l>1)for(;u<i.length-2&&!(h<i[u+1]);u++);let d=Is(i[u],i[u+1],h);return a[u](d)};return t?h=>c(zn(i[0],i[s-1],h)):c}function ja(i,e){let t=i[i.length-1];for(let n=1;n<=e;n++){let r=Is(0,e,n);i.push(ii(t,1,r))}}function Za(i){let e=[0];return ja(e,i.length-1),e}function z_(i,e){return i.map(t=>t*e)}function aM(i,e){return i.map(()=>e||ka).splice(0,i.length-1)}function Ls({duration:i=300,keyframes:e,times:t,ease:n="easeInOut"}){let r=Ua(n)?n.map(Lc):Lc(n),s={done:!1,value:e[0]},o=z_(t&&t.length===e.length?t:Za(e),i),a=V_(o,e,{ease:Array.isArray(r)?r:aM(e,r)});return{calculatedDuration:i,next:l=>(s.value=a(l),s.done=l>=i,s)}}var lM=i=>i!==null;function Kr(i,{repeat:e,repeatType:t="loop"},n,r=1){let s=i.filter(lM),a=r<0||e&&t!=="loop"&&e%2===1?0:s.length-1;return!a||n===void 0?s[a]:n}var cM={decay:Ya,inertia:Ya,tween:Ls,keyframes:Ls,spring:_r};function Wc(i){typeof i.type=="string"&&(i.type=cM[i.type])}var Jr=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}};var hM=i=>i/100,vr=class extends Jr{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:t}=this.options;t&&t.updatedAt!==fn.now()&&this.tick(fn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Wc(e);let{type:t=Ls,repeat:n=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e,{keyframes:a}=e,l=t||Ls;l!==Ls&&typeof a[0]!="number"&&(this.mixKeyframes=Rs(hM,zc(a[0],a[1])),a=[0,100]);let c=l(je(ce({},e),{keyframes:a}));s==="mirror"&&(this.mirroredGenerator=l(je(ce({},e),{keyframes:[...a].reverse(),velocity:-o}))),c.calculatedDuration===null&&(c.calculatedDuration=wo(c));let{calculatedDuration:h}=c;this.calculatedDuration=h,this.resolvedDuration=h+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:h,repeat:u,repeatType:d,repeatDelay:f,type:g,onUpdate:y,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let p=this.currentTime-c*(this.playbackSpeed>=0?1:-1),E=this.playbackSpeed>=0?p<0:p>r;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let A=this.currentTime,b=n;if(u){let v=Math.min(this.currentTime,r)/a,T=Math.floor(v),R=v%1;!R&&v>=1&&(R=1),R===1&&T--,T=Math.min(T,u+1),T%2&&(d==="reverse"?(R=1-R,f&&(R-=f/a)):d==="mirror"&&(b=o)),A=zn(0,1,R)*a}let w;E?(this.delayState.value=h[0],w=this.delayState):w=b.next(A),s&&!E&&(w.value=s(w.value));let{done:M}=w;!E&&l!==null&&(M=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return C&&g!==Ya&&(w.value=Kr(h,this.options,m,this.speed)),y&&y(w.value),C&&this.finish(),w}then(e,t){return this.finished.then(e,t)}get duration(){return Nn(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Nn(e)}get time(){return Nn(this.currentTime)}set time(e){e=tn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Gc(n=>this.generator.next(n).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(fn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Nn(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=U_,startTime:t}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),this.options.onPlay?.();let n=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=n):this.holdTime!==null?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(fn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}};function H_(i){for(let e=1;e<i.length;e++)i[e]??(i[e]=i[e-1])}var Ns=i=>i*180/Math.PI,Af=i=>{let e=Ns(Math.atan2(i[1],i[0]));return Pf(e)},dM={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:Af,rotateZ:Af,skewX:i=>Ns(Math.atan(i[1])),skewY:i=>Ns(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},Pf=i=>(i=i%360,i<0&&(i+=360),i),G_=Af,W_=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),X_=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),uM={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:W_,scaleY:X_,scale:i=>(W_(i)+X_(i))/2,rotateX:i=>Pf(Ns(Math.atan2(i[6],i[5]))),rotateY:i=>Pf(Ns(Math.atan2(-i[2],i[0]))),rotateZ:G_,rotate:G_,skewX:i=>Ns(Math.atan(i[4])),skewY:i=>Ns(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function Xc(i){return i.includes("scale")?1:0}function qc(i,e){if(!i||i==="none")return Xc(e);let t=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),n,r;if(t)n=uM,r=t;else{let a=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=dM,r=a}if(!r)return Xc(e);let s=n[e],o=r[1].split(",").map(fM);return typeof s=="function"?s(o):o[s]}var q_=(i,e)=>{let{transform:t="none"}=getComputedStyle(i);return qc(t,e)};function fM(i){return parseFloat(i.trim())}var ji=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gi=new Set([...ji,"pathRotation"]);var Rf=i=>i===qi||i===Ee,pM=new Set(["x","y","z"]),mM=ji.filter(i=>!pM.has(i));function Y_(i){let e=[];return mM.forEach(t=>{let n=i.getValue(t);n!==void 0&&(e.push([t,n.get()]),n.set(t.startsWith("scale")?1:0))}),e}var yr={width:({x:i},{paddingLeft:e="0",paddingRight:t="0",boxSizing:n})=>{let r=i.max-i.min;return n==="border-box"?r:r-parseFloat(e)-parseFloat(t)},height:({y:i},{paddingTop:e="0",paddingBottom:t="0",boxSizing:n})=>{let r=i.max-i.min;return n==="border-box"?r:r-parseFloat(e)-parseFloat(t)},top:(i,{top:e})=>parseFloat(e),left:(i,{left:e})=>parseFloat(e),bottom:({y:i},{top:e})=>parseFloat(e)+(i.max-i.min),right:({x:i},{left:e})=>parseFloat(e)+(i.max-i.min),x:(i,{transform:e})=>qc(e,"x"),y:(i,{transform:e})=>qc(e,"y")};yr.translateX=yr.x;yr.translateY=yr.y;var Fs=new Set,If=!1,Df=!1,Of=!1;function j_(){if(Df){let i=Array.from(Fs).filter(n=>n.needsMeasurement),e=new Set(i.map(n=>n.element)),t=new Map;e.forEach(n=>{let r=Y_(n);r.length&&(t.set(n,r),n.render())}),i.forEach(n=>n.measureInitialState()),e.forEach(n=>{n.render();let r=t.get(n);r&&r.forEach(([s,o])=>{n.getValue(s)?.set(o)})}),i.forEach(n=>n.measureEndState()),i.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}Df=!1,If=!1,Fs.forEach(i=>i.complete(Of)),Fs.clear()}function Z_(){Fs.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Df=!0)})}function $_(){Of=!0,Z_(),j_(),Of=!1}var Qr=class{constructor(e,t,n,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Fs.add(this),If||(If=!0,Fn.read(Z_),Fn.resolveKeyframes(j_))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let s=r?.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(n&&t){let a=n.readValue(t,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}H_(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Fs.delete(this)}cancel(){this.state==="scheduled"&&(Fs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}};var K_=i=>i.startsWith("--");function Yc(i,e,t){K_(e)?i.style.setProperty(e,t):i.style[e]=t}var J_={};function jc(i,e){let t=Ia(i);return()=>J_[e]??t()}var Q_=jc(()=>window.ScrollTimeline!==void 0,"scrollTimeline");var Zc=jc(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");var ks=([i,e,t,n])=>`cubic-bezier(${i}, ${e}, ${t}, ${n})`;var Lf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ks([0,.65,.55,1]),circOut:ks([.55,0,1,.45]),backIn:ks([.31,.01,.66,-.59]),backOut:ks([.33,1.53,.69,.99])};function Nf(i,e){if(i)return typeof i=="function"?Zc()?Hc(i,e):"ease-out":Va(i)?ks(i):Array.isArray(i)?i.map(t=>Nf(t,e)||Lf.easeOut):Lf[i]}function e0(i,e,t,{delay:n=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){let h={[e]:t};l&&(h.offset=l);let u=Nf(a,r);Array.isArray(u)&&(h.easing=u);let d={delay:n,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(d.pseudoElement=c),i.animate(h,d)}function Us(i){return typeof i=="function"&&"applyToOptions"in i}function t0(t){var n=t,{type:i}=n,e=Ht(n,["type"]);return Us(i)&&Zc()?i.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}var To=class extends Jr{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,jn(typeof e.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");let c=t0(e);this.animation=e0(t,n,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){let h=Kr(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(h),Yc(t,n,h),this.animation.cancel()}l?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Nn(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Nn(e)}get time(){return Nn(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=tn(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&Q_()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),ni):r(this)}};var n0={anticipate:La,backInOut:Oa,circInOut:Fa};function gM(i){return i in n0}function i0(i){typeof i.ease=="string"&&gM(i.ease)&&(i.ease=n0[i.ease])}var Ff=10,$c=class extends To{constructor(e){i0(e),Wc(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let d=this.options,{motionValue:t,onUpdate:n,onComplete:r,element:s}=d,o=Ht(d,["motionValue","onUpdate","onComplete","element"]);if(!t)return;if(e!==void 0){t.set(e);return}let a=new vr(je(ce({},o),{autoplay:!1})),l=Math.max(Ff,fn.now()-this.startTime),c=zn(0,Ff,l-Ff),h=a.sample(l).value,{name:u}=this.options;s&&u&&Yc(s,u,h),t.setWithVelocity(a.sample(Math.max(0,l-c)).value,h,c),a.stop()}};var kf=(i,e)=>e==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(pn.test(i)||i==="0")&&!i.startsWith("url("));function _M(i){let e=i[0];if(i.length===1)return!0;for(let t=0;t<i.length;t++)if(i[t]!==e)return!0}function r0(i,e,t,n){let r=i[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;let s=i[i.length-1],o=kf(r,e),a=kf(s,e);return Di(o===a,`You are trying to animate ${e} from "${r}" to "${s}". "${o?s:r}" is not an animatable value.`,"value-not-animatable"),!o||!a?!1:_M(i)||(t==="spring"||Us(t))&&n}function $a(i){i.duration=0,i.type="keyframes"}var Kc=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);var vM=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function s0(i){for(let e=0;e<i.length;e++)if(typeof i[e]=="string"&&vM.test(i[e]))return!0;return!1}var yM=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),xM=Ia(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function o0(i){let{motionValue:e,name:t,repeatDelay:n,repeatType:r,damping:s,type:o,keyframes:a}=i,l=e?.owner?.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;let{onUpdate:c,transformTemplate:h}=e.owner.getProps();return xM()&&t&&(Kc.has(t)||yM.has(t)&&s0(a))&&(t!=="transform"||!h)&&!c&&!n&&r!=="mirror"&&s!==0&&o!=="inertia"}var bM=40,Jc=class extends Jr{constructor(d){var f=d,{autoplay:e=!0,delay:t=0,type:n="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:h}=f,u=Ht(f,["autoplay","delay","type","repeat","repeatDelay","repeatType","keyframes","name","motionValue","element"]);super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=fn.now();let g=ce({autoplay:e,delay:t,type:n,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:h},u),y=h?.KeyframeResolver||Qr;this.keyframeResolver=new y(a,(m,p,E)=>this.onKeyframesResolved(m,p,g,!E),l,c,h),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:h}=n;this.resolvedAt=fn.now();let u=!0;r0(e,s,o,a)||(u=!1,(Hn.instantAnimations||!l)&&h?.(Kr(e,n,t)),e[0]=e[e.length-1],$a(n),n.repeat=0);let d=r?this.resolvedAt?this.resolvedAt-this.createdAt>bM?this.resolvedAt:this.createdAt:this.createdAt:void 0,f=je(ce({startTime:d,finalKeyframe:t},n),{keyframes:e}),g=u&&!c&&o0(f),y=f.motionValue?.owner?.current,m;if(g)try{m=new $c(je(ce({},f),{element:y}))}catch{m=new vr(f)}else m=new vr(f);m.finished.then(()=>{this.notifyFinished()}).catch(ni),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),$_()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};var Qc=class{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){let t=this.animations.map(n=>n.attachTimeline(e));return()=>{t.forEach((n,r)=>{n&&n(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return a0(this.animations,"duration")}get iterationDuration(){return a0(this.animations,"iterationDuration")}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}};function a0(i,e){let t=0;for(let n=0;n<i.length;n++){let r=i[n][e];r!==null&&r>t&&(t=r)}return t}var Ka=class extends Qc{then(e,t){return this.finished.finally(e).then(()=>{})}};var l0=30,MM=i=>!isNaN(parseFloat(i)),Uf={current:void 0},eh=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=n=>{let r=fn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=fn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=MM(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ds);let n=this.events[e].add(t);return e==="change"?()=>{n(),Fn.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Uf.current&&Uf.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=fn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>l0)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,l0);return Da(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function _i(i,e){return new eh(i,e)}function th(i,e){if(i?.inherit&&e){let t=i,{inherit:n}=t,r=Ht(t,["inherit"]);return ce(ce({},e),r)}return i}function nh(i,e){let t=i?.[e]??i?.default??i;return t!==i?th(t,i):t}var SM={type:"spring",stiffness:500,damping:25,restSpeed:10},wM=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),TM={type:"keyframes",duration:.8},EM={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},c0=(i,{keyframes:e})=>e.length>2?TM:gi.has(i)?i.startsWith("scale")?wM(e[1]):SM:EM;var CM=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function h0(i){for(let e in i)if(!CM.has(e))return!0;return!1}var ih=(i,e,t,n={},r,s)=>o=>{let a=nh(n,i)||{},l=a.delay||n.delay||0,{elapsed:c=0}=n;c=c-tn(l);let h=je(ce({keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity()},a),{delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:i,motionValue:e,element:s?void 0:r});h0(a)||Object.assign(h,c0(i,h)),h.duration&&(h.duration=tn(h.duration)),h.repeatDelay&&(h.repeatDelay=tn(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let u=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&($a(h),h.delay===0&&(u=!0)),(Hn.instantAnimations||Hn.skipAnimations||r?.shouldSkipAnimations||a.skipAnimations)&&(u=!0,$a(h),h.delay=0),h.allowFlatten=!a.type&&!a.ease,u&&!s&&e.get()!==void 0){let d=Kr(h.keyframes,a);if(d!==void 0){Fn.update(()=>{h.onUpdate(d),h.onComplete()});return}}return a.isSync?new vr(h):new Jc(h)};var AM=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function PM(i){let e=AM.exec(i);if(!e)return[,];let[,t,n,r]=e;return[`--${t??n}`,r]}var RM=4;function Bf(i,e,t=1){jn(t<=RM,`Max CSS variable fallback depth detected in property "${i}". This may indicate a circular fallback dependency.`,"max-css-var-depth");let[n,r]=PM(i);if(!n)return;let s=window.getComputedStyle(e).getPropertyValue(n);if(s){let o=s.trim();return Pa(o)?parseFloat(o):o}return xo(r)?Bf(r,e,t+1):r}function d0(i){let e=[{},{}];return i?.values.forEach((t,n)=>{e[0][n]=t.get(),e[1][n]=t.getVelocity()}),e}function rh(i,e,t,n){if(typeof e=="function"){let[r,s]=d0(n);e=e(t!==void 0?t:i.custom,r,s)}if(typeof e=="string"&&(e=i.variants&&i.variants[e]),typeof e=="function"){let[r,s]=d0(n);e=e(t!==void 0?t:i.custom,r,s)}return e}function u0(i,e,t){let n=i.getProps();return rh(n,e,t!==void 0?t:n.custom,i)}var sh=new Set(["width","height","top","left","right","bottom",...ji]);var f0=i=>Array.isArray(i);function IM(i,e,t){i.hasValue(e)?i.getValue(e).set(t):i.addValue(e,_i(t))}function DM(i){return f0(i)?i[i.length-1]||0:i}function p0(i,e){let o=u0(i,e)||{},{transitionEnd:n={},transition:r={}}=o,s=Ht(o,["transitionEnd","transition"]);s=ce(ce({},s),n);for(let a in s){let l=DM(s[a]);IM(i,a,l)}}var Ft=i=>!!(i&&i.getVelocity);function m0(i){return!!(Ft(i)&&i.add)}function g0(i,e){let t=i.getValue("willChange");if(m0(t))return t.add(e);if(!t&&Hn.WillChange){let n=new Hn.WillChange("auto");i.addValue("willChange",n),n.add(e)}}function Eo(i){return i.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var OM="framerAppearId",_0="data-"+Eo(OM);function v0(i){return i.props[_0]}var LM=typeof window<"u";function NM({protectedKeys:i,needsAnimating:e},t){let n=i.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,n}function Vf(i,e,{delay:t=0,transitionOverride:n,type:r}={}){let g=e,{transition:s,transitionEnd:o}=g,a=Ht(g,["transition","transitionEnd"]),l=i.getDefaultTransition();s=s?th(s,l):l;let c=s?.reduceMotion,h=s?.skipAnimations;n&&(s=n);let u=[],d=r&&i.animationState&&i.animationState.getState()[r],f=s?.path;f&&f.animateVisualElement(i,a,s,t,u);for(let y in a){let m=i.getValue(y,i.latestValues[y]??null),p=a[y];if(p===void 0||d&&NM(d,y))continue;let E=ce({delay:t},nh(s||{},y));h&&(E.skipAnimations=!0);let A=m.get();if(A!==void 0&&!m.isAnimating()&&!Array.isArray(p)&&p===A&&!E.velocity){Fn.update(()=>m.set(p));continue}let b=!1;if(LM&&window.MotionHandoffAnimation){let C=v0(i);if(C){let v=window.MotionHandoffAnimation(C,y,Fn);v!==null&&(E.startTime=v,b=!0)}}g0(i,y);let w=c??i.shouldReduceMotion;m.start(ih(y,m,p,w&&sh.has(y)?{type:!1}:E,i,b));let M=m.animation;M&&u.push(M)}if(o){let y=()=>Fn.update(()=>{o&&p0(i,o)});u.length?Promise.all(u).then(y):y()}return u}var y0={test:i=>i==="auto",parse:i=>i};var oh=i=>e=>e.test(i);var zf=[qi,Ee,jr,Oi,A_,C_,y0],Hf=i=>zf.find(oh(i));function x0(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||Ra(i):!0}var FM=new Set(["brightness","contrast","saturate","opacity"]);function kM(i){let[e,t]=i.slice(0,-1).split("(");if(e==="drop-shadow")return i;let[n]=t.match(bo)||[];if(!n)return i;let r=t.replace(n,""),s=FM.has(e)?1:0;return n!==t&&(s*=100),e+"("+s+r+")"}var UM=/\b([a-z-]*)\(.*?\)/gu,Ja=je(ce({},pn),{getAnimatableNone:i=>{let e=i.match(UM);return e?e.map(kM).join(" "):i}});var Qa=je(ce({},pn),{getAnimatableNone:i=>{let e=pn.parse(i);return pn.createTransformer(i)(e.map(n=>typeof n=="number"?0:typeof n=="object"?je(ce({},n),{alpha:1}):n))}});var Gf=je(ce({},qi),{transform:Math.round});var b0={rotate:Oi,pathRotation:Oi,rotateX:Oi,rotateY:Oi,rotateZ:Oi,scale:Ga,scaleX:Ga,scaleY:Ga,scaleZ:Ga,skew:Oi,skewX:Oi,skewY:Oi,distance:Ee,translateX:Ee,translateY:Ee,translateZ:Ee,x:Ee,y:Ee,z:Ee,perspective:Ee,transformPerspective:Ee,opacity:gr,originX:bf,originY:bf,originZ:Ee};var Bs=je(ce({borderWidth:Ee,borderTopWidth:Ee,borderRightWidth:Ee,borderBottomWidth:Ee,borderLeftWidth:Ee,borderRadius:Ee,borderTopLeftRadius:Ee,borderTopRightRadius:Ee,borderBottomRightRadius:Ee,borderBottomLeftRadius:Ee,width:Ee,maxWidth:Ee,height:Ee,maxHeight:Ee,top:Ee,right:Ee,bottom:Ee,left:Ee,inset:Ee,insetBlock:Ee,insetBlockStart:Ee,insetBlockEnd:Ee,insetInline:Ee,insetInlineStart:Ee,insetInlineEnd:Ee,padding:Ee,paddingTop:Ee,paddingRight:Ee,paddingBottom:Ee,paddingLeft:Ee,paddingBlock:Ee,paddingBlockStart:Ee,paddingBlockEnd:Ee,paddingInline:Ee,paddingInlineStart:Ee,paddingInlineEnd:Ee,margin:Ee,marginTop:Ee,marginRight:Ee,marginBottom:Ee,marginLeft:Ee,marginBlock:Ee,marginBlockStart:Ee,marginBlockEnd:Ee,marginInline:Ee,marginInlineStart:Ee,marginInlineEnd:Ee,fontSize:Ee,backgroundPositionX:Ee,backgroundPositionY:Ee},b0),{zIndex:Gf,fillOpacity:gr,strokeOpacity:gr,numOctaves:Gf});var BM=je(ce({},Bs),{color:Bt,backgroundColor:Bt,outlineColor:Bt,fill:Bt,stroke:Bt,borderColor:Bt,borderTopColor:Bt,borderRightColor:Bt,borderBottomColor:Bt,borderLeftColor:Bt,filter:Ja,WebkitFilter:Ja,mask:Qa,WebkitMask:Qa}),ah=i=>BM[i];var VM=new Set([Ja,Qa]);function lh(i,e){let t=ah(i);return VM.has(t)||(t=pn),t.getAnimatableNone?t.getAnimatableNone(e):void 0}var zM=new Set(["auto","none","0"]);function M0(i,e,t){let n=0,r;for(;n<i.length&&!r;){let s=i[n];typeof s=="string"&&!zM.has(s)&&$r(s).values.length&&(r=i[n]),n++}if(r&&t)for(let s of e)i[s]=lh(t,r)}var ch=class extends Qr{constructor(e,t,n,r,s){super(e,t,n,r,s,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let h=0;h<e.length;h++){let u=e[h];if(typeof u=="string"&&(u=u.trim(),xo(u))){let d=Bf(u,t.current);d!==void 0&&(e[h]=d),h===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!sh.has(n)||e.length!==2)return;let[r,s]=e,o=Hf(r),a=Hf(s),l=yf(r),c=yf(s);if(l!==c&&yr[n]){this.needsMeasurement=!0;return}if(o!==a)if(Rf(o)&&Rf(a))for(let h=0;h<e.length;h++){let u=e[h];typeof u=="string"&&(e[h]=parseFloat(u))}else yr[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)(e[r]===null||x0(e[r]))&&n.push(r);n.length&&M0(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=yr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let s=n.length-1,o=n[s];n[s]=yr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([a,l])=>{e.getValue(a).set(l)}),this.resolveNoneKeyframes()}};var S0=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Wf(i,e,t){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let n=document;e&&(n=e.current);let r=t?.[i]??n.querySelectorAll(i);return r?Array.from(r):[]}return Array.from(i).filter(n=>n!=null)}var el=(i,e)=>e&&typeof i=="number"?e.transform(i):i;var{schedule:w0,cancel:rN}=Nc(queueMicrotask,!1);function tl(i){return mf(i)&&"ownerSVGElement"in i}function Xf(i){return tl(i)&&i.tagName==="svg"}var HM=[...zf,Bt,pn],T0=i=>HM.find(oh(i));var E0=()=>({min:0,max:0}),Co=()=>({x:E0(),y:E0()});var xr=new WeakMap;function C0(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function A0(i){return typeof i=="string"||Array.isArray(i)}var GM=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],P0=["initial",...GM];function qf(i){return C0(i.animate)||P0.some(e=>A0(i[e]))}function R0(i){return!!(qf(i)||i.variants)}function I0(i,e,t){for(let n in e){let r=e[n],s=t[n];if(Ft(r))i.addValue(n,r);else if(Ft(s))i.addValue(n,_i(r,{owner:i}));else if(s!==r)if(i.hasValue(n)){let o=i.getValue(n);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{let o=i.getStaticValue(n);i.addValue(n,_i(o!==void 0?o:r,{owner:i}))}}for(let n in t)e[n]===void 0&&i.removeValue(n);return e}var nl={current:null},hh={current:!1};var WM=typeof window<"u";function D0(){if(hh.current=!0,!!WM)if(window.matchMedia){let i=window.matchMedia("(prefers-reduced-motion)"),e=()=>nl.current=i.matches;i.addEventListener("change",e),e()}else nl.current=!1}var O0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],L0={};var Ao=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Qr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let g=fn.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,Fn.render(this.render,!1,!0))};let{latestValues:c,renderState:h}=a;this.latestValues=c,this.baseTarget=ce({},c),this.initialValues=t.initial?ce({},c):{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=qf(t),this.isVariantNode=R0(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let f=this.scrapeMotionValuesFromProps(t,{},this),{willChange:u}=f,d=Ht(f,["willChange"]);for(let g in d){let y=d[g];c[g]!==void 0&&Ft(y)&&y.set(c[g])}}mount(e){if(this.hasBeenMounted)for(let t in this.initialValues)this.values.get(t)?.jump(this.initialValues[t]),this.latestValues[t]=this.initialValues[t];this.current=e,xr.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,n)=>this.bindToMotionValue(n,t)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(hh.current||D0(),this.shouldReduceMotion=nl.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Ha(this.notifyUpdate),Ha(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Kc.has(e)&&this.current instanceof HTMLElement){let{factory:o,keyframes:a,times:l,ease:c,duration:h}=t.accelerate,u=new To({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:tn(h)}),d=o(u);this.valueSubscriptions.set(e,()=>{d(),u.cancel()});return}let n=gi.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Fn.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),s&&s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in L0){let t=L0[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Co()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<O0.length;n++){let r=O0[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);let s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=I0(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=_i(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n=="string"&&(Pa(n)||Ra(n))?n=parseFloat(n):!T0(n)&&pn.test(t)&&(n=lh(e,t)),this.setBaseTarget(e,Ft(n)?n.get():n)),Ft(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t=="string"||typeof t=="object"){let s=rh(this.props,t,this.presenceContext?.custom);s&&(n=s[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Ft(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Ds),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){w0.render(this.render)}};var Po=class extends Ao{constructor(){super(...arguments),this.KeyframeResolver=ch}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Ft(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}};function N0({top:i,left:e,right:t,bottom:n}){return{x:{min:e,max:t},y:{min:i,max:n}}}function F0(i,e){if(!e)return i;let t=e({x:i.left,y:i.top}),n=e({x:i.right,y:i.bottom});return{top:t.y,left:t.x,bottom:n.y,right:n.x}}function k0(i,e){return N0(F0(i.getBoundingClientRect(),e))}var XM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},qM=ji.length;function U0(i,e,t){let n="",r=!0;for(let o=0;o<qM;o++){let a=ji[o],l=i[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{let h=parseFloat(l);c=a.startsWith("scale")?h===1:h===0}if(!c||t){let h=el(l,Bs[a]);if(!c){r=!1;let u=XM[a]||a;n+=`${u}(${h}) `}t&&(e[a]=h)}}let s=i.pathRotation;return s&&(r=!1,n+=`rotate(${el(s,Bs.pathRotation)}) `),n=n.trim(),t?n=t(e,r?"":n):r&&(n="none"),n}function dh(i,e,t){let{style:n,vars:r,transformOrigin:s}=i,o=!1,a=!1;for(let l in e){let c=e[l];if(gi.has(l)){o=!0;continue}else if(kc(l)){r[l]=c;continue}else{let h=el(c,Bs[l]);l.startsWith("origin")?(a=!0,s[l]=h):n[l]=h}}if(e.transform||(o||t?n.transform=U0(e,i.transform,t):n.transform&&(n.transform="none")),a){let{originX:l="50%",originY:c="50%",originZ:h=0}=s;n.transformOrigin=`${l} ${c} ${h}`}}function uh(i,{style:e,vars:t},n,r){let s=i.style,o;for(o in e)s[o]=e[o];r?.applyProjectionStyles(s,n);for(o in t)s.setProperty(o,t[o])}function B0(i,e){return e.max===e.min?0:i/(e.max-e.min)*100}var Ro={correct:(i,e)=>{if(!e.target)return i;if(typeof i=="string")if(Ee.test(i))i=parseFloat(i);else return i;let t=B0(i,e.target.x),n=B0(i,e.target.y);return`${t}% ${n}%`}};var V0={correct:(i,{treeScale:e,projectionDelta:t})=>{let n=i,r=pn.parse(i);if(r.length>5)return n;let s=pn.createTransformer(i),o=typeof r[0]!="number"?1:0,a=t.x.scale*e.x,l=t.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;let c=ii(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};var z0={borderRadius:je(ce({},Ro),{applyTo:[...S0]}),borderTopLeftRadius:Ro,borderTopRightRadius:Ro,borderBottomLeftRadius:Ro,borderBottomRightRadius:Ro,boxShadow:V0};function H0(i,{layout:e,layoutId:t}){return gi.has(i)||i.startsWith("origin")||(e||t!==void 0)&&(!!z0[i]||i==="opacity")}function fh(i,e,t){let n=i.style,r=e?.style,s={};if(!n)return s;for(let o in n)(Ft(n[o])||r&&Ft(r[o])||H0(o,i)||t?.getValue(o)?.liveStyle!==void 0)&&(s[o]=n[o]);return s}function YM(i){return window.getComputedStyle(i)}var il=class extends Po{constructor(){super(...arguments),this.type="html",this.renderInstance=uh}mount(e){jn(!!e.style,"motion.create() components must forward their ref to a HTML or SVG element","custom-component-ref"),super.mount(e)}readValueFromInstance(e,t){if(gi.has(t))return this.projection?.isProjecting?Xc(t):q_(e,t);{let n=YM(e),r=(kc(t)?n.getPropertyValue(t):n[t])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return k0(e,t)}build(e,t,n){dh(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return fh(e,t,n)}};function jM(i,e){return i in e}var rl=class extends Ao{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,t){if(jM(t,e)){let n=e[t];if(typeof n=="string"||typeof n=="number")return n}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return Co()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}};var ZM={offset:"stroke-dashoffset",array:"stroke-dasharray"},$M={offset:"strokeDashoffset",array:"strokeDasharray"};function G0(i,e,t=1,n=0,r=!0){i.pathLength=1;let s=r?ZM:$M;i[s.offset]=`${-n}`,i[s.array]=`${e} ${t}`}var Yf=["transform","opacity","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function W0(i,u,l,c,h){var d=u,{attrX:e,attrY:t,attrScale:n,pathLength:r,pathSpacing:s=1,pathOffset:o=0}=d,a=Ht(d,["attrX","attrY","attrScale","pathLength","pathSpacing","pathOffset"]);if(dh(i,a,c),l){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};let{attrs:f,style:g}=i;for(let y of Yf)f[y]!==void 0&&(g[y]=f[y],delete f[y]);(g.transform||f.transformOrigin)&&(g.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),g.transform&&(g.transformBox=h?.transformBox??"fill-box",delete f.transformBox),e!==void 0&&(f.x=e),t!==void 0&&(f.y=t),n!==void 0&&(f.scale=n),r!==void 0&&G0(f,r,s,o,!1)}var ph=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);var X0=i=>typeof i=="string"&&i.toLowerCase()==="svg";function q0(i,e,t,n){uh(i,e,void 0,n);for(let r in e.attrs)i.setAttribute(ph.has(r)?r:Eo(r),e.attrs[r])}function Y0(i,e,t){let n=fh(i,e,t);for(let r in i)if(Ft(i[r])||Ft(e[r])){let s=ji.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=i[r]}return n}var sl=class extends Po{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Co}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(gi.has(t)){let n=ah(t);return n&&n.default||0}if(Yf.includes(t)){let r=getComputedStyle(e)[t];if(typeof r=="string"&&r)return r.trim()}return t=ph.has(t)?t:Eo(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Y0(e,t,n)}build(e,t,n){W0(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){q0(e,t,n,r)}mount(e){this.isSVGTag=X0(e.tagName),super.mount(e)}};function jf(i,e,t){let n=Ft(i)?i:_i(i);return n.start(ih("",n,e,t)),n.animation}function ol(i){return typeof i=="object"&&!Array.isArray(i)}function mh(i,e,t,n){return i==null?[]:typeof i=="string"&&ol(e)?Wf(i,t,n):i instanceof NodeList?Array.from(i):Array.isArray(i)?i.filter(r=>r!=null):[i]}function j0(i,e,t){return i*(e+1)+t*e}function Zf(i,e,t,n){return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,i+parseFloat(e)):e==="<"?t:e.startsWith("<")?Math.max(0,t+parseFloat(e.slice(1))):n.get(e)??i}function KM(i,e,t){for(let n=0;n<i.length;n++){let r=i[n];r.at>e&&r.at<t&&(Ps(i,r),n--)}}function Z0(i,e,t,n,r,s){KM(i,r,s);for(let o=0;o<e.length;o++)i.push({value:e[o],at:ii(r,s,n[o]),easing:Ba(t,o)})}function $0(i,e,t=0){let n=e+1+e*t;for(let r=0;r<i.length;r++)i[r]=i[r]/n}function K0(i,e){return i.at===e.at?i.value===null?1:e.value===null?-1:0:i.at-e.at}var JM="easeInOut",$f=20;function ev(i,s={},n,r){var o=s,{defaultTransition:e={}}=o,t=Ht(o,["defaultTransition"]);let a=e.duration||.3,l=new Map,c=new Map,h={},u=new Map,d=0,f=0,g=0;for(let y=0;y<i.length;y++){let m=i[y];if(typeof m=="string"){u.set(m,f);continue}else if(!Array.isArray(m)){u.set(m.name,Zf(f,m.at,d,u));continue}let[p,E,A={}]=m;A.at!==void 0&&(f=Zf(f,A.at,d,u));let b=0,w=(M,C,v,T=0,R=0)=>{let P=QM(M),le=C,{delay:N=0,times:j=Za(P),type:Q=e.type||"keyframes",repeat:D,repeatType:X,repeatDelay:V=0}=le,ee=Ht(le,["delay","times","type","repeat","repeatType","repeatDelay"]),{ease:U=e.ease||"easeOut",duration:ie}=C,he=typeof N=="function"?N(T,R):N,pe=P.length,et=Us(Q)?Q:r?.[Q||"keyframes"];if(pe<=2&&et){let se=100;if(pe===2&&nS(P)){let be=P[1]-P[0];se=Math.abs(be)}let de=ce(ce({},e),ee);ie!==void 0&&(de.duration=tn(ie));let Ie=qa(de,se,et);U=Ie.ease,ie=Ie.duration}ie??(ie=a);let yt=f+he;j.length===1&&j[0]===0&&(j[1]=1);let We=j.length-P.length;if(We>0&&ja(j,We),P.length===1&&P.unshift(null),D&&Di(D<$f,`Sequence segments can't repeat ${D} times \u2014 ignoring repeat option. Use a value below ${$f} or apply repeat at the sequence level instead.`),D&&D<$f){let se=ie>0?V/ie:0;ie=j0(ie,D,V);let de=[...P],Ie=[...j];U=Array.isArray(U)?[...U]:[U];let be=[...U],De=X==="reverse"||X==="mirror",Te=de,Ye=be;De&&(Te=[...de].reverse(),X==="reverse"&&(Ye=[...be].reverse().map(Fe=>typeof Fe=="function"?Os(Fe):Fe)));for(let Fe=0;Fe<D;Fe++){let Pe=De&&Fe%2===0,Ze=Pe?Te:de,ot=Pe?Ye:be,it=(Fe+1)*(1+se);se>0&&(P.push(P[P.length-1]),j.push(it),U.push("linear")),P.push(...Ze);for(let mt=0;mt<Ze.length;mt++)j.push(Ie[mt]+it),U.push(mt===0?"linear":Ba(ot,mt-1))}$0(j,D,se)}let q=yt+ie;Z0(v,P,U,j,yt,q),b=Math.max(he+ie,b),g=Math.max(q,g)};if(Ft(p)){let M=J0(p,c);w(E,A,Q0("default",M))}else{let M=mh(p,E,n,h),C=M.length;for(let v=0;v<C;v++){E=E,A=A;let T=M[v],R=J0(T,c);for(let P in E)w(E[P],eS(A,P),Q0(P,R),v,C)}}d=f,f+=b}return c.forEach((y,m)=>{for(let E in y){let A=y[E];A.sort(K0);let b=[],w=[],M=[];for(let R=0;R<A.length;R++){let{at:P,value:N,easing:j}=A[R];b.push(N),w.push(Is(0,g,P)),M.push(j||"easeOut")}w[0]!==0&&(w.unshift(0),b.unshift(b[0]),M.unshift(JM)),w[w.length-1]!==1&&(w.push(1),b.push(null)),l.has(m)||l.set(m,{keyframes:{},transition:{}});let C=l.get(m);C.keyframes[E]=b;let p=e,{type:v}=p,T=Ht(p,["type"]);C.transition[E]=ce(je(ce({},T),{duration:g,ease:M,times:w}),t)}}),l}function J0(i,e){return!e.has(i)&&e.set(i,{}),e.get(i)}function Q0(i,e){return e[i]||(e[i]=[]),e[i]}function QM(i){return Array.isArray(i)?i:[i]}function eS(i,e){return i&&i[e]?ce(ce({},i),i[e]):ce({},i)}var tS=i=>typeof i=="number",nS=i=>i.every(tS);function tv(i){let e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},t=tl(i)&&!Xf(i)?new sl(e):new il(e);t.mount(i),xr.set(i,t)}function nv(i){let e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},t=new rl(e);t.mount(i),xr.set(i,t)}function iS(i,e){return Ft(i)||typeof i=="number"||typeof i=="string"&&!ol(e)}function gh(i,e,t,n){let r=[];if(iS(i,e))r.push(jf(i,ol(e)&&e.default||e,t&&(t.default||t)));else{if(i==null)return r;let s=mh(i,e,n),o=s.length;jn(!!o,"No valid elements provided.","no-valid-elements");for(let a=0;a<o;a++){let l=s[a],c=l instanceof Element?tv:nv;xr.has(l)||c(l);let h=xr.get(l),u=ce({},t);"delay"in u&&typeof u.delay=="function"&&(u.delay=u.delay(a,o)),r.push(...Vf(h,je(ce({},e),{transition:u}),{}))}}return r}function iv(i,e,t){let n=[],r=i.map(o=>{if(Array.isArray(o)&&typeof o[0]=="function"){let a=o[0],l=_i(0);return l.on("change",a),o.length===1?[l,[0,1]]:o.length===2?[l,[0,1],o[1]]:[l,o[1],o[2]]}return o});return ev(r,e,t,{spring:_r}).forEach(({keyframes:o,transition:a},l)=>{n.push(...gh(l,o,a))}),n}function rS(i){return Array.isArray(i)&&i.some(Array.isArray)}function rv(i={}){let{scope:e,reduceMotion:t,skipAnimations:n}=i;function r(s,o,a){let l=[],c,h={};if(t!==void 0&&(h.reduceMotion=t),n!==void 0&&(h.skipAnimations=n),rS(s)){let d=o||{},{onComplete:g}=d,y=Ht(d,["onComplete"]);typeof g=="function"&&(c=g),l=iv(s,ce(ce({},h),y),e)}else{let f=a||{},{onComplete:g}=f,y=Ht(f,["onComplete"]);typeof g=="function"&&(c=g),l=gh(s,o,ce(ce({},h),y),e)}let u=new Ka(l);return c&&u.finished.then(c),e&&(e.animations.push(u),u.finished.then(()=>{Ps(e.animations,u)})),u}return r}var vi=rv();function Kf(){return Kf=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},Kf.apply(null,arguments)}var sS={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,shouldBackspace:!0,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,e){},onStringTyped:function(i,e){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,e){},onTypingResumed:function(i,e){},onReset:function(i){},onStop:function(i,e){},onStart:function(i,e){},onDestroy:function(i){}},oS=new((function(){function i(){}var e=i.prototype;return e.load=function(t,n,r){if(t.el=typeof r=="string"?document.querySelector(r):r,t.options=Kf({},sS,n),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.shouldBackspace=t.options.shouldBackspace,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(c){return c.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(t.stringsElement.children),o=s.length;if(o)for(var a=0;a<o;a+=1)t.strings.push(s[a].innerHTML.trim())}for(var l in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[l]=l;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var n="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+n+"]")){var r=document.createElement("style");r.setAttribute(n,"true"),r.innerHTML=`
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
      `,document.body.appendChild(r)}},i})()),sv=new((function(){function i(){}var e=i.prototype;return e.typeHtmlChars=function(t,n,r){if(r.contentType!=="html")return n;var s=t.substring(n).charAt(0);if(s==="<"||s==="&"){var o;for(o=s==="<"?">":";";t.substring(n+1).charAt(0)!==o&&!(1+ ++n>t.length););n++}return n},e.backSpaceHtmlChars=function(t,n,r){if(r.contentType!=="html")return n;var s=t.substring(n).charAt(0);if(s===">"||s===";"){var o;for(o=s===">"?"<":"&";t.substring(n-1).charAt(0)!==o&&!(--n<0););n--}return n},i})()),ov=(function(){function i(t,n){oS.load(this,n,t),this.begin()}var e=i.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.append=function(t){var n=this,r=this.strings[this.strings.length-1];this.strings.push(t),this.sequence=this.strings.map(function(s,o){return o}),this.typingComplete&&(this.timeout=this.shouldBackspace?setTimeout(function(){n.backspace(r,r.length-1)},this.backDelay):setTimeout(function(){n.arrayPos++,n.typewrite(n.strings[n.sequence[n.arrayPos]],0)},this.backDelay))},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,n){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){n=sv.typeHtmlChars(t,n,r);var a=0,l=t.substring(n);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var c=1;c+=(l=/\d+/.exec(l)[0]).length,a=parseInt(l),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),t=t.substring(0,n)+t.substring(n+c),r.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;t.substring(n+o).charAt(0)!=="`"&&(o++,!(n+o>t.length)););var h=t.substring(0,n),u=t.substring(h.length+1,n+o),d=t.substring(n+o+1);t=h+u+d,o--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),n>=t.length?r.doneTyping(t,n):r.keepTyping(t,n,o),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},a)},s):this.setPauseStatus(t,n,!0)},e.keepTyping=function(t,n,r){if(n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),this.shouldBackspace){var s=t.substring(0,n+=r);this.replaceText(s)}else{var o=t.substring(n,n+r);n+=r,this.replaceText(o)}this.typewrite(t,n)},e.doneTyping=function(t,n){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.isFinalString()&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=this.shouldBackspace?setTimeout(function(){r.backspace(t,n)},this.backDelay):setTimeout(function(){r.arrayPos++,r.typewrite(r.strings[r.sequence[r.arrayPos]],0)},this.backDelay))},e.backspace=function(t,n){var r=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=sv.backSpaceHtmlChars(t,n,r);var o=t.substring(0,n);if(r.replaceText(o),r.smartBackspace){var a=r.strings[r.sequence[r.arrayPos+1]];r.stopNum=a&&o===a.substring(0,n)?n:0}n>r.stopNum?(n--,r.backspace(t,n)):n<=r.stopNum&&(r.isFinalString()?r.lastStringBackspaced():(r.arrayPos++,r.typewrite(r.strings[r.sequence[r.arrayPos]],n)))},s)}else this.setPauseStatus(t,n,!1)},e.isFinalString=function(){return this.arrayPos===this.strings.length-1},e.lastStringBackspaced=function(){this.arrayPos=0,this.options.onLastStringBackspaced(),this.loop&&(this.shuffleStringsIfNeeded(),this.begin())},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,n,r){this.pause.typewrite=r,this.pause.curString=t,this.pause.curStrPos=n},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.shouldBackspace?this.el.innerHTML=t:this.el.innerHTML+=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(n){t.stop()}),this.el.addEventListener("blur",function(n){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i})();var aS=["typedRole"],lS=["hexagon"],cS=["hexWrap"],hS=["contentPanel"],dS=["badgeBtn"],uS=["taglineEl"],fS=["bgVideo"];function pS(i,e){if(i&1&&(B(0,"div",35)(1,"mat-icon"),J(2,"person"),z()()),i&2){let t=Ke();Pt("is-hidden",t.isVideoMode())}}var _h=class i{typedEl;hexEl;hexWrapEl;panelEl;badgeEl;taglineEl;bgVideoEl;i18n=re(Ln);imgError=Nt(!1);panelState=Nt("open");isVideoMode=Nt(!1);typed;detachTilt;collapseTimer;busy=!1;activeAnim;constructor(){ws(()=>{let e=this.i18n.currentLang();this.typedEl&&this.typed&&this.initTyped(e)})}ngAfterViewInit(){if(this.bgVideoEl){let e=this.bgVideoEl.nativeElement;e.muted=!0,e.volume=0}this.initTyped(this.i18n.currentLang()),this.hexEl&&(this.detachTilt=this.enableTilt(this.hexEl.nativeElement)),this.animateTagline(),this.collapseTimer=setTimeout(()=>this.collapseToBadge(),1e3+Math.random()*3e3)}initTyped(e){if(this.typed?.destroy(),!this.typedEl)return;let t=e==="en"?["Full-Stack","Angular","Spring Boot","Data Enthusiast"]:["Full-Stack","Angular","Spring Boot","passionn\xE9 de data"];this.typed=new ov(this.typedEl.nativeElement,{strings:t,typeSpeed:55,backSpeed:30,backDelay:1600,loop:!0})}ngOnDestroy(){this.typed?.destroy(),this.detachTilt?.(),clearTimeout(this.collapseTimer),this.activeAnim?.cancel()}async collapseToBadge(){if(this.busy||this.panelState()==="badge")return;this.busy=!0;let e=this.panelEl?.nativeElement,t=this.badgeEl?.nativeElement;if(!e||!t){this.busy=!1;return}let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),s=r.left+r.width/2-(n.left+n.width/2),o=r.top+r.height/2-(n.top+n.height/2);this.activeAnim?.cancel(),this.activeAnim=e.animate([{transform:"translate(0,0) scale(1)",opacity:"1",borderRadius:"1.5rem"},{transform:`translate(${s}px,${o}px) scale(0)`,opacity:"0",borderRadius:"50%"}],{duration:600,easing:"cubic-bezier(0.4,0,0.8,0.2)",fill:"forwards"}),await this.activeAnim.finished,e.style.visibility="hidden",e.style.pointerEvents="none",this.activeAnim.cancel(),this.panelState.set("badge"),t.style.visibility="visible",this.activeAnim=t.animate([{transform:"scale(0)",opacity:"0"},{transform:"scale(1.18)",opacity:"1",offset:.55},{transform:"scale(0.93)",opacity:"1",offset:.78},{transform:"scale(1)",opacity:"1"}],{duration:580,easing:"ease-out",fill:"forwards"}),await this.activeAnim.finished,this.activeAnim.cancel(),t.style.opacity="1",t.style.transform="scale(1)",t.setAttribute("data-active",""),this.busy=!1}async expandToPanel(){if(this.busy||this.panelState()==="open")return;this.busy=!0;let e=this.panelEl?.nativeElement,t=this.badgeEl?.nativeElement;if(!e||!t){this.busy=!1;return}t.removeAttribute("data-active"),this.activeAnim?.cancel(),this.activeAnim=t.animate([{transform:"scale(1)",opacity:"1"},{transform:"scale(0)",opacity:"0"}],{duration:260,easing:"ease-in",fill:"forwards"}),await this.activeAnim.finished,t.style.visibility="hidden",this.activeAnim.cancel();let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),s=r.left+r.width/2-(n.left+n.width/2),o=r.top+r.height/2-(n.top+n.height/2);e.style.visibility="visible",e.style.pointerEvents="",this.panelState.set("open"),this.activeAnim=e.animate([{transform:`translate(${s}px,${o}px) scale(0)`,opacity:"0",borderRadius:"50%"},{transform:`translate(${s*.03}px,${o*.03}px) scale(1.04)`,opacity:"1",borderRadius:"1.5rem",offset:.72},{transform:"translate(0,0) scale(1)",opacity:"1",borderRadius:"1.5rem"}],{duration:680,easing:"cubic-bezier(0.34,1.56,0.64,1)",fill:"forwards"}),await this.activeAnim.finished,this.activeAnim.cancel(),e.style.transform="",e.style.opacity="",e.style.borderRadius="",this.busy=!1}enableTilt(e){let t=r=>{let s=e.getBoundingClientRect();vi(e,{transformPerspective:700,rotateY:((r.clientX-s.left)/s.width-.5)*16,rotateX:((r.clientY-s.top)/s.height-.5)*-16},{duration:.4,ease:"easeOut"})},n=()=>vi(e,{transformPerspective:700,rotateY:0,rotateX:0},{duration:.6,ease:"easeOut"});return e.addEventListener("mousemove",t),e.addEventListener("mouseleave",n),()=>{e.removeEventListener("mousemove",t),e.removeEventListener("mouseleave",n)}}animateTagline(){let e=this.taglineEl?.nativeElement;if(!e)return;let n=e.innerText.trim().split(/\s+/);e.innerHTML=n.map(r=>`<span class="hero__tagline-word">${r}</span>`).join(" "),Xr.fromTo(e.querySelectorAll(".hero__tagline-word"),{opacity:0,y:18,filter:"blur(4px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.65,ease:"power3.out",stagger:.045,delay:.8})}toggleVideoMode(){let e=!this.isVideoMode();if(this.isVideoMode.set(e),this.hexWrapEl&&this.hexEl){let t=this.hexWrapEl.nativeElement,n=this.hexEl.nativeElement,r=t.closest(".hero__portrait");e?(r&&vi(r,{maxWidth:"500px"},{duration:.85,ease:"easeInOut"}),vi(t,{width:"min(500px, 90vw)",aspectRatio:16/9},{duration:.85,ease:"easeInOut"}),vi(n,{borderRadius:"12px",padding:"2px"},{duration:.85,ease:"easeInOut"})):(r&&vi(r,{maxWidth:"352px"},{duration:.85,ease:"easeInOut"}),vi(t,{width:"min(300px, 62vw)",aspectRatio:1},{duration:.85,ease:"easeInOut"}),vi(n,{borderRadius:"16px",padding:"5px"},{duration:.85,ease:"easeInOut"}))}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-hero"]],viewQuery:function(t,n){if(t&1&&ti(aS,5)(lS,5)(cS,5)(hS,5)(dS,5)(uS,5)(fS,5),t&2){let r;Tt(r=Et())&&(n.typedEl=r.first),Tt(r=Et())&&(n.hexEl=r.first),Tt(r=Et())&&(n.hexWrapEl=r.first),Tt(r=Et())&&(n.panelEl=r.first),Tt(r=Et())&&(n.badgeEl=r.first),Tt(r=Et())&&(n.taglineEl=r.first),Tt(r=Et())&&(n.bgVideoEl=r.first)}},decls:54,vars:18,consts:[["bgVideo",""],["contentPanel",""],["typedRole",""],["hexWrap",""],["hexagon",""],["badgeBtn",""],["taglineEl",""],["id","accueil",1,"hero"],["autoplay","","loop","","playsinline","","aria-hidden","true","preload","auto",1,"hero__bg-video",3,"muted"],["src","videos/BG_vid.mp4","type","video/mp4"],[1,"hero__content"],["mat-icon-button","",1,"hero__close-btn",3,"click"],[1,"hero__eyebrow"],[1,"hero__typed"],[1,"hero__title"],[1,"hero__title-accent"],[1,"hero__actions"],["mat-flat-button","","color","primary","href","documents/CV-EKLU Charly Yayra.pdf","target","_blank","rel","noopener noreferrer"],["iconPositionEnd",""],["mat-stroked-button","",3,"click"],["appReveal","right",1,"hero__portrait"],[1,"hero__hex-wrap"],[1,"hero__hexagon"],["src","images/ME_portfolio.png","alt","Photo de Charly Eklu",1,"hero__presentation-media","hero__presentation-img",3,"error"],[1,"hero__hexagon-fallback",3,"is-hidden"],["controls","",1,"hero__presentation-media","hero__presentation-video",3,"autoplay"],[1,"hero__badge",3,"click"],[1,"hero__badge-text"],["aria-hidden","true",1,"hero__tag","hero__tag--1"],["aria-hidden","true",1,"hero__tag","hero__tag--2"],["aria-hidden","true",1,"hero__tag","hero__tag--3"],["aria-hidden","true",1,"hero__tag","hero__tag--4"],[1,"hero__tagline-card"],[1,"hero__tagline"],["href","#a-propos",1,"hero__scroll-cue"],[1,"hero__hexagon-fallback"]],template:function(t,n){t&1&&(B(0,"section",7)(1,"video",8,0),tt(3,"source",9),z(),B(4,"div",10,1)(6,"button",11),at("click",function(){return n.collapseToBadge()}),B(7,"mat-icon"),J(8,"close"),z()(),B(9,"p",12),J(10),tt(11,"span",13,2),z(),B(13,"h1",14),J(14),B(15,"span",15),J(16,"Charly Eklu"),z()(),B(17,"div",16)(18,"a",17)(19,"mat-icon",18),J(20,"download"),z(),J(21),z(),B(22,"button",19),at("click",function(){return n.toggleVideoMode()}),B(23,"mat-icon"),J(24),z(),J(25),z()()(),B(26,"div",20)(27,"div",21,3)(29,"div",22,4)(31,"img",23),at("error",function(){return n.imgError.set(!0)}),z(),cn(32,pS,3,2,"div",24),B(33,"video",25),tt(34,"source",9),z()(),B(35,"button",26,5),at("click",function(){return n.expandToPanel()}),B(37,"span",27),J(38,"!"),z()(),B(39,"span",28),J(40,"<div>"),z(),B(41,"span",29),J(42,"</>"),z(),B(43,"span",30),J(44,"{ }"),z(),B(45,"span",31),J(46,"<h1/>"),z()(),B(47,"div",32)(48,"p",33,6),J(50),z()()(),B(51,"a",34)(52,"mat-icon"),J(53,"keyboard_arrow_down"),z()()()),t&2&&(Y(),gt("muted",!0),Y(5),Gt("aria-label",n.i18n.t("hero.aria_collapse")),Y(4),Rt(" ",n.i18n.t("hero.eyebrow")," "),Y(4),Rt(" ",n.i18n.t("hero.title_hi")," "),Y(7),Rt(" ",n.i18n.t("hero.btn_resume")," "),Y(3),Le(n.isVideoMode()?"photo_camera":"play_circle"),Y(),Rt(" ",n.isVideoMode()?n.i18n.t("hero.btn_return_photo"):n.i18n.t("hero.btn_video")," "),Y(2),Pt("is-video-mode",n.isVideoMode()),Y(4),Pt("is-hidden",n.isVideoMode()),Y(),hn(n.imgError()?32:-1),Y(),Pt("is-active",n.isVideoMode()),gt("autoplay",n.isVideoMode()),Y(2),Gt("aria-label",n.i18n.t("hero.aria_expand")),Y(15),Rt(" ",n.i18n.t("hero.tagline")," "),Y(),Gt("aria-label",n.i18n.t("hero.aria_scroll_next")))},dependencies:[mi,pi,Wr,On,Dn,Yn],styles:['@charset "UTF-8";.hero[_ngcontent-%COMP%]{position:relative;min-height:90vh;display:grid;grid-template-columns:1fr auto;align-items:center;gap:clamp(2.5rem,6vw,5rem);padding:8rem 8vw 6rem;box-sizing:border-box;background-color:var(--bg-950);overflow:hidden}.hero[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-8rem;left:-6rem;width:40rem;height:40rem;border-radius:50%;background:radial-gradient(circle,rgba(3,175,249,.12) 0%,rgba(3,175,249,.04) 45%,transparent 70%);z-index:0;pointer-events:none}.hero__bg-video[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;opacity:.4;pointer-events:none;mix-blend-mode:screen}.hero__content[_ngcontent-%COMP%]{position:relative;z-index:2;max-width:34rem;width:100%;padding:2.25rem 2.5rem;border-radius:var(--radius-xl);background:#000a29c7;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid var(--border-default);box-shadow:var(--shadow-card),0 0 0 1px #03aff90d inset;box-sizing:border-box}.hero__close-btn[_ngcontent-%COMP%]{position:absolute!important;top:.5rem;right:.5rem;opacity:.45;color:var(--text-secondary)!important;transition:opacity .2s,transform .2s,color .2s}.hero__close-btn[_ngcontent-%COMP%]:hover{opacity:1;color:var(--primary-400)!important;transform:rotate(90deg)}.hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .75rem;min-height:1.3em;color:var(--primary-400);font-weight:600;letter-spacing:.08em;font-size:.85rem;text-transform:uppercase}.hero__typed[_ngcontent-%COMP%]{font-family:Roboto Mono,ui-monospace,monospace;font-weight:700;color:var(--primary-300)}.hero__title[_ngcontent-%COMP%]{margin:0 0 1.25rem;font-size:clamp(2.25rem,4vw,3.4rem);line-height:1.12;font-weight:700;color:var(--text-primary);letter-spacing:-.025em}.hero__title-accent[_ngcontent-%COMP%]{color:var(--primary-400);font-weight:800;text-shadow:0 0 32px rgba(3,175,249,.45)}.hero__actions[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-wrap:wrap;margin-top:1.75rem}.hero__portrait[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:1.75rem;max-width:22rem;text-align:center}.hero__hex-wrap[_ngcontent-%COMP%]{position:relative;width:min(300px,62vw);aspect-ratio:1/1}.hero__hexagon[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;border-radius:var(--radius-lg);background:linear-gradient(135deg,var(--primary-950) 0%,var(--primary-700) 100%);overflow:hidden;box-shadow:0 24px 55px #0000008c,var(--glow-primary);will-change:transform}.hero__presentation-media[_ngcontent-%COMP%]{position:absolute;inset:5px;width:calc(100% - 10px);height:calc(100% - 10px);object-fit:cover;border-radius:calc(var(--radius-lg) - 5px);transition:opacity .6s ease-in-out}.hero__presentation-img[_ngcontent-%COMP%]{opacity:1;z-index:2}.hero__presentation-img.is-hidden[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.hero__presentation-video[_ngcontent-%COMP%]{opacity:0;pointer-events:none;z-index:1;background:#000}.hero__presentation-video.is-active[_ngcontent-%COMP%]{opacity:1;pointer-events:auto;z-index:3}.hero__hexagon-fallback[_ngcontent-%COMP%]{position:absolute;inset:5px;display:flex;align-items:center;justify-content:center;transition:opacity .6s ease-in-out;z-index:2}.hero__hexagon-fallback.is-hidden[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.hero__hexagon-fallback[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:5.5rem;width:5.5rem;height:5.5rem;color:var(--primary-200)}.hero__badge[_ngcontent-%COMP%]{position:absolute;bottom:8%;right:0;z-index:10;width:52px;height:52px;border-radius:50%;border:1.5px solid rgba(3,175,249,.55);cursor:pointer;background:linear-gradient(135deg,var(--primary-700) 0%,var(--primary-400) 100%);color:#000106;box-shadow:var(--glow-primary),0 4px 20px #00000080;display:flex;align-items:center;justify-content:center;visibility:hidden;opacity:0;transform:scale(0)}.hero__badge[data-active][_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_badge-pulse 2.8s .6s ease-in-out infinite}.hero__badge-text[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:900;line-height:1;-webkit-user-select:none;user-select:none;position:relative;top:-1px}@keyframes _ngcontent-%COMP%_badge-pulse{0%,50%,to{box-shadow:var(--glow-primary),0 4px 20px #00000080}18%{box-shadow:0 0 0 7px #03aff94d,0 0 0 16px #03aff926,0 0 0 28px #03aff912,0 0 0 42px #03aff908,var(--glow-strong)}36%{box-shadow:0 0 0 3px #03aff91a,var(--glow-primary)}}.hero__tag[_ngcontent-%COMP%]{position:absolute;padding:.3rem .6rem;border-radius:var(--radius-sm);background:var(--bg-800);color:var(--primary-400);border:1px solid var(--border-default);font-family:Roboto Mono,ui-monospace,monospace;font-size:.75rem;font-weight:600;box-shadow:var(--glow-primary);animation:_ngcontent-%COMP%_hero-float 4.5s ease-in-out infinite;pointer-events:none}.hero__tag--1[_ngcontent-%COMP%]{top:-4%;left:-10%;animation-delay:0s}.hero__tag--2[_ngcontent-%COMP%]{bottom:8%;left:-14%;animation-delay:.7s}.hero__tag--3[_ngcontent-%COMP%]{top:6%;right:-12%;animation-delay:1.4s}.hero__tag--4[_ngcontent-%COMP%]{bottom:-4%;right:2%;animation-delay:2.1s}@keyframes _ngcontent-%COMP%_hero-float{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}.hero__tagline-card[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;padding:1rem 1.25rem;border-radius:var(--radius-md);background:#000a29a6;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid var(--border-default);border-left:3px solid var(--primary-400);box-shadow:0 4px 16px #0000004d}.hero__tagline[_ngcontent-%COMP%]{margin:0;font-size:.93rem;line-height:1.7;color:var(--text-secondary);font-weight:500}.hero__tagline-word[_ngcontent-%COMP%]{display:inline-block;opacity:0;will-change:transform,opacity}.hero__scroll-cue[_ngcontent-%COMP%]{position:absolute;bottom:2rem;left:50%;transform:translate(-50%);z-index:2;display:inline-flex;color:var(--primary-400);animation:_ngcontent-%COMP%_hero-bounce 1.8s ease-in-out infinite;grid-column:1/-1;opacity:.7}@keyframes _ngcontent-%COMP%_hero-bounce{0%,to{transform:translate(-50%)}50%{transform:translate(-50%,8px)}}@media(max-width:1100px){.hero[_ngcontent-%COMP%]{gap:clamp(1.5rem,4vw,3rem);padding:7rem 5vw 5rem}.hero__content[_ngcontent-%COMP%]{max-width:28rem;padding:1.75rem}.hero__hex-wrap[_ngcontent-%COMP%]{width:min(240px,48vw)}.hero__title[_ngcontent-%COMP%]{font-size:clamp(2rem,3.5vw,3rem)}}@media(max-width:900px){.hero[_ngcontent-%COMP%]{grid-template-columns:1fr;justify-items:center;min-height:auto;padding:7rem 6vw 5rem;gap:2rem;text-align:center}.hero[_ngcontent-%COMP%]:before{background:#000106c7}.hero__content[_ngcontent-%COMP%]{max-width:min(100%,38rem);width:100%;order:2;padding:1.75rem 1.5rem}.hero__portrait[_ngcontent-%COMP%]{order:1}.hero__hex-wrap[_ngcontent-%COMP%]{width:min(220px,55vw)}.hero__actions[_ngcontent-%COMP%]{justify-content:center}.hero__badge[_ngcontent-%COMP%]{bottom:-5%;right:50%;transform:translate(50%)}.hero__tag[_ngcontent-%COMP%], .hero__scroll-cue[_ngcontent-%COMP%]{display:none}}@media(max-width:600px){.hero[_ngcontent-%COMP%]{padding:5.5rem 5vw 4rem;gap:1.75rem}.hero__content[_ngcontent-%COMP%]{padding:1.25rem;border-radius:var(--radius-lg)}.hero__eyebrow[_ngcontent-%COMP%]{font-size:.8rem}.hero__title[_ngcontent-%COMP%]{font-size:clamp(1.75rem,8vw,2.4rem);margin-bottom:1rem}.hero__tagline[_ngcontent-%COMP%]{font-size:.88rem}.hero__actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:.85rem;margin-top:1.25rem;width:100%}.hero__actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.hero__hex-wrap[_ngcontent-%COMP%]{width:min(190px,58vw)}.hero__badge[_ngcontent-%COMP%]{width:44px;height:44px}.hero__badge-text[_ngcontent-%COMP%]{font-size:1.3rem}}@media(max-width:380px){.hero[_ngcontent-%COMP%]{padding:5rem 4vw 3.5rem;gap:1.5rem}.hero__content[_ngcontent-%COMP%]{padding:1rem;border-radius:var(--radius-md)}.hero__hex-wrap[_ngcontent-%COMP%]{width:min(160px,62vw)}.hero__title[_ngcontent-%COMP%]{font-size:clamp(1.6rem,9vw,2rem)}.hero__actions[_ngcontent-%COMP%]{flex-direction:column;align-items:center;gap:.5rem}}']})};var mS=["*"];var gS=new on("MAT_CARD_CONFIG"),av=(()=>{class i{appearance;constructor(){let t=re(gS,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&Pt("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:mS,decls:1,vars:0,template:function(n,r){n&1&&(Hr(),Xi(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return i})();var lv=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Jt({type:i});static \u0275inj=Kt({imports:[Mn]})}return i})();var vS=()=>[1,2,3,4,5],yS=(i,e)=>e.label,xS=(i,e)=>e.name;function bS(i,e){if(i&1&&(B(0,"mat-card",22)(1,"mat-icon",27),J(2),z(),B(3,"span",28),J(4),z(),B(5,"span",29),J(6),z()()),i&2){let t=e.$implicit,n=Ke();Y(2),Le(t.icon),Y(2),Le(t.value),Y(2),Le(t.label[n.i18n.currentLang()])}}function MS(i,e){i&1&&(B(0,"mat-icon",36),J(1,"star"),z())}function SS(i,e){if(i&1&&(B(0,"div",26)(1,"div",30)(2,"div",31),J(3),z(),B(4,"div",32)(5,"span",33),J(6),z(),B(7,"span",34),J(8),z()(),B(9,"div",35),dn(10,MS,2,0,"mat-icon",36,Mc),z()(),B(12,"p",37),J(13),z()()),i&2){let t=e.$implicit,n=Ke();Y(3),Le(t.avatar),Y(3),Le(t.name),Y(2),Le(t.role[n.i18n.currentLang()]),Y(2),un(Pg(4,vS)),Y(3),Rt('"',t.text[n.i18n.currentLang()],'"')}}var vh=class i{currentMode=Nt("fullstack");i18n=re(Ln);fullstackHighlights=[{icon:"work_history",value:"3+",label:{en:"Years of experience",fr:"Ann\xE9es d'exp\xE9rience"}},{icon:"rocket_launch",value:"20+",label:{en:"Projects delivered",fr:"Projets livr\xE9s"}},{icon:"groups",value:"10+",label:{en:"Happy clients",fr:"Clients satisfaits"}},{icon:"school",value:"5+",label:{en:"Technologies mastered",fr:"Technologies ma\xEEtris\xE9es"}}];dataHighlights=[{icon:"memory",value:"5+",label:{en:"Deployed models",fr:"Mod\xE8les d\xE9ploy\xE9s"}},{icon:"dataset",value:"50M+",label:{en:"Data processed",fr:"Donn\xE9es trait\xE9es"}},{icon:"insights",value:"4+",label:{en:"ETL Pipelines",fr:"Pipelines ETL"}},{icon:"psychology",value:"2+",label:{en:"GenAI Projects",fr:"Projets GenAI"}}];autresHighlights=[{icon:"emoji_events",value:"1er",label:{en:"CEPA 2023 Prize",fr:"Prix CEPA 2023"}},{icon:"public",value:"Suisse",label:{en:"First GLOBAL 2022",fr:"First GLOBAL 2022"}},{icon:"language",value:"C1",label:{en:"French",fr:"Fran\xE7ais"}},{icon:"forum",value:"B2",label:{en:"English",fr:"Anglais"}}];highlights=In(()=>{switch(this.currentMode()){case"fullstack":return this.fullstackHighlights;case"data":return this.dataHighlights;case"autres":return this.autresHighlights}});fullstackTestimonials=[{name:"Sarah L.",role:{en:"Product Owner",fr:"Product Owner"},text:{en:"Charly transformed our vision into a robust and intuitive application. Outstanding work!",fr:"Charly a transform\xE9 notre vision en une application robuste et intuitive. Un travail exceptionnel !"},avatar:"S"},{name:"Marc D.",role:{en:"CTO",fr:"CTO"},text:{en:"Clean code, solid architecture, and delivered on time. A real added value for our team.",fr:"Code propre, architecture solide et livraison dans les temps. Une vraie valeur ajout\xE9e pour notre \xE9quipe."},avatar:"M"}];dataTestimonials=[{name:"Elodie P.",role:{en:"Head of Data",fr:"Head of Data"},text:{en:"His ETL pipelines drastically improved our processing times. Reliable and proactive.",fr:"Ses pipelines ETL ont drastiquement am\xE9lior\xE9 nos temps de traitement. Fiable et proactif."},avatar:"E"},{name:"Jean M.",role:{en:"Lead Data Scientist",fr:"Lead Data Scientist"},text:{en:"A smooth model deployment perfectly integrated into production. A rare technical expertise.",fr:"Un d\xE9ploiement de mod\xE8les fluide et parfaitement int\xE9gr\xE9 en production. Une expertise technique rare."},avatar:"J"}];autresTestimonials=[{name:"CEPA Jury",role:{en:"English Competition",fr:"Concours d'anglais"},text:{en:"An eloquent presentation and excellent team spirit that led to victory in 2023.",fr:"Une pr\xE9sentation \xE9loquente et un excellent esprit d'\xE9quipe qui ont men\xE9 \xE0 la victoire en 2023."},avatar:"C"},{name:"Mentor",role:{en:"First GLOBAL",fr:"First GLOBAL"},text:{en:"Remarkable technical curiosity and resilience during this international robotics competition.",fr:"Curiosit\xE9 technique et r\xE9silience remarquables lors de cette comp\xE9tition de robotique internationale."},avatar:"M"}];testimonials=In(()=>{switch(this.currentMode()){case"fullstack":return this.fullstackTestimonials;case"data":return this.dataTestimonials;case"autres":return this.autresTestimonials}});devCode=In(()=>this.currentMode()==="fullstack"?{role:{en:"'Full-Stack Developer'",fr:"'D\xE9veloppeur Full-Stack'"},stack:"['Angular', 'Spring Boot', 'PostgreSQL']",passion:"'clean code'"}:this.currentMode()==="data"?{role:{en:"'AI Data Engineer'",fr:"'AI Data Engineer'"},stack:"['Python', 'TensorFlow', 'PySpark']",passion:"'data architecture'"}:{role:{en:"'Competitor & Bilingual'",fr:"'Comp\xE9titeur & Bilingue'"},stack:"['Robotics', 'Leadership', 'Languages']",passion:"'challenges'"});aboutTexts=In(()=>this.currentMode()==="fullstack"?{p1:{en:"Passionate developer, I build modern web applications using clean and maintainable architectures. I enjoy transforming complex business needs into simple, accessible, and user-friendly interfaces.",fr:"D\xE9veloppeur passionn\xE9, je con\xE7ois des applications web modernes en m'appuyant sur des architectures propres et maintenables. J'aime transformer des besoins m\xE9tier complexes en interfaces simples, accessibles et agr\xE9ables \xE0 utiliser."},p2:{en:"Curious and meticulous, I am equally invested in code quality as I am in the final user experience \u2014 from prototyping to production.",fr:"Curieux et rigoureux, je m'investis autant sur la qualit\xE9 du code que sur l'exp\xE9rience finale livr\xE9e \xE0 l'utilisateur \u2014 du prototypage \xE0 la mise en production."},next:{en:"AI Data Engineer Profile",fr:"Profil AI Data Engineer"}}:this.currentMode()==="data"?{p1:{en:"Passionate AI Data Engineer, I design robust and scalable data architectures. My goal is to extract value from raw data by automating processing pipelines and deploying high-performance machine learning models.",fr:"AI Data Engineer passionn\xE9, je con\xE7ois des architectures de donn\xE9es robustes et \xE9volutives. Mon objectif est d'extraire la valeur des donn\xE9es brutes en automatisant leur traitement et en d\xE9ployant des mod\xE8les de machine learning performants."},p2:{en:"I ensure every integration pipeline is optimized, secure, and production-ready, while maintaining absolute code quality standards.",fr:"Je m'assure que chaque pipeline d'int\xE9gration est optimis\xE9, s\xE9curis\xE9 et pr\xEAt pour la production, tout en maintenant une exigence de qualit\xE9 de code absolue."},next:{en:"Beyond the code",fr:"Au-del\xE0 du code"}}:{p1:{en:"Beyond the code, I am a true competitor at heart. I had the opportunity to represent my country at the international robotics competition First GLOBAL 2022 in Switzerland, an unforgettable experience in high-pressure teamwork.",fr:"Au-del\xE0 du code, je suis un comp\xE9titeur dans l'\xE2me. J'ai eu l'opportunit\xE9 de repr\xE9senter mon pays lors de la comp\xE9tition internationale de robotique First GLOBAL 2022 en Suisse, une exp\xE9rience inoubliable de travail d'\xE9quipe sous pression."},p2:{en:"I am also the winner of the CEPA 2023 English competition as a team. My communication skills (C1 French, B2 English) allow me to easily thrive in international environments.",fr:"Je suis \xE9galement vainqueur du concours d'anglais CEPA 2023 en \xE9quipe. Une aisance en communication (C1 Fran\xE7ais, B2 Anglais) qui me permet d'\xE9voluer ais\xE9ment dans des contextes internationaux."},next:{en:"Full-Stack Profile",fr:"Profil Full-Stack"}});toggleMode(){let e=["fullstack","data","autres"],n=(e.indexOf(this.currentMode())+1)%e.length;this.currentMode.set(e[n])}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-about"]],decls:64,vars:13,consts:[["id","a-propos",1,"section","about"],["appReveal","left",1,"about__intro"],[1,"section-eyebrow"],[1,"about__title-group"],[1,"section-title"],["alt","Who Am I","loading","lazy",1,"about__title-image",3,"src"],[1,"about__text",3,"innerHTML"],[1,"about__text"],["role","button","tabindex","0",1,"about__next-btn",3,"click"],["aria-hidden","true",1,"code-card"],[1,"code-card__bar"],[1,"code-card__dot","code-card__dot--red"],[1,"code-card__dot","code-card__dot--yellow"],[1,"code-card__dot","code-card__dot--green"],[1,"code-card__filename"],[1,"code-card__body"],[1,"tok-keyword"],[1,"tok-var"],[1,"tok-prop"],[1,"tok-string"],["appReveal","right",1,"about__right-column"],[1,"about__highlights"],["appearance","outlined",1,"highlight-card"],[1,"about__testimonials"],[1,"about__testimonials-title"],[1,"about__testimonials-list"],[1,"testimonial-card"],[1,"highlight-card__icon"],[1,"highlight-card__value"],[1,"highlight-card__label"],[1,"testimonial-card__header"],[1,"testimonial-card__avatar"],[1,"testimonial-card__meta"],[1,"testimonial-card__name"],[1,"testimonial-card__role"],[1,"testimonial-card__stars"],[1,"star-icon"],[1,"testimonial-card__text"]],template:function(t,n){t&1&&(B(0,"section",0)(1,"div",1)(2,"p",2),J(3),z(),B(4,"div",3)(5,"h2",4),J(6),z(),tt(7,"img",5),z(),tt(8,"p",6),B(9,"p",7),J(10),B(11,"span",8),at("click",function(){return n.toggleMode()}),J(12),B(13,"mat-icon"),J(14,"keyboard_double_arrow_right"),z()()(),B(15,"div",9)(16,"div",10),tt(17,"span",11)(18,"span",12)(19,"span",13),B(20,"span",14),J(21),z()(),B(22,"pre",15)(23,"code")(24,"span",16),J(25,"const"),z(),J(26," "),B(27,"span",17),J(28,"developer"),z(),J(29,` = {
  `),B(30,"span",18),J(31,"name"),z(),J(32,": "),B(33,"span",19),J(34,"'Charly EKLU'"),z(),J(35,`,
  `),B(36,"span",18),J(37,"role"),z(),J(38,": "),B(39,"span",19),J(40),z(),J(41,`,
  `),B(42,"span",18),J(43,"stack"),z(),J(44,": "),B(45,"span",19),J(46),z(),J(47,`,
  `),B(48,"span",18),J(49,"passion"),z(),J(50,": "),B(51,"span",19),J(52),z(),J(53,`,
};`),z()()()(),B(54,"div",20)(55,"div",21),dn(56,bS,7,3,"mat-card",22,yS),z(),B(58,"div",23)(59,"h3",24),J(60),z(),B(61,"div",25),dn(62,SS,14,5,"div",26,xS),z()()()()),t&2&&(Y(3),Le(n.i18n.t("about.title")),Y(3),Le(n.i18n.t("about.title")),Y(),gt("src",n.currentMode()==="fullstack"?"images/WhoAmI.png":n.currentMode()==="data"?"images/WhoAmI_2.png":"images/WhoAmI_3.png",fr),Y(),gt("innerHTML",n.aboutTexts().p1[n.i18n.currentLang()],gg),Y(2),Rt(" ",n.aboutTexts().p2[n.i18n.currentLang()]," "),Y(2),Rt(" ",n.aboutTexts().next[n.i18n.currentLang()]," "),Y(9),Le(n.currentMode()==="fullstack"?"developer.ts":n.currentMode()==="data"?"data_engineer.py":"awards.yml"),Y(19),Le(n.devCode().role[n.i18n.currentLang()]),Y(6),Le(n.devCode().stack),Y(6),Le(n.devCode().passion),Y(3),gt("@flipList",n.currentMode()),Y(),un(n.highlights()),Y(4),Le(n.i18n.currentLang()==="en"?"What they say":"Ce qu'ils en disent"),Y(),gt("@flipList",n.currentMode()),Y(),un(n.testimonials()))},dependencies:[On,Dn,lv,av,Yn],styles:['@charset "UTF-8";.about[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.1fr .9fr;gap:3rem;align-items:start}.about[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{min-width:0}.about__text[_ngcontent-%COMP%]{color:var(--text-secondary);line-height:1.75;font-size:1rem}.about__right-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.about__highlights[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;align-content:start}.about__title-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem}.about__title-group[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{margin-bottom:0}.about__next-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.15rem;margin-left:.35rem;color:var(--primary-400);font-weight:600;cursor:pointer;transition:color .2s,text-shadow .2s;white-space:nowrap}.about__next-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem;margin-top:1px}.about__next-btn[_ngcontent-%COMP%]:hover{color:var(--primary-300);text-shadow:0 0 8px rgba(3,175,249,.35)}.about__title-image[_ngcontent-%COMP%]{height:144px;width:auto;object-fit:contain;display:block;filter:drop-shadow(0 0 10px rgba(3,175,249,.3))}.code-card[_ngcontent-%COMP%]{margin-top:2rem;border-radius:var(--radius-md);overflow:hidden;background:var(--bg-800);border:1px solid var(--border-default);box-shadow:var(--shadow-card)}.code-card__bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;padding:.65rem 1rem;background:var(--bg-700);border-bottom:1px solid rgba(3,175,249,.1)}.code-card__dot[_ngcontent-%COMP%]{width:.65rem;height:.65rem;border-radius:50%}.code-card__dot--red[_ngcontent-%COMP%]{background:#ff5f56}.code-card__dot--yellow[_ngcontent-%COMP%]{background:#ffbd2e}.code-card__dot--green[_ngcontent-%COMP%]{background:#27c93f}.code-card__filename[_ngcontent-%COMP%]{margin-left:.6rem;font-size:.75rem;color:var(--text-muted);font-family:Roboto Mono,ui-monospace,monospace}.code-card__body[_ngcontent-%COMP%]{margin:0;padding:1.25rem 1.5rem;overflow-x:auto;font-family:Roboto Mono,ui-monospace,monospace;font-size:.85rem;line-height:1.75;color:var(--text-primary);background:var(--bg-800)}.code-card__body[_ngcontent-%COMP%]   .tok-keyword[_ngcontent-%COMP%]{color:#ff7ab2}.code-card__body[_ngcontent-%COMP%]   .tok-var[_ngcontent-%COMP%]{color:var(--primary-300)}.code-card__body[_ngcontent-%COMP%]   .tok-prop[_ngcontent-%COMP%]{color:var(--primary-200)}.code-card__body[_ngcontent-%COMP%]   .tok-string[_ngcontent-%COMP%]{color:#ffcb6b}.highlight-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:.35rem;padding:1.25rem;background:var(--bg-800);border:1px solid var(--border-default);border-radius:var(--radius-md);transition:border-color .3s,box-shadow .3s}.highlight-card[_ngcontent-%COMP%]:hover{border-color:var(--border-active);box-shadow:0 0 20px #03aff91f}.highlight-card__icon[_ngcontent-%COMP%]{color:var(--primary-400);filter:drop-shadow(0 0 6px rgba(3,175,249,.4))}.highlight-card__value[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;color:var(--text-primary)}.highlight-card__label[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-secondary)}.about__testimonials[_ngcontent-%COMP%]{margin-top:1rem}.about__testimonials-title[_ngcontent-%COMP%]{font-size:.85rem;text-transform:uppercase;letter-spacing:.05em;color:var(--text-muted);margin-bottom:1rem;font-weight:600}.about__testimonials-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.testimonial-card[_ngcontent-%COMP%]{background:var(--bg-800);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:1.25rem;display:flex;flex-direction:column;gap:.85rem;transition:border-color .3s,box-shadow .3s}.testimonial-card[_ngcontent-%COMP%]:hover{border-color:#03aff94d;box-shadow:0 0 15px #03aff914}.testimonial-card__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.testimonial-card__avatar[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,var(--primary-700),var(--primary-400));color:#000106;font-weight:700;display:flex;align-items:center;justify-content:center;font-size:1.1rem;box-shadow:var(--glow-primary);flex-shrink:0}.testimonial-card__meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1}.testimonial-card__name[_ngcontent-%COMP%]{font-weight:600;color:var(--text-primary);font-size:.95rem}.testimonial-card__role[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-muted)}.testimonial-card__stars[_ngcontent-%COMP%]{display:flex;gap:2px;color:#ffbd2e}.testimonial-card__stars[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem;filter:drop-shadow(0 0 4px rgba(255,189,46,.4))}.testimonial-card__text[_ngcontent-%COMP%]{margin:0;font-size:.88rem;color:var(--text-secondary);line-height:1.6;font-style:italic}@media(max-width:900px){.about[_ngcontent-%COMP%]{grid-template-columns:1fr;text-align:center}.about__title-group[_ngcontent-%COMP%]{justify-content:center;flex-direction:column}.about__right-column[_ngcontent-%COMP%], .highlight-card[_ngcontent-%COMP%]{align-items:center}.code-card[_ngcontent-%COMP%]{text-align:left;width:100%}.about__testimonials-title[_ngcontent-%COMP%]{text-align:center}}@media(max-width:600px){.about__highlights[_ngcontent-%COMP%]{grid-template-columns:1fr}.about__title-group[_ngcontent-%COMP%]{text-align:center}}'],data:{animation:[tf("flipList",[rf("* => *",[sf(":enter",[Ec({transform:"perspective(600px) rotateY(-90deg)",opacity:0}),of(100,[nf("400ms cubic-bezier(0.4, 0.0, 0.2, 1)",Ec({transform:"perspective(600px) rotateY(0)",opacity:1}))])],{optional:!0})])])]}})};var wS=20,Hs=(()=>{class i{_ngZone=re(an);_platform=re(Vn);_renderer=re(Ri).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new $t;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let n=this.scrollContainers.get(t);n&&(n.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=wS){return this._platform.isBrowser?new ag(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=t>0?this._scrolled.pipe(Qu(t)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ma()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(t,n){let r=this.getAncestorScrollContainers(t);return this.scrolled(n).pipe(uo(s=>!s||r.indexOf(s)>-1))}getAncestorScrollContainers(t){let n=[];return this.scrollContainers.forEach((r,s)=>{this._scrollableContainsElement(s,t)&&n.push(s)}),n}_scrollableContainsElement(t,n){let r=Ca(n),s=t.getElementRef().nativeElement;do if(r==s)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(n){return new(n||i)};static \u0275prov=bn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var TS=20,Gs=(()=>{class i{_platform=re(Vn);_listeners;_viewportSize=null;_change=new $t;_document=re(vn);constructor(){let t=re(an),n=re(Ri).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=s=>this._change.next(s);this._listeners=[n.listen("window","resize",r),n.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+r,right:t.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,n=this._getWindow(),r=t.documentElement,s=r.getBoundingClientRect(),o=-s.top||t.body?.scrollTop||n.scrollY||r.scrollTop||0,a=-s.left||t.body?.scrollLeft||n.scrollX||r.scrollLeft||0;return{top:o,left:a}}change(t=TS){return t>0?this._change.pipe(Qu(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=bn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var zs=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Jt({type:i});static \u0275inj=Kt({})}return i})(),Jf=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Jt({type:i});static \u0275inj=Kt({imports:[Mn,zs,Mn,zs]})}return i})();var ll=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},cl=class extends ll{component;viewContainerRef;injector;projectableNodes;bindings;constructor(e,t,n,r,s){super(),this.component=e,this.viewContainerRef=t,this.injector=n,this.projectableNodes=r,this.bindings=s||null}},Io=class extends ll{templateRef;viewContainerRef;context;injector;constructor(e,t,n,r){super(),this.templateRef=e,this.viewContainerRef=t,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}},Qf=class extends ll{element;constructor(e){super(),this.element=e instanceof ln?e.nativeElement:e}},ep=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof cl)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof Io)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof Qf)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},hl=class extends ep{outletElement;_appRef;_defaultInjector;constructor(e,t,n){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=n}attachComponentPortal(e){let t;if(e.viewContainerRef){let n=e.injector||e.viewContainerRef.injector,r=n.get(xg,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:n,ngModuleRef:r,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let n=this._appRef,r=e.injector||this._defaultInjector||Rn.NULL,s=r.get(mc,n.injector);t=Lg(e.component,{elementInjector:r,environmentInjector:s,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0}),n.attachView(t.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,n=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=t.indexOf(n);r!==-1&&t.remove(r)}),this._attachedPortal=e,n}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(n,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var cv=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Jt({type:i});static \u0275inj=Kt({})}return i})();var hv=Kg();function _v(i){return new yh(i.get(Gs),i.get(vn))}var yh=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||"",this._previousHTMLStyles.top=e.style.top||"",e.style.left=Qt(-this._previousScrollPosition.left),e.style.top=Qt(-this._previousScrollPosition.top),e.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,n=e.style,r=t.style,s=n.scrollBehavior||"",o=r.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,e.classList.remove("cdk-global-scrollblock"),hv&&(n.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),hv&&(n.scrollBehavior=s,r.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,n=this._viewportRuler.getViewportSize();return t.scrollHeight>n.height||t.scrollWidth>n.width}};function vv(i,e){return new xh(i.get(Hs),i.get(an),i.get(Gs),e)}var xh=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,n,r){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=n,this._config=r}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(uo(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var dl=class{enable(){}disable(){}attach(){}};function tp(i,e){return e.some(t=>{let n=i.bottom<t.top,r=i.top>t.bottom,s=i.right<t.left,o=i.left>t.right;return n||r||s||o})}function dv(i,e){return e.some(t=>{let n=i.top<t.top,r=i.bottom>t.bottom,s=i.left<t.left,o=i.right>t.right;return n||r||s||o})}function Oo(i,e){return new bh(i.get(Hs),i.get(Gs),i.get(an),e)}var bh=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,n,r){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=n,this._config=r}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:r}=this._viewportRuler.getViewportSize();tp(t,[{width:n,height:r,bottom:r,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},yv=(()=>{class i{_injector=re(Rn);constructor(){}noop=()=>new dl;close=t=>vv(this._injector,t);block=()=>_v(this._injector);reposition=t=>Oo(this._injector,t);static \u0275fac=function(n){return new(n||i)};static \u0275prov=bn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Do=class{positionStrategy;scrollStrategy=new dl;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let n of t)e[n]!==void 0&&(this[n]=e[n])}}};var Mh=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var xv=(()=>{class i{_attachedOverlays=[];_document=re(vn);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let n=this._attachedOverlays.indexOf(t);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,n,r){return r.observers.length<1?!1:t.eventPredicate?t.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||i)};static \u0275prov=bn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),bv=(()=>{class i extends xv{_ngZone=re(an);_renderer=re(Ri).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let n=this._attachedOverlays;for(let r=n.length-1;r>-1;r--){let s=n[r];if(this.canReceiveEvent(s,t,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(r){return(t||(t=ef(i)))(r||i)}})();static \u0275prov=bn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Mv=(()=>{class i extends xv{_platform=re(Vn);_ngZone=re(an);_renderer=re(Ri).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let n=this._document.body,r={capture:!0},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(n,"pointerdown",this._pointerDownListener,r),s.listen(n,"click",this._clickListener,r),s.listen(n,"auxclick",this._clickListener,r),s.listen(n,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=af(t)};_clickListener=t=>{let n=af(t),r=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let o=s.length-1;o>-1;o--){let a=s[o],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,l))){if(uv(a.overlayElement,n)||uv(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static \u0275fac=(()=>{let t;return function(r){return(t||(t=ef(i)))(r||i)}})();static \u0275prov=bn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function uv(i,e){let t=typeof ShadowRoot<"u"&&ShadowRoot,n=e;for(;n;){if(n===i)return!0;n=t&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var Sv=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return i})(),wv=(()=>{class i{_platform=re(Vn);_containerElement;_document=re(vn);_styleLoader=re(Cs);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||cf()){let r=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let s=0;s<r.length;s++)r[s].remove()}let n=this._document.createElement("div");n.classList.add(t),cf()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(Sv)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=bn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),np=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,n,r){this._renderer=t,this._ngZone=n,this.element=e.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents="none",e.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ip(i){return i&&i.nodeType===1}var Sh=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new $t;_attachments=new $t;_detachments=new $t;_positionStrategy;_scrollStrategy;_locationChanges=Vr.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new $t;_outsidePointerEvents=new $t;_afterNextRenderRef;constructor(e,t,n,r,s,o,a,l,c,h=!1,u,d){this._portalOutlet=e,this._host=t,this._pane=n,this._config=r,this._ngZone=s,this._keyboardDispatcher=o,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=h,this._injector=u,this._renderer=d,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=pr(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=ce(ce({},this._config),e),this._updateElementSize()}setDirection(e){this._config=je(ce({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e=="string"?e:e.value:"ltr"}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=Qt(this._config.width),e.height=Qt(this._config.height),e.minWidth=Qt(this._config.minWidth),e.minHeight=Qt(this._config.minHeight),e.maxWidth=Qt(this._config.maxWidth),e.maxHeight=Qt(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?"":"none"}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ip(e)?e.after(this._host):e?.type==="parent"?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let e="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new np(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,n){let r=lf(t||[]).filter(s=>!!s);r.length&&(n?e.classList.add(...r):e.classList.remove(...r))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=pr(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}},fv="cdk-overlay-connected-position-bounding-box",ES=/([A-Za-z%]+)$/;function Lo(i,e){return new wh(e,i.get(Gs),i.get(vn),i.get(Vn),i.get(wv))}var wh=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new $t;_resizeSubscription=Vr.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,n,r,s){this._viewportRuler=t,this._document=n,this._platform=r,this._overlayContainer=s,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(fv),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,n=this._viewportRect,r=this._containerRect,s=[],o;for(let a of this._preferredPositions){let l=this._getOriginPoint(e,r,a),c=this._getOverlayPoint(l,t,a),h=this._getOverlayFit(c,t,n,a);if(h.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(h,c,n)){s.push({position:a,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!o||o.overlayFit.visibleArea<h.visibleArea)&&(o={overlayFit:h,overlayPoint:c,originPoint:l,position:a,overlayRect:t})}if(s.length){let a=null,l=-1;for(let c of s){let h=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);h>l&&(l=h,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ws(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(fv),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof ln?this._origin.nativeElement:ip(this._origin)?this._origin:null}_getOriginPoint(e,t,n){let r;if(n.originX=="center")r=e.left+e.width/2;else{let o=this._isRtl()?e.right:e.left,a=this._isRtl()?e.left:e.right;r=n.originX=="start"?o:a}t.left<0&&(r-=t.left);let s;return n.originY=="center"?s=e.top+e.height/2:s=n.originY=="top"?e.top:e.bottom,t.top<0&&(s-=t.top),{x:r,y:s}}_getOverlayPoint(e,t,n){let r;n.overlayX=="center"?r=-t.width/2:n.overlayX==="start"?r=this._isRtl()?-t.width:0:r=this._isRtl()?0:-t.width;let s;return n.overlayY=="center"?s=-t.height/2:s=n.overlayY=="top"?0:-t.height,{x:e.x+r,y:e.y+s}}_getOverlayFit(e,t,n,r){let s=mv(t),{x:o,y:a}=e,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(o+=l),c&&(a+=c);let h=0-o,u=o+s.width-n.width,d=0-a,f=a+s.height-n.height,g=this._subtractOverflows(s.width,h,u),y=this._subtractOverflows(s.height,d,f),m=g*y;return{visibleArea:m,isCompletelyWithinViewport:s.width*s.height===m,fitsInViewportVertically:y===s.height,fitsInViewportHorizontally:g==s.width}}_canFitWithFlexibleDimensions(e,t,n){if(this._hasFlexibleDimensions){let r=n.bottom-t.y,s=n.right-t.x,o=pv(this._overlayRef.getConfig().minHeight),a=pv(this._overlayRef.getConfig().minWidth),l=e.fitsInViewportVertically||o!=null&&o<=r,c=e.fitsInViewportHorizontally||a!=null&&a<=s;return l&&c}return!1}_pushOverlayOnScreen(e,t,n){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let r=mv(t),s=this._viewportRect,o=Math.max(e.x+r.width-s.width,0),a=Math.max(e.y+r.height-s.height,0),l=Math.max(s.top-n.top-e.y,0),c=Math.max(s.left-n.left-e.x,0),h=0,u=0;return r.width<=s.width?h=c||-o:h=e.x<this._getViewportMarginStart()?s.left-n.left-e.x:0,r.height<=s.height?u=l||-a:u=e.y<this._getViewportMarginTop()?s.top-n.top-e.y:0,this._previousPushAmount={x:h,y:u},{x:e.x+h,y:e.y+u}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!CS(this._lastScrollVisibility,n)){let r=new Mh(e,n);this._positionChanges.next(r)}this._lastScrollVisibility=n}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,r=e.overlayY;e.overlayX==="center"?n="center":this._isRtl()?n=e.overlayX==="start"?"right":"left":n=e.overlayX==="start"?"left":"right";for(let s=0;s<t.length;s++)t[s].style.transformOrigin=`${n} ${r}`}_calculateBoundingBoxRect(e,t){let n=this._viewportRect,r=this._isRtl(),s,o,a;if(t.overlayY==="top")o=e.y,s=n.height-o+this._getViewportMarginBottom();else if(t.overlayY==="bottom")a=n.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),s=n.height-a+this._getViewportMarginTop();else{let f=Math.min(n.bottom-e.y+n.top,e.y),g=this._lastBoundingBoxSize.height;s=f*2,o=e.y-f,s>g&&!this._isInitialRender&&!this._growAfterOpen&&(o=e.y-g/2)}let l=t.overlayX==="start"&&!r||t.overlayX==="end"&&r,c=t.overlayX==="end"&&!r||t.overlayX==="start"&&r,h,u,d;if(c)d=n.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),h=e.x-this._getViewportMarginStart();else if(l)u=e.x,h=n.right-e.x-this._getViewportMarginEnd();else{let f=Math.min(n.right-e.x+n.left,e.x),g=this._lastBoundingBoxSize.width;h=f*2,u=e.x-f,h>g&&!this._isInitialRender&&!this._growAfterOpen&&(u=e.x-g/2)}return{top:o,left:u,bottom:a,right:d,width:h,height:s}}_setBoundingBoxStyles(e,t){let n=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let s=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;r.width=Qt(n.width),r.height=Qt(n.height),r.top=Qt(n.top)||"auto",r.bottom=Qt(n.bottom)||"auto",r.left=Qt(n.left)||"auto",r.right=Qt(n.right)||"auto",t.overlayX==="center"?r.alignItems="center":r.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?r.justifyContent="center":r.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",s&&(r.maxHeight=Qt(s)),o&&(r.maxWidth=Qt(o))}this._lastBoundingBoxSize=n,Ws(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Ws(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ws(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(e,t){let n={},r=this._hasExactPosition(),s=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(r){let h=this._viewportRuler.getViewportScrollPosition();Ws(n,this._getExactOverlayY(t,e,h)),Ws(n,this._getExactOverlayX(t,e,h))}else n.position="static";let a="",l=this._getOffset(t,"x"),c=this._getOffset(t,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),n.transform=a.trim(),o.maxHeight&&(r?n.maxHeight=Qt(o.maxHeight):s&&(n.maxHeight="")),o.maxWidth&&(r?n.maxWidth=Qt(o.maxWidth):s&&(n.maxWidth="")),Ws(this._pane.style,n)}_getExactOverlayY(e,t,n){let r={top:"",bottom:""},s=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,n)),e.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;r.bottom=`${o-(s.y+this._overlayRect.height)}px`}else r.top=Qt(s.y);return r}_getExactOverlayX(e,t,n){let r={left:"",right:""},s=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,n));let o;if(this._isRtl()?o=e.overlayX==="end"?"left":"right":o=e.overlayX==="end"?"right":"left",o==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(s.x+this._overlayRect.width)}px`}else r.left=Qt(s.x);return r}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),n=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:dv(e,n),isOriginOutsideView:tp(e,n),isOverlayClipped:dv(t,n),isOverlayOutsideView:tp(t,n)}}_subtractOverflows(e,...t){return t.reduce((n,r)=>n-Math.max(r,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+e-this._getViewportMarginEnd(),bottom:n.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t==="x"?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&lf(e).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof ln)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,n=e.height||0;return{top:e.y,bottom:e.y+n,left:e.x,right:e.x+t,height:n,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();e&&(t.style.display="block");let n=t.getBoundingClientRect();return e&&(t.style.display=""),n}};function Ws(i,e){for(let t in e)e.hasOwnProperty(t)&&(i[t]=e[t]);return i}function pv(i){if(typeof i!="number"&&i!=null){let[e,t]=i.split(ES);return!t||t==="px"?parseFloat(e):null}return i||null}function mv(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function CS(i,e){return i===e?!0:i.isOriginClipped===e.isOriginClipped&&i.isOriginOutsideView===e.isOriginOutsideView&&i.isOverlayClipped===e.isOverlayClipped&&i.isOverlayOutsideView===e.isOverlayOutsideView}var gv="cdk-global-overlay-wrapper";function Tv(i){return new Th}var Th=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(gv),this._isDisposed=!1}top(e=""){return this._bottomOffset="",this._topOffset=e,this._alignItems="flex-start",this}left(e=""){return this._xOffset=e,this._xPosition="left",this}bottom(e=""){return this._topOffset="",this._bottomOffset=e,this._alignItems="flex-end",this}right(e=""){return this._xOffset=e,this._xPosition="right",this}start(e=""){return this._xOffset=e,this._xPosition="start",this}end(e=""){return this._xOffset=e,this._xPosition="end",this}width(e=""){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=""){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=""){return this.left(e),this._xPosition="center",this}centerVertically(e=""){return this.top(e),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:r,height:s,maxWidth:o,maxHeight:a}=n,l=(r==="100%"||r==="100vw")&&(!o||o==="100%"||o==="100vw"),c=(s==="100%"||s==="100vh")&&(!a||a==="100%"||a==="100vh"),h=this._xPosition,u=this._xOffset,d=this._overlayRef.getConfig().direction==="rtl",f="",g="",y="";l?y="flex-start":h==="center"?(y="center",d?g=u:f=u):d?h==="left"||h==="end"?(y="flex-end",f=u):(h==="right"||h==="start")&&(y="flex-start",g=u):h==="left"||h==="start"?(y="flex-start",f=u):(h==="right"||h==="end")&&(y="flex-end",g=u),e.position=this._cssPosition,e.marginLeft=l?"0":f,e.marginTop=c?"0":this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=l?"0":g,t.justifyContent=y,t.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,n=t.style;t.classList.remove(gv),n.justifyContent=n.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position="",this._overlayRef=null,this._isDisposed=!0}},Ev=(()=>{class i{_injector=re(Rn);constructor(){}global(){return Tv()}flexibleConnectedTo(t){return Lo(this._injector,t)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=bn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Cv=new on("OVERLAY_DEFAULT_CONFIG");function No(i,e){i.get(Cs).load(Sv);let t=i.get(wv),n=i.get(vn),r=i.get(mo),s=i.get(bc),o=i.get(_o),a=i.get(Gi,null,{optional:!0})||i.get(Ri).createRenderer(null,null),l=new Do(e),c=i.get(Cv,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||o.value,"showPopover"in n.body?l.usePopover=e?.usePopover??c:l.usePopover=!1;let h=n.createElement("div"),u=n.createElement("div");h.id=r.getId("cdk-overlay-"),h.classList.add("cdk-overlay-pane"),u.appendChild(h),l.usePopover&&(u.setAttribute("popover","manual"),u.classList.add("cdk-overlay-popover"));let d=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return ip(d)?d.after(u):d?.type==="parent"?d.element.appendChild(u):t.getContainerElement().appendChild(u),new Sh(new hl(h,s,i),u,h,l,i.get(an),i.get(bv),n,i.get(Ng),i.get(Mv),e?.disableAnimations??i.get(vc,null,{optional:!0})==="NoopAnimations",i.get(mc),a)}var Av=(()=>{class i{scrollStrategies=re(yv);_positionBuilder=re(Ev);_injector=re(Rn);constructor(){}create(t){return No(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(n){return new(n||i)};static \u0275prov=bn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ul=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Jt({type:i});static \u0275inj=Kt({providers:[Av],imports:[Mn,cv,Jf,Jf]})}return i})();var AS=["tooltip"],PS=20;var RS=new on("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=re(Rn);return()=>Oo(i,{scrollThrottle:PS})}}),IS=new on("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Pv="tooltip-panel",DS={passive:!0},OS=8,LS=8,NS=24,FS=200,sp=(()=>{class i{_elementRef=re(ln);_ngZone=re(an);_platform=re(Vn);_ariaDescriber=re($g);_focusMonitor=re(Aa);_dir=re(_o);_injector=re(Rn);_viewContainerRef=re(Ts);_mediaMatcher=re(qg);_document=re(vn);_renderer=re(Gi);_animationsDisabled=go();_defaultOptions=re(IS,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Rv;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=As(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let n=As(t);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Ea(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Ea(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let n=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new $t;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=OS}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Pi(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(n);this._detach(),this._portal=this._portal||new cl(this._tooltipComponent,this._viewContainerRef);let s=this._tooltipInstance=r.attach(this._portal).instance;s._triggerElement=this._elementRef.nativeElement,s._mouseLeaveHideDelay=this._hideDelay,s.afterHidden().pipe(Pi(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),s.show(t)}hide(t=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(t):(n._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&o._origin instanceof ln)return this._overlayRef;this._detach()}let n=this._injector.get(Hs).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${Pv}`,s=Lo(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation("global");return s.positionChanges.pipe(Pi(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=No(this._injector,{direction:this._dir,positionStrategy:s,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(RS)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Pi(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Pi(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Pi(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Pi(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let n=t.getConfig().positionStrategy,r=this._getOrigin(),s=this._getOverlayPosition();n.withPositions([this._addOffset(ce(ce({},r.main),s.main)),this._addOffset(ce(ce({},r.fallback),s.fallback))])}_addOffset(t){let n=LS,r=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-n:t.originY==="bottom"?t.offsetY=n:t.originX==="start"?t.offsetX=r?-n:n:t.originX==="end"&&(t.offsetX=r?n:-n),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"||n=="below"?r={originX:"center",originY:n=="above"?"top":"bottom"}:n=="before"||n=="left"&&t||n=="right"&&!t?r={originX:"start",originY:"center"}:(n=="after"||n=="right"&&t||n=="left"&&!t)&&(r={originX:"end",originY:"center"});let{x:s,y:o}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:s,originY:o}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"?r={overlayX:"center",overlayY:"bottom"}:n=="below"?r={overlayX:"center",overlayY:"top"}:n=="before"||n=="left"&&t||n=="right"&&!t?r={overlayX:"end",overlayY:"center"}:(n=="after"||n=="right"&&t||n=="left"&&!t)&&(r={overlayX:"start",overlayY:"center"});let{x:s,y:o}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:s,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),pr(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,n){return this.position==="above"||this.position==="below"?n==="top"?n="bottom":n==="bottom"&&(n="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:n}}_updateCurrentPositionClass(t){let{overlayY:n,originX:r,originY:s}=t,o;if(n==="center"?this._dir&&this._dir.value==="rtl"?o=r==="end"?"left":"right":o=r==="start"?"left":"right":o=n==="bottom"&&s==="top"?"above":"below",o!==this._currentPosition){let a=this._overlayRef;if(a){let l=`${this._cssClassPrefix}-${Pv}-`;a.removePanelClass(l+this._currentPosition),a.addPanelClass(l+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let n=t.targetTouches?.[0],r=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let s=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??s)})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let n;t.x!==void 0&&t.y!==void 0&&(n=t),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let n=t.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(t.clientX,t.clientY),r=this._elementRef.nativeElement;n!==r&&!r.contains(n)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",t),this._addListener("touchcancel",t)}}}_addListener(t,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,n,DS))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let n=this._elementRef.nativeElement,r=n.style;(t==="on"||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(t==="on"||!n.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||pr({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!Cc(t):!0;static \u0275fac=function(n){return new(n||i)};static \u0275dir=qn({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(n,r){n&2&&Pt("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),Rv=(()=>{class i{_changeDetectorRef=re(Es);_elementRef=re(ln);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=go();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new $t;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>NS&&t.width>=FS}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let n=this._tooltip.nativeElement,r=this._showAnimation,s=this._hideAnimation;if(n.classList.remove(t?s:r),n.classList.add(t?r:s),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(n);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(n.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(n,r){if(n&1&&ti(AS,7),n&2){let s;Tt(s=Et())&&(r._tooltip=s.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(n,r){n&1&&at("mouseleave",function(o){return r._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(n,r){n&1&&(zr(0,"div",1,0),wc("animationend",function(o){return r._handleAnimationEnd(o)}),zr(2,"div",2),J(3),fo()()),n&2&&(Gr(r.tooltipClass),Pt("mdc-tooltip--multiline",r._isMultiline),Y(3),Le(r.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return i})();var Iv=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Jt({type:i});static \u0275inj=Kt({imports:[jg,ul,Mn,zs]})}return i})();var US=(i,e)=>e.category,BS=(i,e)=>e.name;function VS(i,e){if(i&1&&(B(0,"li",16)(1,"div",17),tt(2,"i",18),B(3,"span",19),J(4),z(),B(5,"span",20),J(6),z()()()),i&2){let t=e.$implicit,n=Ke(2);gt("matTooltip",t.projects[n.i18n.currentLang()]),Y(2),Gr(Ag("",t.icon," colored skill-item__icon")),Y(2),Le(t.name),Y(2),Le(t.level[n.i18n.currentLang()])}}function zS(i,e){if(i&1&&(B(0,"div",13)(1,"div",14)(2,"mat-icon"),J(3),z(),B(4,"h3"),J(5),z()(),B(6,"ul",15),dn(7,VS,7,6,"li",16,BS),z()()),i&2){let t=e.$implicit,n=e.$index,r=Ke();gt("revealDelay",n*120),Y(3),Le(t.icon),Y(2),Le(r.i18n.t(t.category)),Y(2),un(t.items)}}var Eh=class i{revealed=Nt(!1);isOpen=Nt(!1);i18n=re(Ln);toggleOpen(){this.isOpen.update(e=>!e)}groups=[{category:"skills.category.frontend",icon:"web",items:[{name:"Angular",icon:"devicon-angular-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Projects: Portfolio, KPI Dashboard, E-commerce app",fr:"Projets: Portfolio, Dashboard KPI, E-commerce app"}},{name:"TypeScript",icon:"devicon-typescript-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Projects: All recent frontend projects",fr:"Projets: Tous les projets frontend r\xE9cents"}},{name:"JavaScript",icon:"devicon-javascript-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Projects: GSAP animations, Utility scripts",fr:"Projets: Animations GSAP, Scripts utilitaires"}},{name:"HTML5/Sass",icon:"devicon-html5-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Projects: Design systems, Pixel-perfect integration",fr:"Projets: Design systems, Int\xE9gration pixel-perfect"}}]},{category:"skills.category.backend",icon:"dns",items:[{name:"Node.js",icon:"devicon-nodejs-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Projects: RESTful APIs, Automation scripts",fr:"Projets: API RESTful, Scripts d'automatisation"}},{name:"Spring Boot",icon:"devicon-spring-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Projects: Banking microservices, E-commerce backend",fr:"Projets: Microservices bancaires, Backend e-commerce"}},{name:"Java",icon:"devicon-java-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Projects: Algorithms, Academic projects",fr:"Projets: Algorithmique, Projets acad\xE9miques"}},{name:"Python",icon:"devicon-python-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Projects: Data scripts, AI models",fr:"Projets: Scripts Data, Mod\xE8les IA"}}]},{category:"skills.category.database",icon:"storage",items:[{name:"PostgreSQL",icon:"devicon-postgresql-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Projects: Main backend, Complex queries",fr:"Projets: Backend principal, Requ\xEAtes complexes"}},{name:"MySQL",icon:"devicon-mysql-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Projects: Legacy systems, Personal projects",fr:"Projets: Syst\xE8mes legacy, Projets personnels"}},{name:"MongoDB",icon:"devicon-mongodb-plain",level:{en:"Basics / Learning",fr:"Notions / En apprentissage"},projects:{en:"Projects: Proof of concepts (PoC)",fr:"Projets: Proof of concepts (PoC)"}}]},{category:"skills.category.tools",icon:"construction",items:[{name:"Git",icon:"devicon-git-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Projects: Daily versioning, CI/CD",fr:"Projets: Versioning quotidien, CI/CD"}},{name:"Docker",icon:"devicon-docker-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Projects: Database and API containerization",fr:"Projets: Conteneurisation de bases de donn\xE9es et API"}},{name:"Figma",icon:"devicon-figma-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Projects: UI/UX mockups, Design systems",fr:"Projets: Maquettage UI/UX, Design systems"}},{name:"Jest",icon:"devicon-jest-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Projects: Frontend unit testing",fr:"Projets: Tests unitaires frontend"}}]}];ngAfterViewInit(){setTimeout(()=>this.revealed.set(!0),150)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-skills"]],decls:19,vars:6,consts:[["id","competences",1,"section"],["appReveal","left"],[1,"section-eyebrow"],[1,"section-header-row"],[1,"section-title"],["mat-icon-button","",3,"click"],[1,"collapsible-content"],[1,"collapsible-content__inner"],[1,"skills"],[1,"skills__left-column"],["src","images/CHARLY_TECH.png","alt","Tech Stack","loading","lazy",1,"skills__large-image"],[1,"skills__right-column"],[1,"skills__groups"],["appReveal","bottom",1,"skills__group",3,"revealDelay"],[1,"skills__group-header"],[1,"skills__list"],["matTooltipPosition","above","matTooltipClass","skill-tooltip","matTooltipTouchGestures","off",1,"skill-item",3,"matTooltip"],[1,"skill-item__label"],["aria-hidden","true"],[1,"skill-item__name"],[1,"skill-item__level"]],template:function(t,n){t&1&&(B(0,"section",0)(1,"div",1)(2,"p",2),J(3),z(),B(4,"div",3)(5,"h2",4),J(6),z(),B(7,"button",5),at("click",function(){return n.toggleOpen()}),B(8,"mat-icon"),J(9),z()()()(),B(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9),tt(14,"img",10),z(),B(15,"div",11)(16,"div",12),dn(17,zS,9,3,"div",13,US),z()()()()()()),t&2&&(Y(3),Le(n.i18n.t("skills.title")),Y(3),Le(n.i18n.t("skills.title")),Y(),Gt("aria-label",n.i18n.t("skills.aria_toggle")),Y(2),Le(n.isOpen()?"remove":"add"),Y(),Pt("is-open",n.isOpen()),Y(7),un(n.groups))},dependencies:[On,Dn,Iv,sp,Yn],styles:['@charset "UTF-8";.skills[_ngcontent-%COMP%]{display:grid;grid-template-columns:.8fr 1.2fr;gap:3rem;align-items:start}.skills__left-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.skills__large-image[_ngcontent-%COMP%]{width:100%;max-width:350px;height:auto;object-fit:contain;margin-top:1.5rem;align-self:flex-start;filter:drop-shadow(0 0 15px rgba(3,175,249,.15))}.skills__right-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.skills__groups[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}.skills__group[_ngcontent-%COMP%]{background:var(--bg-800);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:1.5rem;transition:border-color .3s,box-shadow .3s}.skills__group[_ngcontent-%COMP%]:hover{border-color:#03aff94d;box-shadow:0 0 20px #03aff914}.skills__group-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;margin-bottom:1.25rem;color:var(--primary-400)}.skills__group-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:600;color:var(--text-primary);letter-spacing:-.01em}.skills__group-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{filter:drop-shadow(0 0 6px rgba(3,175,249,.35))}.skills__list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1.1rem}.skill-item[_ngcontent-%COMP%]{padding:.6rem .8rem;border-radius:var(--radius-sm);background:#03aff908;border:1px solid transparent;transition:background .2s,border-color .2s;cursor:help}.skill-item[_ngcontent-%COMP%]:hover{background:#03aff914;border-color:#03aff933}.skill-item__label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.65rem;font-size:.88rem;color:var(--text-secondary);font-weight:500}.skill-item__icon[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--primary-400);opacity:.9}.skill-item__name[_ngcontent-%COMP%]{color:var(--text-primary);font-weight:600}.skill-item__level[_ngcontent-%COMP%]{margin-left:auto;font-size:.72rem;color:var(--text-muted)}@media(max-width:992px){.skills[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:2rem;text-align:center}.skills__left-column[_ngcontent-%COMP%]{align-items:center}.skills__large-image[_ngcontent-%COMP%]{max-width:300px;margin:1.5rem auto 0;align-self:center}.skills__groups[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}}@media(max-width:600px){.skills__groups[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem}.skills__group[_ngcontent-%COMP%]{padding:1.1rem}.skills__group-header[_ngcontent-%COMP%]{justify-content:center;margin-bottom:.85rem}.skills__list[_ngcontent-%COMP%]{gap:.6rem}.skill-item[_ngcontent-%COMP%]{padding:.45rem .65rem}.skill-item__label[_ngcontent-%COMP%]{font-size:.8rem;gap:.5rem}.skill-item__icon[_ngcontent-%COMP%]{font-size:1.05rem}.skill-item__level[_ngcontent-%COMP%]{font-size:.65rem}}']})};var yi=typeof window<"u",Ch=yi?window:null,es=yi?document:null,It={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},lt={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Sn={NONE:0,AUTO:1,FORCE:2},nn={replace:0,none:1,blend:2},op=Symbol(),Zi=Symbol(),Ah=Symbol(),ts=Symbol(),Dv=Symbol(),_t=1e-11,fl=1e12,$i=1e3,pl=240,xi="",Ov="var(",ml=[],Ph=(()=>{let i=new Map;return i.set("x","translateX"),i.set("y","translateY"),i.set("z","translateZ"),i})(),Fo=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],Lv=Fo.reduce((i,e)=>je(ce({},i),{[e]:e+"("}),{}),Gn=()=>{},Nv=i=>i,Fv=/\)\s*[-.\d]/,kv=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,Uv=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,Bv=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Vv=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,zv=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,ap=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,Rh=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,Hv=/([a-z])([A-Z])/g,Gv=/(\*=|\+=|-=)/,Wv=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;var ko={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:pl,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:$i,delay:0,loopDelay:0,ease:"out(2)",composition:nn.replace,modifier:Nv,onBegin:Gn,onBeforeUpdate:Gn,onUpdate:Gn,onLoop:Gn,onPause:Gn,onComplete:Gn,onRender:Gn},gl={current:null,root:es},Vt={defaults:ko,precision:4,timeScale:1,tickThreshold:200,editor:null},lp={version:"4.5.0",engine:null};yi&&(Ch.AnimeJS||(Ch.AnimeJS=[]),Ch.AnimeJS.push(lp));var cp=i=>i.replace(Hv,"$1-$2").toLowerCase(),ri=(i,e)=>i.indexOf(e)===0,Mr=Date.now,bi=Array.isArray,Ih=i=>i&&i.constructor===Object,Mi=i=>typeof i=="number"&&!isNaN(i),Si=i=>typeof i=="string",wi=i=>typeof i=="function",nt=i=>typeof i>"u",Ki=i=>nt(i)||i===null,Dh=i=>yi&&i instanceof SVGElement,hp=i=>kv.test(i),dp=i=>ri(i,"rgb"),up=i=>ri(i,"hsl"),qv=i=>hp(i)||(dp(i)||up(i))&&(i[i.length-1]===")"||!Fv.test(i)),_l=i=>!Vt.defaults.hasOwnProperty(i),HS=["opacity","rotate","overflow","color"],Yv=(i,e)=>{if(HS.includes(e))return!1;if(i.getAttribute(e)||e in i){if(e==="scale"){let t=i.parentNode;return t&&t.tagName==="filter"}return!0}},Oh=i=>Si(i)?parseFloat(i):i,Xs=Math.pow,vl=Math.sqrt,jv=Math.sin,Zv=Math.cos,yl=Math.abs;var qs=Math.floor,$v=Math.asin;var xl=Math.PI,Xv=Math.round,Zn=(i,e,t)=>i<e?e:i>t?t:i,wt=(i,e)=>{if(e<0)return i;if(!e)return Xv(i);let t=10**e;return Xv(i*t)/t};var Uo=(i,e,t)=>t===1?e:t===0?i:i+(e-i)*t,bl=i=>i===1/0?fl:i===-1/0?-fl:i,Ys=i=>i<=_t?_t:bl(wt(i,11)),rn=i=>bi(i)?[...i]:i,Kv=(i,e)=>{let t=ce({},i);for(let n in e){let r=i[n];t[n]=nt(r)?e[n]:r}return t},kt=(i,e,t,n="_prev",r="_next")=>{let s=i._head,o=r;for(t&&(s=i._tail,o=n);s;){let a=s[o];e(s),s=a}},js=(i,e,t="_prev",n="_next")=>{let r=e[t],s=e[n];r?r[n]=s:i._head=s,s?s[t]=r:i._tail=r,e[t]=null,e[n]=null},Sr=(i,e,t,n="_prev",r="_next")=>{let s=i._tail;for(;s&&t&&t(s,e);)s=s[n];let o=s?s[r]:i._head;s?s[r]=e:i._head=e,o?o[n]=e:i._tail=e,e[n]=s,e[r]=o};var Jv=(i,e,t)=>{let n=i.style.transform;if(n){let r=i[ts],s=0,o=n.length,a;for(;s<o;){for(;s<o&&n.charCodeAt(s)===32;)s++;if(s>=o)break;let c=s;for(;s<o&&n.charCodeAt(s)!==40;)s++;if(s>=o)break;let h=n.substring(c,s),u=1,d=s+1,f=-1,g=-1;for(s++;s<o&&u>0;){let m=n.charCodeAt(s);m===40?u++:m===41?u--:m===44&&u===1&&(f===-1?f=s:g===-1&&(g=s)),s++}let y=s-1;h==="translate"||h==="translate3d"?(f===-1?r.translateX=n.substring(d,y).trim():(r.translateX=n.substring(d,f).trim(),g===-1?r.translateY=n.substring(f+1,y).trim():(r.translateY=n.substring(f+1,g).trim(),r.translateZ=n.substring(g+1,y).trim())),a=n.substring(d,y)):h==="scale"||h==="scale3d"?f===-1?r.scale=n.substring(d,y).trim():(r.scaleX=n.substring(d,f).trim(),g===-1?r.scaleY=n.substring(f+1,y).trim():(r.scaleY=n.substring(f+1,g).trim(),r.scaleZ=n.substring(g+1,y).trim())):r[h]=n.substring(d,y)}if(e==="translate3d"&&a)return t&&(t[e]=a),a;let l=r[e];if(!nt(l))return t&&(t[e]=l),l}return e==="translate3d"?"0px, 0px, 0px":e==="rotate3d"?"0, 0, 0, 0deg":ri(e,"scale")?"1":ri(e,"rotate")||ri(e,"skew")?"0deg":"0px"},Lh=i=>{let e=xi;for(let t=0,n=Fo.length;t<n;t++){let r=Fo[t],s=i[r];if(s!==void 0){if(r==="translateX"){let o=i.translateY;if(o!==void 0){let a=i.translateZ;a!==void 0?(e+=`translate3d(${s},${o},${a}) `,t+=2):(e+=`translate(${s},${o}) `,t+=1);continue}}if(r==="scaleX"&&i.scale===void 0){let o=i.scaleY;if(o!==void 0){let a=i.scaleZ;a!==void 0?(e+=`scale3d(${s},${o},${a}) `,t+=2):(e+=`scale(${s},${o}) `,t+=1);continue}}e+=`${Lv[r]}${s}) `}r==="rotateZ"&&i.rotate3d!==void 0&&(e+=`rotate3d(${i.rotate3d}) `)}return i.matrix!==void 0&&(e+=`matrix(${i.matrix}) `),i.matrix3d!==void 0&&(e+=`matrix3d(${i.matrix3d}) `),e};var fp=[];function Nh(i,e){if(!i)return null;let t=fp.length;e:for(let n=0;n<t;n++){let r=fp[n];if(r.detect&&!r.detect(i))continue;let s=r.targetAdapters;for(let o=0,a=s.length;o<a;o++){let l=s[o];if(l.detect(i)){let c=l.props[e];if(c&&(!c.gate||c.gate(i)))return c;break e}}}for(let n=0;n<t;n++){let r=fp[n];if(r.detect&&!r.detect(i))continue;let s=r.propertyResolvers;for(let o=0,a=s.length;o<a;o++){let l=s[o](i,e);if(l)return l}}return null}var GS=i=>{let e=Uv.exec(i)||Bv.exec(i),t=nt(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],t]},WS=i=>{let e=i.length,t=e===4||e===5;return[+("0x"+i[1]+i[t?1:2]),+("0x"+i[t?2:3]+i[t?2:4]),+("0x"+i[t?3:5]+i[t?3:6]),e===5||e===9?+(+("0x"+i[t?4:7]+i[t?4:8])/255).toFixed(3):1]},pp=(i,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i),XS=i=>{let e=Vv.exec(i)||zv.exec(i),t=+e[1]/360,n=+e[2]/100,r=+e[3]/100,s=nt(e[4])?1:+e[4],o,a,l;if(n===0)o=a=l=r;else{let c=r<.5?r*(1+n):r+n-r*n,h=2*r-c;o=wt(pp(h,c,t+1/3)*255,0),a=wt(pp(h,c,t)*255,0),l=wt(pp(h,c,t-1/3)*255,0)}return[o,a,l,s]},Qv=i=>dp(i)?GS(i):hp(i)?WS(i):up(i)?XS(i):[0,0,0,1];var mn=(i,e)=>nt(i)?e:i,ey=(i,e)=>{let t=i.match(Wv),n=e[Zi]?e:document.documentElement,r=getComputedStyle(n)?.getPropertyValue(t[1]);return(!r||r.trim()===xi)&&t[2]&&(r=t[2].trim()),r||0},Ji=(i,e,t,n,r,s)=>{if(wi(i)){if(!r){let a=i(e,t,n,s);return isNaN(+a)?a||0:+a}let o=()=>{let a=i(e,t,n,s);return isNaN(+a)?a||0:+a};return r.func=o,o()}if(Si(i)&&ri(i,Ov)){if(!r)return ey(i,e);let o=()=>ey(i,e);return r.func=o,o()}return i},mp=(i,e)=>i[Zi]?i[Ah]&&Yv(i,e)?It.ATTRIBUTE:Fo.includes(e)||Ph.get(e)?It.TRANSFORM:ri(e,"--")?It.CSS_VAR:e in i.style?It.CSS:e in i?It.OBJECT:It.ATTRIBUTE:It.OBJECT,ty=(i,e,t)=>{let n=i.style[e];n&&t&&(t[e]=n);let r=n||getComputedStyle(i[Dv]||i).getPropertyValue(e);return r==="auto"?"0":r},ns=(i,e,t,n)=>{let r=nt(t)?mp(i,e):t,s=Nh(i,e);if(s){let o=s.get(i);return o&&n&&(n[e]=o),o??0}if(r===It.OBJECT){let o=i[e];return o&&n&&(n[e]=o),o||0}if(r===It.ATTRIBUTE){let o=i.getAttribute(e);return o&&n&&(n[e]=o),o}return r===It.TRANSFORM?Jv(i,e,n):r===It.CSS_VAR?ty(i,e,n).trimStart():ty(i,e,n)},Bo=(i,e,t)=>t==="-"?i-e:t==="+"?i+e:i*e,Fh=()=>({t:lt.NUMBER,n:0,u:null,o:null,d:null,s:null}),$n=(i,e)=>{if(e.t=lt.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!i)return e;let t=+i;if(!isNaN(t))return e.n=t,e;let n=i;n[1]==="="&&(e.o=n[0],n=n.slice(2));let r=n.includes(" ")?!1:Rh.exec(n);if(r)return e.t=lt.UNIT,e.n=+r[1],e.u=r[2],e;if(e.o)return e.n=+n,e;if(qv(n))return e.t=lt.COLOR,e.d=Qv(n),e;{let s=n.match(ap);return e.t=lt.COMPLEX,e.d=s?s.map(Number):[],e.s=n.split(ap)||[],e}},gp=(i,e)=>(e.t=i._valueType,e.n=i._toNumber,e.u=i._unit,e.o=null,e.d=rn(i._toNumbers),e.s=rn(i._strings),e),si=Fh(),kh=(i,e,t)=>{let n=i._modifier,r=i._fromNumbers,s=i._toNumbers,o=i._strings,a=o[0];for(let l=0,c=s.length;l<c;l++){let h=n(wt(Uo(r[l],s[l],e),t)),u=o[l+1];a+=`${u?h+u:h}`,i._numbers[l]=h}return a};var Ml=(i,e,t,n,r)=>{let s=i.parent,o=i.duration,a=i.completed,l=i.iterationDuration,c=i.iterationCount,h=i._currentIteration,u=i._loopDelay,d=i._reversed,f=i._alternate,g=i._hasChildren,y=i._delay,m=i._currentTime,p=y+l,E=e-y,A=Zn(m,-y,o),b=Zn(E,-y,o),w=E-m,M=b>0,C=b>=o,v=o<=_t,T=r===Sn.FORCE,R=0,P=E,N=0;if(c>1){let V=l+(C?0:u),ee=~~(b/V);i._currentIteration=Zn(ee,0,c),C&&i._currentIteration--,R=i._currentIteration%2,P=b-ee*V||0}let j=d^(f&&R),Q=i._ease,D=C?j?0:o:j?l-P:P;Q&&(D=l*Q(D/l)||0);let X=(s?s.backwards:E<m)?!j:!!j;if(i._currentTime=E,i._iterationTime=D,i.backwards=X,M&&!i.began?(i.began=!0,!t&&!(s&&(X||!s.began))&&i.onBegin(i)):E<=0&&(i.began=!1),!t&&!g&&M&&i._currentIteration!==h&&i.onLoop(i),T||r===Sn.AUTO&&(e>=(s&&y>0?0:y)&&e<=p||e<=y&&A>y||e>=p&&A!==o)||D>=p&&A!==o||D<=y&&A>0&&!C||e<=A&&A===o&&a||C&&!a&&v){if(M&&(i.computeDeltaTime(A),t||i.onBeforeUpdate(i)),!g){let V=T||(X?w*-1:w)>=Vt.tickThreshold,ee=wt(i._offset+(s?s._offset:0)+y+D,12),U=i._head,ie,he,pe,et,yt=0;for(;U;){let We=U._composition,q=U._currentTime,le=U._changeDuration,se=U._absoluteStartTime+U._changeDuration,de=U._nextRep,Ie=U._prevRep,be=We!==nn.none,De=Ie?Ie._absoluteStartTime+Ie._changeDuration:0,Te=Ie&&Ie.parent!==U.parent,Ye=!de||de._isOverridden?se:de.parent===U.parent?se+de._delay:de._absoluteStartTime<de._absoluteUpdateStartTime?de._absoluteStartTime:de._absoluteUpdateStartTime;if((V||(q!==le||ee<=Ye||Ie&&!Te&&(!de||de.parent!==U.parent))&&(q!==0||ee>=U._absoluteStartTime||Te&&!U._hasFromValue&&!Ie._isOverridden&&ee>=De||de&&!de._isOverridden&&de.parent===U.parent&&de._currentTime!==0&&D<de._startTime))&&(!Ie||Te||D>=U._startTime)&&(!be||!U._isOverridden&&(!U._isOverlapped||ee<=se)&&(!de||de._isOverridden||ee<=Ye)&&(!Ie||Ie._isOverridden||(Te?ee>=U._absoluteStartTime||!U._hasFromValue&&ee>=De:ee>=De+U._delay)))){let Fe=U._currentTime=Zn(D-U._startTime,0,le),Pe=U._ease(Fe/U._updateDuration),Ze=U._modifier,ot=U._valueType,it=U._tweenType,mt=it===It.OBJECT,Qe=ot===lt.NUMBER,ht=Qe&&mt||Pe===0||Pe===1?-1:Vt.precision,I,dt;if(Qe)I=dt=Ze(wt(Uo(U._fromNumber,U._toNumber,Pe),ht));else if(ot===lt.UNIT)dt=Ze(wt(Uo(U._fromNumber,U._toNumber,Pe),ht)),I=`${dt}${U._unit}`;else if(ot===lt.COLOR){let Oe=U._numbers,S=U._fromNumbers,_=U._toNumbers,L=1-Pe,k=S[0],$=S[1],ae=S[2],ue=_[0],K=_[1],te=_[2];Oe[0]=Ze(Math.sqrt(k*k*L+ue*ue*Pe)),Oe[1]=Ze(Math.sqrt($*$*L+K*K*Pe)),Oe[2]=Ze(Math.sqrt(ae*ae*L+te*te*Pe)),Oe[3]=Ze(Uo(S[3],_[3],Pe)),(!U._setter||n)&&(I=`rgba(${wt(Oe[0],0)},${wt(Oe[1],0)},${wt(Oe[2],0)},${Oe[3]})`)}else ot===lt.COMPLEX&&(I=kh(U,Pe,ht));if(be&&(U._number=dt),!n&&We!==nn.blend){let Oe=U.property;ie=U.target,U._setter?U._setter(ie,dt,U):mt?ie[Oe]=I:it===It.ATTRIBUTE?ie.setAttribute(Oe,I):(he=ie.style,it===It.TRANSFORM?(ie!==pe&&(pe=ie,et=ie[ts]),et[Oe]=I,yt=1):it===It.CSS?he[Oe]=I:it===It.CSS_VAR&&he.setProperty(Oe,I)),M&&(N=1)}else U._value=I}else q&&Ie&&!Te&&D<U._startTime&&(U._currentTime=0);yt&&U._renderTransforms&&(he.transform=Lh(et),yt=0),U=U._next}!t&&N&&i.onRender(i)}!t&&M&&i.onUpdate(i)}return s&&v?!t&&(s.began&&!X&&E>0&&!a||X&&E<=_t&&a)&&(i.onComplete(i),i.completed=!X):M&&C?c===1/0?i._startTime+=i.duration:i._currentIteration>=c-1&&(i.paused=!0,!a&&!g&&(i.completed=!0,!t&&!(s&&(X||!s.began))&&(i.onComplete(i),i._resolve(i)))):i.completed=!1,N},is=(i,e,t,n,r)=>{let s=i._currentIteration;if(Ml(i,e,t,n,r),i._hasChildren){let o=i,a=o.backwards,l=n?e:o._iterationTime,c=Mr(),h=0,u=!0;if(!n&&o._currentIteration!==s){let d=o.iterationDuration;kt(o,f=>{if(!a)!f.completed&&!f.backwards&&f._currentTime<f.iterationDuration&&Ml(f,d,t,1,Sn.FORCE),f.began=!1,f.completed=!1;else{let g=f.duration,y=f._offset+f._delay,m=y+g;!t&&g<=_t&&(!y||m===d)&&f.onComplete(f)}}),t||o.onLoop(o)}kt(o,d=>{let f=wt((l-d._offset)*d._speed,12);if(a&&f>d._delay+d.duration)return;let g=d._fps<o._fps?d.requestTick(c):r;h+=Ml(d,f,t,n,g),!d.completed&&u&&(u=!1)},a),!t&&h&&o.onRender(o),(u||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,t||(o.onComplete(o),o._resolve(o))))}};var ny={},iy=(i,e,t)=>{if(t===It.TRANSFORM){let n=Ph.get(i);return n||i}else if(t===It.CSS||t===It.ATTRIBUTE&&Dh(e)&&i in e.style){let n=ny[i];if(n)return n;{let r=i&&cp(i);return ny[i]=r,r}}else return i},_p=(i,e=!1)=>{if(i._hasChildren)kt(i,t=>_p(t,e),!0);else{let t=i;t.pause(),kt(t,n=>{let r=n.property,s=n.target,o=n._tweenType,a=n._inlineValue,l=Ki(a)||a===xi;if(n._setter){if(!e&&!l){if($n(a,si),si.d){let c=si.d,h=n._numbers;for(let u=0,d=c.length;u<d;u++)h[u]=c[u]}else n._number=si.n;n._setter(n.target,n._number,n)}}else if(o===It.OBJECT)!e&&!l&&(s[r]=a);else if(s[Zi])if(o===It.ATTRIBUTE)e||(l?s.removeAttribute(r):s.setAttribute(r,a));else{let c=s.style;if(o===It.TRANSFORM){let h=s[ts];l?delete h[r]:h[r]=a,n._renderTransforms&&(Object.keys(h).length?c.transform=Lh(h):c.removeProperty("transform"))}else l?c.removeProperty(cp(r)):c[r]=a}s[Zi]&&t._tail===n&&t.targets.forEach(c=>{c.getAttribute&&c.getAttribute("style")===xi&&c.removeAttribute("style")})})}return i};var Vo=class{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._frameDuration=$i/pl,this._fps=pl,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){let t=+e,n=t<_t?_t:t,r=$i/n;n>ko.frameRate&&(ko.frameRate=n),this._fps=n,this._frameDuration=r}get speed(){return this._speed}set speed(e){let t=+e;this._speed=t<_t?_t:t}requestTick(e){let t=this._frameDuration,n=e-this._lastTickTime,r=t*.25,s=r<4?r:4;return n+s<t?Sn.NONE:(this._lastTickTime=n>=t?e-n%t:e,Sn.AUTO)}computeDeltaTime(e){let t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}};var wr={animation:null,update:Gn},ry=i=>{let e=wr.animation;return e||(e={duration:_t,computeDeltaTime:Gn,_offset:0,_delay:0,_head:null,_tail:null},wr.animation=e,wr.update=()=>{i.forEach(t=>{for(let n in t){let r=t[n],s=r._head;if(s){let o=s._valueType,a=o===lt.COMPLEX||o===lt.COLOR?rn(s._fromNumbers):null,l=s._fromNumber,c=r._tail;for(;c&&c!==s;){if(a)for(let h=0,u=c._numbers.length;h<u;h++)a[h]+=c._numbers[h];else l+=c._number;c=c._prevAdd}s._toNumber=l,s._toNumbers=a}}}),Ml(e,1,1,0,Sn.FORCE)}),e};var sy=yi?requestAnimationFrame:setImmediate,qS=yi?cancelAnimationFrame:clearImmediate,vp=class extends Vo{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=ko,this.paused=!0,this.reqId=0}update(){let e=this._currentTime=Mr();if(this.requestTick(e)){this.computeDeltaTime(e);let t=this._speed,n=this._fps,r=this._head;for(;r;){let s=r._next;r.paused?(js(this,r),this._hasChildren=!!this._tail,r._running=!1,r.completed&&!r._cancelled&&r.cancel()):is(r,(e-r._startTime)*r._speed*t,0,0,r._fps<n?r.requestTick(e):Sn.AUTO),r=s}wr.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(Mr()),this.reqId=sy(oy)),this}pause(){if(this.reqId)return this.paused=!0,YS()}resume(){if(this.paused)return this.paused=!1,kt(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(Vt.timeScale===1?1:$i)}set speed(e){let t=e*Vt.timeScale;this._speed!==t&&(this._speed=t,kt(this,n=>n.speed=n._speed))}get timeUnit(){return Vt.timeScale===1?"ms":"s"}set timeUnit(e){let n=e==="s",r=n?.001:1;if(Vt.timeScale!==r){Vt.timeScale=r,Vt.tickThreshold=200*r;let s=n?.001:$i;this.defaults.duration*=s,this._speed*=s}}get precision(){return Vt.precision}set precision(e){Vt.precision=e}},wn=(()=>{let i=new vp(Mr());return yi&&(lp.engine=i,es.addEventListener("visibilitychange",()=>{i.pauseOnDocumentHidden&&(es.hidden?i.pause():i.resume())})),i})(),oy=()=>{wn._head?(wn.reqId=sy(oy),wn.update()):wn.reqId=0},YS=()=>(qS(wn.reqId),wn.reqId=0,wn);var Uh={_rep:new WeakMap,_add:new Map},wl=(i,e,t="_rep")=>{let n=Uh[t],r=n.get(i);return r||(r={},n.set(i,r)),r[e]?r[e]:r[e]={_head:null,_tail:null}},jS=(i,e)=>i._isOverridden||i._absoluteStartTime>e._absoluteStartTime,Sl=i=>{i._isOverlapped=1,i._isOverridden=1,i._changeDuration=_t,i._currentTime=_t},Bh=(i,e)=>{let t=i._composition;if(t===nn.replace){let n=i._absoluteStartTime;Sr(e,i,jS,"_prevRep","_nextRep");let r=i._prevRep;if(r){let s=r.parent,o=r._absoluteEndTime;if(i.parent.id!==s.id&&s.iterationCount>1&&o+(s.duration-s.iterationDuration)>n){Sl(r);let c=r._prevRep;for(;c&&c.parent.id===s.id;)Sl(c),c=c._prevRep}let a=i._absoluteUpdateStartTime;if(o>a){let c=r._startTime,h=o-(c+r._updateDuration),u=wt(a-h-c,12);r._changeDuration=u,r._currentTime=u,r._isOverlapped=1,u<_t&&Sl(r)}let l=i.parent.parent;if(!l||l!==s.parent){let c=!0;if(kt(s,h=>{h._isOverlapped||(c=!1)}),c){let h=s.parent;if(h){let u=!0;kt(h,d=>{d!==s&&kt(d,f=>{f._isOverlapped||(u=!1)})}),u&&h.cancel()}else s.cancel()}}}}else if(t===nn.blend){let n=wl(i.target,i.property,"_add"),r=ry(Uh._add),s=n._head;s||(s=ce({},i),s._composition=nn.replace,s._updateDuration=_t,s._startTime=0,s._numbers=rn(i._fromNumbers),s._number=0,s._next=null,s._prev=null,Sr(n,s),Sr(r,s));let o=i._toNumber;if(i._fromNumber=s._fromNumber-o,i._toNumber=0,i._numbers=rn(i._fromNumbers),i._number=0,s._fromNumber=o,i._toNumbers.length){let a=rn(i._toNumbers);a.forEach((l,c)=>{i._fromNumbers[c]=s._fromNumbers[c]-l,i._toNumbers[c]=0}),s._fromNumbers=a}Sr(n,i,null,"_prevAdd","_nextAdd")}return i},ay=i=>{let e=i._composition;if(e!==nn.none){let t=i.target,n=i.property,o=Uh._rep.get(t)[n];if(js(o,i,"_prevRep","_nextRep"),e===nn.blend){let a=Uh._add,l=a.get(t);if(!l)return;let c=l[n],h=wr.animation;js(c,i,"_prevAdd","_nextAdd");let u=c._head;if(u&&u===c._tail){js(c,u,"_prevAdd","_nextAdd"),js(h,u);let d=!0;for(let f in l)if(l[f]._head){d=!1;break}d&&a.delete(t)}}}return i};var ly=i=>(i.paused=!0,i.began=!1,i.completed=!1,i),yp=i=>(i._cancelled&&(i._hasChildren?kt(i,yp):kt(i,e=>{e._composition!==nn.none&&Bh(e,wl(e.target,e.property))}),i._cancelled=0),i),cy=0,ZS=(i,e)=>i._priority>e._priority,Vh=class extends Vo{constructor(e={},t=null,n=0){super(0),++cy;let{id:r,delay:s,duration:o,reversed:a,alternate:l,loop:c,loopDelay:h,autoplay:u,frameRate:d,playbackRate:f,priority:g,onComplete:y,onLoop:m,onPause:p,onBegin:E,onBeforeUpdate:A,onUpdate:b}=e;gl.current&&gl.current.register(this);let w=t?0:wn._lastTickTime,M=t?t.defaults:Vt.defaults,C=wi(s)||nt(s)?M.delay:+s,v=wi(o)||nt(o)?1/0:+o,T=mn(c,M.loop),R=mn(h,M.loopDelay),P=T===!0||T===1/0||T<0?1/0:T+1,N=0;t?N=n:(wn.reqId||wn.requestTick(Mr()),N=(wn._lastTickTime-wn._startTime)*Vt.timeScale),this.id=nt(r)?cy:r,this.parent=t,this.duration=bl((v+R)*P-R)||_t,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=E||M.onBegin,this.onBeforeUpdate=A||M.onBeforeUpdate,this.onUpdate=b||M.onUpdate,this.onLoop=m||M.onLoop,this.onPause=p||M.onPause,this.onComplete=y||M.onComplete,this.iterationDuration=v,this.iterationCount=P,this._autoplay=t?!1:mn(u,M.autoplay),this._offset=N,this._delay=C,this._loopDelay=R,this._iterationTime=0,this._currentIteration=0,this._resolve=Gn,this._running=!1,this._reversed=+mn(a,M.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=mn(l,M.alternate),this._prev=null,this._next=null,this._lastTickTime=w,this._startTime=w,this._lastTime=w,this._fps=mn(d,M.frameRate),this._speed=mn(f,M.playbackRate),this._priority=+mn(g,1)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return Zn(wt(this._currentTime,Vt.precision),-this._delay,this.duration)}set currentTime(e){let t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return Zn(wt(this._iterationTime,Vt.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return Zn(wt(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return Zn(wt(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){let t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*Zn(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return yp(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,is(this,0,1,~~e,Sn.FORCE),ly(this),this._hasChildren&&kt(this,ly),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&is(this,this.duration,1,~~e,Sn.FORCE),this.reset(e);let t=this._autoplay;return t===!0?this.resume():t&&!nt(t.linked)&&t.link(this),this}resetTime(){let e=1/(this._speed*wn._speed);return this._startTime=Mr()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=_t&&!this._hasChildren?is(this,_t,0,0,Sn.FORCE):(this._running||(Sr(wn,this,ZS),wn._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,wn.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,n=0){yp(this),this.completed=!1;let r=this.paused;return this.paused=!0,is(this,e+this._delay,~~t,~~n,Sn.AUTO),r?this:this.resume()}alternate(){let e=this._reversed,t=this.iterationCount,n=this.iterationDuration,r=t===1/0?qs(fl/n):t;return this._reversed=+(this._alternate&&!(r%2)?e:!e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(n*r-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?kt(this,e=>e.cancel(),!0):kt(this,ay),this._cancelled=1,this.pause()}stretch(e){let t=this.duration,n=Ys(e);if(t===n)return this;let r=e/t,s=e<=_t;return this.duration=s?_t:n,this.iterationDuration=s?_t:Ys(this.iterationDuration*r),this._offset*=r,this._delay*=r,this._loopDelay*=r,this}revert(){is(this,0,1,0,Sn.AUTO);let e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=Gn){let t=this.then,n=()=>{this.then=null,e(this),this.then=t,this._resolve=Gn};return new Promise(r=>(this._resolve=()=>r(n()),this.completed&&this._resolve(),this))}};function hy(i){let e=Si(i)?gl.root.querySelectorAll(i):i;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function $S(i){if(Ki(i))return[];if(!yi)return bi(i)&&i.flat(1/0)||[i];if(bi(i)){let t=i.flat(1/0),n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];if(!Ki(o)){let a=hy(o);if(a)for(let l=0,c=a.length;l<c;l++){let h=a[l];if(!Ki(h)){let u=!1;for(let d=0,f=n.length;d<f;d++)if(n[d]===h){u=!0;break}u||n.push(h)}}else{let l=!1;for(let c=0,h=n.length;c<h;c++)if(n[c]===o){l=!0;break}l||n.push(o)}}}return n}let e=hy(i);return e?Array.from(e):[i]}function zh(i){let e=$S(i),t=e.length;for(let n=0;n<t;n++){let r=e[n];if(!r[op]){r[op]=!0;let s=Dh(r);(r.nodeType||s)&&(r[Zi]=!0,r[Ah]=s,r[ts]={})}}return e}var xp={deg:1,rad:180/xl,turn:360},dy={},bp=(i,e,t,n=!1)=>{let r=e.u,s=e.n;if(e.t===lt.UNIT&&r===t)return e;let o=s+r+t,a=dy[o];if(!nt(a)&&!n)e.n=a;else{let l;if(r in xp)l=s*xp[r]/xp[t];else{let h=i.cloneNode(),u=i.parentNode,d=u&&u!==es?u:es.body;d.appendChild(h);let f=h.style;f.width=100+r;let g=h.offsetWidth||100;f.width=100+t;let y=h.offsetWidth||100,m=g/y;d.removeChild(h),l=m*s}e.n=l,dy[o]=l}return e.t,lt.UNIT,e.u=t,e};var Tr=i=>i;var Tl=(i=1.68)=>e=>Xs(e,+i),Sp={in:i=>e=>i(e),out:i=>e=>1-i(1-e),inOut:i=>e=>e<.5?i(e*2)/2:1-i(e*-2+2)/2,outIn:i=>e=>e<.5?(1-i(1-e*2))/2:(i(e*2-1)+1)/2},KS=xl/2,uy=xl*2,fy={[xi]:Tl,Quad:Tl(2),Cubic:Tl(3),Quart:Tl(4),Quint:Tl(5),Sine:i=>1-Zv(i*KS),Circ:i=>1-vl(1-i*i),Expo:i=>i?Xs(2,10*i-10):0,Bounce:i=>{let e,t=4;for(;i<((e=Xs(2,--t))-1)/11;);return 1/Xs(4,3-t)-7.5625*Xs((e*3-2)/22-i,2)},Back:(i=1.7)=>e=>(+i+1)*e*e*e-+i*e*e,Elastic:(i=1,e=.3)=>{let t=Zn(+i,1,10),n=Zn(+e,_t,2),r=n/uy*$v(1/t),s=uy/n;return o=>o===0||o===1?o:-t*Xs(2,-10*(1-o))*jv((1-o-r)*s)}},Mp=(()=>{let i={linear:Tr,none:Tr};for(let e in Sp)for(let t in fy){let n=fy[t],r=Sp[e];i[e+t]=t===xi||t==="Back"||t==="Elastic"?(s,o)=>r(n(s,o)):r(n)}return i})(),Hh={linear:Tr,none:Tr},JS=i=>{if(Hh[i])return Hh[i];if(i.indexOf("(")<=-1){let t=Sp[i]||i.includes("Back")||i.includes("Elastic")?Mp[i]():Mp[i];return t?Hh[i]=t:Tr}else{let e=i.slice(0,-1).split("("),t=Mp[e[0]];return t?Hh[i]=t(...e[1].split(",")):Tr}},py=["steps(","irregular(","linear(","cubicBezier("],El=i=>{if(Si(i)){for(let t=0,n=py.length;t<n;t++)if(ri(i,py[t]))return console.warn(`String syntax for \`ease: "${i}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${i}\``),Tr}return wi(i)?i:Si(i)?JS(i):Tr};var $e=Fh(),ct=Fh(),zo={},Gh={func:null},Wh={func:null},Xh=[null],Ho=[null,null],qh={to:null},QS=0,my=0,rs,Qi,ew=(i,e)=>{let t={};if(bi(i)){let n=[].concat(...i.map(r=>Object.keys(r))).filter(_l);for(let r=0,s=n.length;r<s;r++){let o=n[r],a=i.map(l=>{let c={};for(let h in l){let u=l[h];_l(h)?h===o&&(c.to=u):c[h]=u}return c});t[o]=a}}else{let n=mn(e.duration,Vt.defaults.duration);Object.keys(i).map(s=>({o:parseFloat(s)/100,p:i[s]})).sort((s,o)=>s.o-o.o).forEach(s=>{let o=s.o,a=s.p;for(let l in a)if(_l(l)){let c=t[l];c||(c=t[l]=[]);let h=o*n,u=c.length,d=c[u-1],f={to:a[l]},g=0;for(let y=0;y<u;y++)g+=c[y].duration;u===1&&(f.from=d.to),a.ease&&(f.ease=a.ease),f.duration=h-(u?g:0),c.push(f)}return s});for(let s in t){let o=t[s],a;for(let l=0,c=o.length;l<c;l++){let h=o[l],u=h.ease;h.ease=a||void 0,a=u}o[0].duration||o.shift()}}return t},Yh=class extends Vh{constructor(e,t,n,r,s=!1,o=0,a){super(t,n,r),this._head,this._tail,++my;let l=zh(e),c=l.length,h=t.keyframes,u=h?Kv(ew(h,t),t):t,{id:d,delay:f,duration:g,ease:y,playbackEase:m,modifier:p,composition:E,onRender:A}=u,b=n?n.defaults:Vt.defaults,w=mn(y,b.ease),M=mn(m,b.playbackEase),C=M?El(M):null,v=!nt(w.ease),T=v?w.ease:mn(y,C?"linear":b.ease),R=v?w.settlingDuration:mn(g,b.duration),P=mn(f,b.delay),N=p||b.modifier,j=nt(E)&&c>=$i?nn.none:nt(E)?b.composition:E,Q=this._offset+(n?n._offset:0);v&&(w.parent=this);let D=NaN,X=NaN,V=0,ee=0;for(let U=0;U<c;U++){let ie=l[U],he=o||U,pe=a||l,et=NaN,yt=NaN;for(let We in u)if(_l(We)){let q=mp(ie,We),le=Nh(ie,We),se=iy(We,ie,q),de=u[We],Ie=bi(de);if(s&&!Ie&&(Ho[0]=de,Ho[1]=de,de=Ho),Ie){let Pe=de.length,Ze=!Ih(de[0]);Pe===2&&Ze?(qh.to=de,Xh[0]=qh,rs=Xh):Pe>2&&Ze?(rs=[],de.forEach((ot,it)=>{it?it===1?(Ho[1]=ot,rs.push(Ho)):rs.push(ot):Ho[0]=ot})):rs=de}else Xh[0]=de,rs=Xh;let be=null,De=null,Te=NaN,Ye=0,Fe=0;for(let Pe=rs.length;Fe<Pe;Fe++){let Ze=rs[Fe];Ih(Ze)?Qi=Ze:(qh.to=Ze,Qi=qh),Gh.func=null,Wh.func=null;let ot=Ji(mn(Qi.composition,j),ie,he,pe,null,null),it=Mi(ot)?ot:nn[ot];!be&&it!==nn.none&&(be=wl(ie,se));let mt=be?be._tail:null,Qe=n&&mt&&mt.parent.parent===n?mt:De,ht=Ji(Qi.to,ie,he,pe,Gh,Qe),I;Ih(ht)&&!nt(ht.to)?(Qi=ht,I=ht.to):I=ht;let dt=Ji(Qi.from,ie,he,pe,Wh,Qe),Oe=Qi.ease||T,S=Ji(Oe,ie,he,pe,null,Qe),_=wi(S)||Si(S)?S:Oe,L=!nt(_)&&!nt(_.ease),k=L?_.ease:_,$=L?_.settlingDuration:Ji(mn(Qi.duration,Pe>1?Ji(R,ie,he,pe,null,Qe)/Pe:R),ie,he,pe,null,Qe),ae=Ji(mn(Qi.delay,Fe?0:P),ie,he,pe,null,Qe),ue=Qi.modifier||N,K=!nt(dt),te=!nt(I),fe=bi(I),ke=fe||K&&te,ve=De?Ye:0,_e=De?Ye+ae:ae,Ue=wt(Q+_e,12),Ge=wt(Q+ve,12);!ee&&(K||fe)&&(ee=1);let He=De;if(it!==nn.none){let Ve=be._head;for(;Ve&&Ve._absoluteStartTime<=Ue;)if(Ve._isOverridden||(He=Ve),Ve=Ve._nextRep,Ve&&Ve._absoluteStartTime>=Ue)for(;Ve;)Sl(Ve),Ve=Ve._nextRep}if(ke){$n(fe?Ji(I[0],ie,he,pe,Wh,Qe):dt,$e),$n(fe?Ji(I[1],ie,he,pe,Gh,Qe):I,ct);let Ve=ns(ie,se,q,zo);$e.t===lt.NUMBER&&(He?He._valueType===lt.UNIT&&($e.t=lt.UNIT,$e.u=He._unit):($n(Ve,si),si.t===lt.UNIT&&($e.t=lt.UNIT,$e.u=si.u)))}else te?$n(I,ct):De?gp(De,ct):$n(n&&He&&He.parent.parent===n?He._value:ns(ie,se,q,zo),ct),K?$n(dt,$e):De?gp(De,$e):$n(n&&He&&He.parent.parent===n?He._value:ns(ie,se,q,zo),$e);if($e.o&&($e.n=Bo(He?He._toNumber:$n(ns(ie,se,q,zo),si).n,$e.n,$e.o)),ct.o&&(ct.n=Bo($e.n,ct.n,ct.o)),$e.t!==ct.t){if($e.t===lt.COMPLEX||ct.t===lt.COMPLEX){let Ve=$e.t===lt.COMPLEX?$e:ct,rt=$e.t===lt.COMPLEX?ct:$e;rt.t=lt.COMPLEX,rt.s=rn(Ve.s),rt.d=Ve.d.map(()=>rt.n)}else if($e.t===lt.UNIT||ct.t===lt.UNIT){let Ve=$e.t===lt.UNIT?$e:ct,rt=$e.t===lt.UNIT?ct:$e;rt.t=lt.UNIT,rt.u=Ve.u}else if($e.t===lt.COLOR||ct.t===lt.COLOR){let Ve=$e.t===lt.COLOR?$e:ct,rt=$e.t===lt.COLOR?ct:$e;rt.t=lt.COLOR,rt.d=Ve.d.map(()=>0)}}if($e.u!==ct.u){let Ve=ct.u?$e:ct;Ve=bp(ie,Ve,ct.u?ct.u:$e.u,!1)}if(ct.d&&$e.d&&ct.d.length!==$e.d.length){let Ve=$e.d.length>ct.d.length?$e:ct,rt=Ve===$e?ct:$e;rt.d=Ve.d.map((Ai,Qn)=>nt(rt.d[Qn])?0:rt.d[Qn]),rt.s=rn(Ve.s)}let O=wt(+$||_t,12),me=zo[se];Ki(me)||(zo[se]=null);let ne=le?le.set:null;Ye=wt(_e+O,12);let ge=$e.d,ye=ct.d,oe=ct.s,we={parent:this,id:QS++,property:se,target:ie,_value:null,_toFunc:Gh.func,_fromFunc:Wh.func,_ease:El(k),_fromNumbers:ge?rn(ge):ml,_toNumbers:ye?rn(ye):ml,_strings:oe?rn(oe):ml,_fromNumber:$e.n,_toNumber:ct.n,_numbers:ge?rn(ge):ml,_number:$e.n,_unit:ct.u,_modifier:ue,_currentTime:0,_startTime:_e,_delay:+ae,_updateDuration:O,_changeDuration:O,_absoluteStartTime:Ue,_absoluteUpdateStartTime:Ge,_absoluteEndTime:wt(Q+Ye,12),_hasFromValue:K||fe?1:0,_tweenType:q,_setter:ne,_valueType:ct.t,_composition:it,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:me,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};it!==nn.none&&Bh(we,be);let Re=we._valueType;if(Re===lt.COMPLEX)we._value=kh(we,1,-1);else if(Re===lt.UNIT)we._value=`${ue(we._toNumber)}${we._unit}`;else if(Re===lt.COLOR){let Ve=ct.d;we._value=`rgba(${wt(Ve[0],0)},${wt(Ve[1],0)},${wt(Ve[2],0)},${Ve[3]})`}else we._value=ue(we._toNumber);isNaN(Te)&&(Te=we._startTime),De=we,V++,Sr(this,we)}(isNaN(X)||Te<X)&&(X=Te),(isNaN(D)||Ye>D)&&(D=Ye),q===It.TRANSFORM&&(et=V-Fe,yt=V)}if(!isNaN(et)){let We=0;kt(this,q=>{We>=et&&We<yt&&(q._renderTransforms=1,q._composition===nn.blend&&kt(wr.animation,le=>{le.id===q.id&&(le._renderTransforms=1)})),We++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),X?(kt(this,U=>{U._startTime-U._delay||(U._delay-=X),U._startTime-=X}),D-=X):X=0,D||(D=_t,this.iterationCount=0),this.targets=l,this.id=nt(d)?my:d,this.duration=D===_t?_t:bl((D+this._loopDelay)*this.iterationCount-this._loopDelay)||_t,this.onRender=A||b.onRender,this._ease=C,this._delay=X,this.iterationDuration=D,!this._autoplay&&ee&&this.onRender(this)}stretch(e){let t=this.duration;if(t===Ys(e))return this;let n=e/t;return kt(this,r=>{r._updateDuration=Ys(r._updateDuration*n),r._changeDuration=Ys(r._changeDuration*n),r._currentTime*=n,r._delay*=n,r._startTime*=n,r._absoluteStartTime*=n,r._absoluteUpdateStartTime*=n,r._absoluteEndTime*=n}),super.stretch(e)}refresh(){return kt(this,e=>{let t=e._toFunc,n=e._fromFunc;(t||n)&&(n?($n(n(),$e),$e.u!==e._unit&&e.target[Zi]&&bp(e.target,$e,e._unit,!0),e._fromNumbers=rn($e.d),e._fromNumber=$e.n):t&&($n(ns(e.target,e.property,e._tweenType),si),e._fromNumbers=rn(si.d),e._fromNumber=si.n),t&&($n(t(),ct),e._toNumbers=rn(ct.d),e._strings=rn(ct.s),e._toNumber=ct.o?Bo(e._fromNumber,ct.n,ct.o):ct.n))}),this.duration===_t&&this.restart(),this}revert(){return super.revert(),_p(this)}then(e){return super.then(e)}},wp=(i,e)=>Vt.editor?Vt.editor.addAnimation(i,e):new Yh(i,e,null,0,!1).init();var tw=(i,e)=>{if(ri(e,"<")){let t=e[1]==="<",n=i._tail,r=n?n._offset+n._delay:0;return t?r:r+n.duration}},gy=(i,e)=>{let t=i.iterationDuration;if(t===_t&&(t=0),nt(e))return t;if(Mi(+e))return+e;let n=e,r=i?i.labels:null,s=!Ki(r),o=tw(i,n),a=!nt(o),l=Gv.exec(n);if(l){let c=l[0],h=n.split(c),u=s&&h[0]?r[h[0]]:t,d=a?o:s?u:t,f=+h[1];return Bo(d,f,c[0])}else return a?o:s?nt(r[n])?t:r[n]:t};var Tp=(i=0,e=1,t=0)=>{let n=10**t;return Math.floor((Math.random()*(e-i+1/n)+i)*n)/n},nw=0,_y=(i,e=0,t=1,n=0)=>{let r=i===void 0?nw++:i;return(s=e,o=t,a=n)=>{r+=1831565813,r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61);let l=10**a;return Math.floor((((r^r>>>14)>>>0)/4294967296*(o-s+1/l)+s)*l)/l}};var vy=(i,e=Tp)=>{let t=i.length,n,r;for(;t;)r=e(0,--t),n=i[t],i[t]=i[r],i[r]=n;return i};var Ep=(i,e={})=>{let t=[],n=0,r,s=null,o=e.from,a=e.reversed,l=e.ease,c=!nt(l),u=c&&!nt(l.ease)?l.ease:c?El(l):null,d=e.grid,f=d===!0,g=e.axis,y=e.total,m=nt(o)||o===0||o==="first",p=o==="center",E=o==="last",A=o==="random",b=bi(o),w=bi(i),M=e.use,C=w?Oh(i[0]):Oh(i),v=w?Oh(i[1]):0,T=Rh.exec((w?i[1]:i)+xi),R=e.start||0+(w?C:0),P=e.seed,j=!nt(P)&&P!==!1?_y(P===!0?0:P):Tp,Q=e.jitter,D=!nt(Q),X=bi(Q),V=X?Q[0]:Q||0,ee=X?Q[1]:Q||0,U=m?0:Mi(o)?o:0;return(ie,he,pe,et,yt)=>{let[We]=zh(ie),q=nt(y)?pe.length:y,le=nt(M)?!1:wi(M)?M(We,he,q):ns(We,M),se=Mi(le)||Si(le)&&Mi(+le)?+le:he,de=se>=0&&se<q?se:he;if(p&&(U=(q-1)/2),E&&(U=q-1),!t.length){if(f){let De=!0,Te=!1,Ye=1/0,Fe=1/0,Pe=1/0,Ze=-1/0,ot=-1/0,it=-1/0,mt=[],Qe=[],ht=[];for(let I=0;I<q;I++){let dt=pe[I],Oe=0,S=0,_=0,L=!1;if(dt&&wi(dt.getBoundingClientRect)){let k=dt.getBoundingClientRect();Oe=k.left+k.width/2,S=k.top+k.height/2,L=!0}else{let k=dt;k&&Mi(k.x)&&Mi(k.y)&&(Oe=k.x,S=k.y,Mi(k.z)&&(_=k.z,Te=!0),L=!0)}if(!L){De=!1;break}mt.push(Oe),Qe.push(S),ht.push(_),Oe<Ye&&(Ye=Oe),S<Fe&&(Fe=S),_<Pe&&(Pe=_),Oe>Ze&&(Ze=Oe),S>ot&&(ot=S),_>it&&(it=_)}if(De){let I=mt[0],dt=Qe[0],Oe=ht[0];b?(I=Ye+o[0]*(Ze-Ye),dt=Fe+o[1]*(ot-Fe),Oe=Te?Pe+(o.length>=3?o[2]:.5)*(it-Pe):0):p?(I=(Ye+Ze)/2,dt=(Fe+ot)/2,Oe=(Pe+it)/2):E?(I=mt[q-1],dt=Qe[q-1],Oe=ht[q-1]):Mi(o)&&(I=mt[o],dt=Qe[o],Oe=ht[o]);for(let _=0;_<q;_++){let L=I-mt[_],k=dt-Qe[_],$=Oe-ht[_],ae=vl(L*L+k*k+(Te?$*$:0));g==="x"&&(ae=-L),g==="y"&&(ae=-k),g==="z"&&(ae=-$),t.push(ae)}let S=1/0;for(let _=0;_<q;_++){let L=yl(t[_]);L>0&&L<S&&(S=L)}if(S>0&&S<1/0)for(let _=0;_<q;_++)t[_]=t[_]/S}else for(let I=0;I<q;I++)t.push(yl(U-I))}else for(let De=0;De<q;De++)if(!d)t.push(yl(U-De));else{let Te=d.length,Ye=d[0]*d[1],Fe,Pe,Ze;b?(Fe=o[0]*(d[0]-1),Pe=o[1]*(d[1]-1),Ze=Te===3?(o.length>=3?o[2]:.5)*(d[2]-1):0):p?(Fe=(d[0]-1)/2,Pe=(d[1]-1)/2,Ze=Te===3?(d[2]-1)/2:0):(Fe=U%d[0],Pe=qs(U/d[0])%d[1],Ze=Te===3?qs(U/Ye):0);let ot=De%d[0],it=qs(De/d[0])%d[1],mt=Te===3?qs(De/Ye):0,Qe=Fe-ot,ht=Pe-it,I=Ze-mt,dt=vl(Qe*Qe+ht*ht+(Te===3?I*I:0));g==="x"&&(dt=-Qe),g==="y"&&(dt=-ht),g==="z"&&(dt=-I),t.push(dt)}n=t[0];for(let De=1;De<q;De++)t[De]>n&&(n=t[De]);if(u||a)for(let De=0;De<q;De++){let Te=t[De];u&&(Te=u(Te/n)*n),a&&(Te=g?-Te:yl(n-Te)),t[De]=Te}if(D){s=new Array(q);for(let De=0;De<q;De++)s[De]=j(-1,1,4)}A&&(t=vy(t,j))}let Ie=w?(v-C)/n:C;nt(r)&&(r=yt?gy(yt,nt(e.start)?yt.iterationDuration:R):R);let be=r+(Ie*wt(t[de],2)||0);if(D){let De=n?t[de]/n:0,Te=V+(ee-V)*De;be=be+s[de]*Te}return e.modifier&&(be=e.modifier(be)),T&&(be=`${be}${T[2]}`),be}};var Gy=0,hm=1,Wy=2;var $l=1,Xy=2,fa=3,Dr=0,En=1,ar=2,lr=0,to=1,dm=2,um=3,fm=4,qy=5;var us=100,Yy=101,jy=102,Zy=103,$y=104,Ky=200,Jy=201,Qy=202,ex=203,_d=204,vd=205,tx=206,nx=207,ix=208,rx=209,sx=210,ox=211,ax=212,lx=213,cx=214,yd=0,xd=1,bd=2,no=3,Md=4,Sd=5,wd=6,Td=7,pm=0,hx=1,dx=2,Bi=0,mm=1,gm=2,_m=3,vm=4,ym=5,xm=6,bm=7;var Kp=300,_s=301,oo=302,jd=303,Zd=304,Kl=306,Ed=1e3,nr=1001,Cd=1002,en=1003,ux=1004;var Jl=1005;var Tn=1006,$d=1007;var vs=1008;var Jn=1009,Mm=1010,Sm=1011,pa=1012,Kd=1013,Vi=1014,zi=1015,cr=1016,Jd=1017,Qd=1018,ma=1020,wm=35902,Tm=35899,Em=1021,Cm=1022,Ci=1023,rr=1026,ys=1027,Am=1028,eu=1029,xs=1030,tu=1031;var nu=1033,Ql=33776,ec=33777,tc=33778,nc=33779,iu=35840,ru=35841,su=35842,ou=35843,au=36196,lu=37492,cu=37496,hu=37488,du=37489,ic=37490,uu=37491,fu=37808,pu=37809,mu=37810,gu=37811,_u=37812,vu=37813,yu=37814,xu=37815,bu=37816,Mu=37817,Su=37818,wu=37819,Tu=37820,Eu=37821,Cu=36492,Au=36494,Pu=36495,Ru=36283,Iu=36284,rc=36285,Du=36286;var Dl=2300,Ad=2301,gd=2302,Jp=2303,Qp=2400,em=2401,tm=2402;var fx=3200;var Ou=0,px=1,Fr="",li="srgb",Ol="srgb-linear",Ll="linear",Ct="srgb";var Qs=7680;var nm=519,mx=512,gx=513,_x=514,Lu=515,vx=516,yx=517,Nu=518,xx=519,im=35044;var Pm="300 es",ki=2e3,na=2001;function iw(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rw(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bx(){let i=Nl("canvas");return i.style.display="block",i}var yy={},ia=null;function Rm(...i){let e="THREE."+i.shift();ia?ia("log",e,...i):console.log(e,...i)}function Mx(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=Mx(i);let e="THREE."+i.shift();if(ia)ia("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=Mx(i);let e="THREE."+i.shift();if(ia)ia("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function eo(...i){let e=i.join(" ");e in yy||(yy[e]=!0,qe(...i))}function Sx(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var wx={[yd]:xd,[bd]:wd,[Md]:Td,[no]:Sd,[xd]:yd,[wd]:bd,[Td]:Md,[Sd]:no},sr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Cp=Math.PI/180,Pd=180/Math.PI;function sc(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function sw(i,e){return(i%e+e)%e}function Ap(i,e,t){return(1-t)*i+t*e}function Cl(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var vt=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},or=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],d=s[o+0],f=s[o+1],g=s[o+2],y=s[o+3];if(u!==y||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let E=Math.acos(m),A=Math.sin(E);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A,l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+y*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+y*a;let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),d=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xy.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pp.copy(this).projectOnVector(e),this.sub(Pp)}reflect(e){return this.sub(Pp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pp=new G,xy=new or,Je=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=r[0],m=r[3],p=r[6],E=r[1],A=r[4],b=r[7],w=r[2],M=r[5],C=r[8];return s[0]=o*y+a*E+l*w,s[3]=o*m+a*A+l*M,s[6]=o*p+a*b+l*C,s[1]=c*y+h*E+u*w,s[4]=c*m+h*A+u*M,s[7]=c*p+h*b+u*C,s[2]=d*y+f*E+g*w,s[5]=d*m+f*A+g*M,s[8]=d*p+f*b+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=t*u+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(r*c-h*n)*y,e[2]=(a*n-r*o)*y,e[3]=d*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return eo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rp.makeScale(e,t)),this}rotate(e){return eo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rp.makeRotation(-e)),this}translate(e,t){return eo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rp=new Je,by=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),My=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ow(){let i={enabled:!0,workingColorSpace:Ol,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ct&&(r.r=Ir(r.r),r.g=Ir(r.g),r.b=Ir(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(r.r=ta(r.r),r.g=ta(r.g),r.b=ta(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fr?Ll:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ol]:{primaries:e,whitePoint:n,transfer:Ll,toXYZ:by,fromXYZ:My,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:by,fromXYZ:My,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),i}var xt=ow();function Ir(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Go,Rd=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Go===void 0&&(Go=Nl("canvas")),Go.width=e.width,Go.height=e.height;let r=Go.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Go}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ir(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ir(t[n]/255)*255):t[n]=Ir(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},aw=0,ra=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aw++}),this.uuid=sc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ip(r[o].image)):s.push(Ip(r[o]))}else s=Ip(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ip(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var lw=0,Dp=new G,hr=(()=>{class i extends sr{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=nr,s=nr,o=Tn,a=vs,l=Ci,c=Jn,h=i.DEFAULT_ANISOTROPY,u=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lw++}),this.uuid=sc(),this.name="",this.source=new ra(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dp).x}get height(){return this.source.getSize(Dp).y}get depth(){return this.source.getSize(Dp).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){qe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ed:t.x=t.x-Math.floor(t.x);break;case nr:t.x=t.x<0?0:1;break;case Cd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ed:t.y=t.y-Math.floor(t.y);break;case nr:t.y=t.y<0?0:1;break;case Cd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=Kp,i.DEFAULT_ANISOTROPY=1,i})(),zt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,b=(f+1)/2,w=(p+1)/2,M=(h+d)/4,C=(u+y)/4,v=(g+m)/4;return A>b&&A>w?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=M/n,s=C/n):b>w?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=M/r,s=v/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=C/s,r=v/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-y)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Id=class extends sr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new hr(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ra(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends Id{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fl=class extends hr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dd=class extends hr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ut=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,r,s,o,a,l,c,h,u,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,d,f,g,y,m)}set(e,t,n,r,s,o,a,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Wo.setFromMatrixColumn(e,0).length(),s=1/Wo.setFromMatrixColumn(e,1).length(),o=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cw,e,hw)}lookAt(e,t,n){let r=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ss.crossVectors(n,oi),ss.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ss.crossVectors(n,oi)),ss.normalize(),jh.crossVectors(oi,ss),r[0]=ss.x,r[4]=jh.x,r[8]=oi.x,r[1]=ss.y,r[5]=jh.y,r[9]=oi.y,r[2]=ss.z,r[6]=jh.z,r[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],E=n[3],A=n[7],b=n[11],w=n[15],M=r[0],C=r[4],v=r[8],T=r[12],R=r[1],P=r[5],N=r[9],j=r[13],Q=r[2],D=r[6],X=r[10],V=r[14],ee=r[3],U=r[7],ie=r[11],he=r[15];return s[0]=o*M+a*R+l*Q+c*ee,s[4]=o*C+a*P+l*D+c*U,s[8]=o*v+a*N+l*X+c*ie,s[12]=o*T+a*j+l*V+c*he,s[1]=h*M+u*R+d*Q+f*ee,s[5]=h*C+u*P+d*D+f*U,s[9]=h*v+u*N+d*X+f*ie,s[13]=h*T+u*j+d*V+f*he,s[2]=g*M+y*R+m*Q+p*ee,s[6]=g*C+y*P+m*D+p*U,s[10]=g*v+y*N+m*X+p*ie,s[14]=g*T+y*j+m*V+p*he,s[3]=E*M+A*R+b*Q+w*ee,s[7]=E*C+A*P+b*D+w*U,s[11]=E*v+A*N+b*X+w*ie,s[15]=E*T+A*j+b*V+w*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],E=l*f-c*d,A=a*f-c*u,b=a*d-l*u,w=o*f-c*h,M=o*d-l*h,C=o*u-a*h;return t*(y*E-m*A+p*b)-n*(g*E-m*w+p*M)+r*(g*A-y*w+p*C)-s*(g*b-y*M+m*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],E=t*a-n*o,A=t*l-r*o,b=t*c-s*o,w=n*l-r*a,M=n*c-s*a,C=r*c-s*l,v=h*y-u*g,T=h*m-d*g,R=h*p-f*g,P=u*m-d*y,N=u*p-f*y,j=d*p-f*m,Q=E*j-A*N+b*P+w*R-M*T+C*v;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/Q;return e[0]=(a*j-l*N+c*P)*D,e[1]=(r*N-n*j-s*P)*D,e[2]=(y*C-m*M+p*w)*D,e[3]=(d*M-u*C-f*w)*D,e[4]=(l*R-o*j-c*T)*D,e[5]=(t*j-r*R+s*T)*D,e[6]=(m*b-g*C-p*A)*D,e[7]=(h*C-d*b+f*A)*D,e[8]=(o*N-a*R+c*v)*D,e[9]=(n*R-t*N-s*v)*D,e[10]=(g*M-y*b+p*E)*D,e[11]=(u*b-h*M-f*E)*D,e[12]=(a*T-o*P-l*v)*D,e[13]=(t*P-n*T+r*v)*D,e[14]=(y*A-g*w-m*E)*D,e[15]=(h*w-u*A+d*E)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,y=o*h,m=o*u,p=a*u,E=l*c,A=l*h,b=l*u,w=n.x,M=n.y,C=n.z;return r[0]=(1-(y+p))*w,r[1]=(f+b)*w,r[2]=(g-A)*w,r[3]=0,r[4]=(f-b)*M,r[5]=(1-(d+p))*M,r[6]=(m+E)*M,r[7]=0,r[8]=(g+A)*C,r[9]=(m-E)*C,r[10]=(1-(d+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Wo.set(r[0],r[1],r[2]).length(),a=Wo.set(r[4],r[5],r[6]).length(),l=Wo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Li.copy(this);let c=1/o,h=1/a,u=1/l;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=h,Li.elements[5]*=h,Li.elements[6]*=h,Li.elements[8]*=u,Li.elements[9]*=u,Li.elements[10]*=u,t.setFromRotationMatrix(Li),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=ki,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===ki)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===na)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ki,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===ki)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===na)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wo=new G,Li=new Ut,cw=new G(0,0,0),hw=new G(1,1,1),ss=new G,jh=new G,oi=new G,Sy=new Ut,wy=new or,kl=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],h=s[5],u=s[9],d=s[2],f=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Sy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sy,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return wy.setFromEuler(this),this.setFromQuaternion(wy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),sa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dw=0,Ty=new G,Xo=new or,Er=new Ut,Zh=new G,Al=new G,uw=new G,fw=new or,Ey=new G(1,0,0),Cy=new G(0,1,0),Ay=new G(0,0,1),Py={type:"added"},pw={type:"removed"},qo={type:"childadded",child:null},Op={type:"childremoved",child:null},Ui=(()=>{class i extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=sc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,n=new kl,r=new or,s=new G(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Je}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Xo.setFromAxisAngle(t,n),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(t,n){return Xo.setFromAxisAngle(t,n),this.quaternion.premultiply(Xo),this}rotateX(t){return this.rotateOnAxis(Ey,t)}rotateY(t){return this.rotateOnAxis(Cy,t)}rotateZ(t){return this.rotateOnAxis(Ay,t)}translateOnAxis(t,n){return Ty.copy(t).applyQuaternion(this.quaternion),this.position.add(Ty.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ey,t)}translateY(t){return this.translateOnAxis(Cy,t)}translateZ(t){return this.translateOnAxis(Ay,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Zh.copy(t):Zh.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(Al,Zh,this.up):Er.lookAt(Zh,Al,this.up),this.quaternion.setFromRotationMatrix(Er),s&&(Er.extractRotation(s.matrixWorld),Xo.setFromRotationMatrix(Er),this.quaternion.premultiply(Xo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Py),qo.child=t,this.dispatchEvent(qo),qo.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(pw),Op.child=t,this.dispatchEvent(Op),Op.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Er.multiply(t.parent.matrixWorld)),t.applyMatrix4(Er),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Py),qo.child=t,this.dispatchEvent(qo),qo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,t,uw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,fw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,r=t.y,s=t.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*r-o[8]*s,o[13]+=r-o[1]*n-o[5]*r-o[9]*s,o[14]+=s-o[2]*n-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n,r=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){let o=this.children;for(let a=0,l=o.length;a<l;a++)o[a].updateWorldMatrix(!1,!0,r)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>je(ce({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>ce({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),g=a(t.animations),y=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),f.length>0&&(r.skeletons=f),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new G(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),ir=class extends Ui{constructor(){super(),this.isGroup=!0,this.type="Group"}},mw={type:"move"},oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ir;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},$h={h:0,s:0,l:0};function Lp(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=sw(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Lp(o,s,e+1/3),this.g=Lp(o,s,e),this.b=Lp(o,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=li){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){let n=Tx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return xt.workingToColorSpace(Un.copy(this),e),Math.round(bt(Un.r*255,0,255))*65536+Math.round(bt(Un.g*255,0,255))*256+Math.round(bt(Un.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Un.copy(this),t);let n=Un.r,r=Un.g,s=Un.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=li){xt.workingToColorSpace(Un.copy(this),e);let t=Un.r,n=Un.g,r=Un.b;return e!==li?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL($h);let n=Ap(os.h,$h.h,t),r=Ap(os.s,$h.s,t),s=Ap(os.l,$h.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new pt;pt.NAMES=Tx;var io=class extends Ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kl,this.environmentIntensity=1,this.environmentRotation=new kl,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ni=new G,Cr=new G,Np=new G,Ar=new G,Yo=new G,jo=new G,Ry=new G,Fp=new G,kp=new G,Up=new G,Bp=new zt,Vp=new zt,zp=new zt,ds=class i{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ni.subVectors(e,t),r.cross(Ni);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ni.subVectors(r,t),Cr.subVectors(n,t),Np.subVectors(e,t);let o=Ni.dot(Ni),a=Ni.dot(Cr),l=Ni.dot(Np),c=Cr.dot(Cr),h=Cr.dot(Np),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ar.x),l.addScaledVector(o,Ar.y),l.addScaledVector(a,Ar.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Bp.setScalar(0),Vp.setScalar(0),zp.setScalar(0),Bp.fromBufferAttribute(e,t),Vp.fromBufferAttribute(e,n),zp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bp,s.x),o.addScaledVector(Vp,s.y),o.addScaledVector(zp,s.z),o}static isFrontFacing(e,t,n,r){return Ni.subVectors(n,t),Cr.subVectors(e,t),Ni.cross(Cr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),Ni.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Yo.subVectors(r,n),jo.subVectors(s,n),Fp.subVectors(e,n);let l=Yo.dot(Fp),c=jo.dot(Fp);if(l<=0&&c<=0)return t.copy(n);kp.subVectors(e,r);let h=Yo.dot(kp),u=jo.dot(kp);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Yo,o);Up.subVectors(e,s);let f=Yo.dot(Up),g=jo.dot(Up);if(g>=0&&f<=g)return t.copy(s);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(jo,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ry.subVectors(s,r),a=(u-h)/(u-h+(f-g)),t.copy(r).addScaledVector(Ry,a);let p=1/(m+y+d);return o=y*p,a=d*p,t.copy(n).addScaledVector(Yo,o).addScaledVector(jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fs=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fi):Fi.fromBufferAttribute(s,o),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kh.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kh.copy(n.boundingBox)),Kh.applyMatrix4(e.matrixWorld),this.union(Kh)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pl),Jh.subVectors(this.max,Pl),Zo.subVectors(e.a,Pl),$o.subVectors(e.b,Pl),Ko.subVectors(e.c,Pl),as.subVectors($o,Zo),ls.subVectors(Ko,$o),Zs.subVectors(Zo,Ko);let t=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Zs.z,Zs.y,as.z,0,-as.x,ls.z,0,-ls.x,Zs.z,0,-Zs.x,-as.y,as.x,0,-ls.y,ls.x,0,-Zs.y,Zs.x,0];return!Hp(t,Zo,$o,Ko,Jh)||(t=[1,0,0,0,1,0,0,0,1],!Hp(t,Zo,$o,Ko,Jh))?!1:(Qh.crossVectors(as,ls),t=[Qh.x,Qh.y,Qh.z],Hp(t,Zo,$o,Ko,Jh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pr=[new G,new G,new G,new G,new G,new G,new G,new G],Fi=new G,Kh=new fs,Zo=new G,$o=new G,Ko=new G,as=new G,ls=new G,Zs=new G,Pl=new G,Jh=new G,Qh=new G,$s=new G;function Hp(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){$s.fromArray(i,s);let a=r.x*Math.abs($s.x)+r.y*Math.abs($s.y)+r.z*Math.abs($s.z),l=e.dot($s),c=t.dot($s),h=n.dot($s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var sn=new G,ed=new vt,gw=0,Wn=class extends sr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=im,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ed.fromBufferAttribute(this,t),ed.applyMatrix3(e),this.setXY(t,ed.x,ed.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cl(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),r=Kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),n=Kn(n,this.array),r=Kn(r,this.array),s=Kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==im&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ul=class extends Wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Bl=class extends Wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ei=class extends Wn{constructor(e,t,n){super(new Float32Array(e),t,n)}},_w=new fs,Rl=new G,Gp=new G,ro=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_w.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rl.subVectors(e,this.center);let t=Rl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Rl,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rl.copy(e.center).add(Gp)),this.expandByPoint(Rl.copy(e.center).sub(Gp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vw=0,Ti=new Ut,Wp=new Ui,Jo=new G,ai=new fs,Il=new fs,yn=new G,hi=class i extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=sc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iw(e)?Bl:Ul)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,n){return Ti.makeTranslation(e,t,n),this.applyMatrix4(Ti),this}scale(e,t,n){return Ti.makeScale(e,t,n),this.applyMatrix4(Ti),this}lookAt(e){return Wp.lookAt(e),Wp.updateMatrix(),this.applyMatrix4(Wp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ei(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Il.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(ai.min,Il.min),ai.expandByPoint(yn),yn.addVectors(ai.max,Il.max),ai.expandByPoint(yn)):(ai.expandByPoint(Il.min),ai.expandByPoint(Il.max))}ai.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)yn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yn.fromBufferAttribute(a,c),l&&(Jo.fromBufferAttribute(e,c),yn.add(Jo)),r=Math.max(r,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new G,l[v]=new G;let c=new G,h=new G,u=new G,d=new vt,f=new vt,g=new vt,y=new G,m=new G;function p(v,T,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),d.fromBufferAttribute(s,v),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,R),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[v].add(y),a[T].add(y),a[R].add(y),l[v].add(m),l[T].add(m),l[R].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let v=0,T=E.length;v<T;++v){let R=E[v],P=R.start,N=R.count;for(let j=P,Q=P+N;j<Q;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}let A=new G,b=new G,w=new G,M=new G;function C(v){w.fromBufferAttribute(r,v),M.copy(w);let T=a[v];A.copy(T),A.sub(w.multiplyScalar(w.dot(T))).normalize(),b.crossVectors(M,T);let P=b.dot(l[v])<0?-1:1;o.setXYZW(v,A.x,A.y,A.z,P)}for(let v=0,T=E.length;v<T;++v){let R=E[v],P=R.start,N=R.count;for(let j=P,Q=P+N;j<Q;j+=3)C(e.getX(j+0)),C(e.getX(j+1)),C(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,h=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Wn(d,h,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yw=0,Or=class extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yw++}),this.uuid=sc(),this.name="",this.type="Material",this.blending=to,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=vd,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(n.blending=this.blending),this.side!==Dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_d&&(n.blendSrc=this.blendSrc),this.blendDst!==vd&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Rr=new G,Xp=new G,td=new G,cs=new G,qp=new G,nd=new G,Yp=new G,aa=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,t),Rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xp.copy(e).add(t).multiplyScalar(.5),td.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(Xp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(td),a=cs.dot(this.direction),l=-cs.dot(td),c=cs.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Xp).addScaledVector(td,d),f}intersectSphere(e,t){Rr.subVectors(e.center,this.origin);let n=Rr.dot(this.direction),r=Rr.dot(Rr)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,t,n,r,s){qp.subVectors(t,e),nd.subVectors(n,e),Yp.crossVectors(qp,nd);let o=this.direction.dot(Yp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,e);let l=a*this.direction.dot(nd.crossVectors(cs,nd));if(l<0)return null;let c=a*this.direction.dot(qp.cross(cs));if(c<0||l+c>o)return null;let h=-a*cs.dot(Yp);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},so=class extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kl,this.combine=pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Iy=new Ut,Ks=new aa,id=new ro,Dy=new G,rd=new G,sd=new G,od=new G,jp=new G,ad=new G,Oy=new G,ld=new G,Xn=class extends Ui{constructor(e=new hi,t=new so){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ad.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(jp.fromBufferAttribute(u,e),o?ad.addScaledVector(jp,h):ad.addScaledVector(jp.sub(t),h))}t.add(ad)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),id.copy(n.boundingSphere),id.applyMatrix4(s),Ks.copy(e.ray).recast(e.near),!(id.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(id,Dy)===null||Ks.origin.distanceToSquared(Dy)>(e.far-e.near)**2))&&(Iy.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(Iy),!(n.boundingBox!==null&&Ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=E,w=A;b<w;b+=3){let M=a.getX(b),C=a.getX(b+1),v=a.getX(b+2);r=cd(this,p,e,n,c,h,u,M,C,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let E=a.getX(m),A=a.getX(m+1),b=a.getX(m+2);r=cd(this,o,e,n,c,h,u,E,A,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=E,w=A;b<w;b+=3){let M=b,C=b+1,v=b+2;r=cd(this,p,e,n,c,h,u,M,C,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let E=m,A=m+1,b=m+2;r=cd(this,o,e,n,c,h,u,E,A,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function xw(i,e,t,n,r,s,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Dr,a),l===null)return null;ld.copy(a),ld.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ld);return c<t.near||c>t.far?null:{distance:c,point:ld.clone(),object:i}}function cd(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,rd),i.getVertexPosition(l,sd),i.getVertexPosition(c,od);let h=xw(i,e,t,n,rd,sd,od,Oy);if(h){let u=new G;ds.getBarycoord(Oy,rd,sd,od,u),r&&(h.uv=ds.getInterpolatedAttribute(r,a,l,c,u,new vt)),s&&(h.uv1=ds.getInterpolatedAttribute(s,a,l,c,u,new vt)),o&&(h.normal=ds.getInterpolatedAttribute(o,a,l,c,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new G,materialIndex:0};ds.getNormal(rd,sd,od,d.normal),h.face=d,h.barycoord=u}return h}var Od=class extends hr{constructor(e=null,t=1,n=1,r,s,o,a,l,c=en,h=en,u,d){super(null,o,a,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zp=new G,bw=new G,Mw=new Je,tr=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Zp.subVectors(n,t).cross(bw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Zp),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mw.getNormalMatrix(e),r=this.coplanarPoint(Zp).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Js=new ro,Sw=new vt(.5,.5),hd=new G,la=class{constructor(e=new tr,t=new tr,n=new tr,r=new tr,s=new tr,o=new tr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],y=s[9],m=s[10],p=s[11],E=s[12],A=s[13],b=s[14],w=s[15];if(r[0].setComponents(c-o,f-h,p-g,w-E).normalize(),r[1].setComponents(c+o,f+h,p+g,w+E).normalize(),r[2].setComponents(c+a,f+u,p+y,w+A).normalize(),r[3].setComponents(c-a,f-u,p-y,w-A).normalize(),n)r[4].setComponents(l,d,m,b).normalize(),r[5].setComponents(c-l,f-d,p-m,w-b).normalize();else if(r[4].setComponents(c-l,f-d,p-m,w-b).normalize(),t===ki)r[5].setComponents(c+l,f+d,p+m,w+b).normalize();else if(t===na)r[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);let t=Sw.distanceTo(e.center);return Js.radius=.7071067811865476+t,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(hd.x=r.normal.x>0?e.max.x:e.min.x,hd.y=r.normal.y>0?e.max.y:e.min.y,hd.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ca=class extends Or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ly=new Ut,rm=new aa,dd=new ro,ud=new G,Vl=class extends Ui{constructor(e=new hi,t=new ca){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dd.copy(n.boundingSphere),dd.applyMatrix4(r),dd.radius+=s,e.ray.intersectsSphere(dd)===!1)return;Ly.copy(r).invert(),rm.copy(e.ray).applyMatrix4(Ly);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);ud.fromBufferAttribute(u,m),Ny(ud,m,l,r,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)ud.fromBufferAttribute(u,g),Ny(ud,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ny(i,e,t,n,r,s,o){let a=rm.distanceSqToPoint(i);if(a<t){let l=new G;rm.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var zl=class extends hr{constructor(e=[],t=_s,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ha=class extends hr{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Lr=class extends hr{constructor(e,t,n=Vi,r,s,o,a=en,l=en,c,h=rr,u=1){if(h!==rr&&h!==ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ld=class extends Lr{constructor(e,t=Vi,n=_s,r,s,o=en,a=en,l,c=rr){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hl=class extends hr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Nr=class i extends hi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ei(c,3)),this.setAttribute("normal",new Ei(h,3)),this.setAttribute("uv",new Ei(u,2));function g(y,m,p,E,A,b,w,M,C,v,T){let R=b/C,P=w/v,N=b/2,j=w/2,Q=M/2,D=C+1,X=v+1,V=0,ee=0,U=new G;for(let ie=0;ie<X;ie++){let he=ie*P-j;for(let pe=0;pe<D;pe++){let et=pe*R-N;U[y]=et*E,U[m]=he*A,U[p]=Q,c.push(U.x,U.y,U.z),U[y]=0,U[m]=0,U[p]=M>0?1:-1,h.push(U.x,U.y,U.z),u.push(pe/C),u.push(1-ie/v),V+=1}}for(let ie=0;ie<v;ie++)for(let he=0;he<C;he++){let pe=d+he+D*ie,et=d+he+D*(ie+1),yt=d+(he+1)+D*(ie+1),We=d+(he+1)+D*ie;l.push(pe,et,We),l.push(et,yt,We),ee+=6}a.addGroup(f,ee,T),f+=ee,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Gl=class i extends hi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let E=p*d-o;for(let A=0;A<c;A++){let b=A*u-s;g.push(b,-E,0),y.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let A=E+c*p,b=E+c*(p+1),w=E+1+c*(p+1),M=E+1+c*p;f.push(A,b,M),f.push(b,w,M)}this.setIndex(f),this.setAttribute("position",new Ei(g,3)),this.setAttribute("normal",new Ei(y,3)),this.setAttribute("uv",new Ei(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function ao(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Fy(r))r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Fy(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Bn(i){let e={};for(let t=0;t<i.length;t++){let n=ao(i[t]);for(let r in n)e[r]=n[r]}return e}function Fy(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ww(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Im(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var Ex={clone:ao,merge:Bn},Tw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ew=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tw,this.fragmentShader=Ew,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=ww(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new pt().setHex(r.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new G().fromArray(r.value);break;case"v4":this.uniforms[n].value=new zt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ut().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Nd=class extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Wl=class extends Or{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Fd=class extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kd=class extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fd(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var ps=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ud=class extends ps{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qp,endingEnd:Qp}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case em:s=e,a=2*t-n;break;case tm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case em:o=e,l=2*n-t;break;case tm:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,E=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,A=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let w=0;w!==a;++w)s[w]=p*o[h+w]+E*o[c+w]+A*o[l+w]+b*o[u+w];return s}},Bd=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},Vd=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},zd=class extends ps{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(r-t),y=1-g;for(let m=0;m!==a;++m)s[m]=o[c+m]*y+o[l+m]*g;return s}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],p=f*d+g*2,E=u[p],A=u[p+1],b=e*d+g*2,w=h[b],M=h[b+1],C=(n-t)/(r-t),v,T,R,P,N;for(let j=0;j<8;j++){v=C*C,T=v*C,R=1-C,P=R*R,N=P*R;let D=N*t+3*P*C*E+3*R*v*w+T*r-n;if(Math.abs(D)<1e-10)break;let X=3*P*(E-t)+6*R*C*(w-E)+3*v*(r-w);if(Math.abs(X)<1e-10)break;C=C-D/X,C=Math.max(0,Math.min(1,C))}s[g]=N*y+3*P*C*A+3*R*v*M+T*m}return s}},ui=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fd(t,this.TimeBufferType),this.values=fd(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fd(e.times,Array),values:fd(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Dl:t=this.InterpolantFactoryMethodDiscrete;break;case Ad:t=this.InterpolantFactoryMethodLinear;break;case gd:t=this.InterpolantFactoryMethodSmooth;break;case Jp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dl;case this.InterpolantFactoryMethodLinear:return Ad;case this.InterpolantFactoryMethodSmooth:return gd;case this.InterpolantFactoryMethodBezier:return Jp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&rw(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===gd,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Ad;var ms=class extends ui{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Dl;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Hd=class extends ui{constructor(e,t,n,r){super(e,t,n,r)}};Hd.prototype.ValueTypeName="color";var Gd=class extends ui{constructor(e,t,n,r){super(e,t,n,r)}};Gd.prototype.ValueTypeName="number";var Wd=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)or.slerpFlat(s,0,o,c-a,o,c,l);return s}},Xl=class extends ui{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Wd(this.times,this.values,this.getValueSize(),e)}};Xl.prototype.ValueTypeName="quaternion";Xl.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends ui{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Dl;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xd=class extends ui{constructor(e,t,n,r){super(e,t,n,r)}};Xd.prototype.ValueTypeName="vector";var ql=class extends Ui{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var $p=new Ut,ky=new G,Uy=new G,sm=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ky.setFromMatrixPosition(e.matrixWorld),t.position.copy(ky),Uy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uy),t.updateMatrixWorld(),$p.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($p,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===na||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($p)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pd=new G,md=new or,er=new G,Yl=class extends Ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pd,md,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pd,md,er.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pd,md,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pd,md,er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hs=new G,By=new vt,Vy=new vt,xn=class extends Yl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(Cp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,By,Vy),t.subVectors(Vy,By)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cp*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var da=class extends Yl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},om=class extends sm{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ua=class extends ql{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ui.DEFAULT_UP),this.updateMatrix(),this.target=new Ui,this.shadow=new om}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},jl=class extends ql{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Qo=-90,ea=1,qd=class extends Ui{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new xn(Qo,ea,e,t);r.layers=this.layers,this.add(r);let s=new xn(Qo,ea,e,t);s.layers=this.layers,this.add(s);let o=new xn(Qo,ea,e,t);o.layers=this.layers,this.add(o);let a=new xn(Qo,ea,e,t);a.layers=this.layers,this.add(a);let l=new xn(Qo,ea,e,t);l.layers=this.layers,this.add(l);let c=new xn(Qo,ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yd=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Dm="\\[\\]\\.:\\/",Cw=new RegExp("["+Dm+"]","g"),Om="[^"+Dm+"]",Aw="[^"+Dm.replace("\\.","")+"]",Pw=/((?:WC+[\/:])*)/.source.replace("WC",Om),Rw=/(WCOD+)?/.source.replace("WCOD",Aw),Iw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Om),Dw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Om),Ow=new RegExp("^"+Pw+Rw+Iw+Dw+"$"),Lw=["material","materials","bones","map"],am=class{constructor(e,t,n){let r=n||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yt=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cw,"")}static parseTrackName(t){let n=Ow.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);Lw.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=n.objectIndex;switch(r){case"materials":if(!t.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=n.nodeName;Xe("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=am,i})();Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y5=new Float32Array(1);var zy=new Ut,Zl=class{constructor(e,t,n=0,r=1/0){this.ray=new aa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zy.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zy),this}intersectObject(e,t=!0,n=[]){return lm(e,this,n,t),n.sort(Hy),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)lm(e[r],this,n,t);return n.sort(Hy),n}};function Hy(i,e){return i.distance-e.distance}function lm(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)lm(s[o],e,t,!0)}}var cm=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};function Lm(i,e,t,n){let r=Nw(n);switch(t){case Em:return i*e;case Am:return i*e/r.components*r.byteLength;case eu:return i*e/r.components*r.byteLength;case xs:return i*e*2/r.components*r.byteLength;case tu:return i*e*2/r.components*r.byteLength;case Cm:return i*e*3/r.components*r.byteLength;case Ci:return i*e*4/r.components*r.byteLength;case nu:return i*e*4/r.components*r.byteLength;case Ql:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ru:case ou:return Math.max(i,16)*Math.max(e,8)/4;case iu:case su:return Math.max(i,8)*Math.max(e,8)/2;case au:case lu:case hu:case du:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cu:case ic:case uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _u:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Su:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cu:case Au:case Pu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ru:case Iu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case rc:case Du:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nw(i){switch(i){case Jn:case Mm:return{byteLength:1,components:1};case pa:case Sm:case cr:return{byteLength:2,components:1};case Jd:case Qd:return{byteLength:2,components:4};case Vi:case Kd:case zi:return{byteLength:4,components:1};case wm:case Tm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Zx(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function kw(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Uw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bw=`#ifdef USE_ALPHAHASH
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
#endif`,Vw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ww=`#ifdef USE_AOMAP
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
#endif`,Xw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qw=`#ifdef USE_BATCHING
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
#endif`,Yw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$w=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kw=`#ifdef USE_IRIDESCENCE
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
#endif`,Jw=`#ifdef USE_BUMPMAP
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
#endif`,Qw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,aT=`#define PI 3.141592653589793
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
} // validated`,lT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cT=`vec3 transformedNormal = objectNormal;
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
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pT="gl_FragColor = linearToOutputTexel( gl_FragColor );",mT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
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
#endif`,yT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,bT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ST=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TT=`#ifdef USE_GRADIENTMAP
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
}`,ET=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,RT=`#ifdef USE_ENVMAP
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
#endif`,IT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NT=`PhysicalMaterial material;
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
#endif`,FT=`uniform sampler2D dfgLUT;
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
}`,kT=`
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
#endif`,UT=`#if defined( RE_IndirectDiffuse )
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
#endif`,BT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jT=`#if defined( USE_POINTS_UV )
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
#endif`,ZT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$T=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`#ifdef USE_MORPHTARGETS
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
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a1=`#ifdef USE_NORMALMAP
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
#endif`,l1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S1=`float getShadowMask() {
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
}`,w1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,E1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C1=`#ifdef USE_SKINNING
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
#endif`,A1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B1=`uniform sampler2D t2D;
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`#include <common>
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
}`,X1=`#if DEPTH_PACKING == 3200
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
}`,q1=`#define DISTANCE
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
}`,Y1=`#define DISTANCE
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`uniform float scale;
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
}`,K1=`uniform vec3 diffuse;
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
}`,J1=`#include <common>
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
}`,Q1=`uniform vec3 diffuse;
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
}`,eE=`#define LAMBERT
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
}`,tE=`#define LAMBERT
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
}`,nE=`#define MATCAP
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
}`,iE=`#define MATCAP
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
}`,rE=`#define NORMAL
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
}`,sE=`#define NORMAL
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
}`,oE=`#define PHONG
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
}`,aE=`#define PHONG
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
}`,lE=`#define STANDARD
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
}`,cE=`#define STANDARD
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
}`,hE=`#define TOON
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
}`,dE=`#define TOON
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
}`,uE=`uniform float size;
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
}`,fE=`uniform vec3 diffuse;
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
}`,pE=`#include <common>
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
}`,mE=`uniform vec3 color;
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
}`,gE=`uniform float rotation;
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
}`,_E=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Uw,alphahash_pars_fragment:Bw,alphamap_fragment:Vw,alphamap_pars_fragment:zw,alphatest_fragment:Hw,alphatest_pars_fragment:Gw,aomap_fragment:Ww,aomap_pars_fragment:Xw,batching_pars_vertex:qw,batching_vertex:Yw,begin_vertex:jw,beginnormal_vertex:Zw,bsdfs:$w,iridescence_fragment:Kw,bumpmap_pars_fragment:Jw,clipping_planes_fragment:Qw,clipping_planes_pars_fragment:eT,clipping_planes_pars_vertex:tT,clipping_planes_vertex:nT,color_fragment:iT,color_pars_fragment:rT,color_pars_vertex:sT,color_vertex:oT,common:aT,cube_uv_reflection_fragment:lT,defaultnormal_vertex:cT,displacementmap_pars_vertex:hT,displacementmap_vertex:dT,emissivemap_fragment:uT,emissivemap_pars_fragment:fT,colorspace_fragment:pT,colorspace_pars_fragment:mT,envmap_fragment:gT,envmap_common_pars_fragment:_T,envmap_pars_fragment:vT,envmap_pars_vertex:yT,envmap_physical_pars_fragment:RT,envmap_vertex:xT,fog_vertex:bT,fog_pars_vertex:MT,fog_fragment:ST,fog_pars_fragment:wT,gradientmap_pars_fragment:TT,lightmap_pars_fragment:ET,lights_lambert_fragment:CT,lights_lambert_pars_fragment:AT,lights_pars_begin:PT,lights_toon_fragment:IT,lights_toon_pars_fragment:DT,lights_phong_fragment:OT,lights_phong_pars_fragment:LT,lights_physical_fragment:NT,lights_physical_pars_fragment:FT,lights_fragment_begin:kT,lights_fragment_maps:UT,lights_fragment_end:BT,lightprobes_pars_fragment:VT,logdepthbuf_fragment:zT,logdepthbuf_pars_fragment:HT,logdepthbuf_pars_vertex:GT,logdepthbuf_vertex:WT,map_fragment:XT,map_pars_fragment:qT,map_particle_fragment:YT,map_particle_pars_fragment:jT,metalnessmap_fragment:ZT,metalnessmap_pars_fragment:$T,morphinstance_vertex:KT,morphcolor_vertex:JT,morphnormal_vertex:QT,morphtarget_pars_vertex:e1,morphtarget_vertex:t1,normal_fragment_begin:n1,normal_fragment_maps:i1,normal_pars_fragment:r1,normal_pars_vertex:s1,normal_vertex:o1,normalmap_pars_fragment:a1,clearcoat_normal_fragment_begin:l1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:d1,opaque_fragment:u1,packing:f1,premultiplied_alpha_fragment:p1,project_vertex:m1,dithering_fragment:g1,dithering_pars_fragment:_1,roughnessmap_fragment:v1,roughnessmap_pars_fragment:y1,shadowmap_pars_fragment:x1,shadowmap_pars_vertex:b1,shadowmap_vertex:M1,shadowmask_pars_fragment:S1,skinbase_vertex:w1,skinning_pars_vertex:T1,skinning_vertex:E1,skinnormal_vertex:C1,specularmap_fragment:A1,specularmap_pars_fragment:P1,tonemapping_fragment:R1,tonemapping_pars_fragment:I1,transmission_fragment:D1,transmission_pars_fragment:O1,uv_pars_fragment:L1,uv_pars_vertex:N1,uv_vertex:F1,worldpos_vertex:k1,background_vert:U1,background_frag:B1,backgroundCube_vert:V1,backgroundCube_frag:z1,cube_vert:H1,cube_frag:G1,depth_vert:W1,depth_frag:X1,distance_vert:q1,distance_frag:Y1,equirect_vert:j1,equirect_frag:Z1,linedashed_vert:$1,linedashed_frag:K1,meshbasic_vert:J1,meshbasic_frag:Q1,meshlambert_vert:eE,meshlambert_frag:tE,meshmatcap_vert:nE,meshmatcap_frag:iE,meshnormal_vert:rE,meshnormal_frag:sE,meshphong_vert:oE,meshphong_frag:aE,meshphysical_vert:lE,meshphysical_frag:cE,meshtoon_vert:hE,meshtoon_frag:dE,points_vert:uE,points_frag:fE,shadow_vert:pE,shadow_frag:mE,sprite_vert:gE,sprite_frag:_E},xe={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ur={basic:{uniforms:Bn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Bn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Bn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Bn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Bn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new pt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Bn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Bn([xe.points,xe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Bn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Bn([xe.common,xe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Bn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Bn([xe.sprite,xe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Bn([xe.common,xe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Bn([xe.lights,xe.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};ur.physical={uniforms:Bn([ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Fu={r:0,b:0,g:0},vE=new Ut,$x=new Je;$x.set(-1,0,0,0,1,0,0,0,1);function yE(i,e,t,n,r,s){let o=new pt(0),a=r===!0?0:1,l,c,h=null,u=0,d=null;function f(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let b=E.backgroundBlurriness>0;A=e.get(A,b)}return A}function g(E){let A=!1,b=f(E);b===null?m(o,a):b&&b.isColor&&(m(b,1),A=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,A){let b=f(A);b&&(b.isCubeTexture||b.mapping===Kl)?(c===void 0&&(c=new Xn(new Nr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:ao(ur.backgroundCube.uniforms),vertexShader:ur.backgroundCube.vertexShader,fragmentShader:ur.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vE.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($x),c.material.toneMapped=xt.getTransfer(b.colorSpace)!==Ct,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Xn(new Gl(2,2),new di({name:"BackgroundMaterial",uniforms:ao(ur.background.uniforms),vertexShader:ur.background.vertexShader,fragmentShader:ur.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=xt.getTransfer(b.colorSpace)!==Ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(Fu,Im(i)),t.buffers.color.setClear(Fu.r,Fu.g,Fu.b,A,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,A=1){o.set(E),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,m(o,a)},render:g,addToRenderList:y,dispose:p}}function xE(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(P,N,j,Q,D){let X=!1,V=u(P,Q,j,N);s!==V&&(s=V,c(s.object)),X=f(P,Q,j,D),X&&g(P,Q,j,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,b(P,N,j,Q),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,N,j,Q){let D=Q.wireframe===!0,X=n[N.id];X===void 0&&(X={},n[N.id]=X);let V=P.isInstancedMesh===!0?P.id:0,ee=X[V];ee===void 0&&(ee={},X[V]=ee);let U=ee[j.id];U===void 0&&(U={},ee[j.id]=U);let ie=U[D];return ie===void 0&&(ie=d(l()),U[D]=ie),ie}function d(P){let N=[],j=[],Q=[];for(let D=0;D<t;D++)N[D]=0,j[D]=0,Q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:j,attributeDivisors:Q,object:P,attributes:{},index:null}}function f(P,N,j,Q){let D=s.attributes,X=N.attributes,V=0,ee=j.getAttributes();for(let U in ee)if(ee[U].location>=0){let he=D[U],pe=X[U];if(pe===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),he===void 0||he.attribute!==pe||pe&&he.data!==pe.data)return!0;V++}return s.attributesNum!==V||s.index!==Q}function g(P,N,j,Q){let D={},X=N.attributes,V=0,ee=j.getAttributes();for(let U in ee)if(ee[U].location>=0){let he=X[U];he===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(he=P.instanceColor));let pe={};pe.attribute=he,he&&he.data&&(pe.data=he.data),D[U]=pe,V++}s.attributes=D,s.attributesNum=V,s.index=Q}function y(){let P=s.newAttributes;for(let N=0,j=P.length;N<j;N++)P[N]=0}function m(P){p(P,0)}function p(P,N){let j=s.newAttributes,Q=s.enabledAttributes,D=s.attributeDivisors;j[P]=1,Q[P]===0&&(i.enableVertexAttribArray(P),Q[P]=1),D[P]!==N&&(i.vertexAttribDivisor(P,N),D[P]=N)}function E(){let P=s.newAttributes,N=s.enabledAttributes;for(let j=0,Q=N.length;j<Q;j++)N[j]!==P[j]&&(i.disableVertexAttribArray(j),N[j]=0)}function A(P,N,j,Q,D,X,V){V===!0?i.vertexAttribIPointer(P,N,j,D,X):i.vertexAttribPointer(P,N,j,Q,D,X)}function b(P,N,j,Q){y();let D=Q.attributes,X=j.getAttributes(),V=N.defaultAttributeValues;for(let ee in X){let U=X[ee];if(U.location>=0){let ie=D[ee];if(ie===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),ie!==void 0){let he=ie.normalized,pe=ie.itemSize,et=e.get(ie);if(et===void 0)continue;let yt=et.buffer,We=et.type,q=et.bytesPerElement,le=We===i.INT||We===i.UNSIGNED_INT||ie.gpuType===Kd;if(ie.isInterleavedBufferAttribute){let se=ie.data,de=se.stride,Ie=ie.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<U.locationSize;be++)p(U.location+be,se.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<U.locationSize;be++)m(U.location+be);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let be=0;be<U.locationSize;be++)A(U.location+be,pe/U.locationSize,We,he,de*q,(Ie+pe/U.locationSize*be)*q,le)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<U.locationSize;se++)p(U.location+se,ie.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<U.locationSize;se++)m(U.location+se);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let se=0;se<U.locationSize;se++)A(U.location+se,pe/U.locationSize,We,he,pe*q,pe/U.locationSize*se*q,le)}}else if(V!==void 0){let he=V[ee];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(U.location,he);break;case 3:i.vertexAttrib3fv(U.location,he);break;case 4:i.vertexAttrib4fv(U.location,he);break;default:i.vertexAttrib1fv(U.location,he)}}}}E()}function w(){T();for(let P in n){let N=n[P];for(let j in N){let Q=N[j];for(let D in Q){let X=Q[D];for(let V in X)h(X[V].object),delete X[V];delete Q[D]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let j in N){let Q=N[j];for(let D in Q){let X=Q[D];for(let V in X)h(X[V].object),delete X[V];delete Q[D]}}delete n[P.id]}function C(P){for(let N in n){let j=n[N];for(let Q in j){let D=j[Q];if(D[P.id]===void 0)continue;let X=D[P.id];for(let V in X)h(X[V].object),delete X[V];delete D[P.id]}}}function v(P){for(let N in n){let j=n[N],Q=P.isInstancedMesh===!0?P.id:0,D=j[Q];if(D!==void 0){for(let X in D){let V=D[X];for(let ee in V)h(V[ee].object),delete V[ee];delete D[X]}delete j[Q],Object.keys(j).length===0&&delete n[N]}}}function T(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function bE(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function ME(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Ci&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let v=C===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zi&&!v)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:b,maxSamples:w,samples:M}}function SE(i){let e=this,t=null,n=0,r=!1,s=!1,o=new tr,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||r;return r=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let E=s?0:n,A=E*4,b=p.clippingState||null;l.value=b,b=h(g,d,A,f);for(let w=0;w!==A;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,b=f;A!==y;++A,b+=4)o.copy(u[A]).applyMatrix4(E,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var bs=4,Cx=[.125,.215,.35,.446,.526,.582],lo=20,wE=256,oc=new da,Ax=new pt,Nm=null,Fm=0,km=0,Um=!1,TE=new G,Uu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=TE}=s;Nm=this._renderer.getRenderTarget(),Fm=this._renderer.getActiveCubeFace(),km=this._renderer.getActiveMipmapLevel(),Um=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nm,Fm,km),this._renderer.xr.enabled=Um,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nm=this._renderer.getRenderTarget(),Fm=this._renderer.getActiveCubeFace(),km=this._renderer.getActiveMipmapLevel(),Um=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:cr,format:Ci,colorSpace:Ol,depthBuffer:!1},r=Px(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Px(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=EE(s)),this._blurMaterial=AE(s,e,t),this._ggxMaterial=CE(s,e,t)}return r}_compileMaterial(e){let t=new Xn(new hi,e);this._renderer.compile(t,oc)}_sceneToCubeUV(e,t,n,r,s){let l=new xn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ax),u.toneMapping=Bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xn(new Nr,new so({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(Ax),p=!0);for(let A=0;A<6;A++){let b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let w=this._cubeSize;ga(r,b*w,A>2?w:0,w,w),u.setRenderTarget(r),p&&u.render(y,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===_s||e.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ix()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rx());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-bs?n-g+bs:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ga(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(a,oc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,ga(e,m,p,3*y,2*y),r.setRenderTarget(e),r.render(a,oc)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[r];u.material=c;let d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*lo-1),y=s/g,m=isFinite(s)?1+Math.floor(h*y):lo;m>lo&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lo}`);let p=[],E=0;for(let C=0;C<lo;++C){let v=C/y,T=Math.exp(-v*v/2);p.push(T),C===0?E+=T:C<m&&(E+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-n;let b=this._sizeLods[r],w=3*b*(r>A-bs?r-A+bs:0),M=4*(this._cubeSize-b);ga(t,w,M,3*b,2*b),l.setRenderTarget(t),l.render(u,oc)}};function EE(i){let e=[],t=[],n=[],r=i,s=i-bs+1+Cx.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-bs?l=Cx[o-i+bs-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,E=new Float32Array(y*g*f),A=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let M=0;M<f;M++){let C=M%3*2/3-1,v=M>2?0:-1,T=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];E.set(T,y*g*M),A.set(d,m*g*M);let R=[M,M,M,M,M,M];b.set(R,p*g*M)}let w=new hi;w.setAttribute("position",new Wn(E,y)),w.setAttribute("uv",new Wn(A,m)),w.setAttribute("faceIndex",new Wn(b,p)),n.push(new Xn(w,null)),r>bs&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Px(i,e,t){let n=new ci(i,e,t);return n.texture.mapping=Kl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function CE(i,e,t){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function AE(i,e,t){let n=new Float32Array(lo),r=new G(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:lo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Rx(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Ix(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Vu(){return`

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
	`}var Bu=class extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Nr(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:lr});s.uniforms.tEquirect.value=t;let o=new Xn(r,s),a=t.minFilter;return t.minFilter===vs&&(t.minFilter=Tn),new qd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function PE(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===jd||f===Zd)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new Bu(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===jd||f===Zd,y=f===_s||f===oo;if(g||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Uu(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let E=d.image;return g&&E&&E.height>0||y&&E&&l(E)?(n===null&&(n=new Uu(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===jd?d.mapping=_s:f===Zd&&(d.mapping=oo),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function RE(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&eo("WebGLRenderer: "+n+" extension not supported."),r}}}function IE(i,e,t,n){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let E=f.array;y=f.version;for(let A=0,b=E.length;A<b;A+=3){let w=E[A+0],M=E[A+1],C=E[A+2];d.push(w,M,M,C,C,w)}}else{let E=g.array;y=g.version;for(let A=0,b=E.length/3-1;A<b;A+=3){let w=A+0,M=A+1,C=A+2;d.push(w,M,M,C,C,w)}}let m=new(g.count>=65535?Bl:Ul)(d,1);m.version=y;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function DE(i,e,t){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,s,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,s,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function OE(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function LE(i,e,t){let n=new WeakMap,r=new zt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let R=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",R)};var f=R;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],b=0;g===!0&&(b=1),y===!0&&(b=2),m===!0&&(b=3);let w=a.attributes.position.count*b,M=1;w>e.maxTextureSize&&(M=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let C=new Float32Array(w*M*4*u),v=new Fl(C,w,M,u);v.type=zi,v.needsUpdate=!0;let T=b*4;for(let P=0;P<u;P++){let N=p[P],j=E[P],Q=A[P],D=w*M*4*P;for(let X=0;X<N.count;X++){let V=X*T;g===!0&&(r.fromBufferAttribute(N,X),C[D+V+0]=r.x,C[D+V+1]=r.y,C[D+V+2]=r.z,C[D+V+3]=0),y===!0&&(r.fromBufferAttribute(j,X),C[D+V+4]=r.x,C[D+V+5]=r.y,C[D+V+6]=r.z,C[D+V+7]=0),m===!0&&(r.fromBufferAttribute(Q,X),C[D+V+8]=r.x,C[D+V+9]=r.y,C[D+V+10]=r.z,C[D+V+11]=Q.itemSize===4?r.w:1)}}d={count:u,texture:v,size:new vt(w,M)},n.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function NE(i,e,t,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var FE={[mm]:"LINEAR_TONE_MAPPING",[gm]:"REINHARD_TONE_MAPPING",[_m]:"CINEON_TONE_MAPPING",[vm]:"ACES_FILMIC_TONE_MAPPING",[xm]:"AGX_TONE_MAPPING",[bm]:"NEUTRAL_TONE_MAPPING",[ym]:"CUSTOM_TONE_MAPPING"};function kE(i,e,t,n,r,s){let o=new ci(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Lr(e,t):void 0}),a=new ci(e,t,{type:cr,depthBuffer:!1,stencilBuffer:!1}),l=new hi;l.setAttribute("position",new Ei([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ei([0,2,0,0,2,0],2));let c=new Nd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Xn(l,c),u=new da(-1,1,1,-1,0,1),d=null,f=null,g=!1,y,m=null,p=[],E=!1;this.setSize=function(A,b){o.setSize(A,b),a.setSize(A,b);for(let w=0;w<p.length;w++){let M=p[w];M.setSize&&M.setSize(A,b)}},this.setEffects=function(A){p=A,E=p.length>0&&p[0].isRenderPass===!0;let b=o.width,w=o.height;for(let M=0;M<p.length;M++){let C=p[M];C.setSize&&C.setSize(b,w)}},this.begin=function(A,b){if(g||A.toneMapping===Bi&&p.length===0)return!1;if(m=b,b!==null){let w=b.width,M=b.height;(o.width!==w||o.height!==M)&&this.setSize(w,M)}return E===!1&&A.setRenderTarget(o),y=A.toneMapping,A.toneMapping=Bi,!0},this.hasRenderPass=function(){return E},this.end=function(A,b){A.toneMapping=y,g=!0;let w=o,M=a;for(let C=0;C<p.length;C++){let v=p[C];if(v.enabled!==!1&&(v.render(A,M,w,b),v.needsSwap!==!1)){let T=w;w=M,M=T}}if(d!==A.outputColorSpace||f!==A.toneMapping){d=A.outputColorSpace,f=A.toneMapping,c.defines={},xt.getTransfer(d)===Ct&&(c.defines.SRGB_TRANSFER="");let C=FE[f];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(m),A.render(h,u),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var Kx=new hr,zm=new Lr(1,1),Jx=new Fl,Qx=new Dd,eb=new zl,Dx=[],Ox=[],Lx=new Float32Array(16),Nx=new Float32Array(9),Fx=new Float32Array(4);function ya(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Dx[r];if(s===void 0&&(s=new Float32Array(r),Dx[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zu(i,e){let t=Ox[e];t===void 0&&(t=new Int32Array(e),Ox[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function UE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function BE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function VE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function zE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function HE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Fx.set(n),i.uniformMatrix2fv(this.addr,!1,Fx),_n(t,n)}}function GE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Nx.set(n),i.uniformMatrix3fv(this.addr,!1,Nx),_n(t,n)}}function WE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Lx.set(n),i.uniformMatrix4fv(this.addr,!1,Lx),_n(t,n)}}function XE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function YE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function jE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function ZE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $E(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function KE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function JE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function QE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(zm.compareFunction=t.isReversedDepthBuffer()?Nu:Lu,s=zm):s=Kx,t.setTexture2D(e||s,r)}function eC(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Qx,r)}function tC(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||eb,r)}function nC(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Jx,r)}function iC(i){switch(i){case 5126:return UE;case 35664:return BE;case 35665:return VE;case 35666:return zE;case 35674:return HE;case 35675:return GE;case 35676:return WE;case 5124:case 35670:return XE;case 35667:case 35671:return qE;case 35668:case 35672:return YE;case 35669:case 35673:return jE;case 5125:return ZE;case 36294:return $E;case 36295:return KE;case 36296:return JE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return eC;case 35680:case 36300:case 36308:case 36293:return tC;case 36289:case 36303:case 36311:case 36292:return nC}}function rC(i,e){i.uniform1fv(this.addr,e)}function sC(i,e){let t=ya(e,this.size,2);i.uniform2fv(this.addr,t)}function oC(i,e){let t=ya(e,this.size,3);i.uniform3fv(this.addr,t)}function aC(i,e){let t=ya(e,this.size,4);i.uniform4fv(this.addr,t)}function lC(i,e){let t=ya(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cC(i,e){let t=ya(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hC(i,e){let t=ya(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dC(i,e){i.uniform1iv(this.addr,e)}function uC(i,e){i.uniform2iv(this.addr,e)}function fC(i,e){i.uniform3iv(this.addr,e)}function pC(i,e){i.uniform4iv(this.addr,e)}function mC(i,e){i.uniform1uiv(this.addr,e)}function gC(i,e){i.uniform2uiv(this.addr,e)}function _C(i,e){i.uniform3uiv(this.addr,e)}function vC(i,e){i.uniform4uiv(this.addr,e)}function yC(i,e,t){let n=this.cache,r=e.length,s=zu(t,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=zm:o=Kx;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function xC(i,e,t){let n=this.cache,r=e.length,s=zu(t,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qx,s[o])}function bC(i,e,t){let n=this.cache,r=e.length,s=zu(t,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||eb,s[o])}function MC(i,e,t){let n=this.cache,r=e.length,s=zu(t,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jx,s[o])}function SC(i){switch(i){case 5126:return rC;case 35664:return sC;case 35665:return oC;case 35666:return aC;case 35674:return lC;case 35675:return cC;case 35676:return hC;case 5124:case 35670:return dC;case 35667:case 35671:return uC;case 35668:case 35672:return fC;case 35669:case 35673:return pC;case 5125:return mC;case 36294:return gC;case 36295:return _C;case 36296:return vC;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return xC;case 35680:case 36300:case 36308:case 36293:return bC;case 36289:case 36303:case 36311:case 36292:return MC}}var Hm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iC(t.type)}},Gm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SC(t.type)}},Wm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Bm=/(\w+)(\])?(\[|\.)?/g;function kx(i,e){i.seq.push(e),i.map[e.id]=e}function wC(i,e,t){let n=i.name,r=n.length;for(Bm.lastIndex=0;;){let s=Bm.exec(n),o=Bm.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){kx(t,c===void 0?new Hm(a,i,e):new Gm(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Wm(a),kx(t,u)),t=u}}}var _a=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);wC(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Ux(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var TC=37297,EC=0;function CC(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Bx=new Je;function AC(i){xt._getMatrix(Bx,xt.workingColorSpace,i);let e=`mat3( ${Bx.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case Ll:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vx(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+CC(i.getShaderSource(e),a)}else return s}function PC(i,e){let t=AC(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var RC={[mm]:"Linear",[gm]:"Reinhard",[_m]:"Cineon",[vm]:"ACESFilmic",[xm]:"AgX",[bm]:"Neutral",[ym]:"Custom"};function IC(i,e){let t=RC[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ku=new G;function DC(){xt.getLuminanceCoefficients(ku);let i=ku.x.toFixed(4),e=ku.y.toFixed(4),t=ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lc).join(`
`)}function LC(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function NC(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function lc(i){return i!==""}function zx(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hx(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var FC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xm(i){return i.replace(FC,UC)}var kC=new Map;function UC(i,e){let t=ut[e];if(t===void 0){let n=kC.get(e);if(n!==void 0)t=ut[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xm(t)}var BC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gx(i){return i.replace(BC,VC)}function VC(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wx(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var zC={[$l]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};function HC(i){return zC[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var GC={[_s]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[Kl]:"ENVMAP_TYPE_CUBE_UV"};function WC(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":GC[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var XC={[oo]:"ENVMAP_MODE_REFRACTION"};function qC(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":XC[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var YC={[pm]:"ENVMAP_BLENDING_MULTIPLY",[hx]:"ENVMAP_BLENDING_MIX",[dx]:"ENVMAP_BLENDING_ADD"};function jC(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":YC[i.combine]||"ENVMAP_BLENDING_NONE"}function ZC(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $C(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=HC(t),c=WC(t),h=qC(t),u=jC(t),d=ZC(t),f=OC(t),g=LC(s),y=r.createProgram(),m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lc).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lc).join(`
`),p.length>0&&(p+=`
`)):(m=[Wx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lc).join(`
`),p=[Wx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?ut.tonemapping_pars_fragment:"",t.toneMapping!==Bi?IC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,PC("linearToOutputTexel",t.outputColorSpace),DC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lc).join(`
`)),o=Xm(o),o=zx(o,t),o=Hx(o,t),a=Xm(a),a=zx(a,t),a=Hx(a,t),o=Gx(o),a=Gx(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=E+m+o,b=E+p+a,w=Ux(r,r.VERTEX_SHADER,A),M=Ux(r,r.FRAGMENT_SHADER,b);r.attachShader(y,w),r.attachShader(y,M),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(P){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(y)||"",j=r.getShaderInfoLog(w)||"",Q=r.getShaderInfoLog(M)||"",D=N.trim(),X=j.trim(),V=Q.trim(),ee=!0,U=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,w,M);else{let ie=Vx(r,w,"vertex"),he=Vx(r,M,"fragment");Xe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+ie+`
`+he)}else D!==""?qe("WebGLProgram: Program Info Log:",D):(X===""||V==="")&&(U=!1);U&&(P.diagnostics={runnable:ee,programLog:D,vertexShader:{log:X,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(w),r.deleteShader(M),v=new _a(r,y),T=NC(r,y)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(y,TC)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=EC++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=M,this}var KC=0,qm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ym(e),t.set(e,n)),n}},Ym=class{constructor(e){this.id=KC++,this.code=e,this.usedTimes=0}};function JC(i){return i===xs||i===ic||i===rc}function QC(i,e,t,n,r,s){let o=new sa,a=new qm,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,T,R,P,N,j){let Q=P.fog,D=N.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ee=e.get(v.envMap||X,V),U=ee&&ee.mapping===Kl?ee.image.height:null,ie=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&qe("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let he=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,pe=he!==void 0?he.length:0,et=0;D.morphAttributes.position!==void 0&&(et=1),D.morphAttributes.normal!==void 0&&(et=2),D.morphAttributes.color!==void 0&&(et=3);let yt,We,q,le;if(ie){let Re=ur[ie];yt=Re.vertexShader,We=Re.fragmentShader}else{yt=v.vertexShader,We=v.fragmentShader;let Re=a.getVertexShaderStage(v),Ve=a.getFragmentShaderStage(v);a.update(v,Re,Ve),q=Re.id,le=Ve.id}let se=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,De=!!v.map,Te=!!v.matcap,Ye=!!ee,Fe=!!v.aoMap,Pe=!!v.lightMap,Ze=!!v.bumpMap&&v.wireframe===!1,ot=!!v.normalMap,it=!!v.displacementMap,mt=!!v.emissiveMap,Qe=!!v.metalnessMap,ht=!!v.roughnessMap,I=v.anisotropy>0,dt=v.clearcoat>0,Oe=v.dispersion>0,S=v.iridescence>0,_=v.sheen>0,L=v.transmission>0,k=I&&!!v.anisotropyMap,$=dt&&!!v.clearcoatMap,ae=dt&&!!v.clearcoatNormalMap,ue=dt&&!!v.clearcoatRoughnessMap,K=S&&!!v.iridescenceMap,te=S&&!!v.iridescenceThicknessMap,fe=_&&!!v.sheenColorMap,ke=_&&!!v.sheenRoughnessMap,ve=!!v.specularMap,_e=!!v.specularColorMap,Ue=!!v.specularIntensityMap,Ge=L&&!!v.transmissionMap,He=L&&!!v.thicknessMap,O=!!v.gradientMap,me=!!v.alphaMap,ne=v.alphaTest>0,ge=!!v.alphaHash,ye=!!v.extensions,oe=Bi;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(oe=i.toneMapping);let we={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:yt,fragmentShader:We,defines:v.defines,customVertexShaderID:q,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:De,matcap:Te,envMap:Ye,envMapMode:Ye&&ee.mapping,envMapCubeUVHeight:U,aoMap:Fe,lightMap:Pe,bumpMap:Ze,normalMap:ot,displacementMap:it,emissiveMap:mt,normalMapObjectSpace:ot&&v.normalMapType===px,normalMapTangentSpace:ot&&v.normalMapType===Ou,packedNormalMap:ot&&v.normalMapType===Ou&&JC(v.normalMap.format),metalnessMap:Qe,roughnessMap:ht,anisotropy:I,anisotropyMap:k,clearcoat:dt,clearcoatMap:$,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,dispersion:Oe,iridescence:S,iridescenceMap:K,iridescenceThicknessMap:te,sheen:_,sheenColorMap:fe,sheenRoughnessMap:ke,specularMap:ve,specularColorMap:_e,specularIntensityMap:Ue,transmission:L,transmissionMap:Ge,thicknessMap:He,gradientMap:O,opaque:v.transparent===!1&&v.blending===to&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:ne,alphaHash:ge,combine:v.combine,mapUv:De&&g(v.map.channel),aoMapUv:Fe&&g(v.aoMap.channel),lightMapUv:Pe&&g(v.lightMap.channel),bumpMapUv:Ze&&g(v.bumpMap.channel),normalMapUv:ot&&g(v.normalMap.channel),displacementMapUv:it&&g(v.displacementMap.channel),emissiveMapUv:mt&&g(v.emissiveMap.channel),metalnessMapUv:Qe&&g(v.metalnessMap.channel),roughnessMapUv:ht&&g(v.roughnessMap.channel),anisotropyMapUv:k&&g(v.anisotropyMap.channel),clearcoatMapUv:$&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ke&&g(v.sheenRoughnessMap.channel),specularMapUv:ve&&g(v.specularMap.channel),specularColorMapUv:_e&&g(v.specularColorMap.channel),specularIntensityMapUv:Ue&&g(v.specularIntensityMap.channel),transmissionMapUv:Ge&&g(v.transmissionMap.channel),thicknessMapUv:He&&g(v.thicknessMap.channel),alphaMapUv:me&&g(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ot||I),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(De||me),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&ot===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:et,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&xt.getTransfer(v.map.colorSpace)===Ct,decodeVideoTextureEmissive:mt&&v.emissiveMap.isVideoTexture===!0&&xt.getTransfer(v.emissiveMap.colorSpace)===Ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ar,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ye&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&v.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(T,v),E(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function E(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function A(v){let T=f[v.type],R;if(T){let P=ur[T];R=Ex.clone(P.uniforms)}else R=v.uniforms;return R}function b(v,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new $C(i,T,v,r),c.push(R),h.set(T,R)),R}function w(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:b,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:C}}function eA(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function tA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qx(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,y,m,p){let E=i[e];return E===void 0?(E={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},i[e]=E):(E.id=d.id,E.object=d,E.geometry=f,E.material=g,E.materialVariant=o(d),E.groupOrder=y,E.renderOrder=d.renderOrder,E.z=m,E.group=p),e++,E}function l(d,f,g,y,m,p){let E=a(d,f,g,y,m,p);g.transmission>0?n.push(E):g.transparent===!0?r.push(E):t.push(E)}function c(d,f,g,y,m,p){let E=a(d,f,g,y,m,p);g.transmission>0?n.unshift(E):g.transparent===!0?r.unshift(E):t.unshift(E)}function h(d,f,g){t.length>1&&t.sort(d||tA),n.length>1&&n.sort(f||Xx),r.length>1&&r.sort(f||Xx),g&&(t.reverse(),n.reverse(),r.reverse())}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function nA(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new qx,i.set(n,[o])):r>=s.length?(o=new qx,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function iA(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new pt};break;case"SpotLight":t={position:new G,direction:new G,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function rA(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var sA=0;function oA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function aA(i){let e=new iA,t=rA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let r=new G,s=new Ut,o=new Ut;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,E=0,A=0,b=0,w=0,M=0,C=0;c.sort(oA);for(let T=0,R=c.length;T<R;T++){let P=c[T],N=P.color,j=P.intensity,Q=P.distance,D=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===xs?D=P.shadow.map.texture:D=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*j,u+=N.g*j,d+=N.b*j;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],j);C++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let V=P.shadow,ee=t.get(P);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=P.shadow.matrix,E++}n.directional[f]=X,f++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(N).multiplyScalar(j),X.distance=Q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[y]=X;let V=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,V.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[y]=V.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.spotShadow[y]=ee,n.spotShadowMap[y]=D,b++}y++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(N).multiplyScalar(j),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let V=P.shadow,ee=t.get(P);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=P.shadow.matrix,A++}n.point[g]=X,g++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(j),X.groundColor.copy(P.groundColor).multiplyScalar(j),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let v=n.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==y||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==E||v.numPointShadows!==A||v.numSpotShadows!==b||v.numSpotMaps!==w||v.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=b+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=C,v.directionalLength=f,v.pointLength=g,v.spotLength=y,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=E,v.numPointShadows=A,v.numSpotShadows=b,v.numSpotMaps=w,v.numLightProbes=C,n.version=sA++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let A=c[p];if(A.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),u++}else if(A.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(A.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(A.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){let b=n.hemi[y];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Yx(i){let e=new aA(i),t=[],n=[],r=[];function s(d){u.camera=d,t.length=0,n.length=0,r.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function lA(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Yx(i),e.set(r,[a])):s>=o.length?(a=new Yx(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var cA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hA=`uniform sampler2D shadow_pass;
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
}`,dA=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],uA=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],jx=new Ut,ac=new G,Vm=new G;function fA(i,e,t){let n=new la,r=new vt,s=new vt,o=new zt,a=new Fd,l=new kd,c={},h=t.maxTextureSize,u={[Dr]:En,[En]:Dr,[ar]:ar},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:cA,fragmentShader:hA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new hi;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Xn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let p=this.type;this.render=function(M,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Xy&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$l);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(lr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let j=p!==this.type;j&&C.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(D=>D.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,D=M.length;Q<D;Q++){let X=M[Q],V=X.shadow;if(V===void 0){qe("WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let ee=V.getFrameExtents();r.multiply(ee),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ee.x),r.x=s.x*ee.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ee.y),r.y=s.y*ee.y,V.mapSize.y=s.y));let U=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=U,V.map===null||j===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===fa){if(X.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ci(r.x,r.y,{format:xs,type:cr,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),V.map.texture.name=X.name+".shadowMap",V.map.depthTexture=new Lr(r.x,r.y,zi),V.map.depthTexture.name=X.name+".shadowMapDepth",V.map.depthTexture.format=rr,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=en,V.map.depthTexture.magFilter=en}else X.isPointLight?(V.map=new Bu(r.x),V.map.depthTexture=new Ld(r.x,Vi)):(V.map=new ci(r.x,r.y),V.map.depthTexture=new Lr(r.x,r.y,Vi)),V.map.depthTexture.name=X.name+".shadowMap",V.map.depthTexture.format=rr,this.type===$l?(V.map.depthTexture.compareFunction=U?Nu:Lu,V.map.depthTexture.minFilter=Tn,V.map.depthTexture.magFilter=Tn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=en,V.map.depthTexture.magFilter=en);V.camera.updateProjectionMatrix()}let ie=V.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<ie;he++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,he),i.clear();else{he===0&&(i.setRenderTarget(V.map),i.clear());let pe=V.getViewport(he);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),N.viewport(o)}if(X.isPointLight){let pe=V.camera,et=V.matrix,yt=X.distance||pe.far;yt!==pe.far&&(pe.far=yt,pe.updateProjectionMatrix()),ac.setFromMatrixPosition(X.matrixWorld),pe.position.copy(ac),Vm.copy(pe.position),Vm.add(dA[he]),pe.up.copy(uA[he]),pe.lookAt(Vm),pe.updateMatrixWorld(),et.makeTranslation(-ac.x,-ac.y,-ac.z),jx.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(jx,pe.coordinateSystem,pe.reversedDepth)}else V.updateMatrices(X);n=V.getFrustum(),b(C,v,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===fa&&E(V,v),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,P)};function E(M,C){let v=e.update(y);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ci(r.x,r.y,{format:xs,type:cr})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,v,d,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,v,f,y,null)}function A(M,C,v,T){let R=null,P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=v.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=R.uuid,j=C.uuid,Q=c[N];Q===void 0&&(Q={},c[N]=Q);let D=Q[j];D===void 0&&(D=R.clone(),Q[j]=D,C.addEventListener("dispose",w)),R=D}if(R.visible=C.visible,R.wireframe=C.wireframe,T===fa?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:u[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=v}return R}function b(M,C,v,T,R){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===fa)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let j=e.update(M),Q=M.material;if(Array.isArray(Q)){let D=j.groups;for(let X=0,V=D.length;X<V;X++){let ee=D[X],U=Q[ee.materialIndex];if(U&&U.visible){let ie=A(M,U,T,R);M.onBeforeShadow(i,M,C,v,j,ie,ee),i.renderBufferDirect(v,null,j,ie,M,ee),M.onAfterShadow(i,M,C,v,j,ie,ee)}}}else if(Q.visible){let D=A(M,Q,T,R);M.onBeforeShadow(i,M,C,v,j,D,null),i.renderBufferDirect(v,null,j,D,M,null),M.onAfterShadow(i,M,C,v,j,D,null)}}let N=M.children;for(let j=0,Q=N.length;j<Q;j++)b(N[j],C,v,T,R)}function w(M){M.target.removeEventListener("dispose",w);for(let v in c){let T=c[v],R=M.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function pA(i,e){function t(){let O=!1,me=new zt,ne=null,ge=new zt(0,0,0,0);return{setMask:function(ye){ne!==ye&&!O&&(i.colorMask(ye,ye,ye,ye),ne=ye)},setLocked:function(ye){O=ye},setClear:function(ye,oe,we,Re,Ve){Ve===!0&&(ye*=Re,oe*=Re,we*=Re),me.set(ye,oe,we,Re),ge.equals(me)===!1&&(i.clearColor(ye,oe,we,Re),ge.copy(me))},reset:function(){O=!1,ne=null,ge.set(-1,0,0,0)}}}function n(){let O=!1,me=!1,ne=null,ge=null,ye=null;return{setReversed:function(oe){if(me!==oe){let we=e.get("EXT_clip_control");oe?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),me=oe;let Re=ye;ye=null,this.setClear(Re)}},getReversed:function(){return me},setTest:function(oe){oe?se(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(oe){ne!==oe&&!O&&(i.depthMask(oe),ne=oe)},setFunc:function(oe){if(me&&(oe=wx[oe]),ge!==oe){switch(oe){case yd:i.depthFunc(i.NEVER);break;case xd:i.depthFunc(i.ALWAYS);break;case bd:i.depthFunc(i.LESS);break;case no:i.depthFunc(i.LEQUAL);break;case Md:i.depthFunc(i.EQUAL);break;case Sd:i.depthFunc(i.GEQUAL);break;case wd:i.depthFunc(i.GREATER);break;case Td:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=oe}},setLocked:function(oe){O=oe},setClear:function(oe){ye!==oe&&(ye=oe,me&&(oe=1-oe),i.clearDepth(oe))},reset:function(){O=!1,ne=null,ge=null,ye=null,me=!1}}}function r(){let O=!1,me=null,ne=null,ge=null,ye=null,oe=null,we=null,Re=null,Ve=null;return{setTest:function(rt){O||(rt?se(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(rt){me!==rt&&!O&&(i.stencilMask(rt),me=rt)},setFunc:function(rt,Ai,Qn){(ne!==rt||ge!==Ai||ye!==Qn)&&(i.stencilFunc(rt,Ai,Qn),ne=rt,ge=Ai,ye=Qn)},setOp:function(rt,Ai,Qn){(oe!==rt||we!==Ai||Re!==Qn)&&(i.stencilOp(rt,Ai,Qn),oe=rt,we=Ai,Re=Qn)},setLocked:function(rt){O=rt},setClear:function(rt){Ve!==rt&&(i.clearStencil(rt),Ve=rt)},reset:function(){O=!1,me=null,ne=null,ge=null,ye=null,oe=null,we=null,Re=null,Ve=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,E=null,A=null,b=null,w=null,M=null,C=null,v=new pt(0,0,0),T=0,R=!1,P=null,N=null,j=null,Q=null,D=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ee=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(U)[1]),V=ee>=1):U.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),V=ee>=2);let ie=null,he={},pe=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),yt=new zt().fromArray(pe),We=new zt().fromArray(et);function q(O,me,ne,ge){let ye=new Uint8Array(4),oe=i.createTexture();i.bindTexture(O,oe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<ne;we++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(me+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return oe}let le={};le[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(no),Ze(!1),ot(hm),se(i.CULL_FACE),Fe(lr);function se(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function de(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ie(O,me){return d[O]!==me?(i.bindFramebuffer(O,me),d[O]=me,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=me),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=me),!0):!1}function be(O,me){let ne=g,ge=!1;if(O){ne=f.get(me),ne===void 0&&(ne=[],f.set(me,ne));let ye=O.textures;if(ne.length!==ye.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,we=ye.length;oe<we;oe++)ne[oe]=i.COLOR_ATTACHMENT0+oe;ne.length=ye.length,ge=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ge=!0);ge&&i.drawBuffers(ne)}function De(O){return y!==O?(i.useProgram(O),y=O,!0):!1}let Te={[us]:i.FUNC_ADD,[Yy]:i.FUNC_SUBTRACT,[jy]:i.FUNC_REVERSE_SUBTRACT};Te[Zy]=i.MIN,Te[$y]=i.MAX;let Ye={[Ky]:i.ZERO,[Jy]:i.ONE,[Qy]:i.SRC_COLOR,[_d]:i.SRC_ALPHA,[sx]:i.SRC_ALPHA_SATURATE,[ix]:i.DST_COLOR,[tx]:i.DST_ALPHA,[ex]:i.ONE_MINUS_SRC_COLOR,[vd]:i.ONE_MINUS_SRC_ALPHA,[rx]:i.ONE_MINUS_DST_COLOR,[nx]:i.ONE_MINUS_DST_ALPHA,[ox]:i.CONSTANT_COLOR,[ax]:i.ONE_MINUS_CONSTANT_COLOR,[lx]:i.CONSTANT_ALPHA,[cx]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(O,me,ne,ge,ye,oe,we,Re,Ve,rt){if(O===lr){m===!0&&(de(i.BLEND),m=!1);return}if(m===!1&&(se(i.BLEND),m=!0),O!==qy){if(O!==p||rt!==R){if((E!==us||w!==us)&&(i.blendEquation(i.FUNC_ADD),E=us,w=us),rt)switch(O){case to:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dm:i.blendFunc(i.ONE,i.ONE);break;case um:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",O);break}else switch(O){case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dm:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case um:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fm:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",O);break}A=null,b=null,M=null,C=null,v.set(0,0,0),T=0,p=O,R=rt}return}ye=ye||me,oe=oe||ne,we=we||ge,(me!==E||ye!==w)&&(i.blendEquationSeparate(Te[me],Te[ye]),E=me,w=ye),(ne!==A||ge!==b||oe!==M||we!==C)&&(i.blendFuncSeparate(Ye[ne],Ye[ge],Ye[oe],Ye[we]),A=ne,b=ge,M=oe,C=we),(Re.equals(v)===!1||Ve!==T)&&(i.blendColor(Re.r,Re.g,Re.b,Ve),v.copy(Re),T=Ve),p=O,R=!1}function Pe(O,me){O.side===ar?de(i.CULL_FACE):se(i.CULL_FACE);let ne=O.side===En;me&&(ne=!ne),Ze(ne),O.blending===to&&O.transparent===!1?Fe(lr):Fe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let ge=O.stencilWrite;a.setTest(ge),ge&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),mt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function ot(O){O!==Gy?(se(i.CULL_FACE),O!==N&&(O===hm?i.cullFace(i.BACK):O===Wy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),N=O}function it(O){O!==j&&(V&&i.lineWidth(O),j=O)}function mt(O,me,ne){O?(se(i.POLYGON_OFFSET_FILL),(Q!==me||D!==ne)&&(Q=me,D=ne,o.getReversed()&&(me=-me),i.polygonOffset(me,ne))):de(i.POLYGON_OFFSET_FILL)}function Qe(O){O?se(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function ht(O){O===void 0&&(O=i.TEXTURE0+X-1),ie!==O&&(i.activeTexture(O),ie=O)}function I(O,me,ne){ne===void 0&&(ie===null?ne=i.TEXTURE0+X-1:ne=ie);let ge=he[ne];ge===void 0&&(ge={type:void 0,texture:void 0},he[ne]=ge),(ge.type!==O||ge.texture!==me)&&(ie!==ne&&(i.activeTexture(ne),ie=ne),i.bindTexture(O,me||le[O]),ge.type=O,ge.texture=me)}function dt(){let O=he[ie];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Oe(){try{i.compressedTexImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function _(){try{i.texSubImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function L(){try{i.texSubImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function ae(){try{i.texStorage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function ue(){try{i.texStorage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function K(){try{i.texImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function te(){try{i.texImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function fe(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function ke(O,me){u[O]!==me&&(i.pixelStorei(O,me),u[O]=me)}function ve(O){yt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),yt.copy(O))}function _e(O){We.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),We.copy(O))}function Ue(O,me){let ne=c.get(me);ne===void 0&&(ne=new WeakMap,c.set(me,ne));let ge=ne.get(O);ge===void 0&&(ge=i.getUniformBlockIndex(me,O.name),ne.set(O,ge))}function Ge(O,me){let ge=c.get(me).get(O);l.get(me)!==ge&&(i.uniformBlockBinding(me,ge,O.__bindingPointIndex),l.set(me,ge))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ie=null,he={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,E=null,A=null,b=null,w=null,M=null,C=null,v=new pt(0,0,0),T=0,R=!1,P=null,N=null,j=null,Q=null,D=null,yt.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:de,bindFramebuffer:Ie,drawBuffers:be,useProgram:De,setBlending:Fe,setMaterial:Pe,setFlipSided:Ze,setCullFace:ot,setLineWidth:it,setPolygonOffset:mt,setScissorTest:Qe,activeTexture:ht,bindTexture:I,unbindTexture:dt,compressedTexImage2D:Oe,compressedTexImage3D:S,texImage2D:K,texImage3D:te,pixelStorei:ke,getParameter:fe,updateUBOMapping:Ue,uniformBlockBinding:Ge,texStorage2D:ae,texStorage3D:ue,texSubImage2D:_,texSubImage3D:L,compressedTexSubImage2D:k,compressedTexSubImage3D:$,scissor:ve,viewport:_e,reset:He}}function mA(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(S,_){return g?new OffscreenCanvas(S,_):Nl("canvas")}function m(S,_,L){let k=1,$=Oe(S);if(($.width>L||$.height>L)&&(k=L/Math.max($.width,$.height)),k<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let ae=Math.floor(k*$.width),ue=Math.floor(k*$.height);d===void 0&&(d=y(ae,ue));let K=_?y(ae,ue):d;return K.width=ae,K.height=ue,K.getContext("2d").drawImage(S,0,0,ae,ue),qe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ae+"x"+ue+")."),K}else return"data"in S&&qe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),S;return S}function p(S){return S.generateMipmaps}function E(S){i.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(S,_,L,k,$,ae=!1){if(S!==null){if(i[S]!==void 0)return i[S];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ue;k&&(ue=e.get("EXT_texture_norm16"),ue||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===i.RED&&(L===i.FLOAT&&(K=i.R32F),L===i.HALF_FLOAT&&(K=i.R16F),L===i.UNSIGNED_BYTE&&(K=i.R8),L===i.UNSIGNED_SHORT&&ue&&(K=ue.R16_EXT),L===i.SHORT&&ue&&(K=ue.R16_SNORM_EXT)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(K=i.R8UI),L===i.UNSIGNED_SHORT&&(K=i.R16UI),L===i.UNSIGNED_INT&&(K=i.R32UI),L===i.BYTE&&(K=i.R8I),L===i.SHORT&&(K=i.R16I),L===i.INT&&(K=i.R32I)),_===i.RG&&(L===i.FLOAT&&(K=i.RG32F),L===i.HALF_FLOAT&&(K=i.RG16F),L===i.UNSIGNED_BYTE&&(K=i.RG8),L===i.UNSIGNED_SHORT&&ue&&(K=ue.RG16_EXT),L===i.SHORT&&ue&&(K=ue.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(K=i.RG8UI),L===i.UNSIGNED_SHORT&&(K=i.RG16UI),L===i.UNSIGNED_INT&&(K=i.RG32UI),L===i.BYTE&&(K=i.RG8I),L===i.SHORT&&(K=i.RG16I),L===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(K=i.RGB8UI),L===i.UNSIGNED_SHORT&&(K=i.RGB16UI),L===i.UNSIGNED_INT&&(K=i.RGB32UI),L===i.BYTE&&(K=i.RGB8I),L===i.SHORT&&(K=i.RGB16I),L===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),L===i.UNSIGNED_INT&&(K=i.RGBA32UI),L===i.BYTE&&(K=i.RGBA8I),L===i.SHORT&&(K=i.RGBA16I),L===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(L===i.UNSIGNED_SHORT&&ue&&(K=ue.RGB16_EXT),L===i.SHORT&&ue&&(K=ue.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let te=ae?Ll:xt.getTransfer($);L===i.FLOAT&&(K=i.RGBA32F),L===i.HALF_FLOAT&&(K=i.RGBA16F),L===i.UNSIGNED_BYTE&&(K=te===Ct?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&ue&&(K=ue.RGBA16_EXT),L===i.SHORT&&ue&&(K=ue.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(S,_){let L;return S?_===null||_===Vi||_===ma?L=i.DEPTH24_STENCIL8:_===zi?L=i.DEPTH32F_STENCIL8:_===pa&&(L=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vi||_===ma?L=i.DEPTH_COMPONENT24:_===zi?L=i.DEPTH_COMPONENT32F:_===pa&&(L=i.DEPTH_COMPONENT16),L}function M(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==en&&S.minFilter!==Tn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function C(S){let _=S.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function v(S){let _=S.target;_.removeEventListener("dispose",v),P(_)}function T(S){let _=n.get(S);if(_.__webglInit===void 0)return;let L=S.source,k=f.get(L);if(k){let $=k[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(S),Object.keys(k).length===0&&f.delete(L)}n.remove(S)}function R(S){let _=n.get(S);i.deleteTexture(_.__webglTexture);let L=S.source,k=f.get(L);delete k[_.__cacheKey],o.memory.textures--}function P(S){let _=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let $=0;$<_.__webglFramebuffer[k].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[k][$]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let L=S.textures;for(let k=0,$=L.length;k<$;k++){let ae=n.get(L[k]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(L[k])}n.remove(S)}let N=0;function j(){N=0}function Q(){return N}function D(S){N=S}function X(){let S=N;return S>=r.maxTextures&&qe("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),N+=1,S}function V(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function ee(S,_){let L=n.get(S);if(S.isVideoTexture&&I(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&L.__version!==S.version){let k=S.image;if(k===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{de(L,S,_);return}}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function U(S,_){let L=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){de(L,S,_);return}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function ie(S,_){let L=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){de(L,S,_);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function he(S,_){let L=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&L.__version!==S.version){Ie(L,S,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}let pe={[Ed]:i.REPEAT,[nr]:i.CLAMP_TO_EDGE,[Cd]:i.MIRRORED_REPEAT},et={[en]:i.NEAREST,[ux]:i.NEAREST_MIPMAP_NEAREST,[Jl]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[$d]:i.LINEAR_MIPMAP_NEAREST,[vs]:i.LINEAR_MIPMAP_LINEAR},yt={[mx]:i.NEVER,[xx]:i.ALWAYS,[gx]:i.LESS,[Lu]:i.LEQUAL,[_x]:i.EQUAL,[Nu]:i.GEQUAL,[vx]:i.GREATER,[yx]:i.NOTEQUAL};function We(S,_){if(_.type===zi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Tn||_.magFilter===$d||_.magFilter===Jl||_.magFilter===vs||_.minFilter===Tn||_.minFilter===$d||_.minFilter===Jl||_.minFilter===vs)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,pe[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,pe[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,pe[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,et[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,et[_.minFilter]),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,yt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===en||_.minFilter!==Jl&&_.minFilter!==vs||_.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function q(S,_){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",C));let k=_.source,$=f.get(k);$===void 0&&($={},f.set(k,$));let ae=V(_);if(ae!==S.__cacheKey){$[ae]===void 0&&($[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),$[ae].usedTimes++;let ue=$[S.__cacheKey];ue!==void 0&&($[S.__cacheKey].usedTimes--,ue.usedTimes===0&&R(_)),S.__cacheKey=ae,S.__webglTexture=$[ae].texture}return L}function le(S,_,L){return Math.floor(Math.floor(S/L)/_)}function se(S,_,L,k){let ae=S.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,L,k,_.data);else{ae.sort((ke,ve)=>ke.start-ve.start);let ue=0;for(let ke=1;ke<ae.length;ke++){let ve=ae[ue],_e=ae[ke],Ue=ve.start+ve.count,Ge=le(_e.start,_.width,4),He=le(ve.start,_.width,4);_e.start<=Ue+1&&Ge===He&&le(_e.start+_e.count-1,_.width,4)===Ge?ve.count=Math.max(ve.count,_e.start+_e.count-ve.start):(++ue,ae[ue]=_e)}ae.length=ue+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ke=0,ve=ae.length;ke<ve;ke++){let _e=ae[ke],Ue=Math.floor(_e.start/4),Ge=Math.ceil(_e.count/4),He=Ue%_.width,O=Math.floor(Ue/_.width),me=Ge,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,He,O,me,ne,L,k,_.data)}S.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function de(S,_,L){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);let $=q(S,_),ae=_.source;t.bindTexture(k,S.__webglTexture,i.TEXTURE0+L);let ue=n.get(ae);if(ae.version!==ue.__version||$===!0){if(t.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ne=xt.getPrimaries(xt.workingColorSpace),ge=_.colorSpace===Fr?null:xt.getPrimaries(_.colorSpace),ye=_.colorSpace===Fr||ne===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let te=m(_.image,!1,r.maxTextureSize);te=dt(_,te);let fe=s.convert(_.format,_.colorSpace),ke=s.convert(_.type),ve=b(_.internalFormat,fe,ke,_.normalized,_.colorSpace,_.isVideoTexture);We(k,_);let _e,Ue=_.mipmaps,Ge=_.isVideoTexture!==!0,He=ue.__version===void 0||$===!0,O=ae.dataReady,me=M(_,te);if(_.isDepthTexture)ve=w(_.format===ys,_.type),He&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,ve,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ve,te.width,te.height,0,fe,ke,null));else if(_.isDataTexture)if(Ue.length>0){Ge&&He&&t.texStorage2D(i.TEXTURE_2D,me,ve,Ue[0].width,Ue[0].height);for(let ne=0,ge=Ue.length;ne<ge;ne++)_e=Ue[ne],Ge?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,fe,ke,_e.data):t.texImage2D(i.TEXTURE_2D,ne,ve,_e.width,_e.height,0,fe,ke,_e.data);_.generateMipmaps=!1}else Ge?(He&&t.texStorage2D(i.TEXTURE_2D,me,ve,te.width,te.height),O&&se(_,te,fe,ke)):t.texImage2D(i.TEXTURE_2D,0,ve,te.width,te.height,0,fe,ke,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ve,Ue[0].width,Ue[0].height,te.depth);for(let ne=0,ge=Ue.length;ne<ge;ne++)if(_e=Ue[ne],_.format!==Ci)if(fe!==null)if(Ge){if(O)if(_.layerUpdates.size>0){let ye=Lm(_e.width,_e.height,_.format,_.type);for(let oe of _.layerUpdates){let we=_e.data.subarray(oe*ye/_e.data.BYTES_PER_ELEMENT,(oe+1)*ye/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,oe,_e.width,_e.height,1,fe,we)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,te.depth,fe,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,ve,_e.width,_e.height,te.depth,0,_e.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,te.depth,fe,ke,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,ve,_e.width,_e.height,te.depth,0,fe,ke,_e.data)}else{Ge&&He&&t.texStorage2D(i.TEXTURE_2D,me,ve,Ue[0].width,Ue[0].height);for(let ne=0,ge=Ue.length;ne<ge;ne++)_e=Ue[ne],_.format!==Ci?fe!==null?Ge?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,fe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,ve,_e.width,_e.height,0,_e.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,fe,ke,_e.data):t.texImage2D(i.TEXTURE_2D,ne,ve,_e.width,_e.height,0,fe,ke,_e.data)}else if(_.isDataArrayTexture)if(Ge){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ve,te.width,te.height,te.depth),O)if(_.layerUpdates.size>0){let ne=Lm(te.width,te.height,_.format,_.type);for(let ge of _.layerUpdates){let ye=te.data.subarray(ge*ne/te.data.BYTES_PER_ELEMENT,(ge+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,te.width,te.height,1,fe,ke,ye)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,ke,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,te.width,te.height,te.depth,0,fe,ke,te.data);else if(_.isData3DTexture)Ge?(He&&t.texStorage3D(i.TEXTURE_3D,me,ve,te.width,te.height,te.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,ke,te.data)):t.texImage3D(i.TEXTURE_3D,0,ve,te.width,te.height,te.depth,0,fe,ke,te.data);else if(_.isFramebufferTexture){if(He)if(Ge)t.texStorage2D(i.TEXTURE_2D,me,ve,te.width,te.height);else{let ne=te.width,ge=te.height;for(let ye=0;ye<me;ye++)t.texImage2D(i.TEXTURE_2D,ye,ve,ne,ge,0,fe,ke,null),ne>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),te.parentNode!==ne){ne.appendChild(te),u.add(_),ne.onpaint=ge=>{let ye=ge.changedElements;for(let oe of u)ye.includes(oe.image)&&(oe.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let ye=i.RGBA,oe=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,oe,we,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ge&&He){let ne=Oe(Ue[0]);t.texStorage2D(i.TEXTURE_2D,me,ve,ne.width,ne.height)}for(let ne=0,ge=Ue.length;ne<ge;ne++)_e=Ue[ne],Ge?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe,ke,_e):t.texImage2D(i.TEXTURE_2D,ne,ve,fe,ke,_e);_.generateMipmaps=!1}else if(Ge){if(He){let ne=Oe(te);t.texStorage2D(i.TEXTURE_2D,me,ve,ne.width,ne.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,ke,te)}else t.texImage2D(i.TEXTURE_2D,0,ve,fe,ke,te);p(_)&&E(k),ue.__version=ae.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Ie(S,_,L){if(_.image.length!==6)return;let k=q(S,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+L);let ae=n.get($);if($.version!==ae.__version||k===!0){t.activeTexture(i.TEXTURE0+L);let ue=xt.getPrimaries(xt.workingColorSpace),K=_.colorSpace===Fr?null:xt.getPrimaries(_.colorSpace),te=_.colorSpace===Fr||ue===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let fe=_.isCompressedTexture||_.image[0].isCompressedTexture,ke=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let oe=0;oe<6;oe++)!fe&&!ke?ve[oe]=m(_.image[oe],!0,r.maxCubemapSize):ve[oe]=ke?_.image[oe].image:_.image[oe],ve[oe]=dt(_,ve[oe]);let _e=ve[0],Ue=s.convert(_.format,_.colorSpace),Ge=s.convert(_.type),He=b(_.internalFormat,Ue,Ge,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,me=ae.__version===void 0||k===!0,ne=$.dataReady,ge=M(_,_e);We(i.TEXTURE_CUBE_MAP,_);let ye;if(fe){O&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,He,_e.width,_e.height);for(let oe=0;oe<6;oe++){ye=ve[oe].mipmaps;for(let we=0;we<ye.length;we++){let Re=ye[we];_.format!==Ci?Ue!==null?O?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,0,0,Re.width,Re.height,Ue,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,He,Re.width,Re.height,0,Re.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,0,0,Re.width,Re.height,Ue,Ge,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we,He,Re.width,Re.height,0,Ue,Ge,Re.data)}}}else{if(ye=_.mipmaps,O&&me){ye.length>0&&ge++;let oe=Oe(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,He,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ke){O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ve[oe].width,ve[oe].height,Ue,Ge,ve[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,He,ve[oe].width,ve[oe].height,0,Ue,Ge,ve[oe].data);for(let we=0;we<ye.length;we++){let Ve=ye[we].image[oe].image;O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,0,0,Ve.width,Ve.height,Ue,Ge,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,He,Ve.width,Ve.height,0,Ue,Ge,Ve.data)}}else{O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,Ge,ve[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,He,Ue,Ge,ve[oe]);for(let we=0;we<ye.length;we++){let Re=ye[we];O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,0,0,Ue,Ge,Re.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we+1,He,Ue,Ge,Re.image[oe])}}}p(_)&&E(i.TEXTURE_CUBE_MAP),ae.__version=$.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function be(S,_,L,k,$,ae){let ue=s.convert(L.format,L.colorSpace),K=s.convert(L.type),te=b(L.internalFormat,ue,K,L.normalized,L.colorSpace),fe=n.get(_),ke=n.get(L);if(ke.__renderTarget=_,!fe.__hasExternalTextures){let ve=Math.max(1,_.width>>ae),_e=Math.max(1,_.height>>ae);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ae,te,ve,_e,_.depth,0,ue,K,null):t.texImage2D($,ae,te,ve,_e,0,ue,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),ht(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,$,ke.__webglTexture,0,Qe(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,$,ke.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(S,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer){let k=_.depthTexture,$=k&&k.isDepthTexture?k.type:null,ae=w(_.stencilBuffer,$),ue=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ht(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe(_),ae,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe(_),ae,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ae,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,S)}else{let k=_.textures;for(let $=0;$<k.length;$++){let ae=k[$],ue=s.convert(ae.format,ae.colorSpace),K=s.convert(ae.type),te=b(ae.internalFormat,ue,K,ae.normalized,ae.colorSpace);ht(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe(_),te,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe(_),te,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,te,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(S,_,L){let k=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),We(i.TEXTURE_CUBE_MAP,_.depthTexture);let fe=s.convert(_.depthTexture.format),ke=s.convert(_.depthTexture.type),ve;_.depthTexture.format===rr?ve=i.DEPTH_COMPONENT24:_.depthTexture.format===ys&&(ve=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ve,_.width,_.height,0,fe,ke,null)}}else ee(_.depthTexture,0);let ae=$.__webglTexture,ue=Qe(_),K=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,te=_.depthTexture.format===ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===rr)ht(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,K,ae,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,K,ae,0);else if(_.depthTexture.format===ys)ht(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,K,ae,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,K,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(S){let _=n.get(S),L=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){let k=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",$)};k.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=k}if(S.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let k=0;k<6;k++)Te(_.__webglFramebuffer[k],S,k);else{let k=S.texture.mipmaps;k&&k.length>0?Te(_.__webglFramebuffer[0],S,0):Te(_.__webglFramebuffer,S,0)}else if(L){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),De(_.__webglDepthbuffer[k],S,!1);else{let $=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ae)}}else{let k=S.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),De(_.__webglDepthbuffer,S,!1);else{let $=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(S,_,L){let k=n.get(S);_!==void 0&&be(k.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Ye(S)}function Pe(S){let _=S.texture,L=n.get(S),k=n.get(_);S.addEventListener("dispose",v);let $=S.textures,ae=S.isWebGLCubeRenderTarget===!0,ue=$.length>1;if(ue||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,o.memory.textures++),ae){L.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[K]=[];for(let te=0;te<_.mipmaps.length;te++)L.__webglFramebuffer[K][te]=i.createFramebuffer()}else L.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)L.__webglFramebuffer[K]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ue)for(let K=0,te=$.length;K<te;K++){let fe=n.get($[K]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&ht(S)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let te=$[K];L.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[K]);let fe=s.convert(te.format,te.colorSpace),ke=s.convert(te.type),ve=b(te.internalFormat,fe,ke,te.normalized,te.colorSpace,S.isXRRenderTarget===!0),_e=Qe(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ve,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,L.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),De(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),We(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)be(L.__webglFramebuffer[K][te],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,te);else be(L.__webglFramebuffer[K],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(_)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let K=0,te=$.length;K<te;K++){let fe=$[K],ke=n.get(fe),ve=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ve=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ke.__webglTexture),We(ve,fe),be(L.__webglFramebuffer,S,fe,i.COLOR_ATTACHMENT0+K,ve,0),p(fe)&&E(ve)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(K=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,k.__webglTexture),We(K,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)be(L.__webglFramebuffer[te],S,_,i.COLOR_ATTACHMENT0,K,te);else be(L.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,K,0);p(_)&&E(K),t.unbindTexture()}S.depthBuffer&&Ye(S)}function Ze(S){let _=S.textures;for(let L=0,k=_.length;L<k;L++){let $=_[L];if(p($)){let ae=A(S),ue=n.get($).__webglTexture;t.bindTexture(ae,ue),E(ae),t.unbindTexture()}}}let ot=[],it=[];function mt(S){if(S.samples>0){if(ht(S)===!1){let _=S.textures,L=S.width,k=S.height,$=i.COLOR_BUFFER_BIT,ae=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(S),K=_.length>1;if(K)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let te=S.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);let ke=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,L,k,0,0,L,k,$,i.NEAREST),l===!0&&(ot.length=0,it.length=0,ot.push(i.COLOR_ATTACHMENT0+fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ot.push(ae),it.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,it)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);let ke=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let _=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Qe(S){return Math.min(r.maxSamples,S.samples)}function ht(S){let _=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(S){let _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function dt(S,_){let L=S.colorSpace,k=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Ol&&L!==Fr&&(xt.getTransfer(L)===Ct?(k!==Ci||$!==Jn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",L)),_}function Oe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=j,this.getTextureUnits=Q,this.setTextureUnits=D,this.setTexture2D=ee,this.setTexture2DArray=U,this.setTexture3D=ie,this.setTextureCube=he,this.rebindTextures=Fe,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function gA(i,e){function t(n,r=Fr){let s,o=xt.getTransfer(r);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Jd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tm)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mm)return i.BYTE;if(n===Sm)return i.SHORT;if(n===pa)return i.UNSIGNED_SHORT;if(n===Kd)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===zi)return i.FLOAT;if(n===cr)return i.HALF_FLOAT;if(n===Em)return i.ALPHA;if(n===Cm)return i.RGB;if(n===Ci)return i.RGBA;if(n===rr)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Am)return i.RED;if(n===eu)return i.RED_INTEGER;if(n===xs)return i.RG;if(n===tu)return i.RG_INTEGER;if(n===nu)return i.RGBA_INTEGER;if(n===Ql||n===ec||n===tc||n===nc)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ql)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ql)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===iu||n===ru||n===su||n===ou)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ou)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===au||n===lu||n===cu||n===hu||n===du||n===ic||n===uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===au||n===lu)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===cu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===hu)return s.COMPRESSED_R11_EAC;if(n===du)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ic)return s.COMPRESSED_RG11_EAC;if(n===uu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fu||n===pu||n===mu||n===gu||n===_u||n===vu||n===yu||n===xu||n===bu||n===Mu||n===Su||n===wu||n===Tu||n===Eu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_u)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Su)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eu)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cu||n===Au||n===Pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Cu)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Au)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ru||n===Iu||n===rc||n===Du)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ru)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Iu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Du)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ma?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var _A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vA=`
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

}`,jm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Hl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new di({vertexShader:_A,fragmentShader:vA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new Gl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zm=class extends sr{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new jm,p={},E=t.getContextAttributes(),A=null,b=null,w=[],M=[],C=new vt,v=null,T=new xn;T.viewport=new zt;let R=new xn;R.viewport=new zt;let P=[T,R],N=new Yd,j=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=w[q];return le===void 0&&(le=new oa,w[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=w[q];return le===void 0&&(le=new oa,w[q]=le),le.getGripSpace()},this.getHand=function(q){let le=w[q];return le===void 0&&(le=new oa,w[q]=le),le.getHandSpace()};function D(q){let le=M.indexOf(q.inputSource);if(le===-1)return;let se=w[le];se!==void 0&&(se.update(q.inputSource,q.frame,c||o),se.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",V);for(let q=0;q<w.length;q++){let le=M[q];le!==null&&(M[q]=null,w[q].disconnect(le))}j=null,Q=null,m.reset();for(let q in p)delete p[q];e.setRenderTarget(A),f=null,d=null,u=null,r=null,b=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",X),r.addEventListener("inputsourceschange",V),E.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,de=null,Ie=null;E.depth&&(Ie=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=E.stencil?ys:rr,de=E.stencil?ma:Vi);let be={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ci(d.textureWidth,d.textureHeight,{format:Ci,type:Jn,depthTexture:new Lr(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let se={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ci(f.framebufferWidth,f.framebufferHeight,{format:Ci,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(q){for(let le=0;le<q.removed.length;le++){let se=q.removed[le],de=M.indexOf(se);de>=0&&(M[de]=null,w[de].disconnect(se))}for(let le=0;le<q.added.length;le++){let se=q.added[le],de=M.indexOf(se);if(de===-1){for(let be=0;be<w.length;be++)if(be>=M.length){M.push(se),de=be;break}else if(M[be]===null){M[be]=se,de=be;break}if(de===-1)break}let Ie=w[de];Ie&&Ie.connect(se)}}let ee=new G,U=new G;function ie(q,le,se){ee.setFromMatrixPosition(le.matrixWorld),U.setFromMatrixPosition(se.matrixWorld);let de=ee.distanceTo(U),Ie=le.projectionMatrix.elements,be=se.projectionMatrix.elements,De=Ie[14]/(Ie[10]-1),Te=Ie[14]/(Ie[10]+1),Ye=(Ie[9]+1)/Ie[5],Fe=(Ie[9]-1)/Ie[5],Pe=(Ie[8]-1)/Ie[0],Ze=(be[8]+1)/be[0],ot=De*Pe,it=De*Ze,mt=de/(-Pe+Ze),Qe=mt*-Pe;if(le.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Qe),q.translateZ(mt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let ht=De+mt,I=Te+mt,dt=ot-Qe,Oe=it+(de-Qe),S=Ye*Te/I*ht,_=Fe*Te/I*ht;q.projectionMatrix.makePerspective(dt,Oe,S,_,ht,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function he(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let le=q.near,se=q.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(se=m.depthFar)),N.near=R.near=T.near=le,N.far=R.far=T.far=se,(j!==N.near||Q!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),j=N.near,Q=N.far),N.layers.mask=q.layers.mask|6,T.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;let de=q.parent,Ie=N.cameras;he(N,de);for(let be=0;be<Ie.length;be++)he(Ie[be],de);Ie.length===2?ie(N,T,R):N.projectionMatrix.copy(T.projectionMatrix),pe(q,N,de)};function pe(q,le,se){se===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(se.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Pd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(q){return p[q]};let et=null;function yt(q,le){if(h=le.getViewerPose(c||o),g=le,h!==null){let se=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let de=!1;se.length!==N.cameras.length&&(N.cameras.length=0,de=!0);for(let Te=0;Te<se.length;Te++){let Ye=se[Te],Fe=null;if(f!==null)Fe=f.getViewport(Ye);else{let Ze=u.getViewSubImage(d,Ye);Fe=Ze.viewport,Te===0&&(e.setRenderTargetTextures(b,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(b))}let Pe=P[Te];Pe===void 0&&(Pe=new xn,Pe.layers.enable(Te),Pe.viewport=new zt,P[Te]=Pe),Pe.matrix.fromArray(Ye.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ye.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Te===0&&(N.matrix.copy(Pe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),de===!0&&N.cameras.push(Pe)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Te=u.getDepthInformation(se[0]);Te&&Te.isValid&&Te.texture&&m.init(Te,r.renderState)}if(Ie&&Ie.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Te=0;Te<se.length;Te++){let Ye=se[Te].camera;if(Ye){let Fe=p[Ye];Fe||(Fe=new Hl,p[Ye]=Fe);let Pe=u.getCameraImage(Ye);Fe.sourceTexture=Pe}}}}for(let se=0;se<w.length;se++){let de=M[se],Ie=w[se];de!==null&&Ie!==void 0&&Ie.update(de,le,c||o)}et&&et(q,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}let We=new Zx;We.setAnimationLoop(yt),this.setAnimationLoop=function(q){et=q},this.dispose=function(){}}},yA=new Ut,tb=new Je;tb.set(-1,0,0,0,1,0,0,0,1);function xA(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Im(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,A,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=e.get(p),A=E.envMap,b=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(yA.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tb),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function bA(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let M=w.program;n.uniformBlockBinding(b,M)}function c(b,w){let M=r[b.id];M===void 0&&(m(b),M=h(b),r[b.id]=M,b.addEventListener("dispose",E));let C=w.program;n.updateUBOMapping(b,C);let v=e.render.frame;s[b.id]!==v&&(d(b),s[b.id]=v)}function h(b){let w=u();b.__bindingPointIndex=w;let M=i.createBuffer(),C=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let w=r[b.id],M=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,T=M.length;v<T;v++){let R=M[v];if(Array.isArray(R))for(let P=0,N=R.length;P<N;P++)f(R[P],v,P,C);else f(R,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,w,M,C){if(y(b,w,M,C)===!0){let v=b.__offset,T=b.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){let N=T[P],j=p(N);g(N,b.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function g(b,w,M){typeof b=="number"||typeof b=="boolean"?w[0]=b:b.isMatrix3?(w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0):ArrayBuffer.isView(b)?w.set(new b.constructor(b.buffer,b.byteOffset,w.length)):b.toArray(w,M)}function y(b,w,M,C){let v=b.value,T=w+"_"+M;if(C[T]===void 0)return typeof v=="number"||typeof v=="boolean"?C[T]=v:ArrayBuffer.isView(v)?C[T]=v.slice():C[T]=v.clone(),!0;{let R=C[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(b){let w=b.uniforms,M=0,C=16;for(let T=0,R=w.length;T<R;T++){let P=Array.isArray(w[T])?w[T]:[w[T]];for(let N=0,j=P.length;N<j;N++){let Q=P[N],D=Array.isArray(Q.value)?Q.value:[Q.value];for(let X=0,V=D.length;X<V;X++){let ee=D[X],U=p(ee),ie=M%C,he=ie%U.boundary,pe=ie+he;M+=he,pe!==0&&C-pe<U.storage&&(M+=C-pe),Q.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=M,M+=U.storage}}}let v=M%C;return v>0&&(M+=C-v),b.__size=M,b.__cache={},this}function p(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",b),w}function E(b){let w=b.target;w.removeEventListener("dispose",E);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function A(){for(let b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:A}}var MA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),dr=null;function SA(){return dr===null&&(dr=new Od(MA,16,16,xs,cr),dr.name="DFG_LUT",dr.minFilter=Tn,dr.magFilter=Tn,dr.wrapS=nr,dr.wrapT=nr,dr.generateMipmaps=!1,dr.needsUpdate=!0),dr}var va=class{constructor(e={}){let{canvas:t=bx(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Jn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=f,m=new Set([nu,tu,eu]),p=new Set([Jn,Vi,pa,ma,Jd,Qd]),E=new Uint32Array(4),A=new Int32Array(4),b=new G,w=null,M=null,C=[],v=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,N=null,j=null,Q=null,D=null;this._outputColorSpace=li;let X=0,V=0,ee=null,U=-1,ie=null,he=new zt,pe=new zt,et=null,yt=new pt(0),We=0,q=t.width,le=t.height,se=1,de=null,Ie=null,be=new zt(0,0,q,le),De=new zt(0,0,q,le),Te=!1,Ye=new la,Fe=!1,Pe=!1,Ze=new Ut,ot=new G,it=new zt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function ht(){return ee===null?se:1}let I=n;function dt(x,F){return t.getContext(x,F)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Ai,!1),I===null){let F="webgl2";if(I=dt(F,x),I===null)throw dt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw Xe("WebGLRenderer: "+x.message),x}let Oe,S,_,L,k,$,ae,ue,K,te,fe,ke,ve,_e,Ue,Ge,He,O,me,ne,ge,ye,oe;function we(){Oe=new RE(I),Oe.init(),ge=new gA(I,Oe),S=new ME(I,Oe,e,ge),_=new pA(I,Oe),S.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),j=I.createFramebuffer(),Q=I.createFramebuffer(),D=I.createFramebuffer(),L=new OE(I),k=new eA,$=new mA(I,Oe,_,k,S,ge,L),ae=new PE(R),ue=new kw(I),ye=new xE(I,ue),K=new IE(I,ue,L,ye),te=new NE(I,K,ue,ye,L),O=new LE(I,S,$),Ue=new SE(k),fe=new QC(R,ae,Oe,S,ye,Ue),ke=new xA(R,k),ve=new nA,_e=new lA(Oe),He=new yE(R,ae,_,te,g,l),Ge=new fA(R,te,S),oe=new bA(I,L,S,_),me=new bE(I,Oe,L),ne=new DE(I,Oe,L),L.programs=fe.programs,R.capabilities=S,R.extensions=Oe,R.properties=k,R.renderLists=ve,R.shadowMap=Ge,R.state=_,R.info=L}we(),y!==Jn&&(T=new kE(y,t.width,t.height,a,r,s));let Re=new Zm(R,I);this.xr=Re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let x=Oe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Oe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(x){x!==void 0&&(se=x,this.setSize(q,le,!1))},this.getSize=function(x){return x.set(q,le)},this.setSize=function(x,F,Z=!0){if(Re.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}q=x,le=F,t.width=Math.floor(x*se),t.height=Math.floor(F*se),Z===!0&&(t.style.width=x+"px",t.style.height=F+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(q*se,le*se).floor()},this.setDrawingBufferSize=function(x,F,Z){q=x,le=F,se=Z,t.width=Math.floor(x*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,x,F)},this.setEffects=function(x){if(y===Jn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let F=0;F<x.length;F++)if(x[F].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(he)},this.getViewport=function(x){return x.copy(be)},this.setViewport=function(x,F,Z,H){x.isVector4?be.set(x.x,x.y,x.z,x.w):be.set(x,F,Z,H),_.viewport(he.copy(be).multiplyScalar(se).round())},this.getScissor=function(x){return x.copy(De)},this.setScissor=function(x,F,Z,H){x.isVector4?De.set(x.x,x.y,x.z,x.w):De.set(x,F,Z,H),_.scissor(pe.copy(De).multiplyScalar(se).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(x){_.setScissorTest(Te=x)},this.setOpaqueSort=function(x){de=x},this.setTransparentSort=function(x){Ie=x},this.getClearColor=function(x){return x.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(x=!0,F=!0,Z=!0){let H=0;if(x){let W=!1;if(ee!==null){let Se=ee.texture.format;W=m.has(Se)}if(W){let Se=ee.texture.type,Ae=p.has(Se),Me=He.getClearColor(),Ne=He.getClearAlpha(),Be=Me.r,st=Me.g,ft=Me.b;Ae?(E[0]=Be,E[1]=st,E[2]=ft,E[3]=Ne,I.clearBufferuiv(I.COLOR,0,E)):(A[0]=Be,A[1]=st,A[2]=ft,A[3]=Ne,I.clearBufferiv(I.COLOR,0,A))}else H|=I.COLOR_BUFFER_BIT}F&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),N=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ai,!1),He.dispose(),ve.dispose(),_e.dispose(),k.dispose(),ae.dispose(),te.dispose(),ye.dispose(),oe.dispose(),fe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Qm),Re.removeEventListener("sessionend",eg),Ms.stop()};function Ve(x){x.preventDefault(),Rm("WebGLRenderer: Context Lost."),P=!0}function rt(){Rm("WebGLRenderer: Context Restored."),P=!1;let x=L.autoReset,F=Ge.enabled,Z=Ge.autoUpdate,H=Ge.needsUpdate,W=Ge.type;we(),L.autoReset=x,Ge.enabled=F,Ge.autoUpdate=Z,Ge.needsUpdate=H,Ge.type=W}function Ai(x){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Qn(x){let F=x.target;F.removeEventListener("dispose",Qn),vb(F)}function vb(x){yb(x),k.remove(x)}function yb(x){let F=k.get(x).programs;F!==void 0&&(F.forEach(function(Z){fe.releaseProgram(Z)}),x.isShaderMaterial&&fe.releaseShaderCache(x))}this.renderBufferDirect=function(x,F,Z,H,W,Se){F===null&&(F=mt);let Ae=W.isMesh&&W.matrixWorld.determinantAffine()<0,Me=Mb(x,F,Z,H,W);_.setMaterial(H,Ae);let Ne=Z.index,Be=1;if(H.wireframe===!0){if(Ne=K.getWireframeAttribute(Z),Ne===void 0)return;Be=2}let st=Z.drawRange,ft=Z.attributes.position,ze=st.start*Be,At=(st.start+st.count)*Be;Se!==null&&(ze=Math.max(ze,Se.start*Be),At=Math.min(At,(Se.start+Se.count)*Be)),Ne!==null?(ze=Math.max(ze,0),At=Math.min(At,Ne.count)):ft!=null&&(ze=Math.max(ze,0),At=Math.min(At,ft.count));let jt=At-ze;if(jt<0||jt===1/0)return;ye.setup(W,H,Me,Z,Ne);let Xt,Dt=me;if(Ne!==null&&(Xt=ue.get(Ne),Dt=ne,Dt.setIndex(Xt)),W.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*ht()),Dt.setMode(I.LINES)):Dt.setMode(I.TRIANGLES);else if(W.isLine){let Cn=H.linewidth;Cn===void 0&&(Cn=1),_.setLineWidth(Cn*ht()),W.isLineSegments?Dt.setMode(I.LINES):W.isLineLoop?Dt.setMode(I.LINE_LOOP):Dt.setMode(I.LINE_STRIP)}else W.isPoints?Dt.setMode(I.POINTS):W.isSprite&&Dt.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))Dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Cn=W._multiDrawStarts,Ce=W._multiDrawCounts,ei=W._multiDrawCount,St=Ne?ue.get(Ne).bytesPerElement:1,fi=k.get(H).currentProgram.getUniforms();for(let Hi=0;Hi<ei;Hi++)fi.setValue(I,"_gl_DrawID",Hi),Dt.render(Cn[Hi]/St,Ce[Hi])}else if(W.isInstancedMesh)Dt.renderInstances(ze,jt,W.count);else if(Z.isInstancedBufferGeometry){let Cn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ce=Math.min(Z.instanceCount,Cn);Dt.renderInstances(ze,jt,Ce)}else Dt.render(ze,jt)};function Jm(x,F,Z){x.transparent===!0&&x.side===ar&&x.forceSinglePass===!1?(x.side=En,x.needsUpdate=!0,uc(x,F,Z),x.side=Dr,x.needsUpdate=!0,uc(x,F,Z),x.side=ar):uc(x,F,Z)}this.compile=function(x,F,Z=null){Z===null&&(Z=x),M=_e.get(Z),M.init(F),v.push(M),Z.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),x!==Z&&x.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights();let H=new Set;return x.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Se=W.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){let Me=Se[Ae];Jm(Me,Z,W),H.add(Me)}else Jm(Se,Z,W),H.add(Se)}),M=v.pop(),H},this.compileAsync=function(x,F,Z=null){let H=this.compile(x,F,Z);return new Promise(W=>{function Se(){if(H.forEach(function(Ae){k.get(Ae).currentProgram.isReady()&&H.delete(Ae)}),H.size===0){W(x);return}setTimeout(Se,10)}Oe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ku=null;function xb(x){Ku&&Ku(x)}function Qm(){Ms.stop()}function eg(){Ms.start()}let Ms=new Zx;Ms.setAnimationLoop(xb),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(x){Ku=x,Re.setAnimationLoop(x),x===null?Ms.stop():Ms.start()},Re.addEventListener("sessionstart",Qm),Re.addEventListener("sessionend",eg),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(x,F);let Z=Re.enabled===!0&&Re.isPresenting===!0,H=T!==null&&(ee===null||Z)&&T.begin(R,ee);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(F),F=Re.getCamera()),x.isScene===!0&&x.onBeforeRender(R,x,F,ee),M=_e.get(x,v.length),M.init(F),M.state.textureUnits=$.getTextureUnits(),v.push(M),Ze.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ye.setFromProjectionMatrix(Ze,ki,F.reversedDepth),Pe=this.localClippingEnabled,Fe=Ue.init(this.clippingPlanes,Pe),w=ve.get(x,C.length),w.init(),C.push(w),Re.enabled===!0&&Re.isPresenting===!0){let Ae=R.xr.getDepthSensingMesh();Ae!==null&&Ju(Ae,F,-1/0,R.sortObjects)}Ju(x,F,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(de,Ie,F.reversedDepth),Qe=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Qe&&He.addToRenderList(w,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Fe===!0&&Ue.beginShadows();let W=M.state.shadowsArray;if(Ge.render(W,x,F),Fe===!0&&Ue.endShadows(),(H&&T.hasRenderPass())===!1){let Ae=w.opaque,Me=w.transmissive;if(M.setupLights(),F.isArrayCamera){let Ne=F.cameras;if(Me.length>0)for(let Be=0,st=Ne.length;Be<st;Be++){let ft=Ne[Be];ng(Ae,Me,x,ft)}Qe&&He.render(x);for(let Be=0,st=Ne.length;Be<st;Be++){let ft=Ne[Be];tg(w,x,ft,ft.viewport)}}else Me.length>0&&ng(Ae,Me,x,F),Qe&&He.render(x),tg(w,x,F)}ee!==null&&V===0&&($.updateMultisampleRenderTarget(ee),$.updateRenderTargetMipmap(ee)),H&&T.end(R),x.isScene===!0&&x.onAfterRender(R,x,F),ye.resetDefaultState(),U=-1,ie=null,v.pop(),v.length>0?(M=v[v.length-1],$.setTextureUnits(M.state.textureUnits),Fe===!0&&Ue.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,N!==null&&N.renderEnd()};function Ju(x,F,Z,H){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)Z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(F);else if(x.isLightProbeGrid)M.pushLightProbeGrid(x);else if(x.isLight)M.pushLight(x),x.castShadow&&M.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ye.intersectsSprite(x)){H&&it.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ze);let Ae=te.update(x),Me=x.material;Me.visible&&w.push(x,Ae,Me,Z,it.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ye.intersectsObject(x))){let Ae=te.update(x),Me=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),it.copy(x.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),it.copy(Ae.boundingSphere.center)),it.applyMatrix4(x.matrixWorld).applyMatrix4(Ze)),Array.isArray(Me)){let Ne=Ae.groups;for(let Be=0,st=Ne.length;Be<st;Be++){let ft=Ne[Be],ze=Me[ft.materialIndex];ze&&ze.visible&&w.push(x,Ae,ze,Z,it.z,ft)}}else Me.visible&&w.push(x,Ae,Me,Z,it.z,null)}}let Se=x.children;for(let Ae=0,Me=Se.length;Ae<Me;Ae++)Ju(Se[Ae],F,Z,H)}function tg(x,F,Z,H){let{opaque:W,transmissive:Se,transparent:Ae}=x;M.setupLightsView(Z),Fe===!0&&Ue.setGlobalState(R.clippingPlanes,Z),H&&_.viewport(he.copy(H)),W.length>0&&dc(W,F,Z),Se.length>0&&dc(Se,F,Z),Ae.length>0&&dc(Ae,F,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ng(x,F,Z,H){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[H.id]===void 0){let ze=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[H.id]=new ci(1,1,{generateMipmaps:!0,type:ze?cr:Jn,minFilter:vs,samples:Math.max(4,S.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let Se=M.state.transmissionRenderTarget[H.id],Ae=H.viewport||he;Se.setSize(Ae.z*R.transmissionResolutionScale,Ae.w*R.transmissionResolutionScale);let Me=R.getRenderTarget(),Ne=R.getActiveCubeFace(),Be=R.getActiveMipmapLevel();R.setRenderTarget(Se),R.getClearColor(yt),We=R.getClearAlpha(),We<1&&R.setClearColor(16777215,.5),R.clear(),Qe&&He.render(Z);let st=R.toneMapping;R.toneMapping=Bi;let ft=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),M.setupLightsView(H),Fe===!0&&Ue.setGlobalState(R.clippingPlanes,H),dc(x,Z,H),$.updateMultisampleRenderTarget(Se),$.updateRenderTargetMipmap(Se),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let At=0,jt=F.length;At<jt;At++){let Xt=F[At],{object:Dt,geometry:Cn,material:Ce,group:ei}=Xt;if(Ce.side===ar&&Dt.layers.test(H.layers)){let St=Ce.side;Ce.side=En,Ce.needsUpdate=!0,ig(Dt,Z,H,Cn,Ce,ei),Ce.side=St,Ce.needsUpdate=!0,ze=!0}}ze===!0&&($.updateMultisampleRenderTarget(Se),$.updateRenderTargetMipmap(Se))}R.setRenderTarget(Me,Ne,Be),R.setClearColor(yt,We),ft!==void 0&&(H.viewport=ft),R.toneMapping=st}function dc(x,F,Z){let H=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Se=x.length;W<Se;W++){let Ae=x[W],{object:Me,geometry:Ne,group:Be}=Ae,st=Ae.material;st.allowOverride===!0&&H!==null&&(st=H),Me.layers.test(Z.layers)&&ig(Me,F,Z,Ne,st,Be)}}function ig(x,F,Z,H,W,Se){x.onBeforeRender(R,F,Z,H,W,Se),x.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),W.onBeforeRender(R,F,Z,H,x,Se),W.transparent===!0&&W.side===ar&&W.forceSinglePass===!1?(W.side=En,W.needsUpdate=!0,R.renderBufferDirect(Z,F,H,W,x,Se),W.side=Dr,W.needsUpdate=!0,R.renderBufferDirect(Z,F,H,W,x,Se),W.side=ar):R.renderBufferDirect(Z,F,H,W,x,Se),x.onAfterRender(R,F,Z,H,W,Se)}function uc(x,F,Z){F.isScene!==!0&&(F=mt);let H=k.get(x),W=M.state.lights,Se=M.state.shadowsArray,Ae=W.state.version,Me=fe.getParameters(x,W.state,Se,F,Z,M.state.lightProbeGridArray),Ne=fe.getProgramCacheKey(Me),Be=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let st=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=ae.get(x.envMap||H.environment,st),H.envMapRotation=H.environment!==null&&x.envMap===null?F.environmentRotation:x.envMapRotation,Be===void 0&&(x.addEventListener("dispose",Qn),Be=new Map,H.programs=Be);let ft=Be.get(Ne);if(ft!==void 0){if(H.currentProgram===ft&&H.lightsStateVersion===Ae)return sg(x,Me),ft}else Me.uniforms=fe.getUniforms(x),N!==null&&x.isNodeMaterial&&N.build(x,Z,Me),x.onBeforeCompile(Me,R),ft=fe.acquireProgram(Me,Ne),Be.set(Ne,ft),H.uniforms=Me.uniforms;let ze=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ze.clippingPlanes=Ue.uniform),sg(x,Me),H.needsLights=wb(x),H.lightsStateVersion=Ae,H.needsLights&&(ze.ambientLightColor.value=W.state.ambient,ze.lightProbe.value=W.state.probe,ze.directionalLights.value=W.state.directional,ze.directionalLightShadows.value=W.state.directionalShadow,ze.spotLights.value=W.state.spot,ze.spotLightShadows.value=W.state.spotShadow,ze.rectAreaLights.value=W.state.rectArea,ze.ltc_1.value=W.state.rectAreaLTC1,ze.ltc_2.value=W.state.rectAreaLTC2,ze.pointLights.value=W.state.point,ze.pointLightShadows.value=W.state.pointShadow,ze.hemisphereLights.value=W.state.hemi,ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ze.spotLightMatrix.value=W.state.spotLightMatrix,ze.spotLightMap.value=W.state.spotLightMap,ze.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=M.state.lightProbeGridArray.length>0,H.currentProgram=ft,H.uniformsList=null,ft}function rg(x){if(x.uniformsList===null){let F=x.currentProgram.getUniforms();x.uniformsList=_a.seqWithValue(F.seq,x.uniforms)}return x.uniformsList}function sg(x,F){let Z=k.get(x);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function bb(x,F){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;b.setFromMatrixPosition(F.matrixWorld);for(let Z=0,H=x.length;Z<H;Z++){let W=x[Z];if(W.texture!==null&&W.boundingBox.containsPoint(b))return W}return null}function Mb(x,F,Z,H,W){F.isScene!==!0&&(F=mt),$.resetTextureUnits();let Se=F.fog,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,Me=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:xt.workingColorSpace,Ne=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Be=ae.get(H.envMap||Ae,Ne),st=H.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ft=!!Z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ze=!!Z.morphAttributes.position,At=!!Z.morphAttributes.normal,jt=!!Z.morphAttributes.color,Xt=Bi;H.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Xt=R.toneMapping);let Dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Cn=Dt!==void 0?Dt.length:0,Ce=k.get(H),ei=M.state.lights;if(Fe===!0&&(Pe===!0||x!==ie)){let Lt=x===ie&&H.id===U;Ue.setState(H,x,Lt)}let St=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==ei.state.version||Ce.outputColorSpace!==Me||W.isBatchedMesh&&Ce.batching===!1||!W.isBatchedMesh&&Ce.batching===!0||W.isBatchedMesh&&Ce.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ce.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ce.instancing===!1||!W.isInstancedMesh&&Ce.instancing===!0||W.isSkinnedMesh&&Ce.skinning===!1||!W.isSkinnedMesh&&Ce.skinning===!0||W.isInstancedMesh&&Ce.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ce.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ce.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ce.instancingMorph===!1&&W.morphTexture!==null||Ce.envMap!==Be||H.fog===!0&&Ce.fog!==Se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ue.numPlanes||Ce.numIntersection!==Ue.numIntersection)||Ce.vertexAlphas!==st||Ce.vertexTangents!==ft||Ce.morphTargets!==ze||Ce.morphNormals!==At||Ce.morphColors!==jt||Ce.toneMapping!==Xt||Ce.morphTargetsCount!==Cn||!!Ce.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Ce.__version=H.version);let fi=Ce.currentProgram;St===!0&&(fi=uc(H,F,W),N&&H.isNodeMaterial&&N.onUpdateProgram(H,fi,Ce));let Hi=!1,kr=!1,co=!1,Ot=fi.getUniforms(),Zt=Ce.uniforms;if(_.useProgram(fi.program)&&(Hi=!0,kr=!0,co=!0),H.id!==U&&(U=H.id,kr=!0),Ce.needsLights){let Lt=bb(M.state.lightProbeGridArray,W);Ce.lightProbeGrid!==Lt&&(Ce.lightProbeGrid=Lt,kr=!0)}if(Hi||ie!==x){_.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Ot.setValue(I,"projectionMatrix",x.projectionMatrix),Ot.setValue(I,"viewMatrix",x.matrixWorldInverse);let Br=Ot.map.cameraPosition;Br!==void 0&&Br.setValue(I,ot.setFromMatrixPosition(x.matrixWorld)),S.logarithmicDepthBuffer&&Ot.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ot.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),ie!==x&&(ie=x,kr=!0,co=!0)}if(Ce.needsLights&&(ei.state.directionalShadowMap.length>0&&Ot.setValue(I,"directionalShadowMap",ei.state.directionalShadowMap,$),ei.state.spotShadowMap.length>0&&Ot.setValue(I,"spotShadowMap",ei.state.spotShadowMap,$),ei.state.pointShadowMap.length>0&&Ot.setValue(I,"pointShadowMap",ei.state.pointShadowMap,$)),W.isSkinnedMesh){Ot.setOptional(I,W,"bindMatrix"),Ot.setOptional(I,W,"bindMatrixInverse");let Lt=W.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Ot.setValue(I,"boneTexture",Lt.boneTexture,$))}W.isBatchedMesh&&(Ot.setOptional(I,W,"batchingTexture"),Ot.setValue(I,"batchingTexture",W._matricesTexture,$),Ot.setOptional(I,W,"batchingIdTexture"),Ot.setValue(I,"batchingIdTexture",W._indirectTexture,$),Ot.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&Ot.setValue(I,"batchingColorTexture",W._colorsTexture,$));let Ur=Z.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0)&&O.update(W,Z,fi),(kr||Ce.receiveShadow!==W.receiveShadow)&&(Ce.receiveShadow=W.receiveShadow,Ot.setValue(I,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Zt.envMapIntensity.value=F.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=SA()),kr){if(Ot.setValue(I,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&Sb(Zt,co),Se&&H.fog===!0&&ke.refreshFogUniforms(Zt,Se),ke.refreshMaterialUniforms(Zt,H,se,le,M.state.transmissionRenderTarget[x.id]),Ce.needsLights&&Ce.lightProbeGrid){let Lt=Ce.lightProbeGrid;Zt.probesSH.value=Lt.texture,Zt.probesMin.value.copy(Lt.boundingBox.min),Zt.probesMax.value.copy(Lt.boundingBox.max),Zt.probesResolution.value.copy(Lt.resolution)}_a.upload(I,rg(Ce),Zt,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_a.upload(I,rg(Ce),Zt,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ot.setValue(I,"center",W.center),Ot.setValue(I,"modelViewMatrix",W.modelViewMatrix),Ot.setValue(I,"normalMatrix",W.normalMatrix),Ot.setValue(I,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let Lt=H.uniformsGroups;for(let Br=0,ho=Lt.length;Br<ho;Br++){let og=Lt[Br];oe.update(og,fi),oe.bind(og,fi)}}return fi}function Sb(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function wb(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(x,F,Z){let H=k.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),k.get(x.texture).__webglTexture=F,k.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,F){let Z=k.get(x);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(x,F=0,Z=0){ee=x,X=F,V=Z;let H=null,W=!1,Se=!1;if(x){let Me=k.get(x);if(Me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,Me.__webglFramebuffer),he.copy(x.viewport),pe.copy(x.scissor),et=x.scissorTest,_.viewport(he),_.scissor(pe),_.setScissorTest(et),U=-1;return}else if(Me.__webglFramebuffer===void 0)$.setupRenderTarget(x);else if(Me.__hasExternalTextures)$.rebindTextures(x,k.get(x.texture).__webglTexture,k.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let st=x.depthTexture;if(Me.__boundDepthTexture!==st){if(st!==null&&k.has(st)&&(x.width!==st.image.width||x.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(x)}}let Ne=x.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);let Be=k.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?H=Be[F][Z]:H=Be[F],W=!0):x.samples>0&&$.useMultisampledRTT(x)===!1?H=k.get(x).__webglMultisampledFramebuffer:Array.isArray(Be)?H=Be[Z]:H=Be,he.copy(x.viewport),pe.copy(x.scissor),et=x.scissorTest}else he.copy(be).multiplyScalar(se).floor(),pe.copy(De).multiplyScalar(se).floor(),et=Te;if(Z!==0&&(H=j),_.bindFramebuffer(I.FRAMEBUFFER,H)&&_.drawBuffers(x,H),_.viewport(he),_.scissor(pe),_.setScissorTest(et),W){let Me=k.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,Z)}else if(Se){let Me=F;for(let Ne=0;Ne<x.textures.length;Ne++){let Be=k.get(x.textures[Ne]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ne,Be.__webglTexture,Z,Me)}}else if(x!==null&&Z!==0){let Me=k.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Me.__webglTexture,Z)}U=-1},this.readRenderTargetPixels=function(x,F,Z,H,W,Se,Ae,Me=0){if(!(x&&x.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=k.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){_.bindFramebuffer(I.FRAMEBUFFER,Ne);try{let Be=x.textures[Me],st=Be.format,ft=Be.type;if(x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me),!S.textureFormatReadable(st)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!S.textureTypeReadable(ft)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=x.width-H&&Z>=0&&Z<=x.height-W&&I.readPixels(F,Z,H,W,ge.convert(st),ge.convert(ft),Se)}finally{let Be=ee!==null?k.get(ee).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(x,F,Z,H,W,Se,Ae,Me=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=k.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne)if(F>=0&&F<=x.width-H&&Z>=0&&Z<=x.height-W){_.bindFramebuffer(I.FRAMEBUFFER,Ne);let Be=x.textures[Me],st=Be.format,ft=Be.type;if(x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me),!S.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!S.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ze),I.bufferData(I.PIXEL_PACK_BUFFER,Se.byteLength,I.STREAM_READ),I.readPixels(F,Z,H,W,ge.convert(st),ge.convert(ft),0);let At=ee!==null?k.get(ee).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,At);let jt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Sx(I,jt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Se),I.deleteBuffer(ze),I.deleteSync(jt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,F=null,Z=0){let H=Math.pow(2,-Z),W=Math.floor(x.image.width*H),Se=Math.floor(x.image.height*H),Ae=F!==null?F.x:0,Me=F!==null?F.y:0;$.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,Ae,Me,W,Se),_.unbindTexture()},this.copyTextureToTexture=function(x,F,Z=null,H=null,W=0,Se=0){let Ae,Me,Ne,Be,st,ft,ze,At,jt,Xt=x.isCompressedTexture?x.mipmaps[Se]:x.image;if(Z!==null)Ae=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,Be=Z.min.x,st=Z.min.y,ft=Z.isBox3?Z.min.z:0;else{let Zt=Math.pow(2,-W);Ae=Math.floor(Xt.width*Zt),Me=Math.floor(Xt.height*Zt),x.isDataArrayTexture?Ne=Xt.depth:x.isData3DTexture?Ne=Math.floor(Xt.depth*Zt):Ne=1,Be=0,st=0,ft=0}H!==null?(ze=H.x,At=H.y,jt=H.z):(ze=0,At=0,jt=0);let Dt=ge.convert(F.format),Cn=ge.convert(F.type),Ce;F.isData3DTexture?($.setTexture3D(F,0),Ce=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),Ce=I.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),Ce=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let ei=_.getParameter(I.UNPACK_ROW_LENGTH),St=_.getParameter(I.UNPACK_IMAGE_HEIGHT),fi=_.getParameter(I.UNPACK_SKIP_PIXELS),Hi=_.getParameter(I.UNPACK_SKIP_ROWS),kr=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,Xt.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Be),_.pixelStorei(I.UNPACK_SKIP_ROWS,st),_.pixelStorei(I.UNPACK_SKIP_IMAGES,ft);let co=x.isDataArrayTexture||x.isData3DTexture,Ot=F.isDataArrayTexture||F.isData3DTexture;if(x.isDepthTexture){let Zt=k.get(x),Ur=k.get(F),Lt=k.get(Zt.__renderTarget),Br=k.get(Ur.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,Lt.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let ho=0;ho<Ne;ho++)co&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,k.get(x).__webglTexture,W,ft+ho),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,k.get(F).__webglTexture,Se,jt+ho)),I.blitFramebuffer(Be,st,Ae,Me,ze,At,Ae,Me,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||x.isRenderTargetTexture||k.has(x)){let Zt=k.get(x),Ur=k.get(F);_.bindFramebuffer(I.READ_FRAMEBUFFER,Q),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,D);for(let Lt=0;Lt<Ne;Lt++)co?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.__webglTexture,W,ft+Lt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zt.__webglTexture,W),Ot?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ur.__webglTexture,Se,jt+Lt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ur.__webglTexture,Se),W!==0?I.blitFramebuffer(Be,st,Ae,Me,ze,At,Ae,Me,I.COLOR_BUFFER_BIT,I.NEAREST):Ot?I.copyTexSubImage3D(Ce,Se,ze,At,jt+Lt,Be,st,Ae,Me):I.copyTexSubImage2D(Ce,Se,ze,At,Be,st,Ae,Me);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ot?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(Ce,Se,ze,At,jt,Ae,Me,Ne,Dt,Cn,Xt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Ce,Se,ze,At,jt,Ae,Me,Ne,Dt,Xt.data):I.texSubImage3D(Ce,Se,ze,At,jt,Ae,Me,Ne,Dt,Cn,Xt):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Se,ze,At,Ae,Me,Dt,Cn,Xt.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Se,ze,At,Xt.width,Xt.height,Dt,Xt.data):I.texSubImage2D(I.TEXTURE_2D,Se,ze,At,Ae,Me,Dt,Cn,Xt);_.pixelStorei(I.UNPACK_ROW_LENGTH,ei),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St),_.pixelStorei(I.UNPACK_SKIP_PIXELS,fi),_.pixelStorei(I.UNPACK_SKIP_ROWS,Hi),_.pixelStorei(I.UNPACK_SKIP_IMAGES,kr),Se===0&&F.generateMipmaps&&I.generateMipmap(Ce),_.unbindTexture()},this.initRenderTarget=function(x){k.get(x).__webglFramebuffer===void 0&&$.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?$.setTextureCube(x,0):x.isData3DTexture?$.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?$.setTexture2DArray(x,0):$.setTexture2D(x,0),_.unbindTexture()},this.resetState=function(){X=0,V=0,ee=null,_.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var wA=["sectionEl"],TA=["bgCanvas"],EA=["axisLine"],CA=["track"],AA=["viewport"],PA=["node"],RA=(i,e)=>e.title.en;function IA(i,e){if(i&1&&(B(0,"span",32),J(1),z()),i&2){let t=Ke(2);Y(),Le(t.tab()==="pro"?t.i18n.t("parcours.badge_current"):t.i18n.t("parcours.badge_progress"))}}function DA(i,e){if(i&1&&(B(0,"span",37),J(1),z()),i&2){let t=e.$implicit;Y(),Le(t)}}function OA(i,e){if(i&1&&(B(0,"div",36),dn(1,DA,2,1,"span",37,Mc),z()),i&2){let t=Ke().$implicit;Y(),un(t.tags)}}function LA(i,e){if(i&1){let t=Wi();B(0,"div",26,5)(2,"div",27),at("click",function(){let r=An(t).$index,s=Ke();return Pn(s.scrollToNode(r))}),tt(3,"div",28),z(),B(4,"div",29)(5,"div",30)(6,"span",31),J(7),z(),cn(8,IA,2,1,"span",32),z(),B(9,"h3",33),J(10),z(),B(11,"p",34)(12,"mat-icon"),J(13),z(),J(14),z(),B(15,"p",35),J(16),z(),cn(17,OA,3,0,"div",36),z()()}if(i&2){let t=e.$implicit,n=e.$index,r=Ke();Pt("timeline-node--active",r.activeIdx()===n)("timeline-node--academic",r.tab()==="academic"),Y(7),Le(t.year[r.i18n.currentLang()]),Y(),hn(t.current?8:-1),Y(2),Le(t.title[r.i18n.currentLang()]),Y(3),Le(r.tab()==="pro"?"business":"location_city"),Y(),Rt(" ",t.place[r.i18n.currentLang()]," "),Y(2),Le(t.description[r.i18n.currentLang()]),Y(),hn(t.tags?17:-1)}}Xr.registerPlugin(Ac);var NA=[{year:{en:"2024 \u2013 Present",fr:"2024 \u2013 Pr\xE9sent"},title:{en:"Freelance Full-Stack Developer",fr:"D\xE9veloppeur Full-Stack Freelance"},place:{en:"Independent \u2014 Lom\xE9, Togo",fr:"Ind\xE9pendant \u2014 Lom\xE9, Togo"},description:{en:"Designing modern web applications for local and international clients. Stack: Angular, Spring Boot, PostgreSQL.",fr:"Conception d'applications web modernes pour clients locaux et internationaux. Stack : Angular, Spring Boot, PostgreSQL."},tags:["Angular","Spring Boot","PostgreSQL"],current:!0},{year:{en:"2023 \u2013 2024",fr:"2023 \u2013 2024"},title:{en:"Front-End Developer",fr:"D\xE9veloppeur Front-End"},place:{en:"FinTech Startup \u2014 Lom\xE9, Togo",fr:"Startup FinTech \u2014 Lom\xE9, Togo"},description:{en:"Developed the user interface for a micro-finance application. Implemented the design system and integrated REST APIs.",fr:"D\xE9veloppement de l'interface d'une appli de micro-finance. Mise en place du design system et int\xE9gration des APIs REST."},tags:["Angular","RxJS","Design System"]},{year:{en:"2022 \u2013 2023",fr:"2022 \u2013 2023"},title:{en:"Junior Web Developer",fr:"D\xE9veloppeur Web Junior"},place:{en:"Digital Agency \u2014 Lom\xE9, Togo",fr:"Agence Num\xE9rique \u2014 Lom\xE9, Togo"},description:{en:"Created showcase websites and web apps for SMEs using React, Node.js, and MySQL.",fr:"Cr\xE9ation de sites vitrines et applications web pour des PME. Utilisation de React, Node.js et MySQL."},tags:["React","Node.js","MySQL"]}],FA=[{year:{en:"2024 \u2013 Present",fr:"2024 \u2013 Pr\xE9sent"},title:{en:"Master's in Computer Systems & Software",fr:"Master Syst\xE8mes Informatiques & Logiciels"},place:{en:"University of Lom\xE9 \u2014 Togo",fr:"Universit\xE9 de Lom\xE9 \u2014 Togo"},description:{en:"Specializing in software architecture, distributed systems, and applied artificial intelligence.",fr:"Sp\xE9cialisation en architecture logicielle, syst\xE8mes distribu\xE9s et intelligence artificielle appliqu\xE9e."},tags:["Architecture","IA","Cloud"],current:!0},{year:{en:"2020 \u2013 2023",fr:"2020 \u2013 2023"},title:{en:"Bachelor in Computer Science",fr:"Licence en Informatique"},place:{en:"University of Lom\xE9 \u2014 Togo",fr:"Universit\xE9 de Lom\xE9 \u2014 Togo"},description:{en:"Fundamentals of algorithms, data structures, web development, and relational databases.",fr:"Fondamentaux en algorithmique, structures de donn\xE9es, d\xE9veloppement web et bases de donn\xE9es relationnelles."},tags:["Algorithms","Databases","Web"]},{year:{en:"2019 \u2013 2020",fr:"2019 \u2013 2020"},title:{en:"High School Diploma (Science)",fr:"Baccalaur\xE9at Scientifique (S\xE9rie C)"},place:{en:"Lom\xE9 High School \u2014 Togo",fr:"Lyc\xE9e de Lom\xE9 \u2014 Togo"},description:{en:"Graduated with honors, majoring in Mathematics and Physics.",fr:"Obtention du baccalaur\xE9at avec mention, option math\xE9matiques et sciences physiques."},tags:["Mathematics","Science"]}];var Hu=class i{get nodeWidth(){return typeof window>"u"?340:window.innerWidth<600?280:340}sectionEl;bgCanvas;axisLine;track;viewport;nodeRefs;tab=Nt("pro");isOpen=Nt(!1);scrollLeft=Nt(0);i18n=re(Ln);toggleOpen(){this.isOpen.update(e=>!e),setTimeout(()=>Ac.refresh(),300)}items=In(()=>this.tab()==="pro"?NA:FA);atStart=In(()=>this.scrollLeft()<=0);atEnd=In(()=>{let e=(this.items().length-1)*this.nodeWidth;return this.scrollLeft()>=e-10});activeIdx=In(()=>Math.round(this.scrollLeft()/this.nodeWidth));threeRenderer;threeAnimId;threeGeo;threeMat;st;wheelCleanup;constructor(){ws(()=>{this.tab(),this.viewport?.nativeElement&&(this.viewport.nativeElement.scrollLeft=0),this.scrollLeft.set(0),setTimeout(()=>{this.resetAxis(),this.runAnime()},80)})}ngAfterViewInit(){setTimeout(()=>{this.initThree(),this.initGsap(),this.runAnime(),this.initWheel()},150)}initThree(){let e=this.bgCanvas.nativeElement,t=e.parentElement.clientWidth,n=e.parentElement.clientHeight;e.width=t,e.height=n;let r=new va({canvas:e,alpha:!0,antialias:!1});r.setSize(t,n),this.threeRenderer=r;let s=new io,o=new xn(60,t/n,1,1e3);o.position.z=300;let a=120,l=new Float32Array(a*3),c=new Float32Array(a*2);for(let g=0;g<a;g++)l[g*3]=(Math.random()-.5)*t*2,l[g*3+1]=(Math.random()-.5)*n*2,l[g*3+2]=(Math.random()-.5)*200,c[g*2]=(Math.random()-.5)*.3,c[g*2+1]=(Math.random()-.5)*.3;let h=new hi;h.setAttribute("position",new Wn(l,3));let u=new ca({color:241657,size:2,transparent:!0,opacity:.35});this.threeGeo=h,this.threeMat=u;let d=new Vl(h,u);s.add(d);let f=()=>{this.threeAnimId=requestAnimationFrame(f);let g=h.attributes.position.array;for(let y=0;y<a;y++)g[y*3]+=c[y*2],g[y*3+1]+=c[y*2+1],Math.abs(g[y*3])>t&&(g[y*3]*=-.9),Math.abs(g[y*3+1])>n&&(g[y*3+1]*=-.9);h.attributes.position.needsUpdate=!0,r.render(s,o)};f()}initGsap(){this.st=Ac.create({trigger:this.sectionEl.nativeElement,start:"top 75%",once:!0,onEnter:()=>this.resetAxis()})}resetAxis(){let e=this.axisLine?.nativeElement;e&&Xr.fromTo(e,{scaleX:0,transformOrigin:"left center"},{scaleX:1,duration:1.2,ease:"power3.inOut"})}runAnime(){let e=this.nodeRefs?.toArray().map(t=>t.nativeElement);e?.length&&(e.forEach(t=>{t.style.opacity="0",t.style.transform="translateY(20px)"}),wp(e,{opacity:[0,1],translateY:[20,0],delay:Ep(120,{start:400}),duration:700,ease:"outExpo"}))}initWheel(){let e=this.viewport.nativeElement,t=n=>{Math.abs(n.deltaX)>Math.abs(n.deltaY)||(n.preventDefault(),this.pan(n.deltaY>0?1:-1))};e.addEventListener("wheel",t,{passive:!1}),this.wheelCleanup=()=>e.removeEventListener("wheel",t)}navigate(e){this.pan(e)}pan(e){if(!this.viewport?.nativeElement)return;this.viewport.nativeElement.scrollBy({left:e*this.nodeWidth,behavior:"smooth"})}switchTab(e){this.tab.set(e)}scrollToNode(e){if(!this.viewport?.nativeElement)return;let t=e*this.nodeWidth;this.viewport.nativeElement.scrollTo({left:t,behavior:"smooth"})}onViewportScroll(e){let t=e.target;this.scrollLeft.set(t.scrollLeft)}ngOnDestroy(){this.st?.kill(),this.wheelCleanup?.(),cancelAnimationFrame(this.threeAnimId),this.threeGeo?.dispose(),this.threeMat?.dispose(),this.threeRenderer&&(this.threeRenderer.dispose(),this.threeRenderer.forceContextLoss())}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-parcours"]],viewQuery:function(t,n){if(t&1&&ti(wA,5)(TA,5)(EA,5)(CA,5)(AA,5)(PA,5),t&2){let r;Tt(r=Et())&&(n.sectionEl=r.first),Tt(r=Et())&&(n.bgCanvas=r.first),Tt(r=Et())&&(n.axisLine=r.first),Tt(r=Et())&&(n.track=r.first),Tt(r=Et())&&(n.viewport=r.first),Tt(r=Et())&&(n.nodeRefs=r)}},decls:40,vars:20,consts:[["sectionEl",""],["bgCanvas",""],["viewport",""],["track",""],["axisLine",""],["node",""],["id","parcours",1,"section","parcours"],[1,"parcours__bg"],[1,"parcours__content"],["appReveal","bottom",1,"section-eyebrow"],["appReveal","bottom",1,"section-header-row",3,"revealDelay"],[1,"section-title"],["mat-icon-button","",3,"click"],[1,"collapsible-content"],[1,"collapsible-content__inner"],[1,"parcours__tabs"],["mat-button","",1,"parcours__tab",3,"click"],["mat-button","",1,"parcours__tab","parcours__tab--academic",3,"click"],["appReveal","bottom",1,"timeline-container",3,"revealDelay"],["mat-icon-button","",1,"nav-btn","nav-btn--prev",3,"click","disabled"],[1,"timeline-viewport",3,"scroll"],[1,"timeline-track"],[1,"timeline-axis"],[1,"timeline-axis-line"],[1,"timeline-node",3,"timeline-node--active","timeline-node--academic"],["mat-icon-button","",1,"nav-btn","nav-btn--next",3,"click","disabled"],[1,"timeline-node"],[1,"timeline-dot-wrapper",3,"click"],[1,"timeline-dot"],[1,"timeline-card"],[1,"timeline-card-header"],[1,"timeline-year"],[1,"timeline-badge"],[1,"timeline-title"],[1,"timeline-place"],[1,"timeline-desc"],[1,"timeline-tags"],[1,"timeline-tag"]],template:function(t,n){t&1&&(B(0,"section",6,0),tt(2,"canvas",7,1),B(4,"div",8)(5,"p",9),J(6),z(),B(7,"div",10)(8,"h2",11),J(9),z(),B(10,"button",12),at("click",function(){return n.toggleOpen()}),B(11,"mat-icon"),J(12),z()()(),B(13,"div",13)(14,"div",14)(15,"div",15)(16,"button",16),at("click",function(){return n.switchTab("pro")}),B(17,"mat-icon"),J(18,"work_outline"),z(),J(19),z(),B(20,"button",17),at("click",function(){return n.switchTab("academic")}),B(21,"mat-icon"),J(22,"school"),z(),J(23),z()(),B(24,"div",18)(25,"button",19),at("click",function(){return n.navigate(-1)}),B(26,"mat-icon"),J(27,"chevron_left"),z()(),B(28,"div",20,2),at("scroll",function(s){return n.onViewportScroll(s)}),B(30,"div",21,3)(32,"div",22),tt(33,"div",23,4),z(),dn(35,LA,18,11,"div",24,RA),z()(),B(37,"button",25),at("click",function(){return n.navigate(1)}),B(38,"mat-icon"),J(39,"chevron_right"),z()()()()()()()),t&2&&(Y(6),Le(n.i18n.t("parcours.title")),Y(),gt("revealDelay",80),Y(2),Le(n.i18n.t("parcours.title")),Y(),Gt("aria-label",n.i18n.t("parcours.aria_toggle")),Y(2),Le(n.isOpen()?"remove":"add"),Y(),Pt("is-open",n.isOpen()),Y(3),Pt("parcours__tab--active",n.tab()==="pro"),Y(3),Rt(" ",n.i18n.t("parcours.tab.pro")," "),Y(),Pt("parcours__tab--active",n.tab()==="academic"),Y(3),Rt(" ",n.i18n.t("parcours.tab.academic")," "),Y(),gt("revealDelay",200),Y(),gt("disabled",n.atStart()),Gt("aria-label",n.i18n.t("parcours.aria_prev")),Y(8),Pt("timeline-axis-line--academic",n.tab()==="academic"),Y(2),un(n.items()),Y(2),gt("disabled",n.atEnd()),Gt("aria-label",n.i18n.t("parcours.aria_next")))},dependencies:[mi,pi,Wr,On,Dn,Yn],styles:['@charset "UTF-8";.parcours[_ngcontent-%COMP%]{position:relative;overflow:hidden}.parcours__bg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none}.parcours__content[_ngcontent-%COMP%]{position:relative;z-index:1}.parcours__tabs[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;gap:1rem;margin:3rem 0}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab[_ngcontent-%COMP%]{color:var(--text-muted);border:1px solid var(--border-default);border-radius:999px;padding:.5rem 1.5rem;font-size:.95rem;font-weight:500;transition:all .3s ease;background:var(--bg-900)}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.5rem}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab[_ngcontent-%COMP%]:hover{border-color:var(--primary-400);color:var(--primary-300)}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab--active[_ngcontent-%COMP%]{color:#000106!important;background:var(--primary-400);border-color:var(--primary-400);box-shadow:0 0 12px #03aff966}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab--active.parcours__tab--academic[_ngcontent-%COMP%]{background:#fbbf24;border-color:#fbbf24;box-shadow:0 0 12px #fbbf2466}.timeline-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;width:100%;max-width:1200px;margin:0 auto}.nav-btn[_ngcontent-%COMP%]{flex-shrink:0;color:var(--text-primary)!important;background:var(--bg-800)!important;border:1px solid var(--border-default)!important;transition:all .2s}.nav-btn[_ngcontent-%COMP%]:not([disabled]):hover{border-color:var(--primary-400)!important;color:var(--primary-400)!important;box-shadow:0 0 12px #03aff94d!important}.timeline-viewport[_ngcontent-%COMP%]{flex:1;position:relative;overflow-x:auto;padding:3rem 0 1rem;mask-image:linear-gradient(to right,transparent,black 5%,black 95%,transparent);-webkit-mask-image:linear-gradient(to right,transparent,black 5%,black 95%,transparent);scroll-behavior:smooth;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}.timeline-viewport[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.timeline-axis[_ngcontent-%COMP%]{position:absolute;top:.9rem;left:0;width:100%;height:2px;z-index:1}.timeline-axis-line[_ngcontent-%COMP%]{width:100%;height:100%;background:linear-gradient(90deg,transparent,var(--primary-400),transparent);opacity:.6;transform-origin:left center}.timeline-axis-line--academic[_ngcontent-%COMP%]{background:linear-gradient(90deg,transparent,#fbbf24,transparent)}.timeline-track[_ngcontent-%COMP%]{display:flex;position:relative;z-index:2;width:max-content;will-change:transform}.timeline-node[_ngcontent-%COMP%]{width:340px;box-sizing:border-box;flex-shrink:0;padding:0 1rem;display:flex;flex-direction:column;position:relative;opacity:0;transform:translateY(20px);scroll-snap-align:center}.timeline-dot-wrapper[_ngcontent-%COMP%]{height:2rem;display:flex;align-items:center;justify-content:center;margin-bottom:2rem;cursor:pointer;position:relative;z-index:3}.timeline-dot[_ngcontent-%COMP%]{width:14px;height:14px;border-radius:50%;background:var(--bg-900);border:2px solid var(--border-default);transition:all .3s cubic-bezier(.4,0,.2,1)}.timeline-node[_ngcontent-%COMP%]:hover   .timeline-dot[_ngcontent-%COMP%]{border-color:var(--primary-400);transform:scale(1.3)}.timeline-node--academic[_ngcontent-%COMP%]:hover   .timeline-dot[_ngcontent-%COMP%]{border-color:#fbbf24}.timeline-node--active[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%]{border-color:var(--primary-400);background:var(--primary-400);transform:scale(1.5);box-shadow:0 0 10px #03aff999}.timeline-node--active.timeline-node--academic[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%]{border-color:#fbbf24;background:#fbbf24;box-shadow:0 0 10px #fbbf2499}.timeline-card[_ngcontent-%COMP%]{background:var(--bg-800);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:1.5rem;box-shadow:var(--shadow-card);transition:border-color .3s;height:100%}.timeline-node[_ngcontent-%COMP%]:hover   .timeline-card[_ngcontent-%COMP%]{border-color:#03aff94d}.timeline-node--academic[_ngcontent-%COMP%]:hover   .timeline-card[_ngcontent-%COMP%]{border-color:#fbbf244d}.timeline-node--active[_ngcontent-%COMP%]   .timeline-card[_ngcontent-%COMP%]{border-color:var(--primary-400)}.timeline-node--active.timeline-node--academic[_ngcontent-%COMP%]   .timeline-card[_ngcontent-%COMP%]{border-color:#fbbf24}.timeline-card-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem}.timeline-year[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace;font-size:.85rem;font-weight:600;color:var(--text-secondary)}.timeline-node--active[_ngcontent-%COMP%]   .timeline-year[_ngcontent-%COMP%]{color:var(--primary-300)}.timeline-node--active.timeline-node--academic[_ngcontent-%COMP%]   .timeline-year[_ngcontent-%COMP%]{color:#fbbf24}.timeline-badge[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;text-transform:uppercase;padding:.2rem .6rem;border-radius:999px;background:#03aff926;color:var(--primary-300);border:1px solid rgba(3,175,249,.3)}.timeline-node--academic[_ngcontent-%COMP%]   .timeline-badge[_ngcontent-%COMP%]{background:#fbbf241f;color:#fbbf24;border-color:#fbbf244d}.timeline-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:700;color:var(--text-primary);margin:0 0 .5rem;line-height:1.4}.timeline-place[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;font-size:.85rem;color:var(--text-muted);margin:0 0 1rem}.timeline-place[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem}.timeline-desc[_ngcontent-%COMP%]{font-size:.9rem;color:var(--text-secondary);line-height:1.6;margin:0 0 1.25rem}.timeline-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.timeline-tag[_ngcontent-%COMP%]{font-size:.75rem;font-weight:500;padding:.2rem .6rem;border-radius:999px;background:var(--bg-700);color:var(--text-secondary);border:1px solid var(--border-default)}.timeline-node--active[_ngcontent-%COMP%]   .timeline-tag[_ngcontent-%COMP%]{background:#03aff91a;color:var(--primary-300);border-color:#03aff933}.timeline-node--active.timeline-node--academic[_ngcontent-%COMP%]   .timeline-tag[_ngcontent-%COMP%]{background:#fbbf241a;color:#fbbf24;border-color:#fbbf2433}@media(max-width:768px){.timeline-container[_ngcontent-%COMP%]{padding:0 .5rem;gap:.25rem}.nav-btn[_ngcontent-%COMP%]{transform:scale(.85)}}@media(max-width:600px){.timeline-node[_ngcontent-%COMP%]{width:280px}.timeline-container[_ngcontent-%COMP%]{padding:0;gap:0}.nav-btn[_ngcontent-%COMP%]{display:none}}']})};var kA=["pyramidCanvas"];function UA(i,e){if(i&1&&(B(0,"mat-chip",18),J(1),z()),i&2){let t=e.$implicit;Y(),Le(t)}}function BA(i,e){if(i&1&&(B(0,"a",20)(1,"mat-icon"),J(2,"open_in_new"),z(),J(3),z()),i&2){let t=Ke(),n=Ke();gt("href",t.demoUrl,fr),Y(3),Rt(" ",n.i18n.t("projects.btn_demo")," ")}}function VA(i,e){if(i&1&&(B(0,"a",20)(1,"mat-icon"),J(2,"code"),z(),J(3),z()),i&2){let t=Ke(),n=Ke();gt("href",t.codeUrl,fr),Y(3),Rt(" ",n.i18n.t("projects.btn_code")," ")}}function zA(i,e){if(i&1){let t=Wi();B(0,"div",6)(1,"div",10)(2,"h3",11),J(3),z(),B(4,"div",12)(5,"button",13),at("click",function(){An(t);let r=Ke();return Pn(r.prevProject())}),B(6,"mat-icon"),J(7,"chevron_left"),z()(),B(8,"span",14),J(9),z(),B(10,"button",13),at("click",function(){An(t);let r=Ke();return Pn(r.nextProject())}),B(11,"mat-icon"),J(12,"chevron_right"),z()()()(),B(13,"p",15),J(14),z(),B(15,"div",16)(16,"p"),J(17),z()(),B(18,"div",17)(19,"mat-chip-set"),dn(20,UA,2,1,"mat-chip",18,Sg),z()(),B(22,"div",19),cn(23,BA,4,2,"a",20),cn(24,VA,4,2,"a",20),B(25,"a",21),at("click",function(r){let s=An(t),o=Ke();return r.preventDefault(),Pn(o.transitionService.navigate("/projets/"+s.slug))}),J(26),B(27,"mat-icon",22),J(28,"arrow_forward"),z()()()()}if(i&2){let t=e,n=Ke();Y(3),Le(t.title),Y(2),Gt("aria-label",n.i18n.t("projects.aria_prev")),Y(4),po("",n.activeProjectIndex()+1," / ",n.projects.length),Y(),Gt("aria-label",n.i18n.t("projects.aria_next")),Y(4),po("",t.role[n.i18n.currentLang()]," \u2022 ",t.duration[n.i18n.currentLang()]),Y(3),Rt("",t.summary[n.i18n.currentLang()],"..."),Y(2),Gt("aria-label",n.i18n.t("common.tech_used")),Y(),un(t.tags),Y(3),hn(t.demoUrl?23:-1),Y(),hn(t.codeUrl?24:-1),Y(2),Rt(" ",n.i18n.t("projects.btn_learn_more")," ")}}function HA(i,e){if(i&1){let t=Wi();B(0,"div",9)(1,"button",23),at("click",function(){An(t);let r=Ke();return Pn(r.prevPage())}),B(2,"mat-icon"),J(3,"chevron_left"),z()(),B(4,"span",24),J(5),z(),B(6,"button",13),at("click",function(){An(t);let r=Ke();return Pn(r.nextPage())}),B(7,"mat-icon"),J(8,"chevron_right"),z()()()}if(i&2){let t=Ke();Y(),gt("disabled",t.currentPage()===0),Y(4),po("",t.currentPage()+1," / ",t.totalPages())}}var Gu=class i{canvasRef;projects=v_;activeProject=Nt(this.projects[0]);currentPage=Nt(0);projectsPerPage=3;transitionService=re(Ic);i18n=re(Ln);totalPages=In(()=>Math.ceil(this.projects.length/this.projectsPerPage));currentPyramidProjects=In(()=>{let e=this.currentPage()*this.projectsPerPage;return this.projects.slice(e,e+this.projectsPerPage)});activeProjectIndex=In(()=>this.projects.findIndex(e=>e.slug===this.activeProject().slug));scene;camera;renderer;pyramidGroup=new ir;cubeMeshes=[];animId;raycaster=new Zl;mouse=new vt;frame=0;sceneObserver;onResizeBound=this.onResize.bind(this);onClickBound=this.onClick.bind(this);onMouseMoveBound=this.onMouseMove.bind(this);toonGradient;defaultColors=[{top:5227511,front:166097,right:87963},{top:8508666,front:240116,right:161725},{top:11789820,front:2733814,right:166097}];activeColors={top:16769154,front:16763432,right:16361509};ngAfterViewInit(){this.pyramidGroup=new ir;let e=this.canvasRef.nativeElement;if(typeof IntersectionObserver>"u"){this.initScene();return}this.sceneObserver=new IntersectionObserver(t=>{t[0]?.isIntersecting&&(this.sceneObserver?.disconnect(),this.sceneObserver=void 0,this.initScene())},{rootMargin:"200px"}),this.sceneObserver.observe(e)}makeToonGradient(){let e=document.createElement("canvas");e.width=4,e.height=1;let t=e.getContext("2d");["#404040","#808080","#c0c0c0","#ffffff"].forEach((s,o)=>{t.fillStyle=s,t.fillRect(o,0,1,1)});let r=new ha(e);return r.minFilter=en,r.magFilter=en,r.generateMipmaps=!1,r}initScene(){let e=this.canvasRef.nativeElement,t=e.clientWidth||460,n=e.clientHeight||380,r=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=768;this.scene=new io,this.scene.add(this.pyramidGroup),this.toonGradient=this.makeToonGradient(),this.camera=new xn(40,t/n,.1,100),this.camera.position.set(5,6,8),this.camera.lookAt(0,1.2,0),this.renderer=new va({canvas:e,antialias:!r,alpha:!0,powerPreference:"low-power"}),this.renderer.setSize(t,n),this.renderer.setPixelRatio(r?1:Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!r,this.scene.add(new jl(16777215,.9));let s=new ua(16777215,1.4);s.position.set(4,8,6),s.castShadow=!r,this.scene.add(s);let o=new ua(11197951,.4);o.position.set(-5,2,-3),this.scene.add(o),this.buildPyramid(),e.addEventListener("click",this.onClickBound),e.addEventListener("mousemove",this.onMouseMoveBound),window.addEventListener("resize",this.onResizeBound),this.loop()}makeNumberTexture(e){let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");return n?(n.clearRect(0,0,128,128),n.fillStyle="rgba(255,255,255,0.92)",n.font="bold 72px Inter, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(e).padStart(2,"0"),64,68),new ha(t)):null}makeMaterials(e,t){let n=(r,s)=>new Wl(ce({color:r,gradientMap:this.toonGradient},s?{map:s}:{}));return[n(e.right),n(e.right),n(e.top),n(2080),t?n(e.front,t):n(e.front),n(e.right)]}buildPyramid(){for(;this.pyramidGroup.children.length;)this.pyramidGroup.remove(this.pyramidGroup.children[0]);this.cubeMeshes=[];let e=1.6,t=this.currentPyramidProjects();[{x:0,y:e,pidx:0},{x:-e/2,y:0,pidx:1},{x:e/2,y:0,pidx:2}].forEach(({x:r,y:s,pidx:o})=>{if(o>=t.length)return;let a=t[o],l=this.makeNumberTexture(o+1),c=this.defaultColors[o],h=new Nr(e,e,e),u=this.makeMaterials(c,l),d=new Xn(h,u),f=s+e/2;d.position.set(r,f,0),d.userData={project:a,pidx:o,posY:f},d.castShadow=!0,d.receiveShadow=!0;let g=new so({color:1710638,side:En}),y=new Xn(new Nr(e*1.1,e*1.1,e*1.1),g);d.add(y),this.pyramidGroup.add(d),this.cubeMeshes.push(d)})}loop(){this.animId=requestAnimationFrame(()=>this.loop()),this.frame++;let e=this.activeProject().slug,t=new pt;this.cubeMeshes.forEach(n=>{let r=n.userData.pidx,s=n.userData.project?.slug===e,o=s?this.activeColors:this.defaultColors[r],a=n.material,l=[o.right,o.right,o.top,2080,o.front,o.right];a.forEach((h,u)=>h.color.lerp(t.setHex(l[u]),.1));let c=s?1.05:1;n.scale.setScalar(n.scale.x+(c-n.scale.x)*.12)}),this.renderer.render(this.scene,this.camera)}ndc(e){let t=this.canvasRef.nativeElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1}onClick(e){this.ndc(e),this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.raycaster.intersectObjects(this.cubeMeshes,!0);if(t.length){let n=t[0].object;for(;n.parent&&!n.userData.project;)n=n.parent;let r=n.userData.project;r&&this.activeProject.set(r)}}onMouseMove(e){this.ndc(e),this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.raycaster.intersectObjects(this.cubeMeshes,!0);this.canvasRef.nativeElement.style.cursor=t.length?"pointer":"default"}onResize(){let e=this.canvasRef.nativeElement;this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight)}selectProject(e){this.activeProject.set(e)}nextProject(){this.gotoProjectIndex((this.activeProjectIndex()+1)%this.projects.length)}prevProject(){this.gotoProjectIndex((this.activeProjectIndex()-1+this.projects.length)%this.projects.length)}gotoProjectIndex(e){let t=Math.floor(e/this.projectsPerPage);t!==this.currentPage()&&(this.currentPage.set(t),this.buildPyramid()),this.activeProject.set(this.projects[e])}nextPage(){this.currentPage.set((this.currentPage()+1)%this.totalPages()),this.buildPyramid(),this.activeProject.set(this.currentPyramidProjects()[0])}prevPage(){this.currentPage.set((this.currentPage()-1+this.totalPages())%this.totalPages()),this.buildPyramid(),this.activeProject.set(this.currentPyramidProjects()[0])}ngOnDestroy(){this.sceneObserver?.disconnect(),cancelAnimationFrame(this.animId),this.cubeMeshes.forEach(t=>{t.geometry.dispose(),t.material.forEach(n=>n.dispose())}),this.toonGradient?.dispose(),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss());let e=this.canvasRef?.nativeElement;e&&(e.removeEventListener("click",this.onClickBound),e.removeEventListener("mousemove",this.onMouseMoveBound)),window.removeEventListener("resize",this.onResizeBound)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-projects"]],viewQuery:function(t,n){if(t&1&&ti(kA,5),t&2){let r;Tt(r=Et())&&(n.canvasRef=r.first)}},decls:12,vars:4,consts:[["pyramidCanvas",""],["id","projets",1,"section","projects"],["appReveal","bottom",1,"section-eyebrow"],["appReveal","bottom",1,"section-title",3,"revealDelay"],[1,"projects__layout"],["appReveal","left",1,"projects__details"],[1,"project-details"],["appReveal","right",1,"projects__pyramid-container"],[1,"pyramid-canvas"],[1,"pyramid-pagination"],[1,"project-details__header"],[1,"project-details__title"],[1,"project-details__nav"],["mat-icon-button","",3,"click"],[1,"project-details__nav-count"],[1,"project-details__meta"],[1,"project-details__desc"],[1,"project-details__tags"],["disabled",""],[1,"project-details__actions"],["mat-button","",3,"href"],["mat-button","","color","primary",3,"click"],["iconPositionEnd",""],["mat-icon-button","",3,"click","disabled"],[1,"pyramid-pagination__text"]],template:function(t,n){if(t&1&&(B(0,"section",1)(1,"p",2),J(2,"Portfolio"),z(),B(3,"h2",3),J(4),z(),B(5,"div",4)(6,"div",5),cn(7,zA,29,12,"div",6),z(),B(8,"div",7),tt(9,"canvas",8,0),cn(11,HA,9,3,"div",9),z()()()),t&2){let r;Y(3),gt("revealDelay",80),Y(),Le(n.i18n.t("projects.title")),Y(3),hn((r=n.activeProject())?7:-1,r),Y(4),hn(n.totalPages()>1?11:-1)}},dependencies:[mi,pi,Wr,On,Dn,__,m_,g_,Yn],styles:['@charset "UTF-8";.projects[_ngcontent-%COMP%]{background-color:var(--bg-900)}.projects__layout[_ngcontent-%COMP%]{margin-top:2.5rem;display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center}.projects__details[_ngcontent-%COMP%]{display:flex;flex-direction:column}.projects__pyramid-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.pyramid-canvas[_ngcontent-%COMP%]{width:100%;height:400px;border-radius:var(--radius-md);display:block}.project-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-right:1rem}.project-details__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.75rem 1.5rem;margin-bottom:.5rem}.project-details__title[_ngcontent-%COMP%]{color:var(--text-primary);font-size:2rem;font-weight:700;margin:0;letter-spacing:-.02em}.project-details__nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;flex-shrink:0}.project-details__nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--primary-400)!important}.project-details__nav-count[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-secondary);font-family:Roboto Mono,ui-monospace,monospace;min-width:3.5rem;text-align:center}.project-details__meta[_ngcontent-%COMP%]{color:var(--primary-400);font-size:.95rem;font-weight:500;margin-bottom:1.5rem;font-family:Roboto Mono,ui-monospace,monospace}.project-details__desc[_ngcontent-%COMP%]{margin-bottom:1.5rem}.project-details__desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-secondary);line-height:1.75;font-size:1rem}.project-details__tags[_ngcontent-%COMP%]{margin-bottom:2rem}mat-chip[_ngcontent-%COMP%]{background:#03aff914!important;color:var(--primary-300)!important;border:1px solid rgba(3,175,249,.2)!important;font-size:.75rem!important;font-weight:500!important;font-family:Roboto Mono,ui-monospace,monospace!important}.project-details__actions[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}.project-details__actions[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]{color:var(--text-muted)!important;font-size:.9rem!important;font-weight:500!important;transition:color .2s!important}.project-details__actions[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem}.project-details__actions[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:hover{color:var(--primary-400)!important}.project-details__actions[_ngcontent-%COMP%]   a[color=primary][_ngcontent-%COMP%]{color:var(--primary-400)!important;font-weight:600!important}.project-details__actions[_ngcontent-%COMP%]   a[color=primary][_ngcontent-%COMP%]:hover{color:var(--primary-200)!important;text-shadow:0 0 8px rgba(3,175,249,.35)}.pyramid-pagination[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin-top:.5rem}.pyramid-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--primary-400)!important}.pyramid-pagination__text[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-secondary);font-family:Roboto Mono,ui-monospace,monospace}@media(max-width:992px){.projects__layout[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:2rem;text-align:center}.project-details__header[_ngcontent-%COMP%], .project-details__actions[_ngcontent-%COMP%], .pyramid-pagination[_ngcontent-%COMP%]{justify-content:center}.projects__pyramid-container[_ngcontent-%COMP%]{order:-1}.pyramid-canvas[_ngcontent-%COMP%]{height:320px}}@media(max-width:600px){.project-details__actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;width:100%}.project-details__actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%;text-align:center;justify-content:center}}']})};var cc=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Jt({type:i});static \u0275inj=Kt({imports:[Yg,Rc,Mn]})}return i})();var WA=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return i})(),XA={passive:!0},ib=(()=>{class i{_platform=re(Vn);_ngZone=re(an);_renderer=re(Ri).createRenderer(null,null);_styleLoader=re(Cs);_monitoredElements=new Map;constructor(){}monitor(t){if(!this._platform.isBrowser)return lg;this._styleLoader.load(WA);let n=Ca(t),r=this._monitoredElements.get(n);if(r)return r.subject;let s=new $t,o="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(o)?(n.classList.add(o),this._ngZone.run(()=>s.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(o)&&(n.classList.remove(o),this._ngZone.run(()=>s.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",a,XA)));return this._monitoredElements.set(n,{subject:s,unlisten:l}),s}stopMonitoring(t){let n=Ca(t),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((t,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=bn({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var rb=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Jt({type:i});static \u0275inj=Kt({})}return i})();var sb=new on("MAT_INPUT_VALUE_ACCESSOR");var qA=["button","checkbox","file","hidden","image","radio","range","reset","submit"],YA=new on("MAT_INPUT_CONFIG"),ob=(()=>{class i{_elementRef=re(ln);_platform=re(Vn);ngControl=re(n_,{optional:!0,self:!0});_autofillMonitor=re(ib);_ngZone=re(an);_formField=re(p_,{optional:!0});_renderer=re(Gi);_uid=re(mo).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=re(YA,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new $t;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=As(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(mr.required)??!1}set required(t){this._required=As(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&hf().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=As(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>hf().has(t));constructor(){let t=re(s_,{optional:!0}),n=re(Pc,{optional:!0}),r=re(d_),s=re(sb,{optional:!0,self:!0}),o=this._elementRef.nativeElement,a=o.nodeName.toLowerCase();s?Mg(s.value)?this._signalBasedValueAccessor=s:this._inputValueAccessor=s:this._inputValueAccessor=o,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(o,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new u_(r,this.ngControl,n,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=o.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ws(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=t,t?n.setAttribute("placeholder",t):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){qA.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,n=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let n=this._elementRef.nativeElement;t.length?n.setAttribute("aria-describedby",t.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let n=t.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||i)};static \u0275dir=qn({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&at("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(Sc("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),Gt("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),Pt("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ii]},exportAs:["matInput"],features:[Ta([{provide:f_,useExisting:i}]),_c]})}return i})(),ab=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Jt({type:i});static \u0275inj=Kt({imports:[cc,cc,rb,Mn]})}return i})();var ZA=["submitButton"],$A=(i,e)=>e.labelKey;function KA(i,e){if(i&1&&(B(0,"a",23),J(1),z()),i&2){let t=Ke().$implicit;gt("href",t.href,fr),Y(),Le(t.value)}}function JA(i,e){if(i&1&&(B(0,"span"),J(1),z()),i&2){let t=Ke().$implicit;Y(),Le(t.value)}}function QA(i,e){if(i&1&&(B(0,"li")(1,"mat-icon"),J(2),z(),B(3,"div")(4,"span",22),J(5),z(),cn(6,KA,2,2,"a",23)(7,JA,2,1,"span"),z()()),i&2){let t=e.$implicit,n=Ke();Y(2),Le(t.icon),Y(3),Le(n.i18n.t(t.labelKey)),Y(),hn(t.href?6:7)}}function eP(i,e){if(i&1&&(B(0,"mat-error"),J(1),z()),i&2){let t=Ke();Y(),Le(t.i18n.t("contact.error.name"))}}function tP(i,e){if(i&1&&(B(0,"mat-error"),J(1),z()),i&2){let t=Ke();Y(),Le(t.i18n.t("contact.error.email"))}}function nP(i,e){if(i&1&&(B(0,"mat-error"),J(1),z()),i&2){let t=Ke();Y(),Le(t.i18n.t("contact.error.message"))}}function iP(i,e){if(i&1&&J(0),i&2){let t=Ke();Rt(" ",t.i18n.t("contact.btn_sending")," ")}}function rP(i,e){if(i&1&&(B(0,"span",20),J(1),B(2,"mat-icon"),J(3,"send"),z()()),i&2){let t=Ke();Y(),Rt(" ",t.i18n.t("contact.btn_send")," ")}}function sP(i,e){if(i&1&&(B(0,"p",21)(1,"mat-icon"),J(2,"check_circle"),z(),J(3),z()),i&2){let t=Ke();Y(3),Rt(" ",t.i18n.t("contact.success")," ")}}var lb="eklufamily@gmail.com",Wu=class i{fb=new c_;submitButton=Og("submitButton");i18n=re(Ln);sending=Nt(!1);submitted=Nt(!1);contactInfo=[{icon:"mail",labelKey:"contact.info.email",value:lb,href:`mailto:${lb}`},{icon:"link",labelKey:"contact.info.github",value:"github.com/CharlyEKLU",href:"https://github.com/CharlyEKLU"},{icon:"phone",labelKey:"contact.info.phone",value:"(+228) 90 51 56 63",href:"tel:+22890515663"}];location=In(()=>({city:"Lom\xE9, Togo",timezone:"GMT (UTC+0)",availability:this.i18n.t("contact.info.availability")}));form=this.fb.nonNullable.group({name:["",[mr.required,mr.minLength(2)]],email:["",[mr.required,mr.email]],message:["",[mr.required,mr.minLength(10)]]});async onSubmit(){if(this.form.invalid){this.form.markAllAsTouched();return}let e=this.submitButton()?.nativeElement;e&&vi(e,{scaleX:[1,.94,1],scaleY:[1,.94,1]},{duration:.35,ease:"easeOut"}),this.sending.set(!0);let{name:t,email:n,message:r}=this.form.getRawValue();try{let s=await fetch("https://formspree.io/f/xdapdzon",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t,email:n,message:r})});s.ok?(this.sending.set(!1),this.submitted.set(!0),this.form.reset(),setTimeout(()=>this.submitted.set(!1),6e3)):(this.sending.set(!1),console.error("Formspree error",await s.text()))}catch(s){this.sending.set(!1),console.error("Formspree connection error",s)}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-contact"]],viewQuery:function(t,n){t&1&&wg(n.submitButton,ZA,5),t&2&&Tg()},decls:42,vars:19,consts:[["submitButton",""],["id","contact",1,"section","contact"],["appReveal","bottom",1,"section-eyebrow"],["appReveal","bottom",1,"section-title",3,"revealDelay"],[1,"contact__layout"],["appReveal","left",1,"contact__info"],[1,"contact__lead"],[1,"contact__list-wrapper"],[1,"contact__list"],[1,"contact__charly"],["src","images/CHARLY_HIRE.png","alt","Hire Charly"],[1,"contact__map"],["src",_g`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.5119597967905!2d1.1147177104589285!3d6.195978993765794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTEnNDUuNSJOIDHCsDA3JzAyLjMiRQ!5e0!3m2!1sfr!2stg!4v1787647245858!5m2!1sfr!2stg`,"width","100%","height","220","allowfullscreen","","loading","lazy","referrerpolicy","strict-origin-when-cross-origin",2,"border","0"],[1,"contact__map-legend"],["appReveal","right",1,"contact__form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","name","required","",3,"placeholder"],["matInput","","type","email","formControlName","email","required","",3,"placeholder"],["matInput","","rows","5","formControlName","message","required","",3,"placeholder"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[1,"button-content"],[1,"contact__success"],[1,"contact__list-label"],[3,"href"]],template:function(t,n){t&1&&(B(0,"section",1)(1,"p",2),J(2,"Contact"),z(),B(3,"h2",3),J(4),z(),B(5,"div",4)(6,"div",5)(7,"p",6),J(8),z(),B(9,"div",7)(10,"ul",8),dn(11,QA,8,3,"li",null,$A),z(),B(13,"div",9),tt(14,"img",10),z()(),B(15,"div",11),tt(16,"iframe",12),B(17,"p",13)(18,"mat-icon"),J(19,"location_on"),z(),J(20),z()()(),B(21,"form",14),at("ngSubmit",function(){return n.onSubmit()}),B(22,"mat-form-field",15)(23,"mat-label"),J(24),z(),tt(25,"input",16),cn(26,eP,2,1,"mat-error"),z(),B(27,"mat-form-field",15)(28,"mat-label"),J(29),z(),tt(30,"input",17),cn(31,tP,2,1,"mat-error"),z(),B(32,"mat-form-field",15)(33,"mat-label"),J(34),z(),tt(35,"textarea",18),cn(36,nP,2,1,"mat-error"),z(),B(37,"button",19,0),cn(39,iP,1,1)(40,rP,4,1,"span",20),z(),cn(41,sP,4,1,"p",21),z()()()),t&2&&(Y(3),gt("revealDelay",80),Y(),Le(n.i18n.t("contact.title")),Y(4),Rt(" ",n.i18n.t("contact.subtitle")," "),Y(3),un(n.contactInfo),Y(9),Cg(" ",n.location().city,"\xA0\xB7\xA0",n.location().timezone,"\xA0\xB7\xA0",n.location().availability," "),Y(),gt("formGroup",n.form),Y(3),Le(n.i18n.t("contact.form.name")),Y(),gt("placeholder",n.i18n.t("contact.form.name_placeholder")),Y(),hn(n.form.controls.name.invalid&&n.form.controls.name.touched?26:-1),Y(3),Le(n.i18n.t("contact.form.email")),Y(),gt("placeholder",n.i18n.t("contact.form.email_placeholder")),Y(),hn(n.form.controls.email.invalid&&n.form.controls.email.touched?31:-1),Y(3),Le(n.i18n.t("contact.form.message")),Y(),gt("placeholder",n.i18n.t("contact.form.message_placeholder")),Y(),hn(n.form.controls.message.invalid&&n.form.controls.message.touched?36:-1),Y(),gt("disabled",n.sending()),Y(2),hn(n.sending()?39:40),Y(2),hn(n.submitted()?41:-1))},dependencies:[h_,o_,t_,i_,r_,l_,Pc,a_,cc,Rc,df,uf,ab,ob,mi,pi,On,Dn,Yn],styles:['@charset "UTF-8";.contact__layout[_ngcontent-%COMP%]{margin-top:2rem;display:grid;grid-template-columns:.9fr 1.1fr;gap:3rem;align-items:start}.contact__lead[_ngcontent-%COMP%]{color:var(--text-secondary);line-height:1.75;margin-bottom:2rem}.contact__list-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;margin-bottom:2rem}.contact__charly[_ngcontent-%COMP%]{flex-shrink:0;width:130px}.contact__charly[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 4px 12px rgba(3,175,249,.2))}.contact__list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1.25rem}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-400);filter:drop-shadow(0 0 6px rgba(3,175,249,.35))}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--text-primary)}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;transition:color .2s}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-300);text-decoration:none}.contact__list-label[_ngcontent-%COMP%]{font-size:.72rem;text-transform:uppercase;letter-spacing:.07em;color:var(--text-muted);font-weight:500}.contact__map-legend[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;margin:.6rem 0 0;font-size:.78rem;color:var(--text-muted)}.contact__map-legend[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem;color:var(--primary-400)}.contact__map[_ngcontent-%COMP%]{margin-top:1.5rem;width:100%;border-radius:var(--radius-md);overflow:hidden;border:1px solid var(--border-default);box-shadow:var(--shadow-card)}.contact__map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{display:block;width:100%}.contact__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.contact__form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.contact__form[_ngcontent-%COMP%]   .mdc-text-field[_ngcontent-%COMP%]{background:var(--bg-800)!important;border-radius:var(--radius-sm)!important}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-start;margin-top:1rem;padding:1.5rem 2.5rem!important;font-size:1rem!important;display:inline-flex!important;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--primary-700),var(--primary-400))!important;color:#000106!important;font-weight:600!important;box-shadow:var(--glow-primary)!important;border-radius:var(--radius-sm)!important;transition:box-shadow .2s,filter .2s,transform .2s!important}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{box-shadow:var(--glow-strong)!important;filter:brightness(1.1);transform:translateY(-2px)}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:0!important}.contact__success[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin-top:1rem;color:var(--success);font-size:.9rem;font-weight:500}@media(max-width:900px){.contact__layout[_ngcontent-%COMP%]{grid-template-columns:1fr;text-align:center}.contact__list-wrapper[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex-direction:column;text-align:center;justify-content:center}.contact__map-legend[_ngcontent-%COMP%]{justify-content:center}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:center}}']})};var Xu=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-home"]],decls:11,vars:0,consts:[[1,"page-section"],[1,"page-section","page-section--tinted"]],template:function(t,n){t&1&&(tt(0,"app-hero"),B(1,"div",0),tt(2,"app-about"),z(),B(3,"div",1),tt(4,"app-skills"),z(),B(5,"div",0),tt(6,"app-parcours"),z(),B(7,"div",1),tt(8,"app-projects"),z(),B(9,"div",1),tt(10,"app-contact"),z())},dependencies:[_h,vh,Eh,Hu,Gu,Wu],styles:["[_nghost-%COMP%]{display:block}.page-section--tinted[_ngcontent-%COMP%]{background:var(--mat-sys-surface-container-lowest)}"]})};var cb=[{path:"",component:Xu},{path:"projets/:slug",loadComponent:()=>import("./chunk-OMW3NDX4.js").then(i=>i.ProjectDetail)},{path:"**",redirectTo:""}];var hb={providers:[fg(),Dg(),y_(),Hg(cb,Gg({scrollPositionRestoration:"enabled",anchorScrolling:"enabled"}))]};var oP=["*",[["mat-toolbar-row"]]],aP=["*","mat-toolbar-row"],lP=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=qn({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),db=(()=>{class i{_elementRef=re(ln);_platform=re(Vn);_document=re(vn);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["mat-toolbar"]],contentQueries:function(n,r,s){if(n&1&&Tc(s,lP,5),n&2){let o;Tt(o=Et())&&(r._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,r){n&2&&(Gr(r.color?"mat-"+r.color:""),Pt("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:aP,decls:2,vars:0,template:function(n,r){n&1&&(Hr(oP),Xi(0),Xi(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return i})();var ub=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Jt({type:i});static \u0275inj=Kt({imports:[Mn]})}return i})();var pP=["mat-menu-item",""],mP=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],gP=["mat-icon, [matMenuItemIcon]","*"];function _P(i,e){i&1&&(gc(),B(0,"svg",2),tt(1,"polygon",3),z())}var vP=["*"];function yP(i,e){if(i&1){let t=Wi();zr(0,"div",0),wc("click",function(){An(t);let r=Ke();return Pn(r.closed.emit("click"))})("animationstart",function(r){An(t);let s=Ke();return Pn(s._onAnimationStart(r.animationName))})("animationend",function(r){An(t);let s=Ke();return Pn(s._onAnimationDone(r.animationName))})("animationcancel",function(r){An(t);let s=Ke();return Pn(s._onAnimationDone(r.animationName))}),zr(1,"div",1),Xi(2),fo()()}if(i&2){let t=Ke();Gr(t._classList),Pt("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Sc("id",t.panelId),Gt("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var Km=new on("MAT_MENU_PANEL"),hc=(()=>{class i{_elementRef=re(ln);_document=re(vn);_focusMonitor=re(Aa);_parentMenu=re(Km,{optional:!0});_changeDetectorRef=re(Es);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new $t;_focused=new $t;_highlighted=!1;_triggersSubmenu=!1;constructor(){re(Cs).load(Qg),this._parentMenu?.addItem?.(this)}focus(t,n){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,n):this._getHostElement().focus(n),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),n=t.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<n.length;r++)n[r].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(n,r){n&1&&at("click",function(o){return r._checkDisabled(o)})("mouseenter",function(){return r._handleMouseEnter()}),n&2&&(Gt("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),Pt("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",Ii],disableRipple:[2,"disableRipple","disableRipple",Ii]},exportAs:["matMenuItem"],attrs:pP,ngContentSelectors:gP,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(n,r){n&1&&(Hr(mP),Xi(0),B(1,"span",0),Xi(2,1),z(),tt(3,"div",1),cn(4,_P,2,0,":svg:svg",2)),n&2&&(Y(3),gt("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),Y(),hn(r._triggersSubmenu?4:-1))},dependencies:[Jg],encapsulation:2,changeDetection:0})}return i})();var xP=new on("MatMenuContent");var bP=new on("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),$m="_mat-menu-enter",qu="_mat-menu-exit",ba=(()=>{class i{_elementRef=re(ln);_changeDetectorRef=re(Es);_injector=re(Rn);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=go();_allItems;_directDescendantItems=new mg;_classList={};_panelAnimationState="void";_animationDone=new $t;_isAnimating=Nt(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let n=this._previousPanelClass,r=ce({},this._classList);n&&n.length&&n.split(" ").forEach(s=>{r[s]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(s=>{r[s]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new Ss;close=this.closed;panelId=re(mo).getId("mat-menu-panel-");constructor(){let t=re(bP);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Zg(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Sa(this._directDescendantItems),pc(t=>fc(...t.map(n=>n._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let n=this._keyManager;if(this._panelAnimationState==="enter"&&n.activeItem?._hasFocus()){let r=t.toArray(),s=Math.max(0,Math.min(r.length-1,n.activeItemIndex||0));r[s]&&!r[s].disabled?n.setActiveItem(s):n.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Sa(this._directDescendantItems),pc(n=>fc(...n.map(r=>r._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let n=t.keyCode,r=this._keyManager;switch(n){case 27:Cc(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(n===38||n===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=pr(()=>{let n=this._resolvePanel();if(!n||!n.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(t).setFirstItemActive(),!r.activeItem&&n&&n.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,n=this.yPosition){this._classList=je(ce({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":n==="above","mat-menu-below":n==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let n=t===qu;(n||t===$m)&&(n&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(n?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===$m||t===qu)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let n=this._resolvePanel();n&&(n.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(qu),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?$m:qu)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Sa(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(n=>n._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Mt({type:i,selectors:[["mat-menu"]],contentQueries:function(n,r,s){if(n&1&&Tc(s,xP,5)(s,hc,5)(s,hc,4),n&2){let o;Tt(o=Et())&&(r.lazyContent=o.first),Tt(o=Et())&&(r._allItems=o),Tt(o=Et())&&(r.items=o)}},viewQuery:function(n,r){if(n&1&&ti(wa,5),n&2){let s;Tt(s=Et())&&(r.templateRef=s.first)}},hostVars:3,hostBindings:function(n,r){n&2&&Gt("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Ii],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:Ii(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ta([{provide:Km,useExisting:i}])],ngContentSelectors:vP,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(n,r){n&1&&(Hr(),bg(0,yP,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return i})(),MP=new on("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=re(Rn);return()=>Oo(i)}});var xa=new WeakMap,SP=(()=>{class i{_canHaveBackdrop;_element=re(ln);_viewContainerRef=re(Ts);_menuItemInstance=re(hc,{optional:!0,self:!0});_dir=re(_o,{optional:!0});_focusMonitor=re(Aa);_ngZone=re(an);_injector=re(Rn);_scrollStrategy=re(MP);_changeDetectorRef=re(Es);_animationsDisabled=go();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Vr.EMPTY;_menuCloseSubscription=Vr.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(n=>{this._destroyMenu(n),(n==="click"||n==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let n=re(Km,{optional:!0});this._parentMaterialMenu=n instanceof ba?n:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&xa.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let n=this._menu;if(this._menuOpen||!n)return;this._pendingRemoval?.unsubscribe();let r=xa.get(n);xa.set(n,this),r&&r!==this&&r._closeMenu();let s=this._createOverlay(n),o=s.getConfig(),a=o.positionStrategy;this._setPosition(n,a),this._canHaveBackdrop?o.hasBackdrop=n.hasBackdrop==null?!this._triggersSubmenu():n.hasBackdrop:o.hasBackdrop=n.hasBackdrop??!1,s.hasAttached()||(s.attach(this._getPortal(n)),n.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),n.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,n.direction=this.dir,t&&n.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),n instanceof ba&&(n._setIsOpen(!0),n._directDescendantItems.changes.pipe(Pi(n.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(t,n){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,n):this._element.nativeElement.focus(n)}_destroyMenu(t){let n=this._overlayRef,r=this._menu;!n||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof ba&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(cg(1)).subscribe(()=>{n.detach(),xa.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(n.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&xa.delete(r),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let n=this._getOverlayConfig(t);this._subscribeToPositions(t,n.positionStrategy),this._overlayRef=No(this._injector,n),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof ba&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(t){return new Do({positionStrategy:Lo(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,n){t.setPositionClasses&&n.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let s=r.connectionPair.overlayX==="start"?"after":"before",o=r.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(s,o)})})}_setPosition(t,n){let[r,s]=t.xPosition==="before"?["end","start"]:["start","end"],[o,a]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[o,a],[h,u]=[r,s],d=0;if(this._triggersSubmenu()){if(u=r=t.xPosition==="before"?"start":"end",s=h=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let f=this._parentMaterialMenu.items.first;this._parentInnerPadding=f?f._getHostElement().offsetTop:0}d=o==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(l=o==="top"?"bottom":"top",c=a==="top"?"bottom":"top");n.withPositions([{originX:r,originY:l,overlayX:h,overlayY:o,offsetY:d},{originX:s,originY:l,overlayX:u,overlayY:o,offsetY:d},{originX:r,originY:c,overlayX:h,overlayY:a,offsetY:-d},{originX:s,originY:c,overlayX:u,overlayY:a,offsetY:-d}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),n=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ma(),s=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(uo(o=>this._menuOpen&&o!==this._menuItemInstance)):Ma();return fc(t,r,s,n)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Io(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return xa.get(t)===this}_triggerIsAriaDisabled(){return Ii(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(n){yc()};static \u0275dir=qn({type:i})}return i})(),mb=(()=>{class i extends SP{_cleanupTouchstart;_hoverSubscription=Vr.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new Ss;onMenuOpen=this.menuOpened;menuClosed=new Ss;onMenuClose=this.menuClosed;constructor(){super(!0);let t=re(Gi);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",n=>{Xg(n)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){Wg(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let n=t.keyCode;(n===13||n===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(n===39&&this.dir==="ltr"||n===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(n){return new(n||i)};static \u0275dir=qn({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(n,r){n&1&&at("click",function(o){return r._handleClick(o)})("mousedown",function(o){return r._handleMousedown(o)})("keydown",function(o){return r._handleKeydown(o)}),n&2&&Gt("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[xc]})}return i})();var gb=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Jt({type:i});static \u0275inj=Kt({imports:[e_,ul,Mn,zs]})}return i})();var _b=(i,e)=>e.fragment;function TP(i,e){if(i&1){let t=Wi();B(0,"a",13),at("click",function(r){let s=An(t).$implicit,o=Ke();return Pn(o.handleNavClick(r,s.fragment))}),J(1),z()}if(i&2){let t=e.$implicit,n=Ke();gt("fragment",t.fragment),Y(),Le(n.i18n.t(t.key))}}function EP(i,e){if(i&1){let t=Wi();B(0,"a",14),at("click",function(r){let s=An(t).$implicit,o=Ke();return Pn(o.handleNavClick(r,s.fragment))}),J(1),z()}if(i&2){let t=e.$implicit,n=Ke();gt("fragment",t.fragment),Y(),Le(n.i18n.t(t.key))}}var Yu=class i{i18n=re(Ln);router=re(Vg);transitionService=re(Ic);scrolled=Nt(!1);links=[{key:"nav.home",fragment:"accueil"},{key:"nav.about",fragment:"a-propos"},{key:"nav.skills",fragment:"competences"},{key:"nav.parcours",fragment:"parcours"},{key:"nav.projects",fragment:"projets"}];ngAfterViewInit(){}onScroll(){this.scrolled.set(window.scrollY>24)}handleNavClick(e,t){this.router.url==="/"||this.router.url.startsWith("/#")||(e.preventDefault(),this.transitionService.navigate("/",t))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-header"]],hostBindings:function(t,n){t&1&&at("scroll",function(){return n.onScroll()},vg)},decls:27,vars:10,consts:[["mobileMenu","matMenu"],[1,"header"],[1,"header__logo"],[1,"header__spacer"],[1,"header__nav"],["mat-button","","routerLink","/",3,"fragment"],["mat-flat-button","","color","primary","routerLink","/","fragment","contact",3,"click"],[1,"header__lang-toggle"],["mat-button","",1,"lang-btn",3,"click"],["mat-icon-button","",1,"header__menu-trigger",3,"matMenuTriggerFor"],["mat-menu-item","","routerLink","/",3,"fragment"],["mat-menu-item","","routerLink","/","fragment","contact",3,"click"],["mat-menu-item","",3,"click"],["mat-button","","routerLink","/",3,"click","fragment"],["mat-menu-item","","routerLink","/",3,"click","fragment"]],template:function(t,n){if(t&1&&(B(0,"mat-toolbar",1)(1,"div",2),J(2,"C.E"),z(),tt(3,"span",3),B(4,"nav",4),dn(5,TP,2,2,"a",5,_b),B(7,"a",6),at("click",function(s){return n.handleNavClick(s,"contact")}),J(8),z(),B(9,"div",7)(10,"button",8),at("click",function(){return n.i18n.toggleLanguage()}),J(11),Rg(12,"uppercase"),z()()(),B(13,"button",9)(14,"mat-icon"),J(15,"menu"),z()(),B(16,"mat-menu",null,0),dn(18,EP,2,2,"a",10,_b),B(20,"a",11),at("click",function(s){return n.handleNavClick(s,"contact")}),J(21),z(),B(22,"button",12),at("click",function(){return n.i18n.toggleLanguage()}),B(23,"mat-icon"),J(24,"language"),z(),B(25,"span"),J(26),z()()()()),t&2){let r=Eg(17);Pt("header--scrolled",n.scrolled()),Y(5),un(n.links),Y(3),Le(n.i18n.t("nav.contact")),Y(3),Rt(" ",Ig(12,8,n.i18n.currentLang())," "),Y(2),gt("matMenuTriggerFor",r),Gt("aria-label",n.i18n.t("nav.menu_open")),Y(5),un(n.links),Y(3),Le(n.i18n.t("nav.contact")),Y(5),Le(n.i18n.t("nav.switch_lang"))}},dependencies:[zg,ub,db,mi,pi,Wr,On,Dn,gb,ba,hc,mb,Fg],styles:['.header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:100;background:transparent;color:var(--text-primary);transition:background-color .25s ease,box-shadow .25s ease,border-color .25s ease;border-bottom:1px solid transparent}.header--scrolled[_ngcontent-%COMP%]{background:#000106e0;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom-color:#03aff91a;box-shadow:0 4px 24px #00000073}.header__logo[_ngcontent-%COMP%]{font-family:var(--font-heading);font-weight:800;font-size:1.8rem;letter-spacing:-.02em;color:var(--primary-400);text-shadow:0 0 10px var(--primary-400),0 0 20px rgba(3,175,249,.5);flex:0 0 auto;cursor:pointer;transition:text-shadow .3s ease}.header__logo[_ngcontent-%COMP%]:hover{text-shadow:0 0 15px var(--primary-400),0 0 30px rgba(3,175,249,.8)}.header__spacer[_ngcontent-%COMP%]{flex:1 1 auto}.header__nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.15rem}.header__nav[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]{color:var(--text-secondary);font-weight:500;font-size:.9rem;letter-spacing:.01em;transition:color .2s;position:relative}.header__nav[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:4px;left:50%;transform:translate(-50%) scaleX(0);width:70%;height:1.5px;background:var(--primary-400);border-radius:2px;transition:transform .25s cubic-bezier(.4,0,.2,1)}.header__nav[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:hover{color:var(--primary-300)}.header__nav[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:hover:after{transform:translate(-50%) scaleX(1)}.header__nav[_ngcontent-%COMP%]   a[mat-flat-button][_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--primary-700),var(--primary-400))!important;color:#000106!important;font-weight:600!important;border-radius:var(--radius-sm)!important;box-shadow:var(--glow-primary)!important;transition:box-shadow .2s,filter .2s!important;margin-left:.5rem}.header__nav[_ngcontent-%COMP%]   a[mat-flat-button][_ngcontent-%COMP%]:hover{box-shadow:var(--glow-strong)!important;filter:brightness(1.1)}.header__menu-trigger[_ngcontent-%COMP%]{display:none;color:var(--text-secondary)}@media(max-width:768px){.header[_ngcontent-%COMP%]{padding:0 8px 0 16px}.header__nav[_ngcontent-%COMP%]{display:none}.header__menu-trigger[_ngcontent-%COMP%]{display:inline-flex;margin-left:auto}}']})};var CP=(i,e)=>e.label;function AP(i,e){if(i&1&&(B(0,"a",9)(1,"mat-icon"),J(2),z(),B(3,"span"),J(4),z()()),i&2){let t=e.$implicit;gt("href",t.href,fr),Y(2),Le(t.icon),Y(2),Le(t.label)}}var ju=class i{i18n=re(Ln);year=new Date().getFullYear();socials=[{icon:"code",label:"GitHub",href:"https://github.com/CharlyEKLU"},{icon:"work",label:"LinkedIn",href:"#"},{icon:"mail",label:"Email",href:"mailto:eklufamily@gmail.com"},{icon:"play_circle_filled",label:"YouTube",href:"#"},{icon:"facebook",label:"Facebook",href:"#"},{icon:"music_note",label:"TikTok",href:"#"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-footer"]],decls:14,vars:3,consts:[[1,"footer"],[1,"footer__left"],["src","images/CHARLY_BYE.png","alt","Charly Bye",1,"footer__character"],[1,"footer__center"],[1,"footer__branding"],["src","images/LOGO C.E.png","alt","Logo C.E.",1,"footer__logo"],[1,"footer__copy"],[1,"footer__right"],[1,"footer__socials"],["mat-button","","target","_blank","rel","noopener noreferrer",1,"footer__social-link",3,"href"]],template:function(t,n){t&1&&(B(0,"footer",0)(1,"div",1),tt(2,"img",2),z(),B(3,"div",3)(4,"div",4)(5,"span"),J(6),z(),tt(7,"img",5),z(),B(8,"p",6),J(9),z()(),B(10,"div",7)(11,"div",8),dn(12,AP,5,3,"a",9,CP),z()()()),t&2&&(Y(6),Rt("",n.i18n.t("footer.designed_by")," Charly EKLU"),Y(3),po("\xA9 ",n.year," Charly EKLU. ",n.i18n.t("footer.rights")),Y(3),un(n.socials))},dependencies:[On,Dn,mi,pi,Yn],styles:['@charset "UTF-8";.footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;padding:1.5rem 8vw;background:var(--bg-950);border-top:1px solid rgba(3,175,249,.08);color:var(--text-muted)}.footer__left[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:flex-start}.footer__character[_ngcontent-%COMP%]{height:160px;width:auto;object-fit:contain;filter:drop-shadow(0 4px 8px rgba(0,0,0,.5));margin-top:-70px;margin-bottom:-1.5rem;position:relative;z-index:10}.footer__center[_ngcontent-%COMP%]{flex:2;display:flex;flex-direction:column;align-items:center;gap:.5rem}.footer__branding[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;font-size:.9rem;font-weight:500;color:var(--text-primary)}.footer__logo[_ngcontent-%COMP%]{height:64px;width:auto;object-fit:contain}.footer__copy[_ngcontent-%COMP%]{margin:0;font-size:.8rem;letter-spacing:.02em}.footer__right[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:flex-end}.footer__socials[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,auto);gap:.25rem .75rem}.footer__socials[_ngcontent-%COMP%]   .footer__social-link[_ngcontent-%COMP%]{color:var(--text-muted)!important;font-weight:400!important;padding:4px 12px!important;transition:color .2s,filter .2s!important;display:flex;align-items:center;justify-content:flex-start}.footer__socials[_ngcontent-%COMP%]   .footer__social-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:6px}.footer__socials[_ngcontent-%COMP%]   .footer__social-link[_ngcontent-%COMP%]:hover{color:var(--primary-400)!important;filter:drop-shadow(0 0 6px rgba(3,175,249,.45))}@media(max-width:900px){.footer[_ngcontent-%COMP%]{flex-direction:column;text-align:center;gap:3rem}.footer__character[_ngcontent-%COMP%]{margin-top:-40px;height:140px}.footer__left[_ngcontent-%COMP%], .footer__right[_ngcontent-%COMP%]{flex:auto;justify-content:center}.footer__socials[_ngcontent-%COMP%]{justify-content:center}}@media(max-width:600px){.footer__socials[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem}.footer__social-link[_ngcontent-%COMP%]{justify-content:center!important}}']})};var Zu=class i{done=Nt(!1);static \u0275fac=function(t){return new(t||i)};static \u0275prov=bn({token:i,factory:i.\u0275fac,providedIn:"root"})};var PP=["preloader"],RP=["circuitPath"],$u=class i{preloader;circuitPath;preloaderService=re(Zu);constructor(){typeof window<"u"&&(document.body.style.overflow="hidden")}ngAfterViewInit(){if(!this.circuitPath||!this.preloader)return;let e=this.circuitPath.nativeElement,t=e.getTotalLength();Xr.set(e,{strokeDasharray:t,strokeDashoffset:t}),Xr.timeline({onComplete:()=>{this.preloader.nativeElement.style.display="none",document.body.style.overflow="",this.preloaderService.done.set(!0)}}).to(e,{strokeDashoffset:0,duration:1.5,ease:"power2.inOut"}).to(e,{strokeDashoffset:-t,duration:1,ease:"power2.inOut",opacity:0},"+=0.2").to(this.preloader.nativeElement,{opacity:0,duration:.6,ease:"power2.inOut"},"-=0.4")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Mt({type:i,selectors:[["app-root"]],viewQuery:function(t,n){if(t&1&&ti(PP,5)(RP,5),t&2){let r;Tt(r=Et())&&(n.preloader=r.first),Tt(r=Et())&&(n.circuitPath=r.first)}},decls:10,vars:0,consts:[["preloader",""],["circuitPath",""],[1,"preloader"],["viewBox","0 0 300 150"],["d","M 0,75 L 50,75 L 75,25 L 125,125 L 175,25 L 200,75 L 250,75 L 300,75",1,"circuit-path"],[1,"page-transition-overlay"]],template:function(t,n){t&1&&(B(0,"div",2,0),gc(),B(2,"svg",3),tt(3,"path",4,1),z()(),ug(),tt(5,"app-header"),B(6,"main"),tt(7,"router-outlet"),z(),tt(8,"app-footer")(9,"div",5))},dependencies:[Bg,Yu,ju],styles:["[_nghost-%COMP%]{display:block}.preloader[_ngcontent-%COMP%]{position:fixed;inset:0;background:var(--bg-950);z-index:9999;display:flex;align-items:center;justify-content:center;overflow:hidden}.preloader[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:300px;height:150px;overflow:visible}.preloader[_ngcontent-%COMP%]   .circuit-path[_ngcontent-%COMP%]{fill:none;stroke:var(--primary-400);stroke-width:3;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 10px var(--primary-400));opacity:.8}.page-transition-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:var(--bg-950);z-index:10000;transform:translateY(100%);pointer-events:none;overflow:hidden;border-top:2px solid var(--primary-400);box-shadow:0 -10px 30px #03aff933}.page-transition-overlay[_ngcontent-%COMP%]   .transition-scan[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,transparent 0%,var(--primary-400) 40%,#fff 50%,var(--primary-400) 60%,transparent 100%);box-shadow:0 0 20px var(--primary-400),0 0 40px #03aff966;transform-origin:left center;transform:scaleX(0);opacity:0}"]})};Ug($u,hb).catch(i=>console.error(i));
