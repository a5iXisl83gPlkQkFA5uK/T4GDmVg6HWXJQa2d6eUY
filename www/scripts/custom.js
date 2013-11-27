$(window).load(function() { 
	$("#status").fadeOut();
	$("#preloader").delay(500).fadeOut("slow");
});
$(window).resize(function () {
   badger.onResize();
});

badger = {};
badger.api = 1;
badger.zip = 47909;
badger.onResize = function(){
	var windowHeight = innerHeight || 
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;
	var windowWidth = innerWidth || 
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;
	var sidebarHeight = $(".page-sidebar-scroll")[0].scrollHeight;
	var contentHeight = $("#content")[0].scrollHeight;
	
	if($(window).width() < 720){
		try{
			badger.snapper.enable();
		} catch(err){}
		
		var winnerHeight = sidebarHeight;
		if(windowHeight > sidebarHeight)
			winnerHeight = windowHeight;
		$("#content").css("height", windowHeight);
		$("#content").css("width", "100%");
		
	} else {
		try{
			badger.snapper.enable();
			badger.snapper.open("left");
			badger.snapper.disable();
		} catch(err){}
		var adjustment = 0;
		if(windowHeight > contentHeight){
			adjustment = 20;
		}
		$("#content").css("height", "100%");
		$("#content").css("width", windowWidth - 260 + adjustment);
	}
}
badger.isOnLine = function(){
	var test1 = -1;
	var test2 = -1;
	
	try {
		var online = navigator.connection.type;
		test1 = (online != Connection.NONE) ? 1 : 0;
	} catch(err){
		test2 = 0;
	}
	try {
		var online = window.navigator.onLine;
		test2 = (online == true) ? 1 : 0;
	} catch(err){
		test2 = 1;
	}
	return (  test1 == 1  ||  test2 == 1  ||  ( test1 == -1 && test2 == -1 )  );
}

badger.cache = {
	"_LIMIT" : 20,
	"_TIMEOUT": 900,
	"cache": new Object(),
	
	"get": function( resUrl, successCallback, errorCallback ){		
		badger.cache.maintain();
		
		if (typeof badger.cache.cache[resUrl] == 'undefined') {
			if(badger.isOnLine()){
				var ajaxPromise = $.ajax({
					url: resUrl,
					method: "GET",
					async: true,
					success: function(res){ 
						var res = $.parseJSON(res);
						badger.cache.cache[resUrl] = {
							"res": res, 
							"time": parseInt(  new Date().getTime() / 1000  ), 
							"num": 1
						};
						successCallback(  badger.cache.cache[resUrl]['res']  );
						badger.onResize();
					},
					error: function(jqXHR, textStatus, errorThrown){
						errorCallback(textStatus, errorThrown);
						badger.onResize();
					}
				});
			} else {
				errorCallback("offline", "You are not connected to the internet!");
				badger.onResize();
			}
		}
		else {
			if(badger.isOnLine()){
				badger.cache.cache[resUrl]['num']++
			}
			successCallback(  badger.cache.cache[resUrl]['res']  );
			badger.onResize();
		}

	},
	
	"maintain": function(){
		if(badger.isOnLine()){
			for(var i in badger.cache.cache) {
				try{
					if (    (   parseInt(  new Date().getTime() / 1000  )  -  parseInt( badger.cache.cache[i]['time'] )   ) > badger.cache._TIMEOUT ){
						badger.cache.cache[i] = null;
						delete badger.cache.cache[i];
					}
					if (  badger.cache.cache[i]['num'] > (badger.cache._LIMIT - 1)  ){
						badger.cache.cache[i] = null;
						delete badger.cache.cache[i];
					}
				} catch(err){
					console.log(err);
				}
			}
		}
	},
	
	"remove": function(resUrl){
		if (typeof badger.cache.cache[resUrl] != 'undefined') {
			badger.cache.cache[resUrl] = null;
			delete badger.cache.cache[resUrl];
		}
	},
	
	"force": function(resUrl, callback){
		badger.cache.remove( resUrl );
		badger.cache.get( resUrl, callback );
	}
	
};

