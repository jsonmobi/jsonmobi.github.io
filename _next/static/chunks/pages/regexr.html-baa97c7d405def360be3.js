_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{UlJF:function(e,t,r){"use strict";function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}r.d(t,"a",(function(){return n}))},a2PE:function(e,t,r){"use strict";(function(e){function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.UnControlled=t.Controlled=void 0;var s,a=r("q1tI"),c="undefined"===typeof navigator||!0===e.PREVENT_CODEMIRROR_RENDER;c||(s=r("VrN/"));var l=function(){function e(){}return e.equals=function(e,t){var r=this,o=Object.keys,i=n(e),s=n(t);return e&&t&&"object"===i&&i===s?o(e).length===o(t).length&&o(e).every((function(o){return r.equals(e[o],t[o])})):e===t},e}(),u=function(){function e(e,t){this.editor=e,this.props=t}return e.prototype.delegateCursor=function(e,t,r){var o=this.editor.getDoc();r&&this.editor.focus(),t?o.setCursor(e):o.setCursor(e,null,{scroll:!1})},e.prototype.delegateScroll=function(e){this.editor.scrollTo(e.x,e.y)},e.prototype.delegateSelection=function(e,t){this.editor.getDoc().setSelections(e),t&&this.editor.focus()},e.prototype.apply=function(e){e&&e.selection&&e.selection.ranges&&this.delegateSelection(e.selection.ranges,e.selection.focus||!1),e&&e.cursor&&this.delegateCursor(e.cursor,e.autoScroll||!1,this.editor.getOption("autofocus")||!1),e&&e.scroll&&this.delegateScroll(e.scroll)},e.prototype.applyNext=function(e,t,r){e&&e.selection&&e.selection.ranges&&t&&t.selection&&t.selection.ranges&&!l.equals(e.selection.ranges,t.selection.ranges)&&this.delegateSelection(t.selection.ranges,t.selection.focus||!1),e&&e.cursor&&t&&t.cursor&&!l.equals(e.cursor,t.cursor)&&this.delegateCursor(r.cursor||t.cursor,t.autoScroll||!1,t.autoCursor||!1),e&&e.scroll&&t&&t.scroll&&!l.equals(e.scroll,t.scroll)&&this.delegateScroll(t.scroll)},e.prototype.applyUserDefined=function(e,t){t&&t.cursor&&this.delegateCursor(t.cursor,e.autoScroll||!1,this.editor.getOption("autofocus")||!1)},e.prototype.wire=function(e){var t=this;Object.keys(e||{}).filter((function(e){return/^on/.test(e)})).forEach((function(e){switch(e){case"onBlur":t.editor.on("blur",(function(e,r){t.props.onBlur(t.editor,r)}));break;case"onContextMenu":t.editor.on("contextmenu",(function(e,r){t.props.onContextMenu(t.editor,r)}));break;case"onCopy":t.editor.on("copy",(function(e,r){t.props.onCopy(t.editor,r)}));break;case"onCursor":t.editor.on("cursorActivity",(function(e){t.props.onCursor(t.editor,t.editor.getDoc().getCursor())}));break;case"onCursorActivity":t.editor.on("cursorActivity",(function(e){t.props.onCursorActivity(t.editor)}));break;case"onCut":t.editor.on("cut",(function(e,r){t.props.onCut(t.editor,r)}));break;case"onDblClick":t.editor.on("dblclick",(function(e,r){t.props.onDblClick(t.editor,r)}));break;case"onDragEnter":t.editor.on("dragenter",(function(e,r){t.props.onDragEnter(t.editor,r)}));break;case"onDragLeave":t.editor.on("dragleave",(function(e,r){t.props.onDragLeave(t.editor,r)}));break;case"onDragOver":t.editor.on("dragover",(function(e,r){t.props.onDragOver(t.editor,r)}));break;case"onDragStart":t.editor.on("dragstart",(function(e,r){t.props.onDragStart(t.editor,r)}));break;case"onDrop":t.editor.on("drop",(function(e,r){t.props.onDrop(t.editor,r)}));break;case"onFocus":t.editor.on("focus",(function(e,r){t.props.onFocus(t.editor,r)}));break;case"onGutterClick":t.editor.on("gutterClick",(function(e,r,o,n){t.props.onGutterClick(t.editor,r,o,n)}));break;case"onInputRead":t.editor.on("inputRead",(function(e,r){t.props.onInputRead(t.editor,r)}));break;case"onKeyDown":t.editor.on("keydown",(function(e,r){t.props.onKeyDown(t.editor,r)}));break;case"onKeyHandled":t.editor.on("keyHandled",(function(e,r,o){t.props.onKeyHandled(t.editor,r,o)}));break;case"onKeyPress":t.editor.on("keypress",(function(e,r){t.props.onKeyPress(t.editor,r)}));break;case"onKeyUp":t.editor.on("keyup",(function(e,r){t.props.onKeyUp(t.editor,r)}));break;case"onMouseDown":t.editor.on("mousedown",(function(e,r){t.props.onMouseDown(t.editor,r)}));break;case"onPaste":t.editor.on("paste",(function(e,r){t.props.onPaste(t.editor,r)}));break;case"onRenderLine":t.editor.on("renderLine",(function(e,r,o){t.props.onRenderLine(t.editor,r,o)}));break;case"onScroll":t.editor.on("scroll",(function(e){t.props.onScroll(t.editor,t.editor.getScrollInfo())}));break;case"onSelection":t.editor.on("beforeSelectionChange",(function(e,r){t.props.onSelection(t.editor,r)}));break;case"onTouchStart":t.editor.on("touchstart",(function(e,r){t.props.onTouchStart(t.editor,r)}));break;case"onUpdate":t.editor.on("update",(function(e){t.props.onUpdate(t.editor)}));break;case"onViewportChange":t.editor.on("viewportChange",(function(e,r,o){t.props.onViewportChange(t.editor,r,o)}))}}))},e}(),d=function(e){function t(t){var r=e.call(this,t)||this;return c||(r.applied=!1,r.appliedNext=!1,r.appliedUserDefined=!1,r.deferred=null,r.emulating=!1,r.hydrated=!1,r.initCb=function(){r.props.editorDidConfigure&&r.props.editorDidConfigure(r.editor)},r.mounted=!1),r}return i(t,e),t.prototype.hydrate=function(e){var t=this,r=e&&e.options?e.options:{},n=o({},s.defaults,this.editor.options,r);Object.keys(n).some((function(e){return t.editor.getOption(e)!==n[e]}))&&Object.keys(n).forEach((function(e){r.hasOwnProperty(e)&&t.editor.getOption(e)!==n[e]&&(t.editor.setOption(e,n[e]),t.mirror.setOption(e,n[e]))})),this.hydrated||(this.deferred?this.resolveChange(e.value):this.initChange(e.value||"")),this.hydrated=!0},t.prototype.initChange=function(e){this.emulating=!0;var t=this.editor.getDoc(),r=t.lastLine(),o=t.getLine(t.lastLine()).length;t.replaceRange(e||"",{line:0,ch:0},{line:r,ch:o}),this.mirror.setValue(e),t.clearHistory(),this.mirror.clearHistory(),this.emulating=!1},t.prototype.resolveChange=function(e){this.emulating=!0;var t=this.editor.getDoc();if("undo"===this.deferred.origin?t.undo():"redo"===this.deferred.origin?t.redo():t.replaceRange(this.deferred.text,this.deferred.from,this.deferred.to,this.deferred.origin),e&&e!==t.getValue()){var r=t.getCursor();t.setValue(e),t.setCursor(r)}this.emulating=!1,this.deferred=null},t.prototype.mirrorChange=function(e){var t=this.editor.getDoc();return"undo"===e.origin?(t.setHistory(this.mirror.getHistory()),this.mirror.undo()):"redo"===e.origin?(t.setHistory(this.mirror.getHistory()),this.mirror.redo()):this.mirror.replaceRange(e.text,e.from,e.to,e.origin),this.mirror.getValue()},t.prototype.componentDidMount=function(){var e=this;c||(this.props.defineMode&&this.props.defineMode.name&&this.props.defineMode.fn&&s.defineMode(this.props.defineMode.name,this.props.defineMode.fn),this.editor=s(this.ref,this.props.options),this.shared=new u(this.editor,this.props),this.mirror=s((function(){}),this.props.options),this.editor.on("electricInput",(function(){e.mirror.setHistory(e.editor.getDoc().getHistory())})),this.editor.on("cursorActivity",(function(){e.mirror.setCursor(e.editor.getDoc().getCursor())})),this.editor.on("beforeChange",(function(t,r){if(!e.emulating){r.cancel(),e.deferred=r;var o=e.mirrorChange(e.deferred);e.props.onBeforeChange&&e.props.onBeforeChange(e.editor,e.deferred,o)}})),this.editor.on("change",(function(t,r){e.mounted&&e.props.onChange&&e.props.onChange(e.editor,r,e.editor.getValue())})),this.hydrate(this.props),this.shared.apply(this.props),this.applied=!0,this.mounted=!0,this.shared.wire(this.props),this.editor.getOption("autofocus")&&this.editor.focus(),this.props.editorDidMount&&this.props.editorDidMount(this.editor,this.editor.getValue(),this.initCb))},t.prototype.componentDidUpdate=function(e){if(!c){var t={cursor:null};this.props.value!==e.value&&(this.hydrated=!1),this.props.autoCursor||void 0===this.props.autoCursor||(t.cursor=this.editor.getDoc().getCursor()),this.hydrate(this.props),this.appliedNext||(this.shared.applyNext(e,this.props,t),this.appliedNext=!0),this.shared.applyUserDefined(e,t),this.appliedUserDefined=!0}},t.prototype.componentWillUnmount=function(){c||this.props.editorWillUnmount&&this.props.editorWillUnmount(s)},t.prototype.shouldComponentUpdate=function(e,t){return!c},t.prototype.render=function(){var e=this;if(c)return null;var t=this.props.className?"react-codemirror2 "+this.props.className:"react-codemirror2";return a.createElement("div",{className:t,ref:function(t){return e.ref=t}})},t}(a.Component);t.Controlled=d;var p=function(e){function t(t){var r=e.call(this,t)||this;return c||(r.applied=!1,r.appliedUserDefined=!1,r.continueChange=!1,r.detached=!1,r.hydrated=!1,r.initCb=function(){r.props.editorDidConfigure&&r.props.editorDidConfigure(r.editor)},r.mounted=!1,r.onBeforeChangeCb=function(){r.continueChange=!0}),r}return i(t,e),t.prototype.hydrate=function(e){var t=this,r=e&&e.options?e.options:{},n=o({},s.defaults,this.editor.options,r);if(Object.keys(n).some((function(e){return t.editor.getOption(e)!==n[e]}))&&Object.keys(n).forEach((function(e){r.hasOwnProperty(e)&&t.editor.getOption(e)!==n[e]&&t.editor.setOption(e,n[e])})),!this.hydrated){var i=this.editor.getDoc(),a=i.lastLine(),c=i.getLine(i.lastLine()).length;i.replaceRange(e.value||"",{line:0,ch:0},{line:a,ch:c})}this.hydrated=!0},t.prototype.componentDidMount=function(){var e=this;c||(this.detached=!0===this.props.detach,this.props.defineMode&&this.props.defineMode.name&&this.props.defineMode.fn&&s.defineMode(this.props.defineMode.name,this.props.defineMode.fn),this.editor=s(this.ref,this.props.options),this.shared=new u(this.editor,this.props),this.editor.on("beforeChange",(function(t,r){e.props.onBeforeChange&&e.props.onBeforeChange(e.editor,r,e.editor.getValue(),e.onBeforeChangeCb)})),this.editor.on("change",(function(t,r){e.mounted&&e.props.onChange&&(e.props.onBeforeChange?e.continueChange&&e.props.onChange(e.editor,r,e.editor.getValue()):e.props.onChange(e.editor,r,e.editor.getValue()))})),this.hydrate(this.props),this.shared.apply(this.props),this.applied=!0,this.mounted=!0,this.shared.wire(this.props),this.editor.getDoc().clearHistory(),this.props.editorDidMount&&this.props.editorDidMount(this.editor,this.editor.getValue(),this.initCb))},t.prototype.componentDidUpdate=function(e){if(this.detached&&!1===this.props.detach&&(this.detached=!1,e.editorDidAttach&&e.editorDidAttach(this.editor)),this.detached||!0!==this.props.detach||(this.detached=!0,e.editorDidDetach&&e.editorDidDetach(this.editor)),!c&&!this.detached){var t={cursor:null};this.props.value!==e.value&&(this.hydrated=!1,this.applied=!1,this.appliedUserDefined=!1),e.autoCursor||void 0===e.autoCursor||(t.cursor=this.editor.getDoc().getCursor()),this.hydrate(this.props),this.applied||(this.shared.apply(e),this.applied=!0),this.appliedUserDefined||(this.shared.applyUserDefined(e,t),this.appliedUserDefined=!0)}},t.prototype.componentWillUnmount=function(){c||this.props.editorWillUnmount&&this.props.editorWillUnmount(s)},t.prototype.shouldComponentUpdate=function(e,t){var r=!0;return c&&(r=!1),this.detached&&e.detach&&(r=!1),r},t.prototype.render=function(){var e=this;if(c)return null;var t=this.props.className?"react-codemirror2 "+this.props.className:"react-codemirror2";return a.createElement("div",{className:t,ref:function(t){return e.ref=t}})},t}(a.Component);t.UnControlled=p}).call(this,r("ntbh"))},cpVT:function(e,t,r){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return o}))},ktzW:function(e,t,r){"use strict";e.exports=r("pR+0").Blob},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"===typeof window&&(t=window)}e.exports=t}},r={};function o(t){if(r[t])return r[t].exports;var n=r[t]={exports:{}},i=!0;try{e[t](n,n.exports,o),i=!1}finally{i&&delete r[t]}return n.exports}return o.ab=t+"/",o(149)}()}).call(this,"/")},"pR+0":function(e,t,r){(function(r){var o,n,i;!function(r){n=[t],void 0===(i="function"===typeof(o=function(e){"use strict";var t=r.BlobBuilder||r.WebKitBlobBuilder||r.MSBlobBuilder||r.MozBlobBuilder,o=r.URL||r.webkitURL||function(e,t){return(t=document.createElement("a")).href=e,t},n=r.Blob,i=o.createObjectURL,s=o.revokeObjectURL,a=r.Symbol&&r.Symbol.toStringTag,c=!1,l=!1,u=!!r.ArrayBuffer,d=t&&t.prototype.append&&t.prototype.getBlob;try{c=2===new Blob(["\xe4"]).size,l=2===new Blob([new Uint8Array([1,2])]).size}catch(O){}function p(e){return e.map((function(e){if(e.buffer instanceof ArrayBuffer){var t=e.buffer;if(e.byteLength!==t.byteLength){var r=new Uint8Array(e.byteLength);r.set(new Uint8Array(t,e.byteOffset,e.byteLength)),t=r.buffer}return t}return e}))}function h(e,r){r=r||{};var o=new t;return p(e).forEach((function(e){o.append(e)})),r.type?o.getBlob(r.type):o.getBlob()}function f(e,t){return new n(p(e),t||{})}function g(e){for(var t=0,o=e.length,n=r.Uint8Array||Array,i=0,s=Math.max(32,o+(o>>1)+7),a=new n(s>>3<<3);t<o;){var c=e.charCodeAt(t++);if(c>=55296&&c<=56319){if(t<o){var l=e.charCodeAt(t);56320===(64512&l)&&(++t,c=((1023&c)<<10)+(1023&l)+65536)}if(c>=55296&&c<=56319)continue}if(i+4>a.length){s+=8,s=(s*=1+t/e.length*2)>>3<<3;var u=new Uint8Array(s);u.set(a),a=u}if(0!==(4294967168&c)){if(0===(4294965248&c))a[i++]=c>>6&31|192;else if(0===(4294901760&c))a[i++]=c>>12&15|224,a[i++]=c>>6&63|128;else{if(0!==(4292870144&c))continue;a[i++]=c>>18&7|240,a[i++]=c>>12&63|128,a[i++]=c>>6&63|128}a[i++]=63&c|128}else a[i++]=c}return a.slice(0,i)}function y(e){for(var t=e.length,r=[],o=0;o<t;){var n,i,s,a,c=e[o],l=null,u=c>239?4:c>223?3:c>191?2:1;if(o+u<=t)switch(u){case 1:c<128&&(l=c);break;case 2:128===(192&(n=e[o+1]))&&(a=(31&c)<<6|63&n)>127&&(l=a);break;case 3:n=e[o+1],i=e[o+2],128===(192&n)&&128===(192&i)&&(a=(15&c)<<12|(63&n)<<6|63&i)>2047&&(a<55296||a>57343)&&(l=a);break;case 4:n=e[o+1],i=e[o+2],s=e[o+3],128===(192&n)&&128===(192&i)&&128===(192&s)&&(a=(15&c)<<18|(63&n)<<12|(63&i)<<6|63&s)>65535&&a<1114112&&(l=a)}null===l?(l=65533,u=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),o+=u}for(var d=r.length,p="",h=0;h<d;)p+=String.fromCharCode.apply(String,r.slice(h,h+=4096));return p}r.Blob&&(h.prototype=Blob.prototype,f.prototype=Blob.prototype);var b="function"===typeof TextEncoder?TextEncoder.prototype.encode.bind(new TextEncoder):g,v="function"===typeof TextDecoder?TextDecoder.prototype.decode.bind(new TextDecoder):y;function m(){function t(e){return e&&Object.prototype.isPrototypeOf.call(DataView,e)}function n(e){for(var t=new Array(e.byteLength),r=new Uint8Array(e),o=t.length;o--;)t[o]=r[o];return t}function a(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r=[],o=0;o<e.length;o+=3){var n=e[o],i=o+1<e.length,s=i?e[o+1]:0,a=o+2<e.length,c=a?e[o+2]:0,l=n>>2,u=(3&n)<<4|s>>4,d=(15&s)<<2|c>>6,p=63&c;a||(p=64,i||(d=64)),r.push(t[l],t[u],t[d],t[p])}return r.join("")}var c=Object.create||function(e){function t(){}return t.prototype=e,new t};if(u)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(e){return e&&l.indexOf(Object.prototype.toString.call(e))>-1};function p(e){for(var t=0,r=e.length;r--;)t+=e[r].length;for(var o=new Uint8Array(t),n=0,i=0;i<e.length;i++){var s=e[i];o.set(s,n),n+=s.byteLength||s.length}return o}function h(e,o){o=null==o?{}:o;for(var i=0,s=(e=e||[]).length;i<s;i++){var a=e[i];a instanceof h?e[i]=a._buffer:"string"===typeof a?e[i]=b(a):u&&(Object.prototype.isPrototypeOf.call(ArrayBuffer,a)||d(a))?e[i]=n(a):u&&t(a)?e[i]=n(a.buffer):e[i]=b(String(a))}this._buffer=r.Uint8Array?p(e):[].concat.apply([],e),this.size=this._buffer.length,this.type=o.type||"",/[^\u0020-\u007E]/.test(this.type)?this.type="":this.type=this.type.toLowerCase()}function f(e,t,r){r=r||{};var o=h.call(this,e,r)||this;return o.name=t.replace(/\//g,":"),o.lastModifiedDate=r.lastModified?new Date(r.lastModified):new Date,o.lastModified=+o.lastModifiedDate,o}if(h.prototype.arrayBuffer=function(){return Promise.resolve(this._buffer)},h.prototype.text=function(){return Promise.resolve(v(this._buffer))},h.prototype.slice=function(e,t,r){return new h([this._buffer.slice(e||0,t||this._buffer.length)],{type:r})},h.prototype.toString=function(){return"[object Blob]"},f.prototype=c(h.prototype),f.prototype.constructor=f,Object.setPrototypeOf)Object.setPrototypeOf(f,h);else try{f.__proto__=h}catch(O){}function g(){if(!(this instanceof g))throw new TypeError("Failed to construct 'FileReader': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");var e=document.createDocumentFragment();this.addEventListener=e.addEventListener,this.dispatchEvent=function(t){var r=this["on"+t.type];"function"===typeof r&&r(t),e.dispatchEvent(t)},this.removeEventListener=e.removeEventListener}function y(e,t,r){if(!(t instanceof h))throw new TypeError("Failed to execute '"+r+"' on 'FileReader': parameter 1 is not of type 'Blob'.");e.result="",setTimeout((function(){this.readyState=g.LOADING,e.dispatchEvent(new Event("load")),e.dispatchEvent(new Event("loadend"))}))}f.prototype.toString=function(){return"[object File]"},g.EMPTY=0,g.LOADING=1,g.DONE=2,g.prototype.error=null,g.prototype.onabort=null,g.prototype.onerror=null,g.prototype.onload=null,g.prototype.onloadend=null,g.prototype.onloadstart=null,g.prototype.onprogress=null,g.prototype.readAsDataURL=function(e){y(this,e,"readAsDataURL"),this.result="data:"+e.type+";base64,"+a(e._buffer)},g.prototype.readAsText=function(e){y(this,e,"readAsText"),this.result=v(e._buffer)},g.prototype.readAsArrayBuffer=function(e){y(this,e,"readAsText"),this.result=(e._buffer.buffer||e._buffer).slice()},g.prototype.abort=function(){},o.createObjectURL=function(e){return e instanceof h?"data:"+e.type+";base64,"+a(e._buffer):i.call(o,e)},o.revokeObjectURL=function(e){s&&s.call(o,e)};var m=r.XMLHttpRequest&&r.XMLHttpRequest.prototype.send;m&&(XMLHttpRequest.prototype.send=function(e){e instanceof h?(this.setRequestHeader("Content-Type",e.type),m.call(this,v(e._buffer))):m.call(this,e)}),e.Blob=h,e.File=f,e.FileReader=g,e.URL=o}function x(){var t=!!r.ActiveXObject||"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,o=r.XMLHttpRequest&&r.XMLHttpRequest.prototype.send;t&&o&&(XMLHttpRequest.prototype.send=function(e){e instanceof Blob?(this.setRequestHeader("Content-Type",e.type),o.call(this,e)):o.call(this,e)});try{new File([],""),e.File=r.File,e.FileReader=r.FileReader}catch(O){try{e.File=new Function('class File extends Blob {constructor(chunks, name, opts) {opts = opts || {};super(chunks, opts || {});this.name = name.replace(/\\//g, ":");this.lastModifiedDate = opts.lastModified ? new Date(opts.lastModified) : new Date();this.lastModified = +this.lastModifiedDate;}};return new File([], ""), File')()}catch(O){e.File=function(e,t,r){var o=new Blob(e,r),n=r&&void 0!==r.lastModified?new Date(r.lastModified):new Date;return o.name=t.replace(/\//g,":"),o.lastModifiedDate=n,o.lastModified=+n,o.toString=function(){return"[object File]"},a&&(o[a]="File"),o}}}}c?(x(),e.Blob=l?r.Blob:f):d?(x(),e.Blob=h):m(),a&&(e.File.prototype[a]||(e.File.prototype[a]="File"),e.Blob.prototype[a]||(e.Blob.prototype[a]="Blob"),e.FileReader.prototype[a]||(e.FileReader.prototype[a]="FileReader"));var w,C=e.Blob.prototype;try{new ReadableStream({type:"bytes"}),w=function(){var e=0,t=this;return new ReadableStream({type:"bytes",autoAllocateChunkSize:524288,pull:function(r){var o=r.byobRequest.view;return t.slice(e,e+o.byteLength).arrayBuffer().then((function(n){var i=new Uint8Array(n),s=i.byteLength;e+=s,o.set(i),r.byobRequest.respond(s),e>=t.size&&r.close()}))}})}}catch(O){try{new ReadableStream({}),w=function(e){var t=0;return new ReadableStream({pull:function(r){return e.slice(t,t+524288).arrayBuffer().then((function(o){t+=o.byteLength;var n=new Uint8Array(o);r.enqueue(n),t==e.size&&r.close()}))}})}}catch(O){try{new Response("").body.getReader().read(),w=function(){return new Response(this).body}}catch(O){w=function(){throw new Error("Include https://github.com/MattiasBuelens/web-streams-polyfill")}}}}function j(e){return new Promise((function(t,r){e.onload=e.onerror=function(o){e.onload=e.onerror=null,"load"===o.type?t(e.result||e):r(new Error("Failed to read the blob/file"))}}))}C.arrayBuffer||(C.arrayBuffer=function(){var e=new FileReader;return e.readAsArrayBuffer(this),j(e)}),C.text||(C.text=function(){var e=new FileReader;return e.readAsText(this),j(e)}),C.stream||(C.stream=w)})?o.apply(t,n):o)||(e.exports=i)}("undefined"!==typeof self&&self||"undefined"!==typeof window&&window||"undefined"!==typeof r&&r||this)}).call(this,r("ntbh"))},qJQc:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/regexr.html",function(){return r("yQxe")}])},yQxe:function(e,t,r){"use strict";r.r(t);var o=r("nKUr"),n=r("hlFM"),i=r("g4pe"),s=r.n(i),a=r("q1tI"),c=r.n(a),l=r("H+61"),u=r("UlJF"),d=r("+Css"),p=r("7LId"),h=r("VIvw"),f=r("iHvq"),g=r("cpVT"),y=r("tRbT"),b=r("ofer"),v=r("vJKn"),m=r.n(v);function x(e,t,r,o,n,i,s){try{var a=e[i](s),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(o,n)}function w(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var i=e.apply(t,r);function s(e){x(i,o,n,s,a,"next",e)}function a(e){x(i,o,n,s,a,"throw",e)}s(void 0)}))}}var C=r("a2PE"),j=(r("p77/"),r("0ujT"),r("i8i4")),O=r.n(j),R={},k=R;R.prepMenuContent=function(e,t){t.__next_id||(t.__next_id=1);for(var r=e.kids,o=0,n=r.length;o<n;o++){var i=r[o];i.id||(i.id="__id_"+t.__next_id++),t[i.id]=i,i.parent=e,i.kids&&R.prepMenuContent(i,t)}return e},R.find=function(e,t){for(var r=0,o=e.length;r<o;r++)if(t(e[r]))return e[r]},R.findIndex=function(e,t){for(var r=0,o=e.length;r<o;r++)if(t(e[r]))return r;return-1},R.copy=function(e,t){for(var r in t)e[r]=t[r];return e},R.clone=function(e){return JSON.parse(JSON.stringify(e))},R.now=function(){return Date.now()},R.searchRank=function(e,t){var r=R.searchTest;return t=t.toLowerCase(),e.access?r((e.keywords||"")+" "+(e.name||""),t,16)+r((e.description||"")+" "+(e.author||""),t,8):r(e.token,t,16)+r((e.id||"")+" "+(e.label||""),t,8)+r((e.desc||"")+" "+(e.ext||""),t,4)},R.searchTest=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return e&&-1!==e.toLowerCase().indexOf(t)?r:0},R.htmlSafe=function(e){return null==e?"":(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;")},R.shorten=function(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(!e)return e;var n=t>0&&e.length>t;return n&&(e=e.substr(0,t-1)),r&&(e=R.htmlSafe(e)),n?e+(o&&"<"+o+">")+"\u2026"+(o&&"</"+o+">"):e},R.unescSubstStr=function(e){return e?e.replace(R.SUBST_ESC_RE,(function(e,t,r){return R.SUBST_ESC_CHARS[t]||String.fromCharCode(parseInt(r,16))})):""},R.getRegExp=function(e){var t=e.match(/^\/(.+)\/([a-z]+)?$/),r=null;try{r=t?new RegExp(t[1],t[2]||""):new RegExp(e,"g")}catch(o){}return r},R.decomposeRegEx=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=new RegExp("^"+t+"(.*)"+t+"([igmsuUxy]*)$"),o=r.exec(e);return o?{source:o[1],flags:o[2]}:{source:e,flags:"g"}},R.isMac=function(){return!!navigator.userAgent.match(/Mac\sOS/i)},R.getCtrlKey=function(){return R.isMac()?"cmd":"ctrl"};var _={};R.defer=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;clearTimeout(_[t]),null!==e?_[t]=setTimeout((function(){delete _[t],e()}),r):delete _[t]},R.getHashCode=function(e){var t,r=0,o=e.length;for(t=0;t<o;t++)r=(r<<5)-r+e.charCodeAt(t)|0;return r},R.getForkName=function(e){var t=/ ?\(fork ?(\d*)\)$/.exec(e);if(t){var r=1*(t[1]||1)+1;return e.substr(0,t.index)+" (fork "+r+")"}return e+" (fork)"},R.SUBST_ESC_CHARS={n:"\n",r:"\r",t:"\t","\\":"\\"},R.SUBST_ESC_RE=/\\([nrt\\]|u([A-Z0-9]{4}))/gi;var D=function(){function e(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#70b0e080",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#888";Object(l.a)(this,e),this.lineSpacing=2,this.capWidth=4,this.lastBottom=-1,this.lastRight=-1,this.editor=t,this.canvas=r,this.fill=o,this.stroke=n}return Object(u.a)(e,[{key:"redraw",value:function(){this._update()}},{key:"_deferUpdate",value:function(){var e=this;k.defer((function(){return e._update()}),"TextHighlighter._update")}},{key:"_update",value:function(){this.clear();var e=this._matches,t=this._hoverMatch,r=this._selectedMatch;if(e&&e.length){var o=this.editor,n=o.getDoc(),i=this.canvas.getContext("2d");i.fillStyle=this.fill,i.strokeStyle=this.stroke,i.lineWidth=2;var s=o.getScrollInfo(),a=o.indexFromPos(o.coordsChar({left:0,top:s.top},"local")),c=o.indexFromPos(o.coordsChar({left:s.clientWidth,top:s.top+s.clientHeight},"local"));console.log("start");for(var l=0,u=e.length;l<u;l++){var d=e[l],p=d.i,h=d.i+d.l-1;if(p>c)break;if(!(h<a||h<p)){var f=d.startPos||(d.startPos=n.posFromIndex(p)),g=d.endPos||(d.endPos=n.posFromIndex(h)),y=d===t||d===r,b=o.charCoords(f,"local"),v=o.charCoords(g,"local");if(console.log(JSON.stringify(b)),b.bottom===v.bottom)this.drawHighlight(i,b.left,b.top,v.right,v.bottom,s.top,!1,!1,y);else{var m=o.getScrollInfo().width,x=o.defaultTextHeight();this.drawHighlight(i,b.left,b.top,m-2,b.bottom,s.top,!1,!0,y);for(var w=b.top;(w+=x)<v.top-1;)this.drawHighlight(i,0,w,m-2,w+b.bottom-b.top,s.top,!0,!0,y);this.drawHighlight(i,0,v.top,v.right,v.bottom,s.top,!0,!1,y)}}}}}},{key:"drawHighlight",value:function(e,t,r,o,n,i,s,a,c){var l=this.capWidth;if(!(o<0||t+1>=o)){t=t+.5|0,o=o+.5|0,n=n+.5|0,(r=(r+.5|0)+this.lineSpacing)+1>this.lastBottom?this.lastBottom=n:t<this.lastRight&&(t=this.lastRight),this.lastRight=o;var u=e.globalAlpha;s&&(e.globalAlpha=.5*u,e.fillRect(t+1|0,r-i,l+1,n-r),t+=l),a&&(e.globalAlpha=.5*u,e.fillRect(o-l-1|0,r-i,l+1,n-r),o-=l),e.globalAlpha=u,e.fillRect(t+1,r-i,o-t-1,n-r),c&&e.strokeRect(t+1,r-i,o-t-1,n-r)}}},{key:"clear",value:function(){this.canvas.width=this.canvas.width,this.lastBottom=-1}},{key:"matches",set:function(e){this._matches=e,this._deferUpdate()}},{key:"hoverMatch",set:function(e){this._hoverMatch=e,this._deferUpdate()}},{key:"selectedMatch",set:function(e){this._selectedMatch=e,this._deferUpdate()}}]),e}();function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Object(f.a)(e);if(t){var n=Object(f.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(h.a)(this,r)}}var E=function(e){Object(p.a)(r,e);var t=S(r);function r(e){var o;return Object(l.a)(this,r),o=t.call(this,e),Object(g.a)(Object(d.a)(o),"instance",null),Object(g.a)(Object(d.a)(o),"highlighter",null),Object(g.a)(Object(d.a)(o),"canvasElement",null),Object(g.a)(Object(d.a)(o),"detector",null),o.state={value:"Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.\n\nThe side bar includes a Cheatsheet, full Reference, and Help.",options:{lineNumbers:!1,tabSize:3,indentWithTabs:!0,lineWrapping:!0,extraKeys:{},specialChars:/[ \u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/}},o.props.onInput(o.state.value),o}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this;O.a.findDOMNode(this);this.instance.setSize("100%","100%"),this.canvasElement=document.getElementById("canvasElment"),this.highlighter=new D(this.instance,this.canvasElement),this.highlighter.redraw(),this.detector=document.getElementById("detector");var t=document.getElementsByClassName("react-codemirror2")[document.getElementsByClassName("react-codemirror2").length-1];t.width="100%",t.width="100%";var r=this.detector.contentWindow;r.onresize=function(){var t=0|r.innerWidth,o=0|r.innerHeight;e._startResize(),e._handleResize(t,o)},r.onresize(),this.props.onRef(this),this.props.onInput(this.state.value)}},{key:"_startResize",value:function(){var e=this.canvasElement,t=e.style;t.visibility="hidden",t.opacity=0,e.width=e.height=1}},{key:"_handleResize",value:function(){var e=w(m.a.mark((function e(t,r){var o,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=this.canvasElement,(n=o.style).visibility=n.opacity="",o.width=t,o.height=r,this.instance.refresh(),this._update();case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_update",value:function(){var e=w(m.a.mark((function e(){var t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.result,r=t&&t.matches,this.highlighter.matches=r,this.highlighter.redraw();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateResult",value:function(){var e=w(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({result:t}),this._update();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{className:".pad",id:"editorContainer",style:{boxSizing:"border-box",position:"relative",overflow:"hidden",width:"100%",flex:1},children:[Object(o.jsx)(s.a,{children:Object(o.jsx)("link",{rel:"stylesheet",href:"regexr.css"})}),Object(o.jsx)("iframe",{className:"resizedetector",id:"detector",style:{opacity:0,zIndex:-1e3,border:"none",width:"100%",height:"100%",position:"absolute"}}),Object(o.jsx)("canvas",{id:"canvasElment",className:"highlights",style:{transition:"opacity .2s",position:"absolute",zIndex:1}}),Object(o.jsx)(C.Controlled,{className:"editor-contaner",value:this.state.value,options:this.state.options,onBeforeChange:function(t,r,o){e.setState({value:o})},onChange:function(t,r,o){e.props.onInput(o)},editorDidMount:function(t){e.instance=t}})]})}}]),r}(c.a.Component),M=r("ktzW"),B=r.n(M),U=function(){function e(){Object(l.a)(this,e);this.workerBlob=new B.a(['onmessage=function(e){postMessage("onload");var t,s,n,a=e.data,i=a.text,d=a.tests,l=a.mode,r=new RegExp(a.pattern,a.flags),o=[];if("tests"===l)for(var g=0,x=d.length;g<x;g++){let e=d[g];i=e.text,r.lastIndex=0,t=r.exec(i),o[g]=t?{i:t.index,l:t[0].length,id:e.id}:{id:e.id}}else for(;t=r.exec(i);){s===r.lastIndex&&(n={id:"infinite",warning:!0},++r.lastIndex),s=r.lastIndex;var f=t.reduce(function(e,t,s){return(0===s||e.push({s:t}))&&e},[]);if(o.push({i:t.index,l:t[0].length,groups:f}),!r.global)break}postMessage({error:n,matches:o,mode:l})};'],{type:"text/javascript"}),this._workerObjectURL=null}return Object(u.a)(e,[{key:"solve",value:function(e,t){var r=this;null==this._workerObjectURL&&(this._workerObjectURL=window.URL.createObjectURL(this.workerBlob)),this._callback=t,this._req=e,console.log(JSON.stringify(e));var o,n=e.text,i=e.tests,s=e.mode;try{this._regex=o=new RegExp(e.pattern,e.flags)}catch(y){return this._onRegExComplete({id:"regexparse",name:y.name,message:y.message},null,s)}if(console.log(this._regex),window.Worker){console.log("test2");var a=new Worker(this._workerObjectURL);a.onmessage=function(e){console.log("test3"),"onload"===e.data?(r._startTime=k.now(),r._timeoutId=setTimeout((function(){a.terminate(),r._onRegExComplete({id:"timeout"},null,s)}),250)):(clearTimeout(r._timeoutId),a.terminate(),r._onRegExComplete(e.data.error,e.data.matches,e.data.mode))},a.postMessage({pattern:e.pattern,flags:e.flags,text:n,tests:i,mode:s})}else{this._startTime=k.now();var c,l,u,d=[];if("tests"===s)for(var p=0,h=i.length;p<h;p++){var f=i[p];n=f.text,o.lastIndex=0,c=o.exec(n),d[p]=c?{i:c.index,l:c[0].length,id:f.id}:{id:f.id}}else for(;c=o.exec(n);){l===o.lastIndex&&(u={id:"infinite",warning:!0},++o.lastIndex),l=o.lastIndex;var g=c.reduce((function(e,t,r){return(0===r||e.push({s:t}))&&e}),[]);if(d.push({i:c.index,l:c[0].length,groups:g}),!o.global)break}this._onRegExComplete(u,d,s)}}},{key:"_onRegExComplete",value:function(e,t,r){var o={time:e?null:k.now()-this._startTime,error:e,mode:r,matches:t},n=this._req.tool;if(n&&(o.tool={id:n.id},!e||e.warning&&null!=n.input)){var i=k.unescSubstStr(n.input);o.tool.result="replace"===n.id?this._getReplace(i):this._getList(i)}this._callback(o)}},{key:"_getReplace",value:function(e){return this._req.text.replace(this._regex,e)}},{key:"_getList",value:function(e){var t,r,o,n=this._req.text,i="",s=0;try{o=new RegExp(this._req.pattern,this._req.flags.replace("g",""))}catch(l){return null}-1===e.search(/\$[&1-9`']/)&&(s=e.length,e="$&"+e);do{var a=(r=n.replace(o,"\b")).indexOf("\b"),c=r.length>n.length;if(-1===a)break;i+=(t=n.replace(o,e)).substr(a,t.length-r.length+1),n=r.substr(a+(c?2:1))}while(n.length);return s&&(i=i.substr(0,i.length-s)),i}}]),e}();function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Object(f.a)(e);if(t){var n=Object(f.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(h.a)(this,r)}}var L=function(e){Object(p.a)(r,e);var t=A(r);function r(e){var o;return Object(l.a)(this,r),o=t.call(this,e),Object(g.a)(Object(d.a)(o),"solver",new U),Object(g.a)(Object(d.a)(o),"result",null),Object(g.a)(Object(d.a)(o),"editor",null),o.onInputChange=o.onInputChange.bind(Object(d.a)(o)),o.onEditorTextChange=o.onEditorTextChange.bind(Object(d.a)(o)),o.state={expression:"([A-Z])\\w+",article:""},o}return Object(u.a)(r,[{key:"onInputChange",value:function(e){var t=this;this.setState({expression:e.target.value});var r={pattern:e.target.value,flags:"g",mode:"text",text:this.state.article};this.solver.solve(r,(function(e){return t._handleResult(e)}))}},{key:"_handleResult",value:function(e){this.result=this._processResult(e),this.editor.updateResult(e)}},{key:"_processResult",value:function(e){return"text"===e.mode&&e.matches&&e.matches.forEach((function(e,t){return e.num=t})),e}},{key:"onRefEditor",value:function(e){this.editor=e}},{key:"componentDidMount",value:function(){}},{key:"onEditorTextChange",value:function(e){var t=this;this.setState({article:e});var r={pattern:this.state.expression,flags:"g",mode:"text",text:e};this.solver.solve(r,(function(e){return t._handleResult(e)}))}},{key:"render",value:function(){var e=this;return Object(o.jsxs)(y.a,{container:!0,style:{flex:1},children:[Object(o.jsx)(y.a,{xs:12,sm:4,item:!0,style:{},children:Object(o.jsx)("iframe",{src:"https://tool.oschina.net/uploads/apidocs/jquery/regexp.html",style:{width:"100%",height:"100%"}})}),Object(o.jsxs)(y.a,{item:!0,xs:12,sm:8,style:{display:"flex",flexDirection:"column",paddingLeft:"4px"},children:[Object(o.jsx)("header",{style:{display:"flex",background:"#70b0e0",color:"#26292b",alignItems:"center",padding:"0 1rem 0 1rem",flex:"0 2.5rem"},children:Object(o.jsx)(b.a,{component:"h1",style:{flex:1,fontSize:"1rem",fontWeight:700},children:"Expression"})}),Object(o.jsx)("input",{type:"text",style:{padding:"1rem",fontSize:16,border:0,color:"#282b2d"},onChange:this.onInputChange,defaultValue:this.state.expression}),Object(o.jsx)("header",{style:{display:"flex",background:"#b7bcc0",color:"#26292b",alignItems:"center",padding:"0 1rem 0 1rem",flex:"0 2.5rem"},children:Object(o.jsx)(b.a,{component:"h1",style:{flex:1,fontSize:"1rem",fontWeight:700},children:"Article"})}),Object(o.jsx)("div",{id:"article",style:{flex:1,padding:"1rem",border:0,fontSize:"16px",display:"flex"},children:Object(o.jsx)(E,{onRef:function(t){return e.onRefEditor(t)},onInput:this.onEditorTextChange})})]})]})}}]),r}(c.a.Component);t.default=function(){return Object(o.jsxs)(n.a,{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(o.jsxs)(s.a,{children:[Object(o.jsx)("title",{children:"\u5728\u7ebf\u6b63\u5219\u68c0\u67e5\u5de5\u5177"}),Object(o.jsx)("meta",{content:"\u5de5\u5177,\u6b63\u5219,regex,regexr,\u89e3\u6790,\u7a0b\u5e8f\u5458,\u8bbe\u8ba1\u5e08,parse",name:"keywords"}),Object(o.jsx)("meta",{content:"\u5728\u7ebf\u6b63\u5219\u68c0\u67e5\u5de5\u5177",name:"title"}),Object(o.jsx)("meta",{content:"\u4e3a\u5de5\u7a0b\u5e08\u548c\u8bbe\u8ba1\u5e08\u63d0\u4f9b\u6700\u65b9\u4fbf\u7684\u5728\u7ebf\u5de5\u5177, \u5305\u62ec JSON \u89e3\u6790\uff0cURL\u8f6c\u6362",name:"description"}),Object(o.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"})]}),Object(o.jsx)(L,{})]})}}},[["qJQc",0,1,9,2,3,4,5,8]]]);