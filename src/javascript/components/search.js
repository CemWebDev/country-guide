let cardCount = 250;

const Search = () => {
  filter();
};

const filter = () => {
  const countryInput = document.getElementById("country-input");

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
  });
};

export default Search;
