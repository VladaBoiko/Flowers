import { APIGetData } from './fetch-cards';
import { createMarkup, clearData } from './catalog/markup';
import { handleFavorite } from './favoriteHandle';

import getKey from './catalog/getKey';

const refs = {
  resetFormBtn: document.querySelector('.filter-catalog__clear-all-btn'),
  form: document.querySelector('.filter-catalog'),
  catalogList: document.querySelector('.catalog-list'),
};

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
  params: '',
  page: 1,
  limit: 10,
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
    this.params = '';
  },
  async renderData() {
    try {
      await queryAndRender({ selector: this.selector, params: this.params, page: this.page, limit: this.limit });
      handleFavorite();
    } catch (error) {
      console.log(error);
    }
  },
};

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
  return `(${filterData.category.join('|')})`;
}

async function queryAndRender({ selector, params = '', page, limit }) {
  const searchParams = new URLSearchParams({
    filter: params,
    p: page,
    l: limit,
  }).toString();
  // console.log(searchParams);
  const data = await APIGetData.getData(searchParams);
  const markup = createMarkup(data);
  selector.insertAdjacentHTML('beforeend', markup);
}

refs.form.reset();
catalogData.renderData(refs.catalogList);

refs.resetFormBtn.addEventListener('click', () => {
  catalogData.resetPage();
  refs.form.reset();
  catalogData.renderData(refs.catalogList);
});

refs.form.addEventListener('change', () => {
  clearData(refs.catalogList);
  catalogData.resetPage();
  catalogData.params = getChececkedCheckBox();
  catalogData.renderData();
});

loadMoreBtn.element.addEventListener('click', () => {
  loadMoreBtn.disable();
  catalogData.incrementPage();
  catalogData.renderData();
  loadMoreBtn.enable();
});
