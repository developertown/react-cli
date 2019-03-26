import execa from 'execa';
import fs from 'fs';
import os from 'os';

export function run(command: string, opts = {}) {
  let options = {
    env: { FORCE_COLOR: true },
    ...opts,
  };

  return execa.shell(command, options as any);
}

export async function exec(command: string) {
  console.log('running', command);
  return await execa('bash', ['-ic', `"${command}"`], {
    shell: 'bash',
    stdio: 'inherit',
    reject: true,
  });
}

export async function exists(name: string) {
  const { stdout: hasName } = await execa('bash', [`-ic`, `"type -t ${name}"`], {
    shell: 'bash',
    reject: false,
  });

  return hasName.trim() !== '';
}

export function hasNotion() {
  return fs.existsSync(os.homedir() + './notion');
}
