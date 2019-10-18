//create generated target guess between 19-120 to start game
$(document).ready(function () {
    targetNum = Math.floor(Math.random() * 101 + 19)
    $('.numToMatch').text(targetNum);
})

// create var's
var usersTotal = 0;
var wins = 0;
var losses = 0;
var targetNum = 0;


//generate score for crystals 1-4 with values between 1-12
//capture users click on crystals

var gemOne = Math.floor(Math.random() * 11 + 1)
var gemTwo = Math.floor(Math.random() * 11 + 1)
var gemThree = Math.floor(Math.random() * 11 + 1)
var gemFour = Math.floor(Math.random() * 11 + 1)

//capture users click on crystals
$('#gemOne').on('click', function () {
    //add score of crystals to users total
    //add usersTotal and gemOne
    usersTotal = usersTotal + gemOne;
    console.log("New usersTotal= " + usersTotal);
    //display the new sum
    $('.youTotal').text(usersTotal);
    //add if or else statements for winning or losing
    //if users score doesnt equal target repeat click on crystals
    //if users total euqals to target wins go up and game starts over
    //if users total goes over target number the losses go up and game starts over
    if (usersTotal == targetNum) {
        win();
    } else if (usersTotal > targetNum) {
        loser();
    }
})

$('#gemTwo').on('click', function () {
    //add score of crystals to users total
    //add usersTotal and gemOne
    usersTotal = usersTotal + gemTwo;
    console.log("New usersTotal= " + usersTotal);
    //display score of crystals
    $('.youTotal').text(usersTotal);
    //add if or else statements for winning or losing
    //if users score doesnt equal target repeat click on crystals
    //if users total euqals to target wins go up and game starts over
    //if users total goes over target number the losses go up and game starts over
    if (usersTotal == targetNum) {
        win();
    } else if (usersTotal > targetNum) {
        loser();
    }
})

$('#gemThree').on('click', function () {
    //add score of crystals to users total
    //add usersTotal and gemOne
    usersTotal = usersTotal + gemThree;
    console.log("New usersTotal= " + usersTotal);
    //display score of crystals
    $('.youTotal').text(usersTotal);
    //add if or else statements for winning or losing
    //if users score doesnt equal target repeat click on crystals
    //if users total euqals to target wins go up and game starts over
    //if users total goes over target number the losses go up and game starts over
    if (usersTotal == targetNum) {
        win();
    } else if (usersTotal > targetNum) {
        loser();
    }
})

$('#gemFour').on('click', function () {
    //add score of crystals to users total
    //add usersTotal and gemOne
    usersTotal = usersTotal + gemFour;
    console.log("New usersTotal= " + usersTotal);
    //display score of crystals
    $('.youTotal').text(usersTotal);
    //add if or else statements for winning or losing
    //if users score doesnt equal target repeat click on crystals
    //if users total euqals to target wins go up and game starts over
    //if users total goes over target number the losses go up and game starts over
    if (usersTotal == targetNum) {
        win();
    } else if (usersTotal > targetNum) {
        loser();
    }
})

//create function for win
function win() {
    wins++;
    $('#wins').text(wins)
    alert("You're a winner!");
    reset();
}

//create function for lose
function loser() {
    losses++;
    alert("Sorry! Better luck next time");
    reset();
}

//reset function
function reset() {
    targetNum = Math.floor(Math.random() * 101 + 19);
    $('#targetNumNumber').text(targetNum);
    console.log(reset)
}