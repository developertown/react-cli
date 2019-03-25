import shell from 'shelljs';
import { error, info } from '../utils/print';

export function checkForYarnInPath() {
  let path = shell.env['PATH'];
  let output = shell.exec('yarn global bin', { silent: true }).stdout.toString();
  let yarnBin = output.trim();

  if (!path.includes(yarnBin)) {
    error(`yarn's bin folder is not in the $PATH`);
    info(`add '${yarnBin}' to the $PATH`);
    info(``);
    info(`export PATH="$PATH:${yarnBin}"`);

    process.exit(1);
  }
}
