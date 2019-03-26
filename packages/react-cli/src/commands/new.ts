import { Command } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import { runEmber } from '../tasks/run-ember';
import inquirer = require('inquirer');
import Listr from 'listr';
import execa = require('execa');
import { downloadTSConfigFiles } from '../tasks/download-ts-config';
import { run } from '../utils/shell';

const defaultBlueprint = '@developertown/react-app-blueprint';
const blueprint = process.env.REACT_APP_BLUEPRINT_PATH || defaultBlueprint;
const requiredOptions = [
  `--blueprint ${blueprint}`,
  '--yarn',
  '--skip-git',
  // '--directory tmp',
];

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
      // TODO: implement this:
      // {
      //   type: 'list',
      //   message: 'Select UI Framework',
      //   name: 'style',
      //   choices: [{ name: 'Material UI', value: 'materialUi' }],
      // },
    ]);

    let options = [
      args.projectName || answers.name,
      ...answers.functionality.map((feat: string) => `--${feat}`),
    ];

    if (answers.style) {
      options.push(`--${answers.style}`);
    }

    let tasks = new Listr([
      {
        title: 'Creating react project',
        task: () => runEmber(['new', ...options, ...requiredOptions].join(' ')),
      },
      {
        title: 'Formatting package.json',
        task: () => run(`cd ${options[0]} && npx format-package -w`)
      },
      {
        title: 'Downloading shared config for DeveloperTown',
        task: () => downloadTSConfigFiles(options[0]),
      },
      {
        title: 'Formatting code',
        task: () => run(`cd ${options[0]} && yarn lint:js --fix --quiet`)
      }
    ]);

    await tasks.run();
  }
}
