 $(document).ready(function() {
  $(document).bind('mousemove', function(e){
    $('#cloud').css({
      left: e.pageX + 20,
      top: 0
    });
  });
function animate(posx, element) {
                  var bottom = $(window).height() - 150;               
                  $(element).stop().css({'opacity': '1', 'top': '100px', 'left': posx + 'px'}).animate({
                    top: bottom + 'px',
                    opacity: 0
                  }, 2050, 'linear', function() {
                      animate(Math.floor((Math.random() * ($('#cloud').width()))), this); });
             }
     
        var $cloud = $(document.getElementById('cloud')),
            cloud_width = $cloud.width();
     function createGroups() {
    for(i=0;i<6;i++) {
        setTimeout(animate(Math.floor((Math.random() * (cloud_width))), jQuery("<div class='raindrop'></div>").appendTo($cloud).get(0)), i * 100);
     }
 }
     for(i=0;i<10;i++) {
         setTimeout(createGroups, i * 250);
     }

});