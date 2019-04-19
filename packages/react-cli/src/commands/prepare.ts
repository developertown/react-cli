import { Command } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import { exec } from '../utils/shell';
import fs from 'fs';
import Listr from 'listr';

export class PrepareCommand extends Command {
  static description = 'Prepares an app to use the react-cli';

  static examples = ['$ react prepare'];

  async run() {
    let tasks = new Listr([
      {
        title: 'Checking for required dependencies',
        task: () => ensureDependencies(),
      },
      {
        title: 'Ensuring that blueprints are installed',
        task: () =>
          new Listr([
            {
              title: 'Checking for package.json',
              task: () => (fs.existsSync('./package.json') ? Promise.resolve() : Promise.reject()),
            },
            {
              title: 'Installing blueprint dependencies',
              task: () =>
                exec('yarn add --dev ember-cli @developertown/react-generators-blueprint'),
            },
          ]),
      },
      {
        title: 'Finished!',
        task: () => Promise.resolve(),
      },
    ]);

    await tasks.run();
  }
}
