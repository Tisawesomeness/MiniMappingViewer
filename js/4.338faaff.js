(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"478f":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"row"},[e.client?a("h3",{staticClass:"col-8",staticStyle:{margin:"10px 0 10px 0"}},[e._v("\n      Client Mojang Mappings for "+e._s(e.versionId)+"\n    ")]):e._e(),!e.client&&e.toObf?a("h3",{staticClass:"col-8",staticStyle:{margin:"10px 0 10px 0"}},[e._v("\n      Mojang -> Spigot for "+e._s(e.versionId)+"\n    ")]):e._e(),e.client||e.toObf?e._e():a("h3",{staticClass:"col-8",staticStyle:{margin:"10px 0 10px 0"}},[e._v("\n      Spigot -> Mojang for "+e._s(e.versionId)+"\n    ")]),a("q-input",{staticClass:"col-3 q-ma-sm",attrs:{placeholder:"Filter (Classes)",clearable:"",dense:"",type:"search"},on:{input:e.input,clear:e.clear},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("div",{staticClass:"col-12"},[a("q-virtual-scroll",{ref:"scroll",staticStyle:{"max-height":"calc(100vh - 120px)"},attrs:{items:e.mojangKeys,"virtual-scroll-slice-size":15,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item,o=t.index;return[a("q-item",{key:o},[e.client?a("Member",{staticClass:"col-12",attrs:{mojangData:e.getMojangItemData(n),toObf:e.toObf}}):a("Member",{staticClass:"col-12",attrs:{mojangData:e.getMojangItemData(n),spigotData:e.getSpigotItemData(n),toObf:e.toObf}})],1)]}}])})],1)],1)])},o=[],s=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),i=a.n(s),r=a("2f62"),p=a("cd4b"),l=(a("f559"),a("28a5"),function(e){var t={},a={},n=null,o=null,s=null;return e.split("\n").forEach((function(e){if(e.startsWith("#")||""===e);else if(e.startsWith("\t")||e.startsWith("    "))if(-1!==e.indexOf(":")?(s=e.split(":"),s&&3===s.length?e=s[2]:Object(p["a"])("Invalid member line (wlc): '"+e+"'")):e=e.substring(4),-1!==e.indexOf("("))if(s=e.split(" "),s&&4===s.length){var i=s[1].substring(0,s[1].indexOf("(")),r=s[1].substring(s[1].indexOf("(")+1,s[1].indexOf(")"));n.methods[i]={returnType:s[0],mapped:i,obf:s[3],params:r},o.methods[s[3]]={returnType:s[0],mapped:i,obf:s[3],params:r}}else Object(p["a"])("Invalid member line (m): '"+e+"'");else s=e.split(" "),s&&4===s.length?(n.fields[s[1]]={dataType:s[0],mapped:s[1],obf:s[3]},o.fields[s[3]]={dataType:s[0],mapped:s[1],obf:s[3]}):Object(p["a"])("Invalid member line (f): '"+e+"'");else n&&o&&(t[n.mapped]=n,a[o.obf]=o),s=e.split(" -> "),s&&2===s.length?(n={mapped:s[0],obf:s[1].substring(0,s[1].length-1),fields:{},methods:{}},o={mapped:s[0],obf:s[1].substring(0,s[1].length-1),fields:{},methods:{}}):Object(p["a"])("Invalid class line: '"+e+"'")})),{mappedToObf:t,obfToMapped:a}}),c=function(e,t){var a={},n={},o=null;e.split("\n").forEach((function(e){if(e.startsWith("#")||""===e);else if(o=e.split(" "),o&&2===o.length){var t=o[0],s=o[1];a[s]={mapped:s,obf:t,methods:{},fields:{}},n[t]={mapped:s,obf:t,methods:{},fields:{}}}else Object(p["a"])("Invalid class line "+e)})),a["net.minecraft.server.MinecraftServer"]={mapped:"net.minecraft.server.MinecraftServer",obf:"net.minecraft.server.MinecraftServer",methods:{},fields:{}},n["net.minecraft.server.MinecraftServer"]={mapped:"net.minecraft.server.MinecraftServer",obf:"net.minecraft.server.MinecraftServer",methods:{},fields:{}};var s=null,i=null;return t.split("\n").forEach((function(e){if(e.startsWith("#")||""===e);else if(e.startsWith("net/minecraft/server/")&&(e="net.minecraft.server."+e.substring("net/minecraft/server/".length)),-1!==e.indexOf("("))if(o=e.split(" "),o&&4===o.length){s=a[o[0]];var t="",r="";s?s.methods[o[3]]={returnType:t,mapped:o[3],obf:o[1],params:r}:Object(p["a"])("error: didnt find (sm): "+o[0]),i=n[a[o[0]].obf],i?i.methods[o[1]]={returnType:t,mapped:o[3],obf:o[1],params:r}:Object(p["a"])("error: didnt find (om): "+a[o[0]].obf)}else Object(p["a"])("Invalid line (f): "+o);else o=e.split(" "),o&&3===o.length?(s=a[o[0]],s?s.methods[o[2]]={dataType:"",mapped:o[2],obf:o[1]}:Object(p["a"])("error: didnt find (sf): "+o[0]),i=n[a[o[0]].obf],i?i.fields[o[1]]={dataType:"",mapped:o[2],obf:o[1]}:Object(p["a"])("error: didnt find (om): "+a[o[0]].obf)):Object(p["a"])("Invalid line (f): "+o)})),{mappedToObf:a,obfToMapped:n}},d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[!0===e.toObf&&e.mojangData?a("div",{staticStyle:{overflow:"auto"}},[a("q-item-section",[a("q-item-label",[e._v("\n        "+e._s(e.mojangData.mapped)+" -> "+e._s(e.mojangData.obf)+"\n        "),e.spigotData.mapped?a("span",{staticStyle:{color:"red"}},[e._v("\n                 Mapped to "+e._s(e.spigotData.mapped)+"\n        ")]):e._e()])],1),e.fields.length>0?a("q-item-section",[e._v("\n      Fields ("+e._s(e.fields.length)+"):\n      "),a("ul",{staticClass:"q-ma-none"},e._l(e.fields,(function(t,n){return a("li",{key:n},[a("Field",{attrs:{mojangData:e.mojangData.fields[t],spigotData:e.mojangMemberToSpigot(t,!1),toObf:e.toObf}})],1)})),0)]):e._e(),e.methods.length>0?a("q-item-section",[e._v("\n      Methods ("+e._s(e.methods.length)+"):\n      "),a("ul",{staticClass:"q-ma-none"},e._l(e.methods,(function(t,n){return a("li",{key:n},[a("Method",{attrs:{mojangData:e.mojangData.methods[t],spigotData:e.mojangMemberToSpigot(t,!0),toObf:e.toObf}})],1)})),0)]):e._e()],1):!1===e.toObf&&e.mojangData?a("div",{staticStyle:{overflow:"auto"}},[a("q-item-section",[a("q-item-label",[e.spigotData.mapped?a("span",[e._v(e._s(e.spigotData.mapped))]):a("span",[e._v(e._s(e.mojangData.obf))]),e._v("\n         -> "),a("span",{staticStyle:{color:"red"}},[e._v(e._s(e.mojangData.obf))]),e.mojangData.mapped?a("span",{staticStyle:{color:"grey"}},[e._v("\n                 Mapped to "+e._s(e.mojangData.mapped)+"\n        ")]):e._e()])],1),e.fields.length>0?a("q-item-section",[e._v("\n      Fields ("+e._s(e.fields.length)+"):\n      "),a("ul",{staticClass:"q-ma-none"},e._l(e.fields,(function(t,n){return a("li",{key:n},[a("Field",{attrs:{mojangData:e.mojangData.fields[t],spigotData:e.mojangMemberToSpigot(t,!1),toObf:e.toObf}})],1)})),0)]):e._e()],1):a("q-item-section",[a("q-item-label",[e._v("Loading... "+e._s(e.mojangData))])],1)],1)},f=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e.toObf?a("span",[e._v("\n    "+e._s(e.mojangData.dataType)+" "+e._s(e.mojangData.mapped)+"\n    "),a("span",{staticStyle:{color:"gray"}},[e._v("\n             Obfuscated to "+e._s(e.mojangData.obf)+"\n    ")]),e.spigotData?a("span",{staticStyle:{color:"red"}},[e._v("\n             Mapped to "+e._s(e.spigotData.mapped)+"\n    ")]):e._e()]):a("span",[e._v("\n    "+e._s(e.mojangData.dataType)+"\n    "),e.spigotData&&e.spigotData.mapped?a("span",[e._v("\n      "+e._s(e.spigotData.mapped)+" ("+e._s(e.mojangData.obf)+")\n    ")]):a("span",{staticStyle:{color:"red"}},[e._v("\n      "+e._s(e.mojangData.obf)+"\n    ")]),a("span",{staticStyle:{color:"gray"}},[e._v("\n             Mapped to "+e._s(e.mojangData.mapped)+"\n    ")])])])},g=[],u={name:"Field",props:{mojangData:{type:Object,required:!1},spigotData:{type:Object,required:!1},toObf:{type:Boolean,required:!0}}},b=u,j=a("2877"),v=Object(j["a"])(b,m,g,!1,null,"7db11d2a",null),h=v.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e.toObf?a("span",[e._v("\n    "+e._s(e.mojangData.returnType)+" "+e._s(e.mojangData.mapped)+"("+e._s(e.mojangData.params)+")\n    "),a("span",{staticStyle:{color:"gray"}},[e._v("\n             Obfuscated to "+e._s(e.mojangData.obf)+"\n    ")]),e.spigotData?a("span",{staticStyle:{color:"red"}},[e._v("\n             Mapped to "+e._s(e.spigotData.mapped)+"\n    ")]):e._e()]):a("span",[e._v("\n    "+e._s(e.mojangData.returnType)+" "+e._s(e.mojangData.obf)+"("+e._s(e.mojangData.params)+") ->\n    "+e._s(e.mojangData.mapped)+"\n  ")])])},_=[],D={name:"Method",props:{mojangData:{type:Object,required:!1},spigotData:{type:Object,required:!1},toObf:{type:Boolean,required:!0}}},y=D,M=Object(j["a"])(y,O,_,!1,null,"dd320e08",null),S=M.exports,I={name:"Member",components:{Method:S,Field:h},props:{mojangData:{type:Object,required:!1},spigotData:{type:Object,required:!1},toObf:{type:Boolean,required:!0}},computed:{mojangKeys:function(){return Object.keys(this.mojangData&&this.mojangData.members?this.mojangData.members:{})},fields:function(){return Object.keys(this.mojangData.fields)},methods:function(){return Object.keys(this.mojangData.methods)}},methods:{mojangMemberToSpigot:function(e,t){if(!this.spigotData)return null;var a=t?this.spigotData.methods:this.spigotData.fields;if(!a)return null;var n=t?this.mojangData.methods[e]:this.mojangData.fields[e];if(n){var o=a[n.obf];return o instanceof Function?null:o}return console.log("meh "+e),null}}},q=I,w=a("eebe"),x=a.n(w),T=a("4074"),C=a("0170"),P=Object(j["a"])(q,d,f,!1,null,"5d4bd1a4",null),E=P.exports;function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}x()(P,"components",{QItemSection:T["a"],QItemLabel:C["a"]});var F={name:"MojangMappings",components:{Member:E},props:{versionId:{type:String,required:!0},client:{type:Boolean,required:!0},toObf:{type:Boolean,required:!0}},data:function(){return{mojangParsed:null,spigotParsed:null,filter:""}},mounted:function(){var e=this;this.versionManifest?this.loadMojang():this.loadMojangVersions().then((function(){e.loadMojang()})).catch((function(e){Object(p["a"])("Error while loading mojang versions: "+e)})),this.client||(this.spigotVersions?this.loadSpigot():this.loadSpigotVersions().then((function(){e.loadSpigot()})).catch((function(e){Object(p["a"])("Error while loading spigot versions: "+e)})))},computed:V({},Object(r["c"])({versionManifest:function(e){return e.mojang.versionManifest},versions:function(e){return e.mojang.versions},clientMappings:function(e){return e.mojang.clientMappings},serverMappings:function(e){return e.mojang.serverMappings},spigotVersions:function(e){return e.spigot.versions},spigotClasses:function(e){return e.spigot.classes},spigotMembers:function(e){return e.spigot.members}}),{mojangKeys:function(){var e=this;if(this.mojangParsed){var t=this.mojangParsed.mappedToObf;return Object.keys(t).filter((function(a){if(a.toLowerCase().indexOf(e.filter.toLowerCase())>-1)return!0;if(t[a].obf.toLowerCase().indexOf(e.filter.toLowerCase())>-1)return!0;var n=e.getSpigotItemData(a);return!(!n||!n.mapped)&&n.mapped.toLowerCase().indexOf(e.filter.toLowerCase())>-1}))}return[]}}),methods:V({},Object(r["b"])({loadMojangVersions:"mojang/loadVersions",loadMojangVersion:"mojang/loadVersion",loadMojangMappings:"mojang/loadMappings",loadSpigotVersions:"spigot/loadVersions",loadSpigotMappings:"spigot/loadMappings"}),{getMojangItemData:function(e){var t=this.mojangParsed.mappedToObf[e];return t||{}},getSpigotItemData:function(e){var t=this.getMojangItemData(e);if(!this.spigotParsed)return{};if(t){var a=this.spigotParsed.obfToMapped[t.obf];return a||{}}return{}},clear:function(){this.filter="",this.$refs.scroll.reset()},input:function(){this.$refs.scroll.reset()},loadMojang:function(){var e=this;this.loadMojangVersion({versionId:this.versionId}).then((function(){e.loadMojangMappings({versionId:e.versionId}).then((function(){e.client?e.mojangParsed=l(e.clientMappings[e.versionId]):e.mojangParsed=l(e.serverMappings[e.versionId])})).catch((function(e){Object(p["a"])("Error while loading mojang mappings: "+e)}))})).catch((function(e){Object(p["a"])("Error while loading mojang version: "+e)}))},loadSpigot:function(){var e=this;this.loadSpigotMappings({versionId:this.versionId}).then((function(){e.spigotParsed=c(e.spigotClasses[e.versionId],e.spigotMembers[e.versionId])})).catch((function(e){Object(p["a"])("Error while loading spigot mappings: "+e)}))}})},L=F,$=a("9989"),Q=a("27f9"),W=a("0016"),B=a("a12b"),K=a("66e5"),J=Object(j["a"])(L,n,o,!1,null,"a6916aee",null);t["a"]=J.exports;x()(J,"components",{QPage:$["a"],QInput:Q["a"],QIcon:W["a"],QVirtualScroll:B["a"],QItem:K["a"]})},c6f2:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("MojangMappings",{attrs:{"version-id":e.version,client:!1,"to-obf":!0}})},o=[],s=a("478f"),i={name:"MojangServer",components:{MojangMappings:s["a"]},computed:{version:function(){return this.$route.params.versionId}}},r=i,p=a("2877"),l=Object(p["a"])(r,n,o,!1,null,"98f34c26",null);t["default"]=l.exports},cd4b:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("2a19");var n=function(e){console.log("Error: "+e)}}}]);