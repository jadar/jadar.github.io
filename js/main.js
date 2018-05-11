"use strict";

function updateCoverImage(window, image) {
	if(window.width < window.height) {
	    image.height = "100%";
	    image.width = "auto";
	    console.log("doingthething!");
	}
}

$(document).ready(function () {
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

$("#contactSubmit").click(function() {
    $("#contact-alert").addClass("hidden");
    if(!$("#name").val() || !$("#email").val() || !$("#message").val()) {
        $("#contact-alert")
            .removeClass("hidden")
            .removeClass("alert-success")
            .addClass("alert-danger")
            .text("Please fill in the name, email, and message fields before sending.");
    } else if (!$("#g-recaptcha-response").val()) {
        $("#contact-alert")
            .removeClass("hidden")
            .removeClass("alert-success")
            .addClass("alert-danger")
            .text("Please click on the captcha verification.");
    } else {
    	let data = JSON.stringify({
                "name": $("#name").val(),
                "email": $("#email").val(),
                "subject": $("#subject").val(),
                "phone": $("#phone").val(),
                "company": $("#website").val(),
                "message": $("#message").val(),
                "g-recaptcha-response": $("#g-recaptcha-response").val()
            });
        $.ajax({
            type: "POST",
            url: "https://contact2.jadar.net/send_message/",
            dataType: "json",
            contentType: "application/json",
            data: data
        }).done(function (response) {
            // console.log(response);
			$("#contact-alert")
                .removeClass("hidden")
                .removeClass("alert-danger")
                .addClass("alert-success")
                .text("Sent! Thank you for your time.");

            grecaptcha.reset();
        }).fail(function () {
			$("#contact-alert")
                .removeClass("hidden")
                .removeClass("alert-success")
                .addClass("alert-danger")
                .text("Error. Please verify your info and try again.");
        });
    }
});
