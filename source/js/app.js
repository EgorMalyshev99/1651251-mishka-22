const closeMenu__btn = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav__inner");

closeMenu__btn.addEventListener("click", (evt) => {
  console.log("zzz");
  closeMenu__btn.classList.toggle("menu-closed");
  mainNav.classList.toggle("main-nav__closed");
});
