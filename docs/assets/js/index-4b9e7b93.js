import{d as C,ap as P,g as e,F as S,i as u,R as j,D as x,r as A,b as M,aq as T,q as H,s as le,m as b,aj as ae,Q as I,o as v,l as h,w as o,ar as L,u as c,H as q,c as B,j as K,t as $,as as se,at as ue,au as re,f as i,ad as R,av as _e,G as D,C as de,aw as Q,p as U,k as z,n as J,O as ce,E as ie,ag as G,S as pe,ax as me,ay as fe}from"./index-6ff7cf03.js";import{M as O,a as ve,_ as ge,T as X,g as he}from"./login-d1907a34.js";import{h as be,g as Ce}from"./util-cea9d7a8.js";import{c as we}from"./propsDefault-b7131e96.js";import{_ as k}from"./plugin-vue_export-helper-b2bddca3.js";import"./index-e463445a.js";const ye=`
<path class="path" d="
	M 30 15
	L 28 17
	M 25.61 25.61
	A 15 15, 0, 0, 1, 15 30
	A 15 15, 0, 1, 1, 27.99 7.5
	L 15 15
" style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,xe={menuList:we.createArray()},Y=C(p=>{function n(t){var d;const a=P[(d=t.meta)==null?void 0:d.icon];return e(u("el-sub-menu"),{index:t.path},{default:()=>{var _;return[(_=t.children)==null?void 0:_.map(r=>l(r))]},title:()=>{var _,r,f;return e(S,null,[(_=t.meta)!=null&&_.icon?e(u("el-icon"),null,{default:()=>[e(a,null,null)]}):null,e("span",null,[(f=(r=t.meta)==null?void 0:r.title)!=null?f:""])])}})}function s(t){var d;const a=P[(d=t.meta)==null?void 0:d.icon];return e(u("el-menu-item"),{index:t.path},{default:()=>{var _;return[(_=t.meta)!=null&&_.icon?e(u("el-icon"),null,{default:()=>[e(a,null,null)]}):null]},title:()=>{var _,r;return e("span",null,[(r=(_=t.meta)==null?void 0:_.title)!=null?r:""])}})}function l(t){var a,d;return(a=t.meta)!=null&&a.hidden?null:(d=t.meta)!=null&&d.showChildren?n(t):s(t)}return()=>p.menuList.map(t=>l(t))});Y.props=xe;const Ve=C(()=>{const p=I(),n=O(),s=j(),l=x(()=>p.path),t=x(()=>n.isCollapse),a=x(()=>n.menuList),d=A(!1),_=A(0);M(async()=>{d.value=!0;try{if(!(T&&T.length))return;const f=be(T);await s.setAuthRouter(f),await n.setMenuList(T)}finally{d.value=!1}});function r(){window.onresize=()=>(()=>{_.value=document.body.clientWidth,!t.value&&_.value<1200&&n.setCollapse(),t.value&&_.value>1200&&n.setCollapse()})()}return r(),()=>H(e("div",{class:"menu",style:{width:t.value?"65px":"220px"},"element-loading-text":"Loading...","element-loading-spinner":ye,"elementLoading-svg-view-box":"-10, -10, 50, 50","elementLoading-background":"rgba(122, 122, 122, 0.01)"},[e("div",{class:"logo flx-center"},[e("img",{src:ve,alt:"logo"},null),H(e("span",null,[b("Vue Tsx")]),[[ae,!t.value]])]),e(u("el-scrollbar"),null,{default:()=>[e(u("el-menu"),{defaultActive:l.value,router:!0,collapse:t.value,collapseTransition:!1,uniqueOpened:!0,backgroundColor:"#191a20",textColor:"#bdbdc0",activeTextColor:"#fff"},{default:()=>[e(Y,{menuList:a.value},null)]})]})]),[[le("loading"),d.value]])});const $e=C({__name:"CollapseIcon",setup(p){const n=O(),s=x(()=>n.isCollapse);return(l,t)=>{const a=u("el-icon");return v(),h(a,{class:"collapse-icon",onClick:t[0]||(t[0]=d=>c(n).setCollapse())},{default:o(()=>[(v(),h(L(c(s)?"expand":"fold")))]),_:1})}}});var ke=k($e,[["__scopeId","data-v-1b5f87f0"]]);const Fe=b("\u9996\u9875"),Ae=C({__name:"Breadcrumb",setup(p){const n=I(),s=x(()=>n.matched.filter(l=>l.meta&&l.meta.title&&l.meta.title!=="\u9996\u9875"));return(l,t)=>{const a=u("el-breadcrumb-item"),d=u("el-breadcrumb");return v(),h(d,{"separator-icon":c(ue)},{default:o(()=>[e(se,{name:"breadcrumb",mode:"out-in"},{default:o(()=>[e(a,{to:{path:c(q)},key:"/home"},{default:o(()=>[Fe]),_:1},8,["to"]),(v(!0),B(S,null,K(c(s),_=>(v(),h(a,{key:_.path,to:{path:_.path}},{default:o(()=>[b($(_.meta.title),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["separator-icon"])}}});const Be={class:"fullscreen"},Ee=C({__name:"Fullscreen",setup(p){const{toggle:n,isFullscreen:s}=re();return(l,t)=>{const a=u("el-tooltip");return v(),B("div",Be,[e(a,{effect:"dark",content:c(s)?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F",placement:"bottom"},{default:o(()=>[i("i",{class:R([["iconfont",c(s)?"icon-suoxiao":"icon-fangda"],"icon-style"]),onClick:t[0]||(t[0]=(...d)=>c(n)&&c(n)(...d))},null,2)]),_:1},8,["content"])])}}});var Te=k(Ee,[["__scopeId","data-v-d55545a0"]]);const De=b("\u7B80\u4F53\u4E2D\u6587"),Se=b("English"),Me=C({__name:"Language",setup(p){const n=_e(),s=D(),l=x(()=>s.language),t=a=>{n.locale.value=a,s.updateLanguage(a)};return M(()=>{t(l.value||Ce())}),(a,d)=>{const _=u("el-tooltip"),r=u("el-dropdown-item"),f=u("el-dropdown-menu"),w=u("el-dropdown");return v(),h(w,{trigger:"click",onCommand:t},{dropdown:o(()=>[e(f,null,{default:o(()=>[e(r,{disabled:c(l)==="zh",command:"zh"},{default:o(()=>[De]),_:1},8,["disabled"]),e(r,{disabled:c(l)==="en",command:"en"},{default:o(()=>[Se]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[i("span",null,[e(_,{effect:"dark",content:"\u56FD\u9645\u5316",placement:"bottom"},{default:o(()=>[i("i",{class:R(["iconfont icon-zhongyingwen","icon-style"])})]),_:1})])]),_:1})}}});var Ie=k(Me,[["__scopeId","data-v-6d3620a8"]]);const F=p=>(U("data-v-1f946519"),p=p(),z(),p),Le=b(" \u5168\u5C40\u4E3B\u9898 "),Re={class:"theme-item"},Ue=F(()=>i("span",null,"\u4E3B\u9898\u989C\u8272",-1)),ze={class:"theme-item"},Ge=F(()=>i("span",null,"\u6697\u9ED1\u6A21\u5F0F",-1)),Oe={class:"theme-item"},We=F(()=>i("span",null,"\u7070\u8272\u6A21\u5F0F",-1)),Ne={class:"theme-item"},Pe=F(()=>i("span",null,"\u8272\u5F31\u6A21\u5F0F",-1)),He=F(()=>i("br",null,null,-1)),je=b(" \u754C\u9762\u8BBE\u7F6E "),qe={class:"theme-item"},Ke=F(()=>i("span",null,"\u6298\u53E0\u83DC\u5355",-1)),Qe={class:"theme-item"},Je=F(()=>i("span",null,"\u9762\u5305\u5C51\u5BFC\u822A",-1)),Xe={class:"theme-item"},Ye=F(()=>i("span",null,"\u6807\u7B7E\u680F",-1)),Ze={class:"theme-item"},et=F(()=>i("span",null,"\u9875\u811A",-1)),tt=C({__name:"Theme",setup(p){const n=["#409EFF","#DAA96E","#0C819F","#009688","#27ae60","#ff5c93","#e74c3c","#fd726d","#f39c12","#9b59b6"],s=D(),l=x(()=>s.themeConfig),t=O(),a=x({get(){return t.isCollapse},set(){t.setCollapse()}}),{changePrimary:d,changeGreyOrWeak:_}=de(),r=A(!1),f=()=>{r.value=!0};return(w,m)=>{const V=u("el-tooltip"),y=u("ColdDrink"),W=u("el-icon"),N=u("el-divider"),te=u("el-color-picker"),E=u("el-switch"),oe=u("Setting"),ne=u("el-drawer");return v(),B("div",null,[e(V,{effect:"dark",content:"\u5E03\u5C40\u8BBE\u7F6E",placement:"bottom"},{default:o(()=>[i("i",{class:R(["iconfont icon-zhuti","icon-style"]),onClick:f})]),_:1}),e(ne,{modelValue:r.value,"onUpdate:modelValue":m[9]||(m[9]=g=>r.value=g),title:"\u5E03\u5C40\u8BBE\u7F6E",size:"300px"},{default:o(()=>[e(N,{class:"divider","content-position":"center"},{default:o(()=>[e(W,null,{default:o(()=>[e(y)]),_:1}),Le]),_:1}),i("div",Re,[Ue,e(te,{modelValue:c(l).primary,"onUpdate:modelValue":m[0]||(m[0]=g=>c(l).primary=g),predefine:n,onChange:c(d)},null,8,["modelValue","onChange"])]),i("div",ze,[Ge,e(ge)]),i("div",Oe,[We,e(E,{modelValue:c(l).isGrey,"onUpdate:modelValue":m[1]||(m[1]=g=>c(l).isGrey=g),onChange:m[2]||(m[2]=g=>c(_)(g,"grey"))},null,8,["modelValue"])]),i("div",Ne,[Pe,e(E,{modelValue:c(l).isWeak,"onUpdate:modelValue":m[3]||(m[3]=g=>c(l).isWeak=g),onChange:m[4]||(m[4]=g=>c(_)(g,"weak"))},null,8,["modelValue"])]),He,e(N,{class:"divider","content-position":"center"},{default:o(()=>[e(W,null,{default:o(()=>[e(oe)]),_:1}),je]),_:1}),i("div",qe,[Ke,e(E,{modelValue:c(a),"onUpdate:modelValue":m[5]||(m[5]=g=>Q(a)?a.value=g:null)},null,8,["modelValue"])]),i("div",Qe,[Je,e(E,{modelValue:c(l).breadcrumb,"onUpdate:modelValue":m[6]||(m[6]=g=>c(l).breadcrumb=g)},null,8,["modelValue"])]),i("div",Xe,[Ye,e(E,{modelValue:c(l).tabs,"onUpdate:modelValue":m[7]||(m[7]=g=>c(l).tabs=g)},null,8,["modelValue"])]),i("div",Ze,[et,e(E,{modelValue:c(l).footer,"onUpdate:modelValue":m[8]||(m[8]=g=>c(l).footer=g)},null,8,["modelValue"])])]),_:1},8,["modelValue"])])}}});var ot=k(tt,[["__scopeId","data-v-1f946519"]]),nt="./assets/gif/james-aa4c755d.gif";const lt=i("span",null,"This is userInfo",-1),at=C({__name:"InfoDialog",setup(p,{expose:n}){const s=A(!1);return n({openDialog:()=>{s.value=!0}}),(t,a)=>{const d=u("el-dialog");return v(),h(d,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=_=>s.value=_),title:"\u4E2A\u4EBA\u8D44\u6599",width:"500px",draggable:""},{default:o(()=>[lt]),_:1},8,["modelValue"])}}}),st=i("span",null,"This is Password",-1),ut={class:"dialog-footer"},rt=b("\u53D6\u6D88"),_t=b("\u786E\u8BA4"),dt=C({__name:"PasswordDialog",setup(p,{expose:n}){const s=A(!1);return n({openDialog:()=>{s.value=!0}}),(t,a)=>{const d=u("el-button"),_=u("el-dialog");return v(),h(_,{modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=r=>s.value=r),title:"\u4FEE\u6539\u5BC6\u7801",width:"500px",draggable:""},{footer:o(()=>[i("span",ut,[e(d,{onClick:a[0]||(a[0]=r=>s.value=!1)},{default:o(()=>[rt]),_:1}),e(d,{type:"primary",onClick:a[1]||(a[1]=r=>s.value=!1)},{default:o(()=>[_t]),_:1})])]),default:o(()=>[st]),_:1},8,["modelValue"])}}});const ct=p=>(U("data-v-3cde4a66"),p=p(),z(),p),it=ct(()=>i("div",{class:"avatar"},[i("img",{src:nt,alt:"avatar"})],-1)),pt=C({__name:"Avatar",setup(p){const n=J(),s=D();function l(){ce.confirm("\u60A8\u662F\u5426\u786E\u8BA4\u9000\u51FA\u767B\u5F55?","\u6E29\u99A8\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{n.push({name:"login"}),s.setToken(""),ie({type:"success",message:"\u9000\u51FA\u767B\u5F55\u6210\u529F\uFF01"})})}const t=A(null),a=A(null);function d(_){var r,f;if(_=="infoRef")return(r=t.value)==null?void 0:r.openDialog();(f=a.value)==null||f.openDialog()}return(_,r)=>{const f=u("el-dropdown-item"),w=u("el-dropdown-menu"),m=u("el-dropdown");return v(),B(S,null,[e(m,{trigger:"click"},{dropdown:o(()=>[e(w,null,{default:o(()=>[e(f,{onClick:r[0]||(r[0]=V=>d("infoRef"))},{default:o(()=>[b($(_.$t("header.personalData")),1)]),_:1}),e(f,{onClick:r[1]||(r[1]=V=>d("passwordRef"))},{default:o(()=>[b($(_.$t("header.changePassword")),1)]),_:1}),e(f,{onClick:l,divided:""},{default:o(()=>[b($(_.$t("header.logout")),1)]),_:1})]),_:1})]),default:o(()=>[it]),_:1}),e(at,{ref_key:"infoRef",ref:t},null,512),e(dt,{ref_key:"passwordRef",ref:a},null,512)],64)}}});var mt=k(pt,[["__scopeId","data-v-3cde4a66"]]);const ft=p=>(U("data-v-10d0a0d1"),p=p(),z(),p),vt={class:"header"},gt={class:"header-lf flx-center"},ht={class:"header-ri flx-center"},bt={class:"header-icon"},Ct=ft(()=>i("span",{class:"username"},"Clm",-1)),wt=C({__name:"index",setup(p){const n=D(),s=x(()=>n.themeConfig);return(l,t)=>(v(),B("div",vt,[i("div",gt,[e(ke,{id:"collapseIcon"}),c(s).breadcrumb?(v(),h(Ae,{key:0,id:"breadcrumb"})):G("",!0)]),i("div",ht,[i("div",bt,[e(Ie,{id:"language"}),e(ot,{id:"theme"}),e(Te,{id:"fullscreen"})]),Ct,e(mt)])]))}});var yt=k(wt,[["__scopeId","data-v-10d0a0d1"]]);const xt=C({__name:"MoreButton",setup(p){const n=X(),s=()=>{n.tabsMenuValue!==q&&n.removeTabs(n.tabsMenuValue)},l=()=>{n.closeMultipleTab(n.tabsMenuValue)},t=()=>{n.closeMultipleTab(),n.goHome()};return(a,d)=>{const _=u("arrow-down"),r=u("el-icon"),f=u("el-button"),w=u("el-dropdown-item"),m=u("el-dropdown-menu"),V=u("el-dropdown");return v(),h(V,{trigger:"click"},{dropdown:o(()=>[e(m,null,{default:o(()=>[e(w,{onClick:s},{default:o(()=>[b($(a.$t("tabs.closeCurrent")),1)]),_:1}),e(w,{onClick:l},{default:o(()=>[b($(a.$t("tabs.closeOther")),1)]),_:1}),e(w,{onClick:t},{default:o(()=>[b($(a.$t("tabs.closeAll")),1)]),_:1})]),_:1})]),default:o(()=>[e(f,{size:"small",type:"primary"},{default:o(()=>[i("span",null,$(a.$t("tabs.more")),1),e(r,{class:"el-icon--right"},{default:o(()=>[e(_)]),_:1})]),_:1})]),_:1})}}});var Vt=k(xt,[["__scopeId","data-v-665b1cee"]]);const $t={class:"tabs-box"},kt={class:"tabs-menu"},Ft=C({__name:"index",setup(p){const n=X(),s=x(()=>n.tabsMenuList),l=x({get:()=>n.tabsMenuValue,set:r=>{n.setTabsMenuValue(r)}}),t=I(),a=J();pe(()=>t.path,()=>{let r={title:t.meta.title,path:t.path,close:!0};n.addTabs(r)},{immediate:!0});const d=r=>{let f=r.props.name;a.push(f)},_=r=>{n.removeTabs(r)};return(r,f)=>{const w=u("el-icon"),m=u("el-tab-pane"),V=u("el-tabs");return v(),B("div",$t,[i("div",kt,[e(V,{modelValue:c(l),"onUpdate:modelValue":f[0]||(f[0]=y=>Q(l)?l.value=y:null),type:"card",onTabClick:d,onTabRemove:_},{default:o(()=>[(v(!0),B(S,null,K(c(s),y=>(v(),h(m,{key:y.path,path:y.path,label:y.title,name:y.path,closable:y.close},{label:o(()=>[y.icon?(v(),h(w,{key:0,class:"tabs-icon"},{default:o(()=>[(v(),h(L(y.icon)))]),_:2},1024)):G("",!0),b(" "+$(y.title),1)]),_:2},1032,["path","label","name","closable"]))),128))]),_:1},8,["modelValue"]),e(Vt)])])}}});var At=k(Ft,[["__scopeId","data-v-748cda7c"]]);let Z=[];const ee=(p,n)=>{p.forEach(s=>{var l;((l=s.meta)==null?void 0:l.keepAlive)&&s.name&&n.push(s.name),s.children&&s.children.length!==0&&ee(s.children,n)})};ee(T,Z);const Bt={class:"main-box"},Et=C({__name:"index",setup(p){const n=j(),s=D(),l=x(()=>s.themeConfig);return M(async()=>{const t=await he();t.data&&n.setAuthButtons(t.data)}),(t,a)=>{const d=u("el-aside"),_=u("el-header"),r=u("router-view"),f=u("el-main"),w=u("el-container");return v(),h(w,null,{default:o(()=>[e(d,null,{default:o(()=>[e(c(Ve))]),_:1}),e(w,null,{default:o(()=>[e(_,null,{default:o(()=>[e(yt),c(l).tabs?(v(),h(At,{key:0})):G("",!0)]),_:1}),e(f,null,{default:o(()=>[i("section",Bt,[e(r,null,{default:o(({Component:m,route:V})=>[e(me,{appear:"",name:"fade-transform",mode:"out-in"},{default:o(()=>[(v(),h(fe,{include:c(Z)},[(v(),h(L(m),{key:V.path}))],1032,["include"]))]),_:2},1024)]),_:1})])]),_:1})]),_:1})]),_:1})}}});var Rt=k(Et,[["__scopeId","data-v-c6b177f0"]]);export{Rt as default};
