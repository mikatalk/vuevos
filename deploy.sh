#!/bin/sh

cd ./dist
cp -r ../.git .git
git branch -d gh-pages
git checkout -b gh-pages
git add .
git commit -m "Deployment"
git push origin gh-pages --force
cd -