import Listr from 'listr';
import { error, success } from '../utils/print';
import { exec, hasNotion, doesProgramExist } from '../utils/shell';

export async function ensureYarnExists() {
  const hasYarn = doesProgramExist('yarn');

  if (!hasYarn) {
    error('yarn is not installed.');
    let tasks = new Listr([
      {
        title: 'Installing Yarn',
        task: async () => {
          if (hasNotion()) {
            await exec('notion install yarn');
          } else {
            await exec('npm install -g yarn');
          }
        },
      },
    ]);

    await tasks.run();
    success('yarn successfully installed!');
  }
}
