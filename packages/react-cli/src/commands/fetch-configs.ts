import { Command } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import Listr from 'listr';
import { downloadTSConfigFiles } from '../tasks/download-ts-config';
import { exec } from '../utils/shell';

export class FetchConfigsCommand extends Command {
  static description = 'Fetches config files for linting and typescript projects';

  static examples = ['$ react fetch-configs'];

  async run() {
    await ensureDependencies();

    let currentWorkingDirectory = './';
    let tasks = new Listr([
      {
        title: 'Downloading shared config for DeveloperTown',
        task: () => downloadTSConfigFiles(currentWorkingDirectory),
      },
      {
        title: 'Installing Dependencies',
        task: () => exec(`yarn install`),
      },
    ]);

    await tasks.run();
  }
}
