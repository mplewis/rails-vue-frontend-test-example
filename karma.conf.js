const webpack = require('./config/webpack/test.js')

const tests = ['test/javascript/**/*_test.js', 'test/javascript/**/*_test.jsx']

const files = tests.map(glob => ({ pattern: glob, watched: false }))
const preprocessors = {}
tests.forEach(glob => (preprocessors[glob] = ['webpack', 'sourcemap']))

module.exports = function (config) {
  config.set({
    reporters: ['mocha'],
    frameworks: ['mocha', 'sinon-chai'],
    browsers: ['jsdom'],
    files,
    preprocessors,
    webpack
  })
}
