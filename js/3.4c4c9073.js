(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"478f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"row"},[t.client?a("h3",{staticClass:"col-8",staticStyle:{margin:"10px 0 10px 0"}},[t._v("\n      Client Mojang Mappings for "+t._s(t.versionId)+"\n    ")]):t._e(),!t.client&&t.toObf?a("h3",{staticClass:"col-8",staticStyle:{margin:"10px 0 10px 0"}},[t._v("\n      Mojang -> Spigot for "+t._s(t.versionId)+"\n    ")]):t._e(),t.client||t.toObf?t._e():a("h3",{staticClass:"col-8",staticStyle:{margin:"10px 0 10px 0"}},[t._v("\n      Spigot -> Mojang for "+t._s(t.versionId)+"\n    ")]),a("q-input",{staticClass:"col-3 q-ma-sm",attrs:{placeholder:"Filter (Classes)",clearable:"",dense:"",type:"search"},on:{input:t.input,clear:t.clear},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("div",{staticClass:"col-12"},[a("q-virtual-scroll",{ref:"scroll",staticStyle:{"max-height":"calc(100vh - 120px)"},attrs:{items:t.mojangKeys,"virtual-scroll-slice-size":15,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item,o=e.index;return[a("q-item",{key:o},[t.client?a("Member",{staticClass:"col-12",attrs:{mojangData:t.getMojangItemData(n),toObf:t.toObf}}):a("Member",{staticClass:"col-12",attrs:{mojangData:t.getMojangItemData(n),spigotData:t.getSpigotItemData(n),toObf:t.toObf}})],1)]}}])})],1)],1)])},o=[],s=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),i=a.n(s),r=a("2f62"),p=a("cd4b"),l=(a("f559"),a("28a5"),function(t){var e={},a={},n=null,o=null,s=null;return t.split("\n").forEach((function(t){if(t.startsWith("#")||""===t);else if(t.startsWith("\t")||t.startsWith("    "))if(-1!==t.indexOf(":")?(s=t.split(":"),s&&3===s.length?t=s[2]:Object(p["a"])("Invalid member line (wlc): '"+t+"'")):t=t.substring(4),-1!==t.indexOf("("))if(s=t.split(" "),s&&4===s.length){var i=s[1].substring(0,s[1].indexOf("(")),r=s[1].substring(s[1].indexOf("(")+1,s[1].indexOf(")"));n.methods[i]={returnType:s[0],mapped:i,obf:s[3],params:r},o.methods[s[3]]={returnType:s[0],mapped:i,obf:s[3],params:r}}else Object(p["a"])("Invalid member line (m): '"+t+"'");else s=t.split(" "),s&&4===s.length?(n.fields[s[1]]={dataType:s[0],mapped:s[1],obf:s[3]},o.fields[s[3]]={dataType:s[0],mapped:s[1],obf:s[3]}):Object(p["a"])("Invalid member line (f): '"+t+"'");else n&&o&&(e[n.mapped]=n,a[o.obf]=o),s=t.split(" -> "),s&&2===s.length?(n={mapped:s[0],obf:s[1].substring(0,s[1].length-1),fields:{},methods:{}},o={mapped:s[0],obf:s[1].substring(0,s[1].length-1),fields:{},methods:{}}):Object(p["a"])("Invalid class line: '"+t+"'")})),{mappedToObf:e,obfToMapped:a}}),c=function(t,e){var a={},n={},o=null;t.split("\n").forEach((function(t){if(t.startsWith("#")||""===t);else if(o=t.split(" "),o&&2===o.length){var e=o[0],s=o[1];a[s]={mapped:s,obf:e,methods:{},fields:{}},n[e]={mapped:s,obf:e,methods:{},fields:{}}}else Object(p["a"])("Invalid class line "+t)})),a["net.minecraft.server.MinecraftServer"]={mapped:"net.minecraft.server.MinecraftServer",obf:"net.minecraft.server.MinecraftServer",methods:{},fields:{}},n["net.minecraft.server.MinecraftServer"]={mapped:"net.minecraft.server.MinecraftServer",obf:"net.minecraft.server.MinecraftServer",methods:{},fields:{}};var s=null,i=null;return e.split("\n").forEach((function(t){if(t.startsWith("#")||""===t);else if(t.startsWith("net/minecraft/server/")&&(t="net.minecraft.server."+t.substring("net/minecraft/server/".length)),-1!==t.indexOf("("))if(o=t.split(" "),o&&4===o.length){s=a[o[0]];var e="",r="";s?s.methods[o[3]]={returnType:e,mapped:o[3],obf:o[1],params:r}:Object(p["a"])("error: didnt find (sm): "+o[0]),i=n[a[o[0]].obf],i?i.methods[o[1]]={returnType:e,mapped:o[3],obf:o[1],params:r}:Object(p["a"])("error: didnt find (om): "+a[o[0]].obf)}else Object(p["a"])("Invalid line (f): "+o);else o=t.split(" "),o&&3===o.length?(s=a[o[0]],s?s.methods[o[2]]={dataType:"",mapped:o[2],obf:o[1]}:Object(p["a"])("error: didnt find (sf): "+o[0]),i=n[a[o[0]].obf],i?i.fields[o[1]]={dataType:"",mapped:o[2],obf:o[1]}:Object(p["a"])("error: didnt find (om): "+a[o[0]].obf)):Object(p["a"])("Invalid line (f): "+o)})),{mappedToObf:a,obfToMapped:n}},d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[!0===t.toObf&&t.mojangData?a("div",{staticStyle:{overflow:"auto"}},[a("q-item-section",[a("q-item-label",[t._v("\n        "+t._s(t.mojangData.mapped)+" -> "+t._s(t.mojangData.obf)+"\n        "),t.spigotData&&t.spigotData.mapped?a("span",{staticStyle:{color:"red"}},[t._v("\n                 Mapped to "+t._s(t.spigotData.mapped)+"\n        ")]):t._e()])],1),t.fields.length>0?a("q-item-section",[t._v("\n      Fields ("+t._s(t.fields.length)+"):\n      "),a("ul",{staticClass:"q-ma-none"},t._l(t.fields,(function(e,n){return a("li",{key:n},[a("Field",{attrs:{mojangData:t.mojangData.fields[e],spigotData:t.mojangMemberToSpigot(e,!1),toObf:t.toObf}})],1)})),0)]):t._e(),t.methods.length>0?a("q-item-section",[t._v("\n      Methods ("+t._s(t.methods.length)+"):\n      "),a("ul",{staticClass:"q-ma-none"},t._l(t.methods,(function(e,n){return a("li",{key:n},[a("Method",{attrs:{mojangData:t.mojangData.methods[e],spigotData:t.mojangMemberToSpigot(e,!0),toObf:t.toObf}})],1)})),0)]):t._e()],1):!1===t.toObf&&t.mojangData?a("div",{staticStyle:{overflow:"auto"}},[a("q-item-section",[a("q-item-label",[t.spigotData&&t.spigotData.mapped?a("span",[t._v(t._s(t.spigotData.mapped))]):a("span",[t._v(t._s(t.mojangData.obf))]),t._v("\n         -> "),a("span",{staticStyle:{color:"red"}},[t._v(t._s(t.mojangData.obf))]),t.mojangData.mapped?a("span",{staticStyle:{color:"grey"}},[t._v("\n                 Mapped to "+t._s(t.mojangData.mapped)+"\n        ")]):t._e()])],1),t.fields.length>0?a("q-item-section",[t._v("\n      Fields ("+t._s(t.fields.length)+"):\n      "),a("ul",{staticClass:"q-ma-none"},t._l(t.fields,(function(e,n){return a("li",{key:n},[a("Field",{attrs:{mojangData:t.mojangData.fields[e],spigotData:t.mojangMemberToSpigot(e,!1),toObf:t.toObf}})],1)})),0)]):t._e(),t.methods.length>0?a("q-item-section",[t._v("\n      Methods ("+t._s(t.methods.length)+"):\n      "),a("ul",{staticClass:"q-ma-none"},t._l(t.methods,(function(e,n){return a("li",{key:n},[a("Method",{attrs:{mojangData:t.mojangData.methods[e],spigotData:t.mojangMemberToSpigot(e,!0),toObf:t.toObf}})],1)})),0)]):t._e()],1):a("q-item-section",[a("q-item-label",[t._v("Loading... "+t._s(t.mojangData))])],1)],1)},f=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t.toObf?a("span",[t._v("\n    "+t._s(t.mojangData.dataType)+" "+t._s(t.mojangData.mapped)+"\n    "),a("span",{staticStyle:{color:"gray"}},[t._v("\n             Obfuscated to "+t._s(t.mojangData.obf)+"\n    ")]),t.spigotData?a("span",{staticStyle:{color:"red"}},[t._v("\n             Mapped to "+t._s(t.spigotData.mapped)+"\n    ")]):t._e()]):a("span",[t._v("\n    "+t._s(t.mojangData.dataType)+"\n    "),t.spigotData&&t.spigotData.mapped?a("span",[t._v("\n      "+t._s(t.spigotData.mapped)+" ("+t._s(t.mojangData.obf)+")\n    ")]):a("span",{staticStyle:{color:"red"}},[t._v("\n      "+t._s(t.mojangData.obf)+"\n    ")]),a("span",{staticStyle:{color:"gray"}},[t._v("\n             Mapped to "+t._s(t.mojangData.mapped)+"\n    ")])])])},g=[],u={name:"Field",props:{mojangData:{type:Object,required:!1},spigotData:{type:Object,required:!1},toObf:{type:Boolean,required:!0}}},b=u,j=a("2877"),h=Object(j["a"])(b,m,g,!1,null,"7db11d2a",null),v=h.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t.toObf?a("span",[t._v("\n    "+t._s(t.mojangData.returnType)+" "+t._s(t.mojangData.mapped)+"("+t._s(t.mojangData.params)+")\n    "),a("span",{staticStyle:{color:"gray"}},[t._v("\n             Obfuscated to "+t._s(t.mojangData.obf)+"\n    ")]),t.spigotData?a("span",{staticStyle:{color:"red"}},[t._v("\n             Mapped to "+t._s(t.spigotData.mapped)+"\n    ")]):t._e()]):a("span",[t._v("\n    "+t._s(t.mojangData.returnType)+"\n    "),t.spigotData&&t.spigotData.mapped?a("span",[t._v("\n      "+t._s(t.spigotData.mapped)+"("+t._s(t.mojangData.params)+")\n      "),a("span",{staticStyle:{color:"gray"}},[t._v("(obf "+t._s(t.mojangData.obf)+")")])]):a("span",{staticStyle:{color:"red"}},[t._v("\n      "+t._s(t.mojangData.obf)),a("span",{staticStyle:{color:"black"}},[t._v("("+t._s(t.mojangData.params)+")")])]),a("span",{staticStyle:{color:"gray"}},[t._v("\n             Mapped to "+t._s(t.mojangData.mapped)+"\n    ")])])])},O=[],D={name:"Method",props:{mojangData:{type:Object,required:!1},spigotData:{type:Object,required:!1},toObf:{type:Boolean,required:!0}}},y=D,M=Object(j["a"])(y,_,O,!1,null,"6d15661f",null),S=M.exports,I={name:"Member",components:{Method:S,Field:v},props:{mojangData:{type:Object,required:!1},spigotData:{type:Object,required:!1},toObf:{type:Boolean,required:!0}},computed:{mojangKeys:function(){return Object.keys(this.mojangData&&this.mojangData.members?this.mojangData.members:{})},fields:function(){return Object.keys(this.mojangData.fields)},methods:function(){return Object.keys(this.mojangData.methods)}},methods:{mojangMemberToSpigot:function(t,e){if(!this.spigotData)return null;var a=e?this.spigotData.methods:this.spigotData.fields;if(!a)return null;var n=e?this.mojangData.methods[t]:this.mojangData.fields[t];if(n){var o=a[n.obf];return o instanceof Function?null:o}return console.log("meh "+t),null}}},q=I,w=a("eebe"),x=a.n(w),C=a("4074"),T=a("0170"),P=Object(j["a"])(q,d,f,!1,null,"cddad618",null),k=P.exports;function E(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function V(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?E(Object(a),!0).forEach((function(e){i()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}x()(P,"components",{QItemSection:C["a"],QItemLabel:T["a"]});var F={name:"MojangMappings",components:{Member:k},props:{versionId:{type:String,required:!0},client:{type:Boolean,required:!0},toObf:{type:Boolean,required:!0}},data:function(){return{mojangParsed:null,spigotParsed:null,filter:""}},mounted:function(){var t=this;this.versionManifest?this.loadMojang():this.loadMojangVersions().then((function(){t.loadMojang()})).catch((function(t){Object(p["a"])("Error while loading mojang versions: "+t)})),this.client||(this.spigotVersions?this.loadSpigot():this.loadSpigotVersions().then((function(){t.loadSpigot()})).catch((function(t){Object(p["a"])("Error while loading spigot versions: "+t)})))},computed:V({},Object(r["c"])({versionManifest:function(t){return t.mojang.versionManifest},versions:function(t){return t.mojang.versions},clientMappings:function(t){return t.mojang.clientMappings},serverMappings:function(t){return t.mojang.serverMappings},spigotVersions:function(t){return t.spigot.versions},spigotClasses:function(t){return t.spigot.classes},spigotMembers:function(t){return t.spigot.members}}),{mojangKeys:function(){var t=this;if(this.mojangParsed){var e=this.mojangParsed.mappedToObf;return Object.keys(e).filter((function(a){if(a.toLowerCase().indexOf(t.filter.toLowerCase())>-1)return!0;if(e[a].obf.toLowerCase().indexOf(t.filter.toLowerCase())>-1)return!0;var n=t.getSpigotItemData(a);return!(!n||!n.mapped)&&n.mapped.toLowerCase().indexOf(t.filter.toLowerCase())>-1}))}return[]}}),methods:V({},Object(r["b"])({loadMojangVersions:"mojang/loadVersions",loadMojangVersion:"mojang/loadVersion",loadMojangMappings:"mojang/loadMappings",loadSpigotVersions:"spigot/loadVersions",loadSpigotMappings:"spigot/loadMappings"}),{getMojangItemData:function(t){var e=this.mojangParsed.mappedToObf[t];return e||{}},getSpigotItemData:function(t){var e=this.getMojangItemData(t);if(!this.spigotParsed)return{};if(e){var a=this.spigotParsed.obfToMapped[e.obf];return a||{}}return{}},clear:function(){this.filter="",this.$refs.scroll.reset()},input:function(){this.$refs.scroll.reset()},loadMojang:function(){var t=this;this.loadMojangVersion({versionId:this.versionId}).then((function(){t.loadMojangMappings({versionId:t.versionId}).then((function(){t.client?t.mojangParsed=l(t.clientMappings[t.versionId]):t.mojangParsed=l(t.serverMappings[t.versionId])})).catch((function(t){Object(p["a"])("Error while loading mojang mappings: "+t)}))})).catch((function(t){Object(p["a"])("Error while loading mojang version: "+t)}))},loadSpigot:function(){var t=this;this.loadSpigotMappings({versionId:this.versionId}).then((function(){t.spigotParsed=c(t.spigotClasses[t.versionId],t.spigotMembers[t.versionId])})).catch((function(t){Object(p["a"])("Error while loading spigot mappings: "+t)}))}})},L=F,$=a("9989"),Q=a("27f9"),W=a("0016"),B=a("a12b"),K=a("66e5"),J=Object(j["a"])(L,n,o,!1,null,"a6916aee",null);e["a"]=J.exports;x()(J,"components",{QPage:$["a"],QInput:Q["a"],QIcon:W["a"],QVirtualScroll:B["a"],QItem:K["a"]})},"52f5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("MojangMappings",{attrs:{"version-id":t.version,client:!0,"to-obf":!0}})},o=[],s=a("478f"),i={name:"MojangClient",components:{MojangMappings:s["a"]},computed:{version:function(){return this.$route.params.versionId}}},r=i,p=a("2877"),l=Object(p["a"])(r,n,o,!1,null,"6e62ae32",null);e["default"]=l.exports},cd4b:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a("2a19"),o=function(t){n["a"].create({message:t,color:"red-5",textColor:"white",icon:"warning"}),console.log("Error: "+t)}}}]);