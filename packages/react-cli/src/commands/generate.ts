import { Command, flags } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import { runEmber, runEmberInteractively } from '../tasks/run-ember';
import { exec } from '../utils/shell';
import Listr from 'listr';

export class GenerateCommand extends Command {
  static description =
    'Generates a route with tests, path entries, and intermediare route files if applicable';
  static aliases = ['g'];

  static examples = [
    '$ react g component component-name',
    '$ react generate component component-name',
    '$ react generate component path/to/component-name',
    '$ react generate route route-name',
    '$ react generate route path/to/route-name',

    '$ react generate component component-name --in=routes/route-name/-components/'
  ];

  static args = [
    { name: 'generator', required: true },
    { name: 'name', required: true },
  ];

  static flags = {
    in: flags.string({
      description: 'root directory to place the component in, relative to the `src/ui/` directory',
      hidden: false,
      multiple: false,
      env: 'COMPONENT_ROOT',
      default: 'components',
      required: false,
    }),
  };

  async run() {
    const { args, flags } = this.parse(GenerateCommand);

    await ensureDependencies();

    let generatorArgs = ['g', args.generator, args.name];

    if (flags.in) {
      generatorArgs.push(`--path=${flags.in}`);
    }

    await runEmberInteractively(generatorArgs.join(' '));

    let tasks = new Listr([
      {
        title: 'Formatting',
        task: () => exec('yarn lint:js --fix --quiet'),
      },
    ]);

    await tasks.run();
  }
}
