'use strict';
const gulp         = require('gulp');
const inject       = require('gulp-inject');

// 'gulp inject:head' -- injects style.css file into head.html
gulp.task('inject:head', () =>
  gulp.src('.tmp/src/_includes/head.html')
    .pipe(inject(gulp.src('.tmp/assets/stylesheets/*.css'), {
      transform: function (filepath, file, i, length) {
        return filepath; // return filepath only
      },
      ignorePath: '.tmp',
      addRootSlash: false,
      addPrefix: '{{ site.url }}',
      removeTags: true
    }))
    .pipe(gulp.dest('.tmp/src/_includes'))
);

// 'gulp inject:footer' -- injects index.js file into scripts.html
gulp.task('inject:footer', () =>
  gulp.src('.tmp/src/_includes/scripts.html')
    .pipe(inject(gulp.src('.tmp/assets/javascript/*.js'), {
      ignorePath: '.tmp',
      addRootSlash: false,
      addPrefix: '{{ site.url }}',
      removeTags: true
    }))
    .pipe(gulp.dest('.tmp/src/_includes'))
);
