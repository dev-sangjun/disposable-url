(this["webpackJsonpdisposable-url"]=this["webpackJsonpdisposable-url"]||[]).push([[0],{34:function(n,e,t){},74:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),a=t(21),c=t.n(a),o=(t(34),t(4)),s=t(5),l={primary:"#F2AA4C",primaryBright:"#F5BB70",background:"#101820",gray:"#979797",grayBright:"#ACACAC"};function d(){var n=Object(o.a)(["\n  nav {\n    height: 6rem;\n    margin: auto;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    .nav-items {\n      display: flex;\n      list-style: none;\n      .nav-item {\n        margin-right: 2rem;\n        color: white;\n        font-weight: bold;\n        &:last-child {\n          margin-right: 0;\n        }\n      }\n    }\n  }\n"]);return d=function(){return n},n}function u(){var n=Object(o.a)(["\n  color: ",";\n"]);return u=function(){return n},n}var b=s.a.h1(u(),l.primary),m=Object(s.a)((function(n){var e=n.className;return Object(r.jsx)("div",{className:e,children:Object(r.jsxs)("nav",{children:[Object(r.jsx)(b,{children:"DISP.URL"}),Object(r.jsxs)("ul",{className:"nav-items",children:[Object(r.jsx)("li",{className:"nav-item",children:"Pricing"}),Object(r.jsx)("li",{className:"nav-item",children:"About"})]})]})})}))(d()),h=t(8),j=t(6),p=t(28),f=t(26),g=t.n(f),O=t(27),x=t.n(O);function v(){var n=Object(o.a)(["\n  .dropzone {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 15rem;\n    margin: auto;\n    margin-bottom: 1rem;\n    border: 1px solid ",";\n    border-radius: 0.25rem;\n    outline: none;\n    .dropzone-file-container {\n      width: 100%;\n      height: 100%;\n      padding: 1rem;\n      color: white;\n      overflow-y: scroll;\n      .filename-list {\n        width: 100%;\n        padding: 1rem;\n        .filename-item {\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          margin-bottom: 0.5rem;\n          .filename {\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n          }\n          .file-size {\n            margin-left: 1rem;\n          }\n        }\n      }\n    }\n    .drop-message {\n      font-size: 1.5em;\n      color: ",";\n    }\n    &:hover {\n      cursor: pointer;\n    }\n  }\n  .checkbox-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 1rem;\n    color: white;\n    label {\n      margin-right: 1rem;\n    }\n  }\n  .url-container {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 3rem;\n    margin-top: 1rem;\n    border-radius: 0.25rem;\n    background-color: white;\n    overflow: hidden;\n    .url-label {\n      position: absolute;\n      left: 1rem;\n      font-weight: bold;\n    }\n    input {\n      width: 100%;\n      height: 100%;\n      padding-left: 4rem;\n      padding-right: 1rem;\n      border: none;\n      font-size: 1em;\n    }\n  }\n"]);return v=function(){return n},n}function y(){var n=Object(o.a)(["\n  height: 100%;\n  padding: 1rem;\n  background-color: ",";\n  color: white;\n  border: none;\n  font-weight: bold;\n  &:hover {\n    background-color: ",";\n    cursor: ",";\n  }\n"]);return y=function(){return n},n}function w(){var n=Object(o.a)(["\n  width: 100%;\n  height: 3rem;\n  border: none;\n  border-radius: 0.25rem;\n  background-color: ",";\n  color: white;\n  font-size: 1.2em;\n  font-weight: bold;\n  &:hover {\n    background-color: ",";\n    cursor: ",";\n  }\n"]);return w=function(){return n},n}var N=s.a.button(w(),l.primary,l.primaryBright,(function(n){return n.disabled?"not-allowed":"pointer"})),k=s.a.button(y(),l.gray,l.grayBright,(function(n){return n.disabled?"not-allowed":"pointer"})),F=Object(s.a)((function(n){var e=n.className,t=Object(i.useState)(),a=Object(j.a)(t,2),c=a[0],o=a[1],s=Object(i.useState)(""),l=Object(j.a)(s,2),d=l[0],u=l[1],b=Object(i.useState)(!1),m=Object(j.a)(b,2),f=m[0],O=m[1],v=Object(i.useState)(!1),y=Object(j.a)(v,2),w=y[0],F=y[1],C=Object(i.useState)(!0),z=Object(j.a)(C,2),S=z[0],A=z[1],B=Object(i.useRef)(null),R=function(){c&&(O(!0),F(!1),function(n,e){var t=new FormData;return e.forEach((function(e){t.append("files",e),t.append("numLimit",String(n))})),x.a.post("http://localhost:5000/upload",t)}(S?1:0,c).then((function(n){var e=n.data.uuid;u(e),O(!1),o([])})))},L=function(){var n=B.current;n&&(n.select(),n.setSelectionRange(0,99999),document.execCommand("copy"),F(!0))},P=function(n){var e=n.target.checked;A(e)};return Object(r.jsx)(p.a,{onDrop:function(n){o(n)},children:function(n){var t=n.getRootProps,i=n.getInputProps;return Object(r.jsxs)("section",{className:e,children:[Object(r.jsxs)("div",Object(h.a)(Object(h.a)({className:"dropzone"},t()),{},{children:[Object(r.jsx)("input",Object(h.a)({},i())),c&&c.length>0?c&&Object(r.jsxs)("div",{className:"dropzone-file-container",children:[Object(r.jsxs)("h3",{children:["Added Files (",c.length," files):"]}),Object(r.jsx)("ul",{className:"filename-list",children:c.map((function(n,e){return Object(r.jsxs)("li",{className:"filename-item",children:[Object(r.jsx)("span",{className:"filename",children:n.name}),Object(r.jsxs)("span",{className:"file-size",children:[Number(n.size/1e6).toFixed(1),"MB"]})]},e)}))})]}):Object(r.jsx)("p",{className:"drop-message",children:"Drop your files here."})]})),Object(r.jsx)(N,{onClick:R,disabled:!c||c.length<=0,children:f?Object(r.jsx)(g.a,{type:"Circles",color:"#FFFFFF",height:32,width:32,style:{position:"relative",top:"3px"}}):"Generate URL"}),Object(r.jsxs)("div",{className:"checkbox-container",children:[Object(r.jsx)("label",{className:"checkbox-label",children:"Enable Preview Mode:"}),Object(r.jsx)("input",{id:"checkbox",type:"checkbox",onChange:P,checked:S})]}),Object(r.jsxs)("div",{className:"url-container",children:[Object(r.jsx)("label",{className:"url-label",htmlFor:"url",children:"URL:"}),Object(r.jsx)("input",{id:"url",type:"text",value:""===d?"":"https://disposable-url.herokuapp.com/upload/"+d,readOnly:!0,ref:B}),Object(r.jsx)(k,{disabled:""===d,onClick:L,children:w?"Copied!":"Copy"})]})]})}})}))(v(),l.primary,l.gray);function C(){var n=Object(o.a)(["\n  margin: auto;\n  margin-top: 6rem;\n  "," {\n    margin-bottom: 4rem;\n  }\n  .drop-container {\n    width: 70%;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(o.a)(["\n  color: white;\n  text-align: center;\n  .accent {\n    color: ",";\n  }\n"]);return z=function(){return n},n}var S=s.a.h2(z(),l.primary),A=Object(s.a)((function(n){var e=n.className;return Object(r.jsxs)("section",{className:e,children:[Object(r.jsxs)(S,{children:["Share your files with a URL, but with more",Object(r.jsx)("span",{className:"accent",children:" security."})]}),Object(r.jsx)("div",{className:"drop-container",children:Object(r.jsx)(F,{})})]})}))(C(),S);var B=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(m,{}),Object(r.jsx)(A,{})]})};c.a.render(Object(r.jsx)(B,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.1d073c14.chunk.js.map