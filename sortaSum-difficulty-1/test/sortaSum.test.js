var expect = require('chai').expect;
var sortaSum = require('./../sortaSum.js');

describe('sortaSum', function() {
  describe('#actual sum less than 10', function() {
    it('should return 7 with arguments 3 and 4', function() {
      var answer = sortaSum(3, 4);
      expect(answer).to.equal(7);
    });

    it('should return 9 with arguments 12 and -3', function() {
      var answer = sortaSum(12, -3);
      expect(answer).to.equal(9);
    });

    it('should return 9 with arguments -3 and 12', function() {
      var answer = sortaSum(-3, 12);
      expect(answer).to.equal(9);
    });
  });

  describe('#actual sum more than 19', function() {
    it('should return 21 with arguents 10 and 11', function() {
      var answer = sortaSum(10,11);
      expect(answer).to.equal(21);
    });

    it('should return 21 with arguments 14 and 7', function() {
      var answer = sortaSum(14, 7);
      expect(answer).to.equal(21);
    });

    it('should return 20 with arguments 14 and 6', function() {
      var answer = sortaSum(14, 6);
      expect(answer).to.equal(20);
    });
  });
  
  describe('#actual sum in **forbidden zone**', function() {
    it('should return 20 with arguments 9 and 4', function() {
      var answer = sortaSum(9,4);
      expect(answer).to.equal(20);
    });
    
    it('should return 20 with arguments 4 and 6', function() {
      var answer = sortaSum(4, 6);
      expect(answer).to.equal(20);
    });
  });

});