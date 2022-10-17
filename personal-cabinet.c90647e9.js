!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);const a={openMenuBtn:document.querySelector("[data-open-menu-btn]"),closeMenuBtn:document.querySelector("[data-close-menu-btn]"),menu:document.querySelector("[data-personal-menu]"),profileBtn:document.querySelector("[data-pers-btn]"),ordersBtn:document.querySelector("[data-order-btn]"),notifBtn:document.querySelector("[data-notif-btn]"),favBtn:document.querySelector("[data-fav-btn]"),profile:document.querySelector("[data-profile]"),orders:document.querySelector("[data-pers-orders]"),notif:document.querySelector("[data-pers-notif]"),fav:document.querySelector("[data-pers-fav]")};a.openMenuBtn.addEventListener("click",(function(){l.classList.add("visually-hidden"),a.menu.classList.remove("is-hidden"),u(a.openMenuBtn),u(a.closeMenuBtn)})),a.closeMenuBtn.addEventListener("click",i),a.menu.addEventListener("click",(function(e){c(e,a.profile,a.profileBtn),c(e,a.orders,a.ordersBtn),c(e,a.notif,a.notifBtn),c(e,a.fav,a.favBtn)}));let l=document.querySelector(".pers-current-js"),s=document.querySelector(".currentBtn");function c(e,t,n){var o;(function(e,t){return e.target!==t})(e,n)||(!function(e){l.classList.remove("pers-current-js"),l.classList.add("visually-hidden"),l=e,e.classList.remove("visually-hidden"),e.classList.add("pers-current-js"),i()}(t),o=n,s.classList.remove("currentBtn"),s=o,o.classList.add("currentBtn"))}function i(){l.classList.remove("visually-hidden"),a.menu.classList.add("is-hidden"),u(a.openMenuBtn),u(a.closeMenuBtn)}function u(e){e.classList.toggle("is-hidden")}const d={headerUserIcon:document.querySelector("[data-header-user-icon]"),loginForm:document.querySelector("[data-login-form]"),regForm:document.querySelector("[data-reg-form]"),loginSection:document.querySelector("[data-login-section]"),personalCab:document.querySelector("[data-pers-cab-main]"),backdrop:document.querySelector("[data-reg-modal]"),body:document.querySelector("body"),openModalBtn:document.querySelector("[data-reg-modal-open]"),closeModalBtn:document.querySelector("[data-reg-modal-close]"),regSubmitBtn:document.querySelector("[data-submit-reg-btn]"),loginSubmitBtn:document.querySelector("[data-login-btn]"),logoutBtn:document.querySelector("[data-logout-btn]"),loginFormAlertText:document.querySelector("[data-login-alert-text]"),regFormAlertText:document.querySelector("[data-reg-alert-text]"),alertText:document.querySelector("[data-pers-alert-text]"),profileForm:document.querySelector("[data-profile-form]")};function m(){window.removeEventListener("keydown",f),d.body.classList.remove("show-modal"),d.openModalBtn.classList.remove("is-active")}function f(e){"Escape"===e.code&&(m(),d.openModalBtn.blur())}d.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",f),d.body.classList.add("show-modal"),d.openModalBtn.classList.add("is-active")})),d.closeModalBtn.addEventListener("click",m),d.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&m()}));const p={profileForm:document.querySelector("[data-profile-form]"),notifForm:document.querySelector("[data-pers-notif-form]"),profileFormBtn:document.querySelector("[data-profile-form-btn]"),notifFormBtn:document.querySelector("[data-notif-form-btn]")};function v(e){e.preventDefault()}p.profileForm.addEventListener("submit",(function(e){v(e),p.profileFormBtn.blur()})),p.notifForm.addEventListener("submit",(function(e){v(e),p.notifFormBtn.blur()}));const y=e(r("dIxxU")).create({baseURL:"https://server-flower.herokuapp.com/user"}),g={set(e){y.defaults.headers.common.Authorization=`Bearer ${e}`},unset(){y.defaults.headers.common.Authorization=""}},S=async e=>{try{return await y.post("/signup",e)}catch(e){return e.response.status}},b=async e=>{try{const{data:t}=await y.post("/",e);return g.set(t.token),t}catch(e){return e.response.status}},L=async()=>{try{const{status:e}=await y.get("/");return 204===e&&g.unset(),e}catch(e){return e.response.status}},B=async()=>{try{return await y.get("/validate")}catch(e){return e.response}};function q(e,t){e.textContent=t,e.style.opacity=1,setTimeout((()=>{e.style.opacity=0}),2500)}d.regForm.addEventListener("submit",(function(e){e.preventDefault(),d.regSubmitBtn.blur();const t={name:null,email:null,password:null,confirmPassword:null},{elements:{name:n,email:o,password:r,confirmPassword:a}}=e.currentTarget;if(t.name=n.value,t.email=o.value,t.password=r.value,t.confirmPassword=a.value,""===n.value||""===o.value||""===r.value||""===a.value)return void q(d.regFormAlertText,"Будь ласка, заповніть усі поля");if(r.value!==a.value)return void q(d.regFormAlertText,"Паролі не співпадають, спробуйте ще раз");d.regForm.reset(),m(),async function(e){409===await S(e)?q(d.alertText,"Такий користувач вже зареєстрований"):q(d.alertText,"Для продовження реєстрації, підтвердьте Вашу пошту")}(t)}));let h="token",w="name";function F(e){e.preventDefault(),d.loginSubmitBtn.blur();const t={email:null,password:null},{elements:{email:n,password:o}}=e.currentTarget;t.email=n.value,t.password=o.value,""!==n.value&&""!==o.value?async function(e){const t=await b(e);401===t?q(d.loginFormAlertText,"Електронна пошта або пароль невірні"):(d.loginSection.classList.add("is-hidden"),d.personalCab.classList.remove("is-hidden"),d.headerUserIcon.addEventListener("click",(e=>e.preventDefault())),localStorage.setItem(h,t.token),localStorage.setItem(w,t.name),d.loginForm.reset())}(t):q(d.loginFormAlertText,"Будь ласка, заповніть усі поля")}!function(){if(null===d.loginSection)return;d.loginForm.addEventListener("submit",F)}(),d.logoutBtn.addEventListener("click",(async function(){await L(),localStorage.removeItem(h),localStorage.removeItem("name"),d.loginSection.classList.remove("is-hidden"),d.personalCab.classList.add("is-hidden")})),function(){const e=localStorage.getItem("token");if(null===e)return;g.set(e),async function(){const e=await B();if(401===e)localStorage.removeItem(h);else{localStorage.setItem(h,e.data.token);let t=localStorage.getItem("name");if(null===d.loginSection)return;!function(e){d.loginSection.classList.add("is-hidden"),d.personalCab.classList.remove("is-hidden"),d.profileForm.name.value=e,d.headerUserIcon.addEventListener("click",(e=>e.preventDefault()))}(t)}}()}()}();
//# sourceMappingURL=personal-cabinet.c90647e9.js.map