!function(a,b,c){function d(b){if(a.event&&a.event.contentOverflow!==c)return{x:a.event.offsetX,y:a.event.offsetY};if(b.offsetX!==c&&b.offsetY!==c)return{x:b.offsetX,y:b.offsetY};var d=b.target.parentNode.parentNode;return{x:b.layerX-d.offsetLeft,y:b.layerY-d.offsetTop}}function e(a,c,d){a=b.createElementNS(r,a);for(var e in c)a.setAttribute(e,c[e]);"[object Array]"!=Object.prototype.toString.call(d)&&(d=[d]);for(var f=0,g=d[0]&&d.length||0;g>f;f++)a.appendChild(d[f]);return a}function f(a){var b,c,d,e,f,g=a.h%360/60;f=a.v*a.s,e=f*(1-Math.abs(g%2-1)),b=c=d=a.v-f,g=~~g,b+=[f,e,0,0,e,f][g],c+=[e,f,f,e,0,0][g],d+=[0,0,e,f,f,e][g];var h=Math.floor(255*b),i=Math.floor(255*c),j=Math.floor(255*d);return{r:h,g:i,b:j,hex:"#"+(16777216|j|i<<8|h<<16).toString(16).slice(1)}}function g(a){var b=a.r,c=a.g,d=a.b;(a.r>1||a.g>1||a.b>1)&&(b/=255,c/=255,d/=255);var e,f,g,h;return g=Math.max(b,c,d),h=g-Math.min(b,c,d),e=0==h?null:g==b?(c-d)/h+(d>c?6:0):g==c?(d-b)/h+2:(b-c)/h+4,e=e%6*60,f=0==h?0:h/g,{h:e,s:f,v:g}}function h(b,e,g){return function(h){h=h||a.event;var i=d(h);b.h=i.y/e.offsetHeight*360+q,b.s=b.v=1;var j=f({h:b.h,s:1,v:1});g.style.backgroundColor=j.hex,b.callback&&b.callback(j.hex,{h:b.h-q,s:b.s,v:b.v},{r:j.r,g:j.g,b:j.b},c,i)}}function i(b,c){return function(e){e=e||a.event;var g=d(e),h=c.offsetWidth,i=c.offsetHeight;b.s=g.x/h,b.v=(i-g.y)/i;var j=f(b);b.callback&&b.callback(j.hex,{h:b.h-q,s:b.s,v:b.v},{r:j.r,g:j.g,b:j.b},g)}}function j(a,b,c){if(!(this instanceof j))return new j(a,b,c);if(this.h=0,this.s=1,this.v=1,c)this.callback=c,this.pickerElement=b,this.slideElement=a;else{var d=a;d.innerHTML=s,this.slideElement=d.getElementsByClassName("slide")[0],this.pickerElement=d.getElementsByClassName("picker")[0];var e=d.getElementsByClassName("slide-indicator")[0],f=d.getElementsByClassName("picker-indicator")[0];j.fixIndicators(e,f),this.callback=function(a,c,d,g,h){j.positionIndicators(e,f,h,g),b(a,c,d)}}if("SVG"==p){var g=o.cloneNode(!0),m=n.cloneNode(!0),q=g.getElementById("gradient-hsv"),r=g.getElementsByTagName("rect")[0];q.id="gradient-hsv-"+t,r.setAttribute("fill","url(#"+q.id+")");var u=[m.getElementById("gradient-black"),m.getElementById("gradient-white")],v=m.getElementsByTagName("rect");u[0].id="gradient-black-"+t,u[1].id="gradient-white-"+t,v[0].setAttribute("fill","url(#"+u[1].id+")"),v[1].setAttribute("fill","url(#"+u[0].id+")"),this.slideElement.appendChild(g),this.pickerElement.appendChild(m),t++}else this.slideElement.innerHTML=o,this.pickerElement.innerHTML=n;k(this.slideElement,"click",h(this,this.slideElement,this.pickerElement)),k(this.pickerElement,"click",i(this,this.pickerElement)),l(this,this.slideElement,h(this,this.slideElement,this.pickerElement)),l(this,this.pickerElement,i(this,this.pickerElement))}function k(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function l(a,b,c){var d=!1;k(b,"mousedown",function(){d=!0}),k(b,"mouseup",function(){d=!1}),k(b,"mouseout",function(){d=!1}),k(b,"mousemove",function(a){d&&c(a)})}function m(a,b,c,d){a.h=b.h%360,a.s=b.s,a.v=b.v;var e=f(a),g={y:a.h*a.slideElement.offsetHeight/360,x:0},h=a.pickerElement.offsetHeight,i={x:a.s*a.pickerElement.offsetWidth,y:h-a.v*h};return a.pickerElement.style.backgroundColor=f({h:a.h,s:1,v:1}).hex,a.callback&&a.callback(d||e.hex,{h:a.h,s:a.s,v:a.v},c||{r:e.r,g:e.g,b:e.b},i,g),a}var n,o,p=a.SVGAngle||b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML",q=15,r="http://www.w3.org/2000/svg",s=['<div class="picker-wrapper">','<div class="picker"></div>','<div class="picker-indicator"></div>',"</div>",'<div class="slide-wrapper">','<div class="slide"></div>','<div class="slide-indicator"></div>',"</div>"].join("");"SVG"==p?(o=e("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100%"},[e("defs",{},e("linearGradient",{id:"gradient-hsv",x1:"0%",y1:"100%",x2:"0%",y2:"0%"},[e("stop",{offset:"0%","stop-color":"#FF0000","stop-opacity":"1"}),e("stop",{offset:"13%","stop-color":"#FF00FF","stop-opacity":"1"}),e("stop",{offset:"25%","stop-color":"#8000FF","stop-opacity":"1"}),e("stop",{offset:"38%","stop-color":"#0040FF","stop-opacity":"1"}),e("stop",{offset:"50%","stop-color":"#00FFFF","stop-opacity":"1"}),e("stop",{offset:"63%","stop-color":"#00FF40","stop-opacity":"1"}),e("stop",{offset:"75%","stop-color":"#0BED00","stop-opacity":"1"}),e("stop",{offset:"88%","stop-color":"#FFFF00","stop-opacity":"1"}),e("stop",{offset:"100%","stop-color":"#FF0000","stop-opacity":"1"})])),e("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#gradient-hsv)"})]),n=e("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100%"},[e("defs",{},[e("linearGradient",{id:"gradient-black",x1:"0%",y1:"100%",x2:"0%",y2:"0%"},[e("stop",{offset:"0%","stop-color":"#000000","stop-opacity":"1"}),e("stop",{offset:"100%","stop-color":"#CC9A81","stop-opacity":"0"})]),e("linearGradient",{id:"gradient-white",x1:"0%",y1:"100%",x2:"100%",y2:"100%"},[e("stop",{offset:"0%","stop-color":"#FFFFFF","stop-opacity":"1"}),e("stop",{offset:"100%","stop-color":"#CC9A81","stop-opacity":"0"})])]),e("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#gradient-white)"}),e("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#gradient-black)"})])):"VML"==p&&(o=['<DIV style="position: relative; width: 100%; height: 100%">','<v:rect style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" stroked="f" filled="t">','<v:fill type="gradient" method="none" angle="0" color="red" color2="red" colors="8519f fuchsia;.25 #8000ff;24903f #0040ff;.5 aqua;41287f #00ff40;.75 #0bed00;57671f yellow"></v:fill>',"</v:rect>","</DIV>"].join(""),n=['<DIV style="position: relative; width: 100%; height: 100%">','<v:rect style="position: absolute; left: -1px; top: -1px; width: 101%; height: 101%" stroked="f" filled="t">','<v:fill type="gradient" method="none" angle="270" color="#FFFFFF" opacity="100%" color2="#CC9A81" o:opacity2="0%"></v:fill>',"</v:rect>",'<v:rect style="position: absolute; left: 0px; top: 0px; width: 100%; height: 101%" stroked="f" filled="t">','<v:fill type="gradient" method="none" angle="0" color="#000000" opacity="100%" color2="#CC9A81" o:opacity2="0%"></v:fill>',"</v:rect>","</DIV>"].join(""),b.namespaces.v||b.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"));var t=0;j.hsv2rgb=function(a){var b=f(a);return delete b.hex,b},j.hsv2hex=function(a){return f(a).hex},j.rgb2hsv=g,j.rgb2hex=function(a){return f(g(a)).hex},j.hex2hsv=function(a){return g(j.hex2rgb(a))},j.hex2rgb=function(a){return{r:parseInt(a.substr(1,2),16),g:parseInt(a.substr(3,2),16),b:parseInt(a.substr(5,2),16)}},j.prototype.setHsv=function(a){return m(this,a)},j.prototype.setRgb=function(a){return m(this,g(a),a)},j.prototype.setHex=function(a){return m(this,j.hex2hsv(a),c,a)},j.positionIndicators=function(a,b,c,d){c&&(b.style.left="auto",b.style.right="0px",b.style.top="0px",a.style.top=c.y-a.offsetHeight/2+"px"),d&&(b.style.top=d.y-b.offsetHeight/2+"px",b.style.left=d.x-b.offsetWidth/2+"px")},j.fixIndicators=function(a,b){b.style.pointerEvents="none",a.style.pointerEvents="none"},a.ColorPicker=j}(window,window.document),Validator=function(){function a(a,b,c){this.callback=a,this.rank="number"==typeof b?b:1,this.blocking="boolean"==typeof c?c:!1}function b(a){this.element=a,this.events=[]}function c(a,b){this.validateEvent="validate",this.initEvent="init",this.formElement=a,this.elements=[],this.validating=!1,this.validateCount=0,this.validateRetries=20,this.validateRetryDelay=100,this.validCount=0,this.errorCount=0,this.ignoreCount=0,this.opt={rules:[],errorClass:"error",validClass:"valid",errorCallback:function(a){this.defaultErrorCallback.call(this,a)},validCallback:function(a){this.defaultValidCallback.call(this,a)},clearCallback:function(a){this.defaultClearCallback.call(this,a)}},this.setOptions(b),this.registerElements()}return a.prototype={getCallback:function(){return this.callback},getRank:function(){return this.rank},isBlocking:function(){return this.blocking}},b.prototype={getElement:function(){return this.element},setElement:function(a){this.element=a},getEvents:function(a){return"undefined"!=typeof this.events[a]?this.events[a].sort(function(a,b){return a.getRank()-b.getRank()}):void 0},addEvent:function(a,b){"undefined"==typeof this.events[a]&&(this.events[a]=[]),this.events[a].push(b)},hasEvent:function(a){return"undefined"!=typeof this.events[a]},countEvents:function(a){return this.events[a].length}},c.prototype={setOptions:function(a){"undefined"!=typeof a&&("string"==typeof a.errorClass&&(this.opt.errorClass=a.errorClass),"string"==typeof a.validClass&&(this.opt.validClass=a.validClass),"object"==typeof a.rules&&(this.opt.rules=a.rules),"function"==typeof a.errorCallback&&(this.opt.errorCallback=a.errorCallback),"function"==typeof a.validCallback&&(this.opt.validCallback=a.validCallback))},registerElements:function(){for(var c=this,d=0;d<this.opt.rules.length;d++)if("undefined"!=typeof this.opt.rules[d].events&&"undefined"!=typeof this.opt.rules[d].selector&&"undefined"!=typeof this.opt.rules[d].callback){var e=this.formElement.querySelectorAll(this.opt.rules[d].selector);if(e.length>0)for(var f=0;f<e.length;f++){var g=c.getElementBlock(e[f]);g||(g=new b(e[f]),this.elements.push(g));for(var h=0;h<this.opt.rules[d].events.length;h++){g.hasEvent(this.opt.rules[d].events[h])||!function(a){g.getElement().addEventListener(c.opt.rules[d].events[h],function(b){c.executeEvent(b,a)})}(g);var i=this.opt.rules[d].rank;"number"!=typeof i&&(i=1);var j=this.opt.rules[d].blocking;"boolean"!=typeof j&&(j=!1),g.addEvent(this.opt.rules[d].events[h],new a(this.opt.rules[d].callback,i,j))}}}this.initElements()},initElements:function(){for(var a=0;a<this.elements.length;a++){var b=document.createEvent("UIEvents");b.initEvent(this.initEvent,!1,!1),this.elements[a].getElement().dispatchEvent(b)}},deRegisterEvents:function(){},valid:function(a){this.validCount++,this.opt.validCallback.call(this,a)},error:function(a){this.errorCount++,this.opt.errorCallback.call(this,a)},clear:function(a){this.opt.clearCallback.call(this,a)},defaultValidCallback:function(a){this.addClass(a,this.opt.validClass),this.removeClass(a,this.opt.errorClass)},defaultErrorCallback:function(a){this.addClass(a,this.opt.errorClass),this.removeClass(a,this.opt.validClass)},defaultClearCallback:function(a){this.removeClass(a,this.opt.errorClass),this.removeClass(a,this.opt.validClass)},addClass:function(a,b){var c=new RegExp(b);a.className.match(c)||(a.className+=" "+b)},removeClass:function(a,b){var c=new RegExp(" ?"+b);a.className=a.className.replace(c,"")},executeEvent:function(a,b){for(var c=a.type,d=b.getEvents(c),e=null,f=!1,g=0;g<d.length;g++)d[g].isBlocking()&&(f=!0);for(g=0;g<d.length;g++){var h=d[g].getCallback().call(this,a,b.getElement());if("boolean"==typeof h){e=h;var i=d.length-(g+1);if(!e){this.ignoreCount+=i;break}i>0&&this.validCount++}}"boolean"==typeof e&&(e?f?this.validCount++:this.valid(b.getElement()):this.error(b.getElement()))},getElementBlock:function(a){for(var b=0;b<this.elements.length;b++)if(this.elements[b].getElement()==a)return this.elements[b];return!1},validate:function(a){if(this.validating)return!1;this.validating=!0,this.validateCount=0,this.validCount=0,this.errorCount=0,this.ignoreCount=0;for(var b=0;b<this.elements.length;b++)if(this.elements[b].hasEvent(this.validateEvent)){var c=document.createEvent("UIEvents");c.initEvent(this.validateEvent,!1,!1),this.elements[b].getElement().dispatchEvent(c),this.validateCount+=this.elements[b].countEvents(this.validateEvent)}this.checkValidation(a)},checkValidation:function(a,b){var c=this;"undefined"==typeof b&&(b=1),setTimeout(function(){c.errorCount+c.validCount+c.ignoreCount>=c.validateCount?(c.validating=!1,"function"==typeof a.done&&a.done.call(c,c.errorCount<=0)):b<c.validateRetries?c.checkValidation(a,++b):(c.validating=!1,"function"==typeof a.failed&&a.failed.call())},c.validateRetryDelay)}},c}(),function(a,b){"use strict";function c(){var c=b.getElementById("js_form");if(c){var d=b.getElementById("js_foreground_picker");if(d)var e=ColorPicker(d,b.getElementById("js_foreground_slider"),function(a){a=a.replace(/#/,""),i(a),b.getElementById("js_foreground_colour").value=a});var l=b.getElementById("js_background_picker");if(l)var n=ColorPicker(b.getElementById("js_background_picker"),b.getElementById("js_background_slider"),function(a){a=a.replace(/#/,""),j(a),b.getElementById("js_background_colour").value=a});(d||l)&&b.addEventListener("dragstart",function(a){"RECT"==a.target.nodeName.toUpperCase()&&a.preventDefault()},!1);var r=new Validator(c,{validClass:"correct",rules:[{selector:"[data-validation-regex]",events:["validate","blur"],rank:10,callback:function(a,b){return b.value.match(new RegExp(b.getAttribute("data-validation-regex")))?!0:!1}},{selector:"input",events:["focus"],rank:1,callback:function(a,b){this.clear(b),m(b,!1)}},{selector:"#js_sub_domain",events:["validate","blur"],blocking:!0,rank:100,callback:function(c,d){var e=this;k(a.location,{params:"opt=check_sub_domain&sub="+encodeURIComponent(d.value),callback:function(a){var c=b.getElementById("js_sub_domain_status");"1"==a.responseText?(e.valid(d),m(c,!1)):(e.error(d),m(c,!0))}})}},{selector:"#js_custom_domain",events:["validate","blur"],blocking:!0,rank:100,callback:function(c,d){if(d.value.toString().length>0){var e=this;k(a.location,{params:"opt=check_custom_domain&domain="+encodeURIComponent(d.value),callback:function(a){var c=b.getElementById("js_custom_url_status");"1"==a.responseText?(e.valid(d),m(c,!1)):(e.error(d),m(c,!0))}})}else this.valid(d)}},{selector:"#js_sub_domain",events:["init","blur"],rank:1,callback:function(a,c){o(b.getElementById("js_sub_domain_output"),c,/[^A-Za-z0-9\-]/g)}},{selector:"#js_email",events:["validate","blur"],rank:20,callback:function(b,c){var d=this;k(a.location,{params:"opt=check_email&email="+encodeURIComponent(c.value),callback:function(a){var b="1"==a.responseText;m(c,!b),b?d.valid(c):d.error(c)}})}},{selector:"#js_password_check",events:["validate","blur"],rank:20,callback:function(a,c){var d=b.getElementById("js_password"),e=d.value==c.value;return e?(m(c,!1),!0):(m(c,!0),!1)}},{selector:"#js_exp_year",events:["validate","blur"],rank:10,callback:function(a,b){return parseInt(b.value)>=2013&&parseInt(b.value)<=2099}},{selector:"#js_company_name",events:["init","blur"],callback:function(a,c){o(b.getElementById("js_company_name_output"),c,new RegExp(c.getAttribute("data-validation-regex")+"g"))}},{selector:"#js_foreground_colour",events:["init","blur","keyup"],rank:10,callback:function(a,b){var c=b.value;c.match(/^[0-9a-fA-F]{6}$/)&&(i(c),e.setHex("#"+c))}},{selector:".js_colour_input",events:["focus"],callback:function(a,c){var d=g(c,!0);d&&setTimeout(function(){b.addEventListener("click",function a(b){b.target.id!=c.id&&"rect"!=b.target.tagName.toString().toLowerCase()&&(h(d),this.removeEventListener("click",a,!1))},!1)},200)}},{selector:".js_colour_input",events:["blur"],rank:0,callback:function(a,b){""==b.value&&(b.value=b.getAttribute("data-default"))}},{selector:"#js_background_colour",events:["init","blur","keyup"],callback:function(a,b){var c=b.value;c.match(/^[0-9a-fA-F]{6}$/)&&(j(c),n.setHex("#"+c))}},{selector:"#js_country",events:["change","init"],callback:function(a,c){var d=b.getElementById("js_nz_message");"NZ"==c.options[c.selectedIndex].value.toString().toUpperCase()?p(d,"show"):q(d,"show")}},{selector:".js_colour_input, #js_company_name, #js_company_link",events:["focus"],rank:0,callback:function(){f(this)}},{selector:"#js_company_link_switcher",events:["click"],rank:0,callback:function(a){a.preventDefault();var c=b.getElementById("js_company_link");c.className.match(/hide/)?(q(c,"hide"),c.focus()):p(c,"hide")}},{selector:"#js_company_link",events:["blur"],rank:0,callback:function(a,c){var d=b.getElementById("js_company_name_output");""==c.value?q(d,"has_link"):p(d,"has_link")}}]});c.addEventListener("submit",function(a){if(a.preventDefault(),!v){v=!0;var d=b.getElementById("js_submit");d.value=d.getAttribute("data-update-text"),r.validate({done:function(a){v=!1,a?c.submit():d.value=d.getAttribute("data-error-text")},failed:function(){v=!1,d.value=d.getAttribute("data-original-value")}})}},!1)}}function d(){var a=b.getElementById("js_password_form");if(a){var c=!1,d=new Validator(a,{validClass:"correct",rules:[{selector:"[data-validation-regex]",events:["validate","blur"],rank:10,callback:function(a,b){return b.value.match(new RegExp(b.getAttribute("data-validation-regex")))?!0:!1}},{selector:"#js_password_check",events:["validate","blur"],rank:20,callback:function(a,c){var d=b.getElementById("js_password"),e=d.value==c.value;return e?(m(c,!1),!0):(m(c,!0),!1)}}]});a.addEventListener("submit",function(e){if(e.preventDefault(),!c){c=!0;var f=b.getElementById("js_submit");f.value=f.getAttribute("data-update-text"),d.validate({done:function(b){c=!1,b?a.submit():f.value=f.getAttribute("data-error-text")},failed:function(){c=!1,f.value=f.getAttribute("data-original-value")}})}},!1)}}function e(){var a=b.getElementById("js_device_form");if(a){var c=!1,d=new Validator(a,{validClass:"correct",rules:[{selector:".js_device_checkboxes input",events:["change"],rank:0,callback:function(){f(this)}},{selector:".js_device_checkboxes",events:["validate"],rank:20,callback:function(a,b){var c,d=b.querySelectorAll("input");for(c=0;c<d.length;c++)if(d[c].checked)return console.log("At least one checked"),!0;return!1}}]});a.addEventListener("submit",function(e){if(e.preventDefault(),!c){c=!0;var f=b.getElementById("js_device_submit");f.value=f.getAttribute("data-update-text"),d.validate({done:function(b){c=!1,b?a.submit():f.value=f.getAttribute("data-error-text")},failed:function(){console.log("failed"),c=!1,f.value=f.getAttribute("data-original-value")}})}},!1)}}function f(a){var b=a.formElement.getElementsByClassName("js_settings_save")[0];b&&p(b,"show")}function g(a,b){do if(a=a.parentNode,"form"==a.tagName.toLowerCase())return;while(!a.className.match(/js_colour_wrapper/));var c=a.querySelector(".js_colour_picker");return c?(b?p(c,"show"):q(c,"show"),c):!1}function h(a){q(a,"show")}function i(a){n(b.getElementById("tools"),a,["color"]),n(b.getElementById("url"),a,["color"]),n(b.getElementById("js_go"),a,["color"])}function j(a){n(b.getElementById("tools"),a,["backgroundColor"]);var c=l(a,-10);n(b.getElementById("url"),c,["backgroundColor"]),n(b.getElementById("js_go"),c,["backgroundColor"]),b.getElementById("js_shaded_colour").value=c}function k(a,b){var c;"function"==typeof b.callback&&(c=b.callback);var d;"string"==typeof b.params&&(d=b.params);var e=new XMLHttpRequest;e.open("POST",a,!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.onreadystatechange=function(){4==e.readyState&&200==e.status&&200==e.status&&c&&c.call(null,e)},e.send(d)}function l(a,b){var c=parseInt(a,16),d=Math.round(2.55*b),e=(c>>16)+d,f=(c>>8&255)+d,g=(255&c)+d;return(16777216+65536*(255>e?1>e?0:e:255)+256*(255>f?1>f?0:f:255)+(255>g?1>g?0:g:255)).toString(16).slice(1)}function m(a,b){do if(a=a.parentNode,"form"==a.tagName.toLowerCase())return;while("label"!=a.tagName.toLowerCase());var c=a.querySelector(".js_status_invalid");c&&(b?p(c,"show"):q(c,"show"))}function n(a,b,c){b=b.toString(),"#"==b.substr(0,1)&&(b=b.substr(1));for(var d=0;d<c.length;d++)a.style[c[d]]="#"+b}function o(a,b,c){c instanceof RegExp&&(b.value=b.value.replace(c,"")),a.innerHTML=""==b.value?b.getAttribute("placeholder")?b.getAttribute("placeholder"):"":b.value}function p(a,b){var c=new RegExp(b);a.className.match(c)||(a.className+=" "+b)}function q(a,b){var c=new RegExp(" ?"+b);a.className=a.className.replace(c,"")}function r(){var c=b.getElementById("js_message");c&&setTimeout(function(){p(c,"hide"),"replaceState"in history&&history.replaceState("",b.title,a.location.pathname)},3e3)}function s(){var a;(a=b.getElementById("js_bookmarklet"))&&a.addEventListener("click",function(a){a.preventDefault&&a.preventDefault(),alert("You need to drag the link to your browser's bookmarks bar.")})}function t(){var a,c;(a=b.getElementById("addext"))&&(c=b.getElementById("js_bookmarklet"))&&(a.addEventListener("click",function(){c.href.toString().match("scroll")?(c.href=c.href.toString().replace(/scroll=ext&/,""),c.innerHTML=c.innerHTML.toString().replace(/ \(scroll=ext\)/,"")):(c.href=c.href.toString().replace(/\/\?url=/,"/?scroll=ext&url="),c.innerHTML=c.innerHTML.toString().replace(/Responsinator/,"Responsinator (scroll=ext)"))}),s())}function u(){w||(w=!0,c(),d(),e(),r(),t())}var v=!1,w=!1;return"complete"===b.readyState?setTimeout(u,1):(b.addEventListener&&(b.addEventListener("DOMContentLoaded",u,!1),a.addEventListener("load",u,!1)),void 0)}(window,document),function(){"use strict";function a(){c||(c=!0,b())}function b(){if(document.getElementsByClassName&&(d||(d=document.getElementsByClassName("time"),!(d.length<1)))){var a=new Date,c=a.getHours(),e="AM";c>11&&(e="PM"),c>12&&(c-=12),0==c&&(c=12);var f=a.getMinutes();1==f.toString().length&&(f="0"+f.toString());for(var g=c+":"+f+" <span>"+e+"</span>",h=0;h<d.length;h++)d[h].innerHTML=g;setTimeout(b,6e4)}}var c=!1,d=!1;return"complete"===document.readyState?setTimeout(a,1):(document.addEventListener&&(document.addEventListener("DOMContentLoaded",a,!1),window.addEventListener("load",a,!1)),void 0)}();