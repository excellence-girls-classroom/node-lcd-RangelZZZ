function showLcdDigits(lcdDigits, Integer) {

    var numberDigits = require('./getNumberDigits.js').getNumberDigits(Integer, lcdDigits);
    var numberDigitsText = require('./printNumberDigits.js').printNumberDigits(numberDigits);

    console.log(numberDigitsText);
}

exports.showLcdDigits = showLcdDigits;