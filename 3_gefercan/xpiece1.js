// JavaScript Document


window.onload= function(){
	
function MyFunction() {
	//myFunction is the constructor function//
	//and should be written in camelCase//
	
	var a ={ a : document.getElementById ("head1"),
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

	//declares all variables calling DOM elements//


/*-------------------------------------------------*/		
	
	var textos= { text1:"after the great first click, the buttons are reassigned events",
				  text2:"this might be a little surrealist but mainly there are two figures",
			      text3:"event listeners are removed and changed by new ones.the same with the second and third click.",
				  text4:"The piano sounded slowly in the neighbours house",
				  text5:"The flowers, always the flowers",
				  text6:"Nevertheless, the dust",
				  text7:"and the fragile petals",
				  text8:"and the grains of sand",
				  text9: "but believing the night was here, they went back",
				  text10:"the birds look at you, thinking: WTF?",
				  text11:"but you cannot help but scare them",
				  text12:"but you cannot help but scare them",
				  text13:"but you cannot help but scare them",
				  text14:"but you cannot help but scare them"
				}
	//textos;
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
	
/*--------------------cover-----------------------------*/
	
		function cover(){
		var e = document.getElementById("enter");
			
	
			function hide1(){
				var a = document.getElementById("cover");
				var letrero = document.getElementById("texto_box");
				var anfora = document.getElementById("base4");
				var nube = document.getElementById("base3");
				a.style.display = ("none");
				
				
				letrero.innerHTML="the birds look at you, thinking, WTF?";
				var responsiveness = window.matchMedia("(max-width: 700px)");
				handleOrientationChange(responsiveness);

				responsiveness.addListener(handleOrientationChange);

				function handleOrientationChange(evt) {
					if (evt.matches) {
						gsap.from("#base4", {y:-2250,opacity: "1", duration: 1, delay: 0.1});
						gsap.from("#base3", {y:1990,scale:0,opacity: "0.5", duration: 2, delay: 1});
						var tl = gsap.timeline();
						tl.to("#base4", {opacity: "0.3",duration: 1, delay: 2})
						tl.to("#base4", {opacity: "1",duration: 1, delay: 0.1})
						tl.to("#base4", {opacity: "0.3",duration: 1, delay: 0.1})
						tl.to("#base4", {opacity: "1",duration: 1, delay:0.1});	
						}
				else {
						gsap.from("#base4", {y:-2250,opacity: "1", duration: 1, delay: 0.1});
						gsap.from("#base3", {y:1390,scale:0,opacity: "0.5", duration: 3, delay: 1.2});
						var tl = gsap.timeline();
						tl.to("#base4", {opacity: "0.3",duration: 1, delay: 2})
						tl.to("#base4", {opacity: "1",duration: 1, delay: 0.1})
						tl.to("#base4", {opacity: "0.3",duration: 1, delay: 0.1})
						tl.to("#base4", {opacity: "1",duration: 1, delay:0.1});	
						}
				}
		
	
			
				
				clickingHead (anfora,hide2);
				
				
				
				function hide2(){
				var pajaro1 = document.getElementById("being1");
				var pajaro2 = document.getElementById("being3");
				var anfora = document.getElementById("base4");
				letrero.innerHTML="but you cannot help but scare them";	
				pajaro1.style.display="block";
				pajaro2.style.display="block";
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
				
				removebuttton(anfora,hide2);
				clickingHead (anfora,hide3);
				console.log("hide2");
				}
				
				function hide3(){
				var pajaro1 = document.getElementById("being1");
				var pajaro2 = document.getElementById("being3");
				var anfora = document.getElementById("base4");
				var mujer = document.getElementById("head2");
				var fondos = document.body;
				var poema = document.getElementById("package1");
					
				letrero.innerHTML="and they say: certainly this is a moment of reckoning";	
				setTimeout(function(){ letrero.innerHTML=textos.text2; }, 2000);
				setTimeout(function(){ letrero.innerHTML=textos.text7; }, 2000);
				setTimeout(function(){ letrero.innerHTML=textos.text11; }, 2000);
				anfora.style.display="none";
				mujer.style.display="block";
				fondos.style.backgroundImage="url('https://2.bp.blogspot.com/-cN9MC34hsPs/U7_RMjq1_II/AAAAAAAABUs/3hN-amdf670/s1600/2erta.jpg')";
				poema.style.display="block";
				var tl = gsap.timeline();
				tl.from("#package1", {opacity: "0",duration: 1, delay: 0.5});
			
				console.log("hide3");
				}
				/*
				function dragstart_handler(ev) {
    			// Add the target element's id to the data transfer object
    			ev.dataTransfer.setData("text/plain", ev.target.id);
				ev.dataTransfer.dropEffect = "copy";
				console.log("dragging");
  				}
					
				function dragover_handler(ev) {
				ev.preventDefault();
				ev.dataTransfer.dropEffect = "move";
				}	
				
				function drop_handler(ev) {
				ev.preventDefault();
				var data = ev.dataTransfer.getData("text/plain");
				ev.target.appendChild(document.getElementById(data));
				console.log("droping");
				}
				
				var element1 = document.getElementById("base4");
				element1.addEventListener("dragstart", dragstart_handler);
				
				var element2 = document.getElementById("texto_box");
				element2.addEventListener("dragOver", drop_handler);*/
				
		}

		
		e.addEventListener("click", hide1 );

		}

		cover();
	
	
	/*-------------------------------------------------*/
	
	
	
	function dissapearHead(){
		var z = document.getElementById ("head1");
		var zz = document.getElementById ("head2");
		var zzz = document.getElementById ("being1");
		var zzzz = document.getElementById ("base");
		z.style.opacity = ("0.5");
		z.style.bottom = ("25em");
		z.innerHTML = ("is this waiting the time,<br>waiting the time");
		zz.style.opacity = ("0.9");
		zz.innerHTML = ("waiting the time,<br>waiting the time<br> but somehow<br> living (*)");
		zzz.innerHTML = ("waiting<br>|||||,<br>:::::<br> *X*X*X*X<br> living (*)");
		zzzz.style.opacity = ("0.8");
		console.log("dissappearhead");
		setInterval(function(){ txts.innerHTML=textos.text7; }, 4000);
	}
	
	
	
	
	/*-------------------------------------------------*/
	
	
	
	function rainingFlowers(){
		
				
		function fallingFlowers(){
			
			var a1 = document.getElementById("flower1");
			var a1b = document.getElementById("film");
			var s2 = document.createElement("img");
			var s1 = document.createElement("div");
			var s3 = document.getElementById("s");

			s2.src = "https://1.bp.blogspot.com/-IyK8LLoCZWo/XLIBQIXivXI/AAAAAAAAWts/TEvebt2zR3gliwp1SpTKAgQXAsyui0HkgCLcBGAs/s1600/floating_flower.png";
			
			var mqList = window.matchMedia("(max-width: 700px)");
			handleOrientationChange(mqList);
			mqList.addListener(handleOrientationChange);

			function handleOrientationChange(evt) {
			
					if (evt.matches) {
						s1.class = ("flowers");
						s1.style.zIndex = ("13");
			            s1.style.position = ("fixed");
						s1.style.padding = ("1em");
						s2.style.backgroundSize = ("cover");
						console.log("700px");
					}
			
					else {
						s1.class = ("flowers");
			            s1.style.zIndex = ("13");
			            s1.style.position = ("fixed");
						s1.style.padding = ("4em");
						console.log("3700px");
					}
				}
			
			document.body.appendChild(s1);
			s1.appendChild(s2);
			s1.classList.add("flower");
			console.log("nueva flor");
			
			a1.style.top = "26em";
			a1.style.left = Math.random(123) + "em";
			
			s1.style.top = (Math.random(123)*100) + "em";
			s1.style.left = a1b.currentTime-20 + "em";
			
			s3.innerHTML= a1b.currentTime;
			s3.style.fontSize = (3*4) + "em";
			s3.style.padding =" 3em";
			s3.style.color="white";
			s3.style.opacity= "0.5";
			
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
		
		invoke(fallingFlowers,10,4000,30000);
		
	}	

	
/*-------------------------------------------------*/	
	
	
	function stopVideo1(){
		var x = document.getElementById("film");
		var y = document.getElementById("body");
	
		if (x.currentTime === 40){
			x.pause();
			x.opacity=("0");
			y.style.opacity=("0");
		}
	}
	
	
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
	}
	
	
	
	function escena2(){
		var x = document.getElementById("film");
		var x1 = document.getElementById("a");
		var x2 = document.getElementById("head1");
	
		x.currentTime = 12;
		x.play();
		x.style.opacity=0.3;
		x1.innerHTML="look around the flowering tree that is there, just there";
		x1.style.left= "6.5em";
		x2.style.left= Math.random (238)* 100 +"px";
	//
		while (x.currentTime < 12){
			
			x2.style.left= Math.random (238)-100 +"px";
		}
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
	
	function movingVideo1(){
		
		txts.innerHTML=textos.text1;
		setTimeout(function(){ txts.innerHTML=textos.text2; }, 2000);
		setTimeout(function(){ txts.innerHTML=textos.text7; }, 2000);
		setTimeout(function(){ txts.innerHTML=textos.text4; }, 2000);
		escena1();
		console.log("movingvideo1");
	}
		
	function movingVideo2(){
		txts.innerHTML=textos.text3;
		setTimeout(function(){ txts.innerHTML=textos.text4; }, 2000);
		setTimeout(function(){ txts.innerHTML=textos.text5; }, 2000);
		setTimeout(function(){ txts.innerHTML=textos.text9; }, 2000);
		setTimeout(function(){ txts.innerHTML=textos.text10; }, 2000);
		escena2();
		console.log("movingvideo2");
	}
	
	function movingVideo3(){
		txts.innerHTML=textos.text5;
		setTimeout(function(){ txts.innerHTML=textos.text6; }, 2000);
		setTimeout(function(){ txts.innerHTML=textos.text3; }, 2000);
		setTimeout(function(){ txts.innerHTML=textos.text11; }, 2000);
		console.log("movingvideo3");
		escena3();
	}
	
	function movingVideo4(){
		txts.innerHTML=textos.text7;
		setTimeout(function(){ txts.innerHTML=textos.text8; }, 2000);
		setTimeout(function(){ txts.innerHTML=textos.text6; }, 2000);
		setTimeout(function(){ txts.innerHTML=textos.text3; }, 2000);
		console.log("movingvideo4");
		escena4();
		clickingHead(a.h,dissapearHead);
	}
	
	
	function apparition1(){
		a.a.style.display="block";
		a.b.style.display="block";
		a.innerHTML=txts.text4;
		console.log="apparition1";
	}
/*-------------------------------------------------*/	
	
	

	clickingHead(a.h,movingVideo1);
	clickingHead(a.i,movingVideo2);
	clickingHead(a.a,movingVideo3);
	clickingHead(a.b,movingVideo4);
	clickingHead(a.l,apparition1);
	a.d.currentTime=0;
	

}

new MyFunction();
}


/*-------------------------------------------------*/	

/*	function calculatePosition(x1){
		var x= document.body.offsetHeight-x1.clientHeight; 
		var y= document.body.offsetWidth-x1.clientWidth;
		var randomX = Math.floor(Math.random()*x);
		var randomY = Math.floor(Math.random()*y-100);
		return [randomX,randomY];
		}
	//this function calculates a random position substracting the size of the lement from the size of the window space //
	//to create a variable and then multiply that variable by math random//
	
	function Person1(){
		var aimg=document.createElement("img");
		var xy= calculatePosition(a.a);
		document.getElementById("middle").appendChild(aimg);
		aimg.src=("images/floating_head.png");
		aimg.innerHTML=("xxx");
		aimg.style.padding=("5%");
		aimg.style.position=("fixed");
		aimg.style.zIndex=("2");
		
		aimg.style.left= xy[0] + "px";
		aimg.style.top = xy[1] + "px";
		
	}*/
	//creates an element and assign a random position//

