import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const selectEl = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const error = document.querySelector('.cat-info');

selectEl.style.visisbility = 'hidden';

fetchBreeds()
    .then(breeds => {
        selectEl.style.visisbility = 'visible';
        loader.style.display = 'none';

        const catEl = breeds
            .map(breed => `<option value='${breed.id}'>${breed.name}</option>`).join('');
        selectEl.insertAdjacentHTML('beforeend', catEl);
    })
    .catch(error => {
        console.log(error);
        loader.style.display = 'none';
        Notiflix.failure('Oops! Something went wrong! Try reloading the page!')
    });
