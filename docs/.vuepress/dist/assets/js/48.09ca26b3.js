(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{294:function(t,e,n){},295:function(t,e,n){"use strict";var r=n(2),i=n(15),a=n(21),o=n(77),s=n(75),c=n(5),u=n(99).f,l=n(102).f,f=n(9).f,h=n(298).trim,p=r.Number,m=p,d=p.prototype,v="Number"==a(n(76)(d)),x="trim"in String.prototype,g=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,a=(e=x?e.trim():h(e,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var o,c=e.slice(2),u=0,l=c.length;u<l;u++)if((o=c.charCodeAt(u))<48||o>i)return NaN;return parseInt(c,r)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(v?c(function(){d.valueOf.call(n)}):"Number"!=a(n))?o(new m(g(e)),n,p):g(e)};for(var N,_=n(6)?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;_.length>b;b++)i(m,N=_[b])&&!i(p,N)&&f(p,N,l(m,N));p.prototype=d,d.constructor=p,n(11)(r,"Number",p)}},297:function(t,e,n){"use strict";n(14),n(100),n(101),n(295);var r=n(24),i=n(8),a={name:"Label",props:{text:{type:[String,Number],default:""},textWrap:{type:Boolean,default:!1}},directives:{"common-directive":r.a},computed:{fontClass:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?this.text.replace(" | fonticon",""):""},textValue:function(){return"string"==typeof this.text&&this.text.includes(" | fonticon")?"":this.text}},mixins:[i.a]},o=(n(300),n(0)),s=Object(o.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("span",{directives:[{name:"common-directive",rawName:"v-common-directive"}],staticClass:"vxp-label",class:this.fontClass,style:{"white-space":this.textWrap?"normal":"nowrap"}},[this._v("\n  "+this._s(this.textValue)+"\n  "),this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},298:function(t,e,n){var r=n(7),i=n(16),a=n(5),o=n(299),s="["+o+"]",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),l=function(t,e,n){var i={},s=a(function(){return!!o[t]()||"​"!="​"[t]()}),c=i[t]=s?e(f):o[t];n&&(i[n]=c),r(r.P+r.F*s,"String",i)},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},299:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},300:function(t,e,n){"use strict";var r=n(294);n.n(r).a},372:function(t,e,n){},465:function(t,e,n){"use strict";var r=n(372);n.n(r).a},589:function(t,e,n){"use strict";n.r(e);var r=n(17),i=n(297),a=n(74),o={name:"ConfrimDialogDoc",data:function(){return{result:""}},methods:{showConfirmDialog:function(){var t=this;confirm({title:"Your title",message:"Your message",okButtonText:"OK",cancelButtonText:"Cancel"}).then(function(e){t.result=e?"Pressed OK":"Pressed Cancel"})}},components:{Button:r.a,Label:i.a,StackLayout:a.a}},s=(n(465),n(0)),c=Object(s.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("StackLayout",[e("Button",{attrs:{text:"Show Confirm Dialog",width:"200",id:"confirm_dialog_container"},on:{tap:this.showConfirmDialog}}),this._v(" "),e("StackLayout",{staticClass:"confirm_dialog__margin",attrs:{orientation:"horizontal"}},[e("Label",{attrs:{text:"Result: "}}),this._v(" "),e("Label",{attrs:{id:"label_result_text",text:this.result}})],1)],1)},[],!1,null,"1514e6b4",null);e.default=c.exports}}]);