export default () => {
  const favorite = document.querySelector('#favorite');
  favorite.addEventListener('click', () => {
    if(favorite.classList.contains('fa-regular')) {
      favorite.classList.remove("fa-regular");
      return favorite.classList.add("fa-solid");
    }

    favorite.classList.remove("fa-solid");
    return favorite.classList.add("fa-regular");
  });
}