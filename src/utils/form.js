import showComments from '../controllers/comments.controller.js';
import getUser from '../utils/user.js';

export default () => {
  const form = document.querySelector(".postComment");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(e.target[0].value === '') return;
    
    const comment = e.target[0].value;
    e.target[0].value = '';

    getUser().then(info => {
      let localComments = JSON.parse(localStorage.getItem("comments-instagram-app")) || [];
      localComments.push({ name: `${info.name.first} ${info.name.last}`, text: comment });
      localStorage.setItem("comments-instagram-app", JSON.stringify(localComments));
  
      showComments();
    });
    
  });
};
