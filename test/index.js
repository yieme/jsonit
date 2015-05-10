'use strict';

var expect = require('chai').expect,
    jsonit = require('..')
;


describe('jsonit', function() {
  var expected = JSON.stringify({ "op": "ok"})
  it('should return ' + expected, function(done) {
    var test = jsonit('ok')
    expect(JSON.stringify(test)).to.equal(expected)
    done();
  });
});

describe('jsonit', function() {
  var expected = JSON.stringify({ "you": "ok"})
  it('should return ' + expected, function(done) {
    var test = jsonit('ok', 'you')
    expect(JSON.stringify(test)).to.equal(expected)
    done();
  });
});

describe('jsonit', function() {
  var expected = JSON.stringify({ "op": "say", "hello": "world" })
  it('should return ' + expected, function(done) {
    var test = jsonit('say,hello:world')
    expect(JSON.stringify(test)).to.equal(expected)
    done();
  });
});
