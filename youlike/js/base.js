var dipwith = 750;
	dip();
	window.onresize=dip;
	function dip () {
		var width  = document.documentElement.clientWidth;
		var fontsize= width/dipwith
		document.documentElement.style.fontSize=fontsize*100+'px';
}