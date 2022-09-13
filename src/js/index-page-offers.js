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
    const data = await APIGetData.getData();

    for (section in sections) {
      const filteredData = filterProductsBySection(data, sections[section]);
      console.log(filteredData);

      const markup = createMarkup(filteredData);
      refs[section].insertAdjacentHTML('beforeend', markup);
    }
    handleFavorite();
  } catch (error) {
    console.log(error);
  }
}

function filterProductsBySection(data, section) {
  console.log(section);
  const filteredData = [...data].filter(card => card.section === section).sort((a, b) => b.rating - a.rating);
  if (section === 'З квітами купують' && filteredData.length > 4) {
    return filteredData.slice(0, 4);
  }
  if (filteredData.length > 8) {
    return filteredData.slice(0, 8);
  }
  return filteredData;
}
