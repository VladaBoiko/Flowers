function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r("iLBAM"),r("ff9KG");const a={openMenuBtn:document.querySelector("[data-open-menu-btn]"),closeMenuBtn:document.querySelector("[data-close-menu-btn]"),menu:document.querySelector("[data-personal-menu]"),profileBtn:document.querySelector("[data-pers-btn]"),ordersBtn:document.querySelector("[data-order-btn]"),notifBtn:document.querySelector("[data-notif-btn]"),favBtn:document.querySelector("[data-fav-btn]"),profile:document.querySelector("[data-profile]"),orders:document.querySelector("[data-pers-orders]"),notif:document.querySelector("[data-pers-notif]"),fav:document.querySelector("[data-pers-fav]")};a.openMenuBtn.addEventListener("click",(function(){l.classList.add("visually-hidden"),a.menu.classList.remove("is-hidden"),u(a.openMenuBtn),u(a.closeMenuBtn)})),a.closeMenuBtn.addEventListener("click",c),a.menu.addEventListener("click",(function(e){i(e,a.profile,a.profileBtn),i(e,a.orders,a.ordersBtn),i(e,a.notif,a.notifBtn),i(e,a.fav,a.favBtn)}));let l=document.querySelector(".pers-current-js"),d=document.querySelector(".currentBtn");function i(e,t,n){var o;(function(e,t){return e.target!==t})(e,n)||(!function(e){l.classList.remove("pers-current-js"),l.classList.add("visually-hidden"),l=e,e.classList.remove("visually-hidden"),e.classList.add("pers-current-js"),c()}(t),o=n,d.classList.remove("currentBtn"),d=o,o.classList.add("currentBtn"))}function c(){l.classList.remove("visually-hidden"),a.menu.classList.add("is-hidden"),u(a.openMenuBtn),u(a.closeMenuBtn)}function u(e){e.classList.toggle("is-hidden")}const s={headerUserIcon:document.querySelector("[data-header-user-icon]"),loginForm:document.querySelector("[data-login-form]"),regForm:document.querySelector("[data-reg-form]"),loginSection:document.querySelector("[data-login-section]"),personalCab:document.querySelector("[data-pers-cab-main]"),backdrop:document.querySelector("[data-reg-modal]"),body:document.querySelector("body"),openModalBtn:document.querySelector("[data-reg-modal-open]"),closeModalBtn:document.querySelector("[data-reg-modal-close]"),regSubmitBtn:document.querySelector("[data-submit-reg-btn]"),loginSubmitBtn:document.querySelector("[data-login-btn]"),logoutBtn:document.querySelector("[data-logout-btn]"),loginFormAlertText:document.querySelector("[data-login-alert-text]"),regFormAlertText:document.querySelector("[data-reg-alert-text]"),alertText:document.querySelector("[data-pers-alert-text]"),profileForm:document.querySelector("[data-profile-form]")},m={logPwdInput:document.querySelector("[data-log-pwd-input]"),regPwdInput:document.querySelector("[data-reg-pwd-input]"),logConfPwdInput:document.querySelector("[data-reg-conf-pwd-input]"),logPwdBtn:document.querySelector("[data-log-pwd-btn]"),regPwdBtn:document.querySelector("[data-reg-pwd-btn]"),regConfPwdBtn:document.querySelector("[data-reg-conf-pwd-btn]")},{loginForm:f,regForm:g}=s;function p({target:e}){v(e,m.logPwdBtn,m.logPwdInput),v(e,m.regPwdBtn,m.regPwdInput),v(e,m.regConfPwdBtn,m.logConfPwdInput)}function v(e,t,n){if(e===t){if("password"===n.getAttribute("type"))return void function(e,t){t.setAttribute("type","text"),e.classList.add("show-pwd")}(t,n);if("text"===n.getAttribute("type"))return void y(t,n)}}function y(e,t){t.setAttribute("type","password"),e.classList.remove("show-pwd")}function w(){window.removeEventListener("keydown",S),s.body.classList.remove("show-modal"),s.openModalBtn.classList.remove("is-active"),y(m.regPwdBtn,m.regPwdInput),y(m.regConfPwdBtn,m.logConfPwdInput)}function S(e){"Escape"===e.code&&(w(),s.openModalBtn.blur())}f.addEventListener("click",p),g.addEventListener("click",p),s.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",S),s.body.classList.add("show-modal"),s.openModalBtn.classList.add("is-active"),y(m.logPwdBtn,m.logPwdInput)})),s.closeModalBtn.addEventListener("click",w),s.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&w()}));const B={profileForm:document.querySelector("[data-profile-form]"),notifForm:document.querySelector("[data-pers-notif-form]"),profileFormBtn:document.querySelector("[data-profile-form-btn]"),notifFormBtn:document.querySelector("[data-notif-form-btn]"),forgotPwdLink:document.querySelector("[data-forgot-pwd-link]")};function b(e){e.preventDefault()}B.profileForm.addEventListener("submit",(function(e){b(e),B.profileFormBtn.blur()})),B.notifForm.addEventListener("submit",(function(e){b(e),B.notifFormBtn.blur()})),B.forgotPwdLink.addEventListener("click",(function(e){b(e),e.target.blur()}));const L=document.getElementById("profileFormImage"),q=document.getElementById("profileFormPreview");L.addEventListener("change",(()=>{!function(e){if(console.log(1),!["image/jpeg","image/png","image/gif"].includes(e.type))return alert("Only image can be load"),void(L.value="");var t=new FileReader;t.onload=function(e){q.innerHTML=`<img src="${e.target.result}" alt="Avatar">`},t.readAsDataURL(e)}(L.files[0])}));var h=r("2shzp"),F=r("6eNoq");const k=e(h).create({baseURL:F.BASE_URL}),P={set(e){k.defaults.headers.common.Authorization=`Bearer ${e}`},unset(){k.defaults.headers.common.Authorization=""}},E=async e=>{try{return await k.post("/signup",e)}catch(e){return e.response.status}},I=async e=>{try{const{data:t}=await k.post("/",e);return P.set(t.token),t}catch(e){return e.response.status}},x=async()=>{try{const{status:e}=await k.get("/");return 204===e&&P.unset(),e}catch(e){return e.response.status}},M=async()=>{try{return await k.get("/validate")}catch(e){return e.response}};function T(e,t){e.textContent=t,e.style.opacity=1,setTimeout((()=>{e.style.opacity=0}),2500)}s.regForm.addEventListener("submit",(function(e){e.preventDefault(),s.regSubmitBtn.blur();const t={name:null,email:null,password:null,confirmPassword:null},{elements:{name:n,email:o,password:r,confirmPassword:a}}=e.currentTarget;if(t.name=n.value,t.email=o.value,t.password=r.value,t.confirmPassword=a.value,""===n.value||""===o.value||""===r.value||""===a.value)return void T(s.regFormAlertText,"Будь ласка, заповніть усі поля");if(r.value!==a.value)return void T(s.regFormAlertText,"Паролі не співпадають, спробуйте ще раз");s.regForm.reset(),w(),async function(e){409===await E(e)?T(s.alertText,"Такий користувач вже зареєстрований"):T(s.alertText,"Для продовження реєстрації, підтвердьте Вашу пошту")}(t)}));function A(e){e.preventDefault(),s.loginSubmitBtn.blur();const t={email:null,password:null},{elements:{email:n,password:o}}=e.currentTarget;t.email=n.value,t.password=o.value,""!==n.value&&""!==o.value?async function(e){const t=await I(e);401===t?T(s.loginFormAlertText,"Електронна пошта або пароль невірні"):(y(m.logPwdBtn,m.logPwdInput),s.loginSection.classList.add("is-hidden"),s.personalCab.classList.remove("is-hidden"),localStorage.setItem("token",t.token),localStorage.setItem("name",t.name),s.profileForm.name.value=t.name,s.loginForm.reset())}(t):T(s.loginFormAlertText,"Будь ласка, заповніть усі поля")}s.headerUserIcon.addEventListener("click",(e=>e.preventDefault())),function(){if(null===s.loginSection)return;s.loginForm.addEventListener("submit",A)}(),s.logoutBtn.addEventListener("click",(async function(){await x(),localStorage.removeItem("token"),localStorage.removeItem("name"),s.loginSection.classList.remove("is-hidden"),s.personalCab.classList.add("is-hidden")})),function(){const e=localStorage.getItem("token");if(null===e)return;P.set(e),async function(){const e=await M();if(401===e)localStorage.removeItem("token");else{localStorage.setItem("token",e.data.token);let t=localStorage.getItem("name");if(null===s.loginSection)return;!function(e){s.loginSection.classList.add("is-hidden"),s.personalCab.classList.remove("is-hidden"),s.profileForm.name.value=e,s.headerUserIcon.addEventListener("click",(e=>e.preventDefault()))}(t)}}()}();
//# sourceMappingURL=personal-cabinet.6e43f02d.js.map