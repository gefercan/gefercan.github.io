
//preloads the image to alter with pixels();
class Circles {

	constructor(x1,y1, r1){
		this.x=x1;
		this.y=y1;
		this.r=r1;
		print(this.x);
	}
	move(){
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}
	show(){
		stroke(200,120,100,50);
		strokeWeight(4);
		noFill();
		ellipse(this.x,this.y,this.r);
	}
	randomVectorGenerator(){
		let v=createVector(this.x + random(-100,100),this.y+random(-100,100));
		strokeWeight(24);
		stroke(200,100,100,20);
		line(this.x,this.y,v.x,v.y);
	}
}





//______________________________________

//load global variables

let circles=[];
let lifespan;
let angle1=0;
let angle2=0;
let angle3=0;
let pointCount=0;
let Wave1=150;
let Wave2=90;
let period=1030;
let period1=125;
let numbers1=125;
let numbers2=125;
let period2=90;
let dotCount=0;
let amplitude1=300;
let pendulum;
let pixelColor;


let img;

function preload(){
	img1=loadImage("https://mir-s3-cdn-cf.behance.net/project_modules/disp/911bbd32477131.615d238862e54.png");
	img2=loadImage("https://mir-s3-cdn-cf.behance.net/project_modules/disp/c5640132477131.615d2388622fa.png");
	img3=loadImage("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e7394332477131.615d238862837.png");
}





function setup() {
	angleMode(DEGREES);
	let cv=createCanvas(windowWidth, windowHeight);
	cv.id=("pieza1");


	//background(123,123,239,1);
	//creating objects of circle class
	for(i=0;i<20;i++){
		circles[i]=new Circles(random(width/4,(width/4)*3),random(height/4,(height/4)*3),random(-5,5));
	}

}


function draw() {
	//calling all functions
	// Draw for 1 frame, every 60 frames.
		if(frameCount% 60 <5){
					fondo();

		}
		// Draw for 30 frames, every 3
		else if(frameCount%60>10){

		images();
		}
		else if(frameCount%60<25){
			texticles();	fondo_loops();
		}

		else if(frameCount%60<12){

		}
		// Draw  for 15 frames, every 30 frames.

		particles();
}



function images(){
let map1=map(mouseX,mouseX/4,(mouseX/4)*3,0,3);
let map2=map(-mouseX,width/10,width,100,155);
let map3=map(-mouseY,height/10,height,100,155);
image(img3,width/map2 +(mouseY/2),mouseX/4);

push();
translate(width/4,height/4);
//img3.loadPixels();
tint(120,110,0);
image(img1,map2*2,map3*2);
tint(220,210,200,223);
image(img2,-map2*2,map3*2);
pop();
}



function fondo_loops(){
	stroke(150,180,120,5);
	noFill();
			if(mouseX<width/2){
				push();
				translate(width/2,height/2);
				angleMode(DEGREES);

				//LissajeousCurve2();
				for(i=24; i< 250; i++){
					for(y=0; y<1420; y++){
								let x=i*sin(y);
								let z=i*cos(y);
								ellipse(x,z,width/60+random(100,125),width/60+random(100,125));
								y=y+height/15;
						}
						i=i+width/20;
					}
					pop();
			}

			if(mouseX>width/2){
				push();
				translate(width/2,height/2);
				//LissajeousCurve1();
				for(r1=20;r1<width/2;r1+=width/50){
					for(angle1=mouseY/200; angle1>width; angle1+=(mouseX/mouseY)){

								let x=r1*cos(angle1);
								let y=r1*sin(angle1);
								ellipse(x,y,width/(r1/4)+random(125),width/(r1/3)+random(125));
								angle1= angle1+ (mouseX/mouseY);

							}
				r1=r1 +100;
				}
				pop();
			}
		}


function particles(){
		if(mouseIsPressed){

			for(let circle of circles){
				noStroke();
  			fill(150,10);
				textSize(54);
				text("Shapes of varied definition",100,100);
				circle.move();
				circle.show();
				circle.randomVectorGenerator();
				circle.x=circle.x + random(-5,5);
				circle.y=circle.y + random(-5,5);
			}
		}
	}

function fondo(){
		let gray_val=120;
		background(0,0,gray_val,1.5);
		gray_val=gray_val+mouseX/5;
		gray_val=gray_val%180;
		if(mouseIsPressed){
				background(10,0,0,0);
		}
	}

function texticles(){
		noStroke();
		fill(255,5);
		textSize(20);
		text(" And well, since loading this, actually, flowers are faling, and of course, the frame count is: " + frameCount + " frames" +
				 " ,while the frame rate has been around: " + floor(frameRate())+" frames per second" +
				 " but nevertheless, I smiled, and the time seeing this being: " + floor(millis()/1000)+ " seconds" +
				 " being the current position of the cursor over the screen (x,y Cartesian coordinates):" + mouseX+","+
				 floor(mouseY)+"but this doesn't change anything, does it?", width/6-100,height/6,width/2,(height/4)*3);
}



/*function LissajeousCurve1(){
	push();
		let amplitude2=mouseY/4;
		stroke(200,100,100,10);
		noFill();
		beginShape();
		for(i=0;i<pointCount;i++){
			angle3=i/Wave1*260;
			let x= sin(angle3)*amplitude2;
			angle3=i/Wave2*360;
			let y= cos(angle3)*amplitude2;
			vertex(x,y);
		}
	endShape();
	pointCount++;
	pop();
}

push();
translate(width/2,height/2);


function LissajeousCurve2(){
	let amplitude=mouseX/mouseY;
	stroke(200,100,100,10);
	beginShape();
		for(i=0;i<pointCount;i++){
			angle3=i/Wave1*360;
			let x= sin(degrees(angle3))*amplitude;
			angle3=i/Wave2*360;
			let y= cos(degrees(angle3))*amplitude;
			vertex(x,y);
			}
	pointCount=pointCount+0.003;

	endShape();
}


pop();*/
