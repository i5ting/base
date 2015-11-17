///<reference path="../typings/tsd.d.ts"/>

import express = require('express');
import path = require('path');
import favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');

var app = express();

class App {
  app: any;
  constructor() {
    this.app = express();
    
    this.app.get('/', function(req, res) {
      res.send('Hello World, typescript')
    })
  }
  // start server
  start(port: number) {
    this.app.listen(port);
  }
}

export = App;
