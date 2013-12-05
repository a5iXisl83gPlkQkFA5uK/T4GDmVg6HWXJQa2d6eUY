/* Copyright (C) 2013 Taylor Honsowetz - All Rights Reserved
 * Use, distribution and modification this code is licensed under the
 * terms of the Creative Commons Attribution-NonCommercial-NoDerivatives 
 * 4.0 International License.
 *
 * To view a copy of this license, visit 
 * http://creativecommons.org/licenses/by-nc-nd/4.0/deed.en_US
 *
 * For further Terms of Use, visit
 * http://brassbadger.com/pages/terms.php
 */
 
$(window).load(function() { 
	$("#status").fadeOut();
	$("#preloader").delay(500).fadeOut("slow");
});
$(window).resize(function () {
   badger.onResize();
});

badger = {};
badger.api = 1;
badger.zip = 46201;
badger.platform = function(){
	if(typeof cordova == "undefined"){
		return "browser";
	} else {
		return "app";
	}
}
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
	"_DOM_LIMIT" : 20,
	"_DOM_TIMEOUT": 900, // 15 min
	"_LOCAL_TIMEOUT" : 900, // 15 min
	
	"domCache": new Object(),
	
	"dom": function( resUrl, successCallback, errorCallback ){
		if(badger.isOnLine()){
			for(var i in badger.cache.domCache) {
				try{
					if (    (   parseInt(  new Date().getTime() / 1000  )  -  parseInt( badger.cache.domCache[i]['time'] )   ) > badger.cache._DOM_TIMEOUT ){
						badger.cache.domCache[i] = null;
						delete badger.cache.domCache[i];
					}
					if (  badger.cache.domCache[i]['num'] > (badger.cache._DOM_LIMIT - 1)  ){
						badger.cache.domCache[i] = null;
						delete badger.cache.domCache[i];
					}
				} catch(err){
					console.log(err);
				}
			}
		}
		
		if (typeof badger.cache.domCache[resUrl] == 'undefined') {
			if(badger.isOnLine()){
				var ajaxPromise = $.ajax({
					url: resUrl,
					method: "GET",
					async: true,
					success: function(res){ 
						var res = $.parseJSON(res);
						badger.cache.domCache[resUrl] = {
							"res": res, 
							"time": parseInt(  new Date().getTime() / 1000  ), 
							"num": 1
						};
						successCallback(  badger.cache.domCache[resUrl]['res']  );
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
				badger.cache.domCache[resUrl]['num']++
			}
			successCallback(  badger.cache.domCache[resUrl]['res']  );
			badger.onResize();
		}

	},
	
	"local": function( resUrl, successCallback, errorCallback ){	
		var cachedRes = window.localStorage.getItem( 'localCache_'+resUrl+'_content');
		var cachedTime = window.localStorage.getItem( 'localCache_'+resUrl+'_time');
		
		if (!cachedRes || !cachedTime || (cachedTime && (    (   parseInt(  new Date().getTime() / 1000  )  -  parseInt( cachedTime )   ) > badger.cache._LOCAL_TIMEOUT ))) {
			if(badger.isOnLine()){
				var ajaxPromise = $.ajax({
					url: resUrl,
					method: "GET",
					async: true,
					success: function(res){ 
						window.localStorage.setItem( 'localCache_'+resUrl+'_content', res);
						window.localStorage.setItem( 'localCache_'+resUrl+'_time', parseInt(  new Date().getTime() / 1000  ) );
						successCallback( res );
						badger.onResize();
						setTimeout(function(){$("html, body").animate({ scrollTop: 0 }, "fast");}, 100);
					},
					error: function(jqXHR, textStatus, errorThrown){
						if(cachedRes){
							successCallback( cachedRes );
							badger.onResize();
							setTimeout(function(){$("html, body").animate({ scrollTop: 0 }, "fast");}, 100);
						} else {
							errorCallback(textStatus, errorThrown);
							badger.onResize();
							setTimeout(function(){$("html, body").animate({ scrollTop: 0 }, "fast");}, 100);
						}
					}
				});
			} else {
				if(cachedRes){
					successCallback( cachedRes );
					badger.onResize();
					setTimeout(function(){$("html, body").animate({ scrollTop: 0 }, "fast");}, 100);
				} else {
					errorCallback("offline", "You are not connected to the internet!");
					badger.onResize();
					setTimeout(function(){$("html, body").animate({ scrollTop: 0 }, "fast");}, 100);
					
				}
			}
		}
		else {
			successCallback( cachedRes );
			badger.onResize();
			setTimeout(function(){$("html, body").animate({ scrollTop: 0 }, "fast");}, 100);
		}
	}
	
};

badger.validateZip = function(zipIn){
	zipIn = " "+ zipIn;
	zipIn = zipIn.replace(/[^0-9]/g, '');
	if(zipIn.length > 0 && zipIn.length <=5){
		return zipIn;
	} else {
		alert("Error: Valid zip codes are 5 digits long!");
		var badgerZip = " " + badger.zip;
		badgerZip = badgerZip.replace(/[^0-9]/g, '');
		if(badgerZip.length > 0 && badgerZip.length <=5){
			return badgerZip;
		} else {
			return 46201;
		}
	}
	
	
}

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
	badger.cache.dom(
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
						badger.loadPage("start", false);
					})
					
					$("#nav-stores").after(item);				
				}
			}
			var zStr = "" + badger.zip;
			if(zStr.length == 5){
				$("#nav-stores-text").html("NEAR " + badger.zip);
				window.localStorage.setItem( 'zipcode', badger.zip);
			}
			badger.onResize();
			callback();
		},
		function(textStatus, errorThrown){
			alert(textStatus + " :: " + errorThrown);
			callback();
		}
	);
}

