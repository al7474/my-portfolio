// scripts/dotsEffect.ts
export function animateDots() {
    const dotsElement = document.getElementById('dots');
    if (!dotsElement) {
        console.error("Element with id 'dots' not found in the DOM");
        return;
    }
    let dots = '';
    let count = 0;
    // Function that updates the dots
    function updateDots() {
        count = (count + 1) % 4; // Cycles between 0, 1, 2, and 3 dots
        dots = '.'.repeat(count); // Generates the correct number of dots
        dotsElement.textContent = dots; // Updates the content of the span element
    }
    // Executes the updateDots function every 500ms (half a second)
    setInterval(updateDots, 500);
}
animateDots();
