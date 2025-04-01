// JavaScript Document


window.onload= function(){
	//myFunction is the constructor function//
	//and should be written in camelCase//

	//declares all variables calling DOM elements//

	function myFunction() {
//objeto JSON
		var objetos ={
					fondo : document.body,
					cover : document.getElementById ("cover"),
	         		mujer : document.getElementById ("head2"),
					anfora : document.getElementById ("base4"),
					nube: document.getElementById ("base"),
					letters1 : document.getElementById ("a"),//text//
	         		letters2 : document.getElementById ("s"),//text//
	         		letters3 : document.getElementById ("d"),//text//
	         		being1 : document.getElementById ("being1"),
	         		being3 : document.getElementById ("being3"),
	         		poema : document.getElementById ("package1"),
		 			next:document.getElementById("next"),
		 			ll:document.getElementById("box2")
			   }

		//textos object with the phrases to be picked

			var textos= {
					text1:"after the great first click, the buttons are reassigned events but the cache was still there >>>",
			      	text2:"this might be a little surrealist but mainly there are two figures passing around arguments, dialectically >>> ",
			      	text3:"event listeners are removed and changed by new ones.the same with the second and third click. who will witness? >>>",
			      	text4:"The piano sounded slowly in the neighbours house but it was only one string >>>",
			      	text5:"The flowers, always the flowers, surround the statement >>>",
					text6:"Nevertheless, the dust in the video card does not allow you to see clearly >>>",
					text7:"and the fragile petals are numbered and indexed >>>",
					text8:"and the grains of sand area a variable that it is not here, not there, oblique >>>",
					text9: "but believing the night was here, they went back and throw a stone into the sea >>>",
					text10:"the birds look at you, thinking: WTF?, but mainly you ignore them, as well >>>",
					text11:"but you cannot help but scare them, and count them on the sky and forget about it later >>>",
					text12:"look around the flowering tree that is there, just there >>>",
					text13:"is this waiting the time,<br>waiting the time, monologous, monotonous >>>",
					text14:"waiting the time,<br>waiting the time<br> but somehow<br> living (*)",
					text15:"as soon as the machine breaths and huff and puff, there it is",
					text16:"waiting for the sound, the crunch, the elliptical response",
					text17:"waiting<br>|||||,<br>:::::<br> *X*X*X*X<br> living (*)",
					text18:"the absurdity of it all, completely, otherwise, completely logical",
					text19:"but if you found one innocent, might you forgive them all?",
					text20:"there is not such a thing as the reason you were looking for"
					}

		//text box where texts are placed

		var txts = document.getElementById ("texto_box");



/*------------------templates-------------------------------*/
		function clickingHead (x,y){
		x.addEventListener ("click",y);
		}
		//this function add event listeners//

		function mouseHead (x,y){
			x.addEventListener("mouseover",y)
		}
			//this function add event listeners//

		function removebuttton(x,y){
		x.removeEventListener ("click",y);
		}
	//this function remove event listeners//


	//resizing

	 function handleOrientationChange(evt,x1,y1) {
		if (evt.matches) {
			x1;
		}
		else {
			y1;
		}
	}

	function resizeSize(x1,y1){
		evt = window.matchMedia("(max-width: 700px)");
		evt.addListener(handleOrientationChange);
		handleOrientationChange(evt,x1,y1);
	}
	

/*----------------------------------------------------------------------------------------------------*/
		//ROLLOVERS
		function rollovers1(){
						//rollovers
						let h1 = document.getElementById("a"),
						hover = gsap.to(h1, {scale: 0.9, opacity:0.6, color: "darkgray", duration: 1.5, paused: true, ease: "power1.inOut"});
						h1.addEventListener("mouseenter", () => hover.play());
						h1.addEventListener("mouseleave", () => hover.reverse());
			
						let h2 = document.getElementById("d"),
						hover2 = gsap.to(h2, {scale: 0.9, opacity:0.4, color: "black", duration: 1.5, paused: true, ease: "power1.inOut"});
						h2.addEventListener("mouseenter", () => hover2.play());
						h2.addEventListener("mouseleave", () => hover2.reverse());
			
						let h3 = document.getElementById("next"),
						hover3 = gsap.to(h3, {scale:1.1, opacity:0.6, duration: 1.5, paused: true, ease: "power1.inOut"});
						h3.addEventListener("mouseenter", () => hover3.play());
						h3.addEventListener("mouseleave", () => hover3.reverse());
			
						let h4 = document.getElementById("base4"),
						hover4 = gsap.to(h4, {scale:1.7, opacity:0.6, duration: 1.5, paused: true, ease: "power1.inOut"});
						h4.addEventListener("mouseenter", () => hover4.play());
						h4.addEventListener("mouseleave", () => hover4.reverse());
						https://gsap.com/community/forums/topic/24704-hover-effect-at-css-with-gsap/
						console.log("rollvoers activated");
			
		}
		
		//ANIMATIONS

		function anima0(){
			//declaration timeline repetition
			var tl = gsap.timeline({repeat: 4, repeatDelay: 2});
			//nube1
			tl.from("#base3", {x:-500, y:190,opacity: "0.3",duration: 0.5, delay:0})
			//seresalados1
			tl.from("#being1", {x:3259,y:490,opacity: "0.3",duration: 9, delay: 0})
			//letters to the top right
			tl.to("#a", {x:10,y:450,opacity: "0.2",duration: 3, delay:0});
			tl.to("#a", {x:20,y:300,opacity: "0.2",duration: 3, delay:0});
			//nube2
			tl.from("#base", {x:-500, y:100,opacity: "0.5",duration: 1, delay:0})
			//nube1
			tl.to("#base3", {x:2459, y:190,opacity: "0.3",duration: 9, delay:0.1})
			//nube2
			tl.to("#base", {x:2459, y:390,opacity: "0.5",duration: 9, delay:0.1})
			//seresalados2
			tl.from("#being3", {x:-1259, y:990,opacity: "0.3",duration: 1, delay:0.1})
			tl.to("#being3", {x:3259, y:890, opacity: "0.3",duration: 9, delay: 0.1})
			
			console.log("anima0");
		}

		function anima1(){
			//declaration timeline
			var tl = gsap.timeline({repeat: 2, repeatDelay: 0});
			
			//cratera/flor
			tl.from("#base4", {x:20,y:200,opacity: "0.8",duration: 1, delay: 0.1})
			tl.to("#base4", {x:300,y:50,opacity: "1",duration: 1, delay: 0.1})
			tl.to("#base4", {x:280,y:350,opacity: "0.3",duration: 1, delay: 0.1})
			tl.to("#base4", {x:180,y:50,opacity: "1",duration: 1, delay:0.1});
			tl.to("#base4", {opacity: "1",duration: 0.3, delay:0.1});
			tl.to("#base4", {opacity: "0.3",duration: 0.3, delay:0.1});
			tl.to("#base4", {opacity: "1",duration: 0.3, delay:0.1});
			tl.to("#base4", {opacity: "0.3",duration: 0.3, delay:0.1});
			tl.to("#base4", {x:20,y:200,opacity: "1",duration: 0.3, delay:0.1});
			
			console.log("anima1");
		}


		function anima2(){
			//declaration timeline
			var tl = gsap.timeline();

			//flower
			tl.to(".flower", {x:180,y:50,opacity: "0.3",duration: 1, delay: 0.1})
						
			tl.to("#base4", {x:-259, y:200,opacity: "0.3",duration: 1, delay: 0})
			tl.to("#base4", {x:159, y:390,opacity: "1",duration: 1, delay: 0.1})
			tl.to("#base4", {x:59, y:300,opacity: "0.3",duration: 1, delay: 0.1})
			tl.to("#base4", {x:89, y:200,opacity: "1",duration: 1, delay:0.1});
			
			console.log("anima2");
		}

		function anima3(){
			var tl = gsap.timeline({repeat:3, repeatDelay: 0.1});
	
			//opacidades
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 2})
			tl.to("#base4", {opacity: "1",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "1",duration: 1, delay:0.1})
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "1",duration: 1, delay:0.1});
			tl.to("#being1", {opacity: "1",duration: 1, delay:0.1})
			tl.to("#being3", {opacity: "1",duration: 1, delay:0.1});
			console.log("anima3");

		}

		function anima4(){
			var tl = gsap.timeline();

			//flower
			tl.from(".flower", {x:180,y:-250,opacity: "0.3",duration: 0.3, delay: 0})
			tl.to(".flower", {x:-180,y:-650,opacity: "0.5",duration: 1, delay: 0});
			tl.to(".flower", {x:2299,y:450,opacity: "0.3",duration: 0.5, delay: 0});
			console.log("anima4");
		}

		function anima5(){
			var tl = gsap.timeline();
			tl.to("#a", {x:10,y:450,opacity: "0.2",duration: 4, delay:0});
			tl.to("#a", {x:20,y:400,opacity: "0.2",duration: 1, delay:0});


			console.log("anima5");
		}

		//MENU
		function menu(){
			var tl = gsap.timeline();
			tl.from("#package1", {x:-9000,opacity: "0",duration: 1, delay:0});
			tl.to("#package1", {x:100, opacity: "0.9",duration:0.1, delay:0});
			objetos.poema.style.marginLeft = ("0px");
			clickingHead(objetos.next,hidemenu);
			removebuttton(objetos.next,menu);
			console.log("menu");
		}

		function hidemenu(){
			var tl = gsap.timeline();
			tl.from("#package1", {x:100,opacity: "0.9",duration: 0.1, delay:0});
			tl.to("#package1", {x:-9000,opacity: "0",duration: 1, delay:0});
			//objetos.poema.style.marginLeft = ("-9000px");
	
			clickingHead(objetos.next,menu);
			removebuttton(objetos.next,hidemenu);
		}

		//ACTIVATIONS
		// hide the cover
		function hide1(){
						//local variables
				
						objetos.cover.style.display = ("none");
						txts.innerHTML=textos.text10;
					
						objetos.letters3.innerHTML="in the end we could be wrong, however well intentioned, but the words and the objects could be present, the birds stay there"+" "+textos.text8;

						objetos.letters1.style.display = ("none");
						objetos.letters2.style.display = ("none");
						objetos.letters3.style.display = ("block");
						objetos.mujer.style.display="none";
						

						objetos.letters3.style.opacity = ("0.3");
						setTimeout(function(){ objetos.letters3.innerHTML=textos.text1+textos.text18; }, 3000);
						setTimeout(function(){ objetos.letters3.innerHTML=textos.text9+textos.text17; }, 6000);
						setTimeout(function(){ txts.innerHTML=textos.text2; }, 1500);
						
						//callback functions
						fallingFlowers();
						anima1();
						rollovers1();

						removebuttton(objetos.anfora,hide1);
						clickingHead (objetos.anfora,hide2);

						clickingHead (objetos.next,menu);

						removebuttton(objetos.letters3,hide1);
						clickingHead (objetos.letters3,hide2);

						clickingHead (txts,hide2);
						clickingHead (objetos.nube,hide2);

						console.log("hide1");
				}


		//first moment
		function hide2(){
						//local variables
						
						txts.innerHTML= "the awakening of the adolescence, sounds like a morning " +textos.text11;
						setTimeout(function(){ txts.innerHTML="verbiloquam, mostly: "+textos.text4; },2500);
						setTimeout(function(){ txts.innerHTML="but, I think,ergo I regret: "+textos.text3; },5000);
						
						objetos.letters1.style.display=("block");
						objetos.letters2.style.display = ("none");
						objetos.letters3.style.display = ("block");
						objetos.letters1.innerHTML="but there is some emotion" + textos.text6;
						setTimeout(function(){ objetos.letters1.innerHTML=textos.text12; }, 3900);
						setTimeout(function(){ objetos.letters2.innerHTML=textos.text3; }, 1900);
						objetos.letters3.innerHTML="nowhere is still available the signal or the sound, " + textos.text7;
						setTimeout(function(){ objetos.letters3.innerHTML=textos.text16 + "" + textos.text15; },2500);
						
				
						objetos.anfora.style.display="block";
						objetos.mujer.style.display="none";
						
						objetos.fondo.style.backgroundColor=("magenta");

						//callback functions
						anima2();
						fallingFlowers();

						removebuttton(objetos.anfora,hide2);
						clickingHead (objetos.anfora,hide3);

						removebuttton(objetos.letters3,hide2);
						clickingHead (objetos.letters3,hide3);

						removebuttton(txts,hide2);
						clickingHead (txts,hide3);

						
						console.log("hide2");
		}



		function hide3(){
		
						// objetos.letters2.style.display=("block");

						objetos.anfora.style.display="none";
						objetos.mujer.style.display="block";
					

						objetos.letters1.innerHTML=textos.text10; 	
						objetos.letters2.innerHTML=textos.text2;
						setTimeout(function(){ objetos.letters1.innerHTML=textos.text4; }, 2000);

						objetos.letters3.innerHTML=textos.text4;
						setTimeout(function(){ objetos.letters3.innerHTML=textos.text5; }, 2000);

						txts.innerHTML=textos.text6;
						setTimeout(function(){ txts.innerHTML=textos.text7; }, 2000);

					

						objetos.fondo.style.backgroundImage=("linear-gradient(rgba(15,190,200,1), rgba(255,0,0,0)");
						objetos.fondo.style.backgroundColor=("blue");

						anima3();
						fallingFlowers();
						clickingHead (objetos.mujer,hide4);	

						console.log("hide3");
		}


		function hide4(){

						txts.innerHTML=textos.text14;
					
						objetos.mujer.style.display="block";
						objetos.letters3.innerHTML= textos.text4;
					/* 	objetos.poema.style.display="block";
						objetos.poema.style.zIndex="-10"; */

						objetos.fondo.style.backgroundImage=("linear-gradient(rgba(155,120,20,1), rgba(255,0,0,0)");
						objetos.fondo.style.backgroundColor=("yellow");
						
						anima4();
						fallingFlowers()
						removebuttton(objetos.mujer,hide4);
						clickingHead (objetos.mujer,hide5);

						console.log("hide4");
		}

		function hide5(){
						
						
						//objetos.fondo.style.backgroundImage="url('https://2.bp.blogspot.com/-cN9MC34hsPs/U7_RMjq1_II/AAAAAAAABUs/3hN-amdf670/s1600/2erta.jpg')";
						objetos.fondo.style.backgroundColor=("magenta");
						objetos.fondo.style.backgroundImage=("linear-gradient(red, rgba(255,0,0,0)");
						objetos.letters3.innerHTML=textos.text11;
						objetos.mujer.style.display="block";
						
						setTimeout(function(){ objetos.letters2.innerHTML=textos.text13+textos.text1; }, 2500);
						setTimeout(function(){ objetos.letters2.innerHTML=textos.text120+textos.text12; },5000);
						anima5();
						fallingFlowers()
						resizeSize(anima1,anima2);
						removebuttton(objetos.mujer,hide5);
						clickingHead (objetos.mujer,hide2);

						console.log("hide5");
		}


	/*--------------------cover-----------------------------*/

	function cover(){
			//button
			var ex1 = document.getElementById("enter");
			//initial state after clicking enter
			ex1.addEventListener("click", hide1 );
			anima0();
		}


	/*-----------------rotating flowers--------------------------------*/

	function fallingFlowers(){

		var a1 = document.getElementById("flower1");
		var s2 = document.createElement("img");
		var s1 = document.createElement("div");
		var s3 = document.getElementById("a");

		s2.src = "https://1.bp.blogspot.com/-IyK8LLoCZWo/XLIBQIXivXI/AAAAAAAAWts/TEvebt2zR3gliwp1SpTKAgQXAsyui0HkgCLcBGAs/s1600/floating_flower.png";

		/*-----create flower--------------*/
		document.body.appendChild(s1);
		s1.appendChild(s2);
		s1.classList.add("flower");
		console.log("nueva flor");

		a1.style.top = Math.random(window.InnerHeight/32)+ "em";
		a1.style.left = Math.random(window.InnerWidth/22)+ "em";
		a1.style.width = "5%";
		a1.style.zIndex = "20";

		s1.style.top = Math.random(window.InnerWidth/122) + "em";
		s1.style.left = Math.random(window.InnerWidth/12) + "em";
		s1.style.width = "5%";
		s1.style.float = "left";
		/*------big text at the upper corner----------------*/
		s3.innerHTML= textos.text6;
		s3.style.fontSize = (3*4) + "em";
		s3.style.padding =" 3em";
		s3.style.color="white";
		s3.style.opacity= "0.5";
		s3.style.top=s3.style.top-100;
		
}
//check this https://gsap.com/community/forums/topic/25254-increasing-timeline-value-on-mouse-move/



			cover();

		}

 myFunction();
}
