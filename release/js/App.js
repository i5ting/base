///<reference path="../typings/tsd.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var express = require('express');
var path = require('path');
// import favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
console.log(logger);
var app = express();
var ReqError = (function (_super) {
    __extends(ReqError, _super);
    function ReqError() {
        _super.apply(this, arguments);
    }
    return ReqError;
})(Error);
var App = (function () {
    function App() {
        this.app = express();
        this.setView('jade');
        this.mountMiddleWare();
        this.setNotFound();
        this.setPublicFolder(path.join(__dirname, 'public'));
        this.app.get('/', function (req, res) {
            res.send('Hello World, typescript');
        });
    }
    // start server
    App.prototype.start = function (port) {
        this.app.listen(port);
    };
    App.prototype.setView = function (view) {
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', view);
    };
    App.prototype.setPublicFolder = function (folder) {
        this.app.use(express.static(folder));
    };
    App.prototype.mountMiddleWare = function () {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser());
    };
    App.prototype.setNotFound = function () {
        this.app.use(function (req, res, next) {
            var err = new ReqError('Not Found');
            err.status = 404;
            next(err);
        });
    };
    return App;
})();
module.exports = App;
