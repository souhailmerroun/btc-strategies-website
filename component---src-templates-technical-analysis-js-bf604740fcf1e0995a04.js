"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[150],{9662:function(t,e,n){var r=n(614),o=n(6330),a=TypeError;t.exports=function(t){if(r(t))return t;throw a(o(t)+" is not a function")}},1223:function(t,e,n){var r=n(5112),o=n(30),a=n(3070).f,i=r("unscopables"),c=Array.prototype;void 0===c[i]&&a(c,i,{configurable:!0,value:o(null)}),t.exports=function(t){c[i][t]=!0}},9670:function(t,e,n){var r=n(111),o=String,a=TypeError;t.exports=function(t){if(r(t))return t;throw a(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),a=n(6244),i=function(t){return function(e,n,i){var c,u=r(e),s=a(u),l=o(i,s);if(t&&n!=n){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),a=r("".slice);t.exports=function(t){return a(o(t),8,-1)}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n=void 0===e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),o=n(111),a=r.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,o,a=n(7854),i=n(8113),c=a.process,u=a.Deno,s=c&&c.versions||u&&u.version,l=s&&s.v8;l&&(o=(r=l.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,a=o.call,i=r&&o.bind.bind(a,a);t.exports=r?i:function(t){return function(){return a.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614);t.exports=function(t,e){return arguments.length<2?(n=r[t],o(n)?n:void 0):r[t]&&r[t][e];var n}},8173:function(t,e,n){var r=n(9662),o=n(8554);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),a=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return a(o(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),o=n(7293),a=n(317);t.exports=!r&&!o((function(){return 7!==Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),o=n(7293),a=n(4326),i=Object,c=r("".split);t.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(t){return"String"===a(t)?c(t,""):i(t)}:i},614:function(t,e,n){var r=n(4154),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},8554:function(t){t.exports=function(t){return null==t}},111:function(t,e,n){var r=n(614),o=n(4154),a=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===a}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),o=n(614),a=n(7976),i=n(3307),c=Object;t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&a(e.prototype,c(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},30:function(t,e,n){var r,o=n(9670),a=n(6048),i=n(748),c=n(3501),u=n(490),s=n(317),l=n(6200),f="prototype",p="script",m=l("IE_PROTO"),v=function(){},g=function(t){return"<"+p+">"+t+"</"+p+">"},y=function(t){t.write(g("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){try{r=new ActiveXObject("htmlfile")}catch(a){}var t,e,n;b="undefined"!=typeof document?document.domain&&r?y(r):(e=s("iframe"),n="java"+p+":",e.style.display="none",u.appendChild(e),e.src=String(n),(t=e.contentWindow.document).open(),t.write(g("document.F=Object")),t.close(),t.F):y(r);for(var o=i.length;o--;)delete b[f][i[o]];return b()};c[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(v[f]=o(t),n=new v,v[f]=null,n[m]=t):n=b(),void 0===e?n:a.f(n,e)}},6048:function(t,e,n){var r=n(9781),o=n(3353),a=n(3070),i=n(9670),c=n(5656),u=n(1956);e.f=r&&!o?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),o=u(e),s=o.length,l=0;s>l;)a.f(t,n=o[l++],r[n]);return t}},3070:function(t,e,n){var r=n(9781),o=n(4664),a=n(3353),i=n(9670),c=n(2685),u=TypeError,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",m="writable";e.f=r?a?function(t,e,n){if(i(t),e=c(e),i(n),"function"==typeof t&&"prototype"===e&&"value"in n&&m in n&&!n[m]){var r=l(t,e);r&&r[m]&&(t[e]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:f in n?n[f]:r[f],writable:!1})}return s(t,e,n)}:s:function(t,e,n){if(i(t),e=c(e),i(n),o)try{return s(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),a=n(5656),i=n(1318).indexOf,c=n(3501),u=r([].push);t.exports=function(t,e){var n,r=a(t),s=0,l=[];for(n in r)!o(c,n)&&o(r,n)&&u(l,n);for(;e.length>s;)o(r,n=e[s++])&&(~i(l,n)||u(l,n));return l}},1956:function(t,e,n){var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},2140:function(t,e,n){var r=n(6916),o=n(614),a=n(111),i=TypeError;t.exports=function(t,e){var n,c;if("string"===e&&o(n=t.toString)&&!a(c=r(n,t)))return c;if(o(n=t.valueOf)&&!a(c=r(n,t)))return c;if("string"!==e&&o(n=t.toString)&&!a(c=r(n,t)))return c;throw i("Can't convert object to primitive value")}},4488:function(t,e,n){var r=n(8554),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),a=r("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),a="__core-js_shared__",i=r[a]||o(a,{});t.exports=i},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),o=n(7293),a=n(7854).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!a(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),o=Math.max,a=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):a(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),a=n(2190),i=n(8173),c=n(2140),u=n(5112),s=TypeError,l=u("toPrimitive");t.exports=function(t,e){if(!o(t)||a(t))return t;var n,u=i(t,l);if(u){if(void 0===e&&(e="default"),n=r(u,t,e),!o(n)||a(n))return n;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},2685:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,a=Math.random(),i=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+i(++o+a,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var r=n(7854),o=n(2309),a=n(2597),i=n(9711),c=n(6293),u=n(3307),s=r.Symbol,l=o("wks"),f=u?s.for||s:s&&s.withoutSetter||i;t.exports=function(t){return a(l,t)||(l[t]=c&&a(s,t)?s[t]:f("Symbol."+t)),l[t]}},3792:function(t,e,n){n(1223)("flat")},5592:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(7294),o=n(1883),a=n(1041);var i=t=>{let{siteTitle:e}=t;return r.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-3"},r.createElement("div",{className:"container-fluid"},r.createElement(o.Link,{className:"navbar-brand",to:"/"},e),r.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.createElement("ul",{className:"navbar-nav"}," ",a.map((t=>r.createElement("li",{key:t,className:"nav-item"},r.createElement(o.Link,{className:"nav-link",to:"/technical-analysis/"+t},t.toUpperCase()))))))))};var c=t=>{var e;let{children:n}=t;const a=(0,o.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(i,{siteTitle:(null===(e=a.site.siteMetadata)||void 0===e?void 0:e.title)||"Title"}),r.createElement("div",{className:"container"},r.createElement("main",{className:"mb-3"},n),r.createElement("footer",{className:"text-center mb-3"},"© ",(new Date).getFullYear()," · Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},1532:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});n(3792);var r=n(7294),o=n(5592),a=JSON.parse('{"Trend Following Strategies":["MovingAverageStrategySMA","MovingAverageStrategyEMA","IchimokuCloudStrategy","ADXStrategy","ParabolicSARStrategy","DonchianChannelStrategy","GannTheoryStrategy"],"Momentum Strategies":["MACDStrategy","RSIStrategy","StochasticOscillatorStrategy","ATRStrategy","VolumeProfileStrategy","VWAPStrategy"],"Volatility Strategies":["BollingerBandsStrategy","KeltnerChannelStrategy"],"Price Action Strategies":["PriceActionStrategy","RenkoChartStrategy","PivotPointsStrategy"],"Support and Resistance Strategies":["FibonacciRetracementStrategy"],"Seasonality Strategies":["SeasonalityStrategy"]}');var i=t=>{const{0:e,1:n}=(0,r.useState)({}),{0:o,1:i}=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{const e=(new Date).toISOString().slice(0,10).replace(/-/g,""),r="https://souhailmerroun-entrepreneur.s3.eu-west-3.amazonaws.com/btc_strategies/"+t+"_strategies_feedback_"+e+".json";try{const e=await fetch(r);if(!e.ok)throw new Error("Failed to fetch feedback");const o=await e.json(),i=Object.entries(a).reduce(((e,n)=>{let[r,a]=n;return e[r]=a.map((e=>({name:e,feedback:o[e],image:e+"_chart_"+t+".png"}))),e}),{});n(i)}catch(o){i(o.message)}})()}),[t]),{strategiesData:e,error:o}};var c=t=>{let{pageContext:e}=t;const{currencyPair:n}=e,{strategiesData:a,error:c}=i(n),{0:u,1:s}=(0,r.useState)({});return r.createElement(o.Z,null,r.createElement("div",{className:"container"},r.createElement("h1",{className:"text-center"},"Crypto Strategies Feedback (",n,")"),r.createElement("p",null,"This page displays the feedback for various trading strategies applied to the ",n," trading pair. Click on a strategy in the left column to view its feedback."),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-3"},r.createElement("ul",{id:"strategy-list",className:"list-group strategy-list sticky-top",style:{top:"20px"}},Object.entries(a).map((t=>{let[e,n]=t;return r.createElement(r.Fragment,{key:e},r.createElement("li",{className:"list-group-item bg-dark text-white",onClick:()=>(t=>{s((e=>({...e,[t]:!e[t]})))})(e),style:{cursor:"pointer"}},e,r.createElement("span",{style:{float:"right"}},u[e]?"-":"+")),u[e]&&n.map((t=>r.createElement("li",{key:t.name,className:"list-group-item",onClick:()=>(t=>{const e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})})(t.name),style:{cursor:"pointer"}},t.name))))})))),r.createElement("div",{className:"col-md-9"},Object.values(a).flat().map((t=>r.createElement("div",{id:t.name,key:t.name,className:"card mb-4"},r.createElement("div",{className:"card-body"},r.createElement("h5",{className:"card-title"},t.name),r.createElement("p",{className:"card-text"},t.feedback||"Loading feedback..."),t.image&&r.createElement("img",{src:"https://souhailmerroun-entrepreneur.s3.eu-west-3.amazonaws.com/btc_strategies/"+t.image,alt:"Strategy Chart for "+t.name,className:"strategy-image",style:{maxWidth:"100%",marginTop:"10px"}}))))),c&&r.createElement("p",{className:"text-danger"},c)))))}},1041:function(t){t.exports=JSON.parse('["btc","eth","bnb","sol","trx","ton","doge","ada","link","near","imx","avax","xrp","bch","ltc","shib","dot","dai","apt","uni","pepe","tao","pnut","bonk","wif","floki","xec","sui","xlm"]')}}]);
//# sourceMappingURL=component---src-templates-technical-analysis-js-bf604740fcf1e0995a04.js.map