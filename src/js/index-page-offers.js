import { APIGetData } from './api/fetch-cards';
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

// async function renderData() {
//   try {
//     const data = await APIGetData.getData();

//     for (const offerSection in sections) {
//       const filteredData =
//         sections[offerSection] !== sections.earlierWatched
//           ? filterBySection(data, sections[offerSection])
//           : filterBySection(data, sections[offerSection], earlierWatchedList);
//       const markup = createMarkup(filteredData);
//       refs[offerSection].insertAdjacentHTML('beforeend', markup);
//     }
//     handleFavorite();
//     handleWatchedHistory();
//   } catch (error) {
//     console.log(error);
//   }
// }

async function renderData() {
  for (const offerSection in sections) {
    try {
      let data = null;
      console.log(
        'sections[offerSection] !== sections.earlierWatched',
        sections[offerSection] !== sections.earlierWatched
      );
      if (sections[offerSection] !== sections.earlierWatched) {
        data = await APIGetData.getDataBySection(sections[offerSection]);
      } else {
        // тут треба отримати айді катрок з локал стораджу та зробити запит
        const earlierWatchedList = ['63406e31db68fbea5fead581', '63406e31db68fbea5fead567'].join(',');
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
