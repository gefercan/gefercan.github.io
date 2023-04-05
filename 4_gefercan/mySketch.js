// JavaScript Document

// variations from Coding Train
// by Daniel Shiffman

let array1=["July 24th","Manco Capac","Sinchi Roca", "Mayta Capac", "Lloque Yupanqui", "Huiracocha", "Pachacutec"];
let array2=["1821","1921","2021","28 de Julio"];
let index=0;

var Particle1={
	speed:10,
	name:2,
	color:"red",
	method1: function(){ }
}




function setup() {
	createCanvas(windowWidth, windowHeight);
	extraCanvas=createGraphics(windowWidth, windowHeight);
	extraCanvas.clear();


	background(100,200,100,0);

}

function draw() {
		// Draw for 1 frame, every 60 frames.
		if(frameCount%60 ==0){
			today();
			translationCube()

		}
		// Draw for 30 frames, every 30 frames.
		else if(frameCount%60>30){
			image(extraCanvas,0,0);
			romboid();
		}
		// Draw  for 15 frames, every 30 frames.
		else if(frameCount%60<15){
			circle1();
			loop1();
		}

	var fondo=map(mouseX,0,width,100,255);

	cursor1();

}



function cursor1(){
	fill(200,110,130,20);
	let x1=ellipse(mouseX,mouseY,random(40));
}

//grid background
function loop1(){

 for ( i= width/10; i<= width-(width/10) ;i++){
	 for( z= height/10; z<=height-(height/10); z++){


			if(mouseY<height/2) {
				strokeWeight(0.1);
				ellipse(i+random(50),z+random(50),mouseX/50);
				stroke(z/20,z/10,z/30,10);
			  ellipse(i+random(10),z+random(10),mouseX/z*2);
			}

			stroke(z*2,10);
		 	ellipse(i+10,z-10,mouseX/z);
	 		z=z+100;
	 		}
	 i=i+100;
 		}

}

//anillos concentricos
function circle1(){

	if(mouseX <(width/2-width/8) ||  mouseX >(width/2+width/8)){
		 noFill();
		 stroke(120,209,100,40);
		 strokeWeight(random(1));
		 ellipse(width/2,height/2,mouseX, mouseX);
		 stroke(250,99,90,80);
		 ellipse(width/2,height/2,mouseX+random(height/2), mouseY+random(width/2));
		 }
	else 	if(mouseY <(width/2-width/8) ||  mouseY >(width/2+width/8)){
		 noFill();
		 stroke(random(19),200,100,30);
		 strokeWeight(random(0.8));
		 ellipse(width/2,height/2,mouseX-mouseY, mouseX-mouseY);
		 stroke(250,99,90,80);
		 ellipse(width/2,height/2,mouseX+random(width/2), mouseY+random(height/2));
		 }

}



function today(){
	stroke(15);
	strokeWeight(1);
	noFill();

	textSize(width/20);
	textAlign(LEFT);
	text("2021",width-width,100);

	textSize(width/20);
	textAlign(RIGHT);
	text("24/7",width,100);

	textSize(width/20);
	textAlign(CENTER);

	//text(array1[index],width/2,height/2);




}

function translationCube(){
	fill(100,200,100,10);
  noStroke();

	push();
	angleMode(DEGREES);
	translate(frameCount/10,height/2);
	rotate(45);
	rect(0,random(120),random(120),50);
	pop();

	print(frameCount);
}


function romboid(){

	noStroke();
	angleMode(DEGREES);
	push();
	translate(width/2,height/2);
	rectMode(CENTER);
	rotate(45);

	fill(100,width/2,100,10);
	stroke(100,200,100,20);
	strokeWeight(23);
	noFill();
	rect(0,0,width/4,width/4);
	fill(width/12,width/12,0);
	rect(0,0,width/8,width/8);

	pop();


	rectMode(CENTER);

	stroke(100,200,100,20);
	strokeWeight(23);
	rect(width/2,height/2,width/12,width/12);

	ellipse(width/2,height/8,width/12,width/12);
	ellipse(width/2,height-(height/8),width/12,width/12);
	fill(155,250,0);
	fill(0);
	rect(width/2,height/2,width/20,width/20);

}
