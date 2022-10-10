import { handleFavorite } from './handleFavorite';
import { handleWatchedHistory } from './handleWatchedHistory';

export const render = (selector, markup) => {
  selector.insertAdjacentHTML('beforeend', markup);
  handleFavorite();
  handleWatchedHistory();
};
