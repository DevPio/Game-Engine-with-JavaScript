import { Game } from "./scripts/game-engine/game.js";

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

(async () => {
  await Game.start();
})();

document.addEventListener("keyup", ({ keyCode }) => {
  console.log(keyCode);
  if (keyCode === 38) {
    Game.moveX = false;
  }
  if (keyCode === 39) {
    Game.moveX = true;
  }
});
