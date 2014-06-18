/* global describe */
/* global it */
'use strict';

var should = require('should');
var url = 'http://ghostbar.co/feed.xml';

describe('Parsing a file (net)', function () {
  it('should parse a RSS from an URL', function (done) {
    this.timeout(40000);

    var parser = require('../index');

    parser(url, 10, function (err, response) {
      should.not.exist(err);

      should.exist(response);

      should.exist(response.meta);

      done(err);
    });
  });
});

describe('Parsing a file with getUrl (net)', function () {
  it('should parse a RSS from an URL', function (done) {
    var parser = require('../index').getUrl;

    parser(url, 10, function (err, response) {
      should.not.exist(err);
      should.exist(response);
      should.exist(response.meta);

      done();
    });

  });
});
