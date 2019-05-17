import { execSync } from 'child_process';

export function runEmberInteractively(command: string) {
  return execSync(`ember ${command}`, { stdio: 'inherit' });
}
