(this["webpackJsonplisted-employees"]=this["webpackJsonplisted-employees"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n(3),i=n.n(c);var o=function(){return Object(r.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Table Of Employees"})})})},a=n(4),l=n(5),j=n(7),d=n(6);var b=function(e){return Object(r.jsx)("div",{className:"col-12",children:Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"First name"}),Object(r.jsx)("th",{scope:"col",children:"Last name"}),Object(r.jsx)("th",{scope:"col",children:"Gender"}),Object(r.jsx)("th",{scope:"col",children:"City"})]})}),Object(r.jsx)("tbody",{children:e.person.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name.first},e.id),Object(r.jsx)("td",{children:e.name.last}),Object(r.jsx)("td",{children:e.gender}),Object(r.jsx)("td",{children:e.nat})]})}))})]})})};var u=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"row",id:"rowdiv",children:[Object(r.jsxs)("div",{className:"col-6-lg",id:"filter",children:["Filter By:",Object(r.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return e.filterGender("female")},children:"Female"})]}),Object(r.jsxs)("div",{className:"col-6-lg",id:"sort",children:["Sort By:",Object(r.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return e.SortNat()},children:"Nationality"})]})]})})},h=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).userNames=[],e.filterGender=function(t){var n=t.toLowerCase(),r=e.state.person.filter((function(e){return-1!==e.gender.toLowerCase().indexOf(n)}));e.setState({person:r},(function(){return console.log(e.state.person)}))},e.SortNat=function(t){var n=e.state.person.sort((function(e,t){return e.nat>t.nat?1:-1}));e.setState({person:n},(function(){return console.log(e.state.person)}))},e.state={person:[]},e}return Object(l.a)(n,[{key:"AllUsers",value:function(){var e=this;fetch("https://randomuser.me/api/?results=50&inc=name,gender,nat&noinfo&api_key=Z18T-11E7-HI7R-DKJ4").then((function(e){return e.json()})).then((function(t){e.userNames=t.results,e.setState({person:t.results})}))}},{key:"componentDidMount",value:function(){this.AllUsers()}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(u,{SortNat:this.SortNat,filterGender:this.filterGender}),Object(r.jsx)(b,{person:this.state.person})]})}}]),n}(s.Component);var O=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"footer-copyright text-center py-3",children:"\xa9 2020 Copyright: Thalia Romany"}),Object(r.jsx)("footer",{id:"footer"})]})};var f=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsx)(h,{}),Object(r.jsx)(O,{})]})};i.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9149c4c0.chunk.js.map