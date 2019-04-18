import { Command, flags } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import { runEmber, runEmberInteractively } from '../tasks/run-ember';
import { exec } from '../utils/shell';
import Listr from 'listr';
import inquirer = require('inquirer');

export class GenerateCommand extends Command {
  static description =
    'Generates a route with tests, path entries, and intermediare route files if applicable';
  static aliases = ['g'];

  static examples = [
    '$ react generate component component-name',
    '$ react g component component-name',
    '$ react g component path/to/component-name',
    '$ react g component component-name --route=dashboard/posts',
    '',
    '$ react g route route-name',
    '$ react g route path/to/route-name',
  ];

  static args = [{ name: 'generator', required: true }, { name: 'name', required: true }];

  static flags = {
    route: flags.string({
      description:
        'directory of a route to place the component in. Will live in `route-path/-components/`',
      hidden: false,
      multiple: false,
      required: false,
    }),
    button: flags.string({
      name: 'Button'
    })
  };

  async run() {
    const { args, flags } = this.parse(GenerateCommand);

    await ensureDependencies();

    let generatorArgs = ['g', args.generator, args.name];

    if (flags.route) {
      generatorArgs.push(`--path=${flags.route}/-components`);
    }

    const answers: any = await inquirer.prompt([
      {
        type: 'checkbox',
        message: 'Select Material Components',
        name: 'materialComponent',
        choices: [
          { name: 'Button', value: 'Button' },
          { name: 'TextField', value: 'TextField' },
          { name: 'Table', value: 'Table' },
          { name: 'Card', value: 'Card' }
        ]
      }
    ])

    let options = [
      ...answers.materialComponent.map((component: string) => `--${component}`)
    ]
    await runEmberInteractively([...generatorArgs, ...options].join(' '));
  }
}
