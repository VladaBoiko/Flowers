import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';

const keyFav = 'Favorites';

export function handleFavorite() {
  const favoriteBtns = document.querySelectorAll('.product__favorite');

  favoriteBtns.forEach(favoriteBtn =>
    favoriteBtn.addEventListener('click', event => {
      event.preventDefault();
      const productID = favoriteBtn.closest('.product').id;

      if (productID) {
        const savedListFav = loadFromLocalStorage(keyFav);

        if (savedListFav === 'undefined') {
          const newListFav = [productID];
          saveToLocalStorage(keyFav, newListFav);
        } else if (savedListFav.indexOf(productID) === -1) {
          savedListFav.push(productID);
          saveToLocalStorage(keyFav, savedListFav);
        } else {
          savedListFav.splice(savedListFav.indexOf(productID), 1);
          saveToLocalStorage(keyFav, savedListFav);
        }
      }

      favoriteBtn.classList.toggle('checked');
    })
  );
}
