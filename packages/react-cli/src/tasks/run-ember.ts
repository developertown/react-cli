import shell from 'shelljs';

export function runEmber(...args: string[]) {
  shell.exec(`ember ${args.join(' ')} `, { silent: false, });
}
