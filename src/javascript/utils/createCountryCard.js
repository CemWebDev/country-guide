export const createCountryCard = (countries) => {
  if (!Array.isArray(countries) || countries.length === 0) {
    return;
  }

  const cardsWrapper = document.getElementById("cards");
  
  countries.forEach((country) => {
    const card = document.createElement("div");
    card.className =
      "rounded-xl bg-gray-100 text-white cursor-pointer country-card shadow-2xl";
    const imageContainer = document.createElement("div");
    const countryFlag = document.createElement("img");
    countryFlag.src = country.flags.png;
    countryFlag.alt = `${country.name.common} flag`;
    countryFlag.className = "w-full h-64 object-cover rounded-t-xl";
    imageContainer.appendChild(countryFlag);

    const countryContent = document.createElement("div");
    countryContent.className =
      "mt-4 flex flex-col items-center gap-6 p-2 text-black";
    const countryName = document.createElement("h1");
    countryName.className = "text-2xl font-bold";
    countryName.textContent = country.name.common;
    const countryDetails = document.createElement("div");
    countryDetails.className = "country-details flex flex-col items-center";

    const capitalText = country.capital
      ? country.capital
      : "No capital available";
    const populationText = country.population
      ? country.population.toLocaleString()
      : "Unknown population";

    countryDetails.innerHTML = `
        <span>Population: ${populationText}</span>
        <p>Capital: ${capitalText}</p>
      `;

    countryContent.appendChild(countryName);
    countryContent.appendChild(countryDetails);

    card.appendChild(imageContainer);
    card.appendChild(countryContent);
    cardsWrapper.appendChild(card);
  });
};
