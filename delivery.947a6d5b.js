!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var r=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,r.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=r);var t=r("3zrJA"),i=r("dynyT"),l=r("jwgDc"),f=r("iDd0l");const a={offerPlus:document.querySelector(".offer--plus .offer__list")};!async function(){try{const e=await t.APIGetData.getData(),o=[...(0,f.filterBySection)(e,f.sections.offerPlus)].slice(0,4),n=(0,l.createMarkup)(o);a.offerPlus.insertAdjacentHTML("beforeend",n),(0,i.handleFavorite)()}catch(e){console.log(e)}}()}();
//# sourceMappingURL=delivery.947a6d5b.js.map
