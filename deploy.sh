#!/bin/sh

cd ./dist
mkdir tmp
mkdir tmp/.git
cp -r ../.git tmp/.git
cd tmp
git checkout -b gh-pages
cd ..
cp -r tmp/.git .git
rm -rf tmp
rm app.html
echo "vuevos.com" > CNAME
git add .
git commit -m "Deployment"
git push origin gh-pages --force
cd ..