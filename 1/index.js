// Variables
let Starting = '<span class="starting-text">Starting: </span>';
let Reached = '<span class="Reached-text">Reached 1!</span>';

// Syracuse function
function syracuse(n) {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = Starting + n + "<br>"; // Print the initial number
    while (n !== 1) { // While n is not 1
        if (n % 2 === 0) { // If n is even
            n = n / 2; // Divide by 2
        } else { // If n is odd
            n = n * 3 + 1; // Multiply by 3 and add 1
        }
        resultDiv.innerHTML += n + "<br>"; // Print the current number after updating
    }
    resultDiv.innerHTML += Reached; // Print the final message with span
}

// Event listener for the start button
document.getElementById("startButton").addEventListener("click", function() {
    let input = document.querySelector(".inp");
    let n = Number(input.value); // Get the input value and convert it to a number
    if (!isNaN(n) && n > 0) { // Check if the input is a positive number
        syracuse(n); // Call the function with the input number
    } else {
        alert("Please enter a valid positive number!"); // Alert the user for invalid input
    }
});
