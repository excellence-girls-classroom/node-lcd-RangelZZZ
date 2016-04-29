function getNumberDigits(firstInteger,lcdDigits) {

    var numberDigits = [];
    var stringNumber = firstInteger.toString();

    for (var i = 0; i < stringNumber.length; i++) {

        if (isExit(parseInt(stringNumber.charAt(i)), lcdDigits)) {

            var digit = isExit(parseInt(stringNumber.charAt(i)), lcdDigits);
            numberDigits.push(digit);
        }
    }

    return numberDigits;
}

function isExit(number, lcdDigits) {

    for (var i = 0; i < lcdDigits.length; i++) {
        if (number === parseInt(lcdDigits[i].number)) {

            return lcdDigits[i].digits;
        }
    }
}

exports.getNumberDigits = getNumberDigits;
