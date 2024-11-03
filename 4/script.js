// Generate a random number between 0 and 3
document.getElementById('predict-button').addEventListener('click', function() {
    let randomizer = Math.floor(Math.random() * 4);
    let fate;

    if (randomizer === 0) {
        fate = "A certain victory";
    } else if (randomizer === 1) {
        fate = "not so certain victory";
    } else if (randomizer === 2) {
        fate = "an uneasy victory";
    } else {
        fate = "Your fate is unclear, ô chosen undead";
    }

    // Display the result
    document.getElementById('result').textContent = fate;
});
    