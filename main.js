import { Game } from "./scripts/game-engine/game.js";
import { GameObject } from "./scripts/game-engine/GameObject.js";

//Game.start();
Game.constructor();
// Game.Drawing.drawArc(
//   Game.canvas.width / 2,
//   (Game.canvas.height / 2) * 1.3,
//   100,
//   "white"
// );
// Game.Drawing.drawText(
//   Game.canvas.width / 2,
//   Game.canvas.height / 2,
//   "Start Game"
// );

// (async () => {
//   await Game.start();
// })();

Game.start();

class Rect extends GameObject {
  constructor() {
    super(50, 50, 20, 20);
  }

  draw(color) {
    this.game.Drawing.clearCanvas();
    this.game.Drawing.drawRect(this.x, this.y, this.widht, this.height, color);
  }

  update() {
    if (this.input.onKey(this.input.key.LEFT)) {
      this.x -= 20;
    }
    if (this.input.onKey(this.input.key.RIGHT)) {
      this.x += 20;
    }
  }
}

const rect = new Rect();
const rect2 = new Rect();

Game.addObject(rect);
Game.addObject(rect2);
rect.draw();

document.addEventListener("keydown", ({ keyCode }) => {
  Game.update();
  Game.draw();
});
