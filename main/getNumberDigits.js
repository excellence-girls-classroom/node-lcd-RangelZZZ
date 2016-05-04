function getNumberDigits(integer,lcdDigits) {

    var numberDigits = [];
    var stringNumber = integer.toString();

    for (var i = 0; i < stringNumber.length; i++) {

        if (isExist(parseInt(stringNumber.charAt(i)), lcdDigits)) {

            var digit = isExist(parseInt(stringNumber.charAt(i)), lcdDigits);
            numberDigits.push(digit);
        }
    }

    return numberDigits;
}

function isExist(number, lcdDigits) {

    for (var i = 0; i < lcdDigits.length; i++) {
        if (number === parseInt(lcdDigits[i].number)) {

            return lcdDigits[i].digit;
        }
    }
}

exports.getNumberDigits = getNumberDigits;
