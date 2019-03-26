import execa from 'execa';

export function runEmber(...args: string[]) {
  return execa.shell(`ember ${args.join(' ')} --verbose`);
}
