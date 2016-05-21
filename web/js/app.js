/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=fee306873ae4391ce10a)
 * Config saved to config.json and https://gist.github.com/fee306873ae4391ce10a
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.5",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t(s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.5",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),t(i.target).is('input[type="radio"]')||t(i.target).is('input[type="checkbox"]')||i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function i(i){i&&3===i.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=e(o),s={relatedTarget:this};n.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(n[0],i.target)||(n.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",s))))}))}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.5",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var o=t(this);if(i.preventDefault(),i.stopPropagation(),!o.is(".disabled, :disabled")){var n=e(o),a=n.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find(".dropdown-menu"+r);if(l.length){var d=l.index(i.target);38==i.which&&d>0&&d--,40==i.which&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.5",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,d=l.test(r);d&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(d){var u=r,f=this.getPosition(this.$viewport);r="bottom"==r&&h.bottom+c>f.bottom?"top":"top"==r&&h.top-c<f.top?"bottom":"right"==r&&h.right+p>f.width?"left":"left"==r&&h.left-p<f.left?"right":r,s.removeClass(u).addClass(r)}var g=this.getCalculatedOffset(r,h,p,c);this.applyPlacement(g,r);var m=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top+=a,e.left+=r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,d=o[0].offsetHeight;"top"==i&&d!=s&&(e.top=e.top+s-d);var h=this.getViewportAdjustedDelta(i,e,l,d);h.left?e.left+=h.left:e.top+=h.top;var p=/top|bottom/.test(i),c=p?2*h.left-n+l:2*h.top-s+d,u=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][u],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},r=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,r,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var d=e.left-s,h=e.left+s+i;d<a.left?n.left=a.left-d:h>a.right&&(n.left=a.left+a.width-h)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.5",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.5",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){{var d=a("../lib/Core");a("../lib/Shim.IE8")}"undefined"!=typeof window&&(window.ForerunnerDB=d),b.exports=d},{"../lib/Core":6,"../lib/Shim.IE8":28}],2:[function(a,b,c){{var d=a("./Core");a("../lib/Persist")}"undefined"!=typeof window&&(window.ForerunnerDB=d),b.exports=d},{"../lib/Persist":25,"./Core":1}],3:[function(a,b,c){"use strict";var d=a("./Shared"),e=function(a,b,c){this.init.apply(this,arguments)};e.prototype.init=function(a,b,c,d){this._store=[],void 0!==b&&this.index(b),void 0!==c&&this.compareFunc(c),void 0!==d&&this.hashFunc(d),void 0!==a&&this.data(a)},d.addModule("BinaryTree",e),d.mixin(e.prototype,"Mixin.ChainReactor"),d.mixin(e.prototype,"Mixin.Sorting"),d.mixin(e.prototype,"Mixin.Common"),d.synthesize(e.prototype,"compareFunc"),d.synthesize(e.prototype,"hashFunc"),d.synthesize(e.prototype,"indexDir"),d.synthesize(e.prototype,"index",function(a){return void 0!==a&&(a instanceof Array||(a=this.keys(a))),this.$super.call(this,a)}),e.prototype.keys=function(a){var b,c=[];for(b in a)a.hasOwnProperty(b)&&c.push({key:b,val:a[b]});return c},e.prototype.data=function(a){return void 0!==a?(this._data=a,this._hashFunc&&(this._hash=this._hashFunc(a)),this):this._data},e.prototype.push=function(a){return void 0!==a?(this._store.push(a),this):!1},e.prototype.pull=function(a){if(void 0!==a){var b=this._store.indexOf(a);if(b>-1)return this._store.splice(b,1),!0}return!1},e.prototype._compareFunc=function(a,b){var c,d,e=0;for(c=0;c<this._index.length;c++)if(d=this._index[c],1===d.val?e=this.sortAsc(a[d.key],b[d.key]):-1===d.val&&(e=this.sortDesc(a[d.key],b[d.key])),0!==e)return e;return e},e.prototype._hashFunc=function(a){return a[this._index[0].key]},e.prototype.insert=function(a){var b,c,d,f;if(a instanceof Array){for(c=[],d=[],f=0;f<a.length;f++)this.insert(a[f])?c.push(a[f]):d.push(a[f]);return{inserted:c,failed:d}}return this._data?(b=this._compareFunc(this._data,a),0===b?(this.push(a),this._left?this._left.insert(a):this._left=new e(a,this._index,this._compareFunc,this._hashFunc),!0):-1===b?(this._right?this._right.insert(a):this._right=new e(a,this._index,this._compareFunc,this._hashFunc),!0):1===b?(this._left?this._left.insert(a):this._left=new e(a,this._index,this._compareFunc,this._hashFunc),!0):!1):(this.data(a),!0)},e.prototype.lookup=function(a,b){var c=this._compareFunc(this._data,a);return b=b||[],0===c&&(this._left&&this._left.lookup(a,b),b.push(this._data),this._right&&this._right.lookup(a,b)),-1===c&&this._right&&this._right.lookup(a,b),1===c&&this._left&&this._left.lookup(a,b),b},e.prototype.inOrder=function(a,b){switch(b=b||[],this._left&&this._left.inOrder(a,b),a){case"hash":b.push(this._hash);break;case"key":b.push(this._data);break;default:b.push({key:this._key,arr:this._store})}return this._right&&this._right.inOrder(a,b),b},d.finishModule("BinaryTree"),b.exports=e},{"./Shared":27}],4:[function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m;d=a("./Shared");var n=function(a){this.init.apply(this,arguments)};n.prototype.init=function(a,b){this._primaryKey="_id",this._primaryIndex=new g("primary"),this._primaryCrc=new g("primaryCrc"),this._crcLookup=new g("crcLookup"),this._name=a,this._data=[],this._metrics=new f,this._options=b||{changeTimestamp:!1},this._metaData={},this._deferQueue={insert:[],update:[],remove:[],upsert:[]},this._deferThreshold={insert:100,update:100,remove:100,upsert:100},this._deferTime={insert:1,update:1,remove:1,upsert:1},this.subsetOf(this)},d.addModule("Collection",n),d.mixin(n.prototype,"Mixin.Common"),d.mixin(n.prototype,"Mixin.Events"),d.mixin(n.prototype,"Mixin.ChainReactor"),d.mixin(n.prototype,"Mixin.CRUD"),d.mixin(n.prototype,"Mixin.Constants"),d.mixin(n.prototype,"Mixin.Triggers"),d.mixin(n.prototype,"Mixin.Sorting"),d.mixin(n.prototype,"Mixin.Matching"),d.mixin(n.prototype,"Mixin.Updating"),f=a("./Metrics"),g=a("./KeyValueStore"),h=a("./Path"),i=a("./IndexHashMap"),j=a("./IndexBinaryTree"),k=a("./Crc"),e=d.modules.Db,l=a("./Overload"),m=a("./ReactorIO"),n.prototype.crc=k,d.synthesize(n.prototype,"state"),d.synthesize(n.prototype,"name"),d.synthesize(n.prototype,"metaData"),n.prototype.data=function(){return this._data},n.prototype.drop=function(a){var b;if("dropped"===this._state)return a&&a(!1,!0),!0;if(this._db&&this._db._collection&&this._name){if(this.debug()&&console.log("Dropping collection "+this._name),this._state="dropped",this.emit("drop",this),delete this._db._collection[this._name],this._collate)for(b in this._collate)this._collate.hasOwnProperty(b)&&this.collateRemove(b);return delete this._primaryKey,delete this._primaryIndex,delete this._primaryCrc,delete this._crcLookup,delete this._name,delete this._data,delete this._metrics,a&&a(!1,!0),!0}return a&&a(!1,!0),!1},n.prototype.primaryKey=function(a){return void 0!==a?(this._primaryKey!==a&&(this._primaryKey=a,this._primaryIndex.primaryKey(a),this.rebuildPrimaryKeyIndex()),this):this._primaryKey},n.prototype._onInsert=function(a,b){this.emit("insert",a,b)},n.prototype._onUpdate=function(a){this.emit("update",a)},n.prototype._onRemove=function(a){this.emit("remove",a)},n.prototype._onChange=function(){this._options.changeTimestamp&&(this._metaData.lastChange=new Date)},d.synthesize(n.prototype,"db",function(a){return a&&"_id"===this.primaryKey()&&this.primaryKey(a.primaryKey()),this.$super.apply(this,arguments)}),n.prototype.setData=function(a,b,c){if("dropped"===this._state)throw'ForerunnerDB.Collection "'+this.name()+'": Cannot operate in a dropped state!';if(a){var d=this._metrics.create("setData");d.start(),b=this.options(b),this.preSetData(a,b,c),b.$decouple&&(a=this.decouple(a)),a instanceof Array||(a=[a]),d.time("transformIn"),a=this.transformIn(a),d.time("transformIn");var e=[].concat(this._data);this._dataReplace(a),d.time("Rebuild Primary Key Index"),this.rebuildPrimaryKeyIndex(b),d.time("Rebuild Primary Key Index"),d.time("Rebuild All Other Indexes"),this._rebuildIndexes(),d.time("Rebuild All Other Indexes"),d.time("Resolve chains"),this.chainSend("setData",a,{oldData:e}),d.time("Resolve chains"),d.stop(),this._onChange(),this.emit("setData",this._data,e)}return c&&c(!1),this},n.prototype.rebuildPrimaryKeyIndex=function(a){a=a||{$ensureKeys:void 0,$violationCheck:void 0};var b,c,d,e,f=a&&void 0!==a.$ensureKeys?a.$ensureKeys:!0,g=a&&void 0!==a.$violationCheck?a.$violationCheck:!0,h=this._primaryIndex,i=this._primaryCrc,j=this._crcLookup,k=this._primaryKey;for(h.truncate(),i.truncate(),j.truncate(),b=this._data,c=b.length;c--;){if(d=b[c],f&&this.ensurePrimaryKey(d),g){if(!h.uniqueSet(d[k],d))throw'ForerunnerDB.Collection "'+this.name()+'": Call to setData on collection failed because your data violates the primary key unique constraint. One or more documents are using the same primary key: '+d[this._primaryKey]}else h.set(d[k],d);e=JSON.stringify(d),i.set(d[k],e),j.set(e,d)}},n.prototype.ensurePrimaryKey=function(a){void 0===a[this._primaryKey]&&(a[this._primaryKey]=this.objectId())},n.prototype.truncate=function(){if("dropped"===this._state)throw'ForerunnerDB.Collection "'+this.name()+'": Cannot operate in a dropped state!';return this.emit("truncate",this._data),this._data.length=0,this._primaryIndex=new g("primary"),this._primaryCrc=new g("primaryCrc"),this._crcLookup=new g("crcLookup"),this._onChange(),this.deferEmit("change",{type:"truncate"}),this},n.prototype.upsert=function(a,b){if("dropped"===this._state)throw'ForerunnerDB.Collection "'+this.name()+'": Cannot operate in a dropped state!';if(a){var c,d,e=this._deferQueue.upsert,f=this._deferThreshold.upsert,g={};if(a instanceof Array){if(a.length>f)return this._deferQueue.upsert=e.concat(a),this.processQueue("upsert",b),{};for(g=[],d=0;d<a.length;d++)g.push(this.upsert(a[d]));return b&&b(),g}switch(a[this._primaryKey]?(c={},c[this._primaryKey]=a[this._primaryKey],this._primaryIndex.lookup(c)[0]?g.op="update":g.op="insert"):g.op="insert",g.op){case"insert":g.result=this.insert(a);break;case"update":g.result=this.update(c,a)}return g}return b&&b(),{}},n.prototype.filter=function(a,b,c){return this.find(a,c).filter(b)},n.prototype.filterUpdate=function(a,b,c){var d,e,f,g,h=this.find(a,c),i=[],j=this.primaryKey();for(g=0;g<h.length;g++)d=h[g],f=b(d),f&&(e={},e[j]=d[j],i.push(this.update(e,f)));return i},n.prototype.update=function(a,b,c){if("dropped"===this._state)throw'ForerunnerDB.Collection "'+this.name()+'": Cannot operate in a dropped state!';b=this.decouple(b),b=this.transformIn(b),this.debug()&&console.log('Updating some collection data for collection "'+this.name()+'"');var d,e,f=this,g=this._metrics.create("update"),h=function(d){var e,h,i,j=f.decouple(d);return f.willTrigger(f.TYPE_UPDATE,f.PHASE_BEFORE)||f.willTrigger(f.TYPE_UPDATE,f.PHASE_AFTER)?(e=f.decouple(d),h={type:"update",query:f.decouple(a),update:f.decouple(b),options:f.decouple(c),op:g},i=f.updateObject(e,h.update,h.query,h.options,""),f.processTrigger(h,f.TYPE_UPDATE,f.PHASE_BEFORE,d,e)!==!1?(i=f.updateObject(d,e,h.query,h.options,""),f.processTrigger(h,f.TYPE_UPDATE,f.PHASE_AFTER,d,e)):i=!1):i=f.updateObject(d,b,a,c,""),f._updateIndexes(j,d),i};return g.start(),g.time("Retrieve documents to update"),d=this.find(a,{$decouple:!1}),g.time("Retrieve documents to update"),d.length&&(g.time("Update documents"),e=d.filter(h),g.time("Update documents"),e.length&&(g.time("Resolve chains"),this.chainSend("update",{query:a,update:b,dataSet:d},c),g.time("Resolve chains"),this._onUpdate(e),this._onChange(),this.deferEmit("change",{type:"update",data:e}))),g.stop(),e||[]},n.prototype._replaceObj=function(a,b){var c;this._removeFromIndexes(a);for(c in a)a.hasOwnProperty(c)&&delete a[c];for(c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);if(!this._insertIntoIndexes(a))throw'ForerunnerDB.Collection "'+this.name()+'": Primary key violation in update! Key violated: '+a[this._primaryKey];return this},n.prototype.updateById=function(a,b){var c={};return c[this._primaryKey]=a,this.update(c,b)},n.prototype.updateObject=function(a,b,c,d,e,f){b=this.decouple(b),e=e||"","."===e.substr(0,1)&&(e=e.substr(1,e.length-1));var g,i,j,k,l,m,n,o,p,q=!1,r=!1;for(p in b)if(b.hasOwnProperty(p)){if(g=!1,"$"===p.substr(0,1))switch(p){case"$key":case"$index":case"$data":g=!0;break;case"$each":for(g=!0,k=b.$each.length,j=0;k>j;j++)r=this.updateObject(a,b.$each[j],c,d,e),r&&(q=!0);q=q||r;break;default:g=!0,r=this.updateObject(a,b[p],c,d,e,p),q=q||r}if(this._isPositionalKey(p)&&(g=!0,p=p.substr(0,p.length-2),m=new h(e+"."+p),a[p]&&a[p]instanceof Array&&a[p].length)){for(i=[],j=0;j<a[p].length;j++)this._match(a[p][j],m.value(c)[0],"",{})&&i.push(j);for(j=0;j<i.length;j++)r=this.updateObject(a[p][i[j]],b[p+".$"],c,d,e+"."+p,f),q=q||r}if(!g)if(f||"object"!=typeof b[p])switch(f){case"$inc":this._updateIncrement(a,p,b[p]),q=!0;break;case"$cast":switch(b[p]){case"array":a[p]instanceof Array||(this._updateProperty(a,p,b.$data||[]),q=!0);break;case"object":(!(a[p]instanceof Object)||a[p]instanceof Array)&&(this._updateProperty(a,p,b.$data||{}),q=!0);break;case"number":"number"!=typeof a[p]&&(this._updateProperty(a,p,Number(a[p])),q=!0);break;case"string":"string"!=typeof a[p]&&(this._updateProperty(a,p,String(a[p])),q=!0);break;default:throw'ForerunnerDB.Collection "'+this.name()+'": Cannot update cast to unknown type: '+b[p]}break;case"$push":if(void 0===a[p]&&this._updateProperty(a,p,[]),!(a[p]instanceof Array))throw'ForerunnerDB.Collection "'+this.name()+'": Cannot push to a key that is not an array! ('+p+")";if(void 0!==b[p].$position&&b[p].$each instanceof Array)for(l=b[p].$position,k=b[p].$each.length,j=0;k>j;j++)this._updateSplicePush(a[p],l+j,b[p].$each[j]);else if(b[p].$each instanceof Array)for(k=b[p].$each.length,j=0;k>j;j++)this._updatePush(a[p],b[p].$each[j]);else this._updatePush(a[p],b[p]);q=!0;break;case"$pull":if(a[p]instanceof Array){for(i=[],j=0;j<a[p].length;j++)this._match(a[p][j],b[p],"",{})&&i.push(j);for(k=i.length;k--;)this._updatePull(a[p],i[k]),q=!0}break;case"$pullAll":if(a[p]instanceof Array){if(!(b[p]instanceof Array))throw'ForerunnerDB.Collection "'+this.name()+'": Cannot pullAll without being given an array of values to pull! ('+p+")";if(i=a[p],k=i.length,k>0)for(;k--;){for(l=0;l<b[p].length;l++)i[k]===b[p][l]&&(this._updatePull(a[p],k),k--,q=!0);if(0>k)break}}break;case"$addToSet":if(void 0===a[p]&&this._updateProperty(a,p,[]),!(a[p]instanceof Array))throw'ForerunnerDB.Collection "'+this.name()+'": Cannot addToSet on a key that is not an array! ('+p+")";var s,t,u,v,w=a[p],x=w.length,y=!0,z=d&&d.$addToSet;for(b[p].$key?(u=!1,v=new h(b[p].$key),t=v.value(b[p])[0],delete b[p].$key):z&&z.key?(u=!1,v=new h(z.key),t=v.value(b[p])[0]):(t=JSON.stringify(b[p]),u=!0),s=0;x>s;s++)if(u){if(JSON.stringify(w[s])===t){y=!1;break}}else if(t===v.value(w[s])[0]){y=!1;break}y&&(this._updatePush(a[p],b[p]),q=!0);break;case"$splicePush":if(void 0===a[p]&&this._updateProperty(a,p,[]),!(a[p]instanceof Array))throw'ForerunnerDB.Collection "'+this.name()+'": Cannot splicePush with a key that is not an array! ('+p+")";if(l=b.$index,void 0===l)throw'ForerunnerDB.Collection "'+this.name()+'": Cannot splicePush without a $index integer value!';delete b.$index,l>a[p].length&&(l=a[p].length),this._updateSplicePush(a[p],l,b[p]),q=!0;break;case"$move":if(!(a[p]instanceof Array))throw'ForerunnerDB.Collection "'+this.name()+'": Cannot move on a key that is not an array! ('+p+")";for(j=0;j<a[p].length;j++)if(this._match(a[p][j],b[p],"",{})){var A=b.$index;if(void 0===A)throw'ForerunnerDB.Collection "'+this.name()+'": Cannot move without a $index integer value!';delete b.$index,this._updateSpliceMove(a[p],j,A),q=!0;break}break;case"$mul":this._updateMultiply(a,p,b[p]),q=!0;break;case"$rename":this._updateRename(a,p,b[p]),q=!0;break;case"$overwrite":this._updateOverwrite(a,p,b[p]),q=!0;break;case"$unset":this._updateUnset(a,p),q=!0;break;case"$clear":this._updateClear(a,p),q=!0;break;case"$pop":if(!(a[p]instanceof Array))throw'ForerunnerDB.Collection "'+this.name()+'": Cannot pop from a key that is not an array! ('+p+")";this._updatePop(a[p],b[p])&&(q=!0);break;default:a[p]!==b[p]&&(this._updateProperty(a,p,b[p]),q=!0)}else if(null!==a[p]&&"object"==typeof a[p])if(n=a[p]instanceof Array,o=b[p]instanceof Array,n||o)if(!o&&n)for(j=0;j<a[p].length;j++)r=this.updateObject(a[p][j],b[p],c,d,e+"."+p,f),q=q||r;else a[p]!==b[p]&&(this._updateProperty(a,p,b[p]),q=!0);else r=this.updateObject(a[p],b[p],c,d,e+"."+p,f),q=q||r;else a[p]!==b[p]&&(this._updateProperty(a,p,b[p]),q=!0)}return q},n.prototype._isPositionalKey=function(a){return".$"===a.substr(a.length-2,2)},n.prototype.remove=function(a,b,c){if("dropped"===this._state)throw'ForerunnerDB.Collection "'+this.name()+'": Cannot operate in a dropped state!';var d,e,f,g,h,i,j,k,l=this;if("function"==typeof b&&(c=b,b=void 0),a instanceof Array){for(g=[],f=0;f<a.length;f++)g.push(this.remove(a[f],{noEmit:!0}));return(!b||b&&!b.noEmit)&&this._onRemove(g),c&&c(!1,g),g}if(d=this.find(a,{$decouple:!1}),d.length){h=function(a){l._removeFromIndexes(a),e=l._data.indexOf(a),l._dataRemoveAtIndex(e)};for(var m=0;m<d.length;m++)j=d[m],l.willTrigger(l.TYPE_REMOVE,l.PHASE_BEFORE)||l.willTrigger(l.TYPE_REMOVE,l.PHASE_AFTER)?(i={type:"remove"},k=l.decouple(j),l.processTrigger(i,l.TYPE_REMOVE,l.PHASE_BEFORE,k,k)!==!1&&(h(j),l.processTrigger(i,l.TYPE_REMOVE,l.PHASE_AFTER,k,k))):h(j);this.chainSend("remove",{query:a,dataSet:d},b),(!b||b&&!b.noEmit)&&this._onRemove(d),this._onChange(),this.deferEmit("change",{type:"remove",data:d})}return c&&c(!1,d),d},n.prototype.removeById=function(a){var b={};return b[this._primaryKey]=a,this.remove(b)},n.prototype.deferEmit=function(a,b){var c,d=this;this._noEmitDefer||this._db&&(!this._db||this._db._noEmitDefer)?this.emit.apply(this,arguments):(c=arguments,this._deferTimeout=this._deferTimeout||{},this._deferTimeout[a]&&clearTimeout(this._deferTimeout[a]),this._deferTimeout[a]=setTimeout(function(){d.debug()&&console.log("ForerunnerDB.Collection: Emitting "+c[0]),d.emit.apply(d,c)},1))},n.prototype.processQueue=function(a,b,c){var d,e,f=this,g=this._deferQueue[a],h=this._deferThreshold[a],i=this._deferTime[a];if(c=c||{deferred:!0},g.length){if(g.length)switch(d=g.length>h?g.splice(0,h):g.splice(0,g.length),e=f[a](d),a){case"insert":c.inserted=c.inserted||[],c.failed=c.failed||[],c.inserted=c.inserted.concat(e.inserted),c.failed=c.failed.concat(e.failed)}setTimeout(function(){f.processQueue.call(f,a,b,c)},i)}else b&&b(c)},n.prototype.insert=function(a,b,c){if("dropped"===this._state)throw'ForerunnerDB.Collection "'+this.name()+'": Cannot operate in a dropped state!';return"function"==typeof b?(c=b,b=this._data.length):void 0===b&&(b=this._data.length),a=this.transformIn(a),this._insertHandle(a,b,c)},n.prototype._insertHandle=function(a,b,c){var d,e,f,g=this._deferQueue.insert,h=this._deferThreshold.insert,i=[],j=[];if(a instanceof Array){if(a.length>h)return this._deferQueue.insert=g.concat(a),void this.processQueue("insert",c);for(f=0;f<a.length;f++)d=this._insert(a[f],b+f),d===!0?i.push(a[f]):j.push({doc:a[f],reason:d})}else d=this._insert(a,b),d===!0?i.push(a):j.push({doc:a,reason:d});return this.chainSend("insert",a,{index:b}),e={deferred:!1,inserted:i,failed:j},this._onInsert(i,j),c&&c(e),this._onChange(),this.deferEmit("change",{type:"insert",data:i}),e},n.prototype._insert=function(a,b){if(a){var c,d,e,f,g=this;if(this.ensurePrimaryKey(a),c=this.insertIndexViolation(a),e=function(a){g._insertIntoIndexes(a),b>g._data.length&&(b=g._data.length),g._dataInsertAtIndex(b,a)},c)return"Index violation in index: "+c;if(g.willTrigger(g.TYPE_INSERT,g.PHASE_BEFORE)||g.willTrigger(g.TYPE_INSERT,g.PHASE_AFTER)){if(d={type:"insert"},g.processTrigger(d,g.TYPE_INSERT,g.PHASE_BEFORE,{},a)===!1)return!1;e(a),g.willTrigger(g.TYPE_INSERT,g.PHASE_AFTER)&&(f=g.decouple(a),g.processTrigger(d,g.TYPE_INSERT,g.PHASE_AFTER,{},f))}else e(a);return!0}return"No document passed to insert"},n.prototype._dataInsertAtIndex=function(a,b){this._data.splice(a,0,b)},n.prototype._dataRemoveAtIndex=function(a){this._data.splice(a,1)},n.prototype._dataReplace=function(a){for(;this._data.length;)this._data.pop();this._data=this._data.concat(a)},n.prototype._insertIntoIndexes=function(a){var b,c,d=this._indexByName,e=JSON.stringify(a);c=this._primaryIndex.uniqueSet(a[this._primaryKey],a),this._primaryCrc.uniqueSet(a[this._primaryKey],e),this._crcLookup.uniqueSet(e,a);for(b in d)d.hasOwnProperty(b)&&d[b].insert(a);return c},n.prototype._removeFromIndexes=function(a){var b,c=this._indexByName,d=JSON.stringify(a);this._primaryIndex.unSet(a[this._primaryKey]),this._primaryCrc.unSet(a[this._primaryKey]),this._crcLookup.unSet(d);for(b in c)c.hasOwnProperty(b)&&c[b].remove(a)},n.prototype._updateIndexes=function(a,b){this._removeFromIndexes(a),this._insertIntoIndexes(b)},n.prototype._rebuildIndexes=function(){var a,b=this._indexByName;for(a in b)b.hasOwnProperty(a)&&b[a].rebuild()},n.prototype.subset=function(a,b){var c=this.find(a,b);return(new n).subsetOf(this).primaryKey(this._primaryKey).setData(c)},d.synthesize(n.prototype,"subsetOf"),n.prototype.isSubsetOf=function(a){return!0},n.prototype.distinct=function(a,b,c){if("dropped"===this._state)throw'ForerunnerDB.Collection "'+this.name()+'": Cannot operate in a dropped state!';var d,e,f=this.find(b,c),g=new h(a),i={},j=[];for(e=0;e<f.length;e++)d=g.value(f[e])[0],d&&!i[d]&&(i[d]=!0,j.push(d));return j},n.prototype.findById=function(a,b){var c={};return c[this._primaryKey]=a,this.find(c,b)[0]},n.prototype.peek=function(a,b){var c,d,e=this._data,f=e.length,g=new n,h=typeof a;if("string"===h){for(c=0;f>c;c++)d=JSON.stringify(e[c]),d.indexOf(a)>-1&&g.insert(e[c]);return g.find({},b)}return this.find(a,b)},n.prototype.explain=function(a,b){var c=this.find(a,b);return c.__fdbOp._data},n.prototype.options=function(a){return a=a||{},a.$decouple=void 0!==a.$decouple?a.$decouple:!0,a.$explain=void 0!==a.$explain?a.$explain:!1,a},n.prototype.find=function(a,b,c){return c?(c("Callbacks for the find() operation are not yet implemented!",[]),[]):this._find.apply(this,arguments)},n.prototype._find=function(a,b){if("dropped"===this._state)throw'ForerunnerDB.Collection "'+this.name()+'": Cannot operate in a dropped state!';a=a||{},b=this.options(b);var c,d,e,f,g,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H=this._metrics.create("find"),I=this.primaryKey(),J=this,K=!0,L={},M=[],N=[],O=[],P={},Q={},R=function(b){return J._match(b,a,"and",P)};if(H.start(),a){if(H.time("analyseQuery"),c=this._analyseQuery(J.decouple(a),b,H),H.time("analyseQuery"),H.data("analysis",c),c.hasJoin&&c.queriesJoin){for(H.time("joinReferences"),g=0;g<c.joinsOn.length;g++)k=c.joinsOn[g],j=new h(c.joinQueries[k]),i=j.value(a)[0],L[c.joinsOn[g]]=this._db.collection(c.joinsOn[g]).subset(i),delete a[c.joinQueries[k]];H.time("joinReferences")}if(c.indexMatch.length&&(!b||b&&!b.$skipIndex)?(H.data("index.potential",c.indexMatch),H.data("index.used",c.indexMatch[0].index),H.time("indexLookup"),e=c.indexMatch[0].lookup||[],H.time("indexLookup"),c.indexMatch[0].keyData.totalKeyCount===c.indexMatch[0].keyData.score&&(K=!1)):H.flag("usedIndex",!1),K&&(e&&e.length?(d=e.length,H.time("tableScan: "+d),e=e.filter(R)):(d=this._data.length,H.time("tableScan: "+d),e=this._data.filter(R)),b.$orderBy&&(H.time("sort"),e=this.sort(b.$orderBy,e),H.time("sort")),H.time("tableScan: "+d)),void 0!==b.$page&&void 0!==b.$limit&&(Q.page=b.$page,Q.pages=Math.ceil(e.length/b.$limit),Q.records=e.length,b.$page&&b.$limit>0&&(H.data("cursor",Q),e.splice(0,b.$page*b.$limit))),b.$skip&&(Q.skip=b.$skip,e.splice(0,b.$skip),H.data("skip",b.$skip)),b.$limit&&e&&e.length>b.$limit&&(Q.limit=b.$limit,e.length=b.$limit,H.data("limit",b.$limit)),b.$decouple&&(H.time("decouple"),e=this.decouple(e),H.time("decouple"),H.data("flag.decouple",!0)),b.$join){for(f=0;f<b.$join.length;f++)for(k in b.$join[f])if(b.$join[f].hasOwnProperty(k))for(w=k,l=L[k]?L[k]:this._db.collection(k),m=b.$join[f][k],x=0;x<e.length;x++){o={},q=!1,r=!1,v="";for(n in m)if(m.hasOwnProperty(n))if("$"===n.substr(0,1))switch(n){case"$where":m[n].query&&(o=m[n].query),m[n].options&&(p=m[n].options);break;case"$as":w=m[n];break;case"$multi":q=m[n];break;case"$require":r=m[n];break;case"$prefix":v=m[n]}else o[n]=J._resolveDynamicQuery(m[n],e[x]);if(s=l.find(o,p),!r||r&&s[0])if("$root"===w){if(q!==!1)throw'ForerunnerDB.Collection "'+this.name()+'": Cannot combine [$as: "$root"] with [$joinMulti: true] in $join clause!';t=s[0],u=e[x];for(C in t)t.hasOwnProperty(C)&&void 0===u[v+C]&&(u[v+C]=t[C])}else e[x][w]=q===!1?s[0]:s;else M.push(e[x])}H.data("flag.join",!0)}if(M.length){for(H.time("removalQueue"),z=0;z<M.length;z++)y=e.indexOf(M[z]),y>-1&&e.splice(y,1);H.time("removalQueue")}if(b.$transform){for(H.time("transform"),z=0;z<e.length;z++)e.splice(z,1,b.$transform(e[z]));H.time("transform"),H.data("flag.transform",!0)}this._transformEnabled&&this._transformOut&&(H.time("transformOut"),e=this.transformOut(e),H.time("transformOut")),H.data("results",e.length)}else e=[];H.time("scanFields");for(z in b)b.hasOwnProperty(z)&&0!==z.indexOf("$")&&(1===b[z]?N.push(z):0===b[z]&&O.push(z));if(H.time("scanFields"),N.length||O.length){for(H.data("flag.limitFields",!0),H.data("limitFields.on",N),H.data("limitFields.off",O),H.time("limitFields"),z=0;z<e.length;z++){G=e[z];for(A in G)G.hasOwnProperty(A)&&(N.length&&A!==I&&-1===N.indexOf(A)&&delete G[A],O.length&&O.indexOf(A)>-1&&delete G[A])}H.time("limitFields")}if(b.$elemMatch){H.data("flag.elemMatch",!0),H.time("projection-elemMatch");for(z in b.$elemMatch)if(b.$elemMatch.hasOwnProperty(z))for(D=new h(z),A=0;A<e.length;A++)if(E=D.value(e[A])[0],E&&E.length)for(B=0;B<E.length;B++)if(J._match(E[B],b.$elemMatch[z],"",{})){D.set(e[A],z,[E[B]]);break}H.time("projection-elemMatch")}if(b.$elemsMatch){H.data("flag.elemsMatch",!0),H.time("projection-elemsMatch");for(z in b.$elemsMatch)if(b.$elemsMatch.hasOwnProperty(z))for(D=new h(z),A=0;A<e.length;A++)if(E=D.value(e[A])[0],E&&E.length){for(F=[],B=0;B<E.length;B++)J._match(E[B],b.$elemsMatch[z],"",{})&&F.push(E[B]);D.set(e[A],z,F)}H.time("projection-elemsMatch")}return H.stop(),e.__fdbOp=H,e.$cursor=Q,e},n.prototype._resolveDynamicQuery=function(a,b){var c,d,e,f,g=this;if("string"==typeof a)return new h(a).value(b)[0];c={};for(f in a)if(a.hasOwnProperty(f))switch(d=typeof a[f],e=a[f],d){case"string":"$$."===e.substr(0,3)?c[f]=new h(e.substr(3,e.length-3)).value(b)[0]:c[f]=e;break;case"object":c[f]=g._resolveDynamicQuery(e,b);break;default:c[f]=e}return c},n.prototype.findOne=function(){return this.find.apply(this,arguments)[0]},n.prototype.indexOf=function(a,b){var c,d=this.find(a,{$decouple:!1})[0];return d?!b||b&&!b.$orderBy?this._data.indexOf(d):(b.$decouple=!1,c=this.find(a,b),c.indexOf(d)):-1},n.prototype.indexOfDocById=function(a,b){var c,d;return c=this._primaryIndex.get("object"!=typeof a?a:a[this._primaryKey]),c?!b||b&&!b.$orderBy?this._data.indexOf(c):(b.$decouple=!1,d=this.find({},b),d.indexOf(c)):-1},n.prototype.removeByIndex=function(a){var b,c;return b=this._data[a],void 0!==b?(b=this.decouple(b),c=b[this.primaryKey()],this.removeById(c)):!1},n.prototype.transform=function(a){return void 0!==a?("object"==typeof a?(void 0!==a.enabled&&(this._transformEnabled=a.enabled),void 0!==a.dataIn&&(this._transformIn=a.dataIn),void 0!==a.dataOut&&(this._transformOut=a.dataOut)):this._transformEnabled=a!==!1,this):{enabled:this._transformEnabled,dataIn:this._transformIn,dataOut:this._transformOut}},n.prototype.transformIn=function(a){if(this._transformEnabled&&this._transformIn){if(a instanceof Array){var b,c=[];for(b=0;b<a.length;b++)c[b]=this._transformIn(a[b]);return c}return this._transformIn(a)}return a},n.prototype.transformOut=function(a){if(this._transformEnabled&&this._transformOut){if(a instanceof Array){var b,c=[];for(b=0;b<a.length;b++)c[b]=this._transformOut(a[b]);return c}return this._transformOut(a)}return a},n.prototype.sort=function(a,b){b=b||[];var c,d,e=[];for(c in a)a.hasOwnProperty(c)&&(d={},d[c]=a[c],d.___fdbKey=c,e.push(d));return e.length<2?this._sort(a,b):this._bucketSort(e,b)},n.prototype._bucketSort=function(a,b){var c,d,e,f=a.shift(),g=[];if(a.length>0){b=this._sort(f,b),d=this.bucket(f.___fdbKey,b);for(e in d)d.hasOwnProperty(e)&&(c=[].concat(a),g=g.concat(this._bucketSort(c,d[e])));return g}return this._sort(f,b)},n.prototype._sort=function(a,b){var c,d=this,e=new h,f=e.parse(a,!0)[0];if(e.path(f.path),1===f.value)c=function(a,b){var c=e.value(a)[0],f=e.value(b)[0];return d.sortAsc(c,f)};else{if(-1!==f.value)throw'ForerunnerDB.Collection "'+this.name()+'": $orderBy clause has invalid direction: '+f.value+", accepted values are 1 or -1 for ascending or descending!";c=function(a,b){var c=e.value(a)[0],f=e.value(b)[0];return d.sortDesc(c,f)}}return b.sort(c)},n.prototype.bucket=function(a,b){var c,d={};for(c=0;c<b.length;c++)d[b[c][a]]=d[b[c][a]]||[],d[b[c][a]].push(b[c]);return d},n.prototype._analyseQuery=function(a,b,c){var d,e,f,g,i,j,k,l,m,n,o,p={queriesOn:[this._name],indexMatch:[],hasJoin:!1,queriesJoin:!1,joinQueries:{},query:a,options:b},q=[],r=[];if(c.time("checkIndexes"),m=new h,n=m.countKeys(a)){void 0!==a[this._primaryKey]&&(c.time("checkIndexMatch: Primary Key"),p.indexMatch.push({lookup:this._primaryIndex.lookup(a,b),keyData:{matchedKeys:[this._primaryKey],totalKeyCount:n,score:1},index:this._primaryIndex}),c.time("checkIndexMatch: Primary Key"));for(o in this._indexById)if(this._indexById.hasOwnProperty(o)&&(j=this._indexById[o],k=j.name(),c.time("checkIndexMatch: "+k),i=j.match(a,b),i.score>0&&(l=j.lookup(a,b),p.indexMatch.push({lookup:l,keyData:i,index:j})),c.time("checkIndexMatch: "+k),i.score===n))break;c.time("checkIndexes"),p.indexMatch.length>1&&(c.time("findOptimalIndex"),p.indexMatch.sort(function(a,b){return a.keyData.score>b.keyData.score?-1:a.keyData.score<b.keyData.score?1:a.keyData.score===b.keyData.score?a.lookup.length-b.lookup.length:void 0}),c.time("findOptimalIndex"))}if(b.$join){for(p.hasJoin=!0,d=0;d<b.$join.length;d++)for(e in b.$join[d])b.$join[d].hasOwnProperty(e)&&(q.push(e),r.push("$as"in b.$join[d][e]?b.$join[d][e].$as:e));for(g=0;g<r.length;g++)f=this._queryReferencesCollection(a,r[g],""),f&&(p.joinQueries[q[g]]=f,p.queriesJoin=!0);p.joinsOn=q,p.queriesOn=p.queriesOn.concat(q)}return p},n.prototype._queryReferencesCollection=function(a,b,c){var d;for(d in a)if(a.hasOwnProperty(d)){if(d===b)return c&&(c+="."),c+d;if("object"==typeof a[d])return c&&(c+="."),c+=d,this._queryReferencesCollection(a[d],b,c)}return!1},n.prototype.count=function(a,b){return a?this.find(a,b).length:this._data.length},n.prototype.findSub=function(a,b,c,d){var e,f,g,i=new h(b),j=this.find(a),k=j.length,l=this._db.collection("__FDB_temp_"+this.objectId()),m={parents:k,subDocTotal:0,subDocs:[],pathFound:!1,err:""};for(d=d||{},e=0;k>e;e++)if(f=i.value(j[e])[0]){if(l.setData(f),g=l.find(c,d),d.returnFirst&&g.length)return g[0];d.$split?m.subDocs.push(g):m.subDocs=m.subDocs.concat(g),m.subDocTotal+=g.length,m.pathFound=!0}return l.drop(),d.$stats?m:m.subDocs},n.prototype.insertIndexViolation=function(a){var b,c,d,e=this._indexByName;if(this._primaryIndex.get(a[this._primaryKey]))b=this._primaryIndex;else for(c in e)if(e.hasOwnProperty(c)&&(d=e[c],d.unique()&&d.violation(a))){b=d;break}return b?b.name():!1},n.prototype.ensureIndex=function(a,b){if("dropped"===this._state)throw'ForerunnerDB.Collection "'+this.name()+'": Cannot operate in a dropped state!';this._indexByName=this._indexByName||{},this._indexById=this._indexById||{};var c,d={start:(new Date).getTime()};if(b)switch(b.type){case"hashed":c=new i(a,b,this);break;case"btree":c=new j(a,b,this);break;default:c=new i(a,b,this)}else c=new i(a,b,this);return this._indexByName[c.name()]?{err:"Index with that name already exists"}:this._indexById[c.id()]?{err:"Index with those keys already exists"}:(c.rebuild(),this._indexByName[c.name()]=c,this._indexById[c.id()]=c,d.end=(new Date).getTime(),d.total=d.end-d.start,this._lastOp={type:"ensureIndex",stats:{time:d}},{index:c,id:c.id(),name:c.name(),state:c.state()})},n.prototype.index=function(a){return this._indexByName?this._indexByName[a]:void 0},n.prototype.lastOp=function(){return this._metrics.list()},n.prototype.diff=function(a){var b,c,d,e,f={insert:[],update:[],remove:[]},g=this.primaryKey();if(g!==a.primaryKey())throw'ForerunnerDB.Collection "'+this.name()+'": Collection diffing requires that both collections have the same primary key!';for(b=a._data;b&&!(b instanceof Array);)a=b,b=a._data;for(e=b.length,c=0;e>c;c++)d=b[c],this._primaryIndex.get(d[g])?this._primaryCrc.get(d[g])!==a._primaryCrc.get(d[g])&&f.update.push(d):f.insert.push(d);for(b=this._data,e=b.length,c=0;e>c;c++)d=b[c],a._primaryIndex.get(d[g])||f.remove.push(d);return f},n.prototype.collateAdd=new l({"object, string":function(a,b){var c=this;c.collateAdd(a,function(d){var e,f;switch(d.type){case"insert":b?(e={$push:{}},e.$push[b]=c.decouple(d.data),c.update({},e)):c.insert(d.data);break;case"update":b?(e={},f={},e[b]=d.data.query,f[b+".$"]=d.data.update,c.update(e,f)):c.update(d.data.query,d.data.update);break;case"remove":b?(e={$pull:{}},e.$pull[b]={},e.$pull[b][c.primaryKey()]=d.data.dataSet[0][a.primaryKey()],c.update({},e)):c.remove(d.data)}})},"object, function":function(a,b){if("string"==typeof a&&(a=this._db.collection(a,{autoCreate:!1,throwError:!1})),a)return this._collate=this._collate||{},this._collate[a.name()]=new m(a,this,b),this;throw"Cannot collate from a non-existent collection!"}}),n.prototype.collateRemove=function(a){if("object"==typeof a&&(a=a.name()),a)return this._collate[a].drop(),delete this._collate[a],
this;throw"No collection name passed to collateRemove() or collection not found!"},e.prototype.collection=new l({object:function(a){return a instanceof n?"droppped"!==a.state()?a:this.$main.call(this,{name:a.name()}):this.$main.call(this,a)},string:function(a){return this.$main.call(this,{name:a})},"string, string":function(a,b){return this.$main.call(this,{name:a,primaryKey:b})},"string, object":function(a,b){return b.name=a,this.$main.call(this,b)},"string, string, object":function(a,b,c){return c.name=a,c.primaryKey=b,this.$main.call(this,c)},$main:function(a){var b=a.name;if(b){if(!this._collection[b]){if(a&&a.autoCreate===!1&&a&&a.throwError!==!1)throw'ForerunnerDB.Db "'+this.name()+'": Cannot get collection '+b+" because it does not exist and auto-create has been disabled!";this.debug()&&console.log("Creating collection "+b)}return this._collection[b]=this._collection[b]||new n(b,a).db(this),void 0!==a.primaryKey&&this._collection[b].primaryKey(a.primaryKey),this._collection[b]}if(!a||a&&a.throwError!==!1)throw'ForerunnerDB.Db "'+this.name()+'": Cannot get collection with undefined name!'}}),e.prototype.collectionExists=function(a){return Boolean(this._collection[a])},e.prototype.collections=function(a){var b,c,d=[],e=this._collection;a&&(a instanceof RegExp||(a=new RegExp(a)));for(c in e)e.hasOwnProperty(c)&&(b=e[c],a?a.exec(c)&&d.push({name:c,count:b.count(),linked:void 0!==b.isLinked?b.isLinked():!1}):d.push({name:c,count:b.count(),linked:void 0!==b.isLinked?b.isLinked():!1}));return d.sort(function(a,b){return a.name.localeCompare(b.name)}),d},d.finishModule("Collection"),b.exports=n},{"./Crc":7,"./IndexBinaryTree":9,"./IndexHashMap":10,"./KeyValueStore":11,"./Metrics":12,"./Overload":23,"./Path":24,"./ReactorIO":26,"./Shared":27}],5:[function(a,b,c){"use strict";var d,e,f,g;d=a("./Shared");var h=function(){this.init.apply(this,arguments)};h.prototype.init=function(a){var b=this;b._name=a,b._data=new g("__FDB__cg_data_"+b._name),b._collections=[],b._view=[]},d.addModule("CollectionGroup",h),d.mixin(h.prototype,"Mixin.Common"),d.mixin(h.prototype,"Mixin.ChainReactor"),d.mixin(h.prototype,"Mixin.Constants"),d.mixin(h.prototype,"Mixin.Triggers"),g=a("./Collection"),e=d.modules.Db,f=d.modules.Db.prototype.init,h.prototype.on=function(){this._data.on.apply(this._data,arguments)},h.prototype.off=function(){this._data.off.apply(this._data,arguments)},h.prototype.emit=function(){this._data.emit.apply(this._data,arguments)},h.prototype.primaryKey=function(a){return void 0!==a?(this._primaryKey=a,this):this._primaryKey},d.synthesize(h.prototype,"state"),d.synthesize(h.prototype,"db"),h.prototype.addCollection=function(a){if(a&&-1===this._collections.indexOf(a)){if(this._collections.length){if(this._primaryKey!==a.primaryKey())throw'ForerunnerDB.CollectionGroup "'+this.name()+'": All collections in a collection group must have the same primary key!'}else this.primaryKey(a.primaryKey());this._collections.push(a),a._groups=a._groups||[],a._groups.push(this),a.chain(this),a.on("drop",function(){if(a._groups&&a._groups.length){var b,c=[];for(b=0;b<a._groups.length;b++)c.push(a._groups[b]);for(b=0;b<c.length;b++)a._groups[b].removeCollection(a)}delete a._groups}),this._data.insert(a.find())}return this},h.prototype.removeCollection=function(a){if(a){var b,c=this._collections.indexOf(a);-1!==c&&(a.unChain(this),this._collections.splice(c,1),a._groups=a._groups||[],b=a._groups.indexOf(this),-1!==b&&a._groups.splice(b,1),a.off("drop")),0===this._collections.length&&delete this._primaryKey}return this},h.prototype._chainHandler=function(a){switch(a.type){case"setData":a.data=this.decouple(a.data),this._data.remove(a.options.oldData),this._data.insert(a.data);break;case"insert":a.data=this.decouple(a.data),this._data.insert(a.data);break;case"update":this._data.update(a.data.query,a.data.update,a.options);break;case"remove":this._data.remove(a.data.query,a.options)}},h.prototype.insert=function(){this._collectionsRun("insert",arguments)},h.prototype.update=function(){this._collectionsRun("update",arguments)},h.prototype.updateById=function(){this._collectionsRun("updateById",arguments)},h.prototype.remove=function(){this._collectionsRun("remove",arguments)},h.prototype._collectionsRun=function(a,b){for(var c=0;c<this._collections.length;c++)this._collections[c][a].apply(this._collections[c],b)},h.prototype.find=function(a,b){return this._data.find(a,b)},h.prototype.removeById=function(a){for(var b=0;b<this._collections.length;b++)this._collections[b].removeById(a)},h.prototype.subset=function(a,b){var c=this.find(a,b);return(new g).subsetOf(this).primaryKey(this._primaryKey).setData(c)},h.prototype.drop=function(){if("dropped"!==this._state){var a,b,c;if(this._debug&&console.log("Dropping collection group "+this._name),this._state="dropped",this._collections&&this._collections.length)for(b=[].concat(this._collections),a=0;a<b.length;a++)this.removeCollection(b[a]);if(this._view&&this._view.length)for(c=[].concat(this._view),a=0;a<c.length;a++)this._removeView(c[a]);this.emit("drop",this)}return!0},e.prototype.init=function(){this._collectionGroup={},f.apply(this,arguments)},e.prototype.collectionGroup=function(a){return a?a instanceof h?a:(this._collectionGroup[a]=this._collectionGroup[a]||new h(a).db(this),this._collectionGroup[a]):this._collectionGroup},e.prototype.collectionGroups=function(){var a,b=[];for(a in this._collectionGroup)this._collectionGroup.hasOwnProperty(a)&&b.push({name:a});return b},b.exports=h},{"./Collection":4,"./Shared":27}],6:[function(a,b,c){"use strict";var d,e,f,g,h=[];d=a("./Shared"),g=a("./Overload");var i=function(a){this.init.apply(this,arguments)};i.prototype.init=function(a){this._db={},this._debug={},this._name=a||"ForerunnerDB",h.push(this)},i.prototype.instantiatedCount=function(){return h.length},i.prototype.instances=function(a){return void 0!==a?h[a]:h},i.prototype.namedInstances=function(a){var b,c;if(void 0!==a){for(b=0;b<h.length;b++)if(h[b].name===a)return h[b];return void 0}for(c=[],b=0;b<h.length;b++)c.push(h[b].name);return c},i.prototype.moduleLoaded=new g({string:function(a){if(void 0!==a){a=a.replace(/ /g,"");var b,c=a.split(",");for(b=0;b<c.length;b++)if(!d.modules[c[b]])return!1;return!0}return!1},"string, function":function(a,b){if(void 0!==a){a=a.replace(/ /g,"");var c,e=a.split(",");for(c=0;c<e.length;c++)if(!d.modules[e[c]])return!1;b()}},"array, function":function(a,b){var c,e;for(e=0;e<a.length;e++)if(c=a[e],void 0!==c){c=c.replace(/ /g,"");var f,g=c.split(",");for(f=0;f<g.length;f++)if(!d.modules[g[f]])return!1}b()},"string, function, function":function(a,b,c){if(void 0!==a){a=a.replace(/ /g,"");var e,f=a.split(",");for(e=0;e<f.length;e++)if(!d.modules[f[e]])return c(),!1;b()}}}),i.prototype.version=function(a,b){return void 0!==a?0===d.version.indexOf(a)?(b&&b(),!0):!1:d.version},i.moduleLoaded=i.prototype.moduleLoaded,i.version=i.prototype.version,i.instances=i.prototype.instances,i.instantiatedCount=i.prototype.instantiatedCount,i.shared=d,i.prototype.shared=d,d.addModule("Core",i),d.mixin(i.prototype,"Mixin.Common"),d.mixin(i.prototype,"Mixin.Constants"),e=a("./Db.js"),f=a("./Metrics.js"),d.synthesize(i.prototype,"name"),i.prototype._isServer=!1,i.prototype.isClient=function(){return!this._isServer},i.prototype.isServer=function(){return this._isServer},i.prototype.isClient=function(){return!this._isServer},i.prototype.isServer=function(){return this._isServer},i.prototype.collection=function(){throw"ForerunnerDB's instantiation has changed since version 1.3.36 to support multiple database instances. Please see the readme.md file for the minor change you have to make to get your project back up and running, or see the issue related to this change at https://github.com/Irrelon/ForerunnerDB/issues/44"},b.exports=i},{"./Db.js":8,"./Metrics.js":12,"./Overload":23,"./Shared":27}],7:[function(a,b,c){"use strict";var d=function(){var a,b,c,d=[];for(b=0;256>b;b++){for(a=b,c=0;8>c;c++)a=1&a?3988292384^a>>>1:a>>>1;d[b]=a}return d}();b.exports=function(a){var b,c=-1;for(b=0;b<a.length;b++)c=c>>>8^d[255&(c^a.charCodeAt(b))];return(-1^c)>>>0}},{}],8:[function(a,b,c){"use strict";var d,e,f,g,h,i;d=a("./Shared"),i=a("./Overload");var j=function(a,b){this.init.apply(this,arguments)};j.prototype.init=function(a,b){this.core(b),this._primaryKey="_id",this._name=a,this._collection={},this._debug={}},j.prototype.moduleLoaded=new i({string:function(a){if(void 0!==a){a=a.replace(/ /g,"");var b,c=a.split(",");for(b=0;b<c.length;b++)if(!d.modules[c[b]])return!1;return!0}return!1},"string, function":function(a,b){if(void 0!==a){a=a.replace(/ /g,"");var c,e=a.split(",");for(c=0;c<e.length;c++)if(!d.modules[e[c]])return!1;b()}},"string, function, function":function(a,b,c){if(void 0!==a){a=a.replace(/ /g,"");var e,f=a.split(",");for(e=0;e<f.length;e++)if(!d.modules[f[e]])return c(),!1;b()}}}),j.prototype.version=function(a,b){return void 0!==a?0===d.version.indexOf(a)?(b&&b(),!0):!1:d.version},j.moduleLoaded=j.prototype.moduleLoaded,j.version=j.prototype.version,j.shared=d,j.prototype.shared=d,d.addModule("Db",j),d.mixin(j.prototype,"Mixin.Common"),d.mixin(j.prototype,"Mixin.ChainReactor"),d.mixin(j.prototype,"Mixin.Constants"),e=d.modules.Core,f=a("./Collection.js"),g=a("./Metrics.js"),h=a("./Crc.js"),j.prototype._isServer=!1,d.synthesize(j.prototype,"core"),d.synthesize(j.prototype,"primaryKey"),d.synthesize(j.prototype,"state"),d.synthesize(j.prototype,"name"),j.prototype.isClient=function(){return!this._isServer},j.prototype.isServer=function(){return this._isServer},j.prototype.crc=h,j.prototype.isClient=function(){return!this._isServer},j.prototype.isServer=function(){return this._isServer},j.prototype.arrayToCollection=function(a){return(new f).setData(a)},j.prototype.on=function(a,b){return this._listeners=this._listeners||{},this._listeners[a]=this._listeners[a]||[],this._listeners[a].push(b),this},j.prototype.off=function(a,b){if(a in this._listeners){var c=this._listeners[a],d=c.indexOf(b);d>-1&&c.splice(d,1)}return this},j.prototype.emit=function(a,b){if(this._listeners=this._listeners||{},a in this._listeners){var c,d=this._listeners[a],e=d.length;for(c=0;e>c;c++)d[c].apply(this,Array.prototype.slice.call(arguments,1))}return this},j.prototype.peek=function(a){var b,c,d=[],e=typeof a;for(b in this._collection)this._collection.hasOwnProperty(b)&&(c=this._collection[b],d=d.concat("string"===e?c.peek(a):c.find(a)));return d},j.prototype.peekCat=function(a){var b,c,d,e={},f=typeof a;for(b in this._collection)this._collection.hasOwnProperty(b)&&(c=this._collection[b],"string"===f?(d=c.peek(a),d&&d.length&&(e[c.name()]=d)):(d=c.find(a),d&&d.length&&(e[c.name()]=d)));return e},j.prototype.drop=new i({"":function(){if("dropped"!==this._state){var a,b=this.collections(),c=b.length;for(this._state="dropped",a=0;c>a;a++)this.collection(b[a].name).drop(),delete this._collection[b[a].name];this.emit("drop",this),delete this._core._db[this._name]}return!0},"function":function(a){if("dropped"!==this._state){var b,c=this.collections(),d=c.length,e=0,f=function(){e++,e===d&&a&&a()};for(this._state="dropped",b=0;d>b;b++)this.collection(c[b].name).drop(f),delete this._collection[c[b].name];this.emit("drop",this),delete this._core._db[this._name]}return!0},"boolean":function(a){if("dropped"!==this._state){var b,c=this.collections(),d=c.length;for(this._state="dropped",b=0;d>b;b++)this.collection(c[b].name).drop(a),delete this._collection[c[b].name];this.emit("drop",this),delete this._core._db[this._name]}return!0},"boolean, function":function(a,b){if("dropped"!==this._state){var c,d=this.collections(),e=d.length,f=0,g=function(){f++,f===e&&b&&b()};for(this._state="dropped",c=0;e>c;c++)this.collection(d[c].name).drop(a,g),delete this._collection[d[c].name];this.emit("drop",this),delete this._core._db[this._name]}return!0}}),e.prototype.db=function(a){return a instanceof j?a:(a||(a=this.objectId()),this._db[a]=this._db[a]||new j(a,this),this._db[a])},e.prototype.databases=function(a){var b,c,d,e=[];a&&(a instanceof RegExp||(a=new RegExp(a)));for(d in this._db)this._db.hasOwnProperty(d)&&(c=!0,a&&(a.exec(d)||(c=!1)),c&&(b={name:d,children:[]},this.shared.moduleExists("Collection")&&b.children.push({module:"collection",moduleName:"Collections",count:this._db[d].collections().length}),this.shared.moduleExists("CollectionGroup")&&b.children.push({module:"collectionGroup",moduleName:"Collection Groups",count:this._db[d].collectionGroups().length}),this.shared.moduleExists("Document")&&b.children.push({module:"document",moduleName:"Documents",count:this._db[d].documents().length}),this.shared.moduleExists("Grid")&&b.children.push({module:"grid",moduleName:"Grids",count:this._db[d].grids().length}),this.shared.moduleExists("Overview")&&b.children.push({module:"overview",moduleName:"Overviews",count:this._db[d].overviews().length}),this.shared.moduleExists("View")&&b.children.push({module:"view",moduleName:"Views",count:this._db[d].views().length}),e.push(b)));return e.sort(function(a,b){return a.name.localeCompare(b.name)}),e},b.exports=j},{"./Collection.js":4,"./Crc.js":7,"./Metrics.js":12,"./Overload":23,"./Shared":27}],9:[function(a,b,c){"use strict";var d=a("./Shared"),e=a("./Path"),f=a("./BinaryTree"),g=new f,h=function(){};g.inOrder("hash");var i=function(){this.init.apply(this,arguments)};i.prototype.init=function(a,b,c){this._btree=new(h.create(2,this.sortAsc)),this._size=0,this._id=this._itemKeyHash(a,a),this.unique(b&&b.unique?b.unique:!1),void 0!==a&&this.keys(a),void 0!==c&&this.collection(c),this.name(b&&b.name?b.name:this._id)},d.addModule("IndexBinaryTree",i),d.mixin(i.prototype,"Mixin.ChainReactor"),d.mixin(i.prototype,"Mixin.Sorting"),i.prototype.id=function(){return this._id},i.prototype.state=function(){return this._state},i.prototype.size=function(){return this._size},d.synthesize(i.prototype,"data"),d.synthesize(i.prototype,"name"),d.synthesize(i.prototype,"collection"),d.synthesize(i.prototype,"type"),d.synthesize(i.prototype,"unique"),i.prototype.keys=function(a){return void 0!==a?(this._keys=a,this._keyCount=(new e).parse(this._keys).length,this):this._keys},i.prototype.rebuild=function(){if(this._collection){var a,b=this._collection.subset({},{$decouple:!1,$orderBy:this._keys}),c=b.find(),d=c.length;for(this._btree=new(h.create(2,this.sortAsc)),this._unique&&(this._uniqueLookup={}),a=0;d>a;a++)this.insert(c[a])}this._state={name:this._name,keys:this._keys,indexSize:this._size,built:new Date,updated:new Date,ok:!0}},i.prototype.insert=function(a,b){var c,d,e=this._unique,f=this._itemKeyHash(a,this._keys);e&&(c=this._itemHash(a,this._keys),this._uniqueLookup[c]=a),d=this._btree.get(f),void 0===d&&(d=[],this._btree.put(f,d)),d.push(a),this._size++},i.prototype.remove=function(a,b){var c,d,e,f=this._unique,g=this._itemKeyHash(a,this._keys);f&&(c=this._itemHash(a,this._keys),delete this._uniqueLookup[c]),d=this._btree.get(g),void 0!==d&&(e=d.indexOf(a),e>-1&&(1===d.length?this._btree.del(g):d.splice(e,1),this._size--))},i.prototype.violation=function(a){var b=this._itemHash(a,this._keys);return Boolean(this._uniqueLookup[b])},i.prototype.hashViolation=function(a){return Boolean(this._uniqueLookup[a])},i.prototype.lookup=function(a){return this._data[this._itemHash(a,this._keys)]||[]},i.prototype.match=function(a,b){var c,d=new e,f=d.parseArr(this._keys),g=d.parseArr(a),h=[],i=0;for(c=0;c<f.length;c++){if(g[c]!==f[c])return{matchedKeys:[],totalKeyCount:g.length,score:0};i++,h.push(g[c])}return{matchedKeys:h,totalKeyCount:g.length,score:i}},i.prototype._itemHash=function(a,b){var c,d,f=new e,g="";for(c=f.parse(b),d=0;d<c.length;d++)g&&(g+="_"),g+=f.value(a,c[d].path).join(":");return g},i.prototype._itemKeyHash=function(a,b){var c,d,f=new e,g="";for(c=f.parse(b),d=0;d<c.length;d++)g&&(g+="_"),g+=f.keyValue(a,c[d].path);return g},i.prototype._itemHashArr=function(a,b){var c,d,f,g,h,i=new e,j=[];for(c=i.parse(b),g=0;g<c.length;g++)for(d=i.value(a,c[g].path),f=0;f<d.length;f++)if(0===g)j.push(d[f]);else for(h=0;h<j.length;h++)j[h]=j[h]+"_"+d[f];return j},d.finishModule("IndexBinaryTree"),b.exports=i},{"./BinaryTree":3,"./Path":24,"./Shared":27}],10:[function(a,b,c){"use strict";var d=a("./Shared"),e=a("./Path"),f=function(){this.init.apply(this,arguments)};f.prototype.init=function(a,b,c){this._crossRef={},this._size=0,this._id=this._itemKeyHash(a,a),this.data({}),this.unique(b&&b.unique?b.unique:!1),void 0!==a&&this.keys(a),void 0!==c&&this.collection(c),this.name(b&&b.name?b.name:this._id)},d.addModule("IndexHashMap",f),d.mixin(f.prototype,"Mixin.ChainReactor"),f.prototype.id=function(){return this._id},f.prototype.state=function(){return this._state},f.prototype.size=function(){return this._size},d.synthesize(f.prototype,"data"),d.synthesize(f.prototype,"name"),d.synthesize(f.prototype,"collection"),d.synthesize(f.prototype,"type"),d.synthesize(f.prototype,"unique"),f.prototype.keys=function(a){return void 0!==a?(this._keys=a,this._keyCount=(new e).parse(this._keys).length,this):this._keys},f.prototype.rebuild=function(){if(this._collection){var a,b=this._collection.subset({},{$decouple:!1,$orderBy:this._keys}),c=b.find(),d=c.length;for(this._data={},this._unique&&(this._uniqueLookup={}),a=0;d>a;a++)this.insert(c[a])}this._state={name:this._name,keys:this._keys,indexSize:this._size,built:new Date,updated:new Date,ok:!0}},f.prototype.insert=function(a,b){var c,d,e,f=this._unique;for(f&&(c=this._itemHash(a,this._keys),this._uniqueLookup[c]=a),d=this._itemHashArr(a,this._keys),e=0;e<d.length;e++)this.pushToPathValue(d[e],a)},f.prototype.update=function(a,b){},f.prototype.remove=function(a,b){var c,d,e,f=this._unique;for(f&&(c=this._itemHash(a,this._keys),delete this._uniqueLookup[c]),d=this._itemHashArr(a,this._keys),e=0;e<d.length;e++)this.pullFromPathValue(d[e],a)},f.prototype.violation=function(a){var b=this._itemHash(a,this._keys);return Boolean(this._uniqueLookup[b])},f.prototype.hashViolation=function(a){return Boolean(this._uniqueLookup[a])},f.prototype.pushToPathValue=function(a,b){var c=this._data[a]=this._data[a]||[];-1===c.indexOf(b)&&(c.push(b),this._size++,this.pushToCrossRef(b,c))},f.prototype.pullFromPathValue=function(a,b){var c,d=this._data[a];c=d.indexOf(b),c>-1&&(d.splice(c,1),this._size--,this.pullFromCrossRef(b,d)),d.length||delete this._data[a]},f.prototype.pull=function(a){var b,c,d=a[this._collection.primaryKey()],e=this._crossRef[d],f=e.length;for(b=0;f>b;b++)c=e[b],this._pullFromArray(c,a);this._size--,delete this._crossRef[d]},f.prototype._pullFromArray=function(a,b){for(var c=a.length;c--;)a[c]===b&&a.splice(c,1)},f.prototype.pushToCrossRef=function(a,b){var c,d=a[this._collection.primaryKey()];this._crossRef[d]=this._crossRef[d]||[],c=this._crossRef[d],-1===c.indexOf(b)&&c.push(b)},f.prototype.pullFromCrossRef=function(a,b){var c=a[this._collection.primaryKey()];delete this._crossRef[c]},f.prototype.lookup=function(a){return this._data[this._itemHash(a,this._keys)]||[]},f.prototype.match=function(a,b){var c,d=new e,f=d.parseArr(this._keys),g=d.parseArr(a),h=[],i=0;for(c=0;c<f.length;c++){if(g[c]!==f[c])return{matchedKeys:[],totalKeyCount:g.length,score:0};i++,h.push(g[c])}return{matchedKeys:h,totalKeyCount:g.length,score:i}},f.prototype._itemHash=function(a,b){var c,d,f=new e,g="";for(c=f.parse(b),d=0;d<c.length;d++)g&&(g+="_"),g+=f.value(a,c[d].path).join(":");return g},f.prototype._itemKeyHash=function(a,b){var c,d,f=new e,g="";for(c=f.parse(b),d=0;d<c.length;d++)g&&(g+="_"),g+=f.keyValue(a,c[d].path);return g},f.prototype._itemHashArr=function(a,b){var c,d,f,g,h,i=new e,j=[];for(c=i.parse(b),g=0;g<c.length;g++)for(d=i.value(a,c[g].path),f=0;f<d.length;f++)if(0===g)j.push(d[f]);else for(h=0;h<j.length;h++)j[h]=j[h]+"_"+d[f];return j},d.finishModule("IndexHashMap"),b.exports=f},{"./Path":24,"./Shared":27}],11:[function(a,b,c){"use strict";var d=a("./Shared"),e=function(a){this.init.apply(this,arguments)};e.prototype.init=function(a){this._name=a,this._data={},this._primaryKey="_id"},d.addModule("KeyValueStore",e),d.mixin(e.prototype,"Mixin.ChainReactor"),d.synthesize(e.prototype,"name"),e.prototype.primaryKey=function(a){return void 0!==a?(this._primaryKey=a,this):this._primaryKey},e.prototype.truncate=function(){return this._data={},this},e.prototype.set=function(a,b){return this._data[a]=b?b:!0,this},e.prototype.get=function(a){return this._data[a]},e.prototype.lookup=function(a){var b,c,d,e,f=a[this._primaryKey];if(f instanceof Array){for(c=f.length,e=[],b=0;c>b;b++)d=this._data[f[b]],d&&e.push(d);return e}if(f instanceof RegExp){e=[];for(b in this._data)this._data.hasOwnProperty(b)&&f.test(b)&&e.push(this._data[b]);return e}if("object"!=typeof f)return d=this._data[f],void 0!==d?[d]:[];if(f.$ne){e=[];for(b in this._data)this._data.hasOwnProperty(b)&&b!==f.$ne&&e.push(this._data[b]);return e}if(f.$in&&f.$in instanceof Array){e=[];for(b in this._data)this._data.hasOwnProperty(b)&&f.$in.indexOf(b)>-1&&e.push(this._data[b]);return e}if(f.$nin&&f.$nin instanceof Array){e=[];for(b in this._data)this._data.hasOwnProperty(b)&&-1===f.$nin.indexOf(b)&&e.push(this._data[b]);return e}if(f.$or&&f.$or instanceof Array){for(e=[],b=0;b<f.$or.length;b++)e=e.concat(this.lookup(f.$or[b]));return e}},e.prototype.unSet=function(a){return delete this._data[a],this},e.prototype.uniqueSet=function(a,b){return void 0===this._data[a]?(this._data[a]=b,!0):!1},d.finishModule("KeyValueStore"),b.exports=e},{"./Shared":27}],12:[function(a,b,c){"use strict";var d=a("./Shared"),e=a("./Operation"),f=function(){this.init.apply(this,arguments)};f.prototype.init=function(){this._data=[]},d.addModule("Metrics",f),d.mixin(f.prototype,"Mixin.ChainReactor"),f.prototype.create=function(a){var b=new e(a);return this._enabled&&this._data.push(b),b},f.prototype.start=function(){return this._enabled=!0,this},f.prototype.stop=function(){return this._enabled=!1,this},f.prototype.clear=function(){return this._data=[],this},f.prototype.list=function(){return this._data},d.finishModule("Metrics"),b.exports=f},{"./Operation":22,"./Shared":27}],13:[function(a,b,c){"use strict";var d={preSetData:function(){},postSetData:function(){}};b.exports=d},{}],14:[function(a,b,c){"use strict";var d={chain:function(a){this._chain=this._chain||[];var b=this._chain.indexOf(a);-1===b&&this._chain.push(a)},unChain:function(a){if(this._chain){var b=this._chain.indexOf(a);b>-1&&this._chain.splice(b,1)}},chainSend:function(a,b,c){if(this._chain){var d,e,f=this._chain,g=f.length;for(e=0;g>e;e++){if(d=f[e],d._state&&(!d._state||"dropped"===d._state))throw console.log("Reactor Data:",a,b,c),console.log("Reactor Node:",d),"Chain reactor attempting to send data to target reactor node that is in a dropped state!";d.chainReceive(this,a,b,c)}}},chainReceive:function(a,b,c,d){var e={sender:a,type:b,data:c,options:d};(!this._chainHandler||this._chainHandler&&!this._chainHandler(e))&&this.chainSend(e.type,e.data,e.options)}};b.exports=d},{}],15:[function(a,b,c){"use strict";var d,e=0,f=a("./Overload");d={store:function(a,b){if(void 0!==a){if(void 0!==b)return this._store=this._store||{},this._store[a]=b,this;if(this._store)return this._store[a]}return void 0},unStore:function(a){return void 0!==a&&delete this._store[a],this},decouple:function(a,b){if(void 0!==a){if(b){var c,d=JSON.stringify(a),e=[];for(c=0;b>c;c++)e.push(JSON.parse(d));return e}return JSON.parse(JSON.stringify(a))}return void 0},objectId:function(a){var b,c=Math.pow(10,17);if(a){var d,f=0,g=a.length;for(d=0;g>d;d++)f+=a.charCodeAt(d)*c;b=f.toString(16)}else e++,b=(e+(Math.random()*c+Math.random()*c+Math.random()*c+Math.random()*c)).toString(16);return b},debug:new f([function(){return this._debug&&this._debug.all},function(a){return void 0!==a?"boolean"==typeof a?(this._debug=this._debug||{},this._debug.all=a,this.chainSend("debug",this._debug),this):this._debug&&this._debug[a]||this._db&&this._db._debug&&this._db._debug[a]||this._debug&&this._debug.all:this._debug&&this._debug.all},function(a,b){return void 0!==a?void 0!==b?(this._debug=this._debug||{},this._debug[a]=b,this.chainSend("debug",this._debug),this):this._debug&&this._debug[b]||this._db&&this._db._debug&&this._db._debug[a]:this._debug&&this._debug.all}])},b.exports=d},{"./Overload":23}],16:[function(a,b,c){"use strict";var d={TYPE_INSERT:0,TYPE_UPDATE:1,TYPE_REMOVE:2,PHASE_BEFORE:0,PHASE_AFTER:1};b.exports=d},{}],17:[function(a,b,c){"use strict";var d=a("./Overload"),e={on:new d({"string, function":function(a,b){return this._listeners=this._listeners||{},this._listeners[a]=this._listeners[a]||{},this._listeners[a]["*"]=this._listeners[a]["*"]||[],this._listeners[a]["*"].push(b),this},"string, *, function":function(a,b,c){return this._listeners=this._listeners||{},this._listeners[a]=this._listeners[a]||{},this._listeners[a][b]=this._listeners[a][b]||[],this._listeners[a][b].push(c),this}}),once:new d({"string, function":function(a,b){var c=this,d=function(){c.off(a,d),b.apply(c,arguments)};return this.on(a,d)},"string, *, function":function(a,b,c){var d=this,e=function(){d.off(a,b,e),c.apply(d,arguments)};return this.on(a,b,e)}}),off:new d({string:function(a){return this._listeners&&this._listeners[a]&&a in this._listeners&&delete this._listeners[a],this},"string, function":function(a,b){var c,d;return"string"==typeof b?this._listeners&&this._listeners[a]&&this._listeners[a][b]&&delete this._listeners[a][b]:this._listeners&&a in this._listeners&&(c=this._listeners[a]["*"],d=c.indexOf(b),d>-1&&c.splice(d,1)),this},"string, *, function":function(a,b,c){if(this._listeners&&a in this._listeners&&b in this.listeners[a]){var d=this._listeners[a][b],e=d.indexOf(c);e>-1&&d.splice(e,1)}},"string, *":function(a,b){this._listeners&&a in this._listeners&&b in this._listeners[a]&&delete this._listeners[a][b]}}),emit:function(a,b){if(this._listeners=this._listeners||{},a in this._listeners){var c,d;if(this._listeners[a]["*"]){var e=this._listeners[a]["*"];for(d=e.length,c=0;d>c;c++)e[c].apply(this,Array.prototype.slice.call(arguments,1))}if(b instanceof Array&&b[0]&&b[0][this._primaryKey]){var f,g,h=this._listeners[a];for(d=b.length,c=0;d>c;c++)if(h[b[c][this._primaryKey]])for(f=h[b[c][this._primaryKey]].length,g=0;f>g;g++)h[b[c][this._primaryKey]][g].apply(this,Array.prototype.slice.call(arguments,1))}}return this}};b.exports=e},{"./Overload":23}],18:[function(a,b,c){"use strict";var d={_match:function(a,b,c,d){var e,f,g,h,i,j,k,l=typeof a,m=typeof b,n=!0;if(d=d||{},d.$rootQuery||(d.$rootQuery=b),d.$rootData=d.$rootData||{},"string"!==l&&"number"!==l||"string"!==m&&"number"!==m){for(k in b)if(b.hasOwnProperty(k)){if(e=!1,j=k.substr(0,2),"//"===j)continue;if(0===j.indexOf("$")&&(i=this._matchOp(k,a,b[k],d),i>-1)){if(i){if("or"===c)return!0}else n=i;e=!0}if(!e&&b[k]instanceof RegExp)if(e=!0,"object"===l&&void 0!==a[k]&&b[k].test(a[k])){if("or"===c)return!0}else n=!1;if(!e)if("object"==typeof b[k])if(void 0!==a[k])if(a[k]instanceof Array&&!(b[k]instanceof Array)){for(g=!1,h=0;h<a[k].length&&!(g=this._match(a[k][h],b[k],f,d));h++);if(g){if("or"===c)return!0}else n=!1}else if(!(a[k]instanceof Array)&&b[k]instanceof Array){for(g=!1,h=0;h<b[k].length&&!(g=this._match(a[k],b[k][h],f,d));h++);if(g){if("or"===c)return!0}else n=!1}else if("object"==typeof a)if(g=this._match(a[k],b[k],f,d)){if("or"===c)return!0}else n=!1;else if(g=this._match(void 0,b[k],f,d)){if("or"===c)return!0}else n=!1;else if(b[k]&&void 0!==b[k].$exists)if(g=this._match(void 0,b[k],f,d)){if("or"===c)return!0}else n=!1;else n=!1;else if(a&&a[k]===b[k]){if("or"===c)return!0}else if(a&&a[k]&&a[k]instanceof Array&&b[k]&&"object"!=typeof b[k]){for(g=!1,h=0;h<a[k].length&&!(g=this._match(a[k][h],b[k],f,d));h++);if(g){if("or"===c)return!0}else n=!1}else n=!1;if("and"===c&&!n)return!1}}else"number"===l?a!==b&&(n=!1):a.localeCompare(b)&&(n=!1);return n},_matchOp:function(a,b,c,d){switch(a){case"$gt":return b>c;case"$gte":return b>=c;case"$lt":return c>b;case"$lte":return c>=b;case"$exists":return void 0===b!==c;case"$ne":return b!=c;case"$nee":return b!==c;case"$or":for(var e=0;e<c.length;e++)if(this._match(b,c[e],"and",d))return!0;return!1;case"$and":for(var f=0;f<c.length;f++)if(!this._match(b,c[f],"and",d))return!1;return!0;case"$in":if(c instanceof Array){var g,h=c,i=h.length;for(g=0;i>g;g++){if(h[g]instanceof RegExp&&h[g].test(b))return!0;if(h[g]===b)return!0}return!1}throw'ForerunnerDB.Mixin.Matching "'+this.name()+'": Cannot use an $in operator on a non-array key: '+a;case"$nin":if(c instanceof Array){var j,k=c,l=k.length;for(j=0;l>j;j++)if(k[j]===b)return!1;return!0}throw'ForerunnerDB.Mixin.Matching "'+this.name()+'": Cannot use a $nin operator on a non-array key: '+a;case"$distinct":d.$rootData["//distinctLookup"]=d.$rootData["//distinctLookup"]||{};for(var m in c)if(c.hasOwnProperty(m))return d.$rootData["//distinctLookup"][m]=d.$rootData["//distinctLookup"][m]||{},d.$rootData["//distinctLookup"][m][b[m]]?!1:(d.$rootData["//distinctLookup"][m][b[m]]=!0,!0)}return-1}};b.exports=d},{}],19:[function(a,b,c){"use strict";var d={sortAsc:function(a,b){return"string"==typeof a&&"string"==typeof b?a.localeCompare(b):a>b?1:b>a?-1:0},sortDesc:function(a,b){return"string"==typeof a&&"string"==typeof b?b.localeCompare(a):a>b?-1:b>a?1:0}};b.exports=d},{}],20:[function(a,b,c){"use strict";var d=a("./Overload"),e={addTrigger:function(a,b,c,d){var e,f=this;return e=f._triggerIndexOf(a,b,c),-1===e?(f._trigger=f._trigger||{},f._trigger[b]=f._trigger[b]||{},f._trigger[b][c]=f._trigger[b][c]||[],f._trigger[b][c].push({id:a,method:d,enabled:!0}),!0):!1},removeTrigger:function(a,b,c){var d,e=this;return d=e._triggerIndexOf(a,b,c),d>-1&&e._trigger[b][c].splice(d,1),!1},enableTrigger:new d({string:function(a){var b,c,d,e,f,g=this,h=g._trigger,i=!1;if(h)for(f in h)if(h.hasOwnProperty(f)&&(b=h[f]))for(d in b)if(b.hasOwnProperty(d))for(c=b[d],e=0;e<c.length;e++)c[e].id===a&&(c[e].enabled=!0,i=!0);return i},number:function(a){var b,c,d,e=this,f=e._trigger[a],g=!1;if(f)for(c in f)if(f.hasOwnProperty(c))for(b=f[c],d=0;d<b.length;d++)b[d].enabled=!0,g=!0;return g},"number, number":function(a,b){var c,d,e=this,f=e._trigger[a],g=!1;if(f&&(c=f[b]))for(d=0;d<c.length;d++)c[d].enabled=!0,g=!0;return g},"string, number, number":function(a,b,c){var d=this,e=d._triggerIndexOf(a,b,c);return e>-1?(d._trigger[b][c][e].enabled=!0,!0):!1}}),disableTrigger:new d({string:function(a){var b,c,d,e,f,g=this,h=g._trigger,i=!1;if(h)for(f in h)if(h.hasOwnProperty(f)&&(b=h[f]))for(d in b)if(b.hasOwnProperty(d))for(c=b[d],e=0;e<c.length;e++)c[e].id===a&&(c[e].enabled=!1,i=!0);return i},number:function(a){var b,c,d,e=this,f=e._trigger[a],g=!1;if(f)for(c in f)if(f.hasOwnProperty(c))for(b=f[c],d=0;d<b.length;d++)b[d].enabled=!1,g=!0;return g},"number, number":function(a,b){var c,d,e=this,f=e._trigger[a],g=!1;if(f&&(c=f[b]))for(d=0;d<c.length;d++)c[d].enabled=!1,g=!0;return g},"string, number, number":function(a,b,c){var d=this,e=d._triggerIndexOf(a,b,c);return e>-1?(d._trigger[b][c][e].enabled=!1,!0):!1}}),willTrigger:function(a,b){if(this._trigger&&this._trigger[a]&&this._trigger[a][b]&&this._trigger[a][b].length){var c,d=this._trigger[a][b];for(c=0;c<d.length;c++)if(d[c].enabled)return!0}return!1},processTrigger:function(a,b,c,d,e){var f,g,h,i,j,k=this;if(k._trigger&&k._trigger[b]&&k._trigger[b][c]){for(f=k._trigger[b][c],h=f.length,g=0;h>g;g++)if(i=f[g],i.enabled){if(this.debug()){var l,m;switch(b){case this.TYPE_INSERT:l="insert";break;case this.TYPE_UPDATE:l="update";break;case this.TYPE_REMOVE:l="remove";break;default:l=""}switch(c){case this.PHASE_BEFORE:m="before";break;case this.PHASE_AFTER:m="after";break;default:m=""}}if(j=i.method.call(k,a,d,e),j===!1)return!1;if(void 0!==j&&j!==!0&&j!==!1)throw"ForerunnerDB.Mixin.Triggers: Trigger error: "+j}return!0}},_triggerIndexOf:function(a,b,c){var d,e,f,g=this;if(g._trigger&&g._trigger[b]&&g._trigger[b][c])for(d=g._trigger[b][c],e=d.length,f=0;e>f;f++)if(d[f].id===a)return f;return-1}};b.exports=e},{"./Overload":23}],21:[function(a,b,c){
"use strict";var d={_updateProperty:function(a,b,c){a[b]=c,this.debug()&&console.log('ForerunnerDB.Mixin.Updating: Setting non-data-bound document property "'+b+'" for "'+this.name()+'"')},_updateIncrement:function(a,b,c){a[b]+=c},_updateSpliceMove:function(a,b,c){a.splice(c,0,a.splice(b,1)[0]),this.debug()&&console.log('ForerunnerDB.Mixin.Updating: Moving non-data-bound document array index from "'+b+'" to "'+c+'" for "'+this.name()+'"')},_updateSplicePush:function(a,b,c){a.length>b?a.splice(b,0,c):a.push(c)},_updatePush:function(a,b){a.push(b)},_updatePull:function(a,b){a.splice(b,1)},_updateMultiply:function(a,b,c){a[b]*=c},_updateRename:function(a,b,c){a[c]=a[b],delete a[b]},_updateOverwrite:function(a,b,c){a[b]=c},_updateUnset:function(a,b){delete a[b]},_updateClear:function(a,b){var c,d=a[b];if(d&&"object"==typeof d)for(c in d)d.hasOwnProperty(c)&&this._updateUnset(d,c)},_updatePop:function(a,b){var c=!1;return a.length>0&&(1===b?(a.pop(),c=!0):-1===b&&(a.shift(),c=!0)),c}};b.exports=d},{}],22:[function(a,b,c){"use strict";var d=a("./Shared"),e=a("./Path"),f=function(a){this.pathSolver=new e,this.counter=0,this.init.apply(this,arguments)};f.prototype.init=function(a){this._data={operation:a,index:{potential:[],used:!1},steps:[],time:{startMs:0,stopMs:0,totalMs:0,process:{}},flag:{},log:[]}},d.addModule("Operation",f),d.mixin(f.prototype,"Mixin.ChainReactor"),f.prototype.start=function(){this._data.time.startMs=(new Date).getTime()},f.prototype.log=function(a){if(a){var b=this._log.length>0?this._data.log[this._data.log.length-1].time:0,c={event:a,time:(new Date).getTime(),delta:0};return this._data.log.push(c),b&&(c.delta=c.time-b),this}return this._data.log},f.prototype.time=function(a){if(void 0!==a){var b=this._data.time.process,c=b[a]=b[a]||{};return c.startMs?(c.stopMs=(new Date).getTime(),c.totalMs=c.stopMs-c.startMs,c.stepObj.totalMs=c.totalMs,delete c.stepObj):(c.startMs=(new Date).getTime(),c.stepObj={name:a},this._data.steps.push(c.stepObj)),this}return this._data.time},f.prototype.flag=function(a,b){return void 0===a||void 0===b?void 0!==a?this._data.flag[a]:this._data.flag:void(this._data.flag[a]=b)},f.prototype.data=function(a,b,c){return void 0!==b?(this.pathSolver.set(this._data,a,b),this):this.pathSolver.get(this._data,a)},f.prototype.pushData=function(a,b,c){this.pathSolver.push(this._data,a,b)},f.prototype.stop=function(){this._data.time.stopMs=(new Date).getTime(),this._data.time.totalMs=this._data.time.stopMs-this._data.time.startMs},d.finishModule("Operation"),b.exports=f},{"./Path":24,"./Shared":27}],23:[function(a,b,c){"use strict";var d=function(a){if(a){var b,c,d,e,f,g,h=this;if(!(a instanceof Array)){d={};for(b in a)if(a.hasOwnProperty(b))if(e=b.replace(/ /g,""),-1===e.indexOf("*"))d[e]=a[b];else for(g=this.generateSignaturePermutations(e),f=0;f<g.length;f++)d[g[f]]||(d[g[f]]=a[b]);a=d}return function(){var d,e,f,g=[];if(a instanceof Array){for(c=a.length,b=0;c>b;b++)if(a[b].length===arguments.length)return h.callExtend(this,"$main",a,a[b],arguments)}else{for(b=0;b<arguments.length&&(e=typeof arguments[b],"object"===e&&arguments[b]instanceof Array&&(e="array"),1!==arguments.length||"undefined"!==e);b++)g.push(e);if(d=g.join(","),a[d])return h.callExtend(this,"$main",a,a[d],arguments);for(b=g.length;b>=0;b--)if(d=g.slice(0,b).join(","),a[d+",..."])return h.callExtend(this,"$main",a,a[d+",..."],arguments)}throw f="function"==typeof this.name?this.name():"Unknown",'ForerunnerDB.Overload "'+f+'": Overloaded method does not have a matching signature for the passed arguments: '+JSON.stringify(g)}}return function(){}};d.prototype.generateSignaturePermutations=function(a){var b,c,d=[],e=["string","object","number","function","undefined"];if(a.indexOf("*")>-1)for(c=0;c<e.length;c++)b=a.replace("*",e[c]),d=d.concat(this.generateSignaturePermutations(b));else d.push(a);return d},d.prototype.callExtend=function(a,b,c,d,e){var f,g;return a&&c[b]?(f=a[b],a[b]=c[b],g=d.apply(a,e),a[b]=f,g):d.apply(a,e)},b.exports=d},{}],24:[function(a,b,c){"use strict";var d=a("./Shared"),e=function(a){this.init.apply(this,arguments)};e.prototype.init=function(a){a&&this.path(a)},d.addModule("Path",e),d.mixin(e.prototype,"Mixin.ChainReactor"),e.prototype.path=function(a){return void 0!==a?(this._path=this.clean(a),this._pathParts=this._path.split("."),this):this._path},e.prototype.hasObjectPaths=function(a,b){var c,d=!0;for(c in a)if(a.hasOwnProperty(c)){if(void 0===b[c])return!1;if("object"==typeof a[c]&&(d=this.hasObjectPaths(a[c],b[c]),!d))return!1}return d},e.prototype.countKeys=function(a){var b,c=0;for(b in a)a.hasOwnProperty(b)&&void 0!==a[b]&&("object"!=typeof a[b]?c++:c+=this.countKeys(a[b]));return c},e.prototype.countObjectPaths=function(a,b){var c,d,e={},f=0,g=0;for(d in b)b.hasOwnProperty(d)&&("object"==typeof b[d]?(c=this.countObjectPaths(a[d],b[d]),e[d]=c.matchedKeys,g+=c.totalKeyCount,f+=c.matchedKeyCount):(g++,a&&a[d]&&"object"!=typeof a[d]?(e[d]=!0,f++):e[d]=!1));return{matchedKeys:e,matchedKeyCount:f,totalKeyCount:g}},e.prototype.parse=function(a,b){var c,d,e,f=[],g="";for(d in a)if(a.hasOwnProperty(d))if(g=d,"object"==typeof a[d])if(b)for(c=this.parse(a[d],b),e=0;e<c.length;e++)f.push({path:g+"."+c[e].path,value:c[e].value});else for(c=this.parse(a[d]),e=0;e<c.length;e++)f.push({path:g+"."+c[e].path});else f.push(b?{path:g,value:a[d]}:{path:g});return f},e.prototype.parseArr=function(a,b){return b=b||{},this._parseArr(a,"",[],b)},e.prototype._parseArr=function(a,b,c,d){var e,f="";b=b||"",c=c||[];for(e in a)a.hasOwnProperty(e)&&(!d.ignore||d.ignore&&!d.ignore.test(e))&&(f=b?b+"."+e:e,"object"==typeof a[e]?this._parseArr(a[e],f,c,d):c.push(f));return c},e.prototype.value=function(a,b){if(void 0!==a&&"object"==typeof a){var c,d,e,f,g,h,i,j=[];for(void 0!==b&&(b=this.clean(b),c=b.split(".")),d=c||this._pathParts,e=d.length,f=a,h=0;e>h;h++){if(f=f[d[h]],g instanceof Array){for(i=0;i<g.length;i++)j=j.concat(this.value(g,i+"."+d[h]));return j}if(!f||"object"!=typeof f)break;g=f}return[f]}return[]},e.prototype.set=function(a,b,c){if(void 0!==a&&void 0!==b){var d,e;b=this.clean(b),d=b.split("."),e=d.shift(),d.length?(a[e]=a[e]||{},this.set(a[e],d.join("."),c)):a[e]=c}return a},e.prototype.get=function(a,b){return this.value(a,b)[0]},e.prototype.push=function(a,b,c){if(void 0!==a&&void 0!==b){var d,e;if(b=this.clean(b),d=b.split("."),e=d.shift(),d.length)a[e]=a[e]||{},this.set(a[e],d.join("."),c);else{if(a[e]=a[e]||[],!(a[e]instanceof Array))throw"ForerunnerDB.Path: Cannot push to a path whose endpoint is not an array!";a[e].push(c)}}return a},e.prototype.keyValue=function(a,b){var c,d,e,f,g,h,i;for(void 0!==b&&(b=this.clean(b),c=b.split(".")),d=c||this._pathParts,e=d.length,f=a,i=0;e>i;i++){if(f=f[d[i]],!f||"object"!=typeof f){h=d[i]+":"+f;break}g=f}return h},e.prototype.clean=function(a){return"."===a.substr(0,1)&&(a=a.substr(1,a.length-1)),a},d.finishModule("Path"),b.exports=e},{"./Shared":27}],25:[function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m=a("./Shared"),n=a("localforage");k=function(){this.init.apply(this,arguments)},k.prototype.init=function(a){a.isClient()&&void 0!==window.Storage&&(this.mode("localforage"),n.config({driver:[n.INDEXEDDB,n.WEBSQL,n.LOCALSTORAGE],name:String(a.core().name()),storeName:"FDB"}))},m.addModule("Persist",k),m.mixin(k.prototype,"Mixin.ChainReactor"),d=m.modules.Db,e=a("./Collection"),f=e.prototype.drop,g=a("./CollectionGroup"),h=e.prototype.init,i=d.prototype.init,j=d.prototype.drop,l=m.overload,k.prototype.mode=function(a){return void 0!==a?(this._mode=a,this):this._mode},k.prototype.driver=function(a){if(void 0!==a){switch(a.toUpperCase()){case"LOCALSTORAGE":n.setDriver(n.LOCALSTORAGE);break;case"WEBSQL":n.setDriver(n.WEBSQL);break;case"INDEXEDDB":n.setDriver(n.INDEXEDDB);break;default:throw"ForerunnerDB.Persist: The persistence driver you have specified is not found. Please use either IndexedDB, WebSQL or LocalStorage!"}return this}return n.driver()},k.prototype.save=function(a,b,c){var d;switch(d=function(a,b){a="object"==typeof a?"json::fdb::"+JSON.stringify(a):"raw::fdb::"+a,b&&b(!1,a)},this.mode()){case"localforage":d(b,function(b,d){n.setItem(a,d).then(function(a){c&&c(!1,a)},function(a){c&&c(a)})});break;default:c&&c("No data handler.")}},k.prototype.load=function(a,b){var c,d,e;switch(e=function(a,b){if(a){switch(c=a.split("::fdb::"),c[0]){case"json":d=JSON.parse(c[1]);break;case"raw":d=c[1]}b&&b(!1,d,{foundData:!0,rowCount:d.length})}else b&&b(!1,a,{foundData:!1,rowCount:0})},this.mode()){case"localforage":n.getItem(a).then(function(a){e(a,b)},function(a){b&&b(a)});break;default:b&&b("No data handler or unrecognised data type.")}},k.prototype.drop=function(a,b){switch(this.mode()){case"localforage":n.removeItem(a).then(function(){b&&b(!1)},function(a){b&&b(a)});break;default:b&&b("No data handler or unrecognised data type.")}},e.prototype.drop=new l({"":function(){"dropped"!==this._state&&this.drop(!0)},"function":function(a){"dropped"!==this._state&&this.drop(!0,a)},"boolean":function(a){if("dropped"!==this._state){if(a){if(!this._name)throw"ForerunnerDB.Persist: Cannot drop a collection's persistent storage when no name assigned to collection!";if(!this._db)throw"ForerunnerDB.Persist: Cannot drop a collection's persistent storage when the collection is not attached to a database!";this._db.persist.drop(this._db._name+"::"+this._name)}f.apply(this)}},"boolean, function":function(a,b){"dropped"!==this._state&&(a&&(this._name?this._db?this._db.persist.drop(this._db._name+"::"+this._name,b):b&&b("Cannot drop a collection's persistent storage when the collection is not attached to a database!"):b&&b("Cannot drop a collection's persistent storage when no name assigned to collection!")),f.apply(this,b))}}),e.prototype.save=function(a){var b=this;b._name?b._db?b._db.persist.save(b._db._name+"::"+b._name,b._data,function(){b._db.persist.save(b._db._name+"::"+b._name+"::metaData",b.metaData(),a)}):a&&a("Cannot save a collection that is not attached to a database!"):a&&a("Cannot save a collection with no assigned name!")},e.prototype.load=function(a){var b=this;b._name?b._db?b._db.persist.load(b._db._name+"::"+b._name,function(c,d){c?a&&a(c):(d&&b.setData(d),b._db.persist.load(b._db._name+"::"+b._name+"::metaData",function(c,d){c||d&&b.metaData(d),a&&a(!1)}))}):a&&a("Cannot load a collection that is not attached to a database!"):a&&a("Cannot load a collection with no assigned name!")},d.prototype.init=function(){i.apply(this,arguments),this.persist=new k(this)},d.prototype.load=function(a){var b,c,d=this._collection,e=d.keys(),f=e.length;b=function(b){b?a&&a(b):(f--,0===f&&a&&a(!1))};for(c in d)d.hasOwnProperty(c)&&d[c].load(b)},d.prototype.save=function(a){var b,c,d=this._collection,e=d.keys(),f=e.length;b=function(b){b?a&&a(b):(f--,0===f&&a&&a(!1))};for(c in d)d.hasOwnProperty(c)&&d[c].save(b)},m.finishModule("Persist"),b.exports=k},{"./Collection":4,"./CollectionGroup":5,"./Shared":27,localforage:36}],26:[function(a,b,c){"use strict";var d=a("./Shared"),e=function(a,b,c){if(!(a&&b&&c))throw"ForerunnerDB.ReactorIO: ReactorIO requires in, out and process arguments to instantiate!";if(this._reactorIn=a,this._reactorOut=b,this._chainHandler=c,!a.chain||!b.chainReceive)throw"ForerunnerDB.ReactorIO: ReactorIO requires passed in and out objects to implement the ChainReactor mixin!";a.chain(this),this.chain(b)};d.addModule("ReactorIO",e),e.prototype.drop=function(){return"dropped"!==this._state&&(this._state="dropped",this._reactorIn&&this._reactorIn.unChain(this),this._reactorOut&&this.unChain(this._reactorOut),delete this._reactorIn,delete this._reactorOut,delete this._chainHandler,this.emit("drop",this)),!0},d.synthesize(e.prototype,"state"),d.mixin(e.prototype,"Mixin.ChainReactor"),d.mixin(e.prototype,"Mixin.Events"),d.finishModule("ReactorIO"),b.exports=e},{"./Shared":27}],27:[function(a,b,c){"use strict";var d=a("./Overload"),e={version:"1.3.153",modules:{},_synth:{},addModule:function(a,b){this.modules[a]=b,this.emit("moduleLoad",[a,b])},finishModule:function(a){if(!this.modules[a])throw"ForerunnerDB.Shared: finishModule called on a module that has not been registered with addModule(): "+a;this.modules[a]._fdbFinished=!0,this.emit("moduleFinished",[a,this.modules[a]])},moduleFinished:function(a,b){this.modules[a]&&this.modules[a]._fdbFinished?b&&b(a,this.modules[a]):this.on("moduleFinished",b)},moduleExists:function(a){return Boolean(this.modules[a])},mixin:new d({"object, string":function(a,b){var c;if("string"==typeof b&&(c=this.mixins[b],!c))throw"ForerunnerDB.Shared: Cannot find mixin named: "+b;return this.$main.call(this,a,c)},"object, object":function(a,b){return this.$main.call(this,a,b)},$main:function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}}),synthesize:function(a,b,c){if(this._synth[b]=this._synth[b]||function(a){return void 0!==a?(this["_"+b]=a,this):this["_"+b]},c){var d=this;a[b]=function(){var a,e=this.$super;return this.$super=d._synth[b],a=c.apply(this,arguments),this.$super=e,a}}else a[b]=this._synth[b]},overload:d,mixins:{"Mixin.Common":a("./Mixin.Common"),"Mixin.Events":a("./Mixin.Events"),"Mixin.ChainReactor":a("./Mixin.ChainReactor"),"Mixin.CRUD":a("./Mixin.CRUD"),"Mixin.Constants":a("./Mixin.Constants"),"Mixin.Triggers":a("./Mixin.Triggers"),"Mixin.Sorting":a("./Mixin.Sorting"),"Mixin.Matching":a("./Mixin.Matching"),"Mixin.Updating":a("./Mixin.Updating")}};e.mixin(e,"Mixin.Events"),b.exports=e},{"./Mixin.CRUD":13,"./Mixin.ChainReactor":14,"./Mixin.Common":15,"./Mixin.Constants":16,"./Mixin.Events":17,"./Mixin.Matching":18,"./Mixin.Sorting":19,"./Mixin.Triggers":20,"./Mixin.Updating":21,"./Overload":23}],28:[function(a,b,c){Array.prototype.filter||(Array.prototype.filter=function(a){if(void 0===this||null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError;for(var d=[],e=arguments.length>=2?arguments[1]:void 0,f=0;c>f;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d}),"function"!=typeof Object.create&&(Object.create=function(){var a=function(){};return function(b){if(arguments.length>1)throw Error("Second argument not supported");if("object"!=typeof b)throw TypeError("Argument must be an object");a.prototype=b;var c=new a;return a.prototype=null,c}}()),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var c;if(null===this)throw new TypeError('"this" is null or not defined');var d=Object(this),e=d.length>>>0;if(0===e)return-1;var f=+b||0;if(Math.abs(f)===1/0&&(f=0),f>=e)return-1;for(c=Math.max(f>=0?f:e-Math.abs(f),0);e>c;){if(c in d&&d[c]===a)return c;c++}return-1}),b.exports={}},{}],29:[function(a,b,c){function d(){if(!h){h=!0;for(var a,b=g.length;b;){a=g,g=[];for(var c=-1;++c<b;)a[c]();b=g.length}h=!1}}function e(){}var f=b.exports={},g=[],h=!1;f.nextTick=function(a){g.push(a),h||setTimeout(d,0)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=e,f.addListener=e,f.once=e,f.off=e,f.removeListener=e,f.removeAllListeners=e,f.emit=e,f.binding=function(a){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(a){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],30:[function(a,b,c){"use strict";function d(a){function b(a){return null===j?void l.push(a):void g(function(){var b=j?a.onFulfilled:a.onRejected;if(null===b)return void(j?a.resolve:a.reject)(k);var c;try{c=b(k)}catch(d){return void a.reject(d)}a.resolve(c)})}function c(a){try{if(a===m)throw new TypeError("A promise cannot be resolved with itself.");if(a&&("object"==typeof a||"function"==typeof a)){var b=a.then;if("function"==typeof b)return void f(b.bind(a),c,h)}j=!0,k=a,i()}catch(d){h(d)}}function h(a){j=!1,k=a,i()}function i(){for(var a=0,c=l.length;c>a;a++)b(l[a]);l=null}if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof a)throw new TypeError("not a function");var j=null,k=null,l=[],m=this;this.then=function(a,c){return new d(function(d,f){b(new e(a,c,d,f))})},f(a,c,h)}function e(a,b,c,d){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.resolve=c,this.reject=d}function f(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}var g=a("asap");b.exports=d},{asap:32}],31:[function(a,b,c){"use strict";function d(a){this.then=function(b){return"function"!=typeof b?this:new e(function(c,d){f(function(){try{c(b(a))}catch(e){d(e)}})})}}var e=a("./core.js"),f=a("asap");b.exports=e,d.prototype=Object.create(e.prototype);var g=new d(!0),h=new d(!1),i=new d(null),j=new d(void 0),k=new d(0),l=new d("");e.resolve=function(a){if(a instanceof e)return a;if(null===a)return i;if(void 0===a)return j;if(a===!0)return g;if(a===!1)return h;if(0===a)return k;if(""===a)return l;if("object"==typeof a||"function"==typeof a)try{var b=a.then;if("function"==typeof b)return new e(b.bind(a))}catch(c){return new e(function(a,b){b(c)})}return new d(a)},e.from=e.cast=function(a){var b=new Error("Promise.from and Promise.cast are deprecated, use Promise.resolve instead");return b.name="Warning",console.warn(b.stack),e.resolve(a)},e.denodeify=function(a,b){return b=b||1/0,function(){var c=this,d=Array.prototype.slice.call(arguments);return new e(function(e,f){for(;d.length&&d.length>b;)d.pop();d.push(function(a,b){a?f(a):e(b)}),a.apply(c,d)})}},e.nodeify=function(a){return function(){var b=Array.prototype.slice.call(arguments),c="function"==typeof b[b.length-1]?b.pop():null;try{return a.apply(this,arguments).nodeify(c)}catch(d){if(null===c||"undefined"==typeof c)return new e(function(a,b){b(d)});f(function(){c(d)})}}},e.all=function(){var a=1===arguments.length&&Array.isArray(arguments[0]),b=Array.prototype.slice.call(a?arguments[0]:arguments);if(!a){var c=new Error("Promise.all should be called with a single array, calling it with multiple arguments is deprecated");c.name="Warning",console.warn(c.stack)}return new e(function(a,c){function d(f,g){try{if(g&&("object"==typeof g||"function"==typeof g)){var h=g.then;if("function"==typeof h)return void h.call(g,function(a){d(f,a)},c)}b[f]=g,0===--e&&a(b)}catch(i){c(i)}}if(0===b.length)return a([]);for(var e=b.length,f=0;f<b.length;f++)d(f,b[f])})},e.reject=function(a){return new e(function(b,c){c(a)})},e.race=function(a){return new e(function(b,c){a.forEach(function(a){e.resolve(a).then(b,c)})})},e.prototype.done=function(a,b){var c=arguments.length?this.then.apply(this,arguments):this;c.then(null,function(a){f(function(){throw a})})},e.prototype.nodeify=function(a){return"function"!=typeof a?this:void this.then(function(b){f(function(){a(null,b)})},function(b){f(function(){a(b)})})},e.prototype["catch"]=function(a){return this.then(null,a)}},{"./core.js":30,asap:32}],32:[function(a,b,c){(function(a){function c(){for(;e.next;){e=e.next;var a=e.task;e.task=void 0;var b=e.domain;b&&(e.domain=void 0,b.enter());try{a()}catch(d){if(i)throw b&&b.exit(),setTimeout(c,0),b&&b.enter(),d;setTimeout(function(){throw d},0)}b&&b.exit()}g=!1}function d(b){f=f.next={task:b,domain:i&&a.domain,next:null},g||(g=!0,h())}var e={task:void 0,next:null},f=e,g=!1,h=void 0,i=!1;if("undefined"!=typeof a&&a.nextTick)i=!0,h=function(){a.nextTick(c)};else if("function"==typeof setImmediate)h="undefined"!=typeof window?setImmediate.bind(window,c):function(){setImmediate(c)};else if("undefined"!=typeof MessageChannel){var j=new MessageChannel;j.port1.onmessage=c,h=function(){j.port2.postMessage(0)}}else h=function(){setTimeout(c,0)};b.exports=d}).call(this,a("_process"))},{_process:29}],33:[function(a,b,c){(function(){"use strict";function c(a){var b=this,c={db:null};if(a)for(var d in a)c[d]=a[d];return new m(function(a,d){var e=n.open(c.name,c.version);e.onerror=function(){d(e.error)},e.onupgradeneeded=function(){e.result.createObjectStore(c.storeName)},e.onsuccess=function(){c.db=e.result,b._dbInfo=c,a()}})}function d(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new m(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=f.get(a);g.onsuccess=function(){var a=g.result;void 0===a&&(a=null),b(a)},g.onerror=function(){d(g.error)}})["catch"](d)});return l(d,b),d}function e(a,b){var c=this,d=new m(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=f.openCursor(),h=1;g.onsuccess=function(){var c=g.result;if(c){var d=a(c.value,c.key,h++);void 0!==d?b(d):c["continue"]()}else b()},g.onerror=function(){d(g.error)}})["catch"](d)});return l(d,b),d}function f(a,b,c){var d=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=new m(function(c,e){d.ready().then(function(){var f=d._dbInfo,g=f.db.transaction(f.storeName,"readwrite"),h=g.objectStore(f.storeName);null===b&&(b=void 0);var i=h.put(b,a);g.oncomplete=function(){void 0===b&&(b=null),c(b)},g.onabort=g.onerror=function(){var a=i.error?i.error:i.transaction.error;e(a)}})["catch"](e)});return l(e,c),e}function g(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new m(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readwrite"),g=f.objectStore(e.storeName),h=g["delete"](a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}})["catch"](d)});return l(d,b),d}function h(a){var b=this,c=new m(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readwrite"),f=e.objectStore(d.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}})["catch"](c)});return l(c,a),c}function i(a){var b=this,c=new m(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readonly").objectStore(d.storeName),f=e.count();f.onsuccess=function(){a(f.result)},f.onerror=function(){c(f.error)}})["catch"](c)});return l(c,a),c}function j(a,b){var c=this,d=new m(function(b,d){return 0>a?void b(null):void c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=!1,h=f.openCursor();h.onsuccess=function(){var c=h.result;return c?void(0===a?b(c.key):g?b(c.key):(g=!0,c.advance(a))):void b(null)},h.onerror=function(){d(h.error)}})["catch"](d)});return l(d,b),d}function k(a){var b=this,c=new m(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readonly").objectStore(d.storeName),f=e.openCursor(),g=[];f.onsuccess=function(){var b=f.result;return b?(g.push(b.key),void b["continue"]()):void a(g)},f.onerror=function(){c(f.error)}})["catch"](c)});return l(c,a),c}function l(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}var m="undefined"!=typeof b&&b.exports&&"undefined"!=typeof a?a("promise"):this.Promise,n=n||this.indexedDB||this.webkitIndexedDB||this.mozIndexedDB||this.OIndexedDB||this.msIndexedDB;if(n){var o={_driver:"asyncStorage",_initStorage:c,iterate:e,getItem:d,setItem:f,removeItem:g,clear:h,length:i,key:j,keys:k};"undefined"!=typeof b&&b.exports&&"undefined"!=typeof a?b.exports=o:"function"==typeof define&&define.amd?define("asyncStorage",function(){return o}):this.asyncStorage=o}}).call(window)},{promise:31}],34:[function(a,b,c){(function(){"use strict";function c(b){var c=this,d={};if(b)for(var e in b)d[e]=b[e];d.keyPrefix=d.name+"/",c._dbInfo=d;var f=new m(function(b){s===r.DEFINE?a(["localforageSerializer"],b):b(s===r.EXPORT?a("./../utils/serializer"):n.localforageSerializer)});return f.then(function(a){return o=a,m.resolve()})}function d(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=p.length-1;c>=0;c--){var d=p.key(c);0===d.indexOf(a)&&p.removeItem(d)}});return l(c,a),c}function e(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=c.ready().then(function(){var b=c._dbInfo,d=p.getItem(b.keyPrefix+a);return d&&(d=o.deserialize(d)),d});return l(d,b),d}function f(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo.keyPrefix,d=b.length,e=p.length,f=0;e>f;f++){var g=p.key(f),h=p.getItem(g);if(h&&(h=o.deserialize(h)),h=a(h,g.substring(d),f+1),void 0!==h)return h}});return l(d,b),d}function g(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=p.key(a)}catch(e){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return l(d,b),d}function h(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=p.length,d=[],e=0;c>e;e++)0===p.key(e).indexOf(a.keyPrefix)&&d.push(p.key(e).substring(a.keyPrefix.length));return d});return l(c,a),c}function i(a){var b=this,c=b.keys().then(function(a){return a.length});return l(c,a),c}function j(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=c.ready().then(function(){var b=c._dbInfo;p.removeItem(b.keyPrefix+a)});return l(d,b),d}function k(a,b,c){var d=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return new m(function(e,f){o.serialize(b,function(b,g){if(g)f(g);else try{var h=d._dbInfo;p.setItem(h.keyPrefix+a,b),e(c)}catch(i){("QuotaExceededError"===i.name||"NS_ERROR_DOM_QUOTA_REACHED"===i.name)&&f(i),f(i)}})})});return l(e,c),e}function l(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}var m="undefined"!=typeof b&&b.exports&&"undefined"!=typeof a?a("promise"):this.Promise,n=this,o=null,p=null;try{if(!(this.localStorage&&"setItem"in this.localStorage))return;p=this.localStorage}catch(q){return}var r={DEFINE:1,EXPORT:2,WINDOW:3},s=r.WINDOW;"undefined"!=typeof b&&b.exports&&"undefined"!=typeof a?s=r.EXPORT:"function"==typeof define&&define.amd&&(s=r.DEFINE);var t={_driver:"localStorageWrapper",_initStorage:c,iterate:f,getItem:e,setItem:k,removeItem:j,clear:d,length:i,key:g,keys:h};s===r.EXPORT?b.exports=t:s===r.DEFINE?define("localStorageWrapper",function(){return t}):this.localStorageWrapper=t}).call(window)},{"./../utils/serializer":37,promise:31}],35:[function(a,b,c){(function(){"use strict";function c(b){var c=this,d={db:null};if(b)for(var e in b)d[e]="string"!=typeof b[e]?b[e].toString():b[e];var f=new m(function(b){r===q.DEFINE?a(["localforageSerializer"],b):b(r===q.EXPORT?a("./../utils/serializer"):n.localforageSerializer)}),g=new m(function(a,e){try{d.db=p(d.name,String(d.version),d.description,d.size)}catch(f){return c.setDriver(c.LOCALSTORAGE).then(function(){return c._initStorage(b)}).then(a)["catch"](e)}d.db.transaction(function(b){b.executeSql("CREATE TABLE IF NOT EXISTS "+d.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){c._dbInfo=d,a()},function(a,b){e(b)})})});return f.then(function(a){return o=a,g})}function d(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new m(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=o.deserialize(d)),b(d)},function(a,b){d(b)})})})["catch"](d)});return l(d,b),d}function e(a,b){var c=this,d=new m(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT * FROM "+e.storeName,[],function(c,d){for(var e=d.rows,f=e.length,g=0;f>g;g++){var h=e.item(g),i=h.value;if(i&&(i=o.deserialize(i)),i=a(i,h.key,g+1),void 0!==i)return void b(i)}b()},function(a,b){d(b)})})})["catch"](d)});return l(d,b),d}function f(a,b,c){var d=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=new m(function(c,e){d.ready().then(function(){void 0===b&&(b=null);var f=b;o.serialize(b,function(b,g){if(g)e(g);else{var h=d._dbInfo;h.db.transaction(function(d){d.executeSql("INSERT OR REPLACE INTO "+h.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){c(f)},function(a,b){e(b)})},function(a){a.code===a.QUOTA_ERR&&e(a)})}})})["catch"](e)});return l(e,c),e}function g(a,b){var c=this;"string"!=typeof a&&(window.console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new m(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})})["catch"](d)});return l(d,b),d}function h(a){var b=this,c=new m(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})})["catch"](c)});return l(c,a),c}function i(a){var b=this,c=new m(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})})["catch"](c)});return l(c,a),c}function j(a,b){var c=this,d=new m(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})})["catch"](d)});return l(d,b),d}function k(a){var b=this,c=new m(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})})["catch"](c)});return l(c,a),c}function l(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}var m="undefined"!=typeof b&&b.exports&&"undefined"!=typeof a?a("promise"):this.Promise,n=this,o=null,p=this.openDatabase;if(p){var q={DEFINE:1,EXPORT:2,WINDOW:3},r=q.WINDOW;"undefined"!=typeof b&&b.exports&&"undefined"!=typeof a?r=q.EXPORT:"function"==typeof define&&define.amd&&(r=q.DEFINE);var s={_driver:"webSQLStorage",_initStorage:c,iterate:e,getItem:d,setItem:f,removeItem:g,clear:h,length:i,key:j,keys:k};r===q.DEFINE?define("webSQLStorage",function(){return s}):r===q.EXPORT?b.exports=s:this.webSQLStorage=s}}).call(window)},{"./../utils/serializer":37,promise:31}],36:[function(a,b,c){(function(){"use strict";function c(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function d(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)b.hasOwnProperty(c)&&(p(b[c])?arguments[0][c]=b[c].slice():arguments[0][c]=b[c])}return arguments[0]}function e(a){for(var b in i)if(i.hasOwnProperty(b)&&i[b]===a)return!0;return!1}function f(a){this._config=d({},m,a),this._driverSet=null,this._ready=!1,this._dbInfo=null;for(var b=0;b<k.length;b++)c(this,k[b]);this.setDriver(this._config.driver)}var g="undefined"!=typeof b&&b.exports&&"undefined"!=typeof a?a("promise"):this.Promise,h={},i={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage"},j=[i.INDEXEDDB,i.WEBSQL,i.LOCALSTORAGE],k=["clear","getItem","iterate","key","keys","length","removeItem","setItem"],l={DEFINE:1,EXPORT:2,WINDOW:3},m={description:"",driver:j.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},n=l.WINDOW;"undefined"!=typeof b&&b.exports&&"undefined"!=typeof a?n=l.EXPORT:"function"==typeof define&&define.amd&&(n=l.DEFINE);var o=function(a){var b=b||a.indexedDB||a.webkitIndexedDB||a.mozIndexedDB||a.OIndexedDB||a.msIndexedDB,c={};return c[i.WEBSQL]=!!a.openDatabase,c[i.INDEXEDDB]=!!function(){if("undefined"!=typeof a.openDatabase&&a.navigator&&a.navigator.userAgent&&/Safari/.test(a.navigator.userAgent)&&!/Chrome/.test(a.navigator.userAgent))return!1;try{
return b&&"function"==typeof b.open&&"undefined"!=typeof a.IDBKeyRange}catch(c){return!1}}(),c[i.LOCALSTORAGE]=!!function(){try{return a.localStorage&&"setItem"in a.localStorage&&a.localStorage.setItem}catch(b){return!1}}(),c}(this),p=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},q=this;f.prototype.INDEXEDDB=i.INDEXEDDB,f.prototype.LOCALSTORAGE=i.LOCALSTORAGE,f.prototype.WEBSQL=i.WEBSQL,f.prototype.config=function(a){if("object"==typeof a){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a)"storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),this._config[b]=a[b];return"driver"in a&&a.driver&&this.setDriver(this._config.driver),!0}return"string"==typeof a?this._config[a]:this._config},f.prototype.defineDriver=function(a,b,c){var d=new g(function(b,c){try{var d=a._driver,f=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),i=new Error("Custom driver name already in use: "+a._driver);if(!a._driver)return void c(f);if(e(a._driver))return void c(i);for(var j=k.concat("_initStorage"),l=0;l<j.length;l++){var m=j[l];if(!m||!a[m]||"function"!=typeof a[m])return void c(f)}var n=g.resolve(!0);"_support"in a&&(n=a._support&&"function"==typeof a._support?a._support():g.resolve(!!a._support)),n.then(function(c){o[d]=c,h[d]=a,b()},c)}catch(p){c(p)}});return d.then(b,c),d},f.prototype.driver=function(){return this._driver||null},f.prototype.ready=function(a){var b=this,c=new g(function(a,c){b._driverSet.then(function(){null===b._ready&&(b._ready=b._initStorage(b._config)),b._ready.then(a,c)})["catch"](c)});return c.then(a,a),c},f.prototype.setDriver=function(b,c,d){function f(){i._config.driver=i.driver()}var i=this;return"string"==typeof b&&(b=[b]),this._driverSet=new g(function(c,d){var f=i._getFirstSupportedDriver(b),j=new Error("No available storage method found.");if(!f)return i._driverSet=g.reject(j),void d(j);if(i._dbInfo=null,i._ready=null,e(f)){var k=new g(function(b){if(n===l.DEFINE)a([f],b);else if(n===l.EXPORT)switch(f){case i.INDEXEDDB:b(a("./drivers/indexeddb"));break;case i.LOCALSTORAGE:b(a("./drivers/localstorage"));break;case i.WEBSQL:b(a("./drivers/websql"))}else b(q[f])});k.then(function(a){i._extend(a),c()})}else h[f]?(i._extend(h[f]),c()):(i._driverSet=g.reject(j),d(j))}),this._driverSet.then(f,f),this._driverSet.then(c,d),this._driverSet},f.prototype.supports=function(a){return!!o[a]},f.prototype._extend=function(a){d(this,a)},f.prototype._getFirstSupportedDriver=function(a){if(a&&p(a))for(var b=0;b<a.length;b++){var c=a[b];if(this.supports(c))return c}return null},f.prototype.createInstance=function(a){return new f(a)};var r=new f;n===l.DEFINE?define("localforage",function(){return r}):n===l.EXPORT?b.exports=r:this.localforage=r}).call(window)},{"./drivers/indexeddb":33,"./drivers/localstorage":34,"./drivers/websql":35,promise:31}],37:[function(a,b,c){(function(){"use strict";function c(a,b){var c="";if(a&&(c=a.toString()),a&&("[object ArrayBuffer]"===a.toString()||a.buffer&&"[object ArrayBuffer]"===a.buffer.toString())){var d,e=h;a instanceof ArrayBuffer?(d=a,e+=j):(d=a.buffer,"[object Int8Array]"===c?e+=l:"[object Uint8Array]"===c?e+=m:"[object Uint8ClampedArray]"===c?e+=n:"[object Int16Array]"===c?e+=o:"[object Uint16Array]"===c?e+=q:"[object Int32Array]"===c?e+=p:"[object Uint32Array]"===c?e+=r:"[object Float32Array]"===c?e+=s:"[object Float64Array]"===c?e+=t:b(new Error("Failed to get type for BinaryArray"))),b(e+f(d))}else if("[object Blob]"===c){var g=new FileReader;g.onload=function(){var a=f(this.result);b(h+k+a)},g.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(i){window.console.error("Couldn't convert value into a JSON string: ",a),b(null,i)}}function d(a){if(a.substring(0,i)!==h)return JSON.parse(a);var b=a.substring(u),c=a.substring(i,u),d=e(b);switch(c){case j:return d;case k:return new Blob([d]);case l:return new Int8Array(d);case m:return new Uint8Array(d);case n:return new Uint8ClampedArray(d);case o:return new Int16Array(d);case q:return new Uint16Array(d);case p:return new Int32Array(d);case r:return new Uint32Array(d);case s:return new Float32Array(d);case t:return new Float64Array(d);default:throw new Error("Unkown type: "+c)}}function e(a){var b,c,d,e,f,h=.75*a.length,i=a.length,j=0;"="===a[a.length-1]&&(h--,"="===a[a.length-2]&&h--);var k=new ArrayBuffer(h),l=new Uint8Array(k);for(b=0;i>b;b+=4)c=g.indexOf(a[b]),d=g.indexOf(a[b+1]),e=g.indexOf(a[b+2]),f=g.indexOf(a[b+3]),l[j++]=c<<2|d>>4,l[j++]=(15&d)<<4|e>>2,l[j++]=(3&e)<<6|63&f;return k}function f(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=g[c[b]>>2],d+=g[(3&c[b])<<4|c[b+1]>>4],d+=g[(15&c[b+1])<<2|c[b+2]>>6],d+=g[63&c[b+2]];return c.length%3===2?d=d.substring(0,d.length-1)+"=":c.length%3===1&&(d=d.substring(0,d.length-2)+"=="),d}var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h="__lfsc__:",i=h.length,j="arbf",k="blob",l="si08",m="ui08",n="uic8",o="si16",p="si32",q="ur16",r="ui32",s="fl32",t="fl64",u=i+j.length,v={serialize:c,deserialize:d,stringToBuffer:e,bufferToString:f};"undefined"!=typeof b&&b.exports&&"undefined"!=typeof a?b.exports=v:"function"==typeof define&&define.amd?define("localforageSerializer",function(){return v}):this.localforageSerializer=v}).call(window)},{}]},{},[2]);
(function app_data(data, $) {

var force_update = false;

/**
 * loads the database from local
 * sets up a Promise on all data loading/updating
 * @memberOf data
 */
data.load = function load() {

	var fdb = new ForerunnerDB();
	data.db = fdb.db('galacolliderdb');

	data.masters = {
		packs: data.db.collection('master_pack', {primaryKey:'code', changeTimestamp: true}),
		cards: data.db.collection('master_card', {primaryKey:'code', changeTimestamp: true})
	};

	data.dfd = {
		packs: new $.Deferred(),
		cards: new $.Deferred()
	};

	$.when(data.dfd.packs, data.dfd.cards).done(data.update_done).fail(data.update_fail);

	data.masters.packs.load(function (err) {
		if(err) {
			console.log('error when loading packs', err);
			data.dfd.packs.reject(false);
			return;
		}
		data.masters.cards.load(function (err) {
			if(err) {
				console.log('error when loading cards', err);
				data.dfd.cards.reject(false);
				return;
			}

			/*
			 * data has been fetched from local store
			 */

			/*
			 * if database is older than 10 days, we assume it's obsolete and delete it
			 */
			var age_of_database = new Date() - new Date(data.masters.cards.metaData().lastChange);
			if(age_of_database > 864000000) {
				console.log('database is older than 10 days => refresh it');
				data.masters.packs.setData([]);
				data.masters.cards.setData([]);
			}

			/*
			 * if database is empty, we will wait for the new data
			 */
			if(data.masters.packs.count() === 0 || data.masters.cards.count() === 0) {
				console.log('database is empty => load it');
				force_update = true;
			}

			/*
			 * triggering event that data is loaded
			 */
			if(!force_update) {
				data.release();
			}

			/*
			 * then we ask the server if new data is available
			 */
			data.query();
		});
	});
}

/**
 * release the data for consumption by other modules
 * @memberOf data
 */
data.release = function release() {
	data.packs = data.db.collection('pack', {primaryKey:'code', changeTimestamp: false});
	data.packs.setData(data.masters.packs.find());

	data.cards = data.db.collection('card', {primaryKey:'code', changeTimestamp: false});
	data.cards.setData(data.masters.cards.find());

	$(document).trigger('data.app');
}

/**
 * queries the server to update data
 * @memberOf data
 */
data.query = function query() {
	$.ajax({
		url: Routing.generate('api_sets'),
		success: data.parse_packs,
		error: function (jqXHR, textStatus, errorThrown) {
			console.log('error when requesting sets', errorThrown);
			data.dfd.packs.reject(true);
		}
	});

	$.ajax({
		url: Routing.generate('api_cards'),
		success: data.parse_cards,
		error: function (jqXHR, textStatus, errorThrown) {
			console.log('error when requesting cards', errorThrown);
			data.dfd.cards.reject(true);
		}
	});
};

/**
 * called if all operations (load+update) succeed (resolve)
 * deferred returns true if data has been updated
 * @memberOf data
 */
data.update_done = function update_done(packs_updated, cards_updated) {
	if(force_update) {
		data.release();
		return;
	}

	if(packs_updated || cards_updated) {
		/*
		 * we display a message informing the user that they can reload their page to use the updated data
		 * except if we are on the front page, because data is not essential on the front page
		 */
		if($('.site-title').size() === 0) {
			var message = "A new version of the data is available. Click <a href=\"javascript:window.location.reload(true)\">here</a> to reload your page.";
			var alert = $('<div class="alert alert-warning"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+message+'</div>');
			$('#wrapper>div.main.container:first').prepend(alert);
		}
	}
};

/**
 * called if an operation (load+update) fails (reject)
 * deferred returns true if data has been loaded
 * @memberOf data
 */
data.update_fail = function update_fail(packs_loaded, cards_loaded) {
	if(!packs_loaded || !cards_loaded) {
		var message = "Unable to load the data. Click <a href=\"javascript:window.location.reload(true)\">here</a> to reload your page.";
		var alert = $('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+message+'</div>');
		$('#wrapper>div.container').prepend(alert);
	} else {
		var message = "Unable to update the data. Click <a href=\"javascript:window.location.reload(true)\">here</a> to reload your page.";
		var alert = $('<div class="alert alert-warning"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+message+'</div>');
		$('#wrapper>div.container').prepend(alert);
	}
};

/**
 * updates the database if necessary, from fetched data
 * @memberOf data
 */
data.update_collection = function update_collection(data, collection, lastModifiedData, deferred) {
	var lastChangeDatabase = new Date(collection.metaData().lastChange)
	var is_collection_updated = false;

	/*
	 * if we decided to force the update,
	 * or if the database is fresh,
	 * or if the database is older than the data,
	 * then we update the database
	 */
	if(force_update || !lastChangeDatabase || lastChangeDatabase < lastModifiedData) {
		console.log('data is newer than database or update forced => update the database')
		collection.setData(data);
		is_collection_updated = true;
	}

	collection.save(function (err) {
		if(err) {
			console.log('error when saving '+collection.name(), err);
			deferred.reject(true)
		} else {
			deferred.resolve(is_collection_updated);
		}
	});
}

/**
 * handles the response to the ajax query for packs data
 * @memberOf data
 */
data.parse_packs = function parse_packs(response, textStatus, jqXHR) {
	var lastModified = new Date(jqXHR.getResponseHeader('Last-Modified'));
	data.update_collection(response, data.masters.packs, lastModified, data.dfd.packs);
};

/**
 * handles the response to the ajax query for the cards data
 * @memberOf data
 */
data.parse_cards = function parse_cards(response, textStatus, jqXHR) {
	var lastModified = new Date(jqXHR.getResponseHeader('Last-Modified'));
	data.update_collection(response, data.masters.cards, lastModified, data.dfd.cards);
};

$(function() {
	data.load();
});

})(app.data = {}, jQuery);

(function app_format(format, $) {

/**
* @memberOf format
*/
format.modules = function modules(card) {
  var text = card.module_one ? '<div class="ship-module">' + card.module_one + (card.modval_one ? ' ' + card.modval_one: '') + '</div>' : '';
  text += card.module_two ? '<div class="ship-module">' + card.module_two + (card.modval_two ? ' ' + card.modval_two : '') + '</div>' : '';
  text += card.module_three ? '<div class="ship-module">' + card.module_three + (card.modval_three ? ' ' + card.modval_three : '') + '</div>' : '';
  return text;
};

/**
* @memberOf format
*/
format.name = function name(card) {
  return card.name;
}

/**
 * @memberOf format
 */
format.faction = function faction(card) {
  return card.faction_name;
}

/**
* @memberOf format
*/
format.pack = function pack(card) {
  return card.pack_name + ' Set #' + card.code;
}

/**
* @memberOf format
*/
format.pack_faction = function pack_faction(card) {
  var text = card.pack_name /*+ ' #' + card.position*/ + '. ';
  text += card.faction_name + '. ';
  return text;
}

/**
* @memberOf format
*/
format.info = function info(card) {
  var text = card.is_unique ? '<span class="icon-unique"></span><span> &bull; </span>' : '';
  text += card.is_hq ? '<span class="icon-hq"></span><span> &bull; </span>' : '';
  text += '<span class="' + ((card.oper_type == 'Infinite') ? 'icon-infinite' : ((card.oper_type == 'Void') ? 'icon-void' : '')) + '"></span>';
  text += '<span class="card-type">' + card.type_name + '</span><span> &bull; </span>';
  text += card.size ? '<span class="ship-size">' + card.size + '</span><span> &bull; </span>' : '';
  text += '<span class="card-tech-level">Tech Level: ' + card.tech_level + '</span>';
  return text;
}

/**
* @memberOf format
*/
format.resources = function resources(card) {
  var text = card.materials ? '<span class="icon-materials"></span><span>' + card.materials + '</span> ' : '';
  text += card.research ? '<span class="icon-research"></span><span>' + card.research + '</span> ' : '';
  text += card.energy ? '<span class="icon-energy"></span><span>' + card.energy + '</span> ' : '';
  return text;
}

/**
* @memberOf format
*/
format.aspects = function aspects(card) {
  var text = '';
  
  if (card.type_code == 'ship') {
    text += '<span class="icon-attack block"></span><span>' + card.attack + '</span>';
    text += '<span class="icon-hull block"></span><span>' + card.hull + '</span>';
  }
  
  if (card.type_code in ['development', 'sector', 'core-world']) {
    text += '<span class="icon-stars"></span><span>' + card.stars + '</span>';
  }
  
  text += card.space_attack ? '<span class="icon-attack"></span><span>' + card.space_attack + '</span> ' : '';
  text += card.tech_slots ? '<span class="icon-tech-slots"></span><span>' + card.tech_slots + '</span> ' : '';
  text += card.build_slot ? '<span class="icon-build-slots"></span><span>' + card.build_slot + '</span> ' : '';
  text += card.infantry ? '<span class="icon-infantry"></span><span>' + card.infantry + '</span> ' : '';
  
  if (card.type_code == 'development') {
    text += '<span class="icon-structure"></span><span>' + card.structure + '</span>';
  }
  return text;
};

/**
* @memberOf format
*/
format.effect = function effect(card) {
  return card.effect || '';
};

})(app.format = {}, jQuery);

(function app_tip(tip, $) {

var cards_zoom_regexp = /card\/(\d\d\d\d\d)$/,
	mode = 'text';

function display_card_on_element(card, element, event) {
	var content;
	if(mode == 'text') {
		var image = "";//card.imagesrc ? '<div class="card-thumbnail card-thumbnail-'+(card.type_code === 'plot' ? 4 : 3)+'x card-thumbnail-'+card.type_code+'" style="background-image:url('+card.imagesrc+')"></div>' : "";

		content = image
		+ '<h4 class="card-name">' + app.format.name(card) + '</h4>'
    + '<p class="card-info">' + app.format.info(card) + '</p>'
    + '<p class="card-resources">' + app.format.resources(card) + '</p>'
		+ '<p class="card-modules">' + app.format.modules(card) + '</p>'
    + '<p class="card-effect">' + app.format.effect(card) + '</p>'
		+ '<p class="card-aspects">' + app.format.aspects(card) + '</p>'
    + '<div class="card-pack-faction">'
    + '<span class="card-pack pull-right" style="clear:right">' + app.format.pack(card) + '</span>'
		+ '<span class="card-faction">' + app.format.faction(card) + '</span>'
    + '</div>'
	}
	else {
		content = card.imagesrc ? '<img src="'+card.imagesrc+'">' : "";
	}

	$(element).qtip(
			{
				content : {
					text : content
				},
				style : {
					classes : 'card-content qtip-bootstrap qtip-thronesdb qtip-thronesdb-' + mode
				},
				position : {
					my : mode == 'text' ? 'center left' : 'top left',
					at : mode == 'text' ? 'center right' : 'bottom right',
					viewport : $(window)
				},
				show : {
					event : event.type,
					ready : true,
					solo : true
				}/*,
				hide : {
					event: 'unfocus'
				}*/
			}, event);
}

/**
 * @memberOf tip
 * @param event
 */
tip.display = function display(event) {
	var code = $(this).data('code');
	var card = app.data.cards.findById(code);
	if (!card) return;
	display_card_on_element(card, this, event);
};

/**
 * @memberOf tip
 * @param event
 */
tip.guess = function guess(event) {
	var href = $(this).attr('href');
	if(href && href.match(cards_zoom_regexp)) {
		var code = RegExp.$1;
		var generated_url = Routing.generate('cards_zoom', {card_code:code}, true);
		var card = app.data.cards.findById(code);
		if(card && href === generated_url) {
			display_card_on_element(card, this, event);
		}
	}
}

tip.set_mode = function set_mode(opt_mode) {
	if(opt_mode == 'text' || opt_mode == 'image') {
		mode = opt_mode;
	}
}

$(document).on('start.app', function () {

	if(!Modernizr.touch) {
		$('body').on({
			mouseover : tip.display
		}, 'a.card-tip');

		$('body').on({
			mouseover : tip.guess
		}, 'a:not(.card-tip)');
	}

});

})(app.tip = {}, jQuery);

(function app_card_modal(card_modal, $) {

var modal = null;

/**
 * @memberOf card_modal
 */
card_modal.display_modal = function display_modal(event, element) {
	event.preventDefault();
	$(element).qtip('destroy', true);
	fill_modal($(element).data('code'));
};

/**
 * builds a row for the list of available cards
 * @memberOf ui
 */
card_modal.build_row = function build_row(card) {
  // can't add core worlds to deck or view page cards
  if (card.type_code == 'core-world' || typeof card.maxqty == 'undefined' || card.maxqty < 1) {
    return;
  }

  var inputTpl = _.template(
    ' <span class="<%= deck_name %>"><%= title %> <input class="qty" type="number" min="0" max="<%= max_qty %>" name="<%= inp_name %>" value="<%= val %>" data-deck="<%= deck_name %>" data-code="<%= code %>"></span> '
  );

  var inp_maindeck = inputTpl({
    title: 'MainDeck: ',
    max_qty: card.maxqty - card.tech_pool,
    inp_name: 'main_deck-' + card.code,
    code: card.code,
    val: card.main_deck,
    deck_name: 'main_deck'
  });

  var inp_techpool = inputTpl({
    title: 'TechPool: ',
    max_qty: card.maxqty - card.main_deck,
    inp_name: 'tech_pool-' + card.code,
    code: card.code,
    val: card.tech_pool,
    deck_name: 'tech_pool'
  });

  var inp_indeck = inputTpl({
    title: 'Total: ',
    max_qty: card.maxqty,
    inp_name: 'qty-' + card.code,
    code: card.code,
    val: card.indeck,
    deck_name: 'indeck'
  });

  return $(inp_maindeck + inp_techpool + inp_indeck);
}

function fill_modal (code) {
	var card = app.data.cards.findById(code),
		modal = $('#cardModal');

	if(!card) return;

	modal.data('code', code);
	modal.find('.card-modal-link').attr('href', card.url);
	modal.find('h3.modal-title').html(app.format.name(card));
	modal.find('.modal-image').html('<img class="img-responsive" src="'+card.imagesrc+'">');
	modal.find('.modal-info').html(
    '<h4 class="card-name">' + app.format.name(card) + '</h4>'
    + '<p class="card-info">' + app.format.info(card) + '</p>'
    + '<p class="card-resources">' + app.format.resources(card) + '</p>'
    + '<p class="card-modules">' + app.format.modules(card) + '</p>'
    + '<p class="card-effect">' + app.format.effect(card) + '</p>'
    + '<p class="card-aspects">' + app.format.aspects(card) + '</p>'
    + '<div class="card-pack-faction">'
    + '<span class="card-pack pull-right" style="clear:right">' + app.format.pack(card) + '</span>'
    + '<span class="card-faction">' + app.format.faction(card) + '</span>'
    + '</div>'
	);

  modal.find('.modal-qty').html(card_modal.build_row(card));
  modal.find('.modal-qty input[name^=qty]').prop('type', 'text').prop('disabled', true);
  if (app.deck.is_flex_only(card)) {
    modal.find('.modal-qty span.main_deck').hide();
  }
}

$(function () {

	$('body').on({click: function (event) {
		var element = $(this);
		if(event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) {
			event.stopPropagation();
			return;
		}
		card_modal.display_modal(event, element);
	}}, '.card');

})

})(app.card_modal = {}, jQuery);

(function app_user(user, $) {

user.params = {};
user.deferred = $.Deferred().always(function() {
	if(user.data) {
		user.update();
	} else {
		user.anonymous();
	}
	user.always();
});

/**
 * @memberOf user
 */
user.query = function query() {
	$.ajax(Routing.generate('user_info', user.params), {
		cache: false,
		dataType: 'json',
		success: function(data, textStatus, jqXHR) {
			user.data = data;
			user.deferred.resolve();
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log('['+moment().format('YYYY-MM-DD HH:mm:ss')+'] Error on '+this.url, textStatus, errorThrown);
			user.deferred.reject();
		}
	});
};

/**
 * @memberOf user
 */
user.retrieve = function retrieve() {
	if(localStorage) {
		var timestamp = new Date(parseInt(localStorage.getItem('user_timestamp'),10));
		var now = new Date();
		if(now - timestamp < 3600000) {
			var storedData = localStorage.getItem('user');
			if(storedData) {
				user.data = JSON.parse(storedData);
				user.deferred.resolve();
				return;
			}
		}
	}
	user.query();
};

/**
 * @memberOf user
 */
user.wipe = function wipe() {
	localStorage.removeItem('user');
	localStorage.removeItem('user_timestamp');
};

/**
 * @memberOf user
 */
user.store = function store() {
	localStorage.setItem('user', JSON.stringify(user.data));
	localStorage.setItem('user_timestamp', new Date().getTime());
};

/**
 * @memberOf user
 */
user.anonymous = function anonymous() {
	user.wipe();
	$('#login').append('<ul class="dropdown-menu"><li><a href="'+Routing.generate('fos_user_security_login')+'">Login or Register</a></li></ul>');
};

/**
 * @memberOf user
 */
user.update = function update() {
	user.store();
  $('#login').addClass('dropdown').append('<ul class="dropdown-menu">'
    + '<li><a href="'
    + Routing.generate('user_profile_edit')
    + '">Edit account</a></li><li><a href="'
    + user.data.public_profile_url
    + '">Public profile</a></li><li><a href="'
    + Routing.generate('fos_user_security_logout')
    + '" onclick="app.user.wipe()">Log out</a></li></ul>');
  if (user.data.is_admin) {
    $('#login .dropdown-menu').prepend('<li>Admin</li>'
      + '<li><a href="'
      + Routing.generate('admin_card')
      + '">Cards</a></li><li><a href="'
      + Routing.generate('admin_pack')
      + '">Packs</a></li><li><a href="'
      + Routing.generate('admin_cycle')
      + '">Cycles</a></li>'
      + '<li>User</li>');
  }
};

/**
 * @memberOf user
 */
user.always = function always() {
	return;

	// show ads if not donator
	if(user.data && user.data.donation > 0) return;

	adsbygoogle = window.adsbygoogle || [];

	$('div.ad').each(function (index, element) {
		$(element).show();
		adsbygoogle.push({});
	});

	if($('ins.adsbygoogle').filter(':visible').length === 0) {
		$('div.ad').each(function (index, element) {
			$(element).addClass('ad-blocked').html("No ad,<br>no <span class=\"icon icon-credit\"></span>.<br>Like app?<br>Whitelist us<br>or <a href=\""+Routing.generate('donators')+"\">donate</a>.");
		});
	}
}

$(function() {
	if($.isEmptyObject(user.params)) {
		user.retrieve();
	} else {
		user.query();
	}
});

})(app.user = {}, jQuery);

/**
 * binomial coefficient module, shamelessly ripped from https://github.com/pboyer/binomial.js
 */
(function app_binomial(binomial, $) {
	
	var memo = [];
	
	/**
	 * @memberOf binomial
	 */
	binomial.get = function(n, k) {
		if (k === 0) {
			return 1;
		}
		if (n === 0 || k > n) {
			return 0;
		}
		if (k > n - k) {
        	k = n - k;
        }
		if ( memo_exists(n,k) ) {
			return get_memo(n,k);
		}
	    var r = 1,
	    	n_o = n;
	    for (var d=1; d <= k; d++) {
	    	if ( memo_exists(n_o, d) ) {
	    		n--;
	    		r = get_memo(n_o, d);
	    		continue;
	    	}
			r *= n--;
	  		r /= d;
	  		memoize(n_o, d, r);
	    }
	    return r;
	};
	
	function memo_exists(n, k) {
		return ( memo[n] != undefined && memo[n][k] != undefined );
	}
	
	function get_memo(n, k) {
		return memo[n][k];
	}
	
	function memoize(n, k, val) {
		if ( memo[n] === undefined ) {
			memo[n] = [];
		}
		memo[n][k] = val;
	}
	
})(app.binomial = {}, jQuery);

/**
 * hypergeometric distribution module, homemade
 */ 
(function app_hypergeometric(hypergeometric, $) {
	
	var memo = [];
	
	/**
	 * @memberOf hypergeometric
	 */
	hypergeometric.get = function(k, N, K, n) {
		if ( !k || !N || !K || !n ) return 0;
		if ( memo_exists(k, N, K, n) ) {
			return get_memo(k, N, K, n);
		}
		if ( memo_exists(n - k, N, N - K, n) ) {
			return get_memo(n - k, N, N - K, n);
		}
		if ( memo_exists(K - k, N, K, N - n) ) {
			return get_memo(K - k, N, K, N - n);
		}
		if ( memo_exists(k, N, n, K) ) {
			return get_memo(k, N, n, K);
		}
		var d = app.binomial.get(N, n);
		if(d === 0) return 0;
		var r = app.binomial.get(K, k) * app.binomial.get(N - K, n - k) / d;
		memoize(k, N, K, n, r);
		return r;
	}
	
	/**
	 * @memberOf hypergeometric
	 */
	hypergeometric.get_cumul = function(k, N, K, n) {
		var r = 0;
		for(; k <= n; k++) {
			r += hypergeometric.get(k, N, K, n);
		}
		return r;
	}
	
	/**
	 * @memberOf hypergeometric
	 */
	function memo_exists(k, N, K, n) {
		return ( memo[k] != undefined && memo[k][N] != undefined && memo[k][N][K] != undefined && memo[k][N][K][n] != undefined );
	}
	
	/**
	 * @memberOf hypergeometric
	 */
	function get_memo(k, N, K, n) {
		return memo[k][N][K][n];
	}
	
	/**
	 * @memberOf hypergeometric
	 */
	function memoize(k, N, K, n, val) {
		if ( memo[k] === undefined ) {
			memo[k] = [];
		}
		if ( memo[k][N] === undefined ) {
			memo[k][N] = [];
		}
		if ( memo[k][N][K] === undefined ) {
			memo[k][N][K] = [];
		}
		memo[k][N][K][n] = val;
	}
	
})(app.hypergeometric = {}, jQuery);

(function app_draw_simulator(draw_simulator, $) {

var deck = null,
	initial_size = 0,
	draw_count = 0,
	container = null;

/**
 * @memberOf draw_simulator
 */
draw_simulator.reset = function reset() {
	$(container).empty();
	draw_simulator.on_data_loaded();
	draw_count = 0;
	draw_simulator.update_odds();
	$('#draw-simulator-clear').prop('disabled', true);
};

/**
 * @memberOf draw_simulator
 */
draw_simulator.on_dom_loaded = function on_dom_loaded() {
	$('#table-draw-simulator').on('click', 'button.btn', draw_simulator.handle_click);
	$('#table-draw-simulator').on('click', 'img, div.card-proxy', draw_simulator.toggle_opacity);
	container = $('#table-draw-simulator-content');
}

/**
 * @memberOf draw_simulator
 */
draw_simulator.on_data_loaded = function on_data_loaded() {
	deck = [];

	var cards = app.deck.get_draw_deck();
	cards.forEach(function (card) {
		for(var ex = 0; ex < card.indeck; ex++) {
			deck.push(card);
		}
	});
	initial_size = deck.length;
}

/**
 * @memberOf draw_simulator
 */
draw_simulator.update_odds = function update_odds() {
	for(var i=1; i<=3; i++) {
		var odd = app.hypergeometric.get_cumul(1, initial_size, i, draw_count);
		$('#draw-simulator-odds-'+i).text(Math.round(100*odd));
	}
}

/**
 * @memberOf draw_simulator
 * @param draw integer
 */
draw_simulator.do_draw = function do_draw(draw) {
	for(var pick = 0; pick < draw && deck.length > 0; pick++) {
		var rand = Math.floor(Math.random() * deck.length);
		var spliced = deck.splice(rand, 1);
		var card = spliced[0];
		var card_element;
		if(card.imagesrc) {
			card_element = $('<img src="'+card.imagesrc+'">');
		} else {
			card_element = $('<div class="card-proxy"><div>'+card.name+'</div></div>');
		}
		container.append(card_element);
		draw_count++;
	}
	draw_simulator.update_odds();
}

/**
 * @memberOf draw_simulator
 */
draw_simulator.handle_click = function handle_click(event) {

	event.preventDefault();

	var command = $(this).data('command');
	$('[data-command=clear]').prop('disabled', false);
	if(command === 'clear') {
		draw_simulator.reset();
		return;
	}
	if(event.shiftKey) {
		draw_simulator.reset();
	}
	var draw;
	if(command === 'all') {
		draw = deck.length;
	} else {
		draw = command;
	}

	if(isNaN(draw)) return;
	draw_simulator.do_draw(draw);

};

/**
 * @memberOf draw_simulator
 */
draw_simulator.toggle_opacity = function toggle_opacity(event) {
	$(this).css('opacity', 1.5 - parseFloat($(this).css('opacity')));
};

})(app.draw_simulator = {}, jQuery);

(function app_textcomplete(textcomplete, $) {

var icons = 'baratheon greyjoy intrigue lannister martell military nightswatch power stark targaryen tyrell unique plot attachment location character event agenda neutral'.split(' ');

/**
 * options: cards, icons, users
 */
textcomplete.setup = function setup(textarea, options) {

	options = _.extend({cards: true, icons: true, users: false}, options);

	var actions = [];

	if(options.cards) {
		actions.push({
			match : /\B#([\-+\w]*)$/,
			search : function(term, callback) {
				var regexp = new RegExp('\\b' + term, 'i');
				callback(app.data.cards.find({
					name : regexp
				}));
			},
			template : function(value) {
				return value.name;
			},
			replace : function(value) {
				return '<a href="'+Routing.generate('cards_zoom', {card_code:value.code})+'" class="card-tip" data-code="'+value.code+'">'+value.name+'</a>';
				return '[' + value.name + ']('
						+ Routing.generate('cards_zoom', {card_code:value.code})
						+ ')';
			},
			index : 1
		})
	}

	if(options.icons) {
		actions.push({
			match : /\$([\-+\w]*)$/,
			search : function(term, callback) {
				var regexp = new RegExp('^' + term, 'i');
				callback(_.filter(icons,
					function(symbol) { return regexp.test(symbol); }
				));
			},
			template : function(value) {
				return value;
			},
			replace : function(value) {
				return '<span class="icon-' + value + '"></span>';
			},
			index : 1
		});
	}

	if(options.users) {
		actions.push({
			match : /\B@([\-+\w]*)$/,
			search : function(term, callback) {
				var regexp = new RegExp('^' + term, 'i');
				callback($.grep(options.users, function(user) {
					return regexp.test(user);
				}));
			},
			template : function(value) {
				return value;
			},
			replace : function(value) {
				return '`@' + value + '`';
			},
			index : 1
		});
	}

	$(textarea).textcomplete(actions);

}

})(app.textcomplete = {}, jQuery);

(function app_markdown(markdown, $) {

	var converter = new Markdown.Converter();

	markdown.setup = function setup(textarea, preview) {

		$(textarea).on('keyup', function() {
			$(preview).html(converter.makeHtml($(textarea).val()))
		});

	}

	markdown.refresh = function refresh(textarea, preview) {

		$(preview).html(converter.makeHtml($(textarea).val()))

	}

	markdown.update = function update(text_markdown, preview) {

		$(preview).html(converter.makeHtml(text_markdown))

	}

})(app.markdown = {}, jQuery);

(function app_smart_filter(smart_filter, $) {

var SmartFilterQuery = [];

var configuration = {
// 	a: [ add_string_sf, 'flavor', "Flavor text" ],
// 	b: [ add_integer_sf, 'claim', "Claim value" ],
	e: [ add_integer_sf, 'energy', "Energy" ],
	f: [ add_string_sf, 'faction_code', "Faction" ],
// 	g: [ add_boolean_sf, 'is_intrigue', "Intrigue icon" ],
	h: [ add_boolean_sf, 'is_hq', "Headquarters" ],
	i: [ add_string_sf, 'art_credit', "Art Credit" ],
// 	k: [ add_string_sf, 'traits', "Traits" ],
	l: [ add_integer_sf, 'tech_level', "Tech. Level" ],
  m: [ add_integer_sf, 'materials', "Materials" ],
// 	n: [ add_integer_sf, 'income', "Gold value" ],
// 	o: [ add_integer_sf, 'cost', "Cost" ],
	p: [ add_string_sf, 'pack_code', "Pack" ],
	r: [ add_integer_sf, 'research', "Research" ],
// 	s: [ add_integer_sf, 'strength', "Strength" ],
	t: [ add_string_sf, 'type_code', "Type" ],
	u: [ add_boolean_sf, 'is_unique', "Uniqueness" ],
// 	v: [ add_integer_sf, 'initiative', "Initiative value" ],
	x: [ add_string_sf, 'effect', "Effect Text" ]
//   y: [ add_integer_sf, 'quantity', "Quantity in pack" ]
};

/**
 * called when the list is refreshed
 * @memberOf smart_filter
 */
smart_filter.get_query =  function get_query(query) {
	return _.extend(query, SmartFilterQuery);
};

/**
 * called when the filter input is modified
 * @memberOf smart_filter
 */
smart_filter.update =  function update(value) {
	var conditions = filterSyntax(value);
  SmartFilterQuery = {};

	for (var i = 0; i < conditions.length; i++) {
		var condition = conditions[i];
		var type = condition.shift();
		var operator = condition.shift();
		var values = condition;

		var tools = configuration[type];
    if (type == '' && values[0].length > 1) {
      tools = [ add_string_sf, 'name' ];
    }
		if (tools) {
			tools[0].call(this, tools[1], operator, values);
		}
	}
};

smart_filter.get_help = function get_help() {
	var items = _.map(configuration, function (value, key) {
    var name = value[0].name.split('_');
		return '<li><tt>'+key+':('+name[1]+')</tt> &ndash; '+value[2]+'</li>';
	});
	return '<ul>'+items.join('')+'</ul><p>'
    + '<div>interger: any number</div>'
    + '<div>string: any characters</div>'
    + '<div>boolean: 0 is false, 1 is true</div>'
    + '</p><p>Example: <tt>m:1 e>3</tt> shows all cards with materials = 1 and energy greater then 3</p>';
}

function add_integer_sf(key, operator, values) {
	for (var j = 0; j < values.length; j++) {
		values[j] = parseInt(values[j], 10);
	}
	switch (operator) {
	case ":":
		SmartFilterQuery[key] = {
			'$in' : values
		};
		break;
	case "<":
		SmartFilterQuery[key] = {
			'$lt' : values[0]
		};
		break;
	case ">":
		SmartFilterQuery[key] = {
			'$gt' : values[0]
		};
		break;
	case "!":
		SmartFilterQuery[key] = {
			'$nin' : values
		};
		break;
	}
}
function add_string_sf(key, operator, values) {
	for (var j = 0; j < values.length; j++) {
		values[j] = new RegExp(values[j], 'i');
	}
	switch (operator) {
	case ":":
		SmartFilterQuery[key] = {
			'$in' : values
		};
		break;
	case "!":
		SmartFilterQuery[key] = {
			'$nin' : values
		};
		break;
	}
}
function add_boolean_sf(key, operator, values) {
	var value = parseInt(values.shift()), target = !!value;
	switch (operator) {
	case ":":
		SmartFilterQuery[key] = target;
		break;
	case "!":
		SmartFilterQuery[key] = {
			'$ne': target
		};
		break;
	}
}
function filterSyntax(query) {
	// renvoie une liste de conditions (array)
	// chaque condition est un tableau à n>1 éléments
	// le premier est le type de condition (0 ou 1 caractère)
	// les suivants sont les arguments, en OR

	query = query.replace(/^\s*(.*?)\s*$/, "$1").replace('/\s+/', ' ');

	var list = [];
	var cond = null;
	// l'automate a 3 états :
	// 1:recherche de type
	// 2:recherche d'argument principal
	// 3:recherche d'argument supplémentaire
	// 4:erreur de parsing, on recherche la prochaine condition
	// s'il tombe sur un argument alors qu'il est en recherche de type, alors le
	// type est vide
	var etat = 1;
	while (query != "") {
		if (etat == 1) {
			if (cond !== null && etat !== 4 && cond.length > 2) {
				list.push(cond);
			}
			// on commence par rechercher un type de condition
			if (query.match(/^(\w)([:<>!])(.*)/)) { // jeton "condition:"
				cond = [ RegExp.$1.toLowerCase(), RegExp.$2 ];
				query = RegExp.$3;
			} else {
				cond = [ "", ":" ];
			}
			etat = 2;
		} else {
			if (   query.match(/^"([^"]*)"(.*)/) // jeton "texte libre entre guillements"
				|| query.match(/^([^\s]+)(.*)/) // jeton "texte autorisé sans guillements"
			) {
				if ((etat === 2 && cond.length === 2) || etat === 3) {
					cond.push(RegExp.$1);
					query = RegExp.$2;
					etat = 2;
				} else {
					// erreur
					query = RegExp.$2;
					etat = 4;
				}
			} else if (query.match(/^\|(.*)/)) { // jeton "|"
				if ((cond[1] === ':' || cond[1] === '!')
						&& ((etat === 2 && cond.length > 2) || etat === 3)) {
					query = RegExp.$1;
					etat = 3;
				} else {
					// erreur
					query = RegExp.$1;
					etat = 4;
				}
			} else if (query.match(/^ (.*)/)) { // jeton " "
				query = RegExp.$1;
				etat = 1;
			} else {
				// erreur
				query = query.substr(1);
				etat = 4;
			}
		}
	}
	if (cond !== null && etat !== 4 && cond.length > 2) {
    list.push(cond);
  }
	return list;
}

$(function() {
	if(!Modernizr.touch) {
		$('.smart-filter-help').tooltip({
			container: 'body',
			delay: 1000,
			html: true,
			placement: 'bottom',
			title: smart_filter.get_help(),
			trigger: 'hover'
		});
	}
})

})(app.smart_filter = {}, jQuery);

(function app_deck(deck, $) {

deck.json = {};

var date_creation,
  date_update,
  description_md,
  history,
  id,
  name,
  slots,
  tags,
  faction_code,
  faction_name,
  unsaved,
  user_id,
  coreworld_code,
  problem_labels = {
    too_many_flex_points: "Contains too many flex points",
    too_few_cards: "Your main deck needs at least 30 cards",
    invalid_cards: "Contains forbidden cards",
    too_many_tech_slots: "Contains too many tech slots",
    too_few_tech_slots: "Contains too few tech slots"
  },
  header_tpl = _.template('<h5><span class="icon icon-<%= code %>"></span> <%= name %> (<%= quantity %>)</h5>'),
  card_line_tpl = _.template('<span class="icon icon-<%= card.type_code %> fg-<%= card.faction_code %>"></span> <a href="<%= card.url %>" class="card card-tip" data-toggle="modal" data-remote="false" data-target="#cardModal" data-code="<%= card.code %>"><%= card.name %></a>');

var deck_min_cards = 30;
var flex_points_max = 12;
var tech_pool_slots = 15;

/**
 * @memberOf deck
 */
deck.init = function init(json) {
  if (json) deck.json = json;
  date_creation = deck.json.date_creation;
  date_update = deck.json.date_update;
  description_md = deck.json.description_md;
  history = deck.json.history;
  id = deck.json.id;
  name = deck.json.name;
  slots = deck.json.slots;
  mainDeck = deck.json.main_deck;
  techPool = deck.json.tech_pool;
  tags = deck.json.tags;
  faction_code = deck.json.faction_code;
  faction_name = deck.json.faction_name;
  unsaved = deck.json.unsaved;
  user_id = deck.json.user_id;
  coreworld_code = deck.json.coreworld_code;
  // flex points
  coreworld = deck.get_coreworld();
  flex_points_max = coreworld.flex_points;
  tech_pool_slots = coreworld.tech_slots;

  app.data.cards.update({}, {
    indeck: 0,
    main_deck: 0,
    tech_pool: 0,
    flex_points: 0
  });

  for (code in slots) {
    if (slots.hasOwnProperty(code)) {
      var currentcard = app.data.cards.findById(code);
      app.data.cards.updateById(code, {
        indeck: slots[code],
        main_deck: mainDeck[code],
        tech_pool: techPool[code],
        flex_points: (faction_code == currentcard.faction_code) ? 0 : (techPool[code] * currentcard.tech_level),
      });
    }
  }
}

/**
 * @memberOf deck
 * @returns string
 */
deck.get_id = function get_id() {
  return id;
}

/**
 * @memberOf deck
 * @returns string
 */
deck.get_name = function get_name() {
  return name;
}

/**
 * @memberOf deck
 * @returns string
 */
deck.get_faction_code = function get_faction_code() {
  return faction_code;
}

/**
 * @memberOf deck
 * @returns string
 */
deck.get_description_md = function get_description_md() {
  return description_md;
}

/**
 * @memberOf deck
 */
deck.get_agendas = function get_agendas() {
  return deck.get_cards(null, {
    type_code: 'agenda'
  });
}

/**
 * @memberOf deck
 */
deck.get_agenda = function get_agenda() {
  var agendas = deck.get_agendas();
  return agendas.length ? agendas[0] : null;
}

/**
 * @memberOf deck
 */
deck.get_coreworld = function get_coreworld() {
  return app.data.cards.findById(coreworld_code);
}

/**
 * @memberOf deck
 */
deck.get_history = function get_history() {
  return history;
}

/**
 * @memberOf deck
 */
deck.get_cards = function get_cards(sort, query) {
  sort = sort || {};
  sort['code'] = 1;

  query = query || {};
  query.indeck = {
    '$gt': 0
  };

  return app.data.cards.find(query, {
    '$orderBy': sort
  });
}

/**
 * @memberOf deck
 */
deck.get_main_deck = function get_main_deck(sort) {
  return deck.get_cards(sort, {
    main_deck: {
      '$gt': 0
    }
  });
}

/**
 * @memberOf deck
 */
deck.get_tech_pool = function get_tech_pool(sort) {
  return deck.get_cards(sort, {
    tech_pool: {
      '$gt': 0
    }
  });
}
/**
 * @memberOf deck
 * @returns the number of tech pool cards
 */
deck.get_tech_pool_size = function get_tech_pool_size(sort) {
  var tech_pool = deck.get_tech_pool();
  return tech_pool.length;
}

/**
 * @memberOf deck
 */
deck.get_draw_deck = function get_draw_deck(sort) {
  return deck.get_cards(sort, {
    type_code: {
      '$nin' : ['agenda','plot']
    }
  });
}

/**
 * @memberOf deck
 */
deck.get_total_deck_size = function get_total_deck_size(sort) {
  var total_deck = deck.get_cards();
  return deck.get_nb_cards(total_deck);
}

/**
 * @memberOf deck
 */
deck.get_flex_points = function get_flex_points() {
  var points = 0;
  var cards = deck.get_cards(null, { faction_code: { '$ne': deck.get_faction_code() }, tech_pool: { '$gt': 0 }});
  cards.forEach(function (card) {
    if (card.tech_pool > 0) {
      points += card.tech_pool * card.tech_level;
    }
  });
  
  return points;
}

/**
 * @memberOf deck
 */
deck.get_plot_deck = function get_plot_deck(sort) {
  return deck.get_cards(sort, {
    type_code: 'plot'
  });
}

/**
 * @memberOf deck
 * @returns the number of plot cards
 */
deck.get_plot_deck_size = function get_plot_deck_size(sort) {
  var plot_deck = deck.get_plot_deck();
  return deck.get_nb_cards(plot_deck);
}

/**
 * @memberOf deck
 * @returns the number of different plot cards
 */
deck.get_plot_deck_variety = function get_plot_deck_variety(sort) {
  var plot_deck = deck.get_plot_deck();
  return plot_deck.length;
}

deck.get_nb_cards = function get_nb_cards(cards, deck) {
  if (!cards) cards = deck.get_cards();
  if (!deck) deck = 'indeck';
  var quantities = _.pluck(cards, deck);
  return _.reduce(quantities, function(memo, num) { return memo + num; }, 0);
}

/**
 * @memberOf deck
 */
deck.get_included_packs = function get_included_packs() {
  var cards = deck.get_cards();
  var nb_packs = {};
  cards.forEach(function (card) {
    nb_packs[card.pack_code] = Math.max(nb_packs[card.pack_code] || 0, card.indeck / card.quantity);
  });
  var pack_codes = _.uniq(_.pluck(cards, 'pack_code'));
  var packs = app.data.packs.find({
    'code': {
      '$in': pack_codes
    }
  }, {
    '$orderBy': {
      'available': 1
    }
  });
  packs.forEach(function (pack) {
    pack.quantity = nb_packs[pack.code] || 0;
  })
  return packs;
}

/**
 * @memberOf deck
 */
deck.display = function display(container, sort) {
  var elements;

  if (sort === 'type') {
    elements = deck.display_by_type();
  }
  else {
    elements = deck.display_by_other();
  }

  $(container)
    .removeClass('deck-loading')
    .empty();

  elements.forEach(function (element) {
    $(container).append(element);
  })
}

deck.display_by_other = function display_by_other() {
  /* to sort cards, we need:
   * name of the key to sort upon
   * label to display for each key
   * order of the values
   */
  var sortKey = '', displayLabel = '', valuesOrder = [];
  switch(sort) {
  case 'faction':
    sortKey = 'faction_code';
    displayLabel = 'faction_name';
    valuesOrder = app.data.cards.distinct('faction_code').sort();
    break;
  }

  var deck_content = $('<div class="deck-content">');

  valuesOrder.forEach(function (sortValue) {
    var query = {
      indeck: {
        '$gt': 0
      }
    };
    query[sortKey] = sortValue;
    var cards = app.data.cards.find(query, {
      '$orderBy': { name: 1 }
    });
    if(!cards.length) return;

    $(header_tpl({name:cards[0][displayLabel], quantity: cards.length})).appendTo(deck_content);
    cards.forEach(function (card) {
      var flex_dots = '';
      for (i = 0; i < card.flex_points; i++) {
        flex_dots += '<span class="flex-points fg-' + card.faction_code +'">&bull;</span>';
      }
      $('<div>').addClass(deck.can_include_card(card) ? '' : 'invalid-card').append($(card_line_tpl({card:card}))).append(flex_dots).prepend(card.indeck+'x ').appendTo(deck_content);
    })
  });
}

deck.display_by_type = function display_by_type() {
  var coreworld = deck.get_coreworld();
  var problem = deck.get_problem();

  var deck_content = $('<div class="deck-content">');
  var deck_content_first_row = $('<div class="row">').appendTo(deck_content);

  var deck_intro_images = $('<div class="col-xs-4">').appendTo(deck_content_first_row);
  
  if (coreworld) {
    deck_intro_images.append('<div><img src="'+coreworld.imagesrc+'" class="img-responsive">');
  }

  var deck_intro_meta = $('<div class="col-sm-8">').appendTo(deck_content_first_row);
  deck_intro_meta.append('<h4 style="font-weight:bold" class="icon-'+deck.get_faction_code()+'">'+faction_name+'</h4>');
  if (coreworld) {
    $('<h5>').append($(card_line_tpl({card:coreworld}))).appendTo(deck_intro_meta).find('.icon').remove();
  }
//   $('<div>Total Cards: ' + deck.get_total_deck_size() + ' cards of ' + deck_min_cards + '</div>').addClass(deck.get_total_deck_size() < deck_min_cards ? 'text-danger': '').appendTo(deck_intro_meta);
  $('<div>Tech Pool Slots: ' + deck.get_tech_pool_size() + ' of ' + tech_pool_slots + '</div>').addClass(deck.get_tech_pool_size() != tech_pool_slots ? 'text-danger': '').appendTo(deck_intro_meta);
  $('<div>Flex Points: ' + deck.get_flex_points() + ' of ' + flex_points_max + ' points</div>').addClass(deck.get_flex_points() > flex_points_max ? 'text-danger': '').appendTo(deck_intro_meta);
  //$('<div>Plot deck: '+deck.get_plot_deck_size()+' cards</div>').addClass(deck.get_plot_deck_size() != 7 ? 'text-danger': '').appendTo(deck_intro_meta);
//  deck_intro_meta.append('<div>Packs: ' + _.map(deck.get_included_packs(), function (pack) { return pack.name+(pack.quantity > 1 ? ' ('+pack.quantity+')' : ''); }).join(', ') + '</div>');
  $(problem).each(function(i, p) {
    $('<div class="text-danger small"><span class="fa fa-exclamation-triangle"></span> '+problem_labels[p]+'</div>').appendTo(deck_intro_meta);
  });

  var deck_main_deck = $('<div class="row col-sm-12">').appendTo(deck_content);
  deck_main_deck.append(deck.display_one_section('main_deck'));

  var deck_tech_pool = $('<div class="row col-sm-12">').appendTo(deck_content);
  deck_tech_pool.append(deck.display_one_section('tech_pool'));

  return [ deck_content ];
}

deck.display_one_section = function display_one_section(thisDeck) {
  var section = $('<div class="tech-pool-section">');
  var query = {};
  query[thisDeck] = { '$gt': 0 };
  if (thisDeck == 'tech_pool') {
    var cards = deck.get_cards({ 'tech_level': 1, name: 1 }, query);
    techLevel = 0;
  }
  else {
    var cards = deck.get_cards({ name: 1 }, query);
  }
  if (cards.length) {
    $('<h5>' + thisDeck.replace('_', ' ') + ' (' + deck.get_nb_cards(cards, thisDeck) + ')</h5>').appendTo(section);
    cards.forEach(function (card) {
      if (thisDeck == 'tech_pool' && techLevel != card.tech_level) {
        techLevel = card.tech_level;
        $('<h6>Tech' + techLevel + '</h6>').appendTo(section);
      }
      var flex_points = (deck.get_faction_code() == card.faction_code) ? 0 : (card.tech_pool * card.tech_level);
      var flex_dots = ' ';
      for (i = 0; i < flex_points; i++) {
        flex_dots += '<span class="flex-points fg-' + card.faction_code +' fa fa-circle"></span> ';
      }
      $('<div>').addClass(deck.can_include_card(card) ? '' : 'invalid-card').append($(card_line_tpl({ card:card }))).append(flex_dots).prepend(card[thisDeck] + 'x ').appendTo(section);
    })
  }
  return section;
}

/**
 * @memberOf deck
 * @return boolean true if at least one other card quantity was updated
 */
deck.set_card_copies = function set_card_copies(card_code, deck, nb_copies) {
  var card = app.data.cards.findById(card_code);
  if (!card) return false;

//  var updated_other_card = false;

//  // card-specific rules
//  switch (card.type_code) {
//    case 'agenda':
//    app.data.cards.update({
//      type_code: 'agenda'
//    }, {
//      indeck: 0
//    });
//    updated_other_card = true;
//    break;
//  }
  card[deck] = nb_copies;
  total = card.main_deck + card.tech_pool;
  card['indeck'] = total;
  set = {
    deck: total,
    indeck: total,
    main_deck: card.main_deck,
    tech_pool: card.tech_pool
  };
//   set[deck] = total;

  app.data.cards.updateById(card_code, set);
  if (app.deck_history) app.deck_history.notify_change();

  return card;
}

/**
 * @memberOf deck
 */
deck.get_content = function get_content() {
  var cards = deck.get_cards();
  var content = {};
  cards.forEach(function (card) {
    content[card.code] = {
      'qty': card.indeck,
      'mainDeck': card.main_deck,
      'techPool': card.tech_pool
    };
  });
  return content;
}

/**
 * @memberOf deck
 */
deck.get_json = function get_json() {
  return JSON.stringify(deck.get_content());
}

/**
 * @memberOf deck
 */
deck.get_export = function get_export(format) {

}

/**
 * @memberOf deck
 */
deck.get_problem = function get_problem() {
  var problem = [];
  // no more than MAX flex points
  if (deck.get_flex_points() > flex_points_max) {
    problem.push('too_many_flex_points');
  }
  
  // exact tech_pool slots used
  if (deck.get_tech_pool_size() > tech_pool_slots) {
    problem.push('too_many_tech_slots');
  }
  if (deck.get_tech_pool_size() < tech_pool_slots) {
    problem.push('too_few_tech_slots');
  }
  
  // at least MIN total cards
  if (deck.get_total_deck_size() < deck_min_cards) {
    problem.push('too_few_cards');
  }

  // no invalid card
  if (deck.get_invalid_cards().length > 0) {
    problem.push('invalid_cards');
  }

  return problem;
}

deck.get_invalid_cards = function get_invalid_cards() {
  return _.filter(deck.get_cards(), function (card) {
    return ! deck.can_include_card(card);
  });
}

deck.is_flex_only = function is_flex_only(card) {
  if (card.faction_code != deck.get_faction_code()) {
    return true;
  }
  // in faction and TL > 1
  if (card.tech_level > 1) {
    return true;
  }
  
  return false;
}

/**
 * returns true if the deck can include the card as parameter
 * @memberOf deck
 */
deck.can_include_card = function can_include_card(card) {
  // exclude coreworlds, sectors
  if (card.type_code === 'core-world') return false;
  if (card.type_code === 'sector') return false;
  if (card) return true;
  
//   // neutral card => yes
//   if (card.faction_code === 'neutral') return true;
// 
//   // same faction card => yes
//   if (card.faction_code === faction_code) return true;

  // if none above => no
  return false;
}

})(app.deck = {}, jQuery);

(function app_diff(diff, $) {

// takes an array of strings and returns an object where each string of the array
// is a key of the object and the value is the number of occurences of the string in the array
function array_count(list) {
	var obj = {};
	var list = list.sort();
	for(var i=0; i<list.length; ) {
		for(var j=i+1; j<list.length; j++) {
			if(list[i] !== list[j]) break;
		}
		obj[list[i]] = (j-i);
		i=j;
	}
	return obj;
}

/**
 * contents is an array of content
 * content is a hash of pairs code-qty
 * @memberOf diff
 */
diff.compute_simple = function compute_simple(contents) {
	
	var ensembles = [];
	for(var decknum=0; decknum<contents.length; decknum++) {
		var cards = [];
		$.each(contents[decknum], function (code, qty) {
			for(var copynum=0; copynum<qty; copynum++) {
				cards.push(code);
			}
		});
		ensembles.push(cards);
	}
	
	var conjunction = [];
	for(var i=0; i<ensembles[0].length; i++) {
		var code = ensembles[0][i];
		var indexes = [ i ];
		for(var j=1; j<ensembles.length; j++) {
			var index = ensembles[j].indexOf(code);
			if(index > -1) indexes.push(index);
			else break;
		}
		if(indexes.length === ensembles.length) {
			conjunction.push(code);
			for(var j=0; j<indexes.length; j++) {
				ensembles[j].splice(indexes[j], 1);
			}
			i--;
		}
	}
	
	var listings = [];
	for(var i=0; i<ensembles.length; i++) {
		listings[i] = array_count(ensembles[i]);
	}
	var intersect = array_count(conjunction);
	
	return [ listings, intersect ];
};

})(app.diff = {}, jQuery);

(function app_deck_history(deck_history, $) {

var tbody,
	clock,
	snapshots = [],
	progressbar,
	timer,
	ajax_in_process = false,
	period = 60,
	changed_since_last_autosave = false;

/**
 * @memberOf deck_history
 */
deck_history.autosave = function autosave() {

	// check if deck has been modified since last autosave
	if(!changed_since_last_autosave) return;

	// compute diff between last snapshot and current deck
	var last_snapshot = snapshots[snapshots.length-1].content;
	var current_deck = app.deck.get_content();

	changed_since_last_autosave = false;

	var result = app.diff.compute_simple([current_deck, last_snapshot]);
	if(!result) return;

	var diff = result[0];
	var diff_json = JSON.stringify(diff);
	if(diff_json == '[{},{}]') return;

	// send diff to autosave
	$('#tab-header-history').html("Autosave...");
	ajax_in_process = true;

	$.ajax(Routing.generate('deck_autosave'), {
		data: {
			diff: diff_json,
			deck_id: app.deck.get_id()
		},
		type: 'POST',
		success: function(data, textStatus, jqXHR) {
			deck_history.add_snapshot({datecreation: data, variation: diff, content: current_deck, is_saved: false});
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log('['+moment().format('YYYY-MM-DD HH:mm:ss')+'] Error on '+this.url, textStatus, errorThrown);
			changed_since_last_autosave = true;
		},
		complete: function () {
			$('#tab-header-history').html("History");
			ajax_in_process = false;
		}
	});

}

/**
 * @memberOf deck_history
 */
deck_history.autosave_interval = function autosave_interval() {
	// if we are in the process of an ajax autosave request, do nothing now
	if(ajax_in_process) return;

	// making sure we don't go into negatives
	if(timer < 0) timer = period;

	// update progressbar
	$(progressbar).css('width', (timer*100/period)+'%').attr('aria-valuenow', timer).find('span').text(timer+' seconds remaining.');

	// timer action
	if(timer === 0) {
		deck_history.autosave();
	}

	timer--;
}

/**
 * @memberOf deck_history
 */
deck_history.add_snapshot = function add_snapshot(snapshot) {

	snapshot.date_creation = snapshot.date_creation ? moment(snapshot.date_creation) : moment();
	snapshots.push(snapshot);

	var list = [];
	if(snapshot.variation) {
		_.each(snapshot.variation[0], function (qty, code) {
			var card = app.data.cards.findById(code);
			if(!card) return;
			list.push('+'+qty+' '+'<a href="'+Routing.generate('cards_zoom',{card_code:code})+'" class="card-tip" data-code="'+code+'">'+card.name+'</a>');
		});
		_.each(snapshot.variation[1], function (qty, code) {
			var card = app.data.cards.findById(code);
			if(!card) return;
			list.push('&minus;'+qty+' '+'<a href="'+Routing.generate('cards_zoom',{card_code:code})+'" class="card-tip" data-code="'+code+'">'+card.name+'</a>');
		});
	} else {
		list.push("First version");
	}

	tbody.prepend('<tr'+(snapshot.is_saved ? '' : ' class="warning"')+'><td>'+snapshot.date_creation.calendar()+(snapshot.is_saved ? '' : ' (unsaved)')+'</td><td>'+list.join('<br>')+'</td><td><a role="button" href="#" data-index="'+(snapshots.length-1)+'"">Revert</a></td></tr>');

	timer = -1; // start autosave timer

}

/**
 * @memberOf deck_history
 */
deck_history.load_snapshot = function load_snapshot(event) {

	var index = $(this).data('index');
	var snapshot = snapshots[index];
	if(!snapshot) return;

	app.data.cards.find({}).forEach(function(card) {
		var indeck = 0;
		if (snapshot.content[card.code]) {
			indeck = snapshot.content[card.code];
		}
		app.data.cards.updateById(card.code, {
			indeck : indeck
		});
	});

	app.ui.on_deck_modified();
	changed_since_last_autosave = true;

	// cancel event
	return false;

}

/**
 * @memberOf deck_history
 */
deck_history.notify_change = function notify_change() {
	changed_since_last_autosave = true;
}

deck_history.get_unsaved_edits = function get_unsaved_edits() {
	return _.filter(snapshots, function (snapshot) {
		return snapshot.is_saved === false;
	}).sort(function (a, b) {
		return a.date_creation - b.datecreation;
	});
}

deck_history.is_changed_since_last_autosave = function is_changed_since_last_autosave() {
	return changed_since_last_autosave;
}

/**
 * @memberOf deck_history
 * @param container
 */
deck_history.setup = function setup_history(container) {

	tbody = $(container).find('tbody').on('click', 'a[role=button]', deck_history.load_snapshot);
	progressbar = $(container).find('.progress-bar');

	app.deck.get_history().forEach(function (snapshot) {
		deck_history.add_snapshot(snapshot);
	});

	clock = setInterval(deck_history.autosave_interval, 1000);
}

})(app.deck_history = {}, jQuery);

(function app_deck_charts(deck_charts, $) {

var charts = [],
	faction_colors = {
		targaryen :
			'#1c1c1c',

		baratheon :
			'#e3d852',

		stark :
			'#cfcfcf',

		greyjoy :
			'#1d7a99',

		lannister :
			'#c00106',

		tyrell :
			'#509f16',

		nightswatch :
			'#6e6e6e',

		martell :
			'#e89521',

		neutral :
			'#a99560',
	};

deck_charts.chart_faction = function chart_faction() {
	var factions = {};
	var draw_deck = app.deck.get_draw_deck();
	draw_deck.forEach(function (card) {
		if(!factions[card.faction_code]) factions[card.faction_code] = { code: card.faction_code, name: card.faction_name, count: 0};
		factions[card.faction_code].count += card.indeck;
	})

	var data = [];
	_.each(_.values(factions), function (faction) {
		data.push({
			name: faction.name,
			label: '<span class="icon icon-'+faction.code+'"></span>',
			color: faction_colors[faction.code],
			y: faction.count
		});
	})

	$("#deck-chart-faction").highcharts({
		chart: {
            type: 'column'
        },
		title: {
            text: "Card Factions"
        },
		subtitle: {
            text: "Draw deck only"
        },
		xAxis: {
			categories: _.pluck(data, 'label'),
			labels: {
				useHTML: true
			},
            title: {
                text: null
            }
        },
		yAxis: {
            min: 0,
			allowDecimals: false,
			tickInterval: 3,
            title: null,
            labels: {
                overflow: 'justify'
            }
        },
        series: [{
			type: "column",
			animation: false,
            name: '# cards',
			showInLegend: false,
            data: data
        }],
		plotOptions: {
			column: {
			    borderWidth: 0,
			    groupPadding: 0,
			    shadow: false
			}
		}
    });
}

deck_charts.chart_icon = function chart_icon() {

	var data = [{
		name: 'Military',
		label: '<span class="icon icon-military"></span>',
		color: '#c8232a',
		y: 0
	}, {
		name: 'Intrigue',
		label: '<span class="icon icon-intrigue"></span>',
		color: '#13522f',
		y: 0
	}, {
		name: 'Power',
		label: '<span class="icon icon-power"></span>',
		color: '#292e5f',
		y: 0
	}];

	var draw_deck = app.deck.get_draw_deck();
	draw_deck.forEach(function (card) {
		if(card.is_military) data[0].y += (card.is_unique ? 1 : card.indeck);
		if(card.is_intrigue) data[1].y += (card.is_unique ? 1 : card.indeck);
		if(card.is_power) data[2].y += (card.is_unique ? 1 : card.indeck);
	})

	$("#deck-chart-icon").highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: "Character Icons"
		},
		subtitle: {
			text: "Duplicates not counted"
		},
		xAxis: {
			categories: _.pluck(data, 'label'),
			labels: {
				useHTML: true
			},
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			allowDecimals: false,
			tickInterval: 2,
			title: null,
			labels: {
				overflow: 'justify'
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size: 10px">{point.key} Icon</span><br/>'
		},
		series: [{
			type: "column",
			animation: false,
			name: '# characters',
			showInLegend: false,
			data: data
		}],
		plotOptions: {
			column: {
				borderWidth: 0,
				groupPadding: 0,
				shadow: false
			}
		}
	});
}

deck_charts.chart_strength = function chart_strength() {

		var data = [];

		var draw_deck = app.deck.get_draw_deck();
		draw_deck.forEach(function (card) {
			if(typeof card.strength === 'number') {
				data[card.strength] = data[card.strength] || 0;
				data[card.strength] += (card.is_unique ? 1 : card.indeck);
			}
		})
		data = _.flatten(data).map(function (value) { return value || 0; });

		$("#deck-chart-strength").highcharts({
			chart: {
				type: 'line'
			},
			title: {
				text: "Character Strength"
			},
			subtitle: {
				text: "Duplicates not counted"
			},
			xAxis: {
				allowDecimals: false,
				tickInterval: 1,
				title: {
					text: null
				}
			},
			yAxis: {
				min: 0,
				allowDecimals: false,
				tickInterval: 1,
				title: null,
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size: 10px">STR {point.key}</span><br/>'
			},
			series: [{
				animation: false,
				name: '# characters',
				showInLegend: false,
				data: data
			}]
		});
}

deck_charts.chart_cost = function chart_cost() {

		var data = [];

		var draw_deck = app.deck.get_draw_deck();
		draw_deck.forEach(function (card) {
			if(typeof card.cost === 'number') {
				data[card.cost] = data[card.cost] || 0;
				data[card.cost] += card.indeck;
			}
		})
		data = _.flatten(data).map(function (value) { return value || 0; });

		$("#deck-chart-cost").highcharts({
			chart: {
				type: 'line'
			},
			title: {
				text: "Card Cost"
			},
			subtitle: {
				text: "Cost X ignored"
			},
			xAxis: {
				allowDecimals: false,
				tickInterval: 1,
				title: {
					text: null
				}
			},
			yAxis: {
				min: 0,
				allowDecimals: false,
				tickInterval: 1,
				title: null,
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size: 10px">Cost {point.key}</span><br/>'
			},
			series: [{
				animation: false,
				name: '# cards',
				showInLegend: false,
				data: data
			}]
		});
}

deck_charts.setup = function setup(options) {
	deck_charts.chart_faction();
	deck_charts.chart_icon();
	deck_charts.chart_strength();
	deck_charts.chart_cost();
}

$(document).on('shown.bs.tab', 'a[data-toggle=tab]', function (e) {
	deck_charts.setup();
});

})(app.deck_charts = {}, jQuery);

(function ui_deck(ui, $) {

var dom_loaded = new $.Deferred(),
	data_loaded = new $.Deferred();

/**
 * called when the DOM is loaded
 * @memberOf ui
 */
ui.on_dom_loaded = function on_dom_loaded() {};

/**
 * called when the app data is loaded
 * @memberOf ui
 */
ui.on_data_loaded = function on_data_loaded() {};

/**
 * called when both the DOM and the app data have finished loading
 * @memberOf ui
 */
ui.on_all_loaded = function on_all_loaded() {};

$(document).ready(function () {
	console.log('ui.on_dom_loaded');

	if(Modernizr.touch) {
	} else {
		$('[data-toggle="tooltip"]').tooltip();
	}
	$('time').each(function (index, element) {
		var datetime = moment($(element).attr('datetime'));
		$(element).html(datetime.fromNow());
		$(element).attr('title', datetime.format('LLLL'));
	});
	if(typeof ui.on_dom_loaded === 'function') ui.on_dom_loaded();
	dom_loaded.resolve();
});
$(document).on('data.app', function () {
	console.log('ui.on_data_loaded');
	if(typeof ui.on_data_loaded === 'function') ui.on_data_loaded();
	data_loaded.resolve();
});
$(document).on('start.app', function () {
	console.log('ui.on_all_loaded');
	if(typeof ui.on_all_loaded === 'function') ui.on_all_loaded();
	$('abbr').each(function (index, element) {
		var title;
		switch($(element).text().toLowerCase()) {
		case 'renown': 
			title = "After you win a challenge in which this character is participating, he may gain 1 power.";
			break;
		case 'intimidate': 
			title = "After you win a challenge in which this character is participating, you may choose and kneel a character, controlled by the losing opponent, with equal or lower STR than the amount of STR by which the challenge was won.";
			break;
		case 'stealth': 
			title = "When you declare this character as an attacker, you may choose a character without stealth controlled by the defending opponent. That character cannot be declared as a defender for this challenge.";
			break;
		case 'insight': 
			title = "After you win a challenge in which this character is participating, you may draw 1 card.";
			break;
		case 'limited': 
			title = "No more than 1 card in total with the limited keyword can be marshaled (or played, if the card is an event) by each player each round. No more than 1 limited card can be placed by each player during setup.";
			break;
		case 'pillage': 
			title = "After you win a challenge in which this character is participating, you may discard 1 card from the top of the losing opponent's deck.";
			break;
		case 'terminal': 
			title = "If attached card leaves play, discard this attachment.";
			break;
		case 'ambush': 
			title = "You may pay X gold to put this card into play from your hand during the challenges phase.";
			break;
		}
		if(title) $(element).attr('title', title).tooltip();
	})
});
$.when(dom_loaded, data_loaded).done(function () {
	setTimeout(function () {
		$(document).trigger('start.app');
	}, 0);
});

})(app.ui = {}, jQuery);

(function app_card_form(card_form, $) {
  if ($('#thronesdb_cardsbundle_cardtype_type').length > 0) {
    card_form_show($('#thronesdb_cardsbundle_cardtype_type').val());
    $('#thronesdb_cardsbundle_cardtype_type').change(function() {
      card_form_show($(this).val());
    });
  }
  
  function card_form_show($val) {
    var ids = [
      '#thronesdb_cardsbundle_cardtype_tech_level',
      '#thronesdb_cardsbundle_cardtype_effect',
      '#thronesdb_cardsbundle_cardtype_flavor',
      '#thronesdb_cardsbundle_cardtype_oper_type',
      '#thronesdb_cardsbundle_cardtype_phase',
      '#thronesdb_cardsbundle_cardtype_attack',
      '#thronesdb_cardsbundle_cardtype_size',
      '#thronesdb_cardsbundle_cardtype_hull',
      '#thronesdb_cardsbundle_cardtype_module_one',
      '#thronesdb_cardsbundle_cardtype_modval_one',
      '#thronesdb_cardsbundle_cardtype_module_two',
      '#thronesdb_cardsbundle_cardtype_modval_two',
      '#thronesdb_cardsbundle_cardtype_module_three',
      '#thronesdb_cardsbundle_cardtype_modval_three',
      '#thronesdb_cardsbundle_cardtype_engines',
      '#thronesdb_cardsbundle_cardtype_fuel_cost',
      '#thronesdb_cardsbundle_cardtype_structure',
      '#thronesdb_cardsbundle_cardtype_is_hq',
      '#thronesdb_cardsbundle_cardtype_is_unique',
      '#thronesdb_cardsbundle_cardtype_min_deck',
      '#thronesdb_cardsbundle_cardtype_tech_slots',
      '#thronesdb_cardsbundle_cardtype_flex_points',
      '#thronesdb_cardsbundle_cardtype_stars',
      '#thronesdb_cardsbundle_cardtype_build_slot',
      '#thronesdb_cardsbundle_cardtype_infantry',
      '#thronesdb_cardsbundle_cardtype_space_attack',
      '#thronesdb_cardsbundle_cardtype_position',
      '#thronesdb_cardsbundle_cardtype_quantity'
    ];
    $(ids.join(',')).closest('.form-group').hide();
    // set position always to "-1" so that it resaves
    $('#thronesdb_cardsbundle_cardtype_position').val("-1");
    $('#thronesdb_cardsbundle_cardtype_quantity').val(0);
    switch($val) {
      case '1': // operation
        var ids = [
          '#thronesdb_cardsbundle_cardtype_tech_level',
          '#thronesdb_cardsbundle_cardtype_effect',
          '#thronesdb_cardsbundle_cardtype_oper_type',
          '#thronesdb_cardsbundle_cardtype_phase'
        ];
        $(ids.join(',')).closest('.form-group').show();
        break;
      case '2': // ship
        var ids = [
          '#thronesdb_cardsbundle_cardtype_tech_level',
          '#thronesdb_cardsbundle_cardtype_attack',
          '#thronesdb_cardsbundle_cardtype_size',
          '#thronesdb_cardsbundle_cardtype_hull',
          '#thronesdb_cardsbundle_cardtype_module_one',
          '#thronesdb_cardsbundle_cardtype_modval_one',
          '#thronesdb_cardsbundle_cardtype_module_two',
          '#thronesdb_cardsbundle_cardtype_modval_two',
          '#thronesdb_cardsbundle_cardtype_module_three',
          '#thronesdb_cardsbundle_cardtype_modval_three',
          '#thronesdb_cardsbundle_cardtype_engines',
          '#thronesdb_cardsbundle_cardtype_fuel_cost'
        ];
        $(ids.join(',')).closest('.form-group').show();
        break;
      case '3': // development
        var ids = [
          '#thronesdb_cardsbundle_cardtype_tech_level',
          '#thronesdb_cardsbundle_cardtype_effect',
          '#thronesdb_cardsbundle_cardtype_structure',
          '#thronesdb_cardsbundle_cardtype_is_hq',
          '#thronesdb_cardsbundle_cardtype_is_unique',
          '#thronesdb_cardsbundle_cardtype_stars',
          '#thronesdb_cardsbundle_cardtype_infantry',
          '#thronesdb_cardsbundle_cardtype_space_attack'
        ];
        $(ids.join(',')).closest('.form-group').show();
        break;
      case '4': // sector
        var ids = [
          '#thronesdb_cardsbundle_cardtype_effect',
          '#thronesdb_cardsbundle_cardtype_stars',
          '#thronesdb_cardsbundle_cardtype_build_slot',
          '#thronesdb_cardsbundle_cardtype_infantry',
          '#thronesdb_cardsbundle_cardtype_space_attack'
        ];
        $(ids.join(',')).closest('.form-group').show();
        break;
      case '5': // core world
        var ids = [
          '#thronesdb_cardsbundle_cardtype_effect',
          '#thronesdb_cardsbundle_cardtype_min_deck',
          '#thronesdb_cardsbundle_cardtype_tech_slots',
          '#thronesdb_cardsbundle_cardtype_flex_points',
          '#thronesdb_cardsbundle_cardtype_stars',
          '#thronesdb_cardsbundle_cardtype_build_slot',
          '#thronesdb_cardsbundle_cardtype_infantry',
          '#thronesdb_cardsbundle_cardtype_space_attack'
        ];
        $(ids.join(',')).closest('.form-group').show();
        break;
    }
  }
})(app.card_form = {}, jQuery);