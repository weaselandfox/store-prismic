
const api = require('./lib/api');
const utils = require('./lib/utils');


module.exports = (options) => {
  if (typeof options !== 'object') {
    throw new TypeError('Expected an object for the options argument');
  }

  const endpoint = options.endpoint;
  const output = options.output;

  return api.getAll(endpoint).then((data) => {
    utils.writeDataToFile(data, output);
  });
};
