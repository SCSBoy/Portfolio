import{$a as vf,A as ri,Aa as go,Ab as si,B as Xh,Ba as cf,Bb as yo,C as mo,Ca as rc,Cb as wo,D as Xi,Da as Tr,Db as xi,E as ad,Ea as _o,F as Zh,Fa as lf,Fb as Ea,G as Qh,Ga as df,Gb as Rn,H as Jh,Ha as uf,I as tc,Ia as hf,Ib as Ei,J as oi,Ja as ff,Jb as Fn,K as rn,Ka as mf,Kb as Ie,L as gt,La as pf,Lb as Do,M as _t,Mb as Sa,N as q,Nb as Ce,O as Sr,Ob as xe,P as Ar,Pa as gf,Pb as Df,Q as R,Qb as Cf,R as Be,Ra as tt,Rb as dd,S as ef,Sa as vo,Sb as ud,T as k,Ta as _f,U as V,Ua as oc,Ub as Ve,V as g,Vb as Co,W as nc,Wb as xf,X as tf,Xb as Ef,Y as mn,Ya as bo,Z as on,Za as Tn,_ as pn,_a as De,a as M,ab as ac,ac as On,b as ge,cb as bf,d as qi,da as ct,db as cd,e as Yh,ea as ee,eb as Ze,ec as Sf,f as Yi,fa as po,fb as Ue,fc as Af,g as he,ga as nf,gb as K,h as tn,ha as lt,hb as yf,hc as me,i as Mn,ia as ve,ib as Tt,ic as Gt,j as nn,ja as Mr,jb as sc,jc as Mf,k as U,ka as Da,kc as lc,l as Ks,lb as ld,lc as If,m as od,ma as de,mb as cc,mc as Tf,n as Kh,nb as xa,nc as Aa,o as ie,oa as rf,ob as wf,oc as Rf,p as Xs,pa as ic,pb as Rr,pc as Kn,q as Ki,qa as In,qb as vt,qc as Ff,r as Zs,ra as ai,rb as bt,rc as je,s as Qs,sa as sd,sb as yt,sc as xo,t as Js,ta as be,tc as Of,u as ba,ua as Ca,uc as kf,v as It,va as of,wa as Ir,x as ya,xa as af,xb as Fr,y as wa,ya as Zi,yb as nt,z as ec,za as sf,zb as dt}from"./chunk-SI2Z3AAC.js";var Pf=null;function kn(){return Pf}function hd(r){Pf??=r}var Ma=class{},Or=(()=>{class r{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:()=>g(Nf),providedIn:"platform"})}return r})();var Nf=(()=>{class r extends Or{_location;_history;_doc=g(ee);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return kn().getBaseHref(this._doc)}onPopState(e){let n=kn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=kn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:()=>new r,providedIn:"platform"})}return r})();function Uf(r,t){return r?t?r.endsWith("/")?t.startsWith("/")?r+t.slice(1):r+t:t.startsWith("/")?r+t:`${r}/${t}`:r:t}function Lf(r){let t=r.search(/#|\?|$/);return r[t-1]==="/"?r.slice(0,t-1)+r.slice(t):r}function Qi(r){return r&&r[0]!=="?"?`?${r}`:r}var kr=(()=>{class r{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:()=>g(Vf),providedIn:"root"})}return r})(),Nv=new k(""),Vf=(()=>{class r extends kr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??g(ee).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Uf(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Qi(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,o){let a=this.prepareExternalUrl(i+Qi(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,i,o){let a=this.prepareExternalUrl(i+Qi(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||r)(V(Or),V(Nv,8))};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Pr=(()=>{class r{_subject=new he;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Uv(Lf(Bf(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Qi(n))}normalize(e){return r.stripTrailingSlash(Bv(this._basePath,Bf(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Qi(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Qi(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=Qi;static joinWithSlash=Uf;static stripTrailingSlash=Lf;static \u0275fac=function(n){return new(n||r)(V(kr))};static \u0275prov=R({token:r,factory:()=>Lv(),providedIn:"root"})}return r})();function Lv(){return new Pr(V(kr))}function Bv(r,t){if(!r||!t.startsWith(r))return t;let e=t.substring(r.length);return e===""||["/",";","?","#"].includes(e[0])?e:t}function Bf(r){return r.replace(/\/index\.html$/,"")}function Uv(r){if(new RegExp("^(https?:)?//").test(r)){let[,e]=r.split(/\/\/[^\/]+/);return e}return r}var fd=(()=>{class r{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=g(ct);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||r)(De(ac))};static \u0275dir=K({type:r,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[In]})}return r})();function Vv(r,t){return new q(2100,!1)}var jv=(()=>{class r{transform(e){return e==null?null:(zv(r,e),e.toUpperCase())}static \u0275fac=function(n){return new(n||r)};static \u0275pipe=yf({name:"uppercase",type:r,pure:!0})}return r})();function zv(r,t){if(typeof t!="string")throw Vv(r,t)}function Ia(r,t){t=encodeURIComponent(t);for(let e of r.split(";")){let n=e.indexOf("="),[i,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===t)return decodeURIComponent(o)}return null}var Nr=class{};var pd="browser";function dc(r){return r===pd}var zf=(()=>{class r{static \u0275prov=R({token:r,providedIn:"root",factory:()=>new md(g(ee),window)})}return r})(),md=class{document;window;offset=()=>[0,0];constructor(t,e){this.document=t,this.window=e}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t,e){this.window.scrollTo(ge(M({},e),{left:t[0],top:t[1]}))}scrollToAnchor(t,e){let n=Kv(this.document,t);n&&(this.scrollToElement(n,e),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(t){try{this.window.history.scrollRestoration=t}catch{console.warn(Sr(2400,!1))}}scrollToElement(t,e){let n=t.getBoundingClientRect(),i=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(ge(M({},e),{left:i-a[0],top:o-a[1]}))}};function Kv(r,t){let e=r.getElementById(t)||r.getElementsByName(t)[0];if(e)return e;if(typeof r.createTreeWalker=="function"&&r.body&&typeof r.body.attachShadow=="function"){let n=r.createTreeWalker(r.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let o=i.shadowRoot;if(o){let a=o.getElementById(t)||o.querySelector(`[name="${t}"]`);if(a)return a}i=n.nextNode()}}return null}var Ta=class{_doc;constructor(t){this._doc=t}manager},uc=(()=>{class r extends Ta{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,o){return e.addEventListener(n,i,o),()=>this.removeEventListener(e,n,i,o)}removeEventListener(e,n,i,o){return e.removeEventListener(n,i,o)}static \u0275fac=function(n){return new(n||r)(V(ee))};static \u0275prov=R({token:r,factory:r.\u0275fac})}return r})(),mc=new k(""),bd=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof uc));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof uc);o&&this._plugins.push(o)}addEventListener(e,n,i,o){return this._findPluginFor(n).addEventListener(e,n,i,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new q(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||r)(V(mc),V(ve))};static \u0275prov=R({token:r,factory:r.\u0275fac})}return r})(),gd="ng-app-id";function Hf(r){for(let t of r)t.remove()}function $f(r,t){let e=t.createElement("style");return e.textContent=r,e}function Zv(r,t,e,n){let i=r.head?.querySelectorAll(`style[${gd}="${t}"],link[${gd}="${t}"]`);if(i)for(let o of i)o.removeAttribute(gd),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function vd(r,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",r),e}var yd=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,i,o={}){this.doc=e,this.appId=n,this.nonce=i,Zv(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,$f);n?.forEach(i=>this.addUsage(i,this.external,vd))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&(Hf(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Hf(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,$f(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,vd(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||r)(V(ee),V(Ir),V(go,8),V(Zi))};static \u0275prov=R({token:r,factory:r.\u0275fac})}return r})(),_d={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},wd=/%COMP%/g;var Wf="%COMP%",Qv=`_nghost-${Wf}`,Jv=`_ngcontent-${Wf}`,eb=!0,tb=new k("",{factory:()=>eb});function nb(r){return Jv.replace(wd,r)}function ib(r){return Qv.replace(wd,r)}function qf(r,t){return t.map(e=>e.replace(wd,r))}var Dd=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,i,o,a,s,c=null,l=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=l,this.defaultRenderer=new Ra(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,n);return i instanceof fc?i.applyToHost(e):i instanceof Fa&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,o=i.get(n.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.tracingService;switch(n.encapsulation){case rc.Emulated:o=new fc(c,l,n,this.appId,d,a,s,u);break;case rc.ShadowDom:return new hc(c,e,n,a,s,this.nonce,u,l);case rc.ExperimentalIsolatedShadowDom:return new hc(c,e,n,a,s,this.nonce,u);default:o=new Fa(c,l,n,d,a,s,u);break}i.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||r)(V(bd),V(yd),V(Ir),V(tb),V(ee),V(ve),V(go),V(oc,8))};static \u0275prov=R({token:r,factory:r.\u0275fac})}return r})(),Ra=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,i){this.eventManager=t,this.doc=e,this.ngZone=n,this.tracingService=i}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(_d[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(Gf(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(Gf(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new q(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,i){if(i){e=i+":"+e;let o=_d[i];o?t.setAttributeNS(o,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let i=_d[n];i?t.removeAttributeNS(i,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,i){i&(vo.DashCase|vo.Important)?t.style.setProperty(e,n,i&vo.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&vo.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n,i){if(typeof t=="string"&&(t=kn().getGlobalEventTarget(this.doc,t),!t))throw new q(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(t,e,o)),this.eventManager.addEventListener(t,e,o,i)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;t(e)===!1&&e.preventDefault()}}};function Gf(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var hc=class extends Ra{hostEl;sharedStylesHost;shadowRoot;constructor(t,e,n,i,o,a,s,c){super(t,i,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=n.styles;l=qf(n.id,l);for(let u of l){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=u,this.shadowRoot.appendChild(f)}let d=n.getExternalStyles?.();if(d)for(let u of d){let f=vd(u,i);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Fa=class extends Ra{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,i,o,a,s,c){super(t,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let l=n.styles;this.styles=c?qf(c,l):l,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&_f.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},fc=class extends Fa{contentAttr;hostAttr;constructor(t,e,n,i,o,a,s,c){let l=i+"-"+n.id;super(t,e,n,o,a,s,c,l),this.contentAttr=nb(l),this.hostAttr=ib(l)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}};var pc=class r extends Ma{supportsDOMEvents=!0;static makeCurrent(){hd(new r)}onAndCancel(t,e,n,i){return t.addEventListener(e,n,i),()=>{t.removeEventListener(e,n,i)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=ob();return e==null?null:ab(e)}resetBaseElement(){Oa=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Ia(document.cookie,t)}},Oa=null;function ob(){return Oa=Oa||document.head.querySelector("base"),Oa?Oa.getAttribute("href"):null}function ab(r){return new URL(r,document.baseURI).pathname}var sb=(()=>{class r{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac})}return r})(),Yf=["alt","control","meta","shift"],cb={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},lb={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},Kf=(()=>{class r extends Ta{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,n,i,o){let a=r.parseEventName(n),s=r.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>kn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let o=r._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),Yf.forEach(l=>{let d=n.indexOf(l);d>-1&&(n.splice(d,1),a+=l+".")}),a+=o,n.length!=0||o.length===0)return null;let c={};return c.domEventName=i,c.fullKey=a,c}static matchEventFullKeyCode(e,n){let i=cb[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Yf.forEach(a=>{if(a!==i){let s=lb[a];s(e)&&(o+=a+".")}}),o+=i,o===n)}static eventCallback(e,n,i){return o=>{r.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||r)(V(ee))};static \u0275prov=R({token:r,factory:r.\u0275fac})}return r})();async function db(r,t,e){let n=M({rootComponent:r},ub(t,e));return Ff(n)}function ub(r,t){return{platformRef:t?.platformRef,appProviders:[...gb,...r?.providers??[]],platformProviders:pb}}function hb(){pc.makeCurrent()}function fb(){return new Mr}function mb(){return of(document),document}var pb=[{provide:Zi,useValue:pd},{provide:af,useValue:hb,multi:!0},{provide:ee,useFactory:mb}];var gb=[{provide:tf,useValue:"root"},{provide:Mr,useFactory:fb},{provide:mc,useClass:uc,multi:!0},{provide:mc,useClass:Kf,multi:!0},Dd,yd,bd,{provide:bo,useExisting:Dd},{provide:Nr,useClass:sb},[]];var Ji=class r{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init();for(let[e,n]of t.headers.entries())this.headers.set(e,n),this.normalizedNames.set(e,t.normalizedNames.get(e))}clone(t){let e=new r;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let i=t.op==="a"?(this.headers.get(e)||[]).slice():[];i.push(...n),this.headers.set(e,i);break;case"d":let o=t.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(o)?o:[o],s=this.headers.get(e);if(!s)return;s=s.filter(c=>a.indexOf(c)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(t,e){let n=t.toLowerCase();this.maybeSetNormalizedName(t,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=t.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(t,i)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var xd=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}},Ed=class{encodeKey(t){return Xf(t)}encodeValue(t){return Xf(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function _b(r,t){let e=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,s]=o==-1?[t.decodeKey(i),""]:[t.decodeKey(i.slice(0,o)),t.decodeValue(i.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var vb=/%(\d[a-f0-9])/gi,bb={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Xf(r){return encodeURIComponent(r).replace(vb,(t,e)=>bb[e]??t)}function gc(r){return`${r}`}var Si=class r{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Ed,t.fromString){if(t.fromObject)throw new q(2805,!1);this.map=_b(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],i=Array.isArray(n)?n.map(gc):[gc(n)];this.map.set(e,i)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let i=t[n];Array.isArray(i)?i.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new r({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[t,e]of this.cloneFrom.map.entries())this.map.set(t,e);this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=t.op==="a"?(this.map.get(t.param)||[]).slice():[];e.push(gc(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=(this.map.get(t.param)||[]).slice(),i=n.indexOf(gc(t.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null}}};function yb(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Zf(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function Qf(r){return typeof Blob<"u"&&r instanceof Blob}function Jf(r){return typeof FormData<"u"&&r instanceof FormData}function wb(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var em="Content-Type",tm="Accept",nm="text/plain",im="application/json",Db=`${im}, ${nm}, */*`,Eo=class r{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(t,e,n,i){this.url=e,this.method=t.toUpperCase();let o;if(yb(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new q(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Ji,this.context??=new xd,!this.params)this.params=new Si,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Zf(this.body)||Qf(this.body)||Jf(this.body)||wb(this.body)?this.body:this.body instanceof Si?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Jf(this.body)?null:Qf(this.body)?this.body.type||null:Zf(this.body)?null:typeof this.body=="string"?nm:this.body instanceof Si?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?im:null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,i=t.responseType||this.responseType,o=t.keepalive??this.keepalive,a=t.priority||this.priority,s=t.cache||this.cache,c=t.mode||this.mode,l=t.redirect||this.redirect,d=t.credentials||this.credentials,u=t.referrer??this.referrer,f=t.integrity||this.integrity,h=t.referrerPolicy||this.referrerPolicy,p=t.transferCache??this.transferCache,m=t.timeout??this.timeout,_=t.body!==void 0?t.body:this.body,b=t.withCredentials??this.withCredentials,w=t.reportProgress??this.reportProgress,x=t.headers||this.headers,y=t.params||this.params,E=t.context??this.context;return t.setHeaders!==void 0&&(x=Object.keys(t.setHeaders).reduce((I,D)=>I.set(D,t.setHeaders[D]),x)),t.setParams&&(y=Object.keys(t.setParams).reduce((I,D)=>I.set(D,t.setParams[D]),y)),new r(e,n,_,{params:y,headers:x,context:E,reportProgress:w,responseType:i,withCredentials:b,transferCache:p,keepalive:o,cache:s,priority:a,timeout:m,mode:c,redirect:l,credentials:d,referrer:u,integrity:f,referrerPolicy:h})}},Lr=(function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r})(Lr||{}),ka=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,e=200,n="OK"){this.headers=t.headers||new Ji,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}},Sd=class r extends ka{constructor(t={}){super(t)}type=Lr.ResponseHeader;clone(t={}){return new r({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},Pa=class r extends ka{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=Lr.Response;clone(t={}){return new r({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}},So=class extends ka{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},Cb=200,xb=204;var Eb=/^\)\]\}',?\n/;var Sb=(()=>{class r{xhrFactory;tracingService=g(oc,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new q(-2800,!1);let n=this.xhrFactory;return U(null).pipe(rn(()=>new Yi(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((_,b)=>a.setRequestHeader(_,b.join(","))),e.headers.has(tm)||a.setRequestHeader(tm,Db),!e.headers.has(em)){let _=e.detectContentTypeHeader();_!==null&&a.setRequestHeader(em,_)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let _=e.responseType.toLowerCase();a.responseType=_!=="json"?_:"text"}let s=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let _=a.statusText||"OK",b=new Ji(a.getAllResponseHeaders()),w=a.responseURL||e.url;return c=new Sd({headers:b,status:a.status,statusText:_,url:w}),c},d=this.maybePropagateTrace(()=>{let{headers:_,status:b,statusText:w,url:x}=l(),y=null;b!==xb&&(y=typeof a.response>"u"?a.responseText:a.response),b===0&&(b=y?Cb:0);let E=b>=200&&b<300;if(e.responseType==="json"&&typeof y=="string"){let I=y;y=y.replace(Eb,"");try{y=y!==""?JSON.parse(y):null}catch(D){y=I,E&&(E=!1,y={error:D,text:y})}}E?(o.next(new Pa({body:y,headers:_,status:b,statusText:w,url:x||void 0})),o.complete()):o.error(new So({error:y,headers:_,status:b,statusText:w,url:x||void 0}))}),u=this.maybePropagateTrace(_=>{let{url:b}=l(),w=new So({error:_,status:a.status||0,statusText:a.statusText||"Unknown Error",url:b||void 0});o.error(w)}),f=u;e.timeout&&(f=this.maybePropagateTrace(_=>{let{url:b}=l(),w=new So({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:b||void 0});o.error(w)}));let h=!1,p=this.maybePropagateTrace(_=>{h||(o.next(l()),h=!0);let b={type:Lr.DownloadProgress,loaded:_.loaded};_.lengthComputable&&(b.total=_.total),e.responseType==="text"&&a.responseText&&(b.partialText=a.responseText),o.next(b)}),m=this.maybePropagateTrace(_=>{let b={type:Lr.UploadProgress,loaded:_.loaded};_.lengthComputable&&(b.total=_.total),o.next(b)});return a.addEventListener("load",d),a.addEventListener("error",u),a.addEventListener("timeout",f),a.addEventListener("abort",u),e.reportProgress&&(a.addEventListener("progress",p),s!==null&&a.upload&&a.upload.addEventListener("progress",m)),a.send(s),o.next({type:Lr.Sent}),()=>{a.removeEventListener("error",u),a.removeEventListener("abort",u),a.removeEventListener("load",d),a.removeEventListener("timeout",f),e.reportProgress&&(a.removeEventListener("progress",p),s!==null&&a.upload&&a.upload.removeEventListener("progress",m)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||r)(V(Nr))};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Ab=new k("",{factory:()=>!0}),Mb="XSRF-TOKEN",Ib=new k("",{factory:()=>Mb}),Tb="X-XSRF-TOKEN",Rb=new k("",{factory:()=>Tb}),Fb=(()=>{class r{cookieName=g(Ib);doc=g(ee);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ia(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Ob=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:function(n){let i=null;return n?i=new(n||r):i=V(Fb),i},providedIn:"root"})}return r})();function kb(r,t){if(!g(Ab)||r.method==="GET"||r.method==="HEAD")return t(r);try{let i=g(Or).href,{origin:o}=new URL(i),{origin:a}=new URL(r.url,o);if(o!==a)return t(r)}catch{return t(r)}let e=g(Ob).getToken(),n=g(Rb);return e!=null&&!r.headers.has(n)&&(r=r.clone({headers:r.headers.set(n,e)})),t(r)}function Pb(r,t){return t(r)}function Nb(r,t,e){return(n,i)=>on(e,()=>t(n,o=>r(o,i)))}var Lb=new k("",{factory:()=>[kb]}),rm=new k(""),Bb=new k("",{factory:()=>!0});var Ub=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:function(n){let i=null;return n?i=new(n||r):i=V(Sb),i},providedIn:"root"})}return r})();var Vb=(()=>{class r{backend;injector;chain=null;pendingTasks=g(rf);contributeToStability=g(Bb);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=this.injector.get(om,null,{skipSelf:!0}),i=n!==null&&this.backend===n,o=this.injector.get(rm,[],i?{self:!0}:void 0),a=Array.from(new Set([...this.injector.get(Lb),...o]));this.chain=a.reduceRight((s,c)=>Nb(s,c,this.injector),Pb)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(mo(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||r)(V(Ub),V(mn))};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),om=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:function(n){let i=null;return n?i=new(n||r):i=V(Vb),i},providedIn:"root"})}return r})();function Cd(r,t){return{body:t,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,credentials:r.credentials,transferCache:r.transferCache,timeout:r.timeout,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,integrity:r.integrity,referrer:r.referrer,referrerPolicy:r.referrerPolicy}}var Ad=(()=>{class r{handler;constructor(e){this.handler=e}request(e,n,i={}){let o;if(e instanceof Eo)o=e;else{let c;i.headers instanceof Ji?c=i.headers:c=new Ji(i.headers);let l;i.params&&(i.params instanceof Si?l=i.params:l=new Si({fromObject:i.params})),o=new Eo(e,n,i.body!==void 0?i.body:null,{headers:c,context:i.context,params:l,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=U(o).pipe(wa(c=>this.handler.handle(c)));if(e instanceof Eo||i.observe==="events")return a;let s=a.pipe(It(c=>c instanceof Pa));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(ie(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new q(2806,!1);return c.body}));case"blob":return s.pipe(ie(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new q(2807,!1);return c.body}));case"text":return s.pipe(ie(c=>{if(c.body!==null&&typeof c.body!="string")throw new q(2808,!1);return c.body}));default:return s.pipe(ie(c=>c.body))}case"response":return s;default:throw new q(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Si().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,Cd(i,n))}post(e,n,i={}){return this.request("POST",e,Cd(i,n))}put(e,n,i={}){return this.request("PUT",e,Cd(i,n))}static \u0275fac=function(n){return new(n||r)(V(om))};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var am=(()=>{class r{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||r)(V(ee))};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Md=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:function(n){let i=null;return n?i=new(n||r):i=V($b),i},providedIn:"root"})}return r})(),$b=(()=>{class r extends Md{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case pn.NONE:return n;case pn.HTML:return _o(n,"HTML")?Tr(n):pf(this._doc,String(n)).toString();case pn.STYLE:return _o(n,"Style")?Tr(n):n;case pn.SCRIPT:if(_o(n,"Script"))return Tr(n);throw new q(5200,!1);case pn.URL:return _o(n,"URL")?Tr(n):mf(String(n));case pn.RESOURCE_URL:if(_o(n,"ResourceURL"))return Tr(n);throw new q(5201,!1);default:throw new q(5202,!1)}}bypassSecurityTrustHtml(e){return lf(e)}bypassSecurityTrustStyle(e){return df(e)}bypassSecurityTrustScript(e){return uf(e)}bypassSecurityTrustUrl(e){return hf(e)}bypassSecurityTrustResourceUrl(e){return ff(e)}static \u0275fac=function(n){return new(n||r)(V(ee))};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var j="primary",qa=Symbol("RouteTitle"),Od=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Ur(r){return new Od(r)}function Id(r,t,e){for(let n=0;n<r.length;n++){let i=r[n],o=t[n];if(i[0]===":")e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function pm(r,t,e){let n=e.path.split("/"),i=n.indexOf("**");if(i===-1){if(n.length>r.length||e.pathMatch==="full"&&(t.hasChildren()||n.length<r.length))return null;let c={},l=r.slice(0,n.length);return Id(n,l,c)?{consumed:l,posParams:c}:null}if(i!==n.lastIndexOf("**"))return null;let o=n.slice(0,i),a=n.slice(i+1);if(o.length+a.length>r.length||e.pathMatch==="full"&&t.hasChildren()&&e.path!=="**")return null;let s={};return!Id(o,r.slice(0,o.length),s)||!Id(a,r.slice(r.length-a.length),s)?null:{consumed:r,posParams:s}}function Dc(r){return new Promise((t,e)=>{r.pipe(Xi()).subscribe({next:n=>t(n),error:n=>e(n)})})}function Gb(r,t){if(r.length!==t.length)return!1;for(let e=0;e<r.length;++e)if(!ci(r[e],t[e]))return!1;return!0}function ci(r,t){let e=r?kd(r):void 0,n=t?kd(t):void 0;if(!e||!n||e.length!=n.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!gm(r[i],t[i]))return!1;return!0}function kd(r){return[...Object.keys(r),...Object.getOwnPropertySymbols(r)]}function gm(r,t){if(Array.isArray(r)&&Array.isArray(t)){if(r.length!==t.length)return!1;let e=[...r].sort(),n=[...t].sort();return e.every((i,o)=>n[o]===i)}else return r===t}function Wb(r){return r.length>0?r[r.length-1]:null}function jr(r){return od(r)?r:xa(r)?nn(Promise.resolve(r)):U(r)}function _m(r){return od(r)?Dc(r):Promise.resolve(r)}var qb={exact:ym,subset:wm},vm={exact:Yb,subset:Kb,ignored:()=>!0},bm={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Pd={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function cm(r,t,e){return qb[e.paths](r.root,t.root,e.matrixParams)&&vm[e.queryParams](r.queryParams,t.queryParams)&&!(e.fragment==="exact"&&r.fragment!==t.fragment)}function Yb(r,t){return ci(r,t)}function ym(r,t,e){if(!Br(r.segments,t.segments)||!bc(r.segments,t.segments,e)||r.numberOfChildren!==t.numberOfChildren)return!1;for(let n in t.children)if(!r.children[n]||!ym(r.children[n],t.children[n],e))return!1;return!0}function Kb(r,t){return Object.keys(t).length<=Object.keys(r).length&&Object.keys(t).every(e=>gm(r[e],t[e]))}function wm(r,t,e){return Dm(r,t,t.segments,e)}function Dm(r,t,e,n){if(r.segments.length>e.length){let i=r.segments.slice(0,e.length);return!(!Br(i,e)||t.hasChildren()||!bc(i,e,n))}else if(r.segments.length===e.length){if(!Br(r.segments,e)||!bc(r.segments,e,n))return!1;for(let i in t.children)if(!r.children[i]||!wm(r.children[i],t.children[i],n))return!1;return!0}else{let i=e.slice(0,r.segments.length),o=e.slice(r.segments.length);return!Br(r.segments,i)||!bc(r.segments,i,n)||!r.children[j]?!1:Dm(r.children[j],t,o,n)}}function bc(r,t,e){return t.every((n,i)=>vm[e](r[i].parameters,n.parameters))}var _n=class{root;queryParams;fragment;_queryParamMap;constructor(t=new fe([],{}),e={},n=null){this.root=t,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Ur(this.queryParams),this._queryParamMap}toString(){return Qb.serialize(this)}},fe=class{segments;children;parent=null;constructor(t,e){this.segments=t,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return yc(this)}},er=class{path;parameters;_parameterMap;constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=Ur(this.parameters),this._parameterMap}toString(){return xm(this)}};function Xb(r,t){return Br(r,t)&&r.every((e,n)=>ci(e.parameters,t[n].parameters))}function Br(r,t){return r.length!==t.length?!1:r.every((e,n)=>e.path===t[n].path)}function Zb(r,t){let e=[];return Object.entries(r.children).forEach(([n,i])=>{n===j&&(e=e.concat(t(i,n)))}),Object.entries(r.children).forEach(([n,i])=>{n!==j&&(e=e.concat(t(i,n)))}),e}var zr=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:()=>new tr,providedIn:"root"})}return r})(),tr=class{parse(t){let e=new Ld(t);return new _n(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${Na(t.root,!0)}`,n=ty(t.queryParams),i=typeof t.fragment=="string"?`#${Jb(t.fragment)}`:"";return`${e}${n}${i}`}},Qb=new tr;function yc(r){return r.segments.map(t=>xm(t)).join("/")}function Na(r,t){if(!r.hasChildren())return yc(r);if(t){let e=r.children[j]?Na(r.children[j],!1):"",n=[];return Object.entries(r.children).forEach(([i,o])=>{i!==j&&n.push(`${i}:${Na(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=Zb(r,(n,i)=>i===j?[Na(r.children[j],!1)]:[`${i}:${Na(n,!1)}`]);return Object.keys(r.children).length===1&&r.children[j]!=null?`${yc(r)}/${e[0]}`:`${yc(r)}/(${e.join("//")})`}}function Cm(r){return encodeURIComponent(r).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function _c(r){return Cm(r).replace(/%3B/gi,";")}function Jb(r){return encodeURI(r)}function Nd(r){return Cm(r).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function wc(r){return decodeURIComponent(r)}function lm(r){return wc(r.replace(/\+/g,"%20"))}function xm(r){return`${Nd(r.path)}${ey(r.parameters)}`}function ey(r){return Object.entries(r).map(([t,e])=>`;${Nd(t)}=${Nd(e)}`).join("")}function ty(r){let t=Object.entries(r).map(([e,n])=>Array.isArray(n)?n.map(i=>`${_c(e)}=${_c(i)}`).join("&"):`${_c(e)}=${_c(n)}`).filter(e=>e);return t.length?`?${t.join("&")}`:""}var ny=/^[^\/()?;#]+/;function Td(r){let t=r.match(ny);return t?t[0]:""}var iy=/^[^\/()?;=#]+/;function ry(r){let t=r.match(iy);return t?t[0]:""}var oy=/^[^=?&#]+/;function ay(r){let t=r.match(oy);return t?t[0]:""}var sy=/^[^&#]+/;function cy(r){let t=r.match(sy);return t?t[0]:""}var Ld=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new fe([],{}):new fe([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(t=0){if(t>50)throw new q(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,t));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,t)),(e.length>0||Object.keys(n).length>0)&&(i[j]=new fe(e,n)),i}parseSegment(){let t=Td(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new q(4009,!1);return this.capture(t),new er(wc(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let e=ry(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let i=Td(this.remaining);i&&(n=i,this.capture(n))}t[wc(e)]=wc(n)}parseQueryParam(t){let e=ay(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=cy(this.remaining);a&&(n=a,this.capture(n))}let i=lm(e),o=lm(n);if(t.hasOwnProperty(i)){let a=t[i];Array.isArray(a)||(a=[a],t[i]=a),a.push(o)}else t[i]=o}parseParens(t,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Td(this.remaining),o=this.remaining[i.length];if(o!=="/"&&o!==")"&&o!==";")throw new q(4010,!1);let a;i.indexOf(":")>-1?(a=i.slice(0,i.indexOf(":")),this.capture(a),this.capture(":")):t&&(a=j);let s=this.parseChildren(e+1);n[a??j]=Object.keys(s).length===1&&s[j]?s[j]:new fe([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new q(4011,!1)}};function Em(r){return r.segments.length>0?new fe([],{[j]:r}):r}function Sm(r){let t={};for(let[n,i]of Object.entries(r.children)){let o=Sm(i);if(n===j&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))t[a]=s;else(o.segments.length>0||o.hasChildren())&&(t[n]=o)}let e=new fe(r.segments,t);return ly(e)}function ly(r){if(r.numberOfChildren===1&&r.children[j]){let t=r.children[j];return new fe(r.segments.concat(t.segments),t.children)}return r}function nr(r){return r instanceof _n}function Am(r,t,e=null,n=null,i=new tr){let o=Mm(r);return Im(o,t,e,n,i)}function Mm(r){let t;function e(o){let a={};for(let c of o.children){let l=e(c);a[c.outlet]=l}let s=new fe(o.url,a);return o===r&&(t=s),s}let n=e(r.root),i=Em(n);return t??i}function Im(r,t,e,n,i){let o=r;for(;o.parent;)o=o.parent;if(t.length===0)return Rd(o,o,o,e,n,i);let a=dy(t);if(a.toRoot())return Rd(o,o,new fe([],{}),e,n,i);let s=uy(a,o,r),c=s.processChildren?Ba(s.segmentGroup,s.index,a.commands):Rm(s.segmentGroup,s.index,a.commands);return Rd(o,s.segmentGroup,c,e,n,i)}function Cc(r){return typeof r=="object"&&r!=null&&!r.outlets&&!r.segmentPath}function Va(r){return typeof r=="object"&&r!=null&&r.outlets}function dm(r,t,e){r||="\u0275";let n=new _n;return n.queryParams={[r]:t},e.parse(e.serialize(n)).queryParams[r]}function Rd(r,t,e,n,i,o){let a={};for(let[l,d]of Object.entries(n??{}))a[l]=Array.isArray(d)?d.map(u=>dm(l,u,o)):dm(l,d,o);let s;r===t?s=e:s=Tm(r,t,e);let c=Em(Sm(s));return new _n(c,a,i)}function Tm(r,t,e){let n={};return Object.entries(r.children).forEach(([i,o])=>{o===t?n[i]=e:n[i]=Tm(o,t,e)}),new fe(r.segments,n)}var xc=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&Cc(n[0]))throw new q(4003,!1);let i=n.find(Va);if(i&&i!==Wb(n))throw new q(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function dy(r){if(typeof r[0]=="string"&&r.length===1&&r[0]==="/")return new xc(!0,0,r);let t=0,e=!1,n=r.reduce((i,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,l])=>{s[c]=typeof l=="string"?l.split("/"):l}),[...i,{outlets:s}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?t++:s!=""&&i.push(s))}),i):[...i,o]},[]);return new xc(e,t,n)}var Mo=class{segmentGroup;processChildren;index;constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}};function uy(r,t,e){if(r.isAbsolute)return new Mo(t,!0,0);if(!e)return new Mo(t,!1,NaN);if(e.parent===null)return new Mo(e,!0,0);let n=Cc(r.commands[0])?0:1,i=e.segments.length-1+n;return hy(e,i,r.numberOfDoubleDots)}function hy(r,t,e){let n=r,i=t,o=e;for(;o>i;){if(o-=i,n=n.parent,!n)throw new q(4005,!1);i=n.segments.length}return new Mo(n,!1,i-o)}function fy(r){return Va(r[0])?r[0].outlets:{[j]:r}}function Rm(r,t,e){if(r??=new fe([],{}),r.segments.length===0&&r.hasChildren())return Ba(r,t,e);let n=my(r,t,e),i=e.slice(n.commandIndex);if(n.match&&n.pathIndex<r.segments.length){let o=new fe(r.segments.slice(0,n.pathIndex),{});return o.children[j]=new fe(r.segments.slice(n.pathIndex),r.children),Ba(o,0,i)}else return n.match&&i.length===0?new fe(r.segments,{}):n.match&&!r.hasChildren()?Bd(r,t,e):n.match?Ba(r,0,i):Bd(r,t,e)}function Ba(r,t,e){if(e.length===0)return new fe(r.segments,{});{let n=fy(e),i={};if(Object.keys(n).some(o=>o!==j)&&r.children[j]&&r.numberOfChildren===1&&r.children[j].segments.length===0){let o=Ba(r.children[j],t,e);return new fe(r.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(i[o]=Rm(r.children[o],t,a))}),Object.entries(r.children).forEach(([o,a])=>{n[o]===void 0&&(i[o]=a)}),new fe(r.segments,i)}}function my(r,t,e){let n=0,i=t,o={match:!1,pathIndex:0,commandIndex:0};for(;i<r.segments.length;){if(n>=e.length)return o;let a=r.segments[i],s=e[n];if(Va(s))break;let c=`${s}`,l=n<e.length-1?e[n+1]:null;if(i>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!hm(c,l,a))return o;n+=2}else{if(!hm(c,{},a))return o;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function Bd(r,t,e){let n=r.segments.slice(0,t),i=0;for(;i<e.length;){let o=e[i];if(Va(o)){let c=py(o.outlets);return new fe(n,c)}if(i===0&&Cc(e[0])){let c=r.segments[t];n.push(new er(c.path,um(e[0]))),i++;continue}let a=Va(o)?o.outlets[j]:`${o}`,s=i<e.length-1?e[i+1]:null;a&&s&&Cc(s)?(n.push(new er(a,um(s))),i+=2):(n.push(new er(a,{})),i++)}return new fe(n,{})}function py(r){let t={};return Object.entries(r).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(t[e]=Bd(new fe([],{}),0,n))}),t}function um(r){let t={};return Object.entries(r).forEach(([e,n])=>t[e]=`${n}`),t}function hm(r,t,e){return r==e.path&&ci(t,e.parameters)}var Io="imperative",it=(function(r){return r[r.NavigationStart=0]="NavigationStart",r[r.NavigationEnd=1]="NavigationEnd",r[r.NavigationCancel=2]="NavigationCancel",r[r.NavigationError=3]="NavigationError",r[r.RoutesRecognized=4]="RoutesRecognized",r[r.ResolveStart=5]="ResolveStart",r[r.ResolveEnd=6]="ResolveEnd",r[r.GuardsCheckStart=7]="GuardsCheckStart",r[r.GuardsCheckEnd=8]="GuardsCheckEnd",r[r.RouteConfigLoadStart=9]="RouteConfigLoadStart",r[r.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",r[r.ChildActivationStart=11]="ChildActivationStart",r[r.ChildActivationEnd=12]="ChildActivationEnd",r[r.ActivationStart=13]="ActivationStart",r[r.ActivationEnd=14]="ActivationEnd",r[r.Scroll=15]="Scroll",r[r.NavigationSkipped=16]="NavigationSkipped",r})(it||{}),vn=class{id;url;constructor(t,e){this.id=t,this.url=e}},li=class extends vn{type=it.NavigationStart;navigationTrigger;restoredState;constructor(t,e,n="imperative",i=null){super(t,e),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Zn=class extends vn{urlAfterRedirects;type=it.NavigationEnd;constructor(t,e,n){super(t,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Rt=(function(r){return r[r.Redirect=0]="Redirect",r[r.SupersededByNewNavigation=1]="SupersededByNewNavigation",r[r.NoDataFromResolver=2]="NoDataFromResolver",r[r.GuardRejected=3]="GuardRejected",r[r.Aborted=4]="Aborted",r})(Rt||{}),Ro=(function(r){return r[r.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",r[r.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",r})(Ro||{}),Pn=class extends vn{reason;code;type=it.NavigationCancel;constructor(t,e,n,i){super(t,e),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Fm(r){return r instanceof Pn&&(r.code===Rt.Redirect||r.code===Rt.SupersededByNewNavigation)}var di=class extends vn{reason;code;type=it.NavigationSkipped;constructor(t,e,n,i){super(t,e),this.reason=n,this.code=i}},Vr=class extends vn{error;target;type=it.NavigationError;constructor(t,e,n,i){super(t,e),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ja=class extends vn{urlAfterRedirects;state;type=it.RoutesRecognized;constructor(t,e,n,i){super(t,e),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ec=class extends vn{urlAfterRedirects;state;type=it.GuardsCheckStart;constructor(t,e,n,i){super(t,e),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Sc=class extends vn{urlAfterRedirects;state;shouldActivate;type=it.GuardsCheckEnd;constructor(t,e,n,i,o){super(t,e),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ac=class extends vn{urlAfterRedirects;state;type=it.ResolveStart;constructor(t,e,n,i){super(t,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mc=class extends vn{urlAfterRedirects;state;type=it.ResolveEnd;constructor(t,e,n,i){super(t,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ic=class{route;type=it.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Tc=class{route;type=it.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Rc=class{snapshot;type=it.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fc=class{snapshot;type=it.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Oc=class{snapshot;type=it.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},kc=class{snapshot;type=it.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fo=class{routerEvent;position;anchor;scrollBehavior;type=it.Scroll;constructor(t,e,n,i){this.routerEvent=t,this.position=e,this.anchor=n,this.scrollBehavior=i}toString(){let t=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${t}')`}},Oo=class{},za=class{},ko=class{url;navigationBehaviorOptions;constructor(t,e){this.url=t,this.navigationBehaviorOptions=e}};function gy(r){return!(r instanceof Oo)&&!(r instanceof ko)&&!(r instanceof za)}var Pc=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new Bo(this.rootInjector)}},Bo=(()=>{class r{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let i=this.getOrCreateContext(e);i.outlet=n,this.contexts.set(e,i)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Pc(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||r)(V(mn))};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Nc=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=Ud(t,this._root);return e?e.children.map(n=>n.value):[]}firstChild(t){let e=Ud(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=Vd(t,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==t)}pathFromRoot(t){return Vd(t,this._root).map(e=>e.value)}};function Ud(r,t){if(r===t.value)return t;for(let e of t.children){let n=Ud(r,e);if(n)return n}return null}function Vd(r,t){if(r===t.value)return[t];for(let e of t.children){let n=Vd(r,e);if(n.length)return n.unshift(t),n}return[]}var gn=class{value;children;constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ao(r){let t={};return r&&r.children.forEach(e=>t[e.value.outlet]=e),t}var Ha=class extends Nc{snapshot;constructor(t,e){super(t),this.snapshot=e,Kd(this,t)}toString(){return this.snapshot.toString()}};function Om(r,t){let e=_y(r,t),n=new tn([new er("",{})]),i=new tn({}),o=new tn({}),a=new tn({}),s=new tn(""),c=new Mi(n,i,a,s,o,j,r,e.root);return c.snapshot=e.root,new Ha(new gn(c,[]),e)}function _y(r,t){let e={},n={},i={},a=new Po([],e,i,"",n,j,r,null,{},t);return new $a("",new gn(a,[]))}var Mi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,e,n,i,o,a,s,c){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(ie(l=>l[qa]))??U(void 0),this.url=t,this.params=e,this.queryParams=n,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ie(t=>Ur(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ie(t=>Ur(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Yd(r,t,e="emptyOnly"){let n,{routeConfig:i}=r;return t!==null&&(e==="always"||i?.path===""||!t.component&&!t.routeConfig?.loadComponent)?n={params:M(M({},t.params),r.params),data:M(M({},t.data),r.data),resolve:M(M(M(M({},r.data),t.data),i?.data),r._resolvedData)}:n={params:M({},r.params),data:M({},r.data),resolve:M(M({},r.data),r._resolvedData??{})},i&&Pm(i)&&(n.resolve[qa]=i.title),n}var Po=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[qa]}constructor(t,e,n,i,o,a,s,c,l,d){this.url=t,this.params=e,this.queryParams=n,this.fragment=i,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ur(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ur(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${e}')`}},$a=class extends Nc{url;constructor(t,e){super(e),this.url=t,Kd(this,e)}toString(){return km(this._root)}};function Kd(r,t){t.value._routerState=r,t.children.forEach(e=>Kd(r,e))}function km(r){let t=r.children.length>0?` { ${r.children.map(km).join(", ")} } `:"";return`${r.value}${t}`}function Fd(r){if(r.snapshot){let t=r.snapshot,e=r._futureSnapshot;r.snapshot=e,ci(t.queryParams,e.queryParams)||r.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&r.fragmentSubject.next(e.fragment),ci(t.params,e.params)||r.paramsSubject.next(e.params),Gb(t.url,e.url)||r.urlSubject.next(e.url),ci(t.data,e.data)||r.dataSubject.next(e.data)}else r.snapshot=r._futureSnapshot,r.dataSubject.next(r._futureSnapshot.data)}function jd(r,t){let e=ci(r.params,t.params)&&Xb(r.url,t.url),n=!r.parent!=!t.parent;return e&&!n&&(!r.parent||jd(r.parent,t.parent))}function Pm(r){return typeof r.title=="string"||r.title===null}var Nm=new k(""),Xd=(()=>{class r{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=j;activateEvents=new lt;deactivateEvents=new lt;attachEvents=new lt;detachEvents=new lt;routerOutletData=Tf();parentContexts=g(Bo);location=g(ac);changeDetector=g(Kn);inputBinder=g(jc,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:i}=e.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new q(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new q(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new q(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new q(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new zd(e,s,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:c,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||r)};static \u0275dir=K({type:r,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[In]})}return r})(),zd=class{route;childContexts;parent;outletData;constructor(t,e,n,i){this.route=t,this.childContexts=e,this.parent=n,this.outletData=i}get(t,e){return t===Mi?this.route:t===Bo?this.childContexts:t===Nm?this.outletData:this.parent.get(t,e)}},jc=new k("");var Zd=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Ze({type:r,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,i){n&1&&si(0,"router-outlet")},dependencies:[Xd],encapsulation:2})}return r})();function Qd(r){let t=r.children&&r.children.map(Qd),e=t?ge(M({},r),{children:t}):M({},r);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==j&&(e.component=Zd),e}function vy(r,t,e){let n=Ga(r,t._root,e?e._root:void 0);return new Ha(n,t)}function Ga(r,t,e){if(e&&r.shouldReuseRoute(t.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=t.value;let i=by(r,t,e);return new gn(n,i)}else{if(r.shouldAttach(t.value)){let o=r.retrieve(t.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=t.value,a.children=t.children.map(s=>Ga(r,s)),a}}let n=yy(t.value),i=t.children.map(o=>Ga(r,o));return new gn(n,i)}}function by(r,t,e){return t.children.map(n=>{for(let i of e.children)if(r.shouldReuseRoute(n.value,i.value.snapshot))return Ga(r,n,i);return Ga(r,n)})}function yy(r){return new Mi(new tn(r.url),new tn(r.params),new tn(r.queryParams),new tn(r.fragment),new tn(r.data),r.outlet,r.component,r)}var No=class{redirectTo;navigationBehaviorOptions;constructor(t,e){this.redirectTo=t,this.navigationBehaviorOptions=e}},Lm="ngNavigationCancelingError";function Lc(r,t){let{redirectTo:e,navigationBehaviorOptions:n}=nr(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,i=Bm(!1,Rt.Redirect);return i.url=e,i.navigationBehaviorOptions=n,i}function Bm(r,t){let e=new Error(`NavigationCancelingError: ${r||""}`);return e[Lm]=!0,e.cancellationCode=t,e}function wy(r){return Um(r)&&nr(r.url)}function Um(r){return!!r&&r[Lm]}var Hd=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,e,n,i,o){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=o}activate(t){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),Fd(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){let i=Ao(e);t.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],n),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(t,e,n){let i=t.value,o=e?e.value:null;if(i===o)if(i.component){let a=n.getContext(i.outlet);a&&this.deactivateChildRoutes(t,e,a.children)}else this.deactivateChildRoutes(t,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let n=e.getContext(t.value.outlet),i=n&&t.value.component?n.children:e,o=Ao(t);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:a,route:t,contexts:s})}}deactivateRouteAndOutlet(t,e){let n=e.getContext(t.value.outlet),i=n&&t.value.component?n.children:e,o=Ao(t);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(t,e,n){let i=Ao(e);t.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],n),this.forwardEvent(new kc(o.value.snapshot))}),t.children.length&&this.forwardEvent(new Fc(t.value.snapshot))}activateRoutes(t,e,n){let i=t.value,o=e?e.value:null;if(Fd(i),i===o)if(i.component){let a=n.getOrCreateContext(i.outlet);this.activateChildRoutes(t,e,a.children)}else this.activateChildRoutes(t,e,n);else if(i.component){let a=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let s=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Fd(s.route.value),this.activateChildRoutes(t,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(t,null,a.children)}else this.activateChildRoutes(t,null,n)}},Bc=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},To=class{component;route;constructor(t,e){this.component=t,this.route=e}};function Dy(r,t,e){let n=r._root,i=t?t._root:null;return La(n,i,e,[n.value])}function Cy(r){let t=r.routeConfig?r.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:r,guards:t}}function Uo(r,t){let e=Symbol(),n=t.get(r,e);return n===e?typeof r=="function"&&!ef(r)?r:t.get(r):n}function La(r,t,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=Ao(t);return r.children.forEach(a=>{xy(a,o[a.value.outlet],e,n.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Ua(s,e.getContext(a),i)),i}function xy(r,t,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=r.value,a=t?t.value:null,s=e?e.getContext(r.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=Ey(a,o,o.routeConfig.runGuardsAndResolvers);c?i.canActivateChecks.push(new Bc(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?La(r,t,s?s.children:null,n,i):La(r,t,e,n,i),c&&s&&s.outlet&&s.outlet.isActivated&&i.canDeactivateChecks.push(new To(s.outlet.component,a))}else a&&Ua(t,s,i),i.canActivateChecks.push(new Bc(n)),o.component?La(r,null,s?s.children:null,n,i):La(r,null,e,n,i);return i}function Ey(r,t,e){if(typeof e=="function")return on(t._environmentInjector,()=>e(r,t));switch(e){case"pathParamsChange":return!Br(r.url,t.url);case"pathParamsOrQueryParamsChange":return!Br(r.url,t.url)||!ci(r.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!jd(r,t)||!ci(r.queryParams,t.queryParams);default:return!jd(r,t)}}function Ua(r,t,e){let n=Ao(r),i=r.value;Object.entries(n).forEach(([o,a])=>{i.component?t?Ua(a,t.children.getContext(o),e):Ua(a,null,e):Ua(a,t,e)}),i.component?t&&t.outlet&&t.outlet.isActivated?e.canDeactivateChecks.push(new To(t.outlet.component,i)):e.canDeactivateChecks.push(new To(null,i)):e.canDeactivateChecks.push(new To(null,i))}function Ya(r){return typeof r=="function"}function Sy(r){return typeof r=="boolean"}function Ay(r){return r&&Ya(r.canLoad)}function My(r){return r&&Ya(r.canActivate)}function Iy(r){return r&&Ya(r.canActivateChild)}function Ty(r){return r&&Ya(r.canDeactivate)}function Ry(r){return r&&Ya(r.canMatch)}function Vm(r){return r instanceof Kh||r?.name==="EmptyError"}var vc=Symbol("INITIAL_VALUE");function Lo(){return rn(r=>Xs(r.map(t=>t.pipe(ri(1),oi(vc)))).pipe(ie(t=>{for(let e of t)if(e!==!0){if(e===vc)return vc;if(e===!1||Fy(e))return e}return!0}),It(t=>t!==vc),ri(1)))}function Fy(r){return nr(r)||r instanceof No}function jm(r){return r.aborted?U(void 0).pipe(ri(1)):new Yi(t=>{let e=()=>{t.next(),t.complete()};return r.addEventListener("abort",e),()=>r.removeEventListener("abort",e)})}function zm(r){return gt(jm(r))}function Oy(r){return Ki(t=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:o}}=t;return o.length===0&&i.length===0?U(ge(M({},t),{guardsResult:!0})):ky(o,e,n).pipe(Ki(a=>a&&Sy(a)?Py(e,i,r):U(a)),ie(a=>ge(M({},t),{guardsResult:a})))})}function ky(r,t,e){return nn(r).pipe(Ki(n=>Vy(n.component,n.route,e,t)),Xi(n=>n!==!0,!0))}function Py(r,t,e){return nn(t).pipe(wa(n=>Zs(Ly(n.route.parent,e),Ny(n.route,e),Uy(r,n.path),By(r,n.route))),Xi(n=>n!==!0,!0))}function Ny(r,t){return r!==null&&t&&t(new Oc(r)),U(!0)}function Ly(r,t){return r!==null&&t&&t(new Rc(r)),U(!0)}function By(r,t){let e=t.routeConfig?t.routeConfig.canActivate:null;if(!e||e.length===0)return U(!0);let n=e.map(i=>Qs(()=>{let o=t._environmentInjector,a=Uo(i,o),s=My(a)?a.canActivate(t,r):on(o,()=>a(t,r));return jr(s).pipe(Xi())}));return U(n).pipe(Lo())}function Uy(r,t){let e=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(o=>Cy(o)).filter(o=>o!==null).map(o=>Qs(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,l=Uo(s,c),d=Iy(l)?l.canActivateChild(e,r):on(c,()=>l(e,r));return jr(d).pipe(Xi())});return U(a).pipe(Lo())}));return U(i).pipe(Lo())}function Vy(r,t,e,n){let i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return U(!0);let o=i.map(a=>{let s=t._environmentInjector,c=Uo(a,s),l=Ty(c)?c.canDeactivate(r,t,e,n):on(s,()=>c(r,t,e,n));return jr(l).pipe(Xi())});return U(o).pipe(Lo())}function jy(r,t,e,n,i){let o=t.canLoad;if(o===void 0||o.length===0)return U(!0);let a=o.map(s=>{let c=Uo(s,r),l=Ay(c)?c.canLoad(t,e):on(r,()=>c(t,e)),d=jr(l);return i?d.pipe(zm(i)):d});return U(a).pipe(Lo(),Hm(n))}function Hm(r){return Yh(_t(t=>{if(typeof t!="boolean")throw Lc(r,t)}),ie(t=>t===!0))}function zy(r,t,e,n,i,o){let a=t.canMatch;if(!a||a.length===0)return U(!0);let s=a.map(c=>{let l=Uo(c,r),d=Ry(l)?l.canMatch(t,e,i):on(r,()=>l(t,e,i));return jr(d).pipe(zm(o))});return U(s).pipe(Lo(),Hm(n))}var Ai=class r extends Error{segmentGroup;constructor(t){super(),this.segmentGroup=t||null,Object.setPrototypeOf(this,r.prototype)}},Wa=class r extends Error{urlTree;constructor(t){super(),this.urlTree=t,Object.setPrototypeOf(this,r.prototype)}};function Hy(r){throw new q(4e3,!1)}function $y(r){throw Bm(!1,Rt.GuardRejected)}var $d=class{urlSerializer;urlTree;constructor(t,e){this.urlSerializer=t,this.urlTree=e}async lineralizeSegments(t,e){let n=[],i=e.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return n;if(i.numberOfChildren>1||!i.children[j])throw Hy(`${t.redirectTo}`);i=i.children[j]}}async applyRedirectCommands(t,e,n,i,o){let a=await Gy(e,i,o);if(a instanceof _n)throw new Wa(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),t,n);if(a[0]==="/")throw new Wa(s);return s}applyRedirectCreateUrlTree(t,e,n,i){let o=this.createSegmentGroup(t,e.root,n,i);return new _n(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let n={};return Object.entries(t).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);n[i]=e[s]}else n[i]=o}),n}createSegmentGroup(t,e,n,i){let o=this.createSegments(t,e.segments,n,i),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(t,c,n,i)}),new fe(o,a)}createSegments(t,e,n,i){return e.map(o=>o.path[0]===":"?this.findPosParam(t,o,i):this.findOrReturn(o,n))}findPosParam(t,e,n){let i=n[e.path.substring(1)];if(!i)throw new q(4001,!1);return i}findOrReturn(t,e){let n=0;for(let i of e){if(i.path===t.path)return e.splice(n),i;n++}return t}};function Gy(r,t,e){if(typeof r=="string")return Promise.resolve(r);let n=r;return Dc(jr(on(e,()=>n(t))))}function Wy(r,t){return r.providers&&!r._injector&&(r._injector=cd(r.providers,t,`Route: ${r.path}`)),r._injector??t}function Xn(r){return r.outlet||j}function qy(r,t){let e=r.filter(n=>Xn(n)===t);return e.push(...r.filter(n=>Xn(n)!==t)),e}var Gd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function $m(r){return{routeConfig:r.routeConfig,url:r.url,params:r.params,queryParams:r.queryParams,fragment:r.fragment,data:r.data,outlet:r.outlet,title:r.title,paramMap:r.paramMap,queryParamMap:r.queryParamMap}}function Yy(r,t,e,n,i,o,a){let s=Gm(r,t,e);if(!s.matched)return U(s);let c=$m(o(s));return n=Wy(t,n),zy(n,t,e,i,c,a).pipe(ie(l=>l===!0?s:M({},Gd)))}function Gm(r,t,e){if(t.path==="")return t.pathMatch==="full"&&(r.hasChildren()||e.length>0)?M({},Gd):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(t.matcher||pm)(e,r,t);if(!i)return M({},Gd);let o={};Object.entries(i.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=i.consumed.length>0?M(M({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function fm(r,t,e,n,i){return e.length>0&&Zy(r,e,n,i)?{segmentGroup:new fe(t,Xy(n,new fe(e,r.children))),slicedSegments:[]}:e.length===0&&Qy(r,e,n)?{segmentGroup:new fe(r.segments,Ky(r,e,n,r.children)),slicedSegments:e}:{segmentGroup:new fe(r.segments,r.children),slicedSegments:e}}function Ky(r,t,e,n){let i={};for(let o of e)if(zc(r,t,o)&&!n[Xn(o)]){let a=new fe([],{});i[Xn(o)]=a}return M(M({},n),i)}function Xy(r,t){let e={};e[j]=t;for(let n of r)if(n.path===""&&Xn(n)!==j){let i=new fe([],{});e[Xn(n)]=i}return e}function Zy(r,t,e,n){return e.some(i=>!zc(r,t,i)||!(Xn(i)!==j)?!1:!(n!==void 0&&Xn(i)===n))}function Qy(r,t,e){return e.some(n=>zc(r,t,n))}function zc(r,t,e){return(r.hasChildren()||t.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Jy(r,t,e){return t.length===0&&!r.children[e]}var Wd=class{};async function e0(r,t,e,n,i,o,a="emptyOnly",s){return new qd(r,t,e,n,i,a,o,s).recognize()}var t0=31,qd=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,e,n,i,o,a,s,c){this.injector=t,this.configLoader=e,this.rootComponentType=n,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new $d(this.urlSerializer,this.urlTree)}noMatchError(t){return new q(4002,`'${t.segmentGroup}'`)}async recognize(){let t=fm(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(t),i=new gn(n,e),o=new $a("",i),a=Am(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(t){let e=new Po([],Object.freeze({}),Object.freeze(M({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),j,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,t,j,e),rootSnapshot:e}}catch(n){if(n instanceof Wa)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Ai?this.noMatchError(n):n}}async processSegmentGroup(t,e,n,i,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(t,e,n,o);let a=await this.processSegment(t,e,n,n.segments,i,!0,o);return a instanceof gn?[a]:[]}async processChildren(t,e,n,i){let o=[];for(let c of Object.keys(n.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let l=n.children[c],d=qy(e,c),u=await this.processSegmentGroup(t,d,l,c,i);a.push(...u)}let s=Wm(a);return n0(s),s}async processSegment(t,e,n,i,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??t,e,c,n,i,o,a,s)}catch(l){if(l instanceof Ai||Vm(l))continue;throw l}if(Jy(n,i,o))return new Wd;throw new Ai(n)}async processSegmentAgainstRoute(t,e,n,i,o,a,s,c){if(Xn(n)!==a&&(a===j||!zc(i,o,n)))throw new Ai(i);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(t,i,n,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(t,i,e,n,o,a,c);throw new Ai(i)}async expandSegmentAgainstRouteUsingRedirect(t,e,n,i,o,a,s){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:u,remainingSegments:f}=Gm(e,i,o);if(!c)throw new Ai(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>t0&&(this.allowRedirects=!1));let h=this.createSnapshot(t,i,o,l,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let p=await this.applyRedirects.applyRedirectCommands(d,i.redirectTo,u,$m(h),t),m=await this.applyRedirects.lineralizeSegments(i,p);return this.processSegment(t,n,e,m.concat(f),a,!1,s)}createSnapshot(t,e,n,i,o){let a=new Po(n,i,Object.freeze(M({},this.urlTree.queryParams)),this.urlTree.fragment,r0(e),Xn(e),e.component??e._loadedComponent??null,e,o0(e),t),s=Yd(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(t,e,n,i,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=x=>this.createSnapshot(t,n,x.consumedSegments,x.parameters,a),c=await Dc(Yy(e,n,i,t,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!c?.matched)throw new Ai(e);t=n._injector??t;let{routes:l}=await this.getChildConfig(t,n,i),d=n._loadedInjector??t,{parameters:u,consumedSegments:f,remainingSegments:h}=c,p=this.createSnapshot(t,n,f,u,a),{segmentGroup:m,slicedSegments:_}=fm(e,f,h,l,o);if(_.length===0&&m.hasChildren()){let x=await this.processChildren(d,l,m,p);return new gn(p,x)}if(l.length===0&&_.length===0)return new gn(p,[]);let b=Xn(n)===o,w=await this.processSegment(d,l,m,_,b?j:o,!0,p);return new gn(p,w instanceof gn?[w]:[])}async getChildConfig(t,e,n){if(e.children)return{routes:e.children,injector:t};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(t).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Dc(jy(t,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(t,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw $y(e)}return{routes:[],injector:t}}};function n0(r){r.sort((t,e)=>t.value.outlet===j?-1:e.value.outlet===j?1:t.value.outlet.localeCompare(e.value.outlet))}function i0(r){let t=r.value.routeConfig;return t&&t.path===""}function Wm(r){let t=[],e=new Set;for(let n of r){if(!i0(n)){t.push(n);continue}let i=t.find(o=>n.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...n.children),e.add(i)):t.push(n)}for(let n of e){let i=Wm(n.children);t.push(new gn(n.value,i))}return t.filter(n=>!e.has(n))}function r0(r){return r.data||{}}function o0(r){return r.resolve||{}}function a0(r,t,e,n,i,o,a){return Ki(async s=>{let{state:c,tree:l}=await e0(r,t,e,n,s.extractedUrl,i,o,a);return ge(M({},s),{targetSnapshot:c,urlAfterRedirects:l})})}function s0(r){return Ki(t=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=t;if(!n.length)return U(t);let i=new Set(n.map(s=>s.route)),o=new Set;for(let s of i)if(!o.has(s))for(let c of qm(s))o.add(c);let a=0;return nn(o).pipe(wa(s=>i.has(s)?c0(s,e,r):(s.data=Yd(s,s.parent,r).resolve,U(void 0))),_t(()=>a++),ad(1),Ki(s=>a===o.size?U(t):Mn))})}function qm(r){let t=r.children.map(e=>qm(e)).flat();return[r,...t]}function c0(r,t,e){let n=r.routeConfig,i=r._resolve;return n?.title!==void 0&&!Pm(n)&&(i[qa]=n.title),Qs(()=>(r.data=Yd(r,r.parent,e).resolve,l0(i,r,t).pipe(ie(o=>(r._resolvedData=o,r.data=M(M({},r.data),o),null)))))}function l0(r,t,e){let n=kd(r);if(n.length===0)return U({});let i={};return nn(n).pipe(Ki(o=>d0(r[o],t,e).pipe(Xi(),_t(a=>{if(a instanceof No)throw Lc(new tr,a);i[o]=a}))),ad(1),ie(()=>i),ya(o=>Vm(o)?Mn:Ks(o)))}function d0(r,t,e){let n=t._environmentInjector,i=Uo(r,n),o=i.resolve?i.resolve(t,e):on(n,()=>i(t,e));return jr(o)}function mm(r){return rn(t=>{let e=r(t);return e?nn(e).pipe(ie(()=>t)):U(t)})}var Jd=(()=>{class r{buildTitle(e){let n,i=e.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(o=>o.outlet===j);return n}getResolvedTitleForRoute(e){return e.data[qa]}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:()=>g(Ym),providedIn:"root"})}return r})(),Ym=(()=>{class r extends Jd{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||r)(V(am))};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Vo=new k("",{factory:()=>({})}),Ka=new k(""),Km=(()=>{class r{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=g(Af);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let o=await _m(on(e,()=>n.loadComponent())),a=await Qm(Zm(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,i),i}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let o=await Xm(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,i),i}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();async function Xm(r,t,e,n){let i=await _m(on(e,()=>r.loadChildren())),o=await Qm(Zm(i)),a;o instanceof bf||Array.isArray(o)?a=o:a=await t.compileModuleAsync(o),n&&n(r);let s,c,l=!1,d;return Array.isArray(a)?(c=a,l=!0):(s=a.create(e).injector,d=a,c=s.get(Ka,[],{optional:!0,self:!0}).flat()),{routes:c.map(Qd),injector:s,factory:d}}function u0(r){return r&&typeof r=="object"&&"default"in r}function Zm(r){return u0(r)?r.default:r}async function Qm(r){return r}var Hc=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:()=>g(h0),providedIn:"root"})}return r})(),h0=(()=>{class r{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Jm=new k("");var f0=()=>{},ep=new k(""),eu=(()=>{class r{currentNavigation=de(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=de(null);events=new he;transitionAbortWithErrorSubject=new he;configLoader=g(Km);environmentInjector=g(mn);destroyRef=g(po);urlSerializer=g(zr);rootContexts=g(Bo);location=g(Pr);inputBindingEnabled=g(jc,{optional:!0})!==null;titleStrategy=g(Jd);options=g(Vo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=g(Hc);createViewTransition=g(Jm,{optional:!0});navigationErrorHandler=g(ep,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>U(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Ic(i)),n=i=>this.events.next(new Tc(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;me(()=>{this.transitions?.next(ge(M({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new tn(null),this.transitions.pipe(It(n=>n!==null),rn(n=>{let i=!1,o=new AbortController,a=()=>!i&&this.currentTransition?.id===n.id;return U(n).pipe(rn(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",Rt.SupersededByNewNavigation),Mn;this.currentTransition=n;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?ge(M({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&d!=="reload")return this.events.next(new di(s.id,this.urlSerializer.serialize(s.rawUrl),"",Ro.IgnoredSameUrlNavigation)),s.resolve(!1),Mn;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return U(s).pipe(rn(u=>(this.events.next(new li(u.id,this.urlSerializer.serialize(u.extractedUrl),u.source,u.restoredState)),u.id!==this.navigationId?Mn:Promise.resolve(u))),a0(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),_t(u=>{n.targetSnapshot=u.targetSnapshot,n.urlAfterRedirects=u.urlAfterRedirects,this.currentNavigation.update(f=>(f.finalUrl=u.urlAfterRedirects,f)),this.events.next(new za)}),rn(u=>nn(n.routesRecognizeHandler.deferredHandle??U(void 0)).pipe(ie(()=>u))),_t(()=>{let u=new ja(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(u)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:u,extractedUrl:f,source:h,restoredState:p,extras:m}=s,_=new li(u,this.urlSerializer.serialize(f),h,p);this.events.next(_);let b=Om(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=ge(M({},s),{targetSnapshot:b,urlAfterRedirects:f,extras:ge(M({},m),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(w=>(w.finalUrl=f,w)),U(n)}else return this.events.next(new di(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Ro.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Mn}),ie(s=>{let c=new Ec(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=n=ge(M({},s),{guards:Dy(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),Oy(s=>this.events.next(s)),rn(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Lc(this.urlSerializer,s.guardsResult);let c=new Sc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return Mn;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Rt.GuardRejected),Mn;if(s.guards.canActivateChecks.length===0)return U(s);let l=new Ac(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!a())return Mn;let d=!1;return U(s).pipe(s0(this.paramsInheritanceStrategy),_t({next:()=>{d=!0;let u=new Mc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(u)},complete:()=>{d||this.cancelNavigationTransition(s,"",Rt.NoDataFromResolver)}}))}),mm(s=>{let c=d=>{let u=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let f=d._environmentInjector;u.push(this.configLoader.loadComponent(f,d.routeConfig).then(h=>{d.component=h}))}for(let f of d.children)u.push(...c(f));return u},l=c(s.targetSnapshot.root);return l.length===0?U(s):nn(Promise.all(l).then(()=>s))}),mm(()=>this.afterPreactivation()),rn(()=>{let{currentSnapshot:s,targetSnapshot:c}=n,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?nn(l).pipe(ie(()=>n)):U(n)}),ri(1),rn(s=>{let c=vy(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=ge(M({},s),{targetRouterState:c}),this.currentNavigation.update(d=>(d.targetRouterState=c,d)),this.events.next(new Oo);let l=n.beforeActivateHandler.deferredHandle;return l?nn(l.then(()=>s)):U(s)}),_t(s=>{new Hd(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(i=!0,this.currentNavigation.update(c=>(c.abort=f0,c)),this.lastSuccessfulNavigation.set(me(this.currentNavigation)),this.events.next(new Zn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),gt(jm(o.signal).pipe(It(()=>!i&&!n.targetRouterState),_t(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",Rt.Aborted)}))),_t({complete:()=>{i=!0}}),gt(this.transitionAbortWithErrorSubject.pipe(_t(s=>{throw s}))),mo(()=>{o.abort(),i||this.cancelNavigationTransition(n,"",Rt.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ya(s=>{if(i=!0,this.destroyed)return n.resolve(!1),Mn;if(Um(s))this.events.next(new Pn(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),wy(s)?this.events.next(new ko(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let c=new Vr(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let l=on(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof No){let{message:d,cancellationCode:u}=Lc(this.urlSerializer,l);this.events.next(new Pn(n.id,this.urlSerializer.serialize(n.extractedUrl),d,u)),this.events.next(new ko(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(l)}}return Mn}))}))}cancelNavigationTransition(e,n,i){let o=new Pn(e.id,this.urlSerializer.serialize(e.extractedUrl),n,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=me(this.currentNavigation),i=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==i?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function m0(r){return r!==Io}var tp=new k("");var np=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:()=>g(p0),providedIn:"root"})}return r})(),Uc=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}shouldDestroyInjector(t){return!0}},p0=(()=>{class r extends Uc{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ai(r)))(i||r)}})();static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),$c=(()=>{class r{urlSerializer=g(zr);options=g(Vo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=g(Pr);urlHandlingStrategy=g(Hc);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new _n;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=i??o;return a instanceof _n?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:i}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,i),this.routerState=e):this.rawUrlTree=i}routerState=Om(null,g(mn));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:()=>g(g0),providedIn:"root"})}return r})(),g0=(()=>{class r extends $c{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof li?this.updateStateMemento():e instanceof di?this.commitTransition(n):e instanceof ja?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Oo?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Pn&&!Fm(e)?this.restoreHistory(n):e instanceof Vr?this.restoreHistory(n,!0):e instanceof Zn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:i,id:o}=n,{replaceUrl:a,state:s}=i;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,l=M(M({},s),this.generateNgRouterState(o,c,n));this.location.replaceState(e,"",l)}else{let c=M(M({},s),this.generateNgRouterState(o,this.browserPageId+1,n));this.location.go(e,"",c)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,i){return this.canceledNavigationResolution==="computed"?M({navigationId:e,\u0275routerPageId:n},this.routerUrlState(i)):M({navigationId:e},this.routerUrlState(i))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ai(r)))(i||r)}})();static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function tu(r,t){r.events.pipe(It(e=>e instanceof Zn||e instanceof Pn||e instanceof Vr||e instanceof di),ie(e=>e instanceof Zn||e instanceof di?0:(e instanceof Pn?e.code===Rt.Redirect||e.code===Rt.SupersededByNewNavigation:!1)?2:1),It(e=>e!==2),ri(1)).subscribe(()=>{t()})}var ir=(()=>{class r{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=g(ld);stateManager=g($c);options=g(Vo,{optional:!0})||{};pendingTasks=g(nf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=g(eu);urlSerializer=g(zr);location=g(Pr);urlHandlingStrategy=g(Hc);injector=g(mn);_events=new he;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=g(np);injectorCleanup=g(tp,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=g(Ka,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!g(jc,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new qi;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,o=me(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof Pn&&n.code!==Rt.Redirect&&n.code!==Rt.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Zn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof ko){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),c=M({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||m0(i.source)},a);this.scheduleNavigation(s,Io,null,c,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}gy(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Io,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,i,o)=>{this.navigateToSyncWithBrowser(e,i,n,o)})}navigateToSyncWithBrowser(e,n,i,o){let a=i?.navigationId?i:null,s=i?.\u0275routerUrl??e;if(i?.\u0275routerUrl&&(o=ge(M({},o),{browserUrl:e})),i){let l=M({},i);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(s);this.scheduleNavigation(c,n,a,o).catch(l=>{this.disposed||this.injector.get(Da)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return me(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Qd),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=n,l=c?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=M(M({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let u;try{let f=i?i.snapshot:this.routerState.snapshot.root;u=Mm(f)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),u=this.currentUrlTree.root}return Im(u,e,d,l??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let i=nr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Io,null,n)}navigate(e,n={skipLocationChange:!1}){return _0(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Sr(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let i;if(n===!0?i=M({},bm):n===!1?i=M({},Pd):i=M(M({},Pd),n),nr(e))return cm(this.currentUrlTree,e,i);let o=this.parseUrl(e);return cm(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((n,[i,o])=>(o!=null&&(n[i]=o),n),{})}scheduleNavigation(e,n,i,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,l;a?(s=a.resolve,c=a.reject,l=a.promise):l=new Promise((u,f)=>{s=u,c=f});let d=this.pendingTasks.add();return tu(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function _0(r){for(let t=0;t<r.length;t++)if(r[t]==null)throw new q(4008,!1)}var b0=(()=>{class r{router=g(ir);stateManager=g($c);fragment=de("");queryParams=de({});path=de("");serializer=g(zr);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Zn&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new _n(n)))}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),ip=(()=>{class r{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=g(new lc("href"),{optional:!0});reactiveHref=Mf(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return me(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return me(this._target)}_target=de(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return me(this._queryParams)}_queryParams=de(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return me(this._fragment)}_fragment=de(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return me(this._queryParamsHandling)}_queryParamsHandling=de(void 0);set state(e){this._state.set(e)}get state(){return me(this._state)}_state=de(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return me(this._info)}_info=de(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return me(this._relativeTo)}_relativeTo=de(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return me(this._preserveFragment)}_preserveFragment=de(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return me(this._skipLocationChange)}_skipLocationChange=de(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return me(this._replaceUrl)}_replaceUrl=de(!1);isAnchorElement;onChanges=new he;applicationErrorHandler=g(Da);options=g(Vo,{optional:!0});reactiveRouterState=g(b0);constructor(e,n,i,o,a,s){this.router=e,this.route=n,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=de(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(nr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,i,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||n||i||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let i=this.renderer,o=this.el.nativeElement;n!==null?i.setAttribute(o,e,n):i.removeAttribute(o,e)}_urlTree=Gt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i==="preserve"||i==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:nr(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return me(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(n){return new(n||r)(De(ir),De(Mi),sd("tabindex"),De(Tn),De(be),De(kr))};static \u0275dir=K({type:r,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,i){n&1&&Rn("click",function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),n&2&&vt("href",i.reactiveHref(),gf)("target",i._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",je],skipLocationChange:[2,"skipLocationChange","skipLocationChange",je],replaceUrl:[2,"replaceUrl","replaceUrl",je],routerLink:"routerLink"},features:[In]})}return r})();var rp=new k(""),y0=(()=>{class r{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Io;restoredId=0;store={};isHydrating=g(cf,{optional:!0})??!1;urlSerializer=g(zr);zone=g(ve);viewportScroller=g(zf);transitions=g(eu);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&g(Rr).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof li?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Zn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof di&&e.code===Ro.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Fo)||e.scrollBehavior==="manual")return;let n={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],n):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,n):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,n){if(this.isHydrating)return;let i=me(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Fo(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n,i))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){vf()};static \u0275prov=R({token:r,factory:r.\u0275fac})}return r})();function w0(r,...t){return nc([{provide:Ka,multi:!0,useValue:r},[],{provide:Mi,useFactory:D0},{provide:wf,multi:!0,useFactory:E0},t.map(e=>e.\u0275providers)])}function D0(){return g(ir).routerState.root}function C0(r,t){return{\u0275kind:r,\u0275providers:t}}function x0(r={}){return C0(4,[{provide:rp,useFactory:()=>new y0(r)}])}function E0(){let r=g(ct);return t=>{let e=r.get(Rr);if(t!==e.components[0])return;let n=r.get(ir),i=r.get(S0);r.get(A0)===1&&n.initialNavigation(),r.get(M0,null,{optional:!0})?.setUpPreloading(),r.get(rp,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var S0=new k("",{factory:()=>new he}),A0=new k("",{factory:()=>1});var M0=new k("");function Xa(r){return r.buttons===0||r.detail===0}function Za(r){let t=r.touches&&r.touches[0]||r.changedTouches&&r.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var nu;function op(){if(nu==null){let r=typeof document<"u"?document.head:null;nu=!!(r&&(r.createShadowRoot||r.attachShadow))}return nu}function iu(r){if(op()){let t=r.getRootNode?r.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function Qn(r){return r.composedPath?r.composedPath()[0]:r.target}var ru;try{ru=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ru=!1}var Ft=(()=>{class r{_platformId=g(Zi);isBrowser=this._platformId?dc(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ru)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Qa;function ap(){if(Qa==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Qa=!0}))}finally{Qa=Qa||!1}return Qa}function jo(r){return ap()?r:!!r.capture}function I0(r,t=0){return sp(r)?Number(r):arguments.length===2?t:0}function sp(r){return!isNaN(parseFloat(r))&&!isNaN(Number(r))}function rr(r){return r instanceof be?r.nativeElement:r}var cp=new k("cdk-input-modality-detector-options"),lp={ignoreKeys:[18,17,224,91,16]},dp=650,ou={passive:!0,capture:!0},up=(()=>{class r{_platform=g(Ft);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new tn(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Qn(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<dp||(this._modality.next(Xa(e)?"keyboard":"mouse"),this._mostRecentTarget=Qn(e))};_onTouchstart=e=>{if(Za(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Qn(e)};constructor(){let e=g(ve),n=g(ee),i=g(cp,{optional:!0});if(this._options=M(M({},lp),i),this.modalityDetected=this._modality.pipe(tc(1)),this.modalityChanged=this.modalityDetected.pipe(Xh()),this._platform.isBrowser){let o=g(bo).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,ou),o.listen(n,"mousedown",this._onMousedown,ou),o.listen(n,"touchstart",this._onTouchstart,ou)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Ja=(function(r){return r[r.IMMEDIATE=0]="IMMEDIATE",r[r.EVENTUAL=1]="EVENTUAL",r})(Ja||{}),hp=new k("cdk-focus-monitor-default-options"),Gc=jo({passive:!0,capture:!0}),es=(()=>{class r{_ngZone=g(ve);_platform=g(Ft);_inputModalityDetector=g(up);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=g(ee);_stopInputModalityDetector=new he;constructor(){let e=g(hp,{optional:!0});this._detectionMode=e?.detectionMode||Ja.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=Qn(e);for(let i=n;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,n=!1){let i=rr(e);if(!this._platform.isBrowser||i.nodeType!==1)return U();let o=iu(i)||this._document,a=this._elementInfo.get(i);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new he,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=rr(e),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(e,n,i){let o=rr(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,n,c)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Ja.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===Ja.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?dp:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,n){let i=this._elementInfo.get(n),o=Qn(e);!i||!i.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),i)}_onBlur(e,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Gc),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Gc)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(gt(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Gc),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Gc),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,i){this._setClasses(e,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&n.push([o,i])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Wc=new WeakMap,ui=(()=>{class r{_appRef;_injector=g(ct);_environmentInjector=g(mn);load(e){let n=this._appRef=this._appRef||this._injector.get(Rr),i=Wc.get(n);i||(i={loaders:new Set,refs:[]},Wc.set(n,i),n.onDestroy(()=>{Wc.get(n)?.refs.forEach(o=>o.destroy()),Wc.delete(n)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(kf(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Yc=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Ze({type:r,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return r})(),qc;function T0(){if(qc===void 0&&(qc=null,typeof window<"u")){let r=window;r.trustedTypes!==void 0&&(qc=r.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return qc}function zo(r){return T0()?.createHTML(r)||r}function au(r){return Array.isArray(r)?r:[r]}var fp=new Set,Hr,Kc=(()=>{class r{_platform=g(Ft);_nonce=g(go,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):F0}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&R0(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function R0(r,t){if(!fp.has(r))try{Hr||(Hr=document.createElement("style"),t&&Hr.setAttribute("nonce",t),Hr.setAttribute("type","text/css"),document.head.appendChild(Hr)),Hr.sheet&&(Hr.sheet.insertRule(`@media ${r} {body{ }}`,0),fp.add(r))}catch(e){console.error(e)}}function F0(r){return{matches:r==="all"||r==="",media:r,addListener:()=>{},removeListener:()=>{}}}var su=(()=>{class r{_mediaMatcher=g(Kc);_zone=g(ve);_queries=new Map;_destroySubject=new he;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return mp(au(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=mp(au(e)).map(a=>this._registerQuery(a).observable),o=Xs(i);return o=Zs(o.pipe(ri(1)),o.pipe(tc(1),ec(0))),o.pipe(ie(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:l})=>{s.matches=s.matches||c,s.breakpoints[l]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new Yi(a=>{let s=c=>this._zone.run(()=>a.next(c));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(oi(n),ie(({matches:a})=>({query:e,matches:a})),gt(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function mp(r){return r.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var O0=(()=>{class r{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var pp=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Ue({type:r});static \u0275inj=Be({providers:[O0]})}return r})();var or=(function(r){return r[r.NONE=0]="NONE",r[r.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",r[r.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",r})(or||{}),gp="cdk-high-contrast-black-on-white",_p="cdk-high-contrast-white-on-black",cu="cdk-high-contrast-active",vp=(()=>{class r{_platform=g(Ft);_hasCheckedHighContrastMode=!1;_document=g(ee);_breakpointSubscription;constructor(){this._breakpointSubscription=g(su).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return or.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,i=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(i&&i.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return or.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return or.BLACK_ON_WHITE}return or.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(cu,gp,_p),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===or.BLACK_ON_WHITE?e.add(cu,gp):n===or.WHITE_ON_BLACK&&e.add(cu,_p)}}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),k0=(()=>{class r{constructor(){g(vp)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||r)};static \u0275mod=Ue({type:r});static \u0275inj=Be({imports:[pp]})}return r})();var P0=200,Xc=class{_letterKeyStream=new he;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new he;selectedItem=this._selectedItem;constructor(t,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:P0;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(t),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(t){this._selectedItemIndex=t}setItems(t){this._items=t}handleKey(t){let e=t.keyCode;t.key&&t.key.length===1?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(t){this._letterKeyStream.pipe(_t(e=>this._pressedLetters.push(e)),ec(t),It(()=>this._pressedLetters.length>0),ie(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let i=(this._selectedItemIndex+n)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function bp(r,...t){return t.length?t.some(e=>r[e]):r.altKey||r.shiftKey||r.ctrlKey||r.metaKey}var Zc=class{_items;_activeItemIndex=de(-1);_activeItem=de(null);_wrap=!1;_typeaheadSubscription=qi.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=t=>t.disabled;constructor(t,e){this._items=t,t instanceof Ca?this._itemChangesSubscription=t.changes.subscribe(n=>this._itemsChanged(n.toArray())):cc(t)&&(this._effectRef=ic(()=>this._itemsChanged(t()),{injector:e}))}tabOut=new he;change=new he;skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Xc(e,{debounceInterval:typeof t=="number"?t:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,e=10){return this._pageUpAndDown={enabled:t,delta:e},this}setActiveItem(t){let e=this._activeItem();this.updateActiveItem(t),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(t){let e=t.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!t[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||bp(t,"shiftKey"))&&this._typeahead?.handleKey(t);return}this._typeahead?.reset(),t.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){let e=this._getItemsArray(),n=typeof t=="number"?t:e.indexOf(t),i=e[n];this._activeItem.set(i??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let i=(this._activeItemIndex()+t*n+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex()+t,t)}_setActiveItemByIndex(t,e){let n=this._getItemsArray();if(n[t]){for(;this._skipPredicateFn(n[t]);)if(t+=e,!n[t])return;this.setActiveItem(t)}}_getItemsArray(){return cc(this._items)?this._items():this._items instanceof Ca?this._items.toArray():this._items}_itemsChanged(t){this._typeahead?.setItems(t);let e=this._activeItem();if(e){let n=t.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var ts=class extends Zc{_origin="program";setFocusOrigin(t){return this._origin=t,this}setActiveItem(t){super.setActiveItem(t),this.activeItem&&this.activeItem.focus(this._origin)}};var lu={},Ii=class r{_appId=g(Ir);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,e=!1){return this._appId!=="ng"&&(t+=this._appId),lu.hasOwnProperty(t)||(lu[t]=0),`${t}${e?r._infix+"-":""}${lu[t]++}`}static \u0275fac=function(e){return new(e||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})};var wp=" ";function N0(r,t,e){let n=Jc(r,t);e=e.trim(),!n.some(i=>i.trim()===e)&&(n.push(e),r.setAttribute(t,n.join(wp)))}function L0(r,t,e){let n=Jc(r,t);e=e.trim();let i=n.filter(o=>o!==e);i.length?r.setAttribute(t,i.join(wp)):r.removeAttribute(t)}function Jc(r,t){return r.getAttribute(t)?.match(/\S+/g)??[]}var Dp="cdk-describedby-message",Qc="cdk-describedby-host",uu=0,OT=(()=>{class r{_platform=g(Ft);_document=g(ee);_messageRegistry=new Map;_messagesContainer=null;_id=`${uu++}`;constructor(){g(ui).load(Yc),this._id=g(Ir)+"-"+uu++}describe(e,n,i){if(!this._canBeDescribed(e,n))return;let o=du(n,i);typeof n!="string"?(yp(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,i),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,i){if(!n||!this._isElementNode(e))return;let o=du(n,i);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Qc}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(Qc);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let i=this._document.createElement("div");yp(i,this._id),i.textContent=e,n&&i.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(du(e,n),{messageElement:i,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let i=this._document.createElement("div");i.style.visibility="hidden",i.classList.add(e),i.classList.add("cdk-visually-hidden"),this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(e){let n=Jc(e,"aria-describedby").filter(i=>i.indexOf(Dp)!=0);e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){let i=this._messageRegistry.get(n);N0(e,"aria-describedby",i.messageElement.id),e.setAttribute(Qc,this._id),i.referenceCount++}_removeMessageReference(e,n){let i=this._messageRegistry.get(n);i.referenceCount--,L0(e,"aria-describedby",i.messageElement.id),e.removeAttribute(Qc)}_isElementDescribedByMessage(e,n){let i=Jc(e,"aria-describedby"),o=this._messageRegistry.get(n),a=o&&o.messageElement.id;return!!a&&i.indexOf(a)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n=="object")return!0;let i=n==null?"":`${n}`.trim(),o=e.getAttribute("aria-label");return i?!o||o.trim()!==i:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function du(r,t){return typeof r=="string"?`${t||""}/${r}`:r}function yp(r,t){r.id||(r.id=`${Dp}-${t}-${uu++}`)}var $r;function VT(){if($r==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return $r=!1,$r;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)$r=!0;else{let r=Element.prototype.scrollTo;r?$r=!/\{\s*\[native code\]\s*\}/.test(r.toString()):$r=!1}}return $r}function zT(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ho,Cp=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function GT(){if(Ho)return Ho;if(typeof document!="object"||!document)return Ho=new Set(Cp),Ho;let r=document.createElement("input");return Ho=new Set(Cp.filter(t=>(r.setAttribute("type",t),r.type===t))),Ho}var B0=new k("MATERIAL_ANIMATIONS"),xp=null;function U0(){return g(B0,{optional:!0})?.animationsDisabled||g(sf,{optional:!0})==="NoopAnimations"?"di-disabled":(xp??=g(Kc).matchMedia("(prefers-reduced-motion)").matches,xp?"reduced-motion":"enabled")}function hi(){return U0()!=="enabled"}function tR(r){return r==null?"":typeof r=="string"?r:`${r}px`}function Ep(r){return r!=null&&`${r}`!="false"}var Nn=(function(r){return r[r.FADING_IN=0]="FADING_IN",r[r.VISIBLE=1]="VISIBLE",r[r.FADING_OUT=2]="FADING_OUT",r[r.HIDDEN=3]="HIDDEN",r})(Nn||{}),hu=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Nn.HIDDEN;constructor(t,e,n,i=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Sp=jo({passive:!0,capture:!0}),fu=class{_events=new Map;addHandler(t,e,n,i){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(i):o.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Sp)})}removeHandler(t,e,n){let i=this._events.get(t);if(!i)return;let o=i.get(e);o&&(o.delete(n),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Sp)))}_delegateEventHandler=t=>{let e=Qn(t);e&&this._events.get(t.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(o=>o.handleEvent(t))})}},ns={enterDuration:225,exitDuration:150},V0=800,Ap=jo({passive:!0,capture:!0}),Mp=["mousedown","touchstart"],Ip=["mouseup","mouseleave","touchend","touchcancel"],j0=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Ze({type:r,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return r})(),is=class r{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new fu;constructor(t,e,n,i,o){this._target=t,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=rr(n)),o&&o.get(ui).load(j0)}fadeInRipple(t,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=M(M({},ns),n.animation);n.centered&&(t=i.left+i.width/2,e=i.top+i.height/2);let a=n.radius||z0(t,e,i),s=t-i.left,c=e-i.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${c-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,n.color!=null&&(d.style.backgroundColor=n.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let u=window.getComputedStyle(d),f=u.transitionProperty,h=u.transitionDuration,p=f==="none"||h==="0s"||h==="0s, 0s"||i.width===0&&i.height===0,m=new hu(this,d,n,p);d.style.transform="scale3d(1, 1, 1)",m.state=Nn.FADING_IN,n.persistent||(this._mostRecentTransientRipple=m);let _=null;return!p&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let b=()=>{_&&(_.fallbackTimer=null),clearTimeout(x),this._finishRippleTransition(m)},w=()=>this._destroyRipple(m),x=setTimeout(w,l+100);d.addEventListener("transitionend",b),d.addEventListener("transitioncancel",w),_={onTransitionEnd:b,onTransitionCancel:w,fallbackTimer:x}}),this._activeRipples.set(m,_),(p||!l)&&this._finishRippleTransition(m),m}fadeOutRipple(t){if(t.state===Nn.FADING_OUT||t.state===Nn.HIDDEN)return;let e=t.element,n=M(M({},ns),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",t.state=Nn.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=rr(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Mp.forEach(n=>{r._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ip.forEach(e=>{this._triggerElement.addEventListener(e,this,Ap)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===Nn.FADING_IN?this._startFadeOutTransition(t):t.state===Nn.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=Nn.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=Nn.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=Xa(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+V0;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Za(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===Nn.VISIBLE||t.config.terminateOnPointerUp&&t.state===Nn.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Mp.forEach(e=>r._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(Ip.forEach(e=>t.removeEventListener(e,this,Ap)),this._pointerUpEventsRegistered=!1))}};function z0(r,t,e){let n=Math.max(Math.abs(r-e.left),Math.abs(r-e.right)),i=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+i*i)}var rs=new k("mat-ripple-global-options"),gR=(()=>{class r{_elementRef=g(be);_animationsDisabled=hi();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=g(ve),n=g(Ft),i=g(rs,{optional:!0}),o=g(ct);this._globalOptions=i||{},this._rippleRenderer=new is(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:M(M(M({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,M(M({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,M(M({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||r)};static \u0275dir=K({type:r,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,i){n&2&&Ve("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return r})();var H0={capture:!0},$0=["focus","mousedown","mouseenter","touchstart"],mu="mat-ripple-loader-uninitialized",pu="mat-ripple-loader-class-name",Tp="mat-ripple-loader-centered",el="mat-ripple-loader-disabled",tl=(()=>{class r{_document=g(ee);_animationsDisabled=hi();_globalRippleOptions=g(rs,{optional:!0});_platform=g(Ft);_ngZone=g(ve);_injector=g(ct);_eventCleanups;_hosts=new Map;constructor(){let e=g(bo).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>$0.map(n=>e.listen(this._document,n,this._onInteraction,H0)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(mu,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(pu))&&e.setAttribute(pu,n.className||""),n.centered&&e.setAttribute(Tp,""),n.disabled&&e.setAttribute(el,"")}setDisabled(e,n){let i=this._hosts.get(e);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):n?e.setAttribute(el,""):e.removeAttribute(el)}_onInteraction=e=>{let n=Qn(e);if(n instanceof HTMLElement){let i=n.closest(`[${mu}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(pu)),e.append(n);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??ns.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??ns.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(el),rippleConfig:{centered:e.hasAttribute(Tp),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new is(s,this._ngZone,n,this._platform,this._injector),l=!s.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:l}),e.removeAttribute(mu)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var os=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Ze({type:r,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return r})();var G0=["mat-icon-button",""],W0=["*"],q0=new k("MAT_BUTTON_CONFIG");function Rp(r){return r==null?void 0:xo(r)}var gu=(()=>{class r{_elementRef=g(be);_ngZone=g(ve);_animationsDisabled=hi();_config=g(q0,{optional:!0});_focusMonitor=g(es);_cleanupClick;_renderer=g(Tn);_rippleLoader=g(tl);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){g(ui).load(os);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||r)};static \u0275dir=K({type:r,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,i){n&2&&(vt("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Co(i.color?"mat-"+i.color:""),Ve("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",je],disabled:[2,"disabled","disabled",je],ariaDisabled:[2,"aria-disabled","ariaDisabled",je],disabledInteractive:[2,"disabledInteractive","disabledInteractive",je],tabIndex:[2,"tabIndex","tabIndex",Rp],_tabindex:[2,"tabindex","_tabindex",Rp]}})}return r})(),Y0=(()=>{class r extends gu{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Ze({type:r,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Tt],attrs:G0,ngContentSelectors:W0,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(Fn(),xi(0,"span",0),Ie(1),xi(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return r})();var K0=new k("cdk-dir-doc",{providedIn:"root",factory:()=>g(ee)}),X0=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Fp(r){let t=r?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?X0.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var as=(()=>{class r{get value(){return this.valueSignal()}valueSignal=de("ltr");change=new lt;constructor(){let e=g(K0,{optional:!0});if(e){let n=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Fp(n||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var ar=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Ue({type:r});static \u0275inj=Be({})}return r})();var nl=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Ue({type:r});static \u0275inj=Be({imports:[ar]})}return r})();var Z0=["matButton",""],Q0=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],J0=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Op=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),YR=(()=>{class r extends gu{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=ew(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?Op.get(this._appearance):null,o=Op.get(e);i&&n.remove(...i),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Ze({type:r,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Tt],attrs:Z0,ngContentSelectors:J0,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(Fn(Q0),xi(0,"span",0),Ie(1),yo(2,"span",1),Ie(3,1),wo(),Ie(4,2),xi(5,"span",2)(6,"span",3)),n&2&&Ve("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return r})();function ew(r){return r.hasAttribute("mat-raised-button")?"elevated":r.hasAttribute("mat-stroked-button")?"outlined":r.hasAttribute("mat-flat-button")?"filled":r.hasAttribute("mat-button")?"text":null}var KR=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Ue({type:r});static \u0275inj=Be({imports:[nl,ar]})}return r})();function kp(r){return Error(`Unable to find icon with the name "${r}"`)}function tw(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Pp(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function Np(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}var Ti=class{url;svgText;options;svgElement=null;constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}},Bp=(()=>{class r{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,i,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=i}addSvgIcon(e,n,i){return this.addSvgIconInNamespace("",e,n,i)}addSvgIconLiteral(e,n,i){return this.addSvgIconLiteralInNamespace("",e,n,i)}addSvgIconInNamespace(e,n,i,o){return this._addSvgIconConfig(e,n,new Ti(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,i,o){let a=this._sanitizer.sanitize(pn.HTML,i);if(!a)throw Np(i);let s=zo(a);return this._addSvgIconConfig(e,n,new Ti("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,i){return this._addSvgIconSetConfig(e,new Ti(n,null,i))}addSvgIconSetLiteralInNamespace(e,n,i){let o=this._sanitizer.sanitize(pn.HTML,n);if(!o)throw Np(n);let a=zo(o);return this._addSvgIconSetConfig(e,new Ti("",a,i))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(pn.RESOURCE_URL,e);if(!n)throw Pp(e);let i=this._cachedIconsByUrl.get(n);return i?U(il(i)):this._loadSvgIconFromConfig(new Ti(e,null)).pipe(_t(o=>this._cachedIconsByUrl.set(n,o)),ie(o=>il(o)))}getNamedSvgIcon(e,n=""){let i=Lp(n,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):Ks(kp(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?U(il(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ie(n=>il(n)))}_getSvgFromIconSetConfigs(e,n){let i=this._extractIconWithNameFromAnySet(e,n);if(i)return U(i);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ya(s=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(pn.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(l)),U(null)})));return Js(o).pipe(ie(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw kp(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let i=n.length-1;i>=0;i--){let o=n[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(_t(n=>e.svgText=n),ie(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?U(null):this._fetchIcon(e).pipe(_t(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,i){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let s=this._svgElementFromString(zo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,i)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let i=n.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let n=this._svgElementFromString(zo("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:a,value:s}=i[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw tw();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(pn.RESOURCE_URL,n);if(!a)throw Pp(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(ie(l=>zo(l)),mo(()=>this._inProgressUrlFetches.delete(a)),Qh());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,n,i){return this._svgIconConfigs.set(Lp(e,n),i),this}_addSvgIconSetConfig(e,n){let i=this._iconSetConfigs.get(e);return i?i.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](n,e);if(o)return nw(o)?new Ti(o.url,null,o.options):new Ti(o,null)}}static \u0275fac=function(n){return new(n||r)(V(Ad,8),V(Md),V(ee,8),V(Mr))};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function il(r){return r.cloneNode(!0)}function Lp(r,t){return r+":"+t}function nw(r){return!!(r.url&&r.options)}var iw=["*"],rw=new k("MAT_ICON_DEFAULT_OPTIONS"),ow=new k("mat-icon-location",{providedIn:"root",factory:()=>{let r=g(ee),t=r?r.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),Up=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],aw=Up.map(r=>`[${r}]`).join(", "),sw=/^url\(['"]?#(.*?)['"]?\)$/,p1=(()=>{class r{_elementRef=g(be);_iconRegistry=g(Bp);_location=g(ow);_errorHandler=g(Mr);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=qi.EMPTY;constructor(){let e=g(new lc("aria-hidden"),{optional:!0}),n=g(rw,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let i=e.childNodes[n];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),n.forEach(i=>e.classList.add(i)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((i,o)=>{i.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(aw),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)Up.forEach(a=>{let s=n[o],c=s.getAttribute(a),l=c?c.match(sw):null;if(l){let d=i.get(s);d||(d=[],i.set(s,d)),d.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,i]=this._splitIconName(e);n&&(this._svgNamespace=n),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,n).pipe(ri(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Ze({type:r,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,i){n&2&&(vt("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Co(i.color?"mat-"+i.color:""),Ve("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",je],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:iw,decls:1,vars:0,template:function(n,i){n&1&&(Fn(),Ie(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return r})(),g1=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Ue({type:r});static \u0275inj=Be({imports:[ar]})}return r})();function Ri(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Yp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},hs={duration:.5,overwrite:!1,delay:0},ku,wt,Te,Bn=1e8,Se=1/Bn,xu=Math.PI*2,cw=xu/4,lw=0,Kp=Math.sqrt,dw=Math.cos,uw=Math.sin,rt=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},Oi=function(t){return typeof t=="number"},fl=function(t){return typeof t>"u"},pi=function(t){return typeof t=="object"},cn=function(t){return t!==!1},Pu=function(){return typeof window<"u"},rl=function(t){return ze(t)||rt(t)},Xp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,hw=/random\([^)]+\)/g,fw=/,\s*/g,Vp=/(?:-?\.?\d|\.)+/gi,Nu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Yr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_u=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lu=/[+-]=-?[.\d]+/,mw=/[^,'"\[\]\s]+/gi,pw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Oe,fi,Eu,Bu,yn={},cl={},Zp,Qp=function(t){return(cl=Go(t,yn))&&Pt},ml=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},fs=function(t,e){return!e&&console.warn(t)},Jp=function(t,e){return t&&(yn[t]=e)&&cl&&(cl[t]=e)||yn},ms=function(){return 0},gw={suppressEvents:!0,isStart:!0,kill:!1},ol={suppressEvents:!0,kill:!1},_w={suppressEvents:!0},Uu={},cr=[],Su={},eg,an={},vu={},jp=30,al=[],Vu="",ju=function(t){var e=t[0],n,i;if(pi(e)||ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=al.length;i--&&!al[i].targetTest(e););n=al[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Gu(t[i],n)))||t.splice(i,1);return t},lr=function(t){return t._gsap||ju(Un(t))[0]._gsap},zu=function(t,e,n){return(n=t[e])&&ze(n)?t[e]():fl(n)&&t.getAttribute&&t.getAttribute(e)||n},Wt=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Fe=function(t){return Math.round(t*1e7)/1e7||0},Kr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},vw=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ll=function(){var t=cr.length,e=cr.slice(0),n,i;for(Su={},cr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hu=function(t){return!!(t._initted||t._startAt||t.add)},tg=function(t,e,n,i){cr.length&&!wt&&ll(),t.render(e,n,i||!!(wt&&e<0&&Hu(t))),cr.length&&!wt&&ll()},ng=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(mw).length<2?e:rt(t)?t.trim():t},ig=function(t){return t},wn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},bw=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Go=function(t,e){for(var n in e)t[n]=e[n];return t},zp=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=pi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},dl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ls=function(t){var e=t.parent||Oe,n=t.keyframes?bw(kt(t.keyframes)):wn;if(cn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},yw=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},rg=function(t,e,n,i,o){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],s;if(o)for(s=e[o];a&&a[o]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},pl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e._prev,a=e._next;o?o._next=a:t[n]===e&&(t[n]=a),a?a._prev=o:t[i]===e&&(t[i]=o),e._next=e._prev=e.parent=null},dr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Gr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ww=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Au=function(t,e,n,i){return t._startAt&&(wt?t._startAt.revert(ol):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Dw=function r(t){return!t||t._ts&&r(t.parent)},Hp=function(t){return t._repeat?Wo(t._tTime,t=t.duration()+t._rDelay)*t:0},Wo=function(t,e){var n=Math.floor(t=Fe(t/e));return t&&n===t?n-1:n},ul=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},gl=function(t){return t._end=Fe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},_l=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Fe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),gl(t),n._dirty||Gr(n,t)),t},og=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ul(t.rawTime(),e),(!e._dur||_s(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),Gr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},mi=function(t,e,n,i){return e.parent&&dr(e),e._start=Fe((Oi(n)?n:n||t!==Oe?Ln(t,n,e):t._time)+e._delay),e._end=Fe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),rg(t,e,"_first","_last",t._sort?"_start":0),Mu(e)||(t._recent=e),i||og(t,e),t._ts<0&&_l(t,t._tTime),t},ag=function(t,e){return(yn.ScrollTrigger||ml("scrollTrigger",e))&&yn.ScrollTrigger.create(e,t)},sg=function(t,e,n,i,o){if(Yu(t,e,o),!t._initted)return 1;if(!n&&t._pt&&!wt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&eg!==sn.frame)return cr.push(t),t._lazy=[o,i],1},Cw=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Mu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},xw=function(t,e,n,i){var o=t.ratio,a=e<0||!e&&(!t._start&&Cw(t)&&!(!t._initted&&Mu(t))||(t._ts<0||t._dp._ts<0)&&!Mu(t))?0:1,s=t._rDelay,c=0,l,d,u;if(s&&t._repeat&&(c=_s(0,t._tDur,e),d=Wo(c,s),t._yoyo&&d&1&&(a=1-a),d!==Wo(t._tTime,s)&&(o=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==o||wt||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&sg(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&Au(t,e,n,!0),t._onUpdate&&!n&&bn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&bn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&dr(t,1),!n&&!wt&&(bn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ew=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},qo=function(t,e,n,i){var o=t._repeat,a=Fe(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=o?o<0?1e10:Fe(a*(o+1)+t._rDelay*o):a,s>0&&!i&&_l(t,t._tTime=t._tDur*s),t.parent&&gl(t),n||Gr(t.parent,t),t},$p=function(t){return t instanceof Ot?Gr(t):qo(t,t._dur)},Sw={_start:0,endTime:ms,totalDuration:ms},Ln=function r(t,e,n){var i=t.labels,o=t._recent||Sw,a=t.duration()>=Bn?o.endTime(!1):t._dur,s,c,l;return rt(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",s=e.indexOf("="),c==="<"||c===">"?(s>=0&&(e=e.replace(/=/,"")),(c==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(s<0?o:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(s-1)+e.substr(s+1)),l&&n&&(c=c/100*(kt(n)?n[0]:n).totalDuration()),s>1?r(t,e.substr(0,s-1),n)+c:a+c)):e==null?a:+e},ds=function(t,e,n){var i=Oi(e[1]),o=(i?2:1)+(t<2?0:1),a=e[o],s,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a,c=n;c&&!("immediateRender"in s);)s=c.vars.defaults||{},c=cn(c.vars.inherit)&&c.parent;a.immediateRender=cn(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[o-1]}return new Ye(e[0],a,e[o+1])},ur=function(t,e){return t||t===0?e(t):e},_s=function(t,e,n){return n<t?t:n>e?e:n},Dt=function(t,e){return!rt(t)||!(e=pw.exec(t))?"":e[1]},Aw=function(t,e,n){return ur(n,function(i){return _s(t,e,i)})},Iu=[].slice,cg=function(t,e){return t&&pi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&pi(t[0]))&&!t.nodeType&&t!==fi},Mw=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var o;return rt(i)&&!e||cg(i,1)?(o=n).push.apply(o,Un(i)):n.push(i)})||n},Un=function(t,e,n){return Te&&!e&&Te.selector?Te.selector(t):rt(t)&&!n&&(Eu||!Yo())?Iu.call((e||Bu).querySelectorAll(t),0):kt(t)?Mw(t,n):cg(t)?Iu.call(t,0):t?[t]:[]},Tu=function(t){return t=Un(t)[0]||fs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Un(e,n.querySelectorAll?n:n===t?fs("Invalid scope")||Bu.createElement("div"):t)}},lg=function(t){return t.sort(function(){return .5-Math.random()})},dg=function(t){if(ze(t))return t;var e=pi(t)?t:{each:t},n=Wr(e.ease),i=e.from||0,o=parseFloat(e.base)||0,a={},s=i>0&&i<1,c=isNaN(i)||s,l=e.axis,d=i,u=i;return rt(i)?d=u={center:.5,edges:.5,end:1}[i]||0:!s&&c&&(d=i[0],u=i[1]),function(f,h,p){var m=(p||e).length,_=a[m],b,w,x,y,E,I,D,T,A;if(!_){if(A=e.grid==="auto"?0:(e.grid||[1,Bn])[1],!A){for(D=-Bn;D<(D=p[A++].getBoundingClientRect().left)&&A<m;);A<m&&A--}for(_=a[m]=[],b=c?Math.min(A,m)*d-.5:i%A,w=A===Bn?0:c?m*u/A-.5:i/A|0,D=0,T=Bn,I=0;I<m;I++)x=I%A-b,y=w-(I/A|0),_[I]=E=l?Math.abs(l==="y"?y:x):Kp(x*x+y*y),E>D&&(D=E),E<T&&(T=E);i==="random"&&lg(_),_.max=D-T,_.min=T,_.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(A>m?m-1:l?l==="y"?m/A:A:Math.max(A,m/A))||0)*(i==="edges"?-1:1),_.b=m<0?o-m:o,_.u=Dt(e.amount||e.each)||0,n=n&&m<0?jw(n):n}return m=(_[f]-_.min)/_.max||0,Fe(_.b+(n?n(m):m)*_.v)+_.u}},Ru=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Fe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Oi(n)?0:Dt(n))}},ug=function(t,e){var n=kt(t),i,o;return!n&&pi(t)&&(i=n=t.radius||Bn,t.values?(t=Un(t.values),(o=!Oi(t[0]))&&(i*=i)):t=Ru(t.increment)),ur(e,n?ze(t)?function(a){return o=t(a),Math.abs(o-a)<=i?o:a}:function(a){for(var s=parseFloat(o?a.x:a),c=parseFloat(o?a.y:0),l=Bn,d=0,u=t.length,f,h;u--;)o?(f=t[u].x-s,h=t[u].y-c,f=f*f+h*h):f=Math.abs(t[u]-s),f<l&&(l=f,d=u);return d=!i||l<=i?t[d]:a,o||d===a||Oi(a)?d:d+Dt(a)}:Ru(t))},hg=function(t,e,n,i){return ur(kt(t)?!e:n===!0?!!(n=0):!i,function(){return kt(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Iw=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(o,a){return a(o)},i)}},Tw=function(t,e){return function(n){return t(parseFloat(n))+(e||Dt(n))}},Rw=function(t,e,n){return mg(t,e,0,1,n)},fg=function(t,e,n){return ur(n,function(i){return t[~~e(i)]})},Fw=function r(t,e,n){var i=e-t;return kt(t)?fg(t,r(0,t.length),e):ur(n,function(o){return(i+(o-t)%i)%i+t})},Ow=function r(t,e,n){var i=e-t,o=i*2;return kt(t)?fg(t,r(0,t.length-1),e):ur(n,function(a){return a=(o+(a-t)%o)%o||0,t+(a>i?o-a:a)})},Ko=function(t){return t.replace(hw,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(fw);return hg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},mg=function(t,e,n,i,o){var a=e-t,s=i-n;return ur(o,function(c){return n+((c-t)/a*s||0)})},kw=function r(t,e,n,i){var o=isNaN(t+e)?0:function(h){return(1-h)*t+h*e};if(!o){var a=rt(t),s={},c,l,d,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(kt(t)&&!kt(e)){for(d=[],u=t.length,f=u-2,l=1;l<u;l++)d.push(r(t[l-1],t[l]));u--,o=function(p){p*=u;var m=Math.min(f,~~p);return d[m](p-m)},n=e}else i||(t=Go(kt(t)?[]:{},t));if(!d){for(c in e)Wu.call(s,t,c,"get",e[c]);o=function(p){return Zu(p,s)||(a?t.p:t)}}}return ur(n,o)},Gp=function(t,e,n){var i=t.labels,o=Bn,a,s,c;for(a in i)s=i[a]-e,s<0==!!n&&s&&o>(s=Math.abs(s))&&(c=a,o=s);return c},bn=function(t,e,n){var i=t.vars,o=i[e],a=Te,s=t._ctx,c,l,d;if(o)return c=i[e+"Params"],l=i.callbackScope||t,n&&cr.length&&ll(),s&&(Te=s),d=c?o.apply(l,c):o.call(l),Te=a,d},ss=function(t){return dr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!wt),t.progress()<1&&bn(t,"onInterrupt"),t},$o,pg=[],gg=function(t){if(t)if(t=!t.name&&t.default||t,Pu()||t.headless){var e=t.name,n=ze(t),i=e&&!n&&t.init?function(){this._props=[]}:t,o={init:ms,render:Zu,add:Wu,kill:Zw,modifier:Xw,rawVars:0},a={targetTest:0,get:0,getSetter:vl,aliases:{},register:0};if(Yo(),t!==i){if(an[e])return;wn(i,wn(dl(t,o),a)),Go(i.prototype,Go(o,dl(t,a))),an[i.prop=e]=i,t.targetTest&&(al.push(i),Uu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Jp(e,i),t.register&&t.register(Pt,i,qt)}else pg.push(t)},Ee=255,cs={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},bu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},_g=function(t,e,n){var i=t?Oi(t)?[t>>16,t>>8&Ee,t&Ee]:0:cs.black,o,a,s,c,l,d,u,f,h,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),cs[t])i=cs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(o=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+o+o+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Vp),!e)c=+i[0]%360/360,l=+i[1]/100,d=+i[2]/100,a=d<=.5?d*(l+1):d+l-d*l,o=d*2-a,i.length>3&&(i[3]*=1),i[0]=bu(c+1/3,o,a),i[1]=bu(c,o,a),i[2]=bu(c-1/3,o,a);else if(~t.indexOf("="))return i=t.match(Nu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Vp)||cs.transparent;i=i.map(Number)}return e&&!p&&(o=i[0]/Ee,a=i[1]/Ee,s=i[2]/Ee,u=Math.max(o,a,s),f=Math.min(o,a,s),d=(u+f)/2,u===f?c=l=0:(h=u-f,l=d>.5?h/(2-u-f):h/(u+f),c=u===o?(a-s)/h+(a<s?6:0):u===a?(s-o)/h+2:(o-a)/h+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},vg=function(t){var e=[],n=[],i=-1;return t.split(Fi).forEach(function(o){var a=o.match(Yr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Wp=function(t,e,n){var i="",o=(t+i).match(Fi),a=e?"hsla(":"rgba(",s=0,c,l,d,u;if(!o)return t;if(o=o.map(function(f){return(f=_g(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(d=vg(t),c=n.c,c.join(i)!==d.c.join(i)))for(l=t.replace(Fi,"1").split(Yr),u=l.length-1;s<u;s++)i+=l[s]+(~c.indexOf(s)?o.shift()||a+"0,0,0,0)":(d.length?d:o.length?o:n).shift());if(!l)for(l=t.split(Fi),u=l.length-1;s<u;s++)i+=l[s]+o[s];return i+l[u]},Fi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in cs)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Pw=/hsl[a]?\(/,$u=function(t){var e=t.join(" "),n;if(Fi.lastIndex=0,Fi.test(e))return n=Pw.test(e),t[1]=Wp(t[1],n),t[0]=Wp(t[0],n,vg(t[1])),!0},ps,sn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,o=1e3/240,a=o,s=[],c,l,d,u,f,h,p=function m(_){var b=r()-i,w=_===!0,x,y,E,I;if((b>t||b<0)&&(n+=b-e),i+=b,E=i-n,x=E-a,(x>0||w)&&(I=++u.frame,f=E-u.time*1e3,u.time=E=E/1e3,a+=x+(x>=o?4:o-x),y=1),w||(c=l(m)),y)for(h=0;h<s.length;h++)s[h](E,f,I,_)};return u={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){Zp&&(!Eu&&Pu()&&(fi=Eu=window,Bu=fi.document||{},yn.gsap=Pt,(fi.gsapVersions||(fi.gsapVersions=[])).push(Pt.version),Qp(cl||fi.GreenSockGlobals||!fi.gsap&&fi||{}),pg.forEach(gg)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=d||function(_){return setTimeout(_,a-u.time*1e3+1|0)},ps=1,p(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),ps=0,l=ms},lagSmoothing:function(_,b){t=_||1/0,e=Math.min(b||33,t)},fps:function(_){o=1e3/(_||240),a=u.time*1e3+o},add:function(_,b,w){var x=b?function(y,E,I,D){_(y,E,I,D),u.remove(x)}:_;return u.remove(_),s[w?"unshift":"push"](x),Yo(),x},remove:function(_,b){~(b=s.indexOf(_))&&s.splice(b,1)&&h>=b&&h--},_listeners:s},u})(),Yo=function(){return!ps&&sn.wake()},oe={},Nw=/^[\d.\-M][\d.\-,\s]/,Lw=/["']/g,Bw=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],o=1,a=n.length,s,c,l;o<a;o++)c=n[o],s=o!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,s),e[i]=isNaN(l)?l.replace(Lw,"").trim():+l,i=c.substr(s+1).trim();return e},Uw=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Vw=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Bw(e[1])]:Uw(t).split(",").map(ng)):oe._CE&&Nw.test(t)?oe._CE("",t):n},jw=function(t){return function(e){return 1-t(1-e)}},Wr=function(t,e){return t&&(ze(t)?t:oe[t]||Vw(t))||e},Xr=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var o={easeIn:e,easeOut:n,easeInOut:i},a;return Wt(t,function(s){oe[s]=yn[s]=o,oe[a=s.toLowerCase()]=n;for(var c in o)oe[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=oe[s+"."+c]=o[c]}),o},bg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},yu=function r(t,e,n){var i=e>=1?e:1,o=(n||(t?.3:.45))/(e<1?e:1),a=o/xu*(Math.asin(1/i)||0),s=function(d){return d===1?1:i*Math.pow(2,-10*d)*uw((d-a)*o)+1},c=t==="out"?s:t==="in"?function(l){return 1-s(1-l)}:bg(s);return o=xu/o,c.config=function(l,d){return r(t,l,d)},c},wu=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(o){return 1-n(1-o)}:bg(n);return i.config=function(o){return r(t,o)},i};Wt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Xr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Xr("Elastic",yu("in"),yu("out"),yu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,o=function(s){return s<e?r*s*s:s<n?r*Math.pow(s-1.5/t,2)+.75:s<i?r*(s-=2.25/t)*s+.9375:r*Math.pow(s-2.625/t,2)+.984375};Xr("Bounce",function(a){return 1-o(1-a)},o)})(7.5625,2.75);Xr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Xr("Circ",function(r){return-(Kp(1-r*r)-1)});Xr("Sine",function(r){return r===1?1:-dw(r*cw)+1});Xr("Back",wu("in"),wu("out"),wu());oe.SteppedEase=oe.steps=yn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),o=e?1:0,a=1-Se;return function(s){return((i*_s(0,a,s)|0)+o)*n}}};hs.ease=oe["quad.out"];Wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vu+=r+","+r+"Params,"});var Gu=function(t,e){this.id=lw++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:zu,this.set=e?e.getSetter:vl},gs=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,qo(this,+e.duration,1,1),this.data=e.data,Te&&(this._ctx=Te,Te.data.push(this)),ps||sn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,qo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Yo(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(_l(this,n),!o._dp||o.parent||og(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),tg(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,i):this._repeat?Wo(this._tTime,o)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?ul(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(_s(-Math.abs(this._delay),this.totalDuration(),o),i!==!1),gl(this),ww(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Fe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ul(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=_w);var i=wt;return wt=n,Hu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wt=i,this},t.globalTime=function(n){for(var i=this,o=arguments.length?n:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,$p(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,$p(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ln(this,n),cn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,cn(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=i&&o<this.endTime(!0)-Se)},t.eventCallback=function(n,i,o){var a=this.vars;return arguments.length>1?(i?(a[n]=i,o&&(a[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,o=i._prom;return new Promise(function(a){var s=ze(n)?n:ig,c=function(){var d=i.then;i.then=null,o&&o(),ze(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=d),a(s),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){ss(this)},r})();wn(gs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var Ot=(function(r){Yp(t,r);function t(n,i){var o;return n===void 0&&(n={}),o=r.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=cn(n.sortChildren),Oe&&mi(n.parent||Oe,Ri(o),i),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&ag(Ri(o),n.scrollTrigger),o}var e=t.prototype;return e.to=function(i,o,a){return ds(0,arguments,this),this},e.from=function(i,o,a){return ds(1,arguments,this),this},e.fromTo=function(i,o,a,s){return ds(2,arguments,this),this},e.set=function(i,o,a){return o.duration=0,o.parent=this,ls(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Ye(i,o,Ln(this,a),1),this},e.call=function(i,o,a){return mi(this,Ye.delayedCall(0,i,o),a)},e.staggerTo=function(i,o,a,s,c,l,d){return a.duration=o,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=d,a.parent=this,new Ye(i,a,Ln(this,c)),this},e.staggerFrom=function(i,o,a,s,c,l,d){return a.runBackwards=1,ls(a).immediateRender=cn(a.immediateRender),this.staggerTo(i,o,a,s,c,l,d)},e.staggerFromTo=function(i,o,a,s,c,l,d,u){return s.startAt=a,ls(s).immediateRender=cn(s.immediateRender),this.staggerTo(i,o,s,c,l,d,u)},e.render=function(i,o,a){var s=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,d=i<=0?0:Fe(i),u=this._zTime<0!=i<0&&(this._initted||!l),f,h,p,m,_,b,w,x,y,E,I,D;if(this!==Oe&&d>c&&i>=0&&(d=c),d!==this._tTime||a||u){if(s!==this._time&&l&&(d+=this._time-s,i+=this._time-s),f=d,y=this._start,x=this._ts,b=!x,u&&(l||(s=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(I=this._yoyo,_=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,o,a);if(f=Fe(d%_),d===c?(m=this._repeat,f=l):(E=Fe(d/_),m=~~E,m&&m===E&&(f=l,m--),f>l&&(f=l)),E=Wo(this._tTime,_),!s&&this._tTime&&E!==m&&this._tTime-E*_-this._dur<=0&&(E=m),I&&m&1&&(f=l-f,D=1),m!==E&&!this._lock){var T=I&&E&1,A=T===(I&&m&1);if(m<E&&(T=!T),s=T?0:d%l?l:d,this._lock=1,this.render(s||(D?0:Fe(m*_)),o,!l)._lock=0,this._tTime=d,!o&&this.parent&&bn(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,E=m),s&&s!==this._time||b!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,A&&(this._lock=2,s=T?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!b)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Ew(this,Fe(s),Fe(f)),w&&(d-=f-(f=w._start))),this._tTime=d,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&d&&l&&!o&&!E&&(bn(this,"onStart"),this._tTime!==d))return this;if(f>=s&&i>=0)for(h=this._first;h;){if(p=h._next,(h._act||f>=h._start)&&h._ts&&w!==h){if(h.parent!==this)return this.render(i,o,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,o,a),f!==this._time||!this._ts&&!b){w=0,p&&(d+=this._zTime=-Se);break}}h=p}else{h=this._last;for(var S=i<0?i:f;h;){if(p=h._prev,(h._act||S<=h._end)&&h._ts&&w!==h){if(h.parent!==this)return this.render(i,o,a);if(h.render(h._ts>0?(S-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(S-h._start)*h._ts,o,a||wt&&Hu(h)),f!==this._time||!this._ts&&!b){w=0,p&&(d+=this._zTime=S?-Se:Se);break}}h=p}}if(w&&!o&&(this.pause(),w.render(f>=s?0:-Se)._zTime=f>=s?1:-1,this._ts))return this._start=y,gl(this),this.render(i,o,a);this._onUpdate&&!o&&bn(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&s)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(d===c&&this._ts>0||!d&&this._ts<0)&&dr(this,1),!o&&!(i<0&&!s)&&(d||s||!c)&&(bn(this,d===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,o){var a=this;if(Oi(o)||(o=Ln(this,o,i)),!(i instanceof gs)){if(kt(i))return i.forEach(function(s){return a.add(s,o)}),this;if(rt(i))return this.addLabel(i,o);if(ze(i))i=Ye.delayedCall(0,i);else return this}return this!==i?mi(this,i,o):this},e.getChildren=function(i,o,a,s){i===void 0&&(i=!0),o===void 0&&(o=!0),a===void 0&&(a=!0),s===void 0&&(s=-Bn);for(var c=[],l=this._first;l;)l._start>=s&&(l instanceof Ye?o&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,o,a)))),l=l._next;return c},e.getById=function(i){for(var o=this.getChildren(1,1,1),a=o.length;a--;)if(o[a].vars.id===i)return o[a]},e.remove=function(i){return rt(i)?this.removeLabel(i):ze(i)?this.killTweensOf(i):(i.parent===this&&pl(this,i),i===this._recent&&(this._recent=this._last),Gr(this))},e.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Fe(sn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},e.addLabel=function(i,o){return this.labels[i]=Ln(this,o),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,o,a){var s=Ye.delayedCall(0,o||ms,a);return s.data="isPause",this._hasPause=1,mi(this,s,Ln(this,i))},e.removePause=function(i){var o=this._first;for(i=Ln(this,i);o;)o._start===i&&o.data==="isPause"&&dr(o),o=o._next},e.killTweensOf=function(i,o,a){for(var s=this.getTweensOf(i,a),c=s.length;c--;)sr!==s[c]&&s[c].kill(i,o);return this},e.getTweensOf=function(i,o){for(var a=[],s=Un(i),c=this._first,l=Oi(o),d;c;)c instanceof Ye?vw(c._targets,s)&&(l?(!sr||c._initted&&c._ts)&&c.globalTime(0)<=o&&c.globalTime(c.totalDuration())>o:!o||c.isActive())&&a.push(c):(d=c.getTweensOf(s,o)).length&&a.push.apply(a,d),c=c._next;return a},e.tweenTo=function(i,o){o=o||{};var a=this,s=Ln(a,i),c=o,l=c.startAt,d=c.onStart,u=c.onStartParams,f=c.immediateRender,h,p=Ye.to(a,wn({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:o.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||Se,onStart:function(){if(a.pause(),!h){var _=o.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());p._dur!==_&&qo(p,_,0,1).render(p._time,!0,!0),h=1}d&&d.apply(p,u||[])}},o));return f?p.render(0):p},e.tweenFromTo=function(i,o,a){return this.tweenTo(o,wn({startAt:{time:Ln(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Gp(this,Ln(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Gp(this,Ln(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,o,a){a===void 0&&(a=0);var s=this._first,c=this.labels,l;for(i=Fe(i);s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(o)for(l in c)c[l]>=a&&(c[l]+=i);return Gr(this)},e.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,a;o;)a=o._next,this.remove(o),o=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Gr(this)},e.totalDuration=function(i){var o=0,a=this,s=a._last,c=Bn,l,d,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),d=s._start,d>c&&a._sort&&s._ts&&!a._lock?(a._lock=1,mi(a,s,d-s._delay,1)._lock=0):c=d,d<0&&s._ts&&(o-=d,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Fe(d/a._ts),a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),c=0),s._end>o&&s._ts&&(o=s._end),s=l;qo(a,a===Oe&&a._time>o?a._time:o,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Oe._ts&&(tg(Oe,ul(i,Oe)),eg=sn.frame),sn.frame>=jp){jp+=ln.autoSleep||120;var o=Oe._first;if((!o||!o._ts)&&ln.autoSleep&&sn._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||sn.sleep()}}},t})(gs);wn(Ot.prototype,{_lock:0,_hasPause:0,_forcing:0});var zw=function(t,e,n,i,o,a,s){var c=new qt(this._pt,t,e,0,1,Xu,null,o),l=0,d=0,u,f,h,p,m,_,b,w;for(c.b=n,c.e=i,n+="",i+="",(b=~i.indexOf("random("))&&(i=Ko(i)),a&&(w=[n,i],a(w,t,e),n=w[0],i=w[1]),f=n.match(_u)||[];u=_u.exec(i);)p=u[0],m=i.substring(l,u.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),p!==f[d++]&&(_=parseFloat(f[d-1])||0,c._pt={_next:c._pt,p:m||d===1?m:",",s:_,c:p.charAt(1)==="="?Kr(_,p)-_:parseFloat(p)-_,m:h&&h<4?Math.round:0},l=_u.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=s,(Lu.test(i)||b)&&(c.e=0),this._pt=c,c},Wu=function(t,e,n,i,o,a,s,c,l,d){ze(i)&&(i=i(o||0,t,a));var u=t[e],f=n!=="get"?n:ze(u)?l?t[e.indexOf("set")||!ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,h=ze(u)?l?qw:Dg:Ku,p;if(rt(i)&&(~i.indexOf("random(")&&(i=Ko(i)),i.charAt(1)==="="&&(p=Kr(f,i)+(Dt(f)||0),(p||p===0)&&(i=p))),!d||f!==i||Fu)return!isNaN(f*i)&&i!==""?(p=new qt(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?Kw:Cg,0,h),l&&(p.fp=l),s&&p.modifier(s,this,t),this._pt=p):(!u&&!(e in t)&&ml(e,i),zw.call(this,t,e,f,i,h,c||ln.stringFilter,l))},Hw=function(t,e,n,i,o){if(ze(t)&&(t=us(t,o,e,n,i)),!pi(t)||t.style&&t.nodeType||kt(t)||Xp(t))return rt(t)?us(t,o,e,n,i):t;var a={},s;for(s in t)a[s]=us(t[s],o,e,n,i);return a},qu=function(t,e,n,i,o,a){var s,c,l,d;if(an[t]&&(s=new an[t]).init(o,s.rawVars?e[t]:Hw(e[t],i,o,a,n),n,i,a)!==!1&&(n._pt=c=new qt(n._pt,o,t,0,1,s.render,s,0,s.priority),n!==$o))for(l=n._ptLookup[n._targets.indexOf(o)],d=s._props.length;d--;)l[s._props[d]]=c;return s},sr,Fu,Yu=function r(t,e,n){var i=t.vars,o=i.ease,a=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,d=i.runBackwards,u=i.yoyoEase,f=i.keyframes,h=i.autoRevert,p=t._dur,m=t._startAt,_=t._targets,b=t.parent,w=b&&b.data==="nested"?b.vars.targets:_,x=t._overwrite==="auto"&&!ku,y=t.timeline,E=i.easeReverse||u,I,D,T,A,S,Y,O,ae,G,se,te,L,ce;if(y&&(!f||!o)&&(o="none"),t._ease=Wr(o,hs.ease),t._rEase=E&&(Wr(E)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||f&&!i.stagger){if(ae=_[0]?lr(_[0]).harness:0,L=ae&&i[ae.prop],I=dl(i,Uu),m&&(m._zTime<0&&m.progress(1),e<0&&d&&s&&!h?m.render(-1,!0):m.revert(d&&p?ol:gw),m._lazy=0),a){if(dr(t._startAt=Ye.set(_,wn({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!m&&cn(c),startAt:null,delay:0,onUpdate:l&&function(){return bn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(wt||!s&&!h)&&t._startAt.revert(ol),s&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(d&&p&&!m){if(e&&(s=!1),T=wn({overwrite:!1,data:"isFromStart",lazy:s&&!m&&cn(c),immediateRender:s,stagger:0,parent:b},I),L&&(T[ae.prop]=L),dr(t._startAt=Ye.set(_,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(wt?t._startAt.revert(ol):t._startAt.render(-1,!0)),t._zTime=e,!s)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,c=p&&cn(c)||c&&!p,D=0;D<_.length;D++){if(S=_[D],O=S._gsap||ju(_)[D]._gsap,t._ptLookup[D]=se={},Su[O.id]&&cr.length&&ll(),te=w===_?D:w.indexOf(S),ae&&(G=new ae).init(S,L||I,t,te,w)!==!1&&(t._pt=A=new qt(t._pt,S,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(ye){se[ye]=A}),G.priority&&(Y=1)),!ae||L)for(T in I)an[T]&&(G=qu(T,I,t,te,S,w))?G.priority&&(Y=1):se[T]=A=Wu.call(t,S,T,"get",I[T],te,w,0,i.stringFilter);t._op&&t._op[D]&&t.kill(S,t._op[D]),x&&t._pt&&(sr=t,Oe.killTweensOf(S,se,t.globalTime(e)),ce=!t.parent,sr=0),t._pt&&c&&(Su[O.id]=1)}Y&&Qu(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!ce,f&&e<=0&&y.render(Bn,!0,!0)},$w=function(t,e,n,i,o,a,s,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],d,u,f,h;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,h=t._targets.length;h--;){if(d=f[h][e],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==e&&d.fp!==e;)d=d._next;if(!d)return Fu=1,t.vars[e]="+=0",Yu(t,s),Fu=0,c?fs(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(d)}for(h=l.length;h--;)u=l[h],d=u._pt||u,d.s=(i||i===0)&&!o?i:d.s+(i||0)+a*d.c,d.c=n-d.s,u.e&&(u.e=He(n)+Dt(u.e)),u.b&&(u.b=d.s+Dt(u.b))},Gw=function(t,e){var n=t[0]?lr(t[0]).harness:0,i=n&&n.aliases,o,a,s,c;if(!i)return e;o=Go({},e);for(a in i)if(a in o)for(c=i[a].split(","),s=c.length;s--;)o[c[s]]=o[a];return o},Ww=function(t,e,n,i){var o=e.ease||i||"power1.inOut",a,s;if(kt(e))s=n[t]||(n[t]=[]),e.forEach(function(c,l){return s.push({t:l/(e.length-1)*100,v:c,e:o})});else for(a in e)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:o})},us=function(t,e,n,i,o){return ze(t)?t.call(e,n,i,o):rt(t)&&~t.indexOf("random(")?Ko(t):t},yg=Vu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",wg={};Wt(yg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return wg[r]=1});var Ye=(function(r){Yp(t,r);function t(n,i,o,a){var s;typeof i=="number"&&(o.duration=i,i=o,o=null),s=r.call(this,a?i:ls(i))||this;var c=s.vars,l=c.duration,d=c.delay,u=c.immediateRender,f=c.stagger,h=c.overwrite,p=c.keyframes,m=c.defaults,_=c.scrollTrigger,b=i.parent||Oe,w=(kt(n)||Xp(n)?Oi(n[0]):"length"in i)?[n]:Un(n),x,y,E,I,D,T,A,S;if(s._targets=w.length?ju(w):fs("GSAP target "+n+" not found. https://gsap.com",!ln.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=h,p||f||rl(l)||rl(d)){i=s.vars;var Y=i.easeReverse||i.yoyoEase;if(x=s.timeline=new Ot({data:"nested",defaults:m||{},targets:b&&b.data==="nested"?b.vars.targets:w}),x.kill(),x.parent=x._dp=Ri(s),x._start=0,f||rl(l)||rl(d)){if(I=w.length,A=f&&dg(f),pi(f))for(D in f)~yg.indexOf(D)&&(S||(S={}),S[D]=f[D]);for(y=0;y<I;y++)E=dl(i,wg),E.stagger=0,Y&&(E.easeReverse=Y),S&&Go(E,S),T=w[y],E.duration=+us(l,Ri(s),y,T,w),E.delay=(+us(d,Ri(s),y,T,w)||0)-s._delay,!f&&I===1&&E.delay&&(s._delay=d=E.delay,s._start+=d,E.delay=0),x.to(T,E,A?A(y,T,w):0),x._ease=oe.none;x.duration()?l=d=0:s.timeline=0}else if(p){ls(wn(x.vars.defaults,{ease:"none"})),x._ease=Wr(p.ease||i.ease||"none");var O=0,ae,G,se;if(kt(p))p.forEach(function(te){return x.to(w,te,">")}),x.duration();else{E={};for(D in p)D==="ease"||D==="easeEach"||Ww(D,p[D],E,p.easeEach);for(D in E)for(ae=E[D].sort(function(te,L){return te.t-L.t}),O=0,y=0;y<ae.length;y++)G=ae[y],se={ease:G.e,duration:(G.t-(y?ae[y-1].t:0))/100*l},se[D]=G.v,x.to(w,se,O),O+=se.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||s.duration(l=x.duration())}else s.timeline=0;return h===!0&&!ku&&(sr=Ri(s),Oe.killTweensOf(w),sr=0),mi(b,Ri(s),o),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(u||!l&&!p&&s._start===Fe(b._time)&&cn(u)&&Dw(Ri(s))&&b.data!=="nested")&&(s._tTime=-Se,s.render(Math.max(0,-d)||0)),_&&ag(Ri(s),_),s}var e=t.prototype;return e.render=function(i,o,a){var s=this._time,c=this._tDur,l=this._dur,d=i<0,u=i>c-Se&&!d?c:i<Se?0:i,f,h,p,m,_,b,w,x;if(!l)xw(this,i,o,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(f=u,x=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&d)return this.totalTime(m*100+i,o,a);if(f=Fe(u%m),u===c?(p=this._repeat,f=l):(_=Fe(u/m),p=~~_,p&&p===_?(f=l,p--):f>l&&(f=l)),b=this._yoyo&&p&1,b&&(f=l-f),_=Wo(this._tTime,m),f===s&&!a&&this._initted&&p===_)return this._tTime=u,this;p!==_&&this.vars.repeatRefresh&&!b&&!this._lock&&f!==m&&this._initted&&(this._lock=a=1,this.render(Fe(m*p),!0).invalidate()._lock=0)}if(!this._initted){if(sg(this,d?i:f,a,o,u))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&p!==_))return this;if(l!==this._dur)return this.render(i,o,a)}if(this._rEase){var y=f<s;if(y!==this._inv){var E=y?s:l-s;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=E?(y?-1:1)/E:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(f/l);if(this._from&&(this.ratio=w=1-w),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&u&&!o&&!_&&(bn(this,"onStart"),this._tTime!==u))return this;for(h=this._pt;h;)h.r(w,h.d),h=h._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),o,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(d&&Au(this,i,o,a),bn(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!o&&this.parent&&bn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(d&&!this._onUpdate&&Au(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&dr(this,1),!o&&!(d&&!s)&&(u||s||b)&&(bn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,o,a,s,c){ps||sn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Yu(this,l),d=this._ease(l/this._dur),$w(this,i,o,a,s,d,l,c)?this.resetTo(i,o,a,s,1):(_l(this,0),this.parent||rg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?ss(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,sr&&sr.vars.overwrite!==!0)._first||ss(this),this.parent&&a!==this.timeline.totalDuration()&&qo(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,c=i?Un(i):s,l=this._ptLookup,d=this._pt,u,f,h,p,m,_,b;if((!o||o==="all")&&yw(s,c))return o==="all"&&(this._pt=0),ss(this);for(u=this._op=this._op||[],o!=="all"&&(rt(o)&&(m={},Wt(o,function(w){return m[w]=1}),o=m),o=Gw(s,o)),b=s.length;b--;)if(~c.indexOf(s[b])){f=l[b],o==="all"?(u[b]=o,p=f,h={}):(h=u[b]=u[b]||{},p=o);for(m in p)_=f&&f[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&pl(this,_,"_pt"),delete f[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&d&&ss(this),this},t.to=function(i,o){return new t(i,o,arguments[2])},t.from=function(i,o){return ds(1,arguments)},t.delayedCall=function(i,o,a,s){return new t(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(i,o,a){return ds(2,arguments)},t.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new t(i,o)},t.killTweensOf=function(i,o,a){return Oe.killTweensOf(i,o,a)},t})(gs);wn(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wt("staggerTo,staggerFrom,staggerFromTo",function(r){Ye[r]=function(){var t=new Ot,e=Iu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Ku=function(t,e,n){return t[e]=n},Dg=function(t,e,n){return t[e](n)},qw=function(t,e,n,i){return t[e](i.fp,n)},Yw=function(t,e,n){return t.setAttribute(e,n)},vl=function(t,e){return ze(t[e])?Dg:fl(t[e])&&t.setAttribute?Yw:Ku},Cg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Kw=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Xu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Zu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Xw=function(t,e,n,i){for(var o=this._pt,a;o;)a=o._next,o.p===i&&o.modifier(t,e,n),o=a},Zw=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?pl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Qw=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Qu=function(t){for(var e=t._pt,n,i,o,a;e;){for(n=e._next,i=o;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:o=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=o},qt=(function(){function r(e,n,i,o,a,s,c,l,d){this.t=n,this.s=o,this.c=a,this.p=i,this.r=s||Cg,this.d=c||this,this.set=l||Ku,this.pr=d||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,o){this.mSet=this.mSet||this.set,this.set=Qw,this.m=n,this.mt=o,this.tween=i},r})();Wt(Vu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Uu[r]=1});yn.TweenMax=yn.TweenLite=Ye;yn.TimelineLite=yn.TimelineMax=Ot;Oe=new Ot({sortChildren:!1,defaults:hs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ln.stringFilter=$u;var qr=[],sl={},Jw=[],qp=0,eD=0,Du=function(t){return(sl[t]||Jw).map(function(e){return e()})},Ou=function(){var t=Date.now(),e=[];t-qp>2&&(Du("matchMediaInit"),qr.forEach(function(n){var i=n.queries,o=n.conditions,a,s,c,l;for(s in i)a=fi.matchMedia(i[s]).matches,a&&(c=1),a!==o[s]&&(o[s]=a,l=1);l&&(n.revert(),c&&e.push(n))}),Du("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),qp=t,Du("matchMedia"))},xg=(function(){function r(e,n){this.selector=n&&Tu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=eD++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,o){ze(n)&&(o=i,i=n,n=ze);var a=this,s=function(){var l=Te,d=a.selector,u;return l&&l!==a&&l.data.push(a),o&&(a.selector=Tu(o)),Te=a,u=i.apply(a,arguments),ze(u)&&a._r.push(u),Te=l,a.selector=d,a.isReverted=!1,u};return a.last=s,n===ze?s(a,function(c){return a.add(null,c)}):n?a[n]=s:s},t.ignore=function(n){var i=Te;Te=null,n(this),Te=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var o=this;if(n?(function(){for(var s=o.getTweens(),c=o.data.length,l;c--;)l=o.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(d){return s.splice(s.indexOf(d),1)}));for(s.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,u){return u.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=o.data.length;c--;)l=o.data[c],l instanceof Ot?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ye)&&l.revert&&l.revert(n);o._r.forEach(function(d){return d(n,o)}),o.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var a=qr.length;a--;)qr[a].id===this.id&&qr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),tD=(function(){function r(e){this.contexts=[],this.scope=e,Te&&Te.data.push(this)}var t=r.prototype;return t.add=function(n,i,o){pi(n)||(n={matches:n});var a=new xg(0,o||this.scope),s=a.conditions={},c,l,d;Te&&!a.selector&&(a.selector=Te.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?d=1:(c=fi.matchMedia(n[l]),c&&(qr.indexOf(a)<0&&qr.push(a),(s[l]=c.matches)&&(d=1),c.addListener?c.addListener(Ou):c.addEventListener("change",Ou)));return d&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),hl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return gg(i)})},timeline:function(t){return new Ot(t)},getTweensOf:function(t,e){return Oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){rt(t)&&(t=Un(t)[0]);var o=lr(t||{}).get,a=n?ig:ng;return n==="native"&&(n=""),t&&(e?a((an[e]&&an[e].get||o)(t,e,n,i)):function(s,c,l){return a((an[s]&&an[s].get||o)(t,s,c,l))})},quickSetter:function(t,e,n){if(t=Un(t),t.length>1){var i=t.map(function(d){return Pt.quickSetter(d,e,n)}),o=i.length;return function(d){for(var u=o;u--;)i[u](d)}}t=t[0]||{};var a=an[e],s=lr(t),c=s.harness&&(s.harness.aliases||{})[e]||e,l=a?function(d){var u=new a;$o._pt=0,u.init(t,n?d+n:d,$o,0,[t]),u.render(1,u),$o._pt&&Zu(1,$o)}:s.set(t,c);return a?l:function(d){return l(t,c,n?d+n:d,s,1)}},quickTo:function(t,e,n){var i,o=Pt.to(t,wn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,d){return o.resetTo(e,c,l,d)};return a.tween=o,a},isTweening:function(t){return Oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Wr(t.ease,hs.ease)),zp(hs,t||{})},config:function(t){return zp(ln,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,o=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!an[s]&&!yn[s]&&fs(e+" effect requires "+s+" plugin.")}),vu[e]=function(s,c,l){return n(Un(s),wn(c||{},o),l)},a&&(Ot.prototype[e]=function(s,c,l){return this.add(vu[e](s,pi(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){oe[t]=Wr(e)},parseEase:function(t,e){return arguments.length?Wr(t,e):oe},getById:function(t){return Oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ot(t),i,o;for(n.smoothChildTiming=cn(t.smoothChildTiming),Oe.remove(n),n._dp=0,n._time=n._tTime=Oe._time,i=Oe._first;i;)o=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&mi(n,i,i._start-i._delay),i=o;return mi(Oe,n,0),n},context:function(t,e){return t?new xg(t,e):Te},matchMedia:function(t){return new tD(t)},matchMediaRefresh:function(){return qr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ou()},addEventListener:function(t,e){var n=sl[t]||(sl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=sl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Fw,wrapYoyo:Ow,distribute:dg,random:hg,snap:ug,normalize:Rw,getUnit:Dt,clamp:Aw,splitColor:_g,toArray:Un,selector:Tu,mapRange:mg,pipe:Iw,unitize:Tw,interpolate:kw,shuffle:lg},install:Qp,effects:vu,ticker:sn,updateRoot:Ot.updateRoot,plugins:an,globalTimeline:Oe,core:{PropTween:qt,globals:Jp,Tween:Ye,Timeline:Ot,Animation:gs,getCache:lr,_removeLinkedListItem:pl,reverting:function(){return wt},context:function(t){return t&&Te&&(Te.data.push(t),t._ctx=Te),Te},suppressOverwrites:function(t){return ku=t}}};Wt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return hl[r]=Ye[r]});sn.add(Ot.updateRoot);$o=hl.to({},{duration:0});var nD=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},iD=function(t,e){var n=t._targets,i,o,a;for(i in e)for(o=n.length;o--;)a=t._ptLookup[o][i],a&&(a=a.d)&&(a._pt&&(a=nD(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[o],i))},Cu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,o,a){a._onInit=function(s){var c,l;if(rt(o)&&(c={},Wt(o,function(d){return c[d]=1}),o=c),e){c={};for(l in o)c[l]=e(o[l]);o=c}iD(s,o)}}}},Pt=hl.registerPlugin({name:"attr",init:function(t,e,n,i,o){var a,s,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(c||0)+"",e[a],i,o,0,0,a),s.op=a,s.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)wt?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Cu("roundProps",Ru),Cu("modifiers"),Cu("snap",ug))||hl;Ye.version=Ot.version=Pt.version="3.15.0";Zp=1;Pu()&&Yo();var rD=oe.Power0,oD=oe.Power1,aD=oe.Power2,sD=oe.Power3,cD=oe.Power4,lD=oe.Linear,dD=oe.Quad,uD=oe.Cubic,hD=oe.Quart,fD=oe.Quint,mD=oe.Strong,pD=oe.Elastic,gD=oe.Back,_D=oe.SteppedEase,vD=oe.Bounce,bD=oe.Sine,yD=oe.Expo,wD=oe.Circ;var Eg,hr,Zo,rh,eo,DD,Sg,oh,CD=function(){return typeof window<"u"},Pi={},Jr=180/Math.PI,Qo=Math.PI/180,Xo=Math.atan2,Ag=1e8,ah=/([A-Z])/g,xD=/(left|right|width|margin|padding|x)/i,ED=/[\s,\(]\S/,gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},SD=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},AD=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},MD=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ID=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Pg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ng=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},TD=function(t,e,n){return t.style[e]=n},RD=function(t,e,n){return t.style.setProperty(e,n)},FD=function(t,e,n){return t._gsap[e]=n},OD=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},kD=function(t,e,n,i,o){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(o,a)},PD=function(t,e,n,i,o){var a=t._gsap;a[e]=n,a.renderTransform(o,a)},ke="transform",dn=ke+"Origin",ND=function r(t,e){var n=this,i=this.target,o=i.style,a=i._gsap;if(t in Pi&&o){if(this.tfm=this.tfm||{},t!=="transform")t=gi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return n.tfm[s]=ki(i,s)}):this.tfm[t]=a.x?a[t]:ki(i,t),t===dn&&(this.tfm.zOrigin=a.zOrigin);else return gi.transform.split(",").forEach(function(s){return r.call(n,s,e)});if(this.props.indexOf(ke)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(dn,e,"")),t=ke}(o||e)&&this.props.push(t,e,o[t])},Lg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},LD=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,o,a;for(o=0;o<t.length;o+=3)t[o+1]?t[o+1]===2?e[t[o]](t[o+2]):e[t[o]]=t[o+2]:t[o+2]?n[t[o]]=t[o+2]:n.removeProperty(t[o].substr(0,2)==="--"?t[o]:t[o].replace(ah,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),o=oh(),(!o||!o.isStart)&&!n[ke]&&(Lg(n),i.zOrigin&&n[dn]&&(n[dn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bg=function(t,e){var n={target:t,props:[],revert:LD,save:ND};return t._gsap||Pt.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Ug,th=function(t,e){var n=hr.createElementNS?hr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):hr.createElement(t);return n&&n.style?n:hr.createElement(t)},Dn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ah,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Jo(e)||e,1)||""},Mg="O,Moz,ms,Ms,Webkit".split(","),Jo=function(t,e,n){var i=e||eo,o=i.style,a=5;if(t in o&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Mg[a]+t in o););return a<0?null:(a===3?"ms":a>=0?Mg[a]:"")+t},nh=function(){CD()&&window.document&&(Eg=window,hr=Eg.document,Zo=hr.documentElement,eo=th("div")||{style:{}},DD=th("div"),ke=Jo(ke),dn=ke+"Origin",eo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ug=!!Jo("perspective"),oh=Pt.core.reverting,rh=1)},Ig=function(t){var e=t.ownerSVGElement,n=th("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),o;i.style.display="block",n.appendChild(i),Zo.appendChild(n);try{o=i.getBBox()}catch{}return n.removeChild(i),Zo.removeChild(n),o},Tg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Vg=function(t){var e,n;try{e=t.getBBox()}catch{e=Ig(t),n=1}return e&&(e.width||e.height)||n||(e=Ig(t)),e&&!e.width&&!e.x&&!e.y?{x:+Tg(t,["x","cx","x1"])||0,y:+Tg(t,["y","cy","y1"])||0,width:0,height:0}:e},jg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Vg(t))},mr=function(t,e){if(e){var n=t.style,i;e in Pi&&e!==dn&&(e=ke),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ah,"-$1").toLowerCase())):n.removeAttribute(e)}},fr=function(t,e,n,i,o,a){var s=new qt(t._pt,e,n,0,1,a?Ng:Pg);return t._pt=s,s.b=i,s.e=o,t._props.push(n),s},Rg={deg:1,rad:1,turn:1},BD={grid:1,flex:1},pr=function r(t,e,n,i){var o=parseFloat(n)||0,a=(n+"").trim().substr((o+"").length)||"px",s=eo.style,c=xD.test(e),l=t.tagName.toLowerCase()==="svg",d=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=i==="px",h=i==="%",p,m,_,b;if(i===a||!o||Rg[i]||Rg[a])return o;if(a!=="px"&&!f&&(o=r(t,e,n,"px")),b=t.getCTM&&jg(t),(h||a==="%")&&(Pi[e]||~e.indexOf("adius")))return p=b?t.getBBox()[c?"width":"height"]:t[d],He(h?o/p*u:o/100*p);if(s[c?"width":"height"]=u+(f?a:i),m=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,b&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===hr||!m.appendChild)&&(m=hr.body),_=m._gsap,_&&h&&_.width&&c&&_.time===sn.time&&!_.uncache)return He(o/_.width*u);if(h&&(e==="height"||e==="width")){var w=t.style[e];t.style[e]=u+i,p=t[d],w?t.style[e]=w:mr(t,e)}else(h||a==="%")&&!BD[Dn(m,"display")]&&(s.position=Dn(t,"position")),m===t&&(s.position="static"),m.appendChild(eo),p=eo[d],m.removeChild(eo),s.position="absolute";return c&&h&&(_=lr(m),_.time=sn.time,_.width=m[d]),He(f?p*o/u:p&&o?u/p*o:0)},ki=function(t,e,n,i){var o;return rh||nh(),e in gi&&e!=="transform"&&(e=gi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Pi[e]&&e!=="transform"?(o=ys(t,i),o=e!=="transformOrigin"?o[e]:o.svg?o.origin:yl(Dn(t,dn))+" "+o.zOrigin+"px"):(o=t.style[e],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=bl[e]&&bl[e](t,e,n)||Dn(t,e)||zu(t,e)||(e==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?pr(t,e,o,n)+n:o},UD=function(t,e,n,i){if(!n||n==="none"){var o=Jo(e,t,1),a=o&&Dn(t,o,1);a&&a!==n?(e=o,n=a):e==="borderColor"&&(n=Dn(t,"borderTopColor"))}var s=new qt(this._pt,t.style,e,0,1,Xu),c=0,l=0,d,u,f,h,p,m,_,b,w,x,y,E;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Dn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(m=t.style[e],t.style[e]=i,i=Dn(t,e)||i,m?t.style[e]=m:mr(t,e)),d=[n,i],$u(d),n=d[0],i=d[1],f=n.match(Yr)||[],E=i.match(Yr)||[],E.length){for(;u=Yr.exec(i);)_=u[0],w=i.substring(c,u.index),p?p=(p+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(p=1),_!==(m=f[l++]||"")&&(h=parseFloat(m)||0,y=m.substr((h+"").length),_.charAt(1)==="="&&(_=Kr(h,_)+y),b=parseFloat(_),x=_.substr((b+"").length),c=Yr.lastIndex-x.length,x||(x=x||ln.units[e]||y,c===i.length&&(i+=x,s.e+=x)),y!==x&&(h=pr(t,e,m,x)||0),s._pt={_next:s._pt,p:w||l===1?w:",",s:h,c:b-h,m:p&&p<4||e==="zIndex"?Math.round:0});s.c=c<i.length?i.substring(c,i.length):""}else s.r=e==="display"&&i==="none"?Ng:Pg;return Lu.test(i)&&(s.e=0),this._pt=s,s},Fg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},VD=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Fg[n]||n,e[1]=Fg[i]||i,e.join(" ")},jD=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,o=e.u,a=n._gsap,s,c,l;if(o==="all"||o===!0)i.cssText="",c=1;else for(o=o.split(","),l=o.length;--l>-1;)s=o[l],Pi[s]&&(c=1,s=s==="transformOrigin"?dn:ke),mr(n,s);c&&(mr(n,ke),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ys(n,1),a.uncache=1,Lg(i)))}},bl={clearProps:function(t,e,n,i,o){if(o.data!=="isFromStart"){var a=t._pt=new qt(t._pt,e,n,0,0,jD);return a.u=i,a.pr=-10,a.tween=o,t._props.push(n),1}}},bs=[1,0,0,1,0,0],zg={},Hg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Og=function(t){var e=Dn(t,ke);return Hg(e)?bs:e.substr(7).match(Nu).map(He)},sh=function(t,e){var n=t._gsap||lr(t),i=t.style,o=Og(t),a,s,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,o=[c.a,c.b,c.c,c.d,c.e,c.f],o.join(",")==="1,0,0,1,0,0"?bs:o):(o===bs&&!t.offsetParent&&t!==Zo&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,s=t.nextElementSibling,Zo.appendChild(t)),o=Og(t),c?i.display=c:mr(t,"display"),l&&(s?a.insertBefore(t,s):a?a.appendChild(t):Zo.removeChild(t))),e&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},ih=function(t,e,n,i,o,a){var s=t._gsap,c=o||sh(t,!0),l=s.xOrigin||0,d=s.yOrigin||0,u=s.xOffset||0,f=s.yOffset||0,h=c[0],p=c[1],m=c[2],_=c[3],b=c[4],w=c[5],x=e.split(" "),y=parseFloat(x[0])||0,E=parseFloat(x[1])||0,I,D,T,A;n?c!==bs&&(D=h*_-p*m)&&(T=y*(_/D)+E*(-m/D)+(m*w-_*b)/D,A=y*(-p/D)+E*(h/D)-(h*w-p*b)/D,y=T,E=A):(I=Vg(t),y=I.x+(~x[0].indexOf("%")?y/100*I.width:y),E=I.y+(~(x[1]||x[0]).indexOf("%")?E/100*I.height:E)),i||i!==!1&&s.smooth?(b=y-l,w=E-d,s.xOffset=u+(b*h+w*m)-b,s.yOffset=f+(b*p+w*_)-w):s.xOffset=s.yOffset=0,s.xOrigin=y,s.yOrigin=E,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[dn]="0px 0px",a&&(fr(a,s,"xOrigin",l,y),fr(a,s,"yOrigin",d,E),fr(a,s,"xOffset",u,s.xOffset),fr(a,s,"yOffset",f,s.yOffset)),t.setAttribute("data-svg-origin",y+" "+E)},ys=function(t,e){var n=t._gsap||new Gu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,o=n.scaleX<0,a="px",s="deg",c=getComputedStyle(t),l=Dn(t,dn)||"0",d,u,f,h,p,m,_,b,w,x,y,E,I,D,T,A,S,Y,O,ae,G,se,te,L,ce,ye,v,Ae,jt,Hn,Pe,ft;return d=u=f=m=_=b=w=x=y=0,h=p=1,n.svg=!!(t.getCTM&&jg(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ke]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ke]!=="none"?c[ke]:"")),i.scale=i.rotate=i.translate="none"),D=sh(t,n.svg),n.svg&&(n.uncache?(ce=t.getBBox(),l=n.xOrigin-ce.x+"px "+(n.yOrigin-ce.y)+"px",L=""):L=!e&&t.getAttribute("data-svg-origin"),ih(t,L||l,!!L||n.originIsAbsolute,n.smooth!==!1,D)),E=n.xOrigin||0,I=n.yOrigin||0,D!==bs&&(Y=D[0],O=D[1],ae=D[2],G=D[3],d=se=D[4],u=te=D[5],D.length===6?(h=Math.sqrt(Y*Y+O*O),p=Math.sqrt(G*G+ae*ae),m=Y||O?Xo(O,Y)*Jr:0,w=ae||G?Xo(ae,G)*Jr+m:0,w&&(p*=Math.abs(Math.cos(w*Qo))),n.svg&&(d-=E-(E*Y+I*ae),u-=I-(E*O+I*G))):(ft=D[6],Hn=D[7],v=D[8],Ae=D[9],jt=D[10],Pe=D[11],d=D[12],u=D[13],f=D[14],T=Xo(ft,jt),_=T*Jr,T&&(A=Math.cos(-T),S=Math.sin(-T),L=se*A+v*S,ce=te*A+Ae*S,ye=ft*A+jt*S,v=se*-S+v*A,Ae=te*-S+Ae*A,jt=ft*-S+jt*A,Pe=Hn*-S+Pe*A,se=L,te=ce,ft=ye),T=Xo(-ae,jt),b=T*Jr,T&&(A=Math.cos(-T),S=Math.sin(-T),L=Y*A-v*S,ce=O*A-Ae*S,ye=ae*A-jt*S,Pe=G*S+Pe*A,Y=L,O=ce,ae=ye),T=Xo(O,Y),m=T*Jr,T&&(A=Math.cos(T),S=Math.sin(T),L=Y*A+O*S,ce=se*A+te*S,O=O*A-Y*S,te=te*A-se*S,Y=L,se=ce),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,b=180-b),h=He(Math.sqrt(Y*Y+O*O+ae*ae)),p=He(Math.sqrt(te*te+ft*ft)),T=Xo(se,te),w=Math.abs(T)>2e-4?T*Jr:0,y=Pe?1/(Pe<0?-Pe:Pe):0),n.svg&&(L=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Hg(Dn(t,ke)),L&&t.setAttribute("transform",L))),Math.abs(w)>90&&Math.abs(w)<270&&(o?(h*=-1,w+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,w+=w<=0?180:-180)),e=e||n.uncache,n.x=d-((n.xPercent=d&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-d)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=He(h),n.scaleY=He(p),n.rotation=He(m)+s,n.rotationX=He(_)+s,n.rotationY=He(b)+s,n.skewX=w+s,n.skewY=x+s,n.transformPerspective=y+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[dn]=yl(l)),n.xOffset=n.yOffset=0,n.force3D=ln.force3D,n.renderTransform=n.svg?HD:Ug?$g:zD,n.uncache=0,n},yl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ju=function(t,e,n){var i=Dt(e);return He(parseFloat(e)+parseFloat(pr(t,"x",n+"px",i)))+i},zD=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,$g(t,e)},Zr="0deg",vs="0px",Qr=") ",$g=function(t,e){var n=e||this,i=n.xPercent,o=n.yPercent,a=n.x,s=n.y,c=n.z,l=n.rotation,d=n.rotationY,u=n.rotationX,f=n.skewX,h=n.skewY,p=n.scaleX,m=n.scaleY,_=n.transformPerspective,b=n.force3D,w=n.target,x=n.zOrigin,y="",E=b==="auto"&&t&&t!==1||b===!0;if(x&&(u!==Zr||d!==Zr)){var I=parseFloat(d)*Qo,D=Math.sin(I),T=Math.cos(I),A;I=parseFloat(u)*Qo,A=Math.cos(I),a=Ju(w,a,D*A*-x),s=Ju(w,s,-Math.sin(I)*-x),c=Ju(w,c,T*A*-x+x)}_!==vs&&(y+="perspective("+_+Qr),(i||o)&&(y+="translate("+i+"%, "+o+"%) "),(E||a!==vs||s!==vs||c!==vs)&&(y+=c!==vs||E?"translate3d("+a+", "+s+", "+c+") ":"translate("+a+", "+s+Qr),l!==Zr&&(y+="rotate("+l+Qr),d!==Zr&&(y+="rotateY("+d+Qr),u!==Zr&&(y+="rotateX("+u+Qr),(f!==Zr||h!==Zr)&&(y+="skew("+f+", "+h+Qr),(p!==1||m!==1)&&(y+="scale("+p+", "+m+Qr),w.style[ke]=y||"translate(0, 0)"},HD=function(t,e){var n=e||this,i=n.xPercent,o=n.yPercent,a=n.x,s=n.y,c=n.rotation,l=n.skewX,d=n.skewY,u=n.scaleX,f=n.scaleY,h=n.target,p=n.xOrigin,m=n.yOrigin,_=n.xOffset,b=n.yOffset,w=n.forceCSS,x=parseFloat(a),y=parseFloat(s),E,I,D,T,A;c=parseFloat(c),l=parseFloat(l),d=parseFloat(d),d&&(d=parseFloat(d),l+=d,c+=d),c||l?(c*=Qo,l*=Qo,E=Math.cos(c)*u,I=Math.sin(c)*u,D=Math.sin(c-l)*-f,T=Math.cos(c-l)*f,l&&(d*=Qo,A=Math.tan(l-d),A=Math.sqrt(1+A*A),D*=A,T*=A,d&&(A=Math.tan(d),A=Math.sqrt(1+A*A),E*=A,I*=A)),E=He(E),I=He(I),D=He(D),T=He(T)):(E=u,T=f,I=D=0),(x&&!~(a+"").indexOf("px")||y&&!~(s+"").indexOf("px"))&&(x=pr(h,"x",a,"px"),y=pr(h,"y",s,"px")),(p||m||_||b)&&(x=He(x+p-(p*E+m*D)+_),y=He(y+m-(p*I+m*T)+b)),(i||o)&&(A=h.getBBox(),x=He(x+i/100*A.width),y=He(y+o/100*A.height)),A="matrix("+E+","+I+","+D+","+T+","+x+","+y+")",h.setAttribute("transform",A),w&&(h.style[ke]=A)},$D=function(t,e,n,i,o){var a=360,s=rt(o),c=parseFloat(o)*(s&&~o.indexOf("rad")?Jr:1),l=c-i,d=i+l+"deg",u,f;return s&&(u=o.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Ag)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Ag)%a-~~(l/a)*a)),t._pt=f=new qt(t._pt,e,n,i,l,SD),f.e=d,f.u="deg",t._props.push(n),f},kg=function(t,e){for(var n in e)t[n]=e[n];return t},GD=function(t,e,n){var i=kg({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,c,l,d,u,f,h,p;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[ke]=e,s=ys(n,1),mr(n,ke),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ke],a[ke]=e,s=ys(n,1),a[ke]=l);for(c in Pi)l=i[c],d=s[c],l!==d&&o.indexOf(c)<0&&(h=Dt(l),p=Dt(d),u=h!==p?pr(n,c,l,p):parseFloat(l),f=parseFloat(d),t._pt=new qt(t._pt,s,c,u,f-u,eh),t._pt.u=p||0,t._props.push(c));kg(s,i)};Wt("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",o="Left",a=(t<3?[e,n,i,o]:[e+o,e+n,i+n,i+o]).map(function(s){return t<2?r+s:"border"+s+r});bl[t>1?"border"+r:r]=function(s,c,l,d,u){var f,h;if(arguments.length<4)return f=a.map(function(p){return ki(s,p,l)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(d+"").split(" "),h={},a.forEach(function(p,m){return h[p]=f[m]=f[m]||f[(m-1)/2|0]}),s.init(c,h,u)}});var ch={name:"css",register:nh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,o){var a=this._props,s=t.style,c=n.vars.startAt,l,d,u,f,h,p,m,_,b,w,x,y,E,I,D,T,A;rh||nh(),this.styles=this.styles||Bg(t),T=this.styles.props,this.tween=n;for(m in e)if(m!=="autoRound"&&(d=e[m],!(an[m]&&qu(m,e,n,i,t,o)))){if(h=typeof d,p=bl[m],h==="function"&&(d=d.call(n,i,t,o),h=typeof d),h==="string"&&~d.indexOf("random(")&&(d=Ko(d)),p)p(this,t,m,d,n)&&(D=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(m)+"").trim(),d+="",Fi.lastIndex=0,Fi.test(l)||(_=Dt(l),b=Dt(d),b?_!==b&&(l=pr(t,m,l,b)+b):_&&(d+=_)),this.add(s,"setProperty",l,d,i,o,0,0,m),a.push(m),T.push(m,0,s[m]);else if(h!=="undefined"){if(c&&m in c?(l=typeof c[m]=="function"?c[m].call(n,i,t,o):c[m],rt(l)&&~l.indexOf("random(")&&(l=Ko(l)),Dt(l+"")||l==="auto"||(l+=ln.units[m]||Dt(ki(t,m))||""),(l+"").charAt(1)==="="&&(l=ki(t,m))):l=ki(t,m),f=parseFloat(l),w=h==="string"&&d.charAt(1)==="="&&d.substr(0,2),w&&(d=d.substr(2)),u=parseFloat(d),m in gi&&(m==="autoAlpha"&&(f===1&&ki(t,"visibility")==="hidden"&&u&&(f=0),T.push("visibility",0,s.visibility),fr(this,s,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),m!=="scale"&&m!=="transform"&&(m=gi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in Pi,x){if(this.styles.save(m),A=d,h==="string"&&d.substring(0,6)==="var(--"){if(d=Dn(t,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=d,d=Dn(t,"perspective"),S?t.style.perspective=S:mr(t,"perspective")}u=parseFloat(d)}if(y||(E=t._gsap,E.renderTransform&&!e.parseTransform||ys(t,e.parseTransform),I=e.smoothOrigin!==!1&&E.smooth,y=this._pt=new qt(this._pt,s,ke,0,1,E.renderTransform,E,0,-1),y.dep=1),m==="scale")this._pt=new qt(this._pt,E,"scaleY",E.scaleY,(w?Kr(E.scaleY,w+u):u)-E.scaleY||0,eh),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){T.push(dn,0,s[dn]),d=VD(d),E.svg?ih(t,d,0,I,0,this):(b=parseFloat(d.split(" ")[2])||0,b!==E.zOrigin&&fr(this,E,"zOrigin",E.zOrigin,b),fr(this,s,m,yl(l),yl(d)));continue}else if(m==="svgOrigin"){ih(t,d,1,I,0,this);continue}else if(m in zg){$D(this,E,m,f,w?Kr(f,w+d):d);continue}else if(m==="smoothOrigin"){fr(this,E,"smooth",E.smooth,d);continue}else if(m==="force3D"){E[m]=d;continue}else if(m==="transform"){GD(this,d,t);continue}}else m in s||(m=Jo(m)||m);if(x||(u||u===0)&&(f||f===0)&&!ED.test(d)&&m in s)_=(l+"").substr((f+"").length),u||(u=0),b=Dt(d)||(m in ln.units?ln.units[m]:_),_!==b&&(f=pr(t,m,l,b)),this._pt=new qt(this._pt,x?E:s,m,f,(w?Kr(f,w+u):u)-f,!x&&(b==="px"||m==="zIndex")&&e.autoRound!==!1?ID:eh),this._pt.u=b||0,x&&A!==d?(this._pt.b=l,this._pt.e=A,this._pt.r=MD):_!==b&&b!=="%"&&(this._pt.b=l,this._pt.r=AD);else if(m in s)UD.call(this,t,m,l,w?w+d:d);else if(m in t)this.add(t,m,l||t[m],w?w+d:d,i,o);else if(m!=="parseTransform"){ml(m,d);continue}x||(m in s?T.push(m,0,s[m]):typeof t[m]=="function"?T.push(m,2,t[m]()):T.push(m,1,l||t[m])),a.push(m)}}D&&Qu(this)},render:function(t,e){if(e.tween._time||!oh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ki,aliases:gi,getSetter:function(t,e,n){var i=gi[e];return i&&i.indexOf(",")<0&&(e=i),e in Pi&&e!==dn&&(t._gsap.x||ki(t,"x"))?n&&Sg===n?e==="scale"?OD:FD:(Sg=n||{})&&(e==="scale"?kD:PD):t.style&&!fl(t.style[e])?TD:~e.indexOf("-")?RD:vl(t,e)},core:{_removeProperty:mr,_getMatrix:sh}};Pt.utils.checkPrefix=Jo;Pt.core.getStyleSaver=Bg;(function(r,t,e,n){var i=Wt(r+","+t+","+e,function(o){Pi[o]=1});Wt(t,function(o){ln.units[o]="deg",zg[o]=1}),gi[i[13]]=r+","+t,Wt(n,function(o){var a=o.split(":");gi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ln.units[r]="px"});Pt.registerPlugin(ch);var Nt=Pt.registerPlugin(ch)||Pt,E1=Nt.core.Tween;function Gg(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function WD(r,t,e){return t&&Gg(r.prototype,t),e&&Gg(r,e),r}var Ct,Cl,qD,Cn,gr,_r,ta,qg,to,na,Yg,Ni,Jn,Kg,Xg=function(){return Ct||typeof window<"u"&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},Zg=1,ea=[],X=[],ei=[],Ds=Date.now,lh=function(t,e){return e},YD=function(){var t=na.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,X),i.push.apply(i,ei),X=n,ei=i,lh=function(a,s){return e[a](s)}},Bi=function(t,e){return~ei.indexOf(t)&&ei[ei.indexOf(t)+1][e]},Cs=function(t){return!!~Yg.indexOf(t)},Kt=function(t,e,n,i,o){return t.addEventListener(e,n,{passive:i!==!1,capture:!!o})},Yt=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},wl="scrollLeft",Dl="scrollTop",dh=function(){return Ni&&Ni.isPressed||X.cache++},xl=function(t,e){var n=function i(o){if(o||o===0){Zg&&(Cn.history.scrollRestoration="manual");var a=Ni&&Ni.isPressed;o=i.v=Math.round(o)||(Ni&&Ni.iOS?1:0),t(o),i.cacheID=X.cache,a&&lh("ss",o)}else(e||X.cache!==i.cacheID||lh("ref"))&&(i.cacheID=X.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Lt={s:wl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:xl(function(r){return arguments.length?Cn.scrollTo(r,Qe.sc()):Cn.pageXOffset||gr[wl]||_r[wl]||ta[wl]||0})},Qe={s:Dl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Lt,sc:xl(function(r){return arguments.length?Cn.scrollTo(Lt.sc(),r):Cn.pageYOffset||gr[Dl]||_r[Dl]||ta[Dl]||0})},Xt=function(t,e){return(e&&e._ctx&&e._ctx.selector||Ct.utils.toArray)(t)[0]||(typeof t=="string"&&Ct.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},KD=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Li=function(t,e){var n=e.s,i=e.sc;Cs(t)&&(t=gr.scrollingElement||_r);var o=X.indexOf(t),a=i===Qe.sc?1:2;!~o&&(o=X.push(t)-1),X[o+a]||Kt(t,"scroll",dh);var s=X[o+a],c=s||(X[o+a]=xl(Bi(t,n),!0)||(Cs(t)?i:xl(function(l){return arguments.length?t[n]=l:t[n]})));return c.target=t,s||(c.smooth=Ct.getProperty(t,"scrollBehavior")==="smooth"),c},El=function(t,e,n){var i=t,o=t,a=Ds(),s=a,c=e||50,l=Math.max(500,c*3),d=function(p,m){var _=Ds();m||_-a>c?(o=i,i=p,s=a,a=_):n?i+=p:i=o+(p-o)/(_-s)*(a-s)},u=function(){o=i=n?0:i,s=a=0},f=function(p){var m=s,_=o,b=Ds();return(p||p===0)&&p!==i&&d(p),a===s||b-s>l?0:(i+(n?_:-_))/((n?b:a)-m)*1e3};return{update:d,reset:u,getVelocity:f}},ws=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Wg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Qg=function(){na=Ct.core.globals().ScrollTrigger,na&&na.core&&YD()},Jg=function(t){return Ct=t||Xg(),!Cl&&Ct&&typeof document<"u"&&document.body&&(Cn=window,gr=document,_r=gr.documentElement,ta=gr.body,Yg=[Cn,gr,_r,ta],qD=Ct.utils.clamp,Kg=Ct.core.context||function(){},to="onpointerenter"in ta?"pointer":"mouse",qg=$e.isTouch=Cn.matchMedia&&Cn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Cn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Jn=$e.eventTypes=("ontouchstart"in _r?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in _r?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Zg=0},500),Cl=1),na||Qg(),Cl};Lt.op=Qe;X.cache=0;var $e=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Cl||Jg(Ct)||console.warn("Please gsap.registerPlugin(Observer)"),na||Qg();var i=n.tolerance,o=n.dragMinimum,a=n.type,s=n.target,c=n.lineHeight,l=n.debounce,d=n.preventDefault,u=n.onStop,f=n.onStopDelay,h=n.ignore,p=n.wheelSpeed,m=n.event,_=n.onDragStart,b=n.onDragEnd,w=n.onDrag,x=n.onPress,y=n.onRelease,E=n.onRight,I=n.onLeft,D=n.onUp,T=n.onDown,A=n.onChangeX,S=n.onChangeY,Y=n.onChange,O=n.onToggleX,ae=n.onToggleY,G=n.onHover,se=n.onHoverEnd,te=n.onMove,L=n.ignoreCheck,ce=n.isNormalizer,ye=n.onGestureStart,v=n.onGestureEnd,Ae=n.onWheel,jt=n.onEnable,Hn=n.onDisable,Pe=n.onClick,ft=n.scrollSpeed,xt=n.capture,Ke=n.allowClicks,zt=n.lockAxis,Et=n.onLockAxis;this.target=s=Xt(s)||_r,this.vars=n,h&&(h=Ct.utils.toArray(h)),i=i||1e-9,o=o||0,p=p||1,ft=ft||1,a=a||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Cn.getComputedStyle(ta).lineHeight)||22);var ji,Ht,$t,le,Ge,en,un,C=this,hn=0,bi=0,zi=n.passive||!d&&n.passive!==!1,Ne=Li(s,Lt),yi=Li(s,Qe),Hi=Ne(),wr=yi(),at=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Jn[0]==="pointerdown",$i=Cs(s),We=s.ownerDocument||gr,$n=[0,0,0],An=[0,0,0],wi=0,pa=function(){return wi=Ds()},Xe=function(B,ue){return(C.event=B)&&h&&KD(B.target,h)||ue&&at&&B.pointerType!=="touch"||L&&L(B,ue)},Ws=function(){C._vx.reset(),C._vy.reset(),Ht.pause(),u&&u(C)},Di=function(){var B=C.deltaX=Wg($n),ue=C.deltaY=Wg(An),F=Math.abs(B)>=i,z=Math.abs(ue)>=i;Y&&(F||z)&&Y(C,B,ue,$n,An),F&&(E&&C.deltaX>0&&E(C),I&&C.deltaX<0&&I(C),A&&A(C),O&&C.deltaX<0!=hn<0&&O(C),hn=C.deltaX,$n[0]=$n[1]=$n[2]=0),z&&(T&&C.deltaY>0&&T(C),D&&C.deltaY<0&&D(C),S&&S(C),ae&&C.deltaY<0!=bi<0&&ae(C),bi=C.deltaY,An[0]=An[1]=An[2]=0),(le||$t)&&(te&&te(C),$t&&(_&&$t===1&&_(C),w&&w(C),$t=0),le=!1),en&&!(en=!1)&&Et&&Et(C),Ge&&(Ae(C),Ge=!1),ji=0},uo=function(B,ue,F){$n[F]+=B,An[F]+=ue,C._vx.update(B),C._vy.update(ue),l?ji||(ji=requestAnimationFrame(Di)):Di()},ho=function(B,ue){zt&&!un&&(C.axis=un=Math.abs(B)>Math.abs(ue)?"x":"y",en=!0),un!=="y"&&($n[2]+=B,C._vx.update(B,!0)),un!=="x"&&(An[2]+=ue,C._vy.update(ue,!0)),l?ji||(ji=requestAnimationFrame(Di)):Di()},Gi=function(B){if(!Xe(B,1)){B=ws(B,d);var ue=B.clientX,F=B.clientY,z=ue-C.x,N=F-C.y,H=C.isDragging;C.x=ue,C.y=F,(H||(z||N)&&(Math.abs(C.startX-ue)>=o||Math.abs(C.startY-F)>=o))&&($t||($t=H?2:1),H||(C.isDragging=!0),ho(z,N))}},Dr=C.onPress=function(W){Xe(W,1)||W&&W.button||(C.axis=un=null,Ht.pause(),C.isPressed=!0,W=ws(W),hn=bi=0,C.startX=C.x=W.clientX,C.startY=C.y=W.clientY,C._vx.reset(),C._vy.reset(),Kt(ce?s:We,Jn[1],Gi,zi,!0),C.deltaX=C.deltaY=0,x&&x(C))},J=C.onRelease=function(W){if(!Xe(W,1)){Yt(ce?s:We,Jn[1],Gi,!0);var B=!isNaN(C.y-C.startY),ue=C.isDragging,F=ue&&(Math.abs(C.x-C.startX)>3||Math.abs(C.y-C.startY)>3),z=ws(W);!F&&B&&(C._vx.reset(),C._vy.reset(),d&&Ke&&Ct.delayedCall(.08,function(){if(Ds()-wi>300&&!W.defaultPrevented){if(W.target.click)W.target.click();else if(We.createEvent){var N=We.createEvent("MouseEvents");N.initMouseEvent("click",!0,!0,Cn,1,z.screenX,z.screenY,z.clientX,z.clientY,!1,!1,!1,!1,0,null),W.target.dispatchEvent(N)}}})),C.isDragging=C.isGesturing=C.isPressed=!1,u&&ue&&!ce&&Ht.restart(!0),$t&&Di(),b&&ue&&b(C),y&&y(C,F)}},Cr=function(B){return B.touches&&B.touches.length>1&&(C.isGesturing=!0)&&ye(B,C.isDragging)},Gn=function(){return(C.isGesturing=!1)||v(C)},Wn=function(B){if(!Xe(B)){var ue=Ne(),F=yi();uo((ue-Hi)*ft,(F-wr)*ft,1),Hi=ue,wr=F,u&&Ht.restart(!0)}},qn=function(B){if(!Xe(B)){B=ws(B,d),Ae&&(Ge=!0);var ue=(B.deltaMode===1?c:B.deltaMode===2?Cn.innerHeight:1)*p;uo(B.deltaX*ue,B.deltaY*ue,0),u&&!ce&&Ht.restart(!0)}},xr=function(B){if(!Xe(B)){var ue=B.clientX,F=B.clientY,z=ue-C.x,N=F-C.y;C.x=ue,C.y=F,le=!0,u&&Ht.restart(!0),(z||N)&&ho(z,N)}},fo=function(B){C.event=B,G(C)},Ci=function(B){C.event=B,se(C)},ga=function(B){return Xe(B)||ws(B,d)&&Pe(C)};Ht=C._dc=Ct.delayedCall(f||.25,Ws).pause(),C.deltaX=C.deltaY=0,C._vx=El(0,50,!0),C._vy=El(0,50,!0),C.scrollX=Ne,C.scrollY=yi,C.isDragging=C.isGesturing=C.isPressed=!1,Kg(this),C.enable=function(W){return C.isEnabled||(Kt($i?We:s,"scroll",dh),a.indexOf("scroll")>=0&&Kt($i?We:s,"scroll",Wn,zi,xt),a.indexOf("wheel")>=0&&Kt(s,"wheel",qn,zi,xt),(a.indexOf("touch")>=0&&qg||a.indexOf("pointer")>=0)&&(Kt(s,Jn[0],Dr,zi,xt),Kt(We,Jn[2],J),Kt(We,Jn[3],J),Ke&&Kt(s,"click",pa,!0,!0),Pe&&Kt(s,"click",ga),ye&&Kt(We,"gesturestart",Cr),v&&Kt(We,"gestureend",Gn),G&&Kt(s,to+"enter",fo),se&&Kt(s,to+"leave",Ci),te&&Kt(s,to+"move",xr)),C.isEnabled=!0,C.isDragging=C.isGesturing=C.isPressed=le=$t=!1,C._vx.reset(),C._vy.reset(),Hi=Ne(),wr=yi(),W&&W.type&&Dr(W),jt&&jt(C)),C},C.disable=function(){C.isEnabled&&(ea.filter(function(W){return W!==C&&Cs(W.target)}).length||Yt($i?We:s,"scroll",dh),C.isPressed&&(C._vx.reset(),C._vy.reset(),Yt(ce?s:We,Jn[1],Gi,!0)),Yt($i?We:s,"scroll",Wn,xt),Yt(s,"wheel",qn,xt),Yt(s,Jn[0],Dr,xt),Yt(We,Jn[2],J),Yt(We,Jn[3],J),Yt(s,"click",pa,!0),Yt(s,"click",ga),Yt(We,"gesturestart",Cr),Yt(We,"gestureend",Gn),Yt(s,to+"enter",fo),Yt(s,to+"leave",Ci),Yt(s,to+"move",xr),C.isEnabled=C.isPressed=C.isDragging=!1,Hn&&Hn(C))},C.kill=C.revert=function(){C.disable();var W=ea.indexOf(C);W>=0&&ea.splice(W,1),Ni===C&&(Ni=0)},ea.push(C),ce&&Cs(s)&&(Ni=C),C.enable(m)},WD(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();$e.version="3.15.0";$e.create=function(r){return new $e(r)};$e.register=Jg;$e.getAll=function(){return ea.slice()};$e.getById=function(r){return ea.filter(function(t){return t.vars.id===r})[0]};Xg()&&Ct.registerPlugin($e);var P,aa,Q,_e,Sn,pe,xh,jl,Ls,Ts,Es,Sl,Bt,$l,_h,Qt,e_,t_,sa,__,uh,v_,Zt,vh,b_,y_,vr,bh,Eh,ca,Sh,Rs,yh,hh,Al=1,Ut=Date.now,fh=Ut(),zn=0,Ss=0,n_=function(t,e,n){var i=En(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},i_=function(t,e){return e&&(!En(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},XD=function r(){return Ss&&requestAnimationFrame(r)},r_=function(){return $l=1},o_=function(){return $l=0},_i=function(t){return t},As=function(t){return Math.round(t*1e5)/1e5||0},w_=function(){return typeof window<"u"},D_=function(){return P||w_()&&(P=window.gsap)&&P.registerPlugin&&P},so=function(t){return!!~xh.indexOf(t)},C_=function(t){return(t==="Height"?Sh:Q["inner"+t])||Sn["client"+t]||pe["client"+t]},x_=function(t){return Bi(t,"getBoundingClientRect")||(so(t)?function(){return Vl.width=Q.innerWidth,Vl.height=Sh,Vl}:function(){return Ui(t)})},ZD=function(t,e,n){var i=n.d,o=n.d2,a=n.a;return(a=Bi(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?C_(o):t["client"+o])||0}},QD=function(t,e){return!e||~ei.indexOf(t)?x_(t):function(){return Vl}},vi=function(t,e){var n=e.s,i=e.d2,o=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Bi(t,n))?a()-x_(t)()[o]:so(t)?(Sn[n]||pe[n])-C_(i):t[n]-t["offset"+i])},Ml=function(t,e){for(var n=0;n<sa.length;n+=3)(!e||~e.indexOf(sa[n+1]))&&t(sa[n],sa[n+1],sa[n+2])},En=function(t){return typeof t=="string"},Vt=function(t){return typeof t=="function"},Ms=function(t){return typeof t=="number"},no=function(t){return typeof t=="object"},xs=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ia=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},ra=Math.abs,E_="left",S_="top",Ah="right",Mh="bottom",ro="width",oo="height",Fs="Right",Os="Left",ks="Top",Ps="Bottom",Je="padding",Vn="margin",da="Width",Ih="Height",ot="px",jn=function(t){return Q.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},JD=function(t){var e=jn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},a_=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ui=function(t,e){var n=e&&jn(t)[_h]!=="matrix(1, 0, 0, 1, 0, 0)"&&P.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},zl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},A_=function(t){var e=[],n=t.labels,i=t.duration(),o;for(o in n)e.push(n[o]/i);return e},eC=function(t){return function(e){return P.utils.snap(A_(t),e)}},Th=function(t){var e=P.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,o){return i-o});return n?function(i,o,a){a===void 0&&(a=.001);var s;if(!o)return e(i);if(o>0){for(i-=a,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=a;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,o,a){a===void 0&&(a=.001);var s=e(i);return!o||Math.abs(s-i)<a||s-i<0==o<0?s:e(o<0?i-t:i+t)}},tC=function(t){return function(e,n){return Th(A_(t))(e,n.direction)}},Il=function(t,e,n,i){return n.split(",").forEach(function(o){return t(e,o,i)})},ht=function(t,e,n,i,o){return t.addEventListener(e,n,{passive:!i,capture:!!o})},ut=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Tl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},s_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Rl={toggleActions:"play",anticipatePin:0},Hl={top:0,left:0,center:.5,bottom:1,right:1},Nl=function(t,e){if(En(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Hl?Hl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Fl=function(t,e,n,i,o,a,s,c){var l=o.startColor,d=o.endColor,u=o.fontSize,f=o.indent,h=o.fontWeight,p=_e.createElement("div"),m=so(n)||Bi(n,"pinType")==="fixed",_=t.indexOf("scroller")!==-1,b=m?pe:n.tagName==="IFRAME"?n.contentDocument.body:n,w=t.indexOf("start")!==-1,x=w?l:d,y="border-color:"+x+";font-size:"+u+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((_||c)&&m?"fixed;":"absolute;"),(_||c||!m)&&(y+=(i===Qe?Ah:Mh)+":"+(a+parseFloat(f))+"px;"),s&&(y+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),p._isStart=w,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,b.children[0]?b.insertBefore(p,b.children[0]):b.appendChild(p),p._offset=p["offset"+i.op.d2],Ll(p,0,i,w),p},Ll=function(t,e,n,i){var o={display:"block"},a=n[i?"os2":"p2"],s=n[i?"p2":"os2"];t._isFlipped=i,o[n.a+"Percent"]=i?-100:0,o[n.a]=i?"1px":0,o["border"+a+da]=1,o["border"+s+da]=0,o[n.p]=e+"px",P.set(t,o)},Z=[],wh={},Bs,c_=function(){return Ut()-zn>34&&(Bs||(Bs=requestAnimationFrame(Vi)))},oa=function(){(!Zt||!Zt.isPressed||Zt.startX>pe.clientWidth)&&(X.cache++,Zt?Bs||(Bs=requestAnimationFrame(Vi)):Vi(),zn||lo("scrollStart"),zn=Ut())},mh=function(){y_=Q.innerWidth,b_=Q.innerHeight},Is=function(t){X.cache++,(t===!0||!Bt&&!v_&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!vh||y_!==Q.innerWidth||Math.abs(Q.innerHeight-b_)>Q.innerHeight*.25))&&jl.restart(!0)},co={},nC=[],M_=function r(){return ut($,"scrollEnd",r)||io(!0)},lo=function(t){return co[t]&&co[t].map(function(e){return e()})||nC},xn=[],I_=function(t){for(var e=0;e<xn.length;e+=5)(!t||xn[e+4]&&xn[e+4].query===t)&&(xn[e].style.cssText=xn[e+1],xn[e].getBBox&&xn[e].setAttribute("transform",xn[e+2]||""),xn[e+3].uncache=1)},T_=function(){return X.forEach(function(t){return Vt(t)&&++t.cacheID&&(t.rec=t())})},Rh=function(t,e){var n;for(Qt=0;Qt<Z.length;Qt++)n=Z[Qt],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Rs=!0,e&&I_(e),e||lo("revert")},R_=function(t,e){X.cache++,(e||!Jt)&&X.forEach(function(n){return Vt(n)&&n.cacheID++&&(n.rec=0)}),En(t)&&(Q.history.scrollRestoration=Eh=t)},Jt,ao=0,l_,iC=function(){if(l_!==ao){var t=l_=ao;requestAnimationFrame(function(){return t===ao&&io(!0)})}},F_=function(){pe.appendChild(ca),Sh=!Zt&&ca.offsetHeight||Q.innerHeight,pe.removeChild(ca)},d_=function(t){return Ls(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},io=function(t,e){if(Sn=_e.documentElement,pe=_e.body,xh=[Q,_e,Sn,pe],zn&&!t&&!Rs){ht($,"scrollEnd",M_);return}F_(),Jt=$.isRefreshing=!0,Rs||T_();var n=lo("refreshInit");__&&$.sort(),e||Rh(),X.forEach(function(i){Vt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Z.slice(0).forEach(function(i){return i.refresh()}),Rs=!1,Z.forEach(function(i){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-a),i.refresh()}}),yh=1,d_(!0),Z.forEach(function(i){var o=vi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>o,s=i._startClamp&&i.start>=o;(a||s)&&i.setPositions(s?o-1:i.start,a?Math.max(s?o:i.start+1,o):i.end,!0)}),d_(!1),yh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),X.forEach(function(i){Vt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),R_(Eh,1),jl.pause(),ao++,Jt=2,Vi(2),Z.forEach(function(i){return Vt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Jt=$.isRefreshing=!1,lo("refresh")},Dh=0,Bl=1,Ns,Vi=function(t){if(t===2||!Jt&&!Rs){$.isUpdating=!0,Ns&&Ns.update(0);var e=Z.length,n=Ut(),i=n-fh>=50,o=e&&Z[0].scroll();if(Bl=Dh>o?-1:1,Jt||(Dh=o),i&&(zn&&!$l&&n-zn>200&&(zn=0,lo("scrollEnd")),Es=fh,fh=n),Bl<0){for(Qt=e;Qt-- >0;)Z[Qt]&&Z[Qt].update(0,i);Bl=1}else for(Qt=0;Qt<e;Qt++)Z[Qt]&&Z[Qt].update(0,i);$.isUpdating=!1}Bs=0},Ch=[E_,S_,Mh,Ah,Vn+Ps,Vn+Fs,Vn+ks,Vn+Os,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ul=Ch.concat([ro,oo,"boxSizing","max"+da,"max"+Ih,"position",Vn,Je,Je+ks,Je+Fs,Je+Ps,Je+Os]),rC=function(t,e,n){la(n);var i=t._gsap;if(i.spacerIsNative)la(i.spacerState);else if(t._gsap.swappedIn){var o=e.parentNode;o&&(o.insertBefore(t,e),o.removeChild(e))}t._gsap.swappedIn=!1},ph=function(t,e,n,i){if(!t._gsap.swappedIn){for(var o=Ch.length,a=e.style,s=t.style,c;o--;)c=Ch[o],a[c]=n[c];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),s[Mh]=s[Ah]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ro]=zl(t,Lt)+ot,a[oo]=zl(t,Qe)+ot,a[Je]=s[Vn]=s[S_]=s[E_]="0",la(i),s[ro]=s["max"+da]=n[ro],s[oo]=s["max"+Ih]=n[oo],s[Je]=n[Je],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},oC=/([A-Z])/g,la=function(t){if(t){var e=t.t.style,n=t.length,i=0,o,a;for((t.t._gsap||P.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],o=t[i],a?e[o]=a:e[o]&&e.removeProperty(o.replace(oC,"-$1").toLowerCase())}},Ol=function(t){for(var e=Ul.length,n=t.style,i=[],o=0;o<e;o++)i.push(Ul[o],n[Ul[o]]);return i.t=t,i},aC=function(t,e,n){for(var i=[],o=t.length,a=n?8:0,s;a<o;a+=2)s=t[a],i.push(s,s in e?e[s]:t[a+1]);return i.t=t.t,i},Vl={left:0,top:0},u_=function(t,e,n,i,o,a,s,c,l,d,u,f,h,p){Vt(t)&&(t=t(c)),En(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Nl("0"+t.substr(3),n):0));var m=h?h.time():0,_,b,w;if(h&&h.seek(0),isNaN(t)||(t=+t),Ms(t))h&&(t=P.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,t)),s&&Ll(s,n,i,!0);else{Vt(e)&&(e=e(c));var x=(t||"0").split(" "),y,E,I,D;w=Xt(e,c)||pe,y=Ui(w)||{},(!y||!y.left&&!y.top)&&jn(w).display==="none"&&(D=w.style.display,w.style.display="block",y=Ui(w),D?w.style.display=D:w.style.removeProperty("display")),E=Nl(x[0],y[i.d]),I=Nl(x[1]||"0",n),t=y[i.p]-l[i.p]-d+E+o-I,s&&Ll(s,I,i,n-I<20||s._isStart&&I>20),n-=n-I}if(p&&(c[p]=t||-.001,t<0&&(t=0)),a){var T=t+n,A=a._isStart;_="scroll"+i.d2,Ll(a,T,i,A&&T>20||!A&&(u?Math.max(pe[_],Sn[_]):a.parentNode[_])<=T+1),u&&(l=Ui(s),u&&(a.style[i.op.p]=l[i.op.p]-i.op.m-a._offset+ot))}return h&&w&&(_=Ui(w),h.seek(f),b=Ui(w),h._caScrollDist=_[i.p]-b[i.p],t=t/h._caScrollDist*f),h&&h.seek(m),h?t:Math.round(t)},sC=/(webkit|moz|length|cssText|inset)/i,h_=function(t,e,n,i){if(t.parentNode!==e){var o=t.style,a,s;if(e===pe){t._stOrig=o.cssText,s=jn(t);for(a in s)!+a&&!sC.test(a)&&s[a]&&typeof o[a]=="string"&&a!=="0"&&(o[a]=s[a]);o.top=n,o.left=i}else o.cssText=t._stOrig;P.core.getCache(t).uncache=1,e.appendChild(t)}},O_=function(t,e,n){var i=e,o=i;return function(a){var s=Math.round(t());return s!==i&&s!==o&&Math.abs(s-i)>3&&Math.abs(s-o)>3&&(a=s,n&&n()),o=i,i=Math.round(a),i}},kl=function(t,e,n){var i={};i[e.p]="+="+n,P.set(t,i)},f_=function(t,e){var n=Li(t,e),i="_scroll"+e.p2,o=function a(s,c,l,d,u){var f=a.tween,h=c.onComplete,p={};l=l||n();var m=O_(n,l,function(){f.kill(),a.tween=0});return u=d&&u||0,d=d||s-l,f&&f.kill(),c[i]=s,c.inherit=!1,c.modifiers=p,p[i]=function(){return m(l+d*f.ratio+u*f.ratio*f.ratio)},c.onUpdate=function(){X.cache++,a.tween&&Vi()},c.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=P.to(t,c),f};return t[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},ht(t,"wheel",n.wheelHandler),$.isTouch&&ht(t,"touchmove",n.wheelHandler),o},$=(function(){function r(e,n){aa||r.register(P)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),bh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ss){this.update=this.refresh=this.kill=_i;return}n=a_(En(n)||Ms(n)||n.nodeType?{trigger:n}:n,Rl);var o=n,a=o.onUpdate,s=o.toggleClass,c=o.id,l=o.onToggle,d=o.onRefresh,u=o.scrub,f=o.trigger,h=o.pin,p=o.pinSpacing,m=o.invalidateOnRefresh,_=o.anticipatePin,b=o.onScrubComplete,w=o.onSnapComplete,x=o.once,y=o.snap,E=o.pinReparent,I=o.pinSpacer,D=o.containerAnimation,T=o.fastScrollEnd,A=o.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Lt:Qe,Y=!u&&u!==0,O=Xt(n.scroller||Q),ae=P.core.getCache(O),G=so(O),se=("pinType"in n?n.pinType:Bi(O,"pinType")||G&&"fixed")==="fixed",te=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],L=Y&&n.toggleActions.split(" "),ce="markers"in n?n.markers:Rl.markers,ye=G?0:parseFloat(jn(O)["border"+S.p2+da])||0,v=this,Ae=n.onRefreshInit&&function(){return n.onRefreshInit(v)},jt=ZD(O,G,S),Hn=QD(O,G),Pe=0,ft=0,xt=0,Ke=Li(O,S),zt,Et,ji,Ht,$t,le,Ge,en,un,C,hn,bi,zi,Ne,yi,Hi,wr,at,$i,We,$n,An,wi,pa,Xe,Ws,Di,uo,ho,Gi,Dr,J,Cr,Gn,Wn,qn,xr,fo,Ci;if(v._startClamp=v._endClamp=!1,v._dir=S,_*=45,v.scroller=O,v.scroll=D?D.time.bind(D):Ke,Ht=Ke(),v.vars=n,i=i||n.animation,"refreshPriority"in n&&(__=1,n.refreshPriority===-9999&&(Ns=v)),ae.tweenScroll=ae.tweenScroll||{top:f_(O,Qe),left:f_(O,Lt)},v.tweenTo=zt=ae.tweenScroll[S.p],v.scrubDuration=function(F){Cr=Ms(F)&&F,Cr?J?J.duration(F):J=P.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Cr,paused:!0,onComplete:function(){return b&&b(v)}}):(J&&J.progress(1).kill(),J=0)},i&&(i.vars.lazy=!1,i._initted&&!v.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),v.animation=i.pause(),i.scrollTrigger=v,v.scrubDuration(u),Gi=0,c||(c=i.vars.id)),y&&((!no(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in pe.style&&P.set(G?[pe,Sn]:O,{scrollBehavior:"auto"}),X.forEach(function(F){return Vt(F)&&F.target===(G?_e.scrollingElement||Sn:O)&&(F.smooth=!1)}),ji=Vt(y.snapTo)?y.snapTo:y.snapTo==="labels"?eC(i):y.snapTo==="labelsDirectional"?tC(i):y.directional!==!1?function(F,z){return Th(y.snapTo)(F,Ut()-ft<500?0:z.direction)}:P.utils.snap(y.snapTo),Gn=y.duration||{min:.1,max:2},Gn=no(Gn)?Ts(Gn.min,Gn.max):Ts(Gn,Gn),Wn=P.delayedCall(y.delay||Cr/2||.1,function(){var F=Ke(),z=Ut()-ft<500,N=zt.tween;if((z||Math.abs(v.getVelocity())<10)&&!N&&!$l&&Pe!==F){var H=(F-le)/Ne,st=i&&!Y?i.totalProgress():H,ne=z?0:(st-Dr)/(Ut()-Es)*1e3||0,qe=P.utils.clamp(-H,1-H,ra(ne/2)*ne/.185),St=H+(y.inertia===!1?0:qe),Le,Me,we=y,Yn=we.onStart,Re=we.onInterrupt,fn=we.onComplete;if(Le=ji(St,v),Ms(Le)||(Le=St),Me=Math.max(0,Math.round(le+Le*Ne)),F<=Ge&&F>=le&&Me!==F){if(N&&!N._initted&&N.data<=ra(Me-F))return;y.inertia===!1&&(qe=Le-H),zt(Me,{duration:Gn(ra(Math.max(ra(St-st),ra(Le-st))*.185/ne/.05||0)),ease:y.ease||"power3",data:ra(Me-F),onInterrupt:function(){return Wn.restart(!0)&&Re&&ia(v,Re)},onComplete:function(){v.update(),Pe=Ke(),i&&!Y&&(J?J.resetTo("totalProgress",Le,i._tTime/i._tDur):i.progress(Le)),Gi=Dr=i&&!Y?i.totalProgress():v.progress,w&&w(v),fn&&ia(v,fn)}},F,qe*Ne,Me-F-qe*Ne),Yn&&ia(v,Yn,zt.tween)}}else v.isActive&&Pe!==F&&Wn.restart(!0)}).pause()),c&&(wh[c]=v),f=v.trigger=Xt(f||h!==!0&&h),Ci=f&&f._gsap&&f._gsap.stRevert,Ci&&(Ci=Ci(v)),h=h===!0?f:Xt(h),En(s)&&(s={targets:f,className:s}),h&&(p===!1||p===Vn||(p=!p&&h.parentNode&&h.parentNode.style&&jn(h.parentNode).display==="flex"?!1:Je),v.pin=h,Et=P.core.getCache(h),Et.spacer?yi=Et.pinState:(I&&(I=Xt(I),I&&!I.nodeType&&(I=I.current||I.nativeElement),Et.spacerIsNative=!!I,I&&(Et.spacerState=Ol(I))),Et.spacer=at=I||_e.createElement("div"),at.classList.add("pin-spacer"),c&&at.classList.add("pin-spacer-"+c),Et.pinState=yi=Ol(h)),n.force3D!==!1&&P.set(h,{force3D:!0}),v.spacer=at=Et.spacer,ho=jn(h),pa=ho[p+S.os2],We=P.getProperty(h),$n=P.quickSetter(h,S.a,ot),ph(h,at,ho),wr=Ol(h)),ce){bi=no(ce)?a_(ce,s_):s_,C=Fl("scroller-start",c,O,S,bi,0),hn=Fl("scroller-end",c,O,S,bi,0,C),$i=C["offset"+S.op.d2];var ga=Xt(Bi(O,"content")||O);en=this.markerStart=Fl("start",c,ga,S,bi,$i,0,D),un=this.markerEnd=Fl("end",c,ga,S,bi,$i,0,D),D&&(fo=P.quickSetter([en,un],S.a,ot)),!se&&!(ei.length&&Bi(O,"fixedMarkers")===!0)&&(JD(G?pe:O),P.set([C,hn],{force3D:!0}),Ws=P.quickSetter(C,S.a,ot),uo=P.quickSetter(hn,S.a,ot))}if(D){var W=D.vars.onUpdate,B=D.vars.onUpdateParams;D.eventCallback("onUpdate",function(){v.update(0,0,1),W&&W.apply(D,B||[])})}if(v.previous=function(){return Z[Z.indexOf(v)-1]},v.next=function(){return Z[Z.indexOf(v)+1]},v.revert=function(F,z){if(!z)return v.kill(!0);var N=F!==!1||!v.enabled,H=Bt;N!==v.isReverted&&(N&&(qn=Math.max(Ke(),v.scroll.rec||0),xt=v.progress,xr=i&&i.progress()),en&&[en,un,C,hn].forEach(function(st){return st.style.display=N?"none":"block"}),N&&(Bt=v,v.update(N)),h&&(!E||!v.isActive)&&(N?rC(h,at,yi):ph(h,at,jn(h),Xe)),N||v.update(N),Bt=H,v.isReverted=N)},v.refresh=function(F,z,N,H){if(!((Bt||!v.enabled)&&!z)){if(h&&F&&zn){ht(r,"scrollEnd",M_);return}!Jt&&Ae&&Ae(v),Bt=v,zt.tween&&!N&&(zt.tween.kill(),zt.tween=0),J&&J.pause(),m&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Wi){return Wi.vars.immediateRender&&Wi.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),v.isReverted||v.revert(!0,!0),v._subPinOffset=!1;var st=jt(),ne=Hn(),qe=D?D.duration():vi(O,S),St=Ne<=.01||!Ne,Le=0,Me=H||0,we=no(N)?N.end:n.end,Yn=n.endTrigger||f,Re=no(N)?N.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),fn=v.pinnedContainer=n.pinnedContainer&&Xt(n.pinnedContainer,v),ti=f&&Math.max(0,Z.indexOf(v))||0,mt=ti,pt,At,Er,qs,Mt,et,ni,rd,qh,_a,ii,va,Ys;for(ce&&no(N)&&(va=P.getProperty(C,S.p),Ys=P.getProperty(hn,S.p));mt-- >0;)et=Z[mt],et.end||et.refresh(0,1)||(Bt=v),ni=et.pin,ni&&(ni===f||ni===h||ni===fn)&&!et.isReverted&&(_a||(_a=[]),_a.unshift(et),et.revert(!0,!0)),et!==Z[mt]&&(ti--,mt--);for(Vt(Re)&&(Re=Re(v)),Re=n_(Re,"start",v),le=u_(Re,f,st,S,Ke(),en,C,v,ne,ye,se,qe,D,v._startClamp&&"_startClamp")||(h?-.001:0),Vt(we)&&(we=we(v)),En(we)&&!we.indexOf("+=")&&(~we.indexOf(" ")?we=(En(Re)?Re.split(" ")[0]:"")+we:(Le=Nl(we.substr(2),st),we=En(Re)?Re:(D?P.utils.mapRange(0,D.duration(),D.scrollTrigger.start,D.scrollTrigger.end,le):le)+Le,Yn=f)),we=n_(we,"end",v),Ge=Math.max(le,u_(we||(Yn?"100% 0":qe),Yn,st,S,Ke()+Le,un,hn,v,ne,ye,se,qe,D,v._endClamp&&"_endClamp"))||-.001,Le=0,mt=ti;mt--;)et=Z[mt]||{},ni=et.pin,ni&&et.start-et._pinPush<=le&&!D&&et.end>0&&(pt=et.end-(v._startClamp?Math.max(0,et.start):et.start),(ni===f&&et.start-et._pinPush<le||ni===fn)&&isNaN(Re)&&(Le+=pt*(1-et.progress)),ni===h&&(Me+=pt));if(le+=Le,Ge+=Le,v._startClamp&&(v._startClamp+=Le),v._endClamp&&!Jt&&(v._endClamp=Ge||-.001,Ge=Math.min(Ge,vi(O,S))),Ne=Ge-le||(le-=.01)&&.001,St&&(xt=P.utils.clamp(0,1,P.utils.normalize(le,Ge,qn))),v._pinPush=Me,en&&Le&&(pt={},pt[S.a]="+="+Le,fn&&(pt[S.p]="-="+Ke()),P.set([en,un],pt)),h&&!(yh&&v.end>=vi(O,S)))pt=jn(h),qs=S===Qe,Er=Ke(),An=parseFloat(We(S.a))+Me,!qe&&Ge>1&&(ii=(G?_e.scrollingElement||Sn:O).style,ii={style:ii,value:ii["overflow"+S.a.toUpperCase()]},G&&jn(pe)["overflow"+S.a.toUpperCase()]!=="scroll"&&(ii.style["overflow"+S.a.toUpperCase()]="scroll")),ph(h,at,pt),wr=Ol(h),At=Ui(h,!0),rd=se&&Li(O,qs?Lt:Qe)(),p?(Xe=[p+S.os2,Ne+Me+ot],Xe.t=at,mt=p===Je?zl(h,S)+Ne+Me:0,mt&&(Xe.push(S.d,mt+ot),at.style.flexBasis!=="auto"&&(at.style.flexBasis=mt+ot)),la(Xe),fn&&Z.forEach(function(Wi){Wi.pin===fn&&Wi.vars.pinSpacing!==!1&&(Wi._subPinOffset=!0)}),se&&Ke(qn)):(mt=zl(h,S),mt&&at.style.flexBasis!=="auto"&&(at.style.flexBasis=mt+ot)),se&&(Mt={top:At.top+(qs?Er-le:rd)+ot,left:At.left+(qs?rd:Er-le)+ot,boxSizing:"border-box",position:"fixed"},Mt[ro]=Mt["max"+da]=Math.ceil(At.width)+ot,Mt[oo]=Mt["max"+Ih]=Math.ceil(At.height)+ot,Mt[Vn]=Mt[Vn+ks]=Mt[Vn+Fs]=Mt[Vn+Ps]=Mt[Vn+Os]="0",Mt[Je]=pt[Je],Mt[Je+ks]=pt[Je+ks],Mt[Je+Fs]=pt[Je+Fs],Mt[Je+Ps]=pt[Je+Ps],Mt[Je+Os]=pt[Je+Os],Hi=aC(yi,Mt,E),Jt&&Ke(0)),i?(qh=i._initted,uh(1),i.render(i.duration(),!0,!0),wi=We(S.a)-An+Ne+Me,Di=Math.abs(Ne-wi)>1,se&&Di&&Hi.splice(Hi.length-2,2),i.render(0,!0,!0),qh||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),uh(0)):wi=Ne,ii&&(ii.value?ii.style["overflow"+S.a.toUpperCase()]=ii.value:ii.style.removeProperty("overflow-"+S.a));else if(f&&Ke()&&!D)for(At=f.parentNode;At&&At!==pe;)At._pinOffset&&(le-=At._pinOffset,Ge-=At._pinOffset),At=At.parentNode;_a&&_a.forEach(function(Wi){return Wi.revert(!1,!0)}),v.start=le,v.end=Ge,Ht=$t=Jt?qn:Ke(),!D&&!Jt&&(Ht<qn&&Ke(qn),v.scroll.rec=0),v.revert(!1,!0),ft=Ut(),Wn&&(Pe=-1,Wn.restart(!0)),Bt=0,i&&Y&&(i._initted||xr)&&i.progress()!==xr&&i.progress(xr||0,!0).render(i.time(),!0,!0),(St||xt!==v.progress||D||m||i&&!i._initted)&&(i&&!Y&&(i._initted||xt||i.vars.immediateRender!==!1)&&i.totalProgress(D&&le<-.001&&!xt?P.utils.normalize(le,Ge,0):xt,!0),v.progress=St||(Ht-le)/Ne===xt?0:xt),h&&p&&(at._pinOffset=Math.round(v.progress*wi)),J&&J.invalidate(),isNaN(va)||(va-=P.getProperty(C,S.p),Ys-=P.getProperty(hn,S.p),kl(C,S,va),kl(en,S,va-(H||0)),kl(hn,S,Ys),kl(un,S,Ys-(H||0))),St&&!Jt&&v.update(),d&&!Jt&&!zi&&(zi=!0,d(v),zi=!1)}},v.getVelocity=function(){return(Ke()-$t)/(Ut()-Es)*1e3||0},v.endAnimation=function(){xs(v.callbackAnimation),i&&(J?J.progress(1):i.paused()?Y||xs(i,v.direction<0,1):xs(i,i.reversed()))},v.labelToScroll=function(F){return i&&i.labels&&(le||v.refresh()||le)+i.labels[F]/i.duration()*Ne||0},v.getTrailing=function(F){var z=Z.indexOf(v),N=v.direction>0?Z.slice(0,z).reverse():Z.slice(z+1);return(En(F)?N.filter(function(H){return H.vars.preventOverlaps===F}):N).filter(function(H){return v.direction>0?H.end<=le:H.start>=Ge})},v.update=function(F,z,N){if(!(D&&!N&&!F)){var H=Jt===!0?qn:v.scroll(),st=F?0:(H-le)/Ne,ne=st<0?0:st>1?1:st||0,qe=v.progress,St,Le,Me,we,Yn,Re,fn,ti;if(z&&($t=Ht,Ht=D?Ke():H,y&&(Dr=Gi,Gi=i&&!Y?i.totalProgress():ne)),_&&h&&!Bt&&!Al&&zn&&(!ne&&le<H+(H-$t)/(Ut()-Es)*_?ne=1e-4:ne===1&&Ge>H+(H-$t)/(Ut()-Es)*_&&(ne=.9999)),ne!==qe&&v.enabled){if(St=v.isActive=!!ne&&ne<1,Le=!!qe&&qe<1,Re=St!==Le,Yn=Re||!!ne!=!!qe,v.direction=ne>qe?1:-1,v.progress=ne,Yn&&!Bt&&(Me=ne&&!qe?0:ne===1?1:qe===1?2:3,Y&&(we=!Re&&L[Me+1]!=="none"&&L[Me+1]||L[Me],ti=i&&(we==="complete"||we==="reset"||we in i))),A&&(Re||ti)&&(ti||u||!i)&&(Vt(A)?A(v):v.getTrailing(A).forEach(function(Er){return Er.endAnimation()})),Y||(J&&!Bt&&!Al?(J._dp._time-J._start!==J._time&&J.render(J._dp._time-J._start),J.resetTo?J.resetTo("totalProgress",ne,i._tTime/i._tDur):(J.vars.totalProgress=ne,J.invalidate().restart())):i&&i.totalProgress(ne,!!(Bt&&(ft||F)))),h){if(F&&p&&(at.style[p+S.os2]=pa),!se)$n(As(An+wi*ne));else if(Yn){if(fn=!F&&ne>qe&&Ge+1>H&&H+1>=vi(O,S),E)if(!F&&(St||fn)){var mt=Ui(h,!0),pt=H-le;h_(h,pe,mt.top+(S===Qe?pt:0)+ot,mt.left+(S===Qe?0:pt)+ot)}else h_(h,at);la(St||fn?Hi:wr),Di&&ne<1&&St||$n(An+(ne===1&&!fn?wi:0))}}y&&!zt.tween&&!Bt&&!Al&&Wn.restart(!0),s&&(Re||x&&ne&&(ne<1||!hh))&&Ls(s.targets).forEach(function(Er){return Er.classList[St||x?"add":"remove"](s.className)}),a&&!Y&&!F&&a(v),Yn&&!Bt?(Y&&(ti&&(we==="complete"?i.pause().totalProgress(1):we==="reset"?i.restart(!0).pause():we==="restart"?i.restart(!0):i[we]()),a&&a(v)),(Re||!hh)&&(l&&Re&&ia(v,l),te[Me]&&ia(v,te[Me]),x&&(ne===1?v.kill(!1,1):te[Me]=0),Re||(Me=ne===1?1:3,te[Me]&&ia(v,te[Me]))),T&&!St&&Math.abs(v.getVelocity())>(Ms(T)?T:2500)&&(xs(v.callbackAnimation),J?J.progress(1):xs(i,we==="reverse"?1:!ne,1))):Y&&a&&!Bt&&a(v)}if(uo){var At=D?H/D.duration()*(D._caScrollDist||0):H;Ws(At+(C._isFlipped?1:0)),uo(At)}fo&&fo(-H/D.duration()*(D._caScrollDist||0))}},v.enable=function(F,z){v.enabled||(v.enabled=!0,ht(O,"resize",Is),G||ht(O,"scroll",oa),Ae&&ht(r,"refreshInit",Ae),F!==!1&&(v.progress=xt=0,Ht=$t=Pe=Ke()),z!==!1&&v.refresh())},v.getTween=function(F){return F&&zt?zt.tween:J},v.setPositions=function(F,z,N,H){if(D){var st=D.scrollTrigger,ne=D.duration(),qe=st.end-st.start;F=st.start+qe*F/ne,z=st.start+qe*z/ne}v.refresh(!1,!1,{start:i_(F,N&&!!v._startClamp),end:i_(z,N&&!!v._endClamp)},H),v.update()},v.adjustPinSpacing=function(F){if(Xe&&F){var z=Xe.indexOf(S.d)+1;Xe[z]=parseFloat(Xe[z])+F+ot,Xe[1]=parseFloat(Xe[1])+F+ot,la(Xe)}},v.disable=function(F,z){if(F!==!1&&v.revert(!0,!0),v.enabled&&(v.enabled=v.isActive=!1,z||J&&J.pause(),qn=0,Et&&(Et.uncache=1),Ae&&ut(r,"refreshInit",Ae),Wn&&(Wn.pause(),zt.tween&&zt.tween.kill()&&(zt.tween=0)),!G)){for(var N=Z.length;N--;)if(Z[N].scroller===O&&Z[N]!==v)return;ut(O,"resize",Is),G||ut(O,"scroll",oa)}},v.kill=function(F,z){v.disable(F,z),J&&!z&&J.kill(),c&&delete wh[c];var N=Z.indexOf(v);N>=0&&Z.splice(N,1),N===Qt&&Bl>0&&Qt--,N=0,Z.forEach(function(H){return H.scroller===v.scroller&&(N=1)}),N||Jt||(v.scroll.rec=0),i&&(i.scrollTrigger=null,F&&i.revert({kill:!1}),z||i.kill()),en&&[en,un,C,hn].forEach(function(H){return H.parentNode&&H.parentNode.removeChild(H)}),Ns===v&&(Ns=0),h&&(Et&&(Et.uncache=1),N=0,Z.forEach(function(H){return H.pin===h&&N++}),N||(Et.spacer=0)),n.onKill&&n.onKill(v)},Z.push(v),v.enable(!1,!1),Ci&&Ci(v),i&&i.add&&!Ne){var ue=v.update;v.update=function(){v.update=ue,X.cache++,le||Ge||v.refresh()},P.delayedCall(.01,v.update),Ne=.01,le=Ge=0}else v.refresh();h&&iC()},r.register=function(n){return aa||(P=n||D_(),w_()&&window.document&&r.enable(),aa=Ss),aa},r.defaults=function(n){if(n)for(var i in n)Rl[i]=n[i];return Rl},r.disable=function(n,i){Ss=0,Z.forEach(function(a){return a[i?"kill":"disable"](n)}),ut(Q,"wheel",oa),ut(_e,"scroll",oa),clearInterval(Sl),ut(_e,"touchcancel",_i),ut(pe,"touchstart",_i),Il(ut,_e,"pointerdown,touchstart,mousedown",r_),Il(ut,_e,"pointerup,touchend,mouseup",o_),jl.kill(),Ml(ut);for(var o=0;o<X.length;o+=3)Tl(ut,X[o],X[o+1]),Tl(ut,X[o],X[o+2])},r.enable=function(){if(Q=window,_e=document,Sn=_e.documentElement,pe=_e.body,P){if(Ls=P.utils.toArray,Ts=P.utils.clamp,bh=P.core.context||_i,uh=P.core.suppressOverwrites||_i,Eh=Q.history.scrollRestoration||"auto",Dh=Q.pageYOffset||0,P.core.globals("ScrollTrigger",r),pe){Ss=1,ca=document.createElement("div"),ca.style.height="100vh",ca.style.position="absolute",F_(),XD(),$e.register(P),r.isTouch=$e.isTouch,vr=$e.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),vh=$e.isTouch===1,ht(Q,"wheel",oa),xh=[Q,_e,Sn,pe],P.matchMedia?(r.matchMedia=function(d){var u=P.matchMedia(),f;for(f in d)u.add(f,d[f]);return u},P.addEventListener("matchMediaInit",function(){T_(),Rh()}),P.addEventListener("matchMediaRevert",function(){return I_()}),P.addEventListener("matchMedia",function(){io(0,1),lo("matchMedia")}),P.matchMedia().add("(orientation: portrait)",function(){return mh(),mh})):console.warn("Requires GSAP 3.11.0 or later"),mh(),ht(_e,"scroll",oa);var n=pe.hasAttribute("style"),i=pe.style,o=i.borderTopStyle,a=P.core.Animation.prototype,s,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",s=Ui(pe),Qe.m=Math.round(s.top+Qe.sc())||0,Lt.m=Math.round(s.left+Lt.sc())||0,o?i.borderTopStyle=o:i.removeProperty("border-top-style"),n||(pe.setAttribute("style",""),pe.removeAttribute("style")),Sl=setInterval(c_,250),P.delayedCall(.5,function(){return Al=0}),ht(_e,"touchcancel",_i),ht(pe,"touchstart",_i),Il(ht,_e,"pointerdown,touchstart,mousedown",r_),Il(ht,_e,"pointerup,touchend,mouseup",o_),_h=P.utils.checkPrefix("transform"),Ul.push(_h),aa=Ut(),jl=P.delayedCall(.2,io).pause(),sa=[_e,"visibilitychange",function(){var d=Q.innerWidth,u=Q.innerHeight;_e.hidden?(e_=d,t_=u):(e_!==d||t_!==u)&&Is()},_e,"DOMContentLoaded",io,Q,"load",io,Q,"resize",Is],Ml(ht),Z.forEach(function(d){return d.enable(0,1)}),c=0;c<X.length;c+=3)Tl(ut,X[c],X[c+1]),Tl(ut,X[c],X[c+2])}else if(_e){var l=function d(){r.enable(),_e.removeEventListener("DOMContentLoaded",d)};_e.addEventListener("DOMContentLoaded",l)}}},r.config=function(n){"limitCallbacks"in n&&(hh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Sl)||(Sl=i)&&setInterval(c_,i),"ignoreMobileResize"in n&&(vh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ml(ut)||Ml(ht,n.autoRefreshEvents||"none"),v_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var o=Xt(n),a=X.indexOf(o),s=so(o);~a&&X.splice(a,s?6:2),i&&(s?ei.unshift(Q,i,pe,i,Sn,i):ei.unshift(o,i))},r.clearMatchMedia=function(n){Z.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,o){var a=(En(n)?Xt(n):n).getBoundingClientRect(),s=a[o?ro:oo]*i||0;return o?a.right-s>0&&a.left+s<Q.innerWidth:a.bottom-s>0&&a.top+s<Q.innerHeight},r.positionInViewport=function(n,i,o){En(n)&&(n=Xt(n));var a=n.getBoundingClientRect(),s=a[o?ro:oo],c=i==null?s/2:i in Hl?Hl[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return o?(a.left+c)/Q.innerWidth:(a.top+c)/Q.innerHeight},r.killAll=function(n){if(Z.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),n!==!0){var i=co.killAll||[];co={},i.forEach(function(o){return o()})}},r})();$.version="3.15.0";$.saveStyles=function(r){return r?Ls(r).forEach(function(t){if(t&&t.style){var e=xn.indexOf(t);e>=0&&xn.splice(e,5),xn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),P.core.getCache(t),bh())}}):xn};$.revert=function(r,t){return Rh(!r,t)};$.create=function(r,t){return new $(r,t)};$.refresh=function(r){return r?Is(!0):(aa||$.register())&&io(!0)};$.update=function(r){return++X.cache&&Vi(r===!0?2:0)};$.clearScrollMemory=R_;$.maxScroll=function(r,t){return vi(r,t?Lt:Qe)};$.getScrollFunc=function(r,t){return Li(Xt(r),t?Lt:Qe)};$.getById=function(r){return wh[r]};$.getAll=function(){return Z.filter(function(r){return r.vars.id!=="ScrollSmoother"})};$.isScrolling=function(){return!!zn};$.snapDirectional=Th;$.addEventListener=function(r,t){var e=co[r]||(co[r]=[]);~e.indexOf(t)||e.push(t)};$.removeEventListener=function(r,t){var e=co[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};$.batch=function(r,t){var e=[],n={},i=t.interval||.016,o=t.batchMax||1e9,a=function(l,d){var u=[],f=[],h=P.delayedCall(i,function(){d(u,f),u=[],f=[]}).pause();return function(p){u.length||h.restart(!0),u.push(p.trigger),f.push(p),o<=u.length&&h.progress(1)}},s;for(s in t)n[s]=s.substr(0,2)==="on"&&Vt(t[s])&&s!=="onRefreshInit"?a(s,t[s]):t[s];return Vt(o)&&(o=o(),ht($,"refresh",function(){return o=t.batchMax()})),Ls(r).forEach(function(c){var l={};for(s in n)l[s]=n[s];l.trigger=c,e.push($.create(l))}),e};var m_=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},gh=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+($e.isTouch?" pinch-zoom":""):"none",t===Sn&&r(pe,e)},Pl={auto:1,scroll:1},cC=function(t){var e=t.event,n=t.target,i=t.axis,o=(e.changedTouches?e.changedTouches[0]:e).target,a=o._gsap||P.core.getCache(o),s=Ut(),c;if(!a._isScrollT||s-a._isScrollT>2e3){for(;o&&o!==pe&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(Pl[(c=jn(o)).overflowY]||Pl[c.overflowX]));)o=o.parentNode;a._isScroll=o&&o!==n&&!so(o)&&(Pl[(c=jn(o)).overflowY]||Pl[c.overflowX]),a._isScrollT=s}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},k_=function(t,e,n,i){return $e.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&cC,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ht(_e,$e.eventTypes[0],g_,!1,!0)},onDisable:function(){return ut(_e,$e.eventTypes[0],g_,!0)}})},lC=/(input|label|select|textarea)/i,p_,g_=function(t){var e=lC.test(t.target.tagName);(e||p_)&&(t._gsapAllow=!0,p_=e)},dC=function(t){no(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,o=e.allowNestedScroll,a=e.onRelease,s,c,l=Xt(t.target)||Sn,d=P.core.globals().ScrollSmoother,u=d&&d.get(),f=vr&&(t.content&&Xt(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),h=Li(l,Qe),p=Li(l,Lt),m=1,_=($e.isTouch&&Q.visualViewport?Q.visualViewport.scale*Q.visualViewport.width:Q.outerWidth)/Q.innerWidth,b=0,w=Vt(i)?function(){return i(s)}:function(){return i||2.8},x,y,E=k_(l,t.type,!0,o),I=function(){return y=!1},D=_i,T=_i,A=function(){c=vi(l,Qe),T=Ts(vr?1:0,c),n&&(D=Ts(0,vi(l,Lt))),x=ao},S=function(){f._gsap.y=As(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},Y=function(){if(y){requestAnimationFrame(I);var ce=As(s.deltaY/2),ye=T(h.v-ce);if(f&&ye!==h.v+h.offset){h.offset=ye-h.v;var v=As((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+v+", 0, 1)",f._gsap.y=v+"px",h.cacheID=X.cache,Vi()}return!0}h.offset&&S(),y=!0},O,ae,G,se,te=function(){A(),O.isActive()&&O.vars.scrollY>c&&(h()>c?O.progress(1)&&h(c):O.resetTo("scrollY",c))};return f&&P.set(f,{y:"+=0"}),t.ignoreCheck=function(L){return vr&&L.type==="touchmove"&&Y(L)||m>1.05&&L.type!=="touchstart"||s.isGesturing||L.touches&&L.touches.length>1},t.onPress=function(){y=!1;var L=m;m=As((Q.visualViewport&&Q.visualViewport.scale||1)/_),O.pause(),L!==m&&gh(l,m>1.01?!0:n?!1:"x"),ae=p(),G=h(),A(),x=ao},t.onRelease=t.onGestureStart=function(L,ce){if(h.offset&&S(),!ce)se.restart(!0);else{X.cache++;var ye=w(),v,Ae;n&&(v=p(),Ae=v+ye*.05*-L.velocityX/.227,ye*=m_(p,v,Ae,vi(l,Lt)),O.vars.scrollX=D(Ae)),v=h(),Ae=v+ye*.05*-L.velocityY/.227,ye*=m_(h,v,Ae,vi(l,Qe)),O.vars.scrollY=T(Ae),O.invalidate().duration(ye).play(.01),(vr&&O.vars.scrollY>=c||v>=c-1)&&P.to({},{onUpdate:te,duration:ye})}a&&a(L)},t.onWheel=function(){O._ts&&O.pause(),Ut()-b>1e3&&(x=0,b=Ut())},t.onChange=function(L,ce,ye,v,Ae){if(ao!==x&&A(),ce&&n&&p(D(v[2]===ce?ae+(L.startX-L.x):p()+ce-v[1])),ye){h.offset&&S();var jt=Ae[2]===ye,Hn=jt?G+L.startY-L.y:h()+ye-Ae[1],Pe=T(Hn);jt&&Hn!==Pe&&(G+=Pe-Hn),h(Pe)}(ye||ce)&&Vi()},t.onEnable=function(){gh(l,n?!1:"x"),$.addEventListener("refresh",te),ht(Q,"resize",te),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),E.enable()},t.onDisable=function(){gh(l,!0),ut(Q,"resize",te),$.removeEventListener("refresh",te),E.kill()},t.lockAxis=t.lockAxis!==!1,s=new $e(t),s.iOS=vr,vr&&!h()&&h(1),vr&&P.ticker.add(_i),se=s._dc,O=P.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:O_(h,h(),function(){return O.pause()})},onUpdate:Vi,onComplete:se.vars.onComplete}),s};$.sort=function(r){if(Vt(r))return Z.sort(r);var t=Q.pageYOffset||0;return $.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Q.innerHeight}),Z.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$.observe=function(r){return new $e(r)};$.normalizeScroll=function(r){if(typeof r>"u")return Zt;if(r===!0&&Zt)return Zt.enable();if(r===!1){Zt&&Zt.kill(),Zt=r;return}var t=r instanceof $e?r:dC(r);return Zt&&Zt.target===t.target&&Zt.kill(),so(t.target)&&(Zt=t),t};$.core={_getVelocityProp:El,_inputObserver:k_,_scrollers:X,_proxies:ei,bridge:{ss:function(){zn||lo("scrollStart"),zn=Ut()},ref:function(){return Bt}}};D_()&&P.registerPlugin($);Nt.registerPlugin($);var P_=class r{elementRef=g(be);platformId=g(Zi);st;tween;origin="bottom";revealDelay=0;revealDistance="30px";ngAfterViewInit(){if(!dc(this.platformId))return;let t=this.elementRef.nativeElement;if(t.classList.contains("hero__tagline-word")||t.classList.contains("hero__tagline"))return;let e=this.origin===""?"bottom":this.origin||"bottom",n=parseInt(String(this.revealDistance).match(/\d+/)?.[0]??"30",10),i=0,o=0;switch(e){case"top":o=-n;break;case"bottom":o=n;break;case"left":i=-n;break;case"right":i=n;break}Nt.set(t,{opacity:0,x:i,y:o,willChange:"transform, opacity"}),this.tween=Nt.to(t,{opacity:1,x:0,y:0,duration:.75,delay:this.revealDelay/1e3,ease:"power3.out",paused:!0});let a=()=>{let s=t.getBoundingClientRect();return s.top<window.innerHeight*.98&&s.bottom>0};a()?this.tween.delay(0).duration(.4).play():this.st=$.create({trigger:t,start:"top 96%",once:!0,onEnter:()=>this.tween.play(),invalidateOnRefresh:!0,onRefresh:s=>{a()&&!this.tween.isActive()&&this.tween.progress()===0&&(this.tween.delay(0).duration(.4).play(),s.kill())}})}ngOnDestroy(){this.st?.kill(),this.tween?.kill(),Nt.set(this.elementRef.nativeElement,{clearProps:"all"})}static \u0275fac=function(e){return new(e||r)};static \u0275dir=K({type:r,selectors:[["","appReveal",""],["p"],["h1"],["h2"],["h3"],["h4"],["h5"],["h6"],["li"]],inputs:{origin:[0,"appReveal","origin"],revealDelay:"revealDelay",revealDistance:"revealDistance"}})};var N_={en:{"nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.parcours":"Journey","nav.skills":"Skills","nav.contact":"Contact","nav.menu_open":"Open navigation menu","nav.switch_lang":"Switch to French","hero.eyebrow":"Developer","hero.title_hi":"Hello, I am","hero.tagline":"I design and build robust web applications, from the user interface to the server architecture \u2014 with a strong focus on code quality and user experience.","hero.btn_resume":"View my resume","hero.btn_video":"Video presentation","hero.btn_return_photo":"Return to photo","hero.aria_collapse":"Collapse presentation","hero.aria_expand":"Open presentation","hero.aria_scroll_next":"Scroll to next section","about.title":"About me","about.paragraph1":"I am a passionate software developer specializing in modern web ecosystems. With a strong engineering background, I love transforming complex problems into simple, intuitive, and performant digital solutions.","about.paragraph2":"My journey is driven by continuous learning and a strong desire to build products that make a real impact. Whether it's crafting pixel-perfect interfaces or designing resilient backend architectures, I thrive in all layers of the stack.","skills.title":"My Skills","skills.category.frontend":"Front-End Development","skills.category.backend":"Back-End & APIs","skills.category.database":"Databases & Cloud","skills.category.tools":"Tools & DevOps","skills.aria_toggle":"Show/Hide skills","parcours.title":"My Journey","parcours.tab.pro":"Professional","parcours.tab.academic":"Academic","parcours.aria_toggle":"Show/Hide journey","parcours.aria_prev":"Past","parcours.aria_next":"Earlier","parcours.badge_current":"Current","parcours.badge_progress":"In Progress","projects.title":"Featured Projects","projects.btn_details":"View details","projects.btn_demo":"Demo","projects.btn_code":"Code","projects.btn_learn_more":"Learn more","contact.title":"Let's collaborate","contact.subtitle":"Got a project in mind? Looking for a technical partner? Or just want to say hi? Feel free to reach out, my inbox is always open.","contact.form.name":"Your name","contact.form.name_placeholder":"John Doe","contact.form.email":"Your email","contact.form.email_placeholder":"john@example.com","contact.form.message":"Your message","contact.form.message_placeholder":"Tell me about your project...","contact.btn_send":"Send Message","contact.btn_sending":"Sending\u2026","contact.error.name":"Please enter your name","contact.error.email":"Please enter a valid email","contact.error.message":"Your message must be at least 10 characters long","contact.success":"Thank you! Your message has been sent.","contact.info.email":"Email","contact.info.github":"GitHub","contact.info.phone":"Phone","contact.info.availability":"Available for remote work","common.tech_used":"Technologies used","footer.designed_by":"Designed & Built by","footer.rights":"All rights reserved.","project.back":"Back to projects","project.eyebrow":"Case Study","project.btn_demo":"Live Demo","project.btn_code":"Source Code","project.about_title":"About the project","project.features_title":"Key Features","project.media_title":"Screenshots & Videos","project.media_hide":"Hide","project.media_show":"Show","project.badge_video":"Video","project.badge_photo":"Photo","project.meta_role":"Role","project.meta_duration":"Duration","project.meta_stack":"Tech Stack","project.not_found_title":"Project not found","project.not_found_desc":"This project does not exist or has been moved."},fr:{"nav.home":"Accueil","nav.about":"\xC0 propos","nav.projects":"Projets","nav.parcours":"Parcours","nav.skills":"Comp\xE9tences","nav.contact":"Me contacter","nav.menu_open":"Ouvrir le menu de navigation","nav.switch_lang":"Switch to English","hero.eyebrow":"D\xE9veloppeur","hero.title_hi":"Bonjour, je suis","hero.tagline":"Je con\xE7ois et d\xE9veloppe des applications web robustes, de l'interface utilisateur \xE0 l'architecture serveur \u2014 avec une attention particuli\xE8re port\xE9e \xE0 la qualit\xE9 du code et \xE0 l'exp\xE9rience utilisateur.","hero.btn_resume":"Voir mon CV","hero.btn_video":"Vid\xE9o de pr\xE9sentation","hero.btn_return_photo":"Retour \xE0 la photo","hero.aria_collapse":"R\xE9duire la pr\xE9sentation","hero.aria_expand":"Ouvrir la pr\xE9sentation","hero.aria_scroll_next":"D\xE9filer vers la section suivante","about.title":"\xC0 propos de moi","about.paragraph1":"Je suis un d\xE9veloppeur passionn\xE9 sp\xE9cialis\xE9 dans l'\xE9cosyst\xE8me web moderne. Fort de mon bagage en ing\xE9nierie, j'aime transformer des probl\xE8mes complexes en solutions num\xE9riques simples, intuitives et performantes.","about.paragraph2":"Mon parcours est anim\xE9 par l'apprentissage continu et le d\xE9sir de construire des produits ayant un r\xE9el impact. Qu'il s'agisse de cr\xE9er des interfaces au pixel pr\xE8s ou de concevoir des architectures back-end r\xE9silientes, je m'\xE9panouis dans toutes les couches de d\xE9veloppement.","skills.title":"Mes Comp\xE9tences","skills.category.frontend":"D\xE9veloppement Front-End","skills.category.backend":"Back-End & APIs","skills.category.database":"Bases de donn\xE9es & Cloud","skills.category.tools":"Outils & DevOps","skills.aria_toggle":"Afficher/Masquer les comp\xE9tences","parcours.title":"Mon Parcours","parcours.tab.pro":"Professionnel","parcours.tab.academic":"Acad\xE9mique","parcours.aria_toggle":"Afficher/Masquer le parcours","parcours.aria_prev":"Pass\xE9","parcours.aria_next":"Plus ancien","parcours.badge_current":"Actuel","parcours.badge_progress":"En cours","projects.title":"Projets R\xE9cents","projects.btn_details":"Voir les d\xE9tails","projects.btn_demo":"D\xE9mo","projects.btn_code":"Code","projects.btn_learn_more":"En savoir plus","contact.title":"Collaborons ensemble","contact.subtitle":"Un projet en t\xEAte ? \xC0 la recherche d'un partenaire technique ? Ou simplement envie de dire bonjour ? N'h\xE9sitez pas \xE0 me contacter, ma bo\xEEte de r\xE9ception est toujours ouverte.","contact.form.name":"Votre nom","contact.form.name_placeholder":"Jean Dupont","contact.form.email":"Votre e-mail","contact.form.email_placeholder":"jean@exemple.com","contact.form.message":"Votre message","contact.form.message_placeholder":"Parlez-moi de votre projet...","contact.btn_send":"Envoyer le message","contact.btn_sending":"Envoi en cours\u2026","contact.error.name":"Merci d'indiquer votre nom","contact.error.email":"Merci d'indiquer un email valide","contact.error.message":"Votre message doit contenir au moins 10 caract\xE8res","contact.success":"Merci ! Votre message a bien \xE9t\xE9 envoy\xE9.","contact.info.email":"Email","contact.info.github":"GitHub","contact.info.phone":"T\xE9l\xE9phone","contact.info.availability":"Disponible pour du travail \xE0 distance","common.tech_used":"Technologies utilis\xE9es","footer.designed_by":"Design & Code par","footer.rights":"Tous droits r\xE9serv\xE9s.","project.back":"Retour aux projets","project.eyebrow":"\xC9tude de cas","project.btn_demo":"Voir la d\xE9mo","project.btn_code":"Voir le code","project.about_title":"\xC0 propos du projet","project.features_title":"Fonctionnalit\xE9s cl\xE9s","project.media_title":"Captures & vid\xE9os","project.media_hide":"Masquer","project.media_show":"Afficher","project.badge_video":"Vid\xE9o","project.badge_photo":"Photo","project.meta_role":"R\xF4le","project.meta_duration":"Dur\xE9e","project.meta_stack":"Stack technique","project.not_found_title":"Projet introuvable","project.not_found_desc":"Ce projet n'existe pas ou a \xE9t\xE9 d\xE9plac\xE9."}};var L_=class r{currentLang=de("en");activeTranslations=Gt(()=>N_[this.currentLang()]);toggleLanguage(){this.currentLang.update(t=>t==="en"?"fr":"en")}t(t){return this.activeTranslations()[t]||t}static \u0275fac=function(e){return new(e||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})};var W_=(()=>{class r{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||r)(De(Tn),De(be))};static \u0275dir=K({type:r})}return r})(),uC=(()=>{class r extends W_{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ai(r)))(i||r)}})();static \u0275dir=K({type:r,features:[Tt]})}return r})(),q_=new k("");var hC={provide:q_,useExisting:Ar(()=>Y_),multi:!0};function fC(){let r=kn()?kn().getUserAgent():"";return/android (\d+)/.test(r.toLowerCase())}var mC=new k(""),Y_=(()=>{class r extends W_{_compositionMode;_composing=!1;constructor(e,n,i){super(e,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!fC())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||r)(De(Tn),De(be),De(mC,8))};static \u0275dir=K({type:r,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&Rn("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[On([hC]),Tt]})}return r})();function Nh(r){return r==null||Lh(r)===0}function Lh(r){return r==null?null:Array.isArray(r)||typeof r=="string"?r.length:r instanceof Set?r.size:null}var td=new k(""),Bh=new k(""),pC=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,B_=class{static min(t){return gC(t)}static max(t){return _C(t)}static required(t){return K_(t)}static requiredTrue(t){return vC(t)}static email(t){return bC(t)}static minLength(t){return yC(t)}static maxLength(t){return wC(t)}static pattern(t){return DC(t)}static nullValidator(t){return ql()}static compose(t){return tv(t)}static composeAsync(t){return nv(t)}};function gC(r){return t=>{if(t.value==null||r==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<r?{min:{min:r,actual:t.value}}:null}}function _C(r){return t=>{if(t.value==null||r==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>r?{max:{max:r,actual:t.value}}:null}}function K_(r){return Nh(r.value)?{required:!0}:null}function vC(r){return r.value===!0?null:{required:!0}}function bC(r){return Nh(r.value)||pC.test(r.value)?null:{email:!0}}function yC(r){return t=>{let e=t.value?.length??Lh(t.value);return e===null||e===0?null:e<r?{minlength:{requiredLength:r,actualLength:e}}:null}}function wC(r){return t=>{let e=t.value?.length??Lh(t.value);return e!==null&&e>r?{maxlength:{requiredLength:r,actualLength:e}}:null}}function DC(r){if(!r)return ql;let t,e;return typeof r=="string"?(e="",r.charAt(0)!=="^"&&(e+="^"),e+=r,r.charAt(r.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=r.toString(),t=r),n=>{if(Nh(n.value))return null;let i=n.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function ql(r){return null}function X_(r){return r!=null}function Z_(r){return xa(r)?nn(r):r}function Q_(r){let t={};return r.forEach(e=>{t=e!=null?M(M({},t),e):t}),Object.keys(t).length===0?null:t}function J_(r,t){return t.map(e=>e(r))}function CC(r){return!r.validate}function ev(r){return r.map(t=>CC(t)?t:e=>t.validate(e))}function tv(r){if(!r)return null;let t=r.filter(X_);return t.length==0?null:function(e){return Q_(J_(e,t))}}function Uh(r){return r!=null?tv(ev(r)):null}function nv(r){if(!r)return null;let t=r.filter(X_);return t.length==0?null:function(e){let n=J_(e,t).map(Z_);return Js(n).pipe(ie(Q_))}}function Vh(r){return r!=null?nv(ev(r)):null}function U_(r,t){return r===null?[t]:Array.isArray(r)?[...r,t]:[r,t]}function iv(r){return r._rawValidators}function rv(r){return r._rawAsyncValidators}function Fh(r){return r?Array.isArray(r)?r:[r]:[]}function Yl(r,t){return Array.isArray(r)?r.includes(t):r===t}function V_(r,t){let e=Fh(t);return Fh(r).forEach(i=>{Yl(e,i)||e.push(i)}),e}function j_(r,t){return Fh(t).filter(e=>!Yl(r,e))}var Kl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Uh(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Vh(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},br=class extends Kl{name;get formDirective(){return null}get path(){return null}},$s=class extends Kl{_parent=null;name=null;valueAccessor=null},Xl=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var aF=(()=>{class r extends Xl{constructor(e){super(e)}static \u0275fac=function(n){return new(n||r)(De($s,2))};static \u0275dir=K({type:r,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&Ve("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[Tt]})}return r})(),sF=(()=>{class r extends Xl{constructor(e){super(e)}static \u0275fac=function(n){return new(n||r)(De(br,10))};static \u0275dir=K({type:r,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,i){n&2&&Ve("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[Tt]})}return r})();var Us="VALID",Gl="INVALID",ua="PENDING",Vs="DISABLED",yr=class{},Zl=class extends yr{value;source;constructor(t,e){super(),this.value=t,this.source=e}},zs=class extends yr{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},Hs=class extends yr{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},ha=class extends yr{status;source;constructor(t,e){super(),this.status=t,this.source=e}},Ql=class extends yr{source;constructor(t){super(),this.source=t}},Gs=class extends yr{source;constructor(t){super(),this.source=t}};function jh(r){return(nd(r)?r.validators:r)||null}function xC(r){return Array.isArray(r)?Uh(r):r||null}function zh(r,t){return(nd(t)?t.asyncValidators:r)||null}function EC(r){return Array.isArray(r)?Vh(r):r||null}function nd(r){return r!=null&&!Array.isArray(r)&&typeof r=="object"}function ov(r,t,e){let n=r.controls;if(!(t?Object.keys(n):n).length)throw new q(1e3,"");if(!n[e])throw new q(1001,"")}function av(r,t,e){r._forEachChild((n,i)=>{if(e[i]===void 0)throw new q(-1002,"")})}var fa=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return me(this.statusReactive)}set status(t){me(()=>this.statusReactive.set(t))}_status=Gt(()=>this.statusReactive());statusReactive=de(void 0);get valid(){return this.status===Us}get invalid(){return this.status===Gl}get pending(){return this.status===ua}get disabled(){return this.status===Vs}get enabled(){return this.status!==Vs}errors;get pristine(){return me(this.pristineReactive)}set pristine(t){me(()=>this.pristineReactive.set(t))}_pristine=Gt(()=>this.pristineReactive());pristineReactive=de(!0);get dirty(){return!this.pristine}get touched(){return me(this.touchedReactive)}set touched(t){me(()=>this.touchedReactive.set(t))}_touched=Gt(()=>this.touchedReactive());touchedReactive=de(!1);get untouched(){return!this.touched}_events=new he;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(V_(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(V_(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(j_(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(j_(t,this._rawAsyncValidators))}hasValidator(t){return Yl(this._rawValidators,t)}hasAsyncValidator(t){return Yl(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(ge(M({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new Hs(!0,n))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),t.onlySelf||this._parent?._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new Hs(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(ge(M({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new zs(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new zs(!0,n))}markAsPending(t={}){this.status=ua;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ha(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(ge(M({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Vs,this.errors=null,this._forEachChild(i=>{i.disable(ge(M({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Zl(this.value,n)),this._events.next(new ha(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ge(M({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Us,this._forEachChild(n=>{n.enable(ge(M({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(ge(M({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Us||this.status===ua)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Zl(this.value,e)),this._events.next(new ha(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(ge(M({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Vs:Us}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=ua,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let n=Z_(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(t,e){let n=e?this.get(e):this;return n?.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new ha(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new lt,this.statusChanges=new lt}_calculateStatus(){return this._allControlsDisabled()?Vs:this.errors?Gl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ua)?ua:this._anyControlsHaveStatus(Gl)?Gl:Us}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,t.onlySelf||this._parent?._updatePristine(t,e),i&&this._events.next(new zs(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new Hs(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){nd(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=xC(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=EC(this._rawAsyncValidators)}},ma=class extends fa{constructor(t,e,n){super(jh(e),zh(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){av(this,!0,t),Object.keys(t).forEach(n=>{ov(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let i=this.controls[n];i&&i.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,i)=>{n.reset(t?t[i]:null,ge(M({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Gs(this))}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,n,i)=>((n.enabled||this.disabled)&&(e[i]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((i,o)=>{n=e(n,i,o)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var Oh=class extends ma{};var Hh=new k("",{factory:()=>$h}),$h="always";function SC(r,t){return[...t.path,r]}function kh(r,t,e=$h){Gh(r,t),t.valueAccessor.writeValue(r.value),(r.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(r.disabled),MC(r,t),TC(r,t),IC(r,t),AC(r,t)}function z_(r,t,e=!0){let n=()=>{};t?.valueAccessor?.registerOnChange(n),t?.valueAccessor?.registerOnTouched(n),ed(r,t),r&&(t._invokeOnDestroyCallbacks(),r._registerOnCollectionChange(()=>{}))}function Jl(r,t){r.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function AC(r,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};r.registerOnDisabledChange(e),t._registerOnDestroy(()=>{r._unregisterOnDisabledChange(e)})}}function Gh(r,t){let e=iv(r);t.validator!==null?r.setValidators(U_(e,t.validator)):typeof e=="function"&&r.setValidators([e]);let n=rv(r);t.asyncValidator!==null?r.setAsyncValidators(U_(n,t.asyncValidator)):typeof n=="function"&&r.setAsyncValidators([n]);let i=()=>r.updateValueAndValidity();Jl(t._rawValidators,i),Jl(t._rawAsyncValidators,i)}function ed(r,t){let e=!1;if(r!==null){if(t.validator!==null){let i=iv(r);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==t.validator);o.length!==i.length&&(e=!0,r.setValidators(o))}}if(t.asyncValidator!==null){let i=rv(r);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==t.asyncValidator);o.length!==i.length&&(e=!0,r.setAsyncValidators(o))}}}let n=()=>{};return Jl(t._rawValidators,n),Jl(t._rawAsyncValidators,n),e}function MC(r,t){t.valueAccessor.registerOnChange(e=>{r._pendingValue=e,r._pendingChange=!0,r._pendingDirty=!0,r.updateOn==="change"&&sv(r,t)})}function IC(r,t){t.valueAccessor.registerOnTouched(()=>{r._pendingTouched=!0,r.updateOn==="blur"&&r._pendingChange&&sv(r,t),r.updateOn!=="submit"&&r.markAsTouched()})}function sv(r,t){r._pendingDirty&&r.markAsDirty(),r.setValue(r._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1}function TC(r,t){let e=(n,i)=>{t.valueAccessor.writeValue(n),i&&t.viewToModelUpdate(n)};r.registerOnChange(e),t._registerOnDestroy(()=>{r._unregisterOnChange(e)})}function cv(r,t){r==null,Gh(r,t)}function RC(r,t){return ed(r,t)}function FC(r,t){if(!r.hasOwnProperty("model"))return!1;let e=r.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function OC(r){return Object.getPrototypeOf(r.constructor)===uC}function lv(r,t){r._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function kC(r,t){if(!t)return null;Array.isArray(t);let e,n,i;return t.forEach(o=>{o.constructor===Y_?e=o:OC(o)?n=o:i=o}),i||n||e||null}function PC(r,t){let e=r.indexOf(t);e>-1&&r.splice(e,1)}var NC={provide:br,useExisting:Ar(()=>LC)},js=Promise.resolve(),LC=(()=>{class r extends br{callSetDisabledState;get submitted(){return me(this.submittedReactive)}_submitted=Gt(()=>this.submittedReactive());submittedReactive=de(!1);_directives=new Set;form;ngSubmit=new lt;options;constructor(e,n,i){super(),this.callSetDisabledState=i,this.form=new ma({},Uh(e),Vh(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){js.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),kh(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){js.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){js.then(()=>{let n=this._findContainer(e.path),i=new ma({});cv(i,e),n.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){js.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){js.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),lv(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ql(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||r)(De(td,10),De(Bh,10),De(Hh,8))};static \u0275dir=K({type:r,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,i){n&1&&Rn("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[On([NC]),Tt]})}return r})();function H_(r,t){let e=r.indexOf(t);e>-1&&r.splice(e,1)}function $_(r){return typeof r=="object"&&r!==null&&Object.keys(r).length===2&&"value"in r&&"disabled"in r}var Wl=class extends fa{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,n){super(jh(e),zh(n,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),nd(e)&&(e.nonNullable||e.initialValueIsDefault)&&($_(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Gs(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){H_(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){H_(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){$_(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var BC=r=>r instanceof Wl;var lF=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275dir=K({type:r,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return r})();var Ph=class extends fa{constructor(t,e,n){super(jh(e),zh(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){Array.isArray(t)?t.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,n={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(t,e={}){let n=this._adjustIndex(t);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,n={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){av(this,!1,t),t.forEach((n,i)=>{ov(this,!1,i),this.at(i).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(t.forEach((n,i)=>{this.at(i)&&this.at(i).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,i)=>{n.reset(t[i],ge(M({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Gs(this))}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(let t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}};var UC=(()=>{class r extends br{callSetDisabledState;get submitted(){return me(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Gt(()=>this._submittedReactive());_submittedReactive=de(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ed(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return kh(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){z_(e.control||null,e,!1),PC(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,lv(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ql(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,i=this.form.get(e.path);n!==i&&(z_(n||null,e),BC(i)&&(kh(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);cv(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&RC(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Gh(this.form,this),this._oldForm&&ed(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||r)(De(td,10),De(Bh,10),De(Hh,8))};static \u0275dir=K({type:r,features:[Tt,In]})}return r})();var dv=new k("");var VC={provide:$s,useExisting:Ar(()=>jC)},jC=(()=>{class r extends $s{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new lt;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,i,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=kC(this,o)}ngOnChanges(e){this._added||this._setUpControl(),FC(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return SC(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||r)(De(br,13),De(td,10),De(Bh,10),De(q_,10),De(dv,8))};static \u0275dir=K({type:r,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[On([VC]),Tt,In]})}return r})();var zC={provide:br,useExisting:Ar(()=>HC)},HC=(()=>{class r extends UC{form=null;ngSubmit=new lt;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ai(r)))(i||r)}})();static \u0275dir=K({type:r,selectors:[["","formGroup",""]],hostBindings:function(n,i){n&1&&Rn("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[On([zC]),Tt]})}return r})();var $C=(()=>{class r{_validator=ql;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):ql,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||r)};static \u0275dir=K({type:r,features:[In]})}return r})();var GC={provide:td,useExisting:Ar(()=>WC),multi:!0};var WC=(()=>{class r extends $C{required;inputName="required";normalizeInput=je;createValidator=e=>K_;enabled(e){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ai(r)))(i||r)}})();static \u0275dir=K({type:r,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,i){n&2&&vt("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[On([GC]),Tt]})}return r})();var qC=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Ue({type:r});static \u0275inj=Be({})}return r})();function G_(r){return!!r&&(r.asyncValidators!==void 0||r.validators!==void 0||r.updateOn!==void 0)}var dF=(()=>{class r{useNonNullable=!1;get nonNullable(){let e=new r;return e.useNonNullable=!0,e}group(e,n=null){let i=this._reduceControls(e),o={};return G_(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new ma(i,o)}record(e,n=null){let i=this._reduceControls(e);return new Oh(i,n)}control(e,n,i){let o={};return this.useNonNullable?(G_(n)?o=n:(o.validators=n,o.asyncValidators=i),new Wl(e,ge(M({},o),{nonNullable:!0}))):new Wl(e,n,i)}array(e,n,i){let o=e.map(a=>this._createControl(a));return new Ph(o,n,i)}_reduceControls(e){let n={};return Object.keys(e).forEach(i=>{n[i]=this._createControl(e[i])}),n}_createControl(e){if(e instanceof Wl)return e;if(e instanceof fa)return e;if(Array.isArray(e)){let n=e[0],i=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,i,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var uF=(()=>{class r{static withConfig(e){return{ngModule:r,providers:[{provide:dv,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Hh,useValue:e.callSetDisabledState??$h}]}}static \u0275fac=function(n){return new(n||r)};static \u0275mod=Ue({type:r});static \u0275inj=Be({imports:[qC]})}return r})();var uv=(()=>{class r{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var hv=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(t,e,n,i,o){this._defaultMatcher=t,this.ngControl=e,this._parentFormGroup=n,this._parentForm=i,this._stateChanges=o}updateErrorState(){let t=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(i,e)??!1;o!==t&&(this.errorState=o,this._stateChanges.next())}};var Wh=class{_box;_destroyed=new he;_resizeSubject=new he;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new Yi(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),n.unsubscribe(),this._elementObservables.delete(t)}}).pipe(It(e=>e.some(n=>n.target===t)),Jh({bufferSize:1,refCount:!0}),gt(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},fv=(()=>{class r{_cleanupErrorListener;_observers=new Map;_ngZone=g(ve);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let i=n?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new Wh(i)),this._observers.get(i).observe(e)}static \u0275fac=function(n){return new(n||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var YC=["notch"],KC=["matFormFieldNotchedOutline",""],XC=["*"],mv=["iconPrefixContainer"],pv=["textPrefixContainer"],gv=["iconSuffixContainer"],_v=["textSuffixContainer"],ZC=["textField"],QC=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],JC=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function ex(r,t){r&1&&si(0,"span",21)}function tx(r,t){if(r&1&&(nt(0,"label",20),Ie(1,1),bt(2,ex,1,0,"span",21),dt()),r&2){let e=Ei(2);Fr("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),vt("for",e._control.disableAutomaticLabeling?null:e._control.id),tt(2),yt(!e.hideRequiredMarker&&e._control.required?2:-1)}}function nx(r,t){if(r&1&&bt(0,tx,3,5,"label",20),r&2){let e=Ei();yt(e._hasFloatingLabel()?0:-1)}}function ix(r,t){r&1&&si(0,"div",7)}function rx(r,t){}function ox(r,t){if(r&1&&sc(0,rx,0,0,"ng-template",13),r&2){Ei(2);let e=ud(1);Fr("ngTemplateOutlet",e)}}function ax(r,t){if(r&1&&(nt(0,"div",9),bt(1,ox,1,1,null,13),dt()),r&2){let e=Ei();Fr("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),tt(),yt(e._forceDisplayInfixLabel()?-1:1)}}function sx(r,t){r&1&&(nt(0,"div",10,2),Ie(2,2),dt())}function cx(r,t){r&1&&(nt(0,"div",11,3),Ie(2,3),dt())}function lx(r,t){}function dx(r,t){if(r&1&&sc(0,lx,0,0,"ng-template",13),r&2){Ei();let e=ud(1);Fr("ngTemplateOutlet",e)}}function ux(r,t){r&1&&(nt(0,"div",14,4),Ie(2,4),dt())}function hx(r,t){r&1&&(nt(0,"div",15,5),Ie(2,5),dt())}function fx(r,t){r&1&&si(0,"div",16)}function mx(r,t){r&1&&(nt(0,"div",18),Ie(1,6),dt())}function px(r,t){if(r&1&&(nt(0,"mat-hint",22),xf(1),dt()),r&2){let e=Ei(2);Fr("id",e._hintLabelId),tt(),Ef(e.hintLabel)}}function gx(r,t){if(r&1&&(nt(0,"div",19),bt(1,px,2,2,"mat-hint",22),Ie(2,7),si(3,"div",23),Ie(4,8),dt()),r&2){let e=Ei();tt(),yt(e.hintLabel?1:-1)}}var vv=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275dir=K({type:r,selectors:[["mat-label"]]})}return r})(),Sv=new k("MatError"),VF=(()=>{class r{id=g(Ii).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(n){return new(n||r)};static \u0275dir=K({type:r,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(n,i){n&2&&Ea("id",i.id)},inputs:{id:"id"},features:[On([{provide:Sv,useExisting:r}])]})}return r})(),bv=(()=>{class r{align="start";id=g(Ii).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||r)};static \u0275dir=K({type:r,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,i){n&2&&(Ea("id",i.id),vt("align",null),Ve("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return r})(),_x=new k("MatPrefix");var vx=new k("MatSuffix");var Av=new k("FloatingLabelParent"),yv=(()=>{class r{_elementRef=g(be);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=g(fv);_ngZone=g(ve);_parent=g(Av);_resizeSubscription=new qi;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return bx(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||r)};static \u0275dir=K({type:r,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,i){n&2&&Ve("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return r})();function bx(r){let t=r;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var wv="mdc-line-ripple--active",id="mdc-line-ripple--deactivating",Dv=(()=>{class r{_elementRef=g(be);_cleanupTransitionEnd;constructor(){let e=g(ve),n=g(Tn);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(id),e.add(wv)}deactivate(){this._elementRef.nativeElement.classList.add(id)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,i=n.contains(id);e.propertyName==="opacity"&&i&&n.remove(wv,id)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||r)};static \u0275dir=K({type:r,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return r})(),Cv=(()=>{class r{_elementRef=g(be);_ngZone=g(ve);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Ze({type:r,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,i){if(n&1&&Sa(YC,5),n&2){let o;Ce(o=xe())&&(i._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,i){n&2&&Ve("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:KC,ngContentSelectors:XC,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,i){n&1&&(Fn(),xi(0,"div",1),yo(1,"div",2,0),Ie(3),wo(),xi(4,"div",3))},encapsulation:2,changeDetection:0})}return r})(),yx=(()=>{class r{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||r)};static \u0275dir=K({type:r})}return r})();var wx=new k("MatFormField"),Dx=new k("MAT_FORM_FIELD_DEFAULT_OPTIONS"),xv="fill",Cx="auto",Ev="fixed",xx="translateY(-50%)",jF=(()=>{class r{_elementRef=g(be);_changeDetectorRef=g(Kn);_platform=g(Ft);_idGenerator=g(Ii);_ngZone=g(ve);_defaults=g(Dx,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Aa("iconPrefixContainer");_textPrefixContainerSignal=Aa("textPrefixContainer");_iconSuffixContainerSignal=Aa("iconSuffixContainer");_textSuffixContainerSignal=Aa("textSuffixContainer");_prefixSuffixContainers=Gt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Rf(vv);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ep(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Cx}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||xv;this._appearanceSignal.set(n)}_appearanceSignal=de(xv);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ev}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ev}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new he;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=hi();constructor(){let e=this._defaults,n=g(as);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ic(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Gt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(i+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(oi([void 0,void 0]),ie(()=>[n.errorState,n.userAriaDescribedBy]),Zh(),It(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(gt(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ba(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Of({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Gt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,i;if(n){let o=this._describedByIds||e;i=e.concat(n.filter(a=>a&&!o.includes(a)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,c=i?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",u=`${a+s}px`,h=`calc(${d} * (${u} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,p=`var(--mat-mdc-form-field-label-transform, ${xx} translateX(${h}))`,m=a+s+c+l;return[p,m]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Ze({type:r,selectors:[["mat-form-field"]],contentQueries:function(n,i,o){if(n&1&&(Df(o,i._labelChild,vv,5),Do(o,yx,5)(o,_x,5)(o,vx,5)(o,Sv,5)(o,bv,5)),n&2){dd();let a;Ce(a=xe())&&(i._formFieldControl=a.first),Ce(a=xe())&&(i._prefixChildren=a),Ce(a=xe())&&(i._suffixChildren=a),Ce(a=xe())&&(i._errorChildren=a),Ce(a=xe())&&(i._hintChildren=a)}},viewQuery:function(n,i){if(n&1&&(Cf(i._iconPrefixContainerSignal,mv,5)(i._textPrefixContainerSignal,pv,5)(i._iconSuffixContainerSignal,gv,5)(i._textSuffixContainerSignal,_v,5),Sa(ZC,5)(mv,5)(pv,5)(gv,5)(_v,5)(yv,5)(Cv,5)(Dv,5)),n&2){dd(4);let o;Ce(o=xe())&&(i._textField=o.first),Ce(o=xe())&&(i._iconPrefixContainer=o.first),Ce(o=xe())&&(i._textPrefixContainer=o.first),Ce(o=xe())&&(i._iconSuffixContainer=o.first),Ce(o=xe())&&(i._textSuffixContainer=o.first),Ce(o=xe())&&(i._floatingLabel=o.first),Ce(o=xe())&&(i._notchedOutline=o.first),Ce(o=xe())&&(i._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,i){n&2&&Ve("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[On([{provide:wx,useExisting:r},{provide:Av,useExisting:r}])],ngContentSelectors:JC,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,i){if(n&1&&(Fn(QC),sc(0,nx,1,1,"ng-template",null,0,Sf),nt(2,"div",6,1),Rn("click",function(a){return i._control.onContainerClick(a)}),bt(4,ix,1,0,"div",7),nt(5,"div",8),bt(6,ax,2,2,"div",9),bt(7,sx,3,0,"div",10),bt(8,cx,3,0,"div",11),nt(9,"div",12),bt(10,dx,1,1,null,13),Ie(11),dt(),bt(12,ux,3,0,"div",14),bt(13,hx,3,0,"div",15),dt(),bt(14,fx,1,0,"div",16),dt(),nt(15,"div",17),bt(16,mx,2,0,"div",18)(17,gx,5,1,"div",19),dt()),n&2){let o;tt(2),Ve("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),tt(2),yt(!i._hasOutline()&&!i._control.disabled?4:-1),tt(2),yt(i._hasOutline()?6:-1),tt(),yt(i._hasIconPrefix?7:-1),tt(),yt(i._hasTextPrefix?8:-1),tt(2),yt(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),tt(2),yt(i._hasTextSuffix?12:-1),tt(),yt(i._hasIconSuffix?13:-1),tt(),yt(i._hasOutline()?-1:14),tt(),Ve("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let a=i._getSubscriptMessageType();tt(),yt((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[yv,Cv,fd,Dv,bv],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return r})();var Ex=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Sx=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Ax(r,t){r&1&&(nt(0,"span",3),Ie(1,1),dt())}function Mx(r,t){r&1&&(nt(0,"span",6),Ie(1,2),dt())}var Ix=["*"];var Tx=new k("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Mv=new k("MatChipAvatar"),Iv=new k("MatChipTrailingIcon"),Tv=new k("MatChipEdit"),Rv=new k("MatChipRemove"),Ov=new k("MatChip"),kv=(()=>{class r{_elementRef=g(be);_parentChip=g(Ov);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){g(ui).load(os),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(n){return new(n||r)};static \u0275dir=K({type:r,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(n,i){n&2&&(vt("disabled",i._getDisabledAttribute())("aria-disabled",i.disabled),Ve("mdc-evolution-chip__action--primary",i._isPrimary)("mdc-evolution-chip__action--secondary",!i._isPrimary)("mdc-evolution-chip__action--trailing",!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,"disabled","disabled",je],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:xo(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return r})(),Rx=(()=>{class r extends kv{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ai(r)))(i||r)}})();static \u0275dir=K({type:r,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(n,i){n&1&&Rn("click",function(a){return i._handleClick(a)})("keydown",function(a){return i._handleKeydown(a)}),n&2&&(vt("tabindex",i._getTabindex()),Ve("mdc-evolution-chip__action--presentational",!1))},features:[Tt]})}return r})();var Fx=(()=>{class r{_changeDetectorRef=g(Kn);_elementRef=g(be);_tagName=g(If);_ngZone=g(ve);_focusMonitor=g(es);_globalRippleOptions=g(rs,{optional:!0});_document=g(ee);_onFocus=new he;_onBlur=new he;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=hi();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=g(Ii).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new lt;destroyed=new lt;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=g(tl);_injector=g(ct);constructor(){let e=g(ui);e.load(os),e.load(Yc),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=ba(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(n=>{let i=n._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let n=e!==null;n!==this._hasFocusInternal&&(this._hasFocusInternal=n,n?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Ze({type:r,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(n,i,o){if(n&1&&Do(o,Mv,5)(o,Tv,5)(o,Iv,5)(o,Rv,5)(o,Mv,5)(o,Iv,5)(o,Tv,5)(o,Rv,5),n&2){let a;Ce(a=xe())&&(i.leadingIcon=a.first),Ce(a=xe())&&(i.editIcon=a.first),Ce(a=xe())&&(i.trailingIcon=a.first),Ce(a=xe())&&(i.removeIcon=a.first),Ce(a=xe())&&(i._allLeadingIcons=a),Ce(a=xe())&&(i._allTrailingIcons=a),Ce(a=xe())&&(i._allEditIcons=a),Ce(a=xe())&&(i._allRemoveIcons=a)}},viewQuery:function(n,i){if(n&1&&Sa(Rx,5),n&2){let o;Ce(o=xe())&&(i.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(n,i){n&1&&Rn("keydown",function(a){return i._handleKeydown(a)}),n&2&&(Ea("id",i.id),vt("role",i.role)("aria-label",i.ariaLabel),Co("mat-"+(i.color||"primary")),Ve("mdc-evolution-chip",!i._isBasicChip)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-basic-chip",i._isBasicChip)("mat-mdc-standard-chip",!i._isBasicChip)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon())("_mat-animation-noopable",i._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",je],highlighted:[2,"highlighted","highlighted",je],disableRipple:[2,"disableRipple","disableRipple",je],disabled:[2,"disabled","disabled",je]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[On([{provide:Ov,useExisting:r}])],ngContentSelectors:Sx,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(n,i){n&1&&(Fn(Ex),si(0,"span",0),nt(1,"span",1)(2,"span",2),bt(3,Ax,2,0,"span",3),nt(4,"span",4),Ie(5),si(6,"span",5),dt()()(),bt(7,Mx,2,0,"span",6)),n&2&&(tt(3),yt(i.leadingIcon?3:-1),tt(4),yt(i._hasTrailingIcon()?7:-1))},dependencies:[kv],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return r})();var pO=(()=>{class r{_elementRef=g(be);_changeDetectorRef=g(Kn);_dir=g(as,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new he;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Ca;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(oi(null),rn(()=>ba(...this._chips.map(e))))}_originatesFromChip(e){let n=e.target;for(;n&&n!==this._elementRef.nativeElement;){if(n.classList.contains("mat-mdc-chip"))return!0;n=n.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(oi(this._chips)).subscribe(e=>{let n=[];e.forEach(i=>i._getActions().forEach(o=>n.push(o))),this._chipActions.reset(n),this._chipActions.notifyOnChanges()}),this._keyManager=new ts(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(gt(this._destroyed)).subscribe(({chip:e})=>{let n=e._getSourceAction(document.activeElement);n&&this._keyManager.updateActiveItem(n)}),this._dir?.change.pipe(gt(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(oi(null),gt(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(gt(this._destroyed)).subscribe(e=>{let i=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=o||a;this._isValidIndex(i)&&s&&(this._lastDestroyedFocusedChipIndex=i)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),n=this._chips.toArray()[e];n.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():n.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Ze({type:r,selectors:[["mat-chip-set"]],contentQueries:function(n,i,o){if(n&1&&Do(o,Fx,5),n&2){let a;Ce(a=xe())&&(i._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(n,i){n&1&&Rn("keydown",function(a){return i._handleKeydown(a)}),n&2&&vt("role",i.role)},inputs:{disabled:[2,"disabled","disabled",je],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:xo(e)]},ngContentSelectors:Ix,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(n,i){n&1&&(Fn(),yo(0,"div",0),Ie(1),wo())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return r})();var gO=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Ue({type:r});static \u0275inj=Be({providers:[uv,{provide:Tx,useValue:{separatorKeyCodes:[13]}}],imports:[nl,ar]})}return r})();var Ox=[{slug:"automatic-rfc",title:"AutomaticRFC",summary:{en:"Business workflow management platform with JWT authentication, role and permission management, built with Spring Boot.",fr:"Plateforme de gestion de workflows m\xE9tier avec authentification JWT, gestion des r\xF4les et permissions, construite avec Spring Boot."},description:[{en:"AutomaticRFC is an internal platform designed to digitize and streamline the management of change requests (Request For Change) within an organization.",fr:"AutomaticRFC est une plateforme interne pens\xE9e pour digitaliser et fluidifier la gestion des demandes de changement (Request For Change) au sein d'une organisation."},{en:"It covers the entire lifecycle of a request: creation, validation through a configurable approval workflow, progress tracking, and archiving, with full traceability of all actions performed.",fr:"Elle couvre l'ensemble du cycle de vie d'une demande : cr\xE9ation, validation par un circuit d'approbation configurable, suivi de l'\xE9tat d'avancement et archivage, avec une tra\xE7abilit\xE9 compl\xE8te des actions effectu\xE9es."},{en:"Special attention was paid to security (JWT token authentication, role- and permission-based access control) as well as data reliability through automatic entity auditing.",fr:"L'accent a \xE9t\xE9 mis sur la s\xE9curit\xE9 (authentification par jetons JWT, contr\xF4le d'acc\xE8s bas\xE9 sur les r\xF4les et permissions) ainsi que sur la fiabilit\xE9 des donn\xE9es gr\xE2ce \xE0 un audit automatique des entit\xE9s."}],role:{en:"Full-Stack Developer",fr:"D\xE9veloppeur Full-Stack"},duration:{en:"4 months",fr:"4 mois"},tags:["Spring Boot","JWT","PostgreSQL","Spring Security"],features:[{en:"Secure JWT authentication with session refresh",fr:"Authentification s\xE9curis\xE9e par jetons JWT avec rafra\xEEchissement de session"},{en:"Fine-grained role and permission management per module",fr:"Gestion fine des r\xF4les et permissions par module"},{en:"Configurable request approval workflow",fr:"Circuit de validation des demandes configurable"},{en:"Automatic audit of creations and modifications (JPA Auditing)",fr:"Audit automatique des cr\xE9ations et modifications (JPA Auditing)"}],codeUrl:"#",gradient:"linear-gradient(135deg, #00256F 0%, #0054DD 60%, #0380E5 100%)"},{slug:"portfolio-personnel",title:"Personal Portfolio",summary:{en:"Responsive showcase website presenting my journey and achievements, built with Angular and Angular Material.",fr:"Site vitrine responsive pr\xE9sentant mon parcours et mes r\xE9alisations, d\xE9velopp\xE9 avec Angular et Angular Material."},description:[{en:"This portfolio highlights my journey, skills, and projects through a modern, fluid, and fully responsive interface.",fr:"Ce portfolio met en avant mon parcours, mes comp\xE9tences et mes projets \xE0 travers une interface moderne, fluide et enti\xE8rement responsive."},{en:"It was built with Angular in a 100% standalone, zoneless architecture, and relies on Angular Material for UI components.",fr:"Il a \xE9t\xE9 construit avec Angular en architecture 100% standalone et zoneless, et s'appuie sur Angular Material pour les composants d'interface."},{en:"The experience is enriched with scroll animations, micro-interactions, and smooth anchor navigation between sections.",fr:"L'exp\xE9rience est enrichie par des animations au d\xE9filement, des micro-interactions et une navigation par ancre fluide entre les sections."}],role:{en:"Frontend Developer",fr:"D\xE9veloppeur Frontend"},duration:{en:"Ongoing",fr:"En continu"},tags:["Angular","Angular Material","SCSS","ScrollReveal"],features:[{en:"Smooth navigation with active section highlighting",fr:"Navigation fluide avec mise en \xE9vidence de la section active"},{en:"Scroll animations and micro-interactions",fr:"Animations au d\xE9filement et micro-interactions"},{en:"Dedicated detail page for each project",fr:"Page de d\xE9tail d\xE9di\xE9e \xE0 chaque projet"},{en:"Contact form with real-time validation",fr:"Formulaire de contact avec validation en temps r\xE9el"}],demoUrl:"#",codeUrl:"#",gradient:"linear-gradient(135deg, #000A29 0%, #0054DD 55%, #03AFF9 100%)"},{slug:"analyse-donnees-iot",title:"IoT Data Analysis",summary:{en:"Notebook analyzing IoT sensor quality: data processing, anomaly detection, and redundancy strategy.",fr:"Notebook d'analyse de la qualit\xE9 de capteurs IoT : traitement des donn\xE9es, d\xE9tection d'anomalies et strat\xE9gie de redondance."},description:[{en:"This project analyzes data streams from IoT sensors in order to evaluate their quality and reliability over time.",fr:"Ce projet consiste en l'analyse de flux de donn\xE9es issues de capteurs IoT afin d'en \xE9valuer la qualit\xE9 et la fiabilit\xE9 dans le temps."},{en:"Processing includes raw data cleaning, anomaly and outlier detection, as well as a study of sensor redundancy to improve the robustness of the measurement system.",fr:"Le traitement inclut le nettoyage des donn\xE9es brutes, la d\xE9tection d'anomalies et de valeurs aberrantes, ainsi que l'\xE9tude de la redondance des capteurs pour am\xE9liorer la robustesse du syst\xE8me de mesure."},{en:"Results are presented as a documented Jupyter notebook, with visualizations that make the observed trends easier to interpret.",fr:"Les r\xE9sultats sont pr\xE9sent\xE9s sous forme de notebook Jupyter document\xE9, avec des visualisations facilitant l'interpr\xE9tation des tendances observ\xE9es."}],role:{en:"Data Analyst",fr:"Data Analyst"},duration:{en:"3 weeks",fr:"3 semaines"},tags:["Python","Jupyter","Pandas","Data Analysis"],features:[{en:"Cleaning and normalization of sensor time series",fr:"Nettoyage et normalisation des s\xE9ries temporelles de capteurs"},{en:"Anomaly and outlier detection",fr:"D\xE9tection d'anomalies et de valeurs aberrantes"},{en:"Sensor redundancy strategy study",fr:"\xC9tude de strat\xE9gie de redondance des capteurs"},{en:"Visualizations for trend interpretation",fr:"Visualisations pour l\u2019interpr\xE9tation des tendances"}],codeUrl:"#",gradient:"linear-gradient(135deg, #001232 0%, #0380E5 60%, #5FE4FD 100%)"}];function vO(r){return Ox.find(t=>t.slug===r)}Nt.registerPlugin($);var Pv=class r{router=g(ir);constructor(){this.router.events.pipe(It(t=>t instanceof li)).subscribe(t=>{t.navigationTrigger==="popstate"&&this.runPopstateWipe()})}async runPopstateWipe(){if(typeof window>"u")return;let t=document.querySelector(".page-transition-overlay");t&&(await Nt.fromTo(t,{y:"-100%",opacity:1},{y:"0%",duration:.3,ease:"power2.out"}),setTimeout(()=>{Nt.to(t,{y:"100%",duration:.4,ease:"power3.inOut",onComplete:()=>{requestAnimationFrame(()=>$.refresh())}})},150))}async navigate(t,e){if(typeof window>"u"){this.router.navigate([t],{fragment:e});return}let n=document.querySelector(".page-transition-overlay");if(!n){this.router.navigate([t],{fragment:e});return}await Nt.fromTo(n,{y:"100%",opacity:1},{y:"0%",duration:.45,ease:"power3.inOut"}),await this.router.navigate([t],{fragment:e});let i=this._ensureScanBar(n);Nt.set(i,{scaleX:0,opacity:1}),await Nt.to(i,{scaleX:1,duration:.7,ease:"power2.inOut",transformOrigin:"left center"}),await Nt.to(n,{y:"-100%",duration:.55,ease:"power3.inOut",onComplete:()=>{Nt.set(n,{y:"100%"}),Nt.set(i,{scaleX:0,opacity:0}),requestAnimationFrame(()=>$.refresh())}})}_ensureScanBar(t){let e=t.querySelector(".transition-scan");return e||(e=document.createElement("div"),e.className="transition-scan",t.appendChild(e)),e}static \u0275fac=function(e){return new(e||r)};static \u0275prov=R({token:r,factory:r.\u0275fac,providedIn:"root"})};export{Pr as a,jv as b,Dd as c,db as d,Mi as e,Xd as f,ir as g,ip as h,w0 as i,x0 as j,Xa as k,Za as l,Qn as m,Ft as n,I0 as o,rr as p,es as q,ui as r,au as s,Kc as t,pp as u,k0 as v,bp as w,ts as x,Ii as y,OT as z,VT as A,zT as B,GT as C,hi as D,tR as E,Ep as F,gR as G,os as H,Y0 as I,as as J,ar as K,nl as L,YR as M,KR as N,p1 as O,g1 as P,Nt as Q,$ as R,P_ as S,L_ as T,Y_ as U,B_ as V,$s as W,aF as X,sF as Y,LC as Z,lF as _,jC as $,HC as aa,WC as ba,dF as ca,uF as da,uv as ea,hv as fa,vv as ga,VF as ha,yx as ia,wx as ja,jF as ka,Fx as la,pO as ma,gO as na,Ox as oa,vO as pa,Pv as qa};
