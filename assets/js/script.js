// when the user clicks start game, a new card arises with questions
//and the timer begins counting down
// when the user selects an answer, they're shown the correct answer.
// If correct answer isn't chosen, it is highlighted.

var start_btn = document.getElementById("start-btn");
var header = document.getElementById("main-header");
var quiz_info = document.getElementById("quiz-info");
var border_line = document.getElementById("border-line");
var score_ctn = document.getElementById("score-container");
var time_ctn  = document.getElementById("time-container");
var timer_secs  = document.getElementById("timer_secs");
var questionSec = document.getElementById("question-sec")

var timeValue = 60;
var userScore = 0;
var counter;

function startQuiz(){
  start_btn.style.display = "none";
  header.style.display = "none";
  quiz_info.style.display = "none";
  border_line .style.display = "none";

  score_ctn.style.display = "block";
  time_ctn.style.display = "inline";
  questionSec.style.display = "block";

  startTimer(timeValue);

}



function startTimer(time){
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










start_btn.addEventListener("click", function(){
  console.log("Quiz started! Button was pressed!")
  startQuiz();
})
