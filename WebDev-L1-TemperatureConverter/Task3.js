
// Get elements from HTML
const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");

// Convert temperature when button is clicked
convertBtn.addEventListener("click", function () {

    // Check whether the input is empty
    if (temperatureInput.value.trim() === "") {
        result.textContent = "Please enter a temperature.";
        return;
    }

    const temperature = Number(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    // Check for invalid numbers
    if (!Number.isFinite(temperature)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    // Convert the input temperature into Celsius
    let celsius;

    if (from === "C") {
        celsius = temperature;
    } else if (from === "F") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    // Temperatures below absolute zero are invalid
    if (celsius < -273.15) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    // Convert Celsius into the selected output unit
    let converted;

    if (to === "C") {
        converted = celsius;
    } else if (to === "F") {
        converted = (celsius * 9 / 5) + 32;
    } else {
        converted = celsius + 273.15;
    }

    // Choose the correct unit symbol
    const symbols = {
        C: "°C",
        F: "°F",
        K: "K"
    };

    // Display the final result
    result.textContent =
        `${temperature} ${symbols[from]} = ${converted.toFixed(2)} ${symbols[to]}`;
});

// Reset all fields
resetBtn.addEventListener("click", function () {
    temperatureInput.value = "";
    fromUnit.value = "C";
    toUnit.value = "F";
    result.textContent = "Your result will appear here";
});
