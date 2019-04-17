import { Command } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import Listr from 'listr';
import { downloadTSConfigFiles } from '../tasks/download-ts-config';
import { exec } from '../utils/shell';
import { ensureWeAreInAProjectDirectory } from '../tasks/ensure-we-are-in-a-project-directory';

export class FetchConfigsCommand extends Command {
  static description = 'Fetches config files for linting and typescript projects';

  static examples = ['$ react fetch-configs'];

  async run() {
    await ensureDependencies();

    const tasks = new Listr([
      {
        title: 'Checking to make sure we are in a project directory',
        task: () => ensureWeAreInAProjectDirectory(),
      },
      {
        title: 'Downloading shared config for DeveloperTown',
        task: () => downloadTSConfigFiles(),
      },
      {
        title: 'Installing Dependencies',
        task: () => exec(`yarn install`),
      },
    ]);

    await tasks.run();
  }
}
