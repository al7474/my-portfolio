"use strict";
const navbar = document.querySelector('nav');
if (navbar) {
    const links = navbar.querySelectorAll('ul li a'); // Select all anchor links in the navbar
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior (scrolling to an anchor)
            const targetId = link.getAttribute('href'); // Get the target element ID from the link's href attribute
            if (targetId) {
                const targetElement = document.querySelector(targetId); // Find the target element by ID
                if (targetElement) {
                    const offset = 120; // Offset to adjust the final scroll position (e.g., navbar height)
                    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Get the position of the target element
                    const offsetPosition = elementPosition - offset; // Adjust the position by the offset
                    const startPosition = window.scrollY; // Starting scroll position
                    const distance = offsetPosition - startPosition; // Distance to scroll
                    const duration = 1000; // Custom scroll duration in milliseconds (1 second)
                    let startTime = null;
                    // Ease-in-out quadratic easing function for smooth scrolling
                    const easeInOutQuad = (t, b, c, d) => {
                        t /= d / 2;
                        if (t < 1)
                            return c / 2 * t * t + b;
                        t--;
                        return -c / 2 * (t * (t - 2) - 1) + b;
                    };
                    // Function to animate the scroll over time
                    const animateScroll = (currentTime) => {
                        if (startTime === null)
                            startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                        window.scrollTo(0, run); // Scroll to the current position
                        if (timeElapsed < duration)
                            requestAnimationFrame(animateScroll); // Continue animation if not yet completed
                    };
                    // Start the scroll animation
                    requestAnimationFrame(animateScroll);
                }
            }
        });
    });
}
