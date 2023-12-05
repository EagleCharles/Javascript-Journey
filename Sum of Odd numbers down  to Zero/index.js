let number = inputNumber();

let oddNumber = checkNumber(number);

let result = formulaComputeSum(oddNumber);

// function loopComputeSum(oddNumber) {
//     let sum = 0;
    
//     while (oddNumber >= 0) {
//       sum = sum + oddNumber;
  
//       oddNumber = oddNumber - 2;
//     }
  
//     return sum;
// }


function formulaComputeSum(oddNumber) {
    let sum = 0;
 
    if (oddNumber !== 0) {
        sum = ((oddNumber + 1) / 2) * ((oddNumber + 1) / 2);
    }

    return sum;
}


function checkNumber(number) {
    if (number < 0) {
        number = 0;
    } else if (isEven(number) && number != 0) {
        number = number - 1;
    }

    return number;
}

function isEven(number) {
    return number % 2 === 0;
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

console.log(result);
alert("The sum of all the odd numbers starting from the number you inputed down to zero is " + result);
document.write("Your answer is " + result);
