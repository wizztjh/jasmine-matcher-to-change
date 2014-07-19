beforeEach(function() {
  this.addMatchers({

    toChange: function(expectedFunction, options){
      var actionFunction, actualFromValue, actualToValue, expectedFromValue, expectedToValue, fromValueSame, notText, toValueSame;

      notText = (this.isNot ? " not" : "");

      actionFunction = this.actual;

      actualFromValue = expectedFunction();
      actionFunction();
      actualToValue = expectedFunction();

      return actualFromValue !== actualToValue
    }

  })
});
