let number = inputNumber();
let result = returnPrime(number);

alert("Prime numbers between the number you provided and zero are " + result);
document.write("Your answer is " + result);

function returnPrime(number) {
    let primes = [];

    while (number >= 2) {
        if (isPrime(number)) {
            primes.push(number);
        }

        number --;
    }

    return primes;
}

function inputNumber() {
    let number = prompt("Enter a Number");

    while (!isNumber(number)) {
        number = prompt("Please enter a valid number");
    }

    return number;
}

function isNumber(number) {
    return !isNaN(number);
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    let i = 2;
    while (i * i <= number) {
        if (number % i === 0) {
            return false;
        }
        i++;
    }

    return true;
}