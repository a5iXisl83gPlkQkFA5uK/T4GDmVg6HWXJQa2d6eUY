$(window).load(function() { 
	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut("slow");
})


$(document).ready(function(){
    $(".tap-dismiss").hammer({ 
		drag_max_touches:0,
	})	
	.on("tap", function() {
		$(this).fadeOut(500);
	});
	

    $(".double-tap-dismiss").hammer({ 
		drag_max_touches:0,
	})	
	.on("doubletap", function() {
		$(this).fadeOut(500);
	});
	

	$('.swipe-tick-cross-left').click(function(){return false});
    $(".swipe-tick-cross-left").hammer({ 
		drag_max_touches:0,
	})
	.on("dragleft", function(ev){
		var touches = ev.gesture.touches;
		ev.gesture.preventDefault();
		$(this).css("background-color", "#ffdcdd");
		$(this).find(".swipe-check-box").show();
		$(this).find(".swipe-tick-box").hide();
		$(this).find(".swipe-null-box").hide();
	})
	.on("dragright", function(ev) {
		var touches = ev.gesture.touches;
		ev.gesture.preventDefault();
		$(this).css("background-color", "#e3ffdc");
		$(this).find(".swipe-check-box").hide();
		$(this).find(".swipe-tick-box").show();
		$(this).find(".swipe-null-box").hide();		
	})
	.on("tap", function() {
		$(this).css( "background-color", "#f1f1f1");
		$(this).find(".swipe-check-box").hide();
		$(this).find(".swipe-tick-box").hide();
		$(this).find(".swipe-null-box").show();
	});
	
	$('.swipe-tick-cross-right').click(function(){return false});
    $(".swipe-tick-cross-right").hammer({ 
		drag_max_touches:0,
	})
	.on("dragright", function(ev){
		var touches = ev.gesture.touches;
		ev.gesture.preventDefault();
		$(this).css("background-color", "#ffdcdd");
		$(this).find(".swipe-check-box").show();
		$(this).find(".swipe-tick-box").hide();
		$(this).find(".swipe-null-box").hide();
	})
	.on("dragleft", function(ev) {
		var touches = ev.gesture.touches;
		ev.gesture.preventDefault();
		$(this).css("background-color", "#e3ffdc");
		$(this).find(".swipe-check-box").hide();
		$(this).find(".swipe-tick-box").show();
		$(this).find(".swipe-null-box").hide();		
	})
	.on("tap", function() {
		$(this).css( "background-color", "#f1f1f1");
		$(this).find(".swipe-check-box").hide();
		$(this).find(".swipe-tick-box").hide();
		$(this).find(".swipe-null-box").show();
	});

	
	$('.swipe-left-notification').click(function(){return false});
    $(".swipe-left-notification").hammer({ 
		drag_max_touches:0,
	})
	.on("dragleft", function(ev){
		var touches = ev.gesture.touches;
		ev.gesture.preventDefault();
		$(this).find('.swipe-button').css( "width", "20%" ).css( "display", "block");
		$(this).parent().find('.swipe-left-notification a').css( "width", "75%" );
	})
	.on("dragright", function(ev) {
		var touches = ev.gesture.touches;
		ev.gesture.preventDefault();
		$(this).find('.swipe-button').css( "width", "0%" ).css( "display", "none");
		$(this).parent().find('.swipe-left-notification a').css( "width", "100%" );
	})

	.on("touch", function() {
		$(this).css( "background-color", "#eaeaea");
	})
	
	.on("release", function() {
		$(this).css( "background-color", "#f1f1f1");
	});
		
	$('.swipe-right-notification').click(function(){return false});
    $(".swipe-right-notification").hammer({ 
		drag_max_touches:0,
	})
	.on("dragright", function(ev){
		var touches = ev.gesture.touches;
		ev.gesture.preventDefault();
		$(this).find('.swipe-button').css( "width", "20%" ).css( "display", "block");
		$(this).parent().find('.swipe-right-notification a').css( "width", "75%" );
	})
	.on("dragleft", function(ev) {
		var touches = ev.gesture.touches;
		ev.gesture.preventDefault();
		$(this).find('.swipe-button').css( "width", "0%" ).css( "display", "none");
		$(this).parent().find('.swipe-right-notification a').css( "width", "100%" );
	})

	.on("touch", function() {
		$(this).css( "background-color", "#eaeaea");
	})
	
	.on("release", function() {
		$(this).css( "background-color", "#f1f1f1");
	});

	
	$('.swipe-button').click(function(){
		$(this).parent().parent().fadeOut(200);
		return false;
	});
	

		
});