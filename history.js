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

  // Get the reference to the div element with the id "years"
const yearsDiv = document.getElementById("years");

// Define the range of years
const startYear = 2023;
const endYear = 2000;

// Iterate over each year in the range
for (let year = startYear; year >= endYear; year--) {
  // Create a new div element for the year
  const yearDiv = document.createElement("div");
  yearDiv.className = "row year";
  
  // Create a new h1 element for the year and set its text content
  const h1 = document.createElement("h1");
  h1.className = "text-left";
  h1.textContent = year;

  // Create a new p element for the year's content
  const p = document.createElement("p");
  p.className = "display-4 pl-5";
  
  // Load the year-specific HTML file
  const yearHTML = `src/parts/years/${year}.html`;
  fetch(yearHTML)
    .then(response => response.text())
    .then(html => {
      // Set the fetched HTML as the content of the p element
      p.innerHTML = html;
    })
    .catch(error => {
      console.error(`Failed to load ${yearHTML}:`, error);
    });

  // Append the h1 and p elements to the yearDiv
  yearDiv.appendChild(h1);
  yearDiv.appendChild(p);

  // Append the yearDiv to the yearsDiv
  yearsDiv.appendChild(yearDiv);
}