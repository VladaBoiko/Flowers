import { APIGetData } from './api/fetch-cards';
import { sections } from './catalog/const';
import { handleFavorite } from './catalog/handleFavorite';
import { handleWatchedHistory } from './catalog/handleWatchedHistory';

import { createMarkup } from './catalog/markup';
import { addClass, removeClass, loadFromLocalStorage } from './catalog/utils';

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
        const localStorageData = loadFromLocalStorage('EarlierWatched');

        if (localStorageData) {
          const earlierWatchedList = localStorageData.join(',');
          data = await APIGetData.getDataByID(earlierWatchedList, 1, 4);
          removeClass(refs.earlierWatched.closest('.offer'), 'hidden');
        } else {
          addClass(refs.earlierWatched.closest('.offer'), 'hidden');
        }
      }

      if (data) {
        const markup = createMarkup(data);
        refs[offerSection].insertAdjacentHTML('beforeend', markup);
      }
    } catch (error) {
      console.log('render-data on index-page', error);
    }
  }
  handleFavorite();
  handleWatchedHistory();
}
