"use strict";

function updateCoverImage(window, image) {
	if(window.width < window.height) {
	    image.height = "100%";
	    image.width = "auto";
	    console.log("doingthething!");
	}
}

$(document).ready(function () {
	// $(".parallax").each(function(){
 //        let elem = $(this); // assigning the object
 //        $(window).scroll(function() {
 //            let parent_top = elem.offset().top;          
	// 		let window_bottom = $(window).scrollTop();
	// 		let image = elem.find("img");
			          	  
	// 		let oVal = ((window_bottom - parent_top) / 3);
	// 		image.css("transform", "translate3d(0px, " + oVal + "px, 0px)");
 //        }); 
 //    });

    $(".hero").each(function() {
    	let image = $(this).find("img");
    	updateCoverImage($(window), image);
    	$(window).resize(function() {
    		updateCoverImage($(window), image);
    	});
    });

    $(window).scroll(function() {
        if ($(".navbar").offset().top > 350) {
            $(".navbar-brand").css("opacity", "1");
        } else {
            $(".navbar-brand").css("opacity", "0");
        }
    });
});