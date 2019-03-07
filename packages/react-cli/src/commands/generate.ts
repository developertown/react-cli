import { Command } from '@oclif/command';

export class GenerateCommand extends Command {
  static description = 'Generates a blueprint';

  async run() {
    console.log('goodbye, world!');
  }
}
