const filterName = document.querySelectorAll('.filter-list__text');

filterName.forEach(x => {
  x.addEventListener('click', filter);
});

export function filter(event) {
  filterName.forEach(x => {
    x.classList.remove('filter-list__text--active');
  });

  const element = event.srcElement;
  element.classList.add('filter-list__text--active');
}
