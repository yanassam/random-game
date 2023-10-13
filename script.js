
if (!localStorage.getItem("gameResults")) { localStorage.setItem("gameResults", JSON.stringify([])) }

const audio = document.getElementById('myAudio');
const audioWish = document.getElementById('myWish');
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
const gameResult = [];
function time() {
  endTime = Date.now();
  // Вычислите время выполнения в миллисекундах
  const executionTime = endTime - startTime;
  const minutes = Math.floor(executionTime / 60000); // 1 минута = 60 000 миллисекунд
  const seconds = ((executionTime % 60000) / 1000).toFixed(0); // 1 секунда = 1000 миллисекунд, с округлением до 2 знаков после запятой
  const formattedTime = `${minutes}:${seconds}`
  // console.log(formattedTime);

  timer.innerHTML = formattedTime;
  // gameResult.push(formattedTime)
  // localStorage.setItem("result", gameResult);


}
// Функция для генерации случайных чисел в заданном диапазоне
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для установки значений в зависимости от результата
function setRandomValues(result, target1, target2, target3) {
  let randomElement = generateRandomNumber(1, 3);

  if (randomElement === 1) {
    target1.innerHTML = result;
    target2.innerHTML = generateRandomNumber(0, 10);
    target3.innerHTML = generateRandomNumber(0, 10);
  } else if (randomElement === 2) {
    target1.innerHTML = generateRandomNumber(0, 10);
    target2.innerHTML = result;
    target3.innerHTML = generateRandomNumber(0, 10);
  } else {
    target1.innerHTML = generateRandomNumber(0, 10);
    target2.innerHTML = generateRandomNumber(0, 10);
    target3.innerHTML = result;
  }
}

function addition() {

  answerAdd.forEach(element => {
    element.addEventListener('click', funcSum => {
      let x = Number(operand1.innerHTML);
      let y = Number(operand2.innerHTML);
      result = x + y;
      if (result == +element.innerHTML) {

        correctAnswer = correctAnswer + 1;
        correct.innerHTML = correctAnswer;
        setAdditionValues();
        // gameResult.push(correctAnswer);
        // localStorage.setItem("result", correctAnswer);
      } else {

        wrongAnswer = wrongAnswer + 1;
        wrong.innerHTML = wrongAnswer;
        audio.play();
        // gameResult.push(wrongAnswer);
        // localStorage.setItem("result", gameResult);
      }

      general = correctAnswer + wrongAnswer;
      console.log(general);


      if (general === 5) {
        // gameResult = {
        //   true: correctAnswer,
        //   false: wrongAnswer,
        // }
        // localStorage.setItem("result", JSON.stringify(gameResult));
        wish()
        time()
        endGame()

        console.log(gameResult);
      }
    })
  });
}

function subtraction() {

  answerSub.forEach(element => {
    element.addEventListener('click', funcSub => {

      let x = Number(operandSub1.innerHTML);
      let y = Number(operandSub2.innerHTML);
      result = x - y;
      if (result == +element.innerHTML) {
        setSubtractionValues();
        correctAnswer = correctAnswer + 1;
        correct.innerHTML = correctAnswer;
      } else {
        audio.play();
        wrongAnswer = wrongAnswer + 1;
        wrong.innerHTML = wrongAnswer;
      }
      general = correctAnswer + wrongAnswer;
      if (general === 5) {
        wish()
        time()
        endGame()
      }
    })
  });
}
function multiplication() {

  answerMult.forEach(element => {
    element.addEventListener('click', funcSum => {
      let x = Number(operandMult1.innerHTML);
      let y = Number(operandMult2.innerHTML);
      result = x * y;
      if (result == +element.innerHTML) {
        setMultiplicationValues();
        correctAnswer = correctAnswer + 1;
        correct.innerHTML = correctAnswer;
      } else {
        audio.play();
        wrongAnswer = wrongAnswer + 1;
        wrong.innerHTML = wrongAnswer;
      }
      general = correctAnswer + wrongAnswer;
      if (general === 5) {
        wish()
        time()
        endGame()
      }
    })
  });
}

