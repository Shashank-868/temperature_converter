function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const unit = document.getElementById("unit").value;
    const resultElement = document.getElementById("result");

    if (isNaN(inputTemp)) {
        resultElement.innerText = "Please enter a valid temperature.";
        return;
    }

    if (unit === "celsius") {
        const fahrenheit = (inputTemp * 9/5) + 32;
        resultElement.innerText = `${inputTemp}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        const celsius = (inputTemp - 32) * 5/9;
        resultElement.innerText = `${inputTemp}°F is equal to ${celsius.toFixed(2)}°C`;
    }
}
