
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // base case
  if (fromN === toN) {
    return fromN;
  }

  // if fromN < toN, add all number fromN toN
  return fromN + sum(fromN + 1, toN)
}

module.exports = sum;



