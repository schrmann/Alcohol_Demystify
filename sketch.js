//p5.disableFriendlyErrors = true;



let pos = -10;
let addG = 0 ;
let t1_text;
let t2_text;

let f

//scene1

let layer1;
let layer2; 
let layer3;
let layer4;
let layer5;
let mask1;

let tintA = 1;
//scene1.A

let scene1Front; 



//fonts

let fontBlack
let fontUnica





//scene1A Index
let scene1Index = 0;


//
let relpos1;
let relheight_text;

let BackTex;

let back1
let by;
let box1; 


let sx;
let sy;

//Text SCENE1

let Scene1_title_text;

let Scene1_intro_text;

//let colo = color(255, 204, 0);
let yOffset = 0.0;
let S1T= 'Have you ever asked yourself why alcohol plays such a great role in so many people‘s lives?\n \n Why  is it almost unthinkable to have a celebration, in the western world, without gallons of wine, beer or liquor?\n \nWhy is the ability to drink large amounts of alcohol still considered an ideal of masculinity and strength?\n \nWhy do we believe that we can access our true hidden emotions through alcohol?\n \nWhy do we feel so terrible after a night of drinking and still dismiss this state as normal and insignificant?\n \n And why it\'s almost frowned upon to refer to alcohol as a dangerous drug, although the evidence for this is almost impossible to deny?';


// Functions
function mouseWheel(event) {
  //println(event.delta);
  pos += event.delta;
  posRev = height - 7 - pos;
  //console.log(pos);
}

function preload() { 
    

 
    
    

fontBlack = loadFont('fonts/Raleway-Black.ttf');
fontUnica = loadFont('fonts/UnicaOne-Regular.ttf');
//S1T = loadStrings('text/Scene1_Intro_reader.txt');

 

//S1 
    
layer1 = loadImage('s1/sky.webp')
layer2 = loadImage('s1/back.webp')
layer3 = loadImage('s1/fore.webp') 
layer4 = loadImage('s1/glass.webp')
layer5 = loadImage('s1/pupil.webp')
layer6 = loadImage('s1/mask_dirt.webp')    
    
mask1 = loadImage('s1/mask_pyramid3.webp')     
    
    
    
    
//BackTex = createGraphics(1400,788);
    
    //text scene1_title

      



}

function setup() {

//pixelDensity(1);    




frameRate(24);

    
    
 scene1Front= [

  loadImage('s1/webp/pyramid02.webp'),//1
  loadImage('s1/webp/pyramid03.webp'),
  loadImage('s1/webp/pyramid04.webp'),
  loadImage('s1/webp/pyramid05.webp'),  
  loadImage('s1/webp/pyramid06.webp'),  
  loadImage('s1/webp/pyramid07.webp'),  
  loadImage('s1/webp/pyramid08.webp'),  
  loadImage('s1/webp/pyramid09.webp'), 
  loadImage('s1/webp/pyramid10.webp'),
     
  loadImage('s1/webp/pyramid11.webp'),
  loadImage('s1/webp/pyramid12.webp'),
  loadImage('s1/webp/pyramid13.webp'),
  loadImage('s1/webp/pyramid14.webp'),
  loadImage('s1/webp/pyramid15.webp'),
  loadImage('s1/webp/pyramid16.webp'),
  loadImage('s1/webp/pyramid17.webp'),
  loadImage('s1/webp/pyramid18.webp'),  
  loadImage('s1/webp/pyramid19.webp'),
  loadImage('s1/webp/pyramid20.webp'),
     
  loadImage('s1/webp/pyramid21.webp'),
  loadImage('s1/webp/pyramid22.webp'),
  loadImage('s1/webp/pyramid23.webp'),
  loadImage('s1/webp/pyramid24.webp'),
  loadImage('s1/webp/pyramid25.webp'),
  loadImage('s1/webp/pyramid26.webp'),
  loadImage('s1/webp/pyramid27.webp'),
  loadImage('s1/webp/pyramid28.webp'),  
  loadImage('s1/webp/pyramid29.webp'),
  loadImage('s1/webp/pyramid30.webp'),
     
  loadImage('s1/webp/pyramid31.webp'),
  loadImage('s1/webp/pyramid32.webp'),
  loadImage('s1/webp/pyramid33.webp'),
  loadImage('s1/webp/pyramid34.webp'),
  loadImage('s1/webp/pyramid35.webp'),
  loadImage('s1/webp/pyramid36.webp'),
  loadImage('s1/webp/pyramid37.webp'),
  loadImage('s1/webp/pyramid38.webp'),  
  loadImage('s1/webp/pyramid39.webp'),
  loadImage('s1/webp/pyramid40.webp'),
     
  loadImage('s1/webp/pyramid41.webp'),
  loadImage('s1/webp/pyramid42.webp'),
  loadImage('s1/webp/pyramid43.webp'),
  loadImage('s1/webp/pyramid44.webp'),
  loadImage('s1/webp/pyramid45.webp'),
  loadImage('s1/webp/pyramid46.webp'),
  loadImage('s1/webp/pyramid47.webp'),
  loadImage('s1/webp/pyramid48.webp'),  
  loadImage('s1/webp/pyramid49.webp'),
  loadImage('s1/webp/pyramid50.webp'),
     
  loadImage('s1/webp/pyramid51.webp'),
  loadImage('s1/webp/pyramid52.webp'),
  loadImage('s1/webp/pyramid53.webp'),
  loadImage('s1/webp/pyramid54.webp'),
  loadImage('s1/webp/pyramid55.webp'),
  loadImage('s1/webp/pyramid56.webp'),
  loadImage('s1/webp/pyramid57.webp'),
  loadImage('s1/webp/pyramid58.webp'),  
  loadImage('s1/webp/pyramid59.webp'),
  loadImage('s1/webp/pyramid60.webp'),
     
  loadImage('s1/webp/pyramid61.webp'),
  loadImage('s1/webp/pyramid62.webp'),
  loadImage('s1/webp/pyramid63.webp'),
  loadImage('s1/webp/pyramid64.webp'),
  loadImage('s1/webp/pyramid65.webp'),
  loadImage('s1/webp/pyramid66.webp'),
  loadImage('s1/webp/pyramid67.webp'),
  loadImage('s1/webp/pyramid68.webp'),  
  loadImage('s1/webp/pyramid69.webp'),
  loadImage('s1/webp/pyramid70.webp'),
    ] 



    
//s1.A
    

//S2


//

    
imageMode(CENTER) 
createCanvas(windowWidth,windowHeight);



}

