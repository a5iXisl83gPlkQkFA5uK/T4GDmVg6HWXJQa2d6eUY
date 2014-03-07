function strpos(e,t,n){var r=(e+"").indexOf(t,n||0);return r===-1?false:r}
function substr(e,t,n){var r=0,i=true,s=0,o=0,u=0,a="";e+="";var f=e.length;this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};switch(this.php_js.ini["unicode.semantics"]&&this.php_js.ini["unicode.semantics"].local_value.toLowerCase()){case"on":for(r=0;r<e.length;r++){if(/[\uD800-\uDBFF]/.test(e.charAt(r))&&/[\uDC00-\uDFFF]/.test(e.charAt(r+1))){i=false;break}}if(!i){if(t<0){for(r=f-1,s=t+=f;r>=s;r--){if(/[\uDC00-\uDFFF]/.test(e.charAt(r))&&/[\uD800-\uDBFF]/.test(e.charAt(r-1))){t--;s--}}}else{var l=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;while(l.exec(e)!=null){var c=l.lastIndex;if(c-2<t){t++}else{break}}}if(t>=f||t<0){return false}if(n<0){for(r=f-1,o=f+=n;r>=o;r--){if(/[\uDC00-\uDFFF]/.test(e.charAt(r))&&/[\uD800-\uDBFF]/.test(e.charAt(r-1))){f--;o--}}if(t>f){return false}return e.slice(t,f)}else{u=t+n;for(r=t;r<u;r++){a+=e.charAt(r);if(/[\uD800-\uDBFF]/.test(e.charAt(r))&&/[\uDC00-\uDFFF]/.test(e.charAt(r+1))){u++}}return a}break};case"off":default:if(t<0){t+=f}f=typeof n==="undefined"?f:n<0?n+f:n+t;return t>=e.length||t<0||t>f?!1:e.slice(t,f)}return undefined}
function str_replace(e,t,n,r){var i=0,s=0,o="",u="",a=0,f=0,l=[].concat(e),c=[].concat(t),h=n,p=Object.prototype.toString.call(c)==="[object Array]",d=Object.prototype.toString.call(h)==="[object Array]";h=[].concat(h);if(r){this.window[r]=0}for(i=0,a=h.length;i<a;i++){if(h[i]===""){continue}for(s=0,f=l.length;s<f;s++){o=h[i]+"";u=p?c[s]!==undefined?c[s]:"":c[0];h[i]=o.split(l[s]).join(u);if(r&&h[i]!==o){this.window[r]+=(o.length-h[i].length)/l[s].length}}}return d?h:h[0]}
function md5(e){return hex(md51(e))}function md5cycle(e,t){var n=e[0],r=e[1],i=e[2],s=e[3];n=ff(n,r,i,s,t[0],7,-680876936);s=ff(s,n,r,i,t[1],12,-389564586);i=ff(i,s,n,r,t[2],17,606105819);r=ff(r,i,s,n,t[3],22,-1044525330);n=ff(n,r,i,s,t[4],7,-176418897);s=ff(s,n,r,i,t[5],12,1200080426);i=ff(i,s,n,r,t[6],17,-1473231341);r=ff(r,i,s,n,t[7],22,-45705983);n=ff(n,r,i,s,t[8],7,1770035416);s=ff(s,n,r,i,t[9],12,-1958414417);i=ff(i,s,n,r,t[10],17,-42063);r=ff(r,i,s,n,t[11],22,-1990404162);n=ff(n,r,i,s,t[12],7,1804603682);s=ff(s,n,r,i,t[13],12,-40341101);i=ff(i,s,n,r,t[14],17,-1502002290);r=ff(r,i,s,n,t[15],22,1236535329);n=gg(n,r,i,s,t[1],5,-165796510);s=gg(s,n,r,i,t[6],9,-1069501632);i=gg(i,s,n,r,t[11],14,643717713);r=gg(r,i,s,n,t[0],20,-373897302);n=gg(n,r,i,s,t[5],5,-701558691);s=gg(s,n,r,i,t[10],9,38016083);i=gg(i,s,n,r,t[15],14,-660478335);r=gg(r,i,s,n,t[4],20,-405537848);n=gg(n,r,i,s,t[9],5,568446438);s=gg(s,n,r,i,t[14],9,-1019803690);i=gg(i,s,n,r,t[3],14,-187363961);r=gg(r,i,s,n,t[8],20,1163531501);n=gg(n,r,i,s,t[13],5,-1444681467);s=gg(s,n,r,i,t[2],9,-51403784);i=gg(i,s,n,r,t[7],14,1735328473);r=gg(r,i,s,n,t[12],20,-1926607734);n=hh(n,r,i,s,t[5],4,-378558);s=hh(s,n,r,i,t[8],11,-2022574463);i=hh(i,s,n,r,t[11],16,1839030562);r=hh(r,i,s,n,t[14],23,-35309556);n=hh(n,r,i,s,t[1],4,-1530992060);s=hh(s,n,r,i,t[4],11,1272893353);i=hh(i,s,n,r,t[7],16,-155497632);r=hh(r,i,s,n,t[10],23,-1094730640);n=hh(n,r,i,s,t[13],4,681279174);s=hh(s,n,r,i,t[0],11,-358537222);i=hh(i,s,n,r,t[3],16,-722521979);r=hh(r,i,s,n,t[6],23,76029189);n=hh(n,r,i,s,t[9],4,-640364487);s=hh(s,n,r,i,t[12],11,-421815835);i=hh(i,s,n,r,t[15],16,530742520);r=hh(r,i,s,n,t[2],23,-995338651);n=ii(n,r,i,s,t[0],6,-198630844);s=ii(s,n,r,i,t[7],10,1126891415);i=ii(i,s,n,r,t[14],15,-1416354905);r=ii(r,i,s,n,t[5],21,-57434055);n=ii(n,r,i,s,t[12],6,1700485571);s=ii(s,n,r,i,t[3],10,-1894986606);i=ii(i,s,n,r,t[10],15,-1051523);r=ii(r,i,s,n,t[1],21,-2054922799);n=ii(n,r,i,s,t[8],6,1873313359);s=ii(s,n,r,i,t[15],10,-30611744);i=ii(i,s,n,r,t[6],15,-1560198380);r=ii(r,i,s,n,t[13],21,1309151649);n=ii(n,r,i,s,t[4],6,-145523070);s=ii(s,n,r,i,t[11],10,-1120210379);i=ii(i,s,n,r,t[2],15,718787259);r=ii(r,i,s,n,t[9],21,-343485551);e[0]=add32(n,e[0]);e[1]=add32(r,e[1]);e[2]=add32(i,e[2]);e[3]=add32(s,e[3])}function cmn(e,t,n,r,i,s){t=add32(add32(t,e),add32(r,s));return add32(t<<i|t>>>32-i,n)}function ff(e,t,n,r,i,s,o){return cmn(t&n|~t&r,e,t,i,s,o)}function gg(e,t,n,r,i,s,o){return cmn(t&r|n&~r,e,t,i,s,o)}function hh(e,t,n,r,i,s,o){return cmn(t^n^r,e,t,i,s,o)}function ii(e,t,n,r,i,s,o){return cmn(n^(t|~r),e,t,i,s,o)}function md51(e){txt="";var t=e.length,n=[1732584193,-271733879,-1732584194,271733878],r;for(r=64;r<=e.length;r+=64){md5cycle(n,md5blk(e.substring(r-64,r)))}e=e.substring(r-64);var i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(r=0;r<e.length;r++)i[r>>2]|=e.charCodeAt(r)<<(r%4<<3);i[r>>2]|=128<<(r%4<<3);if(r>55){md5cycle(n,i);for(r=0;r<16;r++)i[r]=0}i[14]=t*8;md5cycle(n,i);return n}function md5blk(e){var t=[],n;for(n=0;n<64;n+=4){t[n>>2]=e.charCodeAt(n)+(e.charCodeAt(n+1)<<8)+(e.charCodeAt(n+2)<<16)+(e.charCodeAt(n+3)<<24)}return t}function rhex(e){var t="",n=0;for(;n<4;n++)t+=hex_chr[e>>n*8+4&15]+hex_chr[e>>n*8&15];return t}function hex(e){for(var t=0;t<e.length;t++)e[t]=rhex(e[t]);return e.join("")}function add32(e,t){return e+t&4294967295}var hex_chr="0123456789abcdef".split("");
var _0x33d1=["\x70\x6F\x70","\x74","\x61","\x61\x61\x61\x61\x61\x61","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x3A","","\x62","\x6C\x65\x6E\x67\x74\x68","\x73\x6C\x69\x63\x65","\x00\x00\x00\x00","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x70\x75\x73\x68","\x3C\x7E","\x61\x70\x70\x6C\x79","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x7E\x3E","\x7A","\x21\x21\x21\x21\x21","\x72\x65\x70\x6C\x61\x63\x65","\x75\x75\x75\x75\x75"];var xd={"\x61":function (_0xfb98x2,_0xfb98x3){for(var _0xfb98x4=_0xfb98x3;_0xfb98x4>0;_0xfb98x4--){_0xfb98x2[_0x33d1[0]]();} ;} };var t=this[_0x33d1[1]]=(function (){var t={};t[_0x33d1[2]]=function (_0xfb98x6){this[_0x33d1[3]]=_0xfb98x6;} ;t[_0x33d1[2]][_0x33d1[5]][_0x33d1[4]]=function (){return _0x33d1[2]+(this[_0x33d1[3]]?_0x33d1[6]+this[_0x33d1[3]]:_0x33d1[7]);} ;t[_0x33d1[8]]=function (_0xfb98x3){var _0xfb98x7=_0x33d1[11][_0x33d1[10]]((_0xfb98x3[_0x33d1[9]]%4)||4);_0xfb98x3+=_0xfb98x7;var _0xfb98x8=[];for(var _0xfb98x4=0,_0xfb98x9=_0xfb98x3[_0x33d1[9]];_0xfb98x4<_0xfb98x9;_0xfb98x4+=4){var _0xfb98x2=((_0xfb98x3[_0x33d1[12]](_0xfb98x4)<<24)+(_0xfb98x3[_0x33d1[12]](_0xfb98x4+1)<<16)+(_0xfb98x3[_0x33d1[12]](_0xfb98x4+2)<<8)+(_0xfb98x3[_0x33d1[12]](_0xfb98x4+3)));if(_0xfb98x2===0){_0xfb98x8[_0x33d1[13]](0x7a);continue ;} ;var _0xfb98xa,_0xfb98xb,_0xfb98xc,_0xfb98xd,_0xfb98xe;_0xfb98xe=_0xfb98x2%85;_0xfb98x2=(_0xfb98x2-_0xfb98xe)/85;_0xfb98xd=_0xfb98x2%85;_0xfb98x2=(_0xfb98x2-_0xfb98xd)/85;_0xfb98xc=_0xfb98x2%85;_0xfb98x2=(_0xfb98x2-_0xfb98xc)/85;_0xfb98xb=_0xfb98x2%85;_0xfb98x2=(_0xfb98x2-_0xfb98xb)/85;_0xfb98xa=_0xfb98x2%85;_0xfb98x8[_0x33d1[13]](_0xfb98xa+0x21,_0xfb98xb+0x21,_0xfb98xc+0x21,_0xfb98xd+0x21,_0xfb98xe+0x21);} ;xd[_0x33d1[2]](_0xfb98x8,_0xfb98x7[_0x33d1[9]]);return encodeURIComponent(_0x33d1[14]+String[_0x33d1[16]][_0x33d1[15]](String,_0xfb98x8)+_0x33d1[17]);} ;t[_0x33d1[2]]=function (_0xfb98xf){_0xfb98xf=decodeURIComponent(_0xfb98xf)[_0x33d1[10]](2,-2)[_0x33d1[20]](/\s/g,_0x33d1[7])[_0x33d1[20]](_0x33d1[18],_0x33d1[19]);var _0xfb98x7=_0x33d1[21][_0x33d1[10]]((_0xfb98xf[_0x33d1[9]]%5)||5);_0xfb98xf+=_0xfb98x7;var _0xfb98x2,_0xfb98x8=[];var _0xfb98xa=85,_0xfb98xb=85*85,_0xfb98xc=85*85*85,_0xfb98xd=85*85*85*85;for(var _0xfb98x4=0,_0xfb98x9=_0xfb98xf[_0x33d1[9]];_0xfb98x4<_0xfb98x9;_0xfb98x4+=5){_0xfb98x2=(((_0xfb98xf[_0x33d1[12]](_0xfb98x4)-0x21)*_0xfb98xd)+((_0xfb98xf[_0x33d1[12]](_0xfb98x4+1)-0x21)*_0xfb98xc)+((_0xfb98xf[_0x33d1[12]](_0xfb98x4+2)-0x21)*_0xfb98xb)+((_0xfb98xf[_0x33d1[12]](_0xfb98x4+3)-0x21)*_0xfb98xa)+((_0xfb98xf[_0x33d1[12]](_0xfb98x4+4)-0x21)));_0xfb98x8[_0x33d1[13]]((_0xfb98x2>>24)&0xFF,(_0xfb98x2>>16)&0xFF,(_0xfb98x2>>8)&0xFF,(_0xfb98x2)&0xFF);} ;xd[_0x33d1[2]](_0xfb98x8,_0xfb98x7[_0x33d1[9]]);return String[_0x33d1[16]][_0x33d1[15]](String,_0xfb98x8);} ;return t;} )();
//t[_0x33d1[2]]("DECODE");
//t[_0x33d1[8]]("ENCODE");



