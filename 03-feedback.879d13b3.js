function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var o,i,r,u,a,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function j(e){return l=e,a=setTimeout(h,t),c?b(e):u}function T(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function h(){var e=v();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function w(e){return a=void 0,p&&o?b(e):(o=i=void 0,u)}function O(){var e=v(),n=T(e);if(o=arguments,i=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(h,t),b(f)}return void 0===a&&(a=setTimeout(h,t)),u}return t=y(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=f=i=a=void 0},O.flush=function(){return void 0===a?u:w(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector("form"),j=document.querySelector("input"),T=document.querySelector("textarea");b.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:j.value,message:T.value}),e.currentTarget.reset()}));const h=e(t)((()=>{const e={email:b.elements.email.value,message:b.elements.message.value};console.log(e),localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);b.addEventListener("input",h);(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);j.value=t.email,T.value=t.message}})();
//# sourceMappingURL=03-feedback.879d13b3.js.map