const API_URL = "https://restcountries.com/v3.1/all ";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    createCountryCard(data);
  })
  .catch((error) => console.error("Error fetching data", error));


