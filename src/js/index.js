// // import { serverData } from './fetch-api';

// const axios = require('axios').default;

// const instance = axios.create({
//   baseURL: 'https://62f9492f3eab3503d1e324fd.mockapi.io/',
// });

// // export
// const serverData = async params => {
//   const response = await instance.get(`/products/?${params}`);
//   const data = await response.data;
//   return data;
// };
// // =========================================================================

// const refs = {
//   offerSpecial: document.querySelector('.offer--special .offer__list'),
//   dayOffer: document.querySelector('.offer--day .offer__list'),
//   recommendOffer: document.querySelector('.offer--recommend .offer__list'),
//   offerPlus: document.querySelector('.offer--plus .offer__list'),
// };

// const sections = {
//   offerSpecial: 'Спеціальна пропозиція',
//   dayOffer: 'Пропозиція дня',
//   recommendOffer: 'Рекомендуємо троянди',
//   offerPlus: 'З квітами купують',
// };

// renderData();

// async function renderData() {
//   try {
//     await queryAndRender('offerSpecial');
//     await queryAndRender('dayOffer');
//     await queryAndRender('recommendOffer');
//     await queryAndRender('offerPlus');
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function queryAndRender(sectiоn) {
//   const searchParams = new URLSearchParams({
//     filter: sections[sectiоn],
//   }).toString();
//   console.log(searchParams);
//   console.log(refs[sectiоn]);
//   const data = await serverData(searchParams);
//   console.log(data);
//   let markup = createMarkup(data);
//   refs[sectiоn].insertAdjacentHTML('beforeend', markup);
// }

// function createMarkup(data) {
//   return data
//     .map(
//       ({ id, name, image, description, price }) => `
//      <li class="offer-list__item product">
//         /* <a href="./product-${id}" class="product__link"> */
//         <a href="" class="product__link">
//           <img
//             loading="lazy"
//             src="${image}"
//             alt="${name}"
//             class="product__image"
//             width="290"
//             height="250"
//           />
//           <div class="product__overlay">
//             <p class="product__status hit">Xіт продажів</p>
//             <button type="button" class="product__favorite">
//               <svg width="28" height="25">
//                 <use href="./img/symbol-defs.svg#icon-empty-heart"></use>
//               </svg>
//             </button>
//           </div>
//           <div class="product__content">
//             <p class="product__text">
//               ${name}
//             </p>
//             <p class="product__price">${price} у.о.</p>
//             <button type="button" class="product__button button dark">
//               Замовити
//             </button>
//             <button type="button" class="product__button-one-click">
//               Придбати в 1 клік
//             </button>
//           </div>
//         </a>
//       </li>
//     `
//     )
//     .join('');
// }
