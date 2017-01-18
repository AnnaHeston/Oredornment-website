
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


var $overlay= $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$('document').ready(function() {
	$("body").append($overlay);
})
	

$('document').ready(function() {
	$(".gal a").click(function(event){
		event.preventDefault();
		var href= $(this).attr("href");
		$image.attr("src", href);
		$overlay.show();
		var captionText = $(this).children("img").attr("title");
		$caption.text(captionText);
})});

$overlay.click(function(){
	$overlay.hide();
});