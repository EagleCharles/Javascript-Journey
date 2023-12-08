let retrivedNumber = collectInput();

let formulaSum = formulaComputeSum(retrivedNumber);

let loopSum = loopComputeSum(retrivedNumber);

alert("Tada!!! Your result using formular is " + formulaSum);
document.write("Your result using loop is " + loopSum);
console.log(formulaSum);
console.log(loopSum);

function loopComputeSum(retrivedNumber) {
    let sum = 0;

    while (retrivedNumber >= 0) {
        sum = sum + retrivedNumber;

        retrivedNumber -= 2;
    }

    return sum;
}

function formulaComputeSum(retrivedNumber) {
    if (isEven(retrivedNumber)) {
        sum = retrivedNumber / 2 * (1  + (retrivedNumber / 2));
    } else {
        sum = ((retrivedNumber + 1) / 2) * ((retrivedNumber + 1) / 2);
    }

    return sum;
}

function collectInput() {
    let number = prompt("Input a number to sum to zero");
    let boolean = prompt("input true or false");

    while (!isNumber(number) || !(boolean === 'true' || boolean === 'false')) {
        alert("Enter valid inputs, Has to be a number and either a 'true' or 'false'");
        number = prompt("Enter a valid number")
        boolean = prompt("Enter either true or false")
    }

    number = Number(number);

    if (isEven(number ) && boolean === 'true') {
        number = number - 1;
    } else if (isEven(number) && boolean === 'false') {
        number = number;
    } else if (!isEven(number) && boolean === 'true') {
        number = number;
    } else {
        number = number - 1;
    }

    return number;
}

function isNumber(number) {
    return !isNaN(number);
}

function isEven(number) {
    return number % 2 === 0;
}

