import { APIGetData } from './api/fetch-cards';
// import { handleFavorite } from './catalog/handleFavorite';
import { createMarkup } from './catalog/markup';
import { sections } from './catalog/const';

const refs = {
  offerPlus: document.querySelector('.offer--plus .offer__list'),
};

renderData();

async function renderData() {
  try {
    const data = await APIGetData.getDataBySection(sections.offerPlus, 1, 4);
    const markup = createMarkup(data);
    refs.offerPlus.insertAdjacentHTML('beforeend', markup);

    // handleFavorite();
  } catch (error) {
    console.log(error);
  }
}
