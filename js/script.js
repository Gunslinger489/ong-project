// Menu Responsivo
let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  menuSection.classList.toggle("on", show);
  show = !show;
});

ScrollReveal().reveal(".features", { delay: 500 });
ScrollReveal().reveal(".about", { delay: 600 });
ScrollReveal().reveal(".testimonials", { delay: 700 });
ScrollReveal().reveal(".contact", { delay: 800 });
