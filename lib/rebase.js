'use strict'

var JSON8Pointer = require('json8-pointer')
var parse = JSON8Pointer.parse
var serialize = JSON8Pointer.serialize

module.exports = function rebase(patch) {
  var p = {}

  patch.forEach(function(op) {
    p[op.path] = op.value
  })
  return p
}

var rebase = module.exports

var patch = [
  {op: 'add', path: '/', value: {}},
  {op: 'add', path: '/foo', value: 'foo'},
]
console.log(rebase(patch))
