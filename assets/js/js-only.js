const AddButton = document.querySelector('.add-button')
const Input1 = document.querySelector('.input-first')
const Input2 = document.querySelector('.input-second')

function addTwoNumbers(number1, number2) {
  return number1 + number2
}

AddButton.addEventListener('click', () => console.log(addTwoNumbers(Input1.value, Input2.value)))
