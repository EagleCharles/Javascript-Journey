const numbersArray = collectNumbers();

const lowestNumberValue = checkLowestNumber(numbersArray);

function checkLowestNumber(numbersArray) {
    if (numbersArray.length === 0) {
        return("Empty Array!");
    }
    
    let lowestNumber = numbersArray[0];

    for (i = 1; i < numbersArray.length; i++) {
        if (numbersArray[i] < lowestNumber) {
            lowestNumber = numbersArray[i];
        }
    }

    return lowestNumber;
} 

function collectNumbers() {
    const numbers = [];

    while (true) {
        let input = prompt("Enter a number, or type 'OK' to finish").toLowerCase();

        if (input === 'ok') {
            break;
        }

        if (isNumber(input)) {
            numbers.push(parseInt(input));
        } else {
            alert("Please enter a valid number, or type 'OK' to finish");
        }
    }

    return numbers;
}

function isNumber(numbers) {
    return !isNaN(numbers);
}

alert("The lowest number in the array is " + lowestNumberValue);
document.write(lowestNumberValue);
console.log(numbersArray)