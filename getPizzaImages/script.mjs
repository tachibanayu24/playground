import { createWriteStream } from "fs";
import fetch from "node-fetch";

for (let i = 1; i <= 300; i++) {
  fetch("https://api.lorem.space/image/pizza?w=500&h=500").then((res) => {
    res.body.pipe(createWriteStream(`./${i}.png`));
    console.info(`${i} pizza saved.`);
  });

  await new Promise((resolve) => {
    setTimeout(resolve, 10000);
  });
}
