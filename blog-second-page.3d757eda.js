!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return i[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,i){t[e]=i},e.parcelRequired7c6=n);const r=document.querySelector("#menu"),o=document.querySelector("#burger");document.querySelector("#header");o&&r&&o.addEventListener("click",(()=>{o.classList.toggle("is-active"),r.classList.toggle("is-active")})),document.querySelectorAll(".menu-link").forEach((e=>{e.addEventListener("click",(()=>{o.classList.remove("is-active"),r.classList.remove("is-active")}))})),window.addEventListener("resize",(()=>{window.innerWidth>=992&&r.classList.contains("is-active")&&r.classList.remove("is-active")})),n("i8ZW8"),n("aow6W")}();
//# sourceMappingURL=blog-second-page.3d757eda.js.map
