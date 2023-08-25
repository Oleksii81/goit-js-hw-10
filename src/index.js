import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import { disableLoading, enableLoading } from './loader.js';
import { markupCard, selectOptions } from './markup.js';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const errorText = document.querySelector('.error');

select.addEventListener('change', onBreedSelect);

errorText.classList.add('is-hidden');

fetchBreeds()
    .then(selectOptions)
    .catch(error => {
        if (error) {
            catInfo.classList.add('is-hidden');
            disableLoading();
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!', {
              width: '500px',
              borderRadius: '10px',
              position: 'center-center',
            });
          }
    });

    function onBreedSelect(event) {
        event.preventDefault();
        enableLoading();
        catInfo.classList.add('is-hidden');
        const breedId = select.value;
        fetchCatByBreed(breedId)
          .then(markupCard)
          .catch(error => {
            if (error) {
                catInfo.classList.add('is-hidden');
              disableLoading();
              Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!', {
                width: '500px',
                borderRadius: '10px',
                position: 'center-center',
              });
            }
          });
      }