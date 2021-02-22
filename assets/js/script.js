// Variable for start button
var startBtn = document.querySelector("#startBtn");
var displayQuestion = document.getElementById("quizSection");
var displayScoreAndName = document.getElementById("score-name-input");

// Time and score variables
var score = 0;
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

//Function to display the score leader on page load
window.onload = function () {
  var scoreAndNameInput = localStorage.getItem("score-name-input");

  if (!scoreAndNameInput) {
    displayScoreAndName.textContent = "N/A";
  } else {
    displayScoreAndName.textContent = scoreAndNameInput;
  }
};

//Function to start the quiz
function startQuiz() {
  timeLeft = 60;
  timer = setInterval(function () {
    document.getElementById("timer").innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "0";
      endQuiz();
    }
  }, 1000);

  startBtn.remove();
  startQuestions();
}

//Function to dispaly questions after quiz has started
var startQuestions = function () {
  currentQuestion++;

  if (currentQuestion < questionsArr.length) {
    displayQuestion.innerHTML = questionsArr[currentQuestion].question;
    createChoicesBtns();
  } else {
    endQuiz();
  }
};

//Function to dispaly multipul choices for current question
var createChoicesBtns = function () {
  var btnsDiv = document.createElement("div");
  //console.log(btnsDiv.value);

  for (var i = 0; i < questionsArr[currentQuestion].choices.length; i++) {
    var choicesBtn = document.createElement("button");
    choicesBtn.className = "button";
    choicesBtn.textContent = questionsArr[currentQuestion].choices[i];
    btnsDiv.appendChild(choicesBtn);
    displayQuestion.append(btnsDiv);
    choicesBtn.setAttribute("onclick", "answerVerify(questionsArr[currentQuestion].answer, event.target.textContent)");
  };
};

function answerVerify(answer,userChoice) {
  if (answer == userChoice) {
    score = score + 20;
  } else {
    incorrect();
  }
  console.log(score);
  startQuestions();
};

var incorrect = function() {
  timeLeft -= 15; 
  return;
};

//Function to end the quiz
var endQuiz = function () {
  clearInterval(timer);

  displayQuestion.innerHTML =
    "<h2>Game Over!</h2><h3>You got a score of " +
    score +
    "/100!</h3><div><input type=text id='name' placeholder='Enter Initials Here'><button class='button' id='scoreBtn' onclick='saveScore()'>Submit Score</button></div>";
};

//Function save score to local storage
var saveScore = function () {
  localStorage.setItem("score-name-input", document.getElementById("name").value + " " + score);
  location.reload();
};

//Button click to call startQuiz()
startBtn.addEventListener("click", startQuiz);
