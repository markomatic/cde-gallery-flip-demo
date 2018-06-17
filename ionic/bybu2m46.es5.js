/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("bybu2m46",["exports","./chunk-eaaa20ba.js","./chunk-f06b75c7.js"],function(e,t,i){var n=window.Ionic.h,o=function(){function e(){this.inputId="ion-tg-"+a++,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}return e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"toggle-disabled":this.disabled,"toggle-checked":this.checked,"toggle-activated":this.activated})},e.prototype.componentWillLoad=function(){this.ionStyle=i.deferEvent(this.ionStyle),this.emitStyle()},e.prototype.componentDidLoad=function(){var e=this.nativeInput.closest("ion-item");if(e){var t=e.querySelector("ion-label");t&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id))}},e.prototype.onDragStart=function(e){return this.pivotX=e.currentX,this.activated=!0,e.event.preventDefault(),!0},e.prototype.onDragMove=function(e){var i=e.currentX;c(this.checked,i-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=i,t.hapticSelection())},e.prototype.onDragEnd=function(e){var i=e.currentX-this.pivotX;c(this.checked,i,4)&&(this.checked=!this.checked,t.hapticSelection()),this.activated=!1,this.nativeInput.focus()},e.prototype.onChange=function(){this.checked=!this.checked},e.prototype.onKeyUp=function(){this.keyFocus=!0},e.prototype.onFocus=function(){this.ionFocus.emit()},e.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},e.prototype.hostData=function(){return{class:{"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus}}},e.prototype.render=function(){var e=this;return[n("ion-gesture",{onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),gestureName:"toggle",passive:!1,gesturePriority:30,direction:"x",threshold:0,attachTo:"parent",disabled:this.disabled,tabIndex:-1},n("div",{class:"toggle-icon"},n("div",{class:"toggle-inner"})),n("div",{class:"toggle-cover"})),n("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:function(t){return e.nativeInput=t}})]},Object.defineProperty(e,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"toggle"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-toggle{display:inline-block;contain:content;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-toggle ion-gesture{display:block;width:100%;height:100%;visibility:inherit}.toggle-cover{left:0;position:absolute;top:0;width:100%;height:100%;border:0;outline:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;background:0 0;cursor:pointer}ion-toggle input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;pointer-events:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}ion-toggle :focus{outline:0}.toggle-key input{border:2px solid #5e9ed6}.toggle-ios{-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}.toggle-ios .toggle-icon{border-radius:16px;position:relative;display:block;overflow:hidden;width:100%;height:100%;background-color:var(--ion-background-ios-color-step-50,var(--ion-background-color-step-50,#f2f2f2));-webkit-transition:background-color .3s;transition:background-color .3s;pointer-events:none}.toggle-ios .toggle-icon::before{left:2px;right:2px;top:2px;bottom:2px;border-radius:16px;position:absolute;background-color:var(--ion-item-ios-background-color,var(--ion-background-ios-color,var(--ion-background-color,#fff)));content:\"\";-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.toggle-ios .toggle-inner{left:2px;top:2px;border-radius:14px;position:absolute;width:28px;height:28px;background-color:var(--ion-item-ios-background-color,var(--ion-background-ios-color,var(--ion-background-color,#fff)));-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);-webkit-transition:width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;transition:width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms;transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;will-change:transform;contain:strict}.toggle-ios.toggle-checked .toggle-icon{background-color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.toggle-ios.toggle-activated .toggle-icon::before,.toggle-ios.toggle-checked .toggle-icon::before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.toggle-ios.toggle-checked .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0)}.toggle-ios.toggle-activated.toggle-checked .toggle-inner::before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.toggle-ios.toggle-activated .toggle-inner{width:34px}.toggle-ios.toggle-activated.toggle-checked .toggle-inner{left:-4px}.item-ios.item-toggle-disabled ion-label,.toggle-ios.toggle-disabled{opacity:.3;pointer-events:none}.item-ios .toggle-ios[slot]{margin:0;padding:6px 8px 5px 16px}.item-ios .toggle-ios[slot=start]{padding:6px 16px 5px 0}.toggle-ios-primary.toggle-checked .toggle-icon{background-color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.toggle-ios-secondary.toggle-checked .toggle-icon{background-color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8))}.toggle-ios-tertiary.toggle-checked .toggle-icon{background-color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#7044ff))}.toggle-ios-success.toggle-checked .toggle-icon{background-color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.toggle-ios-warning.toggle-checked .toggle-icon{background-color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.toggle-ios-danger.toggle-checked .toggle-icon{background-color:var(--ion-color-ios-danger,var(--ion-color-danger,#f04141))}.toggle-ios-light.toggle-checked .toggle-icon{background-color:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8))}.toggle-ios-medium.toggle-checked .toggle-icon{background-color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.toggle-ios-dark.toggle-checked .toggle-icon{background-color:var(--ion-color-ios-dark,var(--ion-color-dark,#222428))}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function c(e,t,i){var n="rtl"===document.dir;return e?!n&&i>t||n&&-i<t:!n&&-i<t||n&&i>t}var a=0;e.IonToggle=o,Object.defineProperty(e,"__esModule",{value:!0})});