function parallaxScroll(){
	var scrolled = window.pageYOffset;
	// console.log('aktuelle Y-Wert: ' + scrolled);

	// slow
	document.getElementById('level3').style.top = (0-(scrolled*0.2))+'px';
	// console.log('level3: ' + document.getElementById('level3').style.top);
	
	// mittel
	document.getElementById('level2').style.top = (0-(scrolled*0.4))+'px';
	// console.log('level2: ' + document.getElementById('level2').style.top);
	
	// fast
	document.getElementById('level1').style.top = (0-(scrolled*0.7))+'px'; 
	// console.log('level1: ' + document.getElementById('level1').style.top);
}
window.addEventListener('scroll', parallaxScroll);