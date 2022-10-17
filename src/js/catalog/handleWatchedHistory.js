import { saveToLocalStorage, loadFromLocalStorage } from './utils';

const key = 'EarlierWatched';
const currentCardId = 'CurrentCardID';

export function handleWatchedHistory() {
  const products = document.querySelectorAll('.product');

  products.forEach(product =>
    product.addEventListener('click', evt => {
      // event.preventDefault();
      const productId = product.id;
      if (
        !(
          ((evt.target.nodeName === 'svg' || evt.target.nodeName === 'use') &&
            evt.target.closest('.product__favorite')) ||
          evt.target.classList.contains('product__favorite')
        )
      ) {
        saveToLocalStorage(currentCardId, productId);
      }

      if (productId) {
        const savedList = loadFromLocalStorage(key);

        if (!savedList) {
          const newList = [productId];
          saveToLocalStorage(key, newList);
        } else if (savedList.indexOf(productId) === -1) {
          savedList.push(productId);
          saveToLocalStorage(key, savedList);
        }
      }
    })
  );
}
