import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import { disableLoading, enableLoading } from './loader.js';
import { marckupCard, selectOptions } from './markup.js';

const select = document.querySelector('.breed-select');
const catInfoBlock = document.querySelector('.cat-info');
const errorText = document.querySelector('.error');

select.addEventListener('change', onBreedSelect);

errorText.classList.add('is-hidden');

fetchBreeds()
    .then(selectOptions)
    .catch(error => {
        if (error) {
            catInfoBlock.classList.add('is-hidden');
            disableLoading();
            Notify.failure('Oops! Something went wrong! Try reloading the page!', {
              width: '400px',
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
          .then(marckupCard)
          .catch(error => {
            if (error) {
              catInfo.classList.add('is-hidden');
              disableLoading();
              Notify.failure('Oops! Something went wrong! Try reloading the page!', {
                width: '400px',
                borderRadius: '10px',
                position: 'center-center',
              });
            }
          });
      }