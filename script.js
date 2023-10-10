const audio = document.getElementById('myAudio');
const add = document.getElementById('addition');
const subtract = document.getElementById('subtraction');
const multiply = document.getElementById('multiplication');
const divide = document.getElementById('divide');
const nav = document.querySelectorAll('.menu');
const mult = document.getElementById('mult');
const sub = document.getElementById('sub');
const addit = document.getElementById('add');
const div = document.getElementById('div');


const wrap = document.querySelectorAll('.wraper')
const answerAdd = document.querySelectorAll('.numberAdd');
const answerSub = document.querySelectorAll('.numberSub');
const answerMult = document.querySelectorAll('.numberMult');
const answerDiv = document.querySelectorAll('.numberDiv');
// let result = document.querySelector('.add');
const operand1 = document.getElementById('operand1');
const operand2 = document.getElementById('operand2');
const operator = document.getElementById('operator');
const operandSub1 = document.getElementById('operandSub1');
const operandSub2 = document.getElementById('operandSub2');
const operatorSub = document.getElementById('operatorSub');
const operandMult1 = document.getElementById('operandMult1');
const operandMult2 = document.getElementById('operandMult2');
const operatorMult = document.getElementById('operatorMult');
const operandDiv1 = document.getElementById('operandDiv1');
const operandDiv2 = document.getElementById('operandDiv2');
const operatorDiv = document.getElementById('operatorDiv');
const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
const num3 = document.getElementById('number3');
const numSub1 = document.getElementById('numberSub1');
const numSub2 = document.getElementById('numberSub2');
const numSub3 = document.getElementById('numberSub3');
const numMult1 = document.getElementById('numberMult1');
const numMult2 = document.getElementById('numberMult2');
const numMult3 = document.getElementById('numberMult3');
const numDiv1 = document.getElementById('numberDiv1');
const numDiv2 = document.getElementById('numberDiv2');
const numDiv3 = document.getElementById('numberDiv3');
const correct = document.getElementById('true');
const wrong = document.getElementById('false');
const timer = document.getElementById('timer');

let correctAnswer = 0;
let wrongAnswer = 0;
let general = 0;

let startTime;
let endTime;

window.addEventListener('load', function () {
  f1();
  addition();

})
function f1() {
  operand1.innerHTML = Math.floor(Math.random() * 11);
  operand2.innerHTML = Math.floor(Math.random() * 11);
  operator.innerHTML = '+';
  let x = Number(operand1.innerHTML);
  let y = Number(operand2.innerHTML);
  let result = x + y;
  num1.innerHTML = result;
  num2.innerHTML = Math.floor(Math.random() * 11);
  num3.innerHTML = Math.floor(Math.random() * 11);

}

startTime = Date.now();

function time() {
  endTime = Date.now();
  // Вычислите время выполнения в миллисекундах
  const executionTime = endTime - startTime;
  const minutes = Math.floor(executionTime / 60000); // 1 минута = 60 000 миллисекунд
  const seconds = ((executionTime % 60000) / 1000).toFixed(0); // 1 секунда = 1000 миллисекунд, с округлением до 2 знаков после запятой
  const formattedTime = `${minutes}:${seconds}`
  console.log(formattedTime);

  timer.innerHTML = formattedTime;
}
function addition() {

  answerAdd.forEach(element => {
    element.addEventListener('click', funcSum => {
      let x = Number(operand1.innerHTML);
      let y = Number(operand2.innerHTML);
      result = x + y;
      if (result == +element.innerHTML) {
        fsum();
        correctAnswer = correctAnswer + 1;
        correct.innerHTML = correctAnswer;

      } else {
        audio.play();
        wrongAnswer = wrongAnswer + 1;
        wrong.innerHTML = wrongAnswer;
      }
      general = correctAnswer + wrongAnswer;
      console.log(general);
      if (general === 5) {
        time()
        endGame()
      }
      // else {  }
    })

  });
}

