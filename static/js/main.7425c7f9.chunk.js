(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a,i=n(0),o=n.n(i),l=n(2),s=n.n(l),c=(n(14),n(3)),r=n(4),d=n(6),m=n(5),p=n(7),u=Molphene;function v(){var e,t,n=a.ctx.canvas;n.width=n.clientWidth,n.height=n.clientHeight,e=n.width,t=n.height,a._molphene_application_canvas_size_changed(e,t)}function h(e){return a._molphene_application_change_representation(e)}function b(){return a._molphene_application_render_frame()}var k,f,_=ChemDoodle;n(15);function M(e){var t=e.onAppToolbarDrawerBtnClicked,n=e.onAppBarMoreMenuClicked,a=e.onAppBarMenuListItemClicked,i=e.isMoreMenuOpened,l=e.representationList,s=e.activedRepresentation;return o.a.createElement("header",{className:"mdc-top-app-bar mdc-top-app-bar--dense"},o.a.createElement("div",{className:"mdc-top-app-bar__row"},o.a.createElement("section",{className:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},o.a.createElement("button",{onClick:t,className:"material-icons mdc-top-app-bar__navigation-icon"},"menu"),o.a.createElement("span",{className:"mdc-top-app-bar__title"},"Molphene")),o.a.createElement("section",{className:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end"},o.a.createElement("div",{id:"demo-menu",className:"mdc-menu-surface--anchor"},o.a.createElement("button",{id:"menu-button",onClick:n,className:"material-icons mdc-top-app-bar__action-item","aria-label":"More menu"},"more_vert"),o.a.createElement("div",{className:"mdc-menu mdc-menu-surface"+(i?" mdc-menu-surface--open":"")},o.a.createElement("ul",{className:"mdc-list",role:"menu","aria-hidden":"true","aria-orientation":"vertical"},l.map(function(e,t){return o.a.createElement("li",{key:t,"data-representation":t,className:"mdc-list-item"+(s===t?" mdc-list-item--activated":""),role:"menuitem",onClick:a},o.a.createElement("span",{className:"mdc-list-item__text"},e.title))})))))))}function w(e){var t=e.isNavDrawerOpen,n=e.navigationList,a=e.activatedMolecule,i=e.onDrawerListItemClicked;return o.a.createElement("aside",{className:"mdc-drawer mdc-drawer--modal"+(t?" mdc-drawer--open":"")},o.a.createElement("div",{className:"mdc-drawer__content"},o.a.createElement("nav",{className:"mdc-list mdc-list--two-line"},n.map(function(e,t){return o.a.createElement("a",{key:t,"data-key":t,className:"mdc-list-item"+(a===t?" mdc-list-item--activated":""),href:"#"+e.link,onClick:i},o.a.createElement("span",{className:"mdc-list-item__text"},o.a.createElement("span",{className:"mdc-list-item__primary-text"},e.title),o.a.createElement("span",{className:"mdc-list-item__secondary-text"},"atoms: ",e.atoms,", bonds: ",e.bonds)))}))))}!function(e){e[e.Spacefill=0]="Spacefill",e[e.BallAndStick=1]="BallAndStick",e[e.SpacefillInstanced=2]="SpacefillInstanced",e[e.BallAndStickInstanced=3]="BallAndStickInstanced"}(k||(k={})),function(e){e[e.Spacefill=0]="Spacefill",e[e.BallAndStick=1]="BallAndStick",e[e.SpacefillInstanced=2]="SpacefillInstanced",e[e.BallAndStickInstanced=3]="BallAndStickInstanced"}(f||(f={}));var g,B=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state=void 0,n.navigationList=void 0,n.representationList=void 0,n.closeAll=function(e){n.setState({isNavDrawerOpen:!1,isMoreMenuOpened:!1})},n.onAppToolbarDrawerBtnClicked=function(e){n.setState(function(e){return{isNavDrawerOpen:!e.isNavDrawerOpen}})},n.onAppBarMoreMenuClicked=function(e){n.setState(function(e){return{isMoreMenuOpened:!e.isMoreMenuOpened}})},n.onDrawerListItemClicked=function(e){var t=e.currentTarget,a=parseInt(t.dataset.key,10),i=n.state.activatedMolecule;if(n.setState({isNavDrawerOpen:!1,activatedMolecule:a}),a!==i){var o=n.navigationList[a].link;n.openPDBMolecule(o)}},n.onAppBarMenuListItemClicked=function(e){var t=e.currentTarget,a=parseInt(t.dataset.representation,10);n.setState({isMoreMenuOpened:!1,activedRepresentation:a})},n.state={isNavDrawerOpen:!1,isMoreMenuOpened:!1,activedRepresentation:f.BallAndStickInstanced,activatedMolecule:0},n.representationList=[{title:"Spacefill (slow batch rendering)"},{title:"Ball and Stick (slow batch rendering)"},{title:"Spacefill (fast instanced rendering)"},{title:"Ball and Stick (fast instances rendering)"}],n.navigationList=[{title:"Insulin",link:"4ins.pdb1",atoms:484,bonds:411},{title:"Benzene",link:"mol_benzene.mol",atoms:12,bonds:12},{title:"Caffeine",link:"mol_caffeine.mol",atoms:24,bonds:25},{title:"Cyclohexane",link:"mol_cyclohexane.mol",atoms:18,bonds:18},{title:"DDT",link:"mol_ddt.mol",atoms:28,bonds:29},{title:"Methane",link:"mol_methane.mol",atoms:5,bonds:4},{title:"Morphine",link:"mol_morphine.mol",atoms:40,bonds:44},{title:"Oxylate",link:"mol_oxylate.mol",atoms:74,bonds:79},{title:"Myoglobin",link:"1mbo.pdb1",atoms:1601,bonds:1245},{title:"Hemoglobin",link:"4hhb.pdb1",atoms:4779,bonds:4044},{title:"DNA",link:"1bna.pdb1",atoms:566,bonds:544},{title:"Transfer RNA",link:"4tra.pdb1",atoms:1779,bonds:1476},{title:"Lysozyme",link:"2lyz.pdb1",atoms:1102,bonds:1021},{title:"Porin",link:"2por.pdb1",atoms:2580,bonds:2258},{title:"Green Florousent Protein",link:"1gfl.pdb1",atoms:3950,bonds:3738},{title:"Antobody",link:"1igt.pdb1",atoms:12956,bonds:12794},{title:"Chaperones",link:"1aon.pdb1",atoms:58870,bonds:59087}],n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"openPDBMolecule",value:function(e){var t="./pdb/"+e.toLocaleLowerCase();fetch(t).then(function(e){return e.text()}).then(function(e){var n;if(t.endsWith(".mol"))n=_.readMOL(e,1);else{var i=new _.io.PDBInterpreter;i.deduceResidueBonds=!0,n=i.read(e,1)}var o=(new _.io.JSONInterpreter).molTo(n);!function(e){var t=a.lengthBytesUTF8(e),n=a._malloc(t+1);a.stringToUTF8(e,n,t+1),a._molphene_application_open_pdb_data(n)}(JSON.stringify(o)),b()}).catch(function(e){b(),console.error(e)})}},{key:"componentDidMount",value:function(){a._molphene_application_setup(),v(),h(this.state.activedRepresentation);var e=Math.abs(this.state.activatedMolecule),t=this.navigationList.length>e?e:0,n=this.navigationList[t].link;this.openPDBMolecule(n)}},{key:"componentDidUpdate",value:function(){h(this.state.activedRepresentation),b()}},{key:"render",value:function(){return i.createElement(i.Fragment,null,i.createElement(M,{onAppToolbarDrawerBtnClicked:this.onAppToolbarDrawerBtnClicked,onAppBarMoreMenuClicked:this.onAppBarMoreMenuClicked,isMoreMenuOpened:this.state.isMoreMenuOpened,representationList:this.representationList,activedRepresentation:this.state.activedRepresentation,onAppBarMenuListItemClicked:this.onAppBarMenuListItemClicked}),i.createElement(w,{isNavDrawerOpen:this.state.isNavDrawerOpen,navigationList:this.navigationList,activatedMolecule:this.state.activatedMolecule,onDrawerListItemClicked:this.onDrawerListItemClicked}),i.createElement("div",{className:"fill-height",onClick:this.closeAll},i.createElement("canvas",{ref:"canvas",id:"canvas"})))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g=function(e){window.addEventListener("resize",function(e){v(),b()},!1),s.a.render(o.a.createElement(B,null),document.getElementById("root"))},a||(a=u()),a.then(g),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.7425c7f9.chunk.js.map