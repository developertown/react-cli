import { exec } from '../utils/shell';
import { execSync } from 'child_process';

export async function runEmber(command: string, execOptions = {}) {
  return await exec(`ember ${command}`, execOptions);
}

export function runEmberInteractively(command: string) {
  return execSync(`ember ${command}`, { stdio: 'inherit' });
}
