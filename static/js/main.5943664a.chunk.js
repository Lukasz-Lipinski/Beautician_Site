(this.webpackJsonpkasun_site=this.webpackJsonpkasun_site||[]).push([[0],[,,,function(e,a,n){"use strict";var t=n(2),i=n.n(t).a.createContext();a.a=i},,,function(e,a,n){"use strict";n.d(a,"b",(function(){return r})),n.d(a,"c",(function(){return p})),n.d(a,"d",(function(){return h})),n.d(a,"g",(function(){return g})),n.d(a,"e",(function(){return w})),n.d(a,"f",(function(){return x})),n.d(a,"a",(function(){return f}));n(33),n(52);var t=n(21),i=n(27),c=n(22),s=n(1);function r(e){var a=e.className;return Object(s.jsxs)("footer",{className:"".concat(a),children:[Object(s.jsxs)("div",{className:"".concat(a,"__information"),children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:Object(s.jsx)(t.b,{})}),Object(s.jsx)("span",{children:"TSU"}),Object(s.jsx)("span",{children:"ul. Wroc\u0142awska 1234/231"}),Object(s.jsx)("span",{children:"53-100, Wroc\u0142aw"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:Object(s.jsx)(t.a,{})}),Object(s.jsx)("span",{children:"Pon-Pt: 8:00-21:00"}),Object(s.jsx)("span",{children:"Sb: 8:00-15:00"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:Object(s.jsx)(i.a,{})}),Object(s.jsx)("span",{children:"Fryzjer:"}),Object(s.jsx)("span",{children:"+48 222 333 111"}),Object(s.jsx)("span",{children:"Kosmetologia:"}),Object(s.jsx)("span",{children:"+48 11 222 444"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:Object(s.jsx)(c.c,{})}),Object(s.jsx)("span",{children:"fryzjer@tsu.example.com"}),Object(s.jsx)("span",{children:"kosmetologia@tsu.example.com"})]})]}),Object(s.jsxs)("div",{className:"".concat(a,"__icons"),children:[Object(s.jsx)("div",{children:Object(s.jsx)("span",{children:Object(s.jsx)(c.a,{id:"logoFacebook"})})}),Object(s.jsx)("div",{children:Object(s.jsx)("span",{children:Object(s.jsx)(c.b,{id:"logoInstagram"})})})]})]})}var o=n(18),l=n(2),u=n(17),d=n(3);function j(){var e=Object(l.useMemo)((function(){return{color:"#8cd425"}}),[]),a=Object(l.useContext)(d.a),n=a.linksName,t=a.classess;return Object(s.jsx)("div",{className:"".concat(t.menuNav,"__links"),children:n.map((function(a,n){return"Reservation"===a.componentName?Object(s.jsx)(u.b,{reservation:!0,activeStyle:e,to:"/".concat(a.src),children:a.link},"listName-link-".concat(n)):Object(s.jsx)(u.b,{activeStyle:e,to:"/".concat(a.src),children:a.link},"listName-link-".concat(n))}))})}var m=n(35),b=function(){var e=Object(l.useState)(!1),a=Object(o.a)(e,2),n=a[0],t=a[1],i=Object(l.useContext)(d.a).classess;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(m.a,{onClick:function(){t(!n)},className:"".concat(i.menuNav,"__toggler")}),n?Object(s.jsx)(j,{}):null]})};function p(){var e=function(){var e=Object(l.useState)(window.screen.width),a=Object(o.a)(e,2),n=a[0],t=a[1];return window.addEventListener("resize",(function(){t(window.innerWidth)})),[n]}(),a=Object(o.a)(e,1)[0],n=Object(l.useContext)(d.a).classess;return Object(s.jsxs)("div",{className:"".concat(n.menuNav),id:"top",children:[Object(s.jsx)("div",{className:"".concat(n.menuNav,"__logo"),children:Object(s.jsx)("img",{alt:"logo"})}),a>=770?Object(s.jsx)(j,{}):Object(s.jsx)(b,{})]})}var y=n(16),z=n(20);n(53);var h=Object(y.b)((function(e){return{ImgNumber:e.ImgNumber}}),(function(e){return{hideModalImg:function(){return e(Object(z.b)())}}}))((function(e){var a=e.hideModalImg,n=e.ImgNumber,t=Object(l.useContext)(d.a).classess.gallery;return Object(s.jsxs)("div",{className:t.modalImage,children:[Object(s.jsx)("a",{onClick:a,children:"\xd7"}),Object(s.jsx)("img",{className:n,alt:n})]})}));n(26),n(54);function g(){var e=Object(l.useContext)(d.a).classess;return Object(s.jsx)("div",{className:e.spinner,children:"Loading"})}var O=n(28),w=(n(55),function(){var e=Object(l.useContext)(d.a).classess.snackbar;return Object(s.jsx)("div",{className:e,children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(O.a,{})})})});function x(e){var a=Object(l.useContext)(d.a).classess.specialoffers,n=e.index,t=e.firstDescription,i=e.secondDescription,c=e.firstPrice,r=e.secondPrice;return console.log(i),Object(s.jsxs)("div",{className:"".concat(a,"--content--specialOffersList"),children:[n%2?Object(s.jsx)("img",{className:"".concat(a,"--content--specialOffersList__img").concat(n),alt:"imageRight--".concat(n)}):Object(s.jsxs)("p",{children:[t," ","cena: ".concat(c)]}),n%2?Object(s.jsxs)("p",{children:[t," ","cena: ".concat(c)]}):Object(s.jsx)("img",{className:"".concat(a,"--content--specialOffersList__img").concat(n),alt:"imageMiddle--".concat(n)}),n%2?Object(s.jsx)("img",{className:"".concat(a,"--content--specialOffersList__img").concat(n+5),alt:"imageLeft--".concat(n+5)}):Object(s.jsxs)("p",{children:[i," ","cena: ".concat(r)]})]})}var f=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"TSU"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:Object(s.jsx)(t.b,{})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"ul. Wroc\u0142awska 1234/231"}),Object(s.jsx)("p",{children:"53-100, Wroc\u0142aw"})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:Object(s.jsx)(t.a,{})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Pon-Pt: 8:00-21:00"}),Object(s.jsx)("p",{children:"Sb: 8:00-15:00"})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:Object(s.jsx)(i.a,{})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Fryzjer:"}),Object(s.jsx)("p",{children:"+48 222 333 111"}),Object(s.jsx)("p",{children:"Kosmetologia:"}),Object(s.jsx)("p",{children:"+48 11 222 444"})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:Object(s.jsx)(c.c,{})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"fryzjer@tsu.example.com"}),Object(s.jsx)("p",{children:"kosmetologia@tsu.example.com"})]})]})]})}},,,,,,,,,function(e,a,n){"use strict";n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return x})),n.d(a,"b",(function(){return S})),n.d(a,"d",(function(){return R})),n.d(a,"e",(function(){return q})),n.d(a,"f",(function(){return E}));var t=n(2),i=n.n(t),c=n(26),s=n(3),r=(n(48),n(1));function o(){var e=Object(t.useContext)(s.a).classess;return Object(r.jsx)("div",{className:e.container,children:Object(r.jsx)(c.a,{})})}var l=n(32),u=n(11),d=n(12),j=n(14),m=n(13),b={valueNameAndSurname:"",valueEmail:"",valueMsg:"",valueDate:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=new Date,n=String(a.getFullYear()),t=String(a.getMonth()+1),i=String(a.getDate()),c="".concat(n,"-").concat(t,"-").concat(i);return!(e.valueDate<c)},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return!!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.valueEmail)},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return!!e.valueNameAndSurname},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return!!e.valueMsg};var g=function(e){return function(a){Object(j.a)(t,a);var n=Object(m.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=n.call.apply(n,[this].concat(i))).state={valueNameAndSurname:"",valueEmail:"",valueMsg:"",valueDate:"",emailIsRequired:!0,nameAndSurnameIsRequired:!0,msgIsRequired:!0,dateIsRequired:!0},e.onChangeNameAndSurname=function(a){e.setState({valueNameAndSurname:a.target.value})},e.onChangeEmail=function(a){e.setState({valueEmail:a.target.value})},e.onChangeMsg=function(a){e.setState({valueMsg:a.target.value})},e.onChangeDate=function(a){e.setState({valueDate:a.target.value})},e.validation=function(){p(e.state)?e.setState({dateIsRequired:!0}):e.setState({dateIsRequired:!1}),y(e.state)?e.setState({emailIsRequired:!0}):e.setState({emailIsRequired:!1}),z(e.state)?e.setState({nameAndSurnameIsRequired:!0}):e.setState({nameAndSurnameIsRequired:!1}),h(e.state)?e.setState({msgIsRequired:!0}):e.setState({msgIsRequired:!1})},e.onSubmit=function(a){a.preventDefault(),e.validation(),fetch("https://".concat("enni408xmdazjev.m.pipedream.net"),{method:"POST",headers:{"Content-Type":"application/json"},body:{}}).then((function(e){e.ok||console.log("success")}))},e}return Object(d.a)(t,[{key:"render",value:function(){var a=this.state,n=a.valueNameAndSurname,t=a.valueEmail,i=a.valueMsg,c=a.valueDate,s=a.dateIsRequired,o=a.emailIsRequired,u=a.nameAndSurnameIsRequired,d=a.msgIsRequired;return Object(r.jsx)(e,Object(l.a)(Object(l.a)({},this.props),{},{onChangeNameAndSurname:this.onChangeNameAndSurname,valueNameAndSurname:n,nameAndSurnameIsRequired:u,onChangeEmail:this.onChangeEmail,valueEmail:t,emailIsRequired:o,onChangeMsg:this.onChangeMsg,valueMsg:i,msgIsRequired:d,onChangeDate:this.onChangeDate,valueDate:c,dateIsRequired:s,onSubmit:this.onSubmit}))}}]),t}(t.Component)};var O=g((function(e){var a=e.className,n=e.onSubmit,t=e.valueNameAndSurname,i=e.onChangeNameAndSurname,c=e.valueEmail,s=e.onChangeEmail,o=e.valueMsg,l=e.onChangeMsg,u=e.onFocusMsg,d=e.onClickSend,j=e.emailIsRequired,m=e.nameAndSurnameIsRequired,b=e.msgIsRequired;return Object(r.jsxs)("form",{className:a,onSubmit:n,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"nameAndSurname",children:"Imi\u0119 i nazwisko:"}),Object(r.jsx)("input",{className:"isValid--".concat(m),id:"nameAndSurname",type:"text",value:t,onChange:i}),m?null:Object(r.jsx)("p",{children:"Wymagane pole"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(r.jsx)("input",{className:"isValid--".concat(j),id:"email",type:"text",value:c,onChange:s}),j?null:Object(r.jsx)("p",{children:"Wymagane pole"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"message",children:"Wiadomo\u015b\u0107:"}),Object(r.jsx)("textarea",{className:"isValid--".concat(b),value:o,onChange:l,onFocus:u,children:"Masz pytania? Napisz do nas, a postaramy si\u0119 pom\xf3c"}),b?null:Object(r.jsx)("p",{children:"Wymagane pole"})]}),Object(r.jsx)("span",{children:Object(r.jsx)("button",{type:"submit",onClick:d,children:"Wy\u015blij"})})]})})),w=(n(49),n(6));function x(){var e=Object(t.useContext)(s.a).classess.contact;return Object(r.jsxs)("div",{className:"".concat(e.container),children:[Object(r.jsx)("div",{className:"".concat(e.container,"--").concat(e.address),children:Object(r.jsx)(w.a,{})}),Object(r.jsx)(O,{className:"".concat(e.container,"--").concat(e.contactForm)})]})}n(56);var f=n(16),v=n(20),k=function(e){Object(j.a)(n,e);var a=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).clicked=function(a){e.props.showModalImg(a.target.alt)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,a=e.className,n=e.alt;return Object(r.jsx)("img",{className:a,alt:n,onClick:this.clicked})}}]),n}(i.a.Component);k.contextType=s.a;var N=Object(f.b)((function(e){return{}}),(function(e){return{showModalImg:function(a){e(Object(v.c)(a))}}}))(k);var S=function(){var e=Object(t.useContext)(s.a).galleryImg;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"container",children:e.map((function(e,a){return Object(r.jsx)(N,{className:"".concat(e.className," gallery__").concat(a),alt:"".concat(e.alt).concat(a)},"gallery-img-".concat(a))}))}),Object(r.jsx)(w.e,{})]})};function C(e){var a=e.label,n=e.idIndicatedByLabel;return Object(r.jsx)("a",{href:"#".concat(n),children:a})}var I=Object(t.memo)(C),P=(n(57),n(58),n(18)),_=n(28);function M(e){var a=e.procedure,n=Object(t.useState)(!0),i=Object(P.a)(n,2),c=i[0],o=i[1],l=Object(t.useContext)(s.a).classess.pricelist;return Object(r.jsxs)("li",{className:l.serviceListItem,children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[a.name," ","".concat(a.price," z\u0142")]})," ",Object(r.jsx)("a",{onClick:function(){o(!c)},className:"accordionBtn--hidden__".concat(c),children:Object(r.jsx)(_.b,{})})]}),c?null:Object(r.jsx)("div",{children:a.description})]})}var A=function(e){Object(j.a)(n,e);var a=Object(m.a)(n);function n(){return Object(u.a)(this,n),a.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.context,a=e.classess,n=e.faceProcedurs,t=e.aestheticMedicineProcedures,i=e.bodyProcedures,c=e.spaProcedures,s=e.palmsAndTailsProcedures,o=e.hairutsProcedures,l=a.pricelist;return Object(r.jsxs)("ul",{className:l.serviceList,children:[n.map((function(e,a){return e.title?Object(r.jsx)("h1",{id:"#".concat(e.title),children:e.title},"h1-".concat(e.title,"-").concat(a)):Object(r.jsx)(M,{procedure:e},"listItem-".concat(e.title,"-").concat(a))})),t.map((function(e,a){return e.title?Object(r.jsx)("h1",{id:"".concat(e.title),children:e.title},"h1-".concat(e.title,"-").concat(a)):Object(r.jsx)(M,{procedure:e},"listItem-".concat(e.title,"-").concat(a))})),i.map((function(e,a){return e.title?Object(r.jsx)("h1",{id:"".concat(e.title),children:e.title},"h1-".concat(e.title,"-").concat(a)):Object(r.jsx)(M,{procedure:e},"listItem-".concat(e.title,"-").concat(a))})),c.map((function(e,a){return e.title?Object(r.jsx)("h1",{id:"".concat(e.title),children:e.title},"h1-".concat(e.title,"-").concat(a)):Object(r.jsx)(M,{procedure:e},"listItem-".concat(e.title,"-").concat(a))})),s.map((function(e,a){return e.title?Object(r.jsx)("h1",{id:"".concat(e.title),children:e.title},"h1-".concat(e.title,"-").concat(a)):Object(r.jsx)(M,{procedure:e},"listItem-".concat(e.title,"-").concat(a))})),o.map((function(e,a){return e.title?Object(r.jsx)("h1",{id:"".concat(e.title),children:e.title},"h1-".concat(e.title,"-").concat(a)):Object(r.jsx)(M,{procedure:e},"listItem-".concat(e.title,"-").concat(a))}))]})}}]),n}(i.a.Component);A.contextType=s.a;var D=A;function R(){var e=Object(t.useContext)(s.a),a=e.servicesName,n=e.classess,i=n.container;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:i,children:[Object(r.jsx)("nav",{className:n.pricelist.pricelistNavigation,children:a.map((function(e,a){return Object(r.jsx)(I,{label:e.title,idIndicatedByLabel:e.title},"pricelist-button-".concat(a))}))}),Object(r.jsx)(D,{})]}),Object(r.jsx)(w.e,{})]})}n(59);var q=g((function(e){var a=Object(t.useContext)(s.a).classess,n=a.reservation,i=a.contact,c=e.onChangeNameAndSurname,o=e.valueNameAndSurname,l=e.onChangeEmail,u=e.valueEmail,d=e.onSubmit,j=e.onChangeDate,m=e.valueDate,b=e.dateIsRequired,p=e.nameAndSurnameIsRequired,y=e.emailIsRequired;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:d,className:n,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"#NameAndSurname",children:"Imi\u0119 i nazwisko:"}),Object(r.jsx)("input",{className:"isValid--".concat(p),id:"NameAndSurname",type:"text",onChange:c,value:o}),p?null:Object(r.jsx)("p",{children:"Pole wymagane"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"#emailAddress",children:"Adres email:"}),Object(r.jsx)("input",{className:"isValid--".concat(y),id:"emailAddress",type:"text",onChange:l,value:u}),y?null:Object(r.jsx)("p",{children:"Pole wymagane"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"#reservationDay",children:"Dzie\u0144 wizyty:"}),Object(r.jsx)("input",{className:"isValid--".concat(b),id:"reservationDays",type:"date",onChange:j,value:m}),b?null:Object(r.jsx)("p",{children:"Pole wymagane"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"Wy\u015blj"})})]}),Object(r.jsx)("div",{className:"".concat(i.container,"--").concat(i.address),children:Object(r.jsx)(w.a,{})})]})}));n(60);function E(){var e=Object(t.useContext)(s.a),a=e.classess,n=e.specialOffersListElement,i=a.specialoffers;return Object(r.jsxs)("div",{className:i,children:[Object(r.jsx)("h1",{children:"Promocje"}),Object(r.jsx)("p",{children:"Sprawd\u017a co dla Ciebie przygotowali\u015bmy w okazyjnych cenach!"}),Object(r.jsxs)("div",{className:"".concat(i,"--content"),children:[Object(r.jsx)("img",{className:"".concat(i,"--content__logo"),alt:"logo"}),n.map((function(e,a){return Object(r.jsx)(w.f,{index:a,firstDescription:e.firstDescription,secondDescription:e.secondDescription,firstPrice:e.firstPrice,secondPrice:e.secondPrice})}))]})]})}},,,,,function(e,a,n){"use strict";n.d(a,"c",(function(){return c})),n.d(a,"b",(function(){return s}));var t="gallery/modalImg-true",i="gallery/modalImg-false",c=function(e){return{type:t,payload:e}},s=function(){return{type:i}},r={modal:!1,ImgNumber:null};a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case t:return{modal:!0,ImgNumber:a.payload};case i:return{modal:!1,classNameImg:null};default:return e}}},,,,,,function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var t=n(2),i=n.n(t),c=n(11),s=n(12),r=n(14),o=n(13),l=n(1),u=function(e){Object(r.a)(n,e);var a=Object(o.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,a=e.index,n=e.title;return Object(l.jsx)("div",{className:"cards--card__".concat(a),children:Object(l.jsx)("div",{children:n})})}}]),n}(i.a.PureComponent),d=u,j=function(e){Object(r.a)(n,e);var a=Object(o.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(l.jsx)("nav",{className:this.props.className,children:i.a.Children.map(e,(function(e){return e}))})}}]),n}(i.a.Component);n(47);function m(){var e=Object(t.useMemo)((function(){return[{title:"medycyna estetyczna",name:"medycyna_estetyczna"},{title:"zabiegi twarzy",name:"zabiegi_twarzy"},{title:"zabiegi na cialo",name:"zabiegi_na_cialo"},{title:"zabiegi na dlonie i paznokcie",name:"zabiegi_na_dlonie_i_paznokcie"},{title:"zabiegi dla pan\xf3w",name:"zabiegi_dla_pan\xf3w"},{title:"zabiegi na w\u0142osy",name:"zabiegi_na_w\u0142osy"}]}),[]);return Object(l.jsx)(j,{className:"cards",children:e.map((function(e,a){return Object(l.jsx)(d,{title:e.title,index:a})}))})}},,,,,,,function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return r}));var t=n(5),i=n(15),c=n(2),s=n(1);function r(){var e=Object(t.f)().page;return Object(c.useCallback)((function(e){switch(e){case"contact":return Object(s.jsx)(i.a,{});case"pricelist":return Object(s.jsx)(i.d,{});case"gallery":return Object(s.jsx)(i.b,{});case"specialoffers":return Object(s.jsx)(i.f,{});case"reservation":return Object(s.jsx)(i.e,{});default:return Object(s.jsx)(i.c,{})}}),[e])(e)}},,,,,,,,,,,function(e,a,n){},function(e,a,n){},,function(e,a,n){},function(e,a,n){},function(e,a,n){},,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(2),i=n.n(t),c=n(24),s=n.n(c),r=n(17),o=n(16),l=n(36),u=n(20),d=(n(44),n(5)),j=(n(45),n(3)),m={classess:{container:"container",menuNav:"nav",spinner:"spinner",snackbar:"snackbar",specialoffers:"specialoffers",pricelist:{pricelistNavigation:"pricelistNavigation",serviceList:"serviceList",serviceListItem:"serviceListItem"},contact:{container:"contact_container",address:"address",contactForm:"contactForm"},gallery:{thumbnail:"thumbnail",modalImage:"modalImage"},reservation:"reservation"},linksName:[{link:"Strona g\u0142\xf3wna",src:"home",componentName:"Home"},{link:"Kontakt",src:"contact",componentName:"Contact"},{link:"Cennik",src:"pricelist",componentName:"PriceList"},{link:"Galeria",src:"gallery",componentName:"Gallery"},{link:"Promocje",src:"specialoffers",componentName:"SpecialOffers"},{link:"Rezerwacja",src:"reservation",componentName:"Reservation"}],servicesName:[{title:"zabiegi na twarz"},{title:"medycyna estetyczna"},{title:"zabiegi na cia\u0142o"},{title:"spa"},{title:"d\u0142onie i stopy"},{title:"fryzjerstwo"}],faceProcedurs:[{title:"zabiegi na twarz"},{name:"Terapia nawil\u017caj\u0105ca - ultra",price:"150",description:"Zestaw maseczek nawil\u017caj\u0105cych sk\xf3r\u0119 twarzy. Dzi\u0119ki nowoczesnej nanotechnologii oraz kosmetyk\xf3w terapia regeneruje najg\u0142\u0119bsze wartswy sk\xf3ry oraz nawil\u017ca. Terapia zalecana dla os\xf3b maj\u0105cych problem z cer\u0105, wyr\xf3wnaniem kolorytu."},{name:"Zabieg roz\u015bwietlaj\u0105cy",price:"210",description:"Terapia roz\u015bwietlaj\u0105ca cer\u0119, zawieraj\u0105ca specjalnie skomponowan\u0105 proporcj\u0119 kwasu dobranego do sk\xf3ry. Dzi\u0119ki wysokiej jako\u015bci kosmetyk\xf3w zabieg jest ca\u0142kowicie bezpieczny a przed przyst\u0105pieniem sprawdzamy czy klient nie ma uczulenia na stosowany preparat. W przeciwnym wypadku stosujemy inny przeznaczony do tego celu."},{name:"Terapia lift wype\u0142niaj\u0105ca zamrszczki",price:"350",description:"Spersonalizowany zabieg o dzia\u0142aniu piel\u0119gnacyjnym i leczniczym. Zabieg na twarz, szyj\u0119 i dekolt, dzi\u0119ki zastosowaniu naturalnych, aktywnych sk\u0142adnik\xf3w zabieg jest ca\u0142kowicie kontrolowany. Zabieg jest nieinwazyjny oraz szybko wype\u0142nia zamrszczki, co powoduje, \u017ce sk\xf3ra szybko nabiera j\u0119drno\u015bci, gesto\u015bci oraz wyr\xf3wnuje si\u0119."},{name:"Oczyszczanie manualne",price:"180",description:"Oczyszczanie manualne to zabieg pozwalaj\u0105cy na oczyszczenie sk\xf3ry z zanieczyszcze\u0144 i odblokowanie por\xf3w z nadmiaru \u0142oju. Terapia jest szczeg\xf3lnie polecana dla os\xf3b maj\u0105cych problem z tr\u0105dzikiem, nadmiernym \u0142ojotokiem czy nadmiaru sebum. Dzi\u0119ki jej zastosowaniu sk\xf3ra zostanie oczyszczona z nadmiaru zanieczyszcze\u0144."},{name:"Terapia okolic oczu",price:"75",description:"Jest to niechirurgiczny zabieg, kt\xf3ry polega na liftingu sk\xf3ry pod oczami bez u\u017cycia skalepla. Jest to masa\u017c stymulacyjny po\u0142\u0105czony z drena\u017cem limfatycznym, kt\xf3ry pozwala wyeliminowa\u0107 zmarszczki oraz niedoskona\u0142o\u015bci."}],aestheticMedicineProcedures:[{title:"medycyna estetyczna"},{name:"Kwas hialuronowy",price:"850",description:"Zabieg polega na wype\u0142nieniu bruzdy nosowo-wargowej poprzez wstrzykni\u0119cie preparatu z kwasem hialuronowym i pozbycie si\u0119 nadmiernych zamrszczek. Sam zabieg jes bezbolesny, jedynie odczuwalne mog\u0105 by\u0107 uk\u0142ucia ig\u0142y, z tego wzgl\u0119du na \u017cyczenie klienta stosujemy miejscowe znieczulenie."},{name:"Botox - 2 strefy",price:"700",description:"Zabieg polega na precyzyjnym wstrzykni\u0119ciu toksyny botulinowej w wybrane miejsce. Powoduje to zablokowanie przewodnictwa nerwowo-mi\u0119\u015bniowego, co w efekcie powoduje os\u0142abienie si\u0142 nadkatywnych mi\u0119\u015bni. To ostatecznie prowadzi do redukcji zmarszczek."}],bodyProcedures:[{title:"zabiegi na cia\u0142o"},{name:"Radiofrekwencja mikroig\u0142owa",price:"600",description:"Zabieg na rozst\u0119py podczas, kt\xf3rego laserem na\u015bwietla si\u0119 rozst\u0119py/blizny w celu ich eliminacji. Wi\u0105zka lasera trafia w sk\xf3r\u0119 i przenika do warstwy sk\xf3ry w\u0142a\u015bciwiej, aby pobudzi\u0107 cia\u0142o do regeneracji. Czas rekowalescencji wynosi do 3 dni. "},{name:"Drena\u017c limfatyczny",price:"170",description:"Najskuteczniejszy zabieg w leczeniu obrz\u0119k\xf3w. Masa\u017c powoduje przepchni\u0119cie nagromadzonego pod sk\xf3r\u0105 p\u0142ynu, co powoduje popraw\u0119 kr\u0105\u017cenia."}],spaProcedures:[{title:"spa"},{name:"Masa\u017c aromatyczny",price:" 180",description:"Masa\u017c relaksacyjny ca\u0142ego cia\u0142a. Podczas sesji u\u017cywane s\u0105 naturalne olejki aromatyczne. Czas trwania masa\u017cu to 45 min."},{name:"Masa\u017c gor\u0105c\u0105 czekolad\u0105",price:"240",description:"Masa\u017c ca\u0142ego cia\u0142a z wykorzystaniem gor\u0105cej czekolady. Czas trwanina masa\u017cu to 60 min."},{name:"Peeling",price:"150",description:"Peeling ca\u0142ego cia\u0142a z wykorzystaniem naturalnych olejk\xf3w. Czas trwania zabiegu 40 min + 20 min (czas przygotowania przed i po zabiegu)."}],palmsAndTailsProcedures:[{title:"d\u0142onie i stopy"},{name:"Manicure hybrydowy",price:"100",description:"Zabieg manicure + lakierowanie hybrydowe polegaj\u0105 na wykonaniu manicure wraz z wyko\u0144czeniem przy u\u017cyciu lakieru hybrydowego utwardzanego w lampie UV."},{name:"Manicure japo\u0144ski",price:"80",description:"Dalekowschodnia technika polegaj\u0105ca na wzmocnieniu paznokci z wykorzystaniem sk\u0142adnik\xf3w od\u017cywczych tj. witamina A + E, keratyny i krzemionki z morza japo\u0144skiego. Zabieg zalecany dla paznokci s\u0142abych, \u0142amliwych i rozdwajaj\u0105cych si\u0119."},{name:"\u017belowanie naturalnej p\u0142ytki",price:"130",description:"Zabieg polega na \u017celowaniu naturalnej p\u0142ytki i na\u0142o\u017ceniu hybrydy na naturaln\u0105 p\u0142ytk\u0119 paznokcia (jeden kolor)."}],hairutsProcedures:[{title:"fryzjerstwo"},{name:"Strzy\u017cenie damskie + mycie + modelowanie - w\u0142osy kr\xf3tkie",price:"90",description:"Strzy\u017cenie w\u0142os\xf3w kr\xf3tkich wed\u0142ug wzoru lub propozycji fryzjera-stylisty. Mycie wraz z modelowaniem i od\u017cywieniem w\u0142os\xf3w. Czas trwania 20-60 min."},{name:"Strzy\u017cenie damskie + mycie + modelowanie - w\u0142osy \u015brenie",price:"120",description:"Strzy\u017cenie w\u0142os\xf3w \u015bredniej d\u0142ugo\u015bci wed\u0142ug wzoru lub propozycji fryzjera-stylisty. Mycie wraz z modelowaniem i od\u017cywieniem w\u0142os\xf3w. Czas trwania 20-60 min."},{name:"Strzy\u017cenie damskie + mycie + modelowanie - w\u0142osy d\u0142ugie",price:"170",description:"Strzy\u017cenie w\u0142os\xf3w d\u0142ugich wed\u0142ug wzoru lub propozycji fryzjera-stylisty. Mycie wraz z modelowaniem i od\u017cywieniem w\u0142os\xf3w. Czas trwania 20-60 min."}],contacts:{},galleryImg:[{alt:"gallery--img--",className:"thumbnail--0"},{alt:"gallery--img--",className:"thumbnail--1"},{alt:"gallery--img--",className:"thumbnail--2"},{alt:"gallery--img--",className:"thumbnail--3"},{alt:"gallery--img--",className:"thumbnail--4"},{alt:"gallery--img--",className:"thumbnail--5"},{alt:"gallery--img--",className:"thumbnail--6"},{alt:"gallery--img--",className:"thumbnail--7"},{alt:"gallery--img--",className:"thumbnail--8"},{alt:"gallery--img--",className:"thumbnail--9"},{alt:"gallery--img--",className:"thumbnail--10"},{alt:"gallery--img--",className:"thumbnail--11"},{alt:"gallery--img--",className:"thumbnail--12"},{alt:"gallery--img--",className:"thumbnail--13"},{alt:"gallery--img--",className:"thumbnail--14"},{alt:"gallery--img--",className:"thumbnail--15"},{alt:"gallery--img--",className:"thumbnail--16"},{alt:"gallery--img--",className:"thumbnail--17"},{alt:"gallery--img--",className:"thumbnail--18"},{alt:"gallery--img--",className:"thumbnail--19"}],specialOffersListElement:[{firstDescription:"Ombre, Koloryzacja jest bardzo efektowna. Rozja\u015bnione w\u0142osy dodaj\u0105 blasku i roz\u015bwietlaj\u0105 twarz. Efekt odm\u0142odzenia jest tu gwarantowany",secondDescription:"Sombre, to \u015bwietne rozwi\u0105zanie dla kobiet o kr\xf3tszych w\u0142osach. Rozja\u015bnia w\u0142osy od samej sk\xf3ry g\u0142owy, idealna stylizacja na aktualn\u0105 por\u0119 roku",firstPrice:"300 z\u0142",secondPrice:"250 z\u0142"},{firstDescription:"Mikrodermabrazja, Jesieni\u0105 promieniowanie s\u0142oneczne jest \u0142agodniejsze ni\u017c w lecie, dlatego najlepiej wykona\u0107 zabieg mikrodermabrazji w\u0142a\u015bnie wtedy, gdy\u017c po zabiegu, nale\u017cy unika\u0107 s\u0142o\u0144ca przez dwa tygodnie. Mikrodermabrazja to inaczej mikropeeling. Zabieg polega na mechanicznym usuwaniu martwego, zrogowacia\u0142ego nask\xf3rka, a\u017c do g\u0142\u0119bszych warstw sk\xf3ry.",firstPrice:"400 z\u0142"},{firstDescription:"Jesienny manicure, zabieg manicure + lakierowanie hybrydowe polegaj\u0105 na wykonaniu manicure wraz z wyko\u0144czeniem przy u\u017cyciu lakieru hybrydowego utwardzanego w lampie UV z wykorzystaniem delikatnych kolor\xf3w dedykowanych na jesienn\u0105 por\u0119 roku. Na \u017cyczenie klienta mog\u0105 zosta\u0107 zrobione wzory z wzornika.",secondDescription:"Jesienny \u017celowanie naturalnej p\u0142ytki, Zabieg polega na \u017celowaniu naturalnej p\u0142ytki i na\u0142o\u017ceniu hybrydy na naturaln\u0105 p\u0142ytk\u0119 paznokcia (dwa kolory).",firstPrice:"130 z\u0142",secondPrice:"80 z\u0142"},{firstDescription:"Usuwanie znamion, w okresie jesienno-zimowym warto usun\u0105\u0107 wszelkiego rodzaju znamiona barwnikowe. Dzi\u0119ki temu latem i wiosn\u0105 b\u0119dzie mo\u017cna ju\u017c bez obaw o ich podra\u017cnienie korzysta\u0107 z urok\xf3w opalania, stosuj\u0105c oczywi\u015bcie wysok\u0105 ochron\u0119 UV. Poza tym, je\u015bli zabieg usuni\u0119cia znamion odb\u0119dzie si\u0119 jesieni\u0105 lub zim\u0105, w\xf3wczas bez problemu zagoj\u0105 si\u0119 szwy po chirurgicznym usuni\u0119ciu znamienia barwnikowego \u2013 nie b\u0119d\u0105 w\xf3wczas nara\u017conia na cz\u0119ste dzia\u0142anie s\u0142o\u0144ca i wody, co by\u0142oby nieuniknione w okresie letnim.",firstPrice:"140 z\u0142"}]},b=n(15),p=n(6),y=n(1),z=i.a.lazy((function(){return Promise.resolve().then(n.bind(null,33))}));var h=Object(o.b)((function(e){return{isModalImgHidden:e.modal}}),(function(e){return{}}))((function(e){var a=e.isModalImgHidden;return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)(j.a.Provider,{value:m,children:[a&&Object(y.jsx)(p.d,{}),Object(y.jsx)(p.c,{}),Object(y.jsx)(t.Suspense,{fallback:Object(y.jsx)(p.g,{}),children:Object(y.jsxs)(d.c,{children:[Object(y.jsx)(d.a,{exact:!0,path:"/:page",component:z}),Object(y.jsx)(d.a,{path:"*",children:Object(y.jsx)(b.c,{})})]})})]}),Object(y.jsx)(p.b,{className:"footer"})]})})),g=Object(l.a)(u.a);s.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(o.a,{store:g,children:Object(y.jsx)(r.a,{children:Object(y.jsx)(h,{})})})}),document.getElementById("root"))}],[[61,1,2]]]);
//# sourceMappingURL=main.5943664a.chunk.js.map