// Add event listener to the "View More" button
document.getElementById('viewMoreButton')?.addEventListener('click', () => {
  // Get the element with the ID 'extraProject'
  const extraProject = document.getElementById('extraProject');

  // Check if the 'extraProject' element exists
  if (extraProject) {
    // Toggle the 'hidden' class to show or hide the 'extraProject' element
    extraProject.classList.toggle('hidden');
  }
});

// Add event listener to the "Close" button
document.getElementById('closeButton')?.addEventListener('click', () => {
  // Get the element with the ID 'extraProject'
  const extraProject = document.getElementById('extraProject');

  // Check if the 'extraProject' element exists
  if (extraProject) {
    // Add the 'hidden' class to hide the 'extraProject' element
    extraProject.classList.add('hidden');
  }
});
