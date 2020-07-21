(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{296:function(t,e,n){},302:function(t,e,n){"use strict";n(295);var a=n(24),i=n(8),o={model:{event:"input",prop:"text"},name:"TextField",props:{maxLength:Number,keyboardType:{type:String,default:"text"},secure:{type:Boolean,default:!1},text:String,hint:String,editable:{type:Boolean,default:!0},autocorrect:Boolean},directives:{"common-directive":a.a},methods:{updateValue:function(t){this.$emit("textChange",t),this.$emit("input",t.target.value)}},computed:{handleKeyboardType:function(){switch(this.keyboardType){case"phone":return"tel";case"datetime":return"datetime-local";case"email":return"email";case"url":return"url";case"number":return"number";default:return"text"}}},mixins:[i.a]},r=(n(303),n(0)),s=Object(r.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-textfield",attrs:{placeholder:t.hint,disabled:!t.editable,maxlength:t.maxLength,type:t.secure?"password":t.handleKeyboardType,spellcheck:t.autocorrect},domProps:{value:t.text},on:{blur:function(e){return t.$emit("blur",e)},focus:function(e){return t.$emit("focus",e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("returnPress",e)},input:t.updateValue}})},[],!1,null,"967a7238",null);e.a=s.exports},303:function(t,e,n){"use strict";var a=n(296);n.n(a).a},305:function(t,e,n){"use strict";n(295);var a=n(297),i={name:"VxpLabel",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},components:{Label:a.a}},o=n(0),r=Object(o.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("Label",{attrs:{text:this.text,textWrap:this.textWrap}})},[],!1,null,null,null);e.a=r.exports},320:function(t,e,n){"use strict";n(322);var a=n(3),i=n(79),o=n(6),r=/./.toString,s=function(t){n(11)(RegExp.prototype,"toString",t,!0)};n(5)(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?s(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=r.name&&s(function(){return r.call(this)})},322:function(t,e,n){n(6)&&"g"!=/./g.flags&&n(9).f(RegExp.prototype,"flags",{configurable:!0,get:n(79)})},325:function(t,e,n){"use strict";function a(t,e,n){var a;return function(){var i=this,o=arguments;clearTimeout(a),a=setTimeout(function(){a=null,n||t.apply(i,o)},e),n&&!a&&t.apply(i,o)}}n.d(e,"a",function(){return a})},334:function(t,e,n){},338:function(t,e,n){"use strict";n(29),n(80),n(104),Object.freeze({Phone:1,Tablet:2,Browser:3}),Object.freeze({landscape:1,portrait:2,unknown:3});var a=Object.freeze({Unknown:1,Windows:2,MacOS:3,UNIX:4,Linux:5}),i=Object.freeze({One:"col-1",Two:"col-2",Three:"col-3"});var o=n(325),r=a.Unknown;function s(){if("undefined"==typeof navigator||navigator&&"node.js"===navigator.userAgent)return{name:"NodeJS",version:process.version};var t,e=navigator.userAgent,n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?{name:"IE",version:(t=/\brv[ :]+(\d+)/g.exec(e)||[])[1]||""}:"Chrome"===n[1]&&null!==(t=e.match(/\bOPR|Edge\/(\d+)/))?{name:"Opera",version:t[1]}:(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],null!==(t=e.match(/version\/(\d+)/i))&&n.splice(1,1,t[1]),{name:n[0],version:n[1]})}function l(t){t(function(t,e,n,a){return"web"===e?a<=600?i.One:a<=1024?i.Two:i.Three:"Phone"===n?i.One:"portrait"===t?i.One:a<=1024?i.Two:i.Three}("undefined"!=typeof window?window.innerWidth>window.innerHeight?"landscape":"portrait":"landscape",c.platform,c.deviceType,c.screenWidth()))}"undefined"!=typeof navigator&&(-1!==navigator.appVersion.indexOf("Win")&&(r=a.Windows),-1!==navigator.appVersion.indexOf("Mac")&&(r=a.MacOS),-1!==navigator.appVersion.indexOf("X11")&&(r=a.UNIX),-1!==navigator.appVersion.indexOf("Linux")&&(r=a.Linux));var c={deviceType:"browser",language:"en",os:r,osVersion:null,sdkVersion:null,platform:"web",browser:s().name,browserVersion:s().version,screenWidth:function(){return"undefined"!=typeof window?window.innerWidth:1024},screenHeight:function(){return"undefined"!=typeof window?window.innerHeight:768},onGridChange:function(t){l(t),"undefined"!=typeof window&&window.addEventListener("resize",function(){Object(o.a)(function(){l(t)},500)()})},screenScale:function(){return 1}};e.a=c},353:function(t,e,n){"use strict";n(320),n(295);var a=n(338),i=n(17),o={name:"VxpIconButton",data:function(){return{platform:a.a.platform}},props:{icon:String,size:{type:[Number,String],default:40},iconName:String,isEnabled:{type:Boolean,default:!0}},computed:{nuIconButtonClass:function(){return"vxp-icon-button ".concat(this.isEnabled?"":"vxp-icon-button--disabled")},iconSize:function(){return.45*this.size}},methods:{unit:function(t){return"web"===this.platform?t.toString().concat("px"):t.toString()}},components:{Button:i.a}},r=(n(359),n(0)),s=Object(r.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("Button",{class:t.nuIconButtonClass+" "+t.iconName,style:{width:t.unit(t.size),height:t.unit(t.size),fontSize:t.unit(t.iconSize)},attrs:{text:t._f("fonticon")(this.icon),isEnabled:t.isEnabled},on:{tap:function(e){return t.$emit("tap",e)}}})},[],!1,null,null,null);e.a=s.exports},359:function(t,e,n){"use strict";var a=n(334);n.n(a).a},424:function(t,e,n){},425:function(t,e,n){},426:function(t,e,n){},510:function(t,e,n){"use strict";var a=n(424);n.n(a).a},511:function(t,e,n){"use strict";var a=n(425);n.n(a).a},512:function(t,e,n){"use strict";var a=n(426);n.n(a).a},539:function(t,e,n){"use strict";n.r(e);n(295);var a=n(8),i=n(74),o=n(338),r=n(305),s={name:"VxpDropdownItem",props:{item:{type:Object,default:null},title:String,icon:String,iconClass:String,elementIndex:Number,isActive:{type:Boolean,default:!1}},components:{VxpLabel:r.a,StackLayout:i.a},mixins:[a.a]},l=(n(510),n(0)),c=Object(l.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("StackLayout",{staticClass:"vxp-dropdown-item",class:{"is-active":t.isActive},attrs:{orientation:"horizontal"}},[t.icon&&t.iconClass||t.item.icon&&t.item.iconClass?n("VxpLabel",{staticClass:"vxp-dropdown-item__icon",class:t.iconClass||t.item.iconClass,attrs:{text:t._f("fonticon")(t.icon||t.item.icon)}}):t._e(),t._v(" "),t.item.title?n("VxpLabel",{staticClass:"vxp-dropdown-item__title",attrs:{text:t.item.title}}):n("VxpLabel",{staticClass:"vxp-dropdown-item__title",attrs:{text:t.title}})],1)},[],!1,null,null,null).exports,u={name:"VxpDropdownMenu",props:{title:String,icon:String,iconClass:String,items:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},selectedIndex:{type:Number,default:null},nativeCancelBtnText:{type:String,default:"Cancel"}},data:function(){return{isMenuOpen:!1,currentIndex:this.selectedIndex}},computed:{isNative:function(){return"web"!==o.a.platform}},methods:{toggleMenu:function(){var t=this;this.disabled||(this.isNative?action(this.title,this.nativeCancelBtnText,this.items.map(function(t){return t.title})).then(function(e){t.$emit("selectedIndexChanged",e)}):this.isMenuOpen=!this.isMenuOpen)},selectItem:function(t,e){this.currentIndex=t|this.$emit("selectedIndexChanged",{index:t,item:e})}},components:{VxpLabel:r.a,VxpDropdownItem:c,StackLayout:i.a},mixins:[a.a]},d=(n(511),Object(l.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("StackLayout",{staticClass:"vxp-dropdown"},[n("StackLayout",{staticClass:"vxp-dropdown__menu",class:{"vxp-dropdown__is-open":t.isMenuOpen,"vxp-dropdown__menu__disabled":t.disabled},attrs:{orientation:"horizontal"},on:{tap:function(e){return t.toggleMenu()}}},[n("VxpLabel",{staticClass:"vxp-dropdown__menu__title",attrs:{text:t.title}}),t._v(" "),n("VxpLabel",{staticClass:"vxp-dropdown__menu__icon",class:t.iconClass,attrs:{text:t._f("fonticon")(t.icon)}})],1),t._v(" "),t.items&&!t.isNative?n("StackLayout",{staticClass:"vxp-dropdown__itemContainer",class:{"is-visible":t.isMenuOpen}},t._l(t.items,function(e,a){return n("VxpDropdownItem",{key:a,staticClass:"vxp-dropdown__itemContainer__item",attrs:{item:e,elementIndex:a,isActive:t.currentIndex===a,id:"dropdownmenu__item("+a+")__label"},on:{tap:function(n){return t.selectItem(a,e)},keyup:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.selectItem(a,e)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"space",32,n.key,[" ","Spacebar"])?null:t.selectItem(a,e)}]}})}),1):t._e()],1)},[],!1,null,null,null).exports),p=n(302),f=n(313),m=n(336),x={name:"VxpDropdownMenuDoc",components:{VxpIconButton:n(353).a,VxpButton:m.a,VxpLabel:r.a,StackLayout:i.a,VxpDropdownMenu:d,TextField:p.a,VxpCheckbox:f.a},data:function(){return{dropdownTitle:"Dropdown",dropdownIcon:"fa-pencil",dropdownDisable:!1,iconClass:"fa",selectedIndex:null,items:[{icon:"fa-trash",title:"Delete Selected Lead(s)",iconClass:"fa"},{icon:"fa-plus-circle",title:"Clone Selected Lead(s)",iconClass:"fa"},{icon:"fa-calendar",title:"Schedule Appointment",iconClass:"fa"}],icons:["fa-trash","fa-plus-circle","fa-calendar","fa-pencil","fa-share","fa-times","fa-refresh","fa-smile-o","fa-user-circle-o","fa-exclamation-triangle"]}},methods:{addItem:function(){this.items.push({icon:"fa-smile-o",title:"Sample title ",iconClass:"fa"})},setInitialState:function(){this.items=[{icon:"fa-trash",title:"Delete Selected Lead(s)",iconClass:"fa"},{icon:"fa-plus-circle",title:"Clone Selected Lead(s)",iconClass:"fa"},{icon:"fa-calendar",title:"Schedule Appointment",iconClass:"fa"}]},removeItem:function(t){this.items.splice(t,1)},onChangeIndex:function(t){console.log(t),this.selectedIndex=t.index}}},_=(n(512),Object(l.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("StackLayout",[n("VxpDropdownMenu",{attrs:{id:"dropdownmenu__title__label",iconClass:t.iconClass+" "+t.dropdownIcon,items:t.items,title:t.dropdownTitle,disabled:t.dropdownDisable},on:{selectedIndexChanged:t.onChangeIndex}}),t._v(" "),n("StackLayout",{staticClass:"vxp-doc-container__separator"},[n("hr",{staticClass:"vxp-doc-container__separator__hr",attrs:{width:"90%"}})]),t._v(" "),n("StackLayout",{staticClass:"prop-container"},[n("VxpLabel",{staticStyle:{"font-weight":"bold","font-size":"large"},attrs:{text:"Properties"}}),t._v(" "),n("StackLayout",{staticStyle:{"margin-top":"15px"},attrs:{orientation:"horizontal"}},[n("StackLayout",{staticClass:"form-group"},[n("TextField",{attrs:{id:"dropdownmenu__title__input",type:"text",placeholder:"Enter title..."},model:{value:t.dropdownTitle,callback:function(e){t.dropdownTitle=e},expression:"dropdownTitle"}}),t._v(" "),n("VxpLabel",{staticClass:"control-label",attrs:{text:"Dropdown Menu Title"}}),t._v(" "),n("i",{staticClass:"bar"})],1),t._v(" "),n("StackLayout",{staticClass:"form-group",staticStyle:{"margin-left":"20px"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.dropdownIcon,expression:"dropdownIcon"}],staticStyle:{height:"1.9rem"},attrs:{id:"dropdownmenu__icon__select"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.dropdownIcon=e.target.multiple?n:n[0]}}},t._l(t.icons,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])}),0),t._v(" "),n("VxpLabel",{staticClass:"control-label",attrs:{text:"Dropdown Menu Icon"}}),t._v(" "),n("i",{staticClass:"bar"})],1),t._v(" "),n("StackLayout",{staticClass:"form-group",attrs:{orientation:"horizontal"}},[n("VxpLabel",{staticStyle:{"margin-left":"20px","margin-top":"-10px",width:"140px"},attrs:{text:"Dropdown Menu Disable State: ",id:"dropdownmenu__disable__label",textWrap:!0}}),t._v(" "),n("VxpCheckbox",{staticClass:"nubutton-doc-container__config__checkbox",attrs:{id:"dropdownmenu__disabled__checkbox",checked:t.dropdownDisable,primary:""},on:{change:function(e){t.dropdownDisable=!t.dropdownDisable}}}),t._v(" "),n("i",{staticClass:"bar"})],1)],1)],1),t._v(" "),n("StackLayout",{staticClass:"prop-container"},[n("VxpLabel",{staticStyle:{"font-weight":"bold","font-size":"large"},attrs:{text:"Configurations"}}),t._v(" "),n("StackLayout",{staticStyle:{"margin-top":"25px","margin-bottom":"15px"},attrs:{orientation:"horizontal"}},[n("VxpButton",{attrs:{id:"dropdownmenu__additem__button",text:"➕ Add Dropdown Menu Item"},on:{tap:function(e){return t.addItem()}}}),t._v(" "),n("VxpButton",{staticStyle:{"margin-left":"15px"},attrs:{id:"dropdownmenu__resetitems__button",text:"↺ Reset Items"},on:{tap:t.setInitialState}})],1),t._v(" "),t._l(t.items,function(e,a){return n("StackLayout",{key:a,staticClass:"child-row"},[n("StackLayout",{attrs:{orientation:"horizontal"}},[n("StackLayout",{staticClass:"form-group"},[n("TextField",{attrs:{id:"dropdownmenuitem__title__input__"+(a+1),type:"text",placeholder:"Enter title..."},model:{value:e.title,callback:function(n){t.$set(e,"title",n)},expression:"item.title"}}),t._v(" "),n("VxpLabel",{staticClass:"control-label",attrs:{text:a+1+". Item Title"}}),t._v(" "),n("i",{staticClass:"bar"})],1),t._v(" "),n("StackLayout",{staticClass:"form-group",staticStyle:{"margin-left":"20px"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.icon,expression:"item.icon"}],staticStyle:{height:"1.9rem"},attrs:{id:"dropdownmenuitem__icon__select__"+(a+1)},on:{change:function(n){var a=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"icon",n.target.multiple?a:a[0])}}},t._l(t.icons,function(e,a){return n("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])}),0),t._v(" "),n("VxpLabel",{staticClass:"control-label",attrs:{text:a+1+". Item Icon"}}),t._v(" "),n("i",{staticClass:"bar"})],1),t._v(" "),n("StackLayout",{staticClass:"theme--nuweb"},[n("VxpIconButton",{staticClass:"remove-child-btn",staticStyle:{"margin-left":"15px",padding:"0"},attrs:{alert:"",icon:"fa fa-remove"},on:{tap:function(e){return t.removeItem(a)}}})],1)],1)],1)})],2),t._v(" "),n("StackLayout",{staticClass:"prop-container"},[n("VxpLabel",{staticStyle:{"font-weight":"bold","font-size":"large"},attrs:{text:"Events"}}),t._v(" "),n("StackLayout",{staticStyle:{"margin-top":"15px"}},[n("StackLayout",{staticClass:"form-group",attrs:{orientation:"horizontal"}},[n("VxpLabel",{staticStyle:{width:"140px","margin-top":"-10px"},attrs:{text:"Dropdown Menu Disable Status:",textWrap:!0}}),t._v(" "),n("VxpLabel",{attrs:{id:"dropdownmenu__disabled__label",text:t.dropdownDisable.toString()}})],1),t._v(" "),n("StackLayout",{staticClass:"form-group",attrs:{orientation:"horizontal"}},[n("VxpLabel",{staticStyle:{width:"140px"},attrs:{text:"Selected Index:",textWrap:!0}}),t._v(" "),n("VxpLabel",{attrs:{id:"dropdownmenu__selectedIndex__label",text:t.selectedIndex}})],1)],1)],1)],1)},[],!1,null,null,null));e.default=_.exports}}]);