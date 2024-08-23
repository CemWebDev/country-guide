const StickyForm = () => {
  window.addEventListener("scroll", () => {
    const formSection = document.getElementById("search");
    if (window.scrollY > 0) {
      formSection.classList.add("bg-indigo-700");
    } else {
      formSection.classList.remove("bg-indigo-700");
    }
  });
};

export default StickyForm;
