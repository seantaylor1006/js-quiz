let startButton = document.querySelector(".start-button")

const quizQuestions = [
    {
        question: "Where do you put a JS script link in an HTML document?",
        options: ["top","middle","bottom"],
        correct0: 3
    },
    {
        question: "Const is a variable that _",
        options: ["cannot be changed","can be changed locally", "can be changed globally"],
        correct: 1
    },
    {
        question: "What does 'return' in a function do?",
        options: ["ends a function","executes a function","loops a function"],
        correct: 1
    },
    {
    question: "'var' works in _",
    options: ["Javascript alone","Javascript and CSS","Javascript,CSS,and HTML"],
    correct: 2
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
    const optionsElement = document.getElementById("options");

    questionElement.textContent = quizQuestions[currentQuestion].question;
    optionsElement.textContnet = quizQuestions[currentQuestion].options;

}  

//displayQuestion();
//startTimer();