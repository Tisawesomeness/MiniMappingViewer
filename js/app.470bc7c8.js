(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(n,e,t){n.exports=t("2f39")},"2f39":function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"setVersionManifest",(function(){return E})),t.d(r,"setVersion",(function(){return I})),t.d(r,"setClientMapping",(function(){return j})),t.d(r,"setServerMapping",(function(){return S}));var a={};t.r(a),t.d(a,"loadVersions",(function(){return q})),t.d(a,"loadVersion",(function(){return A})),t.d(a,"loadMappings",(function(){return D}));var o={};t.r(o),t.d(o,"setVersions",(function(){return O})),t.d(o,"setMembers",(function(){return B})),t.d(o,"setClasses",(function(){return Q}));var i={};t.r(i),t.d(i,"loadVersions",(function(){return F})),t.d(i,"loadMappings",(function(){return G}));var s=t("967e"),u=t.n(s),c=(t("a481"),t("96cf"),t("fa84")),f=t.n(c),d=(t("985d"),t("31cd"),t("2b0e")),p=t("1f91"),l=t("42d2"),v=t("b05d"),m=t("2a19"),h=t("436b");d["a"].use(v["a"],{config:{},lang:p["a"],iconSet:l["a"],plugins:{Notify:m["a"],Dialog:h["a"]}});var g=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},b=[],w={name:"App"},x=w,M=t("2877"),y=Object(M["a"])(x,g,b,!1,null,null,null),P=y.exports,V=t("2f62"),k=function(){return{versionManifest:null,versions:{},clientMappings:{},serverMappings:{}}};function E(n,e){var t=e.data;n.versionManifest=t}function I(n,e){var t=e.version,r=e.data;n.versions[t]=r}function j(n,e){var t=e.version,r=e.data;n.clientMappings[t]=r}function S(n,e){var t=e.version,r=e.data;n.serverMappings[t]=r}t("7514"),t("551c"),t("06db");var C=t("bc3a"),L=t.n(C),_="https://corsanywhere.minidigger.me/",$="https://launchermeta.mojang.com/mc/game/version_manifest.json",q=function(n){var e=n.commit;return new Promise((function(n,t){L.a.get($).then((function(r){r&&200===r.status&&r.data?(e("setVersionManifest",{data:r.data}),n(r.data)):t("Error: "+r)})).catch((function(n){t(n)}))}))},A=function(n,e){var t=n.commit,r=n.state,a=e.versionId;return new Promise((function(n,e){var o=r.versionManifest.versions.find((function(n){return n.id===a}));o?L.a.get(o.url).then((function(r){r&&200===r.status&&r.data?(t("setVersion",{version:a,data:r.data}),n(r.data)):e("Error: "+r)})).catch((function(n){e(n)})):e("Version not found")}))},D=function(n,e){var t=n.commit,r=n.state,a=e.versionId;return new Promise((function(n,e){var o=r.versions?r.versions[a]:null;if(o){var i=o.downloads.client_mappings.url,s=o.downloads.server_mappings.url,u=!1;L.a.get(_+i).then((function(r){r&&200===r.status&&r.data?(t("setClientMapping",{version:a,data:r.data}),u?n():u=!0):e("Error: "+r)})),L.a.get(_+s).then((function(r){r&&200===r.status&&r.data?(t("setServerMapping",{version:a,data:r.data}),u?n():u=!0):e("Error: "+r)}))}else e("Version not found")}))},J={namespaced:!0,mutations:r,actions:a,state:k},N=function(){return{versions:null,members:{},classes:{}}};function O(n,e){var t=e.data;n.versions=t}function B(n,e){var t=e.version,r=e.data;n.members[t]=r}function Q(n,e){var t=e.version,r=e.data;n.classes[t]=r}t("ac6a"),t("cadf"),t("456d");var W="https://corsanywhere.minidigger.me/",z="https://gist.githubusercontent.com/MiniDigger/6c483628f4745b1b326862acb89a82d2/raw",F=function(n){var e=n.commit;return new Promise((function(n,t){L.a.get(z).then((function(r){r&&200===r.status&&r.data?(Object.keys(r.data).forEach((function(n){return r.data[n].id=n})),e("setVersions",{data:r.data}),n(r.data)):t("Error: "+r)})).catch((function(n){t(n)}))}))},G=function(n,e){var t=n.commit,r=n.state,a=e.versionId;return new Promise((function(n,e){var o=r.versions?r.versions[a]:null;if(o){var i=o.classes,s=o.members,u=!1;L.a.get(W+i).then((function(r){r&&200===r.status&&r.data?(t("setClasses",{version:a,data:r.data}),u?n():u=!0):e("Error: "+r)})),L.a.get(W+s).then((function(r){r&&200===r.status&&r.data?(t("setMembers",{version:a,data:r.data}),u?n():u=!0):e("Error: "+r)}))}else e("Version not found")}))},H={namespaced:!0,mutations:o,actions:i,state:N};d["a"].use(V["a"]);var K=new V["a"].Store({modules:{mojang:J,spigot:H},strict:!1}),R=function(){return K},T=t("8c4f"),U=[{path:"/",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"713b"))},children:[{name:"Index",path:"",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"8b24"))}},{name:"MojangIndex",path:"mojang",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"19bf"))}},{name:"MojangClient",path:"mojang/client/:versionId",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"52f5"))}},{name:"MojangServer",path:"mojang/server/:versionId",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"c6f2"))}},{name:"SpigotIndex",path:"spigot",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"8fa1"))}},{name:"SpigotServer",path:"spigot/server/:versionId",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"c305"))}}]}];U.push({path:"*",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"e51e"))}});var X=U;d["a"].use(T["a"]);var Y=function(){var n=new T["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:X,mode:"hash",base:""});return n},Z=function(){return nn.apply(this,arguments)};function nn(){return nn=f()(u.a.mark((function n(){var e,t,r;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("function"!==typeof R){n.next=6;break}return n.next=3,R({Vue:d["a"]});case 3:n.t0=n.sent,n.next=7;break;case 6:n.t0=R;case 7:if(e=n.t0,"function"!==typeof Y){n.next=14;break}return n.next=11,Y({Vue:d["a"],store:e});case 11:n.t1=n.sent,n.next=15;break;case 14:n.t1=Y;case 15:return t=n.t1,e.$router=t,r={el:"#q-app",router:t,store:e,render:function(n){return n(P)}},n.abrupt("return",{app:r,store:e,router:t});case 19:case"end":return n.stop()}}),n)}))),nn.apply(this,arguments)}d["a"].prototype.$axios=L.a,Window.axios=L.a;t("7f7f");var en={logEvent:function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;dataLayer.push({appEventCategory:n,appEventAction:e,appEventLabel:t,sessionId:r}),dataLayer.push({event:"appEvent"})},logPage:function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;dataLayer.push({screenPath:n,screenName:t?e+" - "+t:e,sessionId:r}),dataLayer.push({event:"appScreenView"})}},tn=function(n){var e=n.router;e.afterEach((function(n,e){en.logPage(n.path,n.name,n.params.versionId)}))};function rn(){return an.apply(this,arguments)}function an(){return an=f()(u.a.mark((function n(){var e,t,r,a,o,i,s,c,f;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Z();case 2:e=n.sent,t=e.app,r=e.store,a=e.router,o=!0,i=function(n){o=!1,window.location.href=n},s=window.location.href.replace(window.location.origin,""),c=[void 0,tn],f=0;case 11:if(!(!0===o&&f<c.length)){n.next=29;break}if("function"===typeof c[f]){n.next=14;break}return n.abrupt("continue",26);case 14:return n.prev=14,n.next=17,c[f]({app:t,router:a,store:r,Vue:d["a"],ssrContext:null,redirect:i,urlPath:s});case 17:n.next=26;break;case 19:if(n.prev=19,n.t0=n["catch"](14),!n.t0||!n.t0.url){n.next=24;break}return window.location.href=n.t0.url,n.abrupt("return");case 24:return console.error("[Quasar] boot error:",n.t0),n.abrupt("return");case 26:f++,n.next=11;break;case 29:if(!1!==o){n.next=31;break}return n.abrupt("return");case 31:new d["a"](t);case 32:case"end":return n.stop()}}),n,null,[[14,19]])}))),an.apply(this,arguments)}rn()},"31cd":function(n,e,t){}},[[0,2,0]]]);