import { APIGetData } from './catalog/fetch-cards';
import { handleFavorite } from './catalog/favoriteHandle';
import { createMarkup } from './catalog/markup';

const refs = {
  offerSpecial: document.querySelector('.offer--special .offer__list'),
  dayOffer: document.querySelector('.offer--day .offer__list'),
  recommendOffer: document.querySelector('.offer--recommend .offer__list'),
  offerPlus: document.querySelector('.offer--plus .offer__list'),
};

const sections = {
  offerSpecial: 'Спеціальна пропозиція',
  dayOffer: 'Пропозиція дня',
  recommendOffer: 'Рекомендуємо троянди',
  offerPlus: 'З квітами купують',
};

renderData();

async function renderData() {
  try {
    await queryAndRender('offerSpecial');
    await queryAndRender('dayOffer');
    await queryAndRender('recommendOffer');
    await queryAndRender('offerPlus');
    handleFavorite();
  } catch (error) {
    console.log(error);
  }
}

async function queryAndRender(sectiоn) {
  const searchParams = new URLSearchParams({
    filter: sections[sectiоn],
  }).toString();
  const data = await APIGetData.getData(searchParams);
  const markup = createMarkup(data);
  refs[sectiоn].insertAdjacentHTML('beforeend', markup);
}
