import{n as m,j as c,a as p,r as h,v as n,o as $,f as o,s as l,h as f,k as w,m as _}from"./_BfOpEZYQ.js";/* empty css         */import{a as i,_ as r,b as u,c as v}from"./_B5lPRM8E.js";import{_ as b,a as k,b as y,c as x,d}from"./_BBdFjbEY.js";const E="/assets/theme-JiacDWTY.mp3",B='<audio loop style="display: none"></audio>',D=" b",j=m("g0",t=>{{let s=function(){t[0].play(),e.forEach(a=>{document.removeEventListener(a,s)})};const e=["pointerdown","keydown"];e.forEach(a=>{document.addEventListener(a,s)})}});function L(t){c(t[0],"src",E),j(t)}const M=`<button aria-label=menu class=hamburger popovertarget=nav-popover popovertargetaction=show><svg viewBox="0 0 12 12" fill=none xmlns=http://www.w3.org/2000/svg><path d="M2 3H10M2 6H10M2 9H10" stroke-linecap=round stroke-linejoin=round></path></svg></button><nav id=nav-popover popover><a aria-label="exit level" href=/levels><svg viewBox="0 0 12 12" fill=none xmlns=http://www.w3.org/2000/svg><path d="M3.5 7.5h4a1 1 0 000-3h-4l1-1m-1 1 1 1" stroke-linecap=round stroke-linejoin=round></path></svg></a><button aria-label=fullscreen><svg viewBox="0 0 12 12" fill=none xmlns=http://www.w3.org/2000/svg><path d="m 2.5 7.5 v 2 h 2 m 3 0 h 2 v -2 m 0 -3 v -2 h -2 m -3 0 h -2 v 2" stroke-linecap=round stroke-linejoin=round></path></svg></button></nav>${i}${i}<div class=stats><h1 class=level-title><!> Level <!></h1><span class=deaths>☠️ <!></span></div><link rel=prefetch>${b}${B}`,H=`bDb l/${r}&/${r}&E%c%lDb%m b/${k}&/${D}&`,V=n(11,(t,e)=>{c(t[6],"href",e),d(t[7],g(t))},()=>f(7,d)),T=p("i2",n(10,(t,e)=>o(t[3],e&&"🌟"))),W=p("i1",n(9,(t,e)=>o(t[5],e))),q=m("i3",t=>$(t[0],"click",function(){document.documentElement.requestFullscreen().catch(e=>{alert(`Error attempting to enable fullscreen mode: ${e.message} (${e.name})`)})}));function A(t){l(t,1,W),u(t[1]),l(t,2,T),u(t[2]),o(t[4],t.$global.params.id),y(t[7]),L(t[8]),q(t),v(t[1],{value:0,key:`level-${t.$global.params.id}-deaths`}),v(t[2],{value:!1,key:`level-${t.$global.params.id}-victory`}),V(t,"/level/"+(+(t.$global.params.id??0)+1)),x(t[7],t.$global.tiles)}function g({11:t}){return function(){"navigation"in window?window.navigation.navigate(t,{prerender:!0}):window.location.href=t}}h("i0",g);const C=t=>{A(t[0])};h("d0",w(`<!>${M}<!>`,`D/${H}&D`,C));_();
//# sourceMappingURL=level.$id-aw03hh5J.js.map
