function showLcdDigits(lcdDigits, integer) {

    var numberDigits = require('./getNumberDigits.js').getNumberDigits(integer, lcdDigits);
    var numberDigitsText = require('./printNumberDigits.js').generateNumberDigits(numberDigits);

    console.log(numberDigitsText);

}

exports.showLcdDigits = showLcdDigits;