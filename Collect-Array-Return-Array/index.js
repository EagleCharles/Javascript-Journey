numberArray = collectArray();

result = removeDuplicate(numberArray);

console.log(result);

// console.log(numberArray);

function removeDuplicate(numberSet) {
    for (let i = 0; i < numberSet.length; i++) {
        for (let j = i + 1; j < numberSet.length; j++) {
            if (numberSet[i] === numberSet[j]) {
                numberSet.splice(j, 1);
                j--;
            }
        }
    }

    return numberArray;
}

function collectArray() {
    const array = [];

    while (true) {
        let input = prompt("Enter a set of number and type 'OK' when done!").toLowerCase();

        if (input === 'ok') {
            break;
        }

        if (isNumber(input)) {
            array.push(parseInt(input));
        }else {
            alert("Please enter a valid number or type 'OK' if you're done!")
        }
    }

    return array;
}

function isNumber(input) {
    return !isNaN(input);
}
