///<reference path="../typings/tsd.d.ts"/>
var express = require('express');
var app = express();
var App = (function () {
    function App() {
        this.app = express();
        this.app.get('/', function (req, res) {
            res.send('Hello World, typescript');
        });
    }
    // start server
    App.prototype.start = function (port) {
        this.app.listen(port);
    };
    return App;
})();
module.exports = App;
