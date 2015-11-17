///<reference path="../typings/tsd.d.ts"/>

import express = require("express");

// 
class App {
  app: any;
  constructor(message: string) {
    this.app = express();
    
    this.app.get('/', function(req, res) {
      res.send('Hello World, typescript')
    })
  }
  // 
  start() {
    this.app.listen(3000);
  }
}


var app = new App("world");
console.log(app);
app.start();
