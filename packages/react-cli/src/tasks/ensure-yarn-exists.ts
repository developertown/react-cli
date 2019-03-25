import shell from 'shelljs';
import { error } from '../utils/print';

export async function ensureYarnExists() {
  if (!shell.which('yarn')) {
    error('yarn is not installed. Installing...');
    shell.exec('npm install -g yarn', { silent: false });
  }
}
