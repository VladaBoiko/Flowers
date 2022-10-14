import debounce from 'lodash.debounce';
import { search } from './api/apiReviews';

const form1 = document.querySelector('#search');
const form2 = document.querySelector('#search2');
const box1 = document.querySelector('#search-box-1');
const box2 = document.querySelector('#search-box-2');

let data = [];

window.addEventListener('keydown', onClickEnter);
document.addEventListener('click', onClickToVoid);

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
  const value = e.target.value.trim();

  if (value.length >= 1) {
    form1.value = value;
    form2.value = value;
  }

  if (value.length < 3) {
    box1.classList.add('search-box-hidden');
    box2.classList.add('search-box-hidden');

    cast();

    return;
  }

  const response = await search(value);

  if (Array.isArray(response)) {
    data = [...response];
  } else {
    data = [{ ...response }];
  }

  if (!data) return;

  if (data.length === 0) {
    box1.innerHTML = '<span class="search-list__elements">По вашому запиту нічог не знайдено</span>';
    box2.innerHTML = '<span class="search-list__elements">По вашому запиту нічог не знайдено</span>';

    box1.classList.remove('search-box-hidden');
    box2.classList.remove('search-box-hidden');
    return;
  }

  const renderSearch = data
    .filter((x, i) => i < 7)
    .map(flower => {
      return `<span class="search-list__elements" data-searchId="${flower._id}">${flower.name}</span>`;
    });

  box1.addEventListener('click', onClick);
  box2.addEventListener('click', onClick);

  box1.innerHTML = renderSearch.join('');
  box2.innerHTML = renderSearch.join('');

  box1.classList.remove('search-box-hidden');
  box2.classList.remove('search-box-hidden');
}

function onClick(e) {
  const t = e.target;

  const id = t.dataset.searchid;

  if (!id) return;

  localStorage(id);

  redirect('good-card.html');
}

function onClickEnter(e) {
  if (e.key !== 'Enter') {
    return;
  }

  const dataId = data.map(x => x._id);

  localStorage(dataId);

  if (data.length === 1) {
    redirect('good-card.html');
    return;
  }

  redirect('catalog.html');
}

function redirect(page) {
  const host = window.location.host.includes('localhost');

  if (host) {
    window.location = `http://localhost:1234/${page}`;
  } else {
    window.location = `https://vladaboiko.github.io/Flowers/${page}`;
  }
}

function localStorage(storage) {
  window.localStorage.setItem('search', JSON.stringify(storage));
  // window.sessionStorage.setItem('search', JSON.stringify(storage));
}

function cast() {
  box1.innerHTML = '';
  box2.innerHTML = '';

  data = [];
}

function onClickToVoid(e) {
  if (e.target.closest('.search-list-box')) {
    return;
  }
  if (box1.classList.contains('search-box-hidden')) {
    return;
  }
  box1.classList.add('search-box-hidden');
  box2.classList.add('search-box-hidden');
}
