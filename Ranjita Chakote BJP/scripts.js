// Function to handle the appearance of the header based on scroll position
document.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const homeSectionHeight = document.querySelector('.home-section').offsetHeight;

    if (window.scrollY > homeSectionHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Close nav menu on mobile after click
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Slideshow Functionality with Fade Effect
let slideIndex = 0;
function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = 0;  // Set initial opacity to 0
    }
    slideIndex = (slideIndex % slides.length) + 1;
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.opacity = 1;  // Fade in
    setTimeout(showSlides, 3000);
}

document.addEventListener('DOMContentLoaded', showSlides);
