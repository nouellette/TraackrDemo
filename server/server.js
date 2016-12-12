"use strict";
const hapi = require('hapi');
const server = new hapi.Server();
const inert = require('inert'); // Static file serving
const routes = require('./routes.js');
const config = require('../config.json');
const pkg = require('../package.json');
const path = require('path');

// Keep track of the server's init state
server.event('app-initialized');
var internals = {
  initialized: false
};

config.server.routes = {
  files: {
    relativeTo: path.join(__dirname, '/../ui')
  }
};

server.connection(config.server);

//Async logging
server.on('log', function (event) {
  console.log(event);
});

server.register([inert], function (err) {
  // Plugin error handling (inert)
  if (err) {
    internals.initialized = err;
    server.emit('app-initialized');
    throw err;
  }
  server.route(routes());

  server.start(function (err) {
    if (err) {
      internals.initialized = err;
      server.emit('app-initialized');
      throw err;
    }

    internals.initialized = true;
    server.emit('app-initialized');
    server.log(['info'], 'Server started with version: ' + pkg.version);
  });
  // Global error handling
}, function (err) {
  internals.initialized = err;
  server.emit('app-initialized');
  server.log(['error'], err);
});

module.exports = function(callback){
  // If the server is already done with init, return it immediately
  if (internals.initialized) {
    return callback(internals.initialized || null, server);
  }

  // Otherwise, we'll just wait until it's reported to have some init state
  server.on('app-initialized', function () {
    callback(internals.initialized || null, server);
  });
};