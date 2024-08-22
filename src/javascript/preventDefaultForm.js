const PreventDefaultForm = () => {
  const form = document.querySelector("#country-search-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};

export default PreventDefaultForm;
