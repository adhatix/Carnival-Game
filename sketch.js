let button1;

function setup() {
    createCanvas(400, 400);
    button1 = new Button(200, 200, 65); // Initialize button1
}

function mousePressed() {
    button1.clicked(mouseX, mouseY);
}
function draw() {
    background(220);
    button1.show(255, 0, 0);
}

class Button {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    show(colorR, colorG, colorB) {
        noStroke();
        fill(colorR, colorG, colorB);
        ellipse(this.x, this.y, this.r, this.r);
    }

    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d <= this.r) {
            console.log('IT WORKS');
        }
    }
}
