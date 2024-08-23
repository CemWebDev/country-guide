import { createCountryCard } from "../utils/createCountryCard.js";
import { handleFetchError } from "../utils/handleFetchError.js";

let allCountries = [];

const API = () => {
  const API_URL = "https://restcountries.com/v3.1/all";

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      allCountries = data;
      createCountryCard(data);
    })
    .catch((error) => {
      handleFetchError(error);
    });
};

export default API;
