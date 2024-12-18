function foo(a, b) {
  return a + Number(b);
}

console.log(foo(1, '1')); // Output: 2

function foo2(a, b) {
  return a + parseInt(b, 10);
}

console.log(foo2(1, '1')); // Output: 2