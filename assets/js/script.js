// when the user clicks start game, a new card arises with questions
//and the timer begins counting down
// when the user selects an answer, they're shown the correct answer.
// If correct answer isn't chosen, it is highlighted.
// WHen the correct answer is chosen, the test moves to the next question
// When the timer runs out, the test ends immediately and score is recorded
var start_btn = document.getElementById("start-btn");
var header = document.getElementById("main-header");
var view_score = document.getElementById("viewscore-text");
var quiz_info = document.getElementById("quiz-info");
var border_line = document.getElementById("border-line");
var score_ctn = document.getElementById("score-container");
var points = document.getElementById("score_counter");
var time_ctn  = document.getElementById("time-container");
var timer_secs  = document.getElementById("timer_secs");
var question_sec = document.getElementById("question-sec");
var question_text = document.getElementById("question-text");
var answer_btn = document.getElementById("quiz-answers");
var next_button = document.getElementById("next-btn");



var score_sec = document.getElementById("score-sec");
var final_score = document.getElementById("final-score");
var submit_btn = document.getElementById("submit-btn");




const timeValue = 15;
var userScore = 0;
var counter;
var currentQuizQuestion = 0;
;

var questions = [
  {
    question: "Two famous hip-hop artist visited Paris in 2012 and performed their hit song over 12 times in a row. Who were these artist?",
    answers: [
      {text: "Lil Yachty and Drake", correct: false},
        {text: "Snoop Dogg and Dr.Dre", correct: false},
        {text: "Kanye West and Jay-Z", correct: true},
        {text: "Lil Uzi Vert and Playboi Carti", correct: false},
    ]
  },

  { 
    question: "What was the Prince of Persia's real name?",
    answers: [
      {text: "Malik", correct: false},
        {text: "Unknown", correct: true},
        {text: "Shahraman", correct: false},
        {text: "Abdul", correct: false},
    ]
  },

  {
    question: "Who is Pokémon #123?",
    answers: [
      {text: "Garchomp", correct: false},
        {text: "Pikachu", correct: false},
        {text: "Mr. Mime", correct: false},
        {text: "Scyther", correct: true},
    ]
  },

  {
    question: "What is Cloud's neutral special called in his limit form?",
    answers: [
      {text: "Limit Climb Hazard", correct: false},
        {text: "Limit Cross Slash", correct: false},
        {text: "Limit Blade Beam", correct: true},
        {text: "Finishing Touch", correct: false},
    ]
  },

  {
    question: "Who is Zuko?",
    answers: [
      {text: "An Earthbender", correct: false},
        {text: "A Waterbender", correct: false},
        {text: "An Airbender", correct: false},
        {text: "A Firebender", correct: true},
    ]
  },

  {
    question: "What is the name of Diluc's elemental skill?",
    answers: [
      {text: "Searing Onslaught", correct: true},
        {text: "Dawn", correct: false},
        {text: "Blessing of Phoenix", correct: false},
        {text: "Tempered Sword", correct: false},
    ]
  },

  
  {
    question: "What is the name of Furi's main character?",
    answers: [
      {text: "Burst", correct: false},
        {text: "Rider", correct: true},
        {text: "Edge", correct: false},
        {text: "Line", correct: false},
    ]
  },

  
  {
    question: "What is the name of John Cena's intro?",
    answers: [
      {text: "You can't see me", correct: false},
        {text: "Booyaka 619", correct: false},
        {text: "The Time is Now", correct: true},
        {text: "Rest in Peace", correct: false},
    ]
  },

  
  {
    question: "What is the name of Frisk's best friend?",
    answers: [
      {text: "Asgore", correct: false},
      {text: "Asriel", correct: true},
      {text: "Toriel", correct: false},
      {text: "Sans", correct: false},
        
    ]
  },

  
  {
    question: "Who is Junko Enoshima?",
    answers: [
      {text: "The Ultimate Despair", correct: true},
        {text: "The Ultimate Lucky Student", correct: false},
        {text: "The Ultimate Caretaker", correct: false},
        {text: "The Ultimate Fashionista", correct: true},
    ]
  },
]


