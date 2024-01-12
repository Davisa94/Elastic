document.addEventListener('scroll', function() {
    const yearElements = document.querySelectorAll('.year');
  
    // Get the scroll position
    const scrollPosition = window.scrollY;
  
    // Calculate the index of the current year based on scroll position
    const currentYearIndex = Math.floor(scrollPosition / window.innerHeight);
  
    // Update the opacity and styling of year elements based on scroll position
    yearElements.forEach((year, index) => {
      const rect = year.getBoundingClientRect();
      const opacity = 1 - (Math.abs(rect.top) / window.innerHeight);
  
      // Add or remove the "current" class based on the index
      if (index === currentYearIndex) {
        year.classList.add('current');
      } else {
        year.classList.remove('current');
      }
  
      // Apply the opacity to the year element
      year.style.opacity = opacity;
    });
  });