_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{OwiU:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dev",function(){return n("PiUT")}])},PiUT:function(t,e,n){"use strict";n.r(e);var i=n("nKUr"),s=n("hlFM"),c=n("g4pe"),r=n.n(c),a=n("q1tI"),o=n.n(a),l=n("H+61"),u=n("UlJF"),h=n("+Css"),m=n("7LId"),d=n("VIvw"),p=n("iHvq"),j=n("cpVT"),g=n("tRbT");function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=Object(p.a)(t);if(e){var s=Object(p.a)(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return Object(d.a)(this,n)}}var x=function(t){Object(m.a)(n,t);var e=b(n);function n(t){var i;return Object(l.a)(this,n),i=e.call(this,t),Object(j.a)(Object(h.a)(i),"interval",null),i.state={currentTimestamp:(new Date).getTime(),unit:1},i}return Object(u.a)(n,[{key:"tick",value:function(){this.setState({currentTimestamp:(new Date).getTime()/this.state.unit})}},{key:"updateInitTime",value:function(t){var e=new Date;console.log(e.getTime()),console.log(this.state.unit),document.getElementById("sourceTime").value=e.toISOString().replace("T"," ").split(".")[0],document.getElementById("sourceTimestamp").value=Math.round(e.getTime()/t)}},{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){return t.tick()}),100),this.updateInitTime(this.state.unit),this.onTimeClick=this.onTimeClick.bind(this),this.onTimestampClick=this.onTimestampClick.bind(this),this.onChange=this.onChange.bind(this)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"onChange",value:function(t){var e=t.target.options.selectedIndex,n=t.target.options[e].value,i=Number.parseInt(n);this.setState({unit:i}),this.updateInitTime(i)}},{key:"onTimeClick",value:function(){var t;if(document){var e=null===(t=document.getElementById("sourceTime"))||void 0===t?void 0:t.value;console.log(e),document.getElementById("targetTimestamp").value=new Date(e).getTime()/this.state.unit}}},{key:"onTimestampClick",value:function(){var t;if(document){var e=(null===(t=document.getElementById("sourceTimestamp"))||void 0===t?void 0:t.value)*this.state.unit;console.log(e),document.getElementById("targetTime").value=new Date(Number.parseInt(e)).toISOString().replace("T"," ").split(".")[0]}}},{key:"render",value:function(){return Object(i.jsxs)(g.a,{style:{borderWidth:1,borderStyle:"dashed",padding:10},children:[Object(i.jsxs)(g.a,{container:!0,children:[Object(i.jsxs)(g.a,{item:!0,xs:6,sm:6,children:[Object(i.jsx)("span",{style:{marginRight:50},children:"Now:"}),Object(i.jsx)("span",{children:this.state.currentTimestamp})]}),Object(i.jsxs)(g.a,{item:!0,xs:4,sm:4,children:[Object(i.jsx)("span",{style:{marginRight:10},children:"Unit:"}),Object(i.jsxs)("select",{style:{width:80,height:25},onChange:this.onChange,children:[Object(i.jsx)("option",{value:"1",children:"ms"}),Object(i.jsx)("option",{value:"1000",children:"s"})]})]})]}),Object(i.jsxs)(g.a,{children:[Object(i.jsx)("span",{style:{marginRight:44},children:"Time:  "}),Object(i.jsx)("input",{type:"text",id:"sourceTime",style:{height:30,width:230,margin:"10px 10px 10px 0px"}}),Object(i.jsx)("button",{style:{height:36,width:100},onClick:this.onTimeClick,children:"Convert"}),Object(i.jsx)("input",{type:"text",id:"targetTimestamp",style:{height:30,width:200,margin:"10px 10px 10px 10px"}}),Object(i.jsx)("span",{style:{marginRight:10},children:1==this.state.unit?"ms":"s"})]}),Object(i.jsxs)(g.a,{children:[Object(i.jsx)("span",{style:{marginRight:10},children:"Timestamp:"}),Object(i.jsx)("input",{type:"text",id:"sourceTimestamp",style:{height:30,width:200,margin:"10px 10px 10px 0px"}}),Object(i.jsx)("span",{style:{marginRight:10},children:1==this.state.unit?"ms":"s"}),Object(i.jsx)("button",{style:{height:36,width:100},onClick:this.onTimestampClick,children:"Convert"}),Object(i.jsx)("input",{type:"text",id:"targetTime",style:{height:30,width:230,margin:"10px 0px 10px 10px"}})]})]})}}]),n}(o.a.Component);e.default=function(){return Object(i.jsxs)(s.a,{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(i.jsxs)(r.a,{children:[Object(i.jsx)("title",{children:"\u5728\u7ebf\u6b63\u5219\u68c0\u67e5\u5de5\u5177"}),Object(i.jsx)("meta",{content:"\u5de5\u5177,\u6b63\u5219,regex,regexr,\u89e3\u6790,\u7a0b\u5e8f\u5458,\u8bbe\u8ba1\u5e08,parse",name:"keywords"}),Object(i.jsx)("meta",{content:"\u5728\u7ebf\u6b63\u5219\u68c0\u67e5\u5de5\u5177",name:"title"}),Object(i.jsx)("meta",{content:"\u4e3a\u5de5\u7a0b\u5e08\u548c\u8bbe\u8ba1\u5e08\u63d0\u4f9b\u6700\u65b9\u4fbf\u7684\u5728\u7ebf\u5de5\u5177, \u5305\u62ec JSON \u89e3\u6790\uff0cURL\u8f6c\u6362",name:"description"}),Object(i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"})]}),Object(i.jsx)(x,{})]})}},UlJF:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,"a",(function(){return s}))},cpVT:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))}},[["OwiU",0,1,2,3,4]]]);