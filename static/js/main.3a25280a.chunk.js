(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/landing_planet.572ff030.png"},24:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),o=(a(29),a(6)),s=a(7),i=a(9),m=a(8),d=a(12),u=a(2),p=a(43),h=a(42),v=(a(30),a(15)),f=(a(31),a(21)),E=a.n(f),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n.scrollHandler=n.scrollHandler.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollHandler)}},{key:"scrollHandler",value:function(){var e=document.querySelector(".landing"),t=document.querySelector(".landing--planet"),a=(document.querySelector(".landing--planet--img"),window.pageYOffset),n=window.innerHeight,c=(n-a)/n,r=(n+a)/n;e.style.transform="translateY(".concat(.75*a,"px) scale(").concat(c,")"),t.style.height="".concat(r*(1.5*n/2),"px"),t.style.transform="scale(".concat(.75*c,")"),t.style.bottom="-2rem",a<150&&(t.style.height="".concat(.5*n*r,"px"),t.style.transform="scale(".concat(.9*c,")"))}},{key:"render",value:function(){return c.a.createElement("div",{className:"landing--wrapper"},c.a.createElement("div",{className:"landing--planet"},c.a.createElement("img",{src:E.a,alt:"",className:"landing--planet--img"})),c.a.createElement("div",{className:"landing"},c.a.createElement("div",{className:"landing__primary"},"Brijgopal Bharadwaj"),c.a.createElement("div",{className:"landing__typer"},c.a.createElement("div",{className:"landing__typer--line1"},"A passionate web developer, who loves"),c.a.createElement("div",{className:"landing__typer--line2"},"deep-diving in the concepts of data-science,"),c.a.createElement("div",{className:"landing__typer--line3"},"and knows his way around the realm of IoT...")),c.a.createElement("div",{className:"landing__btn-grp"},c.a.createElement("div",{className:"landing__btn"},"Get in Touch!"),c.a.createElement("div",{className:"landing__btn"},"Download Resume"))))}}]),a}(n.Component),g=Object(u.f)(b),w=(a(37),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"experience"})}}]),a}(n.Component)),j=Object(u.f)(w),O=(a(38),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"loader--container"},c.a.createElement("div",{className:"rocketloader--wrapper"},c.a.createElement("span",{className:"rocketloader"},c.a.createElement("span",{className:"rocketloader__rocket"},c.a.createElement("svg",{width:"164",height:"164"},c.a.createElement("circle",{className:"rocketloader__circle",cx:"78",cy:"82",r:"77",transform:"rotate(-90, 80, 80)"})),c.a.createElement("i",{className:"rocketloader__icon"},c.a.createElement("svg",{className:"rocketloader__svg"},c.a.createElement("polygon",{points:"21 26.24 15.15 21.04 15.15 6.22 10.51 0 5.86 6.22 5.86 17.46 5.85 21.04 0 26.24 0 36 5.86 30.79 5.86 32.39 10.51 32.39 15.15 32.39 15.15 30.8 21 36 21 26.24"})))))),c.a.createElement("div",{className:"eisenfoxLoader--wrapper"},c.a.createElement("div",{className:"eisenfoxLoader eisenfoxLoader-2"})))}}]),a}(n.Component)),y=Object(u.f)(O),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={showLoader:!1,showPage:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({showLoader:!1,showPage:!0})}),5e3),this.setState({showLoader:!0}),window.addEventListener("scroll",this.scrollHandler)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home--bg"},c.a.createElement("div",{id:"stars"}),c.a.createElement("div",{id:"stars2"}),c.a.createElement("div",{id:"stars3"})),c.a.createElement(p.a,{component:null},this.state.showLoader&&c.a.createElement(h.a,{in:this.state.showLoader,classNames:"rocketloader",timeout:3e3},c.a.createElement(y,null))),c.a.createElement(p.a,{component:null},this.state.showPage&&c.a.createElement(h.a,{in:this.state.showPage,classNames:"home",timeout:5e3},c.a.createElement("div",{className:"home"},c.a.createElement(g,null),c.a.createElement(j,null)))))}}]),a}(n.Component),_=Object(u.f)(N),k=(a(39),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"about"},"Welcome to About")}}]),a}(n.Component)),x=Object(u.f)(k),L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(d.a,{basename:""},c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/",component:_}),c.a.createElement(u.a,{exact:!0,path:"/about",component:x})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.3a25280a.chunk.js.map