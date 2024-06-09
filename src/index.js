import { fetchBreeds, fetchCatByBreed } from './cat-api';
const selectInput = document.querySelector('.breed-select');
const catInfoDiv = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}

function showError(message) {
    error.style.display = 'block';
    error.textContent = message;
}

function hideError() {
    error.style.display = 'none';
}

function populateBreedsSelect(breeds) {
    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.text = breed.name;
        option.value = breed.id;
        selectInput.appendChild(option);
    });
}

function displayCatInfo(catData) {
    const cat = catData[0];
    const breed = cat.breeds[0];
    catInfoDiv.innerHTML = `
        <img src="${cat.url}" alt="${breed.name}" class="cat-image">
        <h2>${breed.name}</h2>
        <p>${breed.description}</p>
        <p><strong>Temperament:</strong> ${breed.temperament}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    showLoader();
    fetchBreeds()
        .then(breeds => {
            populateBreedsSelect(breeds);
            hideLoader();
            selectInput.style.display = 'block';
        })
        .catch(error => {
            console.error('There is an error:', error);
            showError('Failed to load breeds. Please try again later.');
            hideLoader();
        });
});

selectInput.addEventListener('change', event => {
    const breedId = event.target.value;
    if (!breedId) return;

    showLoader();
    hideError();
    catInfoDiv.innerHTML = '';
    fetchCatByBreed(breedId)
        .then(catData => {
            displayCatInfo(catData);
            hideLoader();
        })
        .catch(error => {
            console.error('There is an error:', error);
            showError('Failed to load cat info. Please try again later.');
            hideLoader();
        });
});
