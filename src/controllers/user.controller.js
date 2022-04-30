export default (user) => {
  const image = document.querySelector('.header__profile');
  const name = document.querySelector('.profile__name');
  const location = document.querySelector('.profile__location');

  image.setAttribute('src', user.picture.large);
  name.textContent = `${user.name.first} ${user.name.last}`;
  location.textContent = `${user.location.state}, ${user.location.city}`;
}