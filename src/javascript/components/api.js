import { createCountryCard } from "../utils/createCountryCard.js";
import { handleFetchError } from "../utils/handleFetchError.js";

export let allCountries = [];

export const API = async () => {
  const API_URL = "https://restcountries.com/v3.1/all";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status ${response.status}`);
    }
    const data = await response.json();
    allCountries = data;
    createCountryCard(data);
    return allCountries;
  } catch (error) {
    handleFetchError(error);
  }
};
