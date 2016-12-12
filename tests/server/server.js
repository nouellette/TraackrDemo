"use strict";
const chai = require('chai');
const expect = chai.expect;

describe('serving routes', function () {
  var server;

  before(function (done) {
    server = require('../../server/server')(function(err, serverInit){
      server = serverInit;
      done();
    });
  });

  it('/index.html should be valid', function (done) {
    var servePage = {
      method: 'GET',
      url: '/index.html'
    };
    server.inject(servePage, function (reply) {
      expect(reply.statusCode).to.equal(200);
      done();
    });
  });

  after(function (done) {
    server.stop(function(){
      done();
    });
  });
});