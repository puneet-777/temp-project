const convertBtn = document.getElementById('convertBtn');

const temperatureInput = document.getElementById('temperatureInput');

const conversionType = document.getElementById('conversionType');

const resultElement = document.getElementById('result');


convertBtn.addEventListener('click', convertTemperature);


function convertTemperature() {

  const temperature = parseFloat(temperatureInput.value);


  if (isNaN(temperature)) {

    resultElement.textContent = 'Please enter a valid number.';

    return;

  }


  const type = conversionType.value;

  let result;


  switch (type) {

    case 'celsius':

      result = (temperature * 9/5) + 32;

      resultElement.textContent = `${temperature} °C = ${result.toFixed(2)} °F`;

      break;

    case 'fahrenheit':

      result = (temperature - 32) * 5/9;

      resultElement.textContent = `${temperature} °F = ${result.toFixed(2)} °C`;

      break;

    case 'kelvin':

      result = temperature - 273.15;

      resultElement.textContent = `${temperature} K = ${result.toFixed(2)} °C`;

      break;

    case 'celsiusToKelvin':

      result = temperature + 273.15;

      resultElement.textContent = `${temperature} °C = ${result.toFixed(2)} K`;

      break;

    default:

      resultElement.textContent = 'Please select a conversion type.';

  }

}
