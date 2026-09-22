import{a as iu,b as su,c as ou,d as au,f as lu,h as cu,i as hu,j as du,k as Pu}from"./chunk-WJCW3KVS.js";import{c as _c,d as xc,f as Uo,g as vc,h as yc,i as bc}from"./chunk-SQFYRXBB.js";import{a as uu,b as Si,c as fu,d as pu,e as mu,f as gu,g as _u,h as xu,i as Vo,j as vu,k as yu,l as bu,m as Mu,n as Su,o as Ac,p as wc,q as Tu,r as Eu,s as Go,t as Au,u as wu,v as Cu,w as Ru}from"./chunk-2F7A3AY7.js";import{A as Qd,C as eu,D as tu,G as Sc,H as Tc,J as _r,O as ko,P as nu,Q as Xi,S as Hr,T as Wr,U as ei,V as ti,W as Ec,X as zo,Y as ni,Z as ii,_ as ru,q as Gr,r as Bo,s as Mc,t as Zd,u as jd,x as $d,y as Jd,z as Kd}from"./chunk-NAW3D4XE.js";import{$ as Hi,$b as Hd,Ab as At,Bb as No,Cb as mc,Eb as Ps,Fb as Fd,Gb as Et,Hb as Ud,Ib as lt,Jb as Bd,Kb as kd,L as Gi,Ma as Id,Mb as Vr,Na as Rn,Nb as zn,Ob as Vn,Q as Rd,Qb as zd,R as Kn,Ra as Q,Rb as Vd,T as Mi,Ub as en,V as He,Vb as Oo,Wa as pc,Wb as ne,Xb as ze,Ya as Dd,Yb as Ft,Za as Rs,Zb as Fo,_b as Gd,a as Qt,aa as Wi,ab as Ld,ac as Wd,b as Do,bc as Xd,da as uc,ea as fc,eb as Ht,fb as Qn,g as mr,gb as zr,i as Cd,ia as Br,ic as tn,ma as on,mb as Nd,nc as qd,pa as kr,pc as Yd,qa as Pd,qb as hn,rb as qt,rc as gc,sb as Yt,ta as gr,tb as Od,ub as Lo,vb as dn,wb as un,xb as xt,yb as j,zb as J}from"./chunk-2NPZRUYG.js";var Sm=["*"];var Tm=new Mi("MAT_CARD_CONFIG"),Iu=(()=>{class i{appearance;constructor(){let t=He(Tm,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Ht({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&en("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Sm,decls:1,vars:0,template:function(n,r){n&1&&(Bd(),kd(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return i})();var Du=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Qn({type:i});static \u0275inj=Kn({imports:[Xi]})}return i})();var Am=()=>[1,2,3,4,5],wm=(i,e)=>e.label,Cm=(i,e)=>e.name;function Rm(i,e){if(i&1&&(j(0,"mat-card",22)(1,"mat-icon",27),ne(2),J(),j(3,"span",28),ne(4),J(),j(5,"span",29),ne(6),J()()),i&2){let t=e.$implicit,n=lt();Q(2),ze(t.icon),Q(2),ze(t.value),Q(2),ze(t.label[n.i18n.currentLang()])}}function Pm(i,e){i&1&&(j(0,"mat-icon",36),ne(1,"star"),J())}function Im(i,e){if(i&1&&(j(0,"div",26)(1,"div",30)(2,"div",31),ne(3),J(),j(4,"div",32)(5,"span",33),ne(6),J(),j(7,"span",34),ne(8),J()(),j(9,"div",35),dn(10,Pm,2,0,"mat-icon",36,Lo),J()(),j(12,"p",37),ne(13),J()()),i&2){let t=e.$implicit,n=lt();Q(3),ze(t.avatar),Q(3),ze(t.name),Q(2),ze(t.role[n.i18n.currentLang()]),Q(2),un(Xd(4,Am)),Q(3),Ft('"',t.text[n.i18n.currentLang()],'"')}}var Ho=class i{currentMode=on("fullstack");i18n=He(ii);fullstackHighlights=[{icon:"work_history",value:"3+",label:{en:"Years of experience",fr:"Ann\xE9es d'exp\xE9rience"}},{icon:"rocket_launch",value:"10+",label:{en:"Projects delivered",fr:"Projets livr\xE9s"}},{icon:"groups",value:"4",label:{en:"Happy clients",fr:"Clients satisfaits"}},{icon:"school",value:"5+",label:{en:"Technologies mastered",fr:"Technologies ma\xEEtris\xE9es"}}];dataHighlights=[{icon:"memory",value:"5+",label:{en:"Deployed models",fr:"Mod\xE8les d\xE9ploy\xE9s"}},{icon:"dataset",value:"50M+",label:{en:"Data processed",fr:"Donn\xE9es trait\xE9es"}},{icon:"insights",value:"4+",label:{en:"ETL Pipelines",fr:"Pipelines ETL"}},{icon:"psychology",value:"2+",label:{en:"GenAI Projects",fr:"Projets GenAI"}}];autresHighlights=[{icon:"emoji_events",value:"1er",label:{en:"CEPA 2023 Prize",fr:"Prix CEPA 2023"}},{icon:"public",value:"Suisse",label:{en:"First GLOBAL 2022",fr:"First GLOBAL 2022"}},{icon:"language",value:"C1",label:{en:"French",fr:"Fran\xE7ais"}},{icon:"forum",value:"B2",label:{en:"English",fr:"Anglais"}}];highlights=tn(()=>{switch(this.currentMode()){case"fullstack":return this.fullstackHighlights;case"data":return this.dataHighlights;case"autres":return this.autresHighlights}});fullstackTestimonials=[{name:"Ben EKLU",role:{en:"JURINABE CoFounder",fr:"CoFondateur JURINABE"},text:{en:"Charly transformed our vision into a robust and intuitive application. Outstanding work!",fr:"Charly a transform\xE9 notre vision en une application robuste et intuitive. Un travail exceptionnel !"},avatar:"B"},{name:"Fr\xE9d\xE9ric ALLAH-ASSOGBA.",role:{en:"CTO",fr:"CTO"},text:{en:"Clean code, solid architecture, and delivered on time. A real added value for our team.",fr:"Code propre, architecture solide et livraison dans les temps. Une vraie valeur ajout\xE9e pour notre \xE9quipe."},avatar:"F"}];dataTestimonials=[{name:"Abel CHEROUAT.",role:{en:"Advanced Programming Professor",fr:"Professeur en Programmation Avanc\xE9e"},text:{en:"His deep understanding of data structures and algorithms was evident in his project. A rigorous and competent student.",fr:"Sa ma\xEEtrise approfondie des structures de donn\xE9es et des algorithmes \xE9tait \xE9vidente dans son projet. Un \xE9tudiant rigoureux et comp\xE9tent."},avatar:"A"}];autresTestimonials=[{name:"Antoine DEKPOH",role:{en:"First place in the 2023 English competition",fr:"Premier au Concours d'anglais 2023"},text:{en:"His presentation was eloquent and his team spirit excellent, leading to victory in 2023.",fr:"Sa pr\xE9sentation \xE9tait \xE9loquente et son esprit d'\xE9quipe excellent, menant \xE0 la victoire en 2023."},avatar:"A"},{name:"Olorode ATANLEY",role:{en:"First GLOBAL Mentor",fr:"Mentor First GLOBAL"},text:{en:"Remarkable technical curiosity and resilience during this international robotics competition.",fr:"Curiosit\xE9 technique et r\xE9silience remarquables lors de cette comp\xE9tition de robotique internationale."},avatar:"O"}];testimonials=tn(()=>{switch(this.currentMode()){case"fullstack":return this.fullstackTestimonials;case"data":return this.dataTestimonials;case"autres":return this.autresTestimonials}});devCode=tn(()=>this.currentMode()==="fullstack"?{role:{en:"'Full-Stack Developer'",fr:"'D\xE9veloppeur Full-Stack'"},stack:"['Angular', 'Django', 'Laravel', 'Spring Boot', 'PostgreSQL']",passion:"'UI/UX Design'"}:this.currentMode()==="data"?{role:{en:"'AI Data Engineer'",fr:"'Ing\xE9nieur IA & Data'"},stack:"['Python', 'Apache Spark', 'Talend', 'Scikit-learn']",passion:"'AI, Data, Data Science'"}:{role:{en:"'Competitor & Bilingual'",fr:"'Comp\xE9titeur & Bilingue'"},stack:"['Robotics', 'Leadership', 'Languages']",passion:"'challenges'"});aboutTexts=tn(()=>this.currentMode()==="fullstack"?{p1:{en:"Passionate developer, I build modern web applications using clean and maintainable architectures. I enjoy transforming complex business needs into simple, accessible, and user-friendly interfaces.",fr:"D\xE9veloppeur passionn\xE9, je con\xE7ois des applications web modernes en m'appuyant sur des architectures propres et maintenables. J'aime transformer des besoins m\xE9tier complexes en interfaces simples, accessibles et agr\xE9ables \xE0 utiliser."},p2:{en:"Curious and meticulous, I am equally invested in code quality as I am in the final user experience \u2014 from prototyping to production.",fr:"Curieux et rigoureux, je m'investis autant sur la qualit\xE9 du code que sur l'exp\xE9rience finale livr\xE9e \xE0 l'utilisateur \u2014 du prototypage \xE0 la mise en production."},next:{en:"AI Data Engineer Profile",fr:"Profil Ing\xE9nieur IA & Data"}}:this.currentMode()==="data"?{p1:{en:"Passionate AI Data Engineer, I design robust and scalable data architectures. My goal is to extract value from raw data by automating processing pipelines and deploying high-performance machine learning models.",fr:"AI Data Engineer passionn\xE9, je con\xE7ois des architectures de donn\xE9es robustes et \xE9volutives. Mon objectif est d'extraire la valeur des donn\xE9es brutes en automatisant leur traitement et en d\xE9ployant des mod\xE8les de machine learning performants."},p2:{en:"I ensure every integration pipeline is optimized, secure, and production-ready, while maintaining absolute code quality standards.",fr:"Je m'assure que chaque pipeline d'int\xE9gration est optimis\xE9, s\xE9curis\xE9 et pr\xEAt pour la production, tout en maintenant une exigence de qualit\xE9 de code absolue."},next:{en:"Beyond the code",fr:"Au-del\xE0 du code"}}:{p1:{en:"Beyond the code, I am a true competitor at heart. I had the opportunity to represent my country at the international robotics competition First GLOBAL 2022 in Switzerland, an unforgettable experience in high-pressure teamwork.",fr:"Au-del\xE0 du code, je suis un comp\xE9titeur dans l'\xE2me. J'ai eu l'opportunit\xE9 de repr\xE9senter mon pays lors de la comp\xE9tition internationale de robotique First GLOBAL 2022 en Suisse, une exp\xE9rience inoubliable de travail d'\xE9quipe sous pression."},p2:{en:"I am also the winner of the CEPA 2023 English competition as a team. My communication skills (C1 French, B2 English) allow me to easily thrive in international environments.",fr:"Je suis \xE9galement vainqueur du concours d'anglais CEPA 2023 en \xE9quipe. Une aisance en communication (C1 Fran\xE7ais, B2 Anglais) qui me permet d'\xE9voluer ais\xE9ment dans des contextes internationaux."},next:{en:"Full-Stack Profile",fr:"Profil Full-Stack"}});toggleMode(){let e=["fullstack","data","autres"],n=(e.indexOf(this.currentMode())+1)%e.length;this.currentMode.set(e[n])}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Ht({type:i,selectors:[["app-about"]],decls:64,vars:13,consts:[["id","a-propos",1,"section","about"],["appReveal","left",1,"about__intro"],[1,"section-eyebrow"],[1,"about__title-group"],[1,"section-title"],["alt","Who Am I","loading","lazy",1,"about__title-image",3,"src"],[1,"about__text",3,"innerHTML"],[1,"about__text"],["role","button","tabindex","0",1,"about__next-btn",3,"click"],["aria-hidden","true",1,"code-card"],[1,"code-card__bar"],[1,"code-card__dot","code-card__dot--red"],[1,"code-card__dot","code-card__dot--yellow"],[1,"code-card__dot","code-card__dot--green"],[1,"code-card__filename"],[1,"code-card__body"],[1,"tok-keyword"],[1,"tok-var"],[1,"tok-prop"],[1,"tok-string"],["appReveal","right",1,"about__right-column"],[1,"about__highlights"],["appearance","outlined",1,"highlight-card"],[1,"about__testimonials"],[1,"about__testimonials-title"],[1,"about__testimonials-list"],[1,"testimonial-card"],[1,"highlight-card__icon"],[1,"highlight-card__value"],[1,"highlight-card__label"],[1,"testimonial-card__header"],[1,"testimonial-card__avatar"],[1,"testimonial-card__meta"],[1,"testimonial-card__name"],[1,"testimonial-card__role"],[1,"testimonial-card__stars"],[1,"star-icon"],[1,"testimonial-card__text"]],template:function(t,n){t&1&&(j(0,"section",0)(1,"div",1)(2,"p",2),ne(3),J(),j(4,"div",3)(5,"h2",4),ne(6),J(),At(7,"img",5),J(),At(8,"p",6),j(9,"p",7),ne(10),j(11,"span",8),Et("click",function(){return n.toggleMode()}),ne(12),j(13,"mat-icon"),ne(14,"keyboard_double_arrow_right"),J()()(),j(15,"div",9)(16,"div",10),At(17,"span",11)(18,"span",12)(19,"span",13),j(20,"span",14),ne(21),J()(),j(22,"pre",15)(23,"code")(24,"span",16),ne(25,"const"),J(),ne(26," "),j(27,"span",17),ne(28,"developer"),J(),ne(29,` = {
  `),j(30,"span",18),ne(31,"name"),J(),ne(32,": "),j(33,"span",19),ne(34,"'Charly EKLU'"),J(),ne(35,`,
  `),j(36,"span",18),ne(37,"role"),J(),ne(38,": "),j(39,"span",19),ne(40),J(),ne(41,`,
  `),j(42,"span",18),ne(43,"stack"),J(),ne(44,": "),j(45,"span",19),ne(46),J(),ne(47,`,
  `),j(48,"span",18),ne(49,"passion"),J(),ne(50,": "),j(51,"span",19),ne(52),J(),ne(53,`,
};`),J()()()(),j(54,"div",20)(55,"div",21),dn(56,Rm,7,3,"mat-card",22,wm),J(),j(58,"div",23)(59,"h3",24),ne(60),J(),j(61,"div",25),dn(62,Im,14,5,"div",26,Cm),J()()()()),t&2&&(Q(3),ze(n.i18n.t("about.title")),Q(3),ze(n.i18n.t("about.title")),Q(),xt("src",n.currentMode()==="fullstack"?"images/WhoAmI.png":n.currentMode()==="data"?"images/WhoAmI_2.png":"images/WhoAmI_3.png",Rn),Q(),xt("innerHTML",n.aboutTexts().p1[n.i18n.currentLang()],Id),Q(2),Ft(" ",n.aboutTexts().p2[n.i18n.currentLang()]," "),Q(2),Ft(" ",n.aboutTexts().next[n.i18n.currentLang()]," "),Q(9),ze(n.currentMode()==="fullstack"?"developer.ts":n.currentMode()==="data"?"data_engineer.py":"awards.yml"),Q(19),ze(n.devCode().role[n.i18n.currentLang()]),Q(6),ze(n.devCode().stack),Q(6),ze(n.devCode().passion),Q(3),xt("@flipList",n.currentMode()),Q(),un(n.highlights()),Q(4),ze(n.i18n.currentLang()==="en"?"What they say":"Ce qu'ils en disent"),Q(),xt("@flipList",n.currentMode()),Q(),un(n.testimonials()))},dependencies:[ti,ei,Du,Iu,ni],styles:['@charset "UTF-8";.about[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.1fr .9fr;gap:3rem;align-items:start}.about[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{min-width:0}.about__text[_ngcontent-%COMP%]{color:var(--text-2);line-height:1.75;font-size:1rem}.about__right-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.about__highlights[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;align-content:start}.about__title-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem}.about__title-group[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{margin-bottom:0}.about__next-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.15rem;margin-left:.35rem;color:var(--primary);font-weight:700;cursor:pointer;border-bottom:2px solid transparent;transition:color .2s,border-color .2s;white-space:nowrap}.about__next-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem;margin-top:1px;transition:transform .2s}.about__next-btn[_ngcontent-%COMP%]:hover{color:var(--primary-hover);border-color:var(--primary)}.about__next-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{transform:translate(3px)}.about__title-image[_ngcontent-%COMP%]{height:144px;width:auto;object-fit:contain;display:block}.code-card[_ngcontent-%COMP%]{margin-top:2rem;border-radius:var(--radius-md);overflow:hidden;background:var(--code-bg);border:1px solid rgba(169,198,242,.16);box-shadow:var(--shadow-card)}.code-card__bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;padding:.65rem 1rem;background:var(--code-bar);border-bottom:1px solid rgba(169,198,242,.12)}.code-card__dot[_ngcontent-%COMP%]{width:.65rem;height:.65rem;border-radius:50%}.code-card__dot--red[_ngcontent-%COMP%]{background:#ff5f56}.code-card__dot--yellow[_ngcontent-%COMP%]{background:#ffbd2e}.code-card__dot--green[_ngcontent-%COMP%]{background:#27c93f}.code-card__filename[_ngcontent-%COMP%]{margin-left:.6rem;font-size:.75rem;color:#7b8492;font-family:Roboto Mono,ui-monospace,monospace}.code-card__body[_ngcontent-%COMP%]{margin:0;padding:1.25rem 1.5rem;overflow-x:auto;font-family:Roboto Mono,ui-monospace,monospace;font-size:.85rem;line-height:1.75;color:#edf0f4;background:var(--code-bg)}.code-card__body[_ngcontent-%COMP%]   .tok-keyword[_ngcontent-%COMP%]{color:#ff7ab2}.code-card__body[_ngcontent-%COMP%]   .tok-var[_ngcontent-%COMP%]{color:#74a6f5}.code-card__body[_ngcontent-%COMP%]   .tok-prop[_ngcontent-%COMP%]{color:#a9c6f2}.code-card__body[_ngcontent-%COMP%]   .tok-string[_ngcontent-%COMP%]{color:#ffcb6b}.highlight-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:.35rem;padding:1.25rem;background:var(--surface)!important;border:1px solid var(--border)!important;border-radius:var(--radius-md)!important;box-shadow:var(--shadow-card);transition:border-color .3s,box-shadow .3s,transform .3s}.highlight-card[_ngcontent-%COMP%]:hover{border-color:var(--border-strong)!important;box-shadow:var(--shadow-hover);transform:translateY(-3px)}.highlight-card__icon[_ngcontent-%COMP%]{color:var(--primary);background:var(--primary-tint);border-radius:10px;padding:6px;box-sizing:content-box}.highlight-card__value[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:800;color:var(--text-1);letter-spacing:-.02em}.highlight-card__label[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-2)}.about__testimonials[_ngcontent-%COMP%]{margin-top:1rem}.about__testimonials-title[_ngcontent-%COMP%]{font-size:.85rem;text-transform:uppercase;letter-spacing:.05em;color:var(--text-3);margin-bottom:1rem;font-weight:700}.about__testimonials-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.testimonial-card[_ngcontent-%COMP%]{background:var(--surface);border:1px solid var(--border);border-left:3px solid var(--primary);border-radius:var(--radius-md);padding:1.25rem;display:flex;flex-direction:column;gap:.85rem;box-shadow:var(--shadow-card);transition:border-color .3s,box-shadow .3s}.testimonial-card[_ngcontent-%COMP%]:hover{border-color:var(--border-strong);border-left-color:var(--primary);box-shadow:var(--shadow-hover)}.testimonial-card__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.testimonial-card__avatar[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--primary-bright));color:var(--on-primary);font-weight:700;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0}.testimonial-card__meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1}.testimonial-card__name[_ngcontent-%COMP%]{font-weight:700;color:var(--text-1);font-size:.95rem}.testimonial-card__role[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-3)}.testimonial-card__stars[_ngcontent-%COMP%]{display:flex;gap:2px;color:#f5b301}.testimonial-card__stars[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%]{font-size:1.1rem;width:1.1rem;height:1.1rem}.testimonial-card__text[_ngcontent-%COMP%]{margin:0;font-size:.88rem;color:var(--text-2);line-height:1.6;font-style:italic}@media(max-width:900px){.about[_ngcontent-%COMP%]{grid-template-columns:1fr;text-align:center}.about__title-group[_ngcontent-%COMP%]{justify-content:center;flex-direction:column}.about__right-column[_ngcontent-%COMP%], .highlight-card[_ngcontent-%COMP%]{align-items:center}.code-card[_ngcontent-%COMP%]{text-align:left;width:100%}.about__testimonials-title[_ngcontent-%COMP%]{text-align:center}}@media(max-width:600px){.about__highlights[_ngcontent-%COMP%]{grid-template-columns:1fr}.about__title-group[_ngcontent-%COMP%]{text-align:center}}'],data:{animation:[_c("flipList",[vc("* => *",[yc(":enter",[Uo({transform:"perspective(600px) rotateY(-90deg)",opacity:0}),bc(100,[xc("400ms cubic-bezier(0.4, 0.0, 0.2, 1)",Uo({transform:"perspective(600px) rotateY(0)",opacity:1}))])],{optional:!0})])])]}})};var Lm=["tooltip"],Nm=20;var Om=new Mi("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=He(uc);return()=>lu(i,{scrollThrottle:Nm})}}),Fm=new Mi("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Lu="tooltip-panel",Um={passive:!0},Bm=8,km=8,zm=24,Vm=200,Cc=(()=>{class i{_elementRef=He(gr);_ngZone=He(Br);_platform=He(Gr);_ariaDescriber=He(tu);_focusMonitor=He(Zd);_dir=He(nu);_injector=He(uc);_viewContainerRef=He(Ld);_mediaMatcher=He($d);_document=He(fc);_renderer=He(Rs);_animationsDisabled=Tc();_defaultOptions=He(Fm,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Nu;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=_r(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let n=_r(t);this._disabled!==n&&(this._disabled=n,n?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Bo(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Bo(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let n=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(n)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new mr;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Bm}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Gi(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(n=>n()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,n){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(n);this._detach(),this._portal=this._portal||new au(this._tooltipComponent,this._viewContainerRef);let s=this._tooltipInstance=r.attach(this._portal).instance;s._triggerElement=this._elementRef.nativeElement,s._mouseLeaveHideDelay=this._hideDelay,s.afterHidden().pipe(Gi(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),s.show(t)}hide(t=this.hideDelay){let n=this._tooltipInstance;n&&(n.isVisible()?n.hide(t):(n._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&o._origin instanceof gr)return this._overlayRef;this._detach()}let n=this._injector.get(su).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${Lu}`,s=cu(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(n).withPopoverLocation("global");return s.positionChanges.pipe(Gi(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=hu(this._injector,{direction:this._dir,positionStrategy:s,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(Om)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Gi(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Gi(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Gi(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Gi(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let n=t.getConfig().positionStrategy,r=this._getOrigin(),s=this._getOverlayPosition();n.withPositions([this._addOffset(Qt(Qt({},r.main),s.main)),this._addOffset(Qt(Qt({},r.fallback),s.fallback))])}_addOffset(t){let n=km,r=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-n:t.originY==="bottom"?t.offsetY=n:t.originX==="start"?t.offsetX=r?-n:n:t.originX==="end"&&(t.offsetX=r?n:-n),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"||n=="below"?r={originX:"center",originY:n=="above"?"top":"bottom"}:n=="before"||n=="left"&&t||n=="right"&&!t?r={originX:"start",originY:"center"}:(n=="after"||n=="right"&&t||n=="left"&&!t)&&(r={originX:"end",originY:"center"});let{x:s,y:o}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:s,originY:o}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",n=this.position,r;n=="above"?r={overlayX:"center",overlayY:"bottom"}:n=="below"?r={overlayX:"center",overlayY:"top"}:n=="before"||n=="left"&&t||n=="right"&&!t?r={overlayX:"end",overlayY:"center"}:(n=="after"||n=="right"&&t||n=="left"&&!t)&&(r={overlayX:"start",overlayY:"center"});let{x:s,y:o}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:s,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),pc(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,n){return this.position==="above"||this.position==="below"?n==="top"?n="bottom":n==="bottom"&&(n="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:n}}_updateCurrentPositionClass(t){let{overlayY:n,originX:r,originY:s}=t,o;if(n==="center"?this._dir&&this._dir.value==="rtl"?o=r==="end"?"left":"right":o=r==="start"?"left":"right":o=n==="bottom"&&s==="top"?"above":"below",o!==this._currentPosition){let a=this._overlayRef;if(a){let c=`${this._cssClassPrefix}-${Lu}-`;a.removePanelClass(c+this._currentPosition),a.addPanelClass(c+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let n=t.targetTouches?.[0],r=n?{x:n.clientX,y:n.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let s=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??s)})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let n;t.x!==void 0&&t.y!==void 0&&(n=t),this.show(void 0,n)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let n=t.relatedTarget;(!n||!this._overlayRef?.overlayElement.contains(n))&&this.hide()}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let n=this._document.elementFromPoint(t.clientX,t.clientY),r=this._elementRef.nativeElement;n!==r&&!r.contains(n)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",t),this._addListener("touchcancel",t)}}}_addListener(t,n){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,n,Um))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let n=this._elementRef.nativeElement,r=n.style;(t==="on"||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(t==="on"||!n.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||pc({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!Qd(t):!0;static \u0275fac=function(n){return new(n||i)};static \u0275dir=zr({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(n,r){n&2&&en("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),Nu=(()=>{class i{_changeDetectorRef=He(Yd);_elementRef=He(gr);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Tc();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new mr;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>zm&&t.width>=Vm}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let n=this._tooltip.nativeElement,r=this._showAnimation,s=this._hideAnimation;if(n.classList.remove(t?s:r),n.classList.add(t?r:s),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(n);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(n.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Ht({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(n,r){if(n&1&&Vr(Lm,7),n&2){let s;zn(s=Vn())&&(r._tooltip=s.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(n,r){n&1&&Et("mouseleave",function(o){return r._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(n,r){n&1&&(No(0,"div",1,0),Ud("animationend",function(o){return r._handleAnimationEnd(o)}),No(2,"div",2),ne(3),mc()()),n&2&&(Oo(r.tooltipClass),en("mdc-tooltip--multiline",r._isMultiline),Q(3),ze(r.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return i})();var Ou=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Qn({type:i});static \u0275inj=Kn({imports:[Kd,du,Xi,ou]})}return i})();var Hm=(i,e)=>e.category,Wm=(i,e)=>e.name;function Xm(i,e){if(i&1&&(j(0,"li",16)(1,"div",17),At(2,"i",18),j(3,"span",19),ne(4),J(),j(5,"span",20),ne(6),J()()()),i&2){let t=e.$implicit,n=lt(2);xt("matTooltip",t.projects[n.i18n.currentLang()]),Q(2),Oo(Hd("",t.icon," colored skill-item__icon")),Q(2),ze(t.name),Q(2),ze(t.level[n.i18n.currentLang()])}}function qm(i,e){if(i&1&&(j(0,"div",13)(1,"div",14)(2,"mat-icon"),ne(3),J(),j(4,"h3"),ne(5),J()(),j(6,"ul",15),dn(7,Xm,7,6,"li",16,Wm),J()()),i&2){let t=e.$implicit,n=e.$index,r=lt();xt("revealDelay",n*120),Q(3),ze(t.icon),Q(2),ze(r.i18n.t(t.category)),Q(2),un(t.items)}}var Xo=class i{revealed=on(!1);isOpen=on(!1);i18n=He(ii);toggleOpen(){this.isOpen.update(e=>!e)}groups=[{category:"skills.category.frontend",icon:"web",items:[{name:"Angular",icon:"devicon-angular-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Used at ORABANK-TOGO for banking reconciliation and change request workflow web applications.",fr:"Utilis\xE9 \xE0 ORABANK-TOGO pour les applications web de rapprochements bancaires et de workflow de fiches de changement."}},{name:"TypeScript",icon:"devicon-typescript-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Typed Angular front-end logic for ORABANK projects and this portfolio.",fr:"Logique front-end Angular typ\xE9e pour les projets ORABANK et ce portfolio."}},{name:"JavaScript",icon:"devicon-javascript-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Interactive interfaces, animations and technical problem solving across portfolio and internship work.",fr:"Interfaces interactives, animations et r\xE9solution de probl\xE8mes techniques sur le portfolio et les stages."}},{name:"React",icon:"devicon-react-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Front-end practice alongside Angular, with reusable components and responsive UI work.",fr:"Pratique front-end compl\xE9mentaire \xE0 Angular, avec composants r\xE9utilisables et interfaces responsives."}}]},{category:"skills.category.backend",icon:"dns",items:[{name:"Node.js",icon:"devicon-nodejs-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"API and tooling practice for web application back ends.",fr:"Pratique des API et outils c\xF4t\xE9 back-end pour applications web."}},{name:"Spring Boot",icon:"devicon-spring-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Back-end technology used for ORABANK banking reconciliation and approval workflow applications.",fr:"Technologie back-end utilis\xE9e pour les applications ORABANK de rapprochements bancaires et de workflow d'approbation."}},{name:"Java",icon:"devicon-java-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Core language behind Spring Boot work and academic software engineering projects.",fr:"Langage principal derri\xE8re Spring Boot et les projets acad\xE9miques de g\xE9nie logiciel."}}]},{category:"skills.category.database",icon:"storage",items:[{name:"PostgreSQL",icon:"devicon-postgresql-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Relational database design for structured business workflows and web application back ends.",fr:"Conception de bases relationnelles pour workflows m\xE9tier structur\xE9s et back-ends web."}},{name:"MySQL",icon:"devicon-mysql-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Academic and web development database practice during the computer engineering curriculum.",fr:"Pratique base de donn\xE9es en projets acad\xE9miques et web durant le parcours informatique."}},{name:"MongoDB",icon:"devicon-mongodb-plain",level:{en:"Basics / Learning",fr:"Notions / En apprentissage"},projects:{en:"NoSQL exploration connected to the AI and Big Data master's path.",fr:"Exploration NoSQL li\xE9e au parcours Master en IA et Big Data."}}]},{category:"skills.category.tools",icon:"construction",items:[{name:"Git",icon:"devicon-git-plain",level:{en:"Mastered / Advanced",fr:"Ma\xEEtris\xE9 / Avanc\xE9"},projects:{en:"Versioning for portfolio work, academic projects and internship application development.",fr:"Versioning pour le portfolio, les projets acad\xE9miques et les d\xE9veloppements r\xE9alis\xE9s en stage."}},{name:"Docker",icon:"devicon-docker-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"Environment setup practice for APIs, databases and full-stack applications.",fr:"Mise en place d'environnements pour API, bases de donn\xE9es et applications full-stack."}},{name:"Figma",icon:"devicon-figma-plain",level:{en:"Intermediate / Practiced",fr:"Interm\xE9diaire / Pratiqu\xE9"},projects:{en:"UI preparation and layout thinking for portfolio and web application screens.",fr:"Pr\xE9paration UI et r\xE9flexion sur les \xE9crans du portfolio et des applications web."}}]}];ngAfterViewInit(){setTimeout(()=>this.revealed.set(!0),150)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Ht({type:i,selectors:[["app-skills"]],decls:19,vars:6,consts:[["id","competences",1,"section"],["appReveal","left"],[1,"section-eyebrow"],[1,"section-header-row"],[1,"section-title"],["mat-icon-button","",3,"click"],[1,"collapsible-content"],[1,"collapsible-content__inner"],[1,"skills"],[1,"skills__left-column"],["src","images/CHARLY_TECH.png","alt","Tech Stack","loading","lazy",1,"skills__large-image"],[1,"skills__right-column"],[1,"skills__groups"],["appReveal","bottom",1,"skills__group",3,"revealDelay"],[1,"skills__group-header"],[1,"skills__list"],["matTooltipPosition","above","matTooltipClass","skill-tooltip","matTooltipTouchGestures","off",1,"skill-item",3,"matTooltip"],[1,"skill-item__label"],["aria-hidden","true"],[1,"skill-item__name"],[1,"skill-item__level"]],template:function(t,n){t&1&&(j(0,"section",0)(1,"div",1)(2,"p",2),ne(3),J(),j(4,"div",3)(5,"h2",4),ne(6),J(),j(7,"button",5),Et("click",function(){return n.toggleOpen()}),j(8,"mat-icon"),ne(9),J()()()(),j(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9),At(14,"img",10),J(),j(15,"div",11)(16,"div",12),dn(17,qm,9,3,"div",13,Hm),J()()()()()()),t&2&&(Q(3),ze(n.i18n.t("skills.title")),Q(3),ze(n.i18n.t("skills.title")),Q(),hn("aria-label",n.i18n.t("skills.aria_toggle")),Q(2),ze(n.isOpen()?"remove":"add"),Q(),en("is-open",n.isOpen()),Q(7),un(n.groups))},dependencies:[ti,ei,Ou,Cc,ni],styles:['@charset "UTF-8";.skills[_ngcontent-%COMP%]{display:grid;grid-template-columns:.8fr 1.2fr;gap:3rem;align-items:start}.skills__left-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.skills__large-image[_ngcontent-%COMP%]{width:100%;max-width:350px;height:auto;object-fit:contain;margin-top:1.5rem;align-self:flex-start}.skills__right-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.skills__groups[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}.skills__group[_ngcontent-%COMP%]{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-md);padding:1.5rem;box-shadow:var(--shadow-card);transition:border-color .3s,box-shadow .3s,transform .3s}.skills__group[_ngcontent-%COMP%]:hover{border-color:var(--border-strong);box-shadow:var(--shadow-hover);transform:translateY(-3px)}.skills__group-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;margin-bottom:1.25rem;color:var(--primary)}.skills__group-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:700;color:var(--text-1);letter-spacing:-.01em}.skills__group-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{background:var(--primary-tint);border-radius:8px;padding:5px;box-sizing:content-box}.skills__list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.75rem}.skill-item[_ngcontent-%COMP%]{padding:.6rem .8rem;border-radius:var(--radius-sm);background:var(--surface-2);border:1px solid transparent;transition:background .2s,border-color .2s;cursor:help}.skill-item[_ngcontent-%COMP%]:hover{background:var(--primary-tint);border-color:var(--border-strong)}.skill-item__label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.65rem;font-size:.88rem;color:var(--text-2);font-weight:500}.skill-item__icon[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--primary);opacity:.95}.skill-item__name[_ngcontent-%COMP%]{color:var(--text-1);font-weight:600}.skill-item__level[_ngcontent-%COMP%]{margin-left:auto;font-size:.7rem;font-weight:600;color:var(--primary);background:var(--primary-tint);border-radius:999px;padding:.15rem .55rem;white-space:nowrap}@media(max-width:992px){.skills[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:2rem;text-align:center}.skills__left-column[_ngcontent-%COMP%]{align-items:center}.skills__large-image[_ngcontent-%COMP%]{max-width:300px;margin:1.5rem auto 0;align-self:center}.skills__groups[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}}@media(max-width:600px){.skills__groups[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem}.skills__group[_ngcontent-%COMP%]{padding:1.1rem}.skills__group-header[_ngcontent-%COMP%]{justify-content:center;margin-bottom:.85rem}.skills__list[_ngcontent-%COMP%]{gap:.6rem}.skill-item[_ngcontent-%COMP%]{padding:.45rem .65rem}.skill-item__label[_ngcontent-%COMP%]{font-size:.8rem;gap:.5rem}.skill-item__icon[_ngcontent-%COMP%]{font-size:1.05rem}.skill-item__level[_ngcontent-%COMP%]{font-size:.62rem}}']})};var Pn=typeof window<"u",qo=Pn?window:null,qi=Pn?document:null,bt={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},Qe={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Zt={NONE:0,AUTO:1,FORCE:2},Ut={replace:0,none:1,blend:2},Rc=Symbol(),ri=Symbol(),Yo=Symbol(),Yi=Symbol(),Fu=Symbol(),ht=1e-11,Ds=1e12,si=1e3,Ls=240,In="",Uu="var(",Ns=[],Zo=(()=>{let i=new Map;return i.set("x","translateX"),i.set("y","translateY"),i.set("z","translateZ"),i})(),Xr=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],Bu=Xr.reduce((i,e)=>Do(Qt({},i),{[e]:e+"("}),{}),an=()=>{},ku=i=>i,zu=/\)\s*[-.\d]/,Vu=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,Gu=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,Hu=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Wu=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,Xu=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Pc=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,jo=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,qu=/([a-z])([A-Z])/g,Yu=/(\*=|\+=|-=)/,Zu=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;var qr={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:Ls,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:si,delay:0,loopDelay:0,ease:"out(2)",composition:Ut.replace,modifier:ku,onBegin:an,onBeforeUpdate:an,onUpdate:an,onLoop:an,onPause:an,onComplete:an,onRender:an},Os={current:null,root:qi},Rt={defaults:qr,precision:4,timeScale:1,tickThreshold:200,editor:null},Ic={version:"4.5.0",engine:null};Pn&&(qo.AnimeJS||(qo.AnimeJS=[]),qo.AnimeJS.push(Ic));var Dc=i=>i.replace(qu,"$1-$2").toLowerCase(),vn=(i,e)=>i.indexOf(e)===0,Ti=Date.now,Dn=Array.isArray,$o=i=>i&&i.constructor===Object,Ln=i=>typeof i=="number"&&!isNaN(i),Nn=i=>typeof i=="string",On=i=>typeof i=="function",$e=i=>typeof i>"u",oi=i=>$e(i)||i===null,Jo=i=>Pn&&i instanceof SVGElement,Lc=i=>Vu.test(i),Nc=i=>vn(i,"rgb"),Oc=i=>vn(i,"hsl"),$u=i=>Lc(i)||(Nc(i)||Oc(i))&&(i[i.length-1]===")"||!zu.test(i)),Fs=i=>!Rt.defaults.hasOwnProperty(i),Ym=["opacity","rotate","overflow","color"],Ju=(i,e)=>{if(Ym.includes(e))return!1;if(i.getAttribute(e)||e in i){if(e==="scale"){let t=i.parentNode;return t&&t.tagName==="filter"}return!0}},Ko=i=>Nn(i)?parseFloat(i):i,xr=Math.pow,Us=Math.sqrt,Ku=Math.sin,Qu=Math.cos,Bs=Math.abs;var vr=Math.floor,ef=Math.asin;var ks=Math.PI,ju=Math.round,fn=(i,e,t)=>i<e?e:i>t?t:i,gt=(i,e)=>{if(e<0)return i;if(!e)return ju(i);let t=10**e;return ju(i*t)/t};var Yr=(i,e,t)=>t===1?e:t===0?i:i+(e-i)*t,zs=i=>i===1/0?Ds:i===-1/0?-Ds:i,yr=i=>i<=ht?ht:zs(gt(i,11)),Bt=i=>Dn(i)?[...i]:i,tf=(i,e)=>{let t=Qt({},i);for(let n in e){let r=i[n];t[n]=$e(r)?e[n]:r}return t},wt=(i,e,t,n="_prev",r="_next")=>{let s=i._head,o=r;for(t&&(s=i._tail,o=n);s;){let a=s[o];e(s),s=a}},br=(i,e,t="_prev",n="_next")=>{let r=e[t],s=e[n];r?r[n]=s:i._head=s,s?s[t]=r:i._tail=r,e[t]=null,e[n]=null},Ei=(i,e,t,n="_prev",r="_next")=>{let s=i._tail;for(;s&&t&&t(s,e);)s=s[n];let o=s?s[r]:i._head;s?s[r]=e:i._head=e,o?o[n]=e:i._tail=e,e[n]=s,e[r]=o};var nf=(i,e,t)=>{let n=i.style.transform;if(n){let r=i[Yi],s=0,o=n.length,a;for(;s<o;){for(;s<o&&n.charCodeAt(s)===32;)s++;if(s>=o)break;let l=s;for(;s<o&&n.charCodeAt(s)!==40;)s++;if(s>=o)break;let d=n.substring(l,s),u=1,h=s+1,p=-1,_=-1;for(s++;s<o&&u>0;){let g=n.charCodeAt(s);g===40?u++:g===41?u--:g===44&&u===1&&(p===-1?p=s:_===-1&&(_=s)),s++}let y=s-1;d==="translate"||d==="translate3d"?(p===-1?r.translateX=n.substring(h,y).trim():(r.translateX=n.substring(h,p).trim(),_===-1?r.translateY=n.substring(p+1,y).trim():(r.translateY=n.substring(p+1,_).trim(),r.translateZ=n.substring(_+1,y).trim())),a=n.substring(h,y)):d==="scale"||d==="scale3d"?p===-1?r.scale=n.substring(h,y).trim():(r.scaleX=n.substring(h,p).trim(),_===-1?r.scaleY=n.substring(p+1,y).trim():(r.scaleY=n.substring(p+1,_).trim(),r.scaleZ=n.substring(_+1,y).trim())):r[d]=n.substring(h,y)}if(e==="translate3d"&&a)return t&&(t[e]=a),a;let c=r[e];if(!$e(c))return t&&(t[e]=c),c}return e==="translate3d"?"0px, 0px, 0px":e==="rotate3d"?"0, 0, 0, 0deg":vn(e,"scale")?"1":vn(e,"rotate")||vn(e,"skew")?"0deg":"0px"},Qo=i=>{let e=In;for(let t=0,n=Xr.length;t<n;t++){let r=Xr[t],s=i[r];if(s!==void 0){if(r==="translateX"){let o=i.translateY;if(o!==void 0){let a=i.translateZ;a!==void 0?(e+=`translate3d(${s},${o},${a}) `,t+=2):(e+=`translate(${s},${o}) `,t+=1);continue}}if(r==="scaleX"&&i.scale===void 0){let o=i.scaleY;if(o!==void 0){let a=i.scaleZ;a!==void 0?(e+=`scale3d(${s},${o},${a}) `,t+=2):(e+=`scale(${s},${o}) `,t+=1);continue}}e+=`${Bu[r]}${s}) `}r==="rotateZ"&&i.rotate3d!==void 0&&(e+=`rotate3d(${i.rotate3d}) `)}return i.matrix!==void 0&&(e+=`matrix(${i.matrix}) `),i.matrix3d!==void 0&&(e+=`matrix3d(${i.matrix3d}) `),e};var Fc=[];function ea(i,e){if(!i)return null;let t=Fc.length;e:for(let n=0;n<t;n++){let r=Fc[n];if(r.detect&&!r.detect(i))continue;let s=r.targetAdapters;for(let o=0,a=s.length;o<a;o++){let c=s[o];if(c.detect(i)){let l=c.props[e];if(l&&(!l.gate||l.gate(i)))return l;break e}}}for(let n=0;n<t;n++){let r=Fc[n];if(r.detect&&!r.detect(i))continue;let s=r.propertyResolvers;for(let o=0,a=s.length;o<a;o++){let c=s[o](i,e);if(c)return c}}return null}var Zm=i=>{let e=Gu.exec(i)||Hu.exec(i),t=$e(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],t]},jm=i=>{let e=i.length,t=e===4||e===5;return[+("0x"+i[1]+i[t?1:2]),+("0x"+i[t?2:3]+i[t?2:4]),+("0x"+i[t?3:5]+i[t?3:6]),e===5||e===9?+(+("0x"+i[t?4:7]+i[t?4:8])/255).toFixed(3):1]},Uc=(i,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i),$m=i=>{let e=Wu.exec(i)||Xu.exec(i),t=+e[1]/360,n=+e[2]/100,r=+e[3]/100,s=$e(e[4])?1:+e[4],o,a,c;if(n===0)o=a=c=r;else{let l=r<.5?r*(1+n):r+n-r*n,d=2*r-l;o=gt(Uc(d,l,t+1/3)*255,0),a=gt(Uc(d,l,t)*255,0),c=gt(Uc(d,l,t-1/3)*255,0)}return[o,a,c,s]},rf=i=>Nc(i)?Zm(i):Lc(i)?jm(i):Oc(i)?$m(i):[0,0,0,1];var zt=(i,e)=>$e(i)?e:i,sf=(i,e)=>{let t=i.match(Zu),n=e[ri]?e:document.documentElement,r=getComputedStyle(n)?.getPropertyValue(t[1]);return(!r||r.trim()===In)&&t[2]&&(r=t[2].trim()),r||0},ai=(i,e,t,n,r,s)=>{if(On(i)){if(!r){let a=i(e,t,n,s);return isNaN(+a)?a||0:+a}let o=()=>{let a=i(e,t,n,s);return isNaN(+a)?a||0:+a};return r.func=o,o()}if(Nn(i)&&vn(i,Uu)){if(!r)return sf(i,e);let o=()=>sf(i,e);return r.func=o,o()}return i},Bc=(i,e)=>i[ri]?i[Yo]&&Ju(i,e)?bt.ATTRIBUTE:Xr.includes(e)||Zo.get(e)?bt.TRANSFORM:vn(e,"--")?bt.CSS_VAR:e in i.style?bt.CSS:e in i?bt.OBJECT:bt.ATTRIBUTE:bt.OBJECT,of=(i,e,t)=>{let n=i.style[e];n&&t&&(t[e]=n);let r=n||getComputedStyle(i[Fu]||i).getPropertyValue(e);return r==="auto"?"0":r},Zi=(i,e,t,n)=>{let r=$e(t)?Bc(i,e):t,s=ea(i,e);if(s){let o=s.get(i);return o&&n&&(n[e]=o),o??0}if(r===bt.OBJECT){let o=i[e];return o&&n&&(n[e]=o),o||0}if(r===bt.ATTRIBUTE){let o=i.getAttribute(e);return o&&n&&(n[e]=o),o}return r===bt.TRANSFORM?nf(i,e,n):r===bt.CSS_VAR?of(i,e,n).trimStart():of(i,e,n)},Zr=(i,e,t)=>t==="-"?i-e:t==="+"?i+e:i*e,ta=()=>({t:Qe.NUMBER,n:0,u:null,o:null,d:null,s:null}),pn=(i,e)=>{if(e.t=Qe.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!i)return e;let t=+i;if(!isNaN(t))return e.n=t,e;let n=i;n[1]==="="&&(e.o=n[0],n=n.slice(2));let r=n.includes(" ")?!1:jo.exec(n);if(r)return e.t=Qe.UNIT,e.n=+r[1],e.u=r[2],e;if(e.o)return e.n=+n,e;if($u(n))return e.t=Qe.COLOR,e.d=rf(n),e;{let s=n.match(Pc);return e.t=Qe.COMPLEX,e.d=s?s.map(Number):[],e.s=n.split(Pc)||[],e}},kc=(i,e)=>(e.t=i._valueType,e.n=i._toNumber,e.u=i._unit,e.o=null,e.d=Bt(i._toNumbers),e.s=Bt(i._strings),e),yn=ta(),na=(i,e,t)=>{let n=i._modifier,r=i._fromNumbers,s=i._toNumbers,o=i._strings,a=o[0];for(let c=0,l=s.length;c<l;c++){let d=n(gt(Yr(r[c],s[c],e),t)),u=o[c+1];a+=`${u?d+u:d}`,i._numbers[c]=d}return a};var Vs=(i,e,t,n,r)=>{let s=i.parent,o=i.duration,a=i.completed,c=i.iterationDuration,l=i.iterationCount,d=i._currentIteration,u=i._loopDelay,h=i._reversed,p=i._alternate,_=i._hasChildren,y=i._delay,g=i._currentTime,m=y+c,w=e-y,R=fn(g,-y,o),b=fn(w,-y,o),E=w-g,S=b>0,A=b>=o,x=o<=ht,T=r===Zt.FORCE,D=0,P=w,U=0;if(l>1){let k=c+(A?0:u),$=~~(b/k);i._currentIteration=fn($,0,l),A&&i._currentIteration--,D=i._currentIteration%2,P=b-$*k||0}let Z=h^(p&&D),ee=i._ease,O=A?Z?0:o:Z?c-P:P;ee&&(O=c*ee(O/c)||0);let X=(s?s.backwards:w<g)?!Z:!!Z;if(i._currentTime=w,i._iterationTime=O,i.backwards=X,S&&!i.began?(i.began=!0,!t&&!(s&&(X||!s.began))&&i.onBegin(i)):w<=0&&(i.began=!1),!t&&!_&&S&&i._currentIteration!==d&&i.onLoop(i),T||r===Zt.AUTO&&(e>=(s&&y>0?0:y)&&e<=m||e<=y&&R>y||e>=m&&R!==o)||O>=m&&R!==o||O<=y&&R>0&&!A||e<=R&&R===o&&a||A&&!a&&x){if(S&&(i.computeDeltaTime(R),t||i.onBeforeUpdate(i)),!_){let k=T||(X?E*-1:E)>=Rt.tickThreshold,$=gt(i._offset+(s?s._offset:0)+y+O,12),B=i._head,se,le,pe,tt,pt=0;for(;B;){let We=B._composition,H=B._currentTime,ae=B._changeDuration,re=B._absoluteStartTime+B._changeDuration,me=B._nextRep,Ie=B._prevRep,Me=We!==Ut.none,Ce=Ie?Ie._absoluteStartTime+Ie._changeDuration:0,Te=Ie&&Ie.parent!==B.parent,qe=!me||me._isOverridden?re:me.parent===B.parent?re+me._delay:me._absoluteStartTime<me._absoluteUpdateStartTime?me._absoluteStartTime:me._absoluteUpdateStartTime;if((k||(H!==ae||$<=qe||Ie&&!Te&&(!me||me.parent!==B.parent))&&(H!==0||$>=B._absoluteStartTime||Te&&!B._hasFromValue&&!Ie._isOverridden&&$>=Ce||me&&!me._isOverridden&&me.parent===B.parent&&me._currentTime!==0&&O<me._startTime))&&(!Ie||Te||O>=B._startTime)&&(!Me||!B._isOverridden&&(!B._isOverlapped||$<=re)&&(!me||me._isOverridden||$<=qe)&&(!Ie||Ie._isOverridden||(Te?$>=B._absoluteStartTime||!B._hasFromValue&&$>=Ce:$>=Ce+B._delay)))){let ke=B._currentTime=fn(O-B._startTime,0,ae),we=B._ease(ke/B._updateDuration),Ze=B._modifier,st=B._valueType,ot=B._tweenType,_t=ot===bt.OBJECT,je=st===Qe.NUMBER,nt=je&&_t||we===0||we===1?-1:Rt.precision,C,it;if(je)C=it=Ze(gt(Yr(B._fromNumber,B._toNumber,we),nt));else if(st===Qe.UNIT)it=Ze(gt(Yr(B._fromNumber,B._toNumber,we),nt)),C=`${it}${B._unit}`;else if(st===Qe.COLOR){let Re=B._numbers,M=B._fromNumbers,f=B._toNumbers,L=1-we,F=M[0],q=M[1],oe=M[2],ce=f[0],Y=f[1],K=f[2];Re[0]=Ze(Math.sqrt(F*F*L+ce*ce*we)),Re[1]=Ze(Math.sqrt(q*q*L+Y*Y*we)),Re[2]=Ze(Math.sqrt(oe*oe*L+K*K*we)),Re[3]=Ze(Yr(M[3],f[3],we)),(!B._setter||n)&&(C=`rgba(${gt(Re[0],0)},${gt(Re[1],0)},${gt(Re[2],0)},${Re[3]})`)}else st===Qe.COMPLEX&&(C=na(B,we,nt));if(Me&&(B._number=it),!n&&We!==Ut.blend){let Re=B.property;se=B.target,B._setter?B._setter(se,it,B):_t?se[Re]=C:ot===bt.ATTRIBUTE?se.setAttribute(Re,C):(le=se.style,ot===bt.TRANSFORM?(se!==pe&&(pe=se,tt=se[Yi]),tt[Re]=C,pt=1):ot===bt.CSS?le[Re]=C:ot===bt.CSS_VAR&&le.setProperty(Re,C)),S&&(U=1)}else B._value=C}else H&&Ie&&!Te&&O<B._startTime&&(B._currentTime=0);pt&&B._renderTransforms&&(le.transform=Qo(tt),pt=0),B=B._next}!t&&U&&i.onRender(i)}!t&&S&&i.onUpdate(i)}return s&&x?!t&&(s.began&&!X&&w>0&&!a||X&&w<=ht&&a)&&(i.onComplete(i),i.completed=!X):S&&A?l===1/0?i._startTime+=i.duration:i._currentIteration>=l-1&&(i.paused=!0,!a&&!_&&(i.completed=!0,!t&&!(s&&(X||!s.began))&&(i.onComplete(i),i._resolve(i)))):i.completed=!1,U},ji=(i,e,t,n,r)=>{let s=i._currentIteration;if(Vs(i,e,t,n,r),i._hasChildren){let o=i,a=o.backwards,c=n?e:o._iterationTime,l=Ti(),d=0,u=!0;if(!n&&o._currentIteration!==s){let h=o.iterationDuration;wt(o,p=>{if(!a)!p.completed&&!p.backwards&&p._currentTime<p.iterationDuration&&Vs(p,h,t,1,Zt.FORCE),p.began=!1,p.completed=!1;else{let _=p.duration,y=p._offset+p._delay,g=y+_;!t&&_<=ht&&(!y||g===h)&&p.onComplete(p)}}),t||o.onLoop(o)}wt(o,h=>{let p=gt((c-h._offset)*h._speed,12);if(a&&p>h._delay+h.duration)return;let _=h._fps<o._fps?h.requestTick(l):r;d+=Vs(h,p,t,n,_),!h.completed&&u&&(u=!1)},a),!t&&d&&o.onRender(o),(u||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,t||(o.onComplete(o),o._resolve(o))))}};var af={},lf=(i,e,t)=>{if(t===bt.TRANSFORM){let n=Zo.get(i);return n||i}else if(t===bt.CSS||t===bt.ATTRIBUTE&&Jo(e)&&i in e.style){let n=af[i];if(n)return n;{let r=i&&Dc(i);return af[i]=r,r}}else return i},zc=(i,e=!1)=>{if(i._hasChildren)wt(i,t=>zc(t,e),!0);else{let t=i;t.pause(),wt(t,n=>{let r=n.property,s=n.target,o=n._tweenType,a=n._inlineValue,c=oi(a)||a===In;if(n._setter){if(!e&&!c){if(pn(a,yn),yn.d){let l=yn.d,d=n._numbers;for(let u=0,h=l.length;u<h;u++)d[u]=l[u]}else n._number=yn.n;n._setter(n.target,n._number,n)}}else if(o===bt.OBJECT)!e&&!c&&(s[r]=a);else if(s[ri])if(o===bt.ATTRIBUTE)e||(c?s.removeAttribute(r):s.setAttribute(r,a));else{let l=s.style;if(o===bt.TRANSFORM){let d=s[Yi];c?delete d[r]:d[r]=a,n._renderTransforms&&(Object.keys(d).length?l.transform=Qo(d):l.removeProperty("transform"))}else c?l.removeProperty(Dc(r)):l[r]=a}s[ri]&&t._tail===n&&t.targets.forEach(l=>{l.getAttribute&&l.getAttribute("style")===In&&l.removeAttribute("style")})})}return i};var jr=class{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._frameDuration=si/Ls,this._fps=Ls,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){let t=+e,n=t<ht?ht:t,r=si/n;n>qr.frameRate&&(qr.frameRate=n),this._fps=n,this._frameDuration=r}get speed(){return this._speed}set speed(e){let t=+e;this._speed=t<ht?ht:t}requestTick(e){let t=this._frameDuration,n=e-this._lastTickTime,r=t*.25,s=r<4?r:4;return n+s<t?Zt.NONE:(this._lastTickTime=n>=t?e-n%t:e,Zt.AUTO)}computeDeltaTime(e){let t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}};var Ai={animation:null,update:an},cf=i=>{let e=Ai.animation;return e||(e={duration:ht,computeDeltaTime:an,_offset:0,_delay:0,_head:null,_tail:null},Ai.animation=e,Ai.update=()=>{i.forEach(t=>{for(let n in t){let r=t[n],s=r._head;if(s){let o=s._valueType,a=o===Qe.COMPLEX||o===Qe.COLOR?Bt(s._fromNumbers):null,c=s._fromNumber,l=r._tail;for(;l&&l!==s;){if(a)for(let d=0,u=l._numbers.length;d<u;d++)a[d]+=l._numbers[d];else c+=l._number;l=l._prevAdd}s._toNumber=c,s._toNumbers=a}}}),Vs(e,1,1,0,Zt.FORCE)}),e};var hf=Pn?requestAnimationFrame:setImmediate,Jm=Pn?cancelAnimationFrame:clearImmediate,Vc=class extends jr{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=qr,this.paused=!0,this.reqId=0}update(){let e=this._currentTime=Ti();if(this.requestTick(e)){this.computeDeltaTime(e);let t=this._speed,n=this._fps,r=this._head;for(;r;){let s=r._next;r.paused?(br(this,r),this._hasChildren=!!this._tail,r._running=!1,r.completed&&!r._cancelled&&r.cancel()):ji(r,(e-r._startTime)*r._speed*t,0,0,r._fps<n?r.requestTick(e):Zt.AUTO),r=s}Ai.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(Ti()),this.reqId=hf(df)),this}pause(){if(this.reqId)return this.paused=!0,Km()}resume(){if(this.paused)return this.paused=!1,wt(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(Rt.timeScale===1?1:si)}set speed(e){let t=e*Rt.timeScale;this._speed!==t&&(this._speed=t,wt(this,n=>n.speed=n._speed))}get timeUnit(){return Rt.timeScale===1?"ms":"s"}set timeUnit(e){let n=e==="s",r=n?.001:1;if(Rt.timeScale!==r){Rt.timeScale=r,Rt.tickThreshold=200*r;let s=n?.001:si;this.defaults.duration*=s,this._speed*=s}}get precision(){return Rt.precision}set precision(e){Rt.precision=e}},jt=(()=>{let i=new Vc(Ti());return Pn&&(Ic.engine=i,qi.addEventListener("visibilitychange",()=>{i.pauseOnDocumentHidden&&(qi.hidden?i.pause():i.resume())})),i})(),df=()=>{jt._head?(jt.reqId=hf(df),jt.update()):jt.reqId=0},Km=()=>(Jm(jt.reqId),jt.reqId=0,jt);var ia={_rep:new WeakMap,_add:new Map},Hs=(i,e,t="_rep")=>{let n=ia[t],r=n.get(i);return r||(r={},n.set(i,r)),r[e]?r[e]:r[e]={_head:null,_tail:null}},Qm=(i,e)=>i._isOverridden||i._absoluteStartTime>e._absoluteStartTime,Gs=i=>{i._isOverlapped=1,i._isOverridden=1,i._changeDuration=ht,i._currentTime=ht},ra=(i,e)=>{let t=i._composition;if(t===Ut.replace){let n=i._absoluteStartTime;Ei(e,i,Qm,"_prevRep","_nextRep");let r=i._prevRep;if(r){let s=r.parent,o=r._absoluteEndTime;if(i.parent.id!==s.id&&s.iterationCount>1&&o+(s.duration-s.iterationDuration)>n){Gs(r);let l=r._prevRep;for(;l&&l.parent.id===s.id;)Gs(l),l=l._prevRep}let a=i._absoluteUpdateStartTime;if(o>a){let l=r._startTime,d=o-(l+r._updateDuration),u=gt(a-d-l,12);r._changeDuration=u,r._currentTime=u,r._isOverlapped=1,u<ht&&Gs(r)}let c=i.parent.parent;if(!c||c!==s.parent){let l=!0;if(wt(s,d=>{d._isOverlapped||(l=!1)}),l){let d=s.parent;if(d){let u=!0;wt(d,h=>{h!==s&&wt(h,p=>{p._isOverlapped||(u=!1)})}),u&&d.cancel()}else s.cancel()}}}}else if(t===Ut.blend){let n=Hs(i.target,i.property,"_add"),r=cf(ia._add),s=n._head;s||(s=Qt({},i),s._composition=Ut.replace,s._updateDuration=ht,s._startTime=0,s._numbers=Bt(i._fromNumbers),s._number=0,s._next=null,s._prev=null,Ei(n,s),Ei(r,s));let o=i._toNumber;if(i._fromNumber=s._fromNumber-o,i._toNumber=0,i._numbers=Bt(i._fromNumbers),i._number=0,s._fromNumber=o,i._toNumbers.length){let a=Bt(i._toNumbers);a.forEach((c,l)=>{i._fromNumbers[l]=s._fromNumbers[l]-c,i._toNumbers[l]=0}),s._fromNumbers=a}Ei(n,i,null,"_prevAdd","_nextAdd")}return i},uf=i=>{let e=i._composition;if(e!==Ut.none){let t=i.target,n=i.property,o=ia._rep.get(t)[n];if(br(o,i,"_prevRep","_nextRep"),e===Ut.blend){let a=ia._add,c=a.get(t);if(!c)return;let l=c[n],d=Ai.animation;br(l,i,"_prevAdd","_nextAdd");let u=l._head;if(u&&u===l._tail){br(l,u,"_prevAdd","_nextAdd"),br(d,u);let h=!0;for(let p in c)if(c[p]._head){h=!1;break}h&&a.delete(t)}}}return i};var ff=i=>(i.paused=!0,i.began=!1,i.completed=!1,i),Gc=i=>(i._cancelled&&(i._hasChildren?wt(i,Gc):wt(i,e=>{e._composition!==Ut.none&&ra(e,Hs(e.target,e.property))}),i._cancelled=0),i),pf=0,eg=(i,e)=>i._priority>e._priority,sa=class extends jr{constructor(e={},t=null,n=0){super(0),++pf;let{id:r,delay:s,duration:o,reversed:a,alternate:c,loop:l,loopDelay:d,autoplay:u,frameRate:h,playbackRate:p,priority:_,onComplete:y,onLoop:g,onPause:m,onBegin:w,onBeforeUpdate:R,onUpdate:b}=e;Os.current&&Os.current.register(this);let E=t?0:jt._lastTickTime,S=t?t.defaults:Rt.defaults,A=On(s)||$e(s)?S.delay:+s,x=On(o)||$e(o)?1/0:+o,T=zt(l,S.loop),D=zt(d,S.loopDelay),P=T===!0||T===1/0||T<0?1/0:T+1,U=0;t?U=n:(jt.reqId||jt.requestTick(Ti()),U=(jt._lastTickTime-jt._startTime)*Rt.timeScale),this.id=$e(r)?pf:r,this.parent=t,this.duration=zs((x+D)*P-D)||ht,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=w||S.onBegin,this.onBeforeUpdate=R||S.onBeforeUpdate,this.onUpdate=b||S.onUpdate,this.onLoop=g||S.onLoop,this.onPause=m||S.onPause,this.onComplete=y||S.onComplete,this.iterationDuration=x,this.iterationCount=P,this._autoplay=t?!1:zt(u,S.autoplay),this._offset=U,this._delay=A,this._loopDelay=D,this._iterationTime=0,this._currentIteration=0,this._resolve=an,this._running=!1,this._reversed=+zt(a,S.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=zt(c,S.alternate),this._prev=null,this._next=null,this._lastTickTime=E,this._startTime=E,this._lastTime=E,this._fps=zt(h,S.frameRate),this._speed=zt(p,S.playbackRate),this._priority=+zt(_,1)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return fn(gt(this._currentTime,Rt.precision),-this._delay,this.duration)}set currentTime(e){let t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return fn(gt(this._iterationTime,Rt.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return fn(gt(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return fn(gt(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){let t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*fn(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return Gc(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,ji(this,0,1,~~e,Zt.FORCE),ff(this),this._hasChildren&&wt(this,ff),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&ji(this,this.duration,1,~~e,Zt.FORCE),this.reset(e);let t=this._autoplay;return t===!0?this.resume():t&&!$e(t.linked)&&t.link(this),this}resetTime(){let e=1/(this._speed*jt._speed);return this._startTime=Ti()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=ht&&!this._hasChildren?ji(this,ht,0,0,Zt.FORCE):(this._running||(Ei(jt,this,eg),jt._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,jt.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,n=0){Gc(this),this.completed=!1;let r=this.paused;return this.paused=!0,ji(this,e+this._delay,~~t,~~n,Zt.AUTO),r?this:this.resume()}alternate(){let e=this._reversed,t=this.iterationCount,n=this.iterationDuration,r=t===1/0?vr(Ds/n):t;return this._reversed=+(this._alternate&&!(r%2)?e:!e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(n*r-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?wt(this,e=>e.cancel(),!0):wt(this,uf),this._cancelled=1,this.pause()}stretch(e){let t=this.duration,n=yr(e);if(t===n)return this;let r=e/t,s=e<=ht;return this.duration=s?ht:n,this.iterationDuration=s?ht:yr(this.iterationDuration*r),this._offset*=r,this._delay*=r,this._loopDelay*=r,this}revert(){ji(this,0,1,0,Zt.AUTO);let e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=an){let t=this.then,n=()=>{this.then=null,e(this),this.then=t,this._resolve=an};return new Promise(r=>(this._resolve=()=>r(n()),this.completed&&this._resolve(),this))}};function mf(i){let e=Nn(i)?Os.root.querySelectorAll(i):i;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function tg(i){if(oi(i))return[];if(!Pn)return Dn(i)&&i.flat(1/0)||[i];if(Dn(i)){let t=i.flat(1/0),n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];if(!oi(o)){let a=mf(o);if(a)for(let c=0,l=a.length;c<l;c++){let d=a[c];if(!oi(d)){let u=!1;for(let h=0,p=n.length;h<p;h++)if(n[h]===d){u=!0;break}u||n.push(d)}}else{let c=!1;for(let l=0,d=n.length;l<d;l++)if(n[l]===o){c=!0;break}c||n.push(o)}}}return n}let e=mf(i);return e?Array.from(e):[i]}function oa(i){let e=tg(i),t=e.length;for(let n=0;n<t;n++){let r=e[n];if(!r[Rc]){r[Rc]=!0;let s=Jo(r);(r.nodeType||s)&&(r[ri]=!0,r[Yo]=s,r[Yi]={})}}return e}var Hc={deg:1,rad:180/ks,turn:360},gf={},Wc=(i,e,t,n=!1)=>{let r=e.u,s=e.n;if(e.t===Qe.UNIT&&r===t)return e;let o=s+r+t,a=gf[o];if(!$e(a)&&!n)e.n=a;else{let c;if(r in Hc)c=s*Hc[r]/Hc[t];else{let d=i.cloneNode(),u=i.parentNode,h=u&&u!==qi?u:qi.body;h.appendChild(d);let p=d.style;p.width=100+r;let _=d.offsetWidth||100;p.width=100+t;let y=d.offsetWidth||100,g=_/y;h.removeChild(d),c=g*s}e.n=c,gf[o]=c}return e.t,Qe.UNIT,e.u=t,e};var wi=i=>i;var Ws=(i=1.68)=>e=>xr(e,+i),qc={in:i=>e=>i(e),out:i=>e=>1-i(1-e),inOut:i=>e=>e<.5?i(e*2)/2:1-i(e*-2+2)/2,outIn:i=>e=>e<.5?(1-i(1-e*2))/2:(i(e*2-1)+1)/2},ng=ks/2,_f=ks*2,xf={[In]:Ws,Quad:Ws(2),Cubic:Ws(3),Quart:Ws(4),Quint:Ws(5),Sine:i=>1-Qu(i*ng),Circ:i=>1-Us(1-i*i),Expo:i=>i?xr(2,10*i-10):0,Bounce:i=>{let e,t=4;for(;i<((e=xr(2,--t))-1)/11;);return 1/xr(4,3-t)-7.5625*xr((e*3-2)/22-i,2)},Back:(i=1.7)=>e=>(+i+1)*e*e*e-+i*e*e,Elastic:(i=1,e=.3)=>{let t=fn(+i,1,10),n=fn(+e,ht,2),r=n/_f*ef(1/t),s=_f/n;return o=>o===0||o===1?o:-t*xr(2,-10*(1-o))*Ku((1-o-r)*s)}},Xc=(()=>{let i={linear:wi,none:wi};for(let e in qc)for(let t in xf){let n=xf[t],r=qc[e];i[e+t]=t===In||t==="Back"||t==="Elastic"?(s,o)=>r(n(s,o)):r(n)}return i})(),aa={linear:wi,none:wi},ig=i=>{if(aa[i])return aa[i];if(i.indexOf("(")<=-1){let t=qc[i]||i.includes("Back")||i.includes("Elastic")?Xc[i]():Xc[i];return t?aa[i]=t:wi}else{let e=i.slice(0,-1).split("("),t=Xc[e[0]];return t?aa[i]=t(...e[1].split(",")):wi}},vf=["steps(","irregular(","linear(","cubicBezier("],Xs=i=>{if(Nn(i)){for(let t=0,n=vf.length;t<n;t++)if(vn(i,vf[t]))return console.warn(`String syntax for \`ease: "${i}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${i}\``),wi}return On(i)?i:Nn(i)?ig(i):wi};var Xe=ta(),et=ta(),$r={},la={func:null},ca={func:null},ha=[null],Jr=[null,null],da={to:null},rg=0,yf=0,$i,li,sg=(i,e)=>{let t={};if(Dn(i)){let n=[].concat(...i.map(r=>Object.keys(r))).filter(Fs);for(let r=0,s=n.length;r<s;r++){let o=n[r],a=i.map(c=>{let l={};for(let d in c){let u=c[d];Fs(d)?d===o&&(l.to=u):l[d]=u}return l});t[o]=a}}else{let n=zt(e.duration,Rt.defaults.duration);Object.keys(i).map(s=>({o:parseFloat(s)/100,p:i[s]})).sort((s,o)=>s.o-o.o).forEach(s=>{let o=s.o,a=s.p;for(let c in a)if(Fs(c)){let l=t[c];l||(l=t[c]=[]);let d=o*n,u=l.length,h=l[u-1],p={to:a[c]},_=0;for(let y=0;y<u;y++)_+=l[y].duration;u===1&&(p.from=h.to),a.ease&&(p.ease=a.ease),p.duration=d-(u?_:0),l.push(p)}return s});for(let s in t){let o=t[s],a;for(let c=0,l=o.length;c<l;c++){let d=o[c],u=d.ease;d.ease=a||void 0,a=u}o[0].duration||o.shift()}}return t},ua=class extends sa{constructor(e,t,n,r,s=!1,o=0,a){super(t,n,r),this._head,this._tail,++yf;let c=oa(e),l=c.length,d=t.keyframes,u=d?tf(sg(d,t),t):t,{id:h,delay:p,duration:_,ease:y,playbackEase:g,modifier:m,composition:w,onRender:R}=u,b=n?n.defaults:Rt.defaults,E=zt(y,b.ease),S=zt(g,b.playbackEase),A=S?Xs(S):null,x=!$e(E.ease),T=x?E.ease:zt(y,A?"linear":b.ease),D=x?E.settlingDuration:zt(_,b.duration),P=zt(p,b.delay),U=m||b.modifier,Z=$e(w)&&l>=si?Ut.none:$e(w)?b.composition:w,ee=this._offset+(n?n._offset:0);x&&(E.parent=this);let O=NaN,X=NaN,k=0,$=0;for(let B=0;B<l;B++){let se=c[B],le=o||B,pe=a||c,tt=NaN,pt=NaN;for(let We in u)if(Fs(We)){let H=Bc(se,We),ae=ea(se,We),re=lf(We,se,H),me=u[We],Ie=Dn(me);if(s&&!Ie&&(Jr[0]=me,Jr[1]=me,me=Jr),Ie){let we=me.length,Ze=!$o(me[0]);we===2&&Ze?(da.to=me,ha[0]=da,$i=ha):we>2&&Ze?($i=[],me.forEach((st,ot)=>{ot?ot===1?(Jr[1]=st,$i.push(Jr)):$i.push(st):Jr[0]=st})):$i=me}else ha[0]=me,$i=ha;let Me=null,Ce=null,Te=NaN,qe=0,ke=0;for(let we=$i.length;ke<we;ke++){let Ze=$i[ke];$o(Ze)?li=Ze:(da.to=Ze,li=da),la.func=null,ca.func=null;let st=ai(zt(li.composition,Z),se,le,pe,null,null),ot=Ln(st)?st:Ut[st];!Me&&ot!==Ut.none&&(Me=Hs(se,re));let _t=Me?Me._tail:null,je=n&&_t&&_t.parent.parent===n?_t:Ce,nt=ai(li.to,se,le,pe,la,je),C;$o(nt)&&!$e(nt.to)?(li=nt,C=nt.to):C=nt;let it=ai(li.from,se,le,pe,ca,je),Re=li.ease||T,M=ai(Re,se,le,pe,null,je),f=On(M)||Nn(M)?M:Re,L=!$e(f)&&!$e(f.ease),F=L?f.ease:f,q=L?f.settlingDuration:ai(zt(li.duration,we>1?ai(D,se,le,pe,null,je)/we:D),se,le,pe,null,je),oe=ai(zt(li.delay,ke?0:P),se,le,pe,null,je),ce=li.modifier||U,Y=!$e(it),K=!$e(C),he=Dn(C),De=he||Y&&K,ge=Ce?qe:0,fe=Ce?qe+oe:oe,Le=gt(ee+fe,12),Be=gt(ee+ge,12);!$&&(Y||he)&&($=1);let Ue=Ce;if(ot!==Ut.none){let Oe=Me._head;for(;Oe&&Oe._absoluteStartTime<=Le;)if(Oe._isOverridden||(Ue=Oe),Oe=Oe._nextRep,Oe&&Oe._absoluteStartTime>=Le)for(;Oe;)Gs(Oe),Oe=Oe._nextRep}if(De){pn(he?ai(C[0],se,le,pe,ca,je):it,Xe),pn(he?ai(C[1],se,le,pe,la,je):C,et);let Oe=Zi(se,re,H,$r);Xe.t===Qe.NUMBER&&(Ue?Ue._valueType===Qe.UNIT&&(Xe.t=Qe.UNIT,Xe.u=Ue._unit):(pn(Oe,yn),yn.t===Qe.UNIT&&(Xe.t=Qe.UNIT,Xe.u=yn.u)))}else K?pn(C,et):Ce?kc(Ce,et):pn(n&&Ue&&Ue.parent.parent===n?Ue._value:Zi(se,re,H,$r),et),Y?pn(it,Xe):Ce?kc(Ce,Xe):pn(n&&Ue&&Ue.parent.parent===n?Ue._value:Zi(se,re,H,$r),Xe);if(Xe.o&&(Xe.n=Zr(Ue?Ue._toNumber:pn(Zi(se,re,H,$r),yn).n,Xe.n,Xe.o)),et.o&&(et.n=Zr(Xe.n,et.n,et.o)),Xe.t!==et.t){if(Xe.t===Qe.COMPLEX||et.t===Qe.COMPLEX){let Oe=Xe.t===Qe.COMPLEX?Xe:et,Je=Xe.t===Qe.COMPLEX?et:Xe;Je.t=Qe.COMPLEX,Je.s=Bt(Oe.s),Je.d=Oe.d.map(()=>Je.n)}else if(Xe.t===Qe.UNIT||et.t===Qe.UNIT){let Oe=Xe.t===Qe.UNIT?Xe:et,Je=Xe.t===Qe.UNIT?et:Xe;Je.t=Qe.UNIT,Je.u=Oe.u}else if(Xe.t===Qe.COLOR||et.t===Qe.COLOR){let Oe=Xe.t===Qe.COLOR?Xe:et,Je=Xe.t===Qe.COLOR?et:Xe;Je.t=Qe.COLOR,Je.d=Oe.d.map(()=>0)}}if(Xe.u!==et.u){let Oe=et.u?Xe:et;Oe=Wc(se,Oe,et.u?et.u:Xe.u,!1)}if(et.d&&Xe.d&&et.d.length!==Xe.d.length){let Oe=Xe.d.length>et.d.length?Xe:et,Je=Oe===Xe?et:Xe;Je.d=Oe.d.map((kn,_n)=>$e(Je.d[_n])?0:Je.d[_n]),Je.s=Bt(Oe.s)}let I=gt(+q||ht,12),de=$r[re];oi(de)||($r[re]=null);let te=ae?ae.set:null;qe=gt(fe+I,12);let ue=Xe.d,_e=et.d,ie=et.s,be={parent:this,id:rg++,property:re,target:se,_value:null,_toFunc:la.func,_fromFunc:ca.func,_ease:Xs(F),_fromNumbers:ue?Bt(ue):Ns,_toNumbers:_e?Bt(_e):Ns,_strings:ie?Bt(ie):Ns,_fromNumber:Xe.n,_toNumber:et.n,_numbers:ue?Bt(ue):Ns,_number:Xe.n,_unit:et.u,_modifier:ce,_currentTime:0,_startTime:fe,_delay:+oe,_updateDuration:I,_changeDuration:I,_absoluteStartTime:Le,_absoluteUpdateStartTime:Be,_absoluteEndTime:gt(ee+qe,12),_hasFromValue:Y||he?1:0,_tweenType:H,_setter:te,_valueType:et.t,_composition:ot,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:de,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};ot!==Ut.none&&ra(be,Me);let Ae=be._valueType;if(Ae===Qe.COMPLEX)be._value=na(be,1,-1);else if(Ae===Qe.UNIT)be._value=`${ce(be._toNumber)}${be._unit}`;else if(Ae===Qe.COLOR){let Oe=et.d;be._value=`rgba(${gt(Oe[0],0)},${gt(Oe[1],0)},${gt(Oe[2],0)},${Oe[3]})`}else be._value=ce(be._toNumber);isNaN(Te)&&(Te=be._startTime),Ce=be,k++,Ei(this,be)}(isNaN(X)||Te<X)&&(X=Te),(isNaN(O)||qe>O)&&(O=qe),H===bt.TRANSFORM&&(tt=k-ke,pt=k)}if(!isNaN(tt)){let We=0;wt(this,H=>{We>=tt&&We<pt&&(H._renderTransforms=1,H._composition===Ut.blend&&wt(Ai.animation,ae=>{ae.id===H.id&&(ae._renderTransforms=1)})),We++})}}l||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),X?(wt(this,B=>{B._startTime-B._delay||(B._delay-=X),B._startTime-=X}),O-=X):X=0,O||(O=ht,this.iterationCount=0),this.targets=c,this.id=$e(h)?yf:h,this.duration=O===ht?ht:zs((O+this._loopDelay)*this.iterationCount-this._loopDelay)||ht,this.onRender=R||b.onRender,this._ease=A,this._delay=X,this.iterationDuration=O,!this._autoplay&&$&&this.onRender(this)}stretch(e){let t=this.duration;if(t===yr(e))return this;let n=e/t;return wt(this,r=>{r._updateDuration=yr(r._updateDuration*n),r._changeDuration=yr(r._changeDuration*n),r._currentTime*=n,r._delay*=n,r._startTime*=n,r._absoluteStartTime*=n,r._absoluteUpdateStartTime*=n,r._absoluteEndTime*=n}),super.stretch(e)}refresh(){return wt(this,e=>{let t=e._toFunc,n=e._fromFunc;(t||n)&&(n?(pn(n(),Xe),Xe.u!==e._unit&&e.target[ri]&&Wc(e.target,Xe,e._unit,!0),e._fromNumbers=Bt(Xe.d),e._fromNumber=Xe.n):t&&(pn(Zi(e.target,e.property,e._tweenType),yn),e._fromNumbers=Bt(yn.d),e._fromNumber=yn.n),t&&(pn(t(),et),e._toNumbers=Bt(et.d),e._strings=Bt(et.s),e._toNumber=et.o?Zr(e._fromNumber,et.n,et.o):et.n))}),this.duration===ht&&this.restart(),this}revert(){return super.revert(),zc(this)}then(e){return super.then(e)}},Yc=(i,e)=>Rt.editor?Rt.editor.addAnimation(i,e):new ua(i,e,null,0,!1).init();var og=(i,e)=>{if(vn(e,"<")){let t=e[1]==="<",n=i._tail,r=n?n._offset+n._delay:0;return t?r:r+n.duration}},bf=(i,e)=>{let t=i.iterationDuration;if(t===ht&&(t=0),$e(e))return t;if(Ln(+e))return+e;let n=e,r=i?i.labels:null,s=!oi(r),o=og(i,n),a=!$e(o),c=Yu.exec(n);if(c){let l=c[0],d=n.split(l),u=s&&d[0]?r[d[0]]:t,h=a?o:s?u:t,p=+d[1];return Zr(h,p,l[0])}else return a?o:s?$e(r[n])?t:r[n]:t};var Zc=(i=0,e=1,t=0)=>{let n=10**t;return Math.floor((Math.random()*(e-i+1/n)+i)*n)/n},ag=0,Mf=(i,e=0,t=1,n=0)=>{let r=i===void 0?ag++:i;return(s=e,o=t,a=n)=>{r+=1831565813,r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61);let c=10**a;return Math.floor((((r^r>>>14)>>>0)/4294967296*(o-s+1/c)+s)*c)/c}};var Sf=(i,e=Zc)=>{let t=i.length,n,r;for(;t;)r=e(0,--t),n=i[t],i[t]=i[r],i[r]=n;return i};var jc=(i,e={})=>{let t=[],n=0,r,s=null,o=e.from,a=e.reversed,c=e.ease,l=!$e(c),u=l&&!$e(c.ease)?c.ease:l?Xs(c):null,h=e.grid,p=h===!0,_=e.axis,y=e.total,g=$e(o)||o===0||o==="first",m=o==="center",w=o==="last",R=o==="random",b=Dn(o),E=Dn(i),S=e.use,A=E?Ko(i[0]):Ko(i),x=E?Ko(i[1]):0,T=jo.exec((E?i[1]:i)+In),D=e.start||0+(E?A:0),P=e.seed,Z=!$e(P)&&P!==!1?Mf(P===!0?0:P):Zc,ee=e.jitter,O=!$e(ee),X=Dn(ee),k=X?ee[0]:ee||0,$=X?ee[1]:ee||0,B=g?0:Ln(o)?o:0;return(se,le,pe,tt,pt)=>{let[We]=oa(se),H=$e(y)?pe.length:y,ae=$e(S)?!1:On(S)?S(We,le,H):Zi(We,S),re=Ln(ae)||Nn(ae)&&Ln(+ae)?+ae:le,me=re>=0&&re<H?re:le;if(m&&(B=(H-1)/2),w&&(B=H-1),!t.length){if(p){let Ce=!0,Te=!1,qe=1/0,ke=1/0,we=1/0,Ze=-1/0,st=-1/0,ot=-1/0,_t=[],je=[],nt=[];for(let C=0;C<H;C++){let it=pe[C],Re=0,M=0,f=0,L=!1;if(it&&On(it.getBoundingClientRect)){let F=it.getBoundingClientRect();Re=F.left+F.width/2,M=F.top+F.height/2,L=!0}else{let F=it;F&&Ln(F.x)&&Ln(F.y)&&(Re=F.x,M=F.y,Ln(F.z)&&(f=F.z,Te=!0),L=!0)}if(!L){Ce=!1;break}_t.push(Re),je.push(M),nt.push(f),Re<qe&&(qe=Re),M<ke&&(ke=M),f<we&&(we=f),Re>Ze&&(Ze=Re),M>st&&(st=M),f>ot&&(ot=f)}if(Ce){let C=_t[0],it=je[0],Re=nt[0];b?(C=qe+o[0]*(Ze-qe),it=ke+o[1]*(st-ke),Re=Te?we+(o.length>=3?o[2]:.5)*(ot-we):0):m?(C=(qe+Ze)/2,it=(ke+st)/2,Re=(we+ot)/2):w?(C=_t[H-1],it=je[H-1],Re=nt[H-1]):Ln(o)&&(C=_t[o],it=je[o],Re=nt[o]);for(let f=0;f<H;f++){let L=C-_t[f],F=it-je[f],q=Re-nt[f],oe=Us(L*L+F*F+(Te?q*q:0));_==="x"&&(oe=-L),_==="y"&&(oe=-F),_==="z"&&(oe=-q),t.push(oe)}let M=1/0;for(let f=0;f<H;f++){let L=Bs(t[f]);L>0&&L<M&&(M=L)}if(M>0&&M<1/0)for(let f=0;f<H;f++)t[f]=t[f]/M}else for(let C=0;C<H;C++)t.push(Bs(B-C))}else for(let Ce=0;Ce<H;Ce++)if(!h)t.push(Bs(B-Ce));else{let Te=h.length,qe=h[0]*h[1],ke,we,Ze;b?(ke=o[0]*(h[0]-1),we=o[1]*(h[1]-1),Ze=Te===3?(o.length>=3?o[2]:.5)*(h[2]-1):0):m?(ke=(h[0]-1)/2,we=(h[1]-1)/2,Ze=Te===3?(h[2]-1)/2:0):(ke=B%h[0],we=vr(B/h[0])%h[1],Ze=Te===3?vr(B/qe):0);let st=Ce%h[0],ot=vr(Ce/h[0])%h[1],_t=Te===3?vr(Ce/qe):0,je=ke-st,nt=we-ot,C=Ze-_t,it=Us(je*je+nt*nt+(Te===3?C*C:0));_==="x"&&(it=-je),_==="y"&&(it=-nt),_==="z"&&(it=-C),t.push(it)}n=t[0];for(let Ce=1;Ce<H;Ce++)t[Ce]>n&&(n=t[Ce]);if(u||a)for(let Ce=0;Ce<H;Ce++){let Te=t[Ce];u&&(Te=u(Te/n)*n),a&&(Te=_?-Te:Bs(n-Te)),t[Ce]=Te}if(O){s=new Array(H);for(let Ce=0;Ce<H;Ce++)s[Ce]=Z(-1,1,4)}R&&(t=Sf(t,Z))}let Ie=E?(x-A)/n:A;$e(r)&&(r=pt?bf(pt,$e(e.start)?pt.iterationDuration:D):D);let Me=r+(Ie*gt(t[me],2)||0);if(O){let Ce=n?t[me]/n:0,Te=k+($-k)*Ce;Me=Me+s[me]*Te}return e.modifier&&(Me=e.modifier(Me)),T&&(Me=`${Me}${T[2]}`),Me}};var Zf=0,Lh=1,jf=2;var go=1,$f=2,Ms=3,Ni=0,Jt=1,gi=2,_i=0,Cr=1,Nh=2,Oh=3,Fh=4,Jf=5;var rr=100,Kf=101,Qf=102,ep=103,tp=104,np=200,ip=201,rp=202,sp=203,Fa=204,Ua=205,op=206,ap=207,lp=208,cp=209,hp=210,dp=211,up=212,fp=213,pp=214,Ba=0,ka=1,za=2,Rr=3,Va=4,Ga=5,Ha=6,Wa=7,Uh=0,mp=1,gp=2,Zn=0,Bh=1,kh=2,zh=3,Vh=4,Gh=5,Hh=6,Wh=7;var yh=300,cr=301,Lr=302,fl=303,pl=304,_o=306,Xa=1e3,di=1001,qa=1002,Ot=1003,_p=1004;var xo=1005;var $t=1006,ml=1007;var hr=1008;var gn=1009,Xh=1010,qh=1011,Ss=1012,gl=1013,jn=1014,$n=1015,xi=1016,_l=1017,xl=1018,Ts=1020,Yh=35902,Zh=35899,jh=1021,$h=1022,Bn=1023,fi=1026,dr=1027,Jh=1028,vl=1029,ur=1030,yl=1031;var bl=1033,vo=33776,yo=33777,bo=33778,Mo=33779,Ml=35840,Sl=35841,Tl=35842,El=35843,Al=36196,wl=37492,Cl=37496,Rl=37488,Pl=37489,So=37490,Il=37491,Dl=37808,Ll=37809,Nl=37810,Ol=37811,Fl=37812,Ul=37813,Bl=37814,kl=37815,zl=37816,Vl=37817,Gl=37818,Hl=37819,Wl=37820,Xl=37821,ql=36492,Yl=36494,Zl=36495,jl=36283,$l=36284,To=36285,Jl=36286;var Js=2300,Ya=2301,Oa=2302,bh=2303,Mh=2400,Sh=2401,Th=2402;var xp=3200;var Kl=0,vp=1,Bi="",Sn="srgb",Ks="srgb-linear",Qs="linear",vt="srgb";var Ar=7680;var Eh=519,yp=512,bp=513,Mp=514,Ql=515,Sp=516,Tp=517,ec=518,Ep=519,Ah=35044;var Kh="300 es",qn=2e3,ds=2001;function lg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ap(){let i=eo("canvas");return i.style.display="block",i}var Tf={},us=null;function Qh(...i){let e="THREE."+i.shift();us?us("log",e,...i):console.log(e,...i)}function wp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=wp(i);let e="THREE."+i.shift();if(us)us("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=wp(i);let e="THREE."+i.shift();if(us)us("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function wr(...i){let e=i.join(" ");e in Tf||(Tf[e]=!0,Ge(...i))}function Cp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Rp={[Ba]:ka,[za]:Ha,[Va]:Wa,[Rr]:Ga,[ka]:Ba,[Ha]:za,[Wa]:Va,[Ga]:Rr},pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $c=Math.PI/180,Za=180/Math.PI;function Eo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function hg(i,e){return(i%e+e)%e}function Jc(i,e,t){return(1-t)*i+t*e}function qs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var dt=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],d=n[r+2],u=n[r+3],h=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(u!==y||c!==h||l!==p||d!==_){let g=c*h+l*p+d*_+u*y;g<0&&(h=-h,p=-p,_=-_,y=-y,g=-g);let m=1-a;if(g<.9995){let w=Math.acos(g),R=Math.sin(w);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R,c=c*m+h*a,l=l*m+p*a,d=d*m+_*a,u=u*m+y*a}else{c=c*m+h*a,l=l*m+p*a,d=d*m+_*a,u=u*m+y*a;let w=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=w,l*=w,d*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],d=n[r+3],u=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+d*u+c*p-l*h,e[t+1]=c*_+d*h+l*u-a*p,e[t+2]=l*_+d*p+a*h-c*u,e[t+3]=d*_-a*u-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(r/2),u=a(s/2),h=c(n/2),p=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=h*d*u+l*p*_,this._y=l*p*u-h*d*_,this._z=l*d*_+h*p*u,this._w=l*d*u-h*p*_;break;case"YXZ":this._x=h*d*u+l*p*_,this._y=l*p*u-h*d*_,this._z=l*d*_-h*p*u,this._w=l*d*u+h*p*_;break;case"ZXY":this._x=h*d*u-l*p*_,this._y=l*p*u+h*d*_,this._z=l*d*_+h*p*u,this._w=l*d*u-h*p*_;break;case"ZYX":this._x=h*d*u-l*p*_,this._y=l*p*u+h*d*_,this._z=l*d*_-h*p*u,this._w=l*d*u+h*p*_;break;case"YZX":this._x=h*d*u+l*p*_,this._y=l*p*u+h*d*_,this._z=l*d*_-h*p*u,this._w=l*d*u-h*p*_;break;case"XZY":this._x=h*d*u-l*p*_,this._y=l*p*u-h*d*_,this._z=l*d*_+h*p*u,this._w=l*d*u+h*p*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(d-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+d)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-r*a,this._w=o*d-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ef.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ef.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),d=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*d,this.y=n+c*d+a*l-s*u,this.z=r+c*u+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kc=new V,Ef=new mi,Ye=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],u=n[7],h=n[2],p=n[5],_=n[8],y=r[0],g=r[3],m=r[6],w=r[1],R=r[4],b=r[7],E=r[2],S=r[5],A=r[8];return s[0]=o*y+a*w+c*E,s[3]=o*g+a*R+c*S,s[6]=o*m+a*b+c*A,s[1]=l*y+d*w+u*E,s[4]=l*g+d*R+u*S,s[7]=l*m+d*b+u*A,s[2]=h*y+p*w+_*E,s[5]=h*g+p*R+_*S,s[8]=h*m+p*b+_*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*s*d+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=d*o-a*l,h=a*c-d*s,p=l*s-o*c,_=t*u+n*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=u*y,e[1]=(r*l-d*n)*y,e[2]=(a*n-r*o)*y,e[3]=h*y,e[4]=(d*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qc.makeScale(e,t)),this}rotate(e){return wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qc.makeRotation(-e)),this}translate(e,t){return wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qc=new Ye,Af=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wf=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dg(){let i={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(r.r=hs(r.r),r.g=hs(r.g),r.b=hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bi?Qs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ks]:{primaries:e,whitePoint:n,transfer:Qs,toXYZ:Af,fromXYZ:wf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Af,fromXYZ:wf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}var ut=dg();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Kr,ja=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=eo("canvas")),Kr.width=e.width,Kr.height=e.height;let r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Kr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=eo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ug=0,fs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(eh(r[o].image)):s.push(eh(r[o]))}else s=eh(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function eh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var fg=0,th=new V,vi=(()=>{class i extends pi{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=di,s=di,o=$t,a=hr,c=Bn,l=gn,d=i.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Eo(),this.name="",this.source=new fs(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(th).x}get height(){return this.source.getSize(th).y}get depth(){return this.source.getSize(th).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){Ge(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ge(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xa:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xa:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=yh,i.DEFAULT_ANISOTROPY=1,i})(),Pt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],d=c[4],u=c[8],h=c[1],p=c[5],_=c[9],y=c[2],g=c[6],m=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+y)<.1&&Math.abs(_+g)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,b=(p+1)/2,E=(m+1)/2,S=(d+h)/4,A=(u+y)/4,x=(_+g)/4;return R>b&&R>E?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=S/n,s=A/n):b>E?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=S/r,s=x/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=A/s,r=x/s),this.set(n,r,s,t),this}let w=Math.sqrt((g-_)*(g-_)+(u-y)*(u-y)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(g-_)/w,this.y=(u-y)/w,this.z=(h-d)/w,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$a=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new vi(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new fs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends $a{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},to=class extends vi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends vi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ct=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,r,s,o,a,c,l,d,u,h,p,_,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,d,u,h,p,_,y,g)}set(e,t,n,r,s,o,a,c,l,d,u,h,p,_,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=d,m[10]=u,m[14]=h,m[3]=p,m[7]=_,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let h=o*d,p=o*u,_=a*d,y=a*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=p+_*l,t[5]=h-y*l,t[9]=-a*c,t[2]=y-h*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*d,p=c*u,_=l*d,y=l*u;t[0]=h+y*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=p*a-_,t[6]=y+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*d,p=c*u,_=l*d,y=l*u;t[0]=h-y*a,t[4]=-o*u,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*d,t[9]=y-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*d,p=o*u,_=a*d,y=a*u;t[0]=c*d,t[4]=_*l-p,t[8]=h*l+y,t[1]=c*u,t[5]=y*l+h,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,p=o*l,_=a*c,y=a*l;t[0]=c*d,t[4]=y-h*u,t[8]=_*u+p,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=p*u+_,t[10]=h-y*u}else if(e.order==="XZY"){let h=o*c,p=o*l,_=a*c,y=a*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=h*u+y,t[5]=o*d,t[9]=p*u-_,t[2]=_*u-p,t[6]=a*d,t[10]=y*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pg,e,mg)}lookAt(e,t,n){let r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ji.crossVectors(n,bn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ji.crossVectors(n,bn)),Ji.normalize(),fa.crossVectors(bn,Ji),r[0]=Ji.x,r[4]=fa.x,r[8]=bn.x,r[1]=Ji.y,r[5]=fa.y,r[9]=bn.y,r[2]=Ji.z,r[6]=fa.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],u=n[5],h=n[9],p=n[13],_=n[2],y=n[6],g=n[10],m=n[14],w=n[3],R=n[7],b=n[11],E=n[15],S=r[0],A=r[4],x=r[8],T=r[12],D=r[1],P=r[5],U=r[9],Z=r[13],ee=r[2],O=r[6],X=r[10],k=r[14],$=r[3],B=r[7],se=r[11],le=r[15];return s[0]=o*S+a*D+c*ee+l*$,s[4]=o*A+a*P+c*O+l*B,s[8]=o*x+a*U+c*X+l*se,s[12]=o*T+a*Z+c*k+l*le,s[1]=d*S+u*D+h*ee+p*$,s[5]=d*A+u*P+h*O+p*B,s[9]=d*x+u*U+h*X+p*se,s[13]=d*T+u*Z+h*k+p*le,s[2]=_*S+y*D+g*ee+m*$,s[6]=_*A+y*P+g*O+m*B,s[10]=_*x+y*U+g*X+m*se,s[14]=_*T+y*Z+g*k+m*le,s[3]=w*S+R*D+b*ee+E*$,s[7]=w*A+R*P+b*O+E*B,s[11]=w*x+R*U+b*X+E*se,s[15]=w*T+R*Z+b*k+E*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],u=e[6],h=e[10],p=e[14],_=e[3],y=e[7],g=e[11],m=e[15],w=c*p-l*h,R=a*p-l*u,b=a*h-c*u,E=o*p-l*d,S=o*h-c*d,A=o*u-a*d;return t*(y*w-g*R+m*b)-n*(_*w-g*E+m*S)+r*(_*R-y*E+m*A)-s*(_*b-y*S+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-n*(s*d-a*c)+r*(s*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=e[9],h=e[10],p=e[11],_=e[12],y=e[13],g=e[14],m=e[15],w=t*a-n*o,R=t*c-r*o,b=t*l-s*o,E=n*c-r*a,S=n*l-s*a,A=r*l-s*c,x=d*y-u*_,T=d*g-h*_,D=d*m-p*_,P=u*g-h*y,U=u*m-p*y,Z=h*m-p*g,ee=w*Z-R*U+b*P+E*D-S*T+A*x;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/ee;return e[0]=(a*Z-c*U+l*P)*O,e[1]=(r*U-n*Z-s*P)*O,e[2]=(y*A-g*S+m*E)*O,e[3]=(h*S-u*A-p*E)*O,e[4]=(c*D-o*Z-l*T)*O,e[5]=(t*Z-r*D+s*T)*O,e[6]=(g*b-_*A-m*R)*O,e[7]=(d*A-h*b+p*R)*O,e[8]=(o*U-a*D+l*x)*O,e[9]=(n*D-t*U-s*x)*O,e[10]=(_*S-y*b+m*w)*O,e[11]=(u*b-d*S-p*w)*O,e[12]=(a*T-o*P-c*x)*O,e[13]=(t*P-n*T+r*x)*O,e[14]=(y*R-_*E-g*w)*O,e[15]=(d*E-u*R+h*w)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+n,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,u=a+a,h=s*l,p=s*d,_=s*u,y=o*d,g=o*u,m=a*u,w=c*l,R=c*d,b=c*u,E=n.x,S=n.y,A=n.z;return r[0]=(1-(y+m))*E,r[1]=(p+b)*E,r[2]=(_-R)*E,r[3]=0,r[4]=(p-b)*S,r[5]=(1-(h+m))*S,r[6]=(g+w)*S,r[7]=0,r[8]=(_+R)*A,r[9]=(g-w)*A,r[10]=(1-(h+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Qr.set(r[0],r[1],r[2]).length(),a=Qr.set(r[4],r[5],r[6]).length(),c=Qr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Hn.copy(this);let l=1/o,d=1/a,u=1/c;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=d,Hn.elements[5]*=d,Hn.elements[6]*=d,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,r,s,o,a=qn,c=!1){let l=this.elements,d=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r),_,y;if(c)_=s/(o-s),y=o*s/(o-s);else if(a===qn)_=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===ds)_=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=qn,c=!1){let l=this.elements,d=2/(t-e),u=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r),_,y;if(c)_=1/(o-s),y=o/(o-s);else if(a===qn)_=-2/(o-s),y=-(o+s)/(o-s);else if(a===ds)_=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qr=new V,Hn=new Ct,pg=new V(0,0,0),mg=new V(1,1,1),Ji=new V,fa=new V,bn=new V,Cf=new Ct,Rf=new mi,no=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],d=s[5],u=s[9],h=s[2],p=s[6],_=s[10];switch(n){case"XYZ":this._y=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(ft(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,_),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,_),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Cf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cf,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Rf.setFromEuler(this),this.setFromQuaternion(Rf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),ps=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gg=0,Pf=new V,es=new mi,Ci=new Ct,pa=new V,Ys=new V,_g=new V,xg=new mi,If=new V(1,0,0),Df=new V(0,1,0),Lf=new V(0,0,1),Nf={type:"added"},vg={type:"removed"},ts={type:"childadded",child:null},nh={type:"childremoved",child:null},Yn=(()=>{class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,n=new no,r=new mi,s=new V(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ye}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return es.setFromAxisAngle(t,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,n){return es.setFromAxisAngle(t,n),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(If,t)}rotateY(t){return this.rotateOnAxis(Df,t)}rotateZ(t){return this.rotateOnAxis(Lf,t)}translateOnAxis(t,n){return Pf.copy(t).applyQuaternion(this.quaternion),this.position.add(Pf.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(If,t)}translateY(t){return this.translateOnAxis(Df,t)}translateZ(t){return this.translateOnAxis(Lf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?pa.copy(t):pa.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Ys,pa,this.up):Ci.lookAt(pa,Ys,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Ci),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nf),ts.child=t,this.dispatchEvent(ts),ts.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(vg),nh.child=t,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nf),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,_g),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,xg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,r=t.y,s=t.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*r-o[8]*s,o[13]+=r-o[1]*n-o[5]*r-o[9]*s,o[14]+=s-o[2]*n-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n,r=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){let o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0,r)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>Do(Qt({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>Qt({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let d=0,u=l.length;d<u;d++){let h=l[d];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,d=this.material.length;l<d;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(n){let c=a(t.geometries),l=a(t.materials),d=a(t.textures),u=a(t.images),h=a(t.shapes),p=a(t.skeletons),_=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),d.length>0&&(r.textures=d),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),p.length>0&&(r.skeletons=p),_.length>0&&(r.animations=_),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let d in c){let u=c[d];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new V(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),ui=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},yg={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(l,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&h>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},ma={h:0,s:0,l:0};function ih(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ct=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=hg(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ih(o,s,e+1/3),this.g=ih(o,s,e),this.b=ih(o,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=Sn){function n(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){let n=Pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return ut.workingToColorSpace(rn.copy(this),e),Math.round(ft(rn.r*255,0,255))*65536+Math.round(ft(rn.g*255,0,255))*256+Math.round(ft(rn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(rn.copy(this),t);let n=rn.r,r=rn.g,s=rn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=d<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Sn){ut.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,r=rn.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(ma);let n=Jc(Ki.h,ma.h,t),r=Jc(Ki.s,ma.s,t),s=Jc(Ki.l,ma.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new ct;ct.NAMES=Pp;var Pr=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new no,this.environmentIntensity=1,this.environmentRotation=new no,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wn=new V,Ri=new V,rh=new V,Pi=new V,ns=new V,is=new V,Of=new V,sh=new V,oh=new V,ah=new V,lh=new Pt,ch=new Pt,hh=new Pt,ir=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wn.subVectors(e,t),r.cross(Wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Wn.subVectors(r,t),Ri.subVectors(n,t),rh.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(Ri),c=Wn.dot(rh),l=Ri.dot(Ri),d=Ri.dot(rh),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,p=(l*c-a*d)*h,_=(o*d-a*c)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Pi.x),c.addScaledVector(o,Pi.y),c.addScaledVector(a,Pi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(e,t),ch.fromBufferAttribute(e,n),hh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(lh,s.x),o.addScaledVector(ch,s.y),o.addScaledVector(hh,s.z),o}static isFrontFacing(e,t,n,r){return Wn.subVectors(n,t),Ri.subVectors(e,t),Wn.cross(Ri).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Wn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;ns.subVectors(r,n),is.subVectors(s,n),sh.subVectors(e,n);let c=ns.dot(sh),l=is.dot(sh);if(c<=0&&l<=0)return t.copy(n);oh.subVectors(e,r);let d=ns.dot(oh),u=is.dot(oh);if(d>=0&&u<=d)return t.copy(r);let h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(ns,o);ah.subVectors(e,s);let p=ns.dot(ah),_=is.dot(ah);if(_>=0&&p<=_)return t.copy(s);let y=p*l-c*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(is,a);let g=d*_-p*u;if(g<=0&&u-d>=0&&p-_>=0)return Of.subVectors(s,r),a=(u-d)/(u-d+(p-_)),t.copy(r).addScaledVector(Of,a);let m=1/(g+y+h);return o=y*m,a=h*m,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sr=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),_a.subVectors(this.max,Zs),rs.subVectors(e.a,Zs),ss.subVectors(e.b,Zs),os.subVectors(e.c,Zs),Qi.subVectors(ss,rs),er.subVectors(os,ss),Mr.subVectors(rs,os);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-Mr.z,Mr.y,Qi.z,0,-Qi.x,er.z,0,-er.x,Mr.z,0,-Mr.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-Mr.y,Mr.x,0];return!dh(t,rs,ss,os,_a)||(t=[1,0,0,0,1,0,0,0,1],!dh(t,rs,ss,os,_a))?!1:(xa.crossVectors(Qi,er),t=[xa.x,xa.y,xa.z],dh(t,rs,ss,os,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new V,new V,new V,new V,new V,new V,new V,new V],Xn=new V,ga=new sr,rs=new V,ss=new V,os=new V,Qi=new V,er=new V,Mr=new V,Zs=new V,_a=new V,xa=new V,Sr=new V;function dh(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Sr.fromArray(i,s);let a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),c=e.dot(Sr),l=t.dot(Sr),d=n.dot(Sr);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var kt=new V,va=new dt,bg=0,ln=class extends pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ah,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ah&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var io=class extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ro=class extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Un=class extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mg=new sr,js=new V,uh=new V,Ir=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);let t=js.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(js,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(uh)),this.expandByPoint(js.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sg=0,Fn=new Ct,fh=new Yn,as=new V,Mn=new sr,$s=new sr,Wt=new V,En=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?ro:io)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return fh.lookAt(e),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Un(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Mn.min,$s.min),Mn.expandByPoint(Wt),Wt.addVectors(Mn.max,$s.max),Mn.expandByPoint(Wt)):(Mn.expandByPoint($s.min),Mn.expandByPoint($s.max))}Mn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Wt.fromBufferAttribute(a,l),c&&(as.fromBufferAttribute(e,l),Wt.add(as)),r=Math.max(r,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new V,c[x]=new V;let l=new V,d=new V,u=new V,h=new dt,p=new dt,_=new dt,y=new V,g=new V;function m(x,T,D){l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,T),u.fromBufferAttribute(n,D),h.fromBufferAttribute(s,x),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,D),d.sub(l),u.sub(l),p.sub(h),_.sub(h);let P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(P),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(P),a[x].add(y),a[T].add(y),a[D].add(y),c[x].add(g),c[T].add(g),c[D].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let x=0,T=w.length;x<T;++x){let D=w[x],P=D.start,U=D.count;for(let Z=P,ee=P+U;Z<ee;Z+=3)m(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}let R=new V,b=new V,E=new V,S=new V;function A(x){E.fromBufferAttribute(r,x),S.copy(E);let T=a[x];R.copy(T),R.sub(E.multiplyScalar(E.dot(T))).normalize(),b.crossVectors(S,T);let P=b.dot(c[x])<0?-1:1;o.setXYZW(x,R.x,R.y,R.z,P)}for(let x=0,T=w.length;x<T;++x){let D=w[x],P=D.start,U=D.count;for(let Z=P,ee=P+U;Z<ee;Z+=3)A(e.getX(Z+0)),A(e.getX(Z+1)),A(e.getX(Z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,d=new V,u=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){let _=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(d),c.add(d),l.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,u=a.normalized,h=new l.constructor(c.length*d),p=0,_=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*d;for(let m=0;m<d;m++)h[_++]=l[p++]}return new ln(h,d,u)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let d=0,u=l.length;d<u;d++){let h=l[d],p=e(h,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){let p=l[u];d.push(p.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let d=r[l];this.setAttribute(l,d.clone(t))}let s=e.morphAttributes;for(let l in s){let d=[],u=s[l];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Tg=0,Oi=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=Cr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Ua,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==rr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new dt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Di=new V,ph=new V,ya=new V,tr=new V,mh=new V,ba=new V,gh=new V,gs=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ph.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(ph);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=tr.dot(this.direction),c=-tr.dot(ya),l=tr.lengthSq(),d=Math.abs(1-o*o),u,h,p,_;if(d>0)if(u=o*c-a,h=o*a-c,_=s*d,u>=0)if(h>=-_)if(h<=_){let y=1/d;u*=y,h*=y,p=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*c)+l;else h<=-_?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+h*(h+2*c)+l):h<=_?(u=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+h*(h+2*c)+l);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ph).addScaledVector(ya,h),p}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let n=Di.dot(this.direction),r=Di.dot(Di)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,r,s){mh.subVectors(t,e),ba.subVectors(n,e),gh.crossVectors(mh,ba);let o=this.direction.dot(gh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,e);let c=a*this.direction.dot(ba.crossVectors(tr,ba));if(c<0)return null;let l=a*this.direction.dot(mh.cross(tr));if(l<0||c+l>o)return null;let d=-a*tr.dot(gh);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dr=class extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new no,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ff=new Ct,Tr=new gs,Ma=new Ir,Uf=new V,Sa=new V,Ta=new V,Ea=new V,_h=new V,Aa=new V,Bf=new V,wa=new V,cn=class extends Yn{constructor(e=new En,t=new Dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Aa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let d=a[c],u=s[c];d!==0&&(_h.fromBufferAttribute(u,e),o?Aa.addScaledVector(_h,d):Aa.addScaledVector(_h.sub(t),d))}t.add(Aa)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(Ma.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Ma,Uf)===null||Tr.origin.distanceToSquared(Uf)>(e.far-e.near)**2))&&(Ff.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(Ff),!(n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){let g=h[_],m=o[g.materialIndex],w=Math.max(g.start,p.start),R=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let b=w,E=R;b<E;b+=3){let S=a.getX(b),A=a.getX(b+1),x=a.getX(b+2);r=Ca(this,m,e,n,l,d,u,S,A,x),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=_,m=y;g<m;g+=3){let w=a.getX(g),R=a.getX(g+1),b=a.getX(g+2);r=Ca(this,o,e,n,l,d,u,w,R,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){let g=h[_],m=o[g.materialIndex],w=Math.max(g.start,p.start),R=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let b=w,E=R;b<E;b+=3){let S=b,A=b+1,x=b+2;r=Ca(this,m,e,n,l,d,u,S,A,x),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=_,m=y;g<m;g+=3){let w=g,R=g+1,b=g+2;r=Ca(this,o,e,n,l,d,u,w,R,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function Eg(i,e,t,n,r,s,o,a){let c;if(e.side===Jt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Ni,a),c===null)return null;wa.copy(a),wa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(wa);return l<t.near||l>t.far?null:{distance:l,point:wa.clone(),object:i}}function Ca(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Sa),i.getVertexPosition(c,Ta),i.getVertexPosition(l,Ea);let d=Eg(i,e,t,n,Sa,Ta,Ea,Bf);if(d){let u=new V;ir.getBarycoord(Bf,Sa,Ta,Ea,u),r&&(d.uv=ir.getInterpolatedAttribute(r,a,c,l,u,new dt)),s&&(d.uv1=ir.getInterpolatedAttribute(s,a,c,l,u,new dt)),o&&(d.normal=ir.getInterpolatedAttribute(o,a,c,l,u,new V),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new V,materialIndex:0};ir.getNormal(Sa,Ta,Ea,h.normal),d.face=h,d.barycoord=u}return d}var Ka=class extends vi{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Ot,d=Ot,u,h){super(null,o,a,c,l,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xh=new V,Ag=new V,wg=new Ye,hi=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=xh.subVectors(n,t).cross(Ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(xh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wg.getNormalMatrix(e),r=this.coplanarPoint(xh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Er=new Ir,Cg=new dt(.5,.5),Ra=new V,_s=class{constructor(e=new hi,t=new hi,n=new hi,r=new hi,s=new hi,o=new hi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],d=s[4],u=s[5],h=s[6],p=s[7],_=s[8],y=s[9],g=s[10],m=s[11],w=s[12],R=s[13],b=s[14],E=s[15];if(r[0].setComponents(l-o,p-d,m-_,E-w).normalize(),r[1].setComponents(l+o,p+d,m+_,E+w).normalize(),r[2].setComponents(l+a,p+u,m+y,E+R).normalize(),r[3].setComponents(l-a,p-u,m-y,E-R).normalize(),n)r[4].setComponents(c,h,g,b).normalize(),r[5].setComponents(l-c,p-h,m-g,E-b).normalize();else if(r[4].setComponents(l-c,p-h,m-g,E-b).normalize(),t===qn)r[5].setComponents(l+c,p+h,m+g,E+b).normalize();else if(t===ds)r[5].setComponents(c,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);let t=Cg.distanceTo(e.center);return Er.radius=.7071067811865476+t,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ra.x=r.normal.x>0?e.max.x:e.min.x,Ra.y=r.normal.y>0?e.max.y:e.min.y,Ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xs=class extends Oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kf=new Ct,wh=new gs,Pa=new Ir,Ia=new V,so=class extends Yn{constructor(e=new En,t=new xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),Pa.radius+=s,e.ray.intersectsSphere(Pa)===!1)return;kf.copy(r).invert(),wh.copy(e.ray).applyMatrix4(kf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=h,y=p;_<y;_++){let g=l.getX(_);Ia.fromBufferAttribute(u,g),zf(Ia,g,c,r,e,t,this)}}else{let h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,y=p;_<y;_++)Ia.fromBufferAttribute(u,_),zf(Ia,_,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function zf(i,e,t,n,r,s,o){let a=wh.distanceSqToPoint(i);if(a<t){let c=new V;wh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var oo=class extends vi{constructor(e=[],t=cr,n,r,s,o,a,c,l,d){super(e,t,n,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vs=class extends vi{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends vi{constructor(e,t,n=jn,r,s,o,a=Ot,c=Ot,l,d=fi,u=1){if(d!==fi&&d!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,r,s,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qa=class extends Fi{constructor(e,t=jn,n=cr,r,s,o=Ot,a=Ot,c,l=fi){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ao=class extends vi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ui=class i extends En{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],d=[],u=[],h=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Un(l,3)),this.setAttribute("normal",new Un(d,3)),this.setAttribute("uv",new Un(u,2));function _(y,g,m,w,R,b,E,S,A,x,T){let D=b/A,P=E/x,U=b/2,Z=E/2,ee=S/2,O=A+1,X=x+1,k=0,$=0,B=new V;for(let se=0;se<X;se++){let le=se*P-Z;for(let pe=0;pe<O;pe++){let tt=pe*D-U;B[y]=tt*w,B[g]=le*R,B[m]=ee,l.push(B.x,B.y,B.z),B[y]=0,B[g]=0,B[m]=S>0?1:-1,d.push(B.x,B.y,B.z),u.push(pe/A),u.push(1-se/x),k+=1}}for(let se=0;se<x;se++)for(let le=0;le<A;le++){let pe=h+le+O*se,tt=h+le+O*(se+1),pt=h+(le+1)+O*(se+1),We=h+(le+1)+O*se;c.push(pe,tt,We),c.push(tt,pt,We),$+=6}a.addGroup(p,$,T),p+=$,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var lo=class i extends En{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,d=c+1,u=e/a,h=t/c,p=[],_=[],y=[],g=[];for(let m=0;m<d;m++){let w=m*h-o;for(let R=0;R<l;R++){let b=R*u-s;_.push(b,-w,0),y.push(0,0,1),g.push(R/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){let R=w+l*m,b=w+l*(m+1),E=w+1+l*(m+1),S=w+1+l*m;p.push(R,b,S),p.push(b,E,S)}this.setIndex(p),this.setAttribute("position",new Un(_,3)),this.setAttribute("normal",new Un(y,3)),this.setAttribute("uv",new Un(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Nr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Vf(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Vf(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=Nr(i[t]);for(let r in n)e[r]=n[r]}return e}function Vf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ed(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Ip={clone:Nr,merge:sn},Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pg,this.fragmentShader=Ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=Rg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ct().setHex(r.value);break;case"v2":this.uniforms[n].value=new dt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new V().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ct().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},el=class extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var co=class extends Oi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var tl=class extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nl=class extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Da(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var or=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},il=class extends or{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sh:s=e,a=2*t-n;break;case Th:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sh:o=e,c=2*n-t;break;case Th:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(n-t)/(r-t),y=_*_,g=y*_,m=-h*g+2*h*y-h*_,w=(1+h)*g+(-1.5-2*h)*y+(-.5+h)*_+1,R=(-1-p)*g+(1.5+p)*y+.5*_,b=p*g-p*y;for(let E=0;E!==a;++E)s[E]=m*o[d+E]+w*o[l+E]+R*o[c+E]+b*o[u+E];return s}},rl=class extends or{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(r-t),u=1-d;for(let h=0;h!==a;++h)s[h]=o[l+h]*u+o[c+h]*d;return s}},sl=class extends or{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ol=class extends or{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.inTangents,u=this.outTangents;if(!d||!u){let _=(n-t)/(r-t),y=1-_;for(let g=0;g!==a;++g)s[g]=o[l+g]*y+o[c+g]*_;return s}let h=a*2,p=e-1;for(let _=0;_!==a;++_){let y=o[l+_],g=o[c+_],m=p*h+_*2,w=u[m],R=u[m+1],b=e*h+_*2,E=d[b],S=d[b+1],A=(n-t)/(r-t),x,T,D,P,U;for(let Z=0;Z<8;Z++){x=A*A,T=x*A,D=1-A,P=D*D,U=P*D;let O=U*t+3*P*A*w+3*D*x*E+T*r-n;if(Math.abs(O)<1e-10)break;let X=3*P*(w-t)+6*D*A*(E-w)+3*x*(r-E);if(Math.abs(X)<1e-10)break;A=A-O/X,A=Math.max(0,Math.min(1,A))}s[_]=U*y+3*P*A*R+3*D*x*S+T*g}return s}},wn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Da(t,this.TimeBufferType),this.values=Da(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Da(e.times,Array),values:Da(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ol(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case Ya:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break;case bh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Oa;case this.InterpolantFactoryMethodBezier:return bh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ve("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ve("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&cg(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Oa,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*n,h=u-n,p=u+n;for(let _=0;_!==n;++_){let y=t[u+_];if(y!==t[h+_]||y!==t[p+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Ya;var ar=class extends wn{constructor(e,t,n){super(e,t,n)}};ar.prototype.ValueTypeName="bool";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Js;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};al.prototype.ValueTypeName="color";var ll=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};ll.prototype.ValueTypeName="number";var cl=class extends or{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let d=l+a;l!==d;l+=4)mi.slerpFlat(s,0,o,l-a,o,l,c);return s}},ho=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};ho.prototype.ValueTypeName="quaternion";ho.prototype.InterpolantFactoryMethodSmooth=void 0;var lr=class extends wn{constructor(e,t,n){super(e,t,n)}};lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Js;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};hl.prototype.ValueTypeName="vector";var uo=class extends Yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var vh=new Ct,Gf=new V,Hf=new V,Ch=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gf),Hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hf),t.updateMatrixWorld(),vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ds||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},La=new V,Na=new mi,ci=new V,fo=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(La,Na,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(La,Na,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},nr=new V,Wf=new dt,Xf=new dt,Xt=class extends fo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Za*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,t){return this.getViewBounds(e,Wf,Xf),t.subVectors(Xf,Wf)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($c*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ys=class extends fo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rh=class extends Ch{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bs=class extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new Rh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},po=class extends uo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ls=-90,cs=1,dl=class extends Yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xt(ls,cs,e,t);r.layers=this.layers,this.add(r);let s=new Xt(ls,cs,e,t);s.layers=this.layers,this.add(s);let o=new Xt(ls,cs,e,t);o.layers=this.layers,this.add(o);let a=new Xt(ls,cs,e,t);a.layers=this.layers,this.add(a);let c=new Xt(ls,cs,e,t);c.layers=this.layers,this.add(c);let l=new Xt(ls,cs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ul=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var td="\\[\\]\\.:\\/",Dg=new RegExp("["+td+"]","g"),nd="[^"+td+"]",Lg="[^"+td.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",nd),Og=/(WCOD+)?/.source.replace("WCOD",Lg),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nd),Ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nd),Bg=new RegExp("^"+Ng+Og+Fg+Ug+"$"),kg=["material","materials","bones","map"],Ph=class{constructor(e,t,n){let r=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dg,"")}static parseTrackName(t){let n=Bg.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);kg.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===n||c.uuid===n)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let d=n.objectIndex;switch(r){case"materials":if(!t.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===d){d=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(d!==void 0){if(t[d]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let a=t[s];if(a===void 0){let d=n.nodeName;Ve("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=Ph,i})();Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g1=new Float32Array(1);var qf=new Ct,mo=class{constructor(e,t,n=0,r=1/0){this.ray=new gs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qf),this}intersectObject(e,t=!0,n=[]){return Ih(e,this,n,t),n.sort(Yf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ih(e[r],this,n,t);return n.sort(Yf),n}};function Yf(i,e){return i.distance-e.distance}function Ih(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Ih(s[o],e,t,!0)}}var Dh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};function id(i,e,t,n){let r=zg(n);switch(t){case jh:return i*e;case Jh:return i*e/r.components*r.byteLength;case vl:return i*e/r.components*r.byteLength;case ur:return i*e*2/r.components*r.byteLength;case yl:return i*e*2/r.components*r.byteLength;case $h:return i*e*3/r.components*r.byteLength;case Bn:return i*e*4/r.components*r.byteLength;case bl:return i*e*4/r.components*r.byteLength;case vo:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sl:case El:return Math.max(i,16)*Math.max(e,8)/4;case Ml:case Tl:return Math.max(i,8)*Math.max(e,8)/2;case Al:case wl:case Rl:case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cl:case So:case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ql:case Yl:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jl:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*8;case To:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zg(i){switch(i){case gn:case Xh:return{byteLength:1,components:1};case Ss:case qh:case xi:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case jn:case gl:case $n:return{byteLength:4,components:1};case Yh:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function em(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Gg(i){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,u=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let d=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,d);else{u.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<u.length;p++){let _=u[h],y=u[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,u[h]=y)}u.length=h+1;for(let p=0,_=u.length;p<_;p++){let y=u[p];i.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wg=`#ifdef USE_ALPHAHASH
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
#endif`,Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jg=`#ifdef USE_AOMAP
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
#endif`,$g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg=`#ifdef USE_BATCHING
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
#endif`,Kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n_=`#ifdef USE_IRIDESCENCE
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
#endif`,i_=`#ifdef USE_BUMPMAP
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,d_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,u_=`#define PI 3.141592653589793
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
} // validated`,f_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p_=`vec3 transformedNormal = objectNormal;
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
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,__=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v_="gl_FragColor = linearToOutputTexel( gl_FragColor );",y_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
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
}`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,O_=`#ifdef USE_ENVMAP
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
#endif`,F_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z_=`PhysicalMaterial material;
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
#endif`,V_=`uniform sampler2D dfgLUT;
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
}`,G_=`
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
#endif`,H_=`#if defined( RE_IndirectDiffuse )
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
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q_=`#if defined( USE_POINTS_UV )
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
#endif`,e0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,o0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`#include <common>
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
}`,$0=`#if DEPTH_PACKING == 3200
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
}`,J0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`uniform float scale;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,rx=`uniform vec3 diffuse;
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
}`,sx=`#define LAMBERT
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
}`,ox=`#define LAMBERT
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
}`,ax=`#define MATCAP
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
}`,lx=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,hx=`#define NORMAL
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
}`,dx=`#define PHONG
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
}`,ux=`#define PHONG
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
}`,fx=`#define STANDARD
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
}`,px=`#define STANDARD
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
}`,mx=`#define TOON
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
}`,gx=`#define TOON
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
}`,_x=`uniform float size;
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
}`,xx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,yx=`uniform vec3 color;
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
}`,bx=`uniform float rotation;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Hg,alphahash_pars_fragment:Wg,alphamap_fragment:Xg,alphamap_pars_fragment:qg,alphatest_fragment:Yg,alphatest_pars_fragment:Zg,aomap_fragment:jg,aomap_pars_fragment:$g,batching_pars_vertex:Jg,batching_vertex:Kg,begin_vertex:Qg,beginnormal_vertex:e_,bsdfs:t_,iridescence_fragment:n_,bumpmap_pars_fragment:i_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:o_,clipping_planes_vertex:a_,color_fragment:l_,color_pars_fragment:c_,color_pars_vertex:h_,color_vertex:d_,common:u_,cube_uv_reflection_fragment:f_,defaultnormal_vertex:p_,displacementmap_pars_vertex:m_,displacementmap_vertex:g_,emissivemap_fragment:__,emissivemap_pars_fragment:x_,colorspace_fragment:v_,colorspace_pars_fragment:y_,envmap_fragment:b_,envmap_common_pars_fragment:M_,envmap_pars_fragment:S_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:O_,envmap_vertex:E_,fog_vertex:A_,fog_pars_vertex:w_,fog_fragment:C_,fog_pars_fragment:R_,gradientmap_pars_fragment:P_,lightmap_pars_fragment:I_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:L_,lights_pars_begin:N_,lights_toon_fragment:F_,lights_toon_pars_fragment:U_,lights_phong_fragment:B_,lights_phong_pars_fragment:k_,lights_physical_fragment:z_,lights_physical_pars_fragment:V_,lights_fragment_begin:G_,lights_fragment_maps:H_,lights_fragment_end:W_,lightprobes_pars_fragment:X_,logdepthbuf_fragment:q_,logdepthbuf_pars_fragment:Y_,logdepthbuf_pars_vertex:Z_,logdepthbuf_vertex:j_,map_fragment:$_,map_pars_fragment:J_,map_particle_fragment:K_,map_particle_pars_fragment:Q_,metalnessmap_fragment:e0,metalnessmap_pars_fragment:t0,morphinstance_vertex:n0,morphcolor_vertex:i0,morphnormal_vertex:r0,morphtarget_pars_vertex:s0,morphtarget_vertex:o0,normal_fragment_begin:a0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:h0,normal_vertex:d0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,opaque_fragment:_0,packing:x0,premultiplied_alpha_fragment:v0,project_vertex:y0,dithering_fragment:b0,dithering_pars_fragment:M0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:A0,shadowmap_vertex:w0,shadowmask_pars_fragment:C0,skinbase_vertex:R0,skinning_pars_vertex:P0,skinning_vertex:I0,skinnormal_vertex:D0,specularmap_fragment:L0,specularmap_pars_fragment:N0,tonemapping_fragment:O0,tonemapping_pars_fragment:F0,transmission_fragment:U0,transmission_pars_fragment:B0,uv_pars_fragment:k0,uv_pars_vertex:z0,uv_vertex:V0,worldpos_vertex:G0,background_vert:H0,background_frag:W0,backgroundCube_vert:X0,backgroundCube_frag:q0,cube_vert:Y0,cube_frag:Z0,depth_vert:j0,depth_frag:$0,distance_vert:J0,distance_frag:K0,equirect_vert:Q0,equirect_frag:ex,linedashed_vert:tx,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:rx,meshlambert_vert:sx,meshlambert_frag:ox,meshmatcap_vert:ax,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:hx,meshphong_vert:dx,meshphong_frag:ux,meshphysical_vert:fx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:_x,points_frag:xx,shadow_vert:vx,shadow_frag:yx,sprite_vert:bx,sprite_frag:Mx},xe={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},bi={basic:{uniforms:sn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:sn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:sn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:sn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:sn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ct(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:sn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:sn([xe.points,xe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:sn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:sn([xe.common,xe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:sn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:sn([xe.sprite,xe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:sn([xe.common,xe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:sn([xe.lights,xe.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};bi.physical={uniforms:sn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var tc={r:0,b:0,g:0},Sx=new Ct,tm=new Ye;tm.set(-1,0,0,0,1,0,0,0,1);function Tx(i,e,t,n,r,s){let o=new ct(0),a=r===!0?0:1,c,l,d=null,u=0,h=null;function p(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let b=w.backgroundBlurriness>0;R=e.get(R,b)}return R}function _(w){let R=!1,b=p(w);b===null?g(o,a):b&&b.isColor&&(g(b,1),R=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(w,R){let b=p(R);b&&(b.isCubeTexture||b.mapping===_o)?(l===void 0&&(l=new cn(new Ui(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Nr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(tm),l.material.toneMapped=ut.getTransfer(b.colorSpace)!==vt,(d!==b||u!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,u=b.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new cn(new lo(2,2),new An({name:"BackgroundMaterial",uniforms:Nr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=ut.getTransfer(b.colorSpace)!==vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,R){w.getRGB(tc,ed(i)),t.buffers.color.setClear(tc.r,tc.g,tc.b,R,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,R=1){o.set(w),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,g(o,a)},render:_,addToRenderList:y,dispose:m}}function Ex(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(P,U,Z,ee,O){let X=!1,k=u(P,ee,Z,U);s!==k&&(s=k,l(s.object)),X=p(P,ee,Z,O),X&&_(P,ee,Z,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,b(P,U,Z,ee),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function u(P,U,Z,ee){let O=ee.wireframe===!0,X=n[U.id];X===void 0&&(X={},n[U.id]=X);let k=P.isInstancedMesh===!0?P.id:0,$=X[k];$===void 0&&($={},X[k]=$);let B=$[Z.id];B===void 0&&(B={},$[Z.id]=B);let se=B[O];return se===void 0&&(se=h(c()),B[O]=se),se}function h(P){let U=[],Z=[],ee=[];for(let O=0;O<t;O++)U[O]=0,Z[O]=0,ee[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Z,attributeDivisors:ee,object:P,attributes:{},index:null}}function p(P,U,Z,ee){let O=s.attributes,X=U.attributes,k=0,$=Z.getAttributes();for(let B in $)if($[B].location>=0){let le=O[B],pe=X[B];if(pe===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),le===void 0||le.attribute!==pe||pe&&le.data!==pe.data)return!0;k++}return s.attributesNum!==k||s.index!==ee}function _(P,U,Z,ee){let O={},X=U.attributes,k=0,$=Z.getAttributes();for(let B in $)if($[B].location>=0){let le=X[B];le===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(le=P.instanceColor));let pe={};pe.attribute=le,le&&le.data&&(pe.data=le.data),O[B]=pe,k++}s.attributes=O,s.attributesNum=k,s.index=ee}function y(){let P=s.newAttributes;for(let U=0,Z=P.length;U<Z;U++)P[U]=0}function g(P){m(P,0)}function m(P,U){let Z=s.newAttributes,ee=s.enabledAttributes,O=s.attributeDivisors;Z[P]=1,ee[P]===0&&(i.enableVertexAttribArray(P),ee[P]=1),O[P]!==U&&(i.vertexAttribDivisor(P,U),O[P]=U)}function w(){let P=s.newAttributes,U=s.enabledAttributes;for(let Z=0,ee=U.length;Z<ee;Z++)U[Z]!==P[Z]&&(i.disableVertexAttribArray(Z),U[Z]=0)}function R(P,U,Z,ee,O,X,k){k===!0?i.vertexAttribIPointer(P,U,Z,O,X):i.vertexAttribPointer(P,U,Z,ee,O,X)}function b(P,U,Z,ee){y();let O=ee.attributes,X=Z.getAttributes(),k=U.defaultAttributeValues;for(let $ in X){let B=X[$];if(B.location>=0){let se=O[$];if(se===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),se!==void 0){let le=se.normalized,pe=se.itemSize,tt=e.get(se);if(tt===void 0)continue;let pt=tt.buffer,We=tt.type,H=tt.bytesPerElement,ae=We===i.INT||We===i.UNSIGNED_INT||se.gpuType===gl;if(se.isInterleavedBufferAttribute){let re=se.data,me=re.stride,Ie=se.offset;if(re.isInstancedInterleavedBuffer){for(let Me=0;Me<B.locationSize;Me++)m(B.location+Me,re.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Me=0;Me<B.locationSize;Me++)g(B.location+Me);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Me=0;Me<B.locationSize;Me++)R(B.location+Me,pe/B.locationSize,We,le,me*H,(Ie+pe/B.locationSize*Me)*H,ae)}else{if(se.isInstancedBufferAttribute){for(let re=0;re<B.locationSize;re++)m(B.location+re,se.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let re=0;re<B.locationSize;re++)g(B.location+re);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let re=0;re<B.locationSize;re++)R(B.location+re,pe/B.locationSize,We,le,pe*H,pe/B.locationSize*re*H,ae)}}else if(k!==void 0){let le=k[$];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(B.location,le);break;case 3:i.vertexAttrib3fv(B.location,le);break;case 4:i.vertexAttrib4fv(B.location,le);break;default:i.vertexAttrib1fv(B.location,le)}}}}w()}function E(){T();for(let P in n){let U=n[P];for(let Z in U){let ee=U[Z];for(let O in ee){let X=ee[O];for(let k in X)d(X[k].object),delete X[k];delete ee[O]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let U=n[P.id];for(let Z in U){let ee=U[Z];for(let O in ee){let X=ee[O];for(let k in X)d(X[k].object),delete X[k];delete ee[O]}}delete n[P.id]}function A(P){for(let U in n){let Z=n[U];for(let ee in Z){let O=Z[ee];if(O[P.id]===void 0)continue;let X=O[P.id];for(let k in X)d(X[k].object),delete X[k];delete O[P.id]}}}function x(P){for(let U in n){let Z=n[U],ee=P.isInstancedMesh===!0?P.id:0,O=Z[ee];if(O!==void 0){for(let X in O){let k=O[X];for(let $ in k)d(k[$].object),delete k[$];delete O[X]}delete Z[ee],Object.keys(Z).length===0&&delete n[U]}}}function T(){D(),o=!0,s!==r&&(s=r,l(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:g,disableUnusedAttributes:w}}function Ax(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let p=0;p<d;p++)h+=l[p];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function wx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let x=A===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==$n&&!x)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(Ge("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:b,maxSamples:E,samples:S}}function Cx(i){let e=this,t=null,n=0,r=!1,s=!1,o=new hi,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let p=u.length!==0||h||n!==0||r;return r=h,n=u.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,p){let _=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!r||_===null||_.length===0||s&&!g)s?d(null):l();else{let w=s?0:n,R=w*4,b=m.clippingState||null;c.value=b,b=d(_,h,R,p);for(let E=0;E!==R;++E)b[E]=t[E];m.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,p,_){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=c.value,_!==!0||g===null){let m=p+y*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,b=p;R!==y;++R,b+=4)o.copy(u[R]).applyMatrix4(w,a),o.normal.toArray(g,b),g[b+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var fr=4,Dp=[.125,.215,.35,.446,.526,.582],Or=20,Rx=256,Ao=new ys,Lp=new ct,rd=null,sd=0,od=0,ad=!1,Px=new V,ic=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=Px}=s;rd=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rd,sd,od),this._renderer.xr.enabled=ad,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rd=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:xi,format:Bn,colorSpace:Ks,depthBuffer:!1},r=Np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Np(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ix(s)),this._blurMaterial=Lx(s,e,t),this._ggxMaterial=Dx(s,e,t)}return r}_compileMaterial(e){let t=new cn(new En,e);this._renderer.compile(t,Ao)}_sceneToCubeUV(e,t,n,r,s){let c=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Lp),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new Ui,new Dr({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,m=!1,w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,m=!0):(g.color.copy(Lp),m=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[R],s.y,s.z)):b===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[R]));let E=this._cubeSize;Es(r,b*E,R>2?E:0,E,E),u.setRenderTarget(r),m&&u.render(y,c),u.render(e,c)}u.toneMapping=p,u.autoClear=h,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===cr||e.mapping===Lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Op());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Es(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ao)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),h=0+l*1.25,p=u*h,{_lodMax:_}=this,y=this._sizeLods[n],g=3*y*(n>_-fr?n-_+fr:0),m=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,Es(s,g,m,3*y,2*y),r.setRenderTarget(s),r.render(a,Ao),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-n,Es(e,g,m,3*y,2*y),r.setRenderTarget(e),r.render(a,Ao)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");let d=3,u=this._lodMeshes[r];u.material=l;let h=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Or-1),y=s/_,g=isFinite(s)?1+Math.floor(d*y):Or;g>Or&&Ge(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Or}`);let m=[],w=0;for(let A=0;A<Or;++A){let x=A/y,T=Math.exp(-x*x/2);m.push(T),A===0?w+=T:A<g&&(w+=2*T)}for(let A=0;A<m.length;A++)m[A]=m[A]/w;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:R}=this;h.dTheta.value=_,h.mipInt.value=R-n;let b=this._sizeLods[r],E=3*b*(r>R-fr?r-R+fr:0),S=4*(this._cubeSize-b);Es(t,E,S,3*b,2*b),c.setRenderTarget(t),c.render(u,Ao)}};function Ix(i){let e=[],t=[],n=[],r=i,s=i-fr+1+Dp.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-fr?c=Dp[o-i+fr-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,_=6,y=3,g=2,m=1,w=new Float32Array(y*_*p),R=new Float32Array(g*_*p),b=new Float32Array(m*_*p);for(let S=0;S<p;S++){let A=S%3*2/3-1,x=S>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];w.set(T,y*_*S),R.set(h,g*_*S);let D=[S,S,S,S,S,S];b.set(D,m*_*S)}let E=new En;E.setAttribute("position",new ln(w,y)),E.setAttribute("uv",new ln(R,g)),E.setAttribute("faceIndex",new ln(b,m)),n.push(new cn(E,null)),r>fr&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Np(i,e,t){let n=new Tn(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Dx(i,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Lx(i,e,t){let n=new Float32Array(Or),r=new V(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Op(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Fp(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function sc(){return`

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
	`}var rc=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ui(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:_i});s.uniforms.tEquirect.value=t;let o=new cn(r,s),a=t.minFilter;return t.minFilter===hr&&(t.minFilter=$t),new dl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function Nx(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===fl||p===pl)if(e.has(h)){let _=e.get(h).texture;return a(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let y=new rc(_.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",l),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,_=p===fl||p===pl,y=p===cr||p===Lr;if(_||y){let g=t.get(h),m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new ic(i)),g=_?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let w=h.image;return _&&w&&w.height>0||y&&w&&c(w)?(n===null&&(n=new ic(i)),g=_?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function a(h,p){return p===fl?h.mapping=cr:p===pl&&(h.mapping=Lr),h}function c(h){let p=0,_=6;for(let y=0;y<_;y++)h[y]!==void 0&&p++;return p===_}function l(h){let p=h.target;p.removeEventListener("dispose",l);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(h){let p=h.target;p.removeEventListener("dispose",d);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Ox(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&wr("WebGLRenderer: "+n+" extension not supported."),r}}}function Fx(i,e,t,n){let r={},s=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(u){let h=u.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function l(u){let h=[],p=u.index,_=u.attributes.position,y=0;if(_===void 0)return;if(p!==null){let w=p.array;y=p.version;for(let R=0,b=w.length;R<b;R+=3){let E=w[R+0],S=w[R+1],A=w[R+2];h.push(E,S,S,A,A,E)}}else{let w=_.array;y=_.version;for(let R=0,b=w.length/3-1;R<b;R+=3){let E=R+0,S=R+1,A=R+2;h.push(E,S,S,A,A,E)}}let g=new(_.count>=65535?ro:io)(h,1);g.version=y;let m=s.get(u);m&&e.remove(m),s.set(u,g)}function d(u){let h=s.get(u);if(h){let p=u.index;p!==null&&h.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function Ux(i,e,t){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,h){i.drawElements(n,h,s,u*o),t.update(h,n,1)}function l(u,h,p){p!==0&&(i.drawElementsInstanced(n,h,s,u*o,p),t.update(h,n,p))}function d(u,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,u,0,p);let y=0;for(let g=0;g<p;g++)y+=h[g];t.update(y,n,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Bx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function kx(i,e,t){let n=new WeakMap,r=new Pt;function s(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==u){let D=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",D)};var p=D;h!==void 0&&h.texture.dispose();let _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],b=0;_===!0&&(b=1),y===!0&&(b=2),g===!0&&(b=3);let E=a.attributes.position.count*b,S=1;E>e.maxTextureSize&&(S=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let A=new Float32Array(E*S*4*u),x=new to(A,E,S,u);x.type=$n,x.needsUpdate=!0;let T=b*4;for(let P=0;P<u;P++){let U=m[P],Z=w[P],ee=R[P],O=E*S*4*P;for(let X=0;X<U.count;X++){let k=X*T;_===!0&&(r.fromBufferAttribute(U,X),A[O+k+0]=r.x,A[O+k+1]=r.y,A[O+k+2]=r.z,A[O+k+3]=0),y===!0&&(r.fromBufferAttribute(Z,X),A[O+k+4]=r.x,A[O+k+5]=r.y,A[O+k+6]=r.z,A[O+k+7]=0),g===!0&&(r.fromBufferAttribute(ee,X),A[O+k+8]=r.x,A[O+k+9]=r.y,A[O+k+10]=r.z,A[O+k+11]=ee.itemSize===4?r.w:1)}}h={count:u,texture:x,size:new dt(E,S)},n.set(a,h),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<l.length;g++)_+=l[g];let y=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function zx(i,e,t,n,r){let s=new WeakMap;function o(l){let d=r.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return h}function a(){s=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var Vx={[Bh]:"LINEAR_TONE_MAPPING",[kh]:"REINHARD_TONE_MAPPING",[zh]:"CINEON_TONE_MAPPING",[Vh]:"ACES_FILMIC_TONE_MAPPING",[Hh]:"AGX_TONE_MAPPING",[Wh]:"NEUTRAL_TONE_MAPPING",[Gh]:"CUSTOM_TONE_MAPPING"};function Gx(i,e,t,n,r,s){let o=new Tn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Fi(e,t):void 0}),a=new Tn(e,t,{type:xi,depthBuffer:!1,stencilBuffer:!1}),c=new En;c.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Un([0,2,0,0,2,0],2));let l=new el({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new cn(c,l),u=new ys(-1,1,1,-1,0,1),h=null,p=null,_=!1,y,g=null,m=[],w=!1;this.setSize=function(R,b){o.setSize(R,b),a.setSize(R,b);for(let E=0;E<m.length;E++){let S=m[E];S.setSize&&S.setSize(R,b)}},this.setEffects=function(R){m=R,w=m.length>0&&m[0].isRenderPass===!0;let b=o.width,E=o.height;for(let S=0;S<m.length;S++){let A=m[S];A.setSize&&A.setSize(b,E)}},this.begin=function(R,b){if(_||R.toneMapping===Zn&&m.length===0)return!1;if(g=b,b!==null){let E=b.width,S=b.height;(o.width!==E||o.height!==S)&&this.setSize(E,S)}return w===!1&&R.setRenderTarget(o),y=R.toneMapping,R.toneMapping=Zn,!0},this.hasRenderPass=function(){return w},this.end=function(R,b){R.toneMapping=y,_=!0;let E=o,S=a;for(let A=0;A<m.length;A++){let x=m[A];if(x.enabled!==!1&&(x.render(R,S,E,b),x.needsSwap!==!1)){let T=E;E=S,S=T}}if(h!==R.outputColorSpace||p!==R.toneMapping){h=R.outputColorSpace,p=R.toneMapping,l.defines={},ut.getTransfer(h)===vt&&(l.defines.SRGB_TRANSFER="");let A=Vx[p];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,R.setRenderTarget(g),R.render(d,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var nm=new vi,hd=new Fi(1,1),im=new to,rm=new Ja,sm=new oo,Up=[],Bp=[],kp=new Float32Array(16),zp=new Float32Array(9),Vp=new Float32Array(4);function Cs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Up[r];if(s===void 0&&(s=new Float32Array(r),Up[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oc(i,e){let t=Bp[e];t===void 0&&(t=new Int32Array(e),Bp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function Yx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Vp.set(n),i.uniformMatrix2fv(this.addr,!1,Vp),Gt(t,n)}}function Zx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;zp.set(n),i.uniformMatrix3fv(this.addr,!1,zp),Gt(t,n)}}function jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;kp.set(n),i.uniformMatrix4fv(this.addr,!1,kp),Gt(t,n)}}function $x(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function ev(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function rv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(hd.compareFunction=t.isReversedDepthBuffer()?ec:Ql,s=hd):s=nm,t.setTexture2D(e||s,r)}function sv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||rm,r)}function ov(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||sm,r)}function av(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||im,r)}function lv(i){switch(i){case 5126:return Hx;case 35664:return Wx;case 35665:return Xx;case 35666:return qx;case 35674:return Yx;case 35675:return Zx;case 35676:return jx;case 5124:case 35670:return $x;case 35667:case 35671:return Jx;case 35668:case 35672:return Kx;case 35669:case 35673:return Qx;case 5125:return ev;case 36294:return tv;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return av}}function cv(i,e){i.uniform1fv(this.addr,e)}function hv(i,e){let t=Cs(e,this.size,2);i.uniform2fv(this.addr,t)}function dv(i,e){let t=Cs(e,this.size,3);i.uniform3fv(this.addr,t)}function uv(i,e){let t=Cs(e,this.size,4);i.uniform4fv(this.addr,t)}function fv(i,e){let t=Cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pv(i,e){let t=Cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mv(i,e){let t=Cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gv(i,e){i.uniform1iv(this.addr,e)}function _v(i,e){i.uniform2iv(this.addr,e)}function xv(i,e){i.uniform3iv(this.addr,e)}function vv(i,e){i.uniform4iv(this.addr,e)}function yv(i,e){i.uniform1uiv(this.addr,e)}function bv(i,e){i.uniform2uiv(this.addr,e)}function Mv(i,e){i.uniform3uiv(this.addr,e)}function Sv(i,e){i.uniform4uiv(this.addr,e)}function Tv(i,e,t){let n=this.cache,r=e.length,s=oc(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=hd:o=nm;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Ev(i,e,t){let n=this.cache,r=e.length,s=oc(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||rm,s[o])}function Av(i,e,t){let n=this.cache,r=e.length,s=oc(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||sm,s[o])}function wv(i,e,t){let n=this.cache,r=e.length,s=oc(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||im,s[o])}function Cv(i){switch(i){case 5126:return cv;case 35664:return hv;case 35665:return dv;case 35666:return uv;case 35674:return fv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return _v;case 35668:case 35672:return xv;case 35669:case 35673:return vv;case 5125:return yv;case 36294:return bv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return wv}}var dd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lv(t.type)}},ud=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cv(t.type)}},fd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},ld=/(\w+)(\])?(\[|\.)?/g;function Gp(i,e){i.seq.push(e),i.map[e.id]=e}function Rv(i,e,t){let n=i.name,r=n.length;for(ld.lastIndex=0;;){let s=ld.exec(n),o=ld.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Gp(t,l===void 0?new dd(a,i,e):new ud(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new fd(a),Gp(t,u)),t=u}}}var As=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Rv(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Hp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Pv=37297,Iv=0;function Dv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Wp=new Ye;function Lv(i){ut._getMatrix(Wp,ut.workingColorSpace,i);let e=`mat3( ${Wp.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case Qs:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Dv(i.getShaderSource(e),a)}else return s}function Nv(i,e){let t=Lv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ov={[Bh]:"Linear",[kh]:"Reinhard",[zh]:"Cineon",[Vh]:"ACESFilmic",[Hh]:"AgX",[Wh]:"Neutral",[Gh]:"Custom"};function Fv(i,e){let t=Ov[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nc=new V;function Uv(){ut.getLuminanceCoefficients(nc);let i=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function kv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Co(i){return i!==""}function qp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(i){return i.replace(Vv,Hv)}var Gv=new Map;function Hv(i,e){let t=rt[e];if(t===void 0){let n=Gv.get(e);if(n!==void 0)t=rt[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return pd(t)}var Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(i){return i.replace(Wv,Xv)}function Xv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var qv={[go]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function Yv(i){return qv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zv={[cr]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE_UV"};function jv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $v={[Lr]:"ENVMAP_MODE_REFRACTION"};function Jv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$v[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kv={[Uh]:"ENVMAP_BLENDING_MULTIPLY",[mp]:"ENVMAP_BLENDING_MIX",[gp]:"ENVMAP_BLENDING_ADD"};function Qv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kv[i.combine]||"ENVMAP_BLENDING_NONE"}function ey(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ty(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Yv(t),l=jv(t),d=Jv(t),u=Qv(t),h=ey(t),p=Bv(t),_=kv(s),y=r.createProgram(),g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Co).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Co).join(`
`),m.length>0&&(m+=`
`)):(g=[jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),m=[jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Zn?Fv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Nv("linearToOutputTexel",t.outputColorSpace),Uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),o=pd(o),o=qp(o,t),o=Yp(o,t),a=pd(a),a=qp(a,t),a=Yp(a,t),o=Zp(o),a=Zp(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=w+g+o,b=w+m+a,E=Hp(r,r.VERTEX_SHADER,R),S=Hp(r,r.FRAGMENT_SHADER,b);r.attachShader(y,E),r.attachShader(y,S),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(P){if(i.debug.checkShaderErrors){let U=r.getProgramInfoLog(y)||"",Z=r.getShaderInfoLog(E)||"",ee=r.getShaderInfoLog(S)||"",O=U.trim(),X=Z.trim(),k=ee.trim(),$=!0,B=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,E,S);else{let se=Xp(r,E,"vertex"),le=Xp(r,S,"fragment");Ve("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+se+`
`+le)}else O!==""?Ge("WebGLProgram: Program Info Log:",O):(X===""||k==="")&&(B=!1);B&&(P.diagnostics={runnable:$,programLog:O,vertexShader:{log:X,prefix:g},fragmentShader:{log:k,prefix:m}})}r.deleteShader(E),r.deleteShader(S),x=new As(r,y),T=zv(r,y)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(y,Pv)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=S,this}var ny=0,md=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gd(e),t.set(e,n)),n}},gd=class{constructor(e){this.id=ny++,this.code=e,this.usedTimes=0}};function iy(i){return i===ur||i===So||i===To}function ry(i,e,t,n,r,s){let o=new ps,a=new md,c=new Set,l=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,T,D,P,U,Z){let ee=P.fog,O=U.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=e.get(x.envMap||X,k),B=$&&$.mapping===_o?$.image.height:null,se=p[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let le=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,pe=le!==void 0?le.length:0,tt=0;O.morphAttributes.position!==void 0&&(tt=1),O.morphAttributes.normal!==void 0&&(tt=2),O.morphAttributes.color!==void 0&&(tt=3);let pt,We,H,ae;if(se){let Ae=bi[se];pt=Ae.vertexShader,We=Ae.fragmentShader}else{pt=x.vertexShader,We=x.fragmentShader;let Ae=a.getVertexShaderStage(x),Oe=a.getFragmentShaderStage(x);a.update(x,Ae,Oe),H=Ae.id,ae=Oe.id}let re=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ie=U.isInstancedMesh===!0,Me=U.isBatchedMesh===!0,Ce=!!x.map,Te=!!x.matcap,qe=!!$,ke=!!x.aoMap,we=!!x.lightMap,Ze=!!x.bumpMap&&x.wireframe===!1,st=!!x.normalMap,ot=!!x.displacementMap,_t=!!x.emissiveMap,je=!!x.metalnessMap,nt=!!x.roughnessMap,C=x.anisotropy>0,it=x.clearcoat>0,Re=x.dispersion>0,M=x.iridescence>0,f=x.sheen>0,L=x.transmission>0,F=C&&!!x.anisotropyMap,q=it&&!!x.clearcoatMap,oe=it&&!!x.clearcoatNormalMap,ce=it&&!!x.clearcoatRoughnessMap,Y=M&&!!x.iridescenceMap,K=M&&!!x.iridescenceThicknessMap,he=f&&!!x.sheenColorMap,De=f&&!!x.sheenRoughnessMap,ge=!!x.specularMap,fe=!!x.specularColorMap,Le=!!x.specularIntensityMap,Be=L&&!!x.transmissionMap,Ue=L&&!!x.thicknessMap,I=!!x.gradientMap,de=!!x.alphaMap,te=x.alphaTest>0,ue=!!x.alphaHash,_e=!!x.extensions,ie=Zn;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ie=i.toneMapping);let be={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:pt,fragmentShader:We,defines:x.defines,customVertexShaderID:H,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Me,batchingColor:Me&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:Te,envMap:qe,envMapMode:qe&&$.mapping,envMapCubeUVHeight:B,aoMap:ke,lightMap:we,bumpMap:Ze,normalMap:st,displacementMap:ot,emissiveMap:_t,normalMapObjectSpace:st&&x.normalMapType===vp,normalMapTangentSpace:st&&x.normalMapType===Kl,packedNormalMap:st&&x.normalMapType===Kl&&iy(x.normalMap.format),metalnessMap:je,roughnessMap:nt,anisotropy:C,anisotropyMap:F,clearcoat:it,clearcoatMap:q,clearcoatNormalMap:oe,clearcoatRoughnessMap:ce,dispersion:Re,iridescence:M,iridescenceMap:Y,iridescenceThicknessMap:K,sheen:f,sheenColorMap:he,sheenRoughnessMap:De,specularMap:ge,specularColorMap:fe,specularIntensityMap:Le,transmission:L,transmissionMap:Be,thicknessMap:Ue,gradientMap:I,opaque:x.transparent===!1&&x.blending===Cr&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:te,alphaHash:ue,combine:x.combine,mapUv:Ce&&_(x.map.channel),aoMapUv:ke&&_(x.aoMap.channel),lightMapUv:we&&_(x.lightMap.channel),bumpMapUv:Ze&&_(x.bumpMap.channel),normalMapUv:st&&_(x.normalMap.channel),displacementMapUv:ot&&_(x.displacementMap.channel),emissiveMapUv:_t&&_(x.emissiveMap.channel),metalnessMapUv:je&&_(x.metalnessMap.channel),roughnessMapUv:nt&&_(x.roughnessMap.channel),anisotropyMapUv:F&&_(x.anisotropyMap.channel),clearcoatMapUv:q&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(x.sheenRoughnessMap.channel),specularMapUv:ge&&_(x.specularMap.channel),specularColorMapUv:fe&&_(x.specularColorMap.channel),specularIntensityMapUv:Le&&_(x.specularIntensityMap.channel),transmissionMapUv:Be&&_(x.transmissionMap.channel),thicknessMapUv:Ue&&_(x.thicknessMap.channel),alphaMapUv:de&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(st||C),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(Ce||de),fog:!!ee,useFog:x.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&st===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:tt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:_t&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gi,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_e&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&x.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function g(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(m(T,x),w(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function w(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function R(x){let T=p[x.type],D;if(T){let P=bi[T];D=Ip.clone(P.uniforms)}else D=x.uniforms;return D}function b(x,T){let D=d.get(T);return D!==void 0?++D.usedTimes:(D=new ty(i,T,x,r),l.push(D),d.set(T,D)),D}function E(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function A(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:b,releaseProgram:E,releaseShaderCache:S,programs:l,dispose:A}}function sy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function oy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function $p(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jp(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,_,y,g,m){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:p,material:_,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:g,group:m},i[e]=w):(w.id=h.id,w.object=h,w.geometry=p,w.material=_,w.materialVariant=o(h),w.groupOrder=y,w.renderOrder=h.renderOrder,w.z=g,w.group=m),e++,w}function c(h,p,_,y,g,m){let w=a(h,p,_,y,g,m);_.transmission>0?n.push(w):_.transparent===!0?r.push(w):t.push(w)}function l(h,p,_,y,g,m){let w=a(h,p,_,y,g,m);_.transmission>0?n.unshift(w):_.transparent===!0?r.unshift(w):t.unshift(w)}function d(h,p,_){t.length>1&&t.sort(h||oy),n.length>1&&n.sort(p||$p),r.length>1&&r.sort(p||$p),_&&(t.reverse(),n.reverse(),r.reverse())}function u(){for(let h=e,p=i.length;h<p;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:u,sort:d}}function ay(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Jp,i.set(n,[o])):r>=s.length?(o=new Jp,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ly(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ct};break;case"SpotLight":t={position:new V,direction:new V,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function cy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hy=0;function dy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uy(i){let e=new ly,t=cy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let r=new V,s=new Ct,o=new Ct;function a(l){let d=0,u=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,_=0,y=0,g=0,m=0,w=0,R=0,b=0,E=0,S=0,A=0;l.sort(dy);for(let T=0,D=l.length;T<D;T++){let P=l[T],U=P.color,Z=P.intensity,ee=P.distance,O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ur?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=U.r*Z,u+=U.g*Z,h+=U.b*Z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],Z);A++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,$=t.get(P);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=P.shadow.matrix,w++}n.directional[p]=X,p++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(Z),X.distance=ee,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[y]=X;let k=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,k.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[y]=k.matrix,P.castShadow){let $=t.get(P);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.spotShadow[y]=$,n.spotShadowMap[y]=O,b++}y++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(U).multiplyScalar(Z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=X,g++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let k=P.shadow,$=t.get(P);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=P.shadow.matrix,R++}n.point[_]=X,_++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(Z),X.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[m]=X,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let x=n.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==y||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==w||x.numPointShadows!==R||x.numSpotShadows!==b||x.numSpotMaps!==E||x.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=b+E-S,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,x.directionalLength=p,x.pointLength=_,x.spotLength=y,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=w,x.numPointShadows=R,x.numSpotShadows=b,x.numSpotMaps=E,x.numLightProbes=A,n.version=hy++)}function c(l,d){let u=0,h=0,p=0,_=0,y=0,g=d.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){let R=l[m];if(R.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),u++}else if(R.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),p++}else if(R.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(R.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(R.isPointLight){let b=n.point[h];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(g),h++}else if(R.isHemisphereLight){let b=n.hemi[y];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:n}}function Kp(i){let e=new uy(i),t=[],n=[],r=[];function s(h){u.camera=h,t.length=0,n.length=0,r.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function c(h){r.push(h)}function l(){e.setup(t)}function d(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function fy(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Kp(i),e.set(r,[a])):s>=o.length?(a=new Kp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,my=`uniform sampler2D shadow_pass;
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
}`,gy=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],_y=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Qp=new Ct,wo=new V,cd=new V;function xy(i,e,t){let n=new _s,r=new dt,s=new dt,o=new Pt,a=new tl,c=new nl,l={},d=t.maxTextureSize,u={[Ni]:Jt,[Jt]:Ni,[gi]:gi},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:py,fragmentShader:my}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new En;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new cn(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go;let m=this.type;this.render=function(S,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===$f&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=go);let T=i.getRenderTarget(),D=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(_i),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let Z=m!==this.type;Z&&A.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(O=>O.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,O=S.length;ee<O;ee++){let X=S[ee],k=X.shadow;if(k===void 0){Ge("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let $=k.getFrameExtents();r.multiply($),s.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/$.x),r.x=s.x*$.x,k.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/$.y),r.y=s.y*$.y,k.mapSize.y=s.y));let B=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=B,k.map===null||Z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ms){if(X.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Tn(r.x,r.y,{format:ur,type:xi,minFilter:$t,magFilter:$t,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new Fi(r.x,r.y,$n),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=fi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ot,k.map.depthTexture.magFilter=Ot}else X.isPointLight?(k.map=new rc(r.x),k.map.depthTexture=new Qa(r.x,jn)):(k.map=new Tn(r.x,r.y),k.map.depthTexture=new Fi(r.x,r.y,jn)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=fi,this.type===go?(k.map.depthTexture.compareFunction=B?ec:Ql,k.map.depthTexture.minFilter=$t,k.map.depthTexture.magFilter=$t):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ot,k.map.depthTexture.magFilter=Ot);k.camera.updateProjectionMatrix()}let se=k.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<se;le++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,le),i.clear();else{le===0&&(i.setRenderTarget(k.map),i.clear());let pe=k.getViewport(le);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),U.viewport(o)}if(X.isPointLight){let pe=k.camera,tt=k.matrix,pt=X.distance||pe.far;pt!==pe.far&&(pe.far=pt,pe.updateProjectionMatrix()),wo.setFromMatrixPosition(X.matrixWorld),pe.position.copy(wo),cd.copy(pe.position),cd.add(gy[le]),pe.up.copy(_y[le]),pe.lookAt(cd),pe.updateMatrixWorld(),tt.makeTranslation(-wo.x,-wo.y,-wo.z),Qp.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Qp,pe.coordinateSystem,pe.reversedDepth)}else k.updateMatrices(X);n=k.getFrustum(),b(A,x,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===Ms&&w(k,x),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,D,P)};function w(S,A){let x=e.update(y);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Tn(r.x,r.y,{format:ur,type:xi})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,x,h,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,x,p,y,null)}function R(S,A,x,T){let D=null,P=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)D=P;else if(D=x.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=D.uuid,Z=A.uuid,ee=l[U];ee===void 0&&(ee={},l[U]=ee);let O=ee[Z];O===void 0&&(O=D.clone(),ee[Z]=O,A.addEventListener("dispose",E)),D=O}if(D.visible=A.visible,D.wireframe=A.wireframe,T===Ms?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:u[A.side],D.alphaMap=A.alphaMap,D.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,D.map=A.map,D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.displacementMap=A.displacementMap,D.displacementScale=A.displacementScale,D.displacementBias=A.displacementBias,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let U=i.properties.get(D);U.light=x}return D}function b(S,A,x,T,D){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&D===Ms)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let Z=e.update(S),ee=S.material;if(Array.isArray(ee)){let O=Z.groups;for(let X=0,k=O.length;X<k;X++){let $=O[X],B=ee[$.materialIndex];if(B&&B.visible){let se=R(S,B,T,D);S.onBeforeShadow(i,S,A,x,Z,se,$),i.renderBufferDirect(x,null,Z,se,S,$),S.onAfterShadow(i,S,A,x,Z,se,$)}}}else if(ee.visible){let O=R(S,ee,T,D);S.onBeforeShadow(i,S,A,x,Z,O,null),i.renderBufferDirect(x,null,Z,O,S,null),S.onAfterShadow(i,S,A,x,Z,O,null)}}let U=S.children;for(let Z=0,ee=U.length;Z<ee;Z++)b(U[Z],A,x,T,D)}function E(S){S.target.removeEventListener("dispose",E);for(let x in l){let T=l[x],D=S.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function vy(i,e){function t(){let I=!1,de=new Pt,te=null,ue=new Pt(0,0,0,0);return{setMask:function(_e){te!==_e&&!I&&(i.colorMask(_e,_e,_e,_e),te=_e)},setLocked:function(_e){I=_e},setClear:function(_e,ie,be,Ae,Oe){Oe===!0&&(_e*=Ae,ie*=Ae,be*=Ae),de.set(_e,ie,be,Ae),ue.equals(de)===!1&&(i.clearColor(_e,ie,be,Ae),ue.copy(de))},reset:function(){I=!1,te=null,ue.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,te=null,ue=null,_e=null;return{setReversed:function(ie){if(de!==ie){let be=e.get("EXT_clip_control");ie?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),de=ie;let Ae=_e;_e=null,this.setClear(Ae)}},getReversed:function(){return de},setTest:function(ie){ie?re(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ie){te!==ie&&!I&&(i.depthMask(ie),te=ie)},setFunc:function(ie){if(de&&(ie=Rp[ie]),ue!==ie){switch(ie){case Ba:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=ie}},setLocked:function(ie){I=ie},setClear:function(ie){_e!==ie&&(_e=ie,de&&(ie=1-ie),i.clearDepth(ie))},reset:function(){I=!1,te=null,ue=null,_e=null,de=!1}}}function r(){let I=!1,de=null,te=null,ue=null,_e=null,ie=null,be=null,Ae=null,Oe=null;return{setTest:function(Je){I||(Je?re(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Je){de!==Je&&!I&&(i.stencilMask(Je),de=Je)},setFunc:function(Je,kn,_n){(te!==Je||ue!==kn||_e!==_n)&&(i.stencilFunc(Je,kn,_n),te=Je,ue=kn,_e=_n)},setOp:function(Je,kn,_n){(ie!==Je||be!==kn||Ae!==_n)&&(i.stencilOp(Je,kn,_n),ie=Je,be=kn,Ae=_n)},setLocked:function(Je){I=Je},setClear:function(Je){Oe!==Je&&(i.clearStencil(Je),Oe=Je)},reset:function(){I=!1,de=null,te=null,ue=null,_e=null,ie=null,be=null,Ae=null,Oe=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,d={},u={},h={},p=new WeakMap,_=[],y=null,g=!1,m=null,w=null,R=null,b=null,E=null,S=null,A=null,x=new ct(0,0,0),T=0,D=!1,P=null,U=null,Z=null,ee=null,O=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,$=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=$>=2);let se=null,le={},pe=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),pt=new Pt().fromArray(pe),We=new Pt().fromArray(tt);function H(I,de,te,ue){let _e=new Uint8Array(4),ie=i.createTexture();i.bindTexture(I,ie),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<te;be++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(de+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return ie}let ae={};ae[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(Rr),Ze(!1),st(Lh),re(i.CULL_FACE),ke(_i);function re(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function me(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Ie(I,de){return h[I]!==de?(i.bindFramebuffer(I,de),h[I]=de,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Me(I,de){let te=_,ue=!1;if(I){te=p.get(de),te===void 0&&(te=[],p.set(de,te));let _e=I.textures;if(te.length!==_e.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,be=_e.length;ie<be;ie++)te[ie]=i.COLOR_ATTACHMENT0+ie;te.length=_e.length,ue=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ue=!0);ue&&i.drawBuffers(te)}function Ce(I){return y!==I?(i.useProgram(I),y=I,!0):!1}let Te={[rr]:i.FUNC_ADD,[Kf]:i.FUNC_SUBTRACT,[Qf]:i.FUNC_REVERSE_SUBTRACT};Te[ep]=i.MIN,Te[tp]=i.MAX;let qe={[np]:i.ZERO,[ip]:i.ONE,[rp]:i.SRC_COLOR,[Fa]:i.SRC_ALPHA,[hp]:i.SRC_ALPHA_SATURATE,[lp]:i.DST_COLOR,[op]:i.DST_ALPHA,[sp]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[cp]:i.ONE_MINUS_DST_COLOR,[ap]:i.ONE_MINUS_DST_ALPHA,[dp]:i.CONSTANT_COLOR,[up]:i.ONE_MINUS_CONSTANT_COLOR,[fp]:i.CONSTANT_ALPHA,[pp]:i.ONE_MINUS_CONSTANT_ALPHA};function ke(I,de,te,ue,_e,ie,be,Ae,Oe,Je){if(I===_i){g===!0&&(me(i.BLEND),g=!1);return}if(g===!1&&(re(i.BLEND),g=!0),I!==Jf){if(I!==m||Je!==D){if((w!==rr||E!==rr)&&(i.blendEquation(i.FUNC_ADD),w=rr,E=rr),Je)switch(I){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nh:i.blendFunc(i.ONE,i.ONE);break;case Oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",I);break}else switch(I){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oh:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",I);break}R=null,b=null,S=null,A=null,x.set(0,0,0),T=0,m=I,D=Je}return}_e=_e||de,ie=ie||te,be=be||ue,(de!==w||_e!==E)&&(i.blendEquationSeparate(Te[de],Te[_e]),w=de,E=_e),(te!==R||ue!==b||ie!==S||be!==A)&&(i.blendFuncSeparate(qe[te],qe[ue],qe[ie],qe[be]),R=te,b=ue,S=ie,A=be),(Ae.equals(x)===!1||Oe!==T)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Oe),x.copy(Ae),T=Oe),m=I,D=!1}function we(I,de){I.side===gi?me(i.CULL_FACE):re(i.CULL_FACE);let te=I.side===Jt;de&&(te=!te),Ze(te),I.blending===Cr&&I.transparent===!1?ke(_i):ke(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let ue=I.stencilWrite;a.setTest(ue),ue&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(I){P!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),P=I)}function st(I){I!==Zf?(re(i.CULL_FACE),I!==U&&(I===Lh?i.cullFace(i.BACK):I===jf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),U=I}function ot(I){I!==Z&&(k&&i.lineWidth(I),Z=I)}function _t(I,de,te){I?(re(i.POLYGON_OFFSET_FILL),(ee!==de||O!==te)&&(ee=de,O=te,o.getReversed()&&(de=-de),i.polygonOffset(de,te))):me(i.POLYGON_OFFSET_FILL)}function je(I){I?re(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function nt(I){I===void 0&&(I=i.TEXTURE0+X-1),se!==I&&(i.activeTexture(I),se=I)}function C(I,de,te){te===void 0&&(se===null?te=i.TEXTURE0+X-1:te=se);let ue=le[te];ue===void 0&&(ue={type:void 0,texture:void 0},le[te]=ue),(ue.type!==I||ue.texture!==de)&&(se!==te&&(i.activeTexture(te),se=te),i.bindTexture(I,de||ae[I]),ue.type=I,ue.texture=de)}function it(){let I=le[se];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Re(){try{i.compressedTexImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function M(){try{i.compressedTexImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function f(){try{i.texSubImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function L(){try{i.texSubImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function F(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function oe(){try{i.texStorage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function ce(){try{i.texStorage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function Y(){try{i.texImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function K(){try{i.texImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function he(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function De(I,de){u[I]!==de&&(i.pixelStorei(I,de),u[I]=de)}function ge(I){pt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),pt.copy(I))}function fe(I){We.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),We.copy(I))}function Le(I,de){let te=l.get(de);te===void 0&&(te=new WeakMap,l.set(de,te));let ue=te.get(I);ue===void 0&&(ue=i.getUniformBlockIndex(de,I.name),te.set(I,ue))}function Be(I,de){let ue=l.get(de).get(I);c.get(de)!==ue&&(i.uniformBlockBinding(de,ue,I.__bindingPointIndex),c.set(de,ue))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},se=null,le={},h={},p=new WeakMap,_=[],y=null,g=!1,m=null,w=null,R=null,b=null,E=null,S=null,A=null,x=new ct(0,0,0),T=0,D=!1,P=null,U=null,Z=null,ee=null,O=null,pt.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:me,bindFramebuffer:Ie,drawBuffers:Me,useProgram:Ce,setBlending:ke,setMaterial:we,setFlipSided:Ze,setCullFace:st,setLineWidth:ot,setPolygonOffset:_t,setScissorTest:je,activeTexture:nt,bindTexture:C,unbindTexture:it,compressedTexImage2D:Re,compressedTexImage3D:M,texImage2D:Y,texImage3D:K,pixelStorei:De,getParameter:he,updateUBOMapping:Le,uniformBlockBinding:Be,texStorage2D:oe,texStorage3D:ce,texSubImage2D:f,texSubImage3D:L,compressedTexSubImage2D:F,compressedTexSubImage3D:q,scissor:ge,viewport:fe,reset:Ue}}function yy(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,d=new WeakMap,u=new Set,h,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(M,f){return _?new OffscreenCanvas(M,f):eo("canvas")}function g(M,f,L){let F=1,q=Re(M);if((q.width>L||q.height>L)&&(F=L/Math.max(q.width,q.height)),F<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let oe=Math.floor(F*q.width),ce=Math.floor(F*q.height);h===void 0&&(h=y(oe,ce));let Y=f?y(oe,ce):h;return Y.width=oe,Y.height=ce,Y.getContext("2d").drawImage(M,0,0,oe,ce),Ge("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+oe+"x"+ce+")."),Y}else return"data"in M&&Ge("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),M;return M}function m(M){return M.generateMipmaps}function w(M){i.generateMipmap(M)}function R(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(M,f,L,F,q,oe=!1){if(M!==null){if(i[M]!==void 0)return i[M];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ce;F&&(ce=e.get("EXT_texture_norm16"),ce||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=f;if(f===i.RED&&(L===i.FLOAT&&(Y=i.R32F),L===i.HALF_FLOAT&&(Y=i.R16F),L===i.UNSIGNED_BYTE&&(Y=i.R8),L===i.UNSIGNED_SHORT&&ce&&(Y=ce.R16_EXT),L===i.SHORT&&ce&&(Y=ce.R16_SNORM_EXT)),f===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.R8UI),L===i.UNSIGNED_SHORT&&(Y=i.R16UI),L===i.UNSIGNED_INT&&(Y=i.R32UI),L===i.BYTE&&(Y=i.R8I),L===i.SHORT&&(Y=i.R16I),L===i.INT&&(Y=i.R32I)),f===i.RG&&(L===i.FLOAT&&(Y=i.RG32F),L===i.HALF_FLOAT&&(Y=i.RG16F),L===i.UNSIGNED_BYTE&&(Y=i.RG8),L===i.UNSIGNED_SHORT&&ce&&(Y=ce.RG16_EXT),L===i.SHORT&&ce&&(Y=ce.RG16_SNORM_EXT)),f===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RG8UI),L===i.UNSIGNED_SHORT&&(Y=i.RG16UI),L===i.UNSIGNED_INT&&(Y=i.RG32UI),L===i.BYTE&&(Y=i.RG8I),L===i.SHORT&&(Y=i.RG16I),L===i.INT&&(Y=i.RG32I)),f===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),L===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),L===i.UNSIGNED_INT&&(Y=i.RGB32UI),L===i.BYTE&&(Y=i.RGB8I),L===i.SHORT&&(Y=i.RGB16I),L===i.INT&&(Y=i.RGB32I)),f===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),L===i.UNSIGNED_INT&&(Y=i.RGBA32UI),L===i.BYTE&&(Y=i.RGBA8I),L===i.SHORT&&(Y=i.RGBA16I),L===i.INT&&(Y=i.RGBA32I)),f===i.RGB&&(L===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGB16_EXT),L===i.SHORT&&ce&&(Y=ce.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),f===i.RGBA){let K=oe?Qs:ut.getTransfer(q);L===i.FLOAT&&(Y=i.RGBA32F),L===i.HALF_FLOAT&&(Y=i.RGBA16F),L===i.UNSIGNED_BYTE&&(Y=K===vt?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGBA16_EXT),L===i.SHORT&&ce&&(Y=ce.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(M,f){let L;return M?f===null||f===jn||f===Ts?L=i.DEPTH24_STENCIL8:f===$n?L=i.DEPTH32F_STENCIL8:f===Ss&&(L=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===jn||f===Ts?L=i.DEPTH_COMPONENT24:f===$n?L=i.DEPTH_COMPONENT32F:f===Ss&&(L=i.DEPTH_COMPONENT16),L}function S(M,f){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ot&&M.minFilter!==$t?Math.log2(Math.max(f.width,f.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?f.mipmaps.length:1}function A(M){let f=M.target;f.removeEventListener("dispose",A),T(f),f.isVideoTexture&&d.delete(f),f.isHTMLTexture&&u.delete(f)}function x(M){let f=M.target;f.removeEventListener("dispose",x),P(f)}function T(M){let f=n.get(M);if(f.__webglInit===void 0)return;let L=M.source,F=p.get(L);if(F){let q=F[f.__cacheKey];q.usedTimes--,q.usedTimes===0&&D(M),Object.keys(F).length===0&&p.delete(L)}n.remove(M)}function D(M){let f=n.get(M);i.deleteTexture(f.__webglTexture);let L=M.source,F=p.get(L);delete F[f.__cacheKey],o.memory.textures--}function P(M){let f=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(f.__webglFramebuffer[F]))for(let q=0;q<f.__webglFramebuffer[F].length;q++)i.deleteFramebuffer(f.__webglFramebuffer[F][q]);else i.deleteFramebuffer(f.__webglFramebuffer[F]);f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer[F])}else{if(Array.isArray(f.__webglFramebuffer))for(let F=0;F<f.__webglFramebuffer.length;F++)i.deleteFramebuffer(f.__webglFramebuffer[F]);else i.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&i.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let F=0;F<f.__webglColorRenderbuffer.length;F++)f.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(f.__webglColorRenderbuffer[F]);f.__webglDepthRenderbuffer&&i.deleteRenderbuffer(f.__webglDepthRenderbuffer)}let L=M.textures;for(let F=0,q=L.length;F<q;F++){let oe=n.get(L[F]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(L[F])}n.remove(M)}let U=0;function Z(){U=0}function ee(){return U}function O(M){U=M}function X(){let M=U;return M>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),U+=1,M}function k(M){let f=[];return f.push(M.wrapS),f.push(M.wrapT),f.push(M.wrapR||0),f.push(M.magFilter),f.push(M.minFilter),f.push(M.anisotropy),f.push(M.internalFormat),f.push(M.format),f.push(M.type),f.push(M.generateMipmaps),f.push(M.premultiplyAlpha),f.push(M.flipY),f.push(M.unpackAlignment),f.push(M.colorSpace),f.join()}function $(M,f){let L=n.get(M);if(M.isVideoTexture&&C(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&L.__version!==M.version){let F=M.image;if(F===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{me(L,M,f);return}}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+f)}function B(M,f){let L=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){me(L,M,f);return}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+f)}function se(M,f){let L=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){me(L,M,f);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+f)}function le(M,f){let L=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&L.__version!==M.version){Ie(L,M,f);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+f)}let pe={[Xa]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},tt={[Ot]:i.NEAREST,[_p]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[ml]:i.LINEAR_MIPMAP_NEAREST,[hr]:i.LINEAR_MIPMAP_LINEAR},pt={[yp]:i.NEVER,[Ep]:i.ALWAYS,[bp]:i.LESS,[Ql]:i.LEQUAL,[Mp]:i.EQUAL,[ec]:i.GEQUAL,[Sp]:i.GREATER,[Tp]:i.NOTEQUAL};function We(M,f){if(f.type===$n&&e.has("OES_texture_float_linear")===!1&&(f.magFilter===$t||f.magFilter===ml||f.magFilter===xo||f.magFilter===hr||f.minFilter===$t||f.minFilter===ml||f.minFilter===xo||f.minFilter===hr)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,pe[f.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,pe[f.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,pe[f.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,tt[f.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,tt[f.minFilter]),f.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,pt[f.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===Ot||f.minFilter!==xo&&f.minFilter!==hr||f.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||n.get(f).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,r.getMaxAnisotropy())),n.get(f).__currentAnisotropy=f.anisotropy}}}function H(M,f){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,f.addEventListener("dispose",A));let F=f.source,q=p.get(F);q===void 0&&(q={},p.set(F,q));let oe=k(f);if(oe!==M.__cacheKey){q[oe]===void 0&&(q[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),q[oe].usedTimes++;let ce=q[M.__cacheKey];ce!==void 0&&(q[M.__cacheKey].usedTimes--,ce.usedTimes===0&&D(f)),M.__cacheKey=oe,M.__webglTexture=q[oe].texture}return L}function ae(M,f,L){return Math.floor(Math.floor(M/L)/f)}function re(M,f,L,F){let oe=M.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,f.width,f.height,L,F,f.data);else{oe.sort((De,ge)=>De.start-ge.start);let ce=0;for(let De=1;De<oe.length;De++){let ge=oe[ce],fe=oe[De],Le=ge.start+ge.count,Be=ae(fe.start,f.width,4),Ue=ae(ge.start,f.width,4);fe.start<=Le+1&&Be===Ue&&ae(fe.start+fe.count-1,f.width,4)===Be?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++ce,oe[ce]=fe)}oe.length=ce+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,f.width);for(let De=0,ge=oe.length;De<ge;De++){let fe=oe[De],Le=Math.floor(fe.start/4),Be=Math.ceil(fe.count/4),Ue=Le%f.width,I=Math.floor(Le/f.width),de=Be,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ue,I,de,te,L,F,f.data)}M.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function me(M,f,L){let F=i.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),f.isData3DTexture&&(F=i.TEXTURE_3D);let q=H(M,f),oe=f.source;t.bindTexture(F,M.__webglTexture,i.TEXTURE0+L);let ce=n.get(oe);if(oe.version!==ce.__version||q===!0){if(t.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&f.image instanceof ImageBitmap)===!1){let te=ut.getPrimaries(ut.workingColorSpace),ue=f.colorSpace===Bi?null:ut.getPrimaries(f.colorSpace),_e=f.colorSpace===Bi||te===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment);let K=g(f.image,!1,r.maxTextureSize);K=it(f,K);let he=s.convert(f.format,f.colorSpace),De=s.convert(f.type),ge=b(f.internalFormat,he,De,f.normalized,f.colorSpace,f.isVideoTexture);We(F,f);let fe,Le=f.mipmaps,Be=f.isVideoTexture!==!0,Ue=ce.__version===void 0||q===!0,I=oe.dataReady,de=S(f,K);if(f.isDepthTexture)ge=E(f.format===dr,f.type),Ue&&(Be?t.texStorage2D(i.TEXTURE_2D,1,ge,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,ge,K.width,K.height,0,he,De,null));else if(f.isDataTexture)if(Le.length>0){Be&&Ue&&t.texStorage2D(i.TEXTURE_2D,de,ge,Le[0].width,Le[0].height);for(let te=0,ue=Le.length;te<ue;te++)fe=Le[te],Be?I&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe.width,fe.height,he,De,fe.data):t.texImage2D(i.TEXTURE_2D,te,ge,fe.width,fe.height,0,he,De,fe.data);f.generateMipmaps=!1}else Be?(Ue&&t.texStorage2D(i.TEXTURE_2D,de,ge,K.width,K.height),I&&re(f,K,he,De)):t.texImage2D(i.TEXTURE_2D,0,ge,K.width,K.height,0,he,De,K.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){Be&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ge,Le[0].width,Le[0].height,K.depth);for(let te=0,ue=Le.length;te<ue;te++)if(fe=Le[te],f.format!==Bn)if(he!==null)if(Be){if(I)if(f.layerUpdates.size>0){let _e=id(fe.width,fe.height,f.format,f.type);for(let ie of f.layerUpdates){let be=fe.data.subarray(ie*_e/fe.data.BYTES_PER_ELEMENT,(ie+1)*_e/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ie,fe.width,fe.height,1,he,be)}f.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,K.depth,he,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,ge,fe.width,fe.height,K.depth,0,fe.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,K.depth,he,De,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,ge,fe.width,fe.height,K.depth,0,he,De,fe.data)}else{Be&&Ue&&t.texStorage2D(i.TEXTURE_2D,de,ge,Le[0].width,Le[0].height);for(let te=0,ue=Le.length;te<ue;te++)fe=Le[te],f.format!==Bn?he!==null?Be?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,te,ge,fe.width,fe.height,0,fe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?I&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe.width,fe.height,he,De,fe.data):t.texImage2D(i.TEXTURE_2D,te,ge,fe.width,fe.height,0,he,De,fe.data)}else if(f.isDataArrayTexture)if(Be){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ge,K.width,K.height,K.depth),I)if(f.layerUpdates.size>0){let te=id(K.width,K.height,f.format,f.type);for(let ue of f.layerUpdates){let _e=K.data.subarray(ue*te/K.data.BYTES_PER_ELEMENT,(ue+1)*te/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,K.width,K.height,1,he,De,_e)}f.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,he,De,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,K.width,K.height,K.depth,0,he,De,K.data);else if(f.isData3DTexture)Be?(Ue&&t.texStorage3D(i.TEXTURE_3D,de,ge,K.width,K.height,K.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,he,De,K.data)):t.texImage3D(i.TEXTURE_3D,0,ge,K.width,K.height,K.depth,0,he,De,K.data);else if(f.isFramebufferTexture){if(Ue)if(Be)t.texStorage2D(i.TEXTURE_2D,de,ge,K.width,K.height);else{let te=K.width,ue=K.height;for(let _e=0;_e<de;_e++)t.texImage2D(i.TEXTURE_2D,_e,ge,te,ue,0,he,De,null),te>>=1,ue>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),K.parentNode!==te){te.appendChild(K),u.add(f),te.onpaint=ue=>{let _e=ue.changedElements;for(let ie of u)_e.includes(ie.image)&&(ie.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let _e=i.RGBA,ie=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,ie,be,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Be&&Ue){let te=Re(Le[0]);t.texStorage2D(i.TEXTURE_2D,de,ge,te.width,te.height)}for(let te=0,ue=Le.length;te<ue;te++)fe=Le[te],Be?I&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he,De,fe):t.texImage2D(i.TEXTURE_2D,te,ge,he,De,fe);f.generateMipmaps=!1}else if(Be){if(Ue){let te=Re(K);t.texStorage2D(i.TEXTURE_2D,de,ge,te.width,te.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,De,K)}else t.texImage2D(i.TEXTURE_2D,0,ge,he,De,K);m(f)&&w(F),ce.__version=oe.version,f.onUpdate&&f.onUpdate(f)}M.__version=f.version}function Ie(M,f,L){if(f.image.length!==6)return;let F=H(M,f),q=f.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+L);let oe=n.get(q);if(q.version!==oe.__version||F===!0){t.activeTexture(i.TEXTURE0+L);let ce=ut.getPrimaries(ut.workingColorSpace),Y=f.colorSpace===Bi?null:ut.getPrimaries(f.colorSpace),K=f.colorSpace===Bi||ce===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let he=f.isCompressedTexture||f.image[0].isCompressedTexture,De=f.image[0]&&f.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!he&&!De?ge[ie]=g(f.image[ie],!0,r.maxCubemapSize):ge[ie]=De?f.image[ie].image:f.image[ie],ge[ie]=it(f,ge[ie]);let fe=ge[0],Le=s.convert(f.format,f.colorSpace),Be=s.convert(f.type),Ue=b(f.internalFormat,Le,Be,f.normalized,f.colorSpace),I=f.isVideoTexture!==!0,de=oe.__version===void 0||F===!0,te=q.dataReady,ue=S(f,fe);We(i.TEXTURE_CUBE_MAP,f);let _e;if(he){I&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ue,fe.width,fe.height);for(let ie=0;ie<6;ie++){_e=ge[ie].mipmaps;for(let be=0;be<_e.length;be++){let Ae=_e[be];f.format!==Bn?Le!==null?I?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,0,0,Ae.width,Ae.height,Le,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,Ue,Ae.width,Ae.height,0,Ae.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,0,0,Ae.width,Ae.height,Le,Be,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,Ue,Ae.width,Ae.height,0,Le,Be,Ae.data)}}}else{if(_e=f.mipmaps,I&&de){_e.length>0&&ue++;let ie=Re(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ue,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(De){I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,Le,Be,ge[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,ge[ie].width,ge[ie].height,0,Le,Be,ge[ie].data);for(let be=0;be<_e.length;be++){let Oe=_e[be].image[ie].image;I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,0,0,Oe.width,Oe.height,Le,Be,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,Ue,Oe.width,Oe.height,0,Le,Be,Oe.data)}}else{I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,Be,ge[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,Le,Be,ge[ie]);for(let be=0;be<_e.length;be++){let Ae=_e[be];I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,0,0,Le,Be,Ae.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,Ue,Le,Be,Ae.image[ie])}}}m(f)&&w(i.TEXTURE_CUBE_MAP),oe.__version=q.version,f.onUpdate&&f.onUpdate(f)}M.__version=f.version}function Me(M,f,L,F,q,oe){let ce=s.convert(L.format,L.colorSpace),Y=s.convert(L.type),K=b(L.internalFormat,ce,Y,L.normalized,L.colorSpace),he=n.get(f),De=n.get(L);if(De.__renderTarget=f,!he.__hasExternalTextures){let ge=Math.max(1,f.width>>oe),fe=Math.max(1,f.height>>oe);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,oe,K,ge,fe,f.depth,0,ce,Y,null):t.texImage2D(q,oe,K,ge,fe,0,ce,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),nt(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,q,De.__webglTexture,0,je(f)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,q,De.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(M,f,L){if(i.bindRenderbuffer(i.RENDERBUFFER,M),f.depthBuffer){let F=f.depthTexture,q=F&&F.isDepthTexture?F.type:null,oe=E(f.stencilBuffer,q),ce=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;nt(f)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(f),oe,f.width,f.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(f),oe,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,oe,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,M)}else{let F=f.textures;for(let q=0;q<F.length;q++){let oe=F[q],ce=s.convert(oe.format,oe.colorSpace),Y=s.convert(oe.type),K=b(oe.internalFormat,ce,Y,oe.normalized,oe.colorSpace);nt(f)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(f),K,f.width,f.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(f),K,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,K,f.width,f.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(M,f,L){let F=f.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(f.depthTexture);if(q.__renderTarget=f,(!q.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),F){if(q.__webglInit===void 0&&(q.__webglInit=!0,f.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),We(i.TEXTURE_CUBE_MAP,f.depthTexture);let he=s.convert(f.depthTexture.format),De=s.convert(f.depthTexture.type),ge;f.depthTexture.format===fi?ge=i.DEPTH_COMPONENT24:f.depthTexture.format===dr&&(ge=i.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ge,f.width,f.height,0,he,De,null)}}else $(f.depthTexture,0);let oe=q.__webglTexture,ce=je(f),Y=F?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,K=f.depthTexture.format===dr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(f.depthTexture.format===fi)nt(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,oe,0);else if(f.depthTexture.format===dr)nt(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qe(M){let f=n.get(M),L=M.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==M.depthTexture){let F=M.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),F){let q=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,F.removeEventListener("dispose",q)};F.addEventListener("dispose",q),f.__depthDisposeCallback=q}f.__boundDepthTexture=F}if(M.depthTexture&&!f.__autoAllocateDepthBuffer)if(L)for(let F=0;F<6;F++)Te(f.__webglFramebuffer[F],M,F);else{let F=M.texture.mipmaps;F&&F.length>0?Te(f.__webglFramebuffer[0],M,0):Te(f.__webglFramebuffer,M,0)}else if(L){f.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[F]),f.__webglDepthbuffer[F]===void 0)f.__webglDepthbuffer[F]=i.createRenderbuffer(),Ce(f.__webglDepthbuffer[F],M,!1);else{let q=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=f.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,oe)}}else{let F=M.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=i.createRenderbuffer(),Ce(f.__webglDepthbuffer,M,!1);else{let q=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=f.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(M,f,L){let F=n.get(M);f!==void 0&&Me(F.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&qe(M)}function we(M){let f=M.texture,L=n.get(M),F=n.get(f);M.addEventListener("dispose",x);let q=M.textures,oe=M.isWebGLCubeRenderTarget===!0,ce=q.length>1;if(ce||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=f.version,o.memory.textures++),oe){L.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(f.mipmaps&&f.mipmaps.length>0){L.__webglFramebuffer[Y]=[];for(let K=0;K<f.mipmaps.length;K++)L.__webglFramebuffer[Y][K]=i.createFramebuffer()}else L.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){L.__webglFramebuffer=[];for(let Y=0;Y<f.mipmaps.length;Y++)L.__webglFramebuffer[Y]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ce)for(let Y=0,K=q.length;Y<K;Y++){let he=n.get(q[Y]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&nt(M)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let K=q[Y];L.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[Y]);let he=s.convert(K.format,K.colorSpace),De=s.convert(K.type),ge=b(K.internalFormat,he,De,K.normalized,K.colorSpace,M.isXRRenderTarget===!0),fe=je(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ge,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,L.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(L.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),We(i.TEXTURE_CUBE_MAP,f);for(let Y=0;Y<6;Y++)if(f.mipmaps&&f.mipmaps.length>0)for(let K=0;K<f.mipmaps.length;K++)Me(L.__webglFramebuffer[Y][K],M,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else Me(L.__webglFramebuffer[Y],M,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(f)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let Y=0,K=q.length;Y<K;Y++){let he=q[Y],De=n.get(he),ge=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ge=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,De.__webglTexture),We(ge,he),Me(L.__webglFramebuffer,M,he,i.COLOR_ATTACHMENT0+Y,ge,0),m(he)&&w(ge)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Y=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,F.__webglTexture),We(Y,f),f.mipmaps&&f.mipmaps.length>0)for(let K=0;K<f.mipmaps.length;K++)Me(L.__webglFramebuffer[K],M,f,i.COLOR_ATTACHMENT0,Y,K);else Me(L.__webglFramebuffer,M,f,i.COLOR_ATTACHMENT0,Y,0);m(f)&&w(Y),t.unbindTexture()}M.depthBuffer&&qe(M)}function Ze(M){let f=M.textures;for(let L=0,F=f.length;L<F;L++){let q=f[L];if(m(q)){let oe=R(M),ce=n.get(q).__webglTexture;t.bindTexture(oe,ce),w(oe),t.unbindTexture()}}}let st=[],ot=[];function _t(M){if(M.samples>0){if(nt(M)===!1){let f=M.textures,L=M.width,F=M.height,q=i.COLOR_BUFFER_BIT,oe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(M),Y=f.length>1;if(Y)for(let he=0;he<f.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let K=M.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<f.length;he++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);let De=n.get(f[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,L,F,0,0,L,F,q,i.NEAREST),c===!0&&(st.length=0,ot.length=0,st.push(i.COLOR_ATTACHMENT0+he),M.depthBuffer&&M.resolveDepthBuffer===!1&&(st.push(oe),ot.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let he=0;he<f.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);let De=n.get(f[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let f=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[f])}}}function je(M){return Math.min(r.maxSamples,M.samples)}function nt(M){let f=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function C(M){let f=o.render.frame;d.get(M)!==f&&(d.set(M,f),M.update())}function it(M,f){let L=M.colorSpace,F=M.format,q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==Ks&&L!==Bi&&(ut.getTransfer(L)===vt?(F!==Bn||q!==gn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",L)),f}function Re(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=Z,this.getTextureUnits=ee,this.setTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=se,this.setTextureCube=le,this.rebindTextures=ke,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function by(i,e){function t(n,r=Bi){let s,o=ut.getTransfer(r);if(n===gn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xh)return i.BYTE;if(n===qh)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===xi)return i.HALF_FLOAT;if(n===jh)return i.ALPHA;if(n===$h)return i.RGB;if(n===Bn)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===Jh)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===ur)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===vo||n===yo||n===bo||n===Mo)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ml||n===Sl||n===Tl||n===El)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===wl||n===Cl||n===Rl||n===Pl||n===So||n===Il)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Al||n===wl)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rl)return s.COMPRESSED_R11_EAC;if(n===Pl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===So)return s.COMPRESSED_RG11_EAC;if(n===Il)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dl||n===Ll||n===Nl||n===Ol||n===Fl||n===Ul||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dl)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kl)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ql||n===Yl||n===Zl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ql)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===$l||n===To||n===Jl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===jl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var My=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sy=`
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

}`,_d=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:My,fragmentShader:Sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new lo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xd=class extends pi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,u=null,h=null,p=null,_=null,y=typeof XRWebGLBinding<"u",g=new _d,m={},w=t.getContextAttributes(),R=null,b=null,E=[],S=[],A=new dt,x=null,T=new Xt;T.viewport=new Pt;let D=new Xt;D.viewport=new Pt;let P=[T,D],U=new ul,Z=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ae=E[H];return ae===void 0&&(ae=new ms,E[H]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(H){let ae=E[H];return ae===void 0&&(ae=new ms,E[H]=ae),ae.getGripSpace()},this.getHand=function(H){let ae=E[H];return ae===void 0&&(ae=new ms,E[H]=ae),ae.getHandSpace()};function O(H){let ae=S.indexOf(H.inputSource);if(ae===-1)return;let re=E[ae];re!==void 0&&(re.update(H.inputSource,H.frame,l||o),re.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",k);for(let H=0;H<E.length;H++){let ae=S[H];ae!==null&&(S[H]=null,E[H].disconnect(ae))}Z=null,ee=null,g.reset();for(let H in m)delete m[H];e.setRenderTarget(R),p=null,h=null,u=null,r=null,b=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",X),r.addEventListener("inputsourceschange",k),w.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,me=null,Ie=null;w.depth&&(Ie=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=w.stencil?dr:fi,me=w.stencil?Ts:jn);let Me={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Tn(h.textureWidth,h.textureHeight,{format:Bn,type:gn,depthTexture:new Fi(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let re={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Tn(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(H){for(let ae=0;ae<H.removed.length;ae++){let re=H.removed[ae],me=S.indexOf(re);me>=0&&(S[me]=null,E[me].disconnect(re))}for(let ae=0;ae<H.added.length;ae++){let re=H.added[ae],me=S.indexOf(re);if(me===-1){for(let Me=0;Me<E.length;Me++)if(Me>=S.length){S.push(re),me=Me;break}else if(S[Me]===null){S[Me]=re,me=Me;break}if(me===-1)break}let Ie=E[me];Ie&&Ie.connect(re)}}let $=new V,B=new V;function se(H,ae,re){$.setFromMatrixPosition(ae.matrixWorld),B.setFromMatrixPosition(re.matrixWorld);let me=$.distanceTo(B),Ie=ae.projectionMatrix.elements,Me=re.projectionMatrix.elements,Ce=Ie[14]/(Ie[10]-1),Te=Ie[14]/(Ie[10]+1),qe=(Ie[9]+1)/Ie[5],ke=(Ie[9]-1)/Ie[5],we=(Ie[8]-1)/Ie[0],Ze=(Me[8]+1)/Me[0],st=Ce*we,ot=Ce*Ze,_t=me/(-we+Ze),je=_t*-we;if(ae.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(je),H.translateZ(_t),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ie[10]===-1)H.projectionMatrix.copy(ae.projectionMatrix),H.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let nt=Ce+_t,C=Te+_t,it=st-je,Re=ot+(me-je),M=qe*Te/C*nt,f=ke*Te/C*nt;H.projectionMatrix.makePerspective(it,Re,M,f,nt,C),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function le(H,ae){ae===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ae.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let ae=H.near,re=H.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(re=g.depthFar)),U.near=D.near=T.near=ae,U.far=D.far=T.far=re,(Z!==U.near||ee!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),Z=U.near,ee=U.far),U.layers.mask=H.layers.mask|6,T.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;let me=H.parent,Ie=U.cameras;le(U,me);for(let Me=0;Me<Ie.length;Me++)le(Ie[Me],me);Ie.length===2?se(U,T,D):U.projectionMatrix.copy(T.projectionMatrix),pe(H,U,me)};function pe(H,ae,re){re===null?H.matrix.copy(ae.matrixWorld):(H.matrix.copy(re.matrixWorld),H.matrix.invert(),H.matrix.multiply(ae.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ae.projectionMatrix),H.projectionMatrixInverse.copy(ae.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Za*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(H){c=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(H){return m[H]};let tt=null;function pt(H,ae){if(d=ae.getViewerPose(l||o),_=ae,d!==null){let re=d.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let me=!1;re.length!==U.cameras.length&&(U.cameras.length=0,me=!0);for(let Te=0;Te<re.length;Te++){let qe=re[Te],ke=null;if(p!==null)ke=p.getViewport(qe);else{let Ze=u.getViewSubImage(h,qe);ke=Ze.viewport,Te===0&&(e.setRenderTargetTextures(b,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(b))}let we=P[Te];we===void 0&&(we=new Xt,we.layers.enable(Te),we.viewport=new Pt,P[Te]=we),we.matrix.fromArray(qe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(qe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(ke.x,ke.y,ke.width,ke.height),Te===0&&(U.matrix.copy(we.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),me===!0&&U.cameras.push(we)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Te=u.getDepthInformation(re[0]);Te&&Te.isValid&&Te.texture&&g.init(Te,r.renderState)}if(Ie&&Ie.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Te=0;Te<re.length;Te++){let qe=re[Te].camera;if(qe){let ke=m[qe];ke||(ke=new ao,m[qe]=ke);let we=u.getCameraImage(qe);ke.sourceTexture=we}}}}for(let re=0;re<E.length;re++){let me=S[re],Ie=E[re];me!==null&&Ie!==void 0&&Ie.update(me,ae,l||o)}tt&&tt(H,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}let We=new em;We.setAnimationLoop(pt),this.setAnimationLoop=function(H){tt=H},this.dispose=function(){}}},Ty=new Ct,om=new Ye;om.set(-1,0,0,0,1,0,0,0,1);function Ey(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ed(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,w,R,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&p(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),_(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,w,R):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=e.get(m),R=w.envMap,b=w.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(Ty.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(om),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,w,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=R*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ay(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){let S=E.program;n.uniformBlockBinding(b,S)}function l(b,E){let S=r[b.id];S===void 0&&(g(b),S=d(b),r[b.id]=S,b.addEventListener("dispose",w));let A=E.program;n.updateUBOMapping(b,A);let x=e.render.frame;s[b.id]!==x&&(h(b),s[b.id]=x)}function d(b){let E=u();b.__bindingPointIndex=E;let S=i.createBuffer(),A=b.__size,x=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let E=r[b.id],S=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,T=S.length;x<T;x++){let D=S[x];if(Array.isArray(D))for(let P=0,U=D.length;P<U;P++)p(D[P],x,P,A);else p(D,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,E,S,A){if(y(b,E,S,A)===!0){let x=b.__offset,T=b.value;if(Array.isArray(T)){let D=0;for(let P=0;P<T.length;P++){let U=T[P],Z=m(U);_(U,b.__data,D),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,b.__data)}}function _(b,E,S){typeof b=="number"||typeof b=="boolean"?E[0]=b:b.isMatrix3?(E[0]=b.elements[0],E[1]=b.elements[1],E[2]=b.elements[2],E[3]=0,E[4]=b.elements[3],E[5]=b.elements[4],E[6]=b.elements[5],E[7]=0,E[8]=b.elements[6],E[9]=b.elements[7],E[10]=b.elements[8],E[11]=0):ArrayBuffer.isView(b)?E.set(new b.constructor(b.buffer,b.byteOffset,E.length)):b.toArray(E,S)}function y(b,E,S,A){let x=b.value,T=E+"_"+S;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{let D=A[T];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function g(b){let E=b.uniforms,S=0,A=16;for(let T=0,D=E.length;T<D;T++){let P=Array.isArray(E[T])?E[T]:[E[T]];for(let U=0,Z=P.length;U<Z;U++){let ee=P[U],O=Array.isArray(ee.value)?ee.value:[ee.value];for(let X=0,k=O.length;X<k;X++){let $=O[X],B=m($),se=S%A,le=se%B.boundary,pe=se+le;S+=le,pe!==0&&A-pe<B.storage&&(S+=A-pe),ee.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=S,S+=B.storage}}}let x=S%A;return x>0&&(S+=A-x),b.__size=S,b.__cache={},this}function m(b){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",b),E}function w(b){let E=b.target;E.removeEventListener("dispose",w);let S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function R(){for(let b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:R}}var wy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function Cy(){return yi===null&&(yi=new Ka(wy,16,16,ur,xi),yi.name="DFG_LUT",yi.minFilter=$t,yi.magFilter=$t,yi.wrapS=di,yi.wrapT=di,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var ws=class{constructor(e={}){let{canvas:t=Ap(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:p=gn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let y=p,g=new Set([bl,yl,vl]),m=new Set([gn,jn,Ss,Ts,_l,xl]),w=new Uint32Array(4),R=new Int32Array(4),b=new V,E=null,S=null,A=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,P=!1,U=null,Z=null,ee=null,O=null;this._outputColorSpace=Sn;let X=0,k=0,$=null,B=-1,se=null,le=new Pt,pe=new Pt,tt=null,pt=new ct(0),We=0,H=t.width,ae=t.height,re=1,me=null,Ie=null,Me=new Pt(0,0,H,ae),Ce=new Pt(0,0,H,ae),Te=!1,qe=new _s,ke=!1,we=!1,Ze=new Ct,st=new V,ot=new Pt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function nt(){return $===null?re:1}let C=n;function it(v,N){return t.getContext(v,N)}try{let v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",kn,!1),C===null){let N="webgl2";if(C=it(N,v),C===null)throw it(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Ve("WebGLRenderer: "+v.message),v}let Re,M,f,L,F,q,oe,ce,Y,K,he,De,ge,fe,Le,Be,Ue,I,de,te,ue,_e,ie;function be(){Re=new Ox(C),Re.init(),ue=new by(C,Re),M=new wx(C,Re,e,ue),f=new vy(C,Re),M.reversedDepthBuffer&&h&&f.buffers.depth.setReversed(!0),Z=C.createFramebuffer(),ee=C.createFramebuffer(),O=C.createFramebuffer(),L=new Bx(C),F=new sy,q=new yy(C,Re,f,F,M,ue,L),oe=new Nx(D),ce=new Gg(C),_e=new Ex(C,ce),Y=new Fx(C,ce,L,_e),K=new zx(C,Y,ce,_e,L),I=new kx(C,M,q),Le=new Cx(F),he=new ry(D,oe,Re,M,_e,Le),De=new Ey(D,F),ge=new ay,fe=new fy(Re),Ue=new Tx(D,oe,f,K,_,c),Be=new xy(D,K,M),ie=new Ay(C,L,M,f),de=new Ax(C,Re,L),te=new Ux(C,Re,L),L.programs=he.programs,D.capabilities=M,D.extensions=Re,D.properties=F,D.renderLists=ge,D.shadowMap=Be,D.state=f,D.info=L}be(),y!==gn&&(T=new Gx(y,t.width,t.height,a,r,s));let Ae=new xd(D,C);this.xr=Ae,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let v=Re.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Re.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(v){v!==void 0&&(re=v,this.setSize(H,ae,!1))},this.getSize=function(v){return v.set(H,ae)},this.setSize=function(v,N,W=!0){if(Ae.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}H=v,ae=N,t.width=Math.floor(v*re),t.height=Math.floor(N*re),W===!0&&(t.style.width=v+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(H*re,ae*re).floor()},this.setDrawingBufferSize=function(v,N,W){H=v,ae=N,re=W,t.width=Math.floor(v*W),t.height=Math.floor(N*W),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(y===gn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(le)},this.getViewport=function(v){return v.copy(Me)},this.setViewport=function(v,N,W,z){v.isVector4?Me.set(v.x,v.y,v.z,v.w):Me.set(v,N,W,z),f.viewport(le.copy(Me).multiplyScalar(re).round())},this.getScissor=function(v){return v.copy(Ce)},this.setScissor=function(v,N,W,z){v.isVector4?Ce.set(v.x,v.y,v.z,v.w):Ce.set(v,N,W,z),f.scissor(pe.copy(Ce).multiplyScalar(re).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(v){f.setScissorTest(Te=v)},this.setOpaqueSort=function(v){me=v},this.setTransparentSort=function(v){Ie=v},this.getClearColor=function(v){return v.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,W=!0){let z=0;if(v){let G=!1;if($!==null){let ye=$.texture.format;G=g.has(ye)}if(G){let ye=$.texture.type,Ee=m.has(ye),ve=Ue.getClearColor(),Pe=Ue.getClearAlpha(),Ne=ve.r,Ke=ve.g,at=ve.b;Ee?(w[0]=Ne,w[1]=Ke,w[2]=at,w[3]=Pe,C.clearBufferuiv(C.COLOR,0,w)):(R[0]=Ne,R[1]=Ke,R[2]=at,R[3]=Pe,C.clearBufferiv(C.COLOR,0,R))}else z|=C.COLOR_BUFFER_BIT}N&&(z|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),Ue.dispose(),ge.dispose(),fe.dispose(),F.dispose(),oe.dispose(),K.dispose(),_e.dispose(),ie.dispose(),he.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",yd),Ae.removeEventListener("sessionend",bd),pr.stop()};function Oe(v){v.preventDefault(),Qh("WebGLRenderer: Context Lost."),P=!0}function Je(){Qh("WebGLRenderer: Context Restored."),P=!1;let v=L.autoReset,N=Be.enabled,W=Be.autoUpdate,z=Be.needsUpdate,G=Be.type;be(),L.autoReset=v,Be.enabled=N,Be.autoUpdate=W,Be.needsUpdate=z,Be.type=G}function kn(v){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function _n(v){let N=v.target;N.removeEventListener("dispose",_n),gm(N)}function gm(v){_m(v),F.remove(v)}function _m(v){let N=F.get(v).programs;N!==void 0&&(N.forEach(function(W){he.releaseProgram(W)}),v.isShaderMaterial&&he.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,W,z,G,ye){N===null&&(N=_t);let Ee=G.isMesh&&G.matrixWorld.determinantAffine()<0,ve=ym(v,N,W,z,G);f.setMaterial(z,Ee);let Pe=W.index,Ne=1;if(z.wireframe===!0){if(Pe=Y.getWireframeAttribute(W),Pe===void 0)return;Ne=2}let Ke=W.drawRange,at=W.attributes.position,Fe=Ke.start*Ne,yt=(Ke.start+Ke.count)*Ne;ye!==null&&(Fe=Math.max(Fe,ye.start*Ne),yt=Math.min(yt,(ye.start+ye.count)*Ne)),Pe!==null?(Fe=Math.max(Fe,0),yt=Math.min(yt,Pe.count)):at!=null&&(Fe=Math.max(Fe,0),yt=Math.min(yt,at.count));let Lt=yt-Fe;if(Lt<0||Lt===1/0)return;_e.setup(G,z,ve,W,Pe);let It,Mt=de;if(Pe!==null&&(It=ce.get(Pe),Mt=te,Mt.setIndex(It)),G.isMesh)z.wireframe===!0?(f.setLineWidth(z.wireframeLinewidth*nt()),Mt.setMode(C.LINES)):Mt.setMode(C.TRIANGLES);else if(G.isLine){let Kt=z.linewidth;Kt===void 0&&(Kt=1),f.setLineWidth(Kt*nt()),G.isLineSegments?Mt.setMode(C.LINES):G.isLineLoop?Mt.setMode(C.LINE_LOOP):Mt.setMode(C.LINE_STRIP)}else G.isPoints?Mt.setMode(C.POINTS):G.isSprite&&Mt.setMode(C.TRIANGLES);if(G.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))Mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Kt=G._multiDrawStarts,Se=G._multiDrawCounts,xn=G._multiDrawCount,mt=Pe?ce.get(Pe).bytesPerElement:1,Cn=F.get(z).currentProgram.getUniforms();for(let Jn=0;Jn<xn;Jn++)Cn.setValue(C,"_gl_DrawID",Jn),Mt.render(Kt[Jn]/mt,Se[Jn])}else if(G.isInstancedMesh)Mt.renderInstances(Fe,Lt,G.count);else if(W.isInstancedBufferGeometry){let Kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,Kt);Mt.renderInstances(Fe,Lt,Se)}else Mt.render(Fe,Lt)};function vd(v,N,W){v.transparent===!0&&v.side===gi&&v.forceSinglePass===!1?(v.side=Jt,v.needsUpdate=!0,Io(v,N,W),v.side=Ni,v.needsUpdate=!0,Io(v,N,W),v.side=gi):Io(v,N,W)}this.compile=function(v,N,W=null){W===null&&(W=v),S=fe.get(W),S.init(N),x.push(S),W.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),v!==W&&v.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),S.setupLights();let z=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ye=G.material;if(ye)if(Array.isArray(ye))for(let Ee=0;Ee<ye.length;Ee++){let ve=ye[Ee];vd(ve,W,G),z.add(ve)}else vd(ye,W,G),z.add(ye)}),S=x.pop(),z},this.compileAsync=function(v,N,W=null){let z=this.compile(v,N,W);return new Promise(G=>{function ye(){if(z.forEach(function(Ee){F.get(Ee).currentProgram.isReady()&&z.delete(Ee)}),z.size===0){G(v);return}setTimeout(ye,10)}Re.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let hc=null;function xm(v){hc&&hc(v)}function yd(){pr.stop()}function bd(){pr.start()}let pr=new em;pr.setAnimationLoop(xm),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(v){hc=v,Ae.setAnimationLoop(v),v===null?pr.stop():pr.start()},Ae.addEventListener("sessionstart",yd),Ae.addEventListener("sessionend",bd),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(v,N);let W=Ae.enabled===!0&&Ae.isPresenting===!0,z=T!==null&&($===null||W)&&T.begin(D,$);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(N),N=Ae.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,N,$),S=fe.get(v,x.length),S.init(N),S.state.textureUnits=q.getTextureUnits(),x.push(S),Ze.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),qe.setFromProjectionMatrix(Ze,qn,N.reversedDepth),we=this.localClippingEnabled,ke=Le.init(this.clippingPlanes,we),E=ge.get(v,A.length),E.init(),A.push(E),Ae.enabled===!0&&Ae.isPresenting===!0){let Ee=D.xr.getDepthSensingMesh();Ee!==null&&dc(Ee,N,-1/0,D.sortObjects)}dc(v,N,0,D.sortObjects),E.finish(),D.sortObjects===!0&&E.sort(me,Ie,N.reversedDepth),je=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,je&&Ue.addToRenderList(E,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&Le.beginShadows();let G=S.state.shadowsArray;if(Be.render(G,v,N),ke===!0&&Le.endShadows(),(z&&T.hasRenderPass())===!1){let Ee=E.opaque,ve=E.transmissive;if(S.setupLights(),N.isArrayCamera){let Pe=N.cameras;if(ve.length>0)for(let Ne=0,Ke=Pe.length;Ne<Ke;Ne++){let at=Pe[Ne];Sd(Ee,ve,v,at)}je&&Ue.render(v);for(let Ne=0,Ke=Pe.length;Ne<Ke;Ne++){let at=Pe[Ne];Md(E,v,at,at.viewport)}}else ve.length>0&&Sd(Ee,ve,v,N),je&&Ue.render(v),Md(E,v,N)}$!==null&&k===0&&(q.updateMultisampleRenderTarget($),q.updateRenderTargetMipmap($)),z&&T.end(D),v.isScene===!0&&v.onAfterRender(D,v,N),_e.resetDefaultState(),B=-1,se=null,x.pop(),x.length>0?(S=x[x.length-1],q.setTextureUnits(S.state.textureUnits),ke===!0&&Le.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,U!==null&&U.renderEnd()};function dc(v,N,W,z){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLightProbeGrid)S.pushLightProbeGrid(v);else if(v.isLight)S.pushLight(v),v.castShadow&&S.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||qe.intersectsSprite(v)){z&&ot.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ze);let Ee=K.update(v),ve=v.material;ve.visible&&E.push(v,Ee,ve,W,ot.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||qe.intersectsObject(v))){let Ee=K.update(v),ve=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ot.copy(v.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ot.copy(Ee.boundingSphere.center)),ot.applyMatrix4(v.matrixWorld).applyMatrix4(Ze)),Array.isArray(ve)){let Pe=Ee.groups;for(let Ne=0,Ke=Pe.length;Ne<Ke;Ne++){let at=Pe[Ne],Fe=ve[at.materialIndex];Fe&&Fe.visible&&E.push(v,Ee,Fe,W,ot.z,at)}}else ve.visible&&E.push(v,Ee,ve,W,ot.z,null)}}let ye=v.children;for(let Ee=0,ve=ye.length;Ee<ve;Ee++)dc(ye[Ee],N,W,z)}function Md(v,N,W,z){let{opaque:G,transmissive:ye,transparent:Ee}=v;S.setupLightsView(W),ke===!0&&Le.setGlobalState(D.clippingPlanes,W),z&&f.viewport(le.copy(z)),G.length>0&&Po(G,N,W),ye.length>0&&Po(ye,N,W),Ee.length>0&&Po(Ee,N,W),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function Sd(v,N,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[z.id]===void 0){let Fe=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[z.id]=new Tn(1,1,{generateMipmaps:!0,type:Fe?xi:gn,minFilter:hr,samples:Math.max(4,M.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let ye=S.state.transmissionRenderTarget[z.id],Ee=z.viewport||le;ye.setSize(Ee.z*D.transmissionResolutionScale,Ee.w*D.transmissionResolutionScale);let ve=D.getRenderTarget(),Pe=D.getActiveCubeFace(),Ne=D.getActiveMipmapLevel();D.setRenderTarget(ye),D.getClearColor(pt),We=D.getClearAlpha(),We<1&&D.setClearColor(16777215,.5),D.clear(),je&&Ue.render(W);let Ke=D.toneMapping;D.toneMapping=Zn;let at=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),ke===!0&&Le.setGlobalState(D.clippingPlanes,z),Po(v,W,z),q.updateMultisampleRenderTarget(ye),q.updateRenderTargetMipmap(ye),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let yt=0,Lt=N.length;yt<Lt;yt++){let It=N[yt],{object:Mt,geometry:Kt,material:Se,group:xn}=It;if(Se.side===gi&&Mt.layers.test(z.layers)){let mt=Se.side;Se.side=Jt,Se.needsUpdate=!0,Td(Mt,W,z,Kt,Se,xn),Se.side=mt,Se.needsUpdate=!0,Fe=!0}}Fe===!0&&(q.updateMultisampleRenderTarget(ye),q.updateRenderTargetMipmap(ye))}D.setRenderTarget(ve,Pe,Ne),D.setClearColor(pt,We),at!==void 0&&(z.viewport=at),D.toneMapping=Ke}function Po(v,N,W){let z=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ye=v.length;G<ye;G++){let Ee=v[G],{object:ve,geometry:Pe,group:Ne}=Ee,Ke=Ee.material;Ke.allowOverride===!0&&z!==null&&(Ke=z),ve.layers.test(W.layers)&&Td(ve,N,W,Pe,Ke,Ne)}}function Td(v,N,W,z,G,ye){v.onBeforeRender(D,N,W,z,G,ye),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(D,N,W,z,v,ye),G.transparent===!0&&G.side===gi&&G.forceSinglePass===!1?(G.side=Jt,G.needsUpdate=!0,D.renderBufferDirect(W,N,z,G,v,ye),G.side=Ni,G.needsUpdate=!0,D.renderBufferDirect(W,N,z,G,v,ye),G.side=gi):D.renderBufferDirect(W,N,z,G,v,ye),v.onAfterRender(D,N,W,z,G,ye)}function Io(v,N,W){N.isScene!==!0&&(N=_t);let z=F.get(v),G=S.state.lights,ye=S.state.shadowsArray,Ee=G.state.version,ve=he.getParameters(v,G.state,ye,N,W,S.state.lightProbeGridArray),Pe=he.getProgramCacheKey(ve),Ne=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let Ke=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=oe.get(v.envMap||z.environment,Ke),z.envMapRotation=z.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Ne===void 0&&(v.addEventListener("dispose",_n),Ne=new Map,z.programs=Ne);let at=Ne.get(Pe);if(at!==void 0){if(z.currentProgram===at&&z.lightsStateVersion===Ee)return Ad(v,ve),at}else ve.uniforms=he.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,W,ve),v.onBeforeCompile(ve,D),at=he.acquireProgram(ve,Pe),Ne.set(Pe,at),z.uniforms=ve.uniforms;let Fe=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Fe.clippingPlanes=Le.uniform),Ad(v,ve),z.needsLights=Mm(v),z.lightsStateVersion=Ee,z.needsLights&&(Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=S.state.lightProbeGridArray.length>0,z.currentProgram=at,z.uniformsList=null,at}function Ed(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=As.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function Ad(v,N){let W=F.get(v);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function vm(v,N){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;b.setFromMatrixPosition(N.matrixWorld);for(let W=0,z=v.length;W<z;W++){let G=v[W];if(G.texture!==null&&G.boundingBox.containsPoint(b))return G}return null}function ym(v,N,W,z,G){N.isScene!==!0&&(N=_t),q.resetTextureUnits();let ye=N.fog,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,ve=$===null?D.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ut.workingColorSpace,Pe=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ne=oe.get(z.envMap||Ee,Pe),Ke=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,at=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Fe=!!W.morphAttributes.position,yt=!!W.morphAttributes.normal,Lt=!!W.morphAttributes.color,It=Zn;z.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(It=D.toneMapping);let Mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Kt=Mt!==void 0?Mt.length:0,Se=F.get(z),xn=S.state.lights;if(ke===!0&&(we===!0||v!==se)){let Tt=v===se&&z.id===B;Le.setState(z,v,Tt)}let mt=!1;z.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==xn.state.version||Se.outputColorSpace!==ve||G.isBatchedMesh&&Se.batching===!1||!G.isBatchedMesh&&Se.batching===!0||G.isBatchedMesh&&Se.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Se.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Se.instancing===!1||!G.isInstancedMesh&&Se.instancing===!0||G.isSkinnedMesh&&Se.skinning===!1||!G.isSkinnedMesh&&Se.skinning===!0||G.isInstancedMesh&&Se.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Se.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Se.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Se.instancingMorph===!1&&G.morphTexture!==null||Se.envMap!==Ne||z.fog===!0&&Se.fog!==ye||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Le.numPlanes||Se.numIntersection!==Le.numIntersection)||Se.vertexAlphas!==Ke||Se.vertexTangents!==at||Se.morphTargets!==Fe||Se.morphNormals!==yt||Se.morphColors!==Lt||Se.toneMapping!==It||Se.morphTargetsCount!==Kt||!!Se.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Se.__version=z.version);let Cn=Se.currentProgram;mt===!0&&(Cn=Io(z,N,G),U&&z.isNodeMaterial&&U.onUpdateProgram(z,Cn,Se));let Jn=!1,ki=!1,Fr=!1,St=Cn.getUniforms(),Nt=Se.uniforms;if(f.useProgram(Cn.program)&&(Jn=!0,ki=!0,Fr=!0),z.id!==B&&(B=z.id,ki=!0),Se.needsLights){let Tt=vm(S.state.lightProbeGridArray,G);Se.lightProbeGrid!==Tt&&(Se.lightProbeGrid=Tt,ki=!0)}if(Jn||se!==v){f.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),St.setValue(C,"projectionMatrix",v.projectionMatrix),St.setValue(C,"viewMatrix",v.matrixWorldInverse);let Vi=St.map.cameraPosition;Vi!==void 0&&Vi.setValue(C,st.setFromMatrixPosition(v.matrixWorld)),M.logarithmicDepthBuffer&&St.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&St.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),se!==v&&(se=v,ki=!0,Fr=!0)}if(Se.needsLights&&(xn.state.directionalShadowMap.length>0&&St.setValue(C,"directionalShadowMap",xn.state.directionalShadowMap,q),xn.state.spotShadowMap.length>0&&St.setValue(C,"spotShadowMap",xn.state.spotShadowMap,q),xn.state.pointShadowMap.length>0&&St.setValue(C,"pointShadowMap",xn.state.pointShadowMap,q)),G.isSkinnedMesh){St.setOptional(C,G,"bindMatrix"),St.setOptional(C,G,"bindMatrixInverse");let Tt=G.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),St.setValue(C,"boneTexture",Tt.boneTexture,q))}G.isBatchedMesh&&(St.setOptional(C,G,"batchingTexture"),St.setValue(C,"batchingTexture",G._matricesTexture,q),St.setOptional(C,G,"batchingIdTexture"),St.setValue(C,"batchingIdTexture",G._indirectTexture,q),St.setOptional(C,G,"batchingColorTexture"),G._colorsTexture!==null&&St.setValue(C,"batchingColorTexture",G._colorsTexture,q));let zi=W.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&I.update(G,W,Cn),(ki||Se.receiveShadow!==G.receiveShadow)&&(Se.receiveShadow=G.receiveShadow,St.setValue(C,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(Nt.envMapIntensity.value=N.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=Cy()),ki){if(St.setValue(C,"toneMappingExposure",D.toneMappingExposure),Se.needsLights&&bm(Nt,Fr),ye&&z.fog===!0&&De.refreshFogUniforms(Nt,ye),De.refreshMaterialUniforms(Nt,z,re,ae,S.state.transmissionRenderTarget[v.id]),Se.needsLights&&Se.lightProbeGrid){let Tt=Se.lightProbeGrid;Nt.probesSH.value=Tt.texture,Nt.probesMin.value.copy(Tt.boundingBox.min),Nt.probesMax.value.copy(Tt.boundingBox.max),Nt.probesResolution.value.copy(Tt.resolution)}As.upload(C,Ed(Se),Nt,q)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(As.upload(C,Ed(Se),Nt,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&St.setValue(C,"center",G.center),St.setValue(C,"modelViewMatrix",G.modelViewMatrix),St.setValue(C,"normalMatrix",G.normalMatrix),St.setValue(C,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let Tt=z.uniformsGroups;for(let Vi=0,Ur=Tt.length;Vi<Ur;Vi++){let wd=Tt[Vi];ie.update(wd,Cn),ie.bind(wd,Cn)}}return Cn}function bm(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function Mm(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(v,N,W){let z=F.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),F.get(v.texture).__webglTexture=N,F.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let W=F.get(v);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,W=0){$=v,X=N,k=W;let z=null,G=!1,ye=!1;if(v){let ve=F.get(v);if(ve.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(C.FRAMEBUFFER,ve.__webglFramebuffer),le.copy(v.viewport),pe.copy(v.scissor),tt=v.scissorTest,f.viewport(le),f.scissor(pe),f.setScissorTest(tt),B=-1;return}else if(ve.__webglFramebuffer===void 0)q.setupRenderTarget(v);else if(ve.__hasExternalTextures)q.rebindTextures(v,F.get(v.texture).__webglTexture,F.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ke=v.depthTexture;if(ve.__boundDepthTexture!==Ke){if(Ke!==null&&F.has(Ke)&&(v.width!==Ke.image.width||v.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(v)}}let Pe=v.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ye=!0);let Ne=F.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?z=Ne[N][W]:z=Ne[N],G=!0):v.samples>0&&q.useMultisampledRTT(v)===!1?z=F.get(v).__webglMultisampledFramebuffer:Array.isArray(Ne)?z=Ne[W]:z=Ne,le.copy(v.viewport),pe.copy(v.scissor),tt=v.scissorTest}else le.copy(Me).multiplyScalar(re).floor(),pe.copy(Ce).multiplyScalar(re).floor(),tt=Te;if(W!==0&&(z=Z),f.bindFramebuffer(C.FRAMEBUFFER,z)&&f.drawBuffers(v,z),f.viewport(le),f.scissor(pe),f.setScissorTest(tt),G){let ve=F.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,W)}else if(ye){let ve=N;for(let Pe=0;Pe<v.textures.length;Pe++){let Ne=F.get(v.textures[Pe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Pe,Ne.__webglTexture,W,ve)}}else if(v!==null&&W!==0){let ve=F.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ve.__webglTexture,W)}B=-1},this.readRenderTargetPixels=function(v,N,W,z,G,ye,Ee,ve=0){if(!(v&&v.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=F.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){f.bindFramebuffer(C.FRAMEBUFFER,Pe);try{let Ne=v.textures[ve],Ke=Ne.format,at=Ne.type;if(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ve),!M.textureFormatReadable(Ke)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!M.textureTypeReadable(at)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-z&&W>=0&&W<=v.height-G&&C.readPixels(N,W,z,G,ue.convert(Ke),ue.convert(at),ye)}finally{let Ne=$!==null?F.get($).__webglFramebuffer:null;f.bindFramebuffer(C.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(v,N,W,z,G,ye,Ee,ve=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=F.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe)if(N>=0&&N<=v.width-z&&W>=0&&W<=v.height-G){f.bindFramebuffer(C.FRAMEBUFFER,Pe);let Ne=v.textures[ve],Ke=Ne.format,at=Ne.type;if(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ve),!M.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!M.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Fe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Fe),C.bufferData(C.PIXEL_PACK_BUFFER,ye.byteLength,C.STREAM_READ),C.readPixels(N,W,z,G,ue.convert(Ke),ue.convert(at),0);let yt=$!==null?F.get($).__webglFramebuffer:null;f.bindFramebuffer(C.FRAMEBUFFER,yt);let Lt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Cp(C,Lt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Fe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ye),C.deleteBuffer(Fe),C.deleteSync(Lt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,W=0){let z=Math.pow(2,-W),G=Math.floor(v.image.width*z),ye=Math.floor(v.image.height*z),Ee=N!==null?N.x:0,ve=N!==null?N.y:0;q.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,W,0,0,Ee,ve,G,ye),f.unbindTexture()},this.copyTextureToTexture=function(v,N,W=null,z=null,G=0,ye=0){let Ee,ve,Pe,Ne,Ke,at,Fe,yt,Lt,It=v.isCompressedTexture?v.mipmaps[ye]:v.image;if(W!==null)Ee=W.max.x-W.min.x,ve=W.max.y-W.min.y,Pe=W.isBox3?W.max.z-W.min.z:1,Ne=W.min.x,Ke=W.min.y,at=W.isBox3?W.min.z:0;else{let Nt=Math.pow(2,-G);Ee=Math.floor(It.width*Nt),ve=Math.floor(It.height*Nt),v.isDataArrayTexture?Pe=It.depth:v.isData3DTexture?Pe=Math.floor(It.depth*Nt):Pe=1,Ne=0,Ke=0,at=0}z!==null?(Fe=z.x,yt=z.y,Lt=z.z):(Fe=0,yt=0,Lt=0);let Mt=ue.convert(N.format),Kt=ue.convert(N.type),Se;N.isData3DTexture?(q.setTexture3D(N,0),Se=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(q.setTexture2DArray(N,0),Se=C.TEXTURE_2D_ARRAY):(q.setTexture2D(N,0),Se=C.TEXTURE_2D),f.activeTexture(C.TEXTURE0),f.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),f.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),f.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);let xn=f.getParameter(C.UNPACK_ROW_LENGTH),mt=f.getParameter(C.UNPACK_IMAGE_HEIGHT),Cn=f.getParameter(C.UNPACK_SKIP_PIXELS),Jn=f.getParameter(C.UNPACK_SKIP_ROWS),ki=f.getParameter(C.UNPACK_SKIP_IMAGES);f.pixelStorei(C.UNPACK_ROW_LENGTH,It.width),f.pixelStorei(C.UNPACK_IMAGE_HEIGHT,It.height),f.pixelStorei(C.UNPACK_SKIP_PIXELS,Ne),f.pixelStorei(C.UNPACK_SKIP_ROWS,Ke),f.pixelStorei(C.UNPACK_SKIP_IMAGES,at);let Fr=v.isDataArrayTexture||v.isData3DTexture,St=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let Nt=F.get(v),zi=F.get(N),Tt=F.get(Nt.__renderTarget),Vi=F.get(zi.__renderTarget);f.bindFramebuffer(C.READ_FRAMEBUFFER,Tt.__webglFramebuffer),f.bindFramebuffer(C.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Ur=0;Ur<Pe;Ur++)Fr&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,F.get(v).__webglTexture,G,at+Ur),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,F.get(N).__webglTexture,ye,Lt+Ur)),C.blitFramebuffer(Ne,Ke,Ee,ve,Fe,yt,Ee,ve,C.DEPTH_BUFFER_BIT,C.NEAREST);f.bindFramebuffer(C.READ_FRAMEBUFFER,null),f.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||F.has(v)){let Nt=F.get(v),zi=F.get(N);f.bindFramebuffer(C.READ_FRAMEBUFFER,ee),f.bindFramebuffer(C.DRAW_FRAMEBUFFER,O);for(let Tt=0;Tt<Pe;Tt++)Fr?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Nt.__webglTexture,G,at+Tt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Nt.__webglTexture,G),St?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,zi.__webglTexture,ye,Lt+Tt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,zi.__webglTexture,ye),G!==0?C.blitFramebuffer(Ne,Ke,Ee,ve,Fe,yt,Ee,ve,C.COLOR_BUFFER_BIT,C.NEAREST):St?C.copyTexSubImage3D(Se,ye,Fe,yt,Lt+Tt,Ne,Ke,Ee,ve):C.copyTexSubImage2D(Se,ye,Fe,yt,Ne,Ke,Ee,ve);f.bindFramebuffer(C.READ_FRAMEBUFFER,null),f.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else St?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(Se,ye,Fe,yt,Lt,Ee,ve,Pe,Mt,Kt,It.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Se,ye,Fe,yt,Lt,Ee,ve,Pe,Mt,It.data):C.texSubImage3D(Se,ye,Fe,yt,Lt,Ee,ve,Pe,Mt,Kt,It):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ye,Fe,yt,Ee,ve,Mt,Kt,It.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ye,Fe,yt,It.width,It.height,Mt,It.data):C.texSubImage2D(C.TEXTURE_2D,ye,Fe,yt,Ee,ve,Mt,Kt,It);f.pixelStorei(C.UNPACK_ROW_LENGTH,xn),f.pixelStorei(C.UNPACK_IMAGE_HEIGHT,mt),f.pixelStorei(C.UNPACK_SKIP_PIXELS,Cn),f.pixelStorei(C.UNPACK_SKIP_ROWS,Jn),f.pixelStorei(C.UNPACK_SKIP_IMAGES,ki),ye===0&&N.generateMipmaps&&C.generateMipmap(Se),f.unbindTexture()},this.initRenderTarget=function(v){F.get(v).__webglFramebuffer===void 0&&q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?q.setTextureCube(v,0):v.isData3DTexture?q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?q.setTexture2DArray(v,0):q.setTexture2D(v,0),f.unbindTexture()},this.resetState=function(){X=0,k=0,$=null,f.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var Ry=["sectionEl"],Py=["bgCanvas"],Iy=["axisLine"],Dy=["track"],Ly=["viewport"],Ny=["node"],Oy=(i,e)=>e.title.en;function Fy(i,e){if(i&1&&(j(0,"span",33),ne(1),J()),i&2){let t=lt(2);Q(),ze(t.tab()==="pro"?t.i18n.t("parcours.badge_current"):t.i18n.t("parcours.badge_progress"))}}function Uy(i,e){if(i&1&&(j(0,"a",36),At(1,"img",41),j(2,"span",42)(3,"mat-icon"),ne(4,"open_in_new"),J()()()),i&2){let t=lt().$implicit,n=lt();xt("href",t.credentialUrl,Rn),hn("aria-label",n.i18n.t("parcours.cert_preview")+" "+t.title[n.i18n.currentLang()]),Q(),xt("src",t.previewUrl,Rn)("alt",t.title[n.i18n.currentLang()])}}function By(i,e){if(i&1&&(j(0,"a",37)(1,"mat-icon"),ne(2,"picture_as_pdf"),J(),j(3,"span"),ne(4,"PDF"),J()()),i&2){let t=lt().$implicit,n=lt();xt("href",t.credentialUrl,Rn),hn("aria-label",n.i18n.t("parcours.cert_preview")+" "+t.title[n.i18n.currentLang()])}}function ky(i,e){if(i&1&&(j(0,"a",39)(1,"mat-icon"),ne(2,"open_in_new"),J(),ne(3),J()),i&2){let t=lt().$implicit,n=lt();xt("href",t.credentialUrl,Rn),Q(3),Ft(" ",n.i18n.t("parcours.cert_preview")," ")}}function zy(i,e){if(i&1&&(j(0,"span",43),ne(1),J()),i&2){let t=e.$implicit;Q(),ze(t)}}function Vy(i,e){if(i&1&&(j(0,"div",40),dn(1,zy,2,1,"span",43,Lo),J()),i&2){let t=lt().$implicit;Q(),un(t.tags)}}function Gy(i,e){if(i&1){let t=Ps();j(0,"div",27,5)(2,"div",28),Et("click",function(){let r=Hi(t).$index,s=lt();return Wi(s.scrollToNode(r))}),At(3,"div",29),J(),j(4,"div",30)(5,"div",31)(6,"span",32),ne(7),J(),qt(8,Fy,2,1,"span",33),J(),j(9,"h3",34),ne(10),J(),j(11,"p",35)(12,"mat-icon"),ne(13),J(),ne(14),J(),qt(15,Uy,5,4,"a",36)(16,By,5,2,"a",37),j(17,"p",38),ne(18),J(),qt(19,ky,4,2,"a",39),qt(20,Vy,3,0,"div",40),J()()}if(i&2){let t=e.$implicit,n=e.$index,r=lt();en("timeline-node--active",r.activeIdx()===n)("timeline-node--academic",r.tab()==="academic")("timeline-node--certifications",r.tab()==="certifications"),Q(7),ze(t.year[r.i18n.currentLang()]),Q(),Yt(t.current?8:-1),Q(2),ze(t.title[r.i18n.currentLang()]),Q(3),ze(r.tab()==="pro"?"business":r.tab()==="academic"?"location_city":"verified"),Q(),Ft(" ",t.place[r.i18n.currentLang()]," "),Q(),Yt(t.previewType==="image"&&t.previewUrl?15:t.previewType==="pdf"?16:-1),Q(3),ze(t.description[r.i18n.currentLang()]),Q(),Yt(t.credentialUrl?19:-1),Q(),Yt(t.tags?20:-1)}}Ec.registerPlugin(zo);var Hy=[{year:{en:"May 2025 \u2013 August 2025",fr:"Mai 2025 \u2013 Ao\xFBt 2025"},title:{en:"Software Developer Intern",fr:"D\xE9veloppeur logiciel"},place:{en:"ORABANK-TOGO \u2014 Lom\xE9",fr:"ORABANK-TOGO \u2014 Lom\xE9"},description:{en:"Software development internship at ORABANK-TOGO. Built a web application that automates change request file creation with a configurable approval workflow.",fr:"Stage en programmation logiciel \xE0 ORABANK-TOGO. D\xE9veloppement d'une application web d'automatisation de la cr\xE9ation de fiche de changement avec un workflow d'approbation param\xE9trable."},tags:["Angular","Spring Boot","Workflow"],current:!0},{year:{en:"July 2024 \u2013 August 2024",fr:"Juillet 2024 \u2013 Ao\xFBt 2024"},title:{en:"Software Developer Intern",fr:"D\xE9veloppeur logiciel"},place:{en:"ORABANK-TOGO \u2014 Lom\xE9",fr:"ORABANK-TOGO \u2014 Lom\xE9"},description:{en:"Software development internship at ORABANK-TOGO. Developed a banking reconciliation web application with Angular and Spring Boot.",fr:"Stage en programmation logiciel \xE0 ORABANK-TOGO. D\xE9veloppement d'une application web de rapprochements bancaires avec les technologies Angular et Spring Boot."},tags:["Angular","Spring Boot","Banking"]},{year:{en:"July 2023 \u2013 August 2023",fr:"Juillet 2023 \u2013 Ao\xFBt 2023"},title:{en:"IT Technician Intern",fr:"Technicien Informatique"},place:{en:"Clinique BIASA \u2014 Lom\xE9",fr:"Clinique BIASA \u2014 Lom\xE9"},description:{en:"Software development internship at Clinique BIASA. Provided user support and resolved technical issues.",fr:"Stage en programmation logiciel \xE0 la Clinique BIASA. Support utilisateur et r\xE9solution de probl\xE8mes techniques."},tags:["Support","IT","Troubleshooting"]}],Wy=[{year:{en:"2025 \u2013 2027 (In progress)",fr:"2025 \u2013 2027 (En cours)"},title:{en:"Master's in AI and Big Data",fr:"Master en IA et Big Data"},place:{en:"EPL \u2014 Lom\xE9",fr:"EPL \u2014 Lom\xE9"},description:{en:"Master's program focused on artificial intelligence and Big Data.",fr:"Master en IA et Big Data."},tags:["IA","Big Data"],current:!0},{year:{en:"2024 \u2013 2025",fr:"2024 \u2013 2025"},title:{en:"Bachelor's Degree in Computer Engineering",fr:"Licence"},place:{en:"IAI-TOGO \u2014 Lom\xE9",fr:"IAI-TOGO \u2014 Lom\xE9"},description:{en:"Diploma in computer engineering, BAC+3 level.",fr:"Dipl\xF4me d'Ing\xE9nieur des Travaux Informatiques BAC+3."},tags:["Informatique","BAC+3"]},{year:{en:"2022 \u2013 2023",fr:"2022 \u2013 2023"},title:{en:"BAC 2 \u2014 Series C",fr:"BAC 2 \u2014 S\xE9rie C"},place:{en:"Lyc\xE9e moderne d'Adidogom\xE9 1",fr:"Lyc\xE9e moderne d'Adidogom\xE9 1"},description:{en:"Scientific track, Series C.",fr:"S\xE9rie C."},tags:["Sciences","Math\xE9matiques"]}],Xy=[{year:{en:"Certificate",fr:"Certificat"},title:{en:"CCNAv7: Switching, Routing, and Wireless Essentials",fr:"CCNAv7 : Switching, Routing, and Wireless Essentials"},place:{en:"Cisco Networking Academy",fr:"Cisco Networking Academy"},description:{en:"Networking certification focused on switching, routing and wireless essentials.",fr:"Certification r\xE9seau ax\xE9e sur les notions essentielles de commutation, routage et r\xE9seaux sans fil."},tags:["Cisco","CCNA","Networking"],credentialUrl:"documents/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.png",previewUrl:"documents/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.png",previewType:"image"},{year:{en:"Certificate",fr:"Certificat"},title:{en:"CCNAv7: Introduction to Networks",fr:"CCNAv7 : Introduction to Networks"},place:{en:"Cisco Networking Academy",fr:"Cisco Networking Academy"},description:{en:"Networking certification covering network fundamentals and introductory CCNA concepts.",fr:"Certification r\xE9seau couvrant les fondamentaux des r\xE9seaux et les premi\xE8res notions CCNA."},tags:["Cisco","CCNA","Networks"],credentialUrl:"documents/CCNA-_Introduction_to_Networks_certificate.png",previewUrl:"documents/CCNA-_Introduction_to_Networks_certificate.png",previewType:"image"},{year:{en:"Certificate",fr:"Certificat"},title:{en:"Certificate of Completion for Free AI Video Generation Course",fr:"Certificate of Completion for Free AI Video Generation Course"},place:{en:"AI Video Generation Course",fr:"AI Video Generation Course"},description:{en:"Course completion certificate focused on AI-assisted video generation.",fr:"Certificat de fin de formation autour de la g\xE9n\xE9ration vid\xE9o assist\xE9e par IA."},tags:["AI","Video","Generation"],credentialUrl:"documents/Free%20AI%20Video%20Generation%20Course_Certificate.png",previewUrl:"documents/Free%20AI%20Video%20Generation%20Course_Certificate.png",previewType:"image"},{year:{en:"Certificate",fr:"Certificat"},title:{en:"Certificate of Completion for Angular Basics",fr:"Certificate of Completion for Angular Basics"},place:{en:"Angular Training",fr:"Formation Angular"},description:{en:"Angular basics certificate covering the fundamentals of modern Angular development.",fr:"Certificat Angular basics couvrant les bases du d\xE9veloppement Angular moderne."},tags:["Angular","Frontend","TypeScript"],credentialUrl:"documents/ANGULAR_CERTIFICATION.png",previewUrl:"documents/ANGULAR_CERTIFICATION.png",previewType:"image"}];var ac=class i{get nodeWidth(){return typeof window>"u"?340:window.innerWidth<600?280:340}sectionEl;bgCanvas;axisLine;track;viewport;nodeRefs;tab=on("pro");isOpen=on(!1);scrollLeft=on(0);i18n=He(ii);toggleOpen(){this.isOpen.update(e=>!e),setTimeout(()=>zo.refresh(),300)}items=tn(()=>this.tab()==="pro"?Hy:this.tab()==="academic"?Wy:Xy);atStart=tn(()=>this.scrollLeft()<=0);atEnd=tn(()=>{let e=(this.items().length-1)*this.nodeWidth;return this.scrollLeft()>=e-10});activeIdx=tn(()=>Math.round(this.scrollLeft()/this.nodeWidth));threeRenderer;threeAnimId;threeGeo;threeMat;st;wheelCleanup;constructor(){kr(()=>{this.tab(),this.viewport?.nativeElement&&(this.viewport.nativeElement.scrollLeft=0),this.scrollLeft.set(0),setTimeout(()=>{this.resetAxis(),this.runAnime()},80)})}ngAfterViewInit(){setTimeout(()=>{this.initThree(),this.initGsap(),this.runAnime(),this.initWheel()},150)}initThree(){let e=this.bgCanvas.nativeElement,t=e.parentElement.clientWidth,n=e.parentElement.clientHeight;e.width=t,e.height=n;let r=new ws({canvas:e,alpha:!0,antialias:!1});r.setSize(t,n),this.threeRenderer=r;let s=new Pr,o=new Xt(60,t/n,1,1e3);o.position.z=300;let a=120,c=new Float32Array(a*3),l=new Float32Array(a*2);for(let _=0;_<a;_++)c[_*3]=(Math.random()-.5)*t*2,c[_*3+1]=(Math.random()-.5)*n*2,c[_*3+2]=(Math.random()-.5)*200,l[_*2]=(Math.random()-.5)*.3,l[_*2+1]=(Math.random()-.5)*.3;let d=new En;d.setAttribute("position",new ln(c,3));let u=new xs({color:5082096,size:2,transparent:!0,opacity:.45});this.threeGeo=d,this.threeMat=u;let h=new so(d,u);s.add(h);let p=()=>{this.threeAnimId=requestAnimationFrame(p);let _=d.attributes.position.array;for(let y=0;y<a;y++)_[y*3]+=l[y*2],_[y*3+1]+=l[y*2+1],Math.abs(_[y*3])>t&&(_[y*3]*=-.9),Math.abs(_[y*3+1])>n&&(_[y*3+1]*=-.9);d.attributes.position.needsUpdate=!0,r.render(s,o)};p()}initGsap(){this.st=zo.create({trigger:this.sectionEl.nativeElement,start:"top 75%",once:!0,onEnter:()=>this.resetAxis()})}resetAxis(){let e=this.axisLine?.nativeElement;e&&Ec.fromTo(e,{scaleX:0,transformOrigin:"left center"},{scaleX:1,duration:1.2,ease:"power3.inOut"})}runAnime(){let e=this.nodeRefs?.toArray().map(t=>t.nativeElement);e?.length&&(e.forEach(t=>{t.style.opacity="0",t.style.transform="translateY(20px)"}),Yc(e,{opacity:[0,1],translateY:[20,0],delay:jc(120,{start:400}),duration:700,ease:"outExpo"}))}initWheel(){let e=this.viewport.nativeElement,t=n=>{if(Math.abs(n.deltaX)>Math.abs(n.deltaY)||n.ctrlKey)return;let r=n.deltaY>0?1:-1,s=e.scrollWidth-e.clientWidth;(r===1?e.scrollLeft<s-2:e.scrollLeft>2)&&(n.preventDefault(),this.pan(r))};e.addEventListener("wheel",t,{passive:!1}),this.wheelCleanup=()=>e.removeEventListener("wheel",t)}navigate(e){this.pan(e)}pan(e){if(!this.viewport?.nativeElement)return;this.viewport.nativeElement.scrollBy({left:e*this.nodeWidth,behavior:"smooth"})}switchTab(e){this.tab.set(e)}scrollToNode(e){if(!this.viewport?.nativeElement)return;let t=e*this.nodeWidth;this.viewport.nativeElement.scrollTo({left:t,behavior:"smooth"})}onViewportScroll(e){let t=e.target;this.scrollLeft.set(t.scrollLeft)}ngOnDestroy(){this.st?.kill(),this.wheelCleanup?.(),cancelAnimationFrame(this.threeAnimId),this.threeGeo?.dispose(),this.threeMat?.dispose(),this.threeRenderer&&(this.threeRenderer.dispose(),this.threeRenderer.forceContextLoss())}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Ht({type:i,selectors:[["app-parcours"]],viewQuery:function(t,n){if(t&1&&Vr(Ry,5)(Py,5)(Iy,5)(Dy,5)(Ly,5)(Ny,5),t&2){let r;zn(r=Vn())&&(n.sectionEl=r.first),zn(r=Vn())&&(n.bgCanvas=r.first),zn(r=Vn())&&(n.axisLine=r.first),zn(r=Vn())&&(n.track=r.first),zn(r=Vn())&&(n.viewport=r.first),zn(r=Vn())&&(n.nodeRefs=r)}},decls:44,vars:25,consts:[["sectionEl",""],["bgCanvas",""],["viewport",""],["track",""],["axisLine",""],["node",""],["id","parcours",1,"section","parcours"],[1,"parcours__bg"],[1,"parcours__content"],["appReveal","bottom",1,"section-eyebrow"],["appReveal","bottom",1,"section-header-row",3,"revealDelay"],[1,"section-title"],["mat-icon-button","",3,"click"],[1,"collapsible-content"],[1,"collapsible-content__inner"],[1,"parcours__tabs"],["mat-button","",1,"parcours__tab",3,"click"],["mat-button","",1,"parcours__tab","parcours__tab--academic",3,"click"],["mat-button","",1,"parcours__tab","parcours__tab--certifications",3,"click"],["appReveal","bottom",1,"timeline-container",3,"revealDelay"],["mat-icon-button","",1,"nav-btn","nav-btn--prev",3,"click","disabled"],[1,"timeline-viewport",3,"scroll"],[1,"timeline-track"],[1,"timeline-axis"],[1,"timeline-axis-line"],[1,"timeline-node",3,"timeline-node--active","timeline-node--academic","timeline-node--certifications"],["mat-icon-button","",1,"nav-btn","nav-btn--next",3,"click","disabled"],[1,"timeline-node"],[1,"timeline-dot-wrapper",3,"click"],[1,"timeline-dot"],[1,"timeline-card"],[1,"timeline-card-header"],[1,"timeline-year"],[1,"timeline-badge"],[1,"timeline-title"],[1,"timeline-place"],["target","_blank","rel","noopener noreferrer",1,"certificate-preview","certificate-preview--png",3,"href"],["target","_blank","rel","noopener noreferrer",1,"certificate-preview","certificate-preview--pdf",3,"href"],[1,"timeline-desc"],["mat-stroked-button","","target","_blank","rel","noopener noreferrer",1,"certificate-link",3,"href"],[1,"timeline-tags"],["loading","lazy",3,"src","alt"],[1,"certificate-preview__open"],[1,"timeline-tag"]],template:function(t,n){t&1&&(j(0,"section",6,0),At(2,"canvas",7,1),j(4,"div",8)(5,"p",9),ne(6),J(),j(7,"div",10)(8,"h2",11),ne(9),J(),j(10,"button",12),Et("click",function(){return n.toggleOpen()}),j(11,"mat-icon"),ne(12),J()()(),j(13,"div",13)(14,"div",14)(15,"div",15)(16,"button",16),Et("click",function(){return n.switchTab("pro")}),j(17,"mat-icon"),ne(18,"work_outline"),J(),ne(19),J(),j(20,"button",17),Et("click",function(){return n.switchTab("academic")}),j(21,"mat-icon"),ne(22,"school"),J(),ne(23),J(),j(24,"button",18),Et("click",function(){return n.switchTab("certifications")}),j(25,"mat-icon"),ne(26,"workspace_premium"),J(),ne(27),J()(),j(28,"div",19)(29,"button",20),Et("click",function(){return n.navigate(-1)}),j(30,"mat-icon"),ne(31,"chevron_left"),J()(),j(32,"div",21,2),Et("scroll",function(s){return n.onViewportScroll(s)}),j(34,"div",22,3)(36,"div",23),At(37,"div",24,4),J(),dn(39,Gy,21,15,"div",25,Oy),J()(),j(41,"button",26),Et("click",function(){return n.navigate(1)}),j(42,"mat-icon"),ne(43,"chevron_right"),J()()()()()()()),t&2&&(Q(6),ze(n.i18n.t("parcours.title")),Q(),xt("revealDelay",80),Q(2),ze(n.i18n.t("parcours.title")),Q(),hn("aria-label",n.i18n.t("parcours.aria_toggle")),Q(2),ze(n.isOpen()?"remove":"add"),Q(),en("is-open",n.isOpen()),Q(3),en("parcours__tab--active",n.tab()==="pro"),Q(3),Ft(" ",n.i18n.t("parcours.tab.pro")," "),Q(),en("parcours__tab--active",n.tab()==="academic"),Q(3),Ft(" ",n.i18n.t("parcours.tab.academic")," "),Q(),en("parcours__tab--active",n.tab()==="certifications"),Q(3),Ft(" ",n.i18n.t("parcours.tab.certifications")," "),Q(),xt("revealDelay",200),Q(),xt("disabled",n.atStart()),hn("aria-label",n.i18n.t("parcours.aria_prev")),Q(8),en("timeline-axis-line--academic",n.tab()==="academic")("timeline-axis-line--certifications",n.tab()==="certifications"),Q(2),un(n.items()),Q(2),xt("disabled",n.atEnd()),hn("aria-label",n.i18n.t("parcours.aria_next")))},dependencies:[Wr,Hr,ko,ti,ei,ni],styles:['@charset "UTF-8";.parcours[_ngcontent-%COMP%]{position:relative;overflow:hidden}.parcours__bg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none}.parcours__content[_ngcontent-%COMP%]{position:relative;z-index:1}.parcours__tabs[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;gap:1rem;margin:3rem 0}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab[_ngcontent-%COMP%]{color:var(--text-2);border:1px solid var(--border);border-radius:999px;padding:.5rem 1.5rem;font-size:.95rem;font-weight:600;transition:all .3s ease;background:var(--surface)}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.5rem}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab[_ngcontent-%COMP%]:hover{border-color:var(--primary);color:var(--primary-bright)}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab--active[_ngcontent-%COMP%]{color:var(--on-primary)!important;background:var(--primary);border-color:var(--primary)}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab--active.parcours__tab--academic[_ngcontent-%COMP%]{color:#07080b!important;background:#fbbf24;border-color:#fbbf24}.parcours__tabs[_ngcontent-%COMP%]   .parcours__tab--active.parcours__tab--certifications[_ngcontent-%COMP%]{color:#07080b!important;background:#22c55e;border-color:#22c55e}.timeline-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;width:100%;max-width:1200px;margin:0 auto}.nav-btn[_ngcontent-%COMP%]{flex-shrink:0;color:var(--text-1)!important;background:var(--surface)!important;border:1px solid var(--border)!important;transition:all .2s}.nav-btn[_ngcontent-%COMP%]:not([disabled]):hover{border-color:var(--primary)!important;color:var(--primary-bright)!important}.timeline-viewport[_ngcontent-%COMP%]{flex:1;position:relative;overflow-x:auto;padding:3rem 0 1rem;mask-image:linear-gradient(to right,transparent,black 5%,black 95%,transparent);-webkit-mask-image:linear-gradient(to right,transparent,black 5%,black 95%,transparent);scroll-behavior:smooth;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}.timeline-viewport[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.timeline-axis[_ngcontent-%COMP%]{position:absolute;top:.9rem;left:0;width:100%;height:2px;z-index:1}.timeline-axis-line[_ngcontent-%COMP%]{width:100%;height:100%;background:linear-gradient(90deg,transparent,var(--primary-bright),transparent);opacity:.7;transform-origin:left center}.timeline-axis-line--academic[_ngcontent-%COMP%]{background:linear-gradient(90deg,transparent,#fbbf24,transparent)}.timeline-axis-line--certifications[_ngcontent-%COMP%]{background:linear-gradient(90deg,transparent,#22c55e,transparent)}.timeline-track[_ngcontent-%COMP%]{display:flex;position:relative;z-index:2;width:max-content;will-change:transform}.timeline-node[_ngcontent-%COMP%]{width:340px;box-sizing:border-box;flex-shrink:0;padding:0 1rem;display:flex;flex-direction:column;position:relative;opacity:0;transform:translateY(20px);scroll-snap-align:center}.timeline-dot-wrapper[_ngcontent-%COMP%]{height:2rem;display:flex;align-items:center;justify-content:center;margin-bottom:2rem;cursor:pointer;position:relative;z-index:3}.timeline-dot[_ngcontent-%COMP%]{width:14px;height:14px;border-radius:50%;background:var(--surface);border:2px solid var(--primary-soft);transition:all .3s cubic-bezier(.4,0,.2,1)}.timeline-node[_ngcontent-%COMP%]:hover   .timeline-dot[_ngcontent-%COMP%]{border-color:var(--primary-bright);transform:scale(1.3)}.timeline-node--academic[_ngcontent-%COMP%]:hover   .timeline-dot[_ngcontent-%COMP%]{border-color:#fbbf24}.timeline-node--certifications[_ngcontent-%COMP%]:hover   .timeline-dot[_ngcontent-%COMP%]{border-color:#22c55e}.timeline-node--active[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%]{border-color:var(--primary-bright);background:var(--primary-bright);transform:scale(1.5)}.timeline-node--active.timeline-node--academic[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%]{border-color:#fbbf24;background:#fbbf24}.timeline-node--active.timeline-node--certifications[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%]{border-color:#22c55e;background:#22c55e}.timeline-card[_ngcontent-%COMP%]{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-md);padding:1.5rem;box-shadow:var(--shadow-card);transition:border-color .3s,box-shadow .3s;height:100%}.timeline-node[_ngcontent-%COMP%]:hover   .timeline-card[_ngcontent-%COMP%]{border-color:var(--border-strong)}.timeline-node--academic[_ngcontent-%COMP%]:hover   .timeline-card[_ngcontent-%COMP%]{border-color:#fbbf2466}.timeline-node--certifications[_ngcontent-%COMP%]:hover   .timeline-card[_ngcontent-%COMP%]{border-color:#22c55e66}.timeline-node--active[_ngcontent-%COMP%]   .timeline-card[_ngcontent-%COMP%]{border-color:var(--primary-bright);box-shadow:var(--shadow-hover)}.timeline-node--active.timeline-node--academic[_ngcontent-%COMP%]   .timeline-card[_ngcontent-%COMP%]{border-color:#fbbf24;box-shadow:var(--shadow-hover)}.timeline-node--active.timeline-node--certifications[_ngcontent-%COMP%]   .timeline-card[_ngcontent-%COMP%]{border-color:#22c55e;box-shadow:var(--shadow-hover)}.timeline-card-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem}.timeline-year[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace;font-size:.85rem;font-weight:600;color:var(--text-2)}.timeline-node--active[_ngcontent-%COMP%]   .timeline-year[_ngcontent-%COMP%]{color:var(--primary-bright)}.timeline-node--active.timeline-node--academic[_ngcontent-%COMP%]   .timeline-year[_ngcontent-%COMP%]{color:#fbbf24}.timeline-node--active.timeline-node--certifications[_ngcontent-%COMP%]   .timeline-year[_ngcontent-%COMP%]{color:#22c55e}.timeline-badge[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;text-transform:uppercase;padding:.2rem .6rem;border-radius:999px;background:var(--primary-tint-strong);color:var(--primary-bright);border:1px solid var(--border-strong)}.timeline-node--academic[_ngcontent-%COMP%]   .timeline-badge[_ngcontent-%COMP%]{background:#fbbf241f;color:#fbbf24;border-color:#fbbf244d}.timeline-node--certifications[_ngcontent-%COMP%]   .timeline-badge[_ngcontent-%COMP%]{background:#22c55e1f;color:#22c55e;border-color:#22c55e4d}.timeline-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:700;color:var(--text-1);margin:0 0 .5rem;line-height:1.4}.timeline-place[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;font-size:.85rem;color:var(--text-3);margin:0 0 1rem}.timeline-place[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem}.timeline-desc[_ngcontent-%COMP%]{font-size:.9rem;color:var(--text-2);line-height:1.6;margin:0 0 1.25rem}.certificate-preview[_ngcontent-%COMP%]{display:block;position:relative;width:100%;aspect-ratio:16/10;margin:.9rem 0 1rem;overflow:hidden;border:1px solid rgba(34,197,94,.22);border-radius:var(--radius-sm);background:#22c55e14;transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease}.certificate-preview[_ngcontent-%COMP%]:hover, .certificate-preview[_ngcontent-%COMP%]:focus-visible{border-color:#22c55e8c;box-shadow:var(--shadow-card);transform:translateY(-2px)}.certificate-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:contain;object-position:center}.certificate-preview__open[_ngcontent-%COMP%]{position:absolute;right:.55rem;bottom:.55rem;display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;color:#07080b;background:#22c55e;border-radius:50%}.certificate-preview__open[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:1rem;height:1rem;font-size:1rem}.certificate-preview--pdf[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.6rem;color:#22c55e;text-decoration:none;font-weight:700}.certificate-preview--pdf[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:2rem;height:2rem;font-size:2rem}.certificate-link[_ngcontent-%COMP%]{width:100%;margin:0 0 1rem;color:#22c55e!important;border-color:#22c55e59!important;border-radius:var(--radius-sm)!important}.certificate-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.4rem;font-size:1rem;width:1rem;height:1rem}.certificate-link[_ngcontent-%COMP%]:hover{background:#22c55e1a!important;border-color:#22c55eb3!important}.timeline-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.timeline-tag[_ngcontent-%COMP%]{font-size:.75rem;font-weight:500;padding:.2rem .6rem;border-radius:999px;background:var(--surface-2);color:var(--text-2);border:1px solid var(--border)}.timeline-node--active[_ngcontent-%COMP%]   .timeline-tag[_ngcontent-%COMP%]{background:var(--primary-tint);color:var(--primary-bright);border-color:var(--border-strong)}.timeline-node--active.timeline-node--academic[_ngcontent-%COMP%]   .timeline-tag[_ngcontent-%COMP%]{background:#fbbf241a;color:#fbbf24;border-color:#fbbf2433}.timeline-node--active.timeline-node--certifications[_ngcontent-%COMP%]   .timeline-tag[_ngcontent-%COMP%]{background:#22c55e1a;color:#22c55e;border-color:#22c55e33}@media(max-width:768px){.timeline-container[_ngcontent-%COMP%]{padding:0 .5rem;gap:.25rem}.nav-btn[_ngcontent-%COMP%]{transform:scale(.85)}}@media(max-width:600px){.timeline-node[_ngcontent-%COMP%]{width:280px}.timeline-container[_ngcontent-%COMP%]{padding:0;gap:0}.nav-btn[_ngcontent-%COMP%]{display:none}}']})};var qy=["pyramidCanvas"];function Yy(i,e){if(i&1&&(j(0,"mat-chip",18),ne(1),J()),i&2){let t=e.$implicit;Q(),ze(t)}}function Zy(i,e){if(i&1&&(j(0,"a",20)(1,"mat-icon"),ne(2,"open_in_new"),J(),ne(3),J()),i&2){let t=lt(),n=lt();xt("href",t.demoUrl,Rn),Q(3),Ft(" ",n.i18n.t("projects.btn_demo")," ")}}function jy(i,e){if(i&1&&(j(0,"a",20)(1,"mat-icon"),ne(2,"code"),J(),ne(3),J()),i&2){let t=lt(),n=lt();xt("href",t.codeUrl,Rn),Q(3),Ft(" ",n.i18n.t("projects.btn_code")," ")}}function $y(i,e){if(i&1){let t=Ps();j(0,"div",6)(1,"div",10)(2,"h3",11),ne(3),J(),j(4,"div",12)(5,"button",13),Et("click",function(){Hi(t);let r=lt();return Wi(r.prevProject())}),j(6,"mat-icon"),ne(7,"chevron_left"),J()(),j(8,"span",14),ne(9),J(),j(10,"button",13),Et("click",function(){Hi(t);let r=lt();return Wi(r.nextProject())}),j(11,"mat-icon"),ne(12,"chevron_right"),J()()()(),j(13,"p",15),ne(14),J(),j(15,"div",16)(16,"p"),ne(17),J()(),j(18,"div",17)(19,"mat-chip-set"),dn(20,Yy,2,1,"mat-chip",18,Od),J()(),j(22,"div",19),qt(23,Zy,4,2,"a",20),qt(24,jy,4,2,"a",20),j(25,"a",21),Et("click",function(r){let s=Hi(t),o=lt();return r.preventDefault(),Wi(o.transitionService.navigate("/projets/"+s.slug))}),ne(26),j(27,"mat-icon",22),ne(28,"arrow_forward"),J()()()()}if(i&2){let t=e,n=lt();Q(3),ze(t.title[n.i18n.currentLang()]),Q(2),hn("aria-label",n.i18n.t("projects.aria_prev")),Q(4),Fo("",n.activeProjectIndex()+1," / ",n.projects.length),Q(),hn("aria-label",n.i18n.t("projects.aria_next")),Q(4),Fo("",t.role[n.i18n.currentLang()]," \u2022 ",t.duration[n.i18n.currentLang()]),Q(3),Ft("",t.summary[n.i18n.currentLang()],"..."),Q(2),hn("aria-label",n.i18n.t("common.tech_used")),Q(),un(t.tags),Q(3),Yt(t.demoUrl?23:-1),Q(),Yt(t.codeUrl?24:-1),Q(2),Ft(" ",n.i18n.t("projects.btn_learn_more")," ")}}function Jy(i,e){if(i&1){let t=Ps();j(0,"div",9)(1,"button",23),Et("click",function(){Hi(t);let r=lt();return Wi(r.prevPage())}),j(2,"mat-icon"),ne(3,"chevron_left"),J()(),j(4,"span",24),ne(5),J(),j(6,"button",13),Et("click",function(){Hi(t);let r=lt();return Wi(r.nextPage())}),j(7,"mat-icon"),ne(8,"chevron_right"),J()()()}if(i&2){let t=lt();Q(),xt("disabled",t.currentPage()===0),Q(4),Fo("",t.currentPage()+1," / ",t.totalPages())}}var lc=class i{canvasRef;projects=Ru;activeProject=on(this.projects[0]);currentPage=on(0);projectsPerPage=6;transitionService=He(ru);i18n=He(ii);theme=He(Pu);totalPages=tn(()=>Math.ceil(this.projects.length/this.projectsPerPage));currentPyramidProjects=tn(()=>{let e=this.currentPage()*this.projectsPerPage;return this.projects.slice(e,e+this.projectsPerPage)});activeProjectIndex=tn(()=>this.projects.findIndex(e=>e.slug===this.activeProject().slug));scene;camera;renderer;pyramidGroup=new ui;cubeMeshes=[];animId;raycaster=new mo;mouse=new dt;frame=0;sceneObserver;onResizeBound=this.onResize.bind(this);onClickBound=this.onClick.bind(this);onMouseMoveBound=this.onMouseMove.bind(this);toonGradient;pyramidRowsPerPage=3;constructor(){kr(()=>{let e=this.theme.isDark();this.cubeMeshes.forEach(t=>{let n=t.material[4],r=e?t.userData.texDark:t.userData.texLight;n&&r&&(n.map=r,n.needsUpdate=!0)})})}darkColorPalettes=[[{top:5227511,front:166097,right:87963},{top:8508666,front:240116,right:161725},{top:11789820,front:2733814,right:166097},{top:9489145,front:2001125,right:870305},{top:8445674,front:44225,right:24676},{top:11725810,front:2541274,right:33679}],[{top:12891645,front:8141549,right:4988309},{top:10980346,front:7153881,right:3868516},{top:14538494,front:9133302,right:5972406},{top:15772668,front:12592851,right:8788367},{top:16109822,front:14239471,right:10624175},{top:15324671,front:9647082,right:7020968}],[{top:8843180,front:1483594,right:1332013},{top:11006928,front:366185,right:413243},{top:10090212,front:889992,right:1265226},{top:12318672,front:2278750,right:1467700},{top:13433841,front:1357990,right:1138265},{top:14285213,front:6660877,right:3560212}]];lightColorPalettes=[[{top:9420019,front:3112182,right:736921},{top:11126514,front:21725,right:9583},{top:12179959,front:2001125,right:870305},{top:10146026,front:1024982,right:352906},{top:11066856,front:38823,right:19799},{top:12575724,front:2005678,right:28796}],[{top:13220085,front:7159766,right:4070016},{top:11771376,front:5972406,right:3017310},{top:13944567,front:8146406,right:4922526},{top:15313143,front:10624175,right:7346805},{top:15712759,front:12592851,right:8788367},{top:14469107,front:8266446,right:5774471}],[{top:10216373,front:1409085,right:1002024},{top:11006928,front:292951,right:343857},{top:10086877,front:1013358,right:999226},{top:11857863,front:1483594,right:1332013},{top:12578790,front:889992,right:1138265},{top:13889446,front:5078031,right:3099146}]];darkActivePalettes=[{top:16769154,front:16763432,right:16361509},{top:16622767,front:16007006,right:12456508},{top:11006928,front:1096065,right:292951}];lightActivePalettes=[{top:16767370,front:16102145,right:12024095},{top:16361656,front:14753096,right:10424889},{top:10413766,front:366185,right:292951}];get defaultColorPalettes(){return this.theme.isDark()?this.darkColorPalettes:this.lightColorPalettes}get activeColorPalettes(){return this.theme.isDark()?this.darkActivePalettes:this.lightActivePalettes}get backFaceColor(){return this.theme.isDark()?2080:727862}get outlineColor(){return this.theme.isDark()?1710638:1316636}ngAfterViewInit(){this.pyramidGroup=new ui;let e=this.canvasRef.nativeElement;if(typeof IntersectionObserver>"u"){this.initScene();return}this.sceneObserver=new IntersectionObserver(t=>{t[0]?.isIntersecting&&(this.sceneObserver?.disconnect(),this.sceneObserver=void 0,this.initScene())},{rootMargin:"200px"}),this.sceneObserver.observe(e)}makeToonGradient(){let e=document.createElement("canvas");e.width=4,e.height=1;let t=e.getContext("2d");["#404040","#808080","#c0c0c0","#ffffff"].forEach((s,o)=>{t.fillStyle=s,t.fillRect(o,0,1,1)});let r=new vs(e);return r.minFilter=Ot,r.magFilter=Ot,r.generateMipmaps=!1,r}initScene(){let e=this.canvasRef.nativeElement,t=e.clientWidth||460,n=e.clientHeight||380,r=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=768;this.scene=new Pr,this.scene.add(this.pyramidGroup),this.toonGradient=this.makeToonGradient(),this.camera=new Xt(40,t/n,.1,100),this.camera.position.set(5,6,8),this.camera.lookAt(0,1.2,0),this.renderer=new ws({canvas:e,antialias:!r,alpha:!0,powerPreference:"low-power"}),this.renderer.setSize(t,n),this.renderer.setPixelRatio(r?1:Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!r,this.scene.add(new po(16777215,.9));let s=new bs(16777215,1.4);s.position.set(4,8,6),s.castShadow=!r,this.scene.add(s);let o=new bs(11197951,.4);o.position.set(-5,2,-3),this.scene.add(o),this.buildPyramid(),e.addEventListener("click",this.onClickBound),e.addEventListener("mousemove",this.onMouseMoveBound),window.addEventListener("resize",this.onResizeBound),this.loop()}makeNumberTexture(e,t){let n=document.createElement("canvas");n.width=128,n.height=128;let r=n.getContext("2d");return r?(r.clearRect(0,0,128,128),t==="light"?(r.fillStyle="#ffffff",r.fillRect(0,0,128,128),r.fillStyle="rgba(20, 23, 28, 0.88)"):r.fillStyle="rgba(255,255,255,0.92)",r.font="bold 72px Inter, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(String(e).padStart(2,"0"),64,68),new vs(n)):null}makeMaterials(e,t){let n=(r,s)=>new co(Qt({color:r,gradientMap:this.toonGradient},s?{map:s}:{}));return[n(e.right),n(e.right),n(e.top),n(this.backFaceColor),t?n(e.front,t):n(e.front),n(e.right)]}getDefaultColors(e,t){let n=this.defaultColorPalettes[e%this.defaultColorPalettes.length];return n[t%n.length]}getActiveColors(e){return this.activeColorPalettes[e%this.activeColorPalettes.length]}framePyramid(e,t){if(!this.camera)return;let n=Math.max(e,1)*t;this.camera.position.set(5,n+4,8),this.camera.lookAt(0,n/2,0),this.camera.updateProjectionMatrix()}buildPyramid(){for(;this.pyramidGroup.children.length;)this.pyramidGroup.remove(this.pyramidGroup.children[0]);this.cubeMeshes=[];let e=1.35,t=1.06,n=e*1.16,r=this.currentPyramidProjects(),s=this.currentPage(),o=s*this.projectsPerPage,a=0,c=0;for(let l=0;l<this.pyramidRowsPerPage&&a<r.length;l++){let d=this.pyramidRowsPerPage-l,u=Math.min(d,r.length-a),h=-((u-1)*n)/2;c=l+1;for(let p=0;p<u;p++){let _=a,y=o+_,g=r[_],m=this.makeNumberTexture(y+1,"dark"),w=this.makeNumberTexture(y+1,"light"),R=this.theme.isDark()?m:w,b=this.getDefaultColors(s,_),E=new Ui(e,e,e),S=this.makeMaterials(b,R),A=new cn(E,S),x=h+p*n,T=l*n+e/2;A.position.set(x,T,0),A.userData={project:g,page:s,localIndex:_,globalIndex:y,texDark:m,texLight:w},A.castShadow=!0,A.receiveShadow=!0;let D=new Dr({color:this.outlineColor,side:Jt}),P=new cn(new Ui(e*t,e*t,e*t),D);A.add(P),this.pyramidGroup.add(A),this.cubeMeshes.push(A),a++}}this.framePyramid(c,n)}loop(){this.animId=requestAnimationFrame(()=>this.loop()),this.frame++;let e=this.activeProject().slug,t=new ct;this.cubeMeshes.forEach(n=>{let r=n.userData.page,s=n.userData.localIndex,o=n.userData.project?.slug===e,a=o?this.getActiveColors(r):this.getDefaultColors(r,s),c=n.material,l=[a.right,a.right,a.top,this.backFaceColor,a.front,a.right];c.forEach((h,p)=>h.color.lerp(t.setHex(l[p]),.1));let d=n.children[0];d&&d.material.color.lerp(t.setHex(this.outlineColor),.1);let u=o?1.05:1;n.scale.setScalar(n.scale.x+(u-n.scale.x)*.12)}),this.renderer.render(this.scene,this.camera)}ndc(e){let t=this.canvasRef.nativeElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1}onClick(e){this.ndc(e),this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.raycaster.intersectObjects(this.cubeMeshes,!0);if(t.length){let n=t[0].object;for(;n.parent&&!n.userData.project;)n=n.parent;let r=n.userData.project;r&&this.activeProject.set(r)}}onMouseMove(e){this.ndc(e),this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.raycaster.intersectObjects(this.cubeMeshes,!0);this.canvasRef.nativeElement.style.cursor=t.length?"pointer":"default"}onResize(){let e=this.canvasRef.nativeElement;this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight)}selectProject(e){this.activeProject.set(e)}nextProject(){this.gotoProjectIndex((this.activeProjectIndex()+1)%this.projects.length)}prevProject(){this.gotoProjectIndex((this.activeProjectIndex()-1+this.projects.length)%this.projects.length)}gotoProjectIndex(e){let t=Math.floor(e/this.projectsPerPage);t!==this.currentPage()&&(this.currentPage.set(t),this.buildPyramid()),this.activeProject.set(this.projects[e])}nextPage(){this.currentPage.set((this.currentPage()+1)%this.totalPages()),this.buildPyramid(),this.activeProject.set(this.currentPyramidProjects()[0])}prevPage(){this.currentPage.set((this.currentPage()-1+this.totalPages())%this.totalPages()),this.buildPyramid(),this.activeProject.set(this.currentPyramidProjects()[0])}ngOnDestroy(){this.sceneObserver?.disconnect(),cancelAnimationFrame(this.animId),this.cubeMeshes.forEach(t=>{t.geometry.dispose(),t.material.forEach(n=>n.dispose()),t.userData.texDark?.dispose(),t.userData.texLight?.dispose()}),this.toonGradient?.dispose(),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss());let e=this.canvasRef?.nativeElement;e&&(e.removeEventListener("click",this.onClickBound),e.removeEventListener("mousemove",this.onMouseMoveBound)),window.removeEventListener("resize",this.onResizeBound)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Ht({type:i,selectors:[["app-projects"]],viewQuery:function(t,n){if(t&1&&Vr(qy,5),t&2){let r;zn(r=Vn())&&(n.canvasRef=r.first)}},decls:12,vars:4,consts:[["pyramidCanvas",""],["id","projets",1,"section","projects"],["appReveal","bottom",1,"section-eyebrow"],["appReveal","bottom",1,"section-title",3,"revealDelay"],[1,"projects__layout"],["appReveal","left",1,"projects__details"],[1,"project-details"],["appReveal","right",1,"projects__pyramid-container"],[1,"pyramid-canvas"],[1,"pyramid-pagination"],[1,"project-details__header"],[1,"project-details__title"],[1,"project-details__nav"],["mat-icon-button","",3,"click"],[1,"project-details__nav-count"],[1,"project-details__meta"],[1,"project-details__desc"],[1,"project-details__tags"],["disabled",""],[1,"project-details__actions"],["mat-button","",3,"href"],["mat-button","","color","primary",3,"click"],["iconPositionEnd",""],["mat-icon-button","",3,"click","disabled"],[1,"pyramid-pagination__text"]],template:function(t,n){if(t&1&&(j(0,"section",1)(1,"p",2),ne(2,"Portfolio"),J(),j(3,"h2",3),ne(4),J(),j(5,"div",4)(6,"div",5),qt(7,$y,29,12,"div",6),J(),j(8,"div",7),At(9,"canvas",8,0),qt(11,Jy,9,3,"div",9),J()()()),t&2){let r;Q(3),xt("revealDelay",80),Q(),ze(n.i18n.t("projects.title")),Q(3),Yt((r=n.activeProject())?7:-1,r),Q(4),Yt(n.totalPages()>1?11:-1)}},dependencies:[Wr,Hr,ko,ti,ei,Cu,Au,wu,ni],styles:['@charset "UTF-8";.projects__layout[_ngcontent-%COMP%]{margin-top:2.5rem;display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center}.projects__details[_ngcontent-%COMP%]{display:flex;flex-direction:column}.projects__pyramid-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.pyramid-canvas[_ngcontent-%COMP%]{width:100%;height:400px;border-radius:var(--radius-md);display:block}.project-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1.75rem 2rem;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);box-shadow:var(--shadow-card)}.project-details__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.75rem 1.5rem;margin-bottom:.5rem}.project-details__title[_ngcontent-%COMP%]{color:var(--text-1);font-size:2rem;font-weight:800;margin:0;letter-spacing:-.02em}.project-details__nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;flex-shrink:0}.project-details__nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--primary)!important;background:var(--primary-tint)!important;border:1px solid var(--border)!important;transition:background .2s,border-color .2s!important}.project-details__nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--primary-tint-strong)!important;border-color:var(--border-strong)!important}.project-details__nav-count[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-2);font-family:Roboto Mono,ui-monospace,monospace;min-width:3.5rem;text-align:center}.project-details__meta[_ngcontent-%COMP%]{color:var(--primary);font-size:.9rem;font-weight:600;margin-bottom:1.5rem;font-family:Roboto Mono,ui-monospace,monospace}.project-details__desc[_ngcontent-%COMP%]{margin-bottom:1.5rem}.project-details__desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-2);line-height:1.75;font-size:1rem}.project-details__tags[_ngcontent-%COMP%]{margin-bottom:2rem}mat-chip[_ngcontent-%COMP%]{background:var(--primary-tint)!important;color:var(--primary)!important;border:1px solid var(--border-strong)!important;font-size:.75rem!important;font-weight:600!important;font-family:Roboto Mono,ui-monospace,monospace!important;opacity:1!important}.project-details__actions[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}.project-details__actions[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]{color:var(--text-3)!important;font-size:.9rem!important;font-weight:600!important;transition:color .2s,background .2s!important}.project-details__actions[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem}.project-details__actions[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%]:hover{color:var(--primary)!important;background:var(--primary-tint)}.project-details__actions[_ngcontent-%COMP%]   a[color=primary][_ngcontent-%COMP%]{color:var(--on-primary)!important;background:var(--primary)!important;font-weight:700!important;border-radius:10px!important;box-shadow:var(--shadow-card);transition:background .2s,transform .2s,box-shadow .2s!important}.project-details__actions[_ngcontent-%COMP%]   a[color=primary][_ngcontent-%COMP%]:hover{color:var(--on-primary)!important;background:var(--primary-hover)!important;transform:translateY(-1px);box-shadow:var(--shadow-hover)}.pyramid-pagination[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin-top:.5rem;padding:.25rem .5rem;background:var(--surface);border:1px solid var(--border);border-radius:999px;box-shadow:var(--shadow-card)}.pyramid-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--primary)!important}.pyramid-pagination__text[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-2);font-family:Roboto Mono,ui-monospace,monospace}@media(max-width:992px){.projects__layout[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:2rem;text-align:center}.project-details__header[_ngcontent-%COMP%], .project-details__actions[_ngcontent-%COMP%], .pyramid-pagination[_ngcontent-%COMP%]{justify-content:center}.projects__pyramid-container[_ngcontent-%COMP%]{order:-1}.pyramid-canvas[_ngcontent-%COMP%]{height:320px}}@media(max-width:600px){.project-details[_ngcontent-%COMP%]{padding:1.25rem 1.1rem}.project-details__actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;width:100%}.project-details__actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%;text-align:center;justify-content:center}}']})};var Ro=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Qn({type:i});static \u0275inj=Kn({imports:[Jd,Go,Xi]})}return i})();var Qy=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Ht({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return i})(),eb={passive:!0},cm=(()=>{class i{_platform=He(Gr);_ngZone=He(Br);_renderer=He(Dd).createRenderer(null,null);_styleLoader=He(jd);_monitoredElements=new Map;constructor(){}monitor(t){if(!this._platform.isBrowser)return Cd;this._styleLoader.load(Qy);let n=Mc(t),r=this._monitoredElements.get(n);if(r)return r.subject;let s=new mr,o="cdk-text-field-autofilled",a=l=>{l.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(o)?(n.classList.add(o),this._ngZone.run(()=>s.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(o)&&(n.classList.remove(o),this._ngZone.run(()=>s.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",a,eb)));return this._monitoredElements.set(n,{subject:s,unlisten:c}),s}stopMonitoring(t){let n=Mc(t),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((t,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Rd({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var hm=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Qn({type:i});static \u0275inj=Kn({})}return i})();var dm=new Mi("MAT_INPUT_VALUE_ACCESSOR");var tb=["button","checkbox","file","hidden","image","radio","range","reset","submit"],nb=new Mi("MAT_INPUT_CONFIG"),um=(()=>{class i{_elementRef=He(gr);_platform=He(Gr);ngControl=He(fu,{optional:!0,self:!0});_autofillMonitor=He(cm);_ngZone=He(Br);_formField=He(Eu,{optional:!0});_renderer=He(Rs);_uid=He(eu).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=He(nb,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new mr;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=_r(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Si.required)??!1}set required(t){this._required=_r(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&Sc().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=_r(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>Sc().has(t));constructor(){let t=He(gu,{optional:!0}),n=He(Vo,{optional:!0}),r=He(Mu),s=He(dm,{optional:!0,self:!0}),o=this._elementRef.nativeElement,a=o.nodeName.toLowerCase();s?Nd(s.value)?this._signalBasedValueAccessor=s:this._inputValueAccessor=s:this._inputValueAccessor=o,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(o,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Su(r,this.ngControl,n,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=o.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&kr(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=t,t?n.setAttribute("placeholder",t):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){tb.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,n=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let n=this._elementRef.nativeElement;t.length?n.setAttribute("aria-describedby",t.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let n=t.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||i)};static \u0275dir=zr({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&Et("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(Fd("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),hn("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),en("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",gc]},exportAs:["matInput"],features:[Wd([{provide:Tu,useExisting:i}]),Pd]})}return i})(),fm=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Qn({type:i});static \u0275inj=Kn({imports:[Ro,Ro,hm,Xi]})}return i})();var rb=["submitButton"],sb=(i,e)=>e.labelKey;function ob(i,e){if(i&1&&(j(0,"a",21),ne(1),J()),i&2){let t=lt().$implicit;xt("href",t.href,Rn),Q(),ze(t.value)}}function ab(i,e){if(i&1&&(j(0,"span"),ne(1),J()),i&2){let t=lt().$implicit;Q(),ze(t.value)}}function lb(i,e){if(i&1&&(j(0,"li")(1,"mat-icon"),ne(2),J(),j(3,"div")(4,"span",20),ne(5),J(),qt(6,ob,2,2,"a",21)(7,ab,2,1,"span"),J()()),i&2){let t=e.$implicit,n=lt();Q(2),ze(t.icon),Q(3),ze(n.i18n.t(t.labelKey)),Q(),Yt(t.href?6:7)}}function cb(i,e){if(i&1&&(j(0,"mat-error"),ne(1),J()),i&2){let t=lt();Q(),ze(t.i18n.t("contact.error.name"))}}function hb(i,e){if(i&1&&(j(0,"mat-error"),ne(1),J()),i&2){let t=lt();Q(),ze(t.i18n.t("contact.error.email"))}}function db(i,e){if(i&1&&(j(0,"mat-error"),ne(1),J()),i&2){let t=lt();Q(),ze(t.i18n.t("contact.error.message"))}}function ub(i,e){if(i&1&&ne(0),i&2){let t=lt();Ft(" ",t.i18n.t("contact.btn_sending")," ")}}function fb(i,e){if(i&1&&(j(0,"span",18),ne(1),j(2,"mat-icon"),ne(3,"send"),J()()),i&2){let t=lt();Q(),Ft(" ",t.i18n.t("contact.btn_send")," ")}}function pb(i,e){if(i&1&&(j(0,"p",19)(1,"mat-icon"),ne(2,"check_circle"),J(),ne(3),J()),i&2){let t=lt();Q(3),Ft(" ",t.i18n.t("contact.success")," ")}}var pm="charlyeklu27@gmail.com",cc=class i{fb=new yu;submitButton=qd("submitButton");i18n=He(ii);sending=on(!1);submitted=on(!1);contactInfo=[{icon:"mail",labelKey:"contact.info.email",value:pm,href:`mailto:${pm}`},{icon:"link",labelKey:"contact.info.github",value:"github.com/CharlyEKLU",href:"https://github.com/CharlyEKLU"},{icon:"phone",labelKey:"contact.info.phone",value:"(+228) 90 51 56 63",href:"tel:+22890515663"}];location=tn(()=>({city:"Lom\xE9, Togo",timezone:"GMT (UTC+0)",availability:this.i18n.t("contact.info.availability")}));form=this.fb.nonNullable.group({name:["",[Si.required,Si.minLength(2)]],email:["",[Si.required,Si.email]],message:["",[Si.required,Si.minLength(10)]]});async onSubmit(){if(this.form.invalid){this.form.markAllAsTouched();return}let e=this.submitButton()?.nativeElement;e&&iu(e,{scaleX:[1,.94,1],scaleY:[1,.94,1]},{duration:.35,ease:"easeOut"}),this.sending.set(!0);let{name:t,email:n,message:r}=this.form.getRawValue();try{let s=await fetch("https://formspree.io/f/xdapdzon",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t,email:n,message:r})});s.ok?(this.sending.set(!1),this.submitted.set(!0),this.form.reset(),setTimeout(()=>this.submitted.set(!1),6e3)):(this.sending.set(!1),console.error("Formspree error",await s.text()))}catch(s){this.sending.set(!1),console.error("Formspree connection error",s)}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Ht({type:i,selectors:[["app-contact"]],viewQuery:function(t,n){t&1&&zd(n.submitButton,rb,5),t&2&&Vd()},decls:40,vars:19,consts:[["submitButton",""],["id","contact",1,"section","contact"],["appReveal","bottom",1,"section-eyebrow"],["appReveal","bottom",1,"section-title",3,"revealDelay"],[1,"contact__layout"],["appReveal","left",1,"contact__info"],[1,"contact__lead"],[1,"contact__list-wrapper"],[1,"contact__list"],[1,"contact__charly"],["src","images/CHARLY_HIRE.png","alt","Hire Charly","loading","lazy"],[1,"contact__map-legend"],["appReveal","right",1,"contact__form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","name","required","",3,"placeholder"],["matInput","","type","email","formControlName","email","required","",3,"placeholder"],["matInput","","rows","5","formControlName","message","required","",3,"placeholder"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[1,"button-content"],[1,"contact__success"],[1,"contact__list-label"],[3,"href"]],template:function(t,n){t&1&&(j(0,"section",1)(1,"p",2),ne(2,"Contact"),J(),j(3,"h2",3),ne(4),J(),j(5,"div",4)(6,"div",5)(7,"p",6),ne(8),J(),j(9,"div",7)(10,"ul",8),dn(11,lb,8,3,"li",null,sb),J(),j(13,"div",9),At(14,"img",10),J()(),j(15,"p",11)(16,"mat-icon"),ne(17,"location_on"),J(),ne(18),J()(),j(19,"form",12),Et("ngSubmit",function(){return n.onSubmit()}),j(20,"mat-form-field",13)(21,"mat-label"),ne(22),J(),At(23,"input",14),qt(24,cb,2,1,"mat-error"),J(),j(25,"mat-form-field",13)(26,"mat-label"),ne(27),J(),At(28,"input",15),qt(29,hb,2,1,"mat-error"),J(),j(30,"mat-form-field",13)(31,"mat-label"),ne(32),J(),At(33,"textarea",16),qt(34,db,2,1,"mat-error"),J(),j(35,"button",17,0),qt(37,ub,1,1)(38,fb,4,1,"span",18),J(),qt(39,pb,4,1,"p",19),J()()()),t&2&&(Q(3),xt("revealDelay",80),Q(),ze(n.i18n.t("contact.title")),Q(4),Ft(" ",n.i18n.t("contact.subtitle")," "),Q(3),un(n.contactInfo),Q(7),Gd(" ",n.location().city,"\xA0\xB7\xA0",n.location().timezone,"\xA0\xB7\xA0",n.location().availability," "),Q(),xt("formGroup",n.form),Q(3),ze(n.i18n.t("contact.form.name")),Q(),xt("placeholder",n.i18n.t("contact.form.name_placeholder")),Q(),Yt(n.form.controls.name.invalid&&n.form.controls.name.touched?24:-1),Q(3),ze(n.i18n.t("contact.form.email")),Q(),xt("placeholder",n.i18n.t("contact.form.email_placeholder")),Q(),Yt(n.form.controls.email.invalid&&n.form.controls.email.touched?29:-1),Q(3),ze(n.i18n.t("contact.form.message")),Q(),xt("placeholder",n.i18n.t("contact.form.message_placeholder")),Q(),Yt(n.form.controls.message.invalid&&n.form.controls.message.touched?34:-1),Q(),xt("disabled",n.sending()),Q(2),Yt(n.sending()?37:38),Q(2),Yt(n.submitted()?39:-1))},dependencies:[bu,_u,uu,pu,mu,vu,Vo,xu,Ro,Go,Ac,wc,fm,um,Wr,Hr,ti,ei,ni],styles:['@charset "UTF-8";.contact__layout[_ngcontent-%COMP%]{margin-top:2rem;display:grid;grid-template-columns:.9fr 1.1fr;gap:3rem;align-items:start}.contact__lead[_ngcontent-%COMP%]{color:var(--text-2);line-height:1.75;margin-bottom:2rem}.contact__list-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;margin-bottom:2rem}.contact__charly[_ngcontent-%COMP%]{flex-shrink:0;width:130px}.contact__charly[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:contain}.contact__list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1.25rem}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary-bright);background:var(--primary-tint);border:1px solid var(--border);border-radius:10px;padding:8px;box-sizing:content-box}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--text-1)}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;transition:color .2s}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-bright);text-decoration:none}.contact__list-label[_ngcontent-%COMP%]{font-size:.72rem;text-transform:uppercase;letter-spacing:.07em;color:var(--text-3);font-weight:600}.contact__map-legend[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;margin:1.5rem 0 0;font-size:.78rem;color:var(--text-3)}.contact__map-legend[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1rem;width:1rem;height:1rem;color:var(--primary-bright)}.contact__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;padding:1.75rem;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);box-shadow:var(--shadow-card)}.contact__form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.contact__form[_ngcontent-%COMP%]   .mdc-text-field[_ngcontent-%COMP%]{background:var(--surface-2)!important;border-radius:var(--radius-sm)!important}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-start;margin-top:1rem;padding:1.5rem 2.5rem!important;font-size:1rem!important;display:inline-flex!important;align-items:center;justify-content:center;background:var(--primary)!important;color:#f2f4f7!important;font-weight:700!important;box-shadow:var(--shadow-card)!important;border-radius:var(--radius-sm)!important;transition:box-shadow .2s,filter .2s,transform .2s!important}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .button-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--primary-hover)!important;box-shadow:var(--shadow-hover)!important;transform:translateY(-2px)}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:0!important}.contact__success[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin-top:1rem;color:var(--success);font-size:.9rem;font-weight:500}@media(max-width:900px){.contact__layout[_ngcontent-%COMP%]{grid-template-columns:1fr;text-align:center}.contact__list-wrapper[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.contact__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex-direction:column;text-align:center;justify-content:center}.contact__map-legend[_ngcontent-%COMP%]{justify-content:center}.contact__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:center}}@media(max-width:600px){.contact__form[_ngcontent-%COMP%]{padding:1.25rem 1rem}}']})};var mm=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Ht({type:i,selectors:[["app-details"]],decls:11,vars:0,consts:[[1,"details"],[1,"page-section"],[1,"page-section","page-section--alt"],[1,"page-section","band--navy","band--diagonal"],[1,"page-section","band--charcoal","band--diagonal"]],template:function(t,n){t&1&&(j(0,"div",0)(1,"div",1),At(2,"app-about"),J(),j(3,"div",2),At(4,"app-skills"),J(),j(5,"div",3),At(6,"app-parcours"),J(),j(7,"div",1),At(8,"app-projects"),J(),j(9,"div",4),At(10,"app-contact"),J()())},dependencies:[Ho,Xo,ac,lc,cc],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block}.details[_ngcontent-%COMP%]{padding-top:4.5rem}.page-section[_ngcontent-%COMP%]{position:relative;background:var(--bg);transition:background-color .35s ease}.page-section--alt[_ngcontent-%COMP%]{background:var(--bg-alt)}']})};export{mm as Details};
