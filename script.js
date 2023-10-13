
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


      if (general === 10) {
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
      if (general === 10) {
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
      if (general === 10) {
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
      if (general === 10) {
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
const canvas = document.querySelector('.canvas__visible');
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
// 
function wish() {
  if (correctAnswer == 10) {
    resultWish.innerHTML = "Brawo, Super!!";
    canvas.style.display = 'flex';
    audioWish.play();
  } else {
    resultWish.innerHTML = "You still need to study";
  }
}
// Это код для фейерверка

var gl = c.getContext('webgl', { preserveDrawingBuffer: true })
  , w = c.width = window.innerWidth
  , h = c.height = window.innerHeight

  , webgl = {}
  , opts = {
    projectileAlpha: .8,
    projectileLineWidth: 1.3,
    fireworkAngleSpan: .5,
    baseFireworkVel: 3,
    addedFireworkVel: 3,
    gravity: .03,
    lowVelBoundary: -.2,
    xFriction: .995,
    baseShardVel: 1,
    addedShardVel: .2,
    fireworks: 1000,
    baseShardsParFirework: 10,
    addedShardsParFirework: 10,
    shardFireworkVelMultiplier: .3,
    initHueMultiplier: 1 / 360,
    runHueAdder: .1 / 360
  }

webgl.vertexShaderSource = `
uniform int u_mode;
uniform vec2 u_res;
attribute vec4 a_data;
varying vec4 v_color;

vec3 h2rgb( float h ){
	return clamp( abs( mod( h * 6. + vec3( 0, 4, 2 ), 6. ) - 3. ) -1., 0., 1. );
}
void clear(){
	gl_Position = vec4( a_data.xy, 0, 1 );
	v_color = vec4( 0, 0, 0, a_data.w );
}
void draw(){
	gl_Position = vec4( vec2( 1, -1 ) * ( ( a_data.xy / u_res ) * 2. - 1. ), 0, 1 );
	v_color = vec4( h2rgb( a_data.z ), a_data.w );
}
void main(){
	if( u_mode == 0 )
		draw();
	else
		clear();
}
`;
webgl.fragmentShaderSource = `
precision mediump float;
varying vec4 v_color;

void main(){
	gl_FragColor = v_color;
}
`;

webgl.vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(webgl.vertexShader, webgl.vertexShaderSource);
gl.compileShader(webgl.vertexShader);

webgl.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(webgl.fragmentShader, webgl.fragmentShaderSource);
gl.compileShader(webgl.fragmentShader);

webgl.shaderProgram = gl.createProgram();
gl.attachShader(webgl.shaderProgram, webgl.vertexShader);
gl.attachShader(webgl.shaderProgram, webgl.fragmentShader);

gl.linkProgram(webgl.shaderProgram);
gl.useProgram(webgl.shaderProgram);

webgl.dataAttribLoc = gl.getAttribLocation(webgl.shaderProgram, 'a_data');
webgl.dataBuffer = gl.createBuffer();

gl.enableVertexAttribArray(webgl.dataAttribLoc);
gl.bindBuffer(gl.ARRAY_BUFFER, webgl.dataBuffer);
gl.vertexAttribPointer(webgl.dataAttribLoc, 4, gl.FLOAT, false, 0, 0);

webgl.resUniformLoc = gl.getUniformLocation(webgl.shaderProgram, 'u_res');
webgl.modeUniformLoc = gl.getUniformLocation(webgl.shaderProgram, 'u_mode');

gl.viewport(0, 0, w, h);
gl.uniform2f(webgl.resUniformLoc, w, h);

gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
gl.enable(gl.BLEND);

gl.lineWidth(opts.projectileLineWidth);

webgl.data = [];

webgl.clear = function () {

  gl.uniform1i(webgl.modeUniformLoc, 1);
  var a = .1;
  webgl.data = [
    -1, -1, 0, a,
    1, -1, 0, a,
    -1, 1, 0, a,
    -1, 1, 0, a,
    1, -1, 0, a,
    1, 1, 0, a
  ];
  webgl.draw(gl.TRIANGLES);
  gl.uniform1i(webgl.modeUniformLoc, 0);
  webgl.data.length = 0;
}
webgl.draw = function (glType) {

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(webgl.data), gl.STATIC_DRAW);
  gl.drawArrays(glType, 0, webgl.data.length / 4);
}

var fireworks = []
  , tick = 0
  , sins = []
  , coss = []
  , maxShardsParFirework = opts.baseShardsParFirework + opts.addedShardsParFirework
  , tau = 6.283185307179586476925286766559;

for (var i = 0; i < maxShardsParFirework; ++i) {
  sins[i] = Math.sin(tau * i / maxShardsParFirework);
  coss[i] = Math.cos(tau * i / maxShardsParFirework);
}

function Firework() {
  this.reset();
  this.shards = [];
  for (var i = 0; i < maxShardsParFirework; ++i)
    this.shards.push(new Shard(this));
}
Firework.prototype.reset = function () {

  var angle = -Math.PI / 2 + (Math.random() - .5) * opts.fireworkAngleSpan
    , vel = opts.baseFireworkVel + opts.addedFireworkVel * Math.random();

  this.mode = 0;
  this.vx = vel * Math.cos(angle);
  this.vy = vel * Math.sin(angle);

  this.x = Math.random() * w;
  this.y = h;

  this.hue = tick * opts.initHueMultiplier;

}
Firework.prototype.step = function () {

  if (this.mode === 0) {

    var ph = this.hue
      , px = this.x
      , py = this.y;

    this.hue += opts.runHueAdder;

    this.x += this.vx *= opts.xFriction;
    this.y += this.vy += opts.gravity;

    webgl.data.push(
      px, py, ph, opts.projectileAlpha * .2,
      this.x, this.y, this.hue, opts.projectileAlpha * .2);

    if (this.vy >= opts.lowVelBoundary) {
      this.mode = 1;

      this.shardAmount = opts.baseShardsParFirework + opts.addedShardsParFirework * Math.random() | 0;

      var baseAngle = Math.random() * tau
        , x = Math.cos(baseAngle)
        , y = Math.sin(baseAngle)
        , sin = sins[this.shardAmount]
        , cos = coss[this.shardAmount];

      for (var i = 0; i < this.shardAmount; ++i) {

        var vel = opts.baseShardVel + opts.addedShardVel * Math.random();
        this.shards[i].reset(x * vel, y * vel)
        var X = x;
        x = x * cos - y * sin;
        y = y * cos + X * sin;
      }
    }

  } else if (this.mode === 1) {

    this.ph = this.hue
    this.hue += opts.runHueAdder;

    var allDead = true;
    for (var i = 0; i < this.shardAmount; ++i) {
      var shard = this.shards[i];
      if (!shard.dead) {
        shard.step();
        allDead = false;
      }
    }

    if (allDead)
      this.reset();
  }

}
function Shard(parent) {
  this.parent = parent;
}
Shard.prototype.reset = function (vx, vy) {
  this.x = this.parent.x;
  this.y = this.parent.y;
  this.vx = this.parent.vx * opts.shardFireworkVelMultiplier + vx;
  this.vy = this.parent.vy * opts.shardFireworkVelMultiplier + vy;
  this.starty = this.y;
  this.dead = false;
  this.tick = 1;
}
Shard.prototype.step = function () {

  this.tick += .05;

  var px = this.x
    , py = this.y;

  this.x += this.vx *= opts.xFriction;
  this.y += this.vy += opts.gravity;

  var proportion = 1 - (this.y - this.starty) / (h - this.starty);

  webgl.data.push(
    px, py, this.parent.ph, opts.projectileAlpha / this.tick,
    this.x, this.y, this.parent.hue, opts.projectileAlpha / this.tick);

  if (this.y > h)
    this.dead = true;
}

function anim() {

  window.requestAnimationFrame(anim)

  webgl.clear();

  ++tick;

  if (fireworks.length < opts.fireworks)
    fireworks.push(new Firework);

  fireworks.map(function (firework) { firework.step(); });

  webgl.draw(gl.LINES);
}
anim();

window.addEventListener('resize', function () {

  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;

  gl.viewport(0, 0, w, h);
  gl.uniform2f(webgl.resUniformLoc, w, h);
})
window.addEventListener('click', function (e) {
  var firework = new Firework();
  firework.x = e.clientX;
  firework.y = e.clientY;
  firework.vx = 0;
  firework.vy = 0;
  fireworks.push(firework);
});