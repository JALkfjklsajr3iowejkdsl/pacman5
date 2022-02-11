/*
Pacman
La idea principal
 de nuestro personaje principal 
 es recorreor un laberinto mostrando en pantalla
  lo cual debemos consumir los puntitos que se encuentran alrededor del mapa,
   he irnos cuidando de los enemigos que se encuentran dianbulando por todo el mapa,
   y si tenemos la mala suerte de que nos agarren perdemos una vida(tienes 3 vidas)
*/
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,pacman,p12,p13,p14,p15,p16,p17,p18,p19,p20;
var pacmanimg;
function preload(){
    pacmanimg = loadImage("PacMan.png")

}
function setup(){
    createCanvas(windowWidth,windowHeight);
    p1=createSprite(820,60,20,200);
    p2=createSprite(270,190,20,200);
    p3=createSprite(120,40,20,200);
    p4=createSprite(470,90,20,200);
    p5=createSprite(1000,180,20,200);
    p6=createSprite(1300,180,20,200);
    p7=createSprite(159,400,20,200);
    p8=createSprite(1100,400,20,200);
    p9=createSprite(1550,200,20,200);
    p10=createSprite(800,400,20,200);
    p11=createSprite(350,400,20,200);
    pacman=createSprite(500,400,80,80);
    pacman.addImage(pacmanimg);
    pacman.scale = 0.2;
    p12=createSprite(1510,80,20,200);
    p13=createSprite(3005,303,20,200);
    p14=createSprite(250,40,200,20);
    p15=createSprite(860,480,20,200);
    p16=createSprite(2003,80,200,20);
    p17=createSprite(636,300,200,20);
    p18=createSprite(160,150,200,20);
    p19=createSprite(900,170,200,20);
    p20=createSprite(1003,490,200,20);




}

function draw(){
    background("black"); drawSprites();
}