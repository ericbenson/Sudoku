var solution = require('./solution.js');

module.exports = function(board){

  for(var i = 0; i<board.length; i++){

    for(var j=0; j<board[i].length; j++){
      if(board[i][j] !== solution[i][j]){
        return false;
      }
    }
  }
  return true;

};