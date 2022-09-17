import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';

const key = 'Favorites';

export function handleFavorite() {
  const favoriteBtns = document.querySelectorAll('.product__favorite');

  favoriteBtns.forEach(favoriteBtn =>
    favoriteBtn.addEventListener('click', event => {
      event.preventDefault();
      const productID = favoriteBtn.closest('.product').id;

      if (productID) {
        const savedListFav = loadFromLocalStorage(key);

        if (savedListFav === 'undefined') {
          const newListFav = [productID];
          saveToLocalStorage(key, newListFav);
        } else if (savedListFav.indexOf(productID) === -1) {
          savedListFav.push(productID);
          saveToLocalStorage(key, savedListFav);
        } else {
          savedListFav.splice(savedListFav.indexOf(productID), 1);
          saveToLocalStorage(key, savedListFav);
        }
      }

      favoriteBtn.classList.toggle('checked');
    })
  );
}
