 module.exports = function toReadable (number) {
    singleDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    doubleDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    belowHundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let word = ''
    let splitNumber;
    let tensOfNumber;
    let numberUnits;

    if (number < 10) {
        word += singleDigit[number]
    } else if (number < 20) {
        word += doubleDigit[number - 10]
    } else if (number < 100) {
        splitNumber = (number / 10).toString().split('.')
        tensOfNumber = belowHundred[Number(splitNumber[0]) - 2]
        numberUnits = singleDigit[Number(splitNumber[1])]

        if (splitNumber.length === 2) {
            word += tensOfNumber + ' ' + numberUnits
        } else {
            word += tensOfNumber
        }
    } else if (number < 1000) {
        let slicedNumber = +number.toString().slice(1)
        splitNumber = (slicedNumber / 10).toString().split('.')
        tensOfNumber = belowHundred[Number(splitNumber[0]) - 2]
        numberUnits = singleDigit[Number(splitNumber[1])]
        
        if(Number(slicedNumber) === 0){
            word += singleDigit[Math.floor(number / 100)] + ' hundred'
        }else if ( Number(slicedNumber) < 10) {
            word += singleDigit[Math.floor(number / 100)] + ' hundred '  + numberUnits
        }else if(Number(slicedNumber) < 20) {
            word += singleDigit[Math.floor(number / 100)] + ' hundred ' + doubleDigit[Number(slicedNumber) - 10]
        }else if (Number(slicedNumber) > 20){
            
            word += singleDigit[Math.floor(number / 100)] + ' hundred ' + tensOfNumber
            numberUnits ? word += " " + numberUnits : null
        }else {
            word += singleDigit[Math.floor(number / 100)] + ' hundred ' + tensOfNumber
        }
        
    }
    return word;
}


