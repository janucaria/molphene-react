(this["webpackJsonpmolphene-react"]=this["webpackJsonpmolphene-react"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/react-logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),u=(n(10),n(1)),c=function(){var e="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;return function(t){var n;t=t||{},n||(n="undefined"!==typeof t?t:{});var r,a={};for(r in n)n.hasOwnProperty(r)&&(a[r]=n[r]);n.arguments=[],n.thisProgram="./this.program",n.quit=function(e,t){throw t},n.preRun=[],n.postRun=[];var o="";document.currentScript&&(o=document.currentScript.src),e&&(o=e),o=0!==o.indexOf("blob:")?o.substr(0,o.lastIndexOf("/")+1):"",n.read=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},n.readAsync=function(e,t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):n()},r.onerror=n,r.send(null)},n.setWindowTitle=function(e){document.title=e};var i=n.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),u=n.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||i);for(r in a)a.hasOwnProperty(r)&&(n[r]=a[r]);a=void 0;var c,s={"f64-rem":function(e,t){return e%t},debugger:function(){}},l=(new Array(0),0);"object"!==typeof WebAssembly&&u("no native wasm support detected");var f=!1;var m="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;function d(e,t,n){for(var r=t+n,a=t;e[a]&&!(a>=r);)++a;if(a-t>16&&e.subarray&&m)return m.decode(e.subarray(t,a));for(var o="";t<a;){var i=e[t++];if(128&i){var u=63&e[t++];if(192!=(224&i)){var c=63&e[t++];if((i=224==(240&i)?(15&i)<<12|u<<6|c:(7&i)<<18|u<<12|c<<6|63&e[t++])<65536)o+=String.fromCharCode(i);else{var s=i-65536;o+=String.fromCharCode(55296|s>>10,56320|1023&s)}}else o+=String.fromCharCode((31&i)<<6|u)}else o+=String.fromCharCode(i)}return o}function p(e,t){return e?d(y,e,t):""}function g(e,t,n,r){if(!(r>0))return 0;for(var a=n,o=n+r-1,i=0;i<e.length;++i){var u=e.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((1023&u)<<10)|1023&e.charCodeAt(++i);if(u<=127){if(n>=o)break;t[n++]=u}else if(u<=2047){if(n+1>=o)break;t[n++]=192|u>>6,t[n++]=128|63&u}else if(u<=65535){if(n+2>=o)break;t[n++]=224|u>>12,t[n++]=128|u>>6&63,t[n++]=128|63&u}else{if(n+3>=o)break;t[n++]=240|u>>18,t[n++]=128|u>>12&63,t[n++]=128|u>>6&63,t[n++]=128|63&u}}return t[n]=0,n-a}function v(e){for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&e.charCodeAt(++n)),r<=127?++t:t+=r<=2047?2:r<=65535?3:4}return t}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var h,_,y,b,E,w,x,S,A;var C=n.TOTAL_MEMORY||536870912;function L(e){for(;e.length>0;){var t=e.shift();if("function"!=typeof t){var r=t.func;"number"===typeof r?void 0===t.arg?n.dynCall_v(r):n.dynCall_vi(r,t.arg):r(void 0===t.arg?null:t.arg)}else t()}}C<5242880&&u("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+C+"! (TOTAL_STACK=5242880)"),n.buffer?h=n.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(c=new WebAssembly.Memory({initial:C/65536,maximum:C/65536}),h=c.buffer):h=new ArrayBuffer(C),n.HEAP8=_=new Int8Array(h),n.HEAP16=b=new Int16Array(h),n.HEAP32=w=new Int32Array(h),n.HEAPU8=y=new Uint8Array(h),n.HEAPU16=E=new Uint16Array(h),n.HEAPU32=x=new Uint32Array(h),n.HEAPF32=S=new Float32Array(h),n.HEAPF64=A=new Float64Array(h),w[9848]=5282304;var D=[],k=[],T=[],B=[],M=[],O=!1;var I=0,F=null,R=null;n.preloadedImages={},n.preloadedAudios={};function N(e){return String.prototype.startsWith?e.startsWith("data:application/octet-stream;base64,"):0===e.indexOf("data:application/octet-stream;base64,")}var H,P="molphene-web.wasm";function Y(){try{if(n.wasmBinary)return new Uint8Array(n.wasmBinary);if(n.readBinary)return n.readBinary(P);throw"both async and sync fetching of the wasm failed"}catch(u){xe(u)}}function G(e){var t={env:e,global:{NaN:NaN,Infinity:1/0},"global.Math":Math,asm2wasm:s};function r(e,t){var r=e.exports;n.asm=r,function(e){if(I--,n.monitorRunDependencies&&n.monitorRunDependencies(I),0==I&&(null!==F&&(clearInterval(F),F=null),R)){var t=R;R=null,t()}}()}if(I++,n.monitorRunDependencies&&n.monitorRunDependencies(I),n.instantiateWasm)try{return n.instantiateWasm(t,r)}catch(i){return u("Module.instantiateWasm callback failed with error: "+i),!1}function a(e){r(e.instance)}function o(e){(n.wasmBinary||"function"!==typeof fetch?new Promise((function(e,t){e(Y())})):fetch(P,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+P+"'";return e.arrayBuffer()})).catch((function(){return Y()}))).then((function(e){return WebAssembly.instantiate(e,t)})).then(e,(function(e){u("failed to asynchronously prepare wasm: "+e),xe(e)}))}return n.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||N(P)||"function"!==typeof fetch?o(a):WebAssembly.instantiateStreaming(fetch(P,{credentials:"same-origin"}),t).then(a,(function(e){u("wasm streaming compile failed: "+e),u("falling back to ArrayBuffer instantiation"),o(a)})),{}}N(P)||(H=P,P=n.locateFile?n.locateFile(H,o):o+H),n.asm=function(e,t,n){return t.memory=c,t.table=new WebAssembly.Table({initial:599,maximum:599,element:"anyfunc"}),t.__memory_base=1024,t.__table_base=0,G(t)},k.push({func:function(){ge()}});function W(e,t){B.unshift({func:e,arg:t})}function j(){return!!j.uncaught_exception}var X={last:0,caught:[],infos:{},deAdjust:function(e){if(!e||X.infos[e])return e;for(var t in X.infos)for(var n=+t,r=X.infos[n].adjusted,a=r.length,o=0;o<a;o++)if(r[o]===e)return n;return e},addRef:function(e){e&&X.infos[e].refcount++},decRef:function(e){if(e){var t,r=X.infos[e];r.refcount>0||xe("Assertion failed: "+t),r.refcount--,0!==r.refcount||r.rethrown||(r.destructor&&n.dynCall_vi(r.destructor,e),delete X.infos[e],function(e){try{ve(e)}catch(t){}}(e))}},clearRef:function(e){e&&(X.infos[e].refcount=0)}};function U(e){return 0}var V={buffers:[null,[],[]],printChar:function(e,t){var n=V.buffers[e];0===t||10===t?((1===e?i:u)(d(n,0)),n.length=0):n.push(t)},varargs:0,get:function(e){return V.varargs+=4,w[V.varargs-4>>2]},getStr:function(){return p(V.get())},get64:function(){var e=V.get();V.get();return e},getZero:function(){V.get()}};var z={keyEvent:0,mouseEvent:0,wheelEvent:0,uiEvent:0,focusEvent:0,deviceOrientationEvent:0,deviceMotionEvent:0,fullscreenChangeEvent:0,pointerlockChangeEvent:0,visibilityChangeEvent:0,touchEvent:0,previousFullscreenElement:null,previousScreenX:null,previousScreenY:null,removeEventListenersRegistered:!1,removeAllEventListeners:function(){for(var e=z.eventHandlers.length-1;e>=0;--e)z._removeHandler(e);z.eventHandlers=[],z.deferredCalls=[]},registerRemoveEventListeners:function(){z.removeEventListenersRegistered||(B.push(z.removeAllEventListeners),z.removeEventListenersRegistered=!0)},deferredCalls:[],deferCall:function(e,t,n){function r(e,t){if(e.length!=t.length)return!1;for(var n in e)if(e[n]!=t[n])return!1;return!0}for(var a in z.deferredCalls){var o=z.deferredCalls[a];if(o.targetFunction==e&&r(o.argsList,n))return}z.deferredCalls.push({targetFunction:e,precedence:t,argsList:n}),z.deferredCalls.sort((function(e,t){return e.precedence<t.precedence}))},removeDeferredCalls:function(e){for(var t=0;t<z.deferredCalls.length;++t)z.deferredCalls[t].targetFunction==e&&(z.deferredCalls.splice(t,1),--t)},canPerformEventHandlerRequests:function(){return z.inEventHandler&&z.currentEventHandler.allowsDeferredCalls},runDeferredCalls:function(){if(z.canPerformEventHandlerRequests())for(var e=0;e<z.deferredCalls.length;++e){var t=z.deferredCalls[e];z.deferredCalls.splice(e,1),--e,t.targetFunction.apply(this,t.argsList)}},inEventHandler:0,currentEventHandler:null,eventHandlers:[],isInternetExplorer:function(){return-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>0},removeAllHandlersOnTarget:function(e,t){for(var n=0;n<z.eventHandlers.length;++n)z.eventHandlers[n].target!=e||t&&t!=z.eventHandlers[n].eventTypeString||z._removeHandler(n--)},_removeHandler:function(e){var t=z.eventHandlers[e];t.target.removeEventListener(t.eventTypeString,t.eventListenerFunc,t.useCapture),z.eventHandlers.splice(e,1)},registerOrRemoveHandler:function(e){var t=function(t){++z.inEventHandler,z.currentEventHandler=e,z.runDeferredCalls(),e.handlerFunc(t),z.runDeferredCalls(),--z.inEventHandler};if(e.callbackfunc)e.eventListenerFunc=t,e.target.addEventListener(e.eventTypeString,t,e.useCapture),z.eventHandlers.push(e),z.registerRemoveEventListeners();else for(var n=0;n<z.eventHandlers.length;++n)z.eventHandlers[n].target==e.target&&z.eventHandlers[n].eventTypeString==e.eventTypeString&&z._removeHandler(n--)},getBoundingClientRectOrZeros:function(e){return e.getBoundingClientRect?e.getBoundingClientRect():{left:0,top:0}},pageScrollPos:function(){return window.pageXOffset>0||window.pageYOffset>0?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[0|document.body.scrollLeft,0|document.body.scrollTop]},getNodeNameForTarget:function(e){return e?e==window?"#window":e==screen?"#screen":e&&e.nodeName?e.nodeName:"":""},tick:function(){return window.performance&&window.performance.now?window.performance.now():Date.now()},fullscreenEnabled:function(){return document.fullscreenEnabled||document.mozFullScreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled}};var K=[0,document,window];function q(e){var t;return K[e]||document.querySelector((t=e)===t+0?p(t):t)}function J(e,t,n,r,a,o,i){z.mouseEvent||(z.mouseEvent=he(72));var u={target:e=q(e),allowsDeferredCalls:"mousemove"!=o&&"mouseenter"!=o&&"mouseleave"!=o,eventTypeString:o,callbackfunc:r,handlerFunc:function(n){var o=n||window.event;!function(e,t,n){if(A[e>>3]=z.tick(),w[e+8>>2]=t.screenX,w[e+12>>2]=t.screenY,w[e+16>>2]=t.clientX,w[e+20>>2]=t.clientY,w[e+24>>2]=t.ctrlKey,w[e+28>>2]=t.shiftKey,w[e+32>>2]=t.altKey,w[e+36>>2]=t.metaKey,b[e+40>>1]=t.button,b[e+42>>1]=t.buttons,w[e+44>>2]=t.movementX||t.mozMovementX||t.webkitMovementX||t.screenX-z.previousScreenX,w[e+48>>2]=t.movementY||t.mozMovementY||t.webkitMovementY||t.screenY-z.previousScreenY,n){var r=z.getBoundingClientRectOrZeros(n);w[e+52>>2]=t.clientX-r.left,w[e+56>>2]=t.clientY-r.top}else w[e+52>>2]=0,w[e+56>>2]=0;"wheel"!==t.type&&"mousewheel"!==t.type&&(z.previousScreenX=t.screenX,z.previousScreenY=t.screenY)}(z.mouseEvent,o,e),be(r,a,z.mouseEvent,t)&&o.preventDefault()},useCapture:n};z.isInternetExplorer()&&"mousedown"==o&&(u.allowsDeferredCalls=!1),z.registerOrRemoveHandler(u)}function Z(e,t,n,r,a,o,i){z.touchEvent||(z.touchEvent=he(1684));var u={target:e=q(e),allowsDeferredCalls:"touchstart"==o||"touchend"==o,eventTypeString:o,callbackfunc:r,handlerFunc:function(n){for(var o=n||window.event,i={},u=0;u<o.touches.length;++u){i[(c=o.touches[u]).identifier]=c}for(u=0;u<o.changedTouches.length;++u){i[(c=o.changedTouches[u]).identifier]=c,c.changed=!0}for(u=0;u<o.targetTouches.length;++u){var c;i[(c=o.targetTouches[u]).identifier].onTarget=!0}var s=z.touchEvent,l=s;w[l+4>>2]=o.ctrlKey,w[l+8>>2]=o.shiftKey,w[l+12>>2]=o.altKey,w[l+16>>2]=o.metaKey,l+=20;var f=z.getBoundingClientRectOrZeros(e),m=0;for(var u in i){var d=i[u];if(w[l>>2]=d.identifier,w[l+4>>2]=d.screenX,w[l+8>>2]=d.screenY,w[l+12>>2]=d.clientX,w[l+16>>2]=d.clientY,w[l+20>>2]=d.pageX,w[l+24>>2]=d.pageY,w[l+28>>2]=d.changed,w[l+32>>2]=d.onTarget,w[l+36>>2]=d.clientX-f.left,w[l+40>>2]=d.clientY-f.top,l+=52,++m>=32)break}w[s>>2]=m,be(r,a,s,t)&&o.preventDefault()},useCapture:n};z.registerOrRemoveHandler(u)}var Q={counter:1,buffers:[],mappedBuffers:{},programs:[],framebuffers:[],renderbuffers:[],textures:[],uniforms:[],shaders:[],vaos:[],contexts:{},currentContext:null,offscreenCanvases:{},timerQueriesEXT:[],programInfos:{},stringCache:{},unpackAlignment:4,init:function(){},recordError:function(e){},getNewId:function(e){for(var t=Q.counter++,n=e.length;n<t;n++)e[n]=null;return t},getSource:function(e,t,n,r){for(var a="",o=0;o<t;++o){var i=r?w[r+4*o>>2]:-1;a+=p(w[n+4*o>>2],i<0?void 0:i)}return a},createContext:function(e,t){var n=e.getContext("webgl",t)||e.getContext("experimental-webgl",t);return n&&Q.registerContext(n,t)},registerContext:function(e,t){var n=he(8),r={handle:n,attributes:t,version:t.majorVersion,GLctx:e};return e.canvas&&(e.canvas.GLctxObject=r),Q.contexts[n]=r,("undefined"===typeof t.enableExtensionsByDefault||t.enableExtensionsByDefault)&&Q.initExtensions(r),n},makeContextCurrent:function(e){return Q.currentContext=Q.contexts[e],n.ctx=me=Q.currentContext&&Q.currentContext.GLctx,!(e&&!me)},getContext:function(e){return Q.contexts[e]},deleteContext:function(e){Q.currentContext===Q.contexts[e]&&(Q.currentContext=null),"object"===typeof z&&z.removeAllHandlersOnTarget(Q.contexts[e].GLctx.canvas),Q.contexts[e]&&Q.contexts[e].GLctx.canvas&&(Q.contexts[e].GLctx.canvas.GLctxObject=void 0),ve(Q.contexts[e]),Q.contexts[e]=null},initExtensions:function(e){if(e||(e=Q.currentContext),!e.initExtensionsDone){e.initExtensionsDone=!0;var t=e.GLctx;if(e.version<2){var n=t.getExtension("ANGLE_instanced_arrays");n&&(t.vertexAttribDivisor=function(e,t){n.vertexAttribDivisorANGLE(e,t)},t.drawArraysInstanced=function(e,t,r,a){n.drawArraysInstancedANGLE(e,t,r,a)},t.drawElementsInstanced=function(e,t,r,a,o){n.drawElementsInstancedANGLE(e,t,r,a,o)});var r=t.getExtension("OES_vertex_array_object");r&&(t.createVertexArray=function(){return r.createVertexArrayOES()},t.deleteVertexArray=function(e){r.deleteVertexArrayOES(e)},t.bindVertexArray=function(e){r.bindVertexArrayOES(e)},t.isVertexArray=function(e){return r.isVertexArrayOES(e)});var a=t.getExtension("WEBGL_draw_buffers");a&&(t.drawBuffers=function(e,t){a.drawBuffersWEBGL(e,t)})}t.disjointTimerQueryExt=t.getExtension("EXT_disjoint_timer_query");var o=["OES_texture_float","OES_texture_half_float","OES_standard_derivatives","OES_vertex_array_object","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","OES_element_index_uint","EXT_texture_filter_anisotropic","EXT_frag_depth","WEBGL_draw_buffers","ANGLE_instanced_arrays","OES_texture_float_linear","OES_texture_half_float_linear","EXT_blend_minmax","EXT_shader_texture_lod","WEBGL_compressed_texture_pvrtc","EXT_color_buffer_half_float","WEBGL_color_buffer_float","EXT_sRGB","WEBGL_compressed_texture_etc1","EXT_disjoint_timer_query","WEBGL_compressed_texture_etc","WEBGL_compressed_texture_astc","EXT_color_buffer_float","WEBGL_compressed_texture_s3tc_srgb","EXT_disjoint_timer_query_webgl2"],i=t.getSupportedExtensions();i&&i.length>0&&t.getSupportedExtensions().forEach((function(e){-1!=o.indexOf(e)&&t.getExtension(e)}))}},populateUniformTable:function(e){for(var t=Q.programs[e],n=Q.programInfos[e]={uniforms:{},maxUniformLength:0,maxAttributeLength:-1,maxUniformBlockNameLength:-1},r=n.uniforms,a=me.getProgramParameter(t,35718),o=0;o<a;++o){var i=me.getActiveUniform(t,o),u=i.name;n.maxUniformLength=Math.max(n.maxUniformLength,u.length+1),"]"==u.slice(-1)&&(u=u.slice(0,u.lastIndexOf("[")));var c=me.getUniformLocation(t,u);if(c){var s=Q.getNewId(Q.uniforms);r[u]=[i.size,s],Q.uniforms[s]=c;for(var l=1;l<i.size;++l){var f=u+"["+l+"]";c=me.getUniformLocation(t,f),s=Q.getNewId(Q.uniforms),Q.uniforms[s]=c}}}}},$=["default","low-power","high-performance"];function ee(e,t){var n={},r=t>>2;n.alpha=!!w[r+0],n.depth=!!w[r+1],n.stencil=!!w[r+2],n.antialias=!!w[r+3],n.premultipliedAlpha=!!w[r+4],n.preserveDrawingBuffer=!!w[r+5];var a=w[r+6];n.powerPreference=$[a],n.failIfMajorPerformanceCaveat=!!w[r+7],n.majorVersion=w[r+8],n.minorVersion=w[r+9],n.enableExtensionsByDefault=w[r+10],n.explicitSwapControl=w[r+11],n.proxyContextToMainThread=w[r+12],n.renderViaOffscreenBackBuffer=w[r+13];var o=function(e){return q(e)}(e);return o?n.explicitSwapControl?0:Q.createContext(o,n):0}var te={};function ne(e,t,n,r){for(var a=0;a<e;a++){var o=me[n](),i=o&&Q.getNewId(r);o?(o.name=i,r[i]=o):Q.recordError(1282),w[t+4*a>>2]=i}}var re={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},ae={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};function oe(){var e=oe;return e.LLVM_SAVEDSTACKS||(e.LLVM_SAVEDSTACKS=[]),e.LLVM_SAVEDSTACKS.push(ye()),e.LLVM_SAVEDSTACKS.length-1}function ie(e){return e%4===0&&(e%100!==0||e%400===0)}function ue(e,t){for(var n=0,r=0;r<=t;n+=e[r++]);return n}var ce=[31,29,31,30,31,30,31,31,30,31,30,31],se=[31,28,31,30,31,30,31,31,30,31,30,31];function le(e,t){for(var n=new Date(e.getTime());t>0;){var r=ie(n.getFullYear()),a=n.getMonth(),o=(r?ce:se)[a];if(!(t>o-n.getDate()))return n.setDate(n.getDate()+t),n;t-=o-n.getDate()+1,n.setDate(1),a<11?n.setMonth(a+1):(n.setMonth(0),n.setFullYear(n.getFullYear()+1))}return n}function fe(e,t,n,r){var a=w[r+40>>2],o={tm_sec:w[r>>2],tm_min:w[r+4>>2],tm_hour:w[r+8>>2],tm_mday:w[r+12>>2],tm_mon:w[r+16>>2],tm_year:w[r+20>>2],tm_wday:w[r+24>>2],tm_yday:w[r+28>>2],tm_isdst:w[r+32>>2],tm_gmtoff:w[r+36>>2],tm_zone:a?p(a):""},i=p(n),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S"};for(var c in u)i=i.replace(new RegExp(c,"g"),u[c]);var s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["January","February","March","April","May","June","July","August","September","October","November","December"];function f(e,t,n){for(var r="number"===typeof e?e.toString():e||"";r.length<t;)r=n[0]+r;return r}function m(e,t){return f(e,t,"0")}function d(e,t){function n(e){return e<0?-1:e>0?1:0}var r;return 0===(r=n(e.getFullYear()-t.getFullYear()))&&0===(r=n(e.getMonth()-t.getMonth()))&&(r=n(e.getDate()-t.getDate())),r}function h(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function y(e){var t=le(new Date(e.tm_year+1900,0,1),e.tm_yday),n=new Date(t.getFullYear(),0,4),r=new Date(t.getFullYear()+1,0,4),a=h(n),o=h(r);return d(a,t)<=0?d(o,t)<=0?t.getFullYear()+1:t.getFullYear():t.getFullYear()-1}var b={"%a":function(e){return s[e.tm_wday].substring(0,3)},"%A":function(e){return s[e.tm_wday]},"%b":function(e){return l[e.tm_mon].substring(0,3)},"%B":function(e){return l[e.tm_mon]},"%C":function(e){return m((e.tm_year+1900)/100|0,2)},"%d":function(e){return m(e.tm_mday,2)},"%e":function(e){return f(e.tm_mday,2," ")},"%g":function(e){return y(e).toString().substring(2)},"%G":function(e){return y(e)},"%H":function(e){return m(e.tm_hour,2)},"%I":function(e){var t=e.tm_hour;return 0==t?t=12:t>12&&(t-=12),m(t,2)},"%j":function(e){return m(e.tm_mday+ue(ie(e.tm_year+1900)?ce:se,e.tm_mon-1),3)},"%m":function(e){return m(e.tm_mon+1,2)},"%M":function(e){return m(e.tm_min,2)},"%n":function(){return"\n"},"%p":function(e){return e.tm_hour>=0&&e.tm_hour<12?"AM":"PM"},"%S":function(e){return m(e.tm_sec,2)},"%t":function(){return"\t"},"%u":function(e){return new Date(e.tm_year+1900,e.tm_mon+1,e.tm_mday,0,0,0,0).getDay()||7},"%U":function(e){var t=new Date(e.tm_year+1900,0,1),n=0===t.getDay()?t:le(t,7-t.getDay()),r=new Date(e.tm_year+1900,e.tm_mon,e.tm_mday);if(d(n,r)<0){var a=ue(ie(r.getFullYear())?ce:se,r.getMonth()-1)-31,o=31-n.getDate()+a+r.getDate();return m(Math.ceil(o/7),2)}return 0===d(n,t)?"01":"00"},"%V":function(e){var t,n=new Date(e.tm_year+1900,0,4),r=new Date(e.tm_year+1901,0,4),a=h(n),o=h(r),i=le(new Date(e.tm_year+1900,0,1),e.tm_yday);return d(i,a)<0?"53":d(o,i)<=0?"01":(t=a.getFullYear()<e.tm_year+1900?e.tm_yday+32-a.getDate():e.tm_yday+1-a.getDate(),m(Math.ceil(t/7),2))},"%w":function(e){return new Date(e.tm_year+1900,e.tm_mon+1,e.tm_mday,0,0,0,0).getDay()},"%W":function(e){var t=new Date(e.tm_year,0,1),n=1===t.getDay()?t:le(t,0===t.getDay()?1:7-t.getDay()+1),r=new Date(e.tm_year+1900,e.tm_mon,e.tm_mday);if(d(n,r)<0){var a=ue(ie(r.getFullYear())?ce:se,r.getMonth()-1)-31,o=31-n.getDate()+a+r.getDate();return m(Math.ceil(o/7),2)}return 0===d(n,t)?"01":"00"},"%y":function(e){return(e.tm_year+1900).toString().substring(2)},"%Y":function(e){return e.tm_year+1900},"%z":function(e){var t=e.tm_gmtoff,n=t>=0;return t=(t=Math.abs(t)/60)/60*100+t%60,(n?"+":"-")+String("0000"+t).slice(-4)},"%Z":function(e){return e.tm_zone},"%%":function(){return"%"}};for(var c in b)i.indexOf(c)>=0&&(i=i.replace(new RegExp(c,"g"),b[c](o)));var E=function(e,t,n){var r=n>0?n:v(e)+1,a=new Array(r),o=g(e,a,0,a.length);t&&(a.length=o);return a}(i,!1);return E.length>t?0:(function(e,t){_.set(e,t)}(E,e),E.length-1)}var me;B.push((function(){var e=n._fflush;e&&e(0);var t=V.buffers;t[1].length&&V.printChar(1,10),t[2].length&&V.printChar(2,10)})),Q.init();var de={m:xe,k:function(e){l=e},f:function(){return l},h:function(e){return he(e)},d:function(){return W.apply(null,arguments)},na:function(){throw f=!0,"Pure virtual function called!"},g:function(e,t,n){throw X.infos[e]={ptr:e,adjusted:[e],type:t,destructor:n,refcount:0,caught:!1,rethrown:!1},X.last=e,"uncaught_exception"in j?j.uncaught_exception++:j.uncaught_exception=1,e},ca:function(){},aa:function(e,t){return-1},P:U,Ka:function(e,t){V.varargs=t;try{V.getStreamFromFD(),V.get(),V.get(),V.get(),V.get();return 0}catch(n){return"undefined"!==typeof FS&&n instanceof FS.ErrnoError||xe(n),-n.errno}},Y:function(e,t){V.varargs=t;try{for(var n=V.get(),r=V.get(),a=V.get(),o=0,i=0;i<a;i++){for(var u=w[r+8*i>>2],c=w[r+(8*i+4)>>2],s=0;s<c;s++)V.printChar(n,y[u+s]);o+=c}return o}catch(l){return"undefined"!==typeof FS&&l instanceof FS.ErrnoError||xe(l),-l.errno}},Ja:function(e,t){V.varargs=t;try{V.getStreamFromFD();return 0}catch(n){return"undefined"!==typeof FS&&n instanceof FS.ErrnoError||xe(n),-n.errno}},Ia:function(e,t){V.varargs=t;try{var n=V.get(),r=V.get(),a=V.mappings[n];if(!a)return 0;if(r===a.len){var o=FS.getStream(a.fd);V.doMsync(n,o,r,a.flags),FS.munmap(o),V.mappings[n]=null,a.allocated&&ve(a.malloc)}return 0}catch(i){return"undefined"!==typeof FS&&i instanceof FS.ErrnoError||xe(i),-i.errno}},X:function(){},e:function(){n.abort()},Ha:function(){return _.length},Ga:function(e,t,n){y.set(y.subarray(t,t+n),e)},Fa:function(e){return!1},Ea:function(e,t,n,r,a){return J(e,t,n,r,5,"mousedown"),0},Da:function(e,t,n,r,a){return J(e,t,n,r,34,"mouseleave"),0},Ca:function(e,t,n,r,a){return J(e,t,n,r,8,"mousemove"),0},Ba:function(e,t,n,r,a){return J(e,t,n,r,36,"mouseout"),0},Aa:function(e,t,n,r,a){return J(e,t,n,r,6,"mouseup"),0},za:function(e,t,n,r,a){return Z(e,t,n,r,25,"touchcancel"),0},ya:function(e,t,n,r,a){return Z(e,t,n,r,23,"touchend"),0},xa:function(e,t,n,r,a){return Z(e,t,n,r,24,"touchmove"),0},wa:function(e,t,n,r,a){return Z(e,t,n,r,22,"touchstart"),0},va:function(e,t){return ee(e,t)},ua:function(e,t){return function(e,t){var n=Q.getContext(e),r=p(t);return 0==r.indexOf("GL_")&&(r=r.substr(3)),!!n.GLctx.getExtension(r)}(e,t)},ta:function(e,t,n){return function(e,t,n){var r=Q.getContext(e);return r&&r.GLctx&&t&&n?(w[t>>2]=r.GLctx.drawingBufferWidth,w[n>>2]=r.GLctx.drawingBufferHeight,0):-5}(e,t,n)},sa:function(e){for(var t=e>>2,n=0;n<14;++n)w[t+n]=0;w[t+0]=w[t+1]=w[t+3]=w[t+4]=w[t+8]=w[t+10]=1},ra:function(e){return Q.makeContextCurrent(e)?0:-5},J:function e(t){return 0===t?0:(t=p(t),te.hasOwnProperty(t)?(e.ret&&ve(e.ret),e.ret=function(e){var t=v(e)+1,n=he(t);return n&&g(e,_,n,t),n}(te[t])):0)},I:function(e){me.activeTexture(e)},H:function(e,t){me.attachShader(Q.programs[e],Q.shaders[t])},w:function(e,t,n){me.bindAttribLocation(Q.programs[e],t,p(n))},j:function(e,t){me.bindBuffer(e,Q.buffers[t])},D:function(e,t){me.bindFramebuffer(e,Q.framebuffers[t])},W:function(e,t){me.bindRenderbuffer(e,Q.renderbuffers[t])},s:function(e,t){me.bindTexture(e,Q.textures[t])},C:function(e,t,n,r){me.bufferData(e,n?y.subarray(n,n+t):t,r)},A:function(e,t,n,r){me.bufferSubData(e,t,y.subarray(r,r+n))},O:function(e){me.clear(e)},qa:function(e,t,n,r){me.clearColor(e,t,n,r)},pa:function(e){me.compileShader(Q.shaders[e])},V:function(){var e=Q.getNewId(Q.programs),t=me.createProgram();return t.name=e,Q.programs[e]=t,e},oa:function(e){var t=Q.getNewId(Q.shaders);return Q.shaders[t]=me.createShader(e),t},i:function(e,t){for(var n=0;n<e;n++){var r=w[t+4*n>>2],a=Q.buffers[r];a&&(me.deleteBuffer(a),a.name=0,Q.buffers[r]=null,r==Q.currArrayBuffer&&(Q.currArrayBuffer=0),r==Q.currElementArrayBuffer&&(Q.currElementArrayBuffer=0))}},G:function(e){if(e){var t=Q.programs[e];t?(me.deleteProgram(t),t.name=0,Q.programs[e]=null,Q.programInfos[e]=null):Q.recordError(1281)}},ma:function(e){if(e){var t=Q.shaders[e];t?(me.deleteShader(t),Q.shaders[e]=null):Q.recordError(1281)}},r:function(e,t){for(var n=0;n<e;n++){var r=w[t+4*n>>2],a=Q.textures[r];a&&(me.deleteTexture(a),a.name=0,Q.textures[r]=null)}},n:function(e){me.disableVertexAttribArray(e)},N:function(e,t,n){me.drawArrays(e,t,n)},la:function(e,t,n,r){me.drawArraysInstanced(e,t,n,r)},ka:function(e){me.enable(e)},q:function(e){me.enableVertexAttribArray(e)},F:function(){me.flush()},ja:function(e,t,n,r){me.framebufferRenderbuffer(e,t,n,Q.renderbuffers[r])},ia:function(e,t,n,r,a){me.framebufferTexture2D(e,t,n,Q.textures[r],a)},U:function(e,t){ne(e,t,"createBuffer",Q.buffers)},ha:function(e,t){ne(e,t,"createFramebuffer",Q.framebuffers)},ga:function(e,t){ne(e,t,"createRenderbuffer",Q.renderbuffers)},T:function(e,t){ne(e,t,"createTexture",Q.textures)},E:function(e,t,n){if(n)if(e>=Q.counter)Q.recordError(1281);else{var r=Q.programInfos[e];if(r)if(35716==t){var a=me.getProgramInfoLog(Q.programs[e]);null===a&&(a="(unknown error)"),w[n>>2]=a.length+1}else if(35719==t)w[n>>2]=r.maxUniformLength;else if(35722==t){if(-1==r.maxAttributeLength){e=Q.programs[e];var o=me.getProgramParameter(e,35721);r.maxAttributeLength=0;for(var i=0;i<o;++i){var u=me.getActiveAttrib(e,i);r.maxAttributeLength=Math.max(r.maxAttributeLength,u.name.length+1)}}w[n>>2]=r.maxAttributeLength}else if(35381==t){if(-1==r.maxUniformBlockNameLength){e=Q.programs[e];var c=me.getProgramParameter(e,35382);r.maxUniformBlockNameLength=0;for(i=0;i<c;++i){var s=me.getActiveUniformBlockName(e,i);r.maxUniformBlockNameLength=Math.max(r.maxUniformBlockNameLength,s.length+1)}}w[n>>2]=r.maxUniformBlockNameLength}else w[n>>2]=me.getProgramParameter(Q.programs[e],t);else Q.recordError(1282)}else Q.recordError(1281)},fa:function(e,t,n){if(n)if(35716==t){var r=me.getShaderInfoLog(Q.shaders[e]);null===r&&(r="(unknown error)"),w[n>>2]=r.length+1}else if(35720==t){var a=me.getShaderSource(Q.shaders[e]),o=null===a||0==a.length?0:a.length+1;w[n>>2]=o}else w[n>>2]=me.getShaderParameter(Q.shaders[e],t);else Q.recordError(1281)},l:function(e,t){var n=0;if("]"==(t=p(t))[t.length-1]){var r=t.lastIndexOf("[");n="]"!=t[r+1]?parseInt(t.slice(r+1)):0,t=t.slice(0,r)}var a=Q.programInfos[e]&&Q.programInfos[e].uniforms[t];return a&&n>=0&&n<a[0]?a[1]+n:-1},S:function(e){me.linkProgram(Q.programs[e]),Q.populateUniformTable(e)},ea:function(e,t,n,r){me.renderbufferStorage(e,t,n,r)},da:function(e,t,n,r){var a=Q.getSource(e,t,n,r);me.shaderSource(Q.shaders[e],a)},M:function(e,t,n,r,a,o,i,u,c){me.texImage2D(e,t,n,r,a,o,i,u,c?function(e,t,n,r,a,o){var i=re[t]*ae[e];if(i){var u=a+function(e,t,n,r){var a;return t*(e*n+(a=r)-1&-a)}(n,r,i,Q.unpackAlignment);switch(e){case 5121:return y.subarray(a,u);case 5126:return S.subarray(a>>2,u>>2);case 5125:case 34042:return x.subarray(a>>2,u>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return E.subarray(a>>1,u>>1);default:Q.recordError(1280)}}else Q.recordError(1280)}(u,i,r,a,c):null)},v:function(e,t,n){me.texParameteri(e,t,n)},o:function(e,t){me.uniform1f(Q.uniforms[e],t)},B:function(e,t){me.uniform1i(Q.uniforms[e],t)},y:function(e,t,n,r){me.uniform3f(Q.uniforms[e],t,n,r)},x:function(e,t,n){var r=S.subarray(n>>2,n+16*t>>2);me.uniform4fv(Q.uniforms[e],r)},ba:function(e,t,n,r){var a=S.subarray(r>>2,r+36*t>>2);me.uniformMatrix3fv(Q.uniforms[e],!!n,a)},R:function(e,t,n,r){var a=S.subarray(r>>2,r+64*t>>2);me.uniformMatrix4fv(Q.uniforms[e],!!n,a)},L:function(e){me.useProgram(Q.programs[e])},Q:function(e){me.validateProgram(Q.programs[e])},z:function(e,t,n,r,a){me.vertexAttrib4f(e,t,n,r,a)},$:function(e,t){me.vertexAttribDivisor(e,t)},p:function(e,t,n,r,a,o){me.vertexAttribPointer(e,t,n,!!r,a,o)},K:function(e,t,n,r){me.viewport(e,t,n,r)},u:function(e){var t=oe,n=t.LLVM_SAVEDSTACKS[e];t.LLVM_SAVEDSTACKS.splice(e,1),_e(n)},t:oe,_:function(){return 0},Z:function(e,t,n,r){return fe(e,t,n,r)},a:39408,b:39392,c:39232},pe=n.asm({},de,h);n.asm=pe;var ge=n.__GLOBAL__sub_I_main_cpp=function(){return n.asm.La.apply(null,arguments)},ve=n._free=function(){return n.asm.Ma.apply(null,arguments)},he=n._malloc=function(){return n.asm.Na.apply(null,arguments)},_e=(n._molphene_application_canvas_size_changed=function(){return n.asm.Oa.apply(null,arguments)},n._molphene_application_change_representation=function(){return n.asm.Pa.apply(null,arguments)},n._molphene_application_open_pdb_data=function(){return n.asm.Qa.apply(null,arguments)},n._molphene_application_render_frame=function(){return n.asm.Ra.apply(null,arguments)},n._molphene_application_setup=function(){return n.asm.Sa.apply(null,arguments)},n.stackRestore=function(){return n.asm.Wa.apply(null,arguments)}),ye=n.stackSave=function(){return n.asm.Xa.apply(null,arguments)},be=n.dynCall_iiii=function(){return n.asm.Ta.apply(null,arguments)};n.dynCall_v=function(){return n.asm.Ua.apply(null,arguments)},n.dynCall_vi=function(){return n.asm.Va.apply(null,arguments)};function Ee(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function we(e){function t(){n.calledRun||(n.calledRun=!0,f||(O||(O=!0,L(k)),L(T),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)e=n.postRun.shift(),M.unshift(e);var e;L(M)}()))}e=e||n.arguments,I>0||(!function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)e=n.preRun.shift(),D.unshift(e);var e;L(D)}(),I>0||n.calledRun||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),t()}),1)):t()))}function xe(e){throw n.onAbort&&n.onAbort(e),void 0!==e?(i(e),u(e),e=JSON.stringify(e)):e="",f=!0,1,"abort("+e+"). Build with -s ASSERTIONS=1 for more info."}if(n.asm=pe,n.stringToUTF8=function(e,t,n){return g(e,y,t,n)},n.lengthBytesUTF8=v,n.then=function(e){if(n.calledRun)e(n);else{var t=n.onRuntimeInitialized;n.onRuntimeInitialized=function(){t&&t(),e(n)}}return n},Ee.prototype=new Error,Ee.prototype.constructor=Ee,R=function e(){n.calledRun||we(),n.calledRun||(R=e)},n.run=we,n.abort=xe,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return we(),t}}();let s;const l={locateFile:(e,t)=>"/"+e};function f(){const e=s.ctx.canvas;var t,n;e.width=e.clientWidth,e.height=e.clientHeight,t=e.width,n=e.height,s._molphene_application_canvas_size_changed(t,n)}function m(e){return s._molphene_application_change_representation(e)}function d(){return s._molphene_application_render_frame()}n(11);var p,g,v=n(4),h=n.n(v);n(12);function _(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Initializing...")))}function y(e){const t=e.onAppToolbarDrawerBtnClicked,n=e.onAppBarMoreMenuClicked,r=e.onAppBarMenuListItemClicked,o=e.isMoreMenuOpened,i=e.representationList,u=e.activedRepresentation;return a.a.createElement("header",{className:"mdc-top-app-bar mdc-top-app-bar--dense"},a.a.createElement("div",{className:"mdc-top-app-bar__row"},a.a.createElement("section",{className:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},a.a.createElement("button",{onClick:t,className:"material-icons mdc-top-app-bar__navigation-icon"},"menu"),a.a.createElement("span",{className:"mdc-top-app-bar__title"},"Molphene")),a.a.createElement("section",{className:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end"},a.a.createElement("div",{id:"demo-menu",className:"mdc-menu-surface--anchor"},a.a.createElement("button",{id:"menu-button",onClick:n,className:"material-icons mdc-top-app-bar__action-item","aria-label":"More menu"},"more_vert"),a.a.createElement("div",{className:"mdc-menu mdc-menu-surface"+(o?" mdc-menu-surface--open":"")},a.a.createElement("ul",{className:"mdc-list",role:"menu","aria-hidden":"true","aria-orientation":"vertical"},i.map((e,t)=>a.a.createElement("li",{key:t,"data-representation":t,className:"mdc-list-item"+(u===t?" mdc-list-item--activated":""),role:"menuitem",onClick:r},a.a.createElement("span",{className:"mdc-list-item__text"},e.title)))))))))}function b(e){const t=e.isNavDrawerOpen,n=e.navigationList,r=e.activatedMolecule,o=e.onDrawerListItemClicked;return a.a.createElement("aside",{className:"mdc-drawer mdc-drawer--modal"+(t?" mdc-drawer--open":"")},a.a.createElement("div",{className:"mdc-drawer__header"},a.a.createElement("h3",{className:"mdc-drawer__title"},"Molphene")),a.a.createElement("hr",{className:"mdc-list-divider"}),a.a.createElement("div",{className:"mdc-drawer__content"},a.a.createElement("nav",{className:"mdc-list mdc-list--two-line"},n.map((e,t)=>a.a.createElement("a",{key:t,"data-key":t,className:"mdc-list-item"+(r===t?" mdc-list-item--activated":""),href:"#"+e.link,onClick:o},a.a.createElement("span",{className:"mdc-list-item__text"},a.a.createElement("span",{className:"mdc-list-item__primary-text"},e.title),a.a.createElement("span",{className:"mdc-list-item__secondary-text"},"atoms: ",e.atoms,", bonds: ",e.bonds)))))))}function E(e){const t=Object(r.useState)(!1),n=Object(u.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(!1),l=Object(u.a)(c,2),p=l[0],v=l[1],h=Object(r.useState)(g.BallAndStickInstanced),_=Object(u.a)(h,2),E=_[0],w=_[1],x=Object(r.useState)(0),S=Object(u.a)(x,2),A=S[0],C=S[1];function L(){f(),d()}Object(r.useEffect)(()=>{s._molphene_application_setup(),f(),m(E);const e=Math.abs(A),t=D.length>e?e:0;return k(D[t].link),window.addEventListener("resize",L,!1),()=>{window.removeEventListener("resize",L,!1)}},[]),Object(r.useEffect)(()=>{m(E),d()});const D=[{title:"Insulin",link:"4ins.pdb1",atoms:484,bonds:411},{title:"Benzene",link:"mol_benzene.mol",atoms:12,bonds:12},{title:"Caffeine",link:"mol_caffeine.mol",atoms:24,bonds:25},{title:"Cyclohexane",link:"mol_cyclohexane.mol",atoms:18,bonds:18},{title:"DDT",link:"mol_ddt.mol",atoms:28,bonds:29},{title:"Methane",link:"mol_methane.mol",atoms:5,bonds:4},{title:"Morphine",link:"mol_morphine.mol",atoms:40,bonds:44},{title:"Oxylate",link:"mol_oxylate.mol",atoms:74,bonds:79},{title:"Myoglobin",link:"1mbo.pdb1",atoms:1601,bonds:1245},{title:"Hemoglobin",link:"4hhb.pdb1",atoms:4779,bonds:4044},{title:"DNA",link:"1bna.pdb1",atoms:566,bonds:544},{title:"Transfer RNA",link:"4tra.pdb1",atoms:1779,bonds:1476},{title:"Lysozyme",link:"2lyz.pdb1",atoms:1102,bonds:1021},{title:"Porin",link:"2por.pdb1",atoms:2580,bonds:2258},{title:"Green Florousent Protein",link:"1gfl.pdb1",atoms:3950,bonds:3738},{title:"Antobody",link:"1igt.pdb1",atoms:12956,bonds:12794},{title:"Chaperones",link:"1aon.pdb1",atoms:58870,bonds:59087}];function k(e){let t="./pdb/"+e.toLocaleLowerCase();fetch(t).then(e=>e.text()).then(e=>{var n;if(t.endsWith(".mol"))n=ChemDoodle.readMOL(e,1);else{var r=new ChemDoodle.io.PDBInterpreter;r.deduceResidueBonds=!0,n=r.read(e,1)}var a=(new ChemDoodle.io.JSONInterpreter).molTo(n);!function(e){let t=s.lengthBytesUTF8(e),n=s._malloc(t+1);s.stringToUTF8(e,n,t+1),s._molphene_application_open_pdb_data(n)}(JSON.stringify(a)),d()}).catch(e=>{d(),console.error(e)})}return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{onAppToolbarDrawerBtnClicked:e=>{i(!o)},onAppBarMoreMenuClicked:e=>{v(!p)},isMoreMenuOpened:p,representationList:[{title:"Spacefill (slow batch rendering)"},{title:"Ball and Stick (slow batch rendering)"},{title:"Spacefill (fast instanced rendering)"},{title:"Ball and Stick (fast instances rendering)"}],activedRepresentation:E,onAppBarMenuListItemClicked:e=>{const t=e.currentTarget,n=parseInt(t.dataset.representation,10);v(!1),w(n)}}),a.a.createElement(b,{isNavDrawerOpen:o,navigationList:D,activatedMolecule:A,onDrawerListItemClicked:e=>{const t=e.currentTarget,n=parseInt(t.dataset.key,10),r=A;if(i(!1),C(n),n!==r){k(D[n].link)}}}),a.a.createElement("div",{className:"fill-height",onClick:e=>{i(!1),v(!1)}},a.a.createElement("canvas",{id:"canvas"})))}function w(){const e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)(()=>{var e;e=e=>o(!0),s||(s=c(l)),s.then(e)},[]),n?a.a.createElement(E,null):a.a.createElement(_,null)}!function(e){e[e.Spacefill=0]="Spacefill",e[e.BallAndStick=1]="BallAndStick",e[e.SpacefillInstanced=2]="SpacefillInstanced",e[e.BallAndStickInstanced=3]="BallAndStickInstanced"}(p||(p={})),function(e){e[e.Spacefill=0]="Spacefill",e[e.BallAndStick=1]="BallAndStick",e[e.SpacefillInstanced=2]="SpacefillInstanced",e[e.BallAndStickInstanced=3]="BallAndStickInstanced"}(g||(g={}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.c38f9c33.chunk.js.map