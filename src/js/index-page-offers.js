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
console.log(Array.from(sections));

renderData();

async function renderData() {
  try {
    const data = await APIGetData.getData();

    for (section in sections) {
      const filteredData = filterProductsBySection(data, sections[section]);
      const markup = createMarkup(filteredData);
      refs[section].insertAdjacentHTML('beforeend', markup);
    }
    handleFavorite();
  } catch (error) {
    console.log(error);
  }
}

function filterProductsBySection(data, section) {
  return data.filter(card => card.section === section);
}
