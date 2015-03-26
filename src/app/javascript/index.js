$(function (){

	var board = require('./utils/createBoard.js')();
	var table = require('./utils/renderBoard.js')(board);

	$('#container').append(table);

});




