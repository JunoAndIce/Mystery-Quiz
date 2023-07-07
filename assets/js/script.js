// when the user clicks start game, a new card arises with questions
//and the timer begins counting down
// when the user selects an answer, they're shown the correct answer.
// If correct answer isn't chosen, it is highlighted.
// WHen the correct answer is chosen, the test moves to the next question
// When the timer runs out, the test ends immediately and score is recorded

var questions = [
  {
    question: "Two black men visited Paris in 2012 and performed their hit song over 12 times in a row. Who were these men?",
    answers: [
      {text: "Lil Yachty and Drake", correct: false},
        {text: "Snoop Dogg and Dr.Dre", correct: false},
        {text: "Kanye West and Jay-Z", correct: true},
        {text: "Lil Uzi Vert and Playboi Carti", correct: false},
    ]
  },

  {
    question: "Two black men visited Paris in 2012 and performed their hit song over 12 times in a row. Who were these men?",
    answers: [
      {text: "Lil Yachty and Drake", correct: false},
        {text: "Snoop Dogg and Dr.Dre", correct: false},
        {text: "Kanye West and Jay-Z", correct: true},
        {text: "Lil Uzi Vert and Playboi Carti", correct: false},
    ]
  },

  {
    question: "Two black men visited Paris in 2012 and performed their hit song over 12 times in a row. Who were these men?",
    answers: [
      {text: "Lil Yachty and Drake", correct: false},
        {text: "Snoop Dogg and Dr.Dre", correct: false},
        {text: "Kanye West and Jay-Z", correct: true},
        {text: "Lil Uzi Vert and Playboi Carti", correct: false},
    ]
  },

  {
    question: "Two black men visited Paris in 2012 and performed their hit song over 12 times in a row. Who were these men?",
    answers: [
      {text: "Lil Yachty and Drake", correct: false},
        {text: "Snoop Dogg and Dr.Dre", correct: false},
        {text: "Kanye West and Jay-Z", correct: true},
        {text: "Lil Uzi Vert and Playboi Carti", correct: false},
    ]
  },

  {
    question: "Two black men visited Paris in 2012 and performed their hit song over 12 times in a row. Who were these men?",
    answers: [
      {text: "Lil Yachty and Drake", correct: false},
        {text: "Snoop Dogg and Dr.Dre", correct: false},
        {text: "Kanye West and Jay-Z", correct: true},
        {text: "Lil Uzi Vert and Playboi Carti", correct: false},
    ]
  }
]


var start_btn = document.getElementById("start-btn");
var header = document.getElementById("main-header");
var quiz_info = document.getElementById("quiz-info");
var border_line = document.getElementById("border-line");
var score_ctn = document.getElementById("score-container");
var time_ctn  = document.getElementById("time-container");
var timer_secs  = document.getElementById("timer_secs");
var question_sec = document.getElementById("question-sec");
var question_text = document.getElementById("question-text");
var answer_btn = document.getElementById("quiz-answers");


var timeValue = 60;
var userScore = 0;
var counter;
var currentQuizQuestion = 0;

// Quiz initialization. Removes main page elements and shows quiz elements
function startQuiz(){
  start_btn.style.display = "none";
  header.style.display = "none";
  quiz_info.style.display = "none";
  border_line .style.display = "none";

  score_ctn.style.display = "block";
  time_ctn.style.display = "inline";
  question_sec.style.display = "block";

  userScore = 0;
  currentQuizQuestion = 0;

  showQuestions();
  startTimer(timeValue);
}

function showQuestions(){
  resetState();
  var currentQuestion = questions[currentQuizQuestion];
  var questionNo = currentQuizQuestion + 1;

  question_text.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    var button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answer_btn.appendChild(button);

    // if (answer.correct) {
    //   button.dataset.correct = answer.correct;
    // }
    // button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  while(answer_btn.firstChild){
    answer_btn.removeChild(answer_btn.firstChild);
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {

    timer_secs.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value

    if (time < 10){
      timer_secs.style.transition = "color 2s";
      timer_secs.style.color = "red";
    }

    if (time < 0) {
      clearInterval(counter);
      console.log("Time's up!")
    }
  }
}

// Selected answer class. Gives color to correct and incorrect
// function selectAnswer(event) {
//   var selectedAnswer = event.target;
//   var isCorrect = selectedAnswer.dataset.correct === "true";

//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//   } 
//   else {
//     selectedBtn.classList.add("incorrect");
//   }
// }








start_btn.addEventListener("click", function(){
  console.log("Quiz started! Button was pressed!")
  startQuiz();
})
