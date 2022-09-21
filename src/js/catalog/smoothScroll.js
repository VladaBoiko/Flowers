export function smoothScroll(cardSection) {
  const { height: cardHeight } = cardSection.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 1 + 10,
    behavior: 'smooth',
  });
}
