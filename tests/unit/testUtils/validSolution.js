module.exports = function(assert, path){
  describe('validSolution', function() {

    var solution = require(path+'solution/solution');
    var validSolution = require(path+'solution/validSolution');


    it("correctly identifies a correct solution", function () {
      assert.isTrue(validSolution(solution));
    });

    it('starting board is incorrect', function(){
      var board = require(path+'board/createBoard')();
      
      assert.isFalse(validSolution(board));
    });

  });

}
