// js/script.js

// Add fade-in animation on load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.style.animationDelay = "0.2s";
  });
});
