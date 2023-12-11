import Notiflix from 'notiflix';
// import SlimSelect from 'slim-select'
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import 'slim-select/dist/slimselect.css';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
// // const error = document.querySelector('.cat-info');
const body = document.querySelector('body');

select.addEventListener("change", onChange)

fetchBreeds()
    .then(response => {
        select.style.display = 'block'
        loader.style.display = 'none'
        select.insertAdjacentHTML('beforeend', createOptions(response))
//          new SlimSelect({
//    select: select
//         })
            })
    .catch(error => {
        console.log(error);
        loader.style.display = 'none'
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');       
    })

function createOptions(arr) {
    return arr.map(({id, name}) => {
        return `<option value="${id}">${name}</option>`
    }).join('');
}


function onChange(evt) {
    loader.style.display = 'block'
    
    // const selectedId = this.value
   
    catInfo.innerHTML = '';

    fetchCatByBreed(evt.target.value)
        .then(catEl => {
           
            catInfo.innerHTML = createMarckup(catEl)
            console.log(catEl);
        })
        .catch(error => {
            console.log(error);
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');  
            select.style.display = 'none'

        })
        .finally(() => {
        loader.style.display = 'none';
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





















