/** Simplified JSONIC which is a JSON parser that isn't strict
 *
 *  @copyright  Copyright (C) 2015 by yieme
 *  @module     jsonit
 */
 (function() {
  'use strict';
  var defaultType = 'op'
  var jsonic = require('jsonic')
  function JsonItError(message) { // ref: https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript
    /*jshint validthis: true */
    this.constructor.prototype.__proto__ = Error.prototype
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = message
  }



  /** Jsonit
   *  @constructor
   *  @param      {string} jsonit  - simplified JSONIC
   *  @param      {string} type    - optional type to assign
   *  @param      {string} setType - optional set default type
   *  @return     {object}
   */
  function jsonit(data, type, setType) {
    if (typeof data !== 'string') {
      throw new JsonItError('Invalid JsonIt type: ' + typeof data)
    }
    if (data === '') {
      return {}
    }
    var result
    try {
      var colonPos = data.indexOf(':')
      var commaPos = data.indexOf(',')
      if (colonPos < 0 || (commaPos >= 0 && commaPos < colonPos)) {
        if (setType) defaultType = setType
        type = type || defaultType
        data = type + ':' + data
      }
      result = jsonic(data)
    } catch(err) {
      throw new JsonItError(err.message)
    }
    return result
  }



  module.exports = jsonit
})();
