import chalk from 'chalk';

export function success(msg: string) {
  print(chalk.green(`✔ ${msg}`));
}

export function info(msg: string) {
  print(msg);
}

export function error(msg: string) {
  print(chalk.red(`✘ ${msg}`));
}

export function print(msg: string) {
  console.log(msg);
}
