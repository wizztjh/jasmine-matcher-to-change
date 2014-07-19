"use strict"
// this is for jasmine-node
try {
  require('../src/jasmine-matcher-to-change');
} catch(e) {
}

describe('jasmine matcher toChange', function(){
  describe('when action function changes the return value of the value function', function(){

    it('expects to change and passes the spec', function(){
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

  describe('when action function did not change the return value of the value function', function(){

    it('expects not to change and pass the spec', function(){
      function valueFunction(){
        return value
      }
      function changeFunction(){}
      var value = "original text";

      expect(changeFunction).not.toChange(valueFunction);
    });

  });

});
