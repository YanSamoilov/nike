const productsSwiper = document.querySelector('#products-swiper-wrapper');

//Инициализация слайдера с товарами.
const initProductsSlides = (products1) => {
  const sliderTemplate = document.querySelector('#products-template').content;
  products1.forEach(el => {
    const slide = sliderTemplate.querySelector('.products__slide').cloneNode(true);
    slide.querySelector('.products__swiper-image').src = el.src;
    slide.querySelector('.products__swiper-image').alt = el.alt;
    slide.querySelector('.products__button').addEventListener('click', function(event) {
      console.log('Купил ' + event.target);
    })
    productsSwiper.append(slide);
  });
}
