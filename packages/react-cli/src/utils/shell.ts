import shell from 'shelljs';
import fs from 'fs';
import util from 'util';

export function exec(command: string, options = {}): Promise<string> {
  return new Promise((resolve, reject) => {
    let bashPath = shell.which('bash').stdout;

    // because this is loaded in login shells,
    // we need to set up notion manually. :(
    if (hasNotion()) {
      command = applyNotion(command);
    }

    if (hasNvm()) {
      command = applyNvm(command);
    }
    // console.log('hasNotion', hasNotion(), 'full command: ', command);
    shell.exec(
      command,
      { silent: true, shell: bashPath, env: { FORCE_COLOR: 'true' }, ...options },
      function(code, value, error) {
        // console.log([command, code, value, error].join(' --- '));
        return code === 0 ? resolve(value) : reject(error);
      }
    );
  });
}

function applyNvm(command: string) {
  let path = shell.env['NVM_DIR'];
  let home = shell.env['HOME'];

  return [
    `export HOME="${home}"`,
    `export PATH="${path}/bin:$PATH"`,
    `. ${path}/nvm.sh`,
    command,
  ].join(' && ');
}

function applyNotion(command: string) {
  let path = shell.env['NOTION_HOME'];
  let home = shell.env['HOME'];

  return [
    `export HOME="${home}"`,
    `export PATH="${path}/bin:$PATH"`,
    `. ${path}/load.sh`,
    command,
  ].join(' && ');
}

export async function doesProgramExist(name: string) {
  try {
    const path = await exec(`which ${name}`);

    return path;
  } catch (e) {
    return false;
  }
}

export async function doesApplicationHaveModule(name: string): Promise<boolean> {
  const readFile = util.promisify(fs.readFile);
  const contents = await readFile('./package.json', 'utf8');
  const contentsToJSON = JSON.parse(contents.toString());

  return Object.keys(contentsToJSON.dependencies).indexOf(name) != -1;
}

export function hasNvm() {
  let path = shell.env['NVM_DIR'];

  if (!path) return false;

  return fs.existsSync(path);
}

export function hasNotion() {
  // return false; // notion has some bugs atm
  let path = shell.env['NOTION_HOME'];

  if (!path) return false;

  return fs.existsSync(path);
}
