// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// const swiper = new Swiper('.swiper', {
//     // configure Swiper to use modules
//     //modules: [Navigation, Pagination],
//     //direction: 'vertical',

//     pagination: {
//         el: '.swiper-pagination',
//     },

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },

//     scrollbar: {
//     el: '.swiper-scrollbar',
//     },

//   });


  var swiper = new Swiper(".mySwiper", {
    direction: 'vertical',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


const swiperCarousel =  new Swiper(".swiper-carousel",{
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});