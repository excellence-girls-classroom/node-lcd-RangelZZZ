function generateNumberDigits(numberDigits) {

    var numberDigistsText = '\n';

    for (var j = 0; j < 3; j++) {
        for (var i = 0; i < numberDigits.length; i++) {
            numberDigistsText += numberDigits[i][j] + ' ';
        }

        numberDigistsText += '\n';
    }

    return numberDigistsText;
}

exports.generateNumberDigits = generateNumberDigits;