"use strict";(self.webpackChunkleo_scientific_website=self.webpackChunkleo_scientific_website||[]).push([[3085],{6416:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(7294),l=a(6010),c=a(1091),i=a(8976),s=a(1575),m=a(1548);const r={mdxPageWrapper:"mdxPageWrapper_zHyg"};function o(e){const{content:t}=e,{metadata:{title:a,description:o,frontMatter:d}}=t,{wrapperClassName:v,hide_table_of_contents:_}=d;return n.createElement(m.FG,{className:(0,l.Z)(v??m.kM.wrapper.mdxPages,m.kM.page.mdxPage)},n.createElement(m.d,{title:a,description:o}),n.createElement(c.Z,null,n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,l.Z)("row",r.mdxPageWrapper)},n.createElement("div",{className:(0,l.Z)("col",!_&&"col--8")},n.createElement(i.Z,null,n.createElement(t,null))),!_&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(s.Z,{toc:t.toc,minHeadingLevel:d.toc_min_heading_level,maxHeadingLevel:d.toc_max_heading_level}))))))}},5002:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7462),l=a(7294),c=a(1548);function i(e){let{toc:t,className:a,linkClassName:n,isChild:c}=e;return t.length?l.createElement("ul",{className:c?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function s(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:r,maxHeadingLevel:o,...d}=e;const v=(0,c.LU)(),_=r??v.tableOfContents.minHeadingLevel,f=o??v.tableOfContents.maxHeadingLevel,g=(0,c.b9)({toc:t,minHeadingLevel:_,maxHeadingLevel:f}),N=(0,l.useMemo)((()=>{if(s&&m)return{linkClassName:s,linkActiveClassName:m,minHeadingLevel:_,maxHeadingLevel:f}}),[s,m,_,f]);return(0,c.Si)(N),l.createElement(i,(0,n.Z)({toc:g,className:a,linkClassName:s},d))}},1575:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7462),l=a(7294),c=a(6010),i=a(5002);const s={tableOfContents:"tableOfContents_cNA8",docItemContainer:"docItemContainer_WX_Y"},m="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function o(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,c.Z)(s.tableOfContents,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:m,linkActiveClassName:r})))}}}]);