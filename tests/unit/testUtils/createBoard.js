module.exports = function(assert, path){
  describe('createBoard', function() {

    var board = require(path+'board/createBoard')();

    it("board is an Array", function () {
      assert.isArray(board);
    });

    it('board is 9x9 in size', function(){
      assert.lengthOf(board,9);
      for(var i=0; i<board.length; i++){
        assert.lengthOf(board[i],9);
      }
    });

    it('board rows contain same numbers as Wikipedia example', function(){
      assert.includeMembers(board[0],[5,3,7]);
      assert.includeMembers(board[1],[6,1,9,5]);
      assert.includeMembers(board[2],[9,8,6]);
      assert.includeMembers(board[3],[8,6,3]);
      assert.includeMembers(board[4],[4,8,3,1]);
      assert.includeMembers(board[5],[7,2,6]);
      assert.includeMembers(board[6],[6,2,8]);
      assert.includeMembers(board[7],[4,1,9,5]);
      assert.includeMembers(board[8],[8,7,9]);
    });


  });

}
