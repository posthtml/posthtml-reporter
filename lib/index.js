// ------------------------------------
// #POSTHTML - REPORTER - INDEX
// ------------------------------------

'use strict'

const chalk = require('chalk')
const symbols = require('log-symbols')

/**
 * Reporter Plugin
 *
 * @author PostHTML Michael Ciniawsky <michael.ciniawsky@gmail.com>
 * @license MIT
 *
 * @module posthtml-reporter
 *
 * @requires chalk
 *
 * @param  {Object} options Options
 *
 * @return {Function} posthtmlReporter Reporter Plugin
 */
module.exports = (options) => {
  // TODO
  options = options || { console: {}, browser: false, notify: false }
  /**
   * Reporter for PostHTML Messages API
   *
   * @method posthtmlReporter
   *
   * @param  {Object}         tree PostHTML AST
   *
   * @return {Object}         tree PostHTML AST
   */
  return function posthtmlReporter (tree) {
    if (tree.messages.length > 0) {
      const total = (type) => {
        return tree.messages
          .filter((msg) => msg.type === type ? msg : '')
          .length
      }

      const reporter = (msg) => {
        switch (msg.type) {
          case 'error': {
            console.log(chalk.bold.red(`[${msg.plugin}]: ${msg.message}`))
            break
          }
          case 'warning': {
            console.log(chalk.bold.yellow(`[${msg.plugin}]: ${msg.message}`))
            break
          }
          case 'dependency': {
            console.log(chalk.bold.white(msg.file))
            break
          }
          default: {
            break
          }
        }
      }

      const errors = total('error')
      const warnings = total('warning')
      const dependencies = total('dependency')

      console.log('\n')

      if (errors > 0) {
        console.log(symbols.error, chalk.bold.red(' Errors\n'))

        tree.messages
          .filter((msg) => msg.type === 'error' ? msg : '')
          .forEach((err) => reporter(err))

        console.log(chalk.bold.red(`\n${errors} error(s) found\n`))
      }

      if (warnings > 0) {
        console.log(symbols.warning, chalk.bold.yellow(' Warnings\n'))

        tree.messages
          .filter((msg) => msg.type === 'warning' ? msg : '')
          .forEach((warning) => reporter(warning))

        console.log(chalk.bold.yellow(`\n${warnings} warnings(s) found\n`))
      }

      if (dependencies > 0) {
        console.log(symbols.success, chalk.bold(' Dependencies\n'))

        tree.messages
          .filter((msg) => msg.type === 'dependency' ? msg : '')
          .forEach((dependency) => reporter(dependency))

        console.log(chalk.bold.white(`\n${dependencies} files(s) added\n`))
      }
    }

    return tree
  }
}
