// Display current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Hook input events after DOM loads
document.addEventListener("DOMContentLoaded", function() {
  var unitSelect = document.getElementById("unit-select");
  var tempInput = document.getElementById("temp-input");

  // Convert when input or selection changes
  unitSelect.addEventListener("change", convertTemperature);
  tempInput.addEventListener("input", convertTemperature);
});

// Convert temperature based on selected unit
function convertTemperature() {
  var unit = document.getElementById("unit-select").value;
  var value = parseFloat(document.getElementById("temp-input").value);
  var result1 = document.getElementById("result1");
  var result2 = document.getElementById("result2");
  
  // Handles invalid or empty inputs  
  if (isNaN(value)) {
    result1.textContent = "";
    result2.textContent = "";
    return;
  }

  // Store conversion results
  var celsius, fahrenheit, kelvin;

  // Conversion from Celsius to Fahrenheit & Kelvin
  if (unit === "celsius") {
    fahrenheit = (value * 9/5) + 32;
    kelvin = value + 273.15;
    result1.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    result2.textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
  }
    
    // Conversion from Fahrenheit to Celsius & Kelvin
  else if (unit === "fahrenheit") {
    celsius = (value - 32) * 5/9;
    kelvin = celsius + 273.15;
    result1.textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    result2.textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
  }

    // Conversion from Kelvin to Celsius & Fahrenheit
  else if (unit === "kelvin") {
    celsius = value - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
    result1.textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    result2.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  }
}
