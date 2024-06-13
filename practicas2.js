// JavaScript Document
/*





*/

window.onload=function(){ 
	
	
	
	/*-------------cover--------------*/	
	function cover(){
		var e = document.getElementById("enter");
		
			function hide1(){
				var a = document.getElementById("cover");

				a.style.display = ("none");
			}

		e.addEventListener("click", hide1 );

		}

		cover();


function myFunction(){
/*-------------declara las variables globales--------------*/	

	
	var a1 = document.getElementById("be");
	var b1 = document.getElementById("ins");
	var c1 = document.getElementById("twi");
	var d1 = document.getElementById("about2");
	var e1 = document.getElementById("contact");
	var f1 = document.getElementById("name");
	var g1 = document.getElementById("tmb");
	var h1 = document.getElementById("lnk");
	var i1 = document.getElementById("fli");
	
		

/*-------------la funcion que llame esta definida aqui,
tiene parametro x, que defini en la linea anterior como a1-------------*/
	

	

/*------------------definition of menu -----------------------------------*/	
	
function menus(){
		
	function menuhide(){
		var o = document.getElementById("sidemenu_container");
		var oo = document.getElementById("menu");
		var ooo = document.getElementById("name");
		var j1 = document.getElementById("image");
	
		
		o.style.top =("-150%");
		o.style.zIndex =("3");
		o.style.opacity=("0.5");
		o.style.transition=("0.5s");
		oo.removeEventListener("click",menuhide);
		oo.addEventListener("click",menushow);
		oo.style.opacity = ("0.7");
		oo.style.color=("#FFFFFF");
		ooo.style.opacity = ("0.5");
		oo.innerHTML=("//+/options/");
		j1.style.filter=("brightness(50%)");
	}
	
	function menushow(){
		var o = document.getElementById("sidemenu_container");
		var oo = document.getElementById("menu");
		var ooo = document.getElementById("name");
		var j1 = document.getElementById("image");

		
		o.style.top =("100%");
		o.style.opacity=("0.8");
		o.style.zIndex =("9");
		o.style.transition=("0.9s");
		o.style.borderRadius=("50px");
		oo.removeEventListener("click",menushow);
		oo.addEventListener("click",menuhide);
		oo.innerHTML=("//x/options/");
		oo.style.zIndex =("3");
		oo.style.color=("#030303");
		oo.style.opacity = ("0.9");
		ooo.style.opacity = ("0.8");
		oo.style.color= ("white");
		ooo.style.opacity= ("1");
		j1.style.filter=("brightness(100%)");
		j1.style.opacity=("1");
		menuhide2();
	}	

	function menustart(){
		var oo = document.getElementById("menu");
		oo.addEventListener("click",menushow);
		}
		
	menustart();
	
	/*---------------------------------*/
	
		
	function menushow2(){
		var o = document.getElementById("sidemenu_bottom");
		var oo = document.getElementById("menu_bottom");
		var ooo = document.getElementById("name");
		var j1 = document.getElementById("image");
		
		o.style.bottom=("10%");
		o.style.opacity=("1");
		o.style.zIndex =("9");
		o.style.transition=("0.6s");
		o.style.borderRadius=("50px");
		oo.removeEventListener("click",menushow2);
		oo.addEventListener("click",menuhide2);
		oo.innerHTML=("//x/options/");
		oo.style.zIndex =("3");
		oo.style.color=("#030303");
		oo.style.opacity = ("0.9");
		ooo.style.opacity = ("0.8");
		oo.style.color= ("white");
		ooo.style.opacity= ("1");
		j1.style.filter=("brightness(100%)");
		j1.style.opacity=("1");
		menuhide();
	}
				
	function menuhide2(){
		var o = document.getElementById("sidemenu_bottom");
		var oo = document.getElementById("menu_bottom");
		var ooo = document.getElementById("name");
		var j1 = document.getElementById("image");
	
		
		o.style.bottom =("-150%");
		o.style.zIndex =("3");
		o.style.opacity=("0.5");
		o.style.transition=("0.5s");
		oo.removeEventListener("click",menuhide2);
		oo.addEventListener("click",menushow2);
		oo.style.opacity = ("0.7");
		oo.style.color=("#FFFFFF");
		ooo.style.opacity = ("0.5");
		oo.innerHTML=("//+/options/");
		j1.style.filter=("brightness(50%)");
	}
		
	function menustart2(){
		var oo = document.getElementById("menu_bottom");
		oo.addEventListener("click",menushow2);
		
	}
	
	menustart2();
}
	

	
	loading11 (a1,hover1);
	loading11 (b1,hover2);
	loading11 (c1,hover3);
	loading11 (d1,hover4);
	loading11 (e1,hover5);
	loading11 (g1,hover6);
	loading11 (h1,hover7);
	loading11 (i1,hover8);
	
	menus();

		

}
	
	
myFunction();
}

	/*the plan is the next
	for mobile
	first will appear the cover, a div, styled simply, arial and black text over white or gray background,
	with the title, aim of the work and technical details
	when you click, it dissapear-an event listener on this div to change the css display from block to none will suffice.

	__________________________________________________________________

	moment 1
	the man and the woman 
	pattern1
	text1

	moment 2
	the woman the man and the washing machine
	pattern2
	text2

	moment 3
	the girl listening the radio
	pattern3
	text3

	moment 4
	the man falling
	pattern4
	text4

	moment 5
	the machines flying
	moment 6

	the girl and the woman wear masks
	moment 7
	the man is in a bubble
	moment 8
	the woman is in a bubble
	moment 9
	the girl is in a bubble, from her a tree grows
	*/