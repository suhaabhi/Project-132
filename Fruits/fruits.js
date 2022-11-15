status = "";

function preload()
{
    img = loadImage('Bedroom.webp');
}

function setup()
{
    canvas = createCanvas(450,450);
    canvas.center;

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementsById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function gotResults()
{
    if(error)
    {
        console.log("error");
    }
    console.log('results');
}