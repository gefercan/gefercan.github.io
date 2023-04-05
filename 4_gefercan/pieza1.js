// JavaScript Document

// variations from:
// Introduction to p5 by Laureen Lee McCarthy
// Coding Train-Nqture of Code by Daniel Shiffman
// NYU Creative Coding Kevin Siwoff

window.onload= function(){

  function MyFunction() {

    let q1 = document.getElementById("image1");
    let q2 = document.getElementById("image2");
    let q3 = document.getElementById("image3");
    let q4 = document.getElementById("image4");


		function addbuttton1(x,y){
       x.addEventListener ("click",y);
     }

     function removebuttton1(x,y){
 		x.removeEventListener ("click",y);
 		}

    function hide1(){
      q3.style.opacity="0.8";
      q4.style.opacity="0.8";
      q2.style.opacity="1";
      q1.style.opacity="0.5";
      console.log("hide1");
      removebuttton1(q1,hide1);
      addbuttton1(q1,hide2);
    }

    function hide2(){
      q3.style.opacity="1";
      q4.style.opacity="1";
      q2.style.opacity="0.5";
      q1.style.opacity="1";
      console.log("hide2");
      removebuttton1(q2,hide2);
      addbuttton1(q2,hide1);
    }



    addbuttton1(q1,hide1);
    addbuttton1(q2,hide2);
  }

 MyFunction();
}
