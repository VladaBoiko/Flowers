(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-hero-modal-open]"),
    closeModalBtn: document.querySelector("[data-hero-modal-close]"),
    modal: document.querySelector("[data-hero-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();