let startButton = document.querySelector(".start-button")
let optionA = document.querySelector("#optionA")
let optionB = document.querySelector("#optionB")
let optionC = document.querySelector("#optionC")
let score = document.querySelector('.score')
let points = 0
let pointsDisplay = document.querySelector('#pointsDisplay')
let nameText = document.querySelector('.highScore')
let nameDisplay = document.querySelector('nameDisplay')
score.style.display = 'none'

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
    timerElement.style.display = 'none';
    question.style.display = 'none';
    optionA.style.display = 'none';
    optionB.style.display = 'none';
    optionC.style.display = 'none';
    score.style.display = 'block';    
}

function saveScore() {
    var userName = nameText.value.trim()
    localStorage.setItem('points', JSON.stringify(points));
    localStorage.setItem('userName', JSON.stringify(userName));
}

function renderScore(){
 localStorage.getItem('points', JSON.parse(points));
 localStorage.getItem('userName'); 
}
console.log(localStorage)

//displayQuestion();
//startTimer();