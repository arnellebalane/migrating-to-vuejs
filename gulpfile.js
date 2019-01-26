const gulp = require('gulp');
const sass = require('gulp-sass');
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
        ])
        .pipe(terser())
        .pipe(gulp.dest('static-root/build/demoproject/js'));
});

gulp.task('build:vendor', () => {
    return gulp.src('static-root/vendor/**/*')
        .pipe(gulp.dest('static-root/build/vendor'));
});

gulp.task('build', gulp.series('build:css', 'build:js', 'build:vendor'));
