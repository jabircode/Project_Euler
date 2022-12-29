// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  // Initialize a variable to store the sum of the multiples
  let sum = 0;

  // Iterate over all the numbers from 3 to 'number' - 1
  for (let i = 3; i < number; i++) {
    // If 'i' is a multiple of 3 or 5, add it to the sum
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }

  // Return the sum of the multiples
  return sum;
}

// Find the sum of the multiples of 3 and 5 below 1000
console.log(multiplesOf3and5(1000)); // 233168
