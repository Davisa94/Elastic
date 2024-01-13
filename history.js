// document.addEventListener('scroll', function() {
//     const yearElements = document.querySelectorAll('.year');
  
//     // Get the scroll position
//     const scrollPosition = window.scrollY;
  
//     // Calculate the index of the current year based on scroll position
//     const currentYearIndex = Math.floor(scrollPosition / window.innerHeight);
  
//     // Update the opacity and styling of year elements based on scroll position
//     yearElements.forEach((year, index) => {
//       const rect = year.getBoundingClientRect();
//       const opacity = 1 - (Math.abs(rect.top) / window.innerHeight);
  
//       // Add or remove the "current" class based on the index
//       if (index === currentYearIndex) {
//         year.classList.add('current');
//       } else {
//         year.classList.remove('current');
//       }
  
//       // Apply the opacity to the year element
//       year.style.opacity = opacity;
//     });
//   });
// fadingManager();

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
// fadingManager5();
// fadingManager6();
// scrollingManager();
// function scrollingManager() {
//   const yearElements = document.querySelectorAll('.year');
//   const options = {
//     threshold: 0.5 // Adjust this value as needed
//   };

//   const intersectionCallback = entries => {
//     entries.forEach(entry => {
//       const leafNodes = entry.target.querySelectorAll(':scope > *');
//       const isVisible = entry.intersectionRatio > 0;

//       leafNodes.forEach((node, nodeIndex) => {
//         if (isVisible && nodeIndex === 0) {
//           node.classList.add('current');
//         } else {
//           node.classList.remove('current');
//         }
//       });
//     });
//   };

//   const observer = new IntersectionObserver(intersectionCallback, options);

//   yearElements.forEach(year => {
//     const leafNodes = year.querySelectorAll(':scope > *');
//     leafNodes.forEach(node => observer.observe(node));
//   });

//   // Cleanup function to disconnect the IntersectionObserver
//   return () => {
//     observer.disconnect();
//   };
// }

function fadingManager6()
{
  const yearElements = document.querySelectorAll('.year');

  const scrollHandler = () => {
    yearElements.forEach(year => {
      const leafNodes = year.querySelectorAll(':scope > *');

      const fadeInSection = new FadeInSection(year);

      leafNodes.forEach((node, nodeIndex) => {
        const fadeInSectionNode = new FadeInSection(node);

        // Add or remove the "current" class based on the visibility
        if (fadeInSection.isVisible && nodeIndex === 0) {
          node.classList.add('current');
        } else {
          node.classList.remove('current');
        }

        // Apply the opacity based on the visibility
        node.style.opacity = fadeInSectionNode.isVisible ? 1 : 0;
      });
    });
  };

  document.addEventListener('scroll', scrollHandler);
  scrollHandler(); // Call the handler initially to apply the fading effect

  // Cleanup function to remove the scroll event listener
  return () => {
    document.removeEventListener('scroll', scrollHandler);
  };
}

function fadingManager2()
{
  document.addEventListener('scroll', function() {
    const yearElements = document.querySelectorAll('.year');
  
    // Update the opacity and styling of year elements and their leaf nodes based on scroll position
    yearElements.forEach((year, index) => {
      const rect = year.getBoundingClientRect();
      const startFadeIn = rect.top - window.innerHeight; // Start fading in when the top of the div is window.innerHeight away from the viewport
      const endFadeOut = rect.bottom; // Start fading out when the bottom of the div is at the top of the viewport
      const scrollPosition = window.scrollY;
  
      let opacity;
  
      if (scrollPosition < startFadeIn) {
        opacity = 0; // Fully transparent if scrolled before the div
      } else if (scrollPosition > endFadeOut) {
        opacity = 1; // Fully opaque if scrolled past the div
      } else {
        const fadeInCurve = 5; // Adjust this value to control the sharpness of the fade in curve
        opacity = Math.pow((scrollPosition - startFadeIn) / window.innerHeight, fadeInCurve);
      }
  
      // Add or remove the "current" class based on the index and scroll position
      if (opacity >= 1) {
        year.classList.add('current');
      } else {
        year.classList.remove('current');
      }
  
      // Apply the opacity to the year element and its leaf nodes
      year.style.opacity = opacity;
      const leafNodes = year.querySelectorAll(':scope > *');
      leafNodes.forEach(node => {
        node.style.opacity = opacity;
      });
    });
  });
}

