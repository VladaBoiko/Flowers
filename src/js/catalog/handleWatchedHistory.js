import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';

const key = 'EarlierWatched';

export function handleWatchedHistory() {
  const products = document.querySelectorAll('.product');

  products.forEach(product =>
    product.addEventListener('click', event => {
      // event.preventDefault();

      const productID = product.id;
      if (productID) {
        const savedListFav = loadFromLocalStorage(key);

        if (savedListFav === 'undefined') {
          const newListFav = [productID];
          saveToLocalStorage(key, newListFav);
        } else if (savedListFav.indexOf(productID) === -1) {
          savedListFav.push(productID);
          saveToLocalStorage(key, savedListFav);
        }
      }
    })
  );
}
