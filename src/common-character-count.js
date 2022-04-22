const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let inCommon = 0;
  while(s1) {
    const reg = new RegExp(s1[0], 'g');
    let inc2 = s2.match(reg);
    if (inc2) inc2 = inc2.length;
    else inc2 = 0;
    inCommon+=Math.min(s1.match(reg).length, inc2);
    s1 = s1.replace(reg,'');
    s2 = s2.replace(reg, '');
  }
  return inCommon 
}

module.exports = {
  getCommonCharacterCount
};
