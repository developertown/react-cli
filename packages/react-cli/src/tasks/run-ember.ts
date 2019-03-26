import { run } from '../utils/shell';

export function runEmber(command: string, showOutput = true) {
  return run(`ember ${command}`, showOutput ? { stdio: 'inherit' } : {});
}
