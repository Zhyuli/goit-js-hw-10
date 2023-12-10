import Notiflix from 'notiflix';
import SlimSelect from 'slim-select'
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import 'slim-select/dist/slimselect.css';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
// // const error = document.querySelector('.cat-info');
const body = document.querySelector('body');

select.addEventListener("choose", onChoose)

fetchBreeds()
    .then(response => {
        select.style.display = 'block'
        loader.style.display = 'none'
        select.insertAdjacentHTML('beforeend', createOptions(response))
        new SlimSelect({
  select: '#selectElement'
        })
            })
    .catch(error => {
        console.log(error);
        loader.style.display = 'none'
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');       
    })

function createOptions(value) {
    return value.map(({ id, name }) => {
        return `<option value="${id}">${name}</option>`
    }).join('');
}

function onChoose(evt) {
    loader.style.display = 'block'
    const selectedId = this.value
    select.style.display = 'none'
    catInfo.innerHTML = '';

    fetchCatByBreed(selectedId)
        .then(catEl => {
            loader.style.display = 'none';
            catInfo.innerHTML = createMarckup(catEl)
        })
        .catch(error => {
            console.log(error);
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');  
    })
}

function createMarckup(catEl) {
    return `<div class="card">
    <img src="${catEl[0].url}" width="300">
    <h3>${catEl[0].breeds[0].name}</h3>
    <p>Description:${catEl[0].breeds[0].description}</p>
    <p>Temperament:${catEl[0].breeds[0].temperament}</p>
  </div>`;
}





















