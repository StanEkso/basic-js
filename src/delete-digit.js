const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  const digitCount = arr.length;
  let permutations = [];
  for (let i = 0; i < digitCount; i++) {
    let num = String(n).split('');
    num.splice(i,1);
    permutations.push(num.join(''));
  }
  return Math.max(...permutations)
}

module.exports = {
  deleteDigit
};
