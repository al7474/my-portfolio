"use strict";
// Apply the 'fade-in' class to technology items when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const techItems = document.querySelectorAll('.tech-item'); // Select all technology items
    // Add the 'fade-in' class with a small delay for each item
    techItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in'); // Apply the fade-in animation to each item
        }, index * 200); // Add a delay to make the animation progressive
    });
});
