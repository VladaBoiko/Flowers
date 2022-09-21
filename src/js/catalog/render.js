import { handleFavorite } from './favoriteHandle';
import { handleWatchedHistory } from './handleWatchedHistory';

export const render = (selector, markup) => {
  selector.insertAdjacentHTML('beforeend', markup);
  handleFavorite();
  handleWatchedHistory();
};
