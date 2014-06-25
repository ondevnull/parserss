/* global describe */
/* global it */
'use strict';

var should = require('should');

describe('Loading object.getFile', function () {
  var a = require('../index').getFile;

  it('should create an exported module with type Object', function () {
    should.exist(a);
  });
});

describe('Sending a file to object.getFile', function () {
  var parse = require('../index').getFile;

  it('should parse the file ./feed.xml', function (done) {
    parse(__dirname + '/feed.xml', 10, function (err, response) {
      should.not.exist(err);
      should.exist(response);
      should.exist(response.meta);

      done();
    });
  });
});
