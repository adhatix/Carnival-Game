class Button {
    constructor(x, y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.buttonWidth = 80;
        this.buttonHeight = 40;
        this.bg = color(0, 200, 200);
        this.clicked = false;
    }

    show() {
        rectMode(CENTER);
        this.bg = color(0, 200, 200);
        fill(this.bg);
        rect(this.x, this.y, this.buttonWidth, this.buttonHeight, 10);
    }

    checkMouse() {
        if (
            mouseX > this.x - this.buttonWidth / 2 &&
            mouseX < this.x + this.buttonWidth / 2 &&
            mouseY > this.y - this.buttonHeight / 2 &&
            mouseY < this.y + this.buttonHeight / 2
        ) {
            console.log(this.name);
            this.clicked = true;
        }
    }
}
