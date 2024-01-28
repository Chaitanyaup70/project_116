nose_x=0
nose_y=0
function preload(){
image1=loadImage("mustache.png")
}
function setup(){
canvas=createCanvas(400,400); 
canvas.center();
video=createCapture(VIDEO);
video.hide();

Posenet=ml5.poseNet(video,modeloaded);
Posenet.on('pose',gotposes);


}
function modeloaded(){
  console.log("model loaded");
}
function gotposes(results){
if(results.length>0){
  console.log(results);
  nose_x=results[0].pose.nose.x-200;
  nose_y=results[0].pose.nose.y-70;
}else{
  console.log("your code has error");
}
}
function draw(){
  image(video, 0,0,400,400);
  image(image1,nose_x,nose_y,160,70);
}
 function save_pic(){
  save("image.png")
 }