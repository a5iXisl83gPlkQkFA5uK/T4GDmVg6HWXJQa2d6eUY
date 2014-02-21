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
function strpos(haystack, needle, offset) {
  var i = (haystack + '').indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}
function substr(str, start, len) {
  var i = 0,
    allBMP = true,
    es = 0,
    el = 0,
    se = 0,
    ret = '';
  str += '';
  var end = str.length;
  this.php_js = this.php_js || {};
  this.php_js.ini = this.php_js.ini || {};
  switch ((this.php_js.ini['unicode.semantics'] && this.php_js.ini['unicode.semantics'].local_value.toLowerCase())) {
  case 'on':
    for (i = 0; i < str.length; i++) {
      if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
        allBMP = false;
        break;
      }
    }

    if (!allBMP) {
      if (start < 0) {
        for (i = end - 1, es = (start += end); i >= es; i--) {
          if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
            start--;
            es--;
          }
        }
      } else {
        var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
        while ((surrogatePairs.exec(str)) != null) {
          var li = surrogatePairs.lastIndex;
          if (li - 2 < start) {
            start++;
          } else {
            break;
          }
        }
      }

      if (start >= end || start < 0) {
        return false;
      }
      if (len < 0) {
        for (i = end - 1, el = (end += len); i >= el; i--) {
          if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
            end--;
            el--;
          }
        }
        if (start > end) {
          return false;
        }
        return str.slice(start, end);
      } else {
        se = start + len;
        for (i = start; i < se; i++) {
          ret += str.charAt(i);
          if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
            se++;
          }
        }
        return ret;
      }
      break;
    }
  case 'off':
  default:
    if (start < 0) {
      start += end;
    }
    end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start);
    return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end);
  }
  return undefined;
}
function str_replace(search, replace, subject, count) {
  var i = 0,
    j = 0,
    temp = '',
    repl = '',
    sl = 0,
    fl = 0,
    f = [].concat(search),
    r = [].concat(replace),
    s = subject,
    ra = Object.prototype.toString.call(r) === '[object Array]',
    sa = Object.prototype.toString.call(s) === '[object Array]';
  s = [].concat(s);
  if (count) {
    this.window[count] = 0;
  }

  for (i = 0, sl = s.length; i < sl; i++) {
    if (s[i] === '') {
      continue;
    }
    for (j = 0, fl = f.length; j < fl; j++) {
      temp = s[i] + '';
      repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
      s[i] = (temp).split(f[j]).join(repl);
      if (count && s[i] !== temp) {
        this.window[count] += (temp.length - s[i].length) / f[j].length;
      }
    }
  }
  return sa ? s : s[0];
}
var _0x33d1=["\x70\x6F\x70","\x74","\x61","\x61\x61\x61\x61\x61\x61","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x3A","","\x62","\x6C\x65\x6E\x67\x74\x68","\x73\x6C\x69\x63\x65","\x00\x00\x00\x00","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x70\x75\x73\x68","\x3C\x7E","\x61\x70\x70\x6C\x79","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x7E\x3E","\x7A","\x21\x21\x21\x21\x21","\x72\x65\x70\x6C\x61\x63\x65","\x75\x75\x75\x75\x75"];var xd={"\x61":function (_0xfb98x2,_0xfb98x3){for(var _0xfb98x4=_0xfb98x3;_0xfb98x4>0;_0xfb98x4--){_0xfb98x2[_0x33d1[0]]();} ;} };var t=this[_0x33d1[1]]=(function (){var t={};t[_0x33d1[2]]=function (_0xfb98x6){this[_0x33d1[3]]=_0xfb98x6;} ;t[_0x33d1[2]][_0x33d1[5]][_0x33d1[4]]=function (){return _0x33d1[2]+(this[_0x33d1[3]]?_0x33d1[6]+this[_0x33d1[3]]:_0x33d1[7]);} ;t[_0x33d1[8]]=function (_0xfb98x3){var _0xfb98x7=_0x33d1[11][_0x33d1[10]]((_0xfb98x3[_0x33d1[9]]%4)||4);_0xfb98x3+=_0xfb98x7;var _0xfb98x8=[];for(var _0xfb98x4=0,_0xfb98x9=_0xfb98x3[_0x33d1[9]];_0xfb98x4<_0xfb98x9;_0xfb98x4+=4){var _0xfb98x2=((_0xfb98x3[_0x33d1[12]](_0xfb98x4)<<24)+(_0xfb98x3[_0x33d1[12]](_0xfb98x4+1)<<16)+(_0xfb98x3[_0x33d1[12]](_0xfb98x4+2)<<8)+(_0xfb98x3[_0x33d1[12]](_0xfb98x4+3)));if(_0xfb98x2===0){_0xfb98x8[_0x33d1[13]](0x7a);continue ;} ;var _0xfb98xa,_0xfb98xb,_0xfb98xc,_0xfb98xd,_0xfb98xe;_0xfb98xe=_0xfb98x2%85;_0xfb98x2=(_0xfb98x2-_0xfb98xe)/85;_0xfb98xd=_0xfb98x2%85;_0xfb98x2=(_0xfb98x2-_0xfb98xd)/85;_0xfb98xc=_0xfb98x2%85;_0xfb98x2=(_0xfb98x2-_0xfb98xc)/85;_0xfb98xb=_0xfb98x2%85;_0xfb98x2=(_0xfb98x2-_0xfb98xb)/85;_0xfb98xa=_0xfb98x2%85;_0xfb98x8[_0x33d1[13]](_0xfb98xa+0x21,_0xfb98xb+0x21,_0xfb98xc+0x21,_0xfb98xd+0x21,_0xfb98xe+0x21);} ;xd[_0x33d1[2]](_0xfb98x8,_0xfb98x7[_0x33d1[9]]);return encodeURIComponent(_0x33d1[14]+String[_0x33d1[16]][_0x33d1[15]](String,_0xfb98x8)+_0x33d1[17]);} ;t[_0x33d1[2]]=function (_0xfb98xf){_0xfb98xf=decodeURIComponent(_0xfb98xf)[_0x33d1[10]](2,-2)[_0x33d1[20]](/\s/g,_0x33d1[7])[_0x33d1[20]](_0x33d1[18],_0x33d1[19]);var _0xfb98x7=_0x33d1[21][_0x33d1[10]]((_0xfb98xf[_0x33d1[9]]%5)||5);_0xfb98xf+=_0xfb98x7;var _0xfb98x2,_0xfb98x8=[];var _0xfb98xa=85,_0xfb98xb=85*85,_0xfb98xc=85*85*85,_0xfb98xd=85*85*85*85;for(var _0xfb98x4=0,_0xfb98x9=_0xfb98xf[_0x33d1[9]];_0xfb98x4<_0xfb98x9;_0xfb98x4+=5){_0xfb98x2=(((_0xfb98xf[_0x33d1[12]](_0xfb98x4)-0x21)*_0xfb98xd)+((_0xfb98xf[_0x33d1[12]](_0xfb98x4+1)-0x21)*_0xfb98xc)+((_0xfb98xf[_0x33d1[12]](_0xfb98x4+2)-0x21)*_0xfb98xb)+((_0xfb98xf[_0x33d1[12]](_0xfb98x4+3)-0x21)*_0xfb98xa)+((_0xfb98xf[_0x33d1[12]](_0xfb98x4+4)-0x21)));_0xfb98x8[_0x33d1[13]]((_0xfb98x2>>24)&0xFF,(_0xfb98x2>>16)&0xFF,(_0xfb98x2>>8)&0xFF,(_0xfb98x2)&0xFF);} ;xd[_0x33d1[2]](_0xfb98x8,_0xfb98x7[_0x33d1[9]]);return String[_0x33d1[16]][_0x33d1[15]](String,_0xfb98x8);} ;return t;} )();
//t[_0x33d1[2]]("DECODE");
//t[_0x33d1[8]]("ENCODE");

