import Command from '@oclif/command';
import { ensureMaterialExists } from '../tasks/ensure-material-exist';
import { runEmberInteractively } from '../tasks/run-ember';
import inquirer = require('inquirer');

export class GenerateMaterialCommand extends Command {
    static description = 'Creates components with Material Components installed';

    static aliases = ['m'];
    
    static examples = [
        '$ react material component-name',
        '$ react m path/to/component'
    ]

    static args = [{ name: 'name', required: true }];

    async run(): Promise<any> {
        const { args } = this.parse(GenerateMaterialCommand);
        let options = [];

        await ensureMaterialExists();

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
        options = [
            ...answers.materialComponent.map((component: string) => `--${component}`)
        ]

        let generatorArgs = ['g', 'material', args.name];

        await runEmberInteractively([...generatorArgs, , ...options].join(' '));
    }

}
// TODO: handle class and functional components