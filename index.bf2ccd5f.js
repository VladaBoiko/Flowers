var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var d={id:e,exports:{}};return o[e]=d,t.call(d.exports,d,d.exports),d.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var d=t("iWIEl");const r={openModalBtn:document.querySelector("[data-hero-modal-open]"),closeModalBtn:document.querySelector("[data-hero-modal-close]"),backdrop:document.querySelector(".js-hero-backdrop"),body:document.querySelector("body")};function a(){window.removeEventListener("keydown",l),r.body.classList.remove("show-modal"),r.openModalBtn.classList.remove("is-active"),d.heroSwiper.autoplay.start()}function l(e){"Escape"===e.code&&(a(),r.openModalBtn.blur())}r.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",l),r.body.classList.add("show-modal"),r.openModalBtn.classList.add("is-active"),d.heroSwiper.autoplay.stop()})),r.closeModalBtn.addEventListener("click",a),r.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&a()}));
//# sourceMappingURL=index.bf2ccd5f.js.map