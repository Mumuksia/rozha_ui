(this.webpackJsonprozha_ui=this.webpackJsonprozha_ui||[]).push([[0],{13:function(e,t){e.exports={serverURL:"http://132.145.254.115:8080",clanListTitles:["ClanRank","Donations","Donations received","Name","Clan role","Trophies","League"],clanId:"%2398URYYCP"}},20:function(e,t,a){},27:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),o=(a(32),a(33),a(34),a(20),a(35),a(36),a(37),a(6)),s=a(7),i=a(11),u=a(10),m=a(44),h=a(45),p=a(46),d=a(47),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"card"+(this.props.plain?" card-plain":"")},l.a.createElement("div",{className:"header"+(this.props.hCenter?" text-center":"")},l.a.createElement("h4",{className:"title"},this.props.title),l.a.createElement("p",{className:"category"},this.props.category)),l.a.createElement("div",{className:"content"+(this.props.ctAllIcons?" all-icons":"")+(this.props.ctTableFullWidth?" table-full-width":"")+(this.props.ctTableResponsive?" table-responsive":"")+(this.props.ctTableUpgrade?" table-upgrade":"")},this.props.content,l.a.createElement("div",{className:"footer"},this.props.legend,null!=this.props.stats?l.a.createElement("hr",null):"",l.a.createElement("div",{className:"stats"},l.a.createElement("i",{className:this.props.statsIcon})," ",this.props.stats))))}}]),a}(n.Component),v=a(13),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={clanUsers:[],expandedRow:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(v.clanId),fetch(v.serverURL+"/clan/members?clanId="+v.clanId).then((function(e){return e.json()})).then((function(t){e.setState({clanUsers:t})})).catch(console.log)}},{key:"handleRowClick",value:function(e){var t=this.state.expandedRow;this.setState({expandedRow:e===t?null:e})}},{key:"renderItem",value:function(e){var t=this,a=[l.a.createElement("tr",{onClick:function(){return t.handleRowClick(e.tag)},key:"row-data-"+e.tag},l.a.createElement("td",null,e.clanRank),l.a.createElement("td",null,e.donations),l.a.createElement("td",null,e.donationsReceived),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.role),l.a.createElement("td",null,e.trophies),l.a.createElement("td",null,l.a.createElement("div",{className:"logo-img"},l.a.createElement("img",{src:e.icon,alt:"logo_image"}))))];return this.state.expandedRow===e.tag&&a.push(l.a.createElement("tr",null,l.a.createElement("td",{colspan:Object.keys(this.state.clanUsers[0]).length},l.a.createElement("div",null," ",e.name," ")))),a}},{key:"render",value:function(){var e=this,t=[];return this.state.clanUsers.forEach((function(a){var n=e.renderItem(a);t=t.concat(n)})),l.a.createElement("div",{className:"content"},l.a.createElement(m.a,{fluid:!0},l.a.createElement(h.a,null,l.a.createElement(p.a,{md:12},l.a.createElement(E,{title:"Clan Members",category:"list of all clan members",ctTableFullWidth:!0,ctTableResponsive:!0,content:l.a.createElement(d.a,{striped:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,v.clanListTitles.map((function(e,t){return l.a.createElement("th",{key:t},e)})))),l.a.createElement("tbody",null,t))})))))}}]),a}(n.Component),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(m.a,{fluid:!0},l.a.createElement(h.a,null,l.a.createElement(p.a,{md:2},this.props.clanLevel)),l.a.createElement(h.a,null,l.a.createElement(p.a,{md:2},this.props.item.clanPoints)),l.a.createElement(h.a,null,l.a.createElement(p.a,{md:2},this.props.item.description)),l.a.createElement(h.a,null,l.a.createElement(p.a,{md:2},this.props.item.name)),l.a.createElement(h.a,null,l.a.createElement(p.a,{md:2},this.props.item.location)),l.a.createElement(h.a,null,l.a.createElement(p.a,{md:2},this.props.item.warWins)))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={clanAbout:{}},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(v.serverURL+"/clan?clanId="+v.clanId).then((function(e){return e.json()})).then((function(t){e.setState({clanAbout:JSON.parse(t)})})).catch(console.log)}},{key:"render",value:function(){return l.a.createElement("div",{className:"content"},this.state.clanAbout.clanLevel,l.a.createElement(b,{item:this.state.clanAbout}))}}]),a}(n.Component),y=a(15),k=a(12);function j(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home"))}var w=function(){return l.a.createElement(y.a,null,l.a.createElement("div",null,l.a.createElement("ul",{id:"menu"},l.a.createElement("li",null,l.a.createElement(y.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(y.b,{to:"/players"},"Players")),l.a.createElement("li",null,l.a.createElement(y.b,{to:"/war"},"Clan War"))),l.a.createElement("hr",null),l.a.createElement(k.c,null,l.a.createElement(k.a,{exact:!0,path:"/"},l.a.createElement(j,null)),l.a.createElement(k.a,{path:"/about"},l.a.createElement(g,null)),l.a.createElement(k.a,{path:"/players"},l.a.createElement(f,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.0e4bbecb.chunk.js.map