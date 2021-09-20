mustache=""
function preload(){
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
    canvas=createCanvas(300 , 300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide();
    posenet=ml5.poseNet(video , modelLoaded);
    posenet.on('pose' , gotposes);
}
function draw(){
    image(video , 0 , 0 , 300 , 300);
    image(mustache , noseX , noseY , 30 , 30)
}
function modelLoaded(){
    console.log("Model is Loaded");
}
function TakeSnapshot(){
    save("Piture.jpg")
}
noseX=0
noseY=0
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x 
        noseY=results[0].pose.nose.y
    }
}