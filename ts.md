
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