// Problem 2
var a = 1,
    b = function a(x) {
        x && a(--x);
    };

result2 = 1;

test("Dmitry problem 2", function() {
  equal( result2, a, "We expect value to be 1" );
});

// Problem 3
function a(x) {
    return x * 2;
}
var a;

result3 = 'undefined';

test("Dmitry problem 2", function() {
  equal( result3, a, "We expect value to be undefined" );
});
