!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(i).concat([r]).join("\n")}return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var u=t[r];"number"==typeof u[0]&&o[u[0]]||(e&&!u[2]?u[2]=e:e&&(u[2]="("+u[2]+") and ("+e+")"),n.push(u))}},n}},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"input { \n        /*display: flex;\n        top: 91.25%;\n        flex-basis: 100%;\n\tposition: relative;\n        border: 1px solid black;\n        flex-direction: row;\n        background-color: white;*/\n        border: 0;\n        outline: none;\n        flex-basis: 75%;\n        align-self: center;\n}\n\n:host { \n\tdisplay: inline-block;\n\tborder: 1px solid rgba(25, 25, 25, 0.32);\n}\n",""])},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"form-input {\n        display:inline-flex;\n        justify-content: space-around;\n        height: 10vh;\n        /*height: -webkit-fill-available;\n        flex-direction: row;\n        background-color: white ;*/\n        order: 0;\n        width: 100%;\n        background: #fbfbfb;\n\n}\n\nform{\n        display:flex;\n        flex-direction:column;\n        /*height: 0vh;*/\n        justify-content: flex-end;\n        align-items: flex-end;\n        background: #f0f0f0;\n    \n}\n\nbody\n{\n        background-color: #f0f0f0\n}\n\n.result {\n        display: flex;\n        flex-direction: column-reverse;\n        flex-basis: 1%;\n        /*height: 10%;*/\n        background-color: #f3e5f5;\n        min-height: min-content;\n        height: fit-content;\n        border: 2px solid black;\n        border-radius: 3px;\n        margin: 20px;\n        max-width: 75%;\n\tcolor: black;\n}\n\n.message-list {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        overflow-y: scroll;\n        align-items: flex-end;\n        border: 2px solid black;\n        height: 90vh;\n        width: 100vw;\n}\n\ninput[type=submit] {\n\t/*visibility: collapse;*/\n}\n",""])},function(t,n,e){"use strict";e.r(n);e(4);var o=e(1);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function c(t){var n="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return l(t,arguments,a(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),f(e,t)})(t)}function l(t,n,e){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&f(r,e.prototype),r}).apply(null,arguments)}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s="\n\t<style>".concat(e.n(o).a.toString(),'</style>\n\t<input />\n\t<slot name="icon"></slot>\n'),p=function(t){function n(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=u(this,a(n).call(this))).attachShadow({mode:"open"}).innerHTML=s,t._initElements(),t._addHandlers(),t}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(n,c(HTMLElement)),function(t,n,e){n&&i(t.prototype,n),e&&i(t,e)}(n,[{key:"attributeChangedCallback",value:function(t,n,e){this._elements.input[t]=e}},{key:"_initElements",value:function(){var t=document.createElement("input"),n=this.shadowRoot.querySelector("input");this.appendChild(t),this._elements={input:n,hiddenInput:t}}},{key:"_addHandlers",value:function(){this._elements.input.addEventListener("input",this._onInput.bind(this))}},{key:"_onInput",value:function(){this._elements.hiddenInput.value=this._elements.input.value}}],[{key:"observedAttributes",get:function(){return["name","placeholder","value","disabled"]}}]),n}();customElements.define("form-input",p);var d=e(2);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,n){return!n||"object"!==y(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function h(t){var n="function"==typeof Map?new Map:void 0;return(h=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return v(t,arguments,_(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),g(e,t)})(t)}function v(t,n,e){return(v=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&g(r,e.prototype),r}).apply(null,arguments)}function g(t,n){return(g=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x="\n\t<style>".concat(e.n(d).a.toString(),'</style>\n\t<form>\n\t\t<form-input name="message_text" placeholder="Введите сообщеине" slot="message-input">\n\t\t\t<span slot="icon"></span>\n\t\t</form-input>\n\t</form>\n'),w=function(t){function n(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=m(this,_(n).call(this))).attachShadow({mode:"open"}).innerHTML=x,t._initElements(),t._addHandlers(),t}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&g(t,n)}(n,h(HTMLElement)),function(t,n,e){n&&b(t.prototype,n),e&&b(t,e)}(n,[{key:"attributeChangedCallback",value:function(t,n,e){this._elements.form[t]=e}},{key:"_initElements",value:function(){var t=this.shadowRoot.querySelector("form"),n=this.shadowRoot.querySelector(".result");this._elements={form:t,message:n}}},{key:"_addHandlers",value:function(){this._elements.form.addEventListener("submit",this._onSubmit.bind(this)),this._elements.form.addEventListener("keypress",this._onKeyPress.bind(this))}},{key:"_onSubmit",value:function(t){var n=document.body.querySelector(".message-list"),e=document.createElement("div");return e.className="result",e.innerText=Array.from(this._elements.form.elements).map(function(t){return t.value}).join(", "),n.appendChild(e),t.preventDefault(),!1}},{key:"_onKeyPress",value:function(t){13==t.keyCode&&this._elements.form.dispatchEvent(new Event("submit"))}}],[{key:"observedAttributes",get:function(){return["action","method"]}}]),n}();customElements.define("message-form",w)},function(t,n){t.exports={pseudo:"index__pseudo___eiF8d"}}]);