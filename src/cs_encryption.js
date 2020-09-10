/*
  eslint-disable func-names
*/

function CeasarSipher(string, shift) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const encrypt = function () {
    let res = '';
    const arr = string.split('');
    arr.forEach(elt => {
      const letter = elt.toLowerCase();
      if (alphabet.includes(letter)) {
        const index = (alphabet.indexOf(letter) + shift) % 26;
        res += elt === elt.toUpperCase() ? alphabet[index].toUpperCase() : alphabet[index];
      } else {
        res += elt;
      }
    });

    return res;
  };

  const decrypt = function () {
    let res = '';
    const arr = string.split('');
    arr.forEach(elt => {
      const letter = elt.toLowerCase();
      if (alphabet.includes(letter)) {
        let index = (alphabet.indexOf(letter) - shift) % 26;
        index = index < 0 ? 26 + index : index;
        res += elt === elt.toUpperCase() ? alphabet[index].toUpperCase() : alphabet[index];
      } else {
        res += elt;
      }
    });

    return res;
  };

  return { encrypt, decrypt };
}

module.exports = CeasarSipher;