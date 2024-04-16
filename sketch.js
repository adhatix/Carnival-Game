let button1;

function setup() {
    createCanvas(400, 400);
    button1 = new Button(200, 200, 65); // Initialize button1
}

function draw() {
    background(220);
    button1.show(255, 0, 0);
}
