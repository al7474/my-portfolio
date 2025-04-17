"use strict";
var _a, _b;
// Add event listener to the "View More" button
(_a = document.getElementById('viewMoreButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    // Get the element with the ID 'extraProject'
    const extraProject = document.getElementById('extraProject');
    // Check if the 'extraProject' element exists
    if (extraProject) {
        // Toggle the 'hidden' class to show or hide the 'extraProject' element
        extraProject.classList.toggle('hidden');
    }
});
// Add event listener to the "Close" button
(_b = document.getElementById('closeButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    // Get the element with the ID 'extraProject'
    const extraProject = document.getElementById('extraProject');
    // Check if the 'extraProject' element exists
    if (extraProject) {
        // Add the 'hidden' class to hide the 'extraProject' element
        extraProject.classList.add('hidden');
    }
});
