/**
 * Created by tiennguyenm on 3/15/2016.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var concat = require('gulp-concat');

var paths = {
    html: './public/index.html',
    js: './src/**/*.js',
    css: [
        './public/css/style.css',
        './public/libs/bootstrap/dist/css/bootstrap.min.css'
    ],
    less: './public/less/*.less',
    mainJs: './public/js/app.js',
    public: './public'
};

gulp.task('start', function () {
    nodemon({
        script: 'server.js'
        , env: {
            NODE_ENV: 'development',
            PORT: 8000
        }
    }).on('restart', function () {
        console.log('restarted!')
    });
});

gulp.task('js', function () {
    browserify(paths.mainJs)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/build/js'));
});

gulp.task('less', function() {
    gulp.src(paths.less)
        .pipe(less())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('css', function () {
    gulp.src(paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(paths.public + '/css'));
});

gulp.task('default', ['less', 'css', 'js','start']);