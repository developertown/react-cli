import { Command } from '@oclif/command';
import { ensureDependencies } from '../tasks/ensure-dependiencies';
import { runEmber } from '../tasks/run-ember';
import { appBlueprint } from '../utils/info';

export class UpgradeCommand extends Command {
  static description = 'Upgrades an existing project';

  static examples = [
    '$ react upgrade',
  ];

  async run() {
    await ensureDependencies();

    await runEmber(`init --blueprint ${appBlueprint}`, { stdio: 'inherit', silent: undefined });
  }
}