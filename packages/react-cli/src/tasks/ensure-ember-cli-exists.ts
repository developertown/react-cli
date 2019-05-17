import Listr from 'listr';
import { error, success } from '../utils/print';
import { exec, doesProgramExist, hasVolta } from '../utils/shell';

export async function ensureEmberCliExists() {
  const hasEmber = await doesProgramExist('ember');

  if (!hasEmber) {
    error('ember-cli is not installed.');
    let command = 'npm install -g ember-cli';

    if (hasVolta()) {
      command = 'volta install ember-cli';
    }

    let tasks = new Listr([
      {
        title: `Installing ember-cli: '${command}'`,
        task: () => exec(command),
      },
    ]);

    await tasks.run();

    success('ember-cli successfully installed!');
  }
}
