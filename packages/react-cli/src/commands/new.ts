import { Command } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import { runEmber } from '../tasks/run-ember';
import inquirer = require('inquirer');
import Listr from 'listr';
import execa = require('execa');


const requiredOptions = [
  '--blueprint @developertown/react-app-blueprint',
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
        task: () => runEmber('new', ...options, ...requiredOptions),
      },
      {
        title: 'Formatting package.json',
        task: () => execa.shell(`cd ${options[0]} && npx format-package -w`)
      }
    ]);

    await tasks.run();
  }
}
