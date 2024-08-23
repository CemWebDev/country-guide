let cardCount = 250;
let errorMessage;

const Search = () => {
  const countryInput = document.getElementById("country-input");
  filter(countryInput);
};

const filter = (countryInput) => {
  countryInput.addEventListener("input", () => {
    const searchValue = countryInput.value.toLowerCase();
    const countryCards = document.querySelectorAll(".country-card");

    cardCount = 0;
    countryCards.forEach((card) => {
      const countryName = card.querySelector("h1").textContent.toLowerCase();
      if (countryName.includes(searchValue)) {
        card.classList.remove("hidden");
        card.classList.add("block");
        cardCount++;
      } else {
        card.classList.remove("block");
        card.classList.add("hidden");
      }
    });

    if (errorMessage) {
      errorMessage.remove();
      errorMessage = null;
    }

    if (cardCount === 0) {
      noResults(countryInput);
    }
  });
};

const noResults = () => {
  const errorMessageWrapper = document.getElementById("error-message");
  errorMessage = document.createElement("div");
  errorMessage.textContent = "There is no such country!";
  errorMessage.className = "text-red-800 text-2xl font-bold";
  errorMessageWrapper.appendChild(errorMessage);
};

export default Search;
