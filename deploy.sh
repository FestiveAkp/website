#!/usr/bin/env sh

# abort on error
set -e

# build static assets
rm -rf dist
npm run build

# stage files
cd dist
git init
echo "akash.dev" > CNAME
git add -A
git commit -m "deploy: $(date +"%F %r")"

# push to repo festiveakp.github.io
git push -f "https://github.com/FestiveAkp/festiveakp.github.io.git" master

cd ..
echo ""
echo ">> Deploy successful"
