// Variable for start button
var btnClick = document.querySelector("button");
var startBtn = document.querySelector("#button");
var displayQuestion = document.getElementById("questionBody");

// Time and score variables
var score = [];
var timeLeft = 0;
var currentQuestion = -1;

//Arrray of questionsArr and answers
var questionsArr = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<js>", "<javascript>", "<scripting>"],
    answer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "The <body> section",
      "The <head> section",
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
  }, 1000);
  var removeStartBtn = document.getElementById("button");
  removeStartBtn.remove();
  startQuestions();
}

var startQuestions = function () {
  currentQuestion++;

  if (currentQuestion > 4) {
    endQuiz();
  } else {
    displayQuestion.innerHTML = questionsArr[currentQuestion].question;
    createChoicesBtns();
  }
};

var createChoicesBtns = function () {
  var btnsDiv = document.createElement("div");

  for (var i = 0; i < questionsArr[currentQuestion].choices.length; i++) {
    var choicesBtn = document.createElement("button");
    choicesBtn.setAttribute("onclick", "startQuestions()");
    choicesBtn.className = "button";
    choicesBtn.textContent = questionsArr[currentQuestion].choices[i];
    btnsDiv.appendChild(choicesBtn);
  }
  displayQuestion.append(btnsDiv);
};

var endQuiz = function () {
  clearInterval(timer);

  displayQuestion.innerHTML =
    "<h2>Game Over!</h2> <h3>You got a score of + + /100! <div><input type=text id='name' placeholder='First Name'><button class='button' id='scoreBtn' onclick='saveScore()'>Submit Score</button></div>";
};

var saveScore = function () {
    
};

//Button click to call startQuiz()
btnClick.addEventListener("click", startQuestions);
startBtn.addEventListener("click", startQuiz);
