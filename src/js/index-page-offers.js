import { APIGetData } from './api/fetch-cards';
import { sections } from './catalog/filter';
import { handleFavorite } from './catalog/handleFavorite';
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

renderData();

async function renderData() {
  for (const offerSection in sections) {
    try {
      let data = null;

      if (sections[offerSection] !== sections.earlierWatched) {
        data = await APIGetData.getDataBySection(sections[offerSection]);
      } else {
        const earlierWatchedList = loadFromLocalStorage('EarlierWatched').join(',');
        data = await APIGetData.getDataByID(earlierWatchedList, 1, 4);
      }

      if (data) {
        const markup = createMarkup(data);
        refs[offerSection].insertAdjacentHTML('beforeend', markup);
      }
    } catch (error) {
      console.log(error);
    }
  }
  handleFavorite();
  handleWatchedHistory();
}
