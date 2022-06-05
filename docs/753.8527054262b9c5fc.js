"use strict";(self.webpackChunknasaMarsRoverPhotos=self.webpackChunknasaMarsRoverPhotos||[]).push([[753],{9753:(B,v,r)=>{r.r(v),r.d(v,{DashboardModule:()=>Q});var g=r(9291),i=r(2991),t=r(5e3),_=r(5620),h=r(1125),c=r(9808),m=r(4004),l=r(8492);class s{static getRoverValueFromStore(a,e,n){return a.select(e).pipe((0,m.U)(d=>d.get(n)))}}var f=r(3251),Z=r(5245),b=r(355),p=r(9224),P=r(4834),u=r(4623),C=r(508),T=r(7423);function L(o,a){if(1&o&&(t.TgZ(0,"mat-list-item")(1,"mat-icon",7),t._uU(2,"photo_camera"),t.qZA(),t.TgZ(3,"div",8)(4,"strong"),t._uU(5),t.qZA()(),t.TgZ(6,"div",8),t._uU(7),t.qZA()()),2&o){const e=a.$implicit;t.xp6(5),t.Oqu(e.camera),t.xp6(2),t.Oqu(e.description)}}function y(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){const x=t.CHM(e).$implicit,A=t.oxw();return A.viewCameraPhotos(A.data.sol,x)}),t._uU(1),t.qZA()}if(2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e," ")}}let R=(()=>{class o{constructor(e){this.router=e}viewCameraPhotos(e,n){this.router.navigate(["details",this.code,e,n])}viewRoverPhotos(e){this.router.navigate(["details",this.code,e])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-rover-photos"]],inputs:{data:"data",code:"code"},decls:19,vars:10,consts:[[1,"mat-elevation-z4"],["mat-card-avatar","",1,"rover-avatar"],["inset",""],["mat-header",""],[4,"ngFor","ngForOf"],["mat-button","","color","primary",3,"click",4,"ngFor","ngForOf"],["mat-button","","color","primary",3,"click"],["mat-list-icon",""],["mat-line",""]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header"),t._UZ(2,"div",1),t.TgZ(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.ALo(7,"date"),t.qZA()(),t._UZ(8,"mat-divider",2),t.TgZ(9,"mat-card-content")(10,"mat-list")(11,"div",3),t._uU(12,"Cameras"),t.qZA(),t.YNc(13,L,8,2,"mat-list-item",4),t.qZA()(),t._UZ(14,"mat-divider",2),t.TgZ(15,"mat-card-actions"),t.YNc(16,y,2,1,"button",5),t.TgZ(17,"button",6),t.NdJ("click",function(){return n.viewRoverPhotos(n.data.sol)}),t._uU(18," ALL "),t.qZA()()()),2&e&&(t.xp6(2),t.Udp("background-image","url('assets/avatar/"+n.code+".png')"),t.xp6(2),t.hij("",n.data.total_photos," photos"),t.xp6(2),t.AsE("",n.data.sol,": ",t.xi3(7,7,n.data.earth_date,"fullDate"),""),t.xp6(7),t.Q6J("ngForOf",n.data.camerasInfo),t.xp6(3),t.Q6J("ngForOf",n.data.cameras))},directives:[p.a8,p.dk,p.kc,p.n5,p.$j,P.d,p.dn,u.i$,c.sg,u.Tg,Z.Hw,u.Nh,C.X2,p.hq,T.lW],pipes:[c.uU],styles:[".rover-avatar[_ngcontent-%COMP%]{background-size:cover}.mat-card-actions[_ngcontent-%COMP%]{padding-left:.75rem!important;padding-right:.75rem!important}.mat-button[_ngcontent-%COMP%]{margin-bottom:.5rem!important}"],changeDetection:0}),o})();var U=r(6553),M=r(1303);function F(o,a){if(1&o&&(t.TgZ(0,"div",8)(1,"div",9)(2,"mat-icon",24),t._uU(3,"photo_camera"),t.qZA()(),t.TgZ(4,"div",11)(5,"strong"),t._uU(6),t.qZA(),t._uU(7),t.qZA()()),2&o){const e=a.$implicit;t.xp6(6),t.Oqu(e.camera),t.xp6(1),t.hij(": ",e.description,"")}}function O(o,a){if(1&o&&(t.TgZ(0,"div",31),t._UZ(1,"app-rover-photos",32),t.qZA()),2&o){const e=a.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("data",e)("code",n.code)}}function q(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"mat-tab-group",6),t.NdJ("selectedIndexChange",function(d){return t.CHM(e),t.oxw().changeSelectedTab(d)}),t.ALo(2,"async"),t.TgZ(3,"mat-tab",7)(4,"div",8)(5,"div",9)(6,"mat-icon",10),t._uU(7,"calendar_month"),t.qZA()(),t.TgZ(8,"div",11),t._uU(9),t.ALo(10,"date"),t.ALo(11,"async"),t.qZA()()(),t.TgZ(12,"mat-tab",12)(13,"div",8)(14,"div",9)(15,"mat-icon",13),t._uU(16,"calendar_month"),t.qZA()(),t.TgZ(17,"div",11),t._uU(18),t.ALo(19,"date"),t.ALo(20,"async"),t.qZA()()(),t.TgZ(21,"mat-tab",14)(22,"div",8)(23,"div",9)(24,"mat-icon",15),t._uU(25,"calendar_month"),t.qZA()(),t.TgZ(26,"div",11),t._uU(27),t.ALo(28,"date"),t.ALo(29,"async"),t.qZA()(),t.TgZ(30,"div"),t._uU(31,"The most recent Earth date from which photos exist"),t.qZA(),t.TgZ(32,"div")(33,"small"),t._uU(34,"(Description from "),t.TgZ(35,"a",16),t._uU(36,"https://api.nasa.gov"),t.qZA(),t._uU(37,")"),t.qZA()()(),t.TgZ(38,"mat-tab",17)(39,"div",8)(40,"div",9)(41,"mat-icon",18),t._uU(42,"calendar_month"),t.qZA()(),t.TgZ(43,"div",11),t._uU(44),t.ALo(45,"number"),t.ALo(46,"async"),t.qZA()(),t.TgZ(47,"div"),t._uU(48,"The most recent Martian sol from which photos exist"),t.qZA(),t.TgZ(49,"div")(50,"small"),t._uU(51,"(Description from "),t.TgZ(52,"a",16),t._uU(53,"https://api.nasa.gov"),t.qZA(),t._uU(54,")"),t.qZA()()(),t.TgZ(55,"mat-tab",19)(56,"div",8)(57,"div",9)(58,"mat-icon",20),t._uU(59,"monitor_heart"),t.qZA()(),t.TgZ(60,"div",11),t._uU(61),t.ALo(62,"uppercase"),t.ALo(63,"async"),t.qZA()()(),t.TgZ(64,"mat-tab",21),t.YNc(65,F,8,2,"div",22),t.ALo(66,"async"),t.qZA(),t.TgZ(67,"mat-tab",23)(68,"div",8)(69,"div",9)(70,"mat-icon",24),t._uU(71,"photo_library"),t.qZA()(),t.TgZ(72,"div",11),t._uU(73),t.ALo(74,"number"),t.ALo(75,"async"),t.qZA()()(),t.TgZ(76,"mat-tab",25)(77,"div",26)(78,"div",27)(79,"strong"),t._uU(80,"Note:"),t.qZA(),t._uU(81," You can see the photos for only a camera by clicking in the button with their name in the card actions section, or see all of them by clicking the ALL button. "),t.qZA(),t._UZ(82,"app-paginator",28),t.ALo(83,"async"),t.ALo(84,"async"),t.ALo(85,"async"),t.ALo(86,"async"),t.qZA(),t.TgZ(87,"div",29),t.YNc(88,O,2,2,"div",30),t.ALo(89,"async"),t.qZA(),t._UZ(90,"app-paginator",28),t.ALo(91,"async"),t.ALo(92,"async"),t.ALo(93,"async"),t.ALo(94,"async"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("selectedIndex",t.lcZ(2,29,e.selectedIndex)),t.xp6(8),t.Oqu(t.xi3(10,31,t.lcZ(11,34,e.launchDate),"fullDate")),t.xp6(9),t.Oqu(t.xi3(19,36,t.lcZ(20,39,e.landingDate),"fullDate")),t.xp6(9),t.Oqu(t.xi3(28,41,t.lcZ(29,44,e.maxDate),"fullDate")),t.xp6(17),t.Oqu(t.xi3(45,46,t.lcZ(46,49,e.maxSol),"0.0-0")),t.xp6(17),t.Oqu(t.lcZ(62,51,t.lcZ(63,53,e.status))),t.xp6(4),t.Q6J("ngForOf",t.lcZ(66,55,e.camerasList)),t.xp6(8),t.Oqu(t.xi3(74,57,t.lcZ(75,60,e.totalPhotos),"0.0-0")),t.xp6(9),t.Q6J("store",e.storeRef)("actionFirst",e.firstPageAction)("actionPrevious",e.previousPageAction)("actionNext",e.nextPageAction)("actionLast",e.lastPageAction)("currentPage",t.lcZ(83,62,e.currentPage))("lastPage",t.lcZ(84,64,e.lastPage))("enabledPrevious",t.lcZ(85,66,e.previousButtonEnabled))("enabledNext",t.lcZ(86,68,e.nextButtonEnabled))("useButtons",!0),t.xp6(6),t.Q6J("ngForOf",t.lcZ(89,70,e.photosList)),t.xp6(2),t.Q6J("store",e.storeRef)("actionFirst",e.firstPageAction)("actionPrevious",e.previousPageAction)("actionNext",e.nextPageAction)("actionLast",e.lastPageAction)("currentPage",t.lcZ(91,72,e.currentPage))("lastPage",t.lcZ(92,74,e.lastPage))("enabledPrevious",t.lcZ(93,76,e.previousButtonEnabled))("enabledNext",t.lcZ(94,78,e.nextButtonEnabled))("useButtons",!0)}}function D(o,a){if(1&o&&t._UZ(0,"app-loader",34),2&o){const e=t.oxw(2);t.Q6J("store",e.storeRef)("action",e.loadAction)}}function S(o,a){if(1&o&&(t.YNc(0,D,1,2,"app-loader",33),t.ALo(1,"async"),t.ALo(2,"async"),t.ALo(3,"async"),t.ALo(4,"async")),2&o){const e=t.oxw();t.Q6J("ngIf",t.lcZ(1,1,e.isExpanded)&&t.lcZ(2,3,e.noManifestLoading)&&!t.lcZ(3,5,e.isLoadingManifest)&&!t.lcZ(4,7,e.isLoadedManifest))}}function J(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"app-error-dialog-launcher",35),t.NdJ("onClose",function(){return t.CHM(e),t.oxw().closeErrorModal()}),t.ALo(1,"async"),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("errorData",t.lcZ(1,1,e.errorLoadingManifestData))}}let E=(()=>{class o{constructor(e){this.store=e}get storeRef(){return this.store}ngOnInit(){this.setActions(),this.setSubscriptions()}afterExpand(){this.store.dispatch(l.qs({rover:this.code}))}afterCollapse(){this.store.dispatch(l.Cr({rover:this.code}))}changeSelectedTab(e){this.store.dispatch(l.gT({rover:this.code,tab:e}))}closeErrorModal(){this.store.dispatch(l.Cr({rover:this.code})),this.store.dispatch(l.dP({rover:this.code})),this.store.dispatch(l.Kb({rover:this.code}))}setSubscriptions(){this.noManifestLoading=this.store.select(i._v),this.selectedIndex=s.getRoverValueFromStore(this.store,i.w_,this.code),this.isExpanded=s.getRoverValueFromStore(this.store,i.jQ,this.code),this.hasManifest=s.getRoverValueFromStore(this.store,i.Kr,this.code),this.isLoadingManifest=s.getRoverValueFromStore(this.store,i.wz,this.code),this.isLoadedManifest=s.getRoverValueFromStore(this.store,i.gw,this.code),this.isErrorLoadingManifest=s.getRoverValueFromStore(this.store,i.lz,this.code),this.errorLoadingManifestData=s.getRoverValueFromStore(this.store,i.dc,this.code),this.launchDate=s.getRoverValueFromStore(this.store,i.sf,this.code),this.landingDate=s.getRoverValueFromStore(this.store,i.vZ,this.code),this.maxDate=s.getRoverValueFromStore(this.store,i.nG,this.code),this.maxSol=s.getRoverValueFromStore(this.store,i.UC,this.code),this.totalPhotos=s.getRoverValueFromStore(this.store,i.LX,this.code),this.photosList=s.getRoverValueFromStore(this.store,i.yK,this.code),this.status=s.getRoverValueFromStore(this.store,i.lR,this.code),this.camerasList=s.getRoverValueFromStore(this.store,i.oc,this.code),this.currentPage=s.getRoverValueFromStore(this.store,i.Lx,this.code).pipe((0,m.U)(e=>null!=e?e:1)),this.previousButtonEnabled=s.getRoverValueFromStore(this.store,i.Jc,this.code).pipe((0,m.U)(e=>null!=e&&e)),this.nextButtonEnabled=s.getRoverValueFromStore(this.store,i.V3,this.code).pipe((0,m.U)(e=>null!=e&&e)),this.lastPage=s.getRoverValueFromStore(this.store,i.gZ,this.code).pipe((0,m.U)(e=>null!=e?e:1))}setActions(){this.loadAction=l.V8({rover:this.code}),this.firstPageAction=l.JE({rover:this.code}),this.previousPageAction=l.mB({rover:this.code}),this.nextPageAction=l.mQ({rover:this.code}),this.lastPageAction=l.xj({rover:this.code})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-rover-panel"]],inputs:{code:"code"},decls:15,vars:15,consts:[[3,"expanded","afterExpand","afterCollapse"],[1,"title-bar__wrapper"],[1,"title-bar__avatar"],[4,"ngIf","ngIfElse"],["noManifest",""],[3,"errorData","onClose",4,"ngIf"],["mat-align-tabs","start","animationDuration","0ms",3,"selectedIndex","selectedIndexChange"],["label","Launching date"],[1,"data-box__wrapper","mat-elevation-z4"],[1,"data-box__icon"],["aria-hidden","false","aria-label","Launch date icon"],[1,"data-box__value"],["label","Landing date"],["aria-hidden","false","aria-label","Landing date icon"],["label","Maxim photo date"],["aria-hidden","false","aria-label","Maxim photo date icon"],["href","https://api.nasa.gov/","target","_blank"],["label","Maxim sol"],["aria-hidden","false","aria-label","Maxim sol icon"],["label","Status"],["aria-hidden","false","aria-label","Status icon"],["label","Cameras"],["class","data-box__wrapper mat-elevation-z4",4,"ngFor","ngForOf"],["label","Total photos"],["aria-hidden","false","aria-label","Total photos icon"],["label","Photos list"],[1,"data-box__list-header"],[1,"p-1"],[3,"store","actionFirst","actionPrevious","actionNext","actionLast","currentPage","lastPage","enabledPrevious","enabledNext","useButtons"],[1,"list-photo-info__wrapper"],["class","list-photo-info__item",4,"ngFor","ngForOf"],[1,"list-photo-info__item"],[3,"data","code"],[3,"store","action",4,"ngIf"],[3,"store","action"],[3,"errorData","onClose"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-expansion-panel",0),t.NdJ("afterExpand",function(){return n.afterExpand()})("afterCollapse",function(){return n.afterCollapse()}),t.ALo(1,"async"),t.TgZ(2,"mat-expansion-panel-header")(3,"mat-panel-title")(4,"div",1),t._UZ(5,"div",2),t.TgZ(6,"span"),t._uU(7),t.ALo(8,"titlecase"),t.qZA()()()(),t.YNc(9,q,95,80,"div",3),t.ALo(10,"async"),t.YNc(11,S,5,9,"ng-template",null,4,t.W1O),t.qZA(),t.YNc(13,J,2,3,"app-error-dialog-launcher",5),t.ALo(14,"async")),2&e){const d=t.MAs(12);t.Q6J("expanded",t.lcZ(1,7,n.isExpanded)),t.xp6(5),t.Udp("background-image","url('assets/avatar/"+n.code+".png')"),t.xp6(2),t.Oqu(t.lcZ(8,9,n.code)),t.xp6(2),t.Q6J("ngIf",t.lcZ(10,11,n.hasManifest))("ngIfElse",d),t.xp6(4),t.Q6J("ngIf",t.lcZ(14,13,n.isErrorLoadingManifest))}},directives:[h.ib,h.yz,h.yK,c.O5,f.SP,f.uX,Z.Hw,c.sg,b.J,R,U.R,M.x],pipes:[c.Ov,c.rS,c.uU,c.JJ,c.gd],styles:[".mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:1rem}a[_ngcontent-%COMP%]{text-decoration:none;font-weight:700;color:#000}.title-bar__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.title-bar__avatar[_ngcontent-%COMP%]{width:2rem;height:2rem;border-radius:50%;margin-right:1rem;background-size:cover}.data-box__wrapper[_ngcontent-%COMP%]{margin:1rem;overflow:hidden;border-radius:.25rem;display:inline-flex;align-items:center;justify-content:flex-start}.data-box__icon[_ngcontent-%COMP%]{display:flex;background-color:#d8d8d8}.data-box__icon[_ngcontent-%COMP%], .data-box__value[_ngcontent-%COMP%]{padding:.35rem .75rem .5rem}.data-box__value[_ngcontent-%COMP%]{padding-bottom:.25rem}.data-box__list-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.data-box__list-header[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1 1}.list-photo-info__wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:25% 25% 25% 25%;grid-template-rows:auto}@media only screen and (max-width: 600px){.list-photo-info__wrapper[_ngcontent-%COMP%]{grid-template-columns:100%}}.list-photo-info__item[_ngcontent-%COMP%]{padding:.5rem}"],changeDetection:0}),o})();function N(o,a){1&o&&t._UZ(0,"app-rover-panel",3),2&o&&t.Q6J("code",a.$implicit)}const V=[{path:"",component:(()=>{class o{constructor(e){this.store=e}ngOnInit(){this.codes=this.store.select(i.gq)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],decls:4,vars:4,consts:[[1,"p-1"],[3,"multi"],[3,"code",4,"ngFor","ngForOf"],[3,"code"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"mat-accordion",1),t.YNc(2,N,1,1,"app-rover-panel",2),t.ALo(3,"async"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("multi",!0),t.xp6(1),t.Q6J("ngForOf",t.lcZ(3,2,n.codes)))},directives:[h.pp,c.sg,E],pipes:[c.Ov],encapsulation:2,changeDetection:0}),o})()}];let w=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.Bz.forChild(V)],g.Bz]}),o})();var I=r(2271);let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[I.m,w]]}),o})()}}]);