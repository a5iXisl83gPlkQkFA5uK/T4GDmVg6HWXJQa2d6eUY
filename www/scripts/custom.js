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
	
	$('#cal-357').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("357", 47909); });
	$('#cal-380').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("380", 47909); });
	$('#cal-40').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("40", 47909); });
	$('#cal-44').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("44", 47909); });
	$('#cal-45').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("45", 47909); });
	$('#cal-9').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("9", 47909); });
	$('#cal-12').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("12", 47909); });
	$('#cal-20').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("20", 47909); });
	$('#cal-410').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("410", 47909); });
	$('#cal-17').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("17", 47909); });
	$('#cal-22').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("22", 47909); });
	$('#cal-223').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("223", 47909); });
	$('#cal-22mag').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("22mag", 47909); });
	$('#cal-3006').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("3006", 47909); });
	$('#cal-3030').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("3030", 47909); });
	$('#cal-308').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("308", 47909); });
	$('#cal-556').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("556", 47909); });
	$('#cal-762').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("762", 47909); });
	
	
	/////////////////////////////////////////////////////////////////////////////////
	
	
});

badger = {};
badger.fetch = function(cal, zip){
	$("#apiResults").html("<p>Loading...</p>");
	var snapper = new Snap({
	  element: document.getElementById('content')
	});		
	snapper.close();
	$.ajax({
		url: "http://brassbadger.com/api/?cal="+cal+"&zip="+zip,
		type: "GET",
		success:function(result){
			$("#apiResults").html("");
			result = $.parseJSON(result);
			for (var i = 0; i < result.data.length; i++) {
				var color = "blue";
				if(result.data[i]['code'] == "0")
					color = "red";
				if(result.data[i]['code'] == "1")
					color = "yellow";
				if(result.data[i]['code'] == "2")
					color = "green";
				$("#apiResults").append("<div class='notification-box "+color+"-box'><h4>"+result.data[i]['name']+" ("+result.data[i]['status']+")</h4><div class='clear'></div><p>"+result.data[i]['address']+", "+result.data[i]['city']+", "+result.data[i]['state']+" "+result.data[i]['zip']+" | "+result.data[i]['phone']+"<br />Last Checked: "+result.data[i]['updated']+"</p></div>");
			}
			if(result.data.length == 0)
				$("#apiResults").append("<div class='notification-box blue-box'><h4>- No Results Found -</h4><div class='clear'></div><p></p></div>");
		}
	});
}
	/*
		var xTouches = event.touches[0].pageX;
		var yTouches = event.touches[0].pageY;
			
		document.ontouchstart = function(event){

			xTouches.preventDefault();
			yTouches.allowDefault();	
			//event.preventDefault();  
		}
		
		*/


