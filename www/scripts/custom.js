badger = {};

badger.zip = 47909;
badger.saveStoreChecks = function(){
	var stores = [];
	$(".nav-item.stores.checked-v2").each(function(){
		stores.push($(this).data("storeid"));
	})
	stores = '["'+stores.join('","')+'"]';
	if(stores == '[""]')
		stores = "[]";
	window.localStorage.setItem( 'zip_stores_'+badger.zip, stores);
	var savedStoreChecks = $.parseJSON(window.localStorage.getItem( 'zip_stores_'+badger.zip ));
}
badger.getZipStores = function(callback){
	$(".nav-item.stores").remove()
	$("#nav-stores-text").html("");
	$.ajax({
		url: "http://brassbadger.com/api/?r=s&zip="+badger.zip,
		type: "GET",
		success:function(result){
			result = $.parseJSON(result);
			var savedStoreChecks = $.parseJSON(window.localStorage.getItem( 'zip_stores_'+badger.zip ));
			var usedSavedValues = false;
			if($.isArray(savedStoreChecks)){
				if( savedStoreChecks.length > 0 )
					usedSavedValues = true;
			}
			for (var i = 0; i < result.data.length; i++) {
				var checkedClass = "";
				if(usedSavedValues && $.inArray(""+result.data[i]['id']+"", savedStoreChecks) > -1 ){
					checkedClass = "checked-v2";
				}
				if(!usedSavedValues)
					checkedClass = "checked-v2";
				var item = $('<div class="nav-item checker checkbox-v2 '+checkedClass+' stores" style="background-size: 16px 16px; background-position:22px; 3px;padding-left:60px;" data-storeid="'+result.data[i]['id']+'">'+result.data[i]['address']+'</div>');
				item.click(function(){
					$(this).toggleClass('checked-v2');
					badger.updateOverview();
					badger.saveStoreChecks();
					$("#subHeader").html("BrassBadger");
					$("#apiResults").html("");
					
					return false;
				})
				
				$("#nav-stores").after(item);
			}
			$("#nav-stores-text").html("NEAR " + badger.zip);
			badger.setHeight();
			callback();
			
		}
	});
}

badger.getSelectedStores = function(){
	var stores = "";
	$(".nav-item.stores.checked-v2").each(function(){
		stores += "|" + $(this).data("storeid");
	})
	return stores;
}

badger.setHeight = function(){
	var windowHeight = innerHeight || 
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;
	var sidebarHeight = $(".page-sidebar-scroll")[0].scrollHeight;
	var winnerHeight = sidebarHeight;
	if(windowHeight > sidebarHeight)
		winnerHeight = windowHeight;
	$(".page-content").height(windowHeight);
}

badger.fetch = function(cal){
	var stores = badger.getSelectedStores();
	$("#apiResults").html("<p>Loading...</p>");	
	badger.snapper.close();
	$.ajax({
		url: "http://brassbadger.com/api/?cal="+cal+"&store="+stores,
		type: "GET",
		success:function(result){
			$("#apiResults").html("");
			result = $.parseJSON(result);
			for (var i = 0; i < result.data.length; i++) {
				var color = "blue";
				if(result.data[i]['code'] == "0")
					color = "red";
				if(result.data[i]['code'] == "1")
					color = "blue";
				if(result.data[i]['code'] == "2")
					color = "yellow";
				if(result.data[i]['code'] == "3")
					color = "green";
				var price = "";
				if(result.data[i]['price'] != "")
					price = "$"+result.data[i]['price'];
					
				$("#apiResults").append("<div class='notification-box "+color+"-box'><h4>"+result.data[i]['name']+"</h4><div class='clear'></div><p><b>"+price+"</b> "+result.data[i]['status']+" as of "+result.data[i]['updated']+"<br />"+result.data[i]['address']+", "+result.data[i]['city']+", "+result.data[i]['state']+" "+result.data[i]['zip']+"</p></div>");
				
				
				
				

			}
			if(result.data.length == 0)
				$("#apiResults").append("<div class='notification-box blue-box'><h4>- No Results Found -</h4><div class='clear'></div><p></p></div>");
		}
	});
	badger.updateOverview();
}

badger.updateOverview = function(){
	var stores = badger.getSelectedStores();
	badger.setHeight();
	$.ajax({
		url: "http://brassbadger.com/api/?r=o&store="+stores,
		type: "GET",
		success:function(result){
			result = $.parseJSON(result);
			$(".nav-item.cal")
				.removeClass("type-blue")
				.removeClass("type-grey")
				.removeClass("type-red")
				.removeClass("type-yellow")
				.removeClass("type-green")
				.addClass("type-grey");
			for (var i = 0; i < result.data.length; i++) {
				var color = "grey";
				if(result.data[i]['code'] == "0")
					color = "red";
				if(result.data[i]['code'] == "1")
					color = "blue";
				if(result.data[i]['code'] == "2")
					color = "yellow";
				if(result.data[i]['code'] == "3")
					color = "green";
				$("#cal-" + result.data[i]['cal'])
					.removeClass("type-blue")
					.removeClass("type-grey")
					.removeClass("type-red")
					.removeClass("type-yellow")
					.removeClass("type-green")
					.addClass("type-" + color);
			}
			badger.setHeight();
		}
	});
}

