import debounce from 'lodash.debounce';
import { search } from './API/apiReviews';
import { render } from './catalog/render';
import { filter } from './reviews/filter';

const form1 = document.querySelector('#search');
const form2 = document.querySelector('#search2');
const box1 = document.querySelector('#search-box-1');
const box2 = document.querySelector('#search-box-2');

if (window.innerWidth > 767.9) {
  form1.addEventListener(
    'input',
    debounce(e => change(e), 500)
  );
} else {
  form2.addEventListener(
    'input',
    debounce(e => change(e), 500)
  );
}

window.addEventListener(
  'resize',
  debounce(() => {
    form1.removeEventListener(
      'input',
      debounce(e => change(e), 500)
    );
    form2.removeEventListener(
      'input',
      debounce(e => change(e), 500)
    );
    if (window.innerWidth < 767.9) {
      form2.addEventListener(
        'input',
        debounce(e => change(e), 500)
      );
    } else {
      form1.addEventListener(
        'input',
        debounce(e => change(e), 500)
      );
    }
  }, 500)
);

async function change(e) {
  const value = e.target.value;

  form1.value = value;
  form2.value = value;

  if (value.length < 3) {
    return;
  }

  const data = await search(value);

  if (data.length === 0) {
    box1.innerHTML = '<span class="search-list__elements">По вашому запиту нічог не знайдено</span>';
    box2.innerHTML = '<span class="search-list__elements">По вашому запиту нічог не знайдено</span>';
    return;
  }

  const renderSearch = data
    .filter((x, i) => i < 7)
    .map(flower => {
      return `<span class="search-list__elements" data-searchId="${flower._id}">${flower.name}</span>`;
    });

  box1.innerHTML = renderSearch.join('');
  box2.innerHTML = renderSearch.join('');
}
