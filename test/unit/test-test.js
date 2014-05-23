define(['myscripts'], function(MyScripts) {
  var assert = buster.assert;

  buster.testCase("Example", {
    "hello world": function() {
      assert.match(MyScripts.run(), {
        message: "Hello World!"
      });
    }
  });
});
