let cardsToShow = 40;
let currentIndex = 0;

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
      createCountryCard(data);
    })
    .catch((error) => {
      handleFetchError(error);
    });
};

const createCountryCard = (countries) => {
  if (!Array.isArray(countries) || countries.length === 0) {
    return;
  }

  const cardsWrapper = document.getElementById("cards");
  const showMoreBtn = document.getElementById("show-more");

  const countriesToShow = countries.slice(
    currentIndex,
    currentIndex + cardsToShow
  );
  currentIndex += cardsToShow;

  countriesToShow.forEach((country) => {
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

  if (currentIndex >= countries.length) {
    showMoreBtn.className = "hidden";
  }

  showMoreBtn.addEventListener("click", () => {
    createCountryCard(countries);
  });
};

const handleFetchError = (error) => {
  console.error("An error occurred while fetching data", error);
  const errorMessage = document.createElement("div");
  errorMessage.className =
    "absolute right-0 top-0 bg-red-700 text-white p-4 rounded-xl shadow-lg transform translate-x-full transition-transform duration-500";
  errorMessage.textContent = "Error loading countries. Please try again later.";

  document.body.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.classList.remove("translate-x-full");
    errorMessage.classList.add("translate-x-0");
  }, 100);
  setTimeout(() => {
    errorMessage.classList.remove("translate-x-0");
    errorMessage.classList.add("translate-x-full");
    setTimeout(() => {
      errorMessage.remove();
    }, 700);
  }, 3000);
};

export default API;
