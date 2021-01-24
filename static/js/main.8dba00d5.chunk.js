(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{41:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),r=c.n(n),a=c(16),o=c.n(a),i=c(6),l=c(7),j=c(17),d=c.n(j),u=function(){return Object(s.jsxs)("div",{className:"jumbotron",children:[Object(s.jsx)("h1",{className:"display-4 text-center",children:"Welcome To Our User Directory!"}),Object(s.jsx)("hr",{className:"my-4"})]})},b=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{for:"exampleDataList",class:"form-label",children:Object(s.jsx)("b",{children:"Search Users by Name, Email, or Location."})}),Object(s.jsx)("input",{class:"form-control",type:"text",placeholder:"Type to search...",onChange:e.onChange})]})},h=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),o=Object(l.a)(a,2),j=o[0],h=o[1];Object(n.useEffect)((function(){d.a.get("https://randomuser.me/api/?results=20").then((function(e){console.log(e.data.results),r(e.data.results),h(e.data.results)})).catch((function(e){console.log(e)}))}),[]);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)(u,{}),Object(s.jsx)(b,{onChange:function(e){var t=e.target.value;if(""!==t){var s=Object(i.a)(c).filter((function(e){return e.name.first.toLowerCase().includes(t.toLowerCase())||e.name.last.toLowerCase().includes(t.toLowerCase())||e.location.country.toLowerCase().includes(t.toLowerCase())||e.email.includes(t.toLowerCase())}));h(s)}else h(c)}})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("table",{className:"table sortable table-striped",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Image"}),Object(s.jsx)("th",{scope:"col",children:"First"}),Object(s.jsx)("th",{scope:"col",onClick:function(){var e=Object(i.a)(c).sort((function(e,t){return e.users.name.last<t.users.name.last?"ascending"===c.direction?1:-1:e.users.name.last>t.users.name.last?"descending"===c.direction?-1:1:0}));r(e),console.log(e)},id:"nameSort",children:"Last"}),Object(s.jsx)("th",{scope:"col",children:"Email"}),Object(s.jsx)("th",{scope:"col",children:"Location"})]})}),Object(s.jsxs)("tbody",{children:[j.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:Object(s.jsx)("img",{alt:"User Pic",src:e.picture.medium})}),Object(s.jsx)("td",{children:e.name.first}),Object(s.jsx)("td",{children:e.name.last}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:e.location.country})]})})),";"]})]})})]})};var O=function(){return Object(s.jsx)(h,{})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),m()}},[[41,1,2]]]);
//# sourceMappingURL=main.8dba00d5.chunk.js.map