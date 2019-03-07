import shell from 'shelljs';

export function runEmber(...args: string[]) {
  shell.config.silent = false;
  shell.exec(`ember ${args.join(' ')} `);
}
