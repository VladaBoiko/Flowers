!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("4Ac84"),r("i8ZW8");var n=r("1xo6m"),c=r("aD4Ga"),i=r("8ownn");const s="Favorites";i=r("8ownn");const l="EarlierWatched";var d=r("jwgDc");i=r("8ownn");const f=new(e(r("e6cIt")))(".hero-swiper-container",{pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},speed:3e3,loop:!0});var u=r("g0iWm");const p=new(e(r("e6cIt")))(".insta-swiper-container",{spaceBetween:20,slidesPerView:"auto",breakpoints:{1340:{slidesPerView:4}}});f.enabled=!0,u.reviewsSwiper.enabled=!0,p.enabled=!0,(e=>{const t={openModalBtn:document.querySelector("[data-hero-modal-open]"),closeModalBtn:document.querySelector("[data-hero-modal-close]"),backdrop:document.querySelector("[data-hero-modal]"),body:document.querySelector("body")};function o(){window.removeEventListener("keydown",a),t.body.classList.remove("show-modal"),t.openModalBtn.classList.remove("is-active"),e.autoplay.start()}function a(e){"Escape"===e.code&&(o(),t.openModalBtn.blur())}t.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",a),t.body.classList.add("show-modal"),t.openModalBtn.classList.add("is-active"),e.autoplay.stop()})),t.closeModalBtn.addEventListener("click",o),t.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&o()}))})(f);const v={offerSpecial:document.querySelector(".offer--special .offer__list"),dayOffer:document.querySelector(".offer--day .offer__list"),recommendOffer:document.querySelector(".offer--recommend .offer__list"),offerPlus:document.querySelector(".offer--plus .offer__list"),earlierWatched:document.querySelector(".offer--earlier-watched .offer__list")};function m(e){e.classList.toggle("is-active")}!async function(){for(const e in c.sections)try{let t=null;if(c.sections[e]!==c.sections.earlierWatched)t=await n.APIGetData.getDataBySection(c.sections[e]);else{const e=(0,i.loadFromLocalStorage)("EarlierWatched");if(e){const o=e.join(",");t=await n.APIGetData.getDataByID(o,1,4),(0,i.removeClass)(v.earlierWatched.closest(".offer"),"hidden")}else(0,i.addClass)(v.earlierWatched.closest(".offer"),"hidden")}if(t){const o=(0,d.createMarkup)(t);v[e].insertAdjacentHTML("beforeend",o)}}catch(e){console.log("render-data on index-page",e)}document.querySelectorAll(".product__favorite").forEach((e=>e.addEventListener("click",(t=>{t.preventDefault();const o=e.closest(".product").id;if(o){e.classList.toggle("checked");const t=(0,i.loadFromLocalStorage)(s);let a=null;if(!t||!Array.isArray(t))return a=[o],void(0,i.saveToLocalStorage)(s,a);if(-1===t.indexOf(o))return a=[...t,o],void(0,i.saveToLocalStorage)(s,a);if(t.indexOf(o)>-1)return a=t.filter((e=>e!==o)),(0,i.saveToLocalStorage)(s,a),void(!e.classList.contains("checked")&&document.querySelector(".favorites.offer"))}})))),document.querySelectorAll(".product").forEach((e=>e.addEventListener("click",(t=>{const o=e.id;if(("svg"===t.target.nodeName||"use"===t.target.nodeName)&&t.target.closest(".product__favorite")||t.target.classList.contains("product__favorite")||(0,i.saveToLocalStorage)("CurrentCardID",o),o){const e=(0,i.loadFromLocalStorage)(l);if(e)-1===e.indexOf(o)&&(e.push(o),(0,i.saveToLocalStorage)(l,e));else{const e=[o];(0,i.saveToLocalStorage)(l,e)}}}))))}(),document.body.addEventListener("click",(function(e){const t=document.querySelector("[data-filter-item].is-active"),o=document.querySelector("[data-filter-item].is-active>ul");if(!e.target.closest("[data-filter-item]"))return void(t&&(m(t),m(o)));if(e.target.closest("[data-filter-item].is-active"))return m(t),void m(o);t&&(m(t),m(o));const a=e.target.closest("[data-filter-item]");if(a){a.classList.add("is-active");m(document.querySelector("[data-filter-item].is-active>ul"))}}))}();
//# sourceMappingURL=index.4ac0e328.js.map