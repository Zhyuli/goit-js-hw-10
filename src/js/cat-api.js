import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_uaCRPCyleObko7mKeYNtnotx414KKcztpuAFo2JTHDyEln3FAuoHBeIQqpgEgUYX";

const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
    // const urlBreeds = `BASE_URL / ${breeds}`;

    return axios
        .get('https://api.thecatapi.com/v1/breeds')
        .then(response => response.data )
        //    } // if (!response.ok) {
        //     //     throw new Error(response.status);
        //     // }
        //     // return response.json();
        // })
        .catch(error => {
            console.log(error);
            throw error;
        });
}

export function fetchCatByBreed(breedId) {
    // const urlById = `BASE_URL/images/search?breed_ids=${breedId}`;

     return axios
        .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => response => response.data )
        //    } if (!response.ok) {
        //         throw new Error(response.status);
        //     }
        //     // return response.json();
        // }
         .catch(error => {
            console.log(error);
            throw error;
        });
}