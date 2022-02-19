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

  start() {}

  update() {}

  draw() {}

  onDestroy() {}
}
