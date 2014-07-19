"use strict"
require('../src/jasmine-matcher-to-change');

describe('jasmine matcher toChange', function(){
  describe('when action function changes the return value of the value function', function(){

    it('returns true', function(){
      function valueFunction(){
        return value
      }
      function changeFunction(){
        value = "changed text"
      }
      var value = "original text";

      expect(changeFunction).toChange(valueFunction);
    });

  });
});
