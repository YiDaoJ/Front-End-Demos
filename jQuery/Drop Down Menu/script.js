$(document).ready(function(){
	// Menu 1 link
	$('#nav_menu ul a').addClass('firstLevel');
	//Submenu 1
	$('#nav_menu ul ul').addClass('secondLevel');
	//Submenu 2
	$('#nav_menu ul ul ul').addClass('thirdLevel');

	$('#nav_menu ul a').hover(
		function(){
			$(this).addClass('hover');
			$('#nav_menu ul li:hover > ul').addClass('hoverUl');
		},
		function(){
			$(this).removeClass('hover');
			$('#nav_menu ul li ul').removeClass('hoverUl');
		}
	);

});