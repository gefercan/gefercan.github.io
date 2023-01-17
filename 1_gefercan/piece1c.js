// JavaScript Document
/* 

German Fernandez Cantos,2020
Poem 1-The head
 
the goal: 
the frame, the screen, as a performative space, as  a storytelling scenario,
random, dadaist i aesthetics, but strucutred by 0 and 1s

----------------------------------------

the plan: 
slowly like in a stage, develop the moments of the piece
a white screen is everything we see at the beginning

moment0: this is important, some movement has to happen if there is not action from the user,
the head, the beings and the circles appear from the center and explode,
after that, there should be a loop or a random animation, it should stop as the first interaction is done,
and should resume after the event triggered by that interaction is finished

moment 1: the flowers and the head appear, they are the buttons
later the background video appears but with low opacity


the buttons trigger the different actions, like:
one starts creating flowers randomly
other starts creating random skulls
other move the parallax effect, dissapearing the man and letting the woman appear
other plays a video

after the first click, the buttons are reassigned events
event listeners are removed and changed by new ones.
the same with the second and third click.

there are listed in the code after the 4 initial actions, 16 variations.



guide for smartphone:
also for the moments, the poem lines should appear one at a time filling the whole 
screen in smartphone, so they can be read slowly maybe

plus the woman would be places as a video-like-gif-replacement file, and also a skull video will
be added, these 
videos should be square and of white background with a cut out figure in th emiddle
so they can be used both in desktop and mobile.
The woman will appear from a box, the whe will go out and open her mouth and from 
her mouth flowers will appear and for the flowers a box will appear
and inside the box a man in oxygen mask will look out
another idea is the headless man riding the skull and flowers appear radially from them
forming a Escher-like figure, maybe.
____________________________________
this is more of a sucession of videos
that narrates  kind of a dream

basic plan: the circle containing the videos moves up and down in the mobile
version and left and right in the desktop one, interchanging places with the other circles

list of videos
clock (sceneTV)
skull 
water
book and hand
horse
eye(pending)

opcional: an iamge will randomly appear, a div containing an image,
while the div containing the video dissappear
________________________________________________________________________________________________________________________________________________
	//creates an element and assign a random position//
	*/




