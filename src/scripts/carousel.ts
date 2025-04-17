// src/scripts/carousel.ts

// Function to create a carousel
function createCarousel(carouselId: string, indicatorId: string) {
  const carousel = document.getElementById(carouselId) as HTMLElement;
  const indicatorsContainer = document.getElementById(indicatorId) as HTMLElement;
  const images = Array.from(carousel.children) as HTMLImageElement[];
  let currentIndex = 0;
  let intervalId: number | null = null; // Stores the interval ID for auto-changing images

  // Initializes the carousel and the indicators
  initializeCarousel();

  function initializeCarousel() {
    createIndicators(); // Creates the indicators
    updateCarousel();   // Displays the first image
    setupEventListeners(); // Sets up event listeners for navigation
    startAutoChange();   // Starts the automatic image change
  }

  // Creates indicators based on the number of images
  function createIndicators() {
    images.forEach((_, index) => {
      const indicator = document.createElement('button');
      indicator.className = 'w-3 h-3 rounded-full bg-gray-500 hover:bg-gray-700 focus:outline-none';
      indicator.setAttribute('data-index', index.toString());
      indicator.addEventListener('click', () => goToImage(index));
      indicatorsContainer.appendChild(indicator);
    });
  }

  // Updates the carousel to show the current image and updates the indicators
  function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate the offset based on the current index
    carousel.style.transform = `translateX(${offset}%)`; // Apply the translation for the carousel

    // Update the indicators to reflect the current image
    Array.from(indicatorsContainer.children).forEach((indicator, index) => {
      (indicator as HTMLElement).classList.toggle('bg-gray-700', index === currentIndex);
      (indicator as HTMLElement).classList.toggle('bg-gray-500', index !== currentIndex);
    });
  }

  // Navigates to the specified image
  function goToImage(index: number) {
    currentIndex = index;
    updateCarousel(); // Update the carousel to display the new image
    resetAutoChange(); // Reset the auto-change timer when a manual change happens
  }

  // Sets up event listeners for navigation (previous/next image)
  function setupEventListeners() {
    // Previous navigation button
    const prevButton = document.createElement('button');
    prevButton.textContent = '<'; // Backward icon
    prevButton.addEventListener('click', previousImage);
    carousel.appendChild(prevButton);

    // Next navigation button
    const nextButton = document.createElement('button');
    nextButton.textContent = '>'; // Forward icon
    nextButton.addEventListener('click', nextImage);
    carousel.appendChild(nextButton);
  }

  // Navigates to the previous image
  function previousImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel(); // Update the carousel
    resetAutoChange(); // Reset the timer when navigating manually
  }

  // Navigates to the next image
  function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel(); // Update the carousel
    resetAutoChange(); // Reset the timer when navigating manually
  }

  // Starts the automatic image change
  function startAutoChange() {
    intervalId = window.setInterval(() => {
      nextImage(); // Change to the next image
    }, 5000); // Change image every 5 seconds
  }

  // Resets the auto-change timer when interacting with the carousel
  function resetAutoChange() {
    if (intervalId) {
      window.clearInterval(intervalId); // Clear the previous interval
      startAutoChange(); // Start a new interval for auto-changing images
    }
  }
}

// Initialize the carousel when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
  const carouselElements = document.querySelectorAll('[id^="carousel"]'); // Select all carousel elements

  carouselElements.forEach(carousel => {
    const carouselId = carousel.id;
    const indicatorId = carousel.nextElementSibling?.id; // Assume the indicators come after the carousel
    if (indicatorId) {
      createCarousel(carouselId, indicatorId); // Create a new instance of the carousel
    }
  });
});
