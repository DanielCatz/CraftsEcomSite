// utils.js

const BijectiveHash = {
  decode: str => {
    const alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
    const base = alphabet.length;
    let decoded = 0;
    while (str) {
      const index = alphabet.indexOf(str[0]);
      const power = str.length - 1;
      decoded += index * Math.pow(base, power);
      str = str.substring(1);
    }
    return decoded;
  },

  encode: num => {
    const alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
    const base = alphabet.length;
    let encoded = '';
    while (num) {
      const remainder = num % base;
      num = Math.floor(num / base);
      encoded = alphabet[remainder].toString() + encoded;
    }
    return encoded;
  }
};
export default BijectiveHash;
