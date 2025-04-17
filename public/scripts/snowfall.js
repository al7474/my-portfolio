"use strict";
const snowfallContainer = document.getElementById('snowfall-container');
// Function to create a snowflake element
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake'; // Assigning a class for styling
    snowflake.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration for falling animation
    snowflake.style.opacity = Math.random() + 0.5 + ''; // Random opacity for variation
    snowfallContainer === null || snowfallContainer === void 0 ? void 0 : snowfallContainer.appendChild(snowflake); // Append the snowflake to the container
    // Remove the snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, 5000); // The snowflake is removed after 5 seconds
}
// Function to start the snowfall effect by creating flakes every 800ms
function startSnowfall() {
    setInterval(createSnowflake, 800); // Create a new snowflake every 800 ms
}
startSnowfall(); // Start the snowfall
