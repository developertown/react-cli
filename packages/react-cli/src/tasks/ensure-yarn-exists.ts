import Listr from 'listr';
import { error, success } from '../utils/print';
import { exec, hasVolta, doesProgramExist } from '../utils/shell';

export async function ensureYarnExists() {
  const hasYarn = await doesProgramExist('yarn');

  if (!hasYarn) {
    error('yarn is not installed.');
    let command = 'npm install -g yarn';

    if (hasVolta()) {
      command = 'volta install yarn';
    }

    let tasks = new Listr([
      {
        title: `Installing Yarn: '${command}'`,
        task: () => exec(command),
      },
    ]);

    await tasks.run();
    success('yarn successfully installed!');
  }
}
