#!/bin/sh

cd ./dist
cp -r ../.git .git
gco -b releases
git add .
git commit -m "Deployment"
git push origin releases
cd -