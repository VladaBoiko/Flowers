import { APIGetData } from './fetch-cards';
// const axios = require('axios').default;

// const instance = axios.create({
//   baseURL: 'https://62f9492f3eab3503d1e324fd.mockapi.io/',
// });

// const APIGetData = {
//   async getData(params) {
//     const response = await instance.get(`/products/?${params}`);
//     const data = await response.data;
//     return data;
//   },
// };

const refs = {
  resetFormBtn: document.querySelector('.filter-catalog__clear-all-btn'),
  form: document.querySelector('.filter-catalog'),
  catalogList: document.querySelector('.catalog-list'),
};

renderData(refs.catalogList);

refs.form.reset();

refs.resetFormBtn.addEventListener('click', () => refs.form.reset());

refs.form.addEventListener('change', () => {
  clearData(refs.catalogList);
  renderData(refs.catalogList, getChececkedCheckBox().join('|'));
});

function getChececkedCheckBox() {
  return [...refs.form].reduce((acc, el) => {
    if (el.nodeName === 'INPUT' && el.checked) {
      const value = el.nextElementSibling.textContent;
      return [...acc, value];
    } else {
      return [...acc];
    }
  }, []);
}

async function renderData(selector, params) {
  try {
    await queryAndRender(selector, params);
  } catch (error) {
    console.log(error);
  }
}

async function queryAndRender(list, params = '') {
  console.log(params);
  const searchParams = new URLSearchParams({
    filter: params,
    p: 1,
    l: 3,
  }).toString();
  console.log(searchParams);
  const data = await APIGetData.getData(searchParams);
  const markup = createMarkup(data);
  list.insertAdjacentHTML('beforeend', markup);
}

function createMarkup(data) {
  return data
    .map(
      ({ id, name, image, description, price }) => `
     <li class="offer-list__item product">
        /* <a href="./product-${id}" class="product__link"> */
        <a href="" class="product__link">
          <img
            loading="lazy"
            src="${image}"
            alt="${name}"
            class="product__image"
            width="290"
            height="250"
          />
          <div class="product__overlay">
            <p class="product__status hit">Xіт продажів</p>
            <button type="button" class="product__favorite">
              <svg width="28" height="25">
                <use href="./img/symbol-defs.svg#icon-empty-heart"></use>
              </svg>
            </button>
          </div>
          <div class="product__content">
            <p class="product__text">
              ${name}
            </p>
            <p class="product__price">${price} у.о.</p>
            <button type="button" class="product__button button dark">
              Замовити
            </button>
            <button type="button" class="product__button-one-click">
              Придбати в 1 клік
            </button>
          </div>
        </a>
      </li>
    `
    )
    .join('');
}

function clearData(list) {
  list.innerHTML = '';
}
