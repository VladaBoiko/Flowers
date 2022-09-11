import { APIGetData } from './catalog/fetch-cards';
import { createMarkup, clearData } from './catalog/markup';
import { render } from './catalog/render';
import { handleFavorite } from './catalog/favoriteHandle';
import { loadFromLocalStorage } from './catalog/localStorage';

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

  const listFavProducts = favotireListFromLocalStorage.map(async id => {
    try {
      const product = await APIGetData.getDataByID(id);
      return product;
    } catch {
      console.log('error');
    }
  });
  Promise.all(listFavProducts)
    .then(result => {
      return result;
    })
    .then(result => {
      console.log('result', result);
      const markup = createMarkup(result);
      console.log('1', markup);
      // console.log('2', result);
      render(refs.list, result);
    })
    .catch(console.error);
}

// ========================================================================================

function addClass(element, cssClass) {
  if (!element.classList.contains(cssClass)) element.classList.add(cssClass);
}
function removeClass(element, cssClass) {
  if (element.classList.contains(cssClass)) element.classList.remove(cssClass);
}
