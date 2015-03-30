module.exports = function(cell, parent, table, board){
  button = $(this);
  var value = button.text();
  console.log(value);
  if(value !== 'exit'){
    var position = cell.attr('class').split(':');
    board[position[0]][position[1]]=parseInt(value);
    cell.text(value);

  }
  parent.children().detach();
  parent.append(table);
}