$(window).load(function() { 
	$("#status").fadeOut();
	$("#preloader").delay(500).fadeOut("slow");
});

badger = {};
badger.api = 3;
badger.zip = 46201;
badger.platform = function(){
	if(typeof cordova == "undefined"){
		return "browser";
	} else {
		return "app";
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
	"_DOM_LIMIT" : 5,
	"_DOM_TIMEOUT": 60*60, // 1 hr
	"_LOCAL_TIMEOUT" : 60*60, // 1 hr
	
	"domCache": new Object(),
	
	"dom": function( resUrl, successCallback, errorCallback ){
		var resUrlHash = md5(resUrl);
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
		
		if (typeof badger.cache.domCache[resUrlHash] == 'undefined') {
			if(badger.isOnLine()){
				badger2.ajaxPromise = $.ajax({
					url: resUrl,
					method: "GET",
					dataType: "html",
					timeout : "15000",
					async: true,
					success: function(res){ 
						var res = $.parseJSON(res);
						badger.cache.domCache[resUrlHash] = {
							"res": res, 
							"time": parseInt(  new Date().getTime() / 1000  ), 
							"num": 1
						};
						successCallback(  badger.cache.domCache[resUrlHash]['res']  );
						
					},
					error: function(jqXHR, textStatus, errorThrown){
						errorCallback(textStatus, errorThrown);
						
					}
				});
			} else {
				errorCallback("offline", "You are not connected to the internet!");
				
			}
		}
		else {
			if(badger.isOnLine()){
				badger.cache.domCache[resUrlHash]['num']++
			}
			successCallback(  badger.cache.domCache[resUrlHash]['res']  );
			
		}

	},
	"localClean" : function(){
		var smallestTime = false;
		var smallestHash = false;
		var ct = 0;
		for (var key in window.localStorage){
			if(key.indexOf("localCache_") == 0 && key.indexOf("_time") > 0){
				var hash = key.replace("localCache_",""); 
				hash = hash.replace("_time", "");
				var cachedTime = window.localStorage.getItem( key + "" );
				var current = parseInt( cachedTime );
				
				if(    (   parseInt(  new Date().getTime() / 1000  )  -  parseInt( cachedTime )   ) > badger.cache._LOCAL_TIMEOUT ){
					console.log((   parseInt(  new Date().getTime() / 1000  )  -  parseInt( cachedTime )   ));
					window.localStorage.removeItem('localCache_'+hash+'_content');
					window.localStorage.removeItem('localCache_'+hash+'_time');
					ct--;
				} else if(smallestTime === false || current < smallestTime){
					smallestTime = current + 0;
					smallestHash = hash + "";
					ct++;
				} else {
					ct++;
				}
			}
		}
		if(ct > 50 && smallestTime !== false && smallestHash !== false){
			console.log(ct);
			window.localStorage.removeItem('localCache_'+smallestHash+'_content');
			window.localStorage.removeItem('localCache_'+smallestHash+'_time');
		}
	},
	
	"local": function( resUrl, successCallback, errorCallback ){
		badger.cache.localClean();
		var resUrlHash = md5(resUrl);
		var cachedRes = window.localStorage.getItem( 'localCache_'+resUrlHash+'_content');
		var cachedTime = window.localStorage.getItem( 'localCache_'+resUrlHash+'_time');
		
		if (!cachedRes || !cachedTime || (cachedTime && (    (   parseInt(  new Date().getTime() / 1000  )  -  parseInt( cachedTime )   ) > badger.cache._LOCAL_TIMEOUT ))) {
			if(badger.isOnLine()){
				var promise = $.ajax({
					url: resUrl,
					method: "GET",
					dataType: "html",
					timeout : "15000",
					async: true,
					success: function(res){ 
						window.localStorage.setItem( 'localCache_'+resUrlHash+'_content', res);
						window.localStorage.setItem( 'localCache_'+resUrlHash+'_time', parseInt(  new Date().getTime() / 1000  ) );
						successCallback( res, true );
					},
					error: function(jqXHR, textStatus, errorThrown){
						if(cachedRes){
							successCallback( cachedRes, false );
						} else {
							if(jqXHR.status == 503){
								window.localStorage.setItem( 'localCache_'+resUrlHash+'_content', jqXHR.status);
								window.localStorage.setItem( 'localCache_'+resUrlHash+'_time', parseInt(  new Date().getTime() / 1000  ) );
								successCallback( jqXHR.status, true );
							} else {
								errorCallback(textStatus, errorThrown);
							}
						}
					}
				});
				badger2.ajaxPromise = promise;
				setTimeout(function(){
					if(promise.statusText != "OK"){
						promise.abort();
						errorCallback("weird", "weird problem");
						console.log("weird problem");
					}
				}, 20000);
			} else {
				if(cachedRes){
					successCallback( cachedRes, false );
				} else {
					errorCallback("offline", "You are not connected to the internet!");
				}
			}
		}
		else {
			successCallback( cachedRes, false );
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
			
			callback();
		},
		function(textStatus, errorThrown){
			alert(textStatus + " :: " + errorThrown);
			callback();
		}
	);
}

badger.loadPage = function(page, doClose){
	document.getElementById("caliberMenu").selectedIndex = 0;
	$("#apiResults").html('<div style="margin-top: 70px;"><img width="32" height="32" alt="img" src="images/loading.gif" style="display: block; margin: auto;"></div>');
	setTimeout(function(){$("html, body").animate({ scrollTop: 0 }, "fast");}, 100);
	var title = "";
	var url = "";
	
	switch (page){
		case "terms" :
			title = "Terms and Privacy";
			url = "http://brassbadger.com/pages/terms.php?ver=2beta&platform=" + badger.platform();
			break
		case "start" :
		default:
			title = "Getting Started";
			url = "http://brassbadger.com/pages/start.php?ver=2beta&platform=" + badger.platform();
			break;
	}
	
	//$("#subHeader").html(title);
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
	return "|2339|1547|3851";
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

badger.buildRes = function(result){
	if(badger2.currentJob.running){
		var progress = $("#jobProgress").remove();
		$("#apiResults").html("");
		$("#apiResults").append(progress);
	} else {
		$("#apiResults").html("");
	}
	
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
		if(result.results[i]['code'] == "3")
			color = "yellowgreen";
		if(result.results[i]['code'] == "4")
			color = "green";
		if(result.results[i]['code'] == "5")
			color = "blue";	
		var price = "";
		if(result.results[i]['unseen'] == "1")
			color = "red";
		if(result.results[i]['price'] != "")
			price = "$"+result.results[i]['price'];
		var was = "";
		if(result.results[i]['previously'] != "Unknown/Expired"){
			was = " (was "+result.results[i]['previously']+")";
		}
		var since = "";
		var since_inner = "";
		if(result.results[i]['since'] && result.results[i]['since'] != "" && result.results[i]['since'] != " "){
			since_inner  = badger2.humanTiming(result.results[i]['since'] );
			since = " for the past "+since_inner;
			if(result.results[i]['previously'] == "Unknown/Expired"){
				since = " for at least "+since_inner;
			}
			
		}
		
		$("#apiResults").append("<div class='notification-box "+color+"-box'><h4>"+result.results[i]['name']+"</h4><div class='clear'></div><p><b>"+price+"</b> "+result.results[i]['status']+" "+since+" "+was+"<br />"+result.results[i]['address']+", "+result.results[i]['city']+", "+result.results[i]['state']+" "+result.results[i]['zip']+"<br />"+result.results[i]['phone']+"&nbsp UPC: "+result.results[i]['upc']+"</p></div>");
		var pos = "p"+i;
		if(pos in badger2.currentJob.job.a){
			var ad = $("<div class='notification-box blue-box ad'>"+badger2.currentJob.job.a[pos]+"</div>");
			ad.find("a").click(function(e){
				window.open( $(this).attr('href'), '_system' );
				e.preventDefault();
			});
			$("#apiResults").append(ad);
			// /*
			$(ad).find('img.avant_adb_image').each(function(){
				$(this).error(function(){
					if(!this.complete || (typeof this.naturalWidth != 'undefined' && this.naturalWidth == 0)){
						$(this).closest('.ad').hide();
						var newAd = $('<div class=\'notification-box blue-box ad blocked\'><p><a href=\'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VM3R9BG9SQ9NS\'>Consider making a donation to help offset the cost of server resources and development.</a></p></div>');
						newAd.find("a").click(function(e){
							window.open( $(this).attr('href'), '_system' );
							e.preventDefault();
						});
						$(this).closest('.ad').after(newAd);
						$(".notification-box.blue-box.ad.blocked").hide();
						$(".notification-box.blue-box.ad.blocked").first().show();

					}
				});

			});
		}
	}
	if(!badger2.currentJob.running && result.results.length == 0)
		badger.showError("blue", "No Results Found", "The requested information could not be found for any of the stores you have selected.");
}
badger.fetch = function(cal){
	var stores = badger.getSelectedStores();
	$("#apiResults").html('<div style="margin-top: 70px;"><img width="32" height="32" alt="img" src="images/loading.gif" style="display: block; margin: auto;"></div>');	
	badger.cache.dom(
		"http://brassbadger.com/api/?api="+badger.api+"&function=cal&zip="+badger.zip+"&cal="+cal+"&store="+stores, 
		function(result){
			badger.zip = result.request.zip;
			badger.buildRes(result);
			badger.updateOverview(result);
		},
		function(textStatus, errorThrown){
			badger.showError("red", "Error", errorThrown + " (" + textStatus + ")");
		}
	);
	
}

badger.upcFetch = function(upc){
	var stores = badger.getSelectedStores();
	$("#apiResults").html('<div style="margin-top: 70px;"><img width="32" height="32" alt="img" src="images/loading.gif" style="display: block; margin: auto;"></div>');	
	badger.cache.dom(
		"http://brassbadger.com/api/?api="+badger.api+"&function=upc&zip="+badger.zip+"&upc="+upc+"&store="+stores, 
		function(result){
			badger.buildRes(result);
		},
		function(textStatus, errorThrown){
			badger.showError("red", "Error", errorThrown + " (" + textStatus + ")");
		}
	);
	
}


badger.updateOverviewAjax = function(){
	var stores = badger.getSelectedStores();
	
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
		.removeClass("type-yellowgreen")
		.removeClass("type-green")
		.addClass("type-grey");
	for (var i = 0; i < result.overview.length; i++) {
		var color = "grey";
		if(result.overview[i]['code'] == "-1" || result.overview[i]['code'] == "0" || result.overview[i]['code'] == "1")
			color = "red";
		if(result.overview[i]['code'] == "2")
			color = "yellow";
		if(result.overview[i]['code'] == "3")
			color = "yellowgreen";
		if(result.overview[i]['code'] == "4")
			color = "green";
		if(result.overview[i]['code'] == "5")
			color = "blue";
		$("#cal-" + result.overview[i]['cal'])
			.removeClass("type-blue")
			.removeClass("type-grey")
			.removeClass("type-red")
			.removeClass("type-yellow")
			.removeClass("type-yellowgreen")
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
		.removeClass("type-yellowgreen")
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

badger2 = {};
badger2.code2status = function(code){
	switch (code) {
		case "4" : return "In stock";
		case "3" : return "Undisclosed";
		case "2" : return "Limited stock";
		case "1" : return "Out of stock";
		case "0" : 
		default: return "Unknown/Expired";
	}
}



badger2.humanTiming = function(t){
	var now = new Date().getTime() / 1000;
	now = Math.round(now) + "";
	now = parseInt(now.substring(3));
	var inp = parseInt(t.substring(3));
	inp = now - inp;
	
	if(inp >= 31536000){
		return Math.floor(inp / 31536000) + '  yr' + ((Math.floor(inp / 31536000) >1)? 's' : '');
	}
	if(inp >= 2592000){
		return Math.floor(inp / 2592000) + '  mo' + ((Math.floor(inp / 2592000) >1)? 's' : '');
	}
	if(inp >= 604800){
		return Math.floor(inp / 604800) + '  wk' + ((Math.floor(inp / 604800) >1)? 's' : '');
	}
	if(inp >= 86400){
		return Math.floor(inp / 86400) + '  day' + ((Math.floor(inp / 86400) >1)? 's' : '');
	}
	if(inp >= 3600){
		return Math.floor(inp / 3600) + '  hr' + ((Math.floor(inp / 3600) >1)? 's' : '');
	}
	if(inp >= 60){
		return Math.floor(inp / 60) + '  min' + ((Math.floor(inp / 60) >1)? 's' : '');
	}
	if(inp >= 1){
		return Math.floor(inp / 1) + '  sec' + ((Math.floor(inp / 1) >1)? 's' : '');
	}
}

badger2.parseStatus = function(status){
	status = status.trim();
	var code = "0";
	var sortCode = "9";
	var realStatus = "Unknown";
	var flag = "1";
	
	if(status == "In stock"){
		realStatus = "In stock";
		code = "4";
		sortCode = "0";
		flag = "0"
	}
	else if(status == "Limited stock"){
		realStatus = "Limited stock";
		code = "2";
		sortCode = "4";
		flag = "0"
	}
	else if(status == "Availability unknown"){
		realStatus = "Undisclosed";
		code = "3";
		sortCode = "3";
		flag = "0"
	}
	else if(status == "Out of stock"){
		realStatus = "Out of stock";
		code = "1";
		sortCode = "5";
		flag = "1"
	}
	return {
		"status" : realStatus,
		"code" : code,
		"sortCode" : sortCode,
		"flag" : flag
	};
}

badger2.resSortFunc = function(a,b){
	var x = a.key;
	var y = b.key;
	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}
badger2.ajaxPromise = {};
badger2.currentJob = {
	"running" : false,
	"job" : {}
};

badger2.jobWorkUnit = function(callback){
	if(badger2.currentJob.job.total == -1 && badger2.currentJob.job.done == -1){
		badger2.currentJob.job.total = badger2.currentJob.job.p.length;
		badger2.currentJob.job.done = 0;
		for(var k in badger2.currentJob.job.s){
			badger2.currentJob.job.s[k] = t[_0x33d1[2]](badger2.currentJob.job.s[k]);
		}
	}
	$("#jobProgress").remove();
	$("#apiResults").html('<div id="jobProgress" style="margin-top: 5px;"><img width="32" height="32" alt="img" src="images/loading.gif" style="display: block; margin: auto;"><p align="center"><br />'+Math.floor((badger2.currentJob.job.done/badger2.currentJob.job.total)*100)+'%<br />Checking product '+badger2.currentJob.job.done+' of '+badger2.currentJob.job.total+'</p></div>');
	
	badger2.currentJob.job.results.sort(badger2.resSortFunc);
	badger.buildRes(badger2.currentJob.job);
	
	if(badger2.currentJob.job.p.length <= 0){
		callback();
		return;
	}
	var next = badger2.currentJob.job.p.pop();
	var u = badger2.currentJob.job.s[next["s"]];
	u=u.replace("#ZIP#",next["z"]).replace("#UPC#",next["u"]).replace("#WEBID#",next["w"]);
	if(next["s"] == "a"){
		badger.cache.local(
			u, 
			function(res, fresh){
				res = $.parseJSON(res);
				try{
					for(var i in res[0].stores){
						var key = "";
						res[0].stores[i].storeId = ("0000" + res[0].stores[i].storeId).slice(-4);
						if(fresh) badger2.currentJob.job.payload.push(t[_0x33d1[8]](JSON.stringify([next["u"], res[0].stores[i].storeId, res[0].stores[i].price, res[0].stores[i].stockStatus, new Date().getTime()])));
						if('a'+res[0].stores[i].storeId in badger2.currentJob.job.d ){
							var status = badger2.parseStatus(res[0].stores[i].stockStatus);
							var uc = next["u"]+''+res[0].stores[i].storeId;
							var unseen = "0";
							var previously = "";
							var since = "";
							var updated  = "";
							try{
								if(uc in badger2.currentJob.job.f){
									previously = badger2.code2status(badger2.currentJob.job.f[uc][4]);
									since = badger2.currentJob.job.f[uc][3];
									updated = badger2.currentJob.job.f[uc][2];
									
								}
							} catch(e){};
							if(status.code == "3" && (previously == "" || previously == "Unknown/Expired" || previously == "Undisclosed" )){
								unseen = "1";
							}
							var sortDistance = badger2.currentJob.job.d['a'+res[0].stores[i].storeId][0];
							key = unseen + status.flag + sortDistance + status.sortCode;
							var s = {
								"key" : key,
								"unseen" : unseen,
								"name" : res[0].item.signingDesc,
								"status" : status.status,
								"code" : status.code,
								"address" : res[0].stores[i].address.street1,
								"city" : res[0].stores[i].address.city,
								"state" : res[0].stores[i].address.state.code,
								"zip" : res[0].stores[i].address.zip.code,
								"phone" : "(" + res[0].stores[i].phone.areaCode + ") " + res[0].stores[i].phone.prefix + "-" + res[0].stores[i].phone.suffix,
								"price" : res[0].stores[i].price,
								"upc" : res[0].item.upc,
								"distance" : badger2.currentJob.job.d['a'+res[0].stores[i].storeId][1],
								"storeId" : res[0].stores[i].storeId,
								"previously" : previously,
								"since": since,
								"updated" : updated
							};
							
							badger2.currentJob.job.results.push(s);
						}
					}
				} catch(err){}
				badger2.currentJob.job.done++;
				setTimeout(function(){
					badger2.jobWorkUnit(callback);
				}, 50);
				
			},
			function(textStatus, errorThrown){
				badger2.currentJob.job.done++;
				setTimeout(function(){
					badger2.jobWorkUnit(callback);
				}, 50);
			}
		);
	} else if(next["s"] == "b"){
		badger.cache.local(
			u, 
			function(res, fresh){
				try{
					res = " " + res;
					var str = "WALMART.storeFinder.resultOverlay.stores = [";
					var bet_n = strpos( res, str );
					if ( bet_n == 0 ) { 
						res = "";
					} else { 
						bet_n += str.length; var bet_l = strpos( res, "];", bet_n ) - bet_n; res = substr( res, bet_n, bet_l );
					}
					res = str_replace( "\n", "", "["+res+"]" );
					res = res.replace(/(WALMART.storeFinder.resultOverlay.util.formatTime\(\d+, \d+\))/ig, "''");
					res = str_replace( "'", "\"", res );
					
					res = $.parseJSON(res);
					for(var i in res){
						var key = "";
						var unseen = "0";
						var previously = "";
						var since = "";
						var updated  = "";
						res[i].storeId = ("0000" + res[i].storeId).slice(-4);
						if(fresh) badger2.currentJob.job.payload.push(t[_0x33d1[8]](JSON.stringify([next["u"], res[i].storeId, false, res[i].stockStatus, new Date().getTime()])));
						if('a'+res[i].storeId in badger2.currentJob.job.d ){
							var status = badger2.parseStatus(res[i].stockStatus);
							var uc = next["u"]+''+res[i].storeId;
							try{
								if(uc in badger2.currentJob.job.f){
									previously = badger2.code2status(badger2.currentJob.job.f[uc][4]);
									since = badger2.currentJob.job.f[uc][3];
									updated = badger2.currentJob.job.f[uc][2];
								}
							} catch(e){};
							if(status.code == "3" && (previously == "" || previously == "Unknown/Expired" || previously == "Undisclosed" )){
								unseen = "1";
							}
							var sortDistance = badger2.currentJob.job.d['a'+res[i].storeId][0];
							key = unseen + status.flag + sortDistance + status.sortCode;
							var s = {
								"key" : key,
								"unseen" : unseen,
								"name" : next["n"],
								"status" : status.status,
								"code" : status.code,
								"address" : res[i].address.fullStreet,
								"city" : res[i].address.city,
								"state" : res[i].address.stateCode,
								"zip" : res[i].address.zipCode,
								"phone" : res[i].phoneNumber,
								"price" : "",
								"upc" : next["u"],
								"distance" : badger2.currentJob.job.d['a'+res[i].storeId][1],
								"storeId" : res[i].storeId,
								"previously" : previously,
								"since": since,
								"updated" : updated
							};
							badger2.currentJob.job.results.push(s);
						}
					}
				} catch(err){}
				badger2.currentJob.job.done++;
				setTimeout(function(){
					badger2.jobWorkUnit(callback);
				}, 50);
			},
			function(textStatus, errorThrown){
				badger2.currentJob.job.done++;
				setTimeout(function(){
					badger2.jobWorkUnit(callback);
				}, 50);
			}
		);
	} else {
		badger2.currentJob.job.done++;
		setTimeout(function(){
					badger2.jobWorkUnit(callback);
				}, 50);
	}
}

badger2.stopJob = function(){
	if(badger2.currentJob.running){
		badger2.currentJob.job.p = [];
		try{
			badger2.ajaxPromise.abort();
		}
		catch(err){}
	}
}

badger2.getJob = function(zip, cal, api, doneCallback_a){
	if(badger2.currentJob.running){
		badger2.stopJob();
	}
	var doneCallback = function(){
		//doneCallback_a();
		badger2.currentJob.running = false;
		badger2.currentJob.job.results.sort(badger2.resSortFunc);
		badger.buildRes(badger2.currentJob.job);
		if(badger2.currentJob.job.payload.length > 0){
			var s = JSON.stringify(badger2.currentJob.job.payload);
			badger2.currentJob.job.payload = encodeURI(JSON.stringify({
				"a" : badger2.currentJob.job.payload,
				"b" : md5(s),
				"c" : new Date().getTime()
			}));
			$.ajax({
				type: "POST",
				url: "http://brassbadger.com/api2/jobDone.php",
				data: "pl="+badger2.currentJob.job.payload,
				success: function(){
				
					
				}
			});
		}
	}
	
	badger2.currentJob.running = true;
	$("#apiResults").html('<div id="jobProgress" style="margin-top: 5px;"><img width="32" height="32" alt="img" src="images/loading.gif" style="display: block; margin: auto;"><p align="center"><br />Getting product list</p></div>');
	badger2.ajaxPromise = $.ajax({
		url: "http://brassbadger.com/api2/getJob.php?api="+api+"&zip="+zip+"&cal="+cal,
		method: "GET",
		dataType: "html",
		timeout : "15000",
		async: true,
		success: function(res){
			badger2.currentJob.job = {};
			//badger2.currentJob.job = $.parseJSON(t[_0x33d1[2]](res));
			badger2.currentJob.job = $.parseJSON(res);
			badger2.currentJob.job.total = -1;
			badger2.currentJob.job.done = -1;
			badger2.currentJob.job.results = [];
			badger2.currentJob.job.payload = [];
			badger2.jobWorkUnit(doneCallback);
		},
		error: function(jqXHR, textStatus, errorThrown){
			badger2.currentJob.job = {};
			doneCallback();
		}
	});
}

badger2.menuHandlers = {
	"start" : function(){
		badger2.stopJob();
		badger.loadPage("start", true);
	},
	
	
	"caliber" : function(){
		setTimeout(function(){
		var element = $("#caliberMenu")[0];
			if (document.createEvent) {
				var e = document.createEvent("MouseEvents");
				e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				element.dispatchEvent(e);
			} else if (element.fireEvent) {
				element.fireEvent("onmousedown");
			}
		}, 200);
	},
	
	
	"scan" : function(){
		badger2.stopJob();
		if(badger.platform() != "app"){
			if (confirm('This feature is only available from the Android app. Do you want to install it from Google Play?')){
				window.open( "https://play.google.com/store/apps/details?id=com.honsoworld.brassbadger", '_system' );
			}
			return;
		}
		cordova.plugins.barcodeScanner.scan(
			function (result) {
				if(!result.cancelled){
					if(result.format == "UPC_A"){
						//$("#subHeader").html("Scan Results");
						//badger.upcFetch(result.text);
						badger2.notYetWorking();
					} else {
						//badger.showError("blue", "Invalid barcode", "Only UPC-A codes are supported");
						badger2.notYetWorking();
					}
				}
			}, 
			function (error) {	
				//badger.showError("blue", "Error", "Scanning failed (" + error + ")");
				badger2.notYetWorking();

			}
		);
	},
	
	
	"type" : function(){
		var upc = prompt("Enter a UPC-A code");
		if(upc){
			badger2.notYetWorking();
			//badger2.stopJob();
			//$("#subHeader").html("Search Results");
			//badger.upcFetch(upc);
		}
	},
	
	
	"zip" : function(){
		var newZip = prompt("Zipcode:",badger.zip);
		if(newZip){
			badger2.stopJob();
			badger.zip = badger.validateZip(newZip);
			window.localStorage.setItem( 'zipcode', badger.zip);
			badger2.menuHandlers["start"]();
			//badger.getZipStores(function(){
			//	badger.updateOverviewAjax();
			//});
		}
	},
	
	
	"geo" : function(){
		badger2.notYetWorking();
	},
	
	
	"terms" : function(){
		badger2.stopJob();
		badger.loadPage("terms", true);
	}
};
badger2.eventHandlers = {
	"onPause" : function(){
	},
	
	
	"onResume" : function(){
	},
	
	
	"onOnline" : function(){
	},
	
	
	"onOffline" : function(){
		badger2.stopJob();
		try{
			badger2.ajaxPromise.abort();
		}
		catch(err){}
		
	},
	
	
	"onBackButton" : function(){
	},
	
	
	"onMenuButton" : function(){
		$(".deploy-home").click();
	},
	
	
	"onSearchButton" : function(){
		badger2.menuHandlers["type"]();
	},
	
	
	"onBadgerCaliberMenu" : function(){
		if($(this).val() != "FALSE"){
			badger2.getJob(badger.zip, $(this).val(), "3", function(){	
				badger2.currentJob.job.results.sort(badger2.resSortFunc);
				badger.buildRes(badger2.currentJob.job);
			});
			$(this).blur();
		}
	},
	
	
	"onBadgerHiddenMenu" : function(){
		var val = $(this).val();
		$(this).blur();
		document.getElementById("hiddenMenu").selectedIndex = -1;
		badger2.menuHandlers[val]();
	}
	
};

badger2.notYetWorking = function(){
	alert("This functionality is unavailable in this beta release, but is planned to be finished by the next stable update.");
	
}
$(document).ready(function(){
	// Set saved zipcode
	badger.zip = window.localStorage.getItem( 'zipcode' );
	
	// Unselect #hiddenMenu
	document.getElementById("hiddenMenu").selectedIndex = -1;
	
	// Assign event and action handlers
	document.addEventListener("pause", badger2.eventHandlers.onPause, false);
	document.addEventListener("resume", badger2.eventHandlers.onResume, false);
	document.addEventListener("online", badger2.eventHandlers.onOnline, false);
	document.addEventListener("offline", badger2.eventHandlers.onOffline, false);
	document.addEventListener("backbutton", badger2.eventHandlers.onBackButton, false);
	document.addEventListener("menubutton", badger2.eventHandlers.onMenuButton, false);
	document.addEventListener("searchbutton", badger2.eventHandlers.onSearchButton, false);
	$('#caliberMenu').change(badger2.eventHandlers.onBadgerCaliberMenu);
	$('#hiddenMenu').change(badger2.eventHandlers.onBadgerHiddenMenu);
	$(".deploy-home").click(function(){
		var element = $("#hiddenMenu")[0];
		if (document.createEvent) {
			var e = document.createEvent("MouseEvents");
			e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			element.dispatchEvent(e);
		} else if (element.fireEvent) {
			element.fireEvent("onmousedown");
		}
	});
	
	// Load start page
	badger.loadPage("start", true);
	
	
	/*
	
	badger.getZipStores(function(){
		badger.updateOverviewAjax();
		try {
			navigator.splashscreen.hide();
		} catch(err){}
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
	*/
	
});
