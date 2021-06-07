noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;
function setup(){
   video=createCapture(VIDEO);
   video.size(600,500);
   canvas=createCanvas(600,400);
   canvas.position(700,200);
   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotpose);
}
function draw(){
    background("#9cbcf0");
    fill('#eb2855');
    stroke("#f08080");
    square(noseX,noseY,difference);
    document.getElementById("square_sides").innerHTML="Width and height= "+difference;
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotpose(results){
    if(results.length>0){
       console.log(results);
       noseX=results[0].pose.nose.x;
       noseY=results[0].pose.nose.y;
       console.log("Nose x: "+noseX+"Nose y: "+noseY);
       leftwristX=results[0].pose.leftWrist.x;
       rightwristX=results[0].pose.rightWrist.x;
       difference=floor(leftwristX-rightwristX);
       console.log("Left wrist x= "+leftwristX+"Right wrist x= "+rightwristX+"and the difference is "+difference);

    }
}