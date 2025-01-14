

// Show the banner when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("construction-banner");
  
    // Show the banner by adding 'show' class
    setTimeout(() => {
      banner.classList.add("show");
    }, 100); // Delay slightly to ensure the transition starts
  
    // Close the banner when the close button is clicked
    document.getElementById("close-banner-btn").addEventListener("click", () => {
      banner.classList.add("close"); // Trigger the exit animation
    });

  });
  