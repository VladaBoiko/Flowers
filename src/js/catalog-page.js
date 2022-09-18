import { APIGetData } from './catalog/fetch-cards';
import { createMarkup, clearData } from './catalog/markup';
import { render } from './catalog/render';
import { handleFavorite } from './catalog/favoriteHandle';
import { handleWatchedHistory } from './catalog/handleWatchedHistory';
import { filterBy } from './catalog/filter';

// import data from '../products.json';

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
  data: [],
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
      this.data = await APIGetData.getData();
      const filterKeys = Object.keys(filterWords);

      if (Object.keys(this.filterParams).length) {
        console.log(filterBy(data), this.filterParams[filterKeys[0]], filterKeys[0]);
        const filterByCategory = this.data.filter(card => {
          if (this.filterParams[filterKeys[0]].length === 0) {
            return true;
          }
          return this.filterParams[filterKeys[0]].includes(card[filterKeys[0]]);
        });
        console.log(filterByCategory);

        const filterByType = filterByCategory.filter(card => {
          if (this.filterParams[filterKeys[1]].length === 0) {
            return true;
          }
          return this.filterParams[filterKeys[1]].includes(card[filterKeys[1]]);
        });

        const filterByColor = filterByType.filter(card => {
          if (this.filterParams[filterKeys[2]].length === 0) {
            return true;
          }
          return this.filterParams[filterKeys[2]].includes(card[filterKeys[2]]);
        });

        const filterByAmount = filterByColor.filter(card => {
          if (this.filterParams[filterKeys[3]].length === 0) {
            return true;
          }
          return this.filterParams[filterKeys[3]].includes(card[filterKeys[3]]);
        });

        const filterBySize = filterByAmount.filter(card => {
          if (this.filterParams[filterKeys[4]].length === 0) {
            return true;
          }
          return this.filterParams[filterKeys[4]].includes(card[filterKeys[4]]);
        });

        const filterByForm = filterBySize.filter(card => {
          if (this.filterParams[filterKeys[5]].length === 0) {
            return true;
          }
          return this.filterParams[filterKeys[5]].includes(card[filterKeys[5]]);
        });

        const filterByPrice = filterByForm.filter(card => {
          if (this.filterParams[filterKeys[6]].length === 0) {
            return true;
          }

          let cardPriceRange = '';
          if (card.price < 30) {
            cardPriceRange = 'до 30';
          } else if (card.price >= 30 && card.price < 45) {
            cardPriceRange = '30 - 45';
          } else if (card.price >= 45 && card.price < 65) {
            cardPriceRange = '45 - 65';
          } else if (card.price >= 65 && card.price < 80) {
            cardPriceRange = '65 - 80';
          } else if (card.price >= 80) {
            cardPriceRange = 'від 80';
          }

          return this.filterParams[filterKeys[6]].includes(cardPriceRange);
        });

        this.data = filterByPrice;
      }

      const markup = createMarkup(this.data);
      render(refs.catalogList, markup);
      // refs.catalogList.insertAdjacentHTML('beforeend', markup);
      handleFavorite();
      handleWatchedHistory();
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
  refs.form.reset();
  catalogData.renderData();
});

refs.form.addEventListener('change', () => {
  clearData(refs.catalogList);
  catalogData.resetPage();
  catalogData.filterParams = getChececkedCheckBox();
  catalogData.renderData();
});

// loadMoreBtn.element.addEventListener('click', () => {
//   loadMoreBtn.disable();
//   catalogData.incrementPage();
//   catalogData.renderData();
//   loadMoreBtn.enable();
// });
