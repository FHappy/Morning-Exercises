var expect = require('chai').expect;
var fizzString = require('./../fizzString.js');

describe('fizzString', function() {
  describe("#starts with lowercase f but doesn't end with b", function() {
    it('should return fizz from argument fig', function() {
      expect(fizzString("fig")).to.equal("Fizz");
    });

    it('should return fizz from argument fooo', function() {
      expect(fizzString("fooo")).to.equal("Fizz");
    });
  });

  describe("#starts with uppercase f but doesn't end with b", function() {
    it('should return fizz from argument Fooo', function() {
      expect(fizzString("Fooo")).to.equal("Fizz");
    });

    it('should return fizz from argument Farang', function() {
      expect(fizzString("Farang")).to.equal("Fizz");
    });
  });

  describe("#ends with lowercase b but doesn't start with f", function() {
    it('should return Buzz from argument dib', function() {
      expect(fizzString("dab")).to.equal("Buzz");
    });

    it('should return Buzz from argument abcb', function() {
      expect(fizzString("abcb")).to.equal("Buzz");
    });
  });

  describe("#ends with uppercase b but doesn't start with f", function() {
    it('should return Buzz from argument HelloB', function() {
      expect(fizzString("HelloB")).to.equal("Buzz");
    });

    it('should return Buzz from argument daB', function() {
      expect(fizzString("daB")).to.equal("Buzz");
    });
  });

  describe("#starts with uppercase f and ends with uppercase b", function() {
    it('should return FizzBuzz from argument FoB', function() {
      expect(fizzString("FoB")).to.equal("FizzBuzz");
    });

    it('should return FizzBuzz from argument FooB', function() {
      expect(fizzString("FooB")).to.equal("FizzBuzz");
    });
  });

  describe("#starts with lowercase f and ends with uppercase b", function() {
    it('should return FizzBuzz from argument fOB', function() {
      expect(fizzString("fOB")).to.equal("FizzBuzz");
    });
  });

  describe("#starts with lowercase f and ends with lowercase b", function() {
    it('should return FizzBuzz from argument fob', function() {
      expect(fizzString("fob")).to.equal("FizzBuzz");
    });
  });

  describe("#doesn't start with f or end with b", function() {
    it('should return oops from argument oops', function() {
      expect(fizzString("oops")).to.equal("oops");
    });

    it('should return whoops from argument whoops', function() {
      expect(fizzString("whoops")).to.equal("whoops");
    });
  });
});