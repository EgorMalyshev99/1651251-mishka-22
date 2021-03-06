const modal = document.querySelectorAll(".modal");
const shadow = document.querySelector(".global-shadow");
const modalBaskets = document.querySelector(".modal-basket");

const showModal = (currentModal) => {
  currentModal.classList.add("modal__active");
  shadow.classList.add("active");
};

const closeModal = () => {
  modal.forEach((item) => {
    item.classList.remove("modal__active");
  })
}

shadow.addEventListener("click", () => {
  closeModal();
  shadow.classList.remove("active");
});
