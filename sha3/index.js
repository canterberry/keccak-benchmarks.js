const { Keccak } = require('sha3');

for (let i = 0; i < 10000; i++) {
  const keccak = new Keccak(256);
  keccak.update('Hello, world!');
  keccak.digest();
}
