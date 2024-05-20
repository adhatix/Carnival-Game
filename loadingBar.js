class LoadingBar {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fillW = 0;
        this.fillColor = color(0, 200, 0);
    }

    show() {
        noStroke();
        fill(150);
        rectMode(CORNER);
        rect(this.x, this.y, this.w, this.h);
        fill(this.fillColor);
        rect(this.x, this.y, this.fillW, this.h);
    }

    fillProgress() {
        if (this.fillW < this.w) {
            this.fillW = map(strengthCounter, 0, 100, 0, this.w);
        }
    }

    entrophy() {
        if (this.fillW > 0) {
            this.fillW -= 0.5;
            if (this.fillW < 0) {
                this.fillW = 0;
            }
            if (this.fillW == this.w) {
            }
        }
    }
}
