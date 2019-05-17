import { Command } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import { runEmberInteractively } from '../tasks/run-ember';
import inquirer = require('inquirer');
import Listr from 'listr';
import { downloadTSConfigFiles } from '../tasks/download-ts-config';
import { exec } from '../utils/shell';
import { appBlueprint } from '../utils/info';

const requiredOptions = [`--blueprint ${appBlueprint}`, '--skip-npm'];

export class NewCommand extends Command {
  static description = 'Creates a new react application';

  static examples = [
    '$ react new project-name --jsonapi --redux',
    '$ react new project-name --auth0',
    '$ react new project-name',
  ];

  static args = [{ name: 'projectName', required: false }];

  async run() {
    const { args } = this.parse(NewCommand);

    await ensureDependencies();

    let prompts = [];

    if (!args.projectName) {
      prompts.push({
        type: 'input',
        message: 'Project Name',
        name: 'name',
        default: 'MyProject',
      });
    }

    const answers: any = await inquirer.prompt([
      ...prompts,
      {
        type: 'checkbox',
        message: 'Select Functionality',
        name: 'functionality',
        choices: [
          { name: 'Auth0', value: 'auth0' },
          { name: 'i18n', value: 'i18n' },
          { name: '{ json:api }', value: 'jsonapi' },
          { name: 'redux', value: 'redux' },
        ],
      },
      {
        type: 'checkbox',
        message: 'Select UI Framework',
        name: 'style',
        choices: [
          { name: 'Material UI', value: 'materialUi' },
          { name: 'SASS', value: 'sass' },
        ],
      },
    ]);

    let options = [
      args.projectName || answers.name,
      ...answers.functionality.map((feat: string) => `--${feat}`),
      ...answers.style.map((styleFramework: string) => `--${styleFramework}`),
    ];

    let argsForEmber = ['new', ...options, ...requiredOptions].join(' ');

    let tasks = new Listr([
      {
        title: 'Creating react project',
        task: async () => await runEmberInteractively(argsForEmber),
      },
      {
        title: 'Downloading shared config for DeveloperTown',
        task: () => downloadTSConfigFiles(options[0]),
      },
      {
        title: 'Installing Dependencies',
        task: () => exec(`cd ${options[0]} && yarn install`),
      },
      {
        title: 'Formatting code',
        task: () => exec(`cd ${options[0]} && yarn lint:js --fix --quiet`),
      },
    ]);

    await tasks.run();
  }
}
