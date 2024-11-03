let message = "There is no war in Ba Sing Se";
const input = document.getElementById("inp");
const btn = document.getElementById("btn-1");
const arr = []; 

// Function to log the length of the message
const challengeOne = () => {
    console.log("Message length:", message.length);
}

// Log input value on change
input.addEventListener("input", () => {
    // Display the length of the entered text
    const lengthDisplay = document.querySelector(".display");
    lengthDisplay.innerHTML = `Length of input text: ${input.value.length}`; // Display length directly
});

// On button click, add value to the array
btn.addEventListener("click", () => {
    if (input.value.trim() !== "") { // Check if input is not empty
        arr.push(input.value);
        console.log(arr);
        
        // Display the number of submitted messages
        const display = document.querySelector(".display");
        display.innerHTML = `Number of submitted messages: ${arr.length}<br>Length of input text: ${input.value.length}`; // Display length and count
        
        // Clear input after submission
        input.value = '';
    } else {
        alert("Please enter a message."); // Alert if input is empty
    }
});
