var listener = require('./numPadListener.js');

module.exports = function(cell, parent, table, board){

  var clickListener = function(){
  	listener.call(this,cell, parent, table, board);
  };

  //creates the table to hold the num pad
  var numPad = $('<table></table>');
  numPad.addClass('numPad');

  //creates the num pad using nested for loops
  for(var i=1; i<10; i+=3){
    var tableRow = $('<tr></tr>'); 

    for(var j=i; j<i+3; j++){
      var tableCol = $('<td></td>').addClass('numPadDigit');
      var button = $('<button></button').text(j); 
      button.click(clickListener);

      tableCol.append(button);

      tableRow.append(tableCol);
    }
    numPad.append(tableRow);

  }
  var button = $('<button></button').text('exit'); 
  button.click(clickListener);
  var tableRow = $('<tr></tr>').append(button);
  numPad.append(tableRow);

  return numPad;


};