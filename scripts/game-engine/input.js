const key = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown",
  SPACE: "Space",
  ENTER: "Enter",
  A: "KeyA",
  W: "KeyW",
  D: "KeyD",
  S: "KeyS",
};
const keyState = {};
export const Input = {
  get key() {
    return key;
  },
  onKey(key) {
    return keyState[key];
  },
};

window.addEventListener("keydown", (event) => {
  keyState[event.code] = true;
});

window.addEventListener("keyup", (event) => {
  delete keyState[event.code];
});
