const goTopButton = document.getElementById("myBtn");
window.onscroll = () => scrollFunction();

goTopButton.addEventListener("click", topFunction)

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        if (window.innerWidth >= 1340) {
            goTopButton.style.display = "block";
        }
    } else {
        goTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}