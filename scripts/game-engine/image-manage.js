const imageList = {};

export const ImageManage = {
  image(name) {
    return imageList[name];
  },
  load({ name, src }) {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = function () {
        imageList[name] = {
          name,
          with: image.width,
          height: image.height,
          src: image.src,
          element: this,
        };

        resolve(imageList[name]);
      };

      image.onerror = (error) => {
        reject(error);
      };

      image.src = src;
    });
  },

  *loadAllIterator(images) {
    for (let index = 0; index < images.length; index++) {
      yield ImageManage.load(images[index]);
    }
  },
  async loadAll(images) {
    let imagesResult = [];
    for await (const image of ImageManage.loadAllIterator(images)) {
      imagesResult.push(image);
    }

    return imagesResult;
  },
};
