import { APIGetData } from './api/fetch-cards';
import { createMarkup } from './catalog/markup';
import { render, clearData } from './catalog/render';
import { filterWords } from './catalog/const';
import { smoothScroll } from './catalog/utils';

import { reviewsSwiper } from './reviews-slider';

reviewsSwiper.enabled = true;

import { getKey } from './catalog/utils';

// import throttle from 'lodash.throttle';
// const DELAY = 300;

const refs = {
  resetFormBtn: document.querySelector('.filter-catalog__clear-all-btn'),
  form: document.querySelector('.filter-catalog'),
  catalogList: document.querySelector('.catalog-list'),
};

const catalogData = {
  selector: refs.catalogList,
  filterParams: {},
  page: 1,
  totalPages: 1,
  offset: 9,
  sorting: 'rating,1',

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
    this.filterParams = {};
  },

  async renderData() {
    try {
      const data = await APIGetData.getDataByFilter(this.filterParams, this.page, this.offset, this.sorting);
      this.totalPages = data.totalPage;
      const markup = createMarkup(data.result);

      render(refs.catalogList, markup);

      if (this.page >= this.totalPages) {
        loadMoreBtn.hide();
      } else {
        loadMoreBtn.enable();
        loadMoreBtn.show();
      }
    } catch (error) {
      console.log('render data on catalog-page', error);
    }
  },
};

function getCheckedCheckBox() {
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
      const valueFormat = key === 'amount' || key === 'size' ? Number.parseInt(value) : value;

      if (key !== 'price') {
        filterData[key].indexOf(value) === -1 && filterData[key].push(valueFormat);
      } else {
        const price = el.value.split(',');

        filterData[key] = price;
      }
    }
  });

  const prepearedFilterParams = Object.entries(filterData).reduce((acc, item) => {
    let param = null;

    if (item[1].length > 0) {
      if (item[0] !== 'price') {
        param = { [item[0]]: item[1].join(',') };
      } else {
        param = { priseMin: item[1][0], priseMax: item[1][1] };
      }
    }

    return param ? { ...acc, ...param } : { ...acc };
  }, {});

  return prepearedFilterParams;
}

refs.form.reset();
catalogData.renderData();

refs.resetFormBtn.addEventListener('click', () => {
  catalogData.resetPage();
  clearData(refs.catalogList);
  refs.form.reset();
  catalogData.renderData();
});

// refs.form.addEventListener(
//   'change',
//   throttle(() => {
//     clearData(refs.catalogList);
//     catalogData.resetPage();
//     catalogData.filterParams = getCheckedCheckBox();
//     catalogData.renderData();
//   }),
//   DELAY
// );
refs.form.addEventListener('change', () => {
  clearData(refs.catalogList);
  catalogData.resetPage();
  catalogData.filterParams = getCheckedCheckBox();
  catalogData.renderData();
});

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

loadMoreBtn.element.addEventListener('click', () => {
  loadMoreBtn.disable();
  catalogData.incrementPage();
  catalogData.renderData();

  smoothScroll(refs.catalogList);
});
