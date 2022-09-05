const statuses = {
  hit: 'Xіт продажу',
  absent: 'Немає в наявності',
  new: 'Новинка',
};

function getKeyStatus(status) {
  let keyStatus = '';
  Object.entries(statuses).map(el => (el[1] === status ? (keyStatus = el[0]) : ''));
  return keyStatus;
}

export const createMarkup = data => {
  return data
    .map(({ id, name, image, price, status }) => {
      const keyStatus = getKeyStatus(status);
      return `<li class="offer-list__item product">
        <a href="./product-${id}" class="product__link">
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
            <button type="button" class="product__favorite">
              <svg width="28" height="25">
                <use href="./img/symbol-defs.svg#icon-empty-heart"></use>
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
