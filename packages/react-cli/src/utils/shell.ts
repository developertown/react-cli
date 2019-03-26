import execa from 'execa';

export function run(command: string) {
  let options = {
    env: { FORCE_COLOR: true }
  };

  return execa.shell(command, options as any);
}
