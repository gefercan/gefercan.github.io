// JavaScript Document


window.onload= function(){
	//myFunction is the constructor function//
	//and should be written in camelCase//

	//declares all variables calling DOM elements//

	function myFunction() {
//objeto JSON
		var objetos ={
					fondo: document.body,
					cover : document.getElementById ("cover"),
	         		mujer: document.getElementById ("head2"),
					anfora: document.getElementById ("base4"),
					nube: document.getElementById ("base"),
					letters1 : document.getElementById ("a"),
	         		letters2 : document.getElementById ("s"),//text//
	         		letters3 : document.getElementById ("d"),//text//
	         		being1 : document.getElementById ("being1"),
	         		being3 : document.getElementById ("being3"),
	         		poema: document.getElementById ("package"),
		 			l:document.getElementById("box1"),
		 			ll:document.getElementById("box2")
			   }

		//textos object with the phrases to be picked

			var textos= {
					text1:"after the great first click, the buttons are reassigned events but the cache was still there",
			      	text2:"this might be a little surrealist but mainly there are two figures passing around arguments",
			      	text3:"event listeners are removed and changed by new ones.the same with the second and third click. who will witness?",
			      	text4:"The piano sounded slowly in the neighbours house but it was only one string",
			      	text5:"The flowers, always the flowers, surround the statement",
					text6:"Nevertheless, the dust in the video card does not allow you to see clearly",
					text7:"and the fragile petals are numbered and indexed",
					text8:"and the grains of sand area a variable that it is not here, not there, oblique",
					text9: "but believing the night was here, they went back and throw a stone into the sea",
					text10:"the birds look at you, thinking: WTF?, but mainly you ignore them, as well",
					text11:"but you cannot help but scare them, and count them on the sky and forget about it later",
					text12:"look around the flowering tree that is there, just there",
					text13:"is this waiting the time,<br>waiting the time, monologous, monotonous",
					text14:"waiting the time,<br>waiting the time<br> but somehow<br> living (*)",
					text15:"waiting<br>|||||,<br>:::::<br> *X*X*X*X<br> living (*)"
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
	

/*-------------------------------------------------*/

		//animations
		function anima0(){
			//declaration timeline
			var tl = gsap.timeline({repeat: 4, repeatDelay: 2});
			//nube
			tl.from("#base3", {x:-500, y:190,opacity: "1",duration: 0.5, delay:0})
			tl.from("#base", {x:-500, y:100,opacity: "1",duration: 1, delay:0})
			
			tl.to("#base3", {x:2459, y:190,opacity: "1",duration: 9, delay:0.1})

		
			tl.to("#base", {x:2459, y:390,opacity: "1",duration: 9, delay:0.1})
			
			console.log("anima0");
		}

		function anima1(){
			//declaration timeline
			var tl = gsap.timeline({repeat: 0, repeatDelay: 0});
			
			//cratera/flor
			gsap.from("#base4", {x:window.InnerWidth/2,y:-window.InnerHeight/2,opacity: "1", duration: 1, delay: 0.1});
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 2})
			tl.to("#base4", {opacity: "1",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "1",duration: 1, delay:0.1});

			console.log("anima1");
		}


		function anima2(){
			//declaration timeline
			var tl = gsap.timeline();

			gsap.from("#base4", {y:-2250,opacity: "1", duration: 1, delay: 0.1});
			gsap.from("#base3", {y:1390,scale:0,opacity: "0.5", duration: 3, delay: 1.2});
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 2})
			tl.to("#base4", {opacity: "1",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "1",duration: 1, delay:0.1});

			console.log("anima2");
		}

		function anima3(){
			var tl = gsap.timeline();
			//nube
			tl.from("#base3", {x:-500, y:190,opacity: "1",duration: 0.1, delay:0})
			tl.to("#base3", {x:2459, y:190,opacity: "1",duration: 2, delay:0.1})

			//seresalados1
			tl.from("#being1", {x:259,y:890,opacity: "0.1",duration: 1, delay: 0.1})
			tl.to("#being1", {opacity: "0.3",duration: 1, delay: 0.1})

			//seresalados2
			tl.from("#being3", {x:-259, y:890,opacity: "0.1",duration: 1, delay:0.1})
			tl.to("#being3", {opacity: "0.3",duration: 1, delay: 0.1})

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
			
;
			console.log("700px");
		}

		function anima5(){
			var tl = gsap.timeline();


			console.log("3700px");
		}


		//ACTIVATIONS
		// hide the cover
		function hide1(){
						//local variables
				
						objetos.cover.style.display = ("none");
						txts.innerHTML=textos.text10;
					
						objetos.letters3.innerHTML="in the end we could be wrong, however well intentioned, but the words and the objects could be present, the birds stay there"+""+textos.text8;
						
						objetos.letters1.style.display = ("none");
						objetos.letters2.style.display = ("none");
						objetos.letters3.style.display = ("block");
						objetos.letters3.style.opacity = ("0.3");

						function textChange1(){
						
						}
						//callback functions
						fallingFlowers();
						anima1();
						removebuttton(objetos.anfora,hide1);
						clickingHead (objetos.anfora,hide2);
						clickingHead (objetos.nube,hide3);
						clickingHead (objetos.letters3,hide2);
						clickingHead (txts,hide3);


						console.log("hide1");
				}


		//first moment
		function hide2(){
						//local variables
						
						objetos.letters1.style.display=("block");
						objetos.letters1.innerHTML=textos.text6;
						txts.innerHTML=textos.text11;
						objetos.being1.style.display="block";
						objetos.being3.style.display="block";
						objetos.anfora.style.display="block";
						objetos.mujer.style.display="none";
						objetos.letters3.innerHTML="nowhere is still available the signal or the sound, "+textos.text7 ;
						objetos.fondo.style.backgroundColor=("magenta");

						//callback functions
						fallingFlowers()
						anima2();
						removebuttton(objetos.anfora,hide2);
						clickingHead (objetos.anfora,hide3);
						clickingHead (objetos.letters3,hide3);
						
						console.log("hide2");
		}



		function hide3(){
		
						objetos.letters2.style.display=("block");
						objetos.letters1.innerHTML=textos.text10;
						objetos.letters2.innerHTML=textos.text2;
						objetos.letters3.innerHTML=textos.text5;
						txts.innerHTML=textos.text7;
						
						objetos.anfora.style.display="none";
						objetos.mujer.style.display="block";
						
						objetos.poema.style.display="block";
						objetos.poema.style.zIndex="-10";

						objetos.fondo.style.backgroundColor=("blue");

						anima3();
						fallingFlowers();
						clickingHead (mujer,hide4);	

						console.log("hide3");
		}


		function hide4(){
						var pajaro1 = document.getElementById("being1");
						var pajaro2 = document.getElementById("being3");
						//var video = document.getElementById("base");
						var letrero = document.getElementById("texto_box");
						var mujer = document.getElementById("head2");
						var letters = document.getElementById("s");

						txts.innerHTML=textos.text2;
						setTimeout(function(){ letrero.innerHTML=textos.text11; }, 2000);
						pajaro1.style.display="none";
						pajaro2.style.display="none";
						//video.style.display="none";
						letters.innerHTML= textos.text4;
						
						anima4();
						fallingFlowers()
						removebuttton(mujer,hide4);
						clickingHead (mujer,hide5);

						console.log("hide4");
		}

		function hide5(){
						var fondos = document.body;
						var letters = document.getElementById("s");
						
						fondos.style.backgroundImage="url('https://2.bp.blogspot.com/-cN9MC34hsPs/U7_RMjq1_II/AAAAAAAABUs/3hN-amdf670/s1600/2erta.jpg')";
						letters.innerHTML=textos.text11;

						anima5();
						fallingFlowers()
						resizeSize(anima1,anima2);
						removebuttton(mujer,hide5);
						clickingHead (mujer,hide2);

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
		//var a1b = document.getElementById("film");
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
		resizeSize(anima4,anima5);

		}




			cover();

		}






 myFunction();
}
