var bg;
var question;
var nextButton, buttonImg;
var question2;
var question3;
var question4;
var question5;
var Q=1;
var nextButton_2;
var nextButton_3;
var nextButton_4;
var nextButton_5;
var endImg;
var start,end;
var gameState=start;
var titleImg,turtleImg,qImg,q1Img,q2Img,q3Img,q4Img,answerImg,submitImg;
var title,q,q1,q2,q3,q4,answer,submit,turtle;
var w1,w1Img,w2,w2Img,w3,w3Img,w4,w4Img,w5,w5Img
var quizcompleted,quizcompletedImg,thank,thankImg;
var sound1,sound2, sound3, soundon,soundoff;
var soundonImg,soundoffImg,soundstatus="on";

function preload(){
bg=loadImage("images/bg.jpg");
buttonImg=loadImage("images/nextButton.png");
endImg=loadImage("images/end.jpg");
titleImg=loadImage("images/title.png");
qImg=loadImage("images/qbg.png");
q1Img=loadImage("images/q1.png");
q2Img=loadImage("images/q2.png");
q3Img=loadImage("images/q3.png");
q4Img=loadImage("images/q4.png");
answerImg=loadImage("images/answer.png");
submitImg=loadImage("images/submit.png");
turtleImg=loadImage("images/turtle.png");
w1Img=loadImage("images/straw.png");
w2Img=loadImage("images/bag.png");
w3Img=loadImage("images/bottle.png");
w4Img=loadImage("images/obs1.png");
w5Img=loadImage("images/obs3.png");
quizcompletedImg=loadImage("images/Completed_quiz.png");
thankImg=loadImage("images/thank you.png");

sound1 = loadSound("sea.wav");
sound2 = loadSound("click.mp3");
sound3 = loadSound("end.mp3")
soundonImg = loadImage("images/soundon.png");
soundoffImg = loadImage("images/soundoff.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
question=new Question();

title = createSprite(width/2,100);
title.addImage(titleImg);
title.scale = 0.5;

turtle = createSprite(width/3.5,420,100,10);
turtle.addImage(turtleImg);
turtle.scale = 0.22;

q = createSprite(width/1.95,250,100,10);
q.addImage(qImg);
q.scale = 0.2;

q1 = createSprite(width/2.1,430,100,10);
q1.addImage(q1Img);
q1.scale = 0.14;

q2 = createSprite(width/1.6,430,100,10);
q2.addImage(q2Img);
q2.scale = 0.14;

q3 = createSprite(width/2.1,550,100,10);
q3.addImage(q3Img);
q3.scale = 0.14;

q4 = createSprite(width/1.6,550,100,10);
q4.addImage(q4Img);
q4.scale = 0.14;

answer = createSprite(width/1.2,460,100,10);
answer.addImage(answerImg);
answer.scale = 0.15;

submit = createSprite(width/1.2,560,100,10);
submit.addImage(submitImg);
submit.scale = 0.15;

quizcompleted = createSprite(width/2,140);
quizcompleted.addImage(quizcompletedImg);
quizcompleted.scale = 0.5;
quizcompleted.visible = false;

thank = createSprite(width/1.5,450);
thank.addImage(thankImg);
thank.scale = 0.3;
thank.visible = false;

  w1 = createSprite(50,580,100,10);
  w1.addImage(w1Img);
  w1.scale = 0.18;


w2 = createSprite(150,520,100,10);
w2.addImage(w2Img);
w2.scale = 0.17;

w3 = createSprite(width/2.7,580,100,10);
w3.addImage(w3Img);
w3.scale = 0.35;

w4 = createSprite(width/1.8,640,100,10);
w4.addImage(w4Img);
w4.scale = 0.5;

w5 = createSprite(width/1.35,590,100,10);
w5.addImage(w5Img);
w5.scale = 0.5;

soundon = createSprite(80,height-185,300,200);
soundon.addImage(soundonImg);
soundon.scale=0.1; 

soundoff = createSprite(181,height-75,300,200);
soundoff.addImage(soundoffImg);
soundoff.scale=0.1; 
soundoff.visible =false;

}

function draw() {

  if(mousePressedOver(soundon))
  {
    soundstatus = "off";
    soundoff.visible = true;
    soundon.visible = false;
    sound1.stop();
    sound2.stop();
    sound3.stop();
  }
 
  if(mousePressedOver(soundoff))
  {
    soundstatus = "on";
    soundoff.visible = false;
    soundon.visible = true;
  
  }


  if(gameState === start)
  {


  background(bg); 
  if(soundstatus==="on")
  {
    sound1.stop();

  }  
  if(Q===1){
  question.display();
  }
 else if(Q===2){
    question2.display();
  }

  else if(Q===3){
    question3.display();
  }

 else if(Q===4){
    question4.display();
  }

 else if(Q===5){
    question5.display();
  }
}
else if(gameState === end) 
{    background(endImg);
  

     w4.destroy();
}

  drawSprites();
}