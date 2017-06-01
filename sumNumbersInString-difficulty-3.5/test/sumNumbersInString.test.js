var expect = require('chai').expect;
var sumNumbersInString = require('./../sumNumbersInString.js');

describe('sumNumbersInString', function() {
  describe("#only one number in string", function() {
    it('should return 123 from foo123BAR', function() {
      expect(sumNumbersInString("foo123BAR")).to.equal(123);
    });
  });

  describe("#more than one number in string", function() {
    it('should return 420 from "200 Developing200 The 20Web"', function() {
      expect(sumNumbersInString("200 Developing200 The 20Web")).to.equal(420);
    });

    it('should return 188 from 1-877 CASH NOW', function() {
      expect(sumNumbersInString("1-877-CASH NOW")).to.equal(188);
    });
  });

  describe("#no numbers in the string", function() {
    it('should return 0 from ugh', function() {
      expect(sumNumbersInString("ugh")).to.equal(0);
    });
  });

  describe("#empty string", function() {
    it('should return 0 from empty string', function() {
      expect(sumNumbersInString("")).to.equal(0);
    });
  });
});