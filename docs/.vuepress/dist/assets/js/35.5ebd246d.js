(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{294:function(t,e,r){},295:function(t,e,r){"use strict";var i=r(2),n=r(15),a=r(21),o=r(77),s=r(75),c=r(5),u=r(99).f,l=r(102).f,f=r(9).f,h=r(298).trim,p=i.Number,m=p,d=p.prototype,v="Number"==a(r(76)(d)),x="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var r,i,n,a=(e=x?e.trim():h(e,3)).charCodeAt(0);if(43===a||45===a){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(var o,c=e.slice(2),u=0,l=c.length;u<l;u++)if((o=c.charCodeAt(u))<48||o>n)return NaN;return parseInt(c,i)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof p&&(v?c(function(){d.valueOf.call(r)}):"Number"!=a(r))?o(new m(y(e)),r,p):y(e)};for(var N,g=r(6)?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;g.length>b;b++)n(m,N=g[b])&&!n(p,N)&&f(p,N,l(m,N));p.prototype=d,d.constructor=p,r(11)(i,"Number",p)}},297:function(t,e,r){"use strict";r(14),r(100),r(101),r(295);var i=r(24),n=r(8),a={name:"Label",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},directives:{"common-directive":i.a},computed:{fontClass:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?this.text.replace(" | fonticon",""):""},textValue:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?"":this.text}},mixins:[n.a]},o=(r(300),r(0)),s=Object(o.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("span",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-label",class:this.fontClass,style:{"white-space":this.textWrap?"normal":"nowrap"}},[this._v("\n  "+this._s(this.textValue)+"\n  "),this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},298:function(t,e,r){var i=r(7),n=r(16),a=r(5),o=r(299),s="["+o+"]",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),l=function(t,e,r){var n={},s=a(function(){return!!o[t]()||"​"!="​"[t]()}),c=n[t]=s?e(f):o[t];r&&(n[r]=c),i(i.P+i.F*s,"String",n)},f=l.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},299:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},300:function(t,e,r){"use strict";var i=r(294);r.n(i).a},324:function(t,e,r){},349:function(t,e,r){"use strict";var i=r(19),n=r(7),a=r(30),o=r(106),s=r(107),c=r(22),u=r(350),l=r(108);n(n.S+n.F*!r(82)(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,n,f,h=a(t),p="function"==typeof this?this:Array,m=arguments.length,d=m>1?arguments[1]:void 0,v=void 0!==d,x=0,y=l(h);if(v&&(d=i(d,m>2?arguments[2]:void 0,2)),null==y||p==Array&&s(y))for(r=new p(e=c(h.length));e>x;x++)u(r,x,v?d(h[x],x):h[x]);else for(f=y.call(h),r=new p;!(n=f.next()).done;x++)u(r,x,v?o(f,d,[n.value,x],!0):n.value);return r.length=x,r}})},350:function(t,e,r){"use strict";var i=r(9),n=r(58);t.exports=function(t,e,r){e in t?i.f(t,e,n(0,r)):t[e]=r}},351:function(t,e,r){"use strict";var i=r(324);r.n(i).a},352:function(t,e,r){"use strict";r(10),r(349),r(295);var i=r(24),n=r(8),a={name:"WrapLayout",props:{itemWidth:{type:Number,default:NaN},itemHeight:{type:Number,default:NaN},orientation:{type:String,default:"horizontal"}},directives:{"common-directive":i.a},mounted:function(){this.calculateChildrenSizes()},updated:function(){this.calculateChildrenSizes()},methods:{calculateChildrenSizes:function(){var t=this;this.itemWidth&&Array.from(this.$el.children).forEach(function(e){e.style.width=t.itemWidth+"px"});this.itemHeight&&Array.from(this.$el.children).forEach(function(e){e.style.height=t.itemHeight+"px"})}},mixins:[n.a]},o=(r(351),r(0)),s=Object(o.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-wrap-layout",style:{flexDirection:"vertical"===this.orientation?"column":"row"}},[this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},447:function(t,e,r){},535:function(t,e,r){"use strict";var i=r(447);r.n(i).a},585:function(t,e,r){"use strict";r.r(e);var i=r(297),n={name:"WrapLayoutEqualColumnDoc",components:{WrapLayout:r(352).a,Label:i.a}},a=(r(535),r(0)),o=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("WrapLayout",{attrs:{height:"300",width:"450",orientation:"vertical",backgroundColor:"#3c495e"}},[e("Label",{staticClass:"wrapLayoutItem",attrs:{text:"first",backgroundColor:"#43b883"}}),this._v(" "),e("Label",{staticClass:"wrapLayoutItem",attrs:{text:"second",backgroundColor:"#1c6b48"}}),this._v(" "),e("Label",{staticClass:"wrapLayoutItem",attrs:{text:"third",backgroundColor:"#289062"}}),this._v(" "),e("Label",{staticClass:"wrapLayoutItem",attrs:{text:"fourth",backgroundColor:"#289062"}})],1)},[],!1,null,"c2a98954",null);e.default=o.exports}}]);