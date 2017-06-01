var expect        = require('chai').expect;
var roundedSum    = require('./../roundedSum.js');

describe('roundedSum', function() {
  describe('#all values are zero', function() {
    it('should return 0 from arguments 0,0,0', function() {
      expect(roundedSum(0, 0, 0)).to.equal(0);
    });
  });

  describe("#all values round down", function() {
    it('should return 0 from arguments 0,1,0', function() {
      expect(roundedSum(0, 1, 0)).to.equal(0);
    });
  });

  describe("#all values round up", function() {
    it('should return 60 from arguments 16, 17, 18', function() {
      expect(roundedSum(16, 17, 18)).to.equal(60);
    });
  });

  describe("#including values whose last digit is 0", function() {
    it('should return 30 from 10, 12, 13', function() {
      expect(roundedSum(10, 12, 13)).to.equal(30);
    });
  });

  describe("#including values whose last digit is 5", function() {
    it('should return 70 from 23, 24, 25', function() {
      expect(roundedSum(23, 24, 25)).to.equal(70);
    });

    it('should return 110 from arguments 25, 36, 42', function() {
      expect(roundedSum(25, 36, 42)).to.equal(110);
    });
  });

  describe("#potpourri", function() {
    it('should return 90 from arguments 24, 36, 32', function() {
      expect(roundedSum(24, 36, 32));
    });

    it('should return 140 from arguments 30, 48, 55', function() {
      expect(roundedSum(30, 48, 55)).to.equal(140);
    });

    it('should return 90 from arguments 25, 34, 25', function() {
      expect(roundedSum(25, 34, 25));
    });
  });
});