badger = {};
badger.api = 1;
badger.zip = 47909;
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
	$.ajax({
		url: "http://brassbadger.com/api/?api="+badger.api+"&function=store&zip="+badger.zip,
		type: "GET",
		success:function(result){
			result = $.parseJSON(result);
			var savedStoreChecks = $.parseJSON(window.localStorage.getItem( 'zip_stores_'+badger.zip ));
			var usedSavedValues = false;
			if($.isArray(savedStoreChecks)){
				if( savedStoreChecks.length > 0 )
					usedSavedValues = true;
			}
			for (var i = 0; i < result.stores.length; i++) {
				var checkedClass = "";
				if(usedSavedValues && $.inArray(""+result.stores[i]['id']+"", savedStoreChecks) > -1 ){
					checkedClass = "checked-v2";
				}
				if(!usedSavedValues)
					checkedClass = "checked-v2";
				if(result.stores[i]['id']){
					var item = $('<div class="nav-item checker checkbox-v2 '+checkedClass+' stores" style="background-size: 16px 16px; background-position:22px; 3px;padding-left:60px;" data-storeid="'+result.stores[i]['id']+'">'+result.stores[i]['address']+'</div>');
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
			badger.setHeight();
			callback();
			
		}
	});
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
	$.ajax({
		url: "http://brassbadger.com/api/?api="+badger.api+"&function=cal&zip="+badger.zip+"&cal="+cal+"&store="+stores,
		type: "GET",
		success:function(result){
			$("#apiResults").html("");
			result = $.parseJSON(result);
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
					$("#apiResults").append("<div class='notification-box "+color+"-box'><h4>"+result.results[i]['name']+"</h4><div class='clear'></div><p><b>"+price+"</b> "+result.results[i]['status']+" as of "+result.results[i]['updated']+"<br />"+result.results[i]['address']+", "+result.results[i]['city']+", "+result.results[i]['state']+" "+result.results[i]['zip']+"<br />Phone: "+result.results[i]['phone']+"&nbsp&nbsp&nbspUPC: "+result.results[i]['upc']+"</p></div>");
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
		}
	});
	badger.setHeight();
}
badger.updateOverviewAjax = function(){
	var stores = badger.getSelectedStores();
	badger.setHeight();
	$.ajax({
		url: "http://brassbadger.com/api/?api="+badger.api+"&function=overview&zip="+badger.zip+"&store="+stores,
		type: "GET",
		success:function(result){
			result = $.parseJSON(result);
			badger.updateOverview(result);
			badger.zip = result.request.zip;
			var zStr = "" + badger.zip;
			if(zStr.length == 5){
				$("#nav-stores-text").html("NEAR " + badger.zip);
			}
			badger.setHeight();
		}
	});
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

badger.homeContent = $("<div style='padding: 10px;'><h1>What is BrassBadger?</h1><p>BrassBadger attempts to keep track of the ammunition  availability of a large discount department store chain. Please understand that keeping track of inventory is complicated and that the ammo availability shown from this app may not be accurate. Remember to always be respectful to all store employees, associates, and shoppers.</p><h2>How do I specify my location?</h2><p>The last two items on the menu allow you to explicitly specify your zip code or attempt to use geolocating to estimate your zip code.</p><h2>How do I pick what stores I&rsquo;m interested in?</h2><p>Once you have specified a location, the last section of the menu will be populated with stores near you. By default, ammo availability will include results from all stores near the specified zip code. You can exclude stores by <em>unchecking</em> them in the menu.</p><h2>What do the colors  and statuses mean?</h2><p><span style='color:#99cc00;'><strong>Green (In stock</strong>)<br /></span>Chances are good that there are three or more products available.</p><p> <span style='color:#ffbb33;'><strong>Yellow (Limited stock</strong>)<br /></span>There are probably only a couple products available.</p><p> <span style='color:#33b5e5;'><strong>Blue (Availability unknown</strong>)<br /></span>More specific availability details are unavailable, however the data source is not explicitly reporting the product as &ldquo;Out of stock&rdquo;. Empirical evidence would suggest that there is a fair chance that some of the product is actually available.</p><p> <span style='color:#ff4444;'><strong>Red (Out of stock</strong>)<br /></span>It is unlikely for that the product to be available. </p><p> <span style='color:#ff4444;'><strong>Red (Expired</strong>)<br /></span>At some point in the last day or so the data source reported the status of the product. However, several subsequent inquiries failed to maintain the availability details for this product. This could happen after a product that is not  typically carried by a store goes out of stock.</p><p> <span style='color:#c4c4c4;'><strong>Grey</strong><br /></span>No information is available.</p><h2>What does the date/time mean?</h2><p>The date/time information associated with each availability tile refers to the EST time that the data source was last <em>checked</em> by our servers. Please be aware that this does not reflect the date/time that the availability was last <em>updated</em> in the data source.</p><h2>Why are there availability discrepancies?</h2><p> Our accuracy is dependent on the data sources we pull from.  BrassBadger is in no way affiliated with any discount department store chain or  third-party source of information.</p><h2>Why isn&rsquo;t geolocating  working?</h2><p> In order to take advantage of geolocating, your device must  support geolocating/location services. If applicable, your GPS should be on and  proper permissions enabled. Poor GPS reception can also prevent geolocating  from working properly.</p></div>");
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
	document.addEventListener("menubutton", function(){$(".deploy-sidebar").click();}, false);
	//document.addEventListener("backbutton", function(){$(".deploy-sidebar").click();}, false);
	$("#apiResults").append(badger.homeContent);

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
		
});
