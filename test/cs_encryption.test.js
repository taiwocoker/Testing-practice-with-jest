const CeasarSipher = require('../src/cs_encryption');

const cs1 = CeasarSipher('taiwo', 1);
const cs2 = CeasarSipher('Hello World!', 3);
const cs3 = CeasarSipher('Please, send 3 mens at the gates. Now!', 8);

const cs4 = CeasarSipher('qbusjdjb', 1);
const cs5 = CeasarSipher('Ltti Rtwsnsl!', 5);
const cs6 = CeasarSipher('Pup kag egnyuf ftq bdavqof? Uf ue xmfq mxdqmpk!', 12);

test('encrypt to taiwo should return ubjxp', () => {
  expect(cs1.encrypt()).toBe('ubjxp');
});

test('encrypt to "Hello World!" should return "Khoor Zruog!"', () => {
  expect(cs2.encrypt()).toBe('Khoor Zruog!');
});

test('encrypt to "Please, send 3 mens at the gates. Now!" should return "Xtmiam, amvl 3 umva ib bpm oibma. Vwe!"', () => {
  expect(cs3.encrypt()).toBe('Xtmiam, amvl 3 umva ib bpm oibma. Vwe!');
});

test('decrypt to qbusjdjb should return patricia', () => {
  expect(cs4.decrypt()).toBe('patricia');
});

test('decrypt to "Ltti Rtwsnsl!" should return "Good Morning!"', () => {
  expect(cs5.decrypt()).toBe('Good Morning!');
});

test('decrypt to "Pup kag egnyuf ftq bdavqof? Uf ue xmfq mxdqmpk!" should return "Did you submit the project? It is late already!"', () => {
  expect(cs6.decrypt()).toBe('Did you submit the project? It is late already!');
});
