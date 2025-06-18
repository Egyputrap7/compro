document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Intersection Observer untuk animasi manual
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // AOS init (jika AOS digunakan)
  AOS.init({
    duration: 1000,
    once: true,
  });
});
