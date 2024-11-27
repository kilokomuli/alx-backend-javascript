function calculateNumber(a, b) {
  // Round the first number to the nearest integer
  const roundedA = Math.round(a);
  // Round the second number to the nearest integer
  const roundedB = Math.round(b);
  // Add the two rounded numbers together and return the result
  return roundedA + roundedB;
}

// Export the calculateNumber function so it can be used in other files
module.exports = calculateNumber;
