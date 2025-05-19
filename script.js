// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const mode = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
    localStorage.setItem("theme", mode);
  });
}

// Apply stored theme on load
window.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("theme");
  if (stored === "dark") {
    document.body.classList.add("dark-theme");
  }
});
