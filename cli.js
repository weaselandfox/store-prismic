#!/usr/bin/env node


const meow = require('meow');
const storePrismic = require('.');

const cli = meow(`
  Usage
    $ store-prismic [input]

  Options
    -e --endpoint The Prismic API endpoint
    -o --output The path to the file to save the ouptu to

  Examples
    $ store-prismic
    unicorns & rainbows
    $ store-prismic ponies
    ponies & rainbows
`, {
  alias: {
    e: 'endpoint',
    o: 'output',
  },
});

const endpoint = cli.flags.endpoint;
const output = cli.flags.output;

if (!endpoint) {
  throw new TypeError('Expected a string for the --endpoint option');
}
if (!output) {
  throw new TypeError('Expected a string for the --output option');
}

storePrismic({
  endpoint,
  output,
});
