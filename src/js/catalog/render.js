import { handleFavorite } from './handleFavorite';
import { handleWatchedHistory } from './handleWatchedHistory';

export const render = (selector, markup) => {
  selector.insertAdjacentHTML('beforeend', markup);
  handleFavorite();
  handleWatchedHistory();
};

export const clearData = list => {
  list.innerHTML = '';
};
