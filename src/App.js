import React, { Component } from 'react';
import Board from './components/Board/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board board={this.props.board} />
      </div>
    );
  }
}

export default App;
