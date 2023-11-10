const luckyNumber = 60;

let count = 0;
let response = '';

while (count < 10) {
    let guess = prompt ("Guess lucky number");
    // const typeCheck = isNumber(guess);

    response = numberCheck(guess);

    if (response === "You Win!!!") {
        console.log(response);
        break;
    }
    count = count + 1;
}
response = "You Lost!!!";

document.write(response);
console.log(response);

function numberCheck(number) {
    if (number == luckyNumber) {
        result = "You Win!!!";
    }
    else if (number <= 50) {
        result = console.log("Your guess is too low, try again!!!");
    }
    else if (number >= 70) {
        result = console.log("Your guess is too high, try again!!!");
    }
    else {
        result = console.log("So close, try again!!!");
    }

    return result;
}

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// function guessLuckyNumber(number) {
//     let guess = '';

//     if (isNumber(guess) === false) {
//         guess = prompt ("Error, input has to be a valid number");
//     }
//     else {
//         guess = guess;
//     }
//      return guess;   
// }