// Quiz initialization. Removes main page elements and shows quiz elements
function startQuiz(){
  hideMain();
  showQuiz();

  userScore = 0;
  currentQuizQuestion = 0;

  showQuestions();
  startTimer(timeValue);
}

function hideMain() {
  start_btn.style.display = "none";
  header.style.display = "none";
  quiz_info.style.display = "none";
  border_line.style.display = "none";
  view_score.style.display = "none";
}

function showQuiz() {
  score_ctn.style.display = "block";
  time_ctn.style.display = "inline";
  question_sec.style.display = "block";
}

function hideQuiz() {
  score_ctn.style.display = "none";
  time_ctn.style.display = "none";
  question_sec.style.display = "none";
}

function showQuestions() {

  resetState();

  var currentQuestion = questions[currentQuizQuestion];
  var questionNo = currentQuizQuestion + 1;

  // Adds number before question text
  question_text.innerHTML = questionNo + ". " + currentQuestion.question;

  // Creates a button for each answer choice in the questions object
  currentQuestion.answers.forEach(answer => {
    var button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answer_btn.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);

  });
  
}


// Removes answer buttons
function resetState() {
  next_button.style.display = "none";
  while(answer_btn.firstChild){
    answer_btn.removeChild(answer_btn.firstChild);
  }
}

// Timer Functionality
function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {

    timer_secs.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value

    if (time < 5){
      timer_secs.style.transition = "color 1.5s";
      timer_secs.style.color = "red";
    }

    if (time < 0) {
      clearInterval(counter);
      // console.log("Time's up!")
      answerChosen();
    }
  }
}

// Selected answer class. Gives color to correct and incorrect and controls what happens when an answer is selected.
function selectAnswer(event) {
  var selectedAnswer = event.target;
  var isCorrect = selectedAnswer.dataset.correct === "true";
  clearInterval(counter);

  if (isCorrect) {
    console.log("correct answer chosen")
    selectedAnswer.classList.add("correct");
    userScore+=20;
    points.textContent = userScore;
  } 
  else {
    console.log("wrong answer chosen")
    selectedAnswer.classList.add("incorrect");
  }

  answerChosen();
}

  // create an array for the buttons and run a foreach loop on it. Each answer that is true will turn green.
  // Disable buttons, and display the next button
  // Credits: GreatStack on YT 
function answerChosen(){
  Array.from(answer_btn.children).forEach(button=>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");

    }
    button.disabled = true;
    next_button.style.display = "block";
  });
}

// Reset the screen with the next set of questions, once all questions are done, end the quiz.
function nextQuestionHandler(){
  currentQuizQuestion++;
  if (currentQuizQuestion < questions.length){

    timer_secs.style.transition = "unset";
    timer_secs.style.color = "var(--font-color)";
    timer_secs.textContent = timeValue;

    showQuestions()
    startTimer(timeValue);
  }
  else {
    // console.log("no questions left")
    showScore();
  }
}

function showScore(){

  resetState()

  final_score.textContent = userScore;

  hideQuiz();

  score_sec.style.display = "block"

}




var leaderboards = [];

function init() {
  var storedLeaderboards = JSON.parse(localStorage.getItem("leaderboards"));
  
  if (storedLeaderboards != null) {
    leaderboards = storedLeaderboards;
      console.log(leaderboards)
  }
}

function submitScore(event) {
  event.preventDefault();

  var initials = document.getElementById("initials").value;

  // console.log(_ini);

  var newScore = {
    initials: initials,
    score: userScore,
  };

  // gets the current local storage and adds a new score to it.
  init();
  leaderboards.push(newScore);

  window.localStorage.setItem("leaderboards", JSON.stringify(leaderboards));
  window.location = "score.html";
}

// next button functionality 
next_button.addEventListener("click", () =>{
  if (currentQuizQuestion < questions.length){
    nextQuestionHandler();
  }
  else if (currentQuizQuestion = questions.length) {
    // console.log("no questions left")
    // console.log("Final score: " + userScore)
  }
})

start_btn.addEventListener("click", function(){
  console.log("Quiz started! Button was pressed!")
  startQuiz();
})
