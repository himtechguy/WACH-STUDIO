document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      console.log("Navigating to:", link.getAttribute("href"));
    });
  });
});
