
/*responsive menu*/
  
$('document').ready(function() {
  var pull    = $('#pull');
  var menu    = $('#navul');
  var menuHeight  = menu.height();
 
  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });


$(window).resize(function(){
  var w = $(window).width();
  if(w > 360 && menu.is(':hidden')) {
    menu.removeAttr('style');
  }
}); });
