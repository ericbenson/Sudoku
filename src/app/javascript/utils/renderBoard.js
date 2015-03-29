var listener = require('./cellListener.js');

module.exports = function(board){

  var cellListener = function(){
    listener.call(this,board);
  };

  //creates a table and appends the rows and columns from the board to the table

  //in the for loops, used r to represent the rows, and c to represent the columns

  var table = $('<table></table>');
  table.addClass('board');

  //creates the outer table to house the 9 inner sections of the board
  for(var i=0; i<9; i+=3){
    var tableRow = $('<tr></tr>'); 

    for(var j=0; j<9; j+=3){
      var tableCol = $('<td></td>'); 
      var section = $('<table></table>').addClass('section');
      

      //creates the inner tables for each of the 9 sections of the board
      for(var r=i; r<i+3; r++){
        var sectionRow = $('<tr></tr>');
        for(var c=j; c<j+3; c++){
          var sectionCol = $('<td></td>');
          if(board[r][c]){
            sectionCol.append(board[r][c]).addClass('permanent'); 
          } else {
            var button = $('<button></button').text('___').addClass(''+r+':'+c);
            button.click(cellListener);
            sectionCol.append(button).addClass('changeable');
          }
          sectionRow.append(sectionCol);
        }
        section.append(sectionRow);
      }

      //appends the inner section onto the outer table
      tableCol.append(section);
      tableRow.append(tableCol);
    }
    table.append(tableRow);

  }

  return table;
};