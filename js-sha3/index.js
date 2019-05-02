const { keccak256 } = require('js-sha3');

for (let i = 0; i < 1000000; i++) {
  keccak256('Hello, world!');
}
