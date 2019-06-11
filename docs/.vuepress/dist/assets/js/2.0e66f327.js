(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{301:function(t,e,n){},304:function(t,e,n){"use strict";var i=n(24),o=n(8),a={name:"FlexboxLayout",props:{flexDirection:String,flexWrap:String,justifyContent:String,alignItems:String,alignContent:String},directives:{"common-directive":i.a},mixins:[o.a]},r=(n(306),n(0)),s=Object(r.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-flexbox-layout",style:{flexDirection:this.flexDirection,flexWrap:this.flexWrap,justifyContent:this.justifyContent,alignItems:this.alignItems,alignContent:this.alignContent}},[this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},305:function(t,e,n){"use strict";n(295);var i=n(297),o={name:"VxpLabel",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},components:{Label:i.a}},a=n(0),r=Object(a.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("Label",{attrs:{text:this.text,textWrap:this.textWrap}})},[],!1,null,null,null);e.a=r.exports},306:function(t,e,n){"use strict";var i=n(301);n.n(i).a},311:function(t,e,n){},320:function(t,e,n){"use strict";n(322);var i=n(3),o=n(79),a=n(6),r=/./.toString,s=function(t){n(11)(RegExp.prototype,"toString",t,!0)};n(5)(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?s(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?o.call(t):void 0)}):"toString"!=r.name&&s(function(){return r.call(this)})},322:function(t,e,n){n(6)&&"g"!=/./g.flags&&n(9).f(RegExp.prototype,"flags",{configurable:!0,get:n(79)})},325:function(t,e,n){"use strict";function i(t,e,n){var i;return function(){var o=this,a=arguments;clearTimeout(i),i=setTimeout(function(){i=null,n||t.apply(o,a)},e),n&&!i&&t.apply(o,a)}}n.d(e,"a",function(){return i})},330:function(t,e,n){"use strict";var i=n(311);n.n(i).a},333:function(t,e,n){},334:function(t,e,n){},335:function(t,e,n){},337:function(t,e,n){"use strict";n(14),n(100),n(101),n(105),n(10);var i=n(24),o=n(8),a={name:"GridLayout",props:{columns:{type:String,default:""},rows:{type:String,default:""}},computed:{formattedColumns:function(){var t=[];return this.columns.split(",").forEach(function(e){if(e.trim().includes("*")){var n=""===e.trim().replace("*","")?"1":parseInt(e.trim().replace("*",""));t.push(n+"fr")}else"auto"===e.trim()?t.push("min-content"):t.push(parseInt(e.trim())+"px")}),t.join(" ")},formattedRows:function(){var t=[];return this.rows.split(",").forEach(function(e){if(e.trim().includes("*")){var n=""===e.trim().replace("*","")?"1":parseInt(e.trim().replace("*",""));t.push(n+"fr")}else"auto"===e.trim()?t.push("min-content"):t.push(parseInt(e.trim())+"px")}),t.join(" ")}},directives:{"common-directive":i.a},mixins:[o.a]},r=(n(330),n(0)),s=Object(r.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-grid-layout",style:{gridTemplateColumns:this.formattedColumns,gridTemplateRows:this.formattedRows}},[this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},338:function(t,e,n){"use strict";n(29),n(80),n(104),Object.freeze({Phone:1,Tablet:2,Browser:3}),Object.freeze({landscape:1,portrait:2,unknown:3});var i=Object.freeze({Unknown:1,Windows:2,MacOS:3,UNIX:4,Linux:5}),o=Object.freeze({One:"col-1",Two:"col-2",Three:"col-3"});var a=n(325),r=i.Unknown;function s(){if("undefined"==typeof navigator||navigator&&"node.js"===navigator.userAgent)return{name:"NodeJS",version:process.version};var t,e=navigator.userAgent,n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?{name:"IE",version:(t=/\brv[ :]+(\d+)/g.exec(e)||[])[1]||""}:"Chrome"===n[1]&&null!==(t=e.match(/\bOPR|Edge\/(\d+)/))?{name:"Opera",version:t[1]}:(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],null!==(t=e.match(/version\/(\d+)/i))&&n.splice(1,1,t[1]),{name:n[0],version:n[1]})}function l(t){t(function(t,e,n,i){return"web"===e?i<=600?o.One:i<=1024?o.Two:o.Three:"Phone"===n?o.One:"portrait"===t?o.One:i<=1024?o.Two:o.Three}("undefined"!=typeof window?window.innerWidth>window.innerHeight?"landscape":"portrait":"landscape",c.platform,c.deviceType,c.screenWidth()))}"undefined"!=typeof navigator&&(-1!==navigator.appVersion.indexOf("Win")&&(r=i.Windows),-1!==navigator.appVersion.indexOf("Mac")&&(r=i.MacOS),-1!==navigator.appVersion.indexOf("X11")&&(r=i.UNIX),-1!==navigator.appVersion.indexOf("Linux")&&(r=i.Linux));var c={deviceType:"browser",language:"en",os:r,osVersion:null,sdkVersion:null,platform:"web",browser:s().name,browserVersion:s().version,screenWidth:function(){return"undefined"!=typeof window?window.innerWidth:1024},screenHeight:function(){return"undefined"!=typeof window?window.innerHeight:768},onGridChange:function(t){l(t),"undefined"!=typeof window&&window.addEventListener("resize",function(){Object(a.a)(function(){l(t)},500)()})},screenScale:function(){return 1}};e.a=c},347:function(t,e,n){},348:function(t,e,n){"use strict";var i=n(7),o=n(22),a=n(109),r="".startsWith;i(i.P+i.F*n(110)("startsWith"),"String",{startsWith:function(t){var e=a(this,t,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),i=String(t);return r?r.call(e,i,n):e.slice(n,n+i.length)===i}})},353:function(t,e,n){"use strict";n(320),n(295);var i=n(338),o=n(17),a={name:"VxpIconButton",data:function(){return{platform:i.a.platform}},props:{icon:String,size:{type:[Number,String],default:40},iconName:String,isEnabled:{type:Boolean,default:!0}},computed:{nuIconButtonClass:function(){return"vxp-icon-button ".concat(this.isEnabled?"":"vxp-icon-button--disabled")},iconSize:function(){return.45*this.size}},methods:{unit:function(t){return"web"===this.platform?t.toString().concat("px"):t.toString()}},components:{Button:o.a}},r=(n(359),n(0)),s=Object(r.a)(a,function(){var t=this,e=t.$createElement;return(t._self._c||e)("Button",{class:t.nuIconButtonClass+" "+t.iconName,style:{width:t.unit(t.size),height:t.unit(t.size),fontSize:t.unit(t.iconSize)},attrs:{text:t._f("fonticon")(this.icon),isEnabled:t.isEnabled},on:{tap:function(e){return t.$emit("tap",e)}}})},[],!1,null,null,null);e.a=s.exports},358:function(t,e,n){"use strict";var i=n(333);n.n(i).a},359:function(t,e,n){"use strict";var i=n(334);n.n(i).a},360:function(t,e,n){"use strict";var i=n(335);n.n(i).a},361:function(t,e,n){"use strict";n(295),n(14);var i=n(81),o=n(24),a=n(8),r={name:"Img",props:{src:String,stretch:{type:String,default:"none"},width:[String,Number],height:[String,Number]},computed:{imageSrc:function(){return this.src.replace("~","")},stretchClass:function(){return"vxp-img ".concat("none"!==this.stretch?"vxp-img--"+Object(i.a)(this.stretch):"").trim()}},directives:{"common-directive":o.a},mixins:[a.a]},s=(n(358),n(0)),l=Object(s.a)(r,function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{directives:[{name:"common-directive",rawName:"v-common-directive"}],class:t.stretchClass,attrs:{src:t.imageSrc,width:t.width,height:t.height},on:{error:function(e){return t.$emit("onLoadError",e)},load:function(e){return t.$emit("onLoad",e)}}})},[],!1,null,null,null).exports,c={name:"VxpImage",props:{src:String,stretch:{type:String,default:"none"},width:[String,Number],height:[String,Number],placeholder:String},components:{Img:l}},u=Object(s.a)(c,function(){var t=this,e=t.$createElement;return(t._self._c||e)("Img",{attrs:{src:t.src,stretch:t.stretch,width:t.width,height:t.height,alt:t.placeholder},on:{onLoadError:function(e){return t.$emit("onLoadError",e)},onLoad:function(e){return t.$emit("onLoad",e)}}})},[],!1,null,null,null);e.a=u.exports},362:function(t,e,n){"use strict";n(320),n(348),n(295);var i=n(325),o=n(305),a=n(304),r={name:"VxpDropDown",props:{placeholder:{type:String},disabled:{type:Boolean,default:!1},items:{type:Array},index:{type:Number,default:null},errors:{type:Array,default:function(){return[]}}},data:function(){return{ignoreBlur:!1,showMenu:!1,selectedIndex:null,hoverIndex:null,pressedKey:{key:null,count:0},searchedWord:""}},computed:{selectedItem:function(){return this.items[this.selectedIndex]}},watch:{selectedItem:function(){this.$emit("changeIndex",this.selectedIndex,this.items[this.selectedIndex])},index:function(){this.selectedIndex=this.index}},methods:{onInputClick:function(){this.ignoreBlur=!0,this.toggleMenu()},itemClick:function(t){this.selectedIndex=t,this.toggleMenu()},onBlur:function(t){this.ignoreBlur?this.ignoreBlur=!1:-1===(t.path||t.composedPath&&t.composedPath()||this.composedPath(t.target)).indexOf(this.$refs.vxpDropDown)&&this.toggleMenu()},toggleMenu:function(t){this.showMenu=!0!==t&&!this.showMenu,this.hoverIndex=null,this.showMenu?document.addEventListener("click",this.onBlur,!1):document.removeEventListener("click",this.onBlur,!1)},composedPath:function(t){for(var e=[];t;){if(e.push(t),"HTML"===t.tagName)return e.push(document),e.push(window),e;t=t.parentElement}},searchFilter:function(t){var e=this,n=this.items.filter(function(t){return t.toString().toLowerCase().startsWith(e.searchedWord)});this.pressedKey.key!==t?this.pressedKey={key:t,count:0}:this.pressedKey.count++;var i=n[this.pressedKey.count%n.length];return-1!==this.items.indexOf(i)&&0!==n.length&&(this.selectedIndex=this.items.indexOf(i),this.hoverIndex=this.selectedIndex),n},onKeyUp:Object(i.a)(function(){this.searchedWord=""},300),onKeyPress:function(t){var e=String.fromCharCode(t.which);if(1===e.length){this.searchedWord+=e,0===this.searchFilter(e).length&&(this.searchedWord=this.searchedWord.slice(0,-1),""!==this.searchedWord&&(this.pressedKey.count--,this.searchFilter(e)));var n=!!this.$refs.vxpDropdownMenu&&this.$refs.vxpDropdownMenu.children[this.hoverIndex],i=n?n.offsetHeight*this.hoverIndex:0;this.scrollTo(i)}},closeDropDown:function(){this.toggleMenu(!0)},keyUp:function(){this.hoverIndex=null===this.hoverIndex?this.selectedIndex-1:this.hoverIndex<=0?0:this.hoverIndex-1,this.selectedIndex=this.hoverIndex,this.maybeAdjustScroll()},keyDown:function(){this.hoverIndex=null===this.hoverIndex?this.selectedIndex+1:this.hoverIndex+1<this.items.length?this.hoverIndex+1:this.hoverIndex,this.selectedIndex=this.hoverIndex,this.maybeAdjustScroll()},keyEnter:function(){this.hoverIndex&&(this.selectedIndex=this.hoverIndex),this.toggleMenu()},maybeAdjustScroll:function(){var t=this.pixelsToPointerTop(),e=this.pixelsToPointerBottom();return t<=this.viewport().top?this.scrollTo(t):e>=this.viewport().bottom?this.scrollTo(this.viewport().top+this.pointerHeight()):void 0},pixelsToPointerTop:function(){var t=0;if(this.$refs.vxpDropdownMenu)for(var e=0;e<this.hoverIndex;e++)t+=this.$refs.vxpDropdownMenu.children[e].offsetHeight;return t},pixelsToPointerBottom:function(){return this.pixelsToPointerTop()+this.pointerHeight()},pointerHeight:function(){var t=!!this.$refs.vxpDropdownMenu&&this.$refs.vxpDropdownMenu.children[this.hoverIndex];return t?t.offsetHeight:0},viewport:function(){return{top:this.$refs.vxpDropdownMenu?this.$refs.vxpDropdownMenu.scrollTop:0,bottom:this.$refs.vxpDropdownMenu?this.$refs.vxpDropdownMenu.offsetHeight+this.$refs.vxpDropdownMenu.scrollTop:0}},scrollTo:function(t){return this.$refs.vxpDropdownMenu?this.$refs.vxpDropdownMenu.scrollTop=t:null}},created:function(){this.selectedIndex=this.index},components:{VxpLabel:o.a,FlexboxLayout:a.a}},s=(n(360),n(0)),l=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"vxpDropDown",staticClass:"vxp-drop-down"},[n("div",{staticClass:"vxp-drop-down__container"},[n("input",{staticClass:"vxp-drop-down__container__toggle typ-body",attrs:{type:"text",readonly:"",placeholder:t.placeholder,disabled:t.disabled},domProps:{value:t.selectedItem},on:{click:t.onInputClick,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.keyUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.keyDown(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:t.closeDropDown(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.closeDropDown(e)}],keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.keyEnter(e)},t.onKeyUp],keypress:t.onKeyPress}}),t._v(" "),n("div",{staticClass:"vxp-drop-down__container__icon"},[t._v("▼")])]),t._v(" "),n("transition",{attrs:{name:"slide-fade"}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],ref:"vxpDropdownMenu",staticClass:"vxp-drop-down__menu"},t._l(t.items,function(e,i){return n("li",{key:i,class:{active:i===t.selectedIndex,hover:i===t.hoverIndex},on:{click:function(e){return t.itemClick(i)},mouseover:function(e){t.hoverIndex=i}}},[t._v("\n        "+t._s(e)+"\n      ")])}),0)]),t._v(" "),t.errors.length?n("FlexboxLayout",{staticClass:"vxp-drop-down__container__toggle__error-messages typ-body",attrs:{flexDirection:"column"}},t._l(t.errors,function(t,e){return n("VxpLabel",{key:e,attrs:{text:t,textWrap:!0}})}),1):t._e()],1)},[],!1,null,null,null);e.a=l.exports},366:function(t,e,n){"use strict";var i=n(305),o={name:"VxpLink",props:{text:{type:String,required:!0},externalUrl:{type:String},disabled:{type:Boolean,default:!1}},components:{VxpLabel:i.a}},a=(n(411),n(0)),r=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("VxpLabel",{staticClass:"typ-body",attrs:{text:t.text}}):t.externalUrl?n("a",{staticClass:"vxp-link typ-body",attrs:{href:t.externalUrl,target:t.externalUrl?"_blank":""}},[t._v(t._s(t.text))]):n("a",{staticClass:"vxp-link typ-body",on:{click:function(e){return t.$emit("tap",e)}}},[t._v(t._s(t.text))])},[],!1,null,null,null);e.a=r.exports},411:function(t,e,n){"use strict";var i=n(347);n.n(i).a},412:function(t,e,n){},413:function(t,e,n){},414:function(t,e,n){},415:function(t,e,n){},416:function(t,e,n){},453:function(t,e,n){"use strict";n(105),n(100),n(101),n(29),n(10),n(295);var i=n(337),o=n(74),a=n(304),r=(n(13),n(20),n(305)),s=n(361),l=n(366),c=n(313),u=n(336),d=n(353),h={name:"TableCellItem",props:{itemType:{type:String,default:"text",required:!0},itemData:{type:Object,default:null,required:!0},customCSS:{type:Object,default:null}},data:function(){return{cellEvents:{onLoadError:"onImageLoadError",onLoad:"onImageLoaded",tap:"tapClickHandler",change:"onCheckboxClicked"}}},directives:{DynamicEvents:{bind:function(t,e,n){var i=e.value;Object.keys(i).forEach(function(t){n.componentInstance.$on(t,function(e,o){var a=i[t];n.context[a](e,o)})})},unbind:function(t,e,n){n.componentInstance.$off()}}},methods:{onImageLoadError:function(t){this.$emit("imageLoadError",t.currentTarget.id,t)},onImageLoaded:function(t){this.$emit("imageLoaded",t.currentTarget.id,t)},tapClickHandler:function(t){var e=null;t&&t.target&&t.target.tagName&&(t.target.attributes&&void 0!==t.target.attributes.actionname?e="action":"BUTTON"===t.target.tagName?e="button":"A"===t.target.tagName&&(e="link")),"button"===e?this.$emit("buttonClicked",t.currentTarget.id):"link"===e?this.$emit("linkClicked",t.currentTarget.id):"action"===e&&this.$emit("actionItemClicked",t.currentTarget.id,t.target.attributes.actionname)},onCheckboxClicked:function(t,e){if(e.currentTarget.id){var n=e.currentTarget.id.split("-");this.$emit("checkboxClicked",t,n[0])}}},computed:{componentType:function(){switch(this.itemType){case"text":return"VxpLabel";case"checkbox":return"VxpCheckbox";case"image":return"VxpImage";case"button":return"VxpButton";case"link":return"VxpLink";case"icon":return"VxpIconButton";default:return"VxpLabel"}},componentParams:function(){var t=this,e={};return this.itemData&&null===this.itemData.data||void 0===this.itemData.data?e:((e=this.itemData.data)&&!e.id&&(e.id=this.itemData.rowNo+"-"+this.itemData.colNo),null===this.customCSS&&void 0===this.customCSS||(e.style={},Object.keys(this.customCSS).forEach(function(n){e.style[n]=t.customCSS[n]})),e)}},components:{VxpLabel:r.a,VxpImage:s.a,VxpLink:l.a,VxpCheckbox:c.a,VxpButton:u.a,VxpIconButton:d.a}},p=n(0),m=Object(p.a)(h,function(){var t=this.$createElement;return(this._self._c||t)(this.componentType,this._b({directives:[{name:"dynamic-events",rawName:"v-dynamic-events",value:this.cellEvents,expression:"cellEvents"}],tag:"component",staticClass:"vxp-table-view-cell-item"},"component",this.componentParams,!1))},[],!1,null,"341d049a",null).exports,f={name:"TableCell",props:{cellData:{type:Array,default:null,required:!0},cellHorizontalAlignment:{type:String,default:"left"},cellVerticalAlignment:{type:String,default:"center"},renderType:{type:String,default:"table"},totalColCount:{type:Number},currentRowNo:{type:Number},currentColNo:{type:Number},customCSS:{type:Object,default:null}},components:{TableCellItem:m,StackLayout:o.a},methods:{actionItemClicked:function(t,e){this.$emit("actionItemClicked",t,e)},checkboxClicked:function(t,e){this.$emit("checkboxClicked",t,e)},getCellNo:function(t,e){return null!=t?t.rowNo+"-"+t.colNo+"-"+e:"00"},getCellClass:function(){var t=[];return"table"===this.renderType?(t.push("vxp-table-view-cell"),this.currentRowNo&&this.currentRowNo%2==0&&t.push("vxp-table-view-cell-double")):0===this.currentColNo?t.push("table-view-cell-first"):this.currentColNo===this.totalColCount||"list"===this.renderType&&this.currentColNo===this.totalColCount-1?t.push("table-view-cell-last"):t.push("table-view-cell-center"),t}}},g=(n(498),Object(p.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.cellData.length>1?n("StackLayout",{class:t.getCellClass(),attrs:{orientation:"vertical"}},t._l(t.cellData,function(e,i){return n("TableCellItem",{key:t.getCellNo(e,i),attrs:{horizontalAlignment:t.cellHorizontalAlignment,itemType:e.type,itemData:e,customCSS:e.customCSS},on:{checkboxClicked:function(e){return t.checkboxClicked.apply(void 0,arguments)},buttonClicked:function(e){return t.$emit("buttonClicked",e)},linkClicked:function(e){return t.$emit("linkClicked",e)},imageLoaded:function(e){return t.$emit("imageLoaded",e)},imageLoadError:function(e){return t.$emit("imageLoadError",e)},actionItemClicked:function(e){return t.actionItemClicked.apply(void 0,arguments)}}})}),1):n("StackLayout",{class:t.getCellClass(),attrs:{orientation:"horizontal"}},t._l(t.cellData,function(e,i){return n("TableCellItem",{key:t.getCellNo(e,i),attrs:{verticalAlignment:t.cellVerticalAlignment,itemType:e.type,itemData:e,customCSS:e.customCSS},on:{checkboxClicked:function(e){return t.checkboxClicked.apply(void 0,arguments)},buttonClicked:function(e){return t.$emit("buttonClicked",e)},linkClicked:function(e){return t.$emit("linkClicked",e)},imageLoaded:function(e){return t.$emit("imageLoaded",e)},imageLoadError:function(e){return t.$emit("imageLoadError",e)},actionItemClicked:function(e){return t.actionItemClicked.apply(void 0,arguments)}}})}),1)},[],!1,null,"5120a00d",null).exports),v={name:"TableHeader",props:{type:{type:String,default:null,required:!0},name:{type:String,default:null,required:!0},label:{type:String,default:null},sortable:{type:Boolean,default:!1},rowSelection:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},data:function(){return{checkedAll:!1}},computed:{componentParams:function(){var t=this,e={};return null===this.headerData||void 0===this.headerData?e:(e=this.headerData,null===this.customCSS&&void 0===this.customCSS||Object.keys(this.customCSS).forEach(function(n){e[n]=t.customCSS[n]}),e)}},methods:{checkedAllUpdate:function(){this.checkedAll=!this.checkedAll,this.$emit("onCheckAll",this.checkedAll)}},components:{VxpLabel:r.a,VxpIconButton:d.a,VxpCheckbox:c.a,StackLayout:o.a}},x=(n(499),Object(p.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?t._e():n("StackLayout",{staticClass:"vxp-table-view-header",attrs:{orientation:"horizontal"}},[t.rowSelection?n("VxpCheckbox",{staticClass:"vxp-table-view-header-checkbox",attrs:{check:t.checkedAll},on:{change:function(e){return t.$emit("checkAllClicked",e)}}}):t._e(),t._v(" "),t.rowSelection?t._e():n("StackLayout",{attrs:{orientation:"horizontal"}},[n("VxpLabel",{staticClass:"vxp-table-view-header-label",attrs:{text:t.label,textWrap:!0}}),t._v(" "),t.sortable?n("StackLayout",{staticClass:"vxp-table-view-header-sorting-buttons",attrs:{orientation:"vertical"}},[n("VxpIconButton",{attrs:{icon:"fa-chevron-up",iconName:"fa",size:"20"},on:{tap:function(e){return t.$emit("onAscendingClicked",t.name)}}}),t._v(" "),n("VxpIconButton",{attrs:{icon:"fa-chevron-down",iconName:"fa",size:"20"},on:{tap:function(e){return t.$emit("onDescendingClicked",t.name)}}})],1):t._e()],1)],1)},[],!1,null,"2cc4f73a",null).exports),b=n(338),y={name:"VxpTableView",props:{headerFields:{type:Array,required:!0},data:{type:Array,required:!0},notFoundMsg:{type:String,default:null},tableHeight:{type:Number,default:null},tableWidth:{type:Number,default:null},isLoading:{type:Boolean,default:!1},rowSelectionEnabled:{type:Boolean,default:!0}},data:function(){return{selectedRows:[],selectedColumns:this.headerFields,columns:"auto",rows:"auto",columnNumber:0,rowNumber:0,renderType:"table"}},mounted:function(){if(null!==b.a&&void 0!==b.a){var t=this;b.a.onGridChange(function(e){t.renderType="col-1"===e?"list":"table"})}},computed:{hasSlots:function(){return void 0!==this.$slots.pagination||void 0!==this.$slots.ItemsPerPage||void 0!==this.$slots.loadingIndicator},dataNotFound:function(){return null===this.data||void 0===this.data||0===this.data.length},tableHeaderData:function(){var t=[];if(this.rowSelectionEnabled){t.push({name:"",label:"",type:"checkbox",sortable:!1,rowSelection:!0,listAlignment:"horizontal"})}return this.headerFields.forEach(function(e){var n={name:e.name,label:e.label,type:e.type,sortable:e.sortable,rowSelection:!1,listAlignment:e.listAlignment};t.push(n)}),t},getColumnsString:function(){for(var t="auto",e=0;e<this.selectedColumns.length;e++)("table"===this.renderType||"list"===this.renderType&&"horizontal"===this.selectedColumns[e].listAlignment)&&(this.selectedColumns[e].columnWidth?t+=","+this.selectedColumns[e].columnWidth:t+=",auto");return"list"===this.renderType&&(t+=",auto"),t},getRowsString:function(){return this.rows},tableData:function(){var t=this,e=[];if(null!==this.data&&null!==this.headerFields&&void 0!==this.data){var n=1,i=0;this.setInitialRowAndColString(),this.data.forEach(function(o){if(i=0,t.rowSelectionEnabled){var a={type:"checkbox",customCSS:{},data:{}};a.rowNo=n,a.colNo=i,a.data.checked=t.selectedRows.includes(n),e.push(a),i++}if(t.headerFields.forEach(function(a){var r=t.extractCellData(a,o,n,i);if("table"===t.renderType||"list"===t.renderType&&"horizontal"===a.listAlignment)e.push(r),i++;else if("list"===t.renderType&&"vertical"===a.listAlignment){var s,l=e.pop();s=Array.isArray(l)?l:[l],r.colNo>0&&r.colNo--,s.push(r),e.push(s)}}),"list"===t.renderType){var r={type:"icon",customCSS:{},data:{}};r.rowNo=n,r.colNo=i,r.data.actionName="choose",r.data.iconName="fa",r.data.icon="fa-chevron-right",i++,e.push(r)}t.addRowsString(),n++}),this.setColumnNumber(i),this.setRowNumber(n)}return e}},methods:{onTableActionItemClicked:function(t,e){var n=t?t.split("-")[0]:null;n&&this.$emit("onActionItemClicked",e,this.data[n-1])},onTableLinkClicked:function(t){var e=t?t.split("-")[0]:null;e&&this.$emit("onLinkClicked",this.data[e-1])},onTableButtonClicked:function(t){var e=t?t.split("-")[0]:null;e&&this.$emit("onButtonClicked",this.data[e-1])},setRowNumber:function(t){this.rowNumber=t},setColumnNumber:function(t){this.columnNumber=t},addRowsString:function(){this.rows+=",auto"},setInitialRowAndColString:function(){this.rows="auto",this.columns="auto"},isHeaderDisabled:function(){return"list"===this.renderType},getCellData:function(t){return Array.isArray(t)?t:[t]},getCellKey:function(t,e){return""+t.rowNo+t.colNo+e},getDataRow:function(t){return Array.isArray(t)?t[0].rowNo:t.rowNo},getDataCol:function(t){return Array.isArray(t)?t[t.length-1].colNo:t.colNo},onTableRowSelected:function(t,e){t?this.addSelectedRow(e):this.removeSelectedRow(e)},extractCellData:function(t,e,n,i){var o={};return o.type=t.type,o.customCSS={},o.data={},o.rowNo=n,o.colNo=i,"image"===t.type?(o.data.src=e[t.name],o.data.stretch="aspectFill",o.customCSS={},o.customCSS["border-radius"]="100%",o.customCSS.width="75px",o.customCSS.height="75px"):"text"===t.type?(o.data.text=e[t.name],o.data.textWrap=!0):"checkbox"===t.type?o.data.checked=e[t.name]:"button"===t.type?(o.data.text=e[t.name],o.data.primary=!0):"link"===t.type?o.data.text=e[t.name]:"icon"===t.type&&(o.data.icon=t.label,o.data.iconName="fa"),void 0!==t.isAction&&t.isAction&&(o.data.actionName=t.name),o},cellHorizontalAlignment:function(t){return t&&t.horizontalAlignment?t.horizontalAlignment:"left"},cellVerticalAlignment:function(t){return t&&t.verticalAlignment?t.verticalAlignment:"center"},addSelectedRow:function(t){this.selectedRows.push(t),this.$emit("onRowSelected",this.data[t-1])},removeSelectedRow:function(t){this.selectedRows=this.selectedRows.filter(function(e){return e!==t}),this.$emit("onRowDeselected",this.data[t-1])},selectAllRows:function(){this.selectedRows=[];for(var t=1;t<this.rowNumber;t++)this.selectedRows.push(t);this.$emit("onSelectAllRows",this.selectedRows)},deselectAllRows:function(){this.selectedRows=[],this.$emit("onDeselectAllRows",this.selectedRows)}},components:{GridLayout:i.a,TableCell:g,TableHeader:x,VxpLabel:r.a,StackLayout:o.a,FlexboxLayout:a.a,VxpCheckbox:c.a}},w=(n(500),Object(p.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("StackLayout",[n("GridLayout",{ref:"tableViewRef",staticClass:"vxp-table-view",attrs:{columns:t.getColumnsString,rows:t.getRowsString}},[t.isLoading||t.dataNotFound?[t.hasSlots&&t.isLoading?t._t("loadingIndicator",null,{row:"0",col:"0"}):t._e(),t._v(" "),!t.isLoading&&t.dataNotFound?n("VxpLabel",{staticClass:"vxp-table-view-not-found-msg",attrs:{row:"0",col:"0",text:t.notFoundMsg}}):t._e()]:t.tableData.length?[t._l(t.tableHeaderData,function(e,i){return n("TableHeader",{key:i,attrs:{type:e.type,name:e.name,label:e.label,sortable:e.sortable,rowSelection:t.rowSelectionEnabled&&0===i,disabled:t.isHeaderDisabled(),row:"0",col:i},on:{checkAllClicked:function(e){!0===e?t.selectAllRows():t.deselectAllRows()},onAscendingClicked:function(e){return t.$emit("onAscendingClicked",e)},onDescendingClicked:function(e){return t.$emit("onDescendingClicked",e)}}})}),t._v(" "),t.rowSelectionEnabled&&"list"===t.renderType?n("StackLayout",{staticClass:"vxp-table-view-list-select-all-container",attrs:{orientation:"horizontal",row:"0",col:"0",colSpan:t.columnNumber}},[n("VxpCheckbox",{staticClass:"vxp-table-view-list-select-all-checkbox",on:{change:function(e){!0===e?t.selectAllRows():t.deselectAllRows()}}}),t._v(" "),n("VxpLabel",{staticClass:"vxp-table-view-list-select-all-label",attrs:{text:"Select All"}})],1):t._e(),t._v(" "),t._l(t.tableData,function(e,i){return n("TableCell",{key:t.getCellKey(e,i),attrs:{cellData:t.getCellData(e),cellHorizontalAlignment:t.cellHorizontalAlignment(),cellVerticalAlignment:t.cellVerticalAlignment(),customCSS:e.customCSS,row:t.getDataRow(e),col:t.getDataCol(e),totalColCount:t.columnNumber,renderType:t.renderType,currentRowNo:t.getDataRow(e),currentColNo:t.getDataCol(e)},on:{checkboxClicked:function(e){return t.onTableRowSelected.apply(void 0,arguments)},buttonClicked:function(e){return t.onTableButtonClicked(e)},linkClicked:function(e){return t.onTableLinkClicked(e)},imageLoaded:function(e){return t.$emit("onImageLoaded",e)},imageLoadError:function(e){return t.$emit("onImageLoadError",e)},actionItemClicked:function(e){return t.onTableActionItemClicked.apply(void 0,arguments)}}})})]:t._e()],2),t._v(" "),t.hasSlots?n("FlexboxLayout",{attrs:{flexWrap:"wrap"}},[t._t("ItemsPerPage"),t._v(" "),t._t("pagination")],2):t._e()],1)},[],!1,null,"476be899",null));e.a=w.exports},456:function(t,e,n){"use strict";n(295);var i=n(74),o=n(362),a=n(305),r={name:"ItemsPerPageDropDown",components:{VxpDropDown:o.a,StackLayout:i.a,VxpLabel:a.a},props:{listItemsPerPage:{type:Array,default:function(){return[10,30,50]}},selectedItem:{type:Number,default:10},disabled:{type:Boolean,default:!1},label:{type:String,default:null}},methods:{onChangeIndex:function(t){this.$emit("onItemsPerPageUpdated",this.listItemsPerPage[t])},selectedIndex:function(){var t=this.listItemsPerPage.indexOf(this.selectedItem);return t>-1?t:0}}},s=(n(502),n(0)),l=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("StackLayout",{attrs:{orientation:"horizontal"}},[t.label?n("VxpLabel",{staticClass:"items-per-page-label",attrs:{horizontalAlignment:"center",text:t.label}}):t._e(),t._v(" "),n("VxpDropDown",{staticClass:"items-per-page-dropdown",attrs:{horizontalAlignment:"center",items:t.listItemsPerPage,disabled:t.disabled,index:t.selectedIndex()},on:{changeIndex:t.onChangeIndex}})],1)},[],!1,null,"03a6de45",null);e.a=l.exports},457:function(t,e,n){"use strict";n(295);var i=n(74),o=n(366),a={name:"Pagination",props:{totalItems:{type:Number,required:!0},itemsPerPage:{type:Number,default:10},page:{type:Number,default:1},moveLastPage:{type:Boolean,default:!0},moveFirstPage:{type:Boolean,default:!0},moveNextPage:{type:Boolean,default:!0},movePreviousPage:{type:Boolean,default:!0}},data:function(){return{perPage:this.itemsPerPage,currPage:this.page<1?1:this.page>this.lastPage?this.lastPage:this.page}},computed:{lastPage:function(){return Math.ceil(this.totalItems/this.perPage)},qntPages:function(){var t=this.lastPage,e=[];return t>3?(1===this.currPage||this.currPage<1?e=[1,2,3,"..."]:this.currPage>t||this.currPage===t?((e=["..."]).push(t-2),e.push(t-1),e.push(t)):(e.push("..."),e.push(this.currPage),this.currPage+1<t&&e.push(this.currPage+1),this.currPage+2<t?(e.push(this.currPage+2),e.push("...")):e.push(t)),e):Array.apply(null,{length:t}).map(function(t,e){return e+1})}},methods:{pageClass:function(t){return this.currPage===t?"".concat(this.css.paginationItem," selected"):this.css.paginationItem},changePage:function(t){t<=this.lastPage&&t>=1&&t!==this.currPage&&this.$emit("onPaginationUpdate",t)},isPageDisabled:function(t){return"..."!==t&&(t=parseInt(t)),"..."===t||t===this.currPage||t>this.lastPage},isActionDisabled:function(t){switch(t){case"firstPage":case"previousPage":return 1===this.currPage;case"lastPage":case"nextPage":return this.currPage===this.lastPage||!this.totalItems||this.currPage*this.itemsPerPage>=this.totalItems}},checkCurrentPageExist:function(){if(-1===this.qntPages.indexOf(this.currPage)){var t=this.qntPages.length?this.qntPages.length:0;this.$emit("updateCurrentPage",t)}}},watch:{page:function(t){this.currPage=t},itemsPerPage:function(t){this.perPage=t,this.checkCurrentPageExist()}},components:{StackLayout:i.a,VxpLink:o.a}},r=(n(501),n(0)),s=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("StackLayout",{staticClass:"pagination-container",attrs:{orientation:"horizontal"}},[t.moveFirstPage?n("VxpLink",{staticClass:"pagination-button pagination-first-page",attrs:{disabled:t.isActionDisabled("firstPage"),text:"<<"},on:{tap:function(e){return t.changePage(1)}}}):t._e(),t._v(" "),t.movePreviousPage?n("VxpLink",{staticClass:"pagination-button pagination-previous-page",attrs:{size:"small",disabled:t.isActionDisabled("previousPage"),text:"<"},on:{tap:function(e){return t.changePage(t.currPage-1)}}}):t._e(),t._v(" "),t._l(t.qntPages,function(e,i){return n("VxpLink",{key:i,staticClass:"pagination-button pagination-first-page",attrs:{disabled:t.isPageDisabled(e),text:""+e},on:{tap:function(n){return t.changePage(e)}}})}),t._v(" "),t.moveNextPage?n("VxpLink",{staticClass:"pagination-button pagination-next-page",attrs:{text:">",disabled:t.isActionDisabled("nextPage")},on:{tap:function(e){return t.changePage(t.currPage+1)}}}):t._e(),t._v(" "),t.moveLastPage?n("VxpLink",{staticClass:"pagination-button pagination-last-page",attrs:{text:">>",disabled:t.isActionDisabled("lastPage")},on:{tap:function(e){return t.changePage(t.lastPage)}}}):t._e()],2)},[],!1,null,"7d8c50a4",null);e.a=s.exports},498:function(t,e,n){"use strict";var i=n(412);n.n(i).a},499:function(t,e,n){"use strict";var i=n(413);n.n(i).a},500:function(t,e,n){"use strict";var i=n(414);n.n(i).a},501:function(t,e,n){"use strict";var i=n(415);n.n(i).a},502:function(t,e,n){"use strict";var i=n(416);n.n(i).a}}]);