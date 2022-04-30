import comments from "../views/post.comments.html";

export default () => {
  const localComments =
    JSON.parse(window.localStorage.getItem("comments-instagram-app")) || [];

  const root = document.querySelector("#comments");
  root.innerHTML = "";

  if (localComments.length === 0) return;

  localComments.forEach((comment) => {
    const article = document.createElement("article");
    article.classList.add("comment");
    article.innerHTML = comments;

    article.querySelector(
      ".comment__comment"
    ).innerHTML = `<span class="comment__name">${comment.name}</span>${comment.text}`;

    root.appendChild(article);
  });
};
