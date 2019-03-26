import Listr from 'listr';
import fs from 'fs';
import fetch from 'node-fetch';

const files = [
  '.eslintignore',
  '.eslintrc.js',
  '.prettierignore',
  '.prettierrc.js',
  'babelrc.config.js',
];

const configPath = 'https://raw.githubusercontent.com/developertown/config-files/master/TypeScript/';

export function downloadTSConfigFiles(path: string) {
  let taskFns = files.map(file => {
    let task = async () => {
      const res = await fetch(`${configPath}${file}`);
      await new Promise((resolve, reject) => {
        const fileStream = fs.createWriteStream(`${path}/${file}`);
        res.body.pipe(fileStream);
        res.body.on("error", (err) => {
          reject(err);
        });
        fileStream.on("finish", function() {
          resolve();
        });
      });
    };

    return {
      title: file,
      task
    };
  });

  let tasks = new Listr(taskFns);

  return tasks;
}
