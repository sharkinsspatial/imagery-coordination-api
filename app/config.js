'use strict';
const _ = require('lodash');

// Prod settings act as base.
var config = require('./config/production');

// Staging overrides
if (process.env.DS_ENV === 'staging') {
  _.merge(config, require('./config/staging'));
}

// local config overrides everything when present.
try {
  var localConfig = require('./config/local');
  _.merge(config, localConfig);
} catch (e) {
  // Local file is not mandatory.
}

// Overrides by ENV variables:
config.debug = process.env.DEBUG || config.debug;
config.connection.port = process.env.PORT || config.connection.port;
config.connection.host = process.env.HOST || config.connection.host;
config.mongo.uri = process.env.MONGODB_URI || config.mongo.uri;
config.mongo.testUri = process.env.MONGODB_TESTURI || config.mongo.testUri;
config.auth0.secret = process.env.AUTH0_SECRET || config.auth0.secret;
config.auth0.clientId = process.env.AUTH0_CLIENT_ID || config.auth0.clientId;
config.auth0.api = process.env.AUTH0_API || config.auth0.api;

if (!config.auth0.secret || !config.auth0.clientId) {
  throw new Error('Missing auth0 credentials');
}

config.baseDir = __dirname;

module.exports = config;
