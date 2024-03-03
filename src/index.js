import { fetchBreeds } from './cat-api.js';

const selectInput = document.querySelector('.breed-select');

fetchBreeds()
    .then(breeds => {
        breeds.forEach(breed => {
            const option = document.createElement('option');
            option.text = breed.name;
            option.value = breed.id;
            selectInput.appendChild(option);
        });
    })
    .catch(error => {
        console.error('There is an error:', error);
    });

    selectInput.addEventListener('change', event => {
        const breedId = event.target.value;
    });