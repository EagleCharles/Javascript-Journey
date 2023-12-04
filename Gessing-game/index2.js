const luckyNumber = 65;
let chances = 10;

while (chances > 0) {
    let guess = submitGuess();

    let result = checkGuess(guess);

    if (result == "correct") {
        alert("You Win!");
        break;
    } else if (result == "high") {
        alert("Too high");
    } else {
        alert("Too low")
    }

    chances = chances - 1;
    alert("You have " + chances + " chances left");
}

alert("You Lost!");

function checkGuess(guess) {
    if (guess == luckyNumber) {
        return "correct";
    } else if (guess > luckyNumber) {
        return "high";
    } else {
        return "low";
    }
}

function submitGuess() {
    let guess = prompt("Make a guess between 1 and 100");

    while (!isNumber(guess)) {
        guess = prompt("please eneter a valid number between 1 and 100");
    }

    return guess;
}

function isNumber(guess) {
    return !isNaN(guess);
}
