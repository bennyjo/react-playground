'use strict';
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var babelify = require('babelify');
var watchify = require('watchify');
var watch = require('gulp-watch');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

gulp.task('default', ['style', 'scripts-continuous']);

gulp.task('style', function() {
    livereload.listen();

    gulp.src(['app/style.css'])
        .pipe(watch('app/style.css'))
        .pipe(gulp.dest('./public/'))
        .pipe(livereload());
});

gulp.task('scripts-single', function() {
    return buildScript('main.js', false);
});

gulp.task('scripts-continuous', function() {
	livereload.listen();

    return buildScript('main.js', true);
});

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);
    this.emit('end');
}

function buildScript(file, watch) {
    var props = {
        entries: ['./app/' + file],
        debug: true,
        transform: [babelify, reactify]
    };
    
    // watchify() if watch requested, otherwise run browserify() once 
    var bundler = watch ? watchify(browserify(props)) : browserify(props);

    function rebundle() {
        var stream = bundler.bundle();
        return stream.on('error', handleErrors)
            .pipe(source(file))
            .pipe(gulp.dest('./public/'))
            .pipe(livereload());
    }
    
    // listen for an update and run rebundle
    bundler.on('update', function() {
        rebundle();
        gutil.log('Rebundle complete');
    });
    
    // run it once the first time buildScript is called
    return rebundle();
}