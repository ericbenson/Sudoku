$(function (){

	var board = require('./utils/createBoard.js')();
	var table = require('./utils/renderBoard.js')(board);
	var numPad = require('./utils/numPad.js')();
	var submit = require('./utils/submitAnswer.js')(board);

	$('#container').append(table);

	$('#container').append(submit);



});




