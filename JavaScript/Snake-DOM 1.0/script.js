// map: to save the DOM-Element of the div with Id "map"
var map=document.getElementById('map');
// info: to save the DOM-Element of the div with Id "info"
var info=document.getElementById('info');
// to save the Instance of the Food-Object
var food;
var snake;
var timer;

var score=0;

var flag=false;

/*
	The whole Map, of which the width 800px and the height 600px is, 
	is in 1200 (40x30) grid divided. 
	So the Location of food and snake will be according to the grid but not pixel.
 */

function Food() {

	this.width=20;		// width of food-grid
	this.height=20;		// height of food-grid
	this.color='#FA621C';
	this.position='absolute';
	this.pos_x = 0;		// horizont grid
	this.pos_y = 0;		// vertical grid
	this.foodDiv=null; 	// to save the DOM-Element of the food-div-Element

	this.foodAppear=function(){

		if(this.foodDiv===null){
			// create	the DOM-Element for the first time		
			this.foodDiv=document.createElement('div');
			this.foodDiv.style.width=this.width+'px';
			this.foodDiv.style.height=this.height+'px';
			this.foodDiv.style.backgroundColor=this.color;
			this.foodDiv.style.position=this.position;
			// Add the foodDiv into map
			map.appendChild(this.foodDiv);
		}

		this.pos_x=Math.floor(Math.random()*40);
		this.pos_y=Math.floor(Math.random()*30);

		this.foodDiv.style.left=(this.pos_x*20)+'px';
		this.foodDiv.style.top=(this.pos_y*20)+'px';

	};

}



function Sanke() {
	this.width=20;
	this.height=20;
	this.position='absolute';
	this.direction='right'; // default moving direction

	this.snakeBody = [	
											[5, 5, 'yellow', null],	// head
											[4, 5, 'orange', null],	// body
											[3, 5, 'orange', null]	// body
										];	
										// 0: horizont grid 
										// 1: vertical grid
										// 2: color of the grid
										// 3: to save the DOM-Element of the aktuell grid
										
	this.showSnake = function() {

		for(var i=0; i<this.snakeBody.length; i++){

			if(this.snakeBody[i][3]===null){
				// if the DOM-element of aktuell snake-grid doesn't exists, so create it 
				this.snakeBody[i][3]=document.createElement('div');
				this.snakeBody[i][3].style.width=this.width+'px';
				this.snakeBody[i][3].style.height=this.height+'px';
				this.snakeBody[i][3].style.position=this.position;

				this.snakeBody[i][3].style.backgroundColor=this.snakeBody[i][2];
				// add this grid of snake-body into the map
				map.appendChild(this.snakeBody[i][3]);

			}

			this.snakeBody[i][3].style.left=(this.snakeBody[i][0]*20)+'px';
			this.snakeBody[i][3].style.top=(this.snakeBody[i][1]*20)+'px';

		}
	};


	this.setDirection=function(code) {
		switch(code) {
			case 37:
				this.direction='left';
				break;
			case 38:
				this.direction='up';
				break;
			case 39:
				this.direction='right';
				break;
			case 40:
				this.direction='down';
				break;
			case 32:
				pause();
				break;
		}
	};

	

	this.move = function() {
		// body moves- the last body-grid will replace the on in front of it ###############
		var bodyLength=this.snakeBody.length-1;
		for(var i=bodyLength; i>0; i--){
			this.snakeBody[i][0]=this.snakeBody[i-1][0];
			this.snakeBody[i][1]=this.snakeBody[i-1][1];
		}

		// direction control - set the new direction for snake-head #########################
		switch(this.direction) {
			case 'left':
				this.snakeBody[0][0]-=1;
				break;
			case 'right':
				this.snakeBody[0][0]+=1;
				break;
			case 'up':
				this.snakeBody[0][1]-=1;
				break;
			case 'down':
				this.snakeBody[0][1]+=1;
				break;
		}

		// Eat Food ##########################################################################
		// the snake eats the food, it means
		// the position of snake-head-grid = the position of food-grid
		if(this.snakeBody[0][0]===food.pos_x && this.snakeBody[0][1]===food.pos_y) {
			// after eating food
			// 1: there will be one more grid at the end of the snakebody
				// coordinate of the new body-grid = coordinate of the last body-grid
			var last=this.snakeBody.length-1;
			var x=this.snakeBody[last][0];
			var y=this.snakeBody[last][1];
			this.snakeBody.push([x, y, 'orange', null]);

			// 2: score increases
			score++;
			document.getElementById('score').innerHTML=score;

			// 3: another new food will random appear on the map
			food.foodAppear();
		} 


		// Lose ###############################################################################
		// 1. hit the edage of the map
		if(this.snakeBody[0][0]<0 || this.snakeBody[0][0]>=40 ||
				this.snakeBody[0][1]<0 || this.snakeBody[0][1]>=30) {
			alert('Lose');
			clearInterval(timer);
			return;
		}

		// 2. hit itself
		for(var n=1; n<this.snakeBody.length; n++) {
			
			if(this.snakeBody[0][0]===this.snakeBody[n][0] &&
					this.snakeBody[0][1]===this.snakeBody[n][1]) {
				alert('Lose');
				clearInterval(timer);
				return;
			}

		}

		this.showSnake();
	};
}	


function pause(){

	if(flag===false) {
		flag=true;
		clearInterval(timer);
	} else {
		flag=false;
		timer=setInterval(function(){snake.move();}, 200);
	}

}


window.onload = function() {

	food = new Food();
	food.foodAppear();

	snake = new Sanke();
	snake.showSnake();

	timer=setInterval(function(){snake.move();}, 200);

	// direction control
	document.onkeydown=function(event) {
		var code;
		if(window.event) {
			code=window.event.keyCode;
		}else{
			code=event.keyCode;
		}

		snake.setDirection(code);

	};


	document.getElementById('restart').onclick=function(){
		location.reload();
	};


};