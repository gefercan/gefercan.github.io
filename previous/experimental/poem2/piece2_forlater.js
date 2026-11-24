/*

German Fernandez Cantos,2020
Poem 2-The body


the plan: 
slowly like in a stage, develop the moments of the piece
a white screen is everything we see at the beginning

moment 1: the flowers and the beings appear, they are the buttons
later the background video appears but with low opacity
later appears the headless man seated over the box

the buttons trigger the different actions, like:
one starts creating flowers randomly
other starts creating random skulls
other move the parallax effect, dissapearing the man and letting the woman appear
other plays a video


after the first click, the buttons are reassigned events
event listeners are removed and changed by new ones.
the same with the second and third click.


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
___________________________________________
this might be a little surrealsit
but mainly there are two figures,
the headless man and the woman portrait
and they organise the narrative

*/

window.onload= function(){

		function cover(){
		var e = document.getElementById("enter");
			
	
			function hide1(){
				var a = document.getElementById("cover");

				a.style.display = ("none");
			}

		
		e.addEventListener("click", hide1 );

		}

		cover();
		
	
	/*--------------ejemplos de JSON-----------------*/
	   	var chaitanya = {
         "firstName" : "Chaitanya",
         "lastName" : "Singh",
         "age" :  "28"
		};
	
	    var students_array= [
         {"name":"John", "age":"23", "city":"Agra"},
         {"name":"Steve", "age":"28", "city":"Delhi"},
         {"name":"Peter", "age":"32", "city":"Chennai"},
         {"name":"Chaitanya", "age":"28", "city":"Bangalore"}
        ]

	    var students2= {"students":[
         {"name":"John", "age":"23", "city":"Agra"},
         {"name":"Steve", "age":"28", "city":"Delhi"},
         {"name":"Peter", "age":"32", "city":"Chennai"},
         {"name":"Chaitanya", "age":"28", "city":"Bangalore"}
        ]}
		
		/*--------------ejemplos de JSON-----------------*/
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
        }

