const Prismic = require('prismic.io');

module.exports = {
  getAll(apiEndpoint) {
    return Prismic.api(apiEndpoint).then(api => api.query());
  },
};
