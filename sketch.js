let button1;
let strengthCounter = 0;
let loadingBar;

function setup() {
    createCanvas(400, 400);
    button1 = new Button(200, 200, 'test your strength');
    loadingBar = new LoadingBar(4, 50, 900, 20);
}

function draw() {
    background(220);
    button1.show();
    loadingBar.show();
    funnyText();
}

function mouseClicked() {
    button1.checkMouse();
    strengthMachine();
}

function strengthMachine() {
    if (button1.clicked) {
        strengthCounter++;
        loadingBar.fillProgress();
        button1.clicked = false;
    }
}

function funnyText() {
    if (strengthCounter >= 88) {
        noStroke();
        fill(0, 0, 0);
        rect(1, 400, 1200, 1000);
        textSize(30);
        fill(255);
        text('Couch Potato anyways loser', 10, 190);
    }
}
