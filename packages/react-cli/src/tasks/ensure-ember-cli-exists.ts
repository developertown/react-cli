import shell from 'shelljs';
import { error } from '../utils/print';

export async function ensureEmberCliExists() {
  if (!shell.which('ember')) {
    error('ember-cli is not installed. Installing...');
    shell.exec('yarn global add ember-cli');
  }
}
