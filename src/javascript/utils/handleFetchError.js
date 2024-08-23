export const handleFetchError = (error) => {
  console.error("An error occurred while fetching data", error);
  const errorMessage = document.createElement("div");
  errorMessage.className =
    "absolute right-0 top-0 bg-red-700 text-white p-4 rounded-xl shadow-lg transform translate-x-full transition-transform duration-500 z-50";
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
