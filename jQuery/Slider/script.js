var pics = [
	{
		'title': 'Alaska, USA',
		'description': 'An ice tunnel inside Matanuska Glacie. </br>(&copy; Lynn Wegener/Offset)',
		'picUrl': '0ee534632a'
	},
	{
		'title': 'Guizhou Province, China',
		'description': 'Yinlianzhui Waterfall near Anshun.</br>(&copy; Top Photo Group/Getty Images)',
		'picUrl': '2471990637'
	},
	{
		'title': 'New South Wales, Australia',
		'description': 'View of stars from Jenolan Caves.</br>(&copy; Carlos Orue/Getty Images)',
		'picUrl': '6e355be75d'
	},
	{
		'title': 'Spain',
		'description': 'Springtime near the village of Ainsa-Sobrarbe.</br>(&copy; Hans Kruse/500px)',
		'picUrl': '6e09af1105'
	}
];


$(document).ready(function() {
	var imgIndex = 0;
			$controller = $('#controller span');

	// set defautl pic and other property
	$('#current_img')
		.attr('src', 'https://i.imgsafe.org/'+ pics[0].picUrl +'.jpg')
		.css('width', '100%');
	$('#caption h1').html(pics[0].title);
	$('#caption p').html(pics[0].description);
	$controller.eq(0).addClass('activ');


	function movePoint(imgIndex) {
		for(var i=0; i<pics.length; i++) {
			if(i===imgIndex) {
				$controller.eq(imgIndex).addClass('activ');
			}else {
				$controller.eq(i).removeClass('activ');
			}
		}
	}


	function changeImage(imgIndex) {
		$('#current_img')
			// change image animation
			.removeClass('changeNext')
			.attr('src', '')
			// set src property
			.attr('src', 'https://i.imgsafe.org/'+ pics[imgIndex].picUrl +'.jpg')
			.on('load', function () {
			  $('#current_img').addClass('changeNext');		 			
			});

		$('#caption h1').html(pics[imgIndex].title);
		$('#caption p').html(pics[imgIndex].description);

		movePoint(imgIndex);		
	}

	// controll the images with point below
	$('#controller').on('click', 'li', function() {
  	$(this).addClass('clicked');
	 	imgIndex = $('.clicked').index();
	 	changeImage(imgIndex);
	 	$(this).removeClass('clicked');

	});

	function slider() {
		imgIndex++;
		if(imgIndex >= pics.length){
			imgIndex = 0;
		}
		changeImage(imgIndex);
	}

	var timer = setInterval(slider, 3000);

	$controller.mouseover(function() {
  	clearInterval(timer);
  });

  $controller.mouseout(function() {
  	timer = setInterval(slider, 3000);
  });

});
