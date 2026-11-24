
// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("show");

  const icon = menuBtn.querySelector("i");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");

});

// Close menu after clicking links
document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("show");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach(button => {

  button.addEventListener("click", () => {

    const currentItem = button.parentElement;
    const answer = currentItem.querySelector(".faq-answer");

    const isOpen = currentItem.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach(item => {

      item.classList.remove("active");
      item.querySelector(".faq-answer").style.maxHeight = null;

    });

    if (!isOpen) {

      currentItem.classList.add("active");

      answer.style.maxHeight =
        answer.scrollHeight + "px";

    }

  });

});

// Footer Year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Reveal Animation
const revealElements = document.querySelectorAll(
  ".service-card, .feature-card, .process-card, .about-content"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});

revealElements.forEach(element => {

  element.classList.add("reveal");
  observer.observe(element);

});
