const AddButton: HTMLButtonElement = document.querySelector('.add-button')
const Input1: HTMLInputElement = document.querySelector('.input-first')
const Input2: HTMLInputElement = document.querySelector('.input-second')

function addTwoNumbers(number1: number, number2: number) {
  return number1 + number2
}

AddButton.addEventListener('click', () => console.log(addTwoNumbers(+Input1.value, +Input2.value)))
