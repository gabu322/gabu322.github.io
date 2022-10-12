let canvasSize = 7.5;
let printButton, capacitance;

function setup() {

    canvas1 = createCanvas(canvasSize * 100, canvasSize * 100);
    noStroke();
    

    printButton = createButton("Save to Ctrl + c");
    printButton.position(width + canvasSize, canvasSize);

}

function draw() {
    background(255);
    rectMode(CORNER);
    
    fill(200);      //Metal Wires
    rect(width/2 - canvasSize*14, width / 2 - canvasSize, canvasSize * 5, width/2);    
    rect(width/2 + canvasSize*14, width / 2 - canvasSize, -(canvasSize * 5), width/2);    

    fill("orange"); //Capacitor shell
    circle(width/2, height / 2 - canvasSize*20, width / 2.5 );
    rect(width/2 - canvasSize*15, width/2 - canvasSize*7, canvasSize*7, canvasSize*15, canvasSize*2);
    rect(width/2 + canvasSize*15, width/2 - canvasSize*7, -(canvasSize*7), canvasSize*15, canvasSize*2);
    
    textAlign(CENTER, CENTER);

    fill(0);
    textStyle(BOLD);
    textSize(canvasSize*10);
    text("100", width/2, height / 2 - canvasSize*20);
    printButton.mousePressed(saveCanvasAsPrint);
}

function saveCanvasAsPrint() {
    
    saveCanvas('CeramicCapacitor' + resistance , "png");

}
