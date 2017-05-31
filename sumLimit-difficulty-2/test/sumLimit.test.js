var expect = require('chai').expect;
var sumLimit = require('./../sumLimit.js');

describe('sortaSum', function() {
  describe('#actual sum has same number of digits', function() {
    it('should return 5 with arguments 2 and 3', function() {
      expect(sumLimit(2,3)).to.equal(5);
    });

    it('should return 9 with arguments 8 and 1', function() {
      expect(sumLimit(8,1)).to.equal(9);
    });

    it('should return 50 with arguments 11 and 39', function() {
      expect(sumLimit(11,39)).to.equal(50);
    });

    it('should return 9000 with arguments 9000 and 1', function() {
      expect(sumLimit(9000,1)).to.equal(9000);
    });


  });

  describe('#actual sum has different number of digits than first number', function() {
    it('should return 8 with arguments 8 and 3', function() {
      expect(sumLimit(8,3)).to.equal(8);
    });

    it('should return 11 with arguments 11 and 99', function() {
      expect(sumLimit(11,99)).to.equal(11);
    });

    it('should return 99 (the first value) with arguments 99 and 1', function() {
      expect(sumLimit(99,1)).to.equal(99);
    });

    it('should return 1 (the first value) with arguments 1 and 123', function() {
      expect(sumLimit(1, 123)).to.equal(1);
    });


  });
});