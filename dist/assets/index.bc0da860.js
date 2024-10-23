import{h as t,G as O,a4 as y,k as x,ag as L,ah as S,bO as g,a0 as T,$ as M,b as f,a as _,N as W,O as U,L as w,S as p,ax as E,bP as h,m as z,bQ as b,ae as m,a7 as l,aD as N,V as n,W as o,bR as Y,bS as H,bT as j,bU as F,bV as X,bW as q,bX as R,bY as J,bZ as K,aR as Q,b_ as Z,b$ as G,c0 as ee,ay as te,c1 as ne,c2 as oe,aK as re,aW as ae,b9 as ie,X as P,ak as D,c3 as se,bm as le,be as ce,bf as ue,bg as ge,bh as me,bi as de,aC as I,bk as C,bl as k,ba as _e,c4 as he,n as pe,c5 as Ee,c6 as fe,c7 as be}from"./index.3c4a096d.js";import{b as Ie,a as $e}from"./useTitle.06d35e18.js";import{A as ve,f as Ae,g as Le,h as Se,i as Te,j as Re}from"./index.64084f48.js";import{S as De}from"./index.d62bb8da.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e))(i||{}),Oe=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Oe||{});const we=e=>{const r=x(()=>{if(!L.is_admin(S())){if(e.role===void 0)return!1;if(e.role===g.GENERAL&&!L.is_general(S()))return!1}return!0});return t(M,{get fallback(){return t(Pe,e)},get children(){return[t(T,{get when(){return!r()},children:null}),t(T,{get when(){return e.children},get children(){return t(Ce,e)}})]}})},Pe=e=>{const{pathname:r}=f(),a=_(),c=()=>r()===e.to;return t(ve,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:W,get href(){return e.to},onClick:u=>{var A;if(V(),e.refresh){(A=u.stopPropagation)==null||A.call(u);let d=e.to;d.startsWith("http")||(d=U(d)),window.open(d,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":w(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return a(e.title)}})]}})},Ce=e=>{const{pathname:r}=f(),[a,c]=z(r().includes(e.to)),u=_();return t(l,{w:"$full",get children(){return[t(b,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:w()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(m,{get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return u(e.title)}})]}}),t(E,{as:Ae,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(p,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t($,{get items(){return e.children}})}})}})]}})},$=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(O,{get each(){return e.items},children:r=>t(we,r)})}});function ke(e){return N({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>o(()=>import("./Common.3ad6bc3b.js"),["assets/Common.3ad6bc3b.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/useTitle.06d35e18.js","assets/SettingItem.bf2e7550.js","assets/item_type.be442da4.js","assets/index.64084f48.js","assets/ResponsiveGrid.f905a2ba.js","assets/index.d62bb8da.js"])),v=[{title:"manage.sidemenu.profile",icon:Y,to:"/@manage",role:g.GUEST,component:n(()=>o(()=>import("./Profile.ad162a22.js"),["assets/Profile.ad162a22.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/useTitle.06d35e18.js","assets/index.64084f48.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:H,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:j,to:"/@manage/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:F,to:"/@manage/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:X,to:"/@manage/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:q,to:"/@manage/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:R,to:"/@manage/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:R,to:"/@manage/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.s3",icon:J,to:"/@manage/settings/s3",component:n(()=>o(()=>import("./S3.5e4b6590.js"),["assets/S3.5e4b6590.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/useTitle.06d35e18.js","assets/SettingItem.bf2e7550.js","assets/item_type.be442da4.js","assets/index.64084f48.js","assets/ResponsiveGrid.f905a2ba.js","assets/FolderTree.019805f8.js","assets/index.44cb70d2.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.d62bb8da.js"]))},{title:"manage.sidemenu.other",icon:K,to:"/@manage/settings/other",component:n(()=>o(()=>import("./Other.08e67e06.js"),["assets/Other.08e67e06.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/useTitle.06d35e18.js","assets/SettingItem.bf2e7550.js","assets/item_type.be442da4.js","assets/index.64084f48.js","assets/index.d62bb8da.js"]))}]},{title:"manage.sidemenu.tasks",icon:ke,to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:Q,to:"/@manage/tasks/aria2",component:n(()=>o(()=>import("./offline_download.ef33484a.js"),["assets/offline_download.ef33484a.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/useTitle.06d35e18.js","assets/Tasks.7266f03c.js","assets/Paginator.c5641195.js","assets/index.64084f48.js"]))},{title:"manage.sidemenu.upload",icon:Z,to:"/@manage/tasks/upload",component:n(()=>o(()=>import("./Upload.8ad510b7.js"),["assets/Upload.8ad510b7.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/useTitle.06d35e18.js","assets/Tasks.7266f03c.js","assets/Paginator.c5641195.js","assets/index.64084f48.js"]))},{title:"manage.sidemenu.copy",icon:G,to:"/@manage/tasks/copy",component:n(()=>o(()=>import("./Copy.d8335464.js"),["assets/Copy.d8335464.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/useTitle.06d35e18.js","assets/Tasks.7266f03c.js","assets/Paginator.c5641195.js","assets/index.64084f48.js"]))}]},{title:"manage.sidemenu.users",icon:ee,to:"/@manage/users",component:n(()=>o(()=>import("./Users.97eabd5c.js"),["assets/Users.97eabd5c.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/useTitle.06d35e18.js","assets/DeletePopover.2dab8120.js","assets/Wether.91bb2482.js"]))},{title:"manage.sidemenu.storages",icon:Le,to:"/@manage/storages",component:n(()=>o(()=>import("./Storages.d7e0b91e.js"),["assets/Storages.d7e0b91e.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/useTitle.06d35e18.js","assets/DeletePopover.2dab8120.js"]))},{title:"manage.sidemenu.metas",icon:De,to:"/@manage/metas",component:n(()=>o(()=>import("./Metas.904c0642.js"),["assets/Metas.904c0642.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/useTitle.06d35e18.js","assets/DeletePopover.2dab8120.js","assets/Wether.91bb2482.js"]))},{title:"manage.sidemenu.indexes",icon:te,to:"/@manage/indexes",component:n(()=>o(()=>import("./indexes.d29f659f.js"),["assets/indexes.d29f659f.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/Common.3ad6bc3b.js","assets/useTitle.06d35e18.js","assets/SettingItem.bf2e7550.js","assets/item_type.be442da4.js","assets/index.64084f48.js","assets/ResponsiveGrid.f905a2ba.js","assets/index.d62bb8da.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:Se,component:n(()=>o(()=>import("./backup-restore.d668815d.js"),["assets/backup-restore.d668815d.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/useTitle.06d35e18.js","assets/index.44cb70d2.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.about",icon:ne,to:"/@manage/about",role:g.GUEST,component:n(()=>o(()=>import("./About.4b228140.js"),["assets/About.4b228140.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/useTitle.06d35e18.js"]))},{title:"manage.sidemenu.docs",icon:Te,to:"https://alist.nn.ci",role:g.GUEST,external:!0},{title:"manage.sidemenu.home",icon:oe,to:"/",role:g.GUEST,refresh:!0}],{isOpen:Ve,onOpen:Be,onClose:V}=re(),[ye,xe]=ae(()=>ie.get("/auth/logout")),Me=()=>{const e=_(),{to:r}=f(),a=async()=>{_e(await xe(),()=>{he(),pe.success(e("manage.logout_success")),r(`/@login?redirect=${encodeURIComponent(location.pathname)}`)})};return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return P("$background","$neutral2")()},get children(){return[t(b,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(m,{spacing:"$2",get children(){return[t(D,{"aria-label":"menu",get icon(){return t(Re,{})},display:{"@sm":"none"},onClick:Be,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{r("/@manage")},get children(){return e("manage.title")}})]}}),t(m,{spacing:"$1",get children(){return t(D,{"aria-label":"logout",get icon(){return t(se,{})},get loading(){return ye()},onClick:a,size:"sm"})}})]}}),t(le,{get opened(){return Ve()},placement:"left",onClose:V,get children(){return[t(ce,{}),t(ue,{get children(){return[t(ge,{}),t(me,{color:"$info9",get children(){return e("manage.title")}}),t(de,{get children(){return[t($,{items:v}),t(I,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}})]}})]}})]}})},We=[{to:"/storages/add",component:n(()=>o(()=>import("./AddOrEdit.560aa146.js"),["assets/AddOrEdit.560aa146.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.f905a2ba.js"]))},{to:"/storages/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.560aa146.js"),["assets/AddOrEdit.560aa146.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.f905a2ba.js"]))},{to:"/users/add",component:n(()=>o(()=>import("./AddOrEdit.44a575c7.js"),["assets/AddOrEdit.44a575c7.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/FolderTree.019805f8.js","assets/index.64084f48.js"]))},{to:"/users/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.44a575c7.js"),["assets/AddOrEdit.44a575c7.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/FolderTree.019805f8.js","assets/index.64084f48.js"]))},{to:"/metas/add",component:n(()=>o(()=>import("./AddOrEdit.e4036983.js"),["assets/AddOrEdit.e4036983.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/FolderTree.019805f8.js","assets/index.64084f48.js"]))},{to:"/metas/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.e4036983.js"),["assets/AddOrEdit.e4036983.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css","assets/FolderTree.019805f8.js","assets/index.64084f48.js"]))},{to:"/2fa",component:n(()=>o(()=>import("./2fa.bca7f50f.js"),["assets/2fa.bca7f50f.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css"]))},{to:"/messenger",component:n(()=>o(()=>import("./Messenger.b658cde4.js"),["assets/Messenger.b658cde4.js","assets/index.3c4a096d.js","assets/index.c4c82a28.css"]))}],Ue=e=>(Ie(e.title),t(I,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),B=(e,r=[])=>(e.forEach(a=>{a.children?B(a.children,r):r.push({to:Ee(a.to,"/@manage"),component:a.component||(()=>t(Ue,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),r),ze=B(v).concat(We),Ne=()=>{const e=_();return $e(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Me,{}),t(b,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return P("$background","$neutral2")()},overflowY:"auto",get children(){return[t($,{items:v}),t(I,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(fe,{get children(){return t(O,{each:ze,children:r=>t(be,{get path(){return r.to},get component(){return r.component}})})}})}})]}})]}})},Xe=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"}));export{Oe as F,i as G,Xe as i};
