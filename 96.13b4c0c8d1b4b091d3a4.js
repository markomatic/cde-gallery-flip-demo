(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{YUkv:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=function(){},i=function(){},a=[{url:"./assets/images/1.jpg",width:1e3,height:498},{url:"./assets/images/2.jpg",width:1e3,height:563},{url:"./assets/images/3.jpg",width:1e3,height:625},{url:"./assets/images/4.jpg",width:1e3,height:563},{url:"./assets/images/5.jpg",width:1e3,height:563},{url:"./assets/images/6.jpg",width:1e3,height:563},{url:"./assets/images/7.jpg",width:1e3,height:667},{url:"./assets/images/8.jpg",width:1e3,height:667},{url:"./assets/images/9.jpg",width:1e3,height:563},{url:"./assets/images/10.jpg",width:1e3,height:667}],r=function(){return function(){this.images=a}}(),s=function(){},o=function(){return function(){this.list=[];for(var l=function(){return a[Math.floor(Math.random()*a.length)]},n=1;n<5;n++)this.list.push({images:[l(),l(),l(),l()]})}}(),c=function(){},p=e("pMnS"),h=e("ntG5"),d=e("UT9D"),m=e("ZYCi"),f=e("WmJ3"),g=e("95zI"),b=e("fHOL"),v=e("tXrQ"),k=t.Ia({encapsulation:2,styles:[],data:{}});function x(l){return t.Va(0,[(l()(),t.Ka(0,0,null,null,12,"ion-tabs",[],null,[[null,"ionTabbarClick"]],function(l,n,e){var u=!0;return"ionTabbarClick"===n&&(u=!1!==t.Ra(l,2).onTabbarClick(e)&&u),u},null,null)),t.Ja(1,16384,null,0,h.Qa,[t.k],null,null),t.Ja(2,16384,null,0,d.a,[[2,m.l],t.k],null,null),(l()(),t.Ka(3,16777216,null,null,4,"ion-tab",[["href","/tabs/(demo1:demo1)"],["icon","ios-albums"],["label","Header"]],null,[[null,"ionRouterOutletActivated"]],function(l,n,e){var u=!0;return"ionRouterOutletActivated"===n&&(u=!1!==t.Ra(l,5).onNavChanged(e)&&u),u},null,null)),t.Ja(4,16384,null,0,h.Pa,[t.k],{label:[0,"label"],href:[1,"href"],icon:[2,"icon"]},null),t.Ja(5,16384,null,0,f.a,[t.k,t.j,t.p,g.a,t.M],null,null),(l()(),t.Ka(6,16777216,null,null,1,"ion-router-outlet",[["name","demo1"]],null,null,null,null,null)),t.Ja(7,212992,null,0,b.a,[m.b,t.M,t.j,t.k,[8,"demo1"],[8,null],t.h,v.a,m.l],null,null),(l()(),t.Ka(8,16777216,null,null,4,"ion-tab",[["href","/tabs/(demo2:demo2)"],["icon","md-apps"],["label","List"]],null,[[null,"ionRouterOutletActivated"]],function(l,n,e){var u=!0;return"ionRouterOutletActivated"===n&&(u=!1!==t.Ra(l,10).onNavChanged(e)&&u),u},null,null)),t.Ja(9,16384,null,0,h.Pa,[t.k],{label:[0,"label"],href:[1,"href"],icon:[2,"icon"]},null),t.Ja(10,16384,null,0,f.a,[t.k,t.j,t.p,g.a,t.M],null,null),(l()(),t.Ka(11,16777216,null,null,1,"ion-router-outlet",[["name","demo2"]],null,null,null,null,null)),t.Ja(12,212992,null,0,b.a,[m.b,t.M,t.j,t.k,[8,"demo2"],[8,null],t.h,v.a,m.l],null,null)],function(l,n){l(n,4,0,"Header","/tabs/(demo1:demo1)","ios-albums"),l(n,7,0),l(n,9,0,"List","/tabs/(demo2:demo2)","md-apps"),l(n,12,0)},null)}var y=t.Ga("page-tabs",u,function(l){return t.Va(0,[(l()(),t.Ka(0,0,null,null,1,"page-tabs",[],null,null,null,x,k)),t.Ja(1,49152,null,0,u,[],null,null)],null,null)},{},{},[]),K=[],M=function(){K[0]&&(K.forEach(function(l){return l.checkResize()}),requestAnimationFrame(M))},J=function(){function l(l,n){this.elementRef=l,this.renderer=n,this.previousElementWidth=0,this.previousElementHeight=0,this.images=[],this.blockMaxWidth=50,this.blockMaxHeight=50,this.flipSpeed=30,this.waitTime=2e3}return Object.defineProperty(l.prototype,"element",{get:function(){return this.elementRef.nativeElement},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"contentElement",{get:function(){return this.contentElementRef.nativeElement},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"elementWidth",{get:function(){return this.element.offsetWidth},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"elementHeight",{get:function(){return this.element.offsetHeight},enumerable:!0,configurable:!0}),l.prototype.ngAfterViewInit=function(){K.push(this),!K[1]&&requestAnimationFrame(M)},l.prototype.ngOnChanges=function(l){if(this.blocks){var n=["images","blockMaxWidth","blockMaxHeight","flipSpeed"];for(var e in l)if(-1!==n.indexOf(e))return this.initialize(),void this.play()}},l.prototype.ngOnDestroy=function(){var l;(l=K.indexOf(this))>-1&&K.splice(l,1)},l.prototype.checkResize=function(){this.previousElementWidth===this.elementWidth&&this.previousElementHeight===this.elementHeight||(this.previousElementWidth=this.elementWidth,this.previousElementHeight=this.elementHeight,this.initialize(),this.play())},l.prototype.play=function(){var l=this;this.nextFlipSubscription=setTimeout(function(){l.nextFlipSubscription=null,l.flipToNext()},this.waitTime)},l.prototype.flipToNext=function(){this.isFlipping||(this.isFlipping=!0,this.flipped?(this.setupFront(),this.backIndex=(this.backIndex+2)%this.images.length):(this.setupBack(),this.frontIndex=(this.frontIndex+2)%this.images.length),this.flipped=!this.flipped,this.flip(0))},l.prototype.flip=function(l){var n=this,e=this.blocks.length;if(l===e)return this.isFlipping=!1,void(this.nextFlipSubscription=e&&setTimeout(function(){n.nextFlipSubscription=null,n.flipToNext()},this.waitTime));setTimeout(function(){n.isFlipping&&(n.flipped?n.renderer.addClass(n.blocks[l].element,"flipped"):n.renderer.removeClass(n.blocks[l].element,"flipped"),n.flip(++l))},this.flipSpeed)},l.prototype.initialize=function(){var l=this;this.frontIndex=0,this.backIndex=1,this.isFlipping=!1,this.flipped=!1,this.nextFlipSubscription&&clearTimeout(this.nextFlipSubscription),this.nextFlipSubscription=null;var n=q(this.elementWidth,this.blockMaxWidth),e=q(this.elementHeight,this.blockMaxHeight);this.blocks&&this.blocks.forEach(function(n){return l.renderer.removeChild(l.contentElement,n.element)}),this.blocks=[];for(var t=0;t<this.elementHeight;t+=e)for(var u=0;u<this.elementWidth;u+=n){var i=this.renderer.createElement("div");this.renderer.appendChild(this.contentElement,i),this.blocks.push({element:i,leftOffset:u,topOffset:t}),this.renderer.setStyle(i,"width",n+"px"),this.renderer.setStyle(i,"height",e+"px"),this.renderer.setStyle(i,"top",t+"px"),this.renderer.setStyle(i,"left",u+"px");var a=this.renderer.createElement("div");this.renderer.appendChild(i,a),this.renderer.addClass(a,"front");var r=this.renderer.createElement("div");this.renderer.appendChild(i,r),this.renderer.addClass(r,"back")}this.setupFront()},l.prototype.setupFront=function(){this.setupFaceImage(0,this.images[this.frontIndex])},l.prototype.setupBack=function(){this.setupFaceImage(1,this.images[this.backIndex])},l.prototype.setupFaceImage=function(l,n){var e=this,t=n.width,u=n.height,i=Math.max(this.elementWidth/t,this.elementHeight/u);t=Math.floor(t*i),u=Math.floor(u*i);var a=Math.floor(this.elementWidth/2-t/2),r=Math.floor(this.elementHeight/2-u/2);this.blocks.forEach(function(i){var s=i.element.children[l];e.renderer.setStyle(s,"backgroundImage","url("+n.url+")"),e.renderer.setStyle(s,"backgroundSize",t+1+"px "+(u+1)+"px"),e.renderer.setStyle(s,"backgroundPosition",a-i.leftOffset+"px "+(r-i.topOffset)+"px"),e.renderer.setStyle(s,"background-repeat","no-repeat")})},l}(),q=function(l,n){return l%n==0?n:Math.ceil(l/(l/n))},E=t.Ia({encapsulation:2,styles:[],data:{}});function w(l){return t.Va(0,[t.Sa(402653184,1,{contentElementRef:0}),(l()(),t.Ka(1,0,[[1,0],["contentElement",1]],null,0,"div",[],null,null,null,null,null))],null,null)}var j=t.Ia({encapsulation:2,styles:[],data:{}});function F(l){return t.Va(0,[(l()(),t.Ka(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),t.Ja(1,16384,null,0,h.w,[t.k],null,null),(l()(),t.Ka(2,0,null,null,8,"ion-toolbar",[],null,null,null,null,null)),t.Ja(3,16384,null,0,h.Va,[t.k],null,null),(l()(),t.Ka(4,0,null,null,3,"ion-buttons",[["slot","start"]],null,null,null,null,null)),t.Ja(5,16384,null,0,h.f,[],null,null),(l()(),t.Ka(6,0,null,null,1,"ion-menu-button",[],null,null,null,null,null)),t.Ja(7,16384,null,0,h.M,[t.k],null,null),(l()(),t.Ka(8,0,null,null,2,"ion-title",[],null,null,null,null,null)),t.Ja(9,16384,null,0,h.Wa,[t.k],null,null),(l()(),t.Ua(-1,null,[" Header "])),(l()(),t.Ka(11,0,null,null,1,"cde-gallery-flip",[],null,null,null,w,E)),t.Ja(12,4898816,null,0,J,[t.k,t.B],{images:[0,"images"]},null),(l()(),t.Ka(13,0,null,null,17,"ion-content",[],null,null,null,null,null)),t.Ja(14,16384,null,0,h.p,[t.k],null,null),(l()(),t.Ka(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ua(-1,null,["Lorem ipsum dolor sit amet, ea partem aperiam eos, congue ornatus conceptam mei in. Ut tibique probatus quo, an tempor perfecto has, qui inani vivendo scribentur at. Vix no mucius pericula. Alterum argumentum cum id, vel ex alii graeci. Blandit consetetur conclusionemque ei vix, laoreet gubergren prodesset at nam."])),(l()(),t.Ka(17,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ua(-1,null,["Pri no invidunt referrentur vituperatoribus, modus antiopam nec et. Mei integre vivendum consequuntur ut, sumo dicant graecis est no, ad mea modo brute numquam. Mea an justo liber delenit, apeirian liberavisse signiferumque ad nam. Ei diam ridens vis, vim eu quodsi ullamcorper. Populo accusam senserit cu pro."])),(l()(),t.Ka(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ua(-1,null,["Labore bonorum vituperatoribus vis ea, labore delenit ad mei. Vel at bonorum evertitur. Illud facilisi quo an. Te copiosae invidunt omittantur pri, numquam consulatu vis et. Mei harum nemore feugiat cu, audiam delicata voluptaria nec in."])),(l()(),t.Ka(21,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ua(-1,null,["Ex pro summo sanctus rationibus. Ut vis nibh quodsi ceteros. Numquam eruditi commune ne vel, erat delicatissimi ex eos. Cum fuisset detraxit percipitur ad. Error aperiam sea in, no invenire efficiendi nec."])),(l()(),t.Ka(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ua(-1,null,["Etiam ludus quaerendum ius an, nec persius officiis referrentur no, te quis tantas nullam nec. Nec ad putant deleniti. At sea salutandi vulputate eloquentiam, has clita expetendis necessitatibus ex. Everti accusamus at usu, per et quidam electram. Ne vix dicta scaevola, has dicat verterem at, ad mel verear facilis interpretaris. An explicari iracundia neglegentur sea, sed cu quot neglegentur."])),(l()(),t.Ka(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ua(-1,null,["Labore bonorum vituperatoribus vis ea, labore delenit ad mei. Vel at bonorum evertitur. Illud facilisi quo an. Te copiosae invidunt omittantur pri, numquam consulatu vis et. Mei harum nemore feugiat cu, audiam delicata voluptaria nec in."])),(l()(),t.Ka(27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ua(-1,null,["Ex pro summo sanctus rationibus. Ut vis nibh quodsi ceteros. Numquam eruditi commune ne vel, erat delicatissimi ex eos. Cum fuisset detraxit percipitur ad. Error aperiam sea in, no invenire efficiendi nec."])),(l()(),t.Ka(29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ua(-1,null,["Etiam ludus quaerendum ius an, nec persius officiis referrentur no, te quis tantas nullam nec. Nec ad putant deleniti. At sea salutandi vulputate eloquentiam, has clita expetendis necessitatibus ex. Everti accusamus at usu, per et quidam electram. Ne vix dicta scaevola, has dicat verterem at, ad mel verear facilis interpretaris. An explicari iracundia neglegentur sea, sed cu quot neglegentur."]))],function(l,n){l(n,12,0,n.component.images)},null)}var S=t.Ga("page-demo1",r,function(l){return t.Va(0,[(l()(),t.Ka(0,0,null,null,1,"page-demo1",[],null,null,null,F,j)),t.Ja(1,49152,null,0,r,[],null,null)],null,null)},{},{},[]),H=e("Ip0R"),I=t.Ia({encapsulation:2,styles:[],data:{}});function T(l){return t.Va(0,[(l()(),t.Ka(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.Ka(1,0,null,null,1,"cde-gallery-flip",[],null,null,null,w,E)),t.Ja(2,4898816,null,0,J,[t.k,t.B],{images:[0,"images"],blockMaxWidth:[1,"blockMaxWidth"],blockMaxHeight:[2,"blockMaxHeight"],flipSpeed:[3,"flipSpeed"],waitTime:[4,"waitTime"]},null)],function(l,n){l(n,2,0,n.context.$implicit.images,100,100,200,2e3)},null)}function W(l){return t.Va(0,[(l()(),t.Ka(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),t.Ja(1,16384,null,0,h.w,[t.k],null,null),(l()(),t.Ka(2,0,null,null,8,"ion-toolbar",[],null,null,null,null,null)),t.Ja(3,16384,null,0,h.Va,[t.k],null,null),(l()(),t.Ka(4,0,null,null,3,"ion-buttons",[["slot","start"]],null,null,null,null,null)),t.Ja(5,16384,null,0,h.f,[],null,null),(l()(),t.Ka(6,0,null,null,1,"ion-menu-button",[],null,null,null,null,null)),t.Ja(7,16384,null,0,h.M,[t.k],null,null),(l()(),t.Ka(8,0,null,null,2,"ion-title",[],null,null,null,null,null)),t.Ja(9,16384,null,0,h.Wa,[t.k],null,null),(l()(),t.Ua(-1,null,[" List "])),(l()(),t.Ka(11,0,null,null,4,"ion-content",[],null,null,null,null,null)),t.Ja(12,16384,null,0,h.p,[t.k],null,null),(l()(),t.Ka(13,0,null,null,2,"div",[["class","list"]],null,null,null,null,null)),(l()(),t.Ba(16777216,null,null,1,null,T)),t.Ja(15,802816,null,0,H.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,15,0,n.component.list)},null)}var O=t.Ga("page-demo2",o,function(l){return t.Va(0,[(l()(),t.Ka(0,0,null,null,1,"page-demo2",[],null,null,null,W,I)),t.Ja(1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),C=e("9opb"),Q=e("apKv"),U=e("B4/3"),R=function(){};e.d(n,"TabsPageModuleNgFactory",function(){return V});var V=t.Ha(c,[],function(l){return t.Pa([t.Qa(512,t.j,t.W,[[8,[p.a,y,S,O]],[3,t.j],t.v]),t.Qa(4608,H.j,H.i,[t.s,[2,H.o]]),t.Qa(4608,g.a,g.a,[t.x,t.g]),t.Qa(4608,C.a,C.a,[g.a,t.j,t.p]),t.Qa(4608,Q.a,Q.a,[g.a,t.j,t.p]),t.Qa(1073742336,H.b,H.b,[]),t.Qa(1073742336,U.a,U.a,[]),t.Qa(1073742336,R,R,[]),t.Qa(1073742336,i,i,[]),t.Qa(1073742336,s,s,[]),t.Qa(1073742336,m.m,m.m,[[2,m.s],[2,m.l]]),t.Qa(1073742336,c,c,[]),t.Qa(1024,m.j,function(){return[[{path:"",redirectTo:"/tabs/(demo1:demo1)",pathMatch:"full"},{path:"tabs",component:u,children:[{path:"demo1",outlet:"demo1",component:r},{path:"demo2",outlet:"demo2",component:o}]}]]},[])])})}}]);