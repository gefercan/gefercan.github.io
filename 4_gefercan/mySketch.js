let rimas=["Please turn on the oven, for the food is almost ready, and the bread is warm.And I will put my head inside, and flowers will grow, dreams will be born and ideas will come to light, so they can die  putrid  in this world.",
					 "and the skin will burn, after the crown fall from the eyes,while the sound of the wind protrudes itself from the horizon lost, in the silver water of the illusion.",
					 "Still, my skull is in my hands, I do not have yet a new brand,and where I am now, no more I am.",
					 "See, watch, feel, touch; click and push, draw and text",
					 "Click, touch, press, scroll. Click,click,click touch, press, scroll,press.Touch",
					 "battery and love,electricity and lust,neon and rage,smoke and flow.",
					 "now, are the  reference in this world only the towers I see,floating as overlords?",
					 "ffff...F.F.S. slowly like in a stage, develop the moments of the piece, a white screen is everything we see at the beginning",
					 "But after the first click, the buttons will have reassigned their events,and event listeners will be removed, replaced by new ones.",
					 "I have been there, in the mechanical, eternal ramps and the stairs hypnotically they create, the capture of the skies in the mirroring floors of the aromatized lounge",
					 "the obviousness of intentions and the non sense articulation places this in a weird, meaningless place,as you will see in the code the author should have noticed"
					];
let img;
let fxcolourmap;
let fxmap1;
let palette=[200,120,190,230,150,220,155,192,198,178,111];
let palette2=[22,55,92,98,78,200,20,90,30,50,19];

function preload(){
	//load images
	img=loadImage("Annotation1.png");
	imgMask=loadImage("_Annotation1.png");
	//calls video
	video1=createVideo(['VID_33760530_062556_659.mp4'],video1Load);
	//avoid video to be outside the canvas
	video1.hide();
}

function setup() {
	//setting fx hash variable from 0 to 4
	fxmap1 = floor(map(fxrand(),max(fxrand()),min(fxrand()),0,10,true));
	console.log((fxmap1));
	angleMode(DEGREES);
	let fxwidthmap = map(fxrand(),max(fxrand()),min(fxrand()),width/3,width-(width/3),true);
	let fxheightmap = map(fxrand(),max(fxrand()),min(fxrand()),height/3,height-(height/3),true);
	fxcolourmap = map(fxrand(),max(fxrand()),min(fxrand()),60,240,true);
	
	//create canvas
	let cv = createCanvas(innerWidth,innerHeight);
	//assign name a canvas
	cv.id ("mycanvas");
	
	//load pixels of the images
	img.loadPixels();
	//video1.size(width/2,height/2,width/2,height/2);
			noStroke();
		fill(250);
		textSize(32);
		text(floor(fxrand()*1000),10,width/1.7,600,500);
}

function draw() {
	
	
	if(frameCount<(fxrand()*100)){
		//background variation
		background(palette[fxmap1],palette2[fxmap1]*2,fxcolourmap);
		//color and transparence of video
		tint(palette[fxmap1],120);
		//display video
		image(video1,palette2[fxmap1],0, width-(palette[fxmap1]),height);
		video1.loop();
		the_hash();
		cover();
		elements();
		//mask image in front
		imgMask1(palette[fxmap1]);
		//oscillating circle
		sineCosineSquare(palette2[(fxmap1)]);
		//words linked to array rimas sorted through fxhash
		text1(rimas[floor(fxmap1)]);
		//test hash
		console.log(rimas[floor(fxmap1)]);
	}
	else {
		fxpreview();
		
	}


	
}
 function the_hash(){
	 	push();
		noStroke();
		fill(250,80);
		textSize(200);
		text(floor(fxrand()*1000),width-(width/3),height-(height/4),600,500);
		strokeWeight(2);
	 	stroke(100);noFill();
	  ellipse(width-(width/4),width-(width/3.5),200);
	 pop();
 }

function video1Load(){
  video1.loop();
  video1.volume(0);
}

