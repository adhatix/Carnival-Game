let button1;
let strengthCounter = 0;
let loadingBar;
let timer = 5;

function setup() {
    createCanvas(400, 400);
    button1 = new Button(200, 200, 'test your strength');
    loadingBar = new LoadingBar(2, 50, width - 5, 20);
}

function draw() {
    background(220);
    button1.show();
    loadingBar.show();
    loadingBar.entrophy();
    funnyText();
    fill(0);
    textSize(60);
    text(timer, 125, 300);
    if (frameCount % 60 === 0 && timer > 0) {
        timer--;
    }
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
    if (loadingBar.fillW >= loadingBar.w || timer == 0) {
        noStroke();
        fill(0, 0, 0);
        rect(1, 1, 400, 400);
        textSize(25);
        fill(255);
        text('Maybe you did it idrc, good job ig', 10, 190);
    }
}
