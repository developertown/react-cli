import { Command } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import { runEmber } from '../tasks/run-ember';
import inquirer = require('inquirer');

export class NewCommand extends Command {
  static description = 'Creates a new react application';

  static examples = [
    '$ react new project-name --jsonapi --redux',
    '$ react new project-name --auth0',
    '$ react new project-name',
  ];

  static args = [
    { name: 'directory' },
    { name: 'dotnetBackend' },
  ];

  async run() {
    // const { args } = this.parse(NewCommand);

    await ensureDependencies();

    const answers: any = await inquirer.prompt([{
      type: 'input',
      message: 'Project Name',
      name: 'name',
      default: "MyProject",
    }, {
      type: 'checkbox',
      message: 'Select Functionality',
      name: 'functionality',
      choices: [
        { name: 'Auth0', value: 'auth0' },
        { name: 'i18n', value: 'i18n' },
        { name: '{ json:api }', value: 'jsonapi' },
        { name: 'redux', value: 'redux' },
      ]
    }, {
      type: 'list',
      message: 'Select UI Framework',
      name: 'style',
      choices: [
        { name: 'Material UI', value: 'materialUi' },
      ]
    }]);

    runEmber(
      'new',
      answers.name,
      ...answers.functionality.map((feat :string) => `--${feat}`),
      `--${answers.style}`,
      '--blueprint ../react-app',
      '--yarn',
      '--skip-git',
      '--directory tmp'
    );
  }
}
