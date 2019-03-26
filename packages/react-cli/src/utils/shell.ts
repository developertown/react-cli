import execa from 'execa';

export function run(command: string, opts = {}) {
  let options = {
    env: { FORCE_COLOR: true },
    ...opts
  };

  return execa.shell(command, options as any);
}
