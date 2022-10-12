import { loadFromLocalStorage } from './localStorage';
import getKey from './getKey';
import icons from '../../img/catalog/icon-fav.svg';

const statuses = {
  hit: 'Xіт продажу',
  absent: 'Немає в наявності',
  new: 'Новинка',
};
const favoriteList = loadFromLocalStorage('Favorites');
// console.log(favoriteList);

export const createMarkup = data => {
  return data
    .map(({ id, name, image, price, status }) => {
      const keyStatus = getKey(status, statuses);
      return `<li class="offer-list__item product" id="${id}">
        <a href="./good-card.html" class="product__link">
          <img
            loading="lazy"
            src="${image}"
            alt="${name}"
            class="product__image"
            width="290"
            height="250"
          />
          <div class="product__overlay">
            <p class="product__status ${keyStatus}">${status}</p>
            <button type="button" class="product__favorite ${isFav(id)}">
              <svg width="34" height="34">
                <use href="${icons}#icon-fav"></use>
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
    `;
    })
    .join('');
};

export const clearData = list => {
  list.innerHTML = '';
};

function isFav(id) {
  return favoriteList.indexOf(id) === -1 ? '' : 'checked';
}
