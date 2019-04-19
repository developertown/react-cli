#!/bin/bash
#
# bumps the version of the blueprint packages
#
# $1 - major | minor | patch 
#      (really just whatever you can pass to `npm version`)

versionIncrement=$1
packages=( "packages/react-cli" "packages/react-app" "packages/react-generators" )

for var in "${packages[@]}"
do
  echo "Updating version of ${var}..."
  (
      cd $var && \
      npm version  ${versionIncrement}
  )
done