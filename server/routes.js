"use strict";
const fs = require('fs');
const boom = require('boom');
const client = require('./json-rest-client.js');
const config = require('../config.json');

module.exports = function () {
  return [
    {
      method: 'GET',
      path: '/{path*}',
      config: {
        description: 'Serve up page'
      },
      handler: function (request, reply) {
        if (request.path === '/index.html' || request.path.indexOf('.') === -1) {
          reply.file('index.html');
        }
        else {
          reply.file(request.path.slice(1)); // Remove the beginning slash to prevent hacking attempts
        }
      }
    },
    {
      method: 'POST',
      path: '/api/search/influencers',
      config: {
        description: 'Query Traackr api - influencers'
      },
      handler: function (request, reply) {
        var options = {
          method: 'GET',
          path: config.searchApi.influencers.url + request.payload.keywords + '&page=' + request.payload.page
        };

        client(options).then(function (result) {
          return reply(result.entity);
        }).catch(function (err) {
          return reply(boom.create(err.status.code, err.entity, err));
        });
      }
    }];
};