import Listr from 'listr';
import { error, success } from '../utils/print';
import { exec, doesApplicationHaveModule } from '../utils/shell';

export async function ensureMaterialExists(): Promise<Boolean> {
    const hasMaterial = await doesApplicationHaveModule('@material');
    if (!hasMaterial) {
        error('material is not installed.');
        
        let command = 'yarn add @material-ui/core @material-ui/icons';

        let tasks = new Listr([
            {
                title: `Installing Material: '${command}'`,
                task: () => exec(command),
            },
        ]);

        await tasks.run();
        success('Material-UI successfully installed!');
    }
    return hasMaterial;
}
