import test from 'ava';
import fs from 'fs';
import sinon from 'sinon';
import rimraf from 'rimraf';
import storePrismic from '.';
import api from './lib/api';

const options = {
  endpoint: 'https://micro.cdn.prismic.io/api',
  output: './test-data.json',
};

let getAll;

test.beforeEach(() => {
  getAll = sinon.spy(api, 'getAll');
});

test.afterEach(() => {
  getAll.restore();
  if (fs.existsSync(options.output)) {
    rimraf.sync(options.output);
  }
});

test('It should demand an options parameter of type object', (t) => {
  const err = t.throws(() => storePrismic(), TypeError);
  t.is(err.message, 'Expected an object for the options argument');
});

test.serial('It should call api.getAll with the provided endpoint as an argument', async (t) => {
  await storePrismic(options);
  t.is(getAll.callCount, 1);
  t.true(getAll.calledWith(options.endpoint));
});

test.serial('It should return a promise', async (t) => {
  const returnValue = storePrismic(options);
  t.true(returnValue instanceof Promise);
});
