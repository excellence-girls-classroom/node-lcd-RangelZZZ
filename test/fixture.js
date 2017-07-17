function loadLcdDigits() {

    return [{digit: ['._.', '|.|', '|_|'], number: 0},
        {digit: ['...', '..|', '..|'], number: 1},
        {digit: ['._.', '._|', '|_.'], number: 2},
        {digit: ['._.', '._|', '._|'], number: 3},
        {digit: ['...', '|_|', '..|'], number: 4},
        {digit: ['._.', '|_.', '._|'], number: 5},
        {digit: ['._.', '|_.', '|_|'], number: 6},
        {digit: ['._.', '..|', '..|'], number: 7},
        {digit: ['._.', '|_|', '|_|'], number: 8},
        {digit: ['._.', '|_|', '..|'], number: 9}];
}

exports.loadLcdDigits = loadLcdDigits;