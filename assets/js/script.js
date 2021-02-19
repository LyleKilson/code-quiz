// Variable for start button
var startBtn = document.querySelector("button");

// Time and score variables
var score = 0;
var timeLeft = 0;
var currentQuestion = 0;
var timer;

//Arrray of questionsArr and answers
var questionsArr = [
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
      "The <footer> section",
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
      '<script get="xxx.js">',
    ],
    answer: '<script src="xxx.js">',
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    choices: ["True", "False", "truthy", "falsey"],
    answer: "true",
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
function startQuiz() {
  var timeLeft = 90;
  var timer = setInterval(function () {
    document.getElementById("timer").innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "0";
      endQuiz();
    }
  }, 100);
  startQuestions();
}

var startQuestions = function () {
  var displayQuestion = document.getElementById("questionBody");
  displayQuestion.innerHTML = questionsArr[currentQuestion].question;
  var dispalyChoices = document.getElementById("button");
  dispalyChoices.textContent= questionsArr[currentQuestion].choices;
};

//Button click to call startQuiz()
startBtn.addEventListener("click", startQuiz);

//if ( currentQuestion < questionsArr.length) {
//currentQuestion++;

//document.getElementById("quizBody").innerHTML = "<span>" + questionsArr[0].question + "</span>";
