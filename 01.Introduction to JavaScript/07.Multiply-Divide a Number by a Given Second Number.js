function multiplyOrDivideTwoNumbers(args) {

    let firstNumber = Number(args[0]);
    let secondNumber = Number(args[1]);

    if (firstNumber<=secondNumber) {
        return firstNumber * secondNumber;
    }
    else{
        return firstNumber / secondNumber;
    }
    
}

console.log(multiplyOrDivideTwoNumbers(["12", "4"]));