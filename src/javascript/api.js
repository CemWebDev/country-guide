const API = () => {
  const API_URL = "https://restcountries.com/v3.1/all ";

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

  const createCountryCard = (countries) => {
    if (countries.length === 0) {
      return;
    }

    console.log(countries);
    const cardsWrapper = document.getElementById("cards");
    countries.forEach((country) => {
      const card = document.createElement("div");
      card.className =
        "rounded-xl bg-gray-800 text-white cursor-pointer shadow-xl country-card";
      const imageContainer = document.createElement("div");
      imageContainer.className = "overflow-hidden";
      const countryFlag = document.createElement("img");
      countryFlag.src = country.flags.png;
      countryFlag.alt = `${country.name.common} flag`;
      countryFlag.className =
        "w-full h-64 object-cover rounded-t-xl hover:scale-100";
      imageContainer.appendChild(countryFlag);

      //! Country details

      const countryContent = document.createElement("div");
      countryContent.className = "mt-4 flex flex-col items-center gap-6 p-2";
      const countryName = document.createElement("h1");
      countryName.className = "text-2xl";
      countryName.textContent = country.name.common;
      const countryDetails = document.createElement("div");
      countryDetails.className = "flex flex-col items-center";
      countryDetails.innerHTML = `
    <span>Population: ${country.population}</span>
    <p>Capital: ${country.capital}</p>
    `;
      countryContent.appendChild(countryName);
      countryContent.appendChild(countryDetails);

      card.appendChild(imageContainer);
      card.appendChild(countryContent);
      cardsWrapper.appendChild(card);
    });
  };
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
 /*  setTimeout(() => {
    errorMessage.classList.remove("translate-x-0");
    errorMessage.classList.add("translate-x-full");
    setTimeout(() => {
      errorMessage.remove();
    }, 500);
  }, 2000); */
};

export default API;
