import { add } from '../api/apiReviews';
import { server } from './data';

const form = document.querySelector('#form');
const file = document.querySelector('input[type="file"]');

file.addEventListener('change', filePrev);
form.addEventListener('submit', submitForm);

function filePrev() {
  for (let i = 0; i < file.files.length; i += 1) {
    render(i);
  }
}

function render(n) {
  const reader = new FileReader();
  const photo = document.querySelectorAll('.file-img');
  reader.onload = e => {
    photo[n].innerHTML = `<img src='${e.target.result}' alt='photo'/>`;
  };

  reader.readAsDataURL(file.files[n]);
}

async function submitForm(event) {
  event.preventDefault();
  const rating = document.querySelectorAll('.star-list__icon--active');
  const newReviews = new FormData(form);

  newReviews.append('rating', rating ? rating.length : 5);

  const { statusText } = await add(newReviews);

  if (statusText === 'OK') {
    server();
    form.reset();
    document.querySelector('[type="submit"]').blur();
  }
}
