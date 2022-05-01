import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default () => {
  const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
	  loop: false,

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 5000,
    },
  })

  
};