function fsum() {

  operand1.innerHTML = Math.floor(Math.random() * 11);
  operand2.innerHTML = Math.floor(Math.random() * 11);
  let x = Number(operand1.innerHTML);
  let y = Number(operand2.innerHTML);

  result = x + y;
  let randomElement = Math.floor(Math.random() * 3) + 1;

  // В зависимости от значения randomElement присваиваем значение result одному из элементов
  if (randomElement === 1) {
    num1.innerHTML = result;
    num2.innerHTML = Math.floor(Math.random() * 11);
    num3.innerHTML = Math.floor(Math.random() * 11);
  } else if (randomElement === 2) {
    num1.innerHTML = Math.floor(Math.random() * 11);
    num2.innerHTML = result;
    num3.innerHTML = Math.floor(Math.random() * 11);
  } else {
    num1.innerHTML = Math.floor(Math.random() * 11);
    num2.innerHTML = Math.floor(Math.random() * 11);
    num3.innerHTML = result;
  }
}


function subtraction() {

  answerSub.forEach(element => {
    element.addEventListener('click', funcSub => {

      let x = Number(operandSub1.innerHTML);
      let y = Number(operandSub2.innerHTML);
      result = x - y;
      if (result == +element.innerHTML) {
        fsub();
        correctAnswer = correctAnswer + 1;
        correct.innerHTML = correctAnswer;
      } else {
        audio.play();
        wrongAnswer = wrongAnswer + 1;
        wrong.innerHTML = wrongAnswer;
      }
      general = correctAnswer + wrongAnswer;
      if (general === 5) {
        time()
        endGame()
      }
    })

  });
}

function fsub() {

  // operator.innerHTML = '-';
  let a = Math.floor(Math.random() * 11);
  let b = Math.floor(Math.random() * 11);
  if (a >= b) {
    operandSub1.innerHTML = a;
    operandSub2.innerHTML = b;
  } else {
    operandSub1.innerHTML = b;
    operandSub2.innerHTML = a;
  }

  let x = Number(operandSub1.innerHTML);
  let y = Number(operandSub2.innerHTML);


  result = x - y;
  let randomElement = Math.floor(Math.random() * 3) + 1;

  // В зависимости от значения randomElement присваиваем значение result одному из элементов
  if (randomElement === 1) {
    numSub1.innerHTML = result;
    numSub2.innerHTML = Math.floor(Math.random() * 11);
    numSub3.innerHTML = Math.floor(Math.random() * 11);
  } else if (randomElement === 2) {
    numSub1.innerHTML = Math.floor(Math.random() * 11);
    numSub2.innerHTML = result;
    numSub3.innerHTML = Math.floor(Math.random() * 11);
  } else {
    numSub1.innerHTML = Math.floor(Math.random() * 11);
    numSub2.innerHTML = Math.floor(Math.random() * 11);
    numSub3.innerHTML = result;
  }
}

function multiplication() {

  answerMult.forEach(element => {
    element.addEventListener('click', funcSum => {
      let x = Number(operandMult1.innerHTML);
      let y = Number(operandMult2.innerHTML);
      result = x * y;
      if (result == +element.innerHTML) {
        fmult();
        correctAnswer = correctAnswer + 1;
        correct.innerHTML = correctAnswer;
      } else {
        audio.play();
        wrongAnswer = wrongAnswer + 1;
        wrong.innerHTML = wrongAnswer;
      }
      general = correctAnswer + wrongAnswer;
      if (general === 5) {
        time()
        endGame()
      }
    })
  });


}

