(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(82),o=a(87),c=a(93),s=a(84);var i=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(s.a,{className:"pagination-nav__link",to:a},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(s.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};t.default=function(e){var t=e.metadata,a=e.items,n=Object(l.a)().siteConfig.title,s="/"===t.permalink?n:"Blog",m=t.blogDescription;return r.a.createElement(o.a,{title:s,description:m},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},a.map((function(e){var t=e.content;return r.a.createElement(c.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},r.a.createElement(t,null))})),r.a.createElement(i,{metadata:t})))))}},88:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(c){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},89:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],r=t[3];if(a&&r){var l=[],o=(a=parseInt(a))<(r=parseInt(r))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(r+=o);for(var c=a;c!=r;c+=o)l.push(c);return l}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},90:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),o=a(84),c=a(83),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(20).a,theme:s};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,g=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},y=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function h(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var v=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?y(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},c=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=u({},h(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,c=[],s=[c];o>-1;){for(;(l=n[o]++)<r[o];){var i=void 0,m=t[o],u=a[o][l];if("string"==typeof u?(m=o>0?m:["plain"],i=u):(m=d(m,u.type),u.alias&&(m=d(m,u.alias)),i=u.content),"string"==typeof i){var y=i.split(p),h=y.length;c.push({types:m,content:y[0]});for(var v=1;v<h;v++)g(c),s.push(c=[]),c.push({types:m,content:y[v]})}else o++,t.push(m),a.push(i),n.push(0),r.push(i.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return g(c),s}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),f=a(88),b=a.n(f),E=a(89),k=a.n(E),j=a(82),N={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},_=a(92),O=function(){var e=Object(j.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,a=Object(_.a)().isDarkTheme,n=t.theme||N,r=t.darkTheme||n;return a?r:n},x=a(47),T=a.n(x),w=/{([\d,-]+)}/,C=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},P=/title=".*"/,B=function(e){var t=e.children,a=e.className,o=e.metastring,s=Object(j.a)().siteConfig.themeConfig.prism,m=void 0===s?{}:s,u=Object(r.useState)(!1),p=u[0],g=u[1],d=Object(r.useState)(!1),y=d[0],h=d[1];Object(r.useEffect)((function(){h(!0)}),[]);var f=Object(r.useRef)(null),E=[],N="",_=O();if(o&&w.test(o)){var x=o.match(w)[1];E=k.a.parse(x).filter((function(e){return e>0}))}o&&P.test(o)&&(N=o.match(P)[0].split("title=")[1].replace(/"+/g,""));var B=a&&a.replace(/language-/,"");!B&&m.defaultLanguage&&(B=m.defaultLanguage);var D=t.replace(/\n$/,"");if(0===E.length&&void 0!==B){for(var S,L="",A=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}}(B),I=t.replace(/\n$/,"").split("\n"),R=0;R<I.length;){var F=R+1,M=I[R].match(A);if(null!==M){switch(M.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=F+",";break;case"highlight-start":S=F;break;case"highlight-end":L+=S+"-"+(F-1)+","}I.splice(R,1)}else R+=1}E=k.a.parse(L),D=I.join("\n")}var J=function(){b()(D),g(!0),setTimeout((function(){return g(!1)}),2e3)};return l.a.createElement(v,Object(n.a)({},i,{key:String(y),theme:_,code:D,language:B}),(function(e){var t,a,r=e.className,o=e.style,s=e.tokens,i=e.getLineProps,m=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,N&&l.a.createElement("div",{style:o,className:T.a.codeBlockTitle},N),l.a.createElement("div",{className:T.a.codeBlockContent},l.a.createElement("button",{ref:f,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(T.a.copyButton,(t={},t[T.a.copyButtonWithTitle]=N,t)),onClick:J},p?"Copied":"Copy"),l.a.createElement("div",{tabIndex:0,className:Object(c.a)(r,T.a.codeBlock,(a={},a[T.a.codeBlockWithTitle]=N,a))},l.a.createElement("div",{className:T.a.codeBlockLines,style:o},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return E.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},m({token:e,key:t})))})))}))))))}))},D=a(6),S=(a(48),a(49)),L=a.n(S),A=function(e){return function(t){var a,n=t.id,r=Object(D.a)(t,["id"]),o=Object(j.a)().siteConfig,s=(o=void 0===o?{}:o).themeConfig,i=(s=void 0===s?{}:s).navbar,m=(i=void 0===i?{}:i).hideOnScroll,u=void 0!==m&&m;return n?l.a.createElement(e,r,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",(a={},a[L.a.enhancedAnchor]=!u,a)),id:n}),r.children,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):l.a.createElement(e,r)}},I=a(50),R=a.n(I),F={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?l.a.createElement(B,e):l.a.createElement("code",e):t},a:function(e){return l.a.createElement(o.a,e)},pre:function(e){return l.a.createElement("div",Object(n.a)({className:R.a.mdxCodeBlock},e))},h1:A("h1"),h2:A("h2"),h3:A("h3"),h4:A("h4"),h5:A("h5"),h6:A("h6")};t.a=F},93:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(83),o=a(85),c=a(91),s=a(84),i=a(90),m=a(86),u=a(51),p=a.n(u),g=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){var t,a,n,u,d,y=e.children,h=e.frontMatter,v=e.metadata,f=e.truncated,b=e.isBlogPostPage,E=void 0!==b&&b,k=v.date,j=v.permalink,N=v.tags,_=v.readingTime,O=h.author,x=h.title,T=h.image,w=h.keywords,C=h.author_url||h.authorURL,P=h.author_title||h.authorTitle,B=h.author_image_url||h.authorImageURL,D=Object(m.a)(T,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,w&&w.length&&r.a.createElement("meta",{name:"keywords",content:w.join(",")}),T&&r.a.createElement("meta",{property:"og:image",content:D}),T&&r.a.createElement("meta",{property:"twitter:image",content:D}),T&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+x})),r.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(t=E?"h1":"h2",a=k.substring(0,10).split("-"),n=a[0],u=g[parseInt(a[1],10)-1],d=parseInt(a[2],10),r.a.createElement("header",null,r.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",p.a.blogPostTitle)},E?x:r.a.createElement(s.a,{to:j},x)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:k,className:p.a.blogPostDate},u," ",d,", ",n," ",_&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(_)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},B&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:C,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:B,alt:O})),r.a.createElement("div",{className:"avatar__intro"},O&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:C,target:"_blank",rel:"noreferrer noopener"},O)),r.a.createElement("small",{className:"avatar__subtitle"},P)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(o.a,{components:i.a},y)),(N.length>0||f)&&r.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),N.map((function(e){var t=e.label,a=e.permalink;return r.a.createElement(s.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),f&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(s.a,{to:v.permalink,"aria-label":"Read more about "+x},r.a.createElement("strong",null,"Read More"))))))}}}]);