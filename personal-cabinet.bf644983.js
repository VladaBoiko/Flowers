const e={openMenuBtn:document.querySelector("[data-open-menu-btn]"),closeMenuBtn:document.querySelector("[data-close-menu-btn]"),menu:document.querySelector("[data-personal-menu]"),profileBtn:document.querySelector("[data-pers-btn]"),ordersBtn:document.querySelector("[data-order-btn]"),notifBtn:document.querySelector("[data-notif-btn]"),favBtn:document.querySelector("[data-fav-btn]"),profile:document.querySelector("[data-profile]"),orders:document.querySelector("[data-pers-orders]"),notif:document.querySelector("[data-pers-notif]"),fav:document.querySelector("[data-pers-fav]")};e.openMenuBtn.addEventListener("click",(function(){t.classList.add("visually-hidden"),e.menu.classList.remove("is-hidden"),s(e.openMenuBtn),s(e.closeMenuBtn)})),e.closeMenuBtn.addEventListener("click",o),e.menu.addEventListener("click",(function(t){r(t,e.profile,e.profileBtn),r(t,e.orders,e.ordersBtn),r(t,e.notif,e.notifBtn),r(t,e.fav,e.favBtn)}));let t=document.querySelector(".pers-current-js"),n=document.querySelector(".currentBtn");function r(e,r,s){var c;(function(e,t){return e.target!==t})(e,s)||(!function(e){t.classList.remove("pers-current-js"),t.classList.add("visually-hidden"),t=e,e.classList.remove("visually-hidden"),e.classList.add("pers-current-js"),o()}(r),c=s,n.classList.remove("currentBtn"),n=c,c.classList.add("currentBtn"))}function o(){t.classList.remove("visually-hidden"),e.menu.classList.add("is-hidden"),s(e.openMenuBtn),s(e.closeMenuBtn)}function s(e){e.classList.toggle("is-hidden")}
//# sourceMappingURL=personal-cabinet.bf644983.js.map
