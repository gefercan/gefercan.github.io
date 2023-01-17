// JavaScript Document


window.onload= function(){
	//myFunction is the constructor function//
	//and should be written in camelCase//

	//declares all variables calling DOM elements//

	function myFunction() {
//objeto JSON
		var objetos ={
					a : document.getElementById ("head1"),
	         		b: document.getElementById ("head2"),
	         		c: document.getElementById ("bird1"),
	         		d : document.getElementById ("flower1"),
	         		e : document.getElementById ("film"),//video//
	         		f : document.getElementById ("a"),//text//
	         		g : document.getElementById ("s"),//text//
	         		h : document.getElementById ("being1"),
	         		i : document.getElementById ("being3"),
	         		j : document.getElementById ("head1"),
	         		k : document.getElementById ("head2"),
		 					l:document.getElementById("box1"),
		 					ll:document.getElementById("box2")
			   }

		//textos object with the phrases to be picked

			var textos= {
							text1:"after the great first click, the buttons are reassigned events",
			      	text2:"this might be a little surrealist but mainly there are two figures",
			      	text3:"event listeners are removed and changed by new ones.the same with the second and third click. who will witness?",
			      	text4:"The piano sounded slowly in the neighbours house",
			      	text5:"The flowers, always the flowers",
							text6:"Nevertheless, the dust",
							text7:"and the fragile petals",
							text8:"and the grains of sand",
							text9: "but believing the night was here, they went back",
							text10:"the birds look at you, thinking: WTF?",
							text11:"but you cannot help but scare them",
							text12:"look around the flowering tree that is there, just there",
							text13:"is this waiting the time,<br>waiting the time",
							text14:"waiting the time,<br>waiting the time<br> but somehow<br> living (*)",
							text15:"waiting<br>|||||,<br>:::::<br> *X*X*X*X<br> living (*)"
					}

		//text box where texts are placed

		var txts = document.getElementById ("texto_box");



/*------------------template-------------------------------*/
	function clickingHead (x,y){
		x.addEventListener ("click",y);
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


	//dissapearHead
    function dissapearHead(z1,z2,z3,z4,z5,z6,x1,x2,x3,x4,x5,x6,x7){
		z1.style.opacity = x1;
		z1.style.bottom = x2;
		z1.innerHTML = x3;
		z2.style.opacity = x4;
		z2.innerHTML = x5;
		z3.innerHTML = x6;
		z4.style.opacity = x7;
		console.log("dissappearhead");
		setInterval(function(){ z5; },z6);
		}

	//movingVideo
	function movingVideo_0(x1,y1,x2,y2,x3,y3,x4,y4,z1){

		x1=y1;
		setTimeout(function(){ x2; }, y2);
		setTimeout(function(){ x3; }, y3);
		setTimeout(function(){ x4; }, y4);
		z1;
		console.log("movingvideo1");
		}

	function stopVideo1(x,y){

		if (x.currentTime === 40){
			x.pause();
			x.opacity=("0");
			y.style.opacity=("0");
			}
		}



		function anima1(){
			var tl = gsap.timeline();
			gsap.from("#base4", {x:window.InnerWidth/2,y:-window.InnerHeight/2,opacity: "1", duration: 1, delay: 0.1});
			gsap.from("#base3", {x:window.InnerWidth/2,y:1990,scale:0,opacity: "0.5", duration: 2, delay: 1});
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 2})
			tl.to("#base4", {opacity: "1",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "1",duration: 1, delay:0.1});
		}


		function anima2(){
			var tl = gsap.timeline();
			gsap.from("#base4", {y:-2250,opacity: "1", duration: 1, delay: 0.1});
			gsap.from("#base3", {y:1390,scale:0,opacity: "0.5", duration: 3, delay: 1.2});
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 2})
			tl.to("#base4", {opacity: "1",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "1",duration: 1, delay:0.1});
		}

		function anima3(){
			var tl = gsap.timeline();
			tl.from("#being1", {x:259,y:890,opacity: "0.1",duration: 1, delay: 0.1})
			tl.from("#being3", {x:-259, y:890,opacity: "0.1",duration: 1, delay:0.1})
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 2})
			tl.to("#base4", {opacity: "1",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "1",duration: 1, delay:0.1})
			tl.to("#base4", {opacity: "0.3",duration: 1, delay: 0.1})
			tl.to("#base4", {opacity: "1",duration: 1, delay:0.1});
			tl.to("#being1", {opacity: "0.3",duration: 1, delay: 0.1})
			tl.to("#being3", {opacity: "0.3",duration: 1, delay: 0.1})
			tl.to("#being1", {opacity: "1",duration: 1, delay:0.1})
			tl.to("#being3", {opacity: "1",duration: 1, delay:0.1});

		}

		function anima4(){
			var s1 = document.createElement("div");
			s1.class = ("flowers");
			s1.style.zIndex = ("13");
			s1.style.position = ("fixed");
			s1.style.padding = ("1em");
			s2.style.backgroundSize = ("cover");
			console.log("700px");
		}

		function anima5(){
			var s1 = document.createElement("div");
			s1.class = ("flowers");
			s1.style.zIndex = ("13");
			s1.style.position = ("fixed");
			s1.style.padding = ("4em");
			console.log("3700px");
		}

	function hide1(){
						//local variables
						var as = document.getElementById("cover");
						var anfora = document.getElementById("base4");
						var nube = document.getElementById("base3");

						as.style.display = ("none");
						txts.innerHTML=textos.text10;
						fallingFlowers()
						resizeSize(anima1,anima2);
						removebuttton(anfora,hide1);
						clickingHead (anfora,hide2);
						console.log("hide1");
				}




		function hide2(){
						var anfora = document.getElementById("base4");
						txts.innerHTML=textos.text11;
						objetos.h.style.display="block";
						objetos.i.style.display="block";
						fallingFlowers()
						anima3();
						removebuttton(anfora,hide2);
						clickingHead (anfora,hide3);
						console.log("hide2, anima3");
		}



		function hide3(){
		var tl = gsap.timeline();

		var pajaro1 = document.getElementById("being1");
		var pajaro2 = document.getElementById("being3");
		var anfora = document.getElementById("base4");
		var mujer = document.getElementById("head2");
		var fondos = document.body;
		var poema = document.getElementById("package1");
		var letrero = document.getElementById("texto_box");

		letrero.innerHTML="and they say: certainly this is a moment of reckoning";
		setTimeout(function(){ letrero.innerHTML=textos.text2; }, 2000);
		setTimeout(function(){ letrero.innerHTML=textos.text7; }, 2000);
		setTimeout(function(){ letrero.innerHTML=textos.text11; }, 2000);
		anfora.style.display="none";
		mujer.style.display="block";
		fondos.style.backgroundImage="url('https://2.bp.blogspot.com/-cN9MC34hsPs/U7_RMjq1_II/AAAAAAAABUs/3hN-amdf670/s1600/2erta.jpg')";
		poema.style.display="block";

		tl.from("#package1", {opacity: "0",duration: 1, delay: 0.5});

		console.log("hide3");
		}


