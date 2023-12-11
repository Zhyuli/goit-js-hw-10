// import axios from "axios";

const KEY_API = "live_uaCRPCyleObko7mKeYNtnotx414KKcztpuAFo2JTHDyEln3FAuoHBeIQqpgEgUYX";

const BASE_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`)
        .then(response => {
            if (!response.ok) {
                throw new Error('erorr', response.statusText)
            }
            return response.json()
        })
}

function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${KEY_API}`)
        .then(response => {
            if (!response.ok) {
            throw new Error('error', response.statusText)
            }
            return response.json()
    })
}

export { fetchBreeds, fetchCatByBreed };