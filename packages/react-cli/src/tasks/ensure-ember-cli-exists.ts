import Listr from 'listr';
import { error, success } from '../utils/print';
import { exec, doesProgramExist, hasNotion } from '../utils/shell';

export async function ensureEmberCliExists() {
  const hasEmber = doesProgramExist('ember');

  if (!hasEmber) {
    error('ember-cli is not installed.');

    let tasks = new Listr([
      {
        title: 'Installing ember-cli',
        task: async () => {
          if (hasNotion()) {
            await exec('notion install ember-cli');
          } else {
            await exec('npm install -g ember-cli');
          }
        },
      },
    ]);

    await tasks.run();

    success('ember-cli successfully installed!');
  }
}
