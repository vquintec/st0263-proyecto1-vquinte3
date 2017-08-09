var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    baseUrl: "/",
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
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'st0263-proyecto1-vquinte3'
    },
    port: process.env.PORT || 5000,
    db: 'mongodb://vquinte3:lenovo12@ds133670.mlab.com:33670/yt2'
  }
};

module.exports = config[env];
