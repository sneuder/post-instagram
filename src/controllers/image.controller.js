
export default () => {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = '';

  [1,2,3].forEach((number) => {
    const image = document.createElement('img');
    image.setAttribute('src', `https://picsum.photos/400?random=${number}`);
    image.classList.add('photos__photo')
    image.classList.add('swiper-slide');

    swiperWrapper.appendChild(image);
  })
}