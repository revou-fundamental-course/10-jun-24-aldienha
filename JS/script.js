function convertTemperature() {
    let celsius = parseFloat(document.getElementById("celsiusInput").value);
    let fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    let kelvin = parseFloat(document.getElementById("kelvinInput").value);
    let celsiusOutput = document.getElementById("celsiusOutput");
    let fahrenheitOutput = document.getElementById("fahrenheitOutput");
    let kelvinOutput = document.getElementById("kelvinOutput");
  
    // Convert Celsius
    if (!isNaN(celsius)) {
      celsiusOutput.textContent = `Celsius: ${celsius}`;
      fahrenheitOutput.textContent = `Fahrenheit: ${(celsius * 9) / 5 + 32}`;
      kelvinOutput.textContent = `Kelvin: ${celsius + 273.15}`;
    } else {
      celsiusOutput.textContent = "Celsius:";
      fahrenheitOutput.textContent = "Fahrenheit:";
      kelvinOutput.textContent = "Kelvin:";
    }
  
    // Convert Fahrenheit
    if (!isNaN(fahrenheit)) {
      celsiusOutput.textContent = `Celsius: ${((fahrenheit - 32) * 5) / 9}`;
      fahrenheitOutput.textContent = `Fahrenheit: ${fahrenheit}`;
      kelvinOutput.textContent = `Kelvin: ${
        ((fahrenheit - 32) * 5) / 9 + 273.15
      }`;
    }
  
    // Convert Kelvin
    if (!isNaN(kelvin)) {
      celsiusOutput.textContent = `Celsius: ${kelvin - 273.15}`;
      fahrenheitOutput.textContent = `Fahrenheit: ${
        ((kelvin - 273.15) * 9) / 5 + 32
      }`;
      kelvinOutput.textContent = `Kelvin: ${kelvin}`;
    }
  }
  
  function resetTemperature() {
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
    document.getElementById("kelvinInput").value = "";
  
    let celsiusOutput = document.getElementById("celsiusOutput");
    let fahrenheitOutput = document.getElementById("fahrenheitOutput");
    let kelvinOutput = document.getElementById("kelvinOutput");
  
    celsiusOutput.textContent = "Celsius:";
    fahrenheitOutput.textContent = "Fahrenheit:";
    kelvinOutput.textContent = "Kelvin:";
  }
  