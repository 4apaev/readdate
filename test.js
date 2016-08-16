'use strict';
let equal = require('assert').equal;
let convert = require('./_readdate');

describe('readdate', () => {

  let a = new Date(2016, 0)
  let b = new Date(2015, 0)

  it('should return single year',    () => equal(convert(a-b, 'year'), '1 year'))
  it('should return year in plural', () => equal(convert(a-b.setFullYear(2014), 'year'), '2 years'))/
  it('should convert to months',     () => equal(convert(a-b, 'month'), '24 months'))

})