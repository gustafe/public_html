/*
 * JavaScript Pretty Date
 * Copyright (c) 2008 John Resig (jquery.com)
 * Licensed under the MIT license.
 */

// Takes an ISO time and returns a string representing how
// long ago the date represents.
function prettyDate(time){
	var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
		diff = (((new Date()).getTime() - date.getTime()) / 1000),
		day_diff = Math.floor(diff / 86400);
			
	if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
		return;

    if ( day_diff == 0 )
    {
	hh = parseInt( diff / 3600 ) % 24;
	mm = parseInt( diff / 60 ) % 60;
	ss = diff % 60;

	if ( hh == 0 && mm == 0 ) {
	    return "just now";
	}

	return (hh > 0 ? hh + "h " : "") + ( mm < 10 ? "0" + mm : mm ) + "m ago";
    } else {
	return day_diff == 1 && "Yesterday" ||
	    day_diff < 7 && day_diff + " days ago" ||
	    day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
    }
    
}

// If jQuery is included in the page, adds a jQuery plugin to handle it as well
if ( typeof jQuery != "undefined" )
	jQuery.fn.prettyDate = function(){
		return this.each(function(){
			var date = prettyDate(this.title);
			if ( date )
				jQuery(this).text( date );
		});
	};
