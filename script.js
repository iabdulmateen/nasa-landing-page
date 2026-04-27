// Mobile menu toggle ke liye logic
const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Aap yahan toggle animation ka code bhi daal sakte hain
  });
}

// Search bar focus effect
const searchInput = document.getElementById("nasa-search");
searchInput.addEventListener("focus", () => {
  searchInput.style.borderColor = "#0056b3"; // NASA blue color
});

searchInput.addEventListener("blur", () => {
  searchInput.style.borderColor = "#444";
});
