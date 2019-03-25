import execa from 'execa';

export function runEmber(...args: string[]) {
  return execa.shell(`npx ember-cli ${args.join(' ')} `);
}
