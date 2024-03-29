import { disableLoading } from './loader.js';
import { showSelect } from './select.js';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

export function selectOptions(cat) {
    cat.map(({ id, name }) => {
      const markup = `<option value="${id}">${name}</option>`;
      select.insertAdjacentHTML('beforeend', markup);
    });
    showSelect();
    disableLoading();
  }

export function markupCard(breeds) {
    const breedInfo = breeds[0].breeds[0];
    catInfo.classList.remove('is-hidden');
    const card = breeds
        .map(breed => {
            return `<div class="image">
            <img src="${breed.url}", alt="${breedInfo.name}" width="500">
            </div>
            <div class="description">
            <h2 class="name">${breedInfo.name}</h2>
            <p class="breed-info">${breedInfo.description}</p>
            <p class="temperament"><b>Temperament:<b/>${breedInfo.temperament}</p>
          </div>
          `;
        })
        .join('');

        catInfo.innerHTML = card;
        disableLoading();
}