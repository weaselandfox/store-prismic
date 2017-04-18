# store-prismic [![Build Status](https://travis-ci.org/puhastudio/store-prismic.svg?branch=master)](https://travis-ci.org/puhastudio/store-prismic)

> Store the output of a Prismic.io repo to disk.


## Install

```
$ npm install --save store-prismic
```


## Usage

```js
const storePrismic = require('store-prismic');

storePrismic({
  endpoint: 'https://micro.cdn.prismic.io/api',
  output: './data.json',
});
```


## API

### storePrismic(options)

#### options

##### endpoint

Type: `string`<br>
Default: `-`

##### output

Type: `string`<br>
Default: `-`



## CLI

```
$ npm install --global store-prismic
```

```
$ store-prismic --help

  Usage
    store-prismic options

  Options
    -e --endpoint The Prismic API endpoint
    -o --output The path to the file to save the ouput to

  Example
    $ store-prismic -e https://micro.cdn.prismic.io/api -o data.json
```


## License

MIT © [PUHA](https://github.com/puhastudio)
