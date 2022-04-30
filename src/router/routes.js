import post from '../controllers/post.controller.js';

export default (hash) => {
  const root = document.querySelector('#root');
  root.innerHTML = '';
  
  if(hash === ''){
    post();
  }
    
}