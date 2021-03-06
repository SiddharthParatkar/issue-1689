(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{193:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(311)),o=r(313),c={title:"Graphics / Primitives",keywords:["graphics"]},s={unversionedId:"examples/graphics-primitives",id:"examples/graphics-primitives",isDocsHomePage:!1,title:"Graphics / Primitives",description:"Use the graphics module to render and update shapes.",source:"@site/docs/examples/graphics-primitives.md",slug:"/examples/graphics-primitives",permalink:"/wave/docs/examples/graphics-primitives",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/graphics-primitives.md",version:"current",sidebar:"someSidebar",previous:{title:"Checkpoint",permalink:"/wave/docs/examples/checkpoint"},next:{title:"Graphics / Spline",permalink:"/wave/docs/examples/graphics-spline"}},p=[],l={rightToc:p};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use the graphics module to render and update shapes."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+r(424).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, ui, graphics as g\n\n# Create some shapes\narc = g.arc(r1=25, r2=50, a1=90, a2=180)\ncircle = g.circle(cx=25, cy=25, r=25)\nellipse = g.ellipse(cx=25, cy=25, rx=25, ry=20)\nimage = g.image(width=50, height=50, href='https://www.python.org/static/community_logos/python-powered-h-140x182.png')\nline = g.line(x1=0, y1=0, x2=50, y2=50)\npath = g.path(d='M 0,0 L 50,50 L 50,0 L 0,50 z')\npath2 = g.path(d=g.p().M(0, 0).L(50, 50).L(50, 0).L(0, 50).z().d())  # same effect as above, but programmable.\npath3 = g.p().M(0, 0).L(50, 50).L(50, 0).L(0, 50).z().path()  # same effect as above, but a tad more concise.\npolygon = g.polygon(points='0,0 50,50 50,0 0,50')\npolyline = g.polyline(points='0,0 50,50 50,0 0,50')\nrect = g.rect(x=0, y=0, width=50, height=50)\nrounded_rect = g.rect(x=0, y=0, width=50, height=50, rx=10)\ntext = g.text(x=0, y=48, text='Z', font_size='4em')\n\n# Collect 'em all\nshapes = [arc, circle, ellipse, image, line, path, path2, path3, polygon, polyline, rect, rounded_rect, text]\n\n# Apply fill/stroke for each shape\nfor shape in shapes:\n    shape.fill = 'none' if g.type_of(shape) == 'polyline' else 'crimson'\n    shape.stroke = 'darkred'\n    shape.stroke_width = 5\n\n# Lay out shapes vertically\ny = 10\nfor shape in shapes:\n    shape.transform = f'translate(10,{y})'\n    y += 60\n\n# Add shapes to the graphics card\npage = site['/demo']\npage['example'] = ui.graphics_card(\n    box='1 1 1 10', view_box='0 0 70 800', width='100%', height='100%',\n    stage=g.stage(\n        arc=arc,\n        circle=circle,\n        ellipse=ellipse,\n        image=image,\n        line=line,\n        path=path,\n        path2=path2,\n        path3=path3,\n        polygon=polygon,\n        polyline=polyline,\n        rect=rect,\n        rounded_rect=rounded_rect,\n        text=text,\n    ),\n)\n\npage.save()\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(i.b)("a",{href:Object(o.a)("docs/examples/tags#graphics")},"graphics")))}u.isMDXComponent=!0},311:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,f=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return r?a.a.createElement(f,c(c({ref:t},p),{},{components:r})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},312:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},313:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=r(312),a=r(314);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,p=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+l:l}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},314:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},424:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/graphics-primitives-069da2917a0f9226163992fa997d7064.png"}}]);