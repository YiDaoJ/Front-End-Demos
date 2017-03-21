var picUrl = ['0ee534632a', '0ee540571c', '0ee5436450', '0ee548b6c6'];

window.onload = function() {

	var slider = document.getElementById('slider');
	var slideList = document.getElementById('sliderwrapper');
	// var pic = document.getElementById('current_img');	
	var picWidth = pic.width;

	var ctrlPoint = document.getElementById('controller_wrapper').querySelectorAll('li');
	var controller = document.getElementById('controller');

	var prev = document.getElementById('prev');
	var next = document.getElementById('next');

	var index = 1;
	var currentPic = 1;

	// show the first pic
	pic.setAttribute('src', 'https://i.imgsafe.org/'+ picUrl[currentPic-1] +'.jpg');
	pic.style.opacity = 1;
	ctrlPoint[currentPic-1].className = 'active';

	function currentPicCalculation() {
  	if(currentPic === 5){
  		currentPic = 1;
  	}else if (currentPic === 0) {
  		currentPic = 4;
  	}
  }

  function setPic() {
  	for(var i = 0; i < ctrlPoint.length; i++) {
		 	if(i == currentPic-1) {
		 		ctrlPoint[currentPic-1].className = 'active';
		 	}else {
		 		ctrlPoint[i].className = '';
		 	}
		}
		// show the current pic
		pic.setAttribute('src', 'https://i.imgsafe.org/'+ picUrl[currentPic-1] +'.jpg');		
  }

	function moveToNext() {	
		currentPic++;
		currentPicCalculation();	
		setPic(); 
	}

  // click next, show next pic
  next.onclick = moveToNext;

  function moveToPrev() {	
  	currentPic--;  	
  	currentPicCalculation();
		setPic();		
	}

  //click prev, show prev pic
	prev.onclick = moveToPrev;

	// auto play
  var timer = setInterval(moveToNext, 3000);
  slider.onmouseover = function() {
  	clearInterval(timer);
  };
  controller.onmouseover = function() {
  	clearInterval(timer);
  };

  slider.onmouseout = function() {
  	timer = setInterval(moveToNext, 2000);
  };
  controller.onmouseout = function() {
  	timer = setInterval(moveToNext, 2000);
  };

  // controll with point
  for (var i = 0; i < ctrlPoint.length; i++) {
		(function (index) {
			ctrlPoint[i].onclick = function () {
				currentPic = index + 1;
				setPic();
			};
		})(i);
	}

};