import { error, success } from '../utils/print';
import { exists, exec } from '../utils/shell';

export async function ensureYarnExists() {
  const hasYarn = await exists('yarn');
  const hasNotion = await exists('notion');

  if (!hasYarn) {
    error('yarn is not installed. Installing...');

    if (hasNotion) {
      await exec('notion install yarn');
    } else {
      await exec('npm install -g yarn');
    }
    success('yarn successfully installed!');
  }
}
