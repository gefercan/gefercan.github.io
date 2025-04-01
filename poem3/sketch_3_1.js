let array1=[];
let array2=[];
let a=200;
let b=200;

//----this notation allows to use many canvaases in one HTML page
//----first canvas
var sketch01 = function(p) {
		p.setup = function() {
				const arte1 = p.createCanvas(windowWidth, windowHeight);
				arte1.parent("arte1");
				p.background(170,200,120);
				p.angleMode(DEGREES);
				grid1();
				grid2();
		}

		p.draw = function()
				{
				p.ellipse(p.mouseX, p.mouseY, 20, 20);
				shape2();
				}
	
		function shape2() {
				p.push();
				p.translate((p.width / 8)*7-p.mouseX+p.mouseY/10 , p.height / 2-p.mouseY);
				p.scale(0.2);
				p.strokeJoin(ROUND);
				p.stroke(120, 150, 230,50);
				p.strokeWeight(12);
				p.noFill();
				p.beginShape();
				p.bezierVertex(p.width+100 / 2, p.height +100/ p.mouseX - 8,p.width / 4,p.height / p.mouseX - 48,p.width /6,p.mouseX - 200);
				p.bezierVertex(p.mouseY - p.random(p.cos*100), p.mouseX - p.random(100),p.mouseX - 300,p.mouseX - 200,p.mouseX/p.mouseY-400,890);
				p.vertex(p.width / p.mouseY, (p.height /18) * p.random(p.mouseX*p.cos/p.sin),p.mouseX - p.random(100),p.mouseX - p.random(100),p.mouseX-p.mouseY,p.mouseX+p.mouseY);
				p.bezierVertex((p.width / 4) * 3, (p.height / 8) * 4, p.mouseX*p.tan/p.mouseX, p.mouseX+ 200, p.mouseX+p.mouseY, 490);
				p.vertex(p.mouseY - p.random(180), p.mouseX - p.random(180));
				p.bezierVertex(p.mouseX,p.mouseY,p.width / 4, (p.height / 6) / p.random(80),p.width/2,p.height/2);
				p.vertex(p.mouseX - p.random(100), p.mouseY - p.random(40));
				p.bezierVertex(p.mouseX - p.random(80), p.mouseY - p.random(100),p.mouseY - 300,p.mouseY - 200,400,890);
				p.endShape();
				p.pop();
		}
	
		function grid1()
					{
					p.noFill();
					p.stroke(100);
					p.strokeWeight(0.2);

						for(x=0; x<width-100; x++)
							{
							for(y=0; y<height-100; y++)
								{
								p.rect(x-10,y-10,x+100,y+100);
								p.line(x-10,y-10,x+100,y+100);
								p.bezier(x-10,y-10,x+100,y+100,x-10,y+100,x-100,y+10);
								y=y+100;
								}	
							x=x+100;
							}	
					}
}


//second canvas------------

var sketch02 = function(p) {
  p.setup = function() {
    const myBlueCanvas = p.createCanvas(windowWidth, windowHeight);
    myBlueCanvas.parent("arte2");
		p.background(160,100,200);
		p.angleMode(DEGREES);
		grid2();
  }

  p.draw = function() {
    p.ellipse(p.mouseX, p.mouseY, 20, 20);
  }
	
	function grid2(){
		for(x=100;x<width-100;x++){
		
				for(y=200;y<height-100;y++){
					noStroke();
					p.fill(width/2,y,height/2,y/4);
					p.ellipse(x,y,20,20);
					y = y+50;
					}
		x = x+50;
			}
		}
	
}


var myp5Pink = new p5(sketch01);
var myp5Blue = new p5(sketch02);


//----second notation

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(170);
	angleMode(DEGREES);
	
	grid1();grid2();
}



function draw() {
	noFill();
	stroke(250,100,100);
	ellipse(mouseX, mouseY, 20, 20);
	ellipse(mouseX-width/2, -mouseY+width/4, 20, 20);
	ellipse(mouseY+width/fxrand()*100,mouseX-width/8, 20, 20);

}


function grid1(){
				noFill();
				stroke(100);
				strokeWeight(0.2);

	for(x=0; x<width-100; x++){
		for(y=0; y<height-100; y++){
				rect(x-10,y-10,x+100,y+100);
			  line(x-10,y-10,x+100,y+100);
				bezier(x-10,y-10,x+100,y+100,x-10,y+100,x-100,y+10);

				//ellipse(x,y,10);
			  //interesting result rect(x,x+z,y,z);
				y=y+100;
		  }	
		x=x+100;
	 }	
}


function grid2(){
	for(x=100;x<width-100;x++){
		
				for(y=200;y<height-100;y++){
					noStroke();
					fill(width/2,y,height/2,y/4);
					ellipse(x,y,20,20);
					y = y+50;
					}
		x = x+50;
		}
}



//------END



