let canvasSize = 10;

let bandList = ['firstBand', 'secondBand', 'thirdBand', 'multiplier', 'tolerance'];

let mycanvas, button, resistance;

let resistorValue;

function setup() {
    
    mycanvas = createCanvas(canvasSize * 100, canvasSize * 100);
    noStroke();
    for(let i = 0; i < bandList.length; i++) {
        bandList[i] = createBand(bandList[i], i);
    }

    button = createButton();
    button.position(width + canvasSize, canvasSize * bandList.length * 3);

}

function draw() {
    background(240);

    button.mousePressed(saveCanvasAsPrint);
    let bandColor = [];
    for(let i = 0; i < bandList.length; i++) {
        bandColor[i] = bandList[i].value();
    }
    rectMode(CORNER);
    //Base resistor coloring
    fill(200);
    rect(0, canvasSize * 47.5, width, canvasSize * 5);     //Metal wire
    fill(47, 165, 213);
    rect(canvasSize * 15, canvasSize * 37.5, canvasSize * 20, canvasSize * 25, canvasSize * 5);  //Right side
    rect(canvasSize * 65, canvasSize * 37.5, canvasSize * 20, canvasSize * 25, canvasSize * 5); //Left side
    rect(canvasSize * 32.5, canvasSize * 40, canvasSize * 35, canvasSize * 20);     //Center of resistor
    
    //Bands coloring
    fill(bandColor[0]);
    rect(canvasSize * 22, canvasSize * 37.5, canvasSize * 5, canvasSize * 25);              //Band 1 - first value
    fill(bandColor[1]);
    rect(canvasSize * 35, canvasSize * 40, canvasSize * 5, canvasSize * 20);                //Band 2 - second value
    fill(bandColor[2]);
    rect(width / 2 - canvasSize * 2.5, canvasSize * 40, canvasSize * 5, canvasSize * 20);   //Band 3 - third value
    fill(bandColor[3]);
    rect(canvasSize * 60, canvasSize * 40, canvasSize * 5, canvasSize * 20);                //Band 4 - multiplier value
    fill(bandColor[4]);
    rect(canvasSize * 73, canvasSize * 37.5, canvasSize * 5, canvasSize * 25);              //Band 5 - tolerance value

    //Printing Canvas
    resistance = calculateResistorValue(bandColor);
    printResistance(resistance);
}

//Band creation function
function createBand(band, position) {

    band = createSelect();
    band.option('Black');
    band.option('Brown', '#964B00');
    band.option('Red');
    band.option('Orange');
    band.option('Yellow');
    band.option('Green');
    band.option('Blue');
    band.option('Purple');
    band.option('Grey');
    band.option('White');
    band.option('Golden', '#eaca1d');
    band.selected('White');
    band.position(width + canvasSize, canvasSize * 3 * position)
    return band;
}

function saveCanvasAsPrint() {
    
    saveCanvas(mycanvas, 'Resistor' + resistance + 'Ω', "png");
}

function calculateResistorValue(bandList) {
    let totalValue = 0, place = 0;
    for(let i = 2; i >= 0; i--) {
        totalValue += pow(10, place) * bandValue(bandList[i]);
        place++;
    }
    if(bandValue(bandList[3]) < 1) {
        return (bandValue(bandList[3]) == 0) ? (totalValue) : (totalValue * bandValue(bandList[3]));
    } else {
        return totalValue * pow(10, bandValue(bandList[3]));
    }
}

function bandValue (band) {
    if(band == 'Black') {
        return 0;
    } else if(band == 'Brown' || band == '#964B00') {
        return 1;
    } else if(band == 'Red') {
        return 2;
    } else if(band == 'Orange') {
        return 3;
    } else if(band == 'Yellow') {
        return 4;
    } else if(band == 'Green') {
        return 5;
    } else if(band == 'Blue') {
        return 6;
    } else if(band == 'Purple') {
        return 7;
    } else if(band == 'Grey') {
        return 8;
    } else if(band == 'White') {
        return 9;
    } else if (band == '#eaca1d') {
        return 0.1;
    }
}

function printResistance(resistance) {
    if(resistance >= 1000000000) {
        resistance = resistance / 1000000000;
        resistance = String(resistance) + 'G';
    } else if(resistance >= 1000000) {
        resistance = resistance / 1000000;
        resistance = String(resistance) + 'M';
    } else if (resistance >= 1000) {
        resistance = resistance / 1000;
        resistance = String(resistance) + 'K' ;
    }
    resistance = String(resistance) + 'Ω'; 
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(50);
    fill(255);
    text(resistance, width / 2 + 1, height / 2 + 1);
    text(resistance, width / 2 - 1, height / 2 + 1);
    text(resistance, width / 2 + 1, height / 2 - 1);
    text(resistance, width / 2 - 1, height / 2 - 1);
    text(resistance, width / 2, height / 2 + 1);
    text(resistance, width / 2, height / 2 - 1);
    text(resistance, width / 2 + 1, height / 2);
    text(resistance, width / 2 - 1, height / 2);
    fill(50);
    text(resistance, width / 2, height / 2);
    return resistance;
}