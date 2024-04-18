class LoadingBar {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fillWidth = 0;
        this.fillColor = color(0, 200, 0);
        this.lastCounter = 0;
    }

    show() {
        noStroke();
        fill(150);
        rect(this.x, this.y, this.width, this.height);
        fill(this.fillColor);
        rect(this.x, this.y, this.fillWidth, this.height);
    }

    fillProgress() {
        if (this.fillWidth < this.width) {
            if (strengthCounter > this.lastCounter) {
                this.fillWidth = map(strengthCounter, 0, 100, 0, this.width);
                this.lastCounter = strengthCounter;
            }
        }
    }
}