/*--------------------cover-----------------------------*/

	function cover(){
			//button
			var ex1 = document.getElementById("enter");
			//initial state after clicking enter
			ex1.addEventListener("click", hide1 );
		}


	/*-------------------------------------------------*/

	function fallingFlowers(){

		var a1 = document.getElementById("flower1");
		var a1b = document.getElementById("film");
		var s2 = document.createElement("img");
		var s1 = document.createElement("div");
		var s3 = document.getElementById("s");

		s2.src = "https://1.bp.blogspot.com/-IyK8LLoCZWo/XLIBQIXivXI/AAAAAAAAWts/TEvebt2zR3gliwp1SpTKAgQXAsyui0HkgCLcBGAs/s1600/floating_flower.png";

		document.body.appendChild(s1);
		s1.appendChild(s2);
		s1.classList.add("flower");
		console.log("nueva flor");

		a1.style.top = Math.random(window.InnerHeight/2)+ "em";
		a1.style.left = Math.random(window.InnerWidth/2)+ "em";

		s1.style.top = Math.random(window.InnerWidth/2) + "em";
		s1.style.left = a1b.currentTime-20 + "em";

		s3.innerHTML= a1b.currentTime;
		s3.style.fontSize = (3*4) + "em";
		s3.style.padding =" 3em";
		s3.style.color="white";
		s3.style.opacity= "0.5";

		resizeSize(anima4,anima5);

		}


	function rainingFlowers(){

			fallingFlowers();
	}


/*-------------------------------------------------*/

		stopVideo1(document.getElementById("film"),
				document.getElementById("body")
				);
