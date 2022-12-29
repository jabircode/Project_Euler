//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the given number?

function largestPrimeFactor(number) {

   // Initialize a variable to store the current factor
  let factor = 2;

  // While the factor is less than or equal to the square root of the number,
  // check if the number is divisible by the factor
  while (factor <= Math.sqrt(number)) {
    if (number % factor == 0) {
      // If it is, divide the number by the factor and store the result back in the number
      number /= factor;
    } else {
      // If it is not, increment the factor by 1 and try again
      factor++;
    }
  }

  // If the number is greater than 1 after the loop has completed, it is the largest prime factor.
  // Otherwise, the largest prime factor is the last value of 'factor' before it was incremented.
  return number > 1 ? number : factor;

}
