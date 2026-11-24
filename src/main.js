import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');
const searchInput = searchForm.querySelector('input[name="search-text"]');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data || !data.hits || data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF5350',
          messageColor: '#FFFFFF',
          iconColor: '#FFFFFF',
          closeColor: '#FFFFFF',
          maxWidth: 432,
        });
        return;
      }

      createGallery(data.hits);
      searchForm.reset();
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message:
          'Something went wrong while fetching images. Please try again!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
