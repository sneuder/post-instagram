import '../src/styles/index.css';

import routes from '../src/router/routes.js';

import user from '../src/controllers/user.controller.js';
import images from '../src/controllers/image.controller.js';

import swiper from '../src/utils/swiper';
import getuser from '../src/utils/user.js';
import favorite from '../src/utils/favorite';
import comment from '../src/utils/comment';

const hash = window.location.hash;

routes(hash);

getuser().then(info => user(info));

swiper();
images();

favorite();
comment();

const swipe = document.querySelector('.swiper').swiper;

window.addEventListener('hashchange', () => {
  routes(hash);
});