var AddButton = document.querySelector('.add-button');
var Input1 = document.querySelector('.input-first');
var Input2 = document.querySelector('.input-second');
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}
AddButton.addEventListener('click', function () { return console.log(addTwoNumbers(+Input1.value, +Input2.value)); });
