import{e as _,a as f,q as r,p as S,z as l,v as s,x as g,A as v}from"./_Bj9MHulz.js";const w="",h="",p=()=>{},n=S(4,(a,t)=>l(a,t),()=>l),k=s(3,(a,t)=>v(a,u(a))),c=s(2,(a,t)=>n(a,t),()=>n),y=_("a1",(a,{1:t})=>{{const i=localStorage.getItem(t.key);i&&n(a,JSON.parse(i));const d=t.key,o=e=>{e.key===d&&n(a,JSON.parse(e.newValue??""))};window.addEventListener("storage",o,{signal:r(a,0)}),window.addEventListener("local-storage-update",e=>o(e.detail),{signal:r(a,1)})}}),A=s(1,(a,t)=>{g(a,0),g(a,1),y(a),c(a,t.value),k(a,t.key)},()=>c);function u({3:a}){return function(t){t=JSON.stringify(t),localStorage.setItem(a,t),window.dispatchEvent(new CustomEvent("local-storage-update",{detail:{key:a,newValue:t,storageArea:localStorage}}))}}f("a0",u);export{w as _,h as a,p as b,A as c};
//# sourceMappingURL=_DAPjSMIw.js.map
