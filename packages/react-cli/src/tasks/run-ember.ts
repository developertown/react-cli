import shell from 'shelljs';

export function runEmber(...args: string[]) {
  shell.exec(`npx ember-cli ${args.join(' ')} `, { silent: false, });
}
