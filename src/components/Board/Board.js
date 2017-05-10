import React, { Component } from 'react'
import Cell from '../Cell/Cell';
import CellOption from '../CellOption/CellOption';
import classNames from 'classnames';
import './style.css';

class Board extends Component {
  constructor(params) {
    super(params);
    this.state = {
      winner: null,
      isFirstTurn: true
    }
    this.playerChoose = this.playerChoose.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame() {
    this.props.board.initGame();
    this.setState({winner:null, isFirstTurn:true});
  }

  playerChoose(e, col) {
    const { board } = this.props;
    const type = (this.state.isFirstTurn) ? board.FIRST : board.SECOND;
    if (!board.isActive()) {
      return;
    }
    const validMove = board.choseColumn(col, type);
    if (board.checkWinner(type)) {
      this.setState({ winner: type });
    } else if (validMove) {
      this.setState({ isFirstTurn: !this.state.isFirstTurn });
    }
    console.log(board.printBoard());
  }

  renderHeader() {
    return (
      <thead>
        <tr>
          <th className="boardHeader"><CellOption isFirstTurn={this.state.isFirstTurn} column={1} onClick={this.playerChoose} /></th>
          <th className="boardHeader"><CellOption isFirstTurn={this.state.isFirstTurn} column={2} onClick={this.playerChoose} /></th>
          <th className="boardHeader"><CellOption isFirstTurn={this.state.isFirstTurn} column={3} onClick={this.playerChoose} /></th>
          <th className="boardHeader"><CellOption isFirstTurn={this.state.isFirstTurn} column={4} onClick={this.playerChoose} /></th>
          <th className="boardHeader"><CellOption isFirstTurn={this.state.isFirstTurn} column={5} onClick={this.playerChoose} /></th>
          <th className="boardHeader"><CellOption isFirstTurn={this.state.isFirstTurn} column={6} onClick={this.playerChoose} /></th>
          <th className="boardHeader"><CellOption isFirstTurn={this.state.isFirstTurn} column={7} onClick={this.playerChoose} /></th>
        </tr>
      </thead>
    );
  }

  renderBoard() {
    const boardElements = [];
    const { board } = this.props;
    for (let i = 0; i < board.rows; i++) {
      boardElements.push(
        <tr className="boardCell">
          <td className="boardCell"><Cell value={board.board[i][0]} /></td>
          <td className="boardCell"><Cell value={board.board[i][1]} /></td>
          <td className="boardCell"><Cell value={board.board[i][2]} /></td>
          <td className="boardCell"><Cell value={board.board[i][3]} /></td>
          <td className="boardCell"><Cell value={board.board[i][4]} /></td>
          <td className="boardCell"><Cell value={board.board[i][5]} /></td>
          <td className="boardCell"><Cell value={board.board[i][6]} /></td>
        </tr>)
    }

    return <tbody>{boardElements}</tbody>;
  }

  renderWinner() {
    if (!this.state.winner) {
      return;
    }
    return <h1>{`El ganador es el jugador número ${this.state.winner}`}</h1>
  }

  renderCurrentTurn(){
    if (this.state.winner) {
      return;
    }
    const txt = (this.state.isFirstTurn) ? "Turno del jugador 1" : "Turno del jugador 2";
    return <h2>{txt}</h2>
  }

  render() {
    const clases = classNames({
      'board': true,
      'disabler': !this.props.board.isActive()
    });
    return (
      <div className="container">
        <div className="row">
          <button className="btn-primary btn-lg" onClick={this.resetGame}>"Reiniciar el juego"</button>
        </div>
        {this.renderWinner()}
        {this.renderCurrentTurn()}
        <div className="mainContainer">
          <div>
            <table className={clases}>
              {this.renderHeader()}
              {this.renderBoard()}
            </table>
          </div>
        </div>
      </div>
    )
  }
}

Board.propTypes = {

}

export default Board;