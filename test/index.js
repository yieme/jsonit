var should = require('chai').should(),
    jsonit = require('..')
;

describe('jsonit', function() {
  it('should say hello', function(done) {
    var test = jsonit()
    test.value.should.equal('Hello, world');
    done();
  });
});
