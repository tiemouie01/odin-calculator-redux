function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber){
    let answer;
    switch(operator){
        case '+':
            answer = add(firstNumber, secondNumber);
            break;
        case '-':
            answer = subtract(firstNumber, secondNumber);
            break;
        case '*':
            answer = multiply(firstNumber, secondNumber);
            break;
        case '/':
            answer = divide(firstNumber, secondNumber);
            break;
    }
    return answer;
}

let firstNumber;
let secondNumber;
let operator;

