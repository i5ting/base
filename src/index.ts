///<reference path="../typings/tsd.d.ts"/>

import express = require("express");
import * as net from "net";

var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)