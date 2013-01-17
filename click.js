 $(document).ready(function() {
	$(document).bind('mousemove', function(e){
		$('#cloud').css({
			left: e.pageX + 20,
			top: 0
		});
	});

/* function homeanimation() {

$height = $(window).height();

  $('.raindrop').animate({
    opacity: 1,
    top: $(window).height(),

  }, 2000, function() {
  	
  });
  $('.raindrop').delay(5000).fadeIn(1000).delay(2000);
setTimeout('homeanimation()', 2000);
};
homeanimation(); */

function animate() {
       var posx = (Math.random() * ($(document).width())).toFixed();
                  $('.raindrop').stop().animate({
                    top: $(window).height(),
                    opacity: 0,
                    left: posx+'px'
                  }, 2050, 'linear', function() { 
                      $('.raindrop').css('opacity', '1');
                      $('.raindrop').css('top', '50px');
                      animate(); });
             }

           animate();



