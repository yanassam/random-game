let answer = document.querySelectorAll('.number');
let sum = document.querySelector('.add');
let operand1 = document.getElementById('operand1');
let operand2 = document.getElementById('operand2');
let num1 = document.getElementById('number1');
let num2 = document.getElementById('number2');
let num3 = document.getElementById('number3');


console.log(typeof operand1.innerHTML);
console.log(operand2.innerHTML);

answer.forEach(element => {
  element.addEventListener('click', funcSum => {
    let x = Number(operand1.innerHTML);
    let y = Number(operand2.innerHTML);
    sum = x + y;
    if (sum == +element.innerHTML) {
      fsum();
    } else { alert('no') }
  })

});




function fsum() {
  // alert('molodec');
  operand1.innerHTML = Math.floor(Math.random() * 11);
  operand2.innerHTML = Math.floor(Math.random() * 11);
  let x = Number(operand1.innerHTML);
  let y = Number(operand2.innerHTML);

  sum = x + y;
  let randomElement = Math.floor(Math.random() * 3) + 1;

  // В зависимости от значения randomElement присваиваем значение sum одному из элементов
  if (randomElement === 1) {
    num1.innerHTML = sum;
    num2.innerHTML = Math.floor(Math.random() * 11);
    num3.innerHTML = Math.floor(Math.random() * 11);
  } else if (randomElement === 2) {
    num1.innerHTML = Math.floor(Math.random() * 11);
    num2.innerHTML = sum;
    num3.innerHTML = Math.floor(Math.random() * 11);
  } else {
    num1.innerHTML = Math.floor(Math.random() * 11);
    num2.innerHTML = Math.floor(Math.random() * 11);
    num3.innerHTML = sum;
  }
}


