var expect = require('chai').expect;
var countClusters = require('./../countClusters.js');

describe('countClusters', function() {
  describe("#empty array", function() {
    it('should return 0 from an empty array', function() {
      expect(countClusters([])).to.equal(0);
    });
  });

  describe("#no clusters in array", function() {
    it('should return 0 from [1,2,3,4,5,9]', function() {
      expect(countClusters([1,2,3,4,5,9])).to.equal(0);
    });
  });

  describe("#entire array is one cluster", function() {
    it('should return 1 from [2,2,2,2,2]', function() {
      expect(countClusters([2,2,2,2,2])).to.equal(1);
    });
  });

  describe("#more than one separated cluster", function() {
    it('should return 2 from [2,1,1,5,7,6,6]', function() {
      expect(countClusters([2,1,1,5,7,6,6])).to.equal(2);
    });

    it('should return 4 from [0,2,2,3,3,5,6,8,8,8,4,5,4,6,6]', function() {
      expect(countClusters([0,2,2,3,3,5,6,8,8,8,4,5,4,6,6])).to.equal(4);
    });

    it('should return 5 from [0,0,0,2,1,1,3,3,4,6,6,0,5,0,0,0]', function() {
      expect(countClusters([0,0,0,2,1,1,3,3,4,6,6,0,5,0,0,0])).to.equal(5);
    });
  });

  

});