const Search = () => {
  const countryInput = document.getElementById("country-input");
  countryInput.addEventListener("input", () => {
    const searchValue = countryInput.value.toLowerCase();
    const countryCards = document.querySelectorAll(".country-card")
  });
};

export default Search;
