
initProductsSlides(productsList);
new Swiper('#products-swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 4.5,
  loop: true,
  pagination: {
    el: '.products__swiper-pagination',
    type: 'progressbar'
  },
  breakpoints: {
    1295: {
      slidesPerView: 4.3,
    },
    1225: {
      slidesPerView: 3.7,
    },
    1125: {
      slidesPerView: 3.4,
    },
    1000: {
      slidesPerView: 3,
    },
    895: {
      slidesPerView: 2.7,
    },
    768: {
      slidesPerView: 2.35,
    },
    670: {
      // centeredSlides: false,
      slidesPerView: 2,
    },
    570: {
      slidesPerView: 1.7,
    },
    500: {
      slidesPerView: 1.5,
    },
    400: {
      centeredSlides: false,
      slidesPerView: 1.2,
    },
    370: {
      slidesPerView: 1.1,
    },
    // 350: {
    //   slidesPerView: 1.05,
    // },
    320: {
      centeredSlides: true,
      slidesPerView: 1,
    },
  }
});

burgerIcon.addEventListener('click', handleChangeBurgerMenu);

headerMenuLinks.forEach(el => {
  el.addEventListener('click', handleChangeBurgerMenu);
})
