(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{294:function(t,e,r){},295:function(t,e,r){"use strict";var n=r(2),i=r(15),a=r(21),c=r(77),o=r(75),s=r(5),l=r(99).f,u=r(102).f,h=r(9).f,p=r(298).trim,d=n.Number,m=d,f=d.prototype,v="Number"==a(r(76)(f)),g="trim"in String.prototype,x=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var r,n,i,a=(e=g?e.trim():p(e,3)).charCodeAt(0);if(43===a||45===a){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var c,s=e.slice(2),l=0,u=s.length;l<u;l++)if((c=s.charCodeAt(l))<48||c>i)return NaN;return parseInt(s,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof d&&(v?s(function(){f.valueOf.call(r)}):"Number"!=a(r))?c(new m(x(e)),r,d):x(e)};for(var _,b=r(6)?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;b.length>y;y++)i(m,_=b[y])&&!i(d,_)&&h(d,_,u(m,_));d.prototype=f,f.constructor=d,r(11)(n,"Number",d)}},296:function(t,e,r){},297:function(t,e,r){"use strict";r(14),r(100),r(101),r(295);var n=r(24),i=r(8),a={name:"Label",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},directives:{"common-directive":n.a},computed:{fontClass:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?this.text.replace(" | fonticon",""):""},textValue:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?"":this.text}},mixins:[i.a]},c=(r(300),r(0)),o=Object(c.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("span",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-label",class:this.fontClass,style:{"white-space":this.textWrap?"normal":"nowrap"}},[this._v("\n  "+this._s(this.textValue)+"\n  "),this._t("default")],2)},[],!1,null,null,null);e.a=o.exports},298:function(t,e,r){var n=r(7),i=r(16),a=r(5),c=r(299),o="["+c+"]",s=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),u=function(t,e,r){var i={},o=a(function(){return!!c[t]()||"​"!="​"[t]()}),s=i[t]=o?e(h):c[t];r&&(i[r]=s),n(n.P+n.F*o,"String",i)},h=u.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},299:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},300:function(t,e,r){"use strict";var n=r(294);r.n(n).a},302:function(t,e,r){"use strict";r(295);var n=r(24),i=r(8),a={model:{event:"input",prop:"text"},name:"TextField",props:{maxLength:Number,keyboardType:{type:String,default:"text"},secure:{type:Boolean,default:!1},text:String,hint:String,editable:{type:Boolean,default:!0},autocorrect:Boolean},directives:{"common-directive":n.a},methods:{updateValue:function(t){this.$emit("textChange",t),this.$emit("input",t.target.value)}},computed:{handleKeyboardType:function(){switch(this.keyboardType){case"phone":return"tel";case"datetime":return"datetime-local";case"email":return"email";case"url":return"url";case"number":return"number";default:return"text"}}},mixins:[i.a]},c=(r(303),r(0)),o=Object(c.a)(a,function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-textfield",attrs:{placeholder:t.hint,disabled:!t.editable,maxlength:t.maxLength,type:t.secure?"password":t.handleKeyboardType,spellcheck:t.autocorrect},domProps:{value:t.text},on:{blur:function(e){return t.$emit("blur",e)},focus:function(e){return t.$emit("focus",e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("returnPress",e)},input:t.updateValue}})},[],!1,null,"967a7238",null);e.a=o.exports},303:function(t,e,r){"use strict";var n=r(296);r.n(n).a},333:function(t,e,r){},358:function(t,e,r){"use strict";var n=r(333);r.n(n).a},361:function(t,e,r){"use strict";r(295),r(14);var n=r(81),i=r(24),a=r(8),c={name:"Img",props:{src:String,stretch:{type:String,default:"none"},width:[String,Number],height:[String,Number]},computed:{imageSrc:function(){return this.src.replace("~","")},stretchClass:function(){return"vxp-img ".concat("none"!==this.stretch?"vxp-img--"+Object(n.a)(this.stretch):"").trim()}},directives:{"common-directive":i.a},mixins:[a.a]},o=(r(358),r(0)),s=Object(o.a)(c,function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{directives:[{name:"common-directive",rawName:"v-common-directive"}],class:t.stretchClass,attrs:{src:t.imageSrc,width:t.width,height:t.height},on:{error:function(e){return t.$emit("onLoadError",e)},load:function(e){return t.$emit("onLoad",e)}}})},[],!1,null,null,null).exports,l={name:"VxpImage",props:{src:String,stretch:{type:String,default:"none"},width:[String,Number],height:[String,Number],placeholder:String},components:{Img:s}},u=Object(o.a)(l,function(){var t=this,e=t.$createElement;return(t._self._c||e)("Img",{attrs:{src:t.src,stretch:t.stretch,width:t.width,height:t.height,alt:t.placeholder},on:{onLoadError:function(e){return t.$emit("onLoadError",e)},onLoad:function(e){return t.$emit("onLoad",e)}}})},[],!1,null,null,null);e.a=u.exports},428:function(t,e,r){},514:function(t,e,r){"use strict";var n=r(428);r.n(n).a},555:function(t,e,r){"use strict";r.r(e);var n=r(74),i=r(297),a=r(361),c={name:"VxpImageLiveDemo",data:function(){return{src:"~/images/logo.png",stretch:"none",placeholder:"",height:"100",width:"100"}},components:{TextField:r(302).a,StackLayout:n.a,Label:i.a,VxpImage:a.a}},o=(r(514),r(0)),s=Object(o.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("StackLayout",{staticStyle:{width:"400px",margin:"auto"}},[r("StackLayout",{staticClass:"stack-cell",staticStyle:{width:"400px",height:"200px"}},[r("VxpImage",{attrs:{id:"image",src:t.src,stretch:t.stretch,placeholder:t.placeholder,width:t.width,height:t.height}})],1),t._v(" "),r("Label",{attrs:{text:"Source URL: "}},[r("TextField",{attrs:{id:"image__src__input"},model:{value:t.src,callback:function(e){t.src=e},expression:"src"}})],1),t._v(" "),r("Label",{attrs:{text:"Stretch Mode: "}},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.stretch,expression:"stretch"}],attrs:{id:"image__stretchMode__select"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.stretch=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"none"}},[t._v("none")]),t._v(" "),r("option",{attrs:{value:"aspectFill"}},[t._v("aspectFill")]),t._v(" "),r("option",{attrs:{value:"aspectFit"}},[t._v("aspectFit")]),t._v(" "),r("option",{attrs:{value:"fill"}},[t._v("fill")])])]),t._v(" "),r("Label",{attrs:{text:"Placeholder: "}},[r("TextField",{attrs:{id:"image__placeholder__input"},model:{value:t.placeholder,callback:function(e){t.placeholder=e},expression:"placeholder"}})],1),t._v(" "),r("Label",{attrs:{text:"Width: "}},[r("TextField",{attrs:{"keyboard-type":"number",id:"image__width__input"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})],1),t._v(" "),r("Label",{attrs:{text:"Height: "}},[r("TextField",{attrs:{"keyboard-type":"number",id:"image__height__input"},model:{value:t.height,callback:function(e){t.height=e},expression:"height"}})],1)],1)},[],!1,null,null,null);e.default=s.exports}}]);