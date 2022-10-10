import { APIGetData } from './api/fetch-cards';
import { createMarkup } from './catalog/markup';
import { render } from './catalog/render';
import { handleFavorite } from './catalog/handleFavorite';
import { loadFromLocalStorage } from './catalog/localStorage';

const refs = {
  titleWrapper: document.querySelector('.offer__title-wrapper'),
  btn: document.querySelector('.favorites__button'),
  list: document.querySelector('.offer__list--fav'),
};

export const loadDataFavoritePage = () => {
  const favotireListFromLocalStorage = loadFromLocalStorage('Favorites').join(',');

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
    handleFavorite();

    const favoriteBtns = document.querySelectorAll('.product__favorite');
    favoriteBtns.forEach(favoriteBtn => {
      favoriteBtn.addEventListener('click', event => {
        event.preventDefault();
        if (favoriteBtn.classList.contains('checked')) {
          console.log('first', favoriteBtn.classList.contains('checked'));
        }
      });
    });
  }

  async function renderData() {
    try {
      data = await APIGetData.getDataByID(favotireListFromLocalStorage);
      const markup = createMarkup(data);
      render(refs.list, markup);
    } catch (error) {
      console.log(error);
    }
  }
};

loadDataFavoritePage();

// ========================================================================================

function addClass(element, cssClass) {
  if (!element.classList.contains(cssClass)) element.classList.add(cssClass);
}
function removeClass(element, cssClass) {
  if (element.classList.contains(cssClass)) element.classList.remove(cssClass);
}
