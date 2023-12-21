const inputString = "Eagle"

let requiredString = collectString();

let result = reverseString(requiredString);

console.log(result);

function collectString() {
    let string = prompt("Input the word 'Eagle' in any case");

    while (string.toLowerCase() !== inputString.toLowerCase()) {
        alert("Not the required input, Has to be the word 'eagle' not case sensitive though");
        string = prompt("Re-enter the right word");
    }

    return string;
}

function reverseString(requiredString) {
    let reversed = '';
    i = requiredString.length - 1;

    while (i >= 0) {
        reversed = reversed + requiredString[i];

        i--
    }

    return reversed;
}
