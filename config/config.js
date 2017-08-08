var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    baseUrl: "/vquinte3/",
    root: rootPath,
    app: {
      name: 'st0263-proyecto1-vquinte3'
    },
    port: process.env.PORT || 3003,
    db: 'mongodb://localhost/st0263-proyecto1-vquinte3-development'
  },

  test: {
    baseUrl: "/vquinte3/",
    root: rootPath,
    app: {
      name: 'st0263-proyecto1-vquinte3'
    },
    port: process.env.PORT || 3003,
    db: 'mongodb://localhost/st0263-proyecto1-vquinte3-test'
  },

  production: {
    baseUrl: "/vquinte3/",
    root: rootPath,
    app: {
      name: 'st0263-proyecto1-vquinte3'
    },
    port: process.env.PORT || 3003,
    db: 'mongodb://localhost/st0263-proyecto1-vquinte3-production'
  }
};

module.exports = config[env];
