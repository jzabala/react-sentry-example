const path = require('path');
const { upload } = require('sentry-files');
const { version } = require('./package.json');

upload({
  version: version,
  organization: process.env.ERROR_REPORTING_ORGANIZATION,
  project: process.env.ERROR_REPORTING_PROJECT,
  token: process.env.ERROR_REPORTING_API_TOKEN,
  files: getFiles(),
})
  .then(data => console.log('----- SUCCESS ----\n', data))
  .catch(error => console.log('---- ERROR ----\n', error));

function getFiles() {
  const BUILD_DIR = 'build';
  const assetsFile = path.resolve(BUILD_DIR, 'asset-manifest.json');
  const filePaths = require(assetsFile);
  const jsFilesRegex = /(\.js(.map)?)$/;
  return Object.keys(filePaths)
    .filter(f => jsFilesRegex.test(f))
    .map(f => ({
      name: `~/${filePaths[f]}`,
      path: path.resolve('build', filePaths[f]),
    }));
}
