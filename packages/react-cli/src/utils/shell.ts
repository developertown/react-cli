import shell from 'shelljs';
import fs from 'fs';

export function exec(command: string, options = {}) {
  return new Promise((resolve, reject) => {
    if (hasNotion()) {
      // because this is loaded in login shells,
      // we need to set up notion manually. :(
      let path = shell.env['NOTION_HOME'];
      command = [`. ${path}/load.sh`, `export PATH="${path}/bin:$PATH"`, command].join(' && ');
    }

    shell.exec(
      command,
      { silent: true, shell: shell.which('bash').stdout, env: { FORCE_COLOR: 'true' }, ...options },
      function(code, value, error) {
        console.log([command, code, value, error].join(' --- '));
        return code === 0 ? resolve(value) : reject(error);
      }
    );
  });
}

export async function doesProgramExist(name: string) {
  try {
    const path = await exec(`which ${name}`);

    return path;
  } catch (e) {
    return false;
  }
}

export function hasNotion() {
  let path = shell.env['NOTION_HOME'];

  return fs.existsSync(path);
}
