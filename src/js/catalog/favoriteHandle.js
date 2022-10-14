<<<<<<< HEAD:src/js/catalog/favoriteHandle.js
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';
=======
import { saveToLocalStorage, loadFromLocalStorage } from './utils';
// import { loadDataFavoritePage } from '../favorite-page';
>>>>>>> 723618d (fix 4.02):src/js/catalog/handleFavorite.js

const key = 'Favorites';

export function handleFavorite() {
  const favoriteBtns = document.querySelectorAll('.product__favorite');

  favoriteBtns.forEach(favoriteBtn =>
    favoriteBtn.addEventListener('click', event => {
      event.preventDefault();
      const productID = favoriteBtn.closest('.product').id;

      if (productID) {
        favoriteBtn.classList.toggle('checked');

        const savedListFav = loadFromLocalStorage(key);
        let newListFav = null;

        if (!savedListFav || !Array.isArray(savedListFav)) {
          newListFav = [productID];
          saveToLocalStorage(key, newListFav);
          return;
        }

<<<<<<< HEAD:src/js/catalog/favoriteHandle.js
      favoriteBtn.classList.toggle('checked');
=======
        if (savedListFav.indexOf(productID) === -1) {
          newListFav = [...savedListFav, productID];
          saveToLocalStorage(key, newListFav);
          return;
        }
        if (savedListFav.indexOf(productID) > -1) {
          newListFav = savedListFav.filter(favId => favId !== productID);
          saveToLocalStorage(key, newListFav);

          if (!favoriteBtn.classList.contains('checked') && document.querySelector('.favorites.offer')) {
            // loadDataFavoritePage();
          }
          return;
        }
      }
>>>>>>> 723618d (fix 4.02):src/js/catalog/handleFavorite.js
    })
  );
}
