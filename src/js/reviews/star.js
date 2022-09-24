const star = document.querySelectorAll('.star-list__icon');

for (let i = 0; i < star.length; i += 1) {
  star[i].addEventListener('mouseenter', () => muv(i));
}

function muv(index) {
  for (let i = 0; i <= index; i += 1) {
    star[i].classList.add('star-list__icon--active');
  }

  for (const s of star) {
    s.addEventListener('click', removeEvent);

    s.addEventListener('mouseleave', notFocus);
  }
}

function notFocus() {
  for (let i = 0; i < star.length; i += 1) {
    star[i].classList.remove('star-list__icon--active');
  }

  removeEvent();
}

function removeEvent() {
  for (const s of star) {
    s.removeEventListener('mouseleave', notFocus);
  }
}