/*-------------------------------------------------*/




	function escena1(){
		var x = document.getElementById("film");
		var x1 = document.getElementById("a");


		if ( x.currentTime < 44 ){
				x.currentTime = 45;
				x.play();
				x.style.opacity = 1;
				rainingFlowers();
				var pos = 0;
				x1.innerHTML= ((1+2)*3)+ " " + "una cerca desarmada en parte," + pos + "rodeando el terreno" + Math.random((2*8)/3);
			}

		else {
			x.pause();

			}

				fallingFlowers();
	}



	function escena2(){
		var x = document.getElementById("film");
		var x1 = document.getElementById("a");
		var x2 = document.getElementById("head1");

		x.currentTime = 12;
		x.play();
		x.style.opacity=0.3;
		x1.innerHTML=textos.txt12;
		x1.style.left= "6.5em";
		x2.style.left= Math.random (238)* 100 +"px";
	//
		while (x.currentTime < 12){

			x2.style.left= Math.random (238)-100 +"px";
		}
		fallingFlowers()
	}



	function escena3(){
		var x = document.getElementById("film");
		var x1 = document.getElementById("a");
		var x2 = document.getElementById("s");

		x.currentTime = 40;
		x.play();
		x1.innerHTML=x.currentTime;
		x2.innerHTML="rosebud 4ever";
		x.style.opacity="0.4";
	}



	function escena4(){
		var x = document.getElementById("film");
		var x1 = document.getElementById("a");
		var x2 = document.getElementById("s");
		var x3 = document.getElementById("d");
		var x4 = document.getElementById("bird1");
		var x5 = document.getElementById("head1");

		x.currentTime = 20;
		x1.innerHTML=x.currentTime + (2*3);
		x2.innerHTML="solo un tiempo en su rincon";
		x1.style.color="blue";
		x3.style.top="2em";
		x3.style.padding="2em";
		x5.style.left= x.currentTime + 23 + "em";
		x4.style.opacity="1";
		x3.innerHTML="under the gray shadow";
		x3.style.fontSize="5em";
		x5.innerHTML="rain, rain";
	}

	/*-------------------------------------------------*/





	var j1= movingVideo_0(txts.innerHTML,
			  textos.text1,
			  txts.innerHTML=textos.text2,
			  2000,
			  txts.innerHTML=textos.text7,
			  2000,
			  txts.innerHTML=textos.text4,
			  2000,
			  escena1() );


	var j2= movingVideo_0(	txts.innerHTML,
				textos.text3,
				txts.innerHTML=textos.text4,
				2000,
				txts.innerHTML=textos.text5,
				2000,
				txts.innerHTML=textos.text9,
				2000,
				txts.innerHTML=textos.text10,
				2000,
				escena2()  );

	var j3= movingVideo_0 (txts.innerHTML,
			  textos.text5,
			  txts.innerHTML=textos.text6,
			  2000,
			  txts.innerHTML=textos.text3,
			  2000,
			  txts.innerHTML=textos.text11,
			  2000,
			  escena3() );


	var j4=  dissapearHead(	document.getElementById ("head1"),
                       document.getElementById ("head2"),
                       document.getElementById ("being1"),
                       document.getElementById ("base"),
                       txts.innerHTML=textos.text7,
											 4000,
											 ("0.5"),
											 ("25em"),
											 (textos.text13),
											 ("0.9"),
                       (textos.text14),
                       (textos.text15),
                       ("0.8")  );



	function movingVideo4(){
		txts.innerHTML=textos.text7;
		setTimeout(function(){ txts.innerHTML=textos.text8; }, 2000);
		setTimeout(function(){ txts.innerHTML=textos.text6; }, 2000);
		setTimeout(function(){ txts.innerHTML=textos.text3; }, 2000);
		console.log("movingvideo4");
		escena4();

	}


	function apparition1(){
		objetos.objetos.style.display="block";
		objetos.b.style.display="block";
		objetos.innerHTML=txts.text4;
		console.log="apparition1";
	}



	/*-------------------------------------------------*/
  //measures for proportion
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	console.log(window.innerWidth/2);
	console.log(window.innerHeight/2);
	console.log(window.innerHeight*window.innerWidth);
	console.log(Math.floor(window.innerHeight*window.innerWidth)/2);
	console.log((window.innerHeight/2)*3);
	console.log(Date());

	//execution of functions
	cover();
	clickingHead(objetos.h,j1);
	clickingHead(objetos.i,j2);
	clickingHead(objetos.a,j3);
	clickingHead(objetos.h,j4);
	clickingHead(objetos.b,movingVideo4);
	clickingHead(objetos.l,apparition1);



	}

 myFunction();
}
