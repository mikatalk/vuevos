#!/bin/sh

cd ./dist
cp -r ../.git .git
git branch -d releases
git checkout -b releases
git add .
git commit -m "Deployment"
git push origin releases --force
cd -