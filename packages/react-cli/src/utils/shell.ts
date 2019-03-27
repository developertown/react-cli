import execa from 'execa';
import shell from 'shelljs';
import fs from 'fs';
import os from 'os';

export function run(command: string, opts = {}) {
  let options = {
    env: { FORCE_COLOR: true },
    ...opts,
  };

  return execa.shell(command, options as any);
}

export function exec(command: string) {
  return new Promise((resolve, reject) => {
    shell.exec(command, function(code, value, error) {
      code === 0 ? resolve(value) : reject(error);
    });
  });
}

export function doesProgramExist(name: string) {
  return shell.which(name);
}

export function hasNotion() {
  return fs.existsSync(os.homedir() + './notion');
}
