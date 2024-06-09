import axios from "axios";

const apiKey = "live_CeVDC1zAWinZO44TIOYScgovQRi0HmurNTOu2cu5n0PGNzRDwyPLaFGJsaGgTsmr";
axios.defaults.headers.common["x-api-key"] = apiKey;

const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
    return axios.get(`${BASE_URL}/breeds`)
        .then(response => response.data)
        .catch(error => {
            console.error('There is an error in fetchBreeds:', error);
            throw error;
        });
}

export function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
        .then(response => response.data)
        .catch(error => {
            console.error('There is an error in fetchCatByBreed:', error);
            throw error;
        });
}
