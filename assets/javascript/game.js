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
    $('#numToMatch').text(targetNum);
}

//start/reset function to start & restart game after win or lose
function startGame() {
    //generate new target value
    genTarget();
    //generate new crystal value
    gemOne = Math.floor(Math.random() * 11 + 1);
    gemTwo = Math.floor(Math.random() * 11 + 1);
    gemThree = Math.floor(Math.random() * 11 + 1);
    gemFour = Math.floor(Math.random() * 11 + 1)

    //Reset users total
    usersTotal = 0;
    //Display it
    $('#youTotal').text(usersTotal);
}

//generate score for crystals 1-4 with values between 1-12
gemOne = Math.floor(Math.random() * 11 + 1);
gemTwo = Math.floor(Math.random() * 11 + 1);
gemThree = Math.floor(Math.random() * 11 + 1);
gemFour = Math.floor(Math.random() * 11 + 1);
var pointArray = [gemOne, gemTwo, gemThree, gemFour];
generateCrystalElements(pointArray);


//dynamically generate 4 crystal tags
function generateCrystalElements(pointArray) {
    //generate an image tag using jQuery syntax
    //on new image tag add an attribute
    var blueImgTag = $('<img src="assets/css/images/blue-crystal.jpg" class=crystalImage id="gemOne" alt="Blue Gem">');
    blueImgTag.attr("data-crystalvalue", pointArray[0]);
    $('.container').append(blueImgTag);

    var greenImgTag = $('<img src="assets/css/images/green-crystal.jpg" class=crystalImage id="gemTwo" alt="Green Gem">');
    greenImgTag.attr("data-crystalvalue", pointArray[1]);
    $('.container').append(greenImgTag);

    var purpleImgTag = $('<img src="assets/css/images/purple-crystal.jpg" class=crystalImage id="gemThree" alt="Purple Gem">');
    purpleImgTag.attr("data-crystalvalue", pointArray[2]);
    $('.container').append(purpleImgTag);

    var whiteImgTag = $('<img src="assets/css/images/white-crystal.jpg" class=crystalImage id="gemFour" alt="White Gem">');
    whiteImgTag.attr("data-crystalvalue", pointArray[3]);
    $('.container').append(whiteImgTag);
}

function updateTotal(userGuess) {
    //add usersTotal and usersGuess
    usersTotal = usersTotal + userGuess;
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

//capture users click on crystals and update total
$(document).on('click', '#gemOne', function () {
    var crystalPoint = $(this).attr("data-crystalvalue");
    crystalPoint = parseInt(crystalPoint)
    updateTotal(gemOne);
})

$(document).on('click', '#gemTwo', function () {
    var crystalPoint = $(this).attr("data-crystalvalue");
    crystalPoint = parseInt(crystalPoint);
    updateTotal(gemTwo);
})

$(document).on('click', '#gemThree', function () {
    var crystalPoint = $(this).attr("data-crystalvalue");
    crystalPonit = parseInt(crystalPoint);
    updateTotal(gemThree);
})

$(document).on('click', '#gemFour', function () {
    var crystalPoint = $(this).attr("data-crystalvalue");
    crystalPoint = parseInt(crystalPoint);
    updateTotal(gemFour);
})

//create function for if user wins game
function win() {
    //add 1 to total number of games won
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
