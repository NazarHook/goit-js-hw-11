import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from './js/pixabay-api.js';
import { renderCards } from './js/render-functions.js';
const loader = document.querySelector('.loader')
const form = document.querySelector('.form');
const input = document.querySelector('.search-input');
const gallery = '.gallery';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = input.value.trim();

    if (query.length < 3) {
    iziToast.error({
      message: 'Search query must be at least 3 characters long',
      position: 'topRight',
    });
    return;
  }
  if (query === '') {
    iziToast.show({
      message: 'Please write what you want to search',
      position: 'topRight',
      color: 'red'
    });
    return;
  }
  loader.style.display = 'inline-block';
  fetchImages(query)
    .then(images => { 
    renderCards(images, gallery)
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt', 
      captionDelay: 250,
    });
    lightbox.refresh();
    gallery.innerHTML = ''; 
  })
    .catch(() => {
    })
    .finally(() => {
      loader.style.display = 'none';
      form.reset()
    });
});