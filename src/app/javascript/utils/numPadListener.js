module.exports = function(cell, parent, table){
  button = $(this);
  var value = button.text();
  console.log(value);
  if(value !== 'exit'){
    cell.text(value);
    
  }
  parent.children().detach();
  parent.append(table);
}