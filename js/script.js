$(document).ready(function(){

	$(".run").click(function(){
		$('.hair').css('background', 'red');
		//$("").show( "explode", 
          //            {pieces: 16}, 2000 );
	$("#me2").hide( "explode", 
                      {pieces: 30}, 1000 );
	})
	//$(".base").show( "explode", 
     //                 {pieces: 2}, 1000 );
	


/*
	$(".run").click(function(){
	
	  $("#box").animate({opacity: "0.1", left: "+=400"}, 1200)
	  .animate({opacity: "0.4", top: "+=160", height: "20", width: "20"}, "slow")
	  .animate({opacity: "1", left: "0", height: "100", width: "100"}, "slow")
	  .animate({top: "0"}, "fast")
	  .slideUp()
	  .slideDown("slow")
	  return false;
	
	});
	*/
});