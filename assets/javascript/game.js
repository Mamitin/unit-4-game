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

//Create generated target guess between 19-120 to start game
function genTarget() {
    //Generate new target value
    targetNum = Math.floor(Math.random() * 101 + 19);
    //display it
    $('.numToMatch').text(targetNum);
}

//start/reset function to start & restart game after win or lose
function startGame() {
    //Generate new target value
    genTarget();

    //generate score for crystals 1-4 with values between 1-12
    gemOne = Math.floor(Math.random() * 11 + 1);
    gemTwo = Math.floor(Math.random() * 11 + 1);
    gemThree = Math.floor(Math.random() * 11 + 1);
    gemFour = Math.floor(Math.random() * 11 + 1);

    //Reset users total
    usersTotal = 0;
    //Display it
    $('#youTotal').text(usersTotal);
}


function updateTotal(userGuess) {
    //add usersTotal and usersGuess
    usersTotal = usersTotal + userGuess;
    console.log("New usersTotal= " + usersTotal);

    //display the new sum
    $('#youTotal').text(usersTotal);
    
    //if users total equals target, user wins
    //if users total goes over target number, user losses
    //otherwise keep playing
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
    //add 1 to total number of games wone
    wins++;
    //display new value
    $('#wins').text(wins);
    //notify user of win
    alert("You're a winner!");
    //start new game
    startGame();
}

//create function for if user losses game
function loser() {
    //add 1 to total number of games lost
    losses++;
    //display new value
    $('#losses').text(losses);
    //alert user they lost
    alert("Sorry! Better luck next time");
    //start new game
    startGame();
}
