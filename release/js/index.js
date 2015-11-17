///<reference path="../typings/tsd.d.ts"/>
var express = require("express");
// 
var App = (function () {
    function App(message) {
        this.app = express();
        this.app.get('/', function (req, res) {
            res.send('Hello World, typescript');
        });
    }
    // 
    App.prototype.start = function () {
        this.app.listen(3000);
    };
    return App;
})();
var app = new App("world");
console.log(app);
app.start();
