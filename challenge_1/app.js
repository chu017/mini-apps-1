/* Tic Tac Toe
Starting from a blank index.html and blank app.js file,
build a single-page app for a simple Tic Tac Toe game, where:
 - the first move always starts with player X
 - the app detects a win or tie and displays an appropriate message
 - a button resets the game for a new round of gameplay
*/


// INITIAL BOARD SETUP
// Add a event listener for each square on the board.

// When a square is clicked, add an X to that square.

var isPlayOne = true;

var play = function(event) {

  console.log("Diagonal: ", playRules.diagonalCheck());
  console.log("Horizontal: ", playRules.horizontalCheck());
  console.log("Vertical: ", playRules.verticalCheck());
  console.log("isFull: ", playRules.isFull());

  // var goOn = false;
  // goOn = playRules.diagonalCheck();
  // goON = playRules.horizontalCheck();
  // goOn = playRules.verticalCheck();
  // goOn = playRules.ifFull();

  // console.log(goOn);

  if (isPlayOne) {
    event.srcElement.innerHTML = 'x';
    isPlayOne = false;
  } else {
    event.srcElement.innerHTML = 'O';
    isPlayOne = true;
  }
}

// IMPLEMENT THE RULES OF TIC TAC TOE
var playRules = {

  // - before planing an x or o, ensure the clicked board square is empty. If the position is already occupied, don't place an X or O and do not move on to the next player's turn.
  isEmpty: function(event, callback) {
    if (event.srcElement.innerHTML === '') {
      callback(event);
    } else {
      return;
    }
  },

  // - after each play, look for 3 in a row, either diagonally, horizontally and vertically. Also be sure to check to see if the board is full.
  // - if either condition is met, display a meesage and do not allow any additional plays.
  diagonalCheck: function() {
    var diagonalConflict = false;
    if (document.getElementById("square1").innerHTML !== '' && document.getElementById("square5").innerHTML !== '' && document.getElementById("square9").innerHTML !== '' || document.getElementById("square3").innerHTML !== '' && document.getElementById("square5").innerHTML !== '' && document.getElementById("square7").innerHTML !== '') {
      diagonalConflict = true;
    }
    return diagonalConflict;
  },

  horizontalCheck: function() {
    var horizontalConflict = false;
    if (document.getElementById("square1").innerHTML !== '' && document.getElementById("square2").innerHTML !== '' && document.getElementById("square3").innerHTML !== '' || document.getElementById("square4").innerHTML !== '' && document.getElementById("square5").innerHTML !== '' && document.getElementById("square6").innerHTML !== '' || document.getElementById("square7").innerHTML !== '' && document.getElementById("square8").innerHTML !== '' && document.getElementById("square9").innerHTML !== '') {
      horizontalConflict = true;
    }
    return horizontalConflict;

  },

  verticalCheck: function() {
    var verticalConflict = false;
    if (document.getElementById("square1").innerHTML !== '' && document.getElementById("square4").innerHTML !== '' && document.getElementById("square7").innerHTML !== '' || document.getElementById("square2").innerHTML !== '' && document.getElementById("square5").innerHTML !== undefined && document.getElementById("square8").innerHTML !== '' || document.getElementById("square3").innerHTML !== '' && document.getElementById("square6").innerHTML !== '' && document.getElementById("square9").innerHTML !== '') {
      verticalConflict = true;
    }
    return verticalConflict;
  },

  isFull: function() {
    var full = false;
    if (document.getElementById("square1").innerHTML !== '' && document.getElementById("square2").innerHTML !== '' && document.getElementById("square3").innerHTML !== '' && document.getElementById("square4").innerHTML !== '' && document.getElementById("square5").innerHTML !== '' && document.getElementById("square6").innerHTML !== '' && document.getElementById("square7").innerHTML !== '' && document.getElementById("square8").innerHTML !== '' && document.getElementById("square9").innerHTML !== '') {
      full = true;
    }
    return full;
  }

}


document.getElementById("square1").addEventListener("click", (event) => playRules.isEmpty(event, play));
document.getElementById("square2").addEventListener("click", (event) => playRules.isEmpty(event, play));
document.getElementById("square3").addEventListener("click", (event) => playRules.isEmpty(event, play));
document.getElementById("square4").addEventListener("click", (event) => playRules.isEmpty(event, play));
document.getElementById("square5").addEventListener("click", (event) => playRules.isEmpty(event, play));
document.getElementById("square6").addEventListener("click", (event) => playRules.isEmpty(event, play));
document.getElementById("square7").addEventListener("click", (event) => playRules.isEmpty(event, play));
document.getElementById("square8").addEventListener("click", (event) => playRules.isEmpty(event, play));
document.getElementById("square9").addEventListener("click", (event) => playRules.isEmpty(event, play));


// RESELTTING THE GAME
// add a button in index.html
// when clicked, reset the state of player (X vs. O) and clear the board
// and clear the message

var newGame = function() {
  var list = document.getElementsByClassName("square");
  _.each(list, function(item) {
    item.innerHTML = ''
  });
}

document.getElementById("newGame").addEventListener("click", newGame);


// SEPARATION OF CONCERNS
// Render the View
// User input Controller
// Managing app state





