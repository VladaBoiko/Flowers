import { APIGetData } from './catalog/fetch-cards';
import { filterBySection, sections } from './catalog/filter';
import { handleFavorite } from './catalog/favoriteHandle';
import { handleWatchedHistory } from './catalog/handleWatchedHistory';
import { loadFromLocalStorage } from './catalog/localStorage';
import { createMarkup } from './catalog/markup';

import { heroSwiper } from './hero-slider';
import { reviewsSwiper } from './reviews-slider';
import { heroModal } from './hero-modal';

heroSwiper.enabled = true;
reviewsSwiper.enabled = true;
heroModal(heroSwiper);

const refs = {
  offerSpecial: document.querySelector('.offer--special .offer__list'),
  dayOffer: document.querySelector('.offer--day .offer__list'),
  recommendOffer: document.querySelector('.offer--recommend .offer__list'),
  offerPlus: document.querySelector('.offer--plus .offer__list'),
  earlierWatched: document.querySelector('.offer--earlier-watched .offer__list'),
};

const earlierWatchedList = loadFromLocalStorage('EarlierWatched');

renderData();

async function renderData() {
  try {
    const data = await APIGetData.getData();
    console.log(data);
    // for (const offerSection in sections) {
    //   const filteredData =
    //     sections[offerSection] !== sections.earlierWatched
    //       ? filterBySection(data, sections[offerSection])
    //       : filterBySection(data, sections[offerSection], earlierWatchedList);

    //   const markup = createMarkup(filteredData);
    //   refs[offerSection].insertAdjacentHTML('beforeend', markup);
    // }
    handleFavorite();
    handleWatchedHistory();
  } catch (error) {
    console.log(error);
  }
}
