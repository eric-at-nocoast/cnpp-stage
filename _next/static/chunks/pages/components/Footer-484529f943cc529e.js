(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{9335:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Footer",function(){return t(538)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,u=(a=t(7294))&&a.__esModule?a:{default:a},i=t(6273),l=t(387),c=t(7190);var f={};function s(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=l.useRouter(),a=u.default.useMemo((function(){var r=o(i.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=u.default.createElement("a",null,h));var g=(r=u.default.Children.only(h))&&"object"===typeof r&&r.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),x=w[0],j=w[1],_=u.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);u.default.useEffect((function(){var e=j&&t&&i.isLocalURL(d),r="undefined"!==typeof b?b:n&&n.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,d,p,{locale:r})}),[p,d,j,b,t,n]);var E={ref:_,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,u,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:l,scroll:u}))}(e,n,d,p,m,v,y,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var A="undefined"!==typeof b?b:n&&n.locale,C=n&&n.isLocaleDomain&&i.getDomainLocale(p,A,n&&n.locales,n&&n.domainLocales);E.href=C||i.addBasePath(i.addLocale(p,A,n&&n.defaultLocale))}return u.default.cloneElement(r,E)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!i,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],h=o(a.useState(r?r.current:null),2),m=h[0],v=h[1],y=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=l.get(n):(r=l.get(t),c.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,u=n.elements;return u.set(e,r),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(o);var r=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:t}))}),[n,m,t,d]);return a.useEffect((function(){if(!i&&!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&v(r.current)}),[r]),[y,d]};var a=t(7294),u=t(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},538:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(5893),o=t(1664),a=[{name:"Home",href:"/"},{name:"About",href:"/about"},{name:"Contact us",href:"/contact"}];function u(){return(0,n.jsx)("footer",{className:"bg-sbaBlue",children:(0,n.jsxs)("div",{className:"mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8",children:[(0,n.jsx)("div",{className:"flex justify-center space-x-6 md:order-1",children:a.map((function(e){return(0,n.jsx)(o.default,{href:e.href,children:(0,n.jsx)("a",{className:"text-white hover:text-gray-500",children:e.name})},e.name)}))}),(0,n.jsxs)("div",{className:"mt-8 flex h-10 items-center justify-center md:order-2 md:mt-0",children:[(0,n.jsx)("a",{href:"https://www.rescue.org/",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("img",{className:"mr-5 h-10 w-auto",src:"https://i.ibb.co/gJF8KBX/irc-horizontal-lockup-rgb.jpg",alt:"IRC logo"})}),(0,n.jsx)("a",{href:"https://www.sba.gov/",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("img",{className:"h-10 w-auto",src:"https://i.ibb.co/X3PW3h6/variations-horizontal-two-color-reversed.png",alt:"SBA logo"})})]})]})})}},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=9335,e(e.s=r);var r}));var r=e.O();_N_E=r}]);