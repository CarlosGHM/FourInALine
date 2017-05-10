var Board = function () {
  this.initGame();
}

Board.prototype.initGame = function() {
  this.columns = 7;
  this.rows = 6;
  this.isGameActive = true;
  this.turns = 0;
  this.EMPTY = 0;
  this.FIRST = 1;
  this.SECOND = 2;
  this.board = this.create_board();
}

Board.prototype.create_board = function () {
  var m = [];
  for (let i = 0; i < this.rows; i++) {
    m[i] = [];
    for (let j = 0; j < this.columns; j++) {
      m[i][j] = this.EMPTY;
    }
  }
  return m;
}

Board.prototype.printBoard = function () {
  for (let i = 0; i < this.rows; i++) {
    console.log(this.board[i]);
  }
}

Board.prototype.choseColumn = function (col, type) {
  const colZeroBase = col - 1;
  for (let j = this.rows - 1; j >= 0; j--) {
    if (this.board[j][colZeroBase] === this.EMPTY) {
      this.board[j][colZeroBase] = type;
      this.turns++;
      return true;
    }
  }
  console.log("la columna está llena");
  return false;
}

Board.prototype.checkWinner = function (type) {

  //Horizontal
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.columns - 3; j++) {
      if (this.board[i][j] === type && this.board[i][j + 1] === type && this.board[i][j + 2] === type && this.board[i][j + 3] === type) {
        console.log("ganó el tipo en horizontal " + type);
        this.isGameActive = false;
        return true;
      }
    }
  }

  //Vertical
  for (let j = 0; j < this.columns; j++) {
    for (let i = 0; i < this.rows - 3; i++) {
      if (this.board[i][j] === type && this.board[i + 1][j] === type && this.board[i + 2][j] === type && this.board[i + 3][j] === type) {
        console.log("ganó el tipo en vertical " + type);
        this.isGameActive = false;
        return true;
      }
    }
  }

  //Diagonal /
  for (let j = 0; j < this.columns - 3; j++) {
    for (let i = this.rows - 3; i < this.rows; i++) {
      if (this.board[i][j] === type && this.board[i - 1][j + 1] === type && this.board[i - 2][j + 2] === type && this.board[i - 3][j + 3] === type) {
        console.log("ganó el tipo en diagonal / " + type);
        this.isGameActive = false;
        return true;
      }
    }
  }

  //Diagonal \
  for (let j = this.columns - 1; j > 0; j--) {
    for (let i = this.rows - 3; i < this.rows; i++) {
      if (this.board[i][j] === type && this.board[i - 1][j - 1] === type && this.board[i - 2][j - 2] === type && this.board[i - 3][j - 3] === type) {
        console.log("ganó el tipo en diagonal \\ " + type);
        this.isGameActive = false;
        return true;
      }
    }
  }
  return false;
}

Board.prototype.turnsExceed = function() {
  return (this.rows*this.columns <= this.turns);
}

Board.prototype.isActive = function() {
  const turnsExceed = !this.turnsExceed();
  return this.isGameActive && turnsExceed;
}


export default Board;
/*var board = new Board();
//board.printBoard();
var btest = [[0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 1, 0], [0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1]];
board.board = btest;
board.printBoard();
board.checkWinner(board.FIRST);*/
