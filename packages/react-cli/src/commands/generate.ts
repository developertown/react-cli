import { Command } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import { runEmber } from '../tasks/run-ember';
import Listr from 'listr';

export class GenerateCommand extends Command {
  static description = 'Generates a blueprint';
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

    await runEmber(['g', args.generator, args.name].join(' '), true);
  }
}
