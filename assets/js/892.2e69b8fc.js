(self.webpackChunkleo_scientific_website=self.webpackChunkleo_scientific_website||[]).push([[892],{1875:function(e,t){"use strict";t.Z=function(){return null}},7479:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(2122),a=n(9756),l=n(7294),o=n(6010),i=n(6742),c=n(3018),s=n(4996),u=n(3919),m="footerLogoLink_MyFc",d=n(8465),f=n(8617),v=["to","href","label","prependBaseUrlToHref"];function h(e){var t=e.to,n=e.href,o=e.label,c=e.prependBaseUrlToHref,m=(0,a.Z)(e,v),d=(0,s.Z)(t),h=(0,s.Z)(n,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,r.Z)({className:"footer__link-item"},n?{href:c?h:n}:{to:d},m),n&&!(0,u.Z)(n)?l.createElement("span",null,o,l.createElement(f.Z,null)):o)}var b=function(e){var t=e.sources,n=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:n,sources:t})};var g=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,r=t.links,a=void 0===r?[]:r,u=t.logo,d=void 0===u?{}:u,f={light:(0,s.Z)(d.src),dark:(0,s.Z)(d.srcDark||d.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},a&&a.length>0&&l.createElement("div",{className:"row footer__links"},a.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(h,e))}))):null)}))),(d||n)&&l.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},d.href?l.createElement(i.Z,{href:d.href,className:m},l.createElement(b,{alt:d.alt,sources:f})):l.createElement(b,{alt:d.alt,sources:f})),n?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null}},8617:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a="iconExternalLink_3J9K",l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,o=void 0===l?13.5:l;return r.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},3792:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(7294),a=n(412),l=n(3018),o=(0,l.WA)("theme"),i="light",c="dark",s=function(e){return e===c?c:i},u=function(e){(0,l.WA)("theme").set(s(e))},m=function(){var e=(0,l.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,m=e.respectPrefersColorScheme,d=(0,r.useState)(function(e){return a.Z.canUseDOM?s(document.documentElement.getAttribute("data-theme")):s(e)}(t)),f=d[0],v=d[1],h=(0,r.useCallback)((function(){v(i),u(i)}),[]),b=(0,r.useCallback)((function(){v(c),u(c)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",s(f))}),[f]),(0,r.useEffect)((function(){if(!n)try{var e=o.get();null!==e&&v(s(e))}catch(t){console.error(t)}}),[v]),(0,r.useEffect)((function(){n&&!m||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;v(t?c:i)}))}),[]),{isDarkTheme:f===c,setLightTheme:h,setDarkTheme:b}},d=n(2924);var f=function(e){var t=m(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return r.createElement(d.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:l}},e.children)},v="docusaurus.tab.",h=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,l.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,l._f)().forEach((function(t){if(t.startsWith(v)){var n=t.substring(v.length);e[n]=(0,l.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},b=(0,r.createContext)(void 0);var g=function(e){var t=h(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(b.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function E(e){var t=e.children;return r.createElement(f,null,r.createElement(l.pl,null,r.createElement(g,null,r.createElement(l.L5,null,r.createElement(l.Cn,null,t)))))}},4892:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(7294),a=n(6010),l=n(5977),o=n(4973),i=n(3018),c="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,r.useRef)(null),t=(0,l.k6)().action;return(0,i.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&s(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";var h=function(){var e,t=(0,i.nT)(),n=t.isClosed,l=t.close,c=(0,i.LU)().announcementBar;if(!c)return null;var s=c.content,u=c.backgroundColor,h=c.textColor,b=c.isCloseable;return!s||b&&n?null:r.createElement("div",{className:m,style:{backgroundColor:u,color:h},role:"banner"},r.createElement("div",{className:(0,a.Z)(f,(e={},e[v]=b,e)),dangerouslySetInnerHTML:{__html:s}}),b?r.createElement("button",{type:"button",className:(0,a.Z)(d,"clean-btn"),onClick:l,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},b=n(5063),g=n(7479),E=n(3792),p=n(2122),Z=n(9105),k=n(2263),_=n(4996);function w(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(Z.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var N=n(1217);function y(){var e=(0,k.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,i.l5)();return r.createElement(Z.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function C(e){var t=e.permalink,n=(0,k.Z)().siteConfig.url,a=function(){var e=(0,k.Z)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,_.Z)(t)}(),o=t?""+n+t:a;return r.createElement(Z.Z,null,r.createElement("meta",{property:"og:url",content:o}),r.createElement("link",{rel:"canonical",href:o}))}function I(e){var t=(0,k.Z)(),n=t.siteConfig,a=n.favicon,l=n.themeConfig,o=l.metadatas,c=l.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,h=e.keywords,b=e.searchMetadatas,g=(0,_.Z)(a),E=(0,i.pe)(d),I=u,L=m[u].direction;return r.createElement(r.Fragment,null,r.createElement(Z.Z,null,r.createElement("html",{lang:I,dir:L}),a&&r.createElement("link",{rel:"shortcut icon",href:g}),r.createElement("title",null,E),r.createElement("meta",{property:"og:title",content:E}),v||c&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.createElement(N.Z,{description:f,keywords:h,image:v}),r.createElement(C,null),r.createElement(y,null),r.createElement(w,(0,p.Z)({tag:i.HX,locale:u},b)),r.createElement(Z.Z,null,o.map((function(e,t){return r.createElement("meta",(0,p.Z)({key:"metadata_"+t},e))}))))}var L=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var D=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return L(),r.createElement(E.Z,null,r.createElement(I,e),r.createElement(u,null),r.createElement(h,null),r.createElement(b.Z,null),r.createElement("div",{className:(0,a.Z)(i.kM.wrapper.main,l,o)},t),!n&&r.createElement(g.Z,null))}},5537:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),o=n(6742),i=n(8465),c=n(4996),s=n(2263),u=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)(),n=t.siteConfig,m=n.title,d=n.themeConfig.navbar,f=d.title,v=d.logo,h=void 0===v?{src:""}:v,b=t.isClient,g=e.imageClassName,E=e.titleClassName,p=(0,a.Z)(e,u),Z=(0,c.Z)(h.href||"/"),k={light:(0,c.Z)(h.src),dark:(0,c.Z)(h.srcDark||h.src)};return l.createElement(o.Z,(0,r.Z)({to:Z},p,h.target&&{target:h.target}),h.src&&l.createElement(i.Z,{key:b,className:g,sources:k,alt:h.alt||f||m}),null!=f&&l.createElement("b",{className:E},f))}},5525:function(e,t,n){"use strict";n.d(t,{O:function(){return h}});var r=n(2122),a=n(9756),l=n(7294),o=n(6010),i=n(6742),c=n(4996),s=n(8617),u=n(3919),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function h(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,d=e.href,f=e.label,v=e.activeClassName,h=void 0===v?"navbar__link--active":v,b=e.prependBaseUrlToHref,g=(0,a.Z)(e,m),E=(0,c.Z)(o),p=(0,c.Z)(t),Z=(0,c.Z)(d,{forcePrependBaseUrl:!0}),k=f&&d&&!(0,u.Z)(d),_="dropdown__link--active"===h;return l.createElement(i.Z,(0,r.Z)({},d?{href:b?Z:d}:Object.assign({isNavLink:!0,activeClassName:h,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(p)}}:null),g),k?l.createElement("span",null,f,l.createElement(s.Z,_&&{width:12,height:12})):f)}function b(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,a.Z)(e,d),s=l.createElement(h,(0,r.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?l.createElement("li",null,s):s}function g(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,f));return l.createElement("li",{className:"menu__list-item"},l.createElement(h,(0,r.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(e.position,(0,a.Z)(e,v)),o=n?g:b;return l.createElement(o,r)}},6400:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),i=n(907),c=n(6010),s=n(3018),u=n(8780),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,m),b=(0,i.Iw)(v),g=b.activeVersion,E=b.activeDoc,p=(0,s.J)(v).preferredVersion,Z=(0,i.yW)(v),k=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,u.uniq)([g,p,Z].filter(Boolean)),n);return l.createElement(o.Z,(0,r.Z)({exact:!0},h,{className:(0,c.Z)(h.className,(t={},t[d]=E&&E.sidebar===k.sidebar,t)),label:null!=f?f:k.id,to:k.path}))}},9308:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),i=n(3154),c=n(907),s=n(3018),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,f=e.docsPluginId,v=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,b=e.dropdownItemsAfter,g=(0,a.Z)(e,u),E=(0,c.Iw)(f),p=(0,c.gB)(f),Z=(0,c.yW)(f),k=(0,s.J)(f),_=k.preferredVersion,w=k.savePreferredVersionName;var N,y=(N=p.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){w(e.name)}}})),[].concat(h,N,b)),C=null!=(t=null!=(n=E.activeVersion)?n:_)?t:Z,I=d&&y?"Versions":C.label,L=d&&y?void 0:m(C).path;return y.length<=1?l.createElement(o.Z,(0,r.Z)({},g,{mobile:d,label:I,to:L,isActive:v?function(){return!1}:void 0})):l.createElement(i.Z,(0,r.Z)({},g,{mobile:d,label:I,to:L,items:y,isActive:v?function(){return!1}:void 0}))}},7250:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),i=n(907),c=n(3018),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,i.zu)(m),v=(0,c.J)(m).preferredVersion,h=(0,i.yW)(m),b=null!=(t=null!=f?f:v)?t:h,g=null!=n?n:b.label,E=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return l.createElement(o.Z,(0,r.Z)({},d,{label:g,to:E}))}},3154:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),o=n(6010),i=n(3018),c=n(5525),s=n(4201),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,i.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,i=e.position,m=e.className,d=(0,a.Z)(e,u),f=(0,l.useRef)(null),v=(0,l.useRef)(null),h=(0,l.useState)(!1),b=h[0],g=h[1];return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":b})},l.createElement(c.O,(0,r.Z)({className:(0,o.Z)("navbar__item navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!b))}}),null!=(t=d.children)?t:d.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=f.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,a.Z)(e,m)),v=(0,i.be)(),h=f(n,v),b=(0,i.uR)({initialState:function(){return!h}}),g=b.collapsed,E=b.toggleCollapsed,p=b.setCollapsed;return(0,l.useEffect)((function(){h&&p(!h)}),[v,h]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":g})},l.createElement(c.O,(0,r.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),E()}}),null!=(t=d.children)?t:d.label),l.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return l.createElement(s.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,d),o=n?h:v;return l.createElement(o,r)}},4201:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(9756),a=n(7294),l=n(5525),o=n(3154),i=n(2122),c=["width","height"],s=function(e){var t=e.width,n=void 0===t?20:t,l=e.height,o=void 0===l?20:l,s=(0,r.Z)(e,c);return a.createElement("svg",(0,i.Z)({viewBox:"0 0 20 20",width:n,height:o,"aria-hidden":"true"},s),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(2263),m=n(3018),d=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,c=(0,r.Z)(e,d),f=(0,u.Z)().i18n,v=f.currentLocale,h=f.locales,b=f.localeConfigs,g=(0,m.l5)();function E(e){return b[e].label}var p=h.map((function(e){var t="pathname://"+g.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,p,l),k=t?"Languages":E(v);return a.createElement(o.Z,(0,i.Z)({},c,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(s,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,k)),items:Z}))}var v=n(1875);function h(e){return e.mobile?null:a.createElement(v.Z,null)}var b=["type"],g={default:function(){return l.Z},localeDropdown:function(){return f},search:function(){return h},dropdown:function(){return o.Z},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function E(e){var t=e.type,n=(0,r.Z)(e,b),l=function(e){var t=g[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return a.createElement(l,n)}},5063:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(2122),a=n(7294),l=n(6010),o=n(4973),i=n(1875),c=n(3018),s=n(2263),u={toggle:"toggle_71bT"},m=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,l.Z)(u.toggle,u.dark),style:n},t)},d=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,l.Z)(u.toggle,u.light),style:n},t)},f=(0,a.memo)((function(e){var t=e.className,n=e.icons,r=e.checked,o=e.disabled,i=e.onChange,c=(0,a.useState)(r),s=c[0],u=c[1],m=(0,a.useState)(!1),d=m[0],f=m[1],v=(0,a.useRef)(null);return a.createElement("div",{className:(0,l.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function v(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,l=t.darkIconStyle,o=t.lightIcon,i=t.lightIconStyle,u=(0,s.Z)().isClient;return a.createElement(f,(0,r.Z)({disabled:!u,icons:{checked:a.createElement(m,{icon:n,style:l}),unchecked:a.createElement(d,{icon:o,style:i})}},e))}var h=n(5350),b=n(5977),g=n(7898),E=function(e){var t=(0,b.TH)(),n=(0,a.useState)(e),r=n[0],l=n[1],o=(0,a.useRef)(!1),i=(0,a.useState)(0),s=i[0],u=i[1],m=(0,a.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return(0,g.Z)((function(t,n){var r=t.scrollY,a=null==n?void 0:n.scrollY;if(e)if(r<s)l(!0);else{if(o.current)return o.current=!1,void l(!1);a&&0===r&&l(!0);var i=document.documentElement.scrollHeight-s,c=window.innerHeight;a&&r>=a?l(!1):r+c<i&&l(!0)}}),[s,o]),(0,c.SL)((function(t){e&&!t.location.hash&&l(!0)})),(0,a.useEffect)((function(){e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:r}};var p=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},Z=n(3783),k=n(4201),_=n(5537),w=n(9756),N=["width","height","className"],y=function(e){var t=e.width,n=void 0===t?30:t,l=e.height,o=void 0===l?30:l,i=e.className,c=(0,w.Z)(e,N);return a.createElement("svg",(0,r.Z)({className:i,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},c),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},C="toggle_3Zt9",I="navbarHideable_2qcr",L="navbarHidden_3yey",D="right";function S(){return(0,c.LU)().navbar.items}function T(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,h.Z)(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?l():r()}),[r,l]),disabled:e}}function B(e){var t=e.sidebarShown,n=e.toggleSidebar;p(t);var i=S(),s=T(),u=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,l=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:r}),o=(0,c.D9)(l),i=(0,a.useState)((function(){return!1})),s=i[0],u=i[1];(0,a.useEffect)((function(){l&&!o&&u(!0)}),[l,o]);var m=!!l;return(0,a.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((function(){u(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(_.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&t&&a.createElement(v,{checked:s.isDarkTheme,onChange:s.toggle})),a.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":u.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},i.map((function(e,t){return a.createElement(k.Z,(0,r.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:u.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),u.content)))}var x=function(){var e,t,n,o,s,u,m,d=(0,c.LU)().navbar,f=d.hideOnScroll,h=d.style,b=(t=(0,Z.Z)(),n="mobile"===t,o=(0,a.useState)(!1),s=o[0],u=o[1],m=(0,a.useCallback)((function(){u((function(e){return!e}))}),[]),(0,a.useEffect)((function(){"desktop"===t&&u(!1)}),[t]),{shouldRender:n,toggle:m,shown:s}),g=T(),p=E(f),w=p.navbarRef,N=p.isNavbarVisible,x=S(),A=x.some((function(e){return"search"===e.type})),M=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:D)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:D)}))}}(x),U=M.leftItems,R=M.rightItems;return a.createElement("nav",{ref:w,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===h,"navbar--primary":"primary"===h,"navbar-sidebar--show":b.shown},e[I]=f,e[L]=f&&!N,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},(null==x?void 0:x.length)>0&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:b.toggle,onKeyDown:b.toggle},a.createElement(y,null)),a.createElement(_.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),U.map((function(e,t){return a.createElement(k.Z,(0,r.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},R.map((function(e,t){return a.createElement(k.Z,(0,r.Z)({},e,{key:t}))})),!g.disabled&&a.createElement(v,{className:C,checked:g.isDarkTheme,onChange:g.toggle}),!A&&a.createElement(i.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:b.toggle}),b.shouldRender&&a.createElement(B,{sidebarShown:b.shown,toggleSidebar:b.toggle}))}},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},8465:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),l=n(7294),o=n(6010),i=n(2263),c=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,i.Z)().isClient,n=(0,c.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),b=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,b.map((function(e){return l.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},7898:function(e,t,n){"use strict";var r=n(7294),a=n(412),l=function(){return a.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(l()),a=function(){var t=l();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},5350:function(e,t,n){"use strict";var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);