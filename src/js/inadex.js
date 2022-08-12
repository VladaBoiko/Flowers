import { serverData } from './Api';

// const refs = {
//   root: document.querySelector('#root'),
// };

// const { root } = refs;

// async function data() {
//   try {
//     const data = await serverData();
//     const listGoods = await data.map(({ title, photo, price, id }) => {
//       return `<li data-id=${id}>
//   <img src=${photo} alt=${title} />
//   <p>${title}</p>
//   <p>${price} грн.</p>
//   <button type='button'>Купить</button>
// </li>`;
//     });
//     root.insertAdjacentHTML('beforeend', listGoods.join(''));
//   } catch (error) {
//     console.log('error');
//   }
// }

// data();
