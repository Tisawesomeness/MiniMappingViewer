(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"hHh Lpr lff"}},[a("q-header",{staticClass:"bg-black",attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.drawer=!e.drawer}}}),a("q-toolbar-title",[e._v("Mini's Mapping Viewer")]),a("q-btn",{attrs:{flat:"",round:"",dense:""},on:{click:function(t){return e.openUrl("https://github.com/MiniDigger/MiniMappingViewer/")}}},[e._v("Github")])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",mini:e.miniState,width:200,breakpoint:500,bordered:""},on:{mouseover:function(t){e.miniState=!1},mouseout:function(t){e.miniState=!0}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{attrs:{padding:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/mojang","aria-label":"Spigot"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"play_arrow"}})],1),a("q-item-section",[e._v("\n            Mojang -> Spigot\n          ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/spigot","aria-label":"Spigot"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"play_arrow"}})],1),a("q-item-section",[e._v("\n            Spigot -> Mojang\n          ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","aria-label":"Toggle Dark Mode"},on:{click:e.toggleDark}},[a("q-item-section",{attrs:{avatar:""}},[e.darkMode?a("q-icon",{attrs:{name:"brightness_5"}}):a("q-icon",{attrs:{name:"brightness_2"}})],1),e.darkMode?a("q-item-section",[e._v("\n            Light Mode\n          ")]):a("q-item-section",[e._v("\n            Dark Mode\n          ")])],1)],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},r=[],n=a("b06b"),o={name:"MainLayout",data:function(){return{drawer:!1,miniState:!0}},computed:{darkMode:function(){return this.$q.dark.isActive}},methods:{openUrl:function(e){Object(n["a"])(e)},toggleDark:function(){this.$q.dark.toggle()}}},c=o,l=a("2877"),s=a("4d5a"),d=a("e359"),p=a("65c6"),m=a("9c40"),u=a("6ac5"),b=a("9404"),g=a("4983"),q=a("1c1c"),v=a("66e5"),w=a("4074"),f=a("0016"),k=a("09e3"),h=a("714f"),M=a("eebe"),Q=a.n(M),_=Object(l["a"])(c,i,r,!1,null,null,null);t["default"]=_.exports;Q()(_,"components",{QLayout:s["a"],QHeader:d["a"],QToolbar:p["a"],QBtn:m["a"],QToolbarTitle:u["a"],QDrawer:b["a"],QScrollArea:g["a"],QList:q["a"],QItem:v["a"],QItemSection:w["a"],QIcon:f["a"],QPageContainer:k["a"]}),Q()(_,"directives",{Ripple:h["a"]})}}]);