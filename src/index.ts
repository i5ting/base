///<reference path="../typings/tsd.d.ts"/>

import express = require("express");
import App = require('./App');

var app = new App();
console.log(app);
app.start(3000);
