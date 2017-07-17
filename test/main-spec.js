var lcdDigits = require('./fixture.js').loadLcdDigits();
describe(' integration testing', function () {


    it('should print correct  number digits when input has three numbers', function () {

        var firstNumber = 910;
        spyOn(console, 'log');

        require("../main/main.js").showLcdDigits(lcdDigits, firstNumber);

        var testNumberDigitsText = '\n' + '._. ... ._. ' + '\n' + '|_| ..| |.| ' + '\n' + '..| ..| |_| ' + '\n';

        expect(console.log).toHaveBeenCalledWith(testNumberDigitsText);

    });

    it('should print correct  number digits when input has two numbers', function () {

        var secondNumber = 65;
        spyOn(console, 'log');

        require("../main/main.js").showLcdDigits(lcdDigits, secondNumber);

        var testNumberDigitsText = '\n' + '._. ._. ' + '\n' + '|_. |_. ' + '\n' + '|_| ._| ' + '\n';

        expect(console.log).toHaveBeenCalledWith(testNumberDigitsText);

    });

    it('should print correct  number digits when input has only one  numbers', function () {

        var thirdNumber = 1;
        spyOn(console, 'log');

        require("../main/main.js").showLcdDigits(lcdDigits, thirdNumber);

        var testNumberDigitsText = '\n' + '... ' + '\n' + '..| ' + '\n' + '..| ' + '\n';

        expect(console.log).toHaveBeenCalledWith(testNumberDigitsText);

    });
});


describe('unit testing', function () {

    describe('getNumberDigits', function () {

        it('should print correct numberDigits when input has three numbers ', function () {

            var firstInteger = 910;
            var testNumberDigits = [
                ['._.', '|_|', '..|'],
                ['...', '..|', '..|'],
                ['._.', '|.|', '|_|']];

            var numberDigits = require('../main/getNumberDigits.js').getNumberDigits(firstInteger, lcdDigits);

            expect(numberDigits).toEqual(testNumberDigits);

        });

        it('should print correct numberDigits when input has two numbers', function () {

            var secondInteger = 65;
            var testNumberDigits = [['._.', '|_.', '|_|'],
                ['._.', '|_.', '._|']];
            var numberDigits = require('../main/getNumberDigits.js').getNumberDigits(secondInteger, lcdDigits);

            expect(numberDigits).toEqual(testNumberDigits);
        });

        it('should print correct numberDigits when input has only one number', function () {

            var thirdInteger = 1;
            var testNumberDigits = [['...', '..|', '..|']];
            var numberDigits = require('../main/getNumberDigits.js').getNumberDigits(thirdInteger, lcdDigits);

            expect(numberDigits).toEqual(testNumberDigits);
        });
    });

    describe('printNumberDigits', function () {

        it('should print correct NumberDigitsText when input has three numers', function () {

            var firstNumberDigits = [['._.', '|_|', '..|'],
                ['...', '..|', '..|'],
                ['._.', '|.|', '|_|']];
            var testNumberDigitsText = '\n' + '._. ... ._. ' + '\n' + '|_| ..| |.| ' + '\n' + '..| ..| |_| ' + '\n';
            var numberDigitsText = require("../main/printNumberDigits.js").generateNumberDigits(firstNumberDigits);

            expect(numberDigitsText).toEqual(testNumberDigitsText);

        });

        it('should print correct NumberDigitsText when input has two numbers', function () {

            var secondNumberDigits = [['._.', '|_.', '|_|'],
                ['._.', '|_.', '._|']];
            var testNumberDigitsText = '\n' + '._. ._. ' + '\n' + '|_. |_. ' + '\n' + '|_| ._| ' + '\n';
            var numberDigitsText = require("../main/printNumberDigits.js").generateNumberDigits(secondNumberDigits);

            expect(numberDigitsText).toEqual(testNumberDigitsText);

        });

        it('should print correct NumberDigitsText when input has only one numbers', function () {

            var thirdNumberDigits = [['...', '..|', '..|']];
            var testNumberDigitsText = '\n' + '... ' + '\n' + '..| ' + '\n' + '..| ' + '\n';
            var numberDigitsText = require("../main/printNumberDigits.js").generateNumberDigits(thirdNumberDigits);

            expect(numberDigitsText).toEqual(testNumberDigitsText);
        });
    });
});
