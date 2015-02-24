
//Load Plugins
var gulp = require('gulp'), 
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pako = require('gulp-pako'),
    critical = require('critical'),
    rename = require('gulp-rename');

//styles task to minify the css
gulp.task('styles', function() {
  return gulp.src('./css/*.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'));
});

//scripts task to minify/uglify the javascript
gulp.task('scripts', function() {
  return gulp.src('.js/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

//images task for image compression
gulp.task('images', function() {
  return gulp.src('./img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./img'));
});
  

//gzip compression of css
gulp.task('gzip', function() {
  gulp.src('.css/*.min.css')
    .pipe(pako.gzip())
    .pipe(gulp.dest("./css"));
});

//inlining minified css in index-critical.html
gulp.task('critical', function () {
    critical.generateInline({
        base: './',
        src: 'index.html',
        css: ['./css/style.css'],
        styleTarget: 'css/style.css',
        htmlTarget: 'index-critical.html',
        width: 320,
        height: 480,
        minify: true
    });
});