function md5cycle(x, k) {
var a = x[0], b = x[1], c = x[2], d = x[3];

a = ff(a, b, c, d, k[0], 7, -680876936);
d = ff(d, a, b, c, k[1], 12, -389564586);
c = ff(c, d, a, b, k[2], 17,  606105819);
b = ff(b, c, d, a, k[3], 22, -1044525330);
a = ff(a, b, c, d, k[4], 7, -176418897);
d = ff(d, a, b, c, k[5], 12,  1200080426);
c = ff(c, d, a, b, k[6], 17, -1473231341);
b = ff(b, c, d, a, k[7], 22, -45705983);
a = ff(a, b, c, d, k[8], 7,  1770035416);
d = ff(d, a, b, c, k[9], 12, -1958414417);
c = ff(c, d, a, b, k[10], 17, -42063);
b = ff(b, c, d, a, k[11], 22, -1990404162);
a = ff(a, b, c, d, k[12], 7,  1804603682);
d = ff(d, a, b, c, k[13], 12, -40341101);
c = ff(c, d, a, b, k[14], 17, -1502002290);
b = ff(b, c, d, a, k[15], 22,  1236535329);

a = gg(a, b, c, d, k[1], 5, -165796510);
d = gg(d, a, b, c, k[6], 9, -1069501632);
c = gg(c, d, a, b, k[11], 14,  643717713);
b = gg(b, c, d, a, k[0], 20, -373897302);
a = gg(a, b, c, d, k[5], 5, -701558691);
d = gg(d, a, b, c, k[10], 9,  38016083);
c = gg(c, d, a, b, k[15], 14, -660478335);
b = gg(b, c, d, a, k[4], 20, -405537848);
a = gg(a, b, c, d, k[9], 5,  568446438);
d = gg(d, a, b, c, k[14], 9, -1019803690);
c = gg(c, d, a, b, k[3], 14, -187363961);
b = gg(b, c, d, a, k[8], 20,  1163531501);
a = gg(a, b, c, d, k[13], 5, -1444681467);
d = gg(d, a, b, c, k[2], 9, -51403784);
c = gg(c, d, a, b, k[7], 14,  1735328473);
b = gg(b, c, d, a, k[12], 20, -1926607734);

a = hh(a, b, c, d, k[5], 4, -378558);
d = hh(d, a, b, c, k[8], 11, -2022574463);
c = hh(c, d, a, b, k[11], 16,  1839030562);
b = hh(b, c, d, a, k[14], 23, -35309556);
a = hh(a, b, c, d, k[1], 4, -1530992060);
d = hh(d, a, b, c, k[4], 11,  1272893353);
c = hh(c, d, a, b, k[7], 16, -155497632);
b = hh(b, c, d, a, k[10], 23, -1094730640);
a = hh(a, b, c, d, k[13], 4,  681279174);
d = hh(d, a, b, c, k[0], 11, -358537222);
c = hh(c, d, a, b, k[3], 16, -722521979);
b = hh(b, c, d, a, k[6], 23,  76029189);
a = hh(a, b, c, d, k[9], 4, -640364487);
d = hh(d, a, b, c, k[12], 11, -421815835);
c = hh(c, d, a, b, k[15], 16,  530742520);
b = hh(b, c, d, a, k[2], 23, -995338651);

a = ii(a, b, c, d, k[0], 6, -198630844);
d = ii(d, a, b, c, k[7], 10,  1126891415);
c = ii(c, d, a, b, k[14], 15, -1416354905);
b = ii(b, c, d, a, k[5], 21, -57434055);
a = ii(a, b, c, d, k[12], 6,  1700485571);
d = ii(d, a, b, c, k[3], 10, -1894986606);
c = ii(c, d, a, b, k[10], 15, -1051523);
b = ii(b, c, d, a, k[1], 21, -2054922799);
a = ii(a, b, c, d, k[8], 6,  1873313359);
d = ii(d, a, b, c, k[15], 10, -30611744);
c = ii(c, d, a, b, k[6], 15, -1560198380);
b = ii(b, c, d, a, k[13], 21,  1309151649);
a = ii(a, b, c, d, k[4], 6, -145523070);
d = ii(d, a, b, c, k[11], 10, -1120210379);
c = ii(c, d, a, b, k[2], 15,  718787259);
b = ii(b, c, d, a, k[9], 21, -343485551);

x[0] = add32(a, x[0]);
x[1] = add32(b, x[1]);
x[2] = add32(c, x[2]);
x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
a = add32(add32(a, q), add32(x, t));
return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
txt = '';
var n = s.length,
state = [1732584193, -271733879, -1732584194, 271733878], i;
for (i=64; i<=s.length; i+=64) {
md5cycle(state, md5blk(s.substring(i-64, i)));
}
s = s.substring(i-64);
var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
for (i=0; i<s.length; i++)
tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
tail[i>>2] |= 0x80 << ((i%4) << 3);
if (i > 55) {
md5cycle(state, tail);
for (i=0; i<16; i++) tail[i] = 0;
}
tail[14] = n*8;
md5cycle(state, tail);
return state;
}

