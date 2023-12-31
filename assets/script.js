let startButton = document.querySelector(".start-button")
let questionButton = document.querySelector(".question-button")
let optionA = document.querySelector("#optionA")
let optionB = document.querySelector("#optionB")
let optionC = document.querySelector("#optionC")
let score = document.querySelector('.score')
let points = 0
let pointsDisplay = document.querySelector('#pointsDisplay')
let nameText = document.querySelector('.highScore')
let scoreList = document.querySelector('#scoreList')
let title = document.querySelector('#title')

score.style.display = 'none'
optionA.style.display = 'none'
optionB.style.display = 'none'
optionC.style.display = 'none'

const quizQuestions = [
    {
        question: "Where do you put a JS script link in an HTML document?",
        optionA: "top",
        optionB: "middle",
        optionC: "bottom",
        correct: optionC
    },
    {
        question: "Const is a variable that _",
        optionA: "cannot be changed",
        optionB: "can be changed locally",
        optionC: "can be changed globally",
        correct: optionA
    },
    {
        question: "What does 'return' in a function do?",
        optionA: "ends a function",
        optionB: "executes a function",
        optionC: "loops a function",
        correct: optionA
    },
    {
        question: "'var' works in _",
        optionA: "Javascript alone",
        optionB: "Javascript and CSS",
        optionC: "Javascript,CSS,and HTML",
        correct: optionB
    }
];

let currentQuestion = 0;

let timerElement = document.querySelector(".timer-count")
let timer;
let timerCount = 60;


function startGame() {
startButton.style.display = "none"
optionA.style.display = "block"
optionB.style.display = "block"
optionC.style.display = "block"

startTimer();
displayQuestion();
  //  scoreBoard.display(none)
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;

        if(timerCount === 0) {
            clearInterval(timer);
            displayScoreboard();
        }
      }, 1000);
}


startButton.addEventListener('click', startGame);

function displayQuestion() {
    const questionElement = document.getElementById("question");
    var optionAElement = document.getElementById("optionA");
    var optionBElement = document.getElementById("optionB");
    var optionCElement = document.getElementById("optionC");

    questionElement.textContent = quizQuestions[currentQuestion].question;
    optionAElement.textContent = quizQuestions[currentQuestion].optionA;
    optionBElement.textContent = quizQuestions[currentQuestion].optionB;
    optionCElement.textContent = quizQuestions[currentQuestion].optionC;
}

function checkAnswer(event) {
    if(event.target === quizQuestions[currentQuestion].correct) {
        points += 30;
        console.log(points);
        pointsDisplay.textContent = points;
    }
    currentQuestion++;

    if (currentQuestion >= quizQuestions.length) {
        displayScoreboard();
        console.log('quiz finished');
    } else {
        displayQuestion();  
    }

    console.log(event);
}

optionA.addEventListener('click', checkAnswer);
optionB.addEventListener('click', checkAnswer);
optionC.addEventListener('click', checkAnswer);



function displayScoreboard() {
    title.style.display = 'none';
    timerElement.style.display = 'none';
    question.style.display = 'none';
    optionA.style.display = 'none';
    optionB.style.display = 'none';
    optionC.style.display = 'none';
    score.style.display = 'block';
    renderScore()
}

function saveScore() {
    var userName = nameText.value.trim()
    var lastScore = [userName + "  " + points]
    localStorage.setItem('last-score', JSON.stringify(lastScore))
}


function renderScore(){

var ListEl = document.createElement("li");

var ListData = JSON.parse(localStorage.getItem("last-score"));
var ListText = document.createTextNode(ListData);
localStorage.getItem("points", JSON.parse(points));

ListEl.appendChild(ListText);
scoreList.appendChild(ListEl);
//Bree helped me with the score list
}
console.log(localStorage)

//displayQuestion();
//startTimer();