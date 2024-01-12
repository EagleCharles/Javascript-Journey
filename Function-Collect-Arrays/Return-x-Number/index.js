const numbersArray = collectNumbers();

const X = inputX();

const xNumberOfTimes = xNumber(numbersArray, X);

function xNumber(numbersArray, X) {
    let numberOfTimes = 0; 

    for (i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] === Number(X)) {
            numberOfTimes++;
        }
    }

    return numberOfTimes;
}

function inputX() {
    let x = prompt("Enter a value for x");

    while (!isNumber(x)) {
        x = prompt("please enter a valid number");
    }

    while (!numbersArray.includes(Number(x))) {
        alert("It has to be a number part of the array");
        x = prompt("Enter a value for x");
    }

    return Number(x);
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

console.log(numbersArray);
document.write("The value of X is " + X);
// document.write("X occured " + xNumberOfTimes + " number of times");
alert("X occured " + xNumberOfTimes + " number of times");