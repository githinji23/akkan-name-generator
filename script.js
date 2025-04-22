// JavaScript code
function getAkanName() {
    // Get user input
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = document.getElementById("year").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validate input
    if (day < 1 || day > 31) {
        alert("Day must be between 1 and 31.");
        return;
    }
    if (month < 1 || month > 12) {
        alert("Month must be between 1 and 12.");
        return;
    }
    if (!gender) {
        alert("Please select a gender.");
        return;
    }

    // Calculate the day of the week
    const CC = parseInt(year.slice(0, 2)); // First two digits of the year
    const YY = parseInt(year.slice(2)); // Last two digits of the year
    const d = ((Math.floor(4 * CC - 2 * CC - 1) + Math.floor(5 * YY) +
        Math.floor(26 * (month + 1) / 10) + day) % 7);

    // Map day of the week to Akan names
    const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const akanName = gender.value === "male" ? maleAkanNames[d] : femaleAkanNames[d];

    // Display result
    document.getElementById("result").textContent = `Your Akan name is: ${akanName}`;
}