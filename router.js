
const Promise = require('bluebird')
const express = require('express')

module.exports = function(app) {

  app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  })
  
};
