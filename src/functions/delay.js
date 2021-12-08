export default async function delay(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(1);
    }, interval);
  });
};