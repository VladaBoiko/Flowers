!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var r=n("3zrJA"),s=n("jwgDc");const l=(e,t)=>{e.insertAdjacentHTML("beforeend",t)};var o=n("dynyT"),i=n("7qU2l"),c=n("iDd0l"),d=n("g0iWm"),f=n("6bmen");d.reviewsSwiper.enabled=!0;const g={resetFormBtn:document.querySelector(".filter-catalog__clear-all-btn"),form:document.querySelector(".filter-catalog"),catalogList:document.querySelector(".catalog-list")},m={selector:g.catalogList,filterParams:{},page:1,totalPages:1,offset:9,incrementPage(){this.page+=1},resetPage(){this.page=1,this.filterParams={}},async renderData(){try{const e=await r.APIGetData.getData(),t=(0,c.filterData)(e,this.filterParams);t.length<=this.offset&&h.hide(),this.totalPages=t.length/this.offset;const a=function(e,t,a){const n=e.length/a,r=t*a-a,s=r+a;if(console.log("start",r,"end",s,"page",t,"totalPages",n),e.length>a)return t<n?e.slice(r,s):e.slice(r);return e}(t,this.page,this.offset),n=(0,s.createMarkup)(a);l(g.catalogList,n),(0,o.handleFavorite)(),(0,i.handleWatchedHistory)()}catch(e){console.log(e)}}};g.form.reset(),m.renderData(),g.resetFormBtn.addEventListener("click",(()=>{m.resetPage(),(0,s.clearData)(g.catalogList),g.form.reset(),h.show(),h.enable(),m.renderData()})),g.form.addEventListener("change",(()=>{(0,s.clearData)(g.catalogList),m.resetPage(),m.filterParams=function(){const e={category:[],sort:[],color:[],amount:[],size:[],form:[],price:[]};return[...g.form].map((t=>{if("INPUT"===t.nodeName&&t.checked){const a=t.parentElement.parentElement.previousElementSibling.textContent,n=t.nextElementSibling.textContent,r=(0,f.default)(a,c.filterWords),s="amount"===r||"size"===r?Number.parseInt(n):n;-1===e[r].indexOf(n)&&e[r].push(s)}})),e}(),m.renderData()}));const h={element:document.querySelector(".catalog__btn"),className:"hidden",disable(){this.element.disabled=!0},enable(){this.element.disabled=!1},hide(){this.element.classList.add(this.className)},show(){this.element.classList.remove(this.className)}};h.element.addEventListener("click",(()=>{h.disable(),m.incrementPage(),m.renderData(),m.page>=m.totalPages?h.hide():h.enable()}))}();
//# sourceMappingURL=catalog.8b063d17.js.map