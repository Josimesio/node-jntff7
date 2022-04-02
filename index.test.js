const parole = require('./index');

var tabuleiro = [
  ['E', 'A', 'R', 'A'],
  ['N', 'L', 'E', 'C'],
  ['I', 'A', 'I', 'S'],
  ['B', 'Y', 'O', 'R']
];

test('Parole valido', () => {
  expect(parole(tabuleiro, 'C')).toBe(true);
  expect(parole(tabuleiro, 'EAR')).toBe(true);
  expect(parole(tabuleiro, 'BAILER')).toBe(true);
  expect(parole(tabuleiro, 'RSCAREIOYBAILNEA')).toBe(true);
});

test('Parole invalido', () => {
  expect(parole(tabuleiro, 'EARS')).toBe(false);
  expect(parole(tabuleiro, 'CEREAL')).toBe(false);
  expect(parole(tabuleiro, 'ROBES')).toBe(false);
  expect(parole(tabuleiro, 'BAKER')).toBe(false);
  expect(parole(tabuleiro, 'CARS')).toBe(false);
});
