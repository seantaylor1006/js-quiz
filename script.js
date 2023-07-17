let startButton = document.querySelector(".start-button")

const quizQuestions = [
    {
        question: "Where do you put a JS script link in an HTML document?",
        optionA: "top",
        optionB: "middle",
        optionC: "bottom",
        correct0: optionC
    },
    {
        question: "Const is a variable that _",
        optionA: "cannot be changed",
        optionB: "can be changed locally",
        optionC: "can be changed globally",
        correct1: optionA
    },
    {
        question: "What does 'return' in a function do?",
        optionA: "ends a function",
        optionB: "executes a function",
        optionC: "loops a function",
        correct2: optionA
    },
    {
    question: "'var' works in _",
    optionA: "Javascript alone",
    optionB: "Javascript and CSS",
    optionC: "Javascript,CSS,and HTML",
    correct3: optionB
    }
];

let currentQuestion = 0;

let timerElement = document.querySelector(".timer-count")
let timer;
let timerCount = 60;

let scoreBoard = document.querySelector("score")

function startGame() {
startButton.style.display = "none"
startTimer();
displayQuestion();
  //  scoreBoard.display(none)
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;

        if(timerCount === 0) {
            clearInterval(timer)
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

function checkAnswer() {
    if (correct=true) {
        addPoint()
    }
}

//displayQuestion();
//startTimer();