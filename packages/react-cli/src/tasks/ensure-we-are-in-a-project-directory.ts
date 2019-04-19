// https://nodejs.org/api/modules.html#modules_file_modules
const MODULE_NOT_FOUND = 'MODULE_NOT_FOUND';

export function ensureWeAreInAProjectDirectory() {
  let packageJson;

  const packagePath = `${process.cwd()}/package.json`;

  try {
    packageJson = require(packagePath);
  } catch (e) {
    if (e.code === MODULE_NOT_FOUND) {
      throw new Error(`package.json is not in the current working directory: ${packagePath}`);
    }
  }

  return; // everything is fine
}
