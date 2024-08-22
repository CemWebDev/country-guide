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
    card.className =
      "rounded-xl bg-gray-800 text-white cursor-pointer shadow-xl";
    const imageContainer = document.createElement("div");
    const countryFlag = document.createElement("img");
    countryFlag.src = country.flags.png;
    countryFlag.alt = `${country.name.common} flag`;
    countryFlag.className = "w-full h-32 object-cover rounded-t-xl";
    imageContainer.appendChild(countryFlag);
    card.appendChild(imageContainer);
    //! Country details

    const countryContent = document.createElement("div");
    countryContent.className = "mt-4 flex flex-col items-center gap-6";
    const countryName = document.createElement("h1");
    countryName.className = "text-xl";
    countryName.textContent = country.name.common;
    const countryDetails = document.createElement("div");

    cardsWrapper.appendChild(card);
  });
};
