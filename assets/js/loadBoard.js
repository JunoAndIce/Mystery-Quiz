// Credits to Christopher Banta for leaderboard code 

var leaderList = document.getElementById("leaderboard-list");
var leaderboard = [];

var clear = document.getElementById("clear-btn");
var play = document.getElementById("play-btn");


//grabs highscores from localStorage then runs the command to put highscores on stream
function pullScores() {
    var storedLeaderboards = JSON.parse(localStorage.getItem("leaderboards"));
    
    if (storedLeaderboards != null) {
        leaderboard = storedLeaderboards;
    }
    createEntries();
}


function createEntries() {
    for (var i = 0; i < leaderboard.length ; i++) {
        leaderboard.sort((a, b) => b.score - a.score);
        var leaderBoardInfo = leaderboard[i];

        

        var li = document.createElement("li");

        li.textContent = leaderBoardInfo.initials + ":       " + leaderBoardInfo.score;;

        li.setAttribute("id","initials-entry");

        leaderList.appendChild(li);  
    }
}

//clears local storage for leaderboards
clear.addEventListener("click", function() {
    localStorage.removeItem("leaderboards");
    window.location.href="score.html";
})

//Takes user to start page
play.addEventListener("click", function() {
    window.location.href="index.html";
})

pullScores();