function imgMask1(x1){
	image(img,mouseX,height/4-palette[fxmap1]);
	tint(x1,palette[fxmap1],fxcolourmap);
	image(img,-mouseX-fxcolourmap,height/4-palette[fxmap1]);
	var x= mouseX;
	var y= mouseY;
	var unoz = x >=innerWidth/20 && y >=innerWidth/20 ;
	var dosz = x <=innerWidth-(innerWidth/20) && y <=innerWidth-(innerWidth/20);
	var tresz = unoz && dosz;
	if (tresz){
			ellipse(x, y, 80);
			img.mask(imgMask,0,palette2[fxmap1]);
			pixel(palette[fxmap1]);
		}
 }
	
//alters image into pixel circles
function pixel(z1){
		for(x=0;x<img.width;x =x+50){
				for(y=0;y<img.height;y =y+50){
					//fill(img.get(x,y),50);
					stroke(img.get(x,y),50);
					strokeWeight(0.5);
					ellipse(tan(frameCount/x)*z1+mouseX, sin(frameCount/y)*z1+mouseY,cos(z1)*x);
					push();
					translate(palette[fxmap1]+x,mouseY-fxmap1);
					ellipse( sin(frameCount/x)*mouseX,tan(frameCount/z1)*x, tan(z1*x)*x);
					pop();
					//ellipse(x,y,z1);
					ellipse(cos(frameCount/y)*x-mouseY,tan(frameCount/x)*z1-mouseX,cos(z1/x)/x);
					//ellipse(cos(frameCount/y)*z1+mouseY,sin(frameCount/x)*z1+mouseX,cos(frameCount/z1)*x,sin(frameCount/z1)*y);
					}
			 }
	}


function sineCosineSquare(x1){
	push();
	translate(width/2,height/2);
	let period=windowWidth;
	let amplitude=width/4;
	let angle= frameCount*2000/period*1260;
	x=cos(angle)*amplitude;
	strokeWeight(fxmap1);
	fill(fxcolourmap,20);
	ellipse(x,sin(angle),cos(fxmap1)*1000);
	noStroke();
	fill(200,x1,0);
	ellipse(x/fxmap1,width/fxmap1,palette[fxmap1]);
	pop();
}

function text1(rima){
		noStroke();
		fill(250);
		textSize(32);
		text(rima,0,width/1.7,600,500);
}

function elements(){
	//circles
	stroke(240);
	noFill();
	ellipse(width/2, mouseX,  palette[fxmap1]);
	line(width/2, mouseX,mouseX, 22);
	ellipse(mouseX, 22, palette2[fxmap1]-fxmap1);
	push();
	noStroke();
	fill(112,23,123,34);
	rect(0,0,width,height/2);
	ellipse(width/2, 11, palette[fxmap1]);
	ellipse(width/2, height, palette[fxmap1]+palette2[fxmap1]);
	pop();
}




//texts for presentation
function cover(){
	//text settings
	noStroke();
  fill(180);
	textAlign(LEFT);
	textSize(14);
	//texts
	text(fxrand(),width/20,50);
	text(fxrand()*1000,width/20,70);
	text((frameCount)*100,width/20,90);
	textSize(64);
	//textbox settings and text
	textSize(12);
	// first textbox
	text("Visual composition together:" +
			 " you move the cursor and I set the elements move" +
			 " in random disarray, thus being " +
			 "combined and recombined. Until it stops",width/20,120,290,320);
	//second textbox
	text(" Since loading this,the frame count is: " + frameCount + " frames" +
			 " ,while the frame rate has been around: " + floor(frameRate())+" frames per second" +
			 " and the time seeing this being: " + floor(millis()/1000)+ " seconds" +
			 " being the current position of the cursor over the screen"+
			 "(x,y Cartesian coordinates):" + mouseX+","+ floor(mouseY), width/20,(height/4)-20,200,900);
	//blocks for framing
	noStroke();
  fill(180)
	rect(width/20,400,20,50);
	rect(width/20+30,400,10,50);
	//random makes rectangle increase and decrease illusion
	rect(width/20+50,400,random(50),50);
	//more line settings
	strokeWeight(2);
	stroke(113);
	line(width/20,20,width-(width/20),20);
	line(width/20,100,width/10 + 200,100);
	line(width/20,180,width/10 + 200,180);
	line(width/20,330,width/10 + 200,330);
	line(width/20,height-20,width-(width/20),height-20);
	noStroke();
	fill(250);
	}