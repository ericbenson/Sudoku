
module.exports = function(){
  var cell = $(this);
  var parent = cell.closest('.section');
  var table = parent.children();
  var numPad = require('./numPad.js')(cell, parent, table);
  table.detach();
  parent.append(numPad);
  console.log(cell.attr('class'));

}