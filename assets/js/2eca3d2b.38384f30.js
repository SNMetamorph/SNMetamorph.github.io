"use strict";(self.webpackChunksnmetamorph_blog=self.webpackChunksnmetamorph_blog||[]).push([[6614],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=d(a),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(m,r(r({ref:e},p),{},{components:a})):n.createElement(m,r({ref:e},p))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2317:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={slug:"vfd-toshiba-00dn901",title:"Breaking down Toshiba 00DN901 customer display",authors:"snmetamorph",tags:["vfd","arduino","electronics","00dn901","m202md10c","41d0160","customer display"],description:"Investigating about how works Toshiba 00DN901 vacuum-fluorescent display (VFD) with 2x20 characters. Display is controllable through RS-232-like interface with 9600/8-N-1 configuration, and uses it's proprietary protocol."},r=void 0,s={permalink:"/posts/vfd-toshiba-00dn901",source:"@site/blog/2023-09-25-toshiba-vfd/index.md",title:"Breaking down Toshiba 00DN901 customer display",description:"Investigating about how works Toshiba 00DN901 vacuum-fluorescent display (VFD) with 2x20 characters. Display is controllable through RS-232-like interface with 9600/8-N-1 configuration, and uses it's proprietary protocol.",date:"2023-09-25T00:00:00.000Z",formattedDate:"September 25, 2023",tags:[{label:"vfd",permalink:"/posts/tags/vfd"},{label:"arduino",permalink:"/posts/tags/arduino"},{label:"electronics",permalink:"/posts/tags/electronics"},{label:"00dn901",permalink:"/posts/tags/00-dn-901"},{label:"m202md10c",permalink:"/posts/tags/m-202-md-10-c"},{label:"41d0160",permalink:"/posts/tags/41-d-0160"},{label:"customer display",permalink:"/posts/tags/customer-display"}],readingTime:4.53,hasTruncateMarker:!1,authors:[{name:"Vladimir",title:"Blog author",url:"https://github.com/SNMetamorph",imageURL:"https://github.com/SNMetamorph.png",key:"snmetamorph"}],frontMatter:{slug:"vfd-toshiba-00dn901",title:"Breaking down Toshiba 00DN901 customer display",authors:"snmetamorph",tags:["vfd","arduino","electronics","00dn901","m202md10c","41d0160","customer display"],description:"Investigating about how works Toshiba 00DN901 vacuum-fluorescent display (VFD) with 2x20 characters. Display is controllable through RS-232-like interface with 9600/8-N-1 configuration, and uses it's proprietary protocol."},nextItem:{title:"Compiling Half-Life 1 maps on Android TV-box",permalink:"/posts/compiling-hl1-maps"}},l={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Dismantling the display",id:"dismantling-the-display",level:2},{value:"Determining pinout",id:"determining-pinout",level:2},{value:"Connecting display to MCU",id:"connecting-display-to-mcu",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d},c="wrapper";function u(t){let{components:e,...o}=t;return(0,i.kt)(c,(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Recently I found such an interesting and kind of vintage piece of hardware at local store - vacuum-fluorescent display (VFD) with 2x20 characters. So I decided to buy two of them for future investigations since they're relatively cheap."),(0,i.kt)("p",null,"Originally, display distributed with pole and cable. I got rid of pole since I don't need it, anyway you can find how it looks without any problems. About cable: it has familiar DB9 male connector on one side, but on other side there is some strange connector that vaguely looks like 8P8C, but I've never seen it before anywhere. "),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Note that althrough DB9 connector is used, display is not compatible with common serial port, don't try to plug it in PC, it won't work and can even damage your port.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(5004).Z,width:"1405",height:"1145"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"Proprietary connector on display cable"))))),(0,i.kt)("p",null,"This is how display without pole looks like:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6440).Z,width:"8160",height:"5722"}),"\n",(0,i.kt)("img",{src:a(2330).Z,width:"8160",height:"6120"}),"\n",(0,i.kt)("img",{src:a(1297).Z,width:"8160",height:"6120"}),"\n",(0,i.kt)("img",{src:a(7145).Z,width:"8160",height:"6120"}),"\n",(0,i.kt)("img",{src:a(1887).Z,width:"7364",height:"6119"})),(0,i.kt)("h2",{id:"dismantling-the-display"},"Dismantling the display"),(0,i.kt)("p",null,"Let's try to detach front panel: that can be done with bare hands, you just need to pull front panel both down and away from the display. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Front panel has dimming filter in it, and it is not glued or welded and can be easily pulled away, in case if you want to polish or clean this filter.")),(0,i.kt)("p",null,"This is how front panel looks like on the back side:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1222).Z,width:"8160",height:"4349"})),(0,i.kt)("p",null,"Next, you need to remove three screws on both sides:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3240).Z,width:"8160",height:"6120"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(4816).Z,width:"8160",height:"4936"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"Display case without PCB, it has a lot of free space, even when PCB attached"))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(7052).Z,width:"8160",height:"6120"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"td"},"PCB extracted from display case"))))),(0,i.kt)("p",null,"First thing we see, is that display based on Futaba M202MD10C board. From this information I found out that display more likely uses\nUART with 9600-8N1 configuration (but also with inverted logic levels). So I'll test it in future steps. Also it's worth to notice that if you'll try to gather information about this board, you'll find much more than it was when I was doing all this research (reason will be described in the end of this post)."),(0,i.kt)("h2",{id:"determining-pinout"},"Determining pinout"),(0,i.kt)("p",null,"But let's assume that we're at time point when all of needed information is not available yet. Next step we should do is determine display pinout. Probably, since display has only four pins, it shouldn't be that hard. I easily found GND pin and two VCC pins (that is so strange that we have 2 pins for VCC, but only 1 for ground). Therefore, last remaining pin is used for transfer data from microcontroller to display. As a result, we got this table:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9742).Z,width:"1600",height:"1200"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Pin number"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"DATA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"VCC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"VCC")))),(0,i.kt)("p",null,"We got pinout scheme and obviously next step will be applying voltage to display. But what exact voltage we should use? I guess that 5 Volts will not enough. Then I'll try 9 and 12 Volts. As it turned out later, 9 Volts also not enough. But with 12 Volts it worked - display showed underscore at first row. "),(0,i.kt)("h2",{id:"connecting-display-to-mcu"},"Connecting display to MCU"),(0,i.kt)("p",null,"And it's time to bring other hardware to this journey - I'll use Arduino Uno and try to send some information to display and check what will happen. For this we need pretty simple code snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'#include <Arduino.h>\n#include <SoftwareSerial.h>\n\n// display DATA should be connected to pin #3, pin #2 will be unused\n// "true" as third argument means that logic levels will be inverted\nSoftwareSerial softSerial(2, 3, true);\n\nvoid setup() {\n    // sets proper baudrate according to information obtained earlier\n    softSerial.begin(9600);\n\n    // send some ASCII text to check is it even works\n    softSerial.print("Wake up, Neo...");\n}\n\nvoid loop() {\n}\n')),(0,i.kt)("p",null,"And it worked without any problems!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2544).Z,width:"1901",height:"1043"})),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This post in theory can be much longer, I didn't covered determining other functions of display protocol, such as controlling cursor position, dimming, etc. But there is nothing interesting it in, really. It's just sending random bytes to serial stream and see what happened. For narrow down the number of possible bytes combinations I checked datasheets for similar displays from Futaba corporation. Also, some russian guy with nickname ",(0,i.kt)("inlineCode",{parentName:"p"},"abomin")," helps me with code pages and custom character defining feature a lot. And one by one, I determined all things that this display can do. "),(0,i.kt)("p",null,"And result of all this investigations was ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduinolibraries.info/libraries/futaba-vfd-m202-md10-c"},"library for working with Futaba M202MD10C board on Arduino framework"),". This library exposes in it's API all possible functionality of displays based on this board. Library is well documented and contains bunch of code examples that covers different library functions. Therefore, there is no problems at all to create your own library that works with this display, in case if you want to use display with STM microcontrollers or just don't want to depends on any kind of frameworks. "),(0,i.kt)("p",null,"After some time I got an idea to make thing like meteostation, but based on this display. It shows current air temperature, relative humidity, atmospheric pressure and carbon dioxide concentration on display, and also sends all of that information to Home Assistant through MQTT. That thing based on ESP8266 microcontroller, and sensors BME280 and MH-Z14A used too. Energy consumption of this device is around 6 Watts, a most of this bugdet used by display. This is how this device looks:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7559).Z,width:"1762",height:"1045"})))}u.isMDXComponent=!0},1297:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/back-cb72bb560255958003385e8fae6a17f2.jpg"},4816:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/case_backside-531c93755e6b2f6aab4f8c2776aaeb60.jpg"},5004:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/connector-c2edc0a0bc6729f90153e8e97facad03.jpg"},7559:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/device-afa9b226e1458d8844ad67e7fe4f303d.jpg"},2330:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/down-8937e1cdd528f7dd2a503afd04aa26af.jpg"},2544:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/final-afe44e7133f1ca220b117d1db6beb52e.jpg"},6440:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/front-88ef4e330d796f607b9a3a4a8638c4c3.jpg"},1222:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/front_panel-71c83b5b257bdb42212f6a5a1c85a654.jpg"},7052:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/pcb1-3baacbac83a3a444fd3dcca285e14b8d.jpg"},9742:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/pinout-4122880b949f13641f475a2bad95c88f.jpg"},1887:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/side-52ea7886f33176166a1542379e38f524.jpg"},7145:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/up-4478224e44f6007e27c5e714121a1dbd.jpg"},3240:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/vial-1dba9076a29790db373dea5f18cd46d0.jpg"}}]);