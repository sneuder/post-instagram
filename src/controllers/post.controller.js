import post from '../views/post.html';
import comments from './comments.controller.js';
import form from '../utils/form.js';

export default () => {
  const root = document.querySelector('#root');
  root.innerHTML = post;
  
  comments()
  form();
};