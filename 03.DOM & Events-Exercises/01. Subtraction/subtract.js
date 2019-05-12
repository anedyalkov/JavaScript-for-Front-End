function subtract() {
   let firstNumber = Number(document.getElementById('firstNumber').value);
   let secondNumber = Number(document.getElementById('secondNumber').value);
   let result = firstNumber - secondNumber;
   document.getElementById('result').textContent = result;

}

// function subtract() {
//    let firstNumber = $('#firstNumber').val();
//    let secondNumber = $('#secondNumber').val();
//    let result = firstNumber - secondNumber;
//    $('#result').text(result);

// }