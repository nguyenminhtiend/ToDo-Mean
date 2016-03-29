/**
 * Created by tiennguyenm on 3/15/2016.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var concat = require('gulp-concat');
//var jasmine = require('gulp-jasmine');
//var reporters = require('jasmine-reporters');

var paths = {
    html: './public/index.html',
    js: './public/js/**/*.js',
    js_libs: [
        './public/libs/angular/angular.js',
        './public/libs/angular-ui-router/release/angular-ui-router.js'
    ],
    css: [
        './public/css/style.css',
        './public/libs/bootstrap/dist/css/bootstrap.min.css'
    ],
    less: './public/less/*.less',
    mainJs: './public/js/app.js',
    public: './public',
    build: './public/build',
    test: './public/test/*.js'
};

gulp.task('start', function () {
    nodemon({
        script: 'server.js',
        watch: 'app',
        ignore: [
            'public/',
            'node_modules/'
        ],
        env: {
            NODE_ENV: 'development',
            PORT: 8000
        }
    }).on('restart', function () {
        console.log('restarted!');
    });
});

gulp.task('js', function () {
    browserify(paths.mainJs)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.build + '/js'));
});

gulp.task('js-libs', function () {
    gulp.src(paths.js_libs)
        .pipe(concat('app.libs.js'))
        .pipe(gulp.dest(paths.build + '/js'));
});

gulp.task('less', function () {
    gulp.src(paths.less)
        .pipe(less())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('css', function () {
    gulp.src(paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(paths.build + '/css'));
});

gulp.task('watch', function () {
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.css, ['css']);
});

//gulp.task('test', function () {
//    gulp.src(paths.test)
//        .pipe(jasmine({
//            reporter: new reporters.JUnitXmlReporter()
//        }));
//});

gulp.task('default', ['less', 'css', 'js-libs','js', 'start', 'watch']);