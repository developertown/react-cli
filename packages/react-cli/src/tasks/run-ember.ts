import { exec } from '../utils/shell';

export async function runEmber(command: string, execOptions = {}) {
  return await exec(`ember ${command}`, execOptions);
}
