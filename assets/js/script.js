// Variable for start button
var startQuizBtn = document.querySelector("button");

//Variables for time left and high score

var timer;
var timeLeft = 0;

//Arrray of questions and answers
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<js>", "<javascript>", "<scripting"],
    answer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "The <body> section",
      "The <head> section",
      "Both the <head> section and the <body section are correct.",
    ],
    answer: "The <body> section",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: [
      '<script src="xxx.js">',
      '<script name="xxx.js">',
      '<script href="xxx.js">',
    ],
    answer: '<script src="xxx.js">',
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    choices: ["True", "False"],
    answer: "True",
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    choices: [
      'msg("Hello World");',
      'alertbox("Hello World");',
      'alert("Hello World");',
      'msgbox("Hello World");',
    ],
    answer: 'alert("Hello World");',
  },
];

//Function to start the quiz
function startTimer() {
  timeLeft = 90;
  document.getElementById("timeLeft").innerHTML = timeLeft;
  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);

  startQuestions();
}

function startQuestions() {
    for (var i = 0; i < questions.length; i++) {
        console.log(questions);
    }
}

//Button click to call startQuiz()
startQuizBtn.addEventListener("click", startTimer);
