!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var r=n("3zrJA"),o=n("jwgDc"),s=n("dynyT"),i=n("3LV0x");const l="EarlierWatched";const c=(e,t)=>{e.insertAdjacentHTML("beforeend",t),(0,s.handleFavorite)(),document.querySelectorAll(".product").forEach((e=>e.addEventListener("click",(t=>{const a=e.id;if(a){const e=(0,i.loadFromLocalStorage)(l);if("undefined"===e){const e=[a];(0,i.saveToLocalStorage)(l,e)}else-1===e.indexOf(a)&&(e.push(a),(0,i.saveToLocalStorage)(l,e))}}))))};var d=n("iDd0l");function f(e){const{height:t}=e.firstElementChild.getBoundingClientRect();window.scrollBy({top:1*t+10,behavior:"smooth"})}var g=n("g0iWm"),m=n("6bmen");g.reviewsSwiper.enabled=!0;const h={resetFormBtn:document.querySelector(".filter-catalog__clear-all-btn"),form:document.querySelector(".filter-catalog"),catalogList:document.querySelector(".catalog-list")},u={selector:h.catalogList,filterParams:{},page:1,totalPages:1,offset:9,incrementPage(){this.page+=1},resetPage(){this.page=1,this.filterParams={}},async renderData(){try{const e=await r.APIGetData.getData(),t=(0,d.filterData)(e,this.filterParams);t.length<=this.offset&&p.hide(),this.totalPages=t.length/this.offset;const a=function(e,t,a){const n=e.length/a,r=t*a-a,o=r+a;if(e.length>a)return t<n?e.slice(r,o):e.slice(r);return e}(t,this.page,this.offset),n=(0,o.createMarkup)(a);c(h.catalogList,n)}catch(e){console.log(e)}}};h.form.reset(),u.renderData(),h.resetFormBtn.addEventListener("click",(()=>{u.resetPage(),(0,o.clearData)(h.catalogList),h.form.reset(),p.show(),p.enable(),u.renderData()})),h.form.addEventListener("change",(()=>{(0,o.clearData)(h.catalogList),u.resetPage(),u.filterParams=function(){const e={category:[],sort:[],color:[],amount:[],size:[],form:[],price:[]};return[...h.form].map((t=>{if("INPUT"===t.nodeName&&t.checked){const a=t.parentElement.parentElement.previousElementSibling.textContent,n=t.nextElementSibling.textContent,r=(0,m.default)(a,d.filterWords),o="amount"===r||"size"===r?Number.parseInt(n):n;-1===e[r].indexOf(n)&&e[r].push(o)}})),e}(),u.renderData(),p.show(),p.enable()}));const p={element:document.querySelector(".catalog__btn"),className:"hidden",disable(){this.element.disabled=!0},enable(){this.element.disabled=!1},hide(){this.element.classList.add(this.className)},show(){this.element.classList.remove(this.className)}};p.element.addEventListener("click",(()=>{p.disable(),u.incrementPage(),u.renderData(),u.page>=u.totalPages?p.hide():p.enable(),f(h.catalogList)}))}();
//# sourceMappingURL=catalog.58211146.js.map
