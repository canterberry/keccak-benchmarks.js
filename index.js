const { Suite } = require('benchmark');

const { keccak256: JSSHA3 } = require('js-sha3');
const { Keccak: SHA3201 } = require('sha3');
const { Keccak: SHA3Next } = require('sha3-next');

const suite = new Suite();

suite.add('js-sha3', () => JSSHA3('Hello, world!'));
suite.add('sha3@2.0.1', () => new SHA3201(256).update('Hello, world!').digest());
suite.add('sha3@next', () => new SHA3Next(256).update('Hello, world!').digest());

suite.on('complete', function() {
  for (let i = 0; i < this.length; i++) {
    const { [i]: benchmark } = this;
    console.log(benchmark.name, benchmark.stats.mean);
  }
});

suite.run({ async: true });
