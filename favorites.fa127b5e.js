var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("luHVj"),l=r("gBFI5");const i=(e,t)=>{e.insertAdjacentHTML("beforeend",t)};r("8qLFi");var a=r("5rfeO");const c={titleWrapper:document.querySelector(".offer__title-wrapper"),btn:document.querySelector(".favorites__button"),list:document.querySelector(".offer__list--fav")},s=(0,a.loadFromLocalStorage)("Favorites");if("undefined"===s||0===s.length)c.titleWrapper.children[0].textContent="В обраному поки що нічого нема",c.btn.textContent="Перейти на головну",c.btn.href="./index.html",f(c.titleWrapper.children[1],"hidden"),f(c.btn,"favorites__button--centered");else{c.titleWrapper.children[0].textContent="Обране",c.btn.textContent="Перейти в каталог",c.btn.href="./catalog.html",d(c.titleWrapper.children[1],"hidden"),d(c.btn,"favorites__button--centered");const e=s.map((async e=>{try{return await o.APIGetData.getDataByID(e)}catch{console.log("error")}}));Promise.all(e).then((e=>e)).then((e=>{console.log("result",e);const t=(0,l.createMarkup)(e);console.log("1",t),i(c.list,t)})).catch(console.error)}function d(e,t){e.classList.contains(t)||e.classList.add(t)}function f(e,t){e.classList.contains(t)&&e.classList.remove(t)}
//# sourceMappingURL=favorites.fa127b5e.js.map