const formImage = document.getElementById('profileFormImage');
const formPreview = document.getElementById('profileFormPreview');

formImage.addEventListener('change', () => {
    uploadFile(formImage.files[0]);
})

function uploadFile(file) {
    console.log(1)
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        alert('Only image can be load')
        formImage.value = '';
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        formPreview.innerHTML = `<img src="${e.target.result}" alt="Avatar">`;
    }
    reader.readAsDataURL(file);
}