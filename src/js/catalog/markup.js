import { loadFromLocalStorage } from './utils';
import { statuses } from './const';
import { getKey } from './utils';
import icons from '../../img/catalog/icon-fav.svg';

const favoriteList = loadFromLocalStorage('Favorites');

export const createMarkup = data => {
  return data
    .map(({ _id, name, image, price, status }) => {
      const keyStatus = getKey(status, statuses);
      return `<li class="offer-list__item product" id="${_id}">
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
            <button type="button" class="product__favorite ${isFav(_id)}">
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

function isFav(id) {
  return !favoriteList || !Array.isArray(favoriteList) || favoriteList.indexOf(id) === -1 ? '' : 'checked';
}
