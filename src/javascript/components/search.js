let cardCount = 250;

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
    console.log(cardCount);

    if (cardCount === 0) {
      noResults();
    }
  });
};

const noResults = () => {
  const errorMessage = document.createElement("div");
  errorMessage.textContent = "There is no such that country";
  errorMessage.className = "text-red-700 font-bold";
  countryInput.insertAdjacentElement("afterend", errorMessage);
};

export default Search;
