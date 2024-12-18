# Unexpected String Concatenation in JavaScript

This example demonstrates a common error in JavaScript due to its dynamic typing system.  When adding numbers and strings, JavaScript performs string concatenation instead of numerical addition unless explicit type coercion is used. This can lead to unexpected results and bugs that are difficult to identify.

## Bug:

The `foo` function attempts to add a number and a string. JavaScript treats the number as a string, performing string concatenation which results in '11' instead of 2.

## Solution:

The solution is to explicitly convert the string '1' to a number using `parseInt()` or `Number()` before the addition, ensuring that numerical addition occurs as intended.