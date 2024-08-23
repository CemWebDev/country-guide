const Search = () => {
  const countryInput = document.getElementById("country-input");
  countryInput.addEventListener("input", () => {
    const searchValue = countryInput.value.toLowerCase();
    const countryCards = document.querySelectorAll(".country-card");

    countryCards.forEach((card) => {
      const countryName = card.querySelector("h1").textContent.toLowerCase();
      if (countryName.includes(searchValue)) {
        card.classList.remove("hidden");
        card.classList.add("block");
      } else {
        card.classList.remove("block");
        card.classList.add("hidden");
      }
    });
  });
};

export default Search;