function fmult() {
  operandMult1.innerHTML = Math.floor(Math.random() * 11);
  operandMult2.innerHTML = Math.floor(Math.random() * 11);
  let x = Number(operandMult1.innerHTML);
  let y = Number(operandMult2.innerHTML);

  result = x * y;
  let randomElement = Math.floor(Math.random() * 3) + 1;

  // В зависимости от значения randomElement присваиваем значение result одному из элементов
  if (randomElement === 1) {
    numMult1.innerHTML = result;
    numMult2.innerHTML = Math.floor(Math.random() * 21);
    numMult3.innerHTML = Math.floor(Math.random() * 12);
  } else if (randomElement === 2) {
    numMult1.innerHTML = Math.floor(Math.random() * 21);
    numMult2.innerHTML = result;
    numMult3.innerHTML = Math.floor(Math.random() * 15);
  } else {
    numMult1.innerHTML = Math.floor(Math.random() * 99);
    numMult2.innerHTML = Math.floor(Math.random() * 17);
    numMult3.innerHTML = result;
  }
}

function division() {
  answerDiv.forEach(element => {
    element.addEventListener('click', funcSub => {

      let x = Number(operandDiv1.innerHTML);
      let y = Number(operandDiv2.innerHTML);
      result = x / y;
      if (result == +element.innerHTML) {
        fdiv();
        correctAnswer = correctAnswer + 1;
        correct.innerHTML = correctAnswer;
      } else {
        audio.play();
        wrongAnswer = wrongAnswer + 1;
        wrong.innerHTML = wrongAnswer;
      }
      general = correctAnswer + wrongAnswer;
      if (general === 5) {
        time()
        endGame()
      }
    })

  });

}
function fdiv() {

  let a, b, result;
  do {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    result = a / b;
  } while (result % 1 !== 0);

  operandDiv1.innerHTML = a;
  operandDiv2.innerHTML = b;

  let randomElement = Math.floor(Math.random() * 3) + 1;

  // В зависимости от значения randomElement присваиваем значение result одному из элементов
  if (randomElement === 1) {
    numDiv1.innerHTML = result;
    numDiv2.innerHTML = Math.floor(Math.random() * 21);
    numDiv3.innerHTML = Math.floor(Math.random() * 12);
  } else if (randomElement === 2) {
    numDiv1.innerHTML = Math.floor(Math.random() * 21);
    numDiv2.innerHTML = result;
    numDiv3.innerHTML = Math.floor(Math.random() * 15);
  } else {
    numDiv1.innerHTML = Math.floor(Math.random() * 99);
    numDiv2.innerHTML = Math.floor(Math.random() * 17);
    numDiv3.innerHTML = result;
  }
}

add.addEventListener('click', function () {
  f1();
  addition();
  nav.forEach(item => {
    item.classList.remove('decor');
  });
  this.classList.add('decor');

  wrap.forEach(item => {
    item.classList.remove('visible');
  })
  addit.classList.add('visible');

})

subtract.addEventListener('click', function () {
  subtraction();
  nav.forEach(item => {
    item.classList.remove('decor');
  });
  this.classList.add('decor');
  wrap.forEach(item => {
    item.classList.remove('visible');
  })
  sub.classList.add('visible');
})

multiply.addEventListener('click', function () {
  multiplication();
  nav.forEach(item => {
    item.classList.remove('decor');
  });
  this.classList.add('decor');
  wrap.forEach(item => {
    item.classList.remove('visible');
  })
  mult.classList.add('visible');
})

divide.addEventListener('click', function () {
  division();
  nav.forEach(item => {
    item.classList.remove('decor');
  });
  this.classList.add('decor');
  wrap.forEach(item => {
    item.classList.remove('visible');
  })
  div.classList.add('visible');
})
const blockGame = document.querySelector('.blockGame')
const resume = document.querySelector('.modal__resume');
const btnStart = document.querySelector('.start')
let endGame = () => {
  blockGame.style.pointerEvents = 'none';
  resume.style.display = 'flex';
}
btnStart.addEventListener('click', () => {
  document.location.reload();
})
// const button = document.createElement('button');
// // button.setAttribute('type', 'button');
// button.classList.add('number');
// button.textContent = '77';
// button.addEventListener('click', () => {
//   alert('Кнопка нажата')
// });

// document.body.append(button);
// subtraction();
// multiplication();

