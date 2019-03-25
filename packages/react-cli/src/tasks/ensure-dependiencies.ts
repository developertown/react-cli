import { ensureYarnExists } from './ensure-yarn-exists';
import { ensureEmberCliExists } from './ensure-ember-cli-exists';
import { checkForYarnInPath } from './check-for-yarn-in-path';

export async function ensureDependencies() {
  await ensureYarnExists();
  await checkForYarnInPath();
  await ensureEmberCliExists();
}
