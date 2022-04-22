const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dom = [];
  if (domains.length === 0) return {}
  for (let i = 0; i < domains.length;i++) {
    let dns = domains[i].split('.').reverse();
    for (let object of dns) {
      if (dom.includes(object)) continue;
      dom.push(object);
    }
  }
  let result = {};
  let count = [];
  for (let i = 0; i < dom.length; i++) count[i] = 0;
  for (let domain of domains) {
    if (domain.includes(dom[0])) count[0]++;
    if (domain.includes(dom[0]) && domain.includes(dom[1])) count[1]++;
    for (let index = 2; index <dom.length; index++ ) {
      if (domain.includes(dom[0]) && domain.includes(dom[1]) && domain.includes(dom[index])) count[index]++;
    }
  }
  result[`.${dom[0]}`] = count[0];
  result[`.${dom[0]}.${dom[1]}`] = count[1];
  for (let index = 2; index <dom.length; index++ ) { 
    result[`.${dom[0]}.${dom[1]}.${dom[index]}`] = count[index];
  }
  return result
}

module.exports = {
  getDNSStats
};
