(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[15,25],{448:function(t,e,n){"use strict";n.r(e),n.d(e,"SiteComponent",function(){return h});var o=n(3),i=n(1),a=(n(0),n(693)),c=n.n(a),r=n(694),s=n.n(r),u=n(695),d=n.n(u),m=n(696),l=n.n(m),p=n(697),f=n.n(p),y=n(698),b=n.n(y),g=Object(o.a)("img",{target:"e1hcss760"})({name:"9whsf3",styles:"max-width:100%;"}),h=function(t){var e=t.site;return Object(i.jsx)("div",{className:"site ".concat(e.displayName.toLowerCase()),onClick:function(){top.bg.IntroTutorial.setState({enabled:!0,domains:e.domains,name:e.displayName,tile:e.domains&&e.domains[0]?e.domains[0].charAt(0):"",isInContext:!0,firstLogin:!0,inContextOnboardingStep:"add_first_site",isAllSet:!1}),window.open(e.loginURL)}},Object(i.jsx)("div",{className:"icon-container"},function(t){switch(t){case"facebook":return Object(i.jsx)(g,{src:c.a});case"google":return Object(i.jsx)(g,{src:s.a});case"linkedin":return Object(i.jsx)(g,{src:d.a});case"netflix":return Object(i.jsx)(g,{src:l.a});case"paypal":return Object(i.jsx)(g,{src:f.a});case"dropbox":return Object(i.jsx)(g,{src:b.a})}}(e.displayName.toLowerCase())),Object(i.jsx)("div",{className:"site-name"},e.displayName))}},485:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n(681),a=n.n(i),c=n(676),r=n(7),s=n(448);n(0);it("should shallow render the AddTenPassword component without crashing",function(){var t=a()([])({login:{baseUrl:"https://dummy.com"}}),e=Object(c.shallow)(Object(o.jsx)(r.a,{store:t},Object(o.jsx)(s.SiteComponent,{site:{displayName:"Dummy",domains:["dummy.com"],loginURL:"https://dummy.com"}})));expect(e).toHaveLength(1)}),it("should mount render the AddTenPassword component without crashing and click one site",function(){var t=a()([])({login:{baseUrl:"https://dummy.com"}}),e=jest.fn(),n=window.open;window.open=e,top.bg={IntroTutorial:{setState:jest.fn()}};var i=Object(c.mount)(Object(o.jsx)(r.a,{store:t},Object(o.jsx)(s.SiteComponent,{site:{displayName:"Dummy",domains:["dummy.com"],loginURL:"https://dummy.com"}})));i.find(".site").simulate("click"),expect(top.bg.IntroTutorial.setState).toHaveBeenCalled(),expect(e).toHaveBeenCalled(),window.open=n,i.unmount()}),it("should mount render the AddTenPassword component without crashing and render 6 sites",function(){var t=a()([])({login:{baseUrl:"https://dummy.com"}}),e=Object(c.mount)(Object(o.jsx)(r.a,{store:t},[{displayName:"Google",domains:["google.com"],loginURL:"https://dummy.com"},{displayName:"Facebook",domains:["facebook.com"],loginURL:"https://dummy.com"},{displayName:"LinkedIn",domains:["linkedin.com"],loginURL:"https://dummy.com"},{displayName:"PayPal",domains:["paypal.com"],loginURL:"https://dummy.com"},{displayName:"Dropbox",domains:["dropbox.com"],loginURL:"https://dummy.com"},{displayName:"Netflix",domains:["netflix.com"],loginURL:"https://dummy.com"}].map(function(t,e){return Object(o.jsx)(s.SiteComponent,{site:t,key:e})})));expect(e.find(".site-name")).toHaveLength(6),e.unmount()})},677:function(t,e){},678:function(t,e){},679:function(t,e){},680:function(t,e){},681:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=i.applyMiddleware.apply(void 0,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(t))(function(){var t=[],n=[];return{getState:function(){return r(e)?e(t):e},getActions:function(){return t},dispatch:function(e){if(!(0,c.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(e));t.push(e);for(var o=0;o<n.length;o++)n[o]();return e},clearActions:function(){t=[]},subscribe:function(t){return r(t)&&n.push(t),function(){var e=n.indexOf(t);e<0||n.splice(e,1)}},replaceReducer:function(t){if(!r(t))throw new Error("Expected the nextReducer to be a function.")}}});return n()}};var o,i=n(39),a=n(682),c=(o=a)&&o.__esModule?o:{default:o};var r=function(t){return"function"===typeof t}},682:function(t,e){var n="[object Object]";var o,i,a=Function.prototype,c=Object.prototype,r=a.toString,s=c.hasOwnProperty,u=r.call(Object),d=c.toString,m=(o=Object.getPrototypeOf,i=Object,function(t){return o(i(t))});t.exports=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||d.call(t)!=n||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t))return!1;var e=m(t);if(null===e)return!0;var o=s.call(e,"constructor")&&e.constructor;return"function"==typeof o&&o instanceof o&&r.call(o)==u}},693:function(t,e,n){t.exports=n.p+"static/media/facebook_icon.fd9679f3.svg"},694:function(t,e,n){t.exports=n.p+"static/media/gmail_icon.e9d42163.svg"},695:function(t,e,n){t.exports=n.p+"static/media/linkedin_icon.6f843b06.svg"},696:function(t,e,n){t.exports=n.p+"static/media/netflix_icon.c0e53037.svg"},697:function(t,e,n){t.exports=n.p+"static/media/paypal_icon.dab0379b.svg"},698:function(t,e,n){t.exports=n.p+"static/media/dropbox_icon.cdeca556.svg"}}]);