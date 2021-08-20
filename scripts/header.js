const burgerIcon = document.querySelector('.header__burger-icon');
const headerMenuLinks = document.querySelectorAll('.header__menu-link');

const handleChangeBurgerMenu = () => {
  document.querySelector('.header__burger-icon').classList.toggle('header__burger-icon_active');
  document.querySelector('.header__burger-line').classList.toggle('header__burger-line_active');
  document.querySelector('.header__burger-body').classList.toggle('header__burger-body_active');
  document.querySelector('.page').classList.toggle('page_menu-active');
}
