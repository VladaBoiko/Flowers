import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getAll } from '../api/apiReviews';

const list = document.querySelector('.reviews-list');

server();

export async function server() {
  const { data } = await getAll();
  reviews(data.data);
}

export function reviews(reviews) {
  const rev = newRating(reviews);
  const html = htmlString(rev);
  list.innerHTML = '';
  list.innerHTML = html.join(' ');
  gallery();
}

function newRating(reviews) {
  return reviews.map(x => {
    let newRating = '';

    for (let i = 0; i < 5; i += 1) {
      if (i >= x.rating) {
        newRating += `<li class="reviews-box__stars-elements">
          <svg class="reviews-box__stars-icon" width="24" height="24">
            <path
              d="M12 2L15.09 8.25342L22 9.26236L17 14.1272L18.18 21L12 17.7534L5.82 21L7 14.1272L2 9.26236L8.91 8.25342L12 2Z"
              stroke="#FFC549"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>`;

        continue;
      }

      newRating += `<li class="reviews-box__stars-elements">
                  <svg class="reviews-box__stars-icon reviews-box__stars-icon--active" width="24" height="24">
                    <path
                      d="M12 2L15.09 8.25342L22 9.26236L17 14.1272L18.18 21L12 17.7534L5.82 21L7 14.1272L2 9.26236L8.91 8.25342L12 2Z"
                      stroke="#FFC549"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>`;
    }

    return { ...x, rating: newRating };
  });
}

function htmlString(data) {
  return data.map(({ name, photo, rating, text, createdAt: date }) => {
    return `<li class="reviews-list__elements">
          <div class="user-photo">
            <span>${userIcon(name)}</span>
          </div>
          <div class="reviews-list-box">
            <div class="reviews-box__header">
              <p class="reviews-box__name">${name}</p>
              <p class="reviews-box__date">${date.split('T')[0].split('-').reverse().join('.')}</p>
              <ul class="reviews-box__stars">
                ${rating}
              </ul>
            </div>
            <p class="reviews-box__text">
              ${text}
            </p>
                ${
                  photo !== 0
                    ? `<ul class="reviews-box-list__photo"> ${photoHTML(photo)}
            </ul>`
                    : ''
                }
            
          </div>
        </li>`;
  });
}

function userIcon(name) {
  const IconName = name.split(' ');
  return `${IconName[0][0]}${IconName[1] ? IconName[1][0] : ''}`;
}

function photoHTML(photo) {
  return photo
    .map(x => {
      return `<li class="reviews-box-list__elements">
                <a href="https://server-flower.herokuapp.com/${x}">
                  <img
                    class="reviews-box-list__photo"
                    src="https://server-flower.herokuapp.com/${x}"
                    alt="${x}"
                  />
                </a>
              </li>`;
    })
    .join(' ');
}

function gallery() {
  const conteiner = document.querySelectorAll('.reviews-box-list__photo');

  conteiner.forEach(x => {
    x.addEventListener('click', () => {
      event.preventDefault();
    });
  });

  const beautifulGallery = new SimpleLightbox('.reviews-box-list__elements a');
  beautifulGallery.on('show.simplelightbox', () => {
    beautifulGallery.defaultOptions.captionDelay = 250;
  });
}
