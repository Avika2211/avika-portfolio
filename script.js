// Dynamic Greeting
window.addEventListener("load", () => {
  const now = new Date();
  const hour = now.getHours();
  let greet = "Hello";

  if (hour < 12) greet = "Good Morning ☀️";
  else if (hour < 18) greet = "Good Afternoon 🌤️";
  else greet = "Good Evening 🌙";

  console.log(`${greet}, Welcome to Avika's Portfolio 💻`);
});

// Typing Effect for tagline
const tagline = document.querySelector(".tagline");
const originalText = tagline.textContent;
tagline.textContent = "";
let idx = 0;

function typeEffect() {
  if (idx < originalText.length) {
    tagline.textContent += originalText.charAt(idx);
    idx++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Hover Animation for Contact Links
const contactLinks = document.querySelectorAll(".contact a");
contactLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "#00f5d4";
    link.style.textShadow = "0 0 8px #00f5d4";
  });

  link.addEventListener("mouseleave", () => {
    link.style.color = "#7ef9f9";
    link.style.textShadow = "none";
  });
  // Smooth fade-in for all cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 150);
  });
});
