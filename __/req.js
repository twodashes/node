parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"KN53":[function(require,module,exports) {
"use strict";function e(o){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(o)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.aggregate_req_body_query=void 0;var o=function(e){var o={};if(e.body&&(o=e.body),e.query)for(var r in e.query){var n=e.query[r];if(0!==n){if(n&&(n=decodeURIComponent(n).trim()))if("undefined"!==n)if("null"!==n)if("true"!==n)if("false"!==n){if(['"',"{","["].includes(n[0]))try{n=JSON.parse(n)}catch(t){n=""}o[r]=n}else o[r]=!1;else o[r]=!0;else o[r]="null";else o[r]="undefined"}else o[r]=0}return o};if(exports.aggregate_req_body_query=o,"object"===("undefined"==typeof window?"undefined":e(window))){var r={aggregate_req_body_query:o};for(var n in window.__=window.__||{},r)window.__[n]=r[n]}
},{}]},{},["KN53"], null)
//# sourceMappingURL=/req.map