window.onload= function(){	
function MyFunction() {
	//myFunction is the constructor function//
	//and should be written in camelCase//
	

	
	

	
/*---------------IMPORTANT----request animation- important--------------*/


	
	function step(timestamp){
				var start;
					if(!start || progress > window.innerHeight )
				start=timestamp;
				progress=(timestamp-start)/10;
				stopId=window.requestAnimationFrame(step);
					
		
				console.log(timestamp);
				console.log("this is the loop");
				console.log(progress);
					
	
		
				document.getElementById("cuatro").style.opacity=("0.5");
		
				
				addbuttton1(elementosvarios.elementob,movingVideo1);
				addbuttton1(elementosvarios.elementoc,movingVideo2);
				addbuttton1(elementosvarios.elementoll,movingVideo3);
				addbuttton1(elementosvarios.elementod,movingVideo4);
				addbuttton1(elementosvarios.elementoe,movingVideo5);
					
				animation();
					
		
		
/*					var array=["perfume", "aroma", "silencio", "luz"];
					var a = document.getElementById ("a");
					for ( var x=0; x<4; x++){
						
						var est=console.log( array[x-1] );
						console.log( array[x] );
						a.innerHTML= array[x-1]  ;
					}*/

				}
	

	
	
	function hide1(){
		
                ocultarymostrar1();
				animation2();
				addbuttton1(elementosvarios.elementoll,hide2);
				console.log("hide1");
			}
	
			
	  function hide2(){

                ocultarymostrar2();
		  		animation3();
                addbuttton1(elementosvarios.elementoi,hide3);
		  		addbuttton1(elementosvarios.elementoj,hide3);
                window.requestAnimationFrame (step);
			 	console.log("hide2");
		  		rainingFlowers();
		    }
	
	  function hide3(){ 
                ocultarymostrar3();
		        animation3a();
				addbuttton1(elementosvarios.elementoi,hide4);
				changebutton1(elementosvarios.elementoll,hide2,movingVideo3);
		  		console.log("hide3");
		  		
     }
	
	
	  function hide4(){ 
				console.log("hide4");
		  		
			}

	
	
	cover(document.getElementById("enter"),"click",hide1);
	

	
/*--------------------------console logs-----------------------------------------------------*/		
		
varios3();

	
/*--------------------------console logs-----------------------------------------------------*/		
	

	
	function stopVideo1(){
		var x = document.getElementById("film");
	
		if (x.currentTime === 40){
			x.pause();
			x.opacity=("0");
		}
	}
		/*-------------------canvas-------------------------------------------------------------------------------------------*/

	
	/*-------------------definitions of 16 secondry functions to be called------------------------------------------------------*/
	
	function variation1(){
		
		var x = document.getElementById("film");
		x.source= ("video/falda2.mp4");
		console.log(x.src);
		
	}
	
	function variation2(){
		
		var x = document.getElementById("film");
		x.src= ("video/falda1.mp4");
		
	}
	
	function variation3(){
		var x = document.getElementById("film");
		x.src= ("video/falda2.mp4");
	}
	
	function variation4(){
		var x = document.getElementById("film");
		x.src= ("video/escena.mp4");
	}	
	
	function variation5(){
	
		var x = document.getElementById("film");
		x.src= ("video/escena.mp4");
	
	}
	
	function variation6(){
		var x = document.getElementById("film");
		x.src= ("video/escena.mp4");
	}
	
	function variation7(){
		var x = document.getElementById("film");
		x.src= ("video/escena.mp4");
	}
		
	function variation8(){

		var x = document.getElementById("film");
		x.src= ("video/escena2.mp4");
	
	}
	
	

	
/*--------------------------------initial  4 functions-----------------------------------------*/
	
	function movingVideo1(){
		
        animation4();
		console.log("movingVideo1");
		
		window.cancelAnimationFrame(stopId);
		var mqList = window.matchMedia("(max-width: 700px)");
		handleOrientationChange(mqList);
		mqList.addListener(handleOrientationChange);

		function handleOrientationChange(evt) {
			
					if (evt.matches) {
						
						movingvideo1_instruction1();
					}
			
					else {
						movingvideo1_instruction2();
					
					}
				}
			}
			
	
	/*-----------------------------*/
	
	
	function movingVideo2(){
		
	
		
		window.cancelAnimationFrame(stopId);
		console.log("movingVideo2");
		
		
		
		var mqList = window.matchMedia("(max-width: 700px)");
		handleOrientationChange(mqList);

		mqList.addListener(handleOrientationChange);

		function handleOrientationChange(evt) {
					if (evt.matches) {
						movingvideo2_instruction1();

					}
				else {
						movingvideo2_instruction2();
					}
		}
		
	}
	
	/*-----------------------------*/
	
	function movingVideo3(){

		console.log("movingVideo3");
		window.cancelAnimationFrame(stopId);
		
		animation6();
	
		var mqList = window.matchMedia("(max-width: 700px)");
		handleOrientationChange(mqList);

		mqList.addListener(handleOrientationChange);

		function handleOrientationChange(evt) {
			if (evt.matches) {
					movingvideo3_instruction1();
				}
			else {
					movingvideo3_instruction2();
				}
			}
		
		}

	
	/*----------------------------*/
	
	function movingVideo4(){
		console.log("movingVideo4");
		var x = document.getElementById("film1");
		var x1 = document.getElementById("a");
		var x2 = document.getElementById("s");
		var x3 = document.getElementById("d");
		var x5 = document.getElementById("head1");
		var x51 = document.getElementById("film2");
		var x52 = document.getElementById("film");

		
		window.cancelAnimationFrame(step);
		
		var mqList = window.matchMedia("(max-width: 700px)");
		handleOrientationChange(mqList);
		mqList.addListener(handleOrientationChange);

		function handleOrientationChange(evt) {
			if (evt.matches) {
						movingvideo4_instruction1();
					}
			
			else{	   movingvideo4_instruction2();
			}
		}
		
	}
	
	/*-----------------------------*/
		
	function movingVideo5(){
		var x = document.getElementById("film2");
		var x1 = document.getElementById("a");
		var x2 = document.getElementById("s");
		var x3 = document.getElementById("d");
		var x5 = document.getElementById("head1");
        var x51 = document.getElementById("film1");
		var x52 = document.getElementById("film");
		
	
		
			window.cancelAnimationFrame(step);
			var mqList = window.matchMedia("(max-width: 700px)");
			handleOrientationChange(mqList);
			mqList.addListener(handleOrientationChange);
		
		function handleOrientationChange(evt) {
			if (evt.matches) {
					movingvideo5_instruction1();
					}
			
			else{	movingvideo5_instruction2();
			}
		}
	}
	
		/*--------------------------p5-----------------------------------------------*/

				function processing3(){
				var sketch2 =function(p){
				var option=1;
				var w=window.innerWidth;
				var h=window.innerHeight;
					
				p.setup = function(){
					p.createCanvas(w,h);
					p.background(10,10,10);
				}
				
				
				p.draw = function() {
					
					/* check the  following
					map command that takes 5 values,
					the  paramete input, the input minimun 
					range, the input maximun, and then the output minimun and the output maximum*/		
					var density= p.map(p.mouseX,0,p.width,120,180);
					/*----a nested loop----*/
					
					if( option ==1){
					   for (var i=80; i <= p.width-80; i+=density){
							for (var j=180; j<= p.height-180; j+= density){
								p.background(255,10);
								p.noFill();
								p.line(i-5,j-5,i+5,j+5);
								p.line(i+5,j-5,i-5,j+5);
								}
							}
					}
					
					
					else if( option ==2){
						p.background(32,22,22);
						p.noFill();
						p.stroke(255);
					/* three for loops nested */
					/* four lineas and a diagonal */
						for (var xi=30; xi <= p.width-30; xi+=30){
						for (var yi=30; yi<= p.height-30; yi+= 30){
						for (var zi=0; zi<= 16; zi+= 4){
						p.line( xi + zi,yi, xi +zi, yi +12);
								}
								p.line(xi,yi,xi + 12, yi +12);}
							}
						
						p.stroke(1);
						p.strokeWeight(0.5);
						p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY+234)
/*					   for (var i=80; i <= p.width-180; i+= density){
							for (var j=120; j<= p.height-220; j+= density){
								p.background(255,12);
								p.ellipse(p.width, i, p.width, p.height);
								p.stroke(0.3);
							 }
							}*/
					}
					
					
					else if( option ==3){
						   for (var i=80; i <= p.width-80; i+=density){
							for (var j=180; j<= p.height-180; j+= density){
								p.background(225,10);
								p.noFill();
								p.line(i-5,j-5,i+5,j+5);
								p.line(i+5,j-5,i-5,j+5);
								}
								p.stroke(3);
								p.strokeWeight(5);
								p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);   
/*					   for (var i=80; i <= p.width; i+=density){
							for (var j=180; j<= p.height; j+= density){
								p.background(255,22);
								p.ellipse(i, p.height,p.width,180);
								p.ellipse(j, i, p.width, p.width);
								p.ellipse(j, i, p.height,p.width);}*/
							}
					}
					
					else if( option == 4){
							p.background(242,12,21,30);
						
						for (var i=0; i<p.width; i+=15){
							p.stroke(i/p.width*255);
							p.strokeWeight(1);
							p.noFill();
							p.ellipse(p.width/2,p.height/2,i,i);
						};
						
						p.stroke(1);
						p.strokeWeight(5);
						p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
/*					   var count=0;
					   for (var i=180; i <= p.width-10; i+=density){
							for (var j=180; j<= p.height-10; j+= density){
								p.strokeWeight(count*0.2);
								p.ellipse(j, i ,p.height, p.width);}
						   		count++;
							}*/
					}
					
					
					p.mousePressed = function (){
						option++;
						if (option > 4) option = 1;
					}
					console.log(option);
					
					}
				};
				
				window.onresize=function(){
					w=window.innerWidth;
					h=window.innerHeight;
					canvas.size(w,h);
				}	
			console.log("processing");
					
			new p5(sketch2,"canvas21");
			
		}
		processing3();
		

}

