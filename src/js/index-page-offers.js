import { APIGetData } from './catalog/fetch-cards';
import { handleFavorite } from './catalog/favoriteHandle';
import { handleWatchedHistory } from './catalog/handleWatchedHistory';
import { loadFromLocalStorage } from './catalog/localStorage';
import { createMarkup } from './catalog/markup';

const refs = {
  offerSpecial: document.querySelector('.offer--special .offer__list'),
  dayOffer: document.querySelector('.offer--day .offer__list'),
  recommendOffer: document.querySelector('.offer--recommend .offer__list'),
  offerPlus: document.querySelector('.offer--plus .offer__list'),
  earlierWatched: document.querySelector('.offer--earlier-watched .offer__list'),
};

const sections = {
  offerSpecial: 'Спеціальна пропозиція',
  dayOffer: 'Пропозиція дня',
  recommendOffer: 'Рекомендуємо троянди',
  offerPlus: 'З квітами купують',
  earlierWatched: 'Раніше переглянуто',
};

const earlierWatchedList = loadFromLocalStorage('EarlierWatched');

renderData();

async function renderData() {
  try {
    const data = await APIGetData.getData();

    for (section in sections) {
      let filteredData = null;
      if (sections[section] !== sections.earlierWatched) {
        filteredData = filterProducts(data, sections[section]);
      } else {
        filteredData = filterProducts(data, sections[section], earlierWatchedList);
      }
      const markup = createMarkup(filteredData);
      refs[section].insertAdjacentHTML('beforeend', markup);
    }
    handleFavorite();
    handleWatchedHistory();
  } catch (error) {
    console.log(error);
  }
}

function filterProducts(data, section, otherData) {
  let filteredData = [];
  if (section !== sections.earlierWatched) {
    filteredData = [...data].filter(card => card.section === section).sort((a, b) => b.rating - a.rating);
  } else if (otherData) {
    filteredData = [...data].filter(card => otherData.indexOf(card.id) > -1).sort((a, b) => b.rating - a.rating);
  }
  if (filteredData && section === sections.earlierWatched && filteredData.length > 4) {
    return filteredData.slice(0, 4);
  }
  if (filteredData && filteredData.length > 8) {
    return filteredData.slice(0, 8);
  }
  return filteredData;
}
