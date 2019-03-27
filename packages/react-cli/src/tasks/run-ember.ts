import { exec } from '../utils/shell';

export async function runEmber(command: string, showOutput = false) {
  return await exec(`ember ${command}`, showOutput ? { silent: false } : {});
}
