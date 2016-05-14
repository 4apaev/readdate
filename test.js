'use strict';
let assert = require('assert');
let convert = require('./readdate');

describe('fs.readFile', () => {

  let a = new Date(2016, 0)
  let b = new Date(2015, 0)

  it('should return single year',    () => assert.equal(convert(a-b), '1 year'))
  it('should return year in plural', () => assert.equal(convert(a-b.setFullYear(2014)), '2 years'))
  it('should convert to months',     () => assert.equal(convert(a-b, 'months'), '24 months'))
});