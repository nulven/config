(this.webpackJsonppopup=this.webpackJsonppopup||[]).push([[0],{73:function(e,t,n){},75:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),i=n.n(r),o=n(9),c=n.n(o),s=(n(73),n(35)),l=n(13),d=n.n(l),u=n(59),m=n(16),p=n(57),h=n(112),f=n(121),b=n(58),j=(n(75),n(36)),C=n(114),x=n(116),g=n(117),O=n(124),w=n(118),v=n(119);var y=function(e){var t=Object(h.a)((function(e){return{root:{flexGrow:1},h3:{marginTop:e.spacing(0),fontWeight:400,fontSize:"14px",lineHeight:"24px","& a":{color:"#0A6CFF"}},list:{width:"400px"},listItemText:{fontWeight:500,fontSize:"14px",lineHeight:"24px",color:"white","&:hover":{color:"#0A6CFF"}},divider:{backgroundColor:"#242424"}}}))();function n(e){return Object(a.jsx)(C.a,Object(j.a)(Object(j.a)({},e),{},{children:Object(a.jsx)("path",{d:"M10.4062 15.1875H10.9688C11.1094 15.1875 11.25 15.082 11.25 14.9062V5.34375C11.25 5.20312 11.1094 5.0625 10.9688 5.0625H10.4062C10.2305 5.0625 10.125 5.20312 10.125 5.34375V14.9062C10.125 15.082 10.2305 15.1875 10.4062 15.1875ZM4.78125 15.1875H5.34375C5.48438 15.1875 5.625 15.082 5.625 14.9062V5.34375C5.625 5.20312 5.48438 5.0625 5.34375 5.0625H4.78125C4.60547 5.0625 4.5 5.20312 4.5 5.34375V14.9062C4.5 15.082 4.60547 15.1875 4.78125 15.1875ZM15.4688 2.25H11.8125L10.6172 0.703125C10.3359 0.316406 9.73828 0 9.28125 0H6.46875C5.97656 0 5.37891 0.316406 5.09766 0.703125L3.9375 2.25H0.28125C0.105469 2.25 0 2.39062 0 2.53125V3.09375C0 3.26953 0.105469 3.375 0.28125 3.375H1.125V16.3125C1.125 17.2617 1.86328 18 2.8125 18H12.9375C13.8516 18 14.625 17.2617 14.625 16.3125V3.375H15.4688C15.6094 3.375 15.75 3.26953 15.75 3.09375V2.53125C15.75 2.39062 15.6094 2.25 15.4688 2.25ZM6.01172 1.37109C6.08203 1.23047 6.29297 1.16016 6.46875 1.125H9.28125C9.42188 1.16016 9.63281 1.23047 9.70312 1.37109L10.4062 2.25H5.34375L6.01172 1.37109ZM13.5 16.3125C13.5 16.6289 13.2188 16.875 12.9375 16.875H2.8125C2.49609 16.875 2.25 16.6289 2.25 16.3125V3.375H13.5V16.3125ZM7.59375 15.1875H8.15625C8.29688 15.1875 8.4375 15.082 8.4375 14.9062V5.34375C8.4375 5.20312 8.29688 5.0625 8.15625 5.0625H7.59375C7.41797 5.0625 7.3125 5.20312 7.3125 5.34375V14.9062C7.3125 15.082 7.41797 15.1875 7.59375 15.1875Z",fill:"#676767"})}))}var o=new URLSearchParams(window.location.search);return Object(a.jsxs)("div",{className:"center",children:[Object(a.jsx)("h1",{children:"Choose an identity"}),function(){if(e.referrer){var n,r=new URL(atob(o.get("referrer")||""));return r.pathname=atob((null===(n=o.get("action"))||void 0===n?void 0:n.toString())||""),Object(a.jsxs)("h3",{className:t.h3,children:["to log in to ",Object(a.jsx)("a",{href:r.protocol+"//"+r.hostname,children:r.hostname})]})}return Object(a.jsx)("h3",{children:"\xa0"})}(),Object(a.jsxs)(x.a,{component:"nav",className:t.list,"aria-label":"main mailbox folders",children:[e.identities.map((function(c){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsxs)(g.a,{button:!0,children:[Object(a.jsx)(O.a,{classes:{primary:t.listItemText},primary:c.name+"/",secondary:Object(a.jsx)(i.a.Fragment,{}),onClick:Object(m.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.referrer?e.sendIdentity(c.name,atob((null===(n=o.get("state"))||void 0===n?void 0:n.toString())||"")):navigator.clipboard.writeText(c.fingerprint);case 1:case"end":return t.stop()}}),t)})))}),Object(a.jsx)(w.a,{edge:"end",onClick:Object(m.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.deleteIdentity(c.name);case 1:case"end":return t.stop()}}),t)}))),children:Object(a.jsx)(n,{style:{color:"#676767"}})})]}),Object(a.jsx)(v.a,{classes:{root:t.divider}})]},c.name)})),Object(a.jsx)(r.Fragment,{children:Object(a.jsx)(g.a,{button:!0,children:Object(a.jsx)(O.a,{classes:{primary:t.listItemText},primary:"+\xa0\xa0Set up another identity",secondary:Object(a.jsx)(i.a.Fragment,{}),onClick:function(){return e.setCreation(!0)}})})})]})]})},L=n(122),H=n(5),I=n(120),S=Object(H.a)((function(e){return{root:{color:e.palette.primary.main,backgroundColor:e.palette.secondary.main,padding:"8px 24px",borderRadius:4,fontFamily:"Roboto",fontStyle:"normal",fontWeight:500,fontSize:"14px",lineHeight:"24px",textTransform:"initial"}}}))(I.a),k=n(123);var N=function(e){var t=Object(h.a)((function(e){return{root:{flexGrow:1},h3:{marginTop:e.spacing(4)},nameInput:{flex:1,marginTop:e.spacing(1)},form:{display:"flex",flexDirection:"column",alignItems:"",width:400},action:{display:"flex",flexDirection:"row",marginTop:e.spacing(3),justifyContent:"space-between","& .caption":{color:"#A9A9A9",display:"flex",flexDirection:"column",justifyContent:"center","& span":{fontSize:"12px",lineHeight:"16px",textAlign:"left"},"& a":{color:"#0A6CFF"}}},bottom:{display:"flex",flexDirection:"row",marginTop:e.spacing(6),justifyContent:"center","& .caption":{color:"#A9A9A9",display:"flex",flexDirection:"column",justifyContent:"center","& span":{fontSize:"12px",lineHeight:"16px",textAlign:"center"}}}}}))(),n=Object(r.useState)(""),i=Object(s.a)(n,2),o=i[0],c=i[1],l=/^((xn--)?([a-z0-9-]{1,61}|[a-z0-9-]{1,30})\.?){1,}$/;return Object(a.jsxs)("div",{className:"center",children:[Object(a.jsx)("h1",{children:"Set up a new identity"}),Object(a.jsx)("h3",{className:t.h3,children:"Your Handshake name"}),Object(a.jsxs)("form",{className:t.form,onSubmit:function(t){t.preventDefault(),e.createIndentity(o)},children:[Object(a.jsx)(L.a,{error:l.test(o),required:!0,className:t.nameInput,color:"primary",label:"Enter a Handshake name that you own",variant:"outlined",onChange:function(e){return function(e){c(e.target.value.toLowerCase())}(e)}}),Object(a.jsxs)("div",{className:t.action,children:[Object(a.jsxs)("div",{className:"caption",children:[Object(a.jsx)("span",{children:"Handshake name not in Namebase?"}),Object(a.jsxs)("span",{children:["See our ",Object(a.jsxs)("a",{href:"https://docs.namebase.io/handshake-login/using-handshake-login",target:"_new",children:["instructions for settings the record",Object(a.jsx)("br",{})," outside of Namebase"]})]})]}),Object(a.jsx)(S,{variant:"contained",disabled:!l.test(o),color:"secondary",type:"submit",children:Object(a.jsx)(k.a,{fontWeight:"600",component:"div",children:"Continue"})})]}),Object(a.jsx)("div",{className:t.bottom,children:Object(a.jsx)("div",{className:"caption",children:0===e.identities.length?Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("span",{children:"Don\u2019t have a Handshake name? "}),Object(a.jsx)("span",{children:Object(a.jsx)("a",{href:"https://6cqg3vy1fsb.typeform.com/to/famUtbd0",target:"_new",children:"Request one for free"})})]}):""})})]})]})},A=n(55),F=n(56),M=function(){function e(t){var n=this;Object(A.a)(this,e),this.commandName=void 0,this.execute=function(t){return e.SendCommand(Object(j.a)({command:n.commandName},t))},this.commandName=t}return Object(F.a)(e,null,[{key:"SendCommand",value:function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){console.log("".concat(t.command," Request"),t),chrome.runtime.sendMessage(t,(function(n){console.log("".concat(t.command," Response"),n),e(n)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();M.GenerateIdentity=new M("GenerateIdentity"),M.FetchAllIdentityName=new M("FetchAllIdentityName"),M.SendIdentity=new M("SendIdentity"),M.DeleteIdentity=new M("DeleteIdentity");var T=Object(p.a)({palette:{action:{disabled:"white",disabledBackground:"rgba(10, 108, 255, 0.5)"},primary:{main:"#ffffff"},secondary:{main:"#0A6CFF"},contrastThreshold:3,tonalOffset:.2},typography:{fontFamily:["Roboto","Arial","sans-serif"].join(",")}});var R=function(){var e=Object(h.a)((function(e){return{root:{flexGrow:1}}}))(),t=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a,r,i,o,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.GenerateIdentity.execute({name:t});case 2:n=e.sent,a=n.name.split("."),r=a.pop(),i=["_auth"].concat(Object(u.a)(a)).join("."),o=[{type:"TXT",host:i,value:"authv=0;fingerprint="+n.fingerprint,ttl:60}],(c=new URL(window.location.toString())).searchParams.append("login",btoa(n.name)),(s=new URL("".concat(window.baseDomain||"https://www.namebase.io","/next/domain-manager/").concat(r,"/records"))).searchParams.append("records",btoa(JSON.stringify(o))),s.searchParams.append("redirect",encodeURIComponent(encodeURIComponent(c.toString()))),window.location.href=s.toString(),O(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=new URLSearchParams(window.location.search),i=atob(n.get("referrer")||""),o=atob(n.get("action")||""),c=Object(r.useState)([]),l=Object(s.a)(c,2),p=l[0],j=l[1],C=Object(r.useState)(!1),x=Object(s.a)(C,2),g=x[0],O=x[1];HTMLFormElement.prototype.addInput=function(e,t){var n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name",e),n.setAttribute("value",t),this.appendChild(n)};var w=function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a,r,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,M.SendIdentity.execute({name:t,state:n});case 4:a=e.sent,r=document.getElementsByTagName("body")[0],c=document.createElement("form"),(s=new URL(i)).pathname=o,c.setAttribute("action",s.toString()),c.setAttribute("method","POST"),c.addInput("publicKey",btoa(a.publicKey)),c.addInput("signed",btoa(a.signed)),c.addInput("domain",btoa(a.name)),r.appendChild(c),c.submit();case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm('Are you sure you want to delete "'.concat(t,'"?'))){e.next=5;break}return e.next=3,M.DeleteIdentity.execute({name:t});case 3:return e.next=5,L();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.FetchAllIdentityName.execute();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:t=e.t0,j(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){L();var e=n.get("login"),t=n.get("state");e&&t&&w(atob(e),atob(t))}),[]),Object(a.jsx)(f.a,{theme:T,children:Object(a.jsx)(b.a,{children:Object(a.jsx)("div",{className:"center",children:Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsxs)("div",{className:"head",children:[g?Object(a.jsx)("div",{className:"back",onClick:function(){return O(!1)},children:"\u2190"}):Object(a.jsx)("span",{}),Object(a.jsx)("span",{className:"center",dangerouslySetInnerHTML:{__html:'<svg class="logo" width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9107 0C14.8632 0 14.7169 0 14.6038 0.209661C14.4576 0.479226 3.1254 21.4332 0.937593 25.4796H5.94983L8.98876 19.609C9.11567 19.3644 9.35639 19.2282 9.60607 19.2239C9.60923 19.2236 9.61239 19.223 9.61559 19.2223C9.62009 19.2213 9.62469 19.2204 9.62952 19.2204H27.9873C27.7279 18.7533 27.3982 18.1592 26.9996 17.439L26.8973 17.2544C26.4022 16.3611 25.8493 15.3635 25.5443 14.8168L13.2078 14.8339H13.2071C13.2057 14.8339 13.2044 14.8332 13.203 14.8332L12.8878 14.8339H12.8871H12.8864C12.8861 14.8339 12.8859 14.8337 12.8857 14.8335C12.8855 14.8334 12.8854 14.8332 12.885 14.8332C12.8292 14.8332 12.776 14.8253 12.7243 14.8125C12.715 14.8103 12.7063 14.8073 12.6976 14.8044L12.6976 14.8044L12.6975 14.8044L12.6975 14.8044C12.692 14.8025 12.6865 14.8006 12.6809 14.799C12.6402 14.7861 12.6015 14.7697 12.565 14.7505C12.5611 14.7486 12.5573 14.7473 12.5535 14.746C12.5485 14.7443 12.5435 14.7426 12.5388 14.7398C12.5346 14.7373 12.531 14.7344 12.5274 14.7316L12.5274 14.7316C12.5238 14.7287 12.5202 14.7259 12.516 14.7234C12.4946 14.7098 12.4746 14.6948 12.4546 14.6784L12.4516 14.676C12.4347 14.6626 12.4185 14.6497 12.4029 14.6349C12.3895 14.6217 12.3771 14.6075 12.3648 14.5935L12.356 14.5836C12.3401 14.565 12.325 14.5472 12.3119 14.528C12.3005 14.5121 12.2911 14.4959 12.2815 14.4795L12.2753 14.4688C12.2636 14.4481 12.2525 14.4281 12.2429 14.4067C12.2341 14.3872 12.227 14.3665 12.2201 14.3462L12.2201 14.3462L12.2181 14.3404L12.2161 14.3346C12.2092 14.3138 12.2024 14.2935 12.1974 14.2719C12.1918 14.2498 12.1884 14.2277 12.1856 14.2056C12.1815 14.1792 12.1787 14.1529 12.1781 14.1258L12.1777 14.122L12.1768 14.1147C12.176 14.1094 12.1753 14.1042 12.1753 14.0987C12.1753 14.0939 12.1757 14.0894 12.1762 14.0849C12.1765 14.0824 12.1768 14.0799 12.1771 14.0775L12.1779 14.071C12.1783 14.0681 12.1786 14.0652 12.1787 14.0623C12.1794 14.0352 12.1822 14.0081 12.1863 13.9803C12.1898 13.9582 12.1946 13.9361 12.2001 13.914C12.2063 13.8904 12.2132 13.8676 12.2208 13.8441C12.2298 13.8198 12.2394 13.7963 12.2505 13.7735C12.2527 13.7685 12.2546 13.7636 12.2565 13.7588L12.2607 13.7481C12.2622 13.7446 12.2638 13.7412 12.2656 13.7378L19.7106 0.000713134L14.9107 0ZM30.5524 8.63195L32.9644 13.0477H38.0449C37.6717 12.4151 37.0192 11.3069 36.4737 10.3798L36.0256 9.61858L35.5639 8.83448C35.4956 8.71895 35.3501 8.63338 35.2253 8.63338L30.5524 8.63195ZM24.0128 40C24.0604 40 24.2073 40 24.3204 39.7911L37.9874 14.5197H32.9717L29.9334 20.3082C29.8555 20.4559 29.7334 20.56 29.5955 20.6234C29.5803 20.6306 29.5651 20.637 29.5493 20.6434C29.5196 20.6548 29.4899 20.6648 29.4596 20.6719C29.4203 20.6819 29.3789 20.6862 29.3375 20.6891C29.3329 20.6894 29.3284 20.6903 29.3239 20.6911C29.3184 20.6922 29.3129 20.6933 29.3072 20.6933L29.3052 20.693C29.3044 20.6928 29.3035 20.6926 29.3023 20.6926C29.3003 20.6926 29.2989 20.6933 29.2975 20.6933H10.866L13.3821 25.1832L26.0365 25.1661H26.0372C26.2896 25.1661 26.5227 25.3045 26.651 25.5298C26.7793 25.7552 26.7821 26.0333 26.6586 26.2615L19.2337 39.9986C19.9276 39.9986 21.0932 39.9993 22.1037 40H24.0128ZM17.9956 39.2685L17.3962 38.2516C16.6285 36.9458 15.645 35.2742 15.5339 35.0909C15.4967 35.0289 15.4795 34.8777 15.5574 34.7337C15.7353 34.4042 19.0957 28.1664 19.9144 26.646L24.8211 26.6396L17.9956 39.2685ZM7.19097 26.2061L9.62984 30.6718C10.1527 29.6627 11.3486 27.3436 12.1149 25.8567L9.64916 21.4573L7.19097 26.2061ZM6.35521 31.3671C5.45703 31.3671 4.56246 31.3667 4.06769 31.3665L3.6977 31.3664H3.69701C3.57562 31.3664 3.42871 31.2787 3.3618 31.166L2.56793 29.8175C2.00235 28.8562 1.2809 27.6303 0.880859 26.9521H5.96138L8.37266 31.3678L7.53603 31.3675C7.16609 31.3673 6.76086 31.3671 6.35521 31.3671ZM20.9375 0.747871L21.3831 1.50379C22.1659 2.8345 23.2715 4.71289 23.3888 4.90829C23.426 4.97034 23.4433 5.12081 23.3646 5.26557L19.0076 13.3532L14.103 13.3596L20.9375 0.747871ZM31.7332 13.7906L29.293 9.32285C28.8447 10.1658 27.9211 11.9088 27.2733 13.1311C27.0728 13.5095 26.8988 13.838 26.7734 14.0745C27.0541 14.5765 27.5521 15.4743 28.2349 16.7073C28.5805 17.3313 28.9488 17.996 29.2454 18.5294L31.7332 13.7906Z" fill="white" />\n</svg>'}})]}),p.length&&!g?Object(a.jsx)(y,{identities:p,sendIdentity:w,setCreation:function(e){return O(e)},deleteIdentity:v,referrer:i}):Object(a.jsx)(N,{createIndentity:t,identities:p})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(81),n(82);c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[83,1,2]]]);
//# sourceMappingURL=main.e9d473b2.chunk.js.map