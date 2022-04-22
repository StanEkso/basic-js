const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  items: [],
  getLength() {
    return this.items.length;
    
  },
  addLink(value) {
    this.items.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.items = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.items.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.items.reverse();
    return this;
  },
  finishChain() {
    let result = this.items.join('~~');
    this.items = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
