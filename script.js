// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// Contact alert
function contactAlert() {
  alert("Email clicked! 📬\nLet's connect Avika Joshi style 💌");
}

// Fade-in animation on scroll
const cards = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
cards.forEach(card => observer.observe(card));
