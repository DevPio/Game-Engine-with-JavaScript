import { Game } from "./game.js";

export class GameObject {
  constructor(x = 0, y = 0, widht = 50, height = 50) {
    this.x = x;
    this.y = y;
    this.widht = widht;
    this.height = height;
    this.game = Game;
    this.Drawing = Game.Drawing;
    this.input = Game.Input;
  }

  get left() {
    return this.x;
  }

  set left(value) {
    this.x = value;
  }

  get right() {
    return this.x + this.widht;
  }

  set right(value) {
    this.x = value - this.widht;
  }

  get top() {
    return this.y;
  }

  set top(value) {
    this.y = value;
  }
  get bottom() {
    return this.y + this.height;
  }

  set bottom(value) {
    this.y = value - this.height;
  }

  get center() {
    return {
      x: this.widht / 2,
      y: this.height / 2,
    };
  }

  set centerX(value) {
    this.x = value + this.widht / 2;
  }

  set centerY(value) {
    this.y = value + this.height / 2;
  }
  start() {}

  update() {}

  draw() {}

  onDestroy() {}
}
