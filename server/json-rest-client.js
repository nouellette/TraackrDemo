"use strict";
const rest = require('rest');
const mime = require('rest/interceptor/mime');
const errorCode = require('rest/interceptor/errorCode');
const defaultRequest = require('rest/interceptor/defaultRequest');

module.exports = rest
    .wrap(mime, { mime: 'application/json' })
    .wrap(errorCode)
    .wrap(defaultRequest);