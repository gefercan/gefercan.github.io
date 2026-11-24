

let elementoc=document.getElementById("image1");
let elementod=document.getElementById("image2");



function addbuttton1(x,y){
x.addEventListener ("click",y);
}

function rollOver1(){
 elementod.style.filter.opacity="0.3";
}

addbuttton1(elementoc,rollOver1);
