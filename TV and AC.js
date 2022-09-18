status = "";
TV_AC_image = "";
objects = [];

function preload(){
   TV_AC_image = loadImage("TV and Ac.jpg.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modeLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modeLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(TV_AC_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(TV_AC_image,0,0,640,350);
    if(status !="")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(TV_AC_image, gotResult);
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label +" "+ percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b)
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
}
}