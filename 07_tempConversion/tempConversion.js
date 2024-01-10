const convertToCelsius = function(temp) {

  let convert = ((temp - 32) / 1.8)
  

  return Number(convert.toFixed(1))
};

const convertToFahrenheit = function(temp) {

  let convert = (temp * 1.8) + 32

  return Number(convert.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
