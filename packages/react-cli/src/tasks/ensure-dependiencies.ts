import { ensureYarnExists } from './ensure-yarn-exists';
import { ensureEmberCliExists } from './ensure-ember-cli-exists';

export async function ensureDependencies() {
  await ensureYarnExists();
  await ensureEmberCliExists();
}
