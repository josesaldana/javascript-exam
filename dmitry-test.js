// - Problem 1
if (!("a" in window)) {
    var a = 1;
}

result1 = 'undefined';

//Test provided by ADMIOS
test("Dmitry problem 1", function() {
  equal( result1, 'undefined', "We expect value to be undefined" );
});

// - Problem 2
var b = 1,
    c = function b(x) {
        x && b(--x);
    };

result2 = 1;

// Test provided by ADMIOS
test("Dmitry problem 2", function() {
  equal( result2, b, "We expect value to be 1" );
});

// - Problem 3
function e(x) {
    return x * 2;
}
var e;

result3 = function e1(x) { return x * 2 };

// Test provided by ADMIOS
test("Dmitry problem 3", function() {
  equal( typeof(result3), typeof(Function), "We expect result to be a function" );
  equal( result3(2), 4, "We expect resulting function to return 4 when passed the value 2 as a parameter" );
});

// - Problem 4
function f(x, y, a) {
    arguments[2] = 10;
    return a;
}
f(1, 2, 3);

result4 = 10;

// Test provided by ADMIOS
test("Dmitry problem 4", function() {
  equal( result4, 10, "We expect result to be 10" );
});

// - Problem 5
function a() {
    return this;
}
a.call(null);

result5 = function() {};

// Test provided by ADMIOS
test("Dmitry problem 5", function() {
  equal( typeof(result5), typeof(Function), "We expect result to be a function" );
});