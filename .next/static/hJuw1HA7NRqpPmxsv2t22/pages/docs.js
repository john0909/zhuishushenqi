(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=t(0),c=(a=r)&&a.__esModule?a:{default:a};var p=c.default.createContext({}),s=p.Provider,u=p.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return c.default.createElement(u,null,function(n){return c.default.createElement(e,o({components:t||n},a))})}};n.default=function(e){var n=e.components,t=e.children;return c.default.createElement(s,{value:n},t)}},265:function(e,n,t){__NEXT_REGISTER_PAGE("/docs",function(){return e.exports=t(266),{page:e.exports.default}})},266:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(7);function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components;c(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n},"123123"),o.a.createElement(r.MDXTag,{name:"pre",components:n,props:{className:"language-js"}},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"var")," a ",o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"=")," ",o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token number"}},"1"),"\n",o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"function")," ",o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token function"}},"foo")," ",o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},")")," ",o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{"),"\n  ",o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token function"}},"alert"),o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token number"}},"1"),o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},")"),"\n",o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}"),"\n")))}},267:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),c=t(0),p=(a=c)&&a.__esModule?a:{default:a},s=t(146);var u={inlineCode:"code",wrapper:"div"},l=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,c.Component),r(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,r=void 0===a?{}:a,c=e.children,s=e.components,l=void 0===s?{}:s,m=e.Layout,i=e.layoutProps,f=l[t+"."+n]||l[n]||u[n]||n;return m?p.default.createElement(m,o({components:l},i),p.default.createElement(f,r,c)):p.default.createElement(f,r,c)}}]),n}();n.default=(0,s.withMDXComponents)(l)},7:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(267);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(146);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})}},[[265,1,0]]]);