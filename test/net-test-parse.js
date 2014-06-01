/* global describe */
/* global it */
'use strict';

var should = require('should');

describe('Parsing a file (net)', function () {
  it('should parse a RSS from an URL', function (done) {
    this.timeout(40000);

    var parser = require('../index');
    //var url = 'http://ghostbar.co/feed.xml';

    parser('http://ghostbar.co/feed.xml', 10, function (err, response) {
      should.not.exist(err);

      should.exist(response);

      should.exist(response.meta);

      done(err);
    });
  });
});
