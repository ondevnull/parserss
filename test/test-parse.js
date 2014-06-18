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
  var parse = require('../index').parse;

  it('should parse an XML from the directory', function (done) {
    var fs = require('fs');
    var file = fs.createReadStream( __dirname + '/feed.xml');

    parse(file, 10, function (err, response) {
      should.not.exist(err);
      should.exist(response);
      should.exist(response.meta);

      done();
    });
  });
});
