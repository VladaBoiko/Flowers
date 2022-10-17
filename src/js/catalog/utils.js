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

export function addClass(element, cssClass) {
  if (!element.classList.contains(cssClass)) element.classList.add(cssClass);
}
export function removeClass(element, cssClass) {
  if (element.classList.contains(cssClass)) element.classList.remove(cssClass);
}

// ======================================
export function saveToLocalStorage(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log('save error-', error.message);
  }
}

export function loadFromLocalStorage(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? '' : JSON.parse(serializedState);
  } catch (error) {
    console.log('load error-', error.message);
  }
}
