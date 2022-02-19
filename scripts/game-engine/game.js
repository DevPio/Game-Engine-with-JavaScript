import { Draw } from "./draw.js";
import { ImageManage } from "./image-manage.js";
import { SondManage } from "./sound-manage.js";
import { Input } from "./input.js";
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

let x = 5;
let y = 25;
let velocida = 1.5;

export const Game = {
  Input,
  moveX: true,
  ImageManage,
  SondManage,
  isRunning: false,
  Drawing: undefined,
  canvas: {
    element: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    top: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
    center: {
      x: undefined,
      y: undefined,
    },
  },
  constructor() {
    Game.canvas.element = canvas;
    Game.canvas.ctx = context;
    Game.canvas.width = canvas.width;
    Game.canvas.height = canvas.height;
    Game.canvas.top = 0;
    Game.canvas.bottom = canvas.height;
    Game.canvas.left = 0;
    Game.canvas.right = canvas.width;
    Game.canvas.center.x = canvas.width / 2;
    Game.canvas.center.y = canvas.height / 2;
    let { ctx, width, height } = Game.canvas;
    Game.Drawing = new Draw(ctx, width, height);
  },
  start() {
    if (!this.isRunning) {
      Game.constructor();
      Game.isRunning = true;
      Game.run();
    }
  },
  stop() {
    if (Game.isRunning) {
      Game.isRunning = false;
      Game.run();
    }
  },
  run() {
    if (Game.isRunning) {
      Game.update();
      Game.draw();
      requestAnimationFrame(Game.run);
    }
  },
  update() {
    if (Input.onKey(Input.key.RIGHT)) {
      if (x > Game.canvas.width) {
        x = 0;
      } else {
        x += 5;
      }
    }

    if (Input.onKey(Input.key.LEFT)) {
      if (x > Game.canvas.width) {
        x = 0;
      } else {
        x -= 5;
      }
    }

    if (Input.onKey(Input.key.DOWN)) {
      if (y > Game.canvas.height) {
        y = 0;
      } else {
        y += 5;
      }
    }

    if (Input.onKey(Input.key.UP)) {
      if (y < 0) {
        y = Game.canvas.height;
      } else {
        y -= 5;
      }
    }
  },
  async draw() {
    Game.Drawing.clearCanvas();

    // const img = await ImageManage.load({
    //   name: "imagemQ",
    //   src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    // });

    // Game.Drawing.drawImages(img, 10, 10, 300, 400);

    // console.log(img);
    Game.Drawing.drawRect(x, y, 10, 10);
  },
};
