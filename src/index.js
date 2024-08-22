const API_URL = "https://restcountries.com/v3.1/all ";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    createCountryCard(data);
  })
  .catch((error) => console.error("Error fetching data", error));

const createCountryCard = (countries) => {
  console.log(countries);
  const cardsWrapper = document.getElementById("cards");
  countries.forEach((country) => {
    const card = document.createElement("div");
    card.className = "rounded-xl p-5 bg-gray-800 text-white cursor-pointer";
    cardsWrapper.appendChild(card);
  });

};
