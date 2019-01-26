const gulp = require('gulp');
const sass = require('gulp-sass');
const optimize = require('gulp-requirejs-optimize');
const terser = require('gulp-terser');

gulp.task('build:css', () => {
    return gulp.src('static-root/demoproject/css/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('static-root/build/demoproject/css'));
});

gulp.task('build:js', () => {
    return gulp.src([
            'static-root/demoproject/js/index.js',
            'static-root/demoproject/js/require-config.js'
        ], {base: 'static-root'})
        .pipe(optimize({
            baseUrl: 'static-root',
            mainConfigFile: 'static-root/demoproject/js/require-config.js',
            optimize: 'none'
        }))
        .pipe(terser())
        .pipe(gulp.dest('static-root/build'));
});

gulp.task('build:vendor', () => {
    return gulp.src('static-root/vendor/**/*')
        .pipe(gulp.dest('static-root/build/vendor'));
});

gulp.task('build', gulp.series('build:css', 'build:js', 'build:vendor'));
