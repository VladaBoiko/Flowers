<<<<<<< HEAD
import { APIGetData } from './catalog/fetch-cards';
import { createMarkup, clearData } from './catalog/markup';
import { render } from './catalog/render';
import { handleFavorite } from './catalog/favoriteHandle';
import { loadFromLocalStorage } from './catalog/localStorage';
import { filterById } from './catalog/filter';

const refs = {
  titleWrapper: document.querySelector('.offer__title-wrapper'),
  btn: document.querySelector('.favorites__button'),
  list: document.querySelector('.offer__list--fav'),
};

const favotireListFromLocalStorage = loadFromLocalStorage('Favorites');

if (favotireListFromLocalStorage === 'undefined' || favotireListFromLocalStorage.length === 0) {
  refs.titleWrapper.children[0].textContent = 'В обраному поки що нічого нема';
  refs.btn.textContent = 'Перейти на головну';
  refs.btn.href = './index.html';
  removeClass(refs.titleWrapper.children[1], 'hidden');
  removeClass(refs.btn, 'favorites__button--centered');
} else {
  refs.titleWrapper.children[0].textContent = 'Обране';
  refs.btn.textContent = 'Перейти в каталог';
  refs.btn.href = './catalog.html';
  addClass(refs.titleWrapper.children[1], 'hidden');
  addClass(refs.btn, 'favorites__button--centered');

  renderData();
}

async function renderData() {
  try {
    const data = await APIGetData.getData();
    const filteredData = filterById(data, favotireListFromLocalStorage);
    const markup = createMarkup(filteredData);
    render(refs.list, markup);
  } catch (error) {
    console.log(error);
  }
}
// ========================================================================================

function addClass(element, cssClass) {
  if (!element.classList.contains(cssClass)) element.classList.add(cssClass);
}
function removeClass(element, cssClass) {
  if (element.classList.contains(cssClass)) element.classList.remove(cssClass);
}
=======
import { APIGetData } from './api/fetch-cards';
import { createMarkup } from './catalog/markup';
import { render, clearData } from './catalog/render';
import { addClass, removeClass, loadFromLocalStorage } from './catalog/utils';

loadDataFavoritePage();

export function loadDataFavoritePage() {
  if (document.querySelector('.favorites.offer')) {
    const refs = {
      titleWrapper: document.querySelector('.offer__title-wrapper'),
      btn: document.querySelector('.favorites__button'),
      list: document.querySelector('.offer__list--fav'),
    };

    const favotireListFromLocalStorage = loadFromLocalStorage('Favorites');

    if (
      !favotireListFromLocalStorage ||
      favotireListFromLocalStorage.length === 0 ||
      !Array.isArray(favotireListFromLocalStorage)
    ) {
      clearData(refs.list);

      refs.titleWrapper.children[0].textContent = 'В обраному поки що нічого нема';
      refs.btn.textContent = 'Перейти на головну';
      refs.btn.href = './index.html';
      removeClass(refs.titleWrapper.children[1], 'hidden');
      removeClass(refs.btn, 'favorites__button--centered');
    } else {
      refs.titleWrapper.children[0].textContent = 'Обране';
      refs.btn.textContent = 'Перейти в каталог';
      refs.btn.href = './catalog.html';
      addClass(refs.titleWrapper.children[1], 'hidden');
      addClass(refs.btn, 'favorites__button--centered');

      renderData();
    }

    async function renderData() {
      try {
        const data = await APIGetData.getDataByID(favotireListFromLocalStorage.join(','));
        const markup = createMarkup(data);
        clearData(refs.list);
        render(refs.list, markup);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
