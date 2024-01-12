const numbersArray = collectNumbers();

const highestNumberValue = checkHigestNumber(numbersArray);

function checkHigestNumber(numberArray) {
    if (numberArray.length === 0) {
        return("Empty Array!");
    }
    
    let highestNumber = numberArray[0];

    for (i = 1; i < numberArray.length; i++) {
        if (numberArray[i] > highestNumber) {
            highestNumber = numberArray[i];
        }
    }

    return highestNumber;
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

alert("The highest number in the array is " + highestNumberValue);
document.write(highestNumberValue);
console.log(numbersArray);