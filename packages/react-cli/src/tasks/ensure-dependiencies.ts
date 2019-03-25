import { ensureYarnExists } from './ensure-yarn-exists';
import { ensureEmberCliExists } from './ensure-ember-cli-exists';
import { checkForYarnInPath } from './check-for-yarn-in-path';
import Listr from 'listr';

export async function ensureDependencies() {
  const tasks = new Listr([
    {
      title: 'Checking for yarn',
      task: () => ensureYarnExists(),
    },
    {
      title: 'Checking that yarn exists in the $PATH',
      task: () => checkForYarnInPath(),
    },
    {
      title: 'Checking for ember-cli',
      task: () => ensureEmberCliExists(),
    }
  ]);

  return tasks.run(); // promise
}
