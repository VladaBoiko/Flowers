import { APIGetData } from './fetch-cards';
import { createMarkup, clearData } from './catalog/markup';
import { handleFavorite } from './favoriteHandle';
import { loadFromLocalStorage } from './localStorage';

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
      console.log(product);
      return product;
    } catch {
      console.log('error');
    }
  });
}

// ========================================================================================

function addClass(element, cssClass) {
  if (!element.classList.contains(cssClass)) element.classList.add(cssClass);
}
function removeClass(element, cssClass) {
  if (element.classList.contains(cssClass)) element.classList.remove(cssClass);
}
