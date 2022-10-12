export function getKey(value, object) {
  let key = '';
  Object.entries(object).map(el => (el[1] === value ? (key = el[0]) : ''));
  return key;
}

// =================================

export function smoothScroll(cardSection) {
  const { height: cardHeight } = cardSection.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 1 + 10,
    behavior: 'smooth',
  });
}

// =======================================

function addClass(element, cssClass) {
  if (!element.classList.contains(cssClass)) element.classList.add(cssClass);
}
function removeClass(element, cssClass) {
  if (element.classList.contains(cssClass)) element.classList.remove(cssClass);
}
