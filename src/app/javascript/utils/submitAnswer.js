var checkSolution = require('./validSolution.js');

module.exports = function(board){
  var clickListener = function(){
  	var answer = checkSolution.call(this, board);
  	console.log(answer);
  };


	var button = $('<button></button').text('Submit Answer').addClass('submit');

	button.click(clickListener);


	return button;

}