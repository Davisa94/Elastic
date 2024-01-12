document.addEventListener('scroll', function() {
    const years = document.querySelectorAll('.year');
  
    years.forEach(year => {
      const rect = year.getBoundingClientRect();
      const opacity = 1 - (Math.abs(rect.top) / window.innerHeight);
      year.style.opacity = opacity;
    });
  });