$(function (){

	var restartButton = require('./utils/restart/reset.js');

	var reset = function(){
		$('.container').children().detach();

		var board = require('./utils/board/createBoard.js')();
		var table = require('./utils/board/renderBoard.js')(board);
		var submit = require('./utils/solution/submitAnswer.js')(board);

		$('.container').append(table);

		$('.container').append(submit);
		
	};
	reset();

	restartButton.click(reset);
	
	$('.restart').append(restartButton);



});




