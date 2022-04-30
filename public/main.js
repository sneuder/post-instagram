import routes from '../src/router/routes.js';
const hash = window.location.hash;

routes(hash);
window.addEventListener('hashchange', () => {
  routes(hash);
});