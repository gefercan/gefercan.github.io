/* JavaScript Document
old script*/
/* 

German Fernandez Cantos,2020
Poem 1-The head
 
the goal: 
the frame, the screen, as a performative space, as  a storytelling scenario,
random, dadaist i aesthetics, but structured by 0 and 1s


	

	/*-------------------COVER---------------------------------------------------------*/
	/*-------------------cover elements------------------------------------------------*/

		var elementosvarios ={
				elementoa: document.getElementById("cover"),
				elementon1 : document.getElementById("enter"),
				elementon2 : document.getElementById("name")
		}		
           
	/*-------------------templates for buttons--------------------------------------*/

		
		
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



	/*-------------------cover-----------------------------------*/

		function cover(x,y,z){
		var e = x;

		e.addEventListener(y, z );
		
		}



	/*--------------------responsive-------------------------------------*/


		function mediaquery(x,y,z){
			var mqList = window.matchMedia(x);
			OrientationChange(mqList);

			mqList.addListener(OrientationChange);

			function OrientationChange(a) {

						if (x.matches) {
							y
						}

						else {
							z
						}
			}
		}

/*-----------------------------------------------------------------------------------------------------------*/

		function OrientationChange2(x,y,z) {

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




	
	