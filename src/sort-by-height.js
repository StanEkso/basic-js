const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const beside = [];
  arr = arr.map(element => {
    if (element === -1) return element;
    else beside.push(element);
    return 'temp';
  })
  beside.sort((a,b) => (a-b));
  let pos = 0;
  arr = arr.map(el => {
    if (el === 'temp') el = beside[pos++];
    return el;
  })
  return arr
}

module.exports = {
  sortByHeight
};