badger.loadPage = function(page, doClose){
	$("#apiResults").html('<div style="margin-top: 70px;"><img width="32" height="32" alt="img" src="images/loading.gif" style="display: block; margin: auto;"></div>');
	if(doClose)
		badger.snapper.close();
	setTimeout(function(){$("html, body").animate({ scrollTop: 0 }, "fast");}, 100);
	var title = "";
	var url = "";
	
	switch (page){
		case "terms" :
			title = "Terms and Privacy";
			url = "http://brassbadger.com/pages/terms.php?platform=" + badger.platform();
			break
		case "start" :
		default:
			title = "Getting Started";
			url = "http://brassbadger.com/pages/start.php?platform=" + badger.platform();
			break;
	}
	
	$("#subHeader").html(title);
	badger.cache.local(
		url, 
		function(result){
			$("#apiResults").html(" ");
			$("#apiResults").html(result);
		},
		function(textStatus, errorThrown){
			badger.showError("red", "Error", errorThrown + " (" + textStatus + ")");
		}
	);
}

badger.showError = function(color, title, body){
	$("#apiResults").html("<div class='notification-box "+color+"-box'><h4>"+title+"</h4><div class='clear'></div><p>"+body+"</p></div>");
}

badger.getSelectedStores = function(){
	var stores = "";
	$(".nav-item.stores.checked-v2").each(function(){		var sid = $(this).data("storeid");		if(sid && sid != "undefined"){
			stores += "|" + sid;		}
	})
	var zStr = "" + badger.zip;
	if(zStr.length == 5){
		$("#nav-stores-text").html("NEAR " + badger.zip);
		window.localStorage.setItem( 'zipcode', badger.zip);
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
	badger.cache.dom(
		"http://brassbadger.com/api/?api="+badger.api+"&function=cal&zip="+badger.zip+"&cal="+cal+"&store="+stores, 
		function(result){
			$("#apiResults").html("");
			badger.zip = result.request.zip;
			var zStr = "" + badger.zip;
			if(zStr.length == 5){
				$("#nav-stores-text").html("NEAR " + badger.zip);
				window.localStorage.setItem( 'zipcode', badger.zip);
			}
			for (var i = 0; i < result.results.length; i++) {
				var color = "blue";
				if(result.results[i]['code'] == "-1" || result.results[i]['code'] == "0" || result.results[i]['code'] == "1")
					color = "red";
				if(result.results[i]['code'] == "2")
					color = "yellow";
				if(result.results[i]['code'] == "3" || result.results[i]['code'] == "4")
					color = "green";
				if(result.results[i]['code'] == "5")
					color = "blue";	
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
				badger.showError("blue", "No Results Found", "No information for this caliber is available for any of the stores you have selected.");
			badger.updateOverview(result);
		},
		function(textStatus, errorThrown){
			badger.showError("red", "Error", errorThrown + " (" + textStatus + ")");
		}
	);
	badger.onResize();
}
badger.updateOverviewAjax = function(){
	var stores = badger.getSelectedStores();
	badger.onResize();
	badger.cache.dom(
		"http://brassbadger.com/api/?api="+badger.api+"&function=overview&zip="+badger.zip+"&store="+stores, 
		function(result){
			badger.updateOverview(result);
			badger.zip = result.request.zip;
			var zStr = "" + badger.zip;
			if(zStr.length == 5){
				$("#nav-stores-text").html("NEAR " + badger.zip);
				window.localStorage.setItem( 'zipcode', badger.zip);
			}
			badger.onResize();
		},
		function(textStatus, errorThrown){
			//badger.showError("red", "Error", errorThrown + " (" + textStatus + ")");
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
		if(result.overview[i]['code'] == "-1" || result.overview[i]['code'] == "0" || result.overview[i]['code'] == "1")
			color = "red";
		if(result.overview[i]['code'] == "2")
			color = "yellow";
		if(result.overview[i]['code'] == "3" || result.overview[i]['code'] == "4")
			color = "green";
		if(result.overview[i]['code'] == "5")
			color = "blue";
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

badger.geoLocateStartTimer = function(){
	setTimeout(function(){
		if($("#nav-geo-loading").text() != ""){
			$("#nav-geo-loading").html('<img width="13" height="13" alt="img" src="images/loading.gif" style="display: inline;">Waiting...');
			badger.zip = "";
			badger.getZipStores(function(){
				badger.updateOverviewAjax();
				$("#nav-geo-loading").html("");
				alert("Device geolocation timed out so less accurate IP based geolocation was used.");
			});
		}
	},15000);
	
}
		


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
	badger.loadPage("start", true);

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
	//$(".deploy-sidebar").click();
	$("#nav-zip").click(function(){	
		var newZip = prompt("Zipcode:",badger.zip);
		if(newZip){
			badger.zip = badger.validateZip(newZip);
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
		badger.loadPage("start", true);
	});
	
	
	$("#nav-geo").click(function(){
		if($("#nav-geo-loading").text() != ""){
			return;
		}
		if (confirm('Use your device\'s geolocation service to find your zipcode? If not, then less accurate IP based geolocation will be used.')){
			$("#nav-geo-loading").html('<img width="13" height="13" alt="img" src="images/loading.gif" style="display: inline;">Waiting...');
			badger.geoLocateStartTimer();
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
			$("#nav-geo-loading").html('<img width="13" height="13" alt="img" src="images/loading.gif" style="display: inline;">Waiting...');
			badger.zip = "";
			badger.getZipStores(function(){
				badger.updateOverviewAjax();
				$("#nav-geo-loading").html("");
			});
		}
	});
	
	$("#termsLink").click(function(e){
		badger.loadPage("terms", true);
		e.preventDefault();
	});
	
	$('#nav-barcode').click(function(){
		cordova.plugins.barcodeScanner.scan(
			function (result) {
				if(!result.cancelled){
					if(result.format == "UPC_A"){
						var upc = result.text + "";
						upc = upc.replace(/^0+/, '');
						upc = upc.slice(0, -1);
						var stores = [];
						$(".nav-item.stores.checked-v2").each(function(){		
							var sid = $(this).data("storeid");
							if(sid && sid != "undefined"){
								stores.push(sid);
							}
						})
						stores = stores.join(',');
						var upcLookup = $.ajax({
							url: "https://mobile.walmart.com/m/j?service=Slap&method=get&p1=&p2=["+upc+"]&p3=["+stores+"]&p4=&p5=&p6=&p7=&p8=&p9=c4tch4spyder&e=1",
							method: "GET",
							async: true,
							success: function(raw){ 
								var badgerVerify = $.ajax({
									url: "http://brassbadger.com/api/?api="+badger.api+"&function=upcVerify&zip="+badger.zip,
									method: "POST",
									data: {
										"data" : raw,
										"upc_real" : result.format,
										"upc_sm" : upc
									},
									async: true,
									success: function(res){ 
										alert(res);
										badger.onResize();
									},
									error: function(jqXHR, textStatus, errorThrown){
										alert("Error looking up product. (Phase 2 of 2) || " + textStatus + " || " + errorThrown);
										//errorCallback(textStatus, errorThrown);
										badger.onResize();
									}
								});
							},
							error: function(jqXHR, textStatus, errorThrown){
								alert("Error looking up product. (Phase 1 of 2)");
								//errorCallback(textStatus, errorThrown);
								badger.onResize();
							}
						});
						
					} else {
						alert("Only UPC-A codes are supported");
					}
				} else {
					// Cancelled
				}
			}, 
			function (error) {
				alert("Scanning failed (" + error + ")");
			}
		);
	});
	badger.onResize();
});