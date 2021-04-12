import publish from 'npm-git-publish';

publish('./dist', 'git@github.com:mikatalk/vuevos.git').then(result => {
  // respond to whether publishing occurred
  // (e.g. print something to stdout)
  if (result.conclusion === publish.PUSHED) {

  } else if (result.conclusion === publish.SKIPPED) {

  } else if (result.conclusion === publish.CANCELLED) {

  }
});