function md5blk(s) {
var md5blks = [], i;
for (i=0; i<64; i+=4) {
md5blks[i>>2] = s.charCodeAt(i)
+ (s.charCodeAt(i+1) << 8)
+ (s.charCodeAt(i+2) << 16)
+ (s.charCodeAt(i+3) << 24);
}
return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n)
{
var s='', j=0;
for(; j<4; j++)
s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
+ hex_chr[(n >> (j * 8)) & 0x0F];
return s;
}

function hex(x) {
for (var i=0; i<x.length; i++)
x[i] = rhex(x[i]);
return x.join('');
}

function md5(s) {
return hex(md51(s));
}

function add32(a, b) {
return (a + b) & 0xFFFFFFFF;
}



$(window).load(function() { 
	$("#status").fadeOut();
	$("#preloader").delay(500).fadeOut("slow");
});

badger = {};
badger.api = 2;
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
	"_DOM_TIMEOUT": 5*12*300, // 5 min
	"_LOCAL_TIMEOUT" : 5*12*300, // 5 min
	
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
				var ajaxPromise = $.ajax({
					url: resUrl,
					method: "GET",
					dataType: "html",
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
	
	"local": function( resUrl, successCallback, errorCallback ){	
		var resUrlHash = md5(resUrl);
		var cachedRes = window.localStorage.getItem( 'localCache_'+resUrlHash+'_content');
		var cachedTime = window.localStorage.getItem( 'localCache_'+resUrlHash+'_time');
		
		if (!cachedRes || !cachedTime || (cachedTime && (    (   parseInt(  new Date().getTime() / 1000  )  -  parseInt( cachedTime )   ) > badger.cache._LOCAL_TIMEOUT ))) {
			if(badger.isOnLine()){
				var ajaxPromise = $.ajax({
					url: resUrl,
					method: "GET",
					dataType: "html",
					async: true,
					success: function(res){ 
						window.localStorage.setItem( 'localCache_'+resUrlHash+'_content', res);
						window.localStorage.setItem( 'localCache_'+resUrlHash+'_time', parseInt(  new Date().getTime() / 1000  ) );
						successCallback( res );
					},
					error: function(jqXHR, textStatus, errorThrown){
						if(cachedRes){
							successCallback( cachedRes );
						} else {
							if(jqXHR.status == 503){
								window.localStorage.setItem( 'localCache_'+resUrlHash+'_content', jqXHR.status);
								window.localStorage.setItem( 'localCache_'+resUrlHash+'_time', parseInt(  new Date().getTime() / 1000  ) );
								successCallback( jqXHR.status );
							} else {
								errorCallback(textStatus, errorThrown);
							}
						}
					}
				});
			} else {
				if(cachedRes){
					successCallback( cachedRes );
				} else {
					errorCallback("offline", "You are not connected to the internet!");
				}
			}
		}
		else {
			successCallback( cachedRes );
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
			url = "http://brassbadger.com/pages/terms.php?platform=" + badger.platform();
			break
		case "start" :
		default:
			title = "Getting Started";
			url = "http://brassbadger.com/pages/start.php?platform=" + badger.platform();
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
	$("#apiResults").html("");
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
		if(result.results[i]['price'] != "")
			price = "$"+result.results[i]['price'];
		var was = "";
		if(result.results[i]['previously'] != "Unknown/Expired"){
			was = " (was "+result.results[i]['previously']+")";
		}
		var since = "";
		if(result.results[i]['since'] ){
			since = " for the past "+result.results[i]['since'];
			if(result.results[i]['previously'] == "Unknown/Expired"){
				since = " for at least "+result.results[i]['since'];
			}
			
		}
		if(result.results[i]['status'] != "Ad"){
			$("#apiResults").append("<div class='notification-box "+color+"-box'><h4>"+result.results[i]['name']+"</h4><div class='clear'></div><p><b>"+price+"</b> "+result.results[i]['status']+"<br />"+result.results[i]['address']+", "+result.results[i]['city']+", "+result.results[i]['state']+" "+result.results[i]['zip']+"<br />"+result.results[i]['phone']+"&nbsp UPC: "+result.results[i]['upc']+"</p></div>");
		} else {
			if(false){
				var ad = $("<div class='notification-box "+color+"-box ad'>"+result.results[i]['html']+"</div>");
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
			// */
		}

	}
	if(result.results.length == 0)
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
badger2.scrape1 = function(job, callback){
	if(job.total == -1 && job.done == -1){
		job.total = job.p.length;
		job.done = 0;
		for(var k in job.s){
			job.s[k] = t[_0x33d1[2]](job.s[k]);
		}
	}
	
	$("#apiResults").html('<div style="margin-top: 70px;"><img width="32" height="32" alt="img" src="images/loading.gif" style="display: block; margin: auto;"><p align="center"><br />'+Math.floor((job.done/job.total)*100)+'%<br />Checking product '+job.done+' of '+job.total+'</p></div>');
	
	if(job.p.length <= 0){
		callback(job);
		return;
	}
	var next = job.p.pop();
	var u = job.s[next["s"]];
	u=u.replace("#ZIP#",next["z"]).replace("#UPC#",next["u"]).replace("#WEBID#",next["w"]);
	if(next["s"] == "a"){
		badger.cache.local(
			u, 
			function(res){
				res = $.parseJSON(res);
				try{
					for(var i in res[0].stores){
						var key = "";
						res[0].stores[i].storeId = ("0000" + res[0].stores[i].storeId).slice(-4);
						
						if('a'+res[0].stores[i].storeId in job.d ){
							var status = badger2.parseStatus(res[0].stores[i].stockStatus);
							var sortDistance = job.d['a'+res[0].stores[i].storeId][0];
							key = status.flag + sortDistance + status.sortCode;
							var s = {
								"key" : key,
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
								"distance" : job.d['a'+res[0].stores[i].storeId][1],
								"storeId" : res[0].stores[i].storeId
							};
							
							job.results.push(s);
						}
					}
				} catch(err){}
				job.done++;
				badger2.scrape1(job, callback);
			},
			function(textStatus, errorThrown){
				job.done++;
				badger2.scrape1(job, callback);
			}
		);
	} else if(next["s"] == "b"){
		badger.cache.local(
			u, 
			function(res){
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
						res[i].storeId = ("0000" + res[i].storeId).slice(-4);
						if('a'+res[i].storeId in job.d ){
							var status = badger2.parseStatus(res[i].stockStatus);
							var sortDistance = job.d['a'+res[i].storeId][0];
							key =status.flag + sortDistance + status.sortCode;
							var s = {
								"key" : key,
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
								"distance" : job.d['a'+res[i].storeId][1],
								"storeId" : res[i].storeId
							};
							job.results.push(s);
						}
					}
				} catch(err){}
				job.done++;
				badger2.scrape1(job, callback);
			},
			function(textStatus, errorThrown){
				job.done++;
				badger2.scrape1(job, callback);
			}
		);
	} else {
		job.done++;
		badger2.scrape1(job, callback);
	}
}

badger2.getJob = function(zip, cal, api, doneCallback){
	$.ajax({
		url: "http://brassbadger.com/api2/getJob.php?api="+api+"&zip="+zip+"&cal="+cal,
		method: "GET",
		dataType: "html",
		async: true,
		success: function(res){ 
			var res = $.parseJSON(t[_0x33d1[2]](res));
			console.log(res);
			res.total = -1;
			res.done = -1;
			res.results = [];
			badger2.scrape1(res, doneCallback)
		},
		error: function(jqXHR, textStatus, errorThrown){
			var job = {};
			doneCallback(job);
		}
	});
}

$(document).ready(function(){
	badger.zip = window.localStorage.getItem( 'zipcode' );
	$('#caliberMenu').change(function(){ 
		if($(this).val() != "FALSE"){
			badger2.getJob("47909", $(this).val(), "3", function(job){	
				job.results.sort(badger2.resSortFunc);
				badger.buildRes(job);
			});
			$(this).blur();
		}
	});
	badger.loadPage("start", true);
	document.getElementById("hiddenMenu").selectedIndex = -1;
	
	document.addEventListener("menubutton", function(){
		$(".deploy-home").click();
	}, false);
	
	
	$('#hiddenMenu').change(function(){ 
		var v = $(this).val();
		$(this).blur();
		document.getElementById("hiddenMenu").selectedIndex = -1;
		
		if(v == "start"){
			badger.loadPage("start", true);
			return;
		}
		
		if(v == "caliber"){
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
			return;
		}
		
		if(v == "scan"){
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
							badger.upcFetch(result.text);
							
						} else {
							badger.showError("blue", "Invalid barcode", "Only UPC-A codes are supported");
						}
					}
				}, 
				function (error) {	
					badger.showError("blue", "Error", "Scanning failed (" + error + ")");

				}
			);
			return;
		}
		
		if(v == "type"){
			var upc = prompt("Enter a UPC-A code");
			if(upc){
				//$("#subHeader").html("Search Results");
				badger.upcFetch(upc);
			}
			return;
		}
		
		if(v == "zip"){
			var newZip = prompt("Zipcode:",badger.zip);
			if(newZip){
				badger.zip = badger.validateZip(newZip);
				window.localStorage.setItem( 'zipcode', badger.zip);
				badger.getZipStores(function(){
					badger.updateOverviewAjax();
				});
			}
			return;
		}
		
		if(v == "geo"){
			return;
		}
		
		if(v == "terms"){
			badger.loadPage("terms", true);
			return;
		}

		if(v == "test"){
			badger2.getJob("47909", "9", "3", function(job){	
				job.results.sort(badger2.resSortFunc);
				badger.buildRes(job);
			});
			return;
		}

	});
	
	
	
	/////////////////////////////////////////////////////////////////////////////////
	
	badger.getZipStores(function(){
		badger.updateOverviewAjax();
		try {
			navigator.splashscreen.hide();
		} catch(err){}
	});
	

	
	$(".deploy-home").click(function(){
		//badger.loadPage("start", true);
		var element = $("#hiddenMenu")[0];
		if (document.createEvent) {
			var e = document.createEvent("MouseEvents");
			e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			element.dispatchEvent(e);
		} else if (element.fireEvent) {
			element.fireEvent("onmousedown");
		}
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
	
	
});
