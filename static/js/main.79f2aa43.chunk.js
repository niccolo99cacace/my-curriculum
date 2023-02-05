(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/mePhoto.d35beecd.jpg"},22:function(e,t,a){e.exports=a(55)},29:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a(2),o=Object(n.createContext)(),i=function(e){var t=e.children,a=Object(n.useState)("light"),r=Object(l.a)(a,2),i=r[0],s=r[1];Object(n.useEffect)(function(){var e=window.matchMedia("(prefers-color-scheme: dark)");s(e.matches?"dark":"light"),e.addEventListener("change",function(e){s(e.matches?"dark":"light")})},[]);return c.a.createElement(o.Provider,{value:[{themeName:i,toggleTheme:function(){var e="dark"===i?"light":"dark";localStorage.setItem("themeName",e),s(e)}}]},t)},s=a(12),m="https://morganbb104.github.io/HW_20_Portfolio_withReact/",u="NC.",h={photo:a.n(s).a,name:"NICCOLO' CACACE",role:"Software engineer",description:"UW and SMU bootcamp student living in Seattle,Washington. highly interested in cutting edge technology, web development and Java back end development.",social:{linkedin:"https://www.linkedin.com/in/niccol%C3%B2-cacace-7a2553248/",github:"https://github.com/niccolo99cacace"}},d=[{name:"Movie Tracker",description:"As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.",stack:["localstorage","Openweather API","Google Map API","Movie Database API"],sourceCode:"https://github.com/Mike-C-Sanders/Movie-Tracker",livePreview:"https://mike-c-sanders.github.io/Movie-Tracker/"},{name:"Event Planner",description:"Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.",stack:["swiper.js","npm","jawsdb","handlebars","express","nodejs"],sourceCode:"https://github.com/Morganbb104/Event_Planner_project2",livePreview:"https://obscure-chamber-98928.herokuapp.com/"},{name:"Resource Planner",description:"Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects",stack:["html-css-javascript","sequelize","React"],sourceCode:"https://github.com/stone-com/Resource-Planner",livePreview:"https://resource-planner-group2.herokuapp.com/"},{name:"GameStoreData(back end)",description:"GameStoreData is able to let user retrieve the game from database based on its year and category",stack:["Java 8","MySQL","React"],sourceCode:"https://github.com/stone-com/Resource-Planner"},{name:"Music Store(back end)",description:"MusicStore is able to direct user to the desired page based on its endpoints by track, album,artist and label",stack:["html-css-javascript","sequelize","React"],sourceCode:"https://github.com/Morganbb104/M7-project2-musictore-recommendations-Huang_Chengchien",livePreview:"https://cheng32-musicstore-catalog.herokuapp.com/track"}],p=["HTML","CSS","JavaScript","Express","MySQL","MongoDB","React","Material UI","Bootstrap","Git","MERN","C","Java","Java Spring Boot"],b="niccolo99cacace@gmail.com",E=a(15),f=a.n(E),g=a(13),v=a.n(g),k=a(17),_=a.n(k),N=a(16),w=a.n(N),j=(a(29),function(){var e=Object(n.useContext)(o),t=Object(l.a)(e,1)[0],a=t.themeName,r=t.toggleTheme,i=Object(n.useState)(!1),s=Object(l.a)(i,2),m=s[0],u=s[1],h=function(){return u(!m)};return c.a.createElement("nav",{className:"center nav"},c.a.createElement("ul",{style:{display:m?"flex":null},className:"nav__list"},d.length?c.a.createElement("li",{className:"nav__list-item"},c.a.createElement("a",{href:"#projects",onClick:h,className:"link link--nav"},"Projects")):null,p.length?c.a.createElement("li",{className:"nav__list-item"},c.a.createElement("a",{href:"#skills",onClick:h,className:"link link--nav"},"Skills")):null,b?c.a.createElement("li",{className:"nav__list-item"},c.a.createElement("a",{href:"#contact",onClick:h,className:"link link--nav"},"Contact")):null),c.a.createElement("button",{type:"button",onClick:r,className:"btn btn--icon nav__theme","aria-label":"toggle theme"},"dark"===a?c.a.createElement(v.a,null):c.a.createElement(f.a,null)),c.a.createElement("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation"},m?c.a.createElement(w.a,null):c.a.createElement(_.a,null)))}),y=(a(34),function(){var e=m,t=u;return c.a.createElement("header",{className:"header center"},c.a.createElement("h3",null,e?c.a.createElement("a",{href:e,className:"link"},t):t),c.a.createElement(j,null))}),C=a(8),P=a.n(C),S=a(18),M=a.n(S),O=(a(36),function(){var e=h.photo,t=h.name,a=h.role,n=h.description,r=h.social;return c.a.createElement("div",{className:"about center"},e&&c.a.createElement("img",{height:"200px",alt:"Avatar placeholder",src:e}),t&&c.a.createElement("h1",null,"Hi, I am ",c.a.createElement("span",{className:"about__name"},t,".")),a&&c.a.createElement("h2",{className:"about__role"},"A ",a,"."),c.a.createElement("p",{className:"about__desc"},n&&n),c.a.createElement("div",{className:"about__contact center"},c.a.createElement("a",{href:"file:///C:\\Users\\Administrator\\Documents\\NicProjects\\NiccoloPortfolio\\HW_20_Portfolio_withReact\\public\\myCV.pdf"},c.a.createElement("span",{type:"button",className:"btn btn--outline"},"Resume")),r&&c.a.createElement(c.a.Fragment,null,r.github&&c.a.createElement("a",{href:r.github,"aria-label":"github",className:"link link--icon"},c.a.createElement(P.a,null)),r.linkedin&&c.a.createElement("a",{href:r.linkedin,"aria-label":"linkedin",className:"link link--icon"},c.a.createElement(M.a,null)))))}),R=a(6),x=a.n(R),A=a(19),I=a.n(A),H=(a(38),function(e){var t=e.project;return c.a.createElement("div",{className:"project"},c.a.createElement("h3",null,t.name),c.a.createElement("p",{className:"project__description"},t.description),t.stack&&c.a.createElement("ul",{className:"project__stack"},t.stack.map(function(e){return c.a.createElement("li",{key:x()(),className:"project__stack-item"},e)})),t.sourceCode&&c.a.createElement("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon"},c.a.createElement(P.a,null)),t.livePreview&&c.a.createElement("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon"},c.a.createElement(I.a,null)))}),J=(a(40),function(){return d.length?c.a.createElement("section",{id:"projects",className:"section projects"},c.a.createElement("h2",{className:"section__title"},"Projects"),c.a.createElement("div",{className:"projects__grid"},d.map(function(e){return c.a.createElement(H,{key:x()(),project:e})}))):null}),L=(a(42),function(){return p.length?c.a.createElement("section",{className:"section skills",id:"skills"},c.a.createElement("h2",{className:"section__title"},"Skills"),c.a.createElement("ul",{className:"skills__list"},p.map(function(e){return c.a.createElement("li",{key:x()(),className:"skills__list-item btn btn--plain"},e)}))):null}),B=a(20),T=a.n(B),D=(a(44),function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){var e=function(){return window.pageYOffset>500?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]),a?c.a.createElement("div",{className:"scroll-top"},c.a.createElement("a",{href:"#top"},c.a.createElement(T.a,{fontSize:"large"}))):null}),W=(a(46),function(){return b?c.a.createElement("section",{className:"section contact center",id:"contact"},c.a.createElement("h2",{className:"section__title"},"Contact"),c.a.createElement("a",{href:"mailto:".concat(b)},c.a.createElement("span",{type:"button",className:"btn btn--outline"},"Email me"))):null}),G=(a(48),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("a",{href:"https://github.com/Morganbb104/HW_20_Portfolio_withReact",className:"link footer__link"},"Created By Cheng Chien Huang"))}),U=(a(50),function(){var e=Object(n.useContext)(o),t=Object(l.a)(e,1)[0].themeName;return c.a.createElement("div",{id:"top",className:"".concat(t," app")},c.a.createElement(y,null),c.a.createElement("main",null,c.a.createElement(O,null),c.a.createElement(J,null),c.a.createElement(L,null),c.a.createElement(W,null)),c.a.createElement(D,null),c.a.createElement(G,null))});a(52);Object(r.render)(c.a.createElement(i,null,c.a.createElement(U,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.79f2aa43.chunk.js.map