function checkSeason(month) {
    month = month.toLowerCase(); // Convert input to lowercase to avoid case sensitivity issues

    if (["december", "january", "february"].includes(month)) {
        return "Winter";
    } else if (["march", "april", "may"].includes(month)) {
        return "Spring";
    } else if (["june", "july", "august"].includes(month)) {
        return "Summer";
    } else if (["september", "october", "november"].includes(month)) {
        return "Autumn";
    } else {
        return "Please enter a valid month name"; // Message for invalid input
    }
}

function displaySeason() {
    const monthInput = document.getElementById("month-input").value;
    const seasonResult = checkSeason(monthInput);
    document.getElementById("season-result").textContent = seasonResult;
}
