function addLoadEvent(){var t=window.onload;"function"!=typeof window.onload?window.onload=checkCookie:window.onload=function(){t&&t(),checkCookie()}}function getCookie(t){var e,i,n,o=document.cookie.split(";");for(e=0;e<o.length;e++)if(i=o[e].substr(0,o[e].indexOf("=")),n=o[e].substr(o[e].indexOf("=")+1),i=i.replace(/^\s+|\s+$/g,""),i==t)return unescape(n)}function setCookie(){var t=new Date;t.setDate(t.getDate()+365);var e=escape("1")+",domain=."+document.domain+("; path=/; expires="+t.toUTCString());document.cookie="cookies_info="+e,document.getElementById("cookie-info").getAttributeNode("class").value="cookie-box"}function checkCookie(){var t=getCookie("cookies_info");if(null===t||""===t||"undefined"==typeof t){var e=document.getElementById("close-cookie-info"),i=document.getElementById("cookie-info");i&&setTimeout(function(){i.getAttributeNode("class").value="active"},10),e&&(e.addEventListener?e.addEventListener("click",function(){setCookie()},!1):e.attachEvent&&e.attachEvent("onclick",function(){setCookie()}))}}function setFormValidationErrors(t,e){var i=$("input[name="+t+"]").parent(".form-group");i.hasClass("has-error")?i.find(".help-block").text(e):i.addClass("has-error").append('<p class="help-block">'+e+"</p>")}function setGlobalMessage(t,e){$("#content").prepend('<div class="message-box"><div class="alert alert-'+t+' alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+e+"</div></div>")}function clearFormValidationErrors(){var t=$(".form-group.has-error");t.removeClass("has-error"),t.find(".help-block").remove()}function hideMessages(){setTimeout(clearMessages,5e3)}function clearMessages(){var t=$("div.message-box div.alert");t.fadeOut("slow",function(){t.remove()}),$("div.message-box").slideToggle("slow",function(){$(this).remove()})}addLoadEvent(),function(t){jQuery.fn.rPage=function(){function e(e){this.label=function(){var e=this.els.filter(".active").index(),i=this;this.els.each(function(){0==i.isNextOrPrevLink(t(this))?t(this).addClass("page-away-"+Math.abs(e-t(this).index()).toString()):t(this).index()>e?t(this).addClass("right-etc"):t(this).addClass("left-etc")})},this.makeResponsive=function(){this.reset();for(var t=this.calculateWidth();t>this.els.parent().parent().width()-10;){var e=this.removeOne();if(0==e)break;t=this.calculateWidth()}},this.isNextOrPrevLink=function(t){return t.hasClass("pagination-prev")||t.hasClass("pagination-next")||"»"==t.text()||"«"==t.text()},this.isRemovable=function(t){if(this.isNextOrPrevLink(t))return!1;var i=this.els.filter(t).index();return 1==i||this.isNextOrPrevLink(e.find("li").eq(i+1))?!1:"..."==t.text()?!1:!0},this.removeOne=function(){for(var t=this.els.filter(".active").index(),i=e.find("li").length-1,n=i-1;n>0;n--){var o=this.els.filter(".page-away-"+n.toString()),a=o.filter(function(){return"none"!=this.style.display});if(a.length>0)for(var s=0;s<a.length;s++){var r=a.eq(s);if(this.isRemovable(r))return r.css("display","none"),this.needsEtcSign(t,i-1)&&this.els.eq(i-2).before("<li class='disabled removable'><span>...</span></li>"),this.needsEtcSign(1,t)&&this.els.eq(1).after("<li class='disabled removable'><span>...</span></li>"),!0}}return!1},this.needsEtcSign=function(t,i){if(1>=i-t)return!1;for(var n=!1,o=!1,a=t+1;i>a;a++){var s=e.find("li").eq(a);"none"==s.css("display")&&(o=!0),"..."==s.text()&&(n=!0)}return 1==o&&0==n?!0:!1},this.reset=function(){for(var t=0;t<this.els.length;t++)this.els.eq(t).css("display","inline");e.find("li").filter(".removable").remove()},this.calculateWidth=function(){for(var t=0,i=0;i<e.find("li").length;i++)t+=e.find("li").eq(i).children("a").eq(0).outerWidth(),t+=e.find("li").eq(i).children("span").eq(0).outerWidth();return t},this.els=e.find("li"),this.label(),this.makeResponsive();var i;t(window).resize(t.proxy(function(){clearTimeout(i),i=setTimeout(t.proxy(function(){this.makeResponsive()},this),100)},this))}for(var i=t(this),n=0,o=i.length;o>n;n++)new e(t(i[n]))}}(jQuery),function(t,e,i,n){function o(e,i){this.element=e,this.settings=t.extend({},s,i),this._defaults=s,this._name=a,this.init()}var a="metisMenu",s={toggle:!0};o.prototype={init:function(){var e=t(this.element),i=this.settings.toggle;e.find("li.active").has("ul").children("ul").addClass("collapse in"),e.find("li").not(".active").has("ul").children("ul").addClass("collapse"),e.find("li").has("ul").children("a").on("click",function(e){e.preventDefault(),t(this).parent("li").toggleClass("active").children("ul").collapse("toggle"),i&&t(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")})}},t.fn[a]=function(e){return this.each(function(){t.data(this,"plugin_"+a)||t.data(this,"plugin_"+a,new o(this,e))})}}(jQuery,window,document),function(t,e,i){function n(i,n,o){var a=e.createElement(i);return n&&(a.id=Z+n),o&&(a.style.cssText=o),t(a)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function a(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function s(t){var e=E.length,i=(z+t)%e;return 0>i?e+i:i}function r(t,e){return Math.round((/%/.test(t)?("x"===e?H.width():o())/100:1)*parseInt(t,10))}function l(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function h(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function c(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==w[0]&&(t.stopPropagation(),y.focus())}function d(t){d.str!==t&&(y.add(w).removeClass(d.str).addClass(t),d.str=t)}function u(e){z=0,e&&e!==!1&&"nofollow"!==e?(E=t("."+tt).filter(function(){var i=t.data(this,Y),n=new a(this,i);return n.get("rel")===e}),z=E.index(P.el),-1===z&&(E=E.add(P.el),z=E.length-1)):E=t(P.el)}function f(i){t(e).trigger(i),rt.triggerHandler(i)}function g(i){var o;if(!Q){if(o=t(i).data(Y),P=new a(i,o),u(P.get("rel")),!K){K=U=!0,d(P.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),$=n(lt,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),x.css({width:"",height:""}).append($),F=k.height()+T.height()+x.outerHeight(!0)-x.height(),D=C.width()+_.width()+x.outerWidth(!0)-x.width(),B=$.outerHeight(!0),N=$.outerWidth(!0);var s=r(P.get("initialWidth"),"x"),l=r(P.get("initialHeight"),"y"),h=P.get("maxWidth"),g=P.get("maxHeight");P.w=Math.max((h!==!1?Math.min(s,r(h,"x")):s)-N-D,0),P.h=Math.max((g!==!1?Math.min(l,r(g,"y")):l)-B-F,0),$.css({width:"",height:P.h}),V.position(),f(et),P.get("onOpen"),q.add(W).hide(),y.focus(),P.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",c,!0),rt.one(at,function(){e.removeEventListener("focus",c,!0)})),P.get("returnFocus")&&rt.one(at,function(){t(P.el).focus()})}var p=parseFloat(P.get("opacity"));w.css({opacity:p===p?p:"",cursor:P.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),P.get("closeButton")?I.html(P.get("close")).appendTo(x):I.appendTo("<div/>"),v()}}function p(){y||(J=!1,H=t(i),y=n(lt).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),w=n(lt,"Overlay").hide(),L=t([n(lt,"LoadingOverlay")[0],n(lt,"LoadingGraphic")[0]]),b=n(lt,"Wrapper"),x=n(lt,"Content").append(W=n(lt,"Title"),O=n(lt,"Current"),j=t('<button type="button"/>').attr({id:Z+"Previous"}),S=t('<button type="button"/>').attr({id:Z+"Next"}),R=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),I=t('<button type="button"/>').attr({id:Z+"Close"}),b.append(n(lt).append(n(lt,"TopLeft"),k=n(lt,"TopCenter"),n(lt,"TopRight")),n(lt,!1,"clear:left").append(C=n(lt,"MiddleLeft"),x,_=n(lt,"MiddleRight")),n(lt,!1,"clear:left").append(n(lt,"BottomLeft"),T=n(lt,"BottomCenter"),n(lt,"BottomRight"))).find("div div").css({"float":"left"}),M=n(lt,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),q=S.add(j).add(O).add(R)),e.body&&!y.parent().length&&t(e.body).append(w,y.append(b,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),g(this))}return y?(J||(J=!0,S.click(function(){V.next()}),j.click(function(){V.prev()}),I.click(function(){V.close()}),w.click(function(){P.get("overlayClose")&&V.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;K&&P.get("escKey")&&27===e&&(t.preventDefault(),V.close()),K&&P.get("arrowKey")&&E[1]&&!t.altKey&&(37===e?(t.preventDefault(),j.click()):39===e&&(t.preventDefault(),S.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+tt,i):t("."+tt).live("click."+Z,i)),!0):!1}function v(){var e,o,a,s=V.prep,c=++ht;if(U=!0,A=!1,f(st),f(it),P.get("onLoad"),P.h=P.get("height")?r(P.get("height"),"y")-B-F:P.get("innerHeight")&&r(P.get("innerHeight"),"y"),P.w=P.get("width")?r(P.get("width"),"x")-N-D:P.get("innerWidth")&&r(P.get("innerWidth"),"x"),P.mw=P.w,P.mh=P.h,P.get("maxWidth")&&(P.mw=r(P.get("maxWidth"),"x")-N-D,P.mw=P.w&&P.w<P.mw?P.w:P.mw),P.get("maxHeight")&&(P.mh=r(P.get("maxHeight"),"y")-B-F,P.mh=P.h&&P.h<P.mh?P.h:P.mh),e=P.get("href"),G=setTimeout(function(){L.show()},100),P.get("inline")){var d=t(e);a=t("<div>").hide().insertBefore(d),rt.one(st,function(){a.replaceWith(d)}),s(d)}else P.get("iframe")?s(" "):P.get("html")?s(P.get("html")):l(P,e)?(e=h(P,e),A=P.get("createImg"),t(A).addClass(Z+"Photo").bind("error."+Z,function(){s(n(lt,"Error").html(P.get("imgError")))}).one("load",function(){c===ht&&setTimeout(function(){var e;P.get("retinaImage")&&i.devicePixelRatio>1&&(A.height=A.height/i.devicePixelRatio,A.width=A.width/i.devicePixelRatio),P.get("scalePhotos")&&(o=function(){A.height-=A.height*e,A.width-=A.width*e},P.mw&&A.width>P.mw&&(e=(A.width-P.mw)/A.width,o()),P.mh&&A.height>P.mh&&(e=(A.height-P.mh)/A.height,o())),P.h&&(A.style.marginTop=Math.max(P.mh-A.height,0)/2+"px"),E[1]&&(P.get("loop")||E[z+1])&&(A.style.cursor="pointer",t(A).bind("click."+Z,function(){V.next()})),A.style.width=A.width+"px",A.style.height=A.height+"px",s(A)},1)}),A.src=e):e&&M.load(e,P.get("data"),function(e,i){c===ht&&s("error"===i?n(lt,"Error").html(P.get("xhrError")):t(this).contents())})}var w,y,b,x,k,C,_,T,E,H,$,M,L,W,O,R,S,j,I,q,P,F,D,B,N,z,A,K,U,Q,G,V,J,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",tt=Z+"Element",et=Z+"_open",it=Z+"_load",nt=Z+"_complete",ot=Z+"_cleanup",at=Z+"_closed",st=Z+"_purge",rt=t("<a/>"),lt="div",ht=0,ct={},dt=function(){function t(){clearTimeout(s)}function e(){(P.get("loop")||E[z+1])&&(t(),s=setTimeout(V.next,P.get("slideshowSpeed")))}function i(){R.html(P.get("slideshowStop")).unbind(l).one(l,n),rt.bind(nt,e).bind(it,t),y.removeClass(r+"off").addClass(r+"on")}function n(){t(),rt.unbind(nt,e).unbind(it,t),R.html(P.get("slideshowStart")).unbind(l).one(l,function(){V.next(),i()}),y.removeClass(r+"on").addClass(r+"off")}function o(){a=!1,R.hide(),t(),rt.unbind(nt,e).unbind(it,t),y.removeClass(r+"off "+r+"on")}var a,s,r=Z+"Slideshow_",l="click."+Z;return function(){a?P.get("slideshow")||(rt.unbind(ot,o),o()):P.get("slideshow")&&E[1]&&(a=!0,rt.one(ot,o),P.get("slideshowAuto")?i():n(),R.show())}}();t[Y]||(t(p),V=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(tt),n=new a(o[0],e),n.get("open")&&g(o[0])),o):o},V.position=function(e,i){function n(){k[0].style.width=T[0].style.width=x[0].style.width=parseInt(y[0].style.width,10)-D+"px",x[0].style.height=C[0].style.height=_[0].style.height=parseInt(y[0].style.height,10)-F+"px"}var a,s,l,h=0,c=0,d=y.offset();if(H.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),s=H.scrollTop(),l=H.scrollLeft(),P.get("fixed")?(d.top-=s,d.left-=l,y.css({position:"fixed"})):(h=s,c=l,y.css({position:"absolute"})),c+=P.get("right")!==!1?Math.max(H.width()-P.w-N-D-r(P.get("right"),"x"),0):P.get("left")!==!1?r(P.get("left"),"x"):Math.round(Math.max(H.width()-P.w-N-D,0)/2),h+=P.get("bottom")!==!1?Math.max(o()-P.h-B-F-r(P.get("bottom"),"y"),0):P.get("top")!==!1?r(P.get("top"),"y"):Math.round(Math.max(o()-P.h-B-F,0)/2),y.css({top:d.top,left:d.left,visibility:"visible"}),b[0].style.width=b[0].style.height="9999px",a={width:P.w+N+D,height:P.h+B+F,top:h,left:c},e){var u=0;t.each(a,function(t){return a[t]!==ct[t]?void(u=e):void 0}),e=u}ct=a,e||y.css(a),y.dequeue().animate(a,{duration:e||0,complete:function(){n(),U=!1,b[0].style.width=P.w+N+D+"px",b[0].style.height=P.h+B+F+"px",P.get("reposition")&&setTimeout(function(){H.bind("resize."+Z,V.position)},1),t.isFunction(i)&&i()},step:n})},V.resize=function(t){var e;K&&(t=t||{},t.width&&(P.w=r(t.width,"x")-N-D),t.innerWidth&&(P.w=r(t.innerWidth,"x")),$.css({width:P.w}),t.height&&(P.h=r(t.height,"y")-B-F),t.innerHeight&&(P.h=r(t.innerHeight,"y")),t.innerHeight||t.height||(e=$.scrollTop(),$.css({height:"auto"}),P.h=$.height()),$.css({height:P.h}),e&&$.scrollTop(e),V.position("none"===P.get("transition")?0:P.get("speed")))},V.prep=function(i){function o(){return P.w=P.w||$.width(),P.w=P.mw&&P.mw<P.w?P.mw:P.w,P.w}function r(){return P.h=P.h||$.height(),P.h=P.mh&&P.mh<P.h?P.mh:P.h,P.h}if(K){var c,u="none"===P.get("transition")?0:P.get("speed");$.remove(),$=n(lt,"LoadedContent").append(i),$.hide().appendTo(M.show()).css({width:o(),overflow:P.get("scrolling")?"auto":"hidden"}).css({height:r()}).prependTo(x),M.hide(),t(A).css({"float":"none"}),d(P.get("className")),c=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,r=E.length;K&&(o=function(){clearTimeout(G),L.hide(),f(nt),P.get("onComplete")},W.html(P.get("title")).show(),$.show(),r>1?("string"==typeof P.get("current")&&O.html(P.get("current").replace("{current}",z+1).replace("{total}",r)).show(),S[P.get("loop")||r-1>z?"show":"hide"]().html(P.get("next")),j[P.get("loop")||z?"show":"hide"]().html(P.get("previous")),dt(),P.get("preloading")&&t.each([s(-1),s(1)],function(){var i,n=E[this],o=new a(n,t.data(n,Y)),s=o.get("href");s&&l(o,s)&&(s=h(o,s),i=e.createElement("img"),i.src=s)})):q.hide(),P.get("iframe")?(n=P.get("createIframe"),P.get("scrolling")||(n.scrolling="no"),t(n).attr({src:P.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo($),rt.one(st,function(){n.src="//about:blank"}),P.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===P.get("transition")?y.fadeTo(u,1,i):i())},"fade"===P.get("transition")?y.fadeTo(u,0,function(){V.position(0,c)}):V.position(u,c)}},V.next=function(){!U&&E[1]&&(P.get("loop")||E[z+1])&&(z=s(1),g(E[z]))},V.prev=function(){!U&&E[1]&&(P.get("loop")||z)&&(z=s(-1),g(E[z]))},V.close=function(){K&&!Q&&(Q=!0,K=!1,f(ot),P.get("onCleanup"),H.unbind("."+Z),w.fadeTo(P.get("fadeOut")||0,0),y.stop().fadeTo(P.get("fadeOut")||0,0,function(){y.hide(),w.hide(),f(st),$.remove(),setTimeout(function(){Q=!1,f(at),P.get("onClosed")},1)}))},V.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),w.remove(),Q=!1,y=null,t("."+tt).removeData(Y).removeClass(tt),t(e).unbind("click."+Z).unbind("keydown."+Z))},V.element=function(){return t(P.el)},V.settings=X)}(jQuery,document,window),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,i=-1,n=function(t){return parseFloat(t)||0},o=function(e){var i=1,o=t(e),a=null,s=[];return o.each(function(){var e=t(this),o=e.offset().top-n(e.css("margin-top")),r=s.length>0?s[s.length-1]:null;null===r?s.push(e):Math.floor(Math.abs(a-o))<=i?s[s.length-1]=r.add(e):s.push(e),a=o}),s},a=function(e){var i={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(i,e):("boolean"==typeof e?i.byRow=e:"remove"===e&&(i.remove=!0),i)},s=t.fn.matchHeight=function(e){var i=a(e);if(i.remove){var n=this;return this.css(i.property,""),t.each(s._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!i.target?this:(s._groups.push({elements:this,options:i}),s._apply(this,i),this)};s.version="0.7.0",s._groups=[],s._throttle=80,s._maintainScroll=!1,s._beforeUpdate=null,s._afterUpdate=null,s._rows=o,s._parse=n,s._parseOptions=a,s._apply=function(e,i){var r=a(i),l=t(e),h=[l],c=t(window).scrollTop(),d=t("html").outerHeight(!0),u=l.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),r.byRow&&!r.target&&(l.each(function(){var e=t(this),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block"),e.data("style-cache",e.attr("style")),e.css({display:i,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),h=o(l),l.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(h,function(e,i){var o=t(i),a=0;if(r.target)a=r.target.outerHeight(!1);else{if(r.byRow&&o.length<=1)return void o.css(r.property,"");o.each(function(){var e=t(this),i=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var o={display:n};o[r.property]="",e.css(o),e.outerHeight(!1)>a&&(a=e.outerHeight(!1)),i?e.attr("style",i):e.css("display","")})}o.each(function(){var e=t(this),i=0;r.target&&e.is(r.target)||("border-box"!==e.css("box-sizing")&&(i+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),i+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(r.property,a-i+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),s._maintainScroll&&t(window).scrollTop(c/d*t("html").outerHeight(!0)),this},s._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var i=t(this),n=i.attr("data-mh")||i.attr("data-match-height");n in e?e[n]=e[n].add(i):e[n]=i}),t.each(e,function(){this.matchHeight(!0)})};var r=function(e){s._beforeUpdate&&s._beforeUpdate(e,s._groups),t.each(s._groups,function(){s._apply(this.elements,this.options)}),s._afterUpdate&&s._afterUpdate(e,s._groups)};s._update=function(n,o){if(o&&"resize"===o.type){var a=t(window).width();if(a===e)return;e=a}n?-1===i&&(i=setTimeout(function(){r(o),i=-1},s._throttle)):r(o)},t(s._applyDataApi),t(window).bind("load",function(t){s._update(!1,t)}),t(window).bind("resize orientationchange",function(t){s._update(!0,t)})}),$.fn.serializeObject=function(){var t={},e=this.serializeArray();return $.each(e,function(){void 0!==t[this.name]?(t[this.name].push||(t[this.name]=[t[this.name]]),t[this.name].push(this.value||"")):t[this.name]=this.value||""}),t};var Loading={loadingContainer:".loading",loadingMinHeight:200,start:function(t){var e=this,i=$(t);if(i.length>0){var n=$(e.loadingContainer);n.css("top",i.offset().top+"px"),n.css("left",i.offset().left+"px"),n.css("width",i.width()+"px"),n.css("height",i.height()+"px")}},stop:function(){var t=this;$(t.loadingContainer).removeAttr("style")}};$(function(){var t=$("html").attr("lang");$(".nav-stacked").metisMenu({toggle:!1}),$(".nav-stacked li.active").parents("li").addClass("active").has("ul").children("ul").addClass("collapse in"),$("form").submit(function(t){Loading.start("#main-container")}),$(".pagination").rPage(),$("img.colorbox").click(function(){$(this).colorbox({href:$(this).parent("a").attr("href"),rel:$(this).parent("a").attr("rel"),maxWidth:"95%",maxHeight:"95%"})}),$("a.colorbox").colorbox({rel:$(this).attr("rel"),maxWidth:"95%",maxHeight:"95%"}),"en"!==t&&$.getScript("/js/colorbox/i18n/jquery.colorbox-"+t+".js"),$(".mh-column").matchHeight({property:"min-height"})});