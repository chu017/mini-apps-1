/* Tic Tac Toe
Starting from a blank index.html and blank app.js file,
build a single-page app for a simple Tic Tac Toe game, where:
 - the first move always starts with player X
 - the app detects a win or tie and displays an appropriate message
 - a button resets the game for a new round of gameplay
*/


// When a square is clicked, add an X to that square.

var isPlayOne = true;

var play = function(event, callback) {

  var isFull = playRules.isFull();

  if (!isFull) {
    // render
    if (isPlayOne) {
      event.target.innerHTML = 'x';
      isPlayOne = false;
    } else {
      event.target.innerHTML = 'o';
      isPlayOne = true;
    }

    setTimeout(callback, 10);
  }

  return;

}


// Add a event listener for each square on the board.
// turn 5
// checkAllRules function

const checkAllRules = () => {
  playRules.diagonalCheck();
  playRules.horizontalCheck();
  playRules.verticalCheck();
};

document.getElementById("square1").addEventListener("click", (event) => playRules.isEmpty(event, (event) => play(event, checkAllRules)
));

document.getElementById("square2").addEventListener("click", (event) => playRules.isEmpty(event, (event) => play(event, checkAllRules)
));

document.getElementById("square3").addEventListener("click", (event) => playRules.isEmpty(event, (event) => play(event, checkAllRules)
));

document.getElementById("square4").addEventListener("click", (event) => playRules.isEmpty(event, (event) => play(event, checkAllRules)
));

document.getElementById("square5").addEventListener("click", (event) => playRules.isEmpty(event, (event) => play(event, checkAllRules)
));

document.getElementById("square6").addEventListener("click", (event) => playRules.isEmpty(event, (event) => play(event, checkAllRules)
));

document.getElementById("square7").addEventListener("click", (event) => playRules.isEmpty(event, (event) => play(event, checkAllRules)
));

document.getElementById("square8").addEventListener("click", (event) => playRules.isEmpty(event, (event) => play(event, checkAllRules)
));

document.getElementById("square9").addEventListener("click", (event) => playRules.isEmpty(event, (event) => play(event, checkAllRules)
));


// RESELTTING THE GAME
// add a button in index.html
// when clicked, reset the state of player (X vs. O) and clear the board
// and clear the message

var newGame = function() {
  var list = document.getElementsByClassName("square");
  _.each(list, function(item) {
    item.innerHTML = ''
  });
  isPlayOne = true;
}

document.getElementById("newGame").addEventListener("click", newGame);


// SEPARATION OF CONCERNS
// Render the View
// User input Controller
// Managing app state





