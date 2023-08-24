import axios from "axios";
import { hideSelect } from './select.js';

const API_KEY =
  'live_A4wMnuAH12RZapdoSDHDv4qE2LVcYgmy8nTbaxX6XOMh5ay7tcvbF8UqvfrzGtG8';

axios.defaults.headers.common['x-api-key'] = API_KEY;

const options = {
    headers: {
      'x-api-key': API_KEY,
    },
  };

export function fetchBreeds() {
    hideSelect();
    const url = `https://api.thecatapi.com/v1/breeds`;
    return fetch(url, options).then(response => {
        if(!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
}

export function fetchCatByBreed(breedId) {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    return fetch(url, options).then(response => {
        if(!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
}