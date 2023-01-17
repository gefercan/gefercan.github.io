/* JavaScript Document
old script*/
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

		
		
/*					var array=["perfume", "aroma", "silencio", "luz"];
					var a = document.getElementById ("a");
					for ( var x=0; x<4; x++){
						
						var est=console.log( array[x-1] );
						console.log( array[x] );
						a.innerHTML= array[x-1]  ;
						/*
	
		function stopVideo1(){
		var x = document.getElementById("film");
	
		if (x.currentTime === 40){
			x.pause();
			x.opacity=("0");
		}
	}*/




	
	

	/*-------------------the characters--------------------------------------------------------------------------------------------*/

	
           

		var elementosvarios ={
				elementoa: document.getElementById("cover"),
				elementob : document.getElementById("being1"),
                elementoc : document.getElementById("being3"),
                elementod : document.getElementById("a"),
                elementoe : document.getElementById("s"),
                elementof : document.getElementById("d"),
                elementog : document.getElementById("d"),
                elementoh : document.getElementById("next"),
                elementoi : document.getElementById("vectorial_box1a"),
		        elementoj : document.getElementById("vectorial_box1b"),
		        elementok : document.getElementById("film"),
				elementok1 : document.getElementById("film1"),
				elementok2 : document.getElementById("film2"),
				elementol : document.getElementById("head1"),
				elementoll : document.getElementById("head2"),
				elementom : document.getElementById("canvas1"),
				elementon : document.getElementById("circulo1"),
				elementon1 : document.getElementById("vectorial_1"),
				elementon2 : document.getElementById("vectorial_1a")
		}		
           



	/*-------------------templates for buttons----------------------------------------------------------------------------------*/

		
		
		function addbuttton1(x,y){
		x.addEventListener ("click",y);
	
		}
	
		function changebutton1(x,y,z){
		x.removeEventListener ("click",y);
		x.addEventListener ("click",z);
		}
	
		function removebuttton1(x,y){
		x.removeEventListener ("click",y);
		window.cancelAnimationFrame(step);
		}
		

        function ocultar(x,y){
		x.style.display = y;
        }



	/*-------------------cover-------------------------------------------------------------------------------------------*/

		function cover(x,y,z){
		var e = x;

		e.addEventListener(y, z );
		
		}



	/*--------------------media query-------------------------------------------------------------------------------------*/


		function mediaquery(x,y,z){
			var mqList = window.matchMedia(x);
			handleOrientationChange(mqList);

			mqList.addListener(handleOrientationChange);

			function handleOrientationChange(a) {

						if (x.matches) {
							y
						}

						else {
							z
						}
			}
		}

/*-----------------------------------------------------------------------------------------------------------*/

		function handleOrientationChange2(x,y,z) {

						if (x.matches) {
							y
						}

						else {
							z
						}
			}


/*-----------------------------------------------------------------------------------------------------------*/








	

		


		/*--------------------------canary console logs-----------------------------------------------------*/	

			function varios3(){
	 
			var q1={ att1: function play1(){console.log("uy, la funcion como atributo");},
					att2: function  play2(){ console.log("ays, de un objeto");}, 
					att3: function  play3(){console.log("oys, que puede ser invocada");} ,
					att4: function  play4(){console.log("ey , chequea la funcion varios3 en tu js");} };

			new q1.att1;
			new q1.att2;
			new q1.att3;
			new q1.att4;
			}





	
	


	function calculatePosition(element){
		var x= document.body.offsetHeight-element.clientHeight; 
		var y= document.body.offsetWidth-element.clientWidth;
		var randomX = Math.floor(Math.random()*x);
		var randomY = Math.floor(Math.random()*y-100);
		return [randomX,randomY];
		}
	
	//this function calculates a random position substracting the size of the
	//element from the size of the window space 
	//to create a variable and then multiply that variable by math random//




	
	