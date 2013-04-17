function Player(symbol) {
  this.symbol = symbol;
};

function Board() {
  this.grid = new Array([new Array(3)], [new Array(3)], [new Array(3)]);
  this.validMove = function(row, col) {
    if (this.grid[row][col] === undefined) {
      return true;
    }
    return false;
  },
  this.move = function(symbol, row, col) {
    this.grid[row][col] = symbol;
  }

  this.win = function(symbol) {
    for(i = 0, i < this.winCombos.length; i++) {
      var checkArray = this.winCombos[i];
      if (this.grid[checkArray[0][0]][checkArray[0][1]] === symbol &&
        this.grid[checkArray[1][0]][checkArray[1][1]] === symbol &&
        this.grid[checkArray[2][0]][checkArray[2][1]] === symbol) {
          return true;
      }
    }
    return false;
  },

  this.winCombos = [ [[0,0],[0,1],[0,2]], [[1,0],[1,1],[1,2]], [[2,0],[2,1],[2,2]],
  [[0,0],[1,0],[2,0]], [[0,1],[1,1],[2,1]], [[0,2],[1,2],[2,2]], [[0,0],[1,1],[2,2]],
  [[0,2],[1,1],[2,0]] ]
}

function Game(player1, player2, board) {
  this.play = function {

  }
}

var player1 = new Player("x");
var player2 = new Player("o");
var board = new Board();