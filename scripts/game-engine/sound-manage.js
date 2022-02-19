const sondList = {};

export const SondManage = {
  play(name) {
    sondList[name].element.play();
  },
  load({ name, path }) {
    return new Promise((resolve, reject) => {
      const audio = new Audio();

      audio.oncanplaythrough = () => {
        sondList[name] = {
          element: audio,
          name,
          src: path,
        };

        resolve(sondList[name]);
      };

      audio.onerror = (error) => {
        reject(error);
      };

      audio.src = path;
    });
  },

  *loadAllIterator(sounds) {
    for (let index = 0; index < sounds.length; index++)
      yield SondManage.load(sounds[index]);
  },

  async loadAll(sounds) {
    for await (const sound of SondManage.loadAllIterator(sounds)) {
      console.log(sounds);
    }
  },
};
