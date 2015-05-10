/** Simplified JSONIC which is a JSON parser that isn't strict
 *
 *  @copyright  Copyright (C) 2015 by yieme
 *  @module     jsonit
 */
 (function() {
  'use strict';
  function JsonitError(message) { // ref: https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript
    /*jshint validthis: true */
    this.constructor.prototype.__proto__ = Error.prototype
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = message
  }

  /** Jsonit
   *  @class
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function jsonitClass(options) {
    /*jshint validthis: true */
    var self = this
    options = options || {}
    self.value = 'Hello, world'
    return self
  }



  /** Jsonit
   *  @constructor
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function jsonit(options) {
    return new jsonitClass(options)
  }


  module.exports = jsonit
})();
