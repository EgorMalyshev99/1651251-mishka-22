const closeMenu__btn = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav__wrapper");

closeMenu__btn.addEventListener("click", (evt) => {
  closeMenu__btn.classList.toggle("menu__closed");
  mainNav.classList.toggle("main-nav__closed");
});
