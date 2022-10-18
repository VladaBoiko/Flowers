!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);const a=document.querySelector(".menu"),l=document.querySelector("#burger");document.querySelector("#header");l&&a&&l.addEventListener("click",(()=>{l.classList.toggle("is-active"),a.classList.toggle("is-active")})),document.querySelectorAll(".menu-link").forEach((e=>{e.addEventListener("click",(()=>{l.classList.remove("is-active"),a.classList.remove("is-active")}))}));const d={openMenuBtn:document.querySelector("[data-open-menu-btn]"),closeMenuBtn:document.querySelector("[data-close-menu-btn]"),menu:document.querySelector("[data-personal-menu]"),profileBtn:document.querySelector("[data-pers-btn]"),ordersBtn:document.querySelector("[data-order-btn]"),notifBtn:document.querySelector("[data-notif-btn]"),favBtn:document.querySelector("[data-fav-btn]"),profile:document.querySelector("[data-profile]"),orders:document.querySelector("[data-pers-orders]"),notif:document.querySelector("[data-pers-notif]"),fav:document.querySelector("[data-pers-fav]")};d.openMenuBtn.addEventListener("click",(function(){c.classList.add("visually-hidden"),d.menu.classList.remove("is-hidden"),m(d.openMenuBtn),m(d.closeMenuBtn)})),d.closeMenuBtn.addEventListener("click",u),d.menu.addEventListener("click",(function(e){s(e,d.profile,d.profileBtn),s(e,d.orders,d.ordersBtn),s(e,d.notif,d.notifBtn),s(e,d.fav,d.favBtn)}));let c=document.querySelector(".pers-current-js"),i=document.querySelector(".currentBtn");function s(e,t,n){var o;(function(e,t){return e.target!==t})(e,n)||(!function(e){c.classList.remove("pers-current-js"),c.classList.add("visually-hidden"),c=e,e.classList.remove("visually-hidden"),e.classList.add("pers-current-js"),u()}(t),o=n,i.classList.remove("currentBtn"),i=o,o.classList.add("currentBtn"))}function u(){c.classList.remove("visually-hidden"),d.menu.classList.add("is-hidden"),m(d.openMenuBtn),m(d.closeMenuBtn)}function m(e){e.classList.toggle("is-hidden")}const f={headerUserIcon:document.querySelector("[data-header-user-icon]"),loginForm:document.querySelector("[data-login-form]"),regForm:document.querySelector("[data-reg-form]"),loginSection:document.querySelector("[data-login-section]"),personalCab:document.querySelector("[data-pers-cab-main]"),backdrop:document.querySelector("[data-reg-modal]"),body:document.querySelector("body"),openModalBtn:document.querySelector("[data-reg-modal-open]"),closeModalBtn:document.querySelector("[data-reg-modal-close]"),regSubmitBtn:document.querySelector("[data-submit-reg-btn]"),loginSubmitBtn:document.querySelector("[data-login-btn]"),logoutBtn:document.querySelector("[data-logout-btn]"),loginFormAlertText:document.querySelector("[data-login-alert-text]"),regFormAlertText:document.querySelector("[data-reg-alert-text]"),alertText:document.querySelector("[data-pers-alert-text]"),profileForm:document.querySelector("[data-profile-form]")},p={logPwdInput:document.querySelector("[data-log-pwd-input]"),regPwdInput:document.querySelector("[data-reg-pwd-input]"),logConfPwdInput:document.querySelector("[data-reg-conf-pwd-input]"),logPwdBtn:document.querySelector("[data-log-pwd-btn]"),regPwdBtn:document.querySelector("[data-reg-pwd-btn]"),regConfPwdBtn:document.querySelector("[data-reg-conf-pwd-btn]")},{loginForm:g,regForm:v}=f;function y({target:e}){w(e,p.logPwdBtn,p.logPwdInput),w(e,p.regPwdBtn,p.regPwdInput),w(e,p.regConfPwdBtn,p.logConfPwdInput)}function w(e,t,n){if(e===t){if("password"===n.getAttribute("type"))return void function(e,t){t.setAttribute("type","text"),e.classList.add("show-pwd")}(t,n);if("text"===n.getAttribute("type"))return void S(t,n)}}function S(e,t){t.setAttribute("type","password"),e.classList.remove("show-pwd")}function L(){window.removeEventListener("keydown",b),f.body.classList.remove("show-modal"),f.openModalBtn.classList.remove("is-active"),S(p.regPwdBtn,p.regPwdInput),S(p.regConfPwdBtn,p.logConfPwdInput)}function b(e){"Escape"===e.code&&(L(),f.openModalBtn.blur())}g.addEventListener("click",y),v.addEventListener("click",y),f.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",b),f.body.classList.add("show-modal"),f.openModalBtn.classList.add("is-active"),S(p.logPwdBtn,p.logPwdInput)})),f.closeModalBtn.addEventListener("click",L),f.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&L()}));const B={profileForm:document.querySelector("[data-profile-form]"),notifForm:document.querySelector("[data-pers-notif-form]"),profileFormBtn:document.querySelector("[data-profile-form-btn]"),notifFormBtn:document.querySelector("[data-notif-form-btn]"),forgotPwdLink:document.querySelector("[data-forgot-pwd-link]")};function q(e){e.preventDefault()}B.profileForm.addEventListener("submit",(function(e){q(e),B.profileFormBtn.blur()})),B.notifForm.addEventListener("submit",(function(e){q(e),B.notifFormBtn.blur()})),B.forgotPwdLink.addEventListener("click",(function(e){q(e),e.target.blur()}));const h=e(r("dIxxU")).create({baseURL:"https://server-flower.herokuapp.com/user"}),k={set(e){h.defaults.headers.common.Authorization=`Bearer ${e}`},unset(){h.defaults.headers.common.Authorization=""}},F=async e=>{try{return await h.post("/signup",e)}catch(e){return e.response.status}},P=async e=>{try{const{data:t}=await h.post("/",e);return k.set(t.token),t}catch(e){return e.response.status}},E=async()=>{try{const{status:e}=await h.get("/");return 204===e&&k.unset(),e}catch(e){return e.response.status}},x=async()=>{try{return await h.get("/validate")}catch(e){return e.response}};function I(e,t){e.textContent=t,e.style.opacity=1,setTimeout((()=>{e.style.opacity=0}),2500)}f.regForm.addEventListener("submit",(function(e){e.preventDefault(),f.regSubmitBtn.blur();const t={name:null,email:null,password:null,confirmPassword:null},{elements:{name:n,email:o,password:r,confirmPassword:a}}=e.currentTarget;if(t.name=n.value,t.email=o.value,t.password=r.value,t.confirmPassword=a.value,""===n.value||""===o.value||""===r.value||""===a.value)return void I(f.regFormAlertText,"Будь ласка, заповніть усі поля");if(r.value!==a.value)return void I(f.regFormAlertText,"Паролі не співпадають, спробуйте ще раз");f.regForm.reset(),L(),async function(e){409===await F(e)?I(f.alertText,"Такий користувач вже зареєстрований"):I(f.alertText,"Для продовження реєстрації, підтвердьте Вашу пошту")}(t)}));const M="token",T="name";function A(e){e.preventDefault(),f.loginSubmitBtn.blur();const t={email:null,password:null},{elements:{email:n,password:o}}=e.currentTarget;t.email=n.value,t.password=o.value,""!==n.value&&""!==o.value?async function(e){const t=await P(e);401===t?I(f.loginFormAlertText,"Електронна пошта або пароль невірні"):(S(p.logPwdBtn,p.logPwdInput),f.loginSection.classList.add("is-hidden"),f.personalCab.classList.remove("is-hidden"),localStorage.setItem(M,t.token),localStorage.setItem(T,t.name),f.profileForm.name.value=t.name,f.loginForm.reset())}(t):I(f.loginFormAlertText,"Будь ласка, заповніть усі поля")}f.headerUserIcon.addEventListener("click",(e=>e.preventDefault())),function(){if(null===f.loginSection)return;f.loginForm.addEventListener("submit",A)}(),f.logoutBtn.addEventListener("click",(async function(){await E(),localStorage.removeItem(M),localStorage.removeItem("name"),f.loginSection.classList.remove("is-hidden"),f.personalCab.classList.add("is-hidden")})),function(){const e=localStorage.getItem("token");if(null===e)return;k.set(e),async function(){const e=await x();if(401===e)localStorage.removeItem(M);else{localStorage.setItem(M,e.data.token);let t=localStorage.getItem("name");if(null===f.loginSection)return;!function(e){f.loginSection.classList.add("is-hidden"),f.personalCab.classList.remove("is-hidden"),f.profileForm.name.value=e,f.headerUserIcon.addEventListener("click",(e=>e.preventDefault()))}(t)}}()}()}();
//# sourceMappingURL=personal-cabinet.6c4b5ca1.js.map