function division() {
  answerDiv.forEach(element => {
    element.addEventListener('click', funcSub => {

      let x = Number(operandDiv1.innerHTML);
      let y = Number(operandDiv2.innerHTML);
      result = x / y;
      if (result == +element.innerHTML) {
        setDivisionValues();
        correctAnswer = correctAnswer + 1;
        correct.innerHTML = correctAnswer;
      } else {
        audio.play();
        wrongAnswer = wrongAnswer + 1;
        wrong.innerHTML = wrongAnswer;
      }
      general = correctAnswer + wrongAnswer;
      if (general === 5) {
        wish()
        time()
        endGame()
      }
    })
  });
}


function setAdditionValues() {
  operand1.innerHTML = generateRandomNumber(0, 10);
  operand2.innerHTML = generateRandomNumber(0, 10);
  const x = Number(operand1.innerHTML);
  const y = Number(operand2.innerHTML);
  result = x + y;
  setRandomValues(result, num1, num2, num3);
}

function setSubtractionValues() {
  const a = generateRandomNumber(0, 10);
  const b = generateRandomNumber(0, 10);
  if (a >= b) {
    operandSub1.innerHTML = a;
    operandSub2.innerHTML = b;
  } else {
    operandSub1.innerHTML = b;
    operandSub2.innerHTML = a;
  }
  const x = Number(operandSub1.innerHTML);
  const y = Number(operandSub2.innerHTML);
  result = x - y;
  setRandomValues(result, numSub1, numSub2, numSub3);
}


function setMultiplicationValues() {
  operandMult1.innerHTML = generateRandomNumber(0, 10);
  operandMult2.innerHTML = generateRandomNumber(0, 10);
  const x = Number(operandMult1.innerHTML);
  const y = Number(operandMult2.innerHTML);
  result = x * y;
  setRandomValues(result, numMult1, numMult2, numMult3);
}

function setDivisionValues() {
  let a, b, result;

  // Генерация чисел a и b, пока результат не станет целым числом
  do {
    a = generateRandomNumber(1, 10);
    b = generateRandomNumber(1, 10);
    result = a / b;
  } while (result % 1 !== 0);

  operandDiv1.innerHTML = a;
  operandDiv2.innerHTML = b;
  setRandomValues(result, numDiv1, numDiv2, numDiv3);

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
const btnStart = document.querySelector('.start');
const resultWish = document.getElementById('resultName');
const recordTable = document.getElementById('recordTable');
function endGame() {
  blockGame.style.pointerEvents = 'none';
  resume.style.display = 'flex';

  const gameData = {
    timer: timer.innerHTML,
    true: correctAnswer,
    false: wrongAnswer
  };

  let gameResults = JSON.parse(localStorage.getItem('gameResults')) || [];

  gameResults.push(gameData);
  localStorage.setItem('gameResults', JSON.stringify(gameResults));

  let getResult = localStorage.getItem('gameResults');
  getResult = JSON.parse(getResult);
  let c = '';
  for (key in gameResults) {
    if (key < gameResults.length && key > (gameResults.length - 11)) {
      c += 'True: ' + gameResults[key].true + '  False: ' + gameResults[key].false + '  Timer: ' + gameResults[key].timer + '<br>';
    }
  }

  recordTable.innerHTML = c;



}
btnStart.addEventListener('click', () => {
  document.location.reload();
})

function wish() {
  if (correctAnswer == 5) {
    resultWish.innerHTML = "Brawo, Super!!";

    audioWish.play();
  } else {
    resultWish.innerHTML = "You still need to study";
  }
}


// Предположим, что у вас есть переменные timer, correctAnswer и wrongAnswer,
// которые хранят данные о таймере, верных и неверных ответах соответственно.
// const gameData = {
//   timer: timer.innerHTML,
//   true: correctAnswer,
//   false: wrongAnswer
// };

// // Загрузите существующие данные из localStorage, если они там уже есть.
// let gameResults = JSON.parse(localStorage.getItem('gameResults')) || [];

// // Добавьте новые данные к массиву.
// gameResults.push(gameData);

// // Сохраните обновленный массив обратно в localStorage.
// localStorage.setItem('gameResults', JSON.stringify(gameResults));