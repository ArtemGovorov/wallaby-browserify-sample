var chai = require('chai');
var expect = chai.expect;
var Person = require('Person');

describe('Person', function () {
  it('should report name', function () {
    expect(new Person('John').name).to.equal('John');
  });
});