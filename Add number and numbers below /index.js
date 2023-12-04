let number = inputNumber();

const addOutcome = addNumbers(number);

document.write(addOutcome);
console.log(addOutcome);

function addNumbers(number) {
    if(number < 0) {
        return 0;
    } else {
        let add = 0;

        while (!(number < 0)) {
            add = add + number;

            number = number - 1;
        }

        return add;
    }
}

function inputNumber() {
    let number = prompt("Enter a number");

    while (!isNumber(number)) {
        number = prompt("please enter a valid number");
    }

    return Number(number);
}

function isNumber(number) {
    return !isNaN(number);
}