badger.geoLocateCallback = function(json){
	badger.zip = json.postalCodes[0].postalCode;
	window.localStorage.setItem( 'zipcode', badger.zip);
	$(".nav-item.cal")
		.removeClass("type-blue")
		.removeClass("type-grey")
		.removeClass("type-red")
		.removeClass("type-yellow")
		.removeClass("type-green")
		.addClass("type-grey");
	badger.getZipStores(function(){
		badger.updateOverview();
	});
	alert("GeoLocate: Using " + badger.zip + " as zipcode.");
}
badger.geoLocate = function(){
	navigator.geolocation.getCurrentPosition(function(pos){
		alert(pos.coords.latitude);
		var script = document.createElement("script");
		script.src = "http://ws.geonames.org/findNearbyPostalCodesJSON?lat=" + pos.coords.latitude + "&lng=" + pos.coords.longitude + "&callback=badger.geoLocateCallback";
		document.getElementsByTagName("head")[0].appendChild(script);
		alert("cool");
	}, function(){
		alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');

		console.log(arguments);
	},{
         enableHighAccuracy: true
              ,timeout : 15000
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

$(document).ready(function(){
	badger.zip = window.localStorage.getItem( 'zipcode' );
	
	badger.snapper = new Snap({
	  element: document.getElementById('content')
	});

	$('.flat-menu').click(function(){
		badger.snapper.open('left');
		return false;
	});
	
	$('.sidebar-header').click(function(){
		badger.snapper.close();
		return false;
	});

	
	$('.deploy-sidebar, .close-icon').click(function(){
		if( badger.snapper.state().state=="left" ){
			badger.snapper.close();
		} else {
			badger.snapper.open('left');
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
		badger.snapper.close();
	});
	
	$('.page-coach').click(function(){
		$('.page-coach').fadeOut(200);
		document.ontouchmove = function(event){ event.allowDefault();}
	});
	document.addEventListener("menubutton", function(){alert("menu")}, false);

	$('#cal-357').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("357"); });
	$('#cal-38').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("38"); });
	$('#cal-380').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("380"); });
	$('#cal-40').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("40"); });
	$('#cal-44').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("44"); });
	$('#cal-45').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("45"); });
	$('#cal-9').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("9"); });
	$('#cal-12').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("12"); });
	$('#cal-20').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("20"); });
	$('#cal-410').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("410"); });
	$('#cal-17').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("17"); });
	$('#cal-22').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("22"); });
	$('#cal-223').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("223"); });
	$('#cal-22mag').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("22mag"); });
	$('#cal-3006').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("3006"); });
	$('#cal-3030').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("3030"); });
	$('#cal-308').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("308"); });
	$('#cal-556').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("556"); });
	$('#cal-762').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("762"); });
	
	
	/////////////////////////////////////////////////////////////////////////////////
	
	badger.getZipStores(function(){
		badger.updateOverview();
		try {
			navigator.splashscreen.hide();
		} catch(err){}
	});
	$(".deploy-sidebar").click()
	$("#nav-zip").click(function(){
		badger.zip = prompt("Zipcode:",badger.zip);
		window.localStorage.setItem( 'zipcode', badger.zip);
		$(".nav-item.cal")
			.removeClass("type-blue")
			.removeClass("type-grey")
			.removeClass("type-red")
			.removeClass("type-yellow")
			.removeClass("type-green")
			.addClass("type-grey");
		badger.getZipStores(function(){
			badger.updateOverview();
		});
	});
	
	$("#nav-geo").click(function(){
		if (confirm('This will use your device\'s geolocation service to find your zipcode. Make sure your location services are enabled. Do you want to continue?')){
			navigator.geolocation.getCurrentPosition(function(pos){
				var script = document.createElement("script");
				script.src = "http://ws.geonames.org/findNearbyPostalCodesJSON?lat=" + pos.coords.latitude + "&lng=" + pos.coords.longitude + "&callback=badger.geoLocateCallback";
				document.getElementsByTagName("head")[0].appendChild(script);
			}, function(){
				alert('code: '    + error.code    + '\n' +
					  'message: ' + error.message + '\n');

				console.log(arguments);
			},{
				 enableHighAccuracy: true
					  ,timeout : 15000
			});
		}
	});
	
		
});
