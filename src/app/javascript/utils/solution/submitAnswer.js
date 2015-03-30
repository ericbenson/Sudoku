var checkSolution = require('./validSolution.js');

module.exports = function(board){

  var button = $('<button></button').text('Submit Answer').addClass('submit');

  var clickListener = function(){
  	var answer = checkSolution.call(this, board);
  	if(answer){
  		button.text('Congradulations you have won!').addClass('winner');
  	} else {
  		button.text('Incorrect attempt').removeClass('submit').addClass('incorrect');
  		setTimeout(function(){
  			button.text('Submit Answer').removeClass('incorrect').addClass('submit')
  		},3000);
  	}
  };

  button.click(clickListener);

  return button;

}