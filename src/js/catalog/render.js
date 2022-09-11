export const render = (selector, markup) => {
  selector.insertAdjacentHTML('beforeend', markup);
};
