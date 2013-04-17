var tower = {
  towers: [[3,2,1],[],[]],
  move: function(begin, end) {
    this.towers[end].push(this.towers[begin].pop());
  },

  validMove: function(begin, end) {
    if (this.towers[end].length === 0) {
      return true;
    } else if (this.towers[end][this.towers[end].length - 1] <
        this.towers[begin][this.towers[begin].length - 1]) {
        return false;
    }
    return true;
  },

  hasWon: function() { //ask about ?
    if (this.towers[0].length === 0 && this.towers[1].length === 0) {
      return true;
    }

    return false;
  }
};