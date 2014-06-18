/* global describe */
/* global it */
'use strict';

var should = require('should');

describe('Loading object.parse', function () {
  var a = require('../index').parse;

  it('should create an exported module with type Object', function () {
    should.exist(a);
  });
});

describe('Sending a file to object.parse', function () {
  var parse = require('../index').getFile;

  it('should parse an XML from the directory', function (done) {
    parse(__dirname + '/feed.xml', 10, function (err, response) {
      should.not.exist(err);
      should.exist(response);
      should.exist(response.meta);

      done();
    });
  });
});
