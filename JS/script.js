function convertTemperature() {
  let celcius = parseFloat(document.getElementById("celciusInput").value);
  let fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
  let kelvin = parseFloat(document.getElementById("kelvinInput").value);
  let celciusOutput = document.getElementById("celciusOutput");
  let fahrenheitOutput = document.getElementById("fahrenheitOutput");
  let kelvinOutput = document.getElementById("kelvinOutput");

  // Convert celcius
  if (!isNaN(celcius)) {
    celciusOutput.textContent = `Celcius : ${celcius}`;
    fahrenheitOutput.textContent = `Fahrenheit : (${celcius} * 9) / 5 + 32 = ${
      (celcius * 9) / 5 + 32
    }`;
    kelvinOutput.textContent = `Kelvin : ${celcius} + 273.15 = ${
      celcius + 273.15
    }`;
  } else {
    celciusOutput.textContent = "Celcius :";
    fahrenheitOutput.textContent = "Fahrenheit :";
    kelvinOutput.textContent = "Kelvin :";
  }

  // Convert Fahrenheit
  if (!isNaN(fahrenheit)) {
    celciusOutput.textContent = `Celcius : ((${fahrenheit} - 32) * 5) / 9 = ${
      ((fahrenheit - 32) * 5) / 9
    }`;
    fahrenheitOutput.textContent = `Fahrenheit : ${fahrenheit}`;
    kelvinOutput.textContent = `Kelvin : ((${fahrenheit} - 32) * 5) / 9 + 273.15 = ${
      ((fahrenheit - 32) * 5) / 9 + 273.15
    }`;
  }

  // Convert Kelvin
  if (!isNaN(kelvin)) {
    celciusOutput.textContent = `Celcius : ${kelvin} - 273.15 = ${
      kelvin - 273.15
    }`;
    fahrenheitOutput.textContent = `Fahrenheit : ((${kelvin} - 273.15) * 9) / 5 + 32 = ${
      ((kelvin - 273.15) * 9) / 5 + 32
    }`;
    kelvinOutput.textContent = `Kelvin : ${kelvin}`;
  }
}

function resetTemperature() {
  document.getElementById("celciusInput").value = "";
  document.getElementById("fahrenheitInput").value = "";
  document.getElementById("kelvinInput").value = "";

  let celciusOutput = document.getElementById("celciusOutput");
  let fahrenheitOutput = document.getElementById("fahrenheitOutput");
  let kelvinOutput = document.getElementById("kelvinOutput");

  celciusOutput.textContent = "Celcius:";
  fahrenheitOutput.textContent = "Fahrenheit:";
  kelvinOutput.textContent = "Kelvin:";
}
