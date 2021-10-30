import {error} from './error.js';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '23365918-3471fb87d81c76e5978c01940';
const numberOfResults = 12;

export function fetchImg(query, page) {
  const url = `${BASE_URL}?key=${KEY}&q=${query}&page=${page}&per_page=${numberOfResults}&`;
  return fetch(url)
    .then(response => {
      if (response.status === 404) {
        return error(response.status);
      };
      return response.json()
    })
    .then(response => {
      return response;
  })
};