badger.saveStoreChecks = function(){
	var stores = [];
	$(".nav-item.stores.checked-v2").each(function(){		var sid = $(this).data("storeid");		if(sid && sid != "undefined"){
			stores.push(sid);		}
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
	badger.cache.get(
		"http://brassbadger.com/api/?api="+badger.api+"&function=store&zip="+badger.zip, 
		function(result){
			var savedStoreChecks = $.parseJSON(window.localStorage.getItem( 'zip_stores_'+badger.zip ));
			var usedSavedValues = false;
			if($.isArray(savedStoreChecks)){
				if( savedStoreChecks.length > 0 )
					usedSavedValues = true;
			}
			for (var i = (result.stores.length - 1); i >= 0; i--) {
				var checkedClass = "";
				if(usedSavedValues && $.inArray(""+result.stores[i]['id']+"", savedStoreChecks) > -1 ){
					checkedClass = "checked-v2";
				}
				if(!usedSavedValues){
					if(result.stores[i]['default'] == "1"){
						checkedClass = "checked-v2";
					}
				}
				if(result.stores[i]['id']){
					var item = $('<div class="nav-item checker checkbox-v2 '+checkedClass+' stores" style="background-size: 16px 16px; background-position:22px; 3px;padding-left:60px;" data-storeid="'+result.stores[i]['id']+'">'+result.stores[i]['address']+' <span>('+result.stores[i]['distance']+'mi)</span></div>');
					item.click(function(){
						$(this).toggleClass('checked-v2');
						badger.updateOverviewAjax();
						badger.saveStoreChecks();
						$("#subHeader").html("Getting Started");
						$("#apiResults").html("");
						$("#apiResults").append(badger.homeContent);
						
						return false;
					})
					
					$("#nav-stores").after(item);				
				}
			}
			var zStr = "" + badger.zip;
			if(zStr.length == 5){
				$("#nav-stores-text").html("NEAR " + badger.zip);
			}
			badger.onResize();
			callback();
		},
		function(textStatus, errorThrown){
			alert(textStatus + " :: " + errorThrown);
		}
	);
}

badger.getSelectedStores = function(){
	var stores = "";
	$(".nav-item.stores.checked-v2").each(function(){		var sid = $(this).data("storeid");		if(sid && sid != "undefined"){
			stores += "|" + sid;		}
	})
	var zStr = "" + badger.zip;
	if(zStr.length == 5){
		$("#nav-stores-text").html("NEAR " + badger.zip);
	}
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
	$("#apiResults").html('<div style="margin-top: 70px;"><img width="32" height="32" alt="img" src="images/loading.gif" style="display: block; margin: auto;"></div>');	
	badger.snapper.close();
	badger.cache.get(
		"http://brassbadger.com/api/?api="+badger.api+"&function=cal&zip="+badger.zip+"&cal="+cal+"&store="+stores, 
		function(result){
			$("#apiResults").html("");
			badger.zip = result.request.zip;
			var zStr = "" + badger.zip;
			if(zStr.length == 5){
				$("#nav-stores-text").html("NEAR " + badger.zip);
			}
			for (var i = 0; i < result.results.length; i++) {
				var color = "blue";
				if(result.results[i]['code'] == "1")
					color = "red";
				if(result.results[i]['code'] == "2")
					color = "blue";
				if(result.results[i]['code'] == "3")
					color = "yellow";
				if(result.results[i]['code'] == "4")
					color = "green";
				var price = "";
				if(result.results[i]['price'] != "")
					price = "$"+result.results[i]['price'];
					
				if(result.results[i]['status'] != "Ad"){
					$("#apiResults").append("<div class='notification-box "+color+"-box'><h4>"+result.results[i]['name']+"</h4><div class='clear'></div><p><b>"+price+"</b> "+result.results[i]['status']+" as of "+result.results[i]['updated']+"<br />"+result.results[i]['address']+", "+result.results[i]['city']+", "+result.results[i]['state']+" "+result.results[i]['zip']+"<br />"+result.results[i]['phone']+"&nbsp UPC: "+result.results[i]['upc']+"</p></div>");
				} else {
					var ad = $("<div class='notification-box "+color+"-box ad'>"+result.results[i]['html']+"</div>");
					ad.find("a").click(function(e){
						window.open( $(this).attr('href'), '_system' );
						e.preventDefault();
					});
					$("#apiResults").append(ad);
				}

			}
			if(result.results.length == 0)
				$("#apiResults").append("<div class='notification-box blue-box'><h4>- No Results Found -</h4><div class='clear'></div><p></p></div>");
			badger.updateOverview(result);
		},
		function(textStatus, errorThrown){
			$("#apiResults").html('<div style="margin-top: 70px;">'+ textStatus + ' :: ' + errorThrown +'</div>');
		}
	);
	badger.onResize();
}
badger.updateOverviewAjax = function(){
	var stores = badger.getSelectedStores();
	badger.onResize();
	badger.cache.get(
		"http://brassbadger.com/api/?api="+badger.api+"&function=overview&zip="+badger.zip+"&store="+stores, 
		function(result){
			badger.updateOverview(result);
			badger.zip = result.request.zip;
			var zStr = "" + badger.zip;
			if(zStr.length == 5){
				$("#nav-stores-text").html("NEAR " + badger.zip);
			}
			badger.onResize();
		},
		function(textStatus, errorThrown){
			//alert(textStatus + " :: " + errorThrown);
		}
	);
}
badger.updateOverview = function(result){
	$(".nav-item.cal")
		.removeClass("type-blue")
		.removeClass("type-grey")
		.removeClass("type-red")
		.removeClass("type-yellow")
		.removeClass("type-green")
		.addClass("type-grey");
	for (var i = 0; i < result.overview.length; i++) {
		var color = "grey";
		if(result.overview[i]['code'] == "1")
			color = "red";
		if(result.overview[i]['code'] == "2")
			color = "blue";
		if(result.overview[i]['code'] == "3")
			color = "yellow";
		if(result.overview[i]['code'] == "4")
			color = "green";
		$("#cal-" + result.overview[i]['cal'])
			.removeClass("type-blue")
			.removeClass("type-grey")
			.removeClass("type-red")
			.removeClass("type-yellow")
			.removeClass("type-green")
			.addClass("type-" + color);
	}
}

badger.geoLocateCallback = function(json){
	$("#nav-geo-loading").html("");
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

badger.homeContent = $('<div style="padding: 10px;"><h1>BrassBadger</h1><p>BrassBadger tracks local ammunition availability of a large  discount department store chain. Please understand that keeping track of  inventory is complicated and that the ammo availability shown from this app may  not be accurate. Remember to always be respectful to all store employees,  associates, and shoppers.</p><p>To get started, specify your location and select a caliber from the menu.</p><h2>Specifying location</h2><p>The last two menu items let you enter a zip code and  geolocate your location.</p><h2>Picking stores</h2><p>The last section of the menu list stores near you. Availability  results will include ammo from all checked stores.</p><h2>Color and status definitions</h2><p><span style="color:#99cc00">Green (In stock)</span><br />Chances are good that there are 3 or more available.</p><p><span style="color:#ffbb33">Yellow (Limited stock)</span><br />There are probably only a couple available.</p><p><span style="color:#33b5e5">Blue (Availability unknown)</span><br />Specific availability info is unavailable, however the data source is not reporting  &ldquo;Out of stock&rdquo;. There could be a fair chance for some availability.</p><p><span style="color:#ff4444">Red (Out of stock)</span><br />  It is unlikely for there to be any available. </p><p><span style="color:#ff4444">Red (Expired)</span><br />  No recent info exists. This could happen after a product that is not typically  carried by a store goes out of stock.</p><h2>Date and time info</h2><p>The date and time info associated with each availability  tile refers to the time that the data source was last checked by our servers.  Please be aware that this does not reflect the date and time that the  availability was last updated by the individual stores.</p><h2>Availability discrepancies</h2><p>Our accuracy is dependent on the data sources we pull from.  BrassBadger is in no way affiliated with any discount department store chain or  third-party source of information.</p><h2>GeoLocate</h2><p>Your device must support geolocating/location services to  take full advantage of this feature. If applicable, your GPS should be on and  proper permissions enabled. Poor GPS reception can also prevent geolocating  from working properly. IP address geolocating is used as a fallback.</p><h2>Support and improvements</h2><p> Info on how you can suggest additional UPCs, report missing  stores, or buy the developer a drink can be found on the BrassBadger homepage.</p></div>');
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
		badger.onResize();
		return false;
	});
	
	$('.sidebar-header').click(function(){
		badger.snapper.close();
		badger.onResize();
		return false;
	});

	
	$('.deploy-sidebar, .close-icon').click(function(){
		if( badger.snapper.state().state=="left" ){
			badger.snapper.close();
		} else {
			badger.snapper.open('left');
		}
		badger.onResize();
		return false;
	});

	
	$('.page-coach').hide();
	
	$('.nav-coach').click(function(){
		$('.page-coach').fadeIn(200);
		document.ontouchmove = function(event){ event.preventDefault();}
		badger.snapper.close();
		badger.onResize();
	});
	
	$('.page-coach').click(function(){
		$('.page-coach').fadeOut(200);
		document.ontouchmove = function(event){ event.allowDefault();}
		badger.onResize();
	});
	document.addEventListener("menubutton", function(){$(".deploy-sidebar").click();}, false);
	//document.addEventListener("backbutton", function(){$(".deploy-sidebar").click();}, false);
	$("#apiResults").append(badger.homeContent);

	$('#cal-357').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("357"); });
	$('#cal-38').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("38"); });
	$('#cal-380').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("380"); });
	$('#cal-40').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("40"); });
	$('#cal-44').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("44"); });
	$('#cal-45').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("45"); });
	$('#cal-45colt').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("45colt"); });
	$('#cal-45mag').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("45mag"); });
	$('#cal-9').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("9"); });
	$('#cal-12').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("12"); });
	$('#cal-20').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("20"); });
	$('#cal-410').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("410"); });
	$('#cal-17').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("17"); });
	$('#cal-22').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("22"); });
	$('#cal-22250').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("22250"); });
	$('#cal-223').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("223"); });
	$('#cal-243').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("243"); });
	$('#cal-270').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("270"); });
	$('#cal-22mag').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("22mag"); });
	$('#cal-3006').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("3006"); });
	$('#cal-3030').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("3030"); });
	$('#cal-308').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("308"); });
	$('#cal-556').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("556"); });
	$('#cal-762').click(function(){ $("#subHeader").html($(this).text()); badger.fetch("762"); });
	
	
	/////////////////////////////////////////////////////////////////////////////////
	
	badger.getZipStores(function(){
		badger.updateOverviewAjax();
		try {
			navigator.splashscreen.hide();
		} catch(err){}
	});
	$(".deploy-sidebar").click();
	$("#nav-zip").click(function(){	
		var newZip = prompt("Zipcode:",badger.zip);
		if(newZip){
			badger.zip = newZip;
			window.localStorage.setItem( 'zipcode', badger.zip);
			$(".nav-item.cal")
				.removeClass("type-blue")
				.removeClass("type-grey")
				.removeClass("type-red")
				.removeClass("type-yellow")
				.removeClass("type-green")
				.addClass("type-grey");
			badger.getZipStores(function(){
				badger.updateOverviewAjax();
			});
		}
	});
	$(".deploy-home").click(function(){
		$("#subHeader").html("Getting Started");
		$("#apiResults").html("");
		$("#apiResults").append(badger.homeContent);
		badger.onResize();
	});
	
	
	$("#nav-geo").click(function(){
		if (confirm('Do you want to use your device\'s geolocation service to find your zipcode?')){
			$("#nav-geo-loading").html(" Waiting... ");
			navigator.geolocation.getCurrentPosition(
				function(pos){
					var script = document.createElement("script");
					script.src = "http://ws.geonames.org/findNearbyPostalCodesJSON?lat=" + pos.coords.latitude + "&lng=" + pos.coords.longitude + "&callback=badger.geoLocateCallback";
					document.getElementsByTagName("head")[0].appendChild(script);
				}, function(){
					$("#nav-geo-loading").html("");
					alert('code: '    + error.code    + '\n' +
					'message: ' + error.message + '\n');
					badger.zip = "";
					badger.getZipStores(function(){
						badger.updateOverviewAjax();
					});
				},
				{
					enableHighAccuracy: true,
					timeout : 15000
				}
			);
		} else {
			$("#nav-geo-loading").html(" Waiting... ");
			badger.zip = "";
			badger.getZipStores(function(){
				badger.updateOverviewAjax();
				$("#nav-geo-loading").html("");
			});
		}
	});
	
	$("#termsLink").click(function(e){
		window.open( $(this).attr('href'), '_system' );
		e.preventDefault();
	});
	badger.onResize();
});