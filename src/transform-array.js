const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (typeof arr != 'object') throw new Error("'arr' parameter must be an instance of the Array!")
  const m = [...arr];
  for (let i = 0; i < m.length; i++) {
    if (typeof m[i] == 'string') {
      switch (m[i]) {
        case ("--discard-next"):
          m.splice(i,2);
        break;
        case ("--discard-prev"):
          m.splice(i-1,2);
        break;
        case ("--double-next"):
          m[i] = 2 * m[i+1];
        break;
        case ("--double-prev"):
          m[i] = 2 * m[i-1];
        break;
      }
    }
  }
  return m;
}

module.exports = {
  transform
};
