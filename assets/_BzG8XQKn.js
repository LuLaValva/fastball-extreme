import{n as _,r as f,p as i,o as S,z as l,v as s,x as g,A as v}from"./_CHUHstzI.js";const w="",h="",p=()=>{},n=S(4,(t,a)=>l(t,a),()=>l),k=s(3,(t,a)=>v(t,u(t))),c=s(2,(t,a)=>n(t,a),()=>n),y=_("a1",(t,{1:a})=>{{const o=localStorage.getItem(a.key);o&&n(t,JSON.parse(o));const d=a.key,r=e=>{e.key===d&&n(t,JSON.parse(e.newValue??""))};window.addEventListener("storage",r,{signal:i(t,0)}),window.addEventListener("local-storage-update",e=>r(e.detail),{signal:i(t,1)})}}),A=s(1,(t,a)=>{g(t,0),g(t,1),y(t),c(t,a.value),k(t,a.key)},()=>c);function u({3:t}){return function(a){a=JSON.stringify(a),localStorage.setItem(t,a),window.dispatchEvent(new CustomEvent("local-storage-update",{detail:{key:t,newValue:a,storageArea:localStorage}}))}}f("a0",u);export{h as _,w as a,p as b,A as c};
//# sourceMappingURL=_BzG8XQKn.js.map
