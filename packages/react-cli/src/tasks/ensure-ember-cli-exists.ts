import { error, success } from '../utils/print';
import { exists, exec } from '../utils/shell';

export async function ensureEmberCliExists() {
  const hasEmber = await exists('ember');
  const hasNotion = await exists('notion');

  if (!hasEmber) {
    error('ember-cli is not installed. Installing...');

    if (hasNotion) {
      await exec('notion install ember-cli');
    } else {
      await exec('npm install -g ember-cli');
    }

    success('ember-cli successfully installed!');
  }
}
