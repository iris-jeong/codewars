/* 
  -- INSTRUCTIONS --
  Write a program that will calculate the number of trailing zeros in a factorial of a given number.
  N! = 1 * 2 * 3 *  ... * N
  Be careful 1000! has 2568 digits...
  For more info, see: http://mathworld.wolfram.com/Factorial.html

  Examples:
  zeros(6) = 1
  # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
  zeros(12) = 2
  # 12! = 479001600 --> 2 trailing zeros

  Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function zeros(n) {
	let numZeroes = 0;

	// The # trailing zeroes is determined by the number of times 5 is a factor.
	while (n > 0) {
		n = Math.floor(n / 5);
		numZeroes += n;
	}

	return numZeroes;
}
