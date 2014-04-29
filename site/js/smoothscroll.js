//Jquery smooth scroll without plugin

//bind click function to all links in ul
$("#mainNav li a").click(function(){
	//get contents of the href attribute and store in variable
	var navlinkId = $(this).attr("href");
//select body and use animate method - takes two parameters
//scroll to the top  a specified number of pixels
//top offset
//html, body for compatibility
	$("html, body").animate({scrollTop: $(navlinkId).offset().top}, 2000);
	return false;

});
$(".arrow-up a").click(function(){

 var ArrowLinkId = $(this).attr("href");
 $("html, body").animate({scrollTop: $(ArrowLinkId).offset().top}, 2000);
    return false;
});

/* horizontal scroll */
// $(function() {
//     $('#mainNav li a#right').bind('click',function(event){
//         var $anchor = $(this);
        /*
        if you want to use one of the easing effects:
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1500,'easeInOutExpo');
         */
//         $('html, body').stop().animate({
//             scrollLeft: $($anchor.attr('href')).offset().left
//         }, 1000);
//         event.preventDefault();
//     });
// });

// $(".story a").click(function(){
// 	var storylinkId = $(this).attr("href");
// 	$("html, body").animate({scrollTop: $(storylinkId).offset().top}, 2000);
// 	return false;

// });

// $(".intro a").click(function(){
// 	var introlinkId = $(this).attr("href");
// 	$("html, body").animate({scrollTop: $(introlinkId).offset().top}, 2000);
// 	return false;

// });