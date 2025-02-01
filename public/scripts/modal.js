"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modalProyectos");
    const closeModalButton = document.getElementById('closeButton');
    const verMasBtn = document.getElementById("verMasProyectos");
    // Check if modal and buttons exist
    if (!modal || !closeModalButton || !verMasBtn) {
        console.error("Could not find one or more elements in the DOM.");
        return; // Exit function if any element is null
    }
    // Function to disable background scroll but allow scrolling within the modal
    function disableScroll() {
        document.body.style.overflow = 'hidden';
        modal.style.overflowY = 'auto'; // Allow scroll within the modal
    }
    // Function to enable scroll on the page
    function enableScroll() {
        document.body.style.overflow = 'auto';
        modal.style.overflowY = 'hidden'; // Prevent overflow when not needed
    }
    // Open modal when 'Ver más proyectos' is clicked
    verMasBtn.addEventListener("click", () => {
        modal.classList.add('visible'); // Show the modal by adding 'visible'
        disableScroll(); // Disable background scrolling
    });
    // Close modal when 'Cerrar' button is clicked
    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('visible'); // Hide the modal by removing 'visible'
        enableScroll(); // Enable background scrolling
    });
    // Close modal on 'Escape' key press
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            modal.classList.remove('visible'); // Hide modal
            enableScroll(); // Enable background scrolling
        }
    });
    // Close modal if clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('visible'); // Hide modal if clicking outside
            enableScroll(); // Enable background scrolling
        }
    });
});
