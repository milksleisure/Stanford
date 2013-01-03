var DISQUS=function(e){var f={AssertionError:function(a){this.message=a}};f.AssertionError.prototype.toString=function(){return"Assertion Error: "+(this.message||"[no message]")};f.assert=function(a,b){if(!a)throw new f.AssertionError(b);};var g=[];f.define=function(a,b){typeof a==="function"&&(b=a,a="");for(var h=a.split("."),c=h.shift(),d=f,o=(b||function(){return{}}).call({overwrites:function(d){d.__overwrites__=!0;return d}},e);c;)d=d[c]?d[c]:d[c]={},c=h.shift();for(var k in o)o.hasOwnProperty(k)&&
(o.__overwrites__||d[k]!==null&&f.assert(!d.hasOwnProperty(k),"Unsafe attempt to redefine existing module with "+k),d[k]=o[k],g.push(function(d,c){return function(){delete d[c]}}(d,k)));return d};f.use=function(a){return f.define(a)};f.cleanup=function(){for(var a=0;a<g.length;a++)g[a]()};return f}(this);
DISQUS.define(function(e,f){var g=e.document,a=g.getElementsByTagName("head")[0]||g.body,b={running:!1,timer:null,queue:[]};DISQUS.defer=function(a,c){function d(){var d=b.queue;if(d.length===0)b.running=!1,clearInterval(b.timer);for(var c=0,a;a=d[c];c++)a[0]()&&(d.splice(c--,1),a[1]())}b.queue.push([a,c]);d();if(!b.running)b.running=!0,b.timer=setInterval(d,100)};DISQUS.each=function(a,c){var d=a.length,b=Array.prototype.forEach;if(isNaN(d))for(var g in a)a.hasOwnProperty(g)&&c(a[g],g,a);else if(b)b.call(a,
c);else for(b=0;b<d;b++)c(a[b],b,a)};DISQUS.serializeArgs=function(a){var c=[];DISQUS.each(a,function(a,b){a!==f&&c.push(b+(a!==null?"="+encodeURIComponent(a):""))});return c.join("&")};DISQUS.serialize=function(a,c,d){c&&(a+=~a.indexOf("?")?a.charAt(a.length-1)=="&"?"":"&":"?",a+=DISQUS.serializeArgs(c));if(d)return c={},c[(new Date).getTime()]=null,DISQUS.serialize(a,c);c=a.length;return a.charAt(c-1)=="&"?a.slice(0,c-1):a};DISQUS.require=function(b,c,d,f,e){function m(a){if(a.type=="load"||/^(complete|loaded)$/.test(a.target.readyState))f&&
f(),l&&clearTimeout(l),DISQUS.bean.remove(a.target,p,m)}var i=g.createElement("script"),p=i.addEventListener?"load":"readystatechange",l=null;i.src=DISQUS.serialize(b,c,d);i.async=!0;i.charset="UTF-8";(f||e)&&DISQUS.bean.add(i,p,m);e&&(l=setTimeout(function(){e()},2E4));a.appendChild(i);return DISQUS};DISQUS.requireStylesheet=function(b,c,d){var f=g.createElement("link");f.rel="stylesheet";f.type="text/css";f.href=DISQUS.serialize(b,c,d);a.appendChild(f);return DISQUS};DISQUS.requireSet=function(a,
c,d){var b=a.length;DISQUS.each(a,function(a){DISQUS.require(a,{},c,function(){--b===0&&d()})})};DISQUS.injectCss=function(b){var c=g.createElement("style");c.setAttribute("type","text/css");b=b.replace(/\}/g,"}\n");e.location.href.match(/^https/)&&(b=b.replace(/http:\/\//g,"https://"));c.styleSheet?c.styleSheet.cssText=b:c.appendChild(g.createTextNode(b));a.appendChild(c)}});
DISQUS.define("JSON",function(){function e(a){return a<10?"0"+a:a}function f(a){c.lastIndex=0;return c.test(a)?'"'+a.replace(c,function(a){var d=k[a];return typeof d==="string"?d:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function g(a,c){var e,h,i,k,l=d,n,j=c[a];j&&typeof j==="object"&&typeof j.toJSON==="function"&&!b&&(j=j.toJSON(a));typeof m==="function"&&(j=m.call(c,a,j));switch(typeof j){case "string":return f(j);case "number":return isFinite(j)?String(j):"null";case "boolean":case "null":return String(j);
case "object":if(!j)return"null";d+=o;n=[];if(Object.prototype.toString.apply(j)==="[object Array]"){k=j.length;for(e=0;e<k;e+=1)n[e]=g(e,j)||"null";i=n.length===0?"[]":d?"[\n"+d+n.join(",\n"+d)+"\n"+l+"]":"["+n.join(",")+"]";d=l;return i}if(m&&typeof m==="object"){k=m.length;for(e=0;e<k;e+=1)h=m[e],typeof h==="string"&&(i=g(h,j))&&n.push(f(h)+(d?": ":":")+i)}else for(h in j)Object.hasOwnProperty.call(j,h)&&(i=g(h,j))&&n.push(f(h)+(d?": ":":")+i);i=n.length===0?"{}":d?"{\n"+d+n.join(",\n"+d)+"\n"+
l+"}":"{"+n.join(",")+"}";d=l;return i}}var a={},b=!1;if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+e(this.getUTCMonth()+1)+"-"+e(this.getUTCDate())+"T"+e(this.getUTCHours())+":"+e(this.getUTCMinutes())+":"+e(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var h=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,d,o,k={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},m;a.stringify=function(a,c,b){var e;o=d="";if(typeof b==="number")for(e=0;e<b;e+=1)o+=" ";else typeof b==="string"&&(o=b);if((m=c)&&typeof c!=="function"&&(typeof c!=="object"||typeof c.length!=="number"))throw Error("JSON.stringify");return g("",{"":a})};a.parse=function(a,c){function d(a,
b){var e,f,g=a[b];if(g&&typeof g==="object")for(e in g)Object.hasOwnProperty.call(g,e)&&(f=d(g,e),f!==void 0?g[e]=f:delete g[e]);return c.call(a,b,g)}var b,a=String(a);h.lastIndex=0;h.test(a)&&(a=a.replace(h,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return b=eval("("+a+")"),
typeof c==="function"?d({"":b},""):b;throw new SyntaxError("JSON.parse");};var i={a:[1,2,3]},p,l;if(Object.toJSON&&Object.toJSON(i).replace(/\s/g,"")==='{"a":[1,2,3]}')p=Object.toJSON;typeof String.prototype.evalJSON==="function"&&(i='{"a":[1,2,3]}'.evalJSON(),i.a&&i.a.length===3&&i.a[2]===3&&(l=function(a){return a.evalJSON()}));(function(){var a=[1,2,3];typeof a.toJSON==="function"&&(a=a.toJSON(),b=!(a&&a.length===3&&a[2]===3))})();if(b||!p||!l)return{stringify:a.stringify,parse:a.parse};return{stringify:p,
parse:l}});
DISQUS.define("Bus",function(){function e(a){a=a.split("/");return a[0]+"//"+a[2]}var f=DISQUS.use("JSON"),g=window.location.hash.slice(1),a=window.parent,b=document.referrer,h={};h.client=e(document.location.href);h.host=b?e(b):h.client;return{origins:h,postMessage:function(c){c.sender=g;c=f.stringify(c);a.postMessage(c,h.host)},sendHostMessage:function(a,d){d=d||[];DISQUS.Bus.postMessage({scope:"host",name:a,data:d})},sendGlobalMessage:function(a,d){d=d||[];DISQUS.Bus.postMessage({scope:"global",name:a,
data:d})}}});_.extend(DISQUS.Bus,Backbone.Events);$(document).ready(function(){var e=window.addEventListener?window.addEventListener:window.attachEvent,f=window.addEventListener?"message":"onmessage";if(!e)throw Error("No event support.");e(f,function(e){var a=DISQUS.Bus,b=e.origin;if(!(b!=a.origins.client&&b!=a.origins.host)){var f;try{f=DISQUS.JSON.parse(e.data)}catch(c){return}e=f.data;switch(f.scope){case "client":a.trigger(e.eventName,e.data)}}},!1)});
DISQUS.define(function(e){var e=e.document,f=require("bean"),g=_.extend,a=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i),b;try{localStorage.setItem("_test","_test"),localStorage.removeItem("_test"),b=!0}catch(h){b=!1}var c={blocks:{},ISO_8601:"YYYY-MM-DDTHH:mm:ssZ",apiKey:"E8Uh5l5fHZ6gD8U3KycjAIAk46f68Zw7C6eW8WSjZvCLXebZ7p0r1yrYDrLilk2F",bean:f,extend:g,debug:!1,browser:{mobile:a,localStorage:b,contentEditable:"isContentEditable"in e.documentElement},addBlocks:function(){return function(a){a(DISQUS)}}};
c.templateGlobals={urls:DISQUS.use("urls"),sso:null,_:{pluralize:_.pluralize}};c.renderBlock=function(a,b){return DISQUS.blocks[a](c.templateGlobals,b)};c.assureOffset=function(a){return a.indexOf("+")>=0?a:a+"+00:00"};b=c.Builder=function(){this.accum=[]};_.extend(b.prototype,{put:function(a){this.accum.push(a)},esc:function(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")},compile:function(){return this.accum.join("")}});
return c});
DISQUS.define("urls",function(){return{media:"http://mediacdn.disqus.com/1339189988",root:"http://disqus.com",realertime:"",login:"https://disqus.com/next/login/",api:"http://disqus.com/api/3.0/",apiSecure:"https://disqus.com/api/3.0/",logout:"http://disqus.com/logout/?redirect="+encodeURIComponent(document.referrer),help:"http://disqus.com/help/",editProfile:"http://disqus.com/account/",moderate:"http://disqus.com/admin/moderate/",oauth:{twitter:"http://disqus.com/_ax/twitter/begin/",google:"http://disqus.com/_ax/google/begin/",
facebook:"http://disqus.com/_ax/facebook/begin/"},loading:"http://mediacdn.disqus.com/1339189988/html/simple-loading.html",avatar:{generic:"http://mediacdn.disqus.com/1339189988/images/noavatar92.png"}}});
DISQUS.define("api",function(){function e(a){function b(c){var f=c.originalEvent.origin;DISQUS.urls.apiSecure.slice(0,f.length)===f&&(c=DISQUS.JSON.parse(c.originalEvent.data),c.requestId==e&&(f=c.code===0?a.success:a.error,delete c.requestId,(f||function(){})(c),document.body.removeChild(g),document.body.removeChild(d),$(window).unbind("message",b)))}var e=_.uniqueId(),c=document.createElement("div"),d=document.createElement("form"),f="frame_"+e,g;c.innerHTML='<iframe name="'+f+'"></iframe>';g=c.childNodes[0];
d.target=f;d.action=a.url.replace(".json",".pm");d.method=a.method||"GET";a.data=_.extend(a.data,{callback:e,referrer:document.referrer});_.each(a.data,function(a,c){a===!0?a=[1]:a===!1?a=[0]:a===null?a=[""]:_.isArray(a)||(a=[a]);_.each(a,function(a){var b=document.createElement("input");b.type="hidden";b.name=c;b.value=a;d.appendChild(b)})});$(window).bind("message",b);document.body.appendChild(g);document.body.appendChild(d);d.submit()}function f(a){a=_.defaults(a,g);a.data=a.data||{};a.data.api_key=
DISQUS.apiKey;$.ajax(a)}var g={};return{defaults:function(a){_.extend(g,a)},ajax:f,call:function(a,b){b=b||{};b.url=(b.secure?DISQUS.urls.apiSecure:DISQUS.urls.api)+a;b.data=_.extend(b.data||{},{api_key:DISQUS.apiKey});(b.secure?e:f)(b)}}});
(function(e){var f=DISQUS.Bus,g=DISQUS.urls.api+"internal/switches/list.jsonp";e.switches_jsonp_cb=function(a){f.sendHostMessage("switches.received",a.response)};f.on("fetch",function(a){a=a||{};a.data=a.data||{};a.data.callback="switches_jsonp_cb";a.data.api_key=DISQUS.apiKey;a=DISQUS.serialize(g,a.data,!1);DISQUS.require(a)});f.sendHostMessage("ready")})(this);