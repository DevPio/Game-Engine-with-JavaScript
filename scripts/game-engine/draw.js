export class Draw {
  constructor(canvasContext, width, height) {
    this.canvasContext = canvasContext;
    this.width = width;
    this.height = height;
    this.center = {
      x: this.width / 2,
      y: this.height / 2,
    };
    this.fontOptions = {
      family: "Orbitron",
      size: 20,
      h: "center",
      v: "middle",
    };

    this.setText();
  }

  setText(options = {}) {
    this.fontOptions = { ...this.fontOptions, ...options };
    this.canvasContext.font = `${this.fontOptions.size}px "${this.fontOptions.family}"`;
    this.canvasContext.textAlign = this.fontOptions.h;
  }
  drawArc(cx, cy, r, color) {
    let ctx = this.canvasContext;
    ctx.beginPath();

    ctx.arc(cx, cy, 50, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.stroke();
  }

  drawText(x, y, text, color = "white") {
    this.canvasContext.fillStyle = color;

    this.canvasContext.fillText(text, x, y);
  }
  drawRect(x, y, width, heigth, color = "white") {
    let ctx = this.canvasContext;

    ctx.fillStyle = color;

    ctx.fillRect(x, y, width, heigth);
  }

  clearCanvas() {
    this.canvasContext.beginPath();
    this.canvasContext.clearRect(0, 0, this.width, this.height);
  }

  drawImages(image, x, y, width, height) {
    x = x ?? 0;

    y = y ?? 0;

    width = width ?? image.width;
    height = height ?? image.height;

    this.canvasContext.drawImage(image.element, x, y, width, height);
  }
}
