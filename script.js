// Akan Name Generator Script

document.getElementById("akanForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get user input
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    // Validate input
    if (!birthdate || !gender) {
        alert("Please fill in all fields.");
        return;
    }

    // Extract day, month, and year from the birthdate
    const [year, month, day] = birthdate.split("-").map(Number);

    // Calculate the day of the week
    const dayIndex = calculateDayOfWeek(day, month, year);

    // Get the Akan name
    const akanName = getAkanName(dayIndex, gender);

    // Display the result
    document.getElementById("result").textContent = `Your Akan name is: ${akanName}`;
});

// Function to calculate the day of the week using Zeller's Congruence
function calculateDayOfWeek(day, month, year) {
    let adjustedMonth = month;
    let adjustedYear = year;
    if (month < 3) {
        adjustedMonth += 12;
        adjustedYear -= 1;
    }
    const q = day;
    const m = adjustedMonth;
    const K = adjustedYear % 100; // Year of the century
    const J = Math.floor(adjustedYear / 100); // Zero-based century
    const d = (q + Math.floor((13 * (m + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - 2 * J) % 7;
    return (d + 7) % 7; // Ensure positive index
}

// Function to get the Akan name based on gender and day index
function getAkanName(dayIndex, gender) {
    const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    return gender === "male" ? maleAkanNames[dayIndex] : femaleAkanNames[dayIndex];
}