//drag function
 function mouseDragged(event) {
  
     if(pmouseY < mouseY){
         
         pos = pos - 10;
         
     }

     if(pmouseY > mouseY){
         
         pos = pos + 10;
         
     }
     
     
     

  }   


function draw() {

//move animation by pos//
//if(pos >-10 && pos < 1009){
//scene1Index = map(pos, -10, 1010, 0, scene1Front.length - 1).toFixed(0);
 //  } 
//Shrink factor// 

 f = map(width,300,1920,0.4,1);  

    
if( pos < -11){
    
    pos= -10;
    
}
    


background(255);



 scene1(); 


scene1A();
    

if(pos>0){

 moveScene1();   
    
    
}if(pos<-7 && scene1Index > 1 ){

 moveScene2();   
    
    
}


    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 

}

function scene1() {

imageMode(CENTER);

    
//layer1.mask(mask1); 
    
push(); 
    

    
image(layer1,width/2,map(pos,-10,1100,height/2-20,height/2-1000),(map(width,300,1920,layer1.width*0.3,layer1.width*0.54)),(map(width,300,1920,layer1.height*0.3,layer1.height*0.54))); 




image(layer2,width/2+map(mouseX,0,width,-5*f,5*f),map(pos,-10,1100,height/2-20,height/2-1000),(map(width,300,1920,layer2.width*0.3,layer2.width*0.54)),(map(width,300,1920,layer2.height*0.3,layer2.height*0.54))); 
  
image(layer3,width/2+map(mouseX,0,width,-14*f,14*f),map(pos,-10,1100,height/2-20,height/2-1000),(map(width,300,1920,layer3.width*0.3,layer3.width*0.54)),(map(width,300,1920,layer3.height*0.3,layer3.height*0.54))); 
    
image(mask1,width/2,map(pos,-10,1100,height/2-20,height/2-1000),(map(width,300,1920,mask1.width*0.3,mask1.width*0.54)),(map(width,300,1920,mask1.height*0.3,mask1.height*0.54)));     
    

image(layer4,width/2+map(mouseX,0,width,3*f*f,-3*f),map(pos,-10,1100,height/2-20,height/2-1000),(map(width,300,1920,layer4.width*0.33,layer4.width*0.58)),(map(width,300,1920,layer4.height*0.33,layer4.height*0.58)));     
    
image(layer5,width/2+map(mouseX,0,width,-7*f,7*f),map(pos,-10,1100,height/2-20,height/2-1000),(map(width,300,1920,layer5.width*0.33,layer5.width*0.58)),(map(width,300,1920,layer5.height*0.33,layer5.height*0.58)));  
    
image(layer6,width/2+map(mouseX,0,width,0,0),map(pos,-10,1100,height/2-20,height/2-1000),(map(width,300,1920,layer6.width*0.33,layer6.width*0.58)),(map(width,300,1920,layer6.height*0.33,layer6.height*0.58)));      
    
background(255,tintA);    

pop();
    
}

1100

function scene1A() {

image(layer6,width/2+map(mouseX,0,width,0,0),map(pos,-10,1100,height/2-20,height/2-1000),(map(width,300,1920,layer6.width*0.33,layer6.width*0.58)),(map(width,300,1920,layer6.height*0.33,layer6.height*0.58)));  
   
image(scene1Front[scene1Index],width/2+map(mouseX,0,width,0,0),map(pos,-10,1100,height/2-20,height/2-1000),(map(width,300,1920,scene1Front[scene1Index].width*0.5,scene1Front[scene1Index].width*0.875)),(map(width,300,1920,scene1Front[scene1Index].height*0.5,scene1Front[scene1Index].height*0.875))); 

}

function moveScene1(){
    
    scene1Index ++;
    if (tintA < 255){

        tintA = tintA + 5;
        
        
    }

if (scene1Index > scene1Front.length-1 ){

scene1Index = 68; 

} }

function moveScene2(){
    
    scene1Index --;

    if (tintA > 6){

        tintA = tintA - 5;
        

    }


 }

