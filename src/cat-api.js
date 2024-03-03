import axios from "axios";

const apiKey = "live_CeVDC1zAWinZO44TIOYScgovQRi0HmurNTOu2cu5n0PGNzRDwyPLaFGJsaGgTsmr";
axios.defaults.headers.common["x-api-key"] = apiKey;
const url = 'https://api.thecatapi.com/v1/breeds';

export function fetchBreeds() {
    return axios.get(url)
        .then(response => response.data)
        .catch(error => {
            console.error('There is an error in fetchBreeds:', error);
        });
}