function fadingManager5()
{
  document.addEventListener('scroll', function() {
    const yearElements = document.querySelectorAll('.year');

    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Calculate the index of the current year based on scroll position
    const currentYearIndex = Math.floor(scrollPosition / window.innerHeight);

    // Update the opacity and styling of year elements and their leaf nodes based on scroll position
    yearElements.forEach((year, index) => {
      const leafNodes = year.querySelectorAll(':scope > *');

      leafNodes.forEach((node, nodeIndex) => {
        const rect = node.getBoundingClientRect();
        const startFadeIn = rect.top - window.innerHeight; // Start fading in when the top of the leaf node is window.innerHeight away from the viewport
        const endFadeOut = rect.bottom; // Start fading out when the bottom of the leaf node is at the top of the viewport

        // Calculate the opacity for each leaf node
        let opacity;
        if (scrollPosition < startFadeIn) {
          opacity = 0; // Fully transparent if scrolled before the leaf node
        } else if (scrollPosition > endFadeOut) {
          opacity = 1; // Fully opaque if scrolled past the leaf node
        } else {
          const fadeInCurve = 2; // Adjust this value to control the sharpness of the fade in curve
          opacity = Math.pow((scrollPosition - startFadeIn) / window.innerHeight, fadeInCurve);
        }

        // Apply the opacity to the leaf node
        node.style.opacity = opacity;

        // Add or remove the "current" class based on the index
        if (index === currentYearIndex && nodeIndex === 0) {
          node.classList.add('current');
        } else {
          node.classList.remove('current');
        }
      });
    });
  });
}

function fadingManager4()
{
  document.addEventListener('scroll', function() {
    const yearElements = document.querySelectorAll('.year');
  
    // Update the opacity and styling of year elements and their leaf nodes based on scroll position
    yearElements.forEach((year, index) => {
      const rect = year.getBoundingClientRect();
      const startFadeIn = rect.top - window.innerHeight; // Start fading in when the top of the div is window.innerHeight away from the viewport
      const endFadeOut = rect.bottom; // Start fading out when the bottom of the div is at the top of the viewport
      const scrollPosition = window.scrollY;
  
      // Calculate the opacity for the year element
      let opacity;
      if (scrollPosition < startFadeIn) {
        opacity = 0; // Fully transparent if scrolled before the div
      } else if (scrollPosition > endFadeOut) {
        opacity = 1; // Fully opaque if scrolled past the div
      } else {
        const fadeInCurve = 2; // Adjust this value to control the sharpness of the fade in curve
        opacity = Math.pow((scrollPosition - startFadeIn) / window.innerHeight, fadeInCurve);
      }
  
      // Apply the opacity to the year element
      year.style.opacity = opacity;
  
      // Apply the opacity to the leaf nodes of the year element
      const leafNodes = year.querySelectorAll(':scope > *');
      leafNodes.forEach(node => {
        const leafRect = node.getBoundingClientRect();
        const leafStartFadeIn = leafRect.top - window.innerHeight; // Start fading in when the top of the leaf node is window.innerHeight away from the viewport
        const leafEndFadeOut = leafRect.bottom; // Start fading out when the bottom of the leaf node is at the top of the viewport
        
        // Calculate the opacity for each leaf node
        let leafOpacity;
        if (scrollPosition < leafStartFadeIn) {
          leafOpacity = 0; // Fully transparent if scrolled before the leaf node
        } else if (scrollPosition > leafEndFadeOut) {
          leafOpacity = 1; // Fully opaque if scrolled past the leaf node
        } else {
          leafOpacity = Math.pow((scrollPosition - leafStartFadeIn) / window.innerHeight, fadeInCurve);
        }
  
        // Apply the opacity to each leaf node
        node.style.opacity = leafOpacity;
      });
    });
  });
}

