(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"19bf":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",[r("h1",{staticClass:"q-ma-sm"},[e._v("Mojang Mappings")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("h3",{staticClass:"q-ma-sm"},[e._v("Client")])]),r("div",{staticClass:"col-6"},[r("h3",{staticClass:"q-ma-sm"},[e._v("Server")])]),r("q-list",{staticClass:"col-6",attrs:{bordered:"",separator:""}},e._l(e.versions,(function(t){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{to:"/mojang/client/"+t.id,clickable:""}},[r("q-item-section",[e._v(e._s(t.id)+" ("+e._s(t.type)+")")])],1)})),1),r("q-list",{staticClass:"col-6",attrs:{bordered:"",separator:""}},e._l(e.versions,(function(t){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{to:"/mojang/server/"+t.id,clickable:""}},[r("q-item-section",[e._v(e._s(t.id)+" ("+e._s(t.type)+")")])],1)})),1)],1)])},s=[],i=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),a=r.n(i),o=r("2f62"),c=r("cd4b");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={name:"MojangIndex",computed:u({},Object(o["c"])({versionManifest:function(e){return e.mojang.versionManifest}}),{versions:function(){if(!this.versionManifest)return[];var e=!1;return this.versionManifest.versions.filter((function(t){return!e&&("1.14.4"===t.id&&(e=!0),!0)}))}}),methods:u({},Object(o["b"])({loadMojangVersions:"mojang/loadVersions"})),mounted:function(){null==this.versionManifest&&this.loadMojangVersions().catch((function(e){Object(c["a"])(e)}))}},f=p,d=r("2877"),v=r("eebe"),b=r.n(v),m=r("9989"),j=r("1c1c"),O=r("66e5"),g=r("4074"),h=r("714f"),w=Object(d["a"])(f,n,s,!1,null,null,null);t["default"]=w.exports;b()(w,"components",{QPage:m["a"],QList:j["a"],QItem:O["a"],QItemSection:g["a"]}),b()(w,"directives",{Ripple:h["a"]})},cd4b:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("2a19");var n=function(e){console.log("Error: "+e)}}}]);