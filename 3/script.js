// Variables
const capitalsMap = {
    "China": { capital: "Beijing", img: "./imag/beijing.webp" },
    "Japan": { capital: "Tokyo", img: "./imag/tokyo.webp" },
    "South Korea": { capital: "Seoul", img: "./imag/seoul.webp" },
    "Vietnam": { capital: "Hanoï", img: "./imag/Hanoi.webp" },
    "Malaysia": { capital: "Kuala Lumpur", img: './imag/kuala.webp' }
};

// Function to display the capital and flag
function displayCountryInfo(countryName) {
    const capitalData = capitalsMap[countryName];
    const display = document.querySelector(".capital");
    const image = document.getElementById("country-image");
    
    if (capitalData) {
        display.textContent = `Capital: ${capitalData.capital}`; // Display the capital
        image.src = capitalData.img; // Set the image source
        image.style.display = "block"; // Show the image
    } else {
        alert(" inter your message "); // Alert message for invalid input
        display.textContent = ""; // Clear the capital text
        image.style.display = "none"; // Hide the image if country not found
    }
}

// Input code
const input = document.getElementById("country-input");
const btn = document.getElementById("search-button");

// Button click event
btn.addEventListener("click", () => {
    const countryName = input.value.trim(); // Trim to remove extra spaces
    displayCountryInfo(countryName); // Display country info
});

// Country click events
// const countries = document.querySelectorAll(".country");
// countries.forEach(country => {
//     country.addEventListener("click", () => {
//         const countryName = country.getAttribute("data-country");
//         displayCountryInfo(countryName); // Display country info when clicked
//     });
// });
