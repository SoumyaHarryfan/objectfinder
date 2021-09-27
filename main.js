status = "";
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status : detecting objects ";
    input_value = document.getElementById("input");
}
function modelLoaded(){
    console.log("model loaded");
    status = true;
}
function draw(){
    image(video,300,300);
}