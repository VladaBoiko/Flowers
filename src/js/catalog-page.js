import { APIGetData } from './catalog/fetch-cards';
import { createMarkup, clearData } from './catalog/markup';
import { render } from './catalog/render';
import { filterData, filterWords } from './catalog/filter';
import { smoothScroll } from './catalog/smoothScroll';

import { reviewsSwiper } from './reviews-slider';

reviewsSwiper.enabled = true;

// import data from '../products.json';

import getKey from './catalog/getKey';

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
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
    this.filterParams = {};
  },
  async renderData() {
    try {
      const data = await APIGetData.getData();

      const filteredData = filterData(data, this.filterParams);
      filteredData.length <= this.offset && loadMoreBtn.hide();
      this.totalPages = filteredData.length / this.offset;
      const slicedData = sliceData(filteredData, this.page, this.offset);

      const markup = createMarkup(slicedData);

      render(refs.catalogList, markup);
    } catch (error) {
      console.log(error);
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
      filterData[key].indexOf(value) === -1 && filterData[key].push(valueFormat);
    }
  });
  return filterData;
}

refs.form.reset();
catalogData.renderData();

refs.resetFormBtn.addEventListener('click', () => {
  catalogData.resetPage();
  clearData(refs.catalogList);
  refs.form.reset();
  loadMoreBtn.show();
  loadMoreBtn.enable();
  catalogData.renderData();
});

refs.form.addEventListener('change', () => {
  clearData(refs.catalogList);
  catalogData.resetPage();
  catalogData.filterParams = getCheckedCheckBox();
  catalogData.renderData();
  loadMoreBtn.show();
  loadMoreBtn.enable();
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
  if (catalogData.page >= catalogData.totalPages) {
    loadMoreBtn.hide();
  } else {
    loadMoreBtn.enable();
  }
  smoothScroll(refs.catalogList);
});

function sliceData(data, page, offset) {
  const totalPages = data.length / offset;
  const start = page * offset - offset;
  const end = start + offset;

  if (data.length > offset) {
    if (page < totalPages) {
      return data.slice(start, end);
    }
    return data.slice(start);
  }
  return data;
}
