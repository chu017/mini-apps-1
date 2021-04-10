import React from 'react';
import Board from './board.jsx';
import GameChecker from './gameChecker.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      win: false
    }
  }



  render() {
    return (
      <div>
      <h1>Connct Four</h1>
      <h3 id="playTurn">Player One's turn</h3>
      <Board />
      <div id="reset">Reset</div>
      </div>
    )
  }
}



export default App;