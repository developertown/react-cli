import { run } from '../utils/shell';

export function runEmber(command: string, showOutput = false) {
  return run(`ember ${command}`, showOutput ? { stdio: 'inherit' } : {});
}
