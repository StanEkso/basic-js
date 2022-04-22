const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (mode=true) {
    this.mode = mode;
  }
  vigenere(message, key, mode='encrypt') {
    
    let result = ''
    let pos= 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        result+=message[i];
      } else {
        if (mode === 'encrypt') {
          result += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(pos % key.length) - 2 * 65) % 26 + 65);
        } else if (mode === 'decrypt') {
          result += String.fromCharCode((message.charCodeAt(i) - key.charCodeAt(pos % key.length) + 26) % 26 + 65);
        }
        pos++;
      }
    }
    return this.mode ? result : result.split('').reverse().join('');
  }

  encrypt(message,key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    return this.vigenere(message,key,'encrypt')
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    return this.vigenere(message,key,'decrypt')
  }
}

module.exports = {
  VigenereCipheringMachine
};
