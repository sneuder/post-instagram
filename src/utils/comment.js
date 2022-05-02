export default () => {
  const comment = document.querySelector('#comment');
  comment.addEventListener('click', () => {
    const postComment = document.querySelector('#postComment');
    postComment.focus();
  });
}