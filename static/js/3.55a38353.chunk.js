(this.webpackJsonplsmall=this.webpackJsonplsmall||[]).push([[3],{122:function(e,t,c){},124:function(e,t,c){"use strict";c.r(t);var a=c(24),n=c(9),i=c(0),s=c.n(i),r=c(11),l=c(3),j=c(4),o=c(57),d=c.n(o),b=c(28),u=c(31),m=c(48),O=c(5),h=c.n(O),f=c(6),p=["bsPrefix","size","toggle","vertical","className","as"],x=s.a.forwardRef((function(e,t){var c=e.bsPrefix,a=e.size,n=e.toggle,i=e.vertical,r=e.className,o=e.as,d=void 0===o?"div":o,b=Object(j.a)(e,p),u=Object(f.a)(c,"btn-group"),m=u;return i&&(m=u+"-vertical"),s.a.createElement(d,Object(l.a)({},b,{ref:t,className:h()(r,m,a&&u+"-"+a,n&&u+"-toggle")}))}));x.displayName="ButtonGroup",x.defaultProps={vertical:!1,toggle:!1,role:"group"};var v=x,g=c(109),N=["children","name","className","checked","type","onChange","value","disabled","inputRef"],y=function(){},k=s.a.forwardRef((function(e,t){var c=e.children,a=e.name,n=e.className,r=e.checked,o=e.type,d=e.onChange,b=e.value,u=e.disabled,m=e.inputRef,O=Object(j.a)(e,N),f=Object(i.useState)(!1),p=f[0],x=f[1],v=Object(i.useCallback)((function(e){"INPUT"===e.target.tagName&&x(!0)}),[]),k=Object(i.useCallback)((function(e){"INPUT"===e.target.tagName&&x(!1)}),[]);return s.a.createElement(g.a,Object(l.a)({},O,{ref:t,className:h()(n,p&&"focus",u&&"disabled"),type:void 0,active:!!r,as:"label"}),s.a.createElement("input",{name:a,type:o,value:b,ref:m,autoComplete:"off",checked:!!r,disabled:!!u,onFocus:v,onBlur:k,onChange:d||y}),c)}));k.displayName="ToggleButton";var C=k,w=["children","type","name","value","onChange"],R=s.a.forwardRef((function(e,t){var c=Object(b.a)(e,{value:"onChange"}),a=c.children,n=c.type,i=c.name,r=c.value,o=c.onChange,O=Object(j.a)(c,w),h=function(){return null==r?[]:[].concat(r)};return"radio"!==n||i||d()(!1),s.a.createElement(v,Object(l.a)({},O,{ref:t,toggle:!0}),Object(m.b)(a,(function(e){var t=h(),c=e.props,a=c.value,r=c.onChange;return s.a.cloneElement(e,{type:n,name:e.name||i,checked:-1!==t.indexOf(a),onChange:Object(u.a)(r,(function(e){return function(e,t){if(o){var c=h(),a=-1!==c.indexOf(e);"radio"!==n?o(a?c.filter((function(t){return t!==e})):[].concat(c,[e]),t):!a&&o&&o(e,t)}}(a,e)}))})})))}));R.defaultProps={type:"radio",vertical:!1},R.Button=C;var S=R,I=c(119),T=(c(122),c(17)),P=c(1);function E(e){var t=[],c=e.stateReview.filter((function(t){return t.id===e.id}));return e.setMatchedReviewCnt(c.length),t=0===c.length?Object(P.jsx)("div",{children:Object(P.jsx)("p",{className:"text-center mt-4",children:"\ud6c4\uae30\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})}):c.map((function(e){return Object(P.jsxs)("div",{className:"row",style:{cursor:"pointer"},children:[Object(P.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(P.jsx)("p",{className:"text-left mt-4 mb-4",children:e.score}),Object(P.jsx)("p",{className:"text-left mt-4 mb-4",children:e.content}),Object(P.jsx)("p",{className:"text-left mt-4",children:e.uname}),Object(P.jsx)("p",{className:"text-left mt-4",children:e.date.toLocaleString()}),Object(P.jsx)("hr",{})]}),Object(P.jsx)("div",{className:"col-md-6 mt-4",children:Object(P.jsx)("img",{src:e.img,style:{maxWidth:"25%"}})})]},e.seq)})),0===e.selectedTab?Object(P.jsx)("div",{className:"mt-3",children:Object(P.jsx)("img",{src:"https://jungyooree.github.io/item"+(parseInt(e.id)+1)+"_desc.jpg",style:{maxWidth:"100%"}})}):1===e.selectedTab?Object(P.jsx)("div",{children:t}):2===e.selectedTab?Object(P.jsx)("div",{className:"mt-3",children:Object(P.jsxs)("p",{class:"text-left",children:["\ubc30\uc1a1\ube44:\uc77c\ubc18 \uc0c1\ud488\uc740 1,000\uc6d0 \uc774\uc0c1 \uacb0\uc81c \uc2dc \ubc30\uc1a1\ube44\uac00 \ubb34\ub8cc\uc785\ub2c8\ub2e4.",Object(P.jsx)("br",{}),"1,000\uc6d0 \ubbf8\ub9cc \uacb0\uc81c \uc2dc \ubc30\uc1a1\ube44 2,500\uc6d0\uc740 \uace0\uac1d\ub2d8 \ubd80\ub2f4\uc785\ub2c8\ub2e4.",Object(P.jsx)("br",{}),"\uc81c\uc8fc\ub3c4/\ub3c4\uc11c\uc0b0\uac04 \uc9c0\uc5ed:\uc81c\uc8fc\ub3c4\ub294 \uae30\ubcf8 \ubc30\uc1a1\ube44 + 2,500\uc6d0",Object(P.jsx)("br",{}),"\ub3c4\uc11c\uc0b0\uac04 \uc9c0\uc5ed\uc740 \uae30\ubcf8 \ubc30\uc1a1\ube44 +5,000\uc6d0\uc758 \ucd94\uac00 \ubc30\uc1a1\ube44(\ud56d\uacf5/\ub3c4\uc158\ub8cc) \ubd80\ub2f4",Object(P.jsx)("br",{}),"\uc77c\ubd80 \ub3c4\uc11c\uc0b0\uac04 \uc9c0\uc5ed\uc740 \ubc30\uc1a1\uc774 \ubd88\uac00\ud558\uac70\ub098 \ubc30\uc1a1\uae30\uac04\uc774 \uae38\uc5b4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",Object(P.jsx)("br",{}),"\uacb0\uc81c \uc644\ub8cc \ud6c4 \uc601\uc5c5\uc77c \uae30\uc900 2~5\uc77c \uc774\ub0b4\uc5d0 \ubc30\uc1a1\uc774 \ub429\ub2c8\ub2e4.(\uae08\uc694\uc77c \uc624\ud6c4, \uc8fc\ub9d0/\uacf5\ud734\uc77c \uacb0\uc81c \uac74\uc740 3~6\uc77c \uc774\ub0b4 \ubc30\uc1a1)",Object(P.jsx)("br",{}),"\ube0c\ub79c\ub4dc \ubc0f \ud488\uc885\uc774 \ub2e4\ub978 \uacbd\uc6b0 \uac1c\ubcc4(\ubcc4\ub3c4 \ud3ec\uc7a5)\ub85c \ubc30\uc1a1\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",Object(P.jsx)("br",{})]})}):null}t.default=Object(T.b)((function(e){return{state:e.reducerCart,stateReview:e.reducerReview}}))((function(e){var t=Object(r.f)(),c=Object(r.g)().id,s=Object(i.useState)(95),l=Object(n.a)(s,2),j=l[0],o=l[1],d=e.items.find((function(e){return parseInt(e.id)===parseInt(c)})),b=Object(i.useState)(!0),u=Object(n.a)(b,2),m=u[0],O=u[1],h=Object(i.useState)(0),f=Object(n.a)(h,2),p=f[0],x=f[1],v=Object(i.useState)(0),g=Object(n.a)(v,2),N=g[0],y=g[1];Object(i.useEffect)((function(){var e=setTimeout((function(){O(!1)}),2e3);return w(),function(){clearTimeout(e)}}),[]);var k=function(e){x(e)},w=function(){var t=localStorage.getItem("Recent"),c=[];t?(c=JSON.parse(t)).length>=3&&c.pop():c=[],c.unshift(d.id);var n=new Set(c);console.log("mySet",n),localStorage.setItem("Recent",JSON.stringify(Object(a.a)(n))),e.setRecentIds(Object(a.a)(n))};return Object(P.jsxs)("div",{className:"container",children:[Object(P.jsxs)("div",{className:"row mt-3",children:[Object(P.jsx)("div",{className:"col-md-6",children:Object(P.jsx)("img",{src:"https://jungyooree.github.io/item"+(parseInt(d.id)+1)+".jpg",width:"100%"})}),Object(P.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(P.jsx)("h4",{className:"pt-5",children:d.title}),Object(P.jsx)("p",{children:d.content}),Object(P.jsxs)("p",{children:[d.price.toLocaleString(),"\uc6d0"]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("label",{htmlFor:"",children:"\uc0ac\uc774\uc988:"})," ",Object(P.jsx)(S,{type:"radio",name:"options",defaultValue:d.size[0],children:d.size.map((function(e,t){return Object(P.jsxs)(C,{id:"tbg-radio-".concat(t),value:e,onChange:function(){return o(e)},children:[e," "]})}))})]}),Object(P.jsx)("br",{}),Object(P.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){e.dispatch({type:"\uc7a5\ubc14\uad6c\ub2c8\ub2f4\uae30",payload:{id:d.id,name:d.title,quan:1,size:j,price:d.price,quanPrice:d.price}}),t.push("/cart")},children:"\uc7a5\ubc14\uad6c\ub2c8 \ub2f4\uae30"})," ",Object(P.jsx)("button",{className:"mr-3 btn btn-primary",onClick:function(){t.goBack()},children:"\ub4a4\ub85c\uac00\uae30"}),!0===m?Object(P.jsx)("div",{className:"alert-notice"}):null]})]}),Object(P.jsx)("div",{className:"row mt-4",children:Object(P.jsx)("div",{className:"col-md-6",children:Object(P.jsxs)(I.a,{fill:!0,variant:"tabs",defaultActiveKey:"link-0",children:[Object(P.jsx)(I.a.Item,{children:Object(P.jsx)(I.a.Link,{eventKey:"link-0",onClick:function(){k(0)},children:"\uc0c1\ud488\uc815\ubcf4"})}),Object(P.jsx)(I.a.Item,{children:Object(P.jsxs)(I.a.Link,{eventKey:"link-2",onClick:function(){k(1)},children:["\uad6c\ub9e4\ud6c4\uae30 (",N,")"]})}),Object(P.jsx)(I.a.Item,{children:Object(P.jsx)(I.a.Link,{eventKey:"link-1",onClick:function(){k(2)},children:"\ubc30\uc1a1\uc548\ub0b4"})})]})})}),Object(P.jsx)(E,{selectedTab:p,setMatchedReviewCnt:y,stateReview:e.stateReview,id:c})]})}))}}]);
//# sourceMappingURL=3.55a38353.chunk.js.map