(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{294:function(t,e,a){},295:function(t,e,a){"use strict";var i=a(2),n=a(15),r=a(21),o=a(77),l=a(75),s=a(5),u=a(99).f,c=a(102).f,d=a(9).f,h=a(298).trim,m=i.Number,p=m,v=m.prototype,f="Number"==r(a(76)(v)),b="trim"in String.prototype,_=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var a,i,n,r=(e=b?e.trim():h(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(var o,s=e.slice(2),u=0,c=s.length;u<c;u++)if((o=s.charCodeAt(u))<48||o>n)return NaN;return parseInt(s,i)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(f?s(function(){v.valueOf.call(a)}):"Number"!=r(a))?o(new p(_(e)),a,m):_(e)};for(var x,y=a(6)?u(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;y.length>g;g++)n(p,x=y[g])&&!n(m,x)&&d(m,x,c(p,x));m.prototype=v,v.constructor=m,a(11)(i,"Number",m)}},296:function(t,e,a){},297:function(t,e,a){"use strict";a(14),a(100),a(101),a(295);var i=a(24),n=a(8),r={name:"Label",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},directives:{"common-directive":i.a},computed:{fontClass:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?this.text.replace(" | fonticon",""):""},textValue:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?"":this.text}},mixins:[n.a]},o=(a(300),a(0)),l=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("span",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-label",class:this.fontClass,style:{"white-space":this.textWrap?"normal":"nowrap"}},[this._v("\n  "+this._s(this.textValue)+"\n  "),this._t("default")],2)},[],!1,null,null,null);e.a=l.exports},298:function(t,e,a){var i=a(7),n=a(16),r=a(5),o=a(299),l="["+o+"]",s=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),c=function(t,e,a){var n={},l=r(function(){return!!o[t]()||"​"!="​"[t]()}),s=n[t]=l?e(d):o[t];a&&(n[a]=s),i(i.P+i.F*l,"String",n)},d=c.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},299:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},300:function(t,e,a){"use strict";var i=a(294);a.n(i).a},302:function(t,e,a){"use strict";a(295);var i=a(24),n=a(8),r={model:{event:"input",prop:"text"},name:"TextField",props:{maxLength:Number,keyboardType:{type:String,default:"text"},secure:{type:Boolean,default:!1},text:String,hint:String,editable:{type:Boolean,default:!0},autocorrect:Boolean},directives:{"common-directive":i.a},methods:{updateValue:function(t){this.$emit("textChange",t),this.$emit("input",t.target.value)}},computed:{handleKeyboardType:function(){switch(this.keyboardType){case"phone":return"tel";case"datetime":return"datetime-local";case"email":return"email";case"url":return"url";case"number":return"number";default:return"text"}}},mixins:[n.a]},o=(a(303),a(0)),l=Object(o.a)(r,function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-textfield",attrs:{placeholder:t.hint,disabled:!t.editable,maxlength:t.maxLength,type:t.secure?"password":t.handleKeyboardType,spellcheck:t.autocorrect},domProps:{value:t.text},on:{blur:function(e){return t.$emit("blur",e)},focus:function(e){return t.$emit("focus",e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("returnPress",e)},input:t.updateValue}})},[],!1,null,"967a7238",null);e.a=l.exports},303:function(t,e,a){"use strict";var i=a(296);a.n(i).a},324:function(t,e,a){},341:function(t,e,a){"use strict";function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",function(){return i})},349:function(t,e,a){"use strict";var i=a(19),n=a(7),r=a(30),o=a(106),l=a(107),s=a(22),u=a(350),c=a(108);n(n.S+n.F*!a(82)(function(t){Array.from(t)}),"Array",{from:function(t){var e,a,n,d,h=r(t),m="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,f=void 0!==v,b=0,_=c(h);if(f&&(v=i(v,p>2?arguments[2]:void 0,2)),null==_||m==Array&&l(_))for(a=new m(e=s(h.length));e>b;b++)u(a,b,f?v(h[b],b):h[b]);else for(d=_.call(h),a=new m;!(n=d.next()).done;b++)u(a,b,f?o(d,v,[n.value,b],!0):n.value);return a.length=b,a}})},350:function(t,e,a){"use strict";var i=a(9),n=a(58);t.exports=function(t,e,a){e in t?i.f(t,e,n(0,a)):t[e]=a}},351:function(t,e,a){"use strict";var i=a(324);a.n(i).a},352:function(t,e,a){"use strict";a(10),a(349),a(295);var i=a(24),n=a(8),r={name:"WrapLayout",props:{itemWidth:{type:Number,default:NaN},itemHeight:{type:Number,default:NaN},orientation:{type:String,default:"horizontal"}},directives:{"common-directive":i.a},mounted:function(){this.calculateChildrenSizes()},updated:function(){this.calculateChildrenSizes()},methods:{calculateChildrenSizes:function(){var t=this;this.itemWidth&&Array.from(this.$el.children).forEach(function(e){e.style.width=t.itemWidth+"px"});this.itemHeight&&Array.from(this.$el.children).forEach(function(e){e.style.height=t.itemHeight+"px"})}},mixins:[n.a]},o=(a(351),a(0)),l=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-wrap-layout",style:{flexDirection:"vertical"===this.orientation?"column":"row"}},[this._t("default")],2)},[],!1,null,null,null);e.a=l.exports},357:function(t,e,a){"use strict";e.a=[{label:"Red",value:"red"},{label:"Green",value:"green"},{label:"Blue",value:"blue"},{label:"Yellow",value:"yellow"},{label:"Cyan",value:"cyan"},{label:"Orange",value:"orange"},{label:"Gray",value:"gray"},{label:"Black",value:"black"}]},448:function(t,e,a){},536:function(t,e,a){"use strict";var i=a(448);a.n(i).a},595:function(t,e,a){"use strict";a.r(e);a(295);var i=a(83),n=a(84),r=a(341),o=a(297),l=a(17),s=a(302),u=a(352),c=a(74),d=a(357),h=new(function(){function t(e){Object(i.a)(this,t),Object(r.a)(this,"currentIndex",0),Object(r.a)(this,"items",["#43b883","#1c6b48","#289062","#49e95e","#33745e"]),e&&(this.items=e)}return Object(n.a)(t,[{key:"next",value:function(){return this.currentIndex<0&&(this.currentIndex=0),this.items.length<this.currentIndex+1&&(this.currentIndex=0),this.items[this.currentIndex++]}},{key:"back",value:function(){this.currentIndex--}}]),t}())(d.a.map(function(t){return t.value}));function m(t){return 11==t?"11th":12==t?"12th":13==t?"13th":t%10==1?t+"st":t%10==2?t+"nd":t%10==3?t+"rd":t+"th"}var p={name:"WrapLayoutLiveDemoDoc",data:function(){return{labels:[],width:"460",height:"380",orientation:"horizontal",containerItemWidth:"",containerItemHeight:"",itemWidth:"",itemHeight:"",itemText:"",containerBackground:"",colors:d.a}},mounted:function(){this.populateSampleData()},methods:{addNewLabel:function(){this.labels.push({text:this.itemText,width:this.itemWidth,height:this.itemHeight,bgColor:h.next()}),this.$refs.itemInput.$el.focus()},removeLabels:function(){this.labels=[]},removeLast:function(){this.labels.splice(this.labels.length-1,1),h.back()},removeItem:function(t){this.labels.splice(t,1)},onKeyUp:function(){this.addNewLabel()},populateSampleData:function(){this.addSampleBox(1,"120"),this.addSampleBox(2,"120"),this.addSampleBox(3,"120"),this.addSampleBox(4,"120"),this.addSampleBox(5,"120"),this.addSampleBox(6,"120")},addSampleBox:function(t,e){this.labels.push({text:m(t),width:e,height:e,bgColor:h.next()})}},computed:{containerWidth:function(){return this.containerItemWidth?Number(this.containerItemWidth):null},containerHeight:function(){return this.containerItemHeight?Number(this.containerItemHeight):null}},components:{StackLayout:c.a,TextField:s.a,WrapLayout:u.a,Label:o.a,Button:l.a}},v=(a(536),a(0)),f=Object(v.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("StackLayout",[a("StackLayout",{staticClass:"demo-panel"},[a("Label",{staticClass:"demo-panel__title",attrs:{text:"Container Configuration"}}),t._v(" "),a("StackLayout",{staticClass:"form-group"},[a("StackLayout",{attrs:{orientation:"horizontal"}},[a("Label",{staticClass:"editor-param hidden-sm",attrs:{text:"Background Color: ",width:"200"}}),t._v(" "),a("Label",{staticClass:"editor-param hidden-lg",attrs:{text:"Bg Color: ",width:"200"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.containerBackground,expression:"containerBackground"}],attrs:{id:"wraplayout_backgroundColor_input"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.containerBackground=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Color")]),t._v(" "),t._l(t.colors,function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])})],2)],1),t._v(" "),a("StackLayout",{staticClass:"m-t-5",attrs:{orientation:"horizontal"}},[a("Label",{staticClass:"editor-param",attrs:{text:"Width: ",width:"200"}}),t._v(" "),a("TextField",{attrs:{keyboardType:"number",id:"wraplayout_width_input"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})],1),t._v(" "),a("StackLayout",{staticClass:"m-t-5",attrs:{orientation:"horizontal"}},[a("Label",{staticClass:"editor-param",attrs:{text:"Height: ",width:"200"}}),t._v(" "),a("TextField",{attrs:{keyboardType:"number",id:"wraplayout_height_input"},model:{value:t.height,callback:function(e){t.height=e},expression:"height"}})],1),t._v(" "),a("StackLayout",{staticClass:"m-t-5",attrs:{orientation:"horizontal"}},[a("Label",{attrs:{text:"Orientation: ",width:"200"}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.orientation,expression:"orientation"}],attrs:{horizontalAlignment:"50%",id:"wraplayout_orientation_input"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.orientation=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"horizontal"}},[t._v("Horizontal")]),t._v(" "),a("option",{attrs:{value:"vertical"}},[t._v("Vertical")])])],1),t._v(" "),a("StackLayout",{staticClass:"m-t-5",attrs:{orientation:"horizontal"}},[a("Label",{staticClass:"editor-param",attrs:{text:"Item Width: ",width:"200"}}),t._v(" "),a("TextField",{attrs:{keyboardType:"number",id:"wraplayout_itemWidth_input"},model:{value:t.containerItemWidth,callback:function(e){t.containerItemWidth=e},expression:"containerItemWidth"}})],1),t._v(" "),a("StackLayout",{staticClass:"m-t-5",attrs:{orientation:"horizontal"}},[a("Label",{staticClass:"editor-param",attrs:{text:"Item Height: ",width:"200"}}),t._v(" "),a("TextField",{attrs:{keyboardType:"number",id:"wraplayout_itemHeight_input"},model:{value:t.containerItemHeight,callback:function(e){t.containerItemHeight=e},expression:"containerItemHeight"}})],1)],1)],1),t._v(" "),a("StackLayout",{staticClass:"demo-panel"},[a("Label",{staticClass:"demo-panel__title",attrs:{text:"Add Children"}}),t._v(" "),a("StackLayout",{staticClass:"form-group"},[a("StackLayout",{attrs:{orientation:"horizontal"}},[a("Label",{attrs:{text:"Actions: ",width:"110"}}),t._v(" "),a("Button",{staticClass:"m-g-3",attrs:{id:"wraplayout_addNewChild__button"},on:{tap:function(e){return t.addNewLabel()}}},[t._v("Add New Child")]),t._v(" "),a("Button",{staticClass:"m-g-3",attrs:{id:"wraplayout_removeAll__button"},on:{tap:function(e){return t.removeLabels()}}},[t._v("Remove Children")]),t._v(" "),a("Button",{staticClass:"m-g-3",attrs:{id:"wraplayout_removeLast__button"},on:{tap:function(e){return t.removeLast()}}},[t._v("Remove Last Child")])],1),t._v(" "),a("StackLayout",{staticClass:"m-t-5",attrs:{orientation:"horizontal"}},[a("Label",{attrs:{text:"Text: ",width:"140"}}),t._v(" "),a("TextField",{ref:"itemInput",attrs:{keyboardType:"text",hint:"Item Text",id:"wraplayout_itemText_input"},on:{returnPress:t.onKeyUp},model:{value:t.itemText,callback:function(e){t.itemText=e},expression:"itemText"}})],1),t._v(" "),a("StackLayout",{staticClass:"m-t-5",attrs:{orientation:"horizontal"}},[a("Label",{attrs:{text:"Width: ",width:"140"}}),t._v(" "),a("TextField",{attrs:{keyboardType:"number",hint:"Item Width",id:"wraplayout_innerItem_itemWidth_input"},model:{value:t.itemWidth,callback:function(e){t.itemWidth=e},expression:"itemWidth"}})],1),t._v(" "),a("StackLayout",{staticClass:"m-t-5",attrs:{orientation:"horizontal"}},[a("Label",{attrs:{text:"Height: ",width:"140"}}),t._v(" "),a("TextField",{attrs:{keyboardType:"number",hint:"Item Height",id:"wraplayout_innerItem_itemHeight_input"},model:{value:t.itemHeight,callback:function(e){t.itemHeight=e},expression:"itemHeight"}})],1)],1)],1),t._v(" "),a("StackLayout",{staticClass:"demo-panel"},[a("Label",{staticClass:"demo-panel__title",attrs:{text:"Rendered Result"}}),t._v(" "),a("WrapLayout",{staticClass:"wrap_demo_item",attrs:{width:t.width,height:t.height,itemWidth:t.containerWidth,itemHeight:t.containerHeight,orientation:t.orientation,backgroundColor:t.containerBackground,id:"wraplayout_thewraplayout"}},t._l(t.labels,function(t,e){return a("Label",{key:t.text+"__"+e,attrs:{id:"dynamic-generated-label label_"+e,text:t.text,width:t.width,height:t.height,backgroundColor:t.bgColor}})}),1)],1),t._v(" "),a("StackLayout",{staticClass:"demo-panel"},[a("Label",{staticClass:"demo-panel__title",attrs:{text:"Children List"}}),t._v(" "),a("StackLayout",{staticClass:"form-group"},t._l(t.labels,function(e,i){return a("WrapLayout",{key:i,staticClass:"child-panel-container",attrs:{orientation:"vertical"}},[a("Label",{staticClass:"m-g-3",attrs:{text:"Text :"}}),t._v(" "),a("TextField",{attrs:{id:"wraplayout_childreneditor_text_input"+i},model:{value:e.text,callback:function(a){t.$set(e,"text",a)},expression:"label.text"}}),t._v(" "),a("Label",{staticClass:"m-g-3",attrs:{text:"Width: "}}),t._v(" "),a("TextField",{attrs:{keyboardType:"number",id:"wraplayout_childreneditor_width_input"+i},model:{value:e.width,callback:function(a){t.$set(e,"width",a)},expression:"label.width"}}),t._v(" "),a("Label",{staticClass:"m-g-3",attrs:{text:"Height: "}}),t._v(" "),a("TextField",{attrs:{keyboardType:"number",id:"wraplayout_childreneditor_height_input"+i},model:{value:e.height,callback:function(a){t.$set(e,"height",a)},expression:"label.height"}}),t._v(" "),a("Label",{staticClass:"m-g-3",attrs:{text:"Color: "}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.bgColor,expression:"label.bgColor"}],attrs:{id:"wraplayout_childreneditor_bgColor_input"+i},on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"bgColor",a.target.multiple?i:i[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Color")]),t._v(" "),t._l(t.colors,function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.label))])})],2),t._v(" "),a("Button",{staticClass:"fa fa-remove hidden-sm",attrs:{id:"wraplayout_childreneditor_removeItem_button"+i},on:{tap:function(e){return t.removeItem(i)}}})],1)}),1)],1)],1)},[],!1,null,"4696cb11",null);e.default=f.exports}}]);