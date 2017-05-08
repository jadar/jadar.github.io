"use strict";

function updateCoverImage(image) {
	if(image.height > image.width) {
	    image.height = "100%";
	    image.width = "auto";
	}
}

$(document).ready(function () {
	$(".parallax").each(function(){
        let elem = $(this); // assigning the object
        $(window).scroll(function() {
            let parent_top = elem.offset().top;          
			let window_bottom = $(window).scrollTop();
			let image = elem.find("img");
			          	  
			let oVal = ((window_bottom - parent_top) / 3);
			image.css("transform","translate3d(0px, " + oVal + "px, 0px)");
        }); 
    });

    $(".hero").each(function() {
    	let image = $(this).find("img");
    	updateCoverImage(image);
    	$(window).resize(function() {
    		updateCoverImage(image);
    	});
    });
});