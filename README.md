# Keccak Benchmarks

This repo contains benchmarks for JavaScript implementations and bindings for the Keccak hash algorithm.

## Usage

First, install dependencies:

```
yarn install
```

Then, to run a benchmark for `sha3`:

```
time node sha3
```

To benchmark `js-sha3`:

```
time node js-sha3
```

For best results, run this several times to get many samples and weed out the outliers.
