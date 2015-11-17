
# ts

## book

https://basarat.gitbooks.io/typescript/

## load from d.ts

Now we can /// <reference> node.d.ts and then load the modules using e.g. import url = require('url');.


```
///<reference path="node.d.ts"/>
import url = require("url");
```

本例中

```
///<reference path="../typings/node/node.d.ts"/>
import * as net from "net";
```
## load best practice

```
tsd install body-parser --save
```

写入到typings/tsd.d.ts

```
///<reference path="../typings/tsd.d.ts"/>
```

## import other module

```
import express = require("express");
import * as net from "net";
```

## gulp

```
var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

var tsProject = ts.createProject('tsconfig.json');


gulp.task('scripts', function() {
    var tsResult = gulp.src('src/*.ts')
                    .pipe(ts(tsProject));

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
        tsResult.dts.pipe(gulp.dest('release/definitions')),
        tsResult.js.pipe(gulp.dest('release/js'))
    ]);
});

gulp.task('watch', ['scripts'], function() {
    gulp.watch('src/*.ts', ['scripts']);
});


gulp.task('default', ['watch'], function() {
  console.log('default...');
});
```

## 异常处理

express里

```
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
```

但是ECMAScript APIs里没有status扩展的，定义如下

```
interface Error {
    name: string;
    message: string;
}
```

此时需要自己扩展

```
class ReqError extends Error {
  status: number;
}
```

用起来如下

```
this.app.use(function(req, res, next) {
  var err = new ReqError('Not Found');
  err.status = 404;
  next(err);
});
```

## 智能编译

比如

```
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
```

但是我没有任何引用，那么它是不会编译的

比如加一行

```
console.log(logger);
```

上面的第一行就会被编译。

```
var logger = require('morgan');
console.log(logger);
```

在ast层面做了处理，挺好用的。

