/* global describe */
/* global it */
'use strict';

var should = require('should');

describe('Loading the module', function () {
  var a = require('../index');

  it('should create an exported module with type Object', function () {
    a.should.be.an.instanceOf(Object);
  });
});
