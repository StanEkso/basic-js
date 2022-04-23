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
  const locationDomain = `.${dom[0]}`;
  let countLoc = 0;
  const baseDomain = `.${dom[0]}.${dom[1]}`;
  let countBase = 0;
  const counts = [];
  for (let i = 2; i < dom.length;i++) counts.push(0);
  let result = {};
  let pos = 2;
  for (let domain of domains) {
    pos = 2;
    if(domain.includes(locationDomain)) countLoc++;
    if (domain.includes(dom[1])) countBase++;
    if (domain.includes(dom[pos])) counts[pos++-2]++;
  }
  result[locationDomain] = countLoc;
  result[baseDomain] = countBase;
  for (let i = 2; i < dom.length; i++) result[baseDomain+`.${dom[i]}`] = counts[i-2]
  return result
}

module.exports = {
  getDNSStats
};
