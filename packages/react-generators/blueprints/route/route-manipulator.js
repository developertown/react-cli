const parser = require('@babel/parser');
const fs = require('fs');

function addRouteToDirectoryFile(routerPath, routeName, routeComponentImportPath) {
  let routerSource = fs.readFileSync(routerPath, 'utf-8');

  let ast = parser.parse(routerSource, {
    sourceType: "module",
  });

  console.log(ast);
    // fs.writeFileSync(routerPath, newRoutes.code());

}

function removeRouteFromDirectoryFile(routerPath, routeName, routeComponentImportPath) {

}

function addPathEntryToPathsFile(pathsPath, pathsPattern) {

}

function removePathEntryFromPathsFile(pathsPath, pathsPattern) {

}



module.exports = {
  addRouteToDirectoryFile,
  removePathEntryFromPathsFile,
  addPathEntryToPathsFile,
  removeRouteFromDirectoryFile
};
