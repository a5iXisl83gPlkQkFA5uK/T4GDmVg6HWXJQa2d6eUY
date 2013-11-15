$(document).ready(function(){
	
	
	var snapper = new Snap({
	  element: document.getElementById('content')
	});

	$('.flat-menu').click(function(){
		snapper.open('left');
		return false;
	});
	
	$('.sidebar-header').click(function(){
		snapper.close();
		return false;
	});

	
	$('.deploy-sidebar, .page-header, .close-icon').click(function(){
		if( snapper.state().state=="left" ){
			snapper.close();
		} else {
			snapper.open('left');
		}
		return false;
	});

			
	$('.bxslider').bxSlider({
		pager:false,
		controls:true,
		touchEnabed:true,
		infiniteLoop: true,
		preventDefaultSwipeX:true
	});	
	
	$('.bx-next').click(function(){
		return false;
	});
	
	$('.bx-prev').click(function(){
		return false;
	});	
	
	$('.page-coach').hide();
	
	$('.nav-coach').click(function(){
		$('.page-coach').fadeIn(200);
		document.ontouchmove = function(event){ event.preventDefault();}
		snapper.close();
	});
	
	$('.page-coach').click(function(){
		$('.page-coach').fadeOut(200);
		document.ontouchmove = function(event){ event.allowDefault();}
	});
	
	
	
	/////////////////////////////////////////////////////////////////////////////////
	$.ajax({
		url: "http://brassbadger.honsoworld.com/api/",
		type: "POST",
		success:function(result){
			$("#apiResults").html("");
			result = $.parseJSON(result);
			for (var i = 0; i < result.data.length; i++) {
				$("#apiResults").append("<div class='notification-box blue-box'><h4>"+result.data[i]['name']+"</h4><div class='clear'></div><p>"+result.data[i]['address']+"</p></div>");
			}
		}
	});
	
});

	/*
		var xTouches = event.touches[0].pageX;
		var yTouches = event.touches[0].pageY;
			
		document.ontouchstart = function(event){

			xTouches.preventDefault();
			yTouches.allowDefault();	
			//event.preventDefault();  
		}
		
		*/


