"use strict";(self.webpackChunksnmetamorph_blog=self.webpackChunksnmetamorph_blog||[]).push([[410],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,b=u["".concat(c,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},782:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"Contributions"},a="Xash3D FWGS",p={type:"mdx",permalink:"/contributions",source:"@site/src/pages/contributions.md",title:"Contributions",description:"There are a lot of things: bug fixing, bug reporting, implementing new features, testing, etc.",frontMatter:{title:"Contributions"}},c=[],l={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xash3d-fwgs"},"Xash3D FWGS"),(0,o.kt)("p",null,"There are a lot of things: bug fixing, bug reporting, implementing new features, testing, etc.",(0,o.kt)("br",{parentName:"p"}),"\n","Full list of my contributions for this engine you can see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FWGS/xash3d-fwgs/commits?author=SNMetamorph"},"here"),"."),(0,o.kt)("h1",{id:"openwrt"},"OpenWrt"),(0,o.kt)("p",null,"Added support for router ZyXEL Keenetic Start, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openwrt/openwrt/pull/1740"},"here")," is pull request with all details."),(0,o.kt)("h1",{id:"tsmodnet"},"TSMOD.NET"),(0,o.kt)("p",null,'Implemented patcher dynamic library for game client to fix several problems such as periodically crashes and broken UTF-8 support in HUD-text.\nAlso it adds new features: on-screen speedometer, hiding of spectator panel, fix for Barrett "silent shoot".  '),(0,o.kt)("p",null,"Technically, it uses AsmJit library for generating proper executable code, and then this data is being injected in specific places of\ngame client library to change it's default behavior."))}u.isMDXComponent=!0}}]);