const e=document.querySelector("#menu"),t=document.querySelector("#burger");document.querySelector("#header");t&&e&&t.addEventListener("click",(()=>{t.classList.toggle("is-active"),e.classList.toggle("is-active")})),document.querySelectorAll(".menu-link").forEach((i=>{i.addEventListener("click",(()=>{t.classList.remove("is-active"),e.classList.remove("is-active")}))})),window.addEventListener("resize",(()=>{window.innerWidth>=992&&e.classList.contains("is-active")&&e.classList.remove("is-active")}));
//# sourceMappingURL=favorites.0916a784.js.map
