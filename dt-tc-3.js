t("Dmitry problem 3", function() {
  equal( typeof(result3), typeof(Function), "We expect result to be a function" );
  equal( result3(2), 4, "We expect resulting function to return 4 when passed the value 2 as a parameter" );
});
