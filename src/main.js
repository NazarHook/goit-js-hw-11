import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from './js/pixabay-api.js';
import { renderCards } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('.search-input');
const gallery = '.gallery';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    iziToast.show({
      message: 'Please write what you want to search',
      position: 'topRight',
      color: 'red'
    });
    return;
  }

  fetchImages(query)
    .then(images => renderCards(images, gallery))
    .catch(() => {
      iziToast.info({
        message: 'No images found',
        position: 'topRight',
      });
    });
});
