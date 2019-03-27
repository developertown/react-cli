import { exec } from '../utils/shell';

export function runEmber(command: string, showOutput = false) {
  return exec(`ember ${command}`, showOutput ? { silent: false } : {});
}
