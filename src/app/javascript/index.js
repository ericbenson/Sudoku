$(function (){

	var board = require('./utils/createBoard.js')();
	var table = require('./utils/renderBoard.js')(board);
	var numPad = require('./utils/numPad.js')();

	$('#container').append(table);

});




