// create var's
var usersTotal = 0;
var wins = 0;
var losses = 0;
var targetNum = 0;

var gemOne = 0;
var gemTwo = 0;
var gemThree = 0;
var gemFour = 0;

//Start game after page finishes loading
$(document).ready(function () {
    startGame();
})

//create generated target guess between 19-120 to start game
function genTarget() {
    targetNum = Math.floor(Math.random() * 101 + 19);
    $('.numToMatch').text(targetNum);
}

//start/reset function to start & restart game after win or lose
function startGame() {
    genTarget();
    //generate score for crystals 1-4 with values between 1-12
    gemOne = Math.floor(Math.random() * 11 + 1);
    gemTwo = Math.floor(Math.random() * 11 + 1);
    gemThree = Math.floor(Math.random() * 11 + 1);
    gemFour = Math.floor(Math.random() * 11 + 1);
    
    usersTotal = 0;
    $('#youTotal').text(usersTotal);
}


function updateTotal (userGuess) {
    //add score of crystals to users total
    //add usersTotal and usersGuess
    usersTotal = usersTotal + userGuess;
    console.log("New usersTotal= " + usersTotal);
    //display the new sum
    $('#youTotal').text(usersTotal);
    //add if or else statements for winning or losing
    //if users score doesnt equal target repeat click on crystals
    //if users total euqals to target wins go up and game starts over
    //if users total goes over target number the losses go up and game starts over
    if (usersTotal == targetNum) {
        win();
    } else if (usersTotal > targetNum) {
        loser();
    }
}

//capture users click on crystals
$('#gemOne').on('click', function () {
    //userGuess = gemOne;
    updateTotal(gemOne);
})

$('#gemTwo').on('click', function () {
    updateTotal(gemTwo);
})

$('#gemThree').on('click', function () {
    updateTotal(gemThree);
})

$('#gemFour').on('click', function () {
    updateTotal(gemFour);
})

//create function for if user wins game
function win() {
    wins++;
    $('#wins').text("Wins: " + wins);
    alert("You're a winner!");
    startGame();
}

//create function for if user losses game
function loser() {
    losses++;
    $('#losses').text("Losses: " + losses);
    alert("Sorry! Better luck next time");
    startGame();
}
