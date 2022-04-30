import '../src/styles/index.css';
import routes from '../src/router/routes.js';
import user from '../src/controllers/user.controller.js';

import getuser from '../src/utils/user.js';
const hash = window.location.hash;

routes(hash);
getuser().then(info => {
  user(info);
});

window.addEventListener('hashchange', () => {
  routes(hash);
});