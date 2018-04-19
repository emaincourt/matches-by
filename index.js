const get = require('lodash.get')
const curry = require('lodash.curry')

function matchBy(fields, obj1, obj2) {
  return [].concat(fields).every(key => get(obj1, key) === get(obj2, key))
}

module.exports = curry(matchBy)
