(this.webpackJsonpandrew_hewitson_react=this.webpackJsonpandrew_hewitson_react||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n(39),r=n.n(s),a=n(25),c=n.n(a),o=n(9),l=n(10),j=n(12),u=n(11),h=(n(16),n(14)),d=n(3),b=n(0);var A=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Welcome!"}),Object(b.jsx)("p",{children:"This site is to showcase some of the things that I have done with React"})]})},p=n.p+"static/media/rock.8cbd921c.jpg",x=n.p+"static/media/paper.30601044.jpg",O=["paper","rock","scissors"];function v(){var e=function(){var e=Math.random();return Math.floor(3*e)}();return O[e]}var I=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).computerOutput="",i.playersMove=function(e){var t=v();if(console.log("CLICKED CHOICE",e,t),e!==t)if("Rock"===e&&"Scissors"===t||"Paper"===e&&"Rock"===t||"Scissors"===e&&"Paper"===t)i.setState({playerScore:i.state.playerScore+1}),alert("Player won the round");else{if(!("Rock"===e&&"Paper"===t||"Paper"===e&&"Scissors"===t||"Scissors"===e&&"Rock"===t))return void alert("Tie");i.setState({computerScore:i.state.computerScore+1}),alert("Computer won the round")}else alert("Tie")},i.state={computerScore:0,playerScore:0},i}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){5===this.state.playerScore?(alert("Player won the game!"),this.resetGame()):5===this.state.computerScore&&(alert("Computer won the game!"),this.resetGame())}},{key:"resetGame",value:function(){this.setState({playerScore:0,computerScore:0,playerChoice:"",computerChoice:"",gameWinner:""})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Paper, Rock, Scissors"}),Object(b.jsx)("button",{class:"GameButton",onClick:function(){return e.playersMove("Rock")},children:Object(b.jsx)("img",{src:p,width:"150",height:"150",alt:"rock"})}),Object(b.jsx)("button",{class:"GameButton",onClick:function(){return e.playersMove("Paper")},children:Object(b.jsx)("img",{src:x,width:"150",height:"150",alt:"paper"})}),Object(b.jsx)("button",{class:"GameButton",onClick:function(){return e.playersMove("Scissors")},children:Object(b.jsx)("img",{src:"data:image/jpeg;base64,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",width:"150",height:"150",alt:"scissors"})}),Object(b.jsx)("h1",{children:"Scoreboard:"}),Object(b.jsx)("button",{class:"GameButton",onClick:function(){return e.playGame()},children:"PLAY"}),Object(b.jsx)("button",{class:"GameButton",onClick:function(){return e.resetGame()},children:"RESET"}),Object(b.jsxs)("h4",{children:["Computer has chosen: ",this.state.computerChoice]}),Object(b.jsxs)("h3",{children:["The Winner is: ",this.state.winner]}),Object(b.jsx)("h3",{children:"Score"}),Object(b.jsxs)("h4",{children:["Player: ",this.state.playerScore]}),Object(b.jsxs)("h4",{children:["Computer: ",this.state.computerScore]}),Object(b.jsx)("h3",{children:this.state.gameWinner})]})}}]),n}(i.Component),m=n(26),E=n(21),g=n(29),f=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).handleChange=function(e){var t,n=e.target,s=n.name,r=n.value,a=n.checked,c=n.type;i.setState((t={},Object(m.a)(t,s,"checkbox"===c?a:r),Object(m.a)(t,"date",Date().toLocaleString()),t))},i.handleKeyPress=function(e){13===e.charCode&&i.handleSubmit(e)},i.handleSubmit=function(e){e.preventDefault(),i.state.name&&i.state.quantity>0&&(i.state.ITEMS.push(i.state),i.resetForm())},i.state={ITEMS:[],name:"",quantity:0,date:""},i.delete=i.delete.bind(Object(E.a)(i)),i}return Object(l.a)(n,[{key:"delete",value:function(e){this.setState((function(t){return{ITEMS:t.ITEMS.filter((function(t){return t!==e}))}}))}},{key:"resetForm",value:function(){this.setState({name:"",quantity:0})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:c.a.container,children:[Object(b.jsx)("div",{className:"ShoppingListHeader",children:Object(b.jsx)("h1",{children:"SHOPPING LIST"})}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,onKeyPress:this.handleKeyPress,children:["NEW ITEM",Object(b.jsx)("input",{className:"ShoppingListInput",name:"name",value:this.state.name,onChange:this.handleChange}),"QUANTITY",Object(b.jsx)("input",{className:"ShoppingListInput",type:"number",name:"quantity",value:this.state.quantity,onChange:this.handleChange}),Object(b.jsx)(g.a,{variant:"outline-primary",type:"submit",children:"Add to Shopping list"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:Object(b.jsx)("table",{className:"ShoppingListTable",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ITEM"}),Object(b.jsx)("th",{children:"QUANTITY"}),Object(b.jsx)("th",{children:"TIMESTAMP"}),Object(b.jsx)("th",{children:"REMOVE"})]}),this.state.ITEMS.map((function(t,n){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:t.quantity}),Object(b.jsx)("td",{children:t.date}),Object(b.jsx)("td",{children:Object(b.jsx)(g.a,{variant:"danger",size:"lg",type:"button",onClick:e.delete.bind(e,t),children:"Delete"})})]},n.toString())}))]})})})})]})}}]),n}(i.Component),R=n(13),y=n.n(R),k=n(15),S=n(20),N=n.n(S);n(17);var C=function(){return Object(b.jsx)("div",{className:"CountryTitle",children:Object(b.jsx)("h1",{className:"Title",children:"Country List"})})},P=n(72);var B=function(){return Object(b.jsx)("div",{className:"LoadingSpinner",children:Object(b.jsx)(P.a,{animation:"grow",role:"status",children:Object(b.jsx)("span",{className:"LoadingSpinnerText",children:"Loading..."})})})},H=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).fetchAll=function(){i.setState({loading:!0}),N.a.get("https://restcountries.eu/rest/v2/all").then((function(e){var t=e.data;i.setState({countries:t,loading:!1})})).catch((function(){i.setState({hasErrors:!0})}))},i.search=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({loading:!0}),e.next=3,N.a.get("https://restcountries.eu/rest/v2/name/"+i.state.value);case 3:return n=e.sent,e.next=6,n.data;case 6:if(null==(s=e.sent)){e.next=12;break}return i.setState({countries:s,loading:!1,error:!1}),e.abrupt("return",s);case 12:i.setState({countries:[],loading:!1,error:!0,errorMessage:"No Countries found for "+i.state.value});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.onChangeHandler=function(){var e=Object(k.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.setState({value:t.target.value});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.onFocusHandler=function(){i.setState({value:""})},i.handleKeyPress=function(e){13===e.charCode&&i.handleSubmit(e)},i.handleSubmit=function(e){e.preventDefault(),i.search(e.target.value)},i.state={countries:[],hasErrors:!1,loading:!1,value:""},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetchAll()}},{key:"render",value:function(){var e=this;return this.state.loading?Object(b.jsx)("div",{children:Object(b.jsx)(B,{})}):this.state.hasErrors?Object(b.jsx)("p",{children:"Please try again later. Too many people looking at dogs"}):Object(b.jsxs)("div",{className:"CountriesList",children:[Object(b.jsx)(C,{}),Object(b.jsx)("div",{className:"SearchBar",children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,onKeyPress:this.handleKeyPress,children:["Search:",Object(b.jsx)("input",{value:this.state.value,onChange:function(t){return e.onChangeHandler(t)},placeholder:"Search for a Country",onFocus:this.onFocusHandler}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]})}),Object(b.jsx)("ul",{children:Object(b.jsx)("div",{className:"CountriesDiv",children:this.state.countries.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:"CountryDisplay",children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsxs)("p",{children:["Capital City: ",e.capital]}),Object(b.jsxs)("p",{children:["Continent: ",e.region]})]})},e.name)}))})})]})}}]),n}(i.Component);var w=function(){return Object(b.jsx)("div",{className:"HeaderTitle",children:Object(b.jsx)("h1",{className:"Title",children:"Book Store"})})};var D=function(e){var t=e.book;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t.volumeInfo.title}),Object(b.jsx)("h4",{children:t.volumeInfo.categories}),t.volumeInfo.imageLinks?Object(b.jsx)("img",{src:t.volumeInfo.imageLinks.thumbnail,style:{width:250},alt:"book_Picture"}):Object(b.jsx)("p",{children:"no image"}),t.volumeInfo.description?Object(b.jsx)("p",{children:t.volumeInfo.description}):Object(b.jsx)("p",{children:"no description"})]})};var Q=function(e){var t=e.book;return Object(b.jsxs)("div",{children:[t.volumeInfo.title?Object(b.jsx)("h1",{children:t.volumeInfo.title}):Object(b.jsx)("h1",{children:"unknown title"}),t.volumeInfo.imageLinks?Object(b.jsx)("img",{src:t.volumeInfo.imageLinks.thumbnail,alt:"book thumbnail"}):Object(b.jsx)("p",{children:"no image"}),Object(b.jsx)("h5",{children:"Subtitle:"}),t.volumeInfo.subtitle?t.volumeInfo.subtitle:Object(b.jsx)("p",{children:"unknown subtitle"}),Object(b.jsx)("h5",{children:"Authors:"}),t.volumeInfo.author?Object(b.jsx)("ul",{className:"bookList",children:t.volumeInfo.authors.map((function(e){return Object(b.jsx)("li",{className:"bookListItem",children:e},e.index)}))}):Object(b.jsx)("p",{children:"unknown author"}),Object(b.jsx)("h5",{children:"Publisher:"}),t.volumeInfo.publisher?t.volumeInfo.publisher:Object(b.jsx)("p",{children:"unknown publisher"}),Object(b.jsx)("h5",{children:"Published Date:"}),t.volumeInfo.publishedDate?t.volumeInfo.publishedDate:Object(b.jsx)("p",{children:"unknown date"}),Object(b.jsx)("h5",{children:"Description:"}),t.volumeInfo.description?Object(b.jsx)("p",{children:t.volumeInfo.description}):Object(b.jsx)("p",{children:"no description"})]})},L=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).onChangeHandler=function(){var e=Object(k.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.setState({value:t.target.value});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.onFocusHandler=function(){i.setState({value:""})},i.handleKeyPress=function(e){13===e.charCode&&i.handleSubmit(e)},i.handleSubmit=function(e){e.preventDefault(),i.search(e.target.value)},i.handleClick=function(e){i.setState({book:e,pageView:!0})},i.handleClosePageViewClick=function(e){i.setState({pageView:!1})},i.searchBar=function(e){return Object(b.jsx)("div",{className:"SearchBar",children:Object(b.jsxs)("form",{onSubmit:i.handleSubmit,onKeyPress:i.handleKeyPress,children:["Search:",Object(b.jsx)("input",{value:i.state.value,onChange:function(e){return i.onChangeHandler(e)},placeholder:"Search for a book",onFocus:i.onFocusHandler}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]})})},i.search=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({loading:!0}),e.next=3,N.a.get("https://www.googleapis.com/books/v1/volumes?q="+i.state.value);case 3:return n=e.sent,e.next=6,n.data.items;case 6:if(null==(s=e.sent)){e.next=12;break}return i.setState({books:s,loading:!1,error:!1}),e.abrupt("return",s);case 12:i.setState({books:[],loading:!1,error:!0,errorMessage:"No books found for "+i.state.value});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.state={books:[],loading:!1,value:"Harry Potter",pageView:!1,errorMessage:!1,error:!1},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.state.books.length<1&&this.search(this.state.value)}},{key:"openPageView",value:function(){return Object(b.jsxs)("div",{className:"pageViewContainer",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:this.handleClosePageViewClick,children:"Back To Main Page"}),Object(b.jsx)(Q,{book:this.state.book})]}),Object(b.jsx)("br",{})]})}},{key:"displayBookCardView",value:function(){var e=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{children:this.searchBar()}),Object(b.jsx)("div",{className:"listContainer",children:Object(b.jsx)("ul",{className:"bookList",children:this.state.books.map((function(t){return Object(b.jsx)("button",{className:"bookListButton",onClick:function(){return e.handleClick(t)},children:Object(b.jsx)("li",{className:"bookListItem",children:Object(b.jsx)(D,{book:t})},t.id.toString)})}))})})]})}},{key:"render",value:function(){return this.state.loading?Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{}),Object(b.jsx)(B,{})]}):this.state.pageView?Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{}),this.openPageView()]}):this.state.books?Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{}),!1===this.state.error?this.displayBookCardView():Object(b.jsxs)("div",{children:[this.searchBar(),Object(b.jsx)("h3",{className:"ErrorMessage",children:this.state.errorMessage})]})]}):void 0}}]),n}(i.Component);var G=function(){return Object(b.jsx)("div",{style:{backgroundColor:"blue",height:"500px"},children:Object(b.jsx)("h2",{children:"NotFound"})})};var Z=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{children:Object(b.jsx)("div",{id:"menu-outer",children:Object(b.jsx)("div",{className:"table",children:Object(b.jsxs)("ul",{id:"horizontal-list",children:[Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/",className:"mainNavLink",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/countriesList",className:"mainNavLink",children:"Countries List"})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/shoppingList",className:"mainNavLink",children:"Shopping List"})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/bookList",className:"mainNavLink",children:"Book List"})})]})})})}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/rockPaperScissorsGame",component:I}),Object(b.jsx)(d.a,{path:"/countriesList",component:H}),Object(b.jsx)(d.a,{path:"/shoppingList",component:f}),Object(b.jsx)(d.a,{path:"/bookList",component:L}),Object(b.jsx)(d.a,{path:"/my-app",component:A}),Object(b.jsx)(d.a,{path:"/",component:A,exact:!0}),Object(b.jsx)(d.a,{component:G})]})]})};var T=function(){return Object(b.jsxs)("div",{className:"Footer",children:[Object(b.jsx)("p",{children:"Phone: 778-228-2070"}),Object(b.jsx)("p",{children:"Email: Hewitson.Andrew.W@gmail.com"})]})},V=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{class:"Header",children:[Object(b.jsx)("h1",{children:"Andrew Hewitson"}),Object(b.jsx)("h3",{children:"React Portfolio"})]}),Object(b.jsx)(Z,{}),Object(b.jsx)(T,{})]})}}]),n}(i.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),r(e),a(e)}))};r.a.render(Object(b.jsx)(h.a,{children:Object(b.jsx)(V,{})}),document.getElementById("root")),M()}},[[70,1,2]]]);
//# sourceMappingURL=main.da1ff4ef.chunk.js.map