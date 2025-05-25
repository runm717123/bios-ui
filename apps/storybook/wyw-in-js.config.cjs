const dashify = require('dashify')

// for more information on the configuration options, see:
// https://wyw-in-js.dev/configuration#options
module.exports = {
  evaluate: true,
  displayName: false,
  // converts camelCase classNames to kebab-case-for-friendly-css
  classNameSlug: (_hash, title) => dashify(title),
}
