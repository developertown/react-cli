import { run } from '../utils/shell';

export function runEmber(...args: string[]) {
  return run(`ember ${args.join(' ')}`);
}
