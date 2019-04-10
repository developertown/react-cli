import { Command } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import { runEmber } from '../tasks/run-ember';
import { exec } from '../utils/shell';
import Listr from 'listr';

export class GenerateCommand extends Command {
  static description = 'Generates a route with tests, path entries, and intermediare route files if applicable';
  static aliases = ['g'];

  static examples = [
    '$ react g component component-name',
    '$ react generate component component-name',
    '$ react generate component path/to/component-name',
    '$ react generate route route-name',
    '$ react generate route path/to/route-name',
  ];

  static args = [{ name: 'generator', required: true }, { name: 'name', required: true }];

  async run() {
    const { args } = this.parse(GenerateCommand);

    await ensureDependencies();

    let generatorArgs = ['g', args.generator, args.name];

    await runEmber(generatorArgs.join(' '), { silent: false });

    let tasks = new Listr([
      {
        title: 'Formatting',
        task: () => exec('yarn lint:js --fix --quiet'),
      }
    ]);

    await tasks.run();
  }
}
