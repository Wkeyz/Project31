
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground1,ground2,ground3;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var divlength=divisions.length;


function setup() {
var canvas =  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
    var i=1;
    
for(var k=0;k<=width;k=k+80)
{
  //divisions.push(new Divisions(k,650,10,300));
  divisions[i]=new Divisions(k,650,10,300);
  divlength=divisions.length;
  i++;
  
}
    
   
divisions[8]=new Divisions(240,790,480,10);
      
       for(var j=-7.5; j<=width; j=j+50){
         plinkos.push(new Plinko(j,75,10));
       }

       for(var j=15; j<=width-10; j=j+50){
        plinkos.push(new Plinko(j,175,10));
      }

      for(var j=40; j<=width; j=j+50){
        plinkos.push(new Plinko(j,275,10));
      }

      for(var j=15; j<=width-10; j=j+50){
       plinkos.push(new Plinko(j,375,10));
     }

     
     
     
    console.log(frameCount);

    console.log(divlength);
     
   
    
    
ground1 = new Ground(240,800,480,10);
ground2 = new Ground(0,400,10,800);
ground3 = new Ground(480,400,10,800);





  Engine.run(engine);
}

function draw() {
  background("black");  
  Engine.update(engine);
ground1.display();
ground2.display();
ground3.display();
 divisions[1].display();
 divisions[2].display();
 divisions[3].display();
 divisions[4].display();
 divisions[5].display();
 divisions[6].display();
 divisions[7].display();
 divisions[8].display();


plinkos[1].display();
plinkos[2].display();
plinkos[3].display();
plinkos[4].display();
plinkos[5].display();
plinkos[6].display();
plinkos[7].display();
plinkos[8].display();
plinkos[9].display();
plinkos[10].display();
plinkos[11].display();
plinkos[12].display();
plinkos[13].display();
plinkos[14].display();
plinkos[15].display();
plinkos[16].display();
plinkos[17].display();
plinkos[18].display();
plinkos[19].display();
plinkos[20].display();
plinkos[21].display();
plinkos[22].display();
plinkos[23].display();
plinkos[24].display();
plinkos[25].display();
plinkos[26].display();
plinkos[27].display();
plinkos[28].display();
plinkos[29].display();
plinkos[30].display();
plinkos[31].display();
plinkos[32].display();
plinkos[33].display();
plinkos[34].display();
plinkos[35].display();
plinkos[36].display();
plinkos[37].display();
plinkos[38].display();

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));

 }
for(var j=0; j<particles.length; j++){
  particles[j].display();
}



  drawSprites();
}

