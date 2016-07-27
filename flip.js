

function flip_demo(){
  $('#flip3d').addClass(' rotate');
  $('#dropdownForm').removeClass();
  $('#dropdownForm').addClass('cards animated bounceInDown');
  window.setTimeout(function(){
    $('#dropdownForm').removeClass();
    $('#dropdownForm').addClass('cards animated shake');
  }, 1500);
}


function reset(){
  $('#dropdownForm').removeClass();
  $('#dropdownForm').addClass('cards hide');
}
