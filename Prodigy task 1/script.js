// Get references to elements
const navbar = document.getElementById('navbar');

// Function to handle scroll events
window.onscroll = function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
