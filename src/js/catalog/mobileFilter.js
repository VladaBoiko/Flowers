(() => {
  const filter = document.querySelector('[data-filter]');
  const showFilterBtn = document.querySelector('[data-filter-btn="open"]');
  const hideFilterBtn = document.querySelector('[data-filter-btn="close"]');
  const body = document.querySelector('body');
  const backdrop = document.querySelector('[data-filter-backdrop]');

  const onEscKeyPress = evt => {
    if (evt.code === 'Escape') {
      toggleFilter();
      showFilterBtn.blur();
    }
  };

  const toggleFilter = () => {
    const isFilterOpen = showFilterBtn.getAttribute('aria-expanded') === 'true' || false;
    showFilterBtn.setAttribute('aria-expanded', !isFilterOpen);
    filter.classList.toggle('is-filter-open');
    body.classList.toggle('noscroll');
    if (isFilterOpen) {
      window.removeEventListener('keydown', onEscKeyPress);
    } else {
      window.addEventListener('keydown', onEscKeyPress);
    }
  };

  showFilterBtn.addEventListener('click', toggleFilter);
  hideFilterBtn.addEventListener('click', toggleFilter);
  backdrop.addEventListener('click', toggleFilter);

  window.matchMedia('(min-width: 1339.98px)').addEventListener('change', e => {
    if (!e.matches) return;
    filter.classList.remove('is-filter-open');
    showFilterBtn.setAttribute('aria-expanded', false);
    body.classList.remove('noscroll');
  });
})();
