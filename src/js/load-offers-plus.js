<<<<<<< HEAD
import { APIGetData } from './catalog/fetch-cards';
import { handleFavorite } from './catalog/favoriteHandle';
=======
import { APIGetData } from './api/fetch-cards';
// import { handleFavorite } from './catalog/handleFavorite';
import { createMarkup } from './catalog/markup';
import { filterBySection, sections } from './catalog/filter';

const refs = {
  offerPlus: document.querySelector('.offer--plus .offer__list'),
};

renderData();

async function renderData() {
  try {
    const data = await APIGetData.getData();
    const filteredData = [...filterBySection(data, sections.offerPlus)].slice(0, 4);
    const markup = createMarkup(filteredData);
    refs.offerPlus.insertAdjacentHTML('beforeend', markup);

    // handleFavorite();
  } catch (error) {
    console.log(error);
  }
}
