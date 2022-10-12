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
