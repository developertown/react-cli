import { Command } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import { runEmber } from '../tasks/run-ember';
import { exec } from '../utils/shell';
import Listr from 'listr';
import { blueprint } from '../utils/info';

export class GenerateCommand extends Command {
  static description = 'Upgrades an existing project';

  static examples = [
    '$ react upgrade',
  ];

  async run() {
    await ensureDependencies();

    await runEmber(`init --blueprint ${blueprint}`, { stdio: 'inherit', silent: undefined });
  }
}
