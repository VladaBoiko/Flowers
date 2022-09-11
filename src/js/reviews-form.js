const form = document.querySelector('#form');
const file = document.querySelector('input[type="file"]');

file.addEventListener('change', filePrev);
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

form.addEventListener('submit', function (e) {
  e.preventDefault();
});
