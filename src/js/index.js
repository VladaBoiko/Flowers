import { serverData } from './api';

const refs = {
  offerSpecial: document.querySelector('.offer--special .offer__list'),
  dayOffer: document.querySelector('.offer--day .offer__list'),
  recommendOffer: document.querySelector('.offer--recommend .offer__list'),
  offerPlus: document.querySelector('.offer--plus .offer__list'),
};

renderData();

async function renderData() {
  try {
    const data = await serverData();
    let markup = createMarkup(data);
    refs.offerSpecial.insertAdjacentHTML('beforeend', markup);
    markup = createMarkup(data);
    refs.dayOffer.insertAdjacentHTML('beforeend', markup);
    markup = createMarkup(data);
    refs.recommendOffer.insertAdjacentHTML('beforeend', markup);
    markup = createMarkup(data);
    refs.offerPlus.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}

function createMarkup(data) {
  console.log(data);
  return data
    .map(
      ({ id, name, image, description, price }) => `
     <li class="offer-list__item product">
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
            <p class="product__status hit">Xіт продажів</p>
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
    `
    )
    .join('');
}

// https://postimg.cc/pyd3Wmv6 ][img]https://i.postimg.cc/pyd3Wmv6/VAL-8182-1200-3.jpg

// https://postimg.cc/RJqYXDGB [img]https://i.postimg.cc/RJqYXDGB/VAL-8182-1200-4.jpg

// https://postimg.cc/dk5XRY26 ][img]https://i.postimg.cc/dk5XRY26/VAL-8182-1200-5.jpg

// https://postimg.cc/Cd6XzwLL ][img]https://i.postimg.cc/Cd6XzwLL/VAL-8182-1200-6.jpg

// https://postimg.cc/ykg5R2kh ][img]https://i.postimg.cc/ykg5R2kh/VAL-8182-1200-7.jpg

// https://postimg.cc/0bT40ZwT ][img]https://i.postimg.cc/0bT40ZwT/VAL-8182-1200-8.jpg
