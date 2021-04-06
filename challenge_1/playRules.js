

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
    console.log("diagonalCheck is called");

    if (document.getElementById("square1").innerHTML === 'x' && document.getElementById("square5").innerHTML === 'x' && document.getElementById("square9").innerHTML === 'x' || document.getElementById("square3").innerHTML === 'x' && document.getElementById("square5").innerHTML === 'x' && document.getElementById("square7").innerHTML === 'x') {
      alert("PlayOne Wins!");

    } else if (document.getElementById("square1").innerHTML === 'o' && document.getElementById("square5").innerHTML === 'o' && document.getElementById("square9").innerHTML === 'o' || document.getElementById("square3").innerHTML === 'o' && document.getElementById("square5").innerHTML === 'o' && document.getElementById("square7").innerHTML === 'o') {
      alert("PlayTwo Wins!");

    }

  },

  horizontalCheck: function() {
    console.log("horizontalCheck is called");

    if (document.getElementById("square1").innerHTML === 'x' && document.getElementById("square2").innerHTML === 'x' && document.getElementById("square3").innerHTML === 'x' || document.getElementById("square4").innerHTML === 'x' && document.getElementById("square5").innerHTML === 'x' && document.getElementById("square6").innerHTML === 'x' || document.getElementById("square7").innerHTML === 'x' && document.getElementById("square8").innerHTML === 'x' && document.getElementById("square9").innerHTML === 'x') {
      alert("PlayOne Wins!");

    } else if (document.getElementById("square1").innerHTML === 'o' && document.getElementById("square2").innerHTML === 'o' && document.getElementById("square3").innerHTML === 'o' || document.getElementById("square4").innerHTML === 'o' && document.getElementById("square5").innerHTML === 'o' && document.getElementById("square6").innerHTML === 'o' || document.getElementById("square7").innerHTML === 'o' && document.getElementById("square8").innerHTML === 'o' && document.getElementById("square9").innerHTML === 'o') {
      alert("PlayTwo Wins!");
    }

  },

  verticalCheck: function() {
    console.log("verticalCheck is called");

    if (document.getElementById("square1").innerHTML === 'x' && document.getElementById("square4").innerHTML === 'x' && document.getElementById("square7").innerHTML === 'x' || document.getElementById("square2").innerHTML === 'x' && document.getElementById("square5").innerHTML === 'x' && document.getElementById("square8").innerHTML === 'x' || document.getElementById("square3").innerHTML === 'x' && document.getElementById("square6").innerHTML === 'x' && document.getElementById("square9").innerHTML === 'x') {
      alert("PlayOne Wins!");

    } else if (document.getElementById("square1").innerHTML === 'o' && document.getElementById("square4").innerHTML === 'o' && document.getElementById("square7").innerHTML === 'o' || document.getElementById("square2").innerHTML === 'o' && document.getElementById("square5").innerHTML === 'o' && document.getElementById("square8").innerHTML === 'o' || document.getElementById("square3").innerHTML === 'o' && document.getElementById("square6").innerHTML === 'o' && document.getElementById("square9").innerHTML === 'o') {
      alert("PlayTwo Wins!");

    }

  },

  isFull: function() {

    var isFull = false;

    if (document.getElementById("square1").innerHTML !== '' && document.getElementById("square2").innerHTML !== '' && document.getElementById("square3").innerHTML !== '' && document.getElementById("square4").innerHTML !== '' && document.getElementById("square5").innerHTML !== '' && document.getElementById("square6").innerHTML !== '' && document.getElementById("square7").innerHTML !== '' && document.getElementById("square8").innerHTML !== '' && document.getElementById("square9").innerHTML !== '') {

      isFull = true;
    }

    console.log(isFull);
    return isFull;
  }

}