function fadingManager3()
{
  document.addEventListener('scroll', function() {
    const yearElements = document.querySelectorAll('.year');
  
    // Update the opacity and styling of year elements and their leaf nodes based on scroll position
    yearElements.forEach((year, index) => {
      const rect = year.getBoundingClientRect();
      const startFadeIn = rect.top - window.innerHeight; // Start fading in when the top of the div is window.innerHeight away from the viewport
      const endFadeOut = rect.bottom; // Start fading out when the bottom of the div is at the top of the viewport
      const scrollPosition = window.scrollY;
  
      // Calculate the opacity for the year element
      let opacity;
      if (scrollPosition < startFadeIn) {
        opacity = 0; // Fully transparent if scrolled before the div
      } else if (scrollPosition > endFadeOut) {
        opacity = 1; // Fully opaque if scrolled past the div
      } else {
        const fadeInCurve = 10; // Adjust this value to control the sharpness of the fade in curve
        opacity = Math.pow((scrollPosition - startFadeIn) / window.innerHeight, fadeInCurve);
      }
  
      // Apply the opacity to the year element
      year.style.opacity = opacity;
  
      // Apply the opacity to the leaf nodes of the year element
      const leafNodes = year.querySelectorAll(':scope > *');
      leafNodes.forEach(node => {
        node.style.opacity = opacity;
      });
    });
  });
}

// fadingManager();
// new fversion of fading in function form:
function fadingManager() {
  document.addEventListener('scroll', function() {
    const yearElements = document.querySelectorAll('.year');
  
    // Get the scroll position
    const scrollPosition = window.scrollY;
  
    // Calculate the index of the current year based on scroll position
    const currentYearIndex = Math.floor(scrollPosition / window.innerHeight);
  
    // Update the opacity and styling of year elements and their leaf nodes based on scroll position
    yearElements.forEach((year, index) => {
      const leafNodes = year.querySelectorAll(':scope > *');
  
      leafNodes.forEach((node, nodeIndex) => {
        const rect = node.getBoundingClientRect();
        const opacity = 1 - (Math.abs(rect.top) / window.innerHeight);
  
        // Add or remove the "current" class based on the index
        if (index === currentYearIndex && nodeIndex === 0) {
          node.classList.add('current');
        } else {
          node.classList.remove('current');
        }
  
        // Apply the opacity to the leaf node
        node.style.opacity = opacity;
      });
    });
  });
}

  // Get the reference to the div element with the id "years"
const yearsDiv = document.querySelector("#years");

console.log(yearsDiv);
// Define the range of years
const startYear = 2024;
const endYear = 2000;

// Iterate over each year in the range
// Iterate over each year in the range
for (let year = startYear; year >= endYear; year--) {
  // Create a new div element for the year
  const yearDiv = document.createElement("div");
  yearDiv.className = "row year";
  
  // Create a new h1 element for the year and set its text content
  const h1 = document.createElement("h1");
  h1.className = "text-left";
  h1.textContent = year;

  // Create a new div element for the year's content
  const div = document.createElement("div");
  div.className = "display-4 pl-5";
  
  // Load the year-specific HTML file
  const yearHTML = `src/parts/years/${year}.html`;
  fetch(yearHTML)
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(`Failed to load ${yearHTML}`);
      }
    })
    .then(html => {
      // Set the fetched HTML as the content of the div element
      div.innerHTML = html;
    })
    .catch(error => {
      console.error(error);
      div.innerHTML = ""; // Set the innerHTML to an empty string
    });

  // Append the h1 and div elements to the yearDiv
  yearDiv.appendChild(h1);
  yearDiv.appendChild(div);

  // Append the yearDiv to the yearsDiv
  yearsDiv.appendChild(yearDiv);
}