///<reference path="../typings/tsd.d.ts"/>

import express = require('express');
import path = require('path');
// import favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');

console.log(logger);


var app = express();

class ReqError extends Error {
  status: number;
}

class App {
  app: any;
  app2: any;
  constructor() {
    this.app = express();

    this.setView('jade');
    this.mountMiddleWare();
    this.setNotFound();
    this.setPublicFolder(path.join(__dirname, 'public'));

    this.app.get('/', function(req, res) {
      res.send('Hello World, typescript')
    })


  }
  // start server
  start(port: number) {
    this.app.listen(port);
  }

  setView(view: string) {
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', view);
  }

  setPublicFolder(folder: string) {
    this.app.use(express.static(folder));
  }

  mountMiddleWare() {
    this.app.use(logger('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser());
  }

  setNotFound() {
    this.app.use(function(req, res, next) {
      var err = new ReqError('Not Found');
      err.status = 404;
      next(err);
    });
  }
}

export = App;