new MyFunction();
}








 
/*---------------------------------------------------------------------
1: set up interval,         	https://www.w3schools.com/js/js_timing.asp
*	                  		   https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing1
*   2: create object, set x to random, y to specific, 
   					  		   https://www.w3schools.com/jsref/jsref_random.asp
*   3: set animation to go down https://www.w3schools.com/js/js_htmldom_animate.asp ,
   							   https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3 
*for video:
* https://www.w3schools.com/howto/howto_css_fullscreen_video.asp 
*https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fullscreen_video

aqui se declara el objeto 
*global windows y alli este llama a 
*la funcion inical llamada myFunction
*si invocas las funciones
*antes de declararlas'
*te sale function out of scope
*asi que primero declaras 
*las variables, luego las funciones
*y luego las invocas,everything nested en la funcion wrapper
*que en este caso es myFunction() 
 1: set up interval,         	https://www.w3schools.com/js/js_timing.asp
*	                  		   https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing1
*   2: create object, set x to random, y to specific, 
   					  		   https://www.w3schools.com/jsref/jsref_random.asp
*   3: set animation to go down https://www.w3schools.com/js/js_htmldom_animate.asp ,
   							   https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3 
*for video:
* https://www.w3schools.com/howto/howto_css_fullscreen_video.asp 
*https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fullscreen_video
*/
