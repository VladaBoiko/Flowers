import { APIGetData } from './catalog/fetch-cards';
import { createMarkup, clearData } from './catalog/markup';
import { render } from './catalog/render';
import { handleFavorite } from './catalog/favoriteHandle';
import data from '../products.json';

import getKey from './catalog/getKey';

const refs = {
  resetFormBtn: document.querySelector('.filter-catalog__clear-all-btn'),
  form: document.querySelector('.filter-catalog'),
  catalogList: document.querySelector('.catalog-list'),
};

// =====================================================================
const loadMoreBtn = {
  element: document.querySelector('.catalog__btn'),
  className: 'hidden',
  disable() {
    this.element.disabled = true;
  },
  enable() {
    this.element.disabled = false;
  },
  hide() {
    this.element.classList.add(this.className);
  },
  show() {
    this.element.classList.remove(this.className);
  },
};

const filterWords = {
  category: 'Категорія',
  sort: 'Вид',
  color: 'Колір',
  amount: 'Кількість',
  size: 'Розмір',
  form: 'Форма букету',
  price: 'Ціна',
};

const catalogData = {
  selector: refs.catalogList,
  filterParams: {},
  page: 1,
  limit: 10,
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
    this.filterParams = {};
  },
  async renderData() {
    try {
      // const data = await APIGetData.getData();

      // console.log(filterData(data, this.filterParams));

      

      // const filteredData = filterProducts(data, refs.catalogList);
      // const markup = createMarkup(filteredData);
      // refs.catalogList.insertAdjacentHTML('beforeend', markup);
      handleFavorite();
    } catch (error) {
      console.log(error);
    }

    // try {
    //   await queryAndRender({ selector: this.selector, params: this.params, page: this.page, limit: this.limit });
    //   handleFavorite();
    // } catch (error) {
    //   console.log(error);
    // }
  },
};

function filterData(data, filterParams) {
  const filter = Object.entries(filterParams);
  if (!filter.length) {
    return;
  }
  const result = data
    .filter(el => filterCheck(filter[0][1], el[filter[0][0]]))
    .filter(el => filterCheck(filter[1][1], el[filter[1][0]]))
    .filter(el => filterCheck(filter[2][1], el[filter[2][0]]))
    .filter(el => filterCheck(filter[3][1], el[filter[3][0]]))
    .filter(el => filterCheck(filter[4][1], el[filter[4][0]]))
    .filter(el => filterCheck(filter[5][1], el[filter[5][0]]))
    .filter(el => filterCheck(filter[6][1], el[filter[6][0]]));

  return result;
}

function filterCheck(arr, el) {
  if (!arr.length) {
    return true;
  }
  return arr.includes(el);
}

function getChececkedCheckBox() {
  const filterData = {
    category: [],
    sort: [],
    color: [],
    amount: [],
    size: [],
    form: [],
    price: [],
  };
  [...refs.form].map(el => {
    if (el.nodeName === 'INPUT' && el.checked) {
      const param = el.parentElement.parentElement.previousElementSibling.textContent;
      const value = el.nextElementSibling.textContent;

      const key = getKey(param, filterWords);

      filterData[key].indexOf(value) === -1 && filterData[key].push(value);
    }
  });
  return filterData;
  // return `(${filterData.category.join('|')})`;
}

// async function queryAndRender({ selector, params = '', page, limit }) {
//   const searchParams = new URLSearchParams({
//     filter: params,
//     p: page,
//     l: limit,
//   }).toString();
//   // console.log(searchParams);
//   const data = await APIGetData.getData(searchParams);
//   const markup = createMarkup(data);
//   render(selector, markup);
// }

refs.form.reset();
catalogData.renderData();

refs.resetFormBtn.addEventListener('click', () => {
  catalogData.resetPage();
  refs.form.reset();
  catalogData.renderData();
});

refs.form.addEventListener('change', () => {
  clearData(refs.catalogList);
  catalogData.resetPage();
  catalogData.filterParams = getChececkedCheckBox();
  catalogData.renderData();
});

loadMoreBtn.element.addEventListener('click', () => {
  loadMoreBtn.disable();
  catalogData.incrementPage();
  catalogData.renderData();
  loadMoreBtn.enable();
});
