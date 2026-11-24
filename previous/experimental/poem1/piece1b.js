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

	

/*--------------------------intro_animations-----------------------------------------------------*/	

		function animation(){
				var tl = gsap.timeline();
				tl.to("#circulo1", {fill: "#ff0000",transformOrigin:"50% 50%", opacity: "0.3", scale:0.3, duration: 1, delay: 0.1})
				tl.to("#circulo1a", {fill: "#ff0000",transformOrigin:"50% 50%", opacity: "0.3", scale:0.3, duration: 1, delay: 0.1})
				tl.to("#circulo1b", {fill: "#ff00ff",transformOrigin:"50% 50%", opacity: "0.3", scale:0.3, duration: 1, delay: 0.1})
				tl.to("#film", {opacity: "0.5",scale:1, duration: 2, delay: 0.1});
				gsap.to("#circulo1a", {fill: "#ff0000", opacity: "1", scale:1, duration: 1,repeat:3, delay: 0.1})
				gsap.to("#circulo1b", {fill: "#ff0000", opacity: "1", scale:1, duration: 1,repeat:3, delay: 0.1})
		}
	
		function animation2(){
				gsap.from("#head2", {y:350, opacity: "0.5", duration: 1, delay: 0.1})
				gsap.from("#head1", {y:250,opacity: "0.5", duration: 1, delay: 0.1})
				gsap.from("#uno", {x:-250,opacity: "0.5", duration: 1, delay: 0.1})
		}
		
		function animation3(){
			    gsap.to("#film", {opacity: "0.8",scale:1});
		}

		function animation3a(){
				gsap.to("#vectorial_box1a", {y:-150, opacity: "0.5", duration: 1, delay: 0.1});
				gsap.to("#head2", {y:-50, opacity: "0.5", duration: 1, delay: 0.1});
		}

        /*animation of movingvideo1*/	
		function animation4(){
				var tl = gsap.timeline();
		        tl.from("#film", {opacity: "0.8",scale:0.2, duration: 1, delay: 0.1})
		        tl.to("#film", {opacity: "1",scale:1, delay: 0});
        }

        /*animation of movingvideo2*/	
        function animation5(){
			    gsap.to("#vectorial_box1b", {y:350,opacity: "1",scale:1, delay: 0.1});
		        gsap.to("#vectorial_box1a", {y:250, opacity: "0.1", duration: 1, delay: 0.1});
		        gsap.to("#head2", {y:-50, opacity: "0.5", duration: 1, delay: 0.1});
		 }
		
		/*animation of movingvideo3*/	
		function animation6(){
				gsap.to("#vectorial_box1b", {y:150,opacity: "1",scale:1});
				gsap.to("#vectorial_box1a", {y:100, opacity: "0.5", duration: 1, delay: 0.1});
				gsap.to("#head1", {y:180,opacity: "1",scale:1, delay: 0.1});
				gsap.to("#head2", {y:150,opacity: "1",scale:1, delay: 0.1});
		
		}



		function ocultarymostrar1(){
	      		elementosvarios.elementoa.style.display = ("none");
				elementosvarios.elementob.style.display = ("none");
				elementosvarios.elementoc.style.display = ("none");
				elementosvarios.elementod.style.display = ("none");
                elementosvarios.elementoe.style.display = ("none");
                elementosvarios.elementof.style.display = ("none");
                elementosvarios.elementog.style.display = ("none");
                elementosvarios.elementoh.style.display = ("none");
                elementosvarios.elementoi.style.display = ("none");
                elementosvarios.elementoj.style.display = ("none");
                elementosvarios.elementok.style.display = ("none");
		
				elementosvarios.elementol.style.top = ("45%");
				elementosvarios.elementol.style.left = ("-11%");
				elementosvarios.elementol.style.width = ("10%");
				elementosvarios.elementol.style.height = ("10%"); 
		}

		function ocultarymostrar2(){
				elementosvarios.elementob.style.display = ("none");
				elementosvarios.elementoc.style.display = ("none");
				elementosvarios.elementod.style.display = ("none");
                elementosvarios.elementoe.style.display = ("none");
                elementosvarios.elementof.style.display = ("none");
                elementosvarios.elementog.style.display = ("none");
                elementosvarios.elementoh.style.display = ("none");
                elementosvarios.elementoi.style.display = ("block");
                elementosvarios.elementoj.style.display = ("none");
                elementosvarios.elementok.style.display = ("none");
		}
		
		function ocultarymostrar3(){
				elementosvarios.elementob.style.display = ("block");
				elementosvarios.elementoc.style.display = ("block");
				elementosvarios.elementod.style.display = ("block");
				elementosvarios.elementoe.style.display = ("block");
				elementosvarios.elementof.style.display = ("block");
		}

		function movingvideo1_instruction1(){
				var ancho =1;
				console.log("y this 700 it seems, oo");
						
				elementosvarios.elementok.style.display = ("block");
				elementosvarios.elementok.style.opacity = 1;
				elementosvarios.elementok.src= ("video/escena1.mp4");
				elementosvarios.elementok.currentTime = 3;
				elementosvarios.elementok.play();
				elementosvarios.elementok.style.opacity = 1;
			
				elementosvarios.elementod.style.top=("20%");
				elementosvarios.elementod.style.left=("10%"); 
				elementosvarios.elementod.innerHTML= ((1+2)*3)+ " " + "una<br> cerca <br>desarmada <br> en parte," + "rodeando<br> el terreno" + Math.random((2*2)/3);
				elementosvarios.elementod.style.fontSize=("1.1em");
			
				elementosvarios.elementok1.style.display = ("none");
				elementosvarios.elementok2.style.display = ("none");
			
		}


		function movingvideo1_instruction2(){
			
				elementosvarios.elementok.style.display = ("block");
				elementosvarios.elementok.style.opacity = 1;
				elementosvarios.elementok.src= ("video/escena1.mp4");
				elementosvarios.elementok.currentTime = 3;
				elementosvarios.elementok.play();
				elementosvarios.elementok.style.opacity = 1;
			
				elementosvarios.elementod.style.top=("30%");
				elementosvarios.elementod.style.left=("30%"); 
				elementosvarios.elementod.innerHTML= ((1+2)*3)+ " " + "una<br> cerca <br>desarmada <br> en parte," + "rodeando<br> el terreno<br>" + Math.random((2*2)/3)+"<br>" + Date;
				elementosvarios.elementod.style.fontSize=("3.1em");
				elementosvarios.elementod.style.fontWeight=("bold");
			
	            elementosvarios.elementok1.style.display = ("none");
				elementosvarios.elementok2.style.display = ("none");
				
				console.log("y this more tahn 700000s, it seems, too");
		}

		function movingvideo2_instruction1(){
					  
		       
				elementosvarios.elementok.src= ("video/escena2.mp4");
				elementosvarios.elementok.currentTime = 8;
				elementosvarios.elementok.play();
				elementosvarios.elementok.style.opacity=1;
			
				elementosvarios.elementod.innerHTML="look around <br> the flowering tree <br> that is there,<br> just there";
				elementosvarios.elementod.style.top= "5em"
				elementosvarios.elementod.style.left= "2.5em";
				elementosvarios.elementod.style.wordWrap= "break-all";
				elementosvarios.elementod.style.fontSize= "220%";
			
				elementosvarios.elementol.style.left= Math.random (238)* 100 +"px";
			
				elementosvarios.elementoe.innerHTML=("derailed");
				elementosvarios.elementoe.style.left= ("0.5%");
				elementosvarios.elementoe.style.fontSize= "2em";
				elementosvarios.elementoe.style.wordWrap= "break-all";
			
				elementosvarios.elementof.innerHTML=("videomoment");
				elementosvarios.elementof.style.left= "2%";
				elementosvarios.elementof.style.fontSize= "2em";
				elementosvarios.elementof.style.fontStyle= "italic";
			
				elementosvarios.elementoh.innerHTML=("videomoment");
				elementosvarios.elementoh.style.left= "3%";
				elementosvarios.elementoh.style.fontSize= "2em";
				elementosvarios.elementon.style.opacity=0.1;
		}

        function movingvideo2_instruction2(){
					
				elementosvarios.elementok.src= ("video/escena2.mp4");
				elementosvarios.elementok.currentTime = 8;
				elementosvarios.elementok.play();
				elementosvarios.elementok.style.opacity=1;
			
				elementosvarios.elementod.innerHTML="look around <br> the flowering tree <br> that is there,<br> just there";
				elementosvarios.elementod.style.top= "8em"
				elementosvarios.elementod.style.left= "12.5em";
				elementosvarios.elementod.style.wordWrap= "break-all";
				elementosvarios.elementod.style.fontSize= "290%";
				elementosvarios.elementod.style.fontWeight= "bold";
			
				elementosvarios.elementol.style.left= Math.random (238)* 100 +"px";
			
				elementosvarios.elementoe.innerHTML=("derailed");
				elementosvarios.elementoe.style.left= ("55.5%");
				elementosvarios.elementoe.style.fontSize= "8em";
			
				elementosvarios.elementof.innerHTML=("videomoment");
				elementosvarios.elementof.style.left= "32%";
				elementosvarios.elementof.style.fontSize= "2em";
				elementosvarios.elementof.style.fontStyle= "italic";
			
				elementosvarios.elementoh.innerHTML=("videomoment");
				elementosvarios.elementoh.style.left= "3%";
				elementosvarios.elementoh.style.fontSize= "2em";
				elementosvarios.elementon.style.opacity=0.1;
				}

		function movingvideo3_instruction1(){
				elementosvarios.elementok.src= ("video/escenaTV.mp4");
				elementosvarios.elementok.style.opacity="1";
				elementosvarios.elementok.play();
				elementosvarios.elementok1.style.display="none";
				elementosvarios.elementok2.style.display="none";
						
				elementosvarios.elementod.innerHTML=elementosvarios.elementok.currentTime;
				elementosvarios.elementod.innerHTML="rosebud 4ever";
				elementosvarios.elementod.style.top="25%";
				elementosvarios.elementod.style.fontSize="245%";
				elementosvarios.elementod.style.left="25%";
				elementosvarios.elementod.style.color="white";
				elementosvarios.elementod.style.fontWeight="900";
				elementosvarios.elementod.style.wordWrap="break-all";
				elementosvarios.elementoe.style.top="25%";
				elementosvarios.elementoe.style.left="20%";
			
/*				x4.style.opacity="0.3";
				x5.style.display="none";*/

				}

		function movingvideo3_instruction2(){
						
				elementosvarios.elementok.src= ("video/escenaTV.mp4");
				elementosvarios.elementok.currentTime = 2;
				elementosvarios.elementok.style.opacity="1";
				elementosvarios.elementok.play();
				
				elementosvarios.elementok1.style.display="none";
				elementosvarios.elementok2.style.display="none";
				
				elementosvarios.elementom.x="85%";
			
				elementosvarios.elementod.innerHTML=elementosvarios.elementok.currentTime;
				elementosvarios.elementoe.innerHTML="rosebud 4ever";
				elementosvarios.elementoe.style.top="25%";
				elementosvarios.elementoe.style.fontSize="245%";
				elementosvarios.elementoe.style.left="25%";
				elementosvarios.elementoe.style.color="white";
				elementosvarios.elementoe.style.fontWeight="900";
				elementosvarios.elementoe.style.wordWrap="break-all";
				elementosvarios.elementoh.style.top="25%";
				elementosvarios.elementod.style.left="20%";
				elementosvarios.elementon1.style.opacity="0.3";
				elementosvarios.elementon.style.display="none";
				}

		function movingvideo4_instruction1(){
				elementosvarios.elementok.play();
				elementosvarios.elementok.src= ("video/falda1.mp4");
				elementosvarios.elementok.style.opacity = "1";
                elementosvarios.elementok.style.display="block";
				elementosvarios.elementok.style.zIndex="-33";
                elementosvarios.elementok.style.top="70%";
				elementosvarios.elementok.style.left="-10%";
			
				elementosvarios.elementod.innerHTML=x.currentTime + (2*3);
				elementosvarios.elementod.style.color="blue";
				elementosvarios.elementod.innerHTML="the little <br> mouse,<br>  sounding <br> like a cat";
				elementosvarios.elementod.style.top="18%";
				elementosvarios.elementod.style.left="12%";
				elementosvarios.elementod.style.fontSize="2em";
				elementosvarios.elementod.style.wordWrap="break-all";
			
				elementosvarios.elementoe.display="block";
				elementosvarios.elementoe.style.top="48%";
				elementosvarios.elementoe.style.left="9%";
				elementosvarios.elementoe.style.wordWrap="break-all";
				elementosvarios.elementoe.innerHTML="over the <br> clouds, the <br>infinite rain";
				elementosvarios.elementoe.style.fontSize="2em";
				elementosvarios.elementoe.style.fontWeight="100";
				elementosvarios.elementoe.style.padding="2em";
			
				elementosvarios.elementof.display="block";
				elementosvarios.elementof.innerHTML="rain, rain";
				elementosvarios.elementof.style.top= x.currentTime + 23 + "px";
				elementosvarios.elementof.style.opacity="0.1";
			
				elementosvarios.elementok1.style.display="none";
				elementosvarios.elementok2.style.display="none";
		}

		function movingvideo4_instruction2(){
				elementosvarios.elementok.play();
				elementosvarios.elementok.style.opacity = "1";
                elementosvarios.elementok.style.display="block";
                elementosvarios.elementok.style.top="8%";
				elementosvarios.elementok.style.left="62%";
			
				elementosvarios.elementod.innerHTML=elementosvarios.elementok.currentTime + (2*3);
				elementosvarios.elementod.style.color="blue";
			
				elementosvarios.elementoe.innerHTML="solo <br> un tiempo<br> en su rincon";
				elementosvarios.elementoe.style.top="18%";
				elementosvarios.elementoe.style.left="12%";
				elementosvarios.elementoe.style.fontSize="2em";
				elementosvarios.elementoe.style.wordWrap="break-all";
			
				elementosvarios.elementof.style.top="48%";
				elementosvarios.elementof.style.left="9%";
				elementosvarios.elementof.style.wordWrap="break-all";
				elementosvarios.elementof.innerHTML="under <br> the gray shadow";
				elementosvarios.elementof.style.fontSize="2em";
				elementosvarios.elementof.style.fontWeight="100";
				elementosvarios.elementof.style.padding="2em";
			
				x5.innerHTML="rain, rain";
				x5.style.top= elementosvarios.elementok.currentTime + 23 + "px";
				x5.style.opacity="0.1";
				x51.style.display="none";
				x52.style.display="none";
				
		}
		function movingvideo5_instruction1(){
				elementosvarios.elementok.play();
				elementosvarios.elementok.style.display = "block";
				elementosvarios.elementok.style.left = "0%";
				elementosvarios.elementok.style.top = "0%";
				elementosvarios.elementok.width = "90%";
				elementosvarios.elementok.style.zIndex = "-5";
				elementosvarios.elementok.style.border = "none";
				elementosvarios.elementok.style.opacity = "1";
				elementosvarios.elementod.innerHTML=x.currentTime + (2*3);
				elementosvarios.elementod.style.color="blue";
				elementosvarios.elementod.innerHTML="solo <br> un tiempo<br> en su rincon";
				elementosvarios.elementod.style.top="18%";
				elementosvarios.elementod.style.left="12%";
				elementosvarios.elementod.style.fontSize="2em";
				elementosvarios.elementod.style.wordWrap="break-all";
				elementosvarios.elementoe.style.top="48%";
				elementosvarios.elementoe.style.left="9%";
				elementosvarios.elementoe.style.wordWrap="break-all";
				elementosvarios.elementoe.innerHTML="under <br> the gray shadow";
				elementosvarios.elementoe.style.fontSize="2em";
				elementosvarios.elementoe.style.fontWeight="100";
				elementosvarios.elementoe.style.padding="2em";
					x5.innerHTML="rain, rain";
					x5.style.top= x.currentTime + 23 + "px";
					x5.style.opacity="0.1";
					x51.style.display="none";
					x52.style.display="none";
		}


		function movingvideo5_instruction2(){
					x.play();
                    x.style.display = "block";
					x.style.opacity = "1";
                    x.style.zIndex = "-13";
                    x.style.left="5%";
                    x.style.top="10%";
                    x.loop="true";
					x1.innerHTML=x.currentTime + (2*3);
					x1.style.color="blue";
					x2.innerHTML="solo <br> un tiempo<br> en su rincon";
					x2.style.top="38%";
					x2.style.left="32%";
					x2.style.fontSize="2em";
					x2.style.wordWrap="break-all";
					x3.style.top="48%";
					x3.style.left="29%";
					x3.style.wordWrap="break-all";
					x3.innerHTML="under <br> the gray shadow";
					x3.style.fontSize="2em";
					x3.style.fontWeight="100";
					x3.style.padding="2em";
					x5.innerHTML="rain, rain";
					x5.style.top= x.currentTime + 23 + "px";
					x5.style.opacity="0.1";
					x51.style.display="none";
                    x52.style.display="none";
				
		}
	/*---------------------------------------------*/
		

        function Person1(){
		       	var a=document.createElement("div");
		       	document.getElementById("front").appendChild(a);
		       	a.src=(".//images/floating_head.png");
		       	a.innerHTML=("xxx");
		       	a.style.padding=("5%");
		       	a.style.position=("fixed");
		       	a.style.zIndex=("12");
		
		       	a.style.left="50%";
		       	a.style.top ="50%";
		
	          }

	/*---------------------------------------------*/

       function rainingFlowers(){
		
				
		      function fallingFlowers(){
			    var canvas01 = document.getElementById("canvas1");
		
			
                if(canvas01.getContext){
				var ctx=canvas01.getContext('2d');
					var img= new Image();
				img.onload=function(){
					
				var mqList = window.matchMedia("(max-width: 700px)");
					handleOrientationChange(mqList);

		            mqList.addListener(handleOrientationChange);

		            function handleOrientationChange(evt) {
					     if (evt.matches) {
							 ctx.drawImage(img, Math.random()*170,Math.random()*180,canvas01.width/15,canvas01.height/18);
						 }
						 else{
							 ctx.drawImage(img, Math.random()*270,Math.random()*270,canvas01.width/11,canvas01.width/11);
						 }}

					console.log("nueva flor");
				};
				
				img.src = "https://1.bp.blogspot.com/-IyK8LLoCZWo/XLIBQIXivXI/AAAAAAAAWts/TEvebt2zR3gliwp1SpTKAgQXAsyui0HkgCLcBGAs/s1600/floating_flower.png";
				}
				else {
				console.log("noooo");
				}
		
			}
		
		
		function invoke (f,start,interval,end ){
			if (!start) {start =0;}
			if (arguments.length <= 2)
			{setTimeout(f,start);}
			else{
				setTimeout (repeat,start);
				function repeat(){
							var h = setInterval(f,interval);
							if(end) setTimeout(function() {clearInterval(h);},end);
				}
			}
		}
		
		invoke(fallingFlowers,10,1000,30000);
		
	}

	/*-------------------canary media query--------------------------------------------------------------------------------------------*/
	
	//this is another canary for media queries, runs everytime//


	   function mediaquery2(){
			var mqList = window.matchMedia("(max-width: 700px)");
			handleOrientationChange(mqList);

			mqList.addListener(handleOrientationChange);

			function handleOrientationChange(evt) {

						if (evt.matches) {
							var ancho =1;
							console.log("y this 700 it seems, oo");
						}

						else {
							var ancho=2;
							console.log("y this more tahn 800000s, it seems, too");
						}
			}
		}
	
		